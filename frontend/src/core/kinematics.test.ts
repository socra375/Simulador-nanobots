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
      writeNanobotFrame(out, points, count, plan, core, axes, Number(elapsedKey));
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
