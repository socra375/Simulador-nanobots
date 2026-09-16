// Mapa de material (Fase 42).
//
// LA REGLA QUE ESTE ARCHIVO EXISTE PARA HACER CUMPLIR:
//
//     color / material  =  POSICIÓN + REGIÓN
//     color / material  ≠  OLA
//
// Hasta la Fase 41 el color de un agente salía de la ola a la que
// pertenecía, y las olas eran muestreos independientes de la silueta
// entera: rojo y dorado quedaban intercalados agente por agente sobre todo
// el objeto. El mapa de material invierte la dependencia — cada destino
// sabe DE ANTEMANO qué material le toca, y la ola pasa a decidir sólo
// CUÁNDO se activa (ver material-animation.ts).
//
// DOS PROCEDENCIAS, Y LA DIFERENCIA SE DICE, NO SE DISIMULA:
//
//   OBSERVED — la forma trae color POR PUNTO: la reconstrucción desde
//              imagen (cada punto lleva el píxel del que salió) o una
//              forma con partes de color propio (la cabeza: piel, cabello,
//              ojos, labios son generadores distintos). El color final de
//              cada agente es EL SUYO, con la fidelidad de la foto.
//
//   FALLBACK — la forma no trae color por punto (las 17 figuras
//              predefinidas). De la foto sólo se conoce la PALETA y sus
//              proporciones, no dónde va cada color. El reparto espacial
//              en bandas es una decisión de presentación, no una medición,
//              y el mapa lo declara para que la UI pueda decirlo. Acá el
//              color final de un agente es el de SU REGIÓN, no uno propio:
//              es lo que evita que un agente suelto en el borde de una
//              banda quede como una mota de otro color (spec §7).
//
// Lo que este módulo NO hace: no toca agentes, no anima, no renderiza y no
// tiene reloj. Es una función pura de (puntos, colores, paleta) a un mapa,
// y por eso se puede testear entera sin DOM ni three.js.

import { DEFAULT_DOMINANT_COLOR, MAX_COLOR_CLUSTERS, mergeColorBuckets, type ColorBucket, type ColorCluster } from "../image-color";
import { labelRegions, NO_REGION, regionResFor } from "./material-regions";

export const MATERIAL_SOURCE = {
  /** El color sale de la posición real (foto punto a punto, o partes propias). */
  OBSERVED: 0,
  /** Sólo se conocía la paleta: el reparto espacial es una aproximación. */
  FALLBACK: 1,
} as const;

export type MaterialSource = (typeof MATERIAL_SOURCE)[keyof typeof MATERIAL_SOURCE];

export const MATERIAL_SOURCE_LABELS: Record<MaterialSource, string> = {
  [MATERIAL_SOURCE.OBSERVED]: "color por posición (de la imagen)",
  [MATERIAL_SOURCE.FALLBACK]: "paleta repartida en bandas (aproximado)",
};

/**
 * Cuántas TANDAS de activación hay como máximo.
 *
 * Las regiones pueden ser muchas (un objeto con manchas sueltas da
 * decenas); el tiempo de la animación no puede crecer con ellas o formar
 * una figura tardaría un minuto. Las regiones conservan su identidad y su
 * material: lo que se acota es en cuántos momentos distintos se encienden.
 * Varias regiones pueden compartir tanda — se encienden juntas, cada una
 * con SU color, que es distinto de mezclarlas.
 */
export const MAX_ACTIVATION_SLOTS = 6;

/**
 * Por debajo de esta fracción de los agentes de material, una región se
 * considera una esquirla y se absorbe en la región más cercana del MISMO
 * material. Sin esto, el ruido de la foto genera decenas de motas de tres
 * agentes, cada una reclamando su propia tanda de activación.
 */
export const SMALL_REGION_FRACTION = 0.01;

export interface MaterialRegion {
  readonly id: number;
  /** Índice en `palette`. */
  readonly materialId: number;
  /** Color representativo de la región, 0xRRGGBB. */
  readonly color: number;
  readonly count: number;
  readonly centroid: readonly [number, number, number];
  /**
   * Desde dónde se propaga la transformación dentro de la región: el
   * agente más cercano al origen de propagación (el núcleo). Así el
   * material avanza desde donde vienen los bots hacia el extremo opuesto,
   * en vez de aparecer en un orden arbitrario.
   */
  readonly seed: readonly [number, number, number];
  /** Tanda de activación (0 = primera). */
  readonly slot: number;
}

export interface MaterialMap {
  /** Agentes cubiertos por el mapa (todos, sean de material o no). */
  readonly count: number;
  /** count*3 bytes RGB. Sólo significativo donde `region[i] !== NO_REGION`. */
  readonly color: Uint8Array;
  /** count: id de región, o NO_REGION si el agente no lleva material. */
  readonly region: Int16Array;
  /** count: 0..1, distancia normalizada al seed de su región. */
  readonly spread: Float32Array;
  readonly regions: readonly MaterialRegion[];
  /** Colores de material, de mayor a menor peso. */
  readonly palette: readonly number[];
  /** Tandas de activación realmente usadas (>= 1 si hay regiones). */
  readonly slots: number;
  readonly source: MaterialSource;
  /** Agentes con material. */
  readonly materialCount: number;
}

export interface MaterialMapInput {
  /** count*3, en coordenadas de mundo (ya trasladadas a `center`). */
  readonly points: Float32Array;
  readonly count: number;
  /** Por agente: 1 si es Material Bot. */
  readonly isMaterial: Uint8Array;
  /** count*3 bytes RGB por punto, o null si la forma no lo trae. */
  readonly pointColors: Uint8Array | null;
  /** Paleta de la foto, usada sólo cuando no hay color por punto. */
  readonly clusters: readonly ColorCluster[];
  readonly center: readonly [number, number, number];
  /** Desde dónde llegan los bots: define el orden de propagación. */
  readonly propagationOrigin: readonly [number, number, number];
  readonly maxColors?: number;
  readonly maxSlots?: number;
  readonly res?: number;
}

const EMPTY_MAP: MaterialMap = {
  count: 0,
  color: new Uint8Array(0),
  region: new Int16Array(0),
  spread: new Float32Array(0),
  regions: [],
  palette: [DEFAULT_DOMINANT_COLOR],
  slots: 0,
  source: MATERIAL_SOURCE.FALLBACK,
  materialCount: 0,
};

const QUANT_LEVELS = 8;
const QUANT_STEP = 256 / QUANT_LEVELS;

/**
 * Paleta a partir de los colores de la NUBE, no de la foto.
 *
 * POR QUÉ NO SE REUSA `pickColorClusters`: esa función descarta los
 * píxeles casi blancos, casi negros y transparentes, porque en una foto
 * eso es el fondo. Acá los puntos ya pasaron por la segmentación y todos
 * son objeto: un negro es la rueda y un blanco es la carrocería, no fondo.
 * Descartarlos dejaría sin material justo a las partes más contrastadas.
 * Lo que sí se comparte es el merge por proximidad (`mergeColorBuckets`),
 * que es la parte que de verdad es la misma pregunta.
 */
export function paletteFromPointColors(
  colors: Uint8Array,
  count: number,
  isMaterial: Uint8Array,
  maxColors: number = MAX_COLOR_CLUSTERS,
): ColorCluster[] {
  const bucketCount = QUANT_LEVELS * QUANT_LEVELS * QUANT_LEVELS;
  const counts = new Uint32Array(bucketCount);
  const sumR = new Float64Array(bucketCount);
  const sumG = new Float64Array(bucketCount);
  const sumB = new Float64Array(bucketCount);

  for (let i = 0; i < count; i++) {
    if (!isMaterial[i]) continue;
    const r = colors[i * 3 + 0];
    const g = colors[i * 3 + 1];
    const b = colors[i * 3 + 2];
    const bucketR = Math.min(QUANT_LEVELS - 1, Math.floor(r / QUANT_STEP));
    const bucketG = Math.min(QUANT_LEVELS - 1, Math.floor(g / QUANT_STEP));
    const bucketB = Math.min(QUANT_LEVELS - 1, Math.floor(b / QUANT_STEP));
    const bucket = (bucketR * QUANT_LEVELS + bucketG) * QUANT_LEVELS + bucketB;
    counts[bucket]++;
    sumR[bucket] += r;
    sumG[bucket] += g;
    sumB[bucket] += b;
  }

  const buckets: ColorBucket[] = [];
  for (let i = 0; i < bucketCount; i++) {
    if (counts[i] === 0) continue;
    buckets.push({ count: counts[i], r: sumR[i] / counts[i], g: sumG[i] / counts[i], b: sumB[i] / counts[i] });
  }
  return mergeColorBuckets(buckets, maxColors);
}

function nearestPalette(r: number, g: number, b: number, palette: readonly number[]): number {
  let best = 0;
  let bestDist = Infinity;
  for (let p = 0; p < palette.length; p++) {
    const pr = (palette[p] >> 16) & 0xff;
    const pg = (palette[p] >> 8) & 0xff;
    const pb = palette[p] & 0xff;
    const d = (r - pr) * (r - pr) + (g - pg) * (g - pg) + (b - pb) * (b - pb);
    if (d < bestDist) {
      bestDist = d;
      best = p;
    }
  }
  return best;
}

const BAND_BINS = 256;

/**
 * Reparto en bandas para el caso FALLBACK.
 *
 * Se elige el eje de mayor extensión de la figura y se corta en bandas
 * contiguas cuyos tamaños siguen los pesos de la paleta. El corte sale de
 * un histograma de 256 celdas sobre ese eje, no de ordenar los agentes:
 * mismo resultado y O(n) en vez de O(n log n) sobre decenas de miles de
 * elementos.
 *
 * NO es aleatorio y NO depende del orden de creación de los agentes (dos
 * cosas que la spec §12 prohíbe explícitamente): depende sólo de la
 * coordenada del agente sobre ese eje.
 */
export function assignBands(
  points: Float32Array,
  count: number,
  isMaterial: Uint8Array,
  weights: readonly number[],
  out: Int16Array,
): void {
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  let members = 0;
  for (let i = 0; i < count; i++) {
    if (!isMaterial[i]) continue;
    members++;
    const x = points[i * 3 + 0], y = points[i * 3 + 1], z = points[i * 3 + 2];
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
  }
  if (members === 0) return;

  const spanX = maxX - minX, spanY = maxY - minY, spanZ = maxZ - minZ;
  // El eje más largo: las bandas se leen mejor a lo ancho de la figura que
  // a lo corto. En un empate gana Y, que es el eje vertical y el que casi
  // siempre da el reparto más legible (arriba/abajo).
  const axis = spanY >= spanX && spanY >= spanZ ? 1 : spanX >= spanZ ? 0 : 2;
  const lo = axis === 0 ? minX : axis === 1 ? minY : minZ;
  const span = (axis === 0 ? spanX : axis === 1 ? spanY : spanZ) || 1;

  const hist = new Int32Array(BAND_BINS);
  const binOf = new Int32Array(count);
  for (let i = 0; i < count; i++) {
    if (!isMaterial[i]) continue;
    const v = points[i * 3 + axis];
    const bin = Math.min(BAND_BINS - 1, Math.max(0, Math.floor(((v - lo) / span) * BAND_BINS)));
    binOf[i] = bin;
    hist[bin]++;
  }

  // Bandas acumuladas: la banda b termina cuando el acumulado alcanza la
  // fracción de peso que le toca.
  const total = weights.reduce((s, w) => s + w, 0) || 1;
  const bandOfBin = new Int16Array(BAND_BINS);
  let acc = 0;
  let band = 0;
  let target = (weights[0] / total) * members;
  for (let bin = 0; bin < BAND_BINS; bin++) {
    // Se corta en el bin que deja el acumulado MÁS CERCA del objetivo, no
    // en el primero que lo pasa. Con una nube de coordenadas repetidas
    // (una figura con caras planas, por ejemplo) un solo bin puede valer
    // el 8% del total, y cortar siempre por exceso hacía que la primera
    // banda se comiera sistemáticamente de más.
    while (band < weights.length - 1 && Math.abs(acc + hist[bin] - target) > Math.abs(acc - target)) {
      band++;
      target += (weights[band] / total) * members;
    }
    bandOfBin[bin] = band;
    acc += hist[bin];
  }

  for (let i = 0; i < count; i++) {
    if (!isMaterial[i]) continue;
    out[i] = bandOfBin[binOf[i]];
  }
}

/**
 * Arma el mapa de material de una formación.
 *
 * Determinista: con los mismos puntos y los mismos colores devuelve
 * exactamente el mismo mapa. No hay `Math.random` en ninguna de las
 * etapas, ni nada que dependa del orden de creación de los agentes salvo
 * el desempate documentado en `labelRegions`.
 */
export function buildMaterialMap(input: MaterialMapInput): MaterialMap {
  const { points, count, isMaterial, pointColors, clusters, center, propagationOrigin } = input;
  const maxColors = input.maxColors ?? MAX_COLOR_CLUSTERS;
  const maxSlots = input.maxSlots ?? MAX_ACTIVATION_SLOTS;

  let materialCount = 0;
  for (let i = 0; i < count; i++) if (isMaterial[i]) materialCount++;
  if (count === 0 || materialCount === 0) return { ...EMPTY_MAP, count };

  const observed = pointColors !== null;
  const source: MaterialSource = observed ? MATERIAL_SOURCE.OBSERVED : MATERIAL_SOURCE.FALLBACK;

  const paletteClusters = observed
    ? paletteFromPointColors(pointColors, count, isMaterial, maxColors)
    : clusters.length > 0
      ? [...clusters].slice(0, maxColors)
      : [{ color: DEFAULT_DOMINANT_COLOR, weight: 1 }];
  const palette = paletteClusters.map((c) => c.color);

  // 1. Material por agente.
  const material = new Int16Array(count).fill(-1);
  if (observed) {
    for (let i = 0; i < count; i++) {
      if (!isMaterial[i]) continue;
      material[i] = nearestPalette(pointColors[i * 3], pointColors[i * 3 + 1], pointColors[i * 3 + 2], palette);
    }
  } else {
    assignBands(points, count, isMaterial, paletteClusters.map((c) => c.weight), material);
  }

  // 2. Regiones contiguas de material.
  const labeling = labelRegions({
    points,
    count,
    member: isMaterial,
    material,
    materialCount: palette.length,
    center,
    res: input.res ?? regionResFor(materialCount),
  });

  // 3. Absorber esquirlas en la región más cercana del mismo material, y
  //    reindexar para que los ids queden contiguos.
  const remap = mergeSmallRegions(points, count, labeling, materialCount);
  const region = new Int16Array(count).fill(NO_REGION);
  for (let i = 0; i < count; i++) {
    const r = labeling.region[i];
    region[i] = r === NO_REGION ? NO_REGION : remap.map[r];
  }
  const regionCount = remap.count;

  // 4. Centroides y conteos.
  const sums = new Float64Array(regionCount * 3);
  const counts = new Int32Array(regionCount);
  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) continue;
    sums[r * 3 + 0] += points[i * 3 + 0];
    sums[r * 3 + 1] += points[i * 3 + 1];
    sums[r * 3 + 2] += points[i * 3 + 2];
    counts[r]++;
  }

  // 5. Huérfanos: agentes de material que cayeron fuera del cubo de la
  //    grilla (el jitter de los generadores puede sacar alguno). Se
  //    enganchan a la región de centroide más cercano en vez de quedar sin
  //    material — un target huérfano es un agujero visible en la figura.
  attachOrphans(points, count, isMaterial, region, sums, counts, regionCount);

  // 6. Semillas de propagación y spread por agente.
  const seeds = new Float64Array(regionCount * 3);
  const seedDist = new Float64Array(regionCount).fill(Infinity);
  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) continue;
    const dx = points[i * 3 + 0] - propagationOrigin[0];
    const dy = points[i * 3 + 1] - propagationOrigin[1];
    const dz = points[i * 3 + 2] - propagationOrigin[2];
    const d = dx * dx + dy * dy + dz * dz;
    if (d < seedDist[r]) {
      seedDist[r] = d;
      seeds[r * 3 + 0] = points[i * 3 + 0];
      seeds[r * 3 + 1] = points[i * 3 + 1];
      seeds[r * 3 + 2] = points[i * 3 + 2];
    }
  }

  const spread = new Float32Array(count);
  const maxSpread = new Float64Array(regionCount);
  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) continue;
    const dx = points[i * 3 + 0] - seeds[r * 3 + 0];
    const dy = points[i * 3 + 1] - seeds[r * 3 + 1];
    const dz = points[i * 3 + 2] - seeds[r * 3 + 2];
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    spread[i] = d;
    if (d > maxSpread[r]) maxSpread[r] = d;
  }
  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) continue;
    spread[i] = maxSpread[r] > 0 ? spread[i] / maxSpread[r] : 0;
  }

  // 7. Orden y tandas de activación: las regiones cuyo centroide está más
  //    cerca del núcleo se encienden primero, así la transformación barre
  //    la superficie desde donde llegan los bots.
  const order = Array.from({ length: regionCount }, (_, r) => r).sort((a, b) => {
    const da = centroidDist(sums, counts, a, propagationOrigin);
    const db = centroidDist(sums, counts, b, propagationOrigin);
    // Desempate por id para que el orden sea total y determinista.
    return da === db ? a - b : da - db;
  });
  const slots = Math.max(1, Math.min(maxSlots, regionCount));
  const slotOf = new Int16Array(regionCount);
  for (let rank = 0; rank < regionCount; rank++) {
    slotOf[order[rank]] = Math.min(slots - 1, Math.floor((rank * slots) / regionCount));
  }

  // 8. Color final por agente.
  const color = new Uint8Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) continue;
    if (observed) {
      // Su propio color: es lo que vio la foto en esa posición.
      color[i * 3 + 0] = pointColors[i * 3 + 0];
      color[i * 3 + 1] = pointColors[i * 3 + 1];
      color[i * 3 + 2] = pointColors[i * 3 + 2];
    } else {
      // El de su región: la banda es la única información espacial que hay,
      // y así un agente en el borde no queda como mota de otro color.
      const hex = palette[remap.material[r]] ?? DEFAULT_DOMINANT_COLOR;
      color[i * 3 + 0] = (hex >> 16) & 0xff;
      color[i * 3 + 1] = (hex >> 8) & 0xff;
      color[i * 3 + 2] = hex & 0xff;
    }
  }

  const regions: MaterialRegion[] = [];
  for (let r = 0; r < regionCount; r++) {
    const n = counts[r] || 1;
    regions.push({
      id: r,
      materialId: remap.material[r],
      color: palette[remap.material[r]] ?? DEFAULT_DOMINANT_COLOR,
      count: counts[r],
      centroid: [sums[r * 3] / n, sums[r * 3 + 1] / n, sums[r * 3 + 2] / n],
      seed: [seeds[r * 3], seeds[r * 3 + 1], seeds[r * 3 + 2]],
      slot: slotOf[r],
    });
  }

  return { count, color, region, spread, regions, palette, slots, source, materialCount };
}

function centroidDist(
  sums: Float64Array,
  counts: Int32Array,
  r: number,
  origin: readonly [number, number, number],
): number {
  const n = counts[r] || 1;
  const dx = sums[r * 3 + 0] / n - origin[0];
  const dy = sums[r * 3 + 1] / n - origin[1];
  const dz = sums[r * 3 + 2] / n - origin[2];
  return dx * dx + dy * dy + dz * dz;
}

interface RegionRemap {
  /** Por región original: su región final. */
  readonly map: Int16Array;
  /** Por región final: su material. */
  readonly material: Int16Array;
  readonly count: number;
}

/**
 * Absorbe las regiones más chicas que `SMALL_REGION_FRACTION` en la región
 * grande más cercana del MISMO material, y reindexa.
 *
 * Si un material entero quedó en esquirlas (todas por debajo del umbral),
 * se conserva la mayor de ese material y las demás se absorben en ella:
 * un material que aparece sólo salpicado igual merece su región, y
 * absorberlo en otro material le cambiaría el color, que es justo lo que
 * este sistema viene a impedir.
 */
function mergeSmallRegions(
  points: Float32Array,
  count: number,
  labeling: { region: Int16Array; regionCount: number; sizes: Int32Array; regionMaterial: Int16Array },
  materialAgents: number,
): RegionRemap {
  const { regionCount, sizes, regionMaterial } = labeling;
  if (regionCount === 0) return { map: new Int16Array(0), material: new Int16Array(0), count: 0 };

  const centroids = new Float64Array(regionCount * 3);
  const totals = new Int32Array(regionCount);
  for (let i = 0; i < count; i++) {
    const r = labeling.region[i];
    if (r === NO_REGION) continue;
    centroids[r * 3 + 0] += points[i * 3 + 0];
    centroids[r * 3 + 1] += points[i * 3 + 1];
    centroids[r * 3 + 2] += points[i * 3 + 2];
    totals[r]++;
  }
  for (let r = 0; r < regionCount; r++) {
    const n = totals[r] || 1;
    centroids[r * 3 + 0] /= n;
    centroids[r * 3 + 1] /= n;
    centroids[r * 3 + 2] /= n;
  }

  const threshold = Math.max(4, Math.floor(materialAgents * SMALL_REGION_FRACTION));
  const keep = new Uint8Array(regionCount);
  for (let r = 0; r < regionCount; r++) if (sizes[r] >= threshold) keep[r] = 1;

  // Un material sin ninguna región grande conserva su mayor esquirla.
  const largestOfMaterial = new Map<number, number>();
  for (let r = 0; r < regionCount; r++) {
    const m = regionMaterial[r];
    const prev = largestOfMaterial.get(m);
    if (prev === undefined || sizes[r] > sizes[prev]) largestOfMaterial.set(m, r);
  }
  for (const [m, r] of largestOfMaterial) {
    let anyKept = false;
    for (let k = 0; k < regionCount; k++) if (regionMaterial[k] === m && keep[k]) { anyKept = true; break; }
    if (!anyKept) keep[r] = 1;
  }

  const absorbInto = new Int16Array(regionCount);
  for (let r = 0; r < regionCount; r++) {
    if (keep[r]) { absorbInto[r] = r; continue; }
    let best = -1;
    let bestDist = Infinity;
    for (let k = 0; k < regionCount; k++) {
      if (!keep[k] || regionMaterial[k] !== regionMaterial[r]) continue;
      const dx = centroids[k * 3 + 0] - centroids[r * 3 + 0];
      const dy = centroids[k * 3 + 1] - centroids[r * 3 + 1];
      const dz = centroids[k * 3 + 2] - centroids[r * 3 + 2];
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bestDist) { bestDist = d; best = k; }
    }
    // `best` siempre existe: el bloque de arriba garantiza al menos una
    // región conservada por material.
    absorbInto[r] = best >= 0 ? best : r;
    if (best < 0) keep[r] = 1;
  }

  const map = new Int16Array(regionCount).fill(-1);
  const materialList: number[] = [];
  const finalOf = new Int16Array(regionCount).fill(-1);
  for (let r = 0; r < regionCount; r++) {
    if (!keep[r]) continue;
    finalOf[r] = materialList.length;
    materialList.push(regionMaterial[r]);
  }
  for (let r = 0; r < regionCount; r++) map[r] = finalOf[absorbInto[r]];

  return { map, material: Int16Array.from(materialList), count: materialList.length };
}

/**
 * Agentes de material sin región (cayeron fuera del cubo de la grilla): se
 * enganchan a la región de centroide más cercano. Actualiza sumas y
 * conteos para que el centroide siga describiendo a todos sus agentes.
 */
function attachOrphans(
  points: Float32Array,
  count: number,
  isMaterial: Uint8Array,
  region: Int16Array,
  sums: Float64Array,
  counts: Int32Array,
  regionCount: number,
): void {
  if (regionCount === 0) return;
  for (let i = 0; i < count; i++) {
    if (!isMaterial[i] || region[i] !== NO_REGION) continue;
    let best = 0;
    let bestDist = Infinity;
    for (let r = 0; r < regionCount; r++) {
      const n = counts[r] || 1;
      const dx = sums[r * 3 + 0] / n - points[i * 3 + 0];
      const dy = sums[r * 3 + 1] / n - points[i * 3 + 1];
      const dz = sums[r * 3 + 2] / n - points[i * 3 + 2];
      const d = dx * dx + dy * dy + dz * dz;
      if (d < bestDist) { bestDist = d; best = r; }
    }
    region[i] = best;
    sums[best * 3 + 0] += points[i * 3 + 0];
    sums[best * 3 + 1] += points[i * 3 + 1];
    sums[best * 3 + 2] += points[i * 3 + 2];
    counts[best]++;
  }
}

export { NO_REGION };
