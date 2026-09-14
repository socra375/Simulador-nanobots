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
// con `density`. `material`, `colorIdx` y `botId` NO se reservan por
// adelantado: hoy no hay nada que los escriba (materiales y reparación son
// fases posteriores), y reservar 4 arrays "por si acaso" es exactamente el
// scaffold decorativo que el brief prohíbe. Se agregan con su consumidor.

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
 * Centros de las celdas de SUPERFICIE: ocupadas con al menos uno de sus 6
 * vecinos vacío, o pegadas al borde de la grilla. Es literalmente el
 * segundo pase que `carveVisualHull` tenía adentro.
 */
export function surfacePoints(grid: VoxelGrid): Float32Array {
  const { res, half, occupied } = grid;
  const out: number[] = [];
  for (let vz = 0; vz < res; vz++) {
    for (let vy = 0; vy < res; vy++) {
      for (let vx = 0; vx < res; vx++) {
        if (!occupied[voxelIndex(vx, vy, vz, res)]) continue;
        const onBoundary = vx === 0 || vx === res - 1 || vy === 0 || vy === res - 1 || vz === 0 || vz === res - 1;
        const isSurface =
          onBoundary ||
          !occupied[voxelIndex(vx - 1, vy, vz, res)] ||
          !occupied[voxelIndex(vx + 1, vy, vz, res)] ||
          !occupied[voxelIndex(vx, vy - 1, vz, res)] ||
          !occupied[voxelIndex(vx, vy + 1, vz, res)] ||
          !occupied[voxelIndex(vx, vy, vz - 1, res)] ||
          !occupied[voxelIndex(vx, vy, vz + 1, res)];
        if (!isSurface) continue;
        out.push(
          voxelWorldCoord(vx, res, half),
          voxelWorldCoord(vy, res, half),
          voxelWorldCoord(vz, res, half),
        );
      }
    }
  }
  return new Float32Array(out);
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
