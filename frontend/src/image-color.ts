// Extrae el/los color(es) RGB de la foto adjuntada en "Comandos", para el
// 4to rol de nanobots (NANOBOT_ROLE.COLOR, ver shapes.ts): no hay ningún
// modelo de IA de visión — es un histograma de color simple, 100% en el
// navegador (canvas 2D), separado en partes para poder testear la lógica de
// bucketing/clustering sin depender de las APIs de imagen/canvas del DOM:
// - pickDominantColor()/pickColorClusters(): puras, operan sobre un array
//   de pixeles RGBA plano.
// - extractDominantColorFromFile()/extractColorClustersFromFile(): la
//   parte que sí toca el DOM (Image + canvas) para conseguir esos pixeles
//   a partir del File adjuntado.

const QUANT_LEVELS = 8; // por canal -> 8^3 = 512 buckets de color
const QUANT_STEP = 256 / QUANT_LEVELS;
const MIN_ALPHA = 128;
const NEAR_WHITE = 235;
const NEAR_BLACK = 20;
const CANVAS_SAMPLE_SIZE = 32; // alcanza para un histograma, y es barato

// "Si X partes son de un color, sale esa ola de color" — hasta 4 olas de
// color distintas por figura (más que eso empieza a verse como ruido en
// vez de bandas de color reconocibles).
export const MAX_COLOR_CLUSTERS = 4;
// Buckets cuyo centro cae a menos de esta distancia (en RGB, 0-255 por eje)
// se fusionan en el mismo cluster — la "proximidad de color" pedida: dos
// tonos parecidos de una misma parte de la foto no deben separarse en dos
// olas distintas por el solo ruido de la cuantización.
const CLUSTER_MERGE_DISTANCE = 60;

export interface ColorCluster {
  color: number; // 0xRRGGBB
  weight: number; // fracción (0-1) del enjambre que le corresponde a esta ola
}

// Fallback si la foto no aporta ningún pixel válido (transparente, o todo
// fondo blanco/negro) — el mismo cian que ya usa ESTRUCTURA, para que el
// enjambre no se quede sin color en vez de crashear.
export const DEFAULT_DOMINANT_COLOR = 0x4be3ff;
export const DEFAULT_COLOR_CLUSTERS: ColorCluster[] = [{ color: DEFAULT_DOMINANT_COLOR, weight: 1 }];

// Recibe pixeles RGBA planos (el mismo formato que
// CanvasRenderingContext2D.getImageData().data) y devuelve el color
// dominante como entero 0xRRGGBB. Ignora pixeles transparentes y
// blanco/negro casi puro (típicamente el fondo de la foto, no el objeto
// fotografiado) para no terminar "pintando" el enjambre del color del
// papel de fondo en vez del objeto.
export function pickDominantColor(pixels: Uint8ClampedArray | number[]): number {
  const bucketCount = QUANT_LEVELS * QUANT_LEVELS * QUANT_LEVELS;
  const counts = new Uint32Array(bucketCount);
  const sumR = new Float64Array(bucketCount);
  const sumG = new Float64Array(bucketCount);
  const sumB = new Float64Array(bucketCount);

  for (let i = 0; i + 3 < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (a < MIN_ALPHA) continue;
    if (r > NEAR_WHITE && g > NEAR_WHITE && b > NEAR_WHITE) continue;
    if (r < NEAR_BLACK && g < NEAR_BLACK && b < NEAR_BLACK) continue;

    const bucketR = Math.min(QUANT_LEVELS - 1, Math.floor(r / QUANT_STEP));
    const bucketG = Math.min(QUANT_LEVELS - 1, Math.floor(g / QUANT_STEP));
    const bucketB = Math.min(QUANT_LEVELS - 1, Math.floor(b / QUANT_STEP));
    const bucket = (bucketR * QUANT_LEVELS + bucketG) * QUANT_LEVELS + bucketB;

    counts[bucket]++;
    sumR[bucket] += r;
    sumG[bucket] += g;
    sumB[bucket] += b;
  }

  let bestBucket = -1;
  let bestCount = 0;
  for (let i = 0; i < bucketCount; i++) {
    if (counts[i] > bestCount) {
      bestCount = counts[i];
      bestBucket = i;
    }
  }
  if (bestBucket === -1) return DEFAULT_DOMINANT_COLOR;

  const r = Math.round(sumR[bestBucket] / counts[bestBucket]);
  const g = Math.round(sumG[bestBucket] / counts[bestBucket]);
  const b = Math.round(sumB[bestBucket] / counts[bestBucket]);
  return (r << 16) | (g << 8) | b;
}

// Igual que pickDominantColor, pero en vez de quedarse solo con el bucket
// ganador agrupa los buckets con pixeles válidos por PROXIMIDAD de color
// (bucketing por sí solo podría partir una misma zona de la foto en dos
// buckets vecinos por ruido de cuantización) y devuelve hasta
// `maxClusters` grupos, ordenados de mayor a menor peso — una "ola" de
// color por grupo. El peso de cada uno es su fracción del total de
// pixeles válidos considerados (SOLO entre los clusters devueltos, ya
// re-normalizado, para que sumen exactamente 1 y el reparto de nanobots
// por ola cierre exacto — ver splitCounts en shapes.ts).
export function pickColorClusters(
  pixels: Uint8ClampedArray | number[],
  maxClusters: number = MAX_COLOR_CLUSTERS,
): ColorCluster[] {
  const bucketCount = QUANT_LEVELS * QUANT_LEVELS * QUANT_LEVELS;
  const counts = new Uint32Array(bucketCount);
  const sumR = new Float64Array(bucketCount);
  const sumG = new Float64Array(bucketCount);
  const sumB = new Float64Array(bucketCount);

  for (let i = 0; i + 3 < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (a < MIN_ALPHA) continue;
    if (r > NEAR_WHITE && g > NEAR_WHITE && b > NEAR_WHITE) continue;
    if (r < NEAR_BLACK && g < NEAR_BLACK && b < NEAR_BLACK) continue;

    const bucketR = Math.min(QUANT_LEVELS - 1, Math.floor(r / QUANT_STEP));
    const bucketG = Math.min(QUANT_LEVELS - 1, Math.floor(g / QUANT_STEP));
    const bucketB = Math.min(QUANT_LEVELS - 1, Math.floor(b / QUANT_STEP));
    const bucket = (bucketR * QUANT_LEVELS + bucketG) * QUANT_LEVELS + bucketB;

    counts[bucket]++;
    sumR[bucket] += r;
    sumG[bucket] += g;
    sumB[bucket] += b;
  }

  // Buckets no vacíos, con su color promedio real (no el centro geométrico
  // del bucket) — insumo para el merge por proximidad de abajo.
  const nonEmpty: Array<{ count: number; r: number; g: number; b: number }> = [];
  for (let i = 0; i < bucketCount; i++) {
    if (counts[i] === 0) continue;
    nonEmpty.push({ count: counts[i], r: sumR[i] / counts[i], g: sumG[i] / counts[i], b: sumB[i] / counts[i] });
  }
  if (nonEmpty.length === 0) return [{ color: DEFAULT_DOMINANT_COLOR, weight: 1 }];

  // Merge greedy por proximidad: se procesan los buckets de mayor a menor
  // peso; cada uno sin asignar todavía abre un cluster nuevo y absorbe a
  // todos los que queden a menos de CLUSTER_MERGE_DISTANCE (ponderando el
  // color promedio por cantidad de pixeles de cada bucket absorbido).
  nonEmpty.sort((a, b) => b.count - a.count);
  const clusters: Array<{ count: number; sumR: number; sumG: number; sumB: number }> = [];
  const absorbed = new Uint8Array(nonEmpty.length);
  const mergeDistSq = CLUSTER_MERGE_DISTANCE * CLUSTER_MERGE_DISTANCE;

  for (let i = 0; i < nonEmpty.length; i++) {
    if (absorbed[i]) continue;
    const seed = nonEmpty[i];
    const cluster = { count: seed.count, sumR: seed.r * seed.count, sumG: seed.g * seed.count, sumB: seed.b * seed.count };
    absorbed[i] = 1;
    for (let j = i + 1; j < nonEmpty.length; j++) {
      if (absorbed[j]) continue;
      const cand = nonEmpty[j];
      const dr = cand.r - seed.r;
      const dg = cand.g - seed.g;
      const db = cand.b - seed.b;
      if (dr * dr + dg * dg + db * db > mergeDistSq) continue;
      absorbed[j] = 1;
      cluster.count += cand.count;
      cluster.sumR += cand.r * cand.count;
      cluster.sumG += cand.g * cand.count;
      cluster.sumB += cand.b * cand.count;
    }
    clusters.push(cluster);
  }

  clusters.sort((a, b) => b.count - a.count);
  const top = clusters.slice(0, Math.max(1, maxClusters));
  const totalCount = top.reduce((sum, c) => sum + c.count, 0);

  return top.map((c) => {
    const r = Math.round(c.sumR / c.count);
    const g = Math.round(c.sumG / c.count);
    const b = Math.round(c.sumB / c.count);
    return { color: (r << 16) | (g << 8) | b, weight: c.count / totalCount };
  });
}

// Wrapper compartido: carga el File de imagen adjuntado, lo dibuja en un
// canvas chico (más rápido que procesar la foto a resolución completa) y
// le pasa los pixeles resultantes a `pick`. Nunca rechaza la promesa: ante
// cualquier error (imagen corrupta, canvas no disponible) cae al fallback
// dado en vez de bloquear "Formar objeto".
function extractFromFile<T>(file: File, fallback: T, pick: (data: Uint8ClampedArray) => T): Promise<T> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    const cleanup = () => URL.revokeObjectURL(url);

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = CANVAS_SAMPLE_SIZE;
        canvas.height = CANVAS_SAMPLE_SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(fallback);
          return;
        }
        ctx.drawImage(img, 0, 0, CANVAS_SAMPLE_SIZE, CANVAS_SAMPLE_SIZE);
        const { data } = ctx.getImageData(0, 0, CANVAS_SAMPLE_SIZE, CANVAS_SAMPLE_SIZE);
        resolve(pick(data));
      } catch {
        resolve(fallback);
      } finally {
        cleanup();
      }
    };
    img.onerror = () => {
      cleanup();
      resolve(fallback);
    };
    img.src = url;
  });
}

export function extractDominantColorFromFile(file: File): Promise<number> {
  return extractFromFile(file, DEFAULT_DOMINANT_COLOR, pickDominantColor);
}

export function extractColorClustersFromFile(
  file: File,
  maxClusters: number = MAX_COLOR_CLUSTERS,
): Promise<ColorCluster[]> {
  return extractFromFile(file, DEFAULT_COLOR_CLUSTERS, (data) => pickColorClusters(data, maxClusters));
}
