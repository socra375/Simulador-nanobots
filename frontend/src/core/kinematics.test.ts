import { describe, expect, it } from "vitest";
import {
  DEFAULT_NANOBOT_TIMINGS,
  easeInOutCubic,
  layerIndexAt,
  makeSwirlAxes,
  swirlOffset,
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
