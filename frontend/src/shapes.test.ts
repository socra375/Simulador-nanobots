import { describe, expect, it } from "vitest";
import {
  resolveShapeName,
  listSupportedNames,
  formShape,
  idleCluster,
  FORMATION_CENTER,
  IDLE_RADIUS,
} from "./shapes";

describe("resolveShapeName", () => {
  it("matchea nombres canónicos exactos", () => {
    expect(resolveShapeName("cubo")).toBe("cubo");
    expect(resolveShapeName("esfera")).toBe("esfera");
  });

  it("es insensible a mayúsculas y espacios", () => {
    expect(resolveShapeName("  ESFERA  ")).toBe("esfera");
    expect(resolveShapeName("Cubo")).toBe("cubo");
  });

  it("es insensible a acentos", () => {
    expect(resolveShapeName("pirámide")).toBe("piramide");
    expect(resolveShapeName("corazón")).toBe("corazon");
  });

  it("resuelve sinónimos a su forma canónica", () => {
    expect(resolveShapeName("bola")).toBe("esfera");
    expect(resolveShapeName("dona")).toBe("anillo");
    expect(resolveShapeName("love")).toBe("corazon");
    expect(resolveShapeName("dado")).toBe("cubo");
  });

  it("devuelve null para nombres no reconocidos", () => {
    expect(resolveShapeName("xyz123")).toBeNull();
    expect(resolveShapeName("")).toBeNull();
  });
});

describe("listSupportedNames", () => {
  it("incluye las 7 formas base", () => {
    const names = listSupportedNames();
    expect(names).toEqual(
      expect.arrayContaining(["cubo", "esfera", "piramide", "estrella", "anillo", "corazon", "cruz"]),
    );
    expect(names).toHaveLength(7);
  });
});

describe("formShape", () => {
  it("devuelve exactamente count*3 floats para cada forma soportada", () => {
    for (const name of listSupportedNames()) {
      for (const count of [1, 20, 80, 200]) {
        const points = formShape(name, count);
        expect(points).not.toBeNull();
        expect(points!.length).toBe(count * 3);
      }
    }
  });

  it("devuelve null para un nombre no reconocido", () => {
    expect(formShape("no-existe", 50)).toBeNull();
  });

  it("centra la figura en FORMATION_CENTER por defecto", () => {
    const points = formShape("esfera", 200)!;
    let sumX = 0, sumY = 0, sumZ = 0;
    for (let i = 0; i < 200; i++) {
      sumX += points[i * 3];
      sumY += points[i * 3 + 1];
      sumZ += points[i * 3 + 2];
    }
    // Con 200 puntos en una esfera de Fibonacci, el centroide debe quedar
    // muy cerca de FORMATION_CENTER (la esfera es simétrica).
    expect(sumX / 200).toBeCloseTo(FORMATION_CENTER[0], 0);
    expect(sumY / 200).toBeCloseTo(FORMATION_CENTER[1], 0);
    expect(sumZ / 200).toBeCloseTo(FORMATION_CENTER[2], 0);
  });

  it("traslada la figura a un centro custom", () => {
    const custom: [number, number, number] = [10, 10, 10];
    const points = formShape("cubo", 60, custom)!;
    // Todos los puntos de un cubo caen dentro de +-SHAPE_HALF_EXTENT del centro.
    for (let i = 0; i < 60; i++) {
      expect(Math.abs(points[i * 3] - custom[0])).toBeLessThanOrEqual(6);
      expect(Math.abs(points[i * 3 + 1] - custom[1])).toBeLessThanOrEqual(6);
      expect(Math.abs(points[i * 3 + 2] - custom[2])).toBeLessThanOrEqual(6);
    }
  });

  it("resuelve alias antes de generar (bola -> esfera funciona igual que esfera)", () => {
    const a = formShape("bola", 10, [0, 0, 0]);
    expect(a).not.toBeNull();
    expect(a!.length).toBe(30);
  });
});

describe("idleCluster", () => {
  it("devuelve exactamente count*3 floats", () => {
    const pts = idleCluster(80, [0, 0, 0]);
    expect(pts.length).toBe(240);
  });

  it("todos los puntos quedan dentro de IDLE_RADIUS del centro", () => {
    const center: [number, number, number] = [-8, -8, -8];
    const pts = idleCluster(100, center);
    for (let i = 0; i < 100; i++) {
      const dx = pts[i * 3] - center[0];
      const dy = pts[i * 3 + 1] - center[1];
      const dz = pts[i * 3 + 2] - center[2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      expect(dist).toBeLessThanOrEqual(IDLE_RADIUS + 1e-6);
      expect(dist).toBeGreaterThanOrEqual(IDLE_RADIUS * 0.5 - 1e-6);
    }
  });
});
