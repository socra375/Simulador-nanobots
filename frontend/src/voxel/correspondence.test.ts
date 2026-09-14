import { describe, expect, it } from "vitest";
import { buildMorphSource } from "./correspondence";
import { SHAPE_HALF_EXTENT } from "../shapes";

const CORE: readonly [number, number, number] = [-8, 8, -8];

function dist(a: Float32Array, ai: number, b: Float32Array, bi: number): number {
  const dx = a[ai * 3] - b[bi * 3];
  const dy = a[ai * 3 + 1] - b[bi * 3 + 1];
  const dz = a[ai * 3 + 2] - b[bi * 3 + 2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/** Nube pseudo-aleatoria pero determinística, dentro del cubo. */
function cloud(n: number, seed: number, spread = SHAPE_HALF_EXTENT * 0.8): Float32Array {
  const out = new Float32Array(n * 3);
  let s = seed;
  for (let i = 0; i < n * 3; i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    out[i] = (s / 2147483648 - 0.5) * 2 * spread;
  }
  return out;
}

describe("buildMorphSource", () => {
  it("devuelve un origen por destino", () => {
    const targets = cloud(100, 1);
    const previous = cloud(100, 2);
    const { from } = buildMorphSource(targets, 100, previous, 100, CORE);
    expect(from).toHaveLength(300);
    expect(Array.from(from).every((v) => Number.isFinite(v))).toBe(true);
  });

  it("cada agente viejo se entrega UNA sola vez", () => {
    // Si un agente se repartiera a varios destinos, esos destinos
    // arrancarían del mismo punto y se verían pegados durante todo el
    // viaje.
    const n = 200;
    const targets = cloud(n, 3);
    const previous = cloud(n, 4);
    const { from } = buildMorphSource(targets, n, previous, n, CORE);

    const usados = new Set<string>();
    for (let i = 0; i < n; i++) {
      usados.add(`${from[i * 3]},${from[i * 3 + 1]},${from[i * 3 + 2]}`);
    }
    expect(usados.size).toBe(n);
  });

  it("acerca a cada agente a su destino: viaja MUCHO menos que con el orden crudo", () => {
    // Esto es el punto entero de la fase. Sin correspondencia, el agente
    // i va al destino i y se cruza toda la figura.
    const n = 1500;
    const targets = cloud(n, 5);
    const previous = cloud(n, 6);
    const { from } = buildMorphSource(targets, n, previous, n, CORE);

    let conMorph = 0;
    let crudo = 0;
    for (let i = 0; i < n; i++) {
      conMorph += dist(from, i, targets, i);
      crudo += dist(previous, i, targets, i);
    }
    expect(conMorph).toBeLessThan(crudo * 0.5);
  });

  it("si la figura casi no cambia, casi nadie se mueve", () => {
    const n = 500;
    const targets = cloud(n, 7);
    const previous = Float32Array.from(targets); // misma nube
    const { from } = buildMorphSource(targets, n, previous, n, CORE);

    let total = 0;
    for (let i = 0; i < n; i++) total += dist(from, i, targets, i);
    expect(total / n).toBeLessThan(0.5); // celdas de ~0,23 de lado a res 48
  });

  it("con más destinos que agentes viejos, los sobrantes salen del núcleo", () => {
    const targets = cloud(50, 8);
    const previous = cloud(10, 9);
    const { from } = buildMorphSource(targets, 50, previous, 10, CORE);

    let desdeNucleo = 0;
    for (let i = 0; i < 50; i++) {
      if (from[i * 3] === CORE[0] && from[i * 3 + 1] === CORE[1] && from[i * 3 + 2] === CORE[2]) desdeNucleo++;
    }
    expect(desdeNucleo).toBe(40);
  });

  it("con más agentes viejos que destinos, sobran agentes y no se rompe nada", () => {
    const targets = cloud(20, 10);
    const previous = cloud(200, 11);
    const { from, matchedNearby } = buildMorphSource(targets, 20, previous, 200, CORE);
    expect(from).toHaveLength(60);
    // Habiendo agentes de sobra, NINGÚN destino debería salir del núcleo.
    for (let i = 0; i < 20; i++) expect(from[i * 3]).not.toBe(CORE[0]);
    // `matchedNearby` cuenta sólo los que encontraron agente dentro de los
    // anillos. Con una nube vieja rala (200 agentes en todo el cubo) la
    // mayoría cae a la vía de sobrantes, y está bien: lo que importa es
    // que todos consigan agente, no que lo consigan cerca.
    expect(matchedNearby).toBeGreaterThan(0);
  });

  it("sin agentes viejos, TODO sale del núcleo (es una formación normal)", () => {
    const targets = cloud(30, 12);
    const { from } = buildMorphSource(targets, 30, new Float32Array(0), 0, CORE);
    for (let i = 0; i < 30; i++) {
      expect(from[i * 3]).toBe(CORE[0]);
      expect(from[i * 3 + 1]).toBe(CORE[1]);
      expect(from[i * 3 + 2]).toBe(CORE[2]);
    }
  });

  it("los agentes fuera del cubo (recién salidos del reactor) se usan igual", () => {
    const targets = cloud(10, 13);
    // Todos los viejos lejísimos, fuera de la grilla.
    const previous = new Float32Array(10 * 3).fill(SHAPE_HALF_EXTENT * 10);
    const { from } = buildMorphSource(targets, 10, previous, 10, CORE);
    // Ninguno debería caer al núcleo: había agentes disponibles.
    for (let i = 0; i < 10; i++) expect(from[i * 3]).toBe(SHAPE_HALF_EXTENT * 10);
  });

  it("0 destinos no rompe", () => {
    const { from } = buildMorphSource(new Float32Array(0), 0, cloud(10, 14), 10, CORE);
    expect(from).toHaveLength(0);
  });

  it("aguanta 50.000 agentes sin colgarse", () => {
    const n = 50000;
    const targets = cloud(n, 15);
    const previous = cloud(n, 16);
    const t0 = Date.now();
    const { from } = buildMorphSource(targets, n, previous, n, CORE);
    expect(from).toHaveLength(n * 3);
    expect(Date.now() - t0).toBeLessThan(5000);
  });
});
