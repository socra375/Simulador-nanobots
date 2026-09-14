import { describe, expect, it } from "vitest";
import { createMetrics } from "./metrics";

describe("createMetrics", () => {
  it("sin muestras devuelve ceros en vez de NaN", () => {
    const snap = createMetrics().snapshot();
    expect(snap.frames).toBe(0);
    expect(snap.fps).toBe(0);
    expect(snap.frameMsAvg).toBe(0);
    expect(snap.frameMsP95).toBe(0);
  });

  it("promedia los tiempos de cuadro y deriva los FPS", () => {
    const m = createMetrics();
    for (let i = 0; i < 10; i++) m.sampleFrame(20);
    const snap = m.snapshot();
    expect(snap.frames).toBe(10);
    expect(snap.frameMsAvg).toBeCloseTo(20, 6);
    expect(snap.fps).toBeCloseTo(50, 6);
    expect(snap.frameMsMax).toBeCloseTo(20, 6);
  });

  it("el p95 refleja los tirones, no el promedio", () => {
    const m = createMetrics();
    for (let i = 0; i < 99; i++) m.sampleFrame(10);
    m.sampleFrame(500); // un tirón aislado
    const snap = m.snapshot();
    expect(snap.frameMsAvg).toBeLessThan(20);
    expect(snap.frameMsP95).toBeGreaterThanOrEqual(10);
    expect(snap.frameMsMax).toBeCloseTo(500, 6);
  });

  it("la ventana circular descarta las muestras viejas", () => {
    const m = createMetrics();
    // Más muestras que la capacidad (240): las de 100ms deben quedar
    // completamente fuera de la ventana al final.
    for (let i = 0; i < 300; i++) m.sampleFrame(100);
    for (let i = 0; i < 240; i++) m.sampleFrame(10);
    const snap = m.snapshot();
    expect(snap.frameMsAvg).toBeCloseTo(10, 6);
    expect(snap.frameMsMax).toBeCloseTo(10, 6);
    // `frames` es acumulativo, no ventaneado.
    expect(snap.frames).toBe(540);
  });

  it("registra conteos, info de render y duraciones con nombre", () => {
    const m = createMetrics();
    m.setAgentCounts(3000, 4000);
    m.setRenderInfo(9, 12345);
    m.mark("formacion", 12.5);
    const snap = m.snapshot();
    expect(snap.nanobots).toBe(3000);
    expect(snap.microbots).toBe(4000);
    expect(snap.drawCalls).toBe(9);
    expect(snap.triangles).toBe(12345);
    expect(snap.timings.formacion).toBeCloseTo(12.5, 6);
  });

  it("time() devuelve el valor de la función y registra su duración", () => {
    const m = createMetrics();
    const result = m.time("trabajo", () => 42);
    expect(result).toBe(42);
    expect(m.snapshot().timings.trabajo).toBeGreaterThanOrEqual(0);
  });

  it("time() registra la duración aunque la función tire", () => {
    const m = createMetrics();
    expect(() => m.time("explota", () => { throw new Error("boom"); })).toThrow("boom");
    expect(m.snapshot().timings.explota).toBeGreaterThanOrEqual(0);
  });

  it("reset() limpia muestras y duraciones", () => {
    const m = createMetrics();
    m.sampleFrame(16);
    m.mark("formacion", 5);
    m.reset();
    const snap = m.snapshot();
    expect(snap.frames).toBe(0);
    expect(snap.frameMsAvg).toBe(0);
    expect(snap.timings).toEqual({});
  });

  it("snapshot() no comparte la referencia de timings (no se puede mutar por fuera)", () => {
    const m = createMetrics();
    m.mark("a", 1);
    const snap = m.snapshot();
    snap.timings.a = 999;
    expect(m.snapshot().timings.a).toBeCloseTo(1, 6);
  });
});
