import { describe, expect, it } from "vitest";
import {
  surfacePoints,
  surfacePointsWithColor,
  voxelIndex,
  voxelizePoints,
  voxelizePointsWithColor,
} from "./grid";

const ORIGIN: readonly [number, number, number] = [0, 0, 0];

describe("voxelizePointsWithColor", () => {
  it("reserva color y marca las mismas celdas que voxelizePoints", () => {
    const pts = new Float32Array([0, 0, 0, 2, 1, -1, -3, 2, 0]);
    const cols = Uint8Array.from([255, 0, 0, 0, 255, 0, 0, 0, 255]);
    const conColor = voxelizePointsWithColor(pts, cols, 3, ORIGIN);
    const sinColor = voxelizePoints(pts, 3, ORIGIN);
    expect(conColor.color).toBeDefined();
    expect(Array.from(conColor.occupied)).toEqual(Array.from(sinColor.occupied));
    expect(Array.from(conColor.density)).toEqual(Array.from(sinColor.density));
  });

  it("una celda con un solo punto conserva su color exacto", () => {
    const g = voxelizePointsWithColor(
      new Float32Array([1, 1, 1]),
      Uint8Array.from([12, 34, 56]),
      1,
      ORIGIN,
    );
    const at = g.occupied.indexOf(1);
    expect(g.color![at * 3 + 0]).toBe(12);
    expect(g.color![at * 3 + 1]).toBe(34);
    expect(g.color![at * 3 + 2]).toBe(56);
  });

  // Promediar y no "quedarse con el último" importa: el orden de
  // recorrido de la nube no debería cambiar el color del objeto.
  it("varios puntos en la misma celda dan el PROMEDIO, no el último", () => {
    const pts = new Float32Array([0.01, 0.01, 0.01, 0.02, 0.02, 0.02]);
    const cols = Uint8Array.from([200, 0, 0, 0, 0, 100]);
    const g = voxelizePointsWithColor(pts, cols, 2, ORIGIN);
    const at = g.occupied.indexOf(1);
    expect(g.color![at * 3 + 0]).toBe(100); // (200+0)/2
    expect(g.color![at * 3 + 2]).toBe(50);  // (0+100)/2
  });

  it("las celdas vacías quedan en negro, no con basura", () => {
    const g = voxelizePointsWithColor(new Float32Array([0, 0, 0]), Uint8Array.from([9, 9, 9]), 1, ORIGIN);
    const vacia = g.occupied.indexOf(0);
    expect(g.color![vacia * 3]).toBe(0);
  });

  it("los puntos fuera del cubo se ignoran, igual que en voxelizePoints", () => {
    const g = voxelizePointsWithColor(
      new Float32Array([1000, 1000, 1000]),
      Uint8Array.from([255, 255, 255]),
      1,
      ORIGIN,
    );
    expect(g.occupied.some((v) => v === 1)).toBe(false);
  });
});

describe("surfacePointsWithColor", () => {
  it("devuelve exactamente los mismos puntos que surfacePoints", () => {
    const pts = new Float32Array(300);
    const cols = new Uint8Array(300);
    for (let i = 0; i < 100; i++) {
      pts[i * 3] = (i % 5) - 2;
      pts[i * 3 + 1] = (Math.floor(i / 5) % 5) - 2;
      pts[i * 3 + 2] = Math.floor(i / 25) - 2;
      cols[i * 3] = i * 2;
    }
    const g = voxelizePointsWithColor(pts, cols, 100, ORIGIN);
    const soloPuntos = surfacePoints(g);
    const conColor = surfacePointsWithColor(g);
    expect(conColor.count * 3).toBe(soloPuntos.length);
    for (let i = 0; i < soloPuntos.length; i++) {
      expect(conColor.points[i]).toBeCloseTo(soloPuntos[i], 6);
    }
  });

  it("el color de cada punto de superficie es el de su celda", () => {
    const g = voxelizePointsWithColor(
      new Float32Array([0, 0, 0]),
      Uint8Array.from([11, 22, 33]),
      1,
      ORIGIN,
    );
    const s = surfacePointsWithColor(g);
    expect(s.count).toBe(1);
    expect(Array.from(s.colors)).toEqual([11, 22, 33]);
  });

  // Distinguir "sin dato" de "gris" importa para la UI: no es lo mismo un
  // objeto gris que uno cuyo color no se pudo determinar.
  it("una grilla SIN color devuelve blanco, no ceros disfrazados de negro", () => {
    const g = voxelizePoints(new Float32Array([0, 0, 0]), 1, ORIGIN);
    const s = surfacePointsWithColor(g);
    expect(Array.from(s.colors)).toEqual([255, 255, 255]);
  });
});

describe("surfacePoints sin number[] intermedio", () => {
  it("devuelve un Float32Array del largo exacto, sin capacidad de sobra", () => {
    const g = voxelizePoints(new Float32Array([0, 0, 0, 3, 3, 3]), 2, ORIGIN);
    const s = surfacePoints(g);
    expect(s).toBeInstanceOf(Float32Array);
    expect(s.length % 3).toBe(0);
    expect(s.length).toBe(2 * 3);
  });

  it("un bloque macizo sólo devuelve su cáscara, no el interior", () => {
    const g = voxelizePoints(new Float32Array(0), 0, ORIGIN);
    const res = g.res;
    // Cubo macizo de 5x5x5 bien adentro de la grilla.
    for (let x = 10; x < 15; x++)
      for (let y = 10; y < 15; y++)
        for (let z = 10; z < 15; z++) g.occupied[voxelIndex(x, y, z, res)] = 1;
    const s = surfacePoints(g);
    // 125 celdas, 27 interiores (3x3x3) -> 98 de superficie.
    expect(s.length / 3).toBe(125 - 27);
  });
});
