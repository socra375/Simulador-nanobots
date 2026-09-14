import { describe, expect, it } from "vitest";
import { findComponents } from "./validate";
import { createVoxelGrid, voxelIndex, voxelizePoints } from "./grid";

const ORIGIN: readonly [number, number, number] = [0, 0, 0];

/** Grilla chica con las celdas que se le pidan encendidas. */
function gridWith(res: number, cells: Array<[number, number, number]>) {
  const g = createVoxelGrid(res);
  for (const [x, y, z] of cells) g.occupied[voxelIndex(x, y, z, res)] = 1;
  return g;
}

describe("findComponents", () => {
  it("una grilla vacía no tiene piezas, y la cohesión no es NaN", () => {
    const r = findComponents(createVoxelGrid(8));
    expect(r.count).toBe(0);
    expect(r.occupied).toBe(0);
    expect(r.cohesion).toBe(1);
    expect(r.sizes).toEqual([]);
  });

  it("un bloque contiguo es UNA sola pieza", () => {
    const cells: Array<[number, number, number]> = [];
    for (let x = 2; x < 6; x++) for (let y = 2; y < 6; y++) for (let z = 2; z < 6; z++) cells.push([x, y, z]);
    const r = findComponents(gridWith(10, cells));
    expect(r.count).toBe(1);
    expect(r.occupied).toBe(64);
    expect(r.largest).toBe(64);
    expect(r.cohesion).toBe(1);
  });

  // La razón de ser del módulo: un objeto que sale en pedazos flotando es
  // un resultado malo, y antes no había forma de notarlo.
  it("dos bloques separados son DOS piezas, y la cohesión lo dice", () => {
    const r = findComponents(gridWith(12, [
      [1, 1, 1], [2, 1, 1], [1, 2, 1], [2, 2, 1], // 4 celdas
      [9, 9, 9],                                   // 1 celda suelta
    ]));
    expect(r.count).toBe(2);
    expect(r.largest).toBe(4);
    expect(r.occupied).toBe(5);
    expect(r.cohesion).toBeCloseTo(4 / 5, 6);
    expect(r.sizes).toEqual([4, 1]);
  });

  it("la conexión es por 6 vecinos: tocarse sólo en diagonal NO une", () => {
    // Dos celdas que comparten una arista pero ningún cara.
    const r = findComponents(gridWith(8, [[2, 2, 2], [3, 3, 2]]));
    expect(r.count).toBe(2);
  });

  it("dos celdas que comparten una cara sí se unen", () => {
    const r = findComponents(gridWith(8, [[2, 2, 2], [3, 2, 2]]));
    expect(r.count).toBe(1);
  });

  it("sólo informa las 8 piezas mayores, pero cuenta todas", () => {
    const cells: Array<[number, number, number]> = [];
    // 12 celdas aisladas, separadas de a dos para que no se toquen.
    for (let k = 0; k < 12; k++) cells.push([(k % 6) * 2, Math.floor(k / 6) * 2, 0]);
    const r = findComponents(gridWith(16, cells));
    expect(r.count).toBe(12);
    expect(r.sizes).toHaveLength(8);
  });

  it("no desborda la pila con una pieza grande", () => {
    // A res 32 el cubo entero son 32.768 celdas en una sola componente:
    // una versión recursiva revienta acá.
    const g = createVoxelGrid(32);
    g.occupied.fill(1);
    const r = findComponents(g);
    expect(r.count).toBe(1);
    expect(r.largest).toBe(32 * 32 * 32);
  });

  it("funciona sobre una grilla salida de voxelizePoints, no sólo armada a mano", () => {
    const pts = new Float32Array([0, 0, 0, 0.3, 0, 0, 4.9, 4.9, 4.9]);
    const r = findComponents(voxelizePoints(pts, 3, ORIGIN));
    expect(r.count).toBe(2); // los dos primeros caen juntos, el tercero lejos
  });
});
