// Validación de lo construido (Fase 39, spec §20).
//
// `validateCoverage` (grid.ts) ya responde "¿cuántas celdas de la figura
// quedaron sin cubrir?" y devuelve exactamente cuáles en `missing`. Lo
// que faltaba es la otra pregunta del spec §20: "¿quedó todo de una
// pieza?". Un objeto que sale en cinco pedazos flotando es un resultado
// malo, y hasta acá no había forma de detectarlo.
//
// Se responde con componentes conexas por 6 vecinos sobre la grilla — el
// mismo vecindario que ya usa `surfacePoints` para extraer la cáscara, así
// que "conectado" significa lo mismo en los dos lados.
//
// LO QUE ESTO NO HACE: reparar. `missing` alimentará al Repair Bot cuando
// exista; hoy la salida es información para el usuario, no una simulación
// de agentes que no están (spec §21).

import { voxelIndex, type VoxelGrid } from "./grid";

export interface ComponentReport {
  /** Cuántas piezas separadas hay. 1 = el objeto es una sola cosa. */
  readonly count: number;
  /** Celdas de la pieza más grande. */
  readonly largest: number;
  /** Celdas ocupadas en total. */
  readonly occupied: number;
  /**
   * Qué fracción del objeto está en la pieza principal. 1 = todo junto;
   * 0.7 significa que un 30% del volumen quedó suelto.
   */
  readonly cohesion: number;
  /** Tamaño de cada pieza, de mayor a menor. Acotado a las 8 mayores. */
  readonly sizes: readonly number[];
}

const MAX_REPORTED = 8;

/**
 * Componentes conexas de la grilla, por 6 vecinos.
 *
 * Recorrido iterativo con una pila sobre un Int32Array: una versión
 * recursiva desborda la pila de JS con facilidad (a res 128 una pieza
 * puede tener cientos de miles de celdas).
 */
export function findComponents(grid: VoxelGrid): ComponentReport {
  const { res, occupied } = grid;
  const cells = res * res * res;
  const seen = new Uint8Array(cells);
  const stack = new Int32Array(cells);
  const sizes: number[] = [];
  let total = 0;

  for (let i = 0; i < cells; i++) if (occupied[i]) total++;
  if (total === 0) {
    return { count: 0, largest: 0, occupied: 0, cohesion: 1, sizes: [] };
  }

  for (let start = 0; start < cells; start++) {
    if (!occupied[start] || seen[start]) continue;
    let top = 0;
    stack[top++] = start;
    seen[start] = 1;
    let size = 0;

    while (top > 0) {
      const at = stack[--top];
      size++;
      // Desarmar el índice lineal: at = (vz*res + vy)*res + vx
      const vx = at % res;
      const rest = (at - vx) / res;
      const vy = rest % res;
      const vz = (rest - vy) / res;

      const push = (nx: number, ny: number, nz: number): void => {
        if (nx < 0 || ny < 0 || nz < 0 || nx >= res || ny >= res || nz >= res) return;
        const n = voxelIndex(nx, ny, nz, res);
        if (seen[n] || !occupied[n]) return;
        seen[n] = 1;
        stack[top++] = n;
      };
      push(vx - 1, vy, vz); push(vx + 1, vy, vz);
      push(vx, vy - 1, vz); push(vx, vy + 1, vz);
      push(vx, vy, vz - 1); push(vx, vy, vz + 1);
    }
    sizes.push(size);
  }

  sizes.sort((a, b) => b - a);
  const largest = sizes[0];
  return {
    count: sizes.length,
    largest,
    occupied: total,
    cohesion: largest / total,
    sizes: sizes.slice(0, MAX_REPORTED),
  };
}
