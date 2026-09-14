import { describe, expect, it } from "vitest";
import {
  createVoxelGrid,
  surfacePoints,
  validateCoverage,
  voxelIndex,
  voxelizePoints,
  voxelWorldCoord,
  worldToVoxel,
  type VoxelGrid,
} from "./grid";
import { SHAPE_HALF_EXTENT } from "../shapes";

const ORIGIN: readonly [number, number, number] = [0, 0, 0];

function fill(grid: VoxelGrid, pred: (x: number, y: number, z: number) => boolean): VoxelGrid {
  const { res } = grid;
  for (let vz = 0; vz < res; vz++)
    for (let vy = 0; vy < res; vy++)
      for (let vx = 0; vx < res; vx++)
        if (pred(vx, vy, vz)) grid.occupied[voxelIndex(vx, vy, vz, res)] = 1;
  return grid;
}

describe("indexado y coordenadas", () => {
  it("voxelIndex es una biyección sobre el cubo", () => {
    const res = 5;
    const vistos = new Set<number>();
    for (let vz = 0; vz < res; vz++)
      for (let vy = 0; vy < res; vy++)
        for (let vx = 0; vx < res; vx++) vistos.add(voxelIndex(vx, vy, vz, res));
    expect(vistos.size).toBe(res ** 3);
    expect(Math.min(...vistos)).toBe(0);
    expect(Math.max(...vistos)).toBe(res ** 3 - 1);
  });

  // Los 7 tests de visual-hull.test.ts fijan la OCUPACIÓN pero no las
  // coordenadas de salida: verificado por mutación (escalar el mundo a
  // 2.1*half en vez de 2*half los dejaba pasar igual). Esto cubre ese
  // hueco, para que "la grilla nueva da lo mismo que la de antes" sea una
  // afirmación respaldada y no una suposición.
  it("voxelWorldCoord da el CENTRO de cada celda, con valores exactos", () => {
    // res 4 sobre [-6, 6]: celdas de ancho 3, centros en -4.5, -1.5, 1.5, 4.5.
    expect(voxelWorldCoord(0, 4, 6)).toBeCloseTo(-4.5, 12);
    expect(voxelWorldCoord(1, 4, 6)).toBeCloseTo(-1.5, 12);
    expect(voxelWorldCoord(2, 4, 6)).toBeCloseTo(1.5, 12);
    expect(voxelWorldCoord(3, 4, 6)).toBeCloseTo(4.5, 12);
  });

  it("los centros caen SIEMPRE dentro de [-half, half]", () => {
    for (const res of [1, 2, 7, 48]) {
      expect(voxelWorldCoord(0, res, SHAPE_HALF_EXTENT)).toBeGreaterThan(-SHAPE_HALF_EXTENT);
      expect(voxelWorldCoord(res - 1, res, SHAPE_HALF_EXTENT)).toBeLessThan(SHAPE_HALF_EXTENT);
    }
  });

  it("worldToVoxel es la inversa de voxelWorldCoord", () => {
    const res = 48;
    for (let v = 0; v < res; v++) {
      const w = voxelWorldCoord(v, res, SHAPE_HALF_EXTENT);
      expect(worldToVoxel(w, res, SHAPE_HALF_EXTENT)).toBe(v);
    }
  });

  it("worldToVoxel devuelve -1 fuera del cubo, en vez de un índice inventado", () => {
    const res = 48;
    expect(worldToVoxel(SHAPE_HALF_EXTENT * 1.5, res, SHAPE_HALF_EXTENT)).toBe(-1);
    expect(worldToVoxel(-SHAPE_HALF_EXTENT * 1.5, res, SHAPE_HALF_EXTENT)).toBe(-1);
  });
});

describe("voxelizePoints", () => {
  it("marca la celda de cada punto y cuenta cuántos cayeron en ella", () => {
    const res = 8;
    const c = voxelWorldCoord(3, res, SHAPE_HALF_EXTENT);
    const pts = new Float32Array([c, c, c, c, c, c, c, c, c]); // 3 puntos iguales
    const grid = voxelizePoints(pts, 3, ORIGIN, res, SHAPE_HALF_EXTENT);
    const at = voxelIndex(3, 3, 3, res);
    expect(grid.occupied[at]).toBe(1);
    expect(grid.density[at]).toBe(3);
    expect(grid.occupied.reduce((a, b) => a + b, 0)).toBe(1);
  });

  it("la densidad satura en 255 en vez de desbordar el byte", () => {
    const res = 4;
    const c = voxelWorldCoord(1, res, SHAPE_HALF_EXTENT);
    const n = 400;
    const pts = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pts[i * 3] = c; pts[i * 3 + 1] = c; pts[i * 3 + 2] = c; }
    const grid = voxelizePoints(pts, n, ORIGIN, res, SHAPE_HALF_EXTENT);
    expect(grid.density[voxelIndex(1, 1, 1, res)]).toBe(255);
  });

  it("descarta en silencio los puntos fuera del cubo (el jitter de las formas se pasa un poco)", () => {
    const fuera = SHAPE_HALF_EXTENT * 3;
    const pts = new Float32Array([fuera, 0, 0, 0, fuera, 0, 0, 0, 0]);
    const grid = voxelizePoints(pts, 3, ORIGIN, 8, SHAPE_HALF_EXTENT);
    expect(grid.occupied.reduce((a, b) => a + b, 0)).toBe(1); // sólo el del centro
  });

  it("el centro desplaza la figura: los puntos se voxelizan relativos a él", () => {
    const res = 8;
    const centro: readonly [number, number, number] = [4, 2, 4];
    const pts = new Float32Array([4, 2, 4]); // exactamente en el centro
    const grid = voxelizePoints(pts, 1, centro, res, SHAPE_HALF_EXTENT);
    expect(grid.occupied[voxelIndex(res / 2, res / 2, res / 2, res)]).toBe(1);
  });

  it("0 puntos da una grilla vacía, sin romperse", () => {
    const grid = voxelizePoints(new Float32Array(0), 0, ORIGIN, 8, SHAPE_HALF_EXTENT);
    expect(grid.occupied.every((v) => v === 0)).toBe(true);
    expect(surfacePoints(grid)).toHaveLength(0);
  });
});

describe("surfacePoints", () => {
  it("un cubo sólido devuelve sólo su cáscara, no el interior", () => {
    const res = 6;
    const grid = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), (x, y, z) =>
      x >= 1 && x <= 4 && y >= 1 && y <= 4 && z >= 1 && z <= 4,
    );
    // Bloque 4³ = 64 celdas; el interior 2³ = 8 no es superficie.
    expect(surfacePoints(grid)).toHaveLength((64 - 8) * 3);
  });

  it("las celdas pegadas al borde de la grilla cuentan como superficie", () => {
    const res = 4;
    const grid = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), () => true); // cubo lleno
    // Sin el criterio de borde, el interior 2³ quedaría afuera; con él,
    // todo el cubo es superficie porque ninguna celda tiene los 6 vecinos
    // dentro de la grilla... salvo ninguna a res=4: el interior 2x2x2 SÍ
    // los tiene, así que quedan fuera.
    expect(surfacePoints(grid)).toHaveLength((res ** 3 - 8) * 3);
  });

  it("todos los puntos devueltos son centros de celda válidos", () => {
    const res = 8;
    const grid = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), (x, y, z) => x + y + z < 6);
    const pts = surfacePoints(grid);
    const centros = new Set(
      Array.from({ length: res }, (_, v) => voxelWorldCoord(v, res, SHAPE_HALF_EXTENT).toFixed(9)),
    );
    expect(pts.length).toBeGreaterThan(0);
    for (let i = 0; i < pts.length; i++) {
      expect(Number.isNaN(pts[i])).toBe(false);
      expect(centros.has(pts[i].toFixed(9))).toBe(true);
    }
  });
});

describe("validateCoverage", () => {
  it("cobertura total cuando los agentes ocupan toda la figura", () => {
    const res = 6;
    const target = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), (x) => x < 3);
    const actual = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), (x) => x < 3);
    const r = validateCoverage(target, actual);
    expect(r.coverage).toBe(1);
    expect(r.missing).toHaveLength(0);
    expect(r.covered).toBe(r.target);
  });

  it("cobertura a medias: reporta el hueco exacto", () => {
    const res = 4;
    const target = createVoxelGrid(res, SHAPE_HALF_EXTENT);
    target.occupied[voxelIndex(0, 0, 0, res)] = 1;
    target.occupied[voxelIndex(1, 0, 0, res)] = 1;
    const actual = createVoxelGrid(res, SHAPE_HALF_EXTENT);
    actual.occupied[voxelIndex(0, 0, 0, res)] = 1;

    const r = validateCoverage(target, actual);
    expect(r.target).toBe(2);
    expect(r.covered).toBe(1);
    expect(r.coverage).toBeCloseTo(0.5, 12);
    expect(Array.from(r.missing)).toEqual([voxelIndex(1, 0, 0, res)]);
  });

  it("los agentes de sobra (fuera de la figura) no inflan la cobertura", () => {
    const res = 4;
    const target = createVoxelGrid(res, SHAPE_HALF_EXTENT);
    target.occupied[voxelIndex(0, 0, 0, res)] = 1;
    const actual = fill(createVoxelGrid(res, SHAPE_HALF_EXTENT), () => true);
    const r = validateCoverage(target, actual);
    expect(r.target).toBe(1);
    expect(r.coverage).toBe(1);
  });

  it("una figura vacía da cobertura 1, no NaN por dividir por cero", () => {
    const res = 4;
    const r = validateCoverage(createVoxelGrid(res, SHAPE_HALF_EXTENT), createVoxelGrid(res, SHAPE_HALF_EXTENT));
    expect(r.coverage).toBe(1);
    expect(Number.isNaN(r.coverage)).toBe(false);
  });

  it("comparar grillas de distinta resolución es un error, no un resultado silencioso", () => {
    expect(() =>
      validateCoverage(createVoxelGrid(4, SHAPE_HALF_EXTENT), createVoxelGrid(8, SHAPE_HALF_EXTENT)),
    ).toThrow(/resolución/);
  });
});

describe("barrido de escala", () => {
  it("aguanta desde 0 hasta 50.000 puntos sin NaN ni desbordes", () => {
    for (const n of [0, 1, 100, 1000, 10000, 50000]) {
      const pts = new Float32Array(n * 3);
      for (let i = 0; i < n * 3; i++) pts[i] = ((i * 37) % 100) / 100 * SHAPE_HALF_EXTENT - SHAPE_HALF_EXTENT / 2;
      const grid = voxelizePoints(pts, n, ORIGIN, 48, SHAPE_HALF_EXTENT);
      const pts2 = surfacePoints(grid);
      expect(pts2.length % 3).toBe(0);
      for (let i = 0; i < pts2.length; i++) expect(Number.isNaN(pts2[i])).toBe(false);
    }
  });
});
