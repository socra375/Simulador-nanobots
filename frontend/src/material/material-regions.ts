// Regiones espaciales de material (Fase 42).
//
// POR QUÉ EXISTE ESTE ARCHIVO, en una línea: hasta la Fase 41 el color de
// un agente lo decidía la OLA a la que pertenecía, y las olas eran
// muestreos independientes de la silueta entera. Rojo y dorado terminaban
// intercalados agente por agente sobre todo el objeto — el damero. La
// regla nueva es `color = posición`, y para eso hace falta responder una
// pregunta que el sistema no sabía responder: ¿qué agentes forman una
// MANCHA CONTIGUA del mismo material?
//
// Se responde con componentes conexas por 6 vecinos sobre una grilla de
// vóxeles, con la condición extra de que dos celdas vecinas sólo se unen
// si llevan el MISMO material. Es el mismo vecindario y el mismo indexado
// que ya usan `surfacePoints` y `findComponents` (voxel/), así que
// "contiguo" significa exactamente lo mismo en todo el proyecto — no es
// una segunda noción de vecindad en paralelo.
//
// LA RESOLUCIÓN IMPORTA Y NO ES LIBRE: muy fina parte una mancha real en
// esquirlas (cada agente su propia región); muy gruesa funde manchas de
// colores distintos en una sola. REGION_RES está elegida para que a las
// cantidades de agentes con las que se trabaja caigan varios agentes por
// celda — ver el comentario sobre la constante.

import { voxelIndex, worldToVoxel } from "../voxel/grid";
import { SHAPE_HALF_EXTENT } from "../shapes/constants";

/**
 * Techo de celdas por eje de la grilla de regiones.
 *
 * No se reusa DEFAULT_VOXEL_RES (48): esa es la grilla de COBERTURA, que
 * mide huecos y quiere ser fina. Acá una grilla fina es CONTRAPRODUCENTE —
 * son dos preguntas distintas sobre la misma geometría.
 */
export const REGION_RES_MAX = 32;
export const REGION_RES_MIN = 8;
/** Agentes por celda ocupada a los que apunta `regionResFor`. */
const TARGET_PER_CELL = 4;

/**
 * Resolución de la grilla de regiones para una cantidad de agentes dada.
 *
 * POR QUÉ ES ADAPTATIVA, y no una constante: con una resolución fija, a
 * pocos agentes cada uno cae en SU PROPIA celda y ninguna celda toca a
 * otra — la superficie se parte en tantas regiones como agentes. Verificado
 * con una nube de 1.728 puntos a res 32: daba 1.728 regiones de un agente
 * cada una. La contigüidad no es una propiedad de la grilla sola, es una
 * propiedad de la grilla EN RELACIÓN a la densidad de la nube.
 *
 * Los agentes de una figura se reparten sobre una superficie, así que las
 * celdas ocupadas van como res². Apuntando a ~4 agentes por celda ocupada:
 * res ≈ sqrt(n / (3 * 4)). Se acota arriba para no volver a partir la
 * superficie con mucha cantidad, y abajo para que dos manchas de color
 * distinto no terminen en la misma celda.
 */
export function regionResFor(materialAgents: number): number {
  const res = Math.round(Math.sqrt(materialAgents / (3 * TARGET_PER_CELL)));
  return Math.min(REGION_RES_MAX, Math.max(REGION_RES_MIN, res));
}

/** Region inválida: el agente no participa (no es Material Bot). */
export const NO_REGION = -1;

export interface RegionLabeling {
  /** Por agente: id de región, o NO_REGION. */
  readonly region: Int16Array;
  readonly regionCount: number;
  /** Por región: cuántos agentes tiene. */
  readonly sizes: Int32Array;
  /** Por región: qué material lleva (índice en la paleta). */
  readonly regionMaterial: Int16Array;
}

export interface RegionInput {
  readonly points: Float32Array;
  readonly count: number;
  /** Por agente: 1 si participa del material. */
  readonly member: Uint8Array;
  /** Por agente: índice de material en la paleta. Ignorado si no es miembro. */
  readonly material: Int16Array;
  readonly materialCount: number;
  readonly center: readonly [number, number, number];
  readonly res?: number;
  readonly half?: number;
}

/**
 * Componentes conexas por material.
 *
 * Tres pases, todos O(agentes + celdas):
 *  1. Votación: cada agente vota su material en su celda. Una celda puede
 *     recibir votos de materiales distintos (dos manchas que se tocan); se
 *     queda con el más votado. Empate -> el de índice menor, que es el más
 *     pesado de la paleta: determinista, sin desempate al azar.
 *  2. Flood fill 6-vecinos entre celdas del mismo material.
 *  3. Cada agente hereda la región de su celda.
 */
function countMembers(input: RegionInput): number {
  let n = 0;
  for (let i = 0; i < input.count; i++) if (input.member[i]) n++;
  return n;
}

export function labelRegions(input: RegionInput): RegionLabeling {
  const res = input.res ?? regionResFor(countMembers(input));
  const half = input.half ?? SHAPE_HALF_EXTENT;
  const { points, count, member, material, materialCount, center } = input;
  const cells = res * res * res;
  const region = new Int16Array(count).fill(NO_REGION);

  if (count === 0 || materialCount === 0) {
    return { region, regionCount: 0, sizes: new Int32Array(0), regionMaterial: new Int16Array(0) };
  }

  // Voto por (celda, material). Es el único array grande de todo esto:
  // 32³ celdas x 8 materiales x 2 bytes = 512 KB, una vez por figura (no
  // por cuadro). Un Map de celdas ocupadas ahorraría memoria pero costaría
  // un hash por agente, y acá el barato es el array.
  const votes = new Uint16Array(cells * materialCount);
  const cellOfAgent = new Int32Array(count).fill(-1);

  for (let i = 0; i < count; i++) {
    if (!member[i]) continue;
    const m = material[i];
    if (m < 0 || m >= materialCount) continue;
    const vx = worldToVoxel(points[i * 3 + 0] - center[0], res, half);
    const vy = worldToVoxel(points[i * 3 + 1] - center[1], res, half);
    const vz = worldToVoxel(points[i * 3 + 2] - center[2], res, half);
    // Fuera del cubo: el jitter de los generadores puede sacar algún punto
    // apenas afuera. Se ignora en silencio, igual que voxelizePoints.
    if (vx < 0 || vy < 0 || vz < 0) continue;
    const cell = voxelIndex(vx, vy, vz, res);
    cellOfAgent[i] = cell;
    const v = cell * materialCount + m;
    if (votes[v] < 0xffff) votes[v]++;
  }

  // Material ganador por celda, o -1 si nadie votó.
  const cellMaterial = new Int16Array(cells).fill(-1);
  for (let cell = 0; cell < cells; cell++) {
    const base = cell * materialCount;
    let best = -1;
    let bestVotes = 0;
    for (let m = 0; m < materialCount; m++) {
      if (votes[base + m] > bestVotes) {
        bestVotes = votes[base + m];
        best = m;
      }
    }
    cellMaterial[cell] = best;
  }

  // Flood fill iterativo con pila sobre Int32Array: a 32³ una mancha puede
  // tener decenas de miles de celdas y la recursión desbordaría.
  const cellRegion = new Int32Array(cells).fill(-1);
  const stack = new Int32Array(cells);
  const regionMaterialList: number[] = [];

  for (let start = 0; start < cells; start++) {
    if (cellMaterial[start] < 0 || cellRegion[start] >= 0) continue;
    const mat = cellMaterial[start];
    const id = regionMaterialList.length;
    regionMaterialList.push(mat);
    let top = 0;
    stack[top++] = start;
    cellRegion[start] = id;

    while (top > 0) {
      const at = stack[--top];
      const vx = at % res;
      const rest = (at - vx) / res;
      const vy = rest % res;
      const vz = (rest - vy) / res;

      const push = (nx: number, ny: number, nz: number): void => {
        if (nx < 0 || ny < 0 || nz < 0 || nx >= res || ny >= res || nz >= res) return;
        const n = voxelIndex(nx, ny, nz, res);
        // La condición que hace que esto sea "regiones de material" y no
        // "componentes de la figura": el vecino tiene que llevar el MISMO
        // material para unirse.
        if (cellRegion[n] >= 0 || cellMaterial[n] !== mat) return;
        cellRegion[n] = id;
        stack[top++] = n;
      };
      push(vx - 1, vy, vz); push(vx + 1, vy, vz);
      push(vx, vy - 1, vz); push(vx, vy + 1, vz);
      push(vx, vy, vz - 1); push(vx, vy, vz + 1);
    }
  }

  const regionCount = regionMaterialList.length;
  const sizes = new Int32Array(regionCount);
  for (let i = 0; i < count; i++) {
    const cell = cellOfAgent[i];
    if (cell < 0) continue;
    const id = cellRegion[cell];
    if (id < 0) continue;
    region[i] = id;
    sizes[id]++;
  }

  return { region, regionCount, sizes, regionMaterial: Int16Array.from(regionMaterialList) };
}
