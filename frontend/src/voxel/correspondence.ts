// Correspondencia agente -> destino para el morph directo (Fase 30b).
//
// EL PROBLEMA: al pedir una figura nueva sin volver al núcleo, cada
// destino de la figura nueva necesita un agente que venga a ocuparlo. Si
// se asigna el agente `i` al destino `i` (el orden en que salieron de los
// generadores), los agentes se cruzan de punta a punta de la figura y el
// morph se ve como una explosión desordenada.
//
// QUÉ SE PERMUTA, Y POR QUÉ ESO Y NO LO OTRO: se permutan las POSICIONES
// DE ORIGEN, no los destinos. Cada destino de la formación nueva ya trae
// pegados su rol, su ola de color, su capa y su retardo; reordenar
// destinos obligaría a reordenar todos esos arrays en paralelo y
// cualquier olvido sería un bug de color silencioso. Los nanobots, en
// cambio, son intercambiables: elegir cuál viene de dónde es la misma
// decisión y sólo toca un buffer.
//
// POR QUÉ NO HÚNGARO: el emparejamiento óptimo es O(n³). A 60.000 agentes
// eso es inviable por varios órdenes de magnitud. Acá se agrupan ambas
// nubes por celda de vóxel (reusando voxel/grid.ts) y se empareja dentro
// de la celda, cayendo a las celdas vecinas por anillos. No es óptimo, y
// no hace falta que lo sea: alcanza con que cada agente viaje poco.

import { voxelIndex, worldToVoxel, DEFAULT_VOXEL_RES } from "./grid";
import { SHAPE_HALF_EXTENT } from "../shapes";

/**
 * Hasta qué anillo de celdas se busca un agente libre antes de rendirse.
 * Acotado a propósito: sin tope, dos nubes lejanas harían que cada
 * destino barra media grilla. Los que no encuentran nada cerca se sirven
 * por orden de lo que sobró, que a esa distancia ya da igual.
 */
const MAX_RING = 3;

export interface MorphSource {
  /** count*3: de dónde sale el agente que va a ocupar cada destino. */
  readonly from: Float32Array;
  /** Cuántos destinos consiguieron un agente cercano (métrica, para tests). */
  readonly matchedNearby: number;
}

/**
 * Arma el buffer de orígenes para un morph: `from[i*3…]` es la posición
 * desde la que arranca el agente que va a terminar en `targets[i*3…]`.
 *
 * `previous` son las posiciones actuales (largo previousCount*3). Si hay
 * menos agentes viejos que destinos nuevos, los destinos sobrantes salen
 * del núcleo, que es el comportamiento de siempre.
 */
export function buildMorphSource(
  targets: Float32Array,
  count: number,
  previous: Float32Array,
  previousCount: number,
  core: readonly [number, number, number],
  /**
   * Centro del cubo de vóxeles en coordenadas de mundo. NO tiene default a
   * propósito: sin él, este módulo pasaba coordenadas de mundo crudas a
   * `worldToVoxel`, que sólo acepta [-half, +half]. En producción los
   * puntos vienen trasladados a FORMATION_CENTER = [4, 2, 4] con
   * half = 5.5, así que todo lo que tuviera x > 5.5 o z > 5.5 daba -1 y
   * caía al camino de sobrantes: el morph seguía funcionando, pero media
   * figura perdía la localidad que este módulo existe para dar. Los tests
   * no lo veían porque generaban nubes centradas en el origen.
   *
   * Obligarlo en la firma hace que el compilador exija decidirlo en cada
   * llamada, en vez de que el default equivocado pase inadvertido.
   */
  center: readonly [number, number, number],
  res: number = DEFAULT_VOXEL_RES,
  half: number = SHAPE_HALF_EXTENT,
): MorphSource {
  const from = new Float32Array(count * 3);

  // Celda -> agentes viejos que caen en ella. Se usa como pila: cada
  // agente se entrega UNA sola vez (si no, varios destinos arrancarían
  // del mismo punto y se verían pegados).
  const buckets = new Map<number, number[]>();
  const libres: number[] = [];
  for (let p = 0; p < previousCount; p++) {
    const vx = worldToVoxel(previous[p * 3 + 0] - center[0], res, half);
    const vy = worldToVoxel(previous[p * 3 + 1] - center[1], res, half);
    const vz = worldToVoxel(previous[p * 3 + 2] - center[2], res, half);
    if (vx < 0 || vy < 0 || vz < 0) {
      // Fuera del cubo (p. ej. todavía cerca del reactor): sirve igual
      // como origen, sólo que sin localidad.
      libres.push(p);
      continue;
    }
    const cell = voxelIndex(vx, vy, vz, res);
    const bucket = buckets.get(cell);
    if (bucket) bucket.push(p);
    else buckets.set(cell, [p]);
  }

  function take(cell: number): number {
    const bucket = buckets.get(cell);
    if (!bucket || bucket.length === 0) return -1;
    const p = bucket.pop()!;
    if (bucket.length === 0) buckets.delete(cell);
    return p;
  }

  let sobrantesCursor = 0;
  let matchedNearby = 0;

  for (let i = 0; i < count; i++) {
    const tx = targets[i * 3 + 0];
    const ty = targets[i * 3 + 1];
    const tz = targets[i * 3 + 2];
    const vx = worldToVoxel(tx - center[0], res, half);
    const vy = worldToVoxel(ty - center[1], res, half);
    const vz = worldToVoxel(tz - center[2], res, half);

    let p = -1;
    if (vx >= 0 && vy >= 0 && vz >= 0) {
      p = take(voxelIndex(vx, vy, vz, res));
      // Anillos crecientes alrededor de la celda del destino.
      for (let r = 1; p < 0 && r <= MAX_RING; r++) {
        for (let dz = -r; dz <= r && p < 0; dz++) {
          const z = vz + dz;
          if (z < 0 || z >= res) continue;
          for (let dy = -r; dy <= r && p < 0; dy++) {
            const y = vy + dy;
            if (y < 0 || y >= res) continue;
            for (let dx = -r; dx <= r && p < 0; dx++) {
              // Sólo la cáscara del anillo: el interior ya se miró antes.
              if (Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz)) !== r) continue;
              const x = vx + dx;
              if (x < 0 || x >= res) continue;
              p = take(voxelIndex(x, y, z, res));
            }
          }
        }
      }
      if (p >= 0) matchedNearby++;
    }

    if (p < 0) {
      // Nada cerca: se sirve de lo que sobró (primero los que estaban
      // fuera del cubo, después cualquier celda que haya quedado).
      while (p < 0 && sobrantesCursor < libres.length) p = libres[sobrantesCursor++];
      if (p < 0) {
        const next = buckets.keys().next();
        if (!next.done) p = take(next.value);
      }
    }

    if (p < 0) {
      // Hay más destinos que agentes viejos: éste sale del núcleo, igual
      // que en una formación normal.
      from[i * 3 + 0] = core[0];
      from[i * 3 + 1] = core[1];
      from[i * 3 + 2] = core[2];
    } else {
      from[i * 3 + 0] = previous[p * 3 + 0];
      from[i * 3 + 1] = previous[p * 3 + 1];
      from[i * 3 + 2] = previous[p * 3 + 2];
    }
  }

  return { from, matchedNearby };
}
