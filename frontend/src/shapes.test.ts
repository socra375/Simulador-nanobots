import { describe, expect, it, vi } from "vitest";
import {
  resolveShapeName,
  listSupportedNames,
  formShapeWithRoles,
  buildExoskeleton,
  idleCluster,
  FORMATION_CENTER,
  IDLE_RADIUS,
  NANOBOT_ROLE,
  CABEZA_PARTS,
  registerCustomScan,
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
  it("incluye las 16 formas soportadas", () => {
    const names = listSupportedNames();
    expect(names).toEqual(
      expect.arrayContaining([
        "cubo", "esfera", "piramide", "estrella", "anillo", "corazon", "cruz",
        "carro", "telefono", "persona",
        "cabeza", "torso", "brazo", "pierna", "mano", "pie",
      ]),
    );
    expect(names).toHaveLength(16);
  });

  it("resuelve alias de las formas nuevas (auto/coche/vehiculo, celular/movil/smartphone, personaje/humano/gente)", () => {
    expect(resolveShapeName("auto")).toBe("carro");
    expect(resolveShapeName("coche")).toBe("carro");
    expect(resolveShapeName("vehiculo")).toBe("carro");
    expect(resolveShapeName("celular")).toBe("telefono");
    expect(resolveShapeName("movil")).toBe("telefono");
    expect(resolveShapeName("smartphone")).toBe("telefono");
    expect(resolveShapeName("personaje")).toBe("persona");
    expect(resolveShapeName("humano")).toBe("persona");
    expect(resolveShapeName("gente")).toBe("persona");
  });

  it("resuelve alias de las partes del cuerpo (Fase 17)", () => {
    expect(resolveShapeName("brazos")).toBe("brazo");
    expect(resolveShapeName("piernas")).toBe("pierna");
    expect(resolveShapeName("pies")).toBe("pie");
    expect(resolveShapeName("manos")).toBe("mano");
    expect(resolveShapeName("tronco")).toBe("torso");
  });

  it("resuelve brazo y pierna a sí mismos, sin intercambiarse (Fase 18)", () => {
    expect(resolveShapeName("brazo")).toBe("brazo");
    expect(resolveShapeName("pierna")).toBe("pierna");
  });
});

describe("formShapeWithRoles", () => {
  it("devuelve exactamente count*3 floats y count roles para cada forma soportada, sin NaN", () => {
    for (const name of listSupportedNames()) {
      for (const count of [1, 20, 80, 200, 10000]) {
        const formation = formShapeWithRoles(name, count);
        expect(formation).not.toBeNull();
        expect(formation!.points.length).toBe(count * 3);
        expect(formation!.roles.length).toBe(count);
        expect(formation!.relationSpans.length).toBe(count * 6);
        expect(formation!.colorWave.length).toBe(count);
        expect(formation!.points.some((v) => Number.isNaN(v))).toBe(false);
      }
    }
  });

  it("los agentes ESTRUCTURA/RELACION quedan en 0 (el exoesqueleto ahora lo arma Microbots, ver buildExoskeleton)", () => {
    const formation = formShapeWithRoles("esfera", 500)!;
    for (const role of formation.roles) {
      expect(role === NANOBOT_ROLE.STRUCTURE || role === NANOBOT_ROLE.RELATION).toBe(false);
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

  it("COLOR es un 75% FIJO del total y DETALLE absorbe el 25% restante (ESTRUCTURA/RELACION quedan en 0)", () => {
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
    expect(structure).toBe(0);
    expect(relation).toBe(0);
    // COLOR: 75% FIJO del total; DETALLE se lleva el 25% restante entero,
    // ya que el exoesqueleto (antes ESTRUCTURA/RELACION) ahora lo arma
    // Microbots por separado (ver buildExoskeleton).
    expect(color).toBe(750);
    expect(detail).toBe(250);
  });

  it("sin clusters de color explícitos, todos los agentes COLOR quedan en la ola 0 (colorWaveCount=1)", () => {
    const formation = formShapeWithRoles("esfera", 500)!;
    expect(formation.colorWaveCount).toBe(1);
    for (let i = 0; i < 500; i++) {
      if (formation.roles[i] === NANOBOT_ROLE.COLOR) expect(formation.colorWave[i]).toBe(0);
    }
  });

  it("con varios clusters de color, cada ola de COLOR tiene un tamaño proporcional a su peso y la suma cierra exacto", () => {
    const clusters = [
      { color: 0xff0000, weight: 0.6 },
      { color: 0x00ff00, weight: 0.3 },
      { color: 0x0000ff, weight: 0.1 },
    ];
    const formation = formShapeWithRoles("esfera", 1000, undefined, clusters)!;
    expect(formation.colorWaveCount).toBe(3);
    const waveCounts = [0, 0, 0];
    let colorTotal = 0;
    for (let i = 0; i < 1000; i++) {
      if (formation.roles[i] !== NANOBOT_ROLE.COLOR) continue;
      waveCounts[formation.colorWave[i]]++;
      colorTotal++;
    }
    expect(colorTotal).toBe(750); // 75% fijo del total, ver test de ratios
    expect(waveCounts[0] + waveCounts[1] + waveCounts[2]).toBe(colorTotal);
    // Proporciones aproximadas 60/30/10 dentro del budget de COLOR.
    expect(waveCounts[0]).toBeGreaterThan(waveCounts[1]);
    expect(waveCounts[1]).toBeGreaterThan(waveCounts[2]);
    expect(waveCounts[0] / colorTotal).toBeCloseTo(0.6, 1);
  });

  it("'cabeza' colorea por parte anatómica (piel/cabello/ojos/labios) con tonos fijos, ignorando la foto adjuntada", () => {
    const photoClusters = [
      { color: 0x123456, weight: 0.5 },
      { color: 0xabcdef, weight: 0.5 },
    ];
    const formation = formShapeWithRoles("cabeza", 2000, undefined, photoClusters)!;
    expect(formation.colorWaveCount).toBe(CABEZA_PARTS.length);
    expect(formation.colorClusters).toEqual(
      CABEZA_PARTS.map((p) => ({ color: p.color, weight: p.weight })),
    );
    // Ninguno de los colores de la foto "se cuela" en el resultado.
    for (const c of formation.colorClusters) {
      expect(photoClusters.some((p) => p.color === c.color)).toBe(false);
    }
  });

  it("otras formas (no 'cabeza') siguen coloreando desde los clusters de la foto, sin cambios", () => {
    const photoClusters = [{ color: 0x123456, weight: 1 }];
    const formation = formShapeWithRoles("persona", 500, undefined, photoClusters)!;
    expect(formation.colorClusters).toEqual(photoClusters);
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

describe("buildExoskeleton", () => {
  it("devuelve exactamente count*3 floats sin NaN, para varios counts y formas, incluyendo counts chicos", () => {
    for (const name of ["cubo", "esfera", "persona", "carro", "cabeza", "torso", "brazo", "pierna", "mano", "pie"]) {
      for (const count of [0, 1, 2, 3, 50, 500, 5000]) {
        const exo = buildExoskeleton(name, count);
        expect(exo).not.toBeNull();
        expect(exo!.points.length).toBe(count * 3);
        expect(exo!.isBeam.length).toBe(count);
        expect(exo!.relationSpans.length).toBe(count * 6);
        expect(exo!.points.some((v) => Number.isNaN(v))).toBe(false);
      }
    }
  });

  it("devuelve null para un nombre no reconocido", () => {
    expect(buildExoskeleton("no-existe", 50)).toBeNull();
  });

  it("las formas humanoides (hueso literal) devuelven isBeam todo en 0 (sin vigas, se lee sólido por densidad)", () => {
    for (const name of ["persona", "cabeza", "torso", "brazo", "pierna", "mano", "pie"]) {
      const exo = buildExoskeleton(name, 300)!;
      expect(exo.isBeam.some((v) => v !== 0)).toBe(false);
      expect(exo.relationSpans.every((v) => v === 0)).toBe(true);
    }
  });

  it("las formas humanoides se trasladan a un centro custom (mismo desplazamiento que FORMATION_CENTER)", () => {
    // Math.random fijo para que ambas llamadas muestreen EXACTAMENTE los
    // mismos puntos crudos — así cualquier diferencia entre ellas viene
    // solo de `center`, no del muestreo aleatorio interno de brazo().
    let seed = 1;
    const spy = vi.spyOn(Math, "random").mockImplementation(() => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    });
    try {
      const custom: [number, number, number] = [10, 10, 10];
      seed = 1;
      const atDefault = buildExoskeleton("brazo", 60, FORMATION_CENTER)!;
      seed = 1;
      const atCustom = buildExoskeleton("brazo", 60, custom)!;
      for (let i = 0; i < 60 * 3; i++) {
        const axis = i % 3;
        expect(atCustom.points[i]).toBeCloseTo(atDefault.points[i] + (custom[axis] - FORMATION_CENTER[axis]), 5);
      }
    } finally {
      spy.mockRestore();
    }
  });

  it("los nodos (isBeam=0) quedan parejamente distribuidos (farthest-point sampling, sin duplicados pegados)", () => {
    for (const name of ["cubo", "esfera", "estrella"]) {
      for (const count of [100, 400]) {
        const exo = buildExoskeleton(name, count)!;
        const nodes: number[] = [];
        for (let i = 0; i < count; i++) {
          if (!exo.isBeam[i]) nodes.push(i);
        }
        expect(nodes.length).toBeGreaterThan(3);

        let minNearestDist = Infinity;
        for (const a of nodes) {
          let nearest = Infinity;
          for (const b of nodes) {
            if (a === b) continue;
            const dx = exo.points[a * 3 + 0] - exo.points[b * 3 + 0];
            const dy = exo.points[a * 3 + 1] - exo.points[b * 3 + 1];
            const dz = exo.points[a * 3 + 2] - exo.points[b * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < nearest) nearest = dist;
          }
          if (nearest < minNearestDist) minNearestDist = nearest;
        }
        // Umbral laxo a propósito (solo detecta clustering catastrófico).
        expect(minNearestDist).toBeGreaterThan(0.15);
      }
    }
  });

  it("cada viga (isBeam=1) trae 2 anclas distintas y su punto es el punto medio del segmento", () => {
    const exo = buildExoskeleton("cubo", 500)!;
    let checked = 0;
    for (let i = 0; i < 500; i++) {
      if (!exo.isBeam[i]) continue;
      const ax = exo.relationSpans[i * 6 + 0];
      const ay = exo.relationSpans[i * 6 + 1];
      const az = exo.relationSpans[i * 6 + 2];
      const bx = exo.relationSpans[i * 6 + 3];
      const by = exo.relationSpans[i * 6 + 4];
      const bz = exo.relationSpans[i * 6 + 5];
      expect(Math.hypot(ax - bx, ay - by, az - bz)).toBeGreaterThan(0);
      expect(exo.points[i * 3 + 0]).toBeCloseTo((ax + bx) / 2, 5);
      expect(exo.points[i * 3 + 1]).toBeCloseTo((ay + by) / 2, 5);
      expect(exo.points[i * 3 + 2]).toBeCloseTo((az + bz) / 2, 5);
      checked++;
    }
    expect(checked).toBeGreaterThan(0);
  });

  it("las vigas dejan TODOS los nodos en una sola red conectada", () => {
    for (const count of [80, 500, 5000]) {
      const exo = buildExoskeleton("estrella", count)!;
      const pointKey = (x: number, y: number, z: number) => `${x.toFixed(4)},${y.toFixed(4)},${z.toFixed(4)}`;
      const indexByKey = new Map<string, number>();
      const nodeKeys: string[] = [];
      for (let i = 0; i < count; i++) {
        if (exo.isBeam[i]) continue;
        const key = pointKey(exo.points[i * 3], exo.points[i * 3 + 1], exo.points[i * 3 + 2]);
        indexByKey.set(key, nodeKeys.length);
        nodeKeys.push(key);
      }
      const parent = nodeKeys.map((_, i) => i);
      const find = (x: number): number => (parent[x] === x ? x : (parent[x] = find(parent[x])));
      const union = (a: number, b: number) => {
        const ra = find(a);
        const rb = find(b);
        if (ra !== rb) parent[ra] = rb;
      };
      for (let i = 0; i < count; i++) {
        if (!exo.isBeam[i]) continue;
        const aKey = pointKey(exo.relationSpans[i * 6 + 0], exo.relationSpans[i * 6 + 1], exo.relationSpans[i * 6 + 2]);
        const bKey = pointKey(exo.relationSpans[i * 6 + 3], exo.relationSpans[i * 6 + 4], exo.relationSpans[i * 6 + 5]);
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

  it("traslada el exoesqueleto a un centro custom", () => {
    const custom: [number, number, number] = [10, 10, 10];
    const exo = buildExoskeleton("cubo", 60, custom)!;
    for (let i = 0; i < 60; i++) {
      expect(Math.abs(exo.points[i * 3] - custom[0])).toBeLessThanOrEqual(6);
      expect(Math.abs(exo.points[i * 3 + 1] - custom[1])).toBeLessThanOrEqual(6);
      expect(Math.abs(exo.points[i * 3 + 2] - custom[2])).toBeLessThanOrEqual(6);
    }
  });
});

describe("registerCustomScan", () => {
  it("enchufa una nube de puntos externa como una forma más, resolvible por nombre", () => {
    const scanned = new Float32Array([1, 2, 3, 4, 5, 6, 7, 8, 9]); // 3 puntos
    const name = registerCustomScan(scanned);
    expect(resolveShapeName(name)).toBe(name);

    const formation = formShapeWithRoles(name, 500)!;
    expect(formation.points.length).toBe(1500);
    expect(formation.points.some((v) => Number.isNaN(v))).toBe(false);

    // Sin entrada en HUMANOID_BONE_GENERATORS -> exoesqueleto genérico
    // (anclas + MST), no revienta y no tiene vigas de más.
    const exo = buildExoskeleton(name, 300)!;
    expect(exo.points.length).toBe(900);
    expect(exo.points.some((v) => Number.isNaN(v))).toBe(false);
  });

  it("con count menor a los puntos escaneados, sigue devolviendo exactamente count*3 sin NaN", () => {
    const scanned = new Float32Array(30); // 10 puntos, todos en el origen
    const name = registerCustomScan(scanned);
    const formation = formShapeWithRoles(name, 4)!;
    expect(formation.points.length).toBe(12);
    expect(formation.points.some((v) => Number.isNaN(v))).toBe(false);
  });

  it("con una nube de puntos vacía, no crashea y no produce NaN", () => {
    const name = registerCustomScan(new Float32Array(0));
    const formation = formShapeWithRoles(name, 20)!;
    expect(formation.points.length).toBe(60);
    expect(formation.points.some((v) => Number.isNaN(v))).toBe(false);
  });
});
