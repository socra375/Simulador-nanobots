import { describe, expect, it } from "vitest";
import { createFrameLoop } from "./loop";

// El reloj y el agendador son inyectables justamente para poder testear
// esto sin navegador ni requestAnimationFrame.
function makeHarness() {
  let time = 0;
  const pending: Array<() => void> = [];
  return {
    now: () => time,
    advance: (ms: number) => { time += ms; },
    schedule: (cb: () => void) => { pending.push(cb); },
    /** Corre los cuadros agendados (los que se agenden dentro no se corren). */
    runPending(): number {
      const batch = pending.splice(0, pending.length);
      for (const cb of batch) cb();
      return batch.length;
    },
    get pendingCount() { return pending.length; },
  };
}

describe("createFrameLoop", () => {
  it("no corre nada hasta que se lo arranca", () => {
    const h = makeHarness();
    let frames = 0;
    createFrameLoop(() => frames++, { now: h.now, schedule: h.schedule });
    expect(h.pendingCount).toBe(0);
    expect(frames).toBe(0);
  });

  it("se re-agenda solo mientras está corriendo", () => {
    const h = makeHarness();
    let frames = 0;
    const loop = createFrameLoop(() => frames++, { now: h.now, schedule: h.schedule });
    loop.start();
    for (let i = 0; i < 5; i++) { h.advance(16); h.runPending(); }
    expect(frames).toBe(5);
    expect(loop.running).toBe(true);
  });

  it("stop() corta el re-agendado", () => {
    const h = makeHarness();
    let frames = 0;
    const loop = createFrameLoop(() => frames++, { now: h.now, schedule: h.schedule });
    loop.start();
    h.advance(16); h.runPending();
    loop.stop();
    expect(loop.running).toBe(false);
    // stop() no puede des-agendar el cuadro ya pedido: ese cuadro corre
    // igual, pero sale temprano y no agenda otro.
    h.advance(16); h.runPending();
    expect(frames).toBe(1);
    expect(h.pendingCount).toBe(0);
  });

  it("start() dos veces no duplica el loop", () => {
    const h = makeHarness();
    let frames = 0;
    const loop = createFrameLoop(() => frames++, { now: h.now, schedule: h.schedule });
    loop.start();
    loop.start();
    h.advance(16); h.runPending();
    expect(frames).toBe(1);
    expect(h.pendingCount).toBe(1);
  });

  it("pasa el dt en segundos", () => {
    const h = makeHarness();
    const dts: number[] = [];
    const loop = createFrameLoop((dt) => dts.push(dt), { now: h.now, schedule: h.schedule });
    loop.start();
    h.advance(16); h.runPending();
    h.advance(32); h.runPending();
    expect(dts[0]).toBeCloseTo(0.016, 6);
    expect(dts[1]).toBeCloseTo(0.032, 6);
  });

  it("topa el dt tras una pausa larga (pestaña en segundo plano)", () => {
    const h = makeHarness();
    const dts: number[] = [];
    const loop = createFrameLoop((dt) => dts.push(dt), { now: h.now, schedule: h.schedule, maxDt: 0.05 });
    loop.start();
    h.advance(30000); // 30 segundos en segundo plano
    h.runPending();
    expect(dts[0]).toBeCloseTo(0.05, 6);
  });

  it("un error detiene el loop y se reporta UNA sola vez", () => {
    const h = makeHarness();
    const errors: unknown[] = [];
    let frames = 0;
    const loop = createFrameLoop(
      () => { frames++; throw new Error("boom"); },
      { now: h.now, schedule: h.schedule, onError: (e) => errors.push(e) },
    );
    loop.start();
    h.advance(16); h.runPending();
    // Antes el re-agendado iba ANTES del cuerpo: el siguiente cuadro ya
    // estaba pedido y el error se repetía 60 veces por segundo.
    expect(frames).toBe(1);
    expect(errors).toHaveLength(1);
    expect(loop.running).toBe(false);
    expect(h.pendingCount).toBe(0);
  });

  it("sin onError, el error se propaga (no se traga en silencio)", () => {
    const h = makeHarness();
    const loop = createFrameLoop(() => { throw new Error("boom"); }, { now: h.now, schedule: h.schedule });
    loop.start();
    h.advance(16);
    expect(() => h.runPending()).toThrow("boom");
    expect(loop.running).toBe(false);
  });

  it("re-arrancar NO deja dos cadenas de cuadros corriendo en paralelo", () => {
    const h = makeHarness();
    let frames = 0;
    const loop = createFrameLoop(() => frames++, { now: h.now, schedule: h.schedule });
    loop.start();
    h.advance(16); h.runPending(); // corre 1 y deja otro agendado
    loop.stop();
    loop.start(); // el cuadro viejo sigue agendado además del nuevo
    h.advance(16); h.runPending();
    // Si la cadena vieja reviviera, acá irían 3 (y la simulación avanzaría
    // al doble de velocidad). La generación la descarta.
    expect(frames).toBe(2);
    expect(loop.running).toBe(true);

    // Y de ahí en más avanza de a un cuadro por vez, no de a dos.
    h.advance(16); h.runPending();
    expect(frames).toBe(3);
  });
});
