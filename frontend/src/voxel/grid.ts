// Grilla de vóxeles (Fase 30).
//
// Esto NO es un motor nuevo en paralelo: es la generalización de la grilla
// de ocupación que `carveVisualHull` ya venía construyendo a mano desde la
// Fase 23 (un Uint8Array sobre [-s, +s]³ y extracción de superficie por
// 6 vecinos). Mismo indexado, misma convención de coordenadas.
//
// La prueba de que la generalización es FIEL y no una reescritura con otro
// nombre: `carveVisualHull` pasa a implementarse como
// `surfacePoints(carveVisualHullGrid(...))`, y sus 7 tests existentes
// siguen pasando SIN TOCARLOS. Si la grilla nueva difiere en un solo
// vóxel, esos tests lo dicen.
//
// Memoria: res 48 -> 110.592 celdas -> 108 KB con `occupied` solo, 216 KB
// con `density`. `material` y `botId` siguen SIN reservarse: hoy no hay
// nada que los escriba, y reservar arrays "por si acaso" es exactamente el
// scaffold decorativo que el brief prohíbe. Se agregan con su consumidor.
//
// `color` sí entró (Fase 39) porque ya tiene consumidor: la reconstrucción
// desde imagen produce un color por punto, y ese color tiene que
// sobrevivir a la voxelización para llegar al enjambre. Es OPCIONAL: sólo
// lo reserva `voxelizePointsWithColor`, así que las grillas de cobertura y
// del visual hull siguen pesando exactamente lo mismo que antes.

import { SHAPE_HALF_EXTENT } from "../shapes";

export const DEFAULT_VOXEL_RES = 48;

export interface VoxelGrid {
  /** Celdas por eje. La grilla es cúbica. */
  readonly res: number;
  /** Semi-extensión del cubo en coordenadas de mundo: [-half, +half]. */
  readonly half: number;
  /** res³ bytes: 1 = ocupada. */
  readonly occupied: Uint8Array;
  /**
   * res³ bytes: cuántos puntos cayeron en cada celda, saturado a 255.
   * Sólo lo llena `voxelizePoints`; el tallado por siluetas deja 0/1.
   */
  readonly density: Uint8Array;
  /**
   * res³*3 bytes RGB del material del objeto, o undefined si esta grilla
   * no lleva color. Es el color de LO QUE SE CONSTRUYE, no el de ningún
   * bot: la identidad de cada tipo de agente vive en bot-config.ts y no se
   * mezcla con esto (spec §13).
   */
  readonly color?: Uint8Array;
  /**
   * res³ bytes: de dónde salió la geometría de esta celda (ver
   * POINT_ORIGIN en vision/reconstruction-result.ts). Opcional, igual que
   * `color`.
   *
   * Sobrevive a la voxelización a propósito: la pregunta honesta —"qué
   * parte de lo que el enjambre va a construir se VIO de verdad"— hay que
   * responderla sobre la cáscara final, no sobre la nube previa, donde el
   * relleno interior sesgaría el número.
   */
  readonly origin?: Uint8Array;
}

/** Índice lineal de una celda. Mismo orden que usaba carveVisualHull. */
export function voxelIndex(vx: number, vy: number, vz: number, res: number): number {
  return (vz * res + vy) * res + vx;
}

/** Centro de una celda en coordenadas de mundo, sobre un eje. */
export function voxelWorldCoord(v: number, res: number, half: number): number {
  return ((v + 0.5) / res - 0.5) * 2 * half;
}

/** Celda que contiene una coordenada de mundo. Devuelve -1 si cae afuera. */
export function worldToVoxel(w: number, res: number, half: number): number {
  const v = Math.floor(((w / half + 1) / 2) * res);
  return v < 0 || v >= res ? -1 : v;
}

export function createVoxelGrid(res: number = DEFAULT_VOXEL_RES, half: number = SHAPE_HALF_EXTENT): VoxelGrid {
  const cells = res * res * res;
  return { res, half, occupied: new Uint8Array(cells), density: new Uint8Array(cells) };
}

/**
 * Marca como ocupada la celda de cada punto y cuenta cuántos cayeron en
 * ella. Los puntos fuera del cubo se ignoran en silencio: la grilla acota
 * el volumen a propósito, y tirar un error rompería figuras que se salen
 * un poco del rango por el jitter de los generadores.
 */
export function voxelizePoints(
  points: Float32Array,
  count: number,
  center: readonly [number, number, number],
  res: number = DEFAULT_VOXEL_RES,
  half: number = SHAPE_HALF_EXTENT,
): VoxelGrid {
  const grid = createVoxelGrid(res, half);
  for (let i = 0; i < count; i++) {
    const vx = worldToVoxel(points[i * 3 + 0] - center[0], res, half);
    if (vx < 0) continue;
    const vy = worldToVoxel(points[i * 3 + 1] - center[1], res, half);
    if (vy < 0) continue;
    const vz = worldToVoxel(points[i * 3 + 2] - center[2], res, half);
    if (vz < 0) continue;
    const at = voxelIndex(vx, vy, vz, res);
    grid.occupied[at] = 1;
    if (grid.density[at] < 255) grid.density[at]++;
  }
  return grid;
}

/**
 * Igual que `voxelizePoints` pero conservando un color por celda.
 *
 * Cuando varios puntos caen en la misma celda, el color es el PROMEDIO de
 * todos: quedarse con el último daría un resultado dependiente del orden
 * de recorrido, y con el primero se perdería el detalle de las zonas
 * densas, que son justamente las que más puntos aportan.
 */
export function voxelizePointsWithColor(
  points: Float32Array,
  colors: Uint8Array,
  count: number,
  center: readonly [number, number, number],
  res: number = DEFAULT_VOXEL_RES,
  half: number = SHAPE_HALF_EXTENT,
  /** Procedencia por punto (opcional). Ver `VoxelGrid.origin`. */
  origins: Uint8Array | null = null,
): VoxelGrid {
  const cells = res * res * res;
  const grid = createVoxelGrid(res, half);
  const color = new Uint8Array(cells * 3);
  // 255 = "todavía sin dato". Se queda con el MÍNIMO de la celda, y como
  // POINT_ORIGIN va de más a menos confiable (observada=0), eso equivale a
  // "si algún punto de esta celda se vio, la celda se vio". Quedarse con
  // el máximo marcaría como inventado algo que la foto sí mostró.
  const origin = origins ? new Uint8Array(cells).fill(255) : null;
  // Acumuladores aparte: el promedio no entra en un byte sin desbordar.
  const sumR = new Float64Array(cells);
  const sumG = new Float64Array(cells);
  const sumB = new Float64Array(cells);
  const n = new Uint32Array(cells);

  for (let i = 0; i < count; i++) {
    const vx = worldToVoxel(points[i * 3 + 0] - center[0], res, half);
    if (vx < 0) continue;
    const vy = worldToVoxel(points[i * 3 + 1] - center[1], res, half);
    if (vy < 0) continue;
    const vz = worldToVoxel(points[i * 3 + 2] - center[2], res, half);
    if (vz < 0) continue;
    const at = voxelIndex(vx, vy, vz, res);
    grid.occupied[at] = 1;
    if (grid.density[at] < 255) grid.density[at]++;
    sumR[at] += colors[i * 3 + 0];
    sumG[at] += colors[i * 3 + 1];
    sumB[at] += colors[i * 3 + 2];
    n[at]++;
    if (origin && origins && origins[i] < origin[at]) origin[at] = origins[i];
  }
  for (let at = 0; at < cells; at++) {
    if (n[at] === 0) continue;
    color[at * 3 + 0] = Math.round(sumR[at] / n[at]);
    color[at * 3 + 1] = Math.round(sumG[at] / n[at]);
    color[at * 3 + 2] = Math.round(sumB[at] / n[at]);
  }
  return origin ? { ...grid, color, origin } : { ...grid, color };
}

/** ¿Es una celda de superficie? Ocupada con al menos un vecino vacío. */
function isSurfaceCell(occupied: Uint8Array, vx: number, vy: number, vz: number, res: number): boolean {
  if (!occupied[voxelIndex(vx, vy, vz, res)]) return false;
  if (vx === 0 || vx === res - 1 || vy === 0 || vy === res - 1 || vz === 0 || vz === res - 1) return true;
  return (
    !occupied[voxelIndex(vx - 1, vy, vz, res)] ||
    !occupied[voxelIndex(vx + 1, vy, vz, res)] ||
    !occupied[voxelIndex(vx, vy - 1, vz, res)] ||
    !occupied[voxelIndex(vx, vy + 1, vz, res)] ||
    !occupied[voxelIndex(vx, vy, vz - 1, res)] ||
    !occupied[voxelIndex(vx, vy, vz + 1, res)]
  );
}

/**
 * Centros de las celdas de SUPERFICIE: ocupadas con al menos uno de sus 6
 * vecinos vacío, o pegadas al borde de la grilla. Es literalmente el
 * segundo pase que `carveVisualHull` tenía adentro.
 *
 * Dos pasadas (contar y llenar) en vez de acumular en un `number[]` de JS:
 * a res 48 daba lo mismo, pero las celdas de superficie escalan como ~6·res²
 * y a res 128 serían ~100.000 puntos, o sea ~300.000 números boxeados en un
 * array que crece por realloc, sólo para copiarlos después a un
 * Float32Array. Contar primero cuesta un recorrido más y ninguna basura.
 */
export function surfacePoints(grid: VoxelGrid): Float32Array {
  const { res, half, occupied } = grid;
  let n = 0;
  for (let vz = 0; vz < res; vz++)
    for (let vy = 0; vy < res; vy++)
      for (let vx = 0; vx < res; vx++)
        if (isSurfaceCell(occupied, vx, vy, vz, res)) n++;

  const out = new Float32Array(n * 3);
  let at = 0;
  for (let vz = 0; vz < res; vz++) {
    for (let vy = 0; vy < res; vy++) {
      for (let vx = 0; vx < res; vx++) {
        if (!isSurfaceCell(occupied, vx, vy, vz, res)) continue;
        out[at++] = voxelWorldCoord(vx, res, half);
        out[at++] = voxelWorldCoord(vy, res, half);
        out[at++] = voxelWorldCoord(vz, res, half);
      }
    }
  }
  return out;
}

export interface ColoredSurface {
  readonly points: Float32Array;
  readonly colors: Uint8Array;
  /** Procedencia por punto, o null si la grilla no la lleva. */
  readonly origin: Uint8Array | null;
  readonly count: number;
}

/**
 * La cáscara con su color. El recorrido es el mismo que `surfacePoints`;
 * lo único que se agrega es copiar el color de cada celda.
 *
 * Si la grilla no lleva color, los colores salen en blanco en vez de
 * inventarse: el llamador puede distinguir "gris" de "no hay dato".
 */
export function surfacePointsWithColor(grid: VoxelGrid): ColoredSurface {
  const { res, half, occupied, color, origin: cellOrigin } = grid;
  let n = 0;
  for (let vz = 0; vz < res; vz++)
    for (let vy = 0; vy < res; vy++)
      for (let vx = 0; vx < res; vx++)
        if (isSurfaceCell(occupied, vx, vy, vz, res)) n++;

  const points = new Float32Array(n * 3);
  const colors = new Uint8Array(n * 3);
  const origin = cellOrigin ? new Uint8Array(n) : null;
  if (!color) colors.fill(255);
  let at = 0;
  for (let vz = 0; vz < res; vz++) {
    for (let vy = 0; vy < res; vy++) {
      for (let vx = 0; vx < res; vx++) {
        if (!isSurfaceCell(occupied, vx, vy, vz, res)) continue;
        const cell = voxelIndex(vx, vy, vz, res);
        points[at * 3 + 0] = voxelWorldCoord(vx, res, half);
        points[at * 3 + 1] = voxelWorldCoord(vy, res, half);
        points[at * 3 + 2] = voxelWorldCoord(vz, res, half);
        if (color) {
          colors[at * 3 + 0] = color[cell * 3 + 0];
          colors[at * 3 + 1] = color[cell * 3 + 1];
          colors[at * 3 + 2] = color[cell * 3 + 2];
        }
        if (origin && cellOrigin) origin[at] = cellOrigin[cell];
        at++;
      }
    }
  }
  return { points, colors, origin, count: n };
}

export interface CoverageReport {
  /** Celdas ocupadas del objetivo. */
  readonly target: number;
  /** Cuántas de esas tienen al menos un agente. */
  readonly covered: number;
  /** covered / target, o 1 si el objetivo está vacío. */
  readonly coverage: number;
  /** Índices de celda del objetivo que ningún agente ocupa. */
  readonly missing: Int32Array;
}

/**
 * Qué tanto de la figura objetivo está realmente cubierta por los agentes.
 *
 * Es la entrada natural de la reparación (fase posterior): `missing` son
 * exactamente los huecos a rellenar. Hoy su consumidor es la métrica de
 * cobertura — se devuelve el detalle igual porque calcularlo es el mismo
 * recorrido, no un costo aparte.
 */
export function validateCoverage(target: VoxelGrid, actual: VoxelGrid): CoverageReport {
  if (target.res !== actual.res) {
    throw new Error(`validateCoverage: grillas de distinta resolución (${target.res} vs ${actual.res})`);
  }
  const missing: number[] = [];
  let targetCells = 0;
  let covered = 0;
  for (let i = 0; i < target.occupied.length; i++) {
    if (!target.occupied[i]) continue;
    targetCells++;
    if (actual.occupied[i]) covered++;
    else missing.push(i);
  }
  return {
    target: targetCells,
    covered,
    coverage: targetCells === 0 ? 1 : covered / targetCells,
    missing: Int32Array.from(missing),
  };
}
