import { describe, expect, it } from "vitest";
import {
  resolveShapeName,
  listSupportedNames,
  formShapeWithRoles,
  idleCluster,
  FORMATION_CENTER,
  IDLE_RADIUS,
  NANOBOT_ROLE,
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

describe("formShapeWithRoles", () => {
  it("devuelve exactamente count*3 floats y count roles para cada forma soportada", () => {
    for (const name of listSupportedNames()) {
      for (const count of [1, 20, 80, 200, 10000]) {
        const formation = formShapeWithRoles(name, count);
        expect(formation).not.toBeNull();
        expect(formation!.points.length).toBe(count * 3);
        expect(formation!.roles.length).toBe(count);
        expect(formation!.relationSpans.length).toBe(count * 6);
      }
    }
  });

  it("las anclas de ESTRUCTURA quedan parejamente distribuidas (farthest-point sampling, sin duplicados pegados)", () => {
    // Con un muestreo al azar crudo, algunas anclas caerían muy cerca unas
    // de otras (huecos en otras zonas) — farthest-point sampling evita eso.
    // No comparamos contra el muestreo crudo (no expuesto públicamente):
    // alcanza con verificar que ninguna ancla quede pegada a su vecina más
    // cercana, para varias formas y tamaños.
    for (const name of ["cubo", "esfera", "estrella"]) {
      for (const count of [100, 400]) {
        const formation = formShapeWithRoles(name, count)!;
        const anchors: number[] = [];
        for (let i = 0; i < count; i++) {
          if (formation.roles[i] === NANOBOT_ROLE.STRUCTURE) anchors.push(i);
        }
        expect(anchors.length).toBeGreaterThan(3);

        let minNearestDist = Infinity;
        for (const a of anchors) {
          let nearest = Infinity;
          for (const b of anchors) {
            if (a === b) continue;
            const dx = formation.points[a * 3 + 0] - formation.points[b * 3 + 0];
            const dy = formation.points[a * 3 + 1] - formation.points[b * 3 + 1];
            const dz = formation.points[a * 3 + 2] - formation.points[b * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < nearest) nearest = dist;
          }
          if (nearest < minNearestDist) minNearestDist = nearest;
        }
        // Umbral laxo a propósito (solo detecta clustering catastrófico,
        // p.ej. si farthest-point sampling se rompiera y devolviera
        // duplicados exactos o casi-duplicados).
        expect(minNearestDist).toBeGreaterThan(0.15);
      }
    }
  });

  it("cada agente RELACION trae 2 anclas distintas y no colapsadas en el mismo punto", () => {
    const formation = formShapeWithRoles("cubo", 500)!;
    let checked = 0;
    for (let i = 0; i < 500; i++) {
      if (formation.roles[i] !== NANOBOT_ROLE.RELATION) continue;
      const ax = formation.relationSpans[i * 6 + 0];
      const ay = formation.relationSpans[i * 6 + 1];
      const az = formation.relationSpans[i * 6 + 2];
      const bx = formation.relationSpans[i * 6 + 3];
      const by = formation.relationSpans[i * 6 + 4];
      const bz = formation.relationSpans[i * 6 + 5];
      const dist = Math.hypot(ax - bx, ay - by, az - bz);
      expect(dist).toBeGreaterThan(0);
      // el punto físico (target) del agente debe ser el punto medio del segmento
      const midX = (ax + bx) / 2;
      const midY = (ay + by) / 2;
      const midZ = (az + bz) / 2;
      expect(formation.points[i * 3 + 0]).toBeCloseTo(midX, 5);
      expect(formation.points[i * 3 + 1]).toBeCloseTo(midY, 5);
      expect(formation.points[i * 3 + 2]).toBeCloseTo(midZ, 5);
      checked++;
    }
    expect(checked).toBeGreaterThan(0);
  });

  it("las conexiones de RELACION dejan TODAS las anclas de ESTRUCTURA en una sola red conectada", () => {
    for (const count of [80, 500, 2000]) {
      const formation = formShapeWithRoles("estrella", count)!;
      const structurePoints: string[] = [];
      const pointKey = (x: number, y: number, z: number) => `${x.toFixed(4)},${y.toFixed(4)},${z.toFixed(4)}`;
      const indexByKey = new Map<string, number>();
      for (let i = 0; i < count; i++) {
        if (formation.roles[i] !== NANOBOT_ROLE.STRUCTURE) continue;
        const key = pointKey(formation.points[i * 3], formation.points[i * 3 + 1], formation.points[i * 3 + 2]);
        indexByKey.set(key, structurePoints.length);
        structurePoints.push(key);
      }
      // Union-Find sobre los índices de anclas, uniendo cada arista de RELACION.
      const parent = structurePoints.map((_, i) => i);
      const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
      const union = (a: number, b: number) => {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) parent[ra] = rb;
      };
      for (let i = 0; i < count; i++) {
        if (formation.roles[i] !== NANOBOT_ROLE.RELATION) continue;
        const aKey = pointKey(
          formation.relationSpans[i * 6 + 0],
          formation.relationSpans[i * 6 + 1],
          formation.relationSpans[i * 6 + 2],
        );
        const bKey = pointKey(
          formation.relationSpans[i * 6 + 3],
          formation.relationSpans[i * 6 + 4],
          formation.relationSpans[i * 6 + 5],
        );
        const a = indexByKey.get(aKey);
        const b = indexByKey.get(bKey);
        expect(a).not.toBeUndefined();
        expect(b).not.toBeUndefined();
        union(a!, b!);
      }
      const roots = new Set(parent.map((_, i) => find(i)));
      expect(roots.size).toBe(1);
    }
  });

  it("los agentes ESTRUCTURA/DETALLE no traen relationSpans (quedan en 0)", () => {
    const formation = formShapeWithRoles("esfera", 300)!;
    for (let i = 0; i < 300; i++) {
      if (formation.roles[i] === NANOBOT_ROLE.RELATION) continue;
      for (let k = 0; k < 6; k++) {
        expect(formation.relationSpans[i * 6 + k]).toBe(0);
      }
    }
  });

  it("devuelve null para un nombre no reconocido", () => {
    expect(formShapeWithRoles("no-existe", 50)).toBeNull();
  });

  it("reparte los 4 roles aproximadamente 13/38/24/25 (ESTRUCTURA 10-15%, RELACION 35-40% del TOTAL) y usa solo valores válidos", () => {
    const formation = formShapeWithRoles("esfera", 1000)!;
    let structure = 0, relation = 0, detail = 0, color = 0;
    for (const role of formation.roles) {
      expect([NANOBOT_ROLE.STRUCTURE, NANOBOT_ROLE.RELATION, NANOBOT_ROLE.DETAIL, NANOBOT_ROLE.COLOR]).toContain(role);
      if (role === NANOBOT_ROLE.STRUCTURE) structure++;
      else if (role === NANOBOT_ROLE.RELATION) relation++;
      else if (role === NANOBOT_ROLE.DETAIL) detail++;
      else color++;
    }
    expect(structure + relation + detail + color).toBe(1000);
    // Todas las fracciones son sobre el TOTAL (no una sobre el resto de la
    // otra) para que RELACION siempre tenga margen de sobra sobre el
    // tamaño del árbol de expansión mínima (ver buildRelationEdges) y
    // cubra TODAS las conexiones de ESTRUCTURA, no solo una parte.
    expect(structure).toBeGreaterThan(90); // >9%
    expect(structure).toBeLessThan(160); // <16%
    expect(relation).toBeGreaterThan(330); // >33%
    expect(relation).toBeLessThan(420); // <42%
    expect(detail).toBeGreaterThan(180); // ~24%
    expect(detail).toBeLessThan(300);
    expect(color).toBeGreaterThan(180); // ~25%: cubre la silueta igual que DETALLE
    expect(color).toBeLessThan(300);
  });

  it("con counts muy chicos (< 4) sigue devolviendo roles válidos sin crashear", () => {
    for (const count of [0, 1, 2, 3]) {
      const formation = formShapeWithRoles("cubo", count)!;
      expect(formation.points.length).toBe(count * 3);
      expect(formation.roles.length).toBe(count);
    }
  });

  it("centra la figura en FORMATION_CENTER por defecto", () => {
    const formation = formShapeWithRoles("esfera", 200)!;
    const points = formation.points;
    let sumX = 0, sumY = 0, sumZ = 0;
    for (let i = 0; i < 200; i++) {
      sumX += points[i * 3];
      sumY += points[i * 3 + 1];
      sumZ += points[i * 3 + 2];
    }
    // La esfera es simétrica: el centroide debe quedar cerca de FORMATION_CENTER
    // (tolerancia amplia porque ahora la mezcla estructura/relación/detalle
    // usa sub-muestras más chicas y menos perfectamente simétricas que antes).
    expect(Math.abs(sumX / 200 - FORMATION_CENTER[0])).toBeLessThan(1.5);
    expect(Math.abs(sumY / 200 - FORMATION_CENTER[1])).toBeLessThan(1.5);
    expect(Math.abs(sumZ / 200 - FORMATION_CENTER[2])).toBeLessThan(1.5);
  });

  it("traslada la figura a un centro custom", () => {
    const custom: [number, number, number] = [10, 10, 10];
    const formation = formShapeWithRoles("cubo", 60, custom)!;
    const points = formation.points;
    // Todos los puntos de un cubo caen dentro de +-SHAPE_HALF_EXTENT del centro.
    for (let i = 0; i < 60; i++) {
      expect(Math.abs(points[i * 3] - custom[0])).toBeLessThanOrEqual(6);
      expect(Math.abs(points[i * 3 + 1] - custom[1])).toBeLessThanOrEqual(6);
      expect(Math.abs(points[i * 3 + 2] - custom[2])).toBeLessThanOrEqual(6);
    }
  });

  it("resuelve alias antes de generar (bola -> esfera funciona igual que esfera)", () => {
    const formation = formShapeWithRoles("bola", 10, [0, 0, 0]);
    expect(formation).not.toBeNull();
    expect(formation!.points.length).toBe(30);
    expect(formation!.roles.length).toBe(10);
  });
});

describe("idleCluster", () => {
  it("devuelve exactamente count*3 floats", () => {
    const pts = idleCluster(80, [0, 0, 0]);
    expect(pts.length).toBe(240);
  });

  it("todos los puntos quedan dentro de IDLE_RADIUS del centro", () => {
    const center: [number, number, number] = [-8, 8, -8];
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
