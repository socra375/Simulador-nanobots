import { describe, expect, it } from "vitest";
import {
  DEFAULT_NANOBOT_TIMINGS,
  easeInOutCubic,
  GROUP_SETTLE_FRACTION,
  groupWindow,
  planLayers,
  layerIndexAt,
  makeSwirlAxes,
  swirlOffset,
  writeMicrobotFrame,
  writeNanobotFrame,
  type LayerPlan,
  type SwirlAxes,
  type Vec3,
} from "./kinematics";
import golden from "./__fixtures__/nanobot-frames.json";

/**
 * Las timings CON LAS QUE SE GRABÓ el fixture, congeladas acá.
 *
 * Por qué no se usan las de por defecto: `swirlTurns` y `swirlMaxRadius`
 * son constantes de AJUSTE VISUAL — en la Fase 35 el remolino se agrandó
 * mucho porque a 1.0 sobre un trayecto de 18 unidades era un desvío del
 * 5,6%, invisible. Si el fixture dependiera de los valores por defecto,
 * cada ajuste estético rompería ocho tests que no tienen nada que ver con
 * la estética.
 *
 * Congelándolas, el arnés sigue haciendo su trabajo real: probar que la
 * MATEMÁTICA del escritor no cambió al refactorizar. Lo que NO se hizo, y
 * no se debe hacer, es regenerar el fixture contra el código nuevo: eso
 * lo vuelve auto-referencial y deja de probar nada (está explicado en
 * bench/capture-golden.mjs).
 */
const GOLDEN_TIMINGS = {
  ...DEFAULT_NANOBOT_TIMINGS,
  swirlTurns: 1.2,
  swirlMaxRadius: 1.0,
  packetSwirlTurns: 1.5,
  packetSwirlMaxRadius: 0.4,
};

// Test de CARACTERIZACIÓN. El fixture no se escribió a mano: se grabó de
// la app en ejecución (bench/capture-golden.mjs) ANTES de mover la
// cinemática fuera de la closure de main.ts. Que estas aserciones pasen
// es la prueba de que la extracción no cambió el comportamiento — un test
// escrito después de extraer solo probaría que la función hace lo que
// hace, no que hace lo mismo que hacía.

const fixture = golden as unknown as {
  shape: string;
  formation: {
    count: number;
    points: number[];
    layerOf: number[];
    delayFraction: number[];
    layerCount: number;
    totalDuration: number;
    wave0Landing: number[];
    reactorCenter: number[];
    axes: { axisUx: number; axisUy: number; axisUz: number; axisVx: number; axisVy: number; axisVz: number };
  };
  frames: Record<string, number[]>;
};

function buildPlan(): LayerPlan {
  const f = fixture.formation;
  return {
    layerOf: Uint8Array.from(f.layerOf),
    delayFraction: Float32Array.from(f.delayFraction),
    layerCount: f.layerCount,
    // El fixture se grabó antes de que existieran las etapas de material
    // (Fase 42), así que su total ERA el vuelo entero. Se declara acá en
    // vez de regrabar el fixture: regrabarlo contra el código nuevo
    // destruiría justamente lo que este test prueba.
    travelDuration: f.totalDuration,
    totalDuration: f.totalDuration,
    wave0Landing: [f.wave0Landing[0], f.wave0Landing[1], f.wave0Landing[2]],
  };
}

const axes: SwirlAxes = {
  ux: fixture.formation.axes.axisUx,
  uy: fixture.formation.axes.axisUy,
  uz: fixture.formation.axes.axisUz,
  vx: fixture.formation.axes.axisVx,
  vy: fixture.formation.axes.axisVy,
  vz: fixture.formation.axes.axisVz,
};
const core = fixture.formation.reactorCenter as unknown as Vec3;
const points = Float32Array.from(fixture.formation.points);
const count = fixture.formation.count;

describe("writeNanobotFrame — caracterización contra la app previa", () => {
  const plan = buildPlan();

  for (const elapsedKey of Object.keys(fixture.frames)) {
    it(`reproduce el cuadro grabado en elapsed=${elapsedKey}`, () => {
      const expected = fixture.frames[elapsedKey];
      const out = new Float32Array(count * 3);
      writeNanobotFrame(out, points, count, plan, core, axes, Number(elapsedKey), GOLDEN_TIMINGS);
      expect(out.length).toBe(expected.length);
      for (let i = 0; i < expected.length; i++) {
        // Float32 en ambos lados: el fixture pasó por JSON (float64) pero
        // los valores vienen de un Float32Array, así que son exactos hasta
        // la precisión de float32.
        expect(out[i]).toBeCloseTo(expected[i], 5);
      }
    });
  }

  it("el fixture ejercita de verdad las dos sub-fases de la 1ra ola de color", () => {
    // Si esto dejara de cumplirse, los tests de arriba pasarían sin cubrir
    // la rama de "bola"/"enjambre" y el test perdería su valor.
    const wave1 = [...Array(count).keys()].filter((i) => plan.layerOf[i] === 1);
    expect(wave1.length).toBeGreaterThan(0);

    const radiusAt = (key: string) => {
      const fr = fixture.frames[key];
      let cx = 0, cy = 0, cz = 0;
      for (const i of wave1) { cx += fr[i * 3]; cy += fr[i * 3 + 1]; cz += fr[i * 3 + 2]; }
      cx /= wave1.length; cy /= wave1.length; cz /= wave1.length;
      let max = 0;
      for (const i of wave1) {
        const dx = fr[i * 3] - cx, dy = fr[i * 3 + 1] - cy, dz = fr[i * 3 + 2] - cz;
        max = Math.max(max, Math.sqrt(dx * dx + dy * dy + dz * dz));
      }
      return max;
    };
    // "Bola": compacta mientras viaja. "Enjambre": desparramada al final.
    expect(radiusAt("2.2")).toBeLessThan(1);
    expect(radiusAt("4.4")).toBeGreaterThan(5);
  });
});

describe("easeInOutCubic", () => {
  it("va de 0 a 1 pasando por 0.5 en el medio", () => {
    expect(easeInOutCubic(0)).toBeCloseTo(0, 10);
    expect(easeInOutCubic(0.5)).toBeCloseTo(0.5, 10);
    expect(easeInOutCubic(1)).toBeCloseTo(1, 10);
  });

  it("es monótona creciente", () => {
    let prev = -Infinity;
    for (let t = 0; t <= 1.0001; t += 0.05) {
      const v = easeInOutCubic(t);
      expect(v).toBeGreaterThanOrEqual(prev);
      prev = v;
    }
  });
});

describe("makeSwirlAxes", () => {
  it("devuelve dos ejes unitarios y perpendiculares entre sí", () => {
    const a = makeSwirlAxes([-8, 8, -8], [0, 0, 0]);
    const lenU = Math.hypot(a.ux, a.uy, a.uz);
    const lenV = Math.hypot(a.vx, a.vy, a.vz);
    expect(lenU).toBeCloseTo(1, 6);
    expect(lenV).toBeCloseTo(1, 6);
    expect(a.ux * a.vx + a.uy * a.vy + a.uz * a.vz).toBeCloseTo(0, 6);
  });

  it("no explota si origen y destino coinciden (división por cero)", () => {
    const a = makeSwirlAxes([1, 2, 3], [1, 2, 3]);
    for (const v of Object.values(a)) expect(Number.isNaN(v)).toBe(false);
  });

  it("maneja el eje casi vertical sin degenerar", () => {
    const a = makeSwirlAxes([0, 0, 0], [0, 10, 0]);
    expect(Math.hypot(a.ux, a.uy, a.uz)).toBeCloseTo(1, 6);
    expect(Math.hypot(a.vx, a.vy, a.vz)).toBeCloseTo(1, 6);
  });
});

describe("swirlOffset", () => {
  const axesFixture = makeSwirlAxes([-8, 8, -8], [0, 0, 0]);

  it("es exactamente cero en los dos extremos del recorrido", () => {
    const out: [number, number, number] = [0, 0, 0];
    for (const eased of [0, 1]) {
      swirlOffset(eased, 7, 1.2, 1.0, axesFixture, out);
      expect(Math.hypot(out[0], out[1], out[2])).toBeCloseTo(0, 10);
    }
  });

  it("alcanza el radio máximo a mitad de camino", () => {
    const out: [number, number, number] = [0, 0, 0];
    swirlOffset(0.5, 3, 1.2, 2.5, axesFixture, out);
    expect(Math.hypot(out[0], out[1], out[2])).toBeCloseTo(2.5, 6);
  });

  it("da fases distintas a agentes distintos (no giran sincronizados)", () => {
    const a: [number, number, number] = [0, 0, 0];
    const b: [number, number, number] = [0, 0, 0];
    swirlOffset(0.5, 0, 1.2, 1, axesFixture, a);
    swirlOffset(0.5, 1, 1.2, 1, axesFixture, b);
    expect(Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])).toBeGreaterThan(0.1);
  });
});

describe("layerIndexAt", () => {
  const d = DEFAULT_NANOBOT_TIMINGS.layerDuration;

  it("avanza una capa por layerDuration", () => {
    expect(layerIndexAt(0, 3, d)).toBe(0);
    expect(layerIndexAt(d * 0.99, 3, d)).toBe(0);
    expect(layerIndexAt(d, 3, d)).toBe(1);
    expect(layerIndexAt(d * 2, 3, d)).toBe(2);
  });

  it("no se pasa de la última capa aunque elapsed siga creciendo", () => {
    expect(layerIndexAt(d * 99, 3, d)).toBe(2);
  });
});

describe("writeNanobotFrame — casos límite", () => {
  const plan = buildPlan();

  it("con 0 agentes no escribe nada ni explota", () => {
    const out = new Float32Array(0);
    expect(() => writeNanobotFrame(out, points, 0, plan, core, axes, 1.0)).not.toThrow();
  });

  it("en elapsed=0 todos los agentes están exactamente en el núcleo", () => {
    const out = new Float32Array(count * 3);
    writeNanobotFrame(out, points, count, plan, core, axes, 0);
    for (let i = 0; i < count; i++) {
      expect(out[i * 3 + 0]).toBeCloseTo(core[0], 5);
      expect(out[i * 3 + 1]).toBeCloseTo(core[1], 5);
      expect(out[i * 3 + 2]).toBeCloseTo(core[2], 5);
    }
  });

  it("al final de la animación todos los agentes están en su destino exacto", () => {
    const out = new Float32Array(count * 3);
    writeNanobotFrame(out, points, count, plan, core, axes, plan.totalDuration);
    for (let i = 0; i < count * 3; i++) expect(out[i]).toBeCloseTo(points[i], 5);
  });

  it("nunca produce NaN, en ningún instante del recorrido", () => {
    const out = new Float32Array(count * 3);
    for (let t = 0; t <= plan.totalDuration + 0.5; t += 0.07) {
      writeNanobotFrame(out, points, count, plan, core, axes, t);
      for (let i = 0; i < out.length; i++) {
        if (Number.isNaN(out[i])) throw new Error(`NaN en elapsed=${t}, índice ${i}`);
      }
    }
  });
});

// Fase 35: espiral de regreso. Lo que se afirma no es que exista el
// parámetro, sino que el repliegue deje de ser "la formación al revés".
describe("espiral de regreso", () => {
  const plan = buildPlan();
  const total = plan.totalDuration;

  function frame(elapsed: number, spiral: boolean): Float32Array {
    const out = new Float32Array(count * 3);
    writeNanobotFrame(out, points, count, plan, core, axes, elapsed, DEFAULT_NANOBOT_TIMINGS, undefined, 4, null, spiral);
    return out;
  }

  function distanciaAlNucleo(f: Float32Array, i: number): number {
    const dx = f[i * 3] - core[0];
    const dy = f[i * 3 + 1] - core[1];
    const dz = f[i * 3 + 2] - core[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  it("al empezar el repliegue los agentes siguen en la figura", () => {
    const f = frame(total, true);
    for (let i = 0; i < count * 3; i++) expect(f[i]).toBeCloseTo(points[i], 5);
  });

  it("al terminar, TODOS llegan exactamente al núcleo (no a una órbita)", () => {
    // El radio de la espiral se cierra a 0: si quedara abierto, los
    // agentes terminarían girando alrededor del núcleo en vez de entrar.
    const f = frame(0, true);
    for (let i = 0; i < count; i++) expect(distanciaAlNucleo(f, i)).toBeCloseTo(0, 4);
  });

  it("los agentes en vuelo se APARTAN del segmento figura->núcleo", () => {
    // Esta es la propiedad geométrica que define una espiral y la
    // distingue de volver en línea recta: la distancia perpendicular al
    // segmento tiene que ser apreciable, no casi cero.
    const f = frame(total * 0.5, true);
    let maxPerp = 0;
    for (let i = 0; i < count; i++) {
      // Vector figura->núcleo y punto actual.
      const ax = points[i * 3], ay = points[i * 3 + 1], az = points[i * 3 + 2];
      const bx = core[0] - ax, by = core[1] - ay, bz = core[2] - az;
      const px = f[i * 3] - ax, py = f[i * 3 + 1] - ay, pz = f[i * 3 + 2] - az;
      const lenSq = bx * bx + by * by + bz * bz;
      if (lenSq === 0) continue;
      const t = (px * bx + py * by + pz * bz) / lenSq;
      const cx = px - bx * t, cy = py - by * t, cz = pz - bz * t;
      maxPerp = Math.max(maxPerp, Math.sqrt(cx * cx + cy * cy + cz * cz));
    }
    // El radio de la espiral es 6; a mitad de vuelo debe notarse de sobra.
    expect(maxPerp).toBeGreaterThan(2);
  });

  it("es una COLA: a mitad de camino conviven agentes en la figura y agentes ya volando", () => {
    // Si todos salieran a la vez no habría fila, que es justamente lo que
    // hace que se lea como espiral y no como implosión.
    const f = frame(total * 0.55, true);
    let enLaFigura = 0;
    let enVuelo = 0;
    for (let i = 0; i < count; i++) {
      const dx = f[i * 3] - points[i * 3];
      const dy = f[i * 3 + 1] - points[i * 3 + 1];
      const dz = f[i * 3 + 2] - points[i * 3 + 2];
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 0.01) enLaFigura++;
      else enVuelo++;
    }
    expect(enLaFigura).toBeGreaterThan(0);
    expect(enVuelo).toBeGreaterThan(0);
  });

  it("el progreso es monótono: nadie se aleja del núcleo mientras vuelve", () => {
    let previa = Infinity;
    for (let t = total; t >= 0; t -= total / 12) {
      const f = frame(t, true);
      let suma = 0;
      for (let i = 0; i < count; i++) suma += distanciaAlNucleo(f, i);
      expect(suma).toBeLessThanOrEqual(previa + 1e-3);
      previa = suma;
    }
  });

  it("no produce NaN en ningún punto del recorrido", () => {
    for (let t = total; t >= 0; t -= total / 20) {
      const f = frame(t, true);
      for (let i = 0; i < f.length; i++) expect(Number.isNaN(f[i])).toBe(false);
    }
  });

  it("sin el parámetro, el repliegue es EXACTAMENTE el de antes", () => {
    // La garantía de que esto es opt-in y no cambió el camino por defecto.
    const a = frame(total * 0.4, false);
    const out = new Float32Array(count * 3);
    writeNanobotFrame(out, points, count, plan, core, axes, total * 0.4);
    for (let i = 0; i < out.length; i++) expect(a[i]).toBeCloseTo(out[i], 6);
  });
});

// Fase 37: la salida del exoesqueleto dejó de ser un bulto único. Los
// nodos (Microbots) salen primero y las vigas (Union Bots) después, cada
// grupo con su ventana sobre el MISMO progreso — no hay reloj nuevo ni
// duración por grupo, se reparte la que ya había.
describe("groupWindow: reparto de la salida en grupos", () => {
  it("con un solo grupo, ocupa todo el vuelo y deja la cola de asentamiento", () => {
    const w = groupWindow(0, 1);
    expect(w.start).toBe(0);
    expect(w.end).toBeCloseTo(1 - GROUP_SETTLE_FRACTION, 10);
  });

  it("con dos grupos, el segundo arranca después del primero y se solapan poco", () => {
    const a = groupWindow(0, 2);
    const b = groupWindow(1, 2);
    expect(a.start).toBe(0);
    expect(b.start).toBeGreaterThan(0);
    // Secuencial: el segundo arranca cuando el primero ya casi terminó.
    expect(b.start).toBeGreaterThan(a.end * 0.8);
    expect(b.start).toBeLessThan(a.end);
    expect(b.end).toBeGreaterThan(a.end);
  });

  it("el último grupo termina de volar antes del final, no justo encima", () => {
    // Si terminara en 1 no habría separación con lo que sale después.
    expect(groupWindow(1, 2).end).toBeCloseTo(1 - GROUP_SETTLE_FRACTION, 10);
  });

  it("todos los grupos tienen la misma duración de vuelo", () => {
    const a = groupWindow(0, 2);
    const b = groupWindow(1, 2);
    expect(b.end - b.start).toBeCloseTo(a.end - a.start, 10);
  });
});

describe("writeMicrobotFrame: salida escalonada de nodos y vigas", () => {
  const core: Vec3 = [-8, 8, -8];
  const axes = makeSwirlAxes(core, [4, 2, 4]);
  const count = 6;
  // Mitad nodos, mitad vigas.
  const isBeam = Uint8Array.from([0, 0, 0, 1, 1, 1]);
  const points = new Float32Array(count * 3);
  const spans = new Float32Array(count * 6);
  for (let i = 0; i < count; i++) {
    points[i * 3 + 0] = 4 + i;
    points[i * 3 + 1] = 2;
    points[i * 3 + 2] = 4;
    spans[i * 6 + 0] = 4 + i; spans[i * 6 + 1] = 2; spans[i * 6 + 2] = 4;
    spans[i * 6 + 3] = 5 + i; spans[i * 6 + 4] = 2; spans[i * 6 + 5] = 4;
  }

  function frame(progress: number, groups: number) {
    const outPoints = new Float32Array(count * 3);
    const outSpans = new Float32Array(count * 6);
    writeMicrobotFrame(
      outPoints, outSpans, points, spans, isBeam, count,
      core, axes, progress, 2.2, 5.0, groups,
    );
    return { outPoints, outSpans };
  }

  /** Cuánto se alejó del núcleo un nodo (0 = todavía adentro). */
  function nodeDistance(outPoints: Float32Array, i: number): number {
    const dx = outPoints[i * 3 + 0] - core[0];
    const dy = outPoints[i * 3 + 1] - core[1];
    const dz = outPoints[i * 3 + 2] - core[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  function beamDistance(outSpans: Float32Array, i: number): number {
    const dx = outSpans[i * 6 + 0] - core[0];
    const dy = outSpans[i * 6 + 1] - core[1];
    const dz = outSpans[i * 6 + 2] - core[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  // ESTE es el test de la fase: es lo que el usuario pidió (que salga un
  // grupo, después otro) y lo que se rompería si alguien volviera a
  // compartir un único progreso entre los dos.
  it("cuando los nodos ya salieron, las vigas todavía no arrancaron", () => {
    const { outPoints, outSpans } = frame(groupWindow(0, 2).end * 0.5, 2);
    expect(nodeDistance(outPoints, 0)).toBeGreaterThan(1);
    // Las vigas siguen dentro del núcleo (el remolino vale 0 en eased=0).
    expect(beamDistance(outSpans, 3)).toBeCloseTo(0, 6);
  });

  it("al final del lanzamiento los DOS grupos están en su posición exacta", () => {
    const { outPoints, outSpans } = frame(1, 2);
    for (let i = 0; i < 3; i++) {
      expect(outPoints[i * 3 + 0]).toBeCloseTo(points[i * 3 + 0], 6);
      expect(outPoints[i * 3 + 1]).toBeCloseTo(points[i * 3 + 1], 6);
    }
    for (let i = 3; i < count; i++) {
      expect(outSpans[i * 6 + 0]).toBeCloseTo(spans[i * 6 + 0], 6);
      expect(outSpans[i * 6 + 3]).toBeCloseTo(spans[i * 6 + 3], 6);
    }
  });

  it("en progreso 0 todo sale exactamente del núcleo", () => {
    const { outPoints, outSpans } = frame(0, 2);
    for (let i = 0; i < 3; i++) expect(nodeDistance(outPoints, i)).toBeCloseTo(0, 6);
    for (let i = 3; i < count; i++) expect(beamDistance(outSpans, i)).toBeCloseTo(0, 6);
  });

  it("con un solo grupo nodos y vigas salen juntas: nadie espera a un grupo vacío", () => {
    const mitad = groupWindow(0, 1).end * 0.5;
    const { outPoints, outSpans } = frame(mitad, 1);
    expect(nodeDistance(outPoints, 0)).toBeGreaterThan(1);
    expect(beamDistance(outSpans, 3)).toBeGreaterThan(1);
  });

  it("los dos extremos de una viga viajan juntos: sigue siendo una pieza rígida", () => {
    const { outSpans } = frame(0.7, 2);
    const i = 4;
    const largo = Math.hypot(
      outSpans[i * 6 + 3] - outSpans[i * 6 + 0],
      outSpans[i * 6 + 4] - outSpans[i * 6 + 1],
      outSpans[i * 6 + 5] - outSpans[i * 6 + 2],
    );
    // Crece desde ~0 en el núcleo hasta su largo real (1 unidad).
    expect(largo).toBeGreaterThan(0);
    expect(largo).toBeLessThanOrEqual(1 + 1e-6);
  });

  it("nunca produce NaN en todo el recorrido, con uno o dos grupos", () => {
    for (const groups of [1, 2]) {
      for (let p = 0; p <= 1.0001; p += 0.05) {
        const { outPoints, outSpans } = frame(p, groups);
        for (const v of outPoints) expect(Number.isNaN(v)).toBe(false);
        for (const v of outSpans) expect(Number.isNaN(v)).toBe(false);
      }
    }
  });
});

// Fase 42 — el escalonado de salida dejó de ser el orden del array.
describe("planLayers: el orden de salida es ESPACIAL (spec §15)", () => {
  const CORE: Vec3 = [-8, 8, -8];
  const N = 400;

  function nube(): { roles: Uint8Array; points: Float32Array } {
    const roles = new Uint8Array(N);
    const points = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      roles[i] = i % 4 === 0 ? 0 : 1; // 1 = material
      // Posición DELIBERADAMENTE desalineada del índice: la coordenada va
      // y vuelve, así que ordenar por índice no da el mismo orden que
      // ordenar por distancia.
      const t = Math.sin(i * 1.7) * 5;
      points[i * 3 + 0] = t;
      points[i * 3 + 1] = Math.cos(i * 2.3) * 4;
      points[i * 3 + 2] = Math.sin(i * 0.9) * 3;
    }
    return { roles, points };
  }

  it("delayFraction crece con la distancia al ORIGEN DE SU CAPA, no con el índice", () => {
    // Fase 44: cada capa mide desde donde LLEGA. El relleno sale volando
    // del núcleo; el material cae en el ÁPICE y se derrama desde ahí, así
    // que medirlo desde el núcleo lo haría abrirse de costado en vez de
    // hacia abajo.
    const { roles, points } = nube();
    const plan = planLayers(roles, points, N, 1, 2, [0, 0, 0], CORE, 2);
    const apex = plan.wave0Landing;
    const d = (i: number) => {
      const from = plan.layerOf[i] === 1 ? apex : CORE;
      return Math.hypot(points[i * 3] - from[0], points[i * 3 + 1] - from[1], points[i * 3 + 2] - from[2]);
    };

    // Ordenados POR delayFraction, las distancias tienen que salir
    // crecientes. Comparar sólo pares con i < j no sirve: el orden por
    // índice cumple esa versión del test por construcción, así que un
    // `delayFraction[i] = i / (count-1)` pasaría igual — verificado
    // mutando el código.
    for (const layer of [0, 1]) {
      const deLaCapa = [...Array(N).keys()].filter((i) => plan.layerOf[i] === layer);
      deLaCapa.sort((a, b) => plan.delayFraction[a] - plan.delayFraction[b]);
      for (let k = 1; k < deLaCapa.length; k++) {
        expect(d(deLaCapa[k])).toBeGreaterThanOrEqual(d(deLaCapa[k - 1]) - 1e-3);
      }
    }

    // Y el orden espacial NO coincide con el orden de creación: si
    // coincidiera, el test de arriba no probaría nada.
    const capa1 = [...Array(N).keys()].filter((i) => plan.layerOf[i] === 1);
    const porDelay = [...capa1].sort((a, b) => plan.delayFraction[a] - plan.delayFraction[b]);
    expect(porDelay).not.toEqual(capa1);
  });

  it("la bola de material cae ARRIBA de la figura, no en su centro", () => {
    // Es lo que hace que el derrame se lea como líquido: el punto de
    // aterrizaje tiene que estar por encima de TODOS los destinos de
    // material, no en el medio de ellos.
    const { roles, points } = nube();
    const plan = planLayers(roles, points, N, 1, 2, [0, 0, 0], CORE, 2);
    let maxY = -Infinity;
    for (let i = 0; i < N; i++) {
      if (plan.layerOf[i] === 1) maxY = Math.max(maxY, points[i * 3 + 1]);
    }
    expect(plan.wave0Landing[1]).toBeGreaterThan(maxY);
  });

  it("el material se posa de ARRIBA hacia abajo, venga de donde venga el núcleo", () => {
    // El núcleo va DEBAJO de la figura a propósito. Con el núcleo en su
    // sitio real (arriba y al costado), ordenar por distancia al núcleo
    // también empieza por arriba, así que el test no distinguiría una
    // cosa de la otra — verificado mutando el código. Desde abajo, si el
    // material se ordenara por el núcleo empezaría por el piso, que es
    // exactamente lo contrario a un líquido que se derrama.
    const DESDE_ABAJO: Vec3 = [0, -20, 0];
    const { roles, points } = nube();
    const plan = planLayers(roles, points, N, 1, 2, [0, 0, 0], DESDE_ABAJO, 2);
    const capa1 = [...Array(N).keys()]
      .filter((i) => plan.layerOf[i] === 1)
      .sort((a, b) => plan.delayFraction[a] - plan.delayFraction[b]);
    const primeros = capa1.slice(0, 20).reduce((s, i) => s + points[i * 3 + 1], 0) / 20;
    const ultimos = capa1.slice(-20).reduce((s, i) => s + points[i * 3 + 1], 0) / 20;
    expect(primeros).toBeGreaterThan(ultimos);
  });

  it("delayFraction queda SIEMPRE en [0,1]", () => {
    // Regresión: el mínimo se guardaba en float64 y el valor en un
    // Float32Array, así que el mínimo podía quedar por encima del valor
    // almacenado y dar una fracción negativa. Exactamente un agente por
    // figura salía disparado en el primer cuadro del repliegue mientras el
    // resto seguía quieto.
    const { roles, points } = nube();
    const plan = planLayers(roles, points, N, 1, 2, [0, 0, 0], CORE, 2);
    for (let i = 0; i < N; i++) {
      expect(plan.delayFraction[i]).toBeGreaterThanOrEqual(0);
      expect(plan.delayFraction[i]).toBeLessThanOrEqual(1);
    }
  });

  it("el vuelo son SIEMPRE dos capas, y el total incluye la cola de material", () => {
    const { roles, points } = nube();
    const plan = planLayers(roles, points, N, 1, 2, [0, 0, 0], CORE, 3.5);
    expect(plan.layerCount).toBe(2);
    expect(plan.travelDuration).toBe(4);
    expect(plan.totalDuration).toBeCloseTo(7.5, 6);
  });

  it("una figura degenerada (todos a la misma distancia) no rompe: salen todos juntos", () => {
    const roles = new Uint8Array(10).fill(1);
    const points = new Float32Array(30);
    for (let i = 0; i < 10; i++) points[i * 3] = 1;
    const plan = planLayers(roles, points, 10, 1, 2, [0, 0, 0], CORE, 0);
    for (let i = 0; i < 10; i++) expect(plan.delayFraction[i]).toBe(0);
  });
});
