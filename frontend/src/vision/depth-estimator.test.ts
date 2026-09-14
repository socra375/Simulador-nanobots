import { describe, expect, it } from "vitest";
import { boxBlur, depthConfidence, distanceTransform, estimateDepth } from "./depth-estimator";
import { segmentByFloodFill } from "./segmentation";
import { blankImage, paintRect, rectMask, squareOnWhite } from "./fixtures";

describe("distanceTransform", () => {
  it("el fondo vale 0 y el interior crece hacia adentro", () => {
    const mask = rectMask(11, 11, 2, 2, 8, 8);
    const d = distanceTransform(mask, 11, 11);
    expect(d[0]).toBe(0); // fondo
    expect(d[2 * 11 + 2]).toBeCloseTo(1, 5); // esquina del objeto: 1 px al borde
    // El centro del cuadrado de 7x7 está a 4 px de distancia del fondo.
    expect(d[5 * 11 + 5]).toBeCloseTo(4, 5);
  });

  it("es monótona: ningún píxel interior está más cerca del borde que uno externo", () => {
    const mask = rectMask(21, 21, 3, 3, 17, 17);
    const d = distanceTransform(mask, 21, 21);
    for (let k = 3; k < 10; k++) {
      // Al avanzar hacia el centro por la diagonal, la distancia sube.
      expect(d[k * 21 + k]).toBeGreaterThan(d[(k - 1) * 21 + (k - 1)] - 1e-6);
    }
  });

  it("una máscara vacía da todo cero, sin NaN", () => {
    const d = distanceTransform(new Uint8Array(36), 6, 6);
    for (const v of d) expect(v).toBe(0);
  });

  it("una franja de 1 píxel de ancho no puede tener grosor mayor que 1", () => {
    const mask = rectMask(9, 9, 4, 0, 4, 8);
    const d = distanceTransform(mask, 9, 9);
    for (let y = 1; y < 8; y++) expect(d[y * 9 + 4]).toBeCloseTo(1, 5);
  });
});

describe("boxBlur", () => {
  it("un campo constante queda igual", () => {
    const src = new Float32Array(25).fill(0.4);
    const out = boxBlur(src, 5, 5, 1);
    for (const v of out) expect(v).toBeCloseTo(0.4, 6);
  });

  it("aplana un pico: el máximo baja y el entorno sube", () => {
    const src = new Float32Array(49);
    src[3 * 7 + 3] = 1;
    const out = boxBlur(src, 7, 7, 1);
    expect(out[3 * 7 + 3]).toBeLessThan(1);
    expect(out[3 * 7 + 2]).toBeGreaterThan(0);
  });

  it("radio 0 devuelve una copia, no el mismo buffer", () => {
    const src = new Float32Array([1, 2, 3, 4]);
    const out = boxBlur(src, 2, 2, 0);
    expect(Array.from(out)).toEqual([1, 2, 3, 4]);
    expect(out).not.toBe(src);
  });
});

describe("estimateDepth", () => {
  const img = squareOnWhite(24, 5);
  const mask = segmentByFloodFill(img.pixels, 24, 24);

  it("la profundidad es 0 fuera del objeto: el fondo no se reconstruye", () => {
    const d = estimateDepth(img, mask);
    expect(d.depth[0]).toBe(0);
    expect(d.depth[24 * 24 - 1]).toBe(0);
  });

  it("el contorno es mucho más fino que el centro", () => {
    const d = estimateDepth(img, mask);
    const borde = d.depth[5 * 24 + 5]; // esquina del objeto
    const centro = d.depth[12 * 24 + 12];
    expect(borde).toBeLessThan(centro * 0.5);
    expect(centro).toBeGreaterThan(0.5);
  });

  // ESTA es LA propiedad que hace que el volumen cierre, y la razón por la
  // que el relieve se MULTIPLICA por el grosor en vez de sumarse: si un
  // píxel del contorno pudiera levantarse por ser brillante, la cara de
  // adelante y la de atrás no se tocarían ahí y el objeto quedaría abierto
  // por el canto.
  //
  // Hace falta una imagen CON TEXTURA para que el test pueda fallar: sobre
  // un color plano el término de relieve vale cero y la diferencia entre
  // multiplicar y sumar no se ve.
  it("ni el píxel más brillante del contorno levanta el borde", () => {
    const tex = blankImage(64, 64, [255, 255, 255, 255]);
    paintRect(tex, 2, 2, 61, 61, [40, 40, 40, 255]);
    // Textura fuerte: franjas claras y oscuras, incluidas las del borde.
    for (let y = 2; y <= 61; y++) {
      if (y % 3 === 0) paintRect(tex, 2, y, 61, y, [200, 200, 200, 255]);
    }
    const m = segmentByFloodFill(tex.pixels, 64, 64);
    const d = estimateDepth(tex, m);
    // Debe haber relieve real, si no el test no prueba nada.
    expect(d.confidence).toBeGreaterThan(0.25);

    // Máximo sobre TODOS los píxeles del contorno (los que tienen al menos
    // un vecino de fondo).
    let maxBorde = 0;
    for (let y = 1; y < 63; y++) {
      for (let x = 1; x < 63; x++) {
        const i = y * 64 + x;
        if (!m.mask[i]) continue;
        const frontera =
          !m.mask[i - 1] || !m.mask[i + 1] || !m.mask[i - 64] || !m.mask[i + 64];
        if (frontera) maxBorde = Math.max(maxBorde, d.depth[i]);
      }
    }
    expect(maxBorde).toBeLessThan(0.12);
  });

  it("el máximo está en el interior y vale como mucho 1", () => {
    const d = estimateDepth(img, mask);
    let max = 0;
    for (const v of d.depth) max = Math.max(max, v);
    expect(max).toBeLessThanOrEqual(1);
    expect(max).toBeGreaterThan(0.8);
  });

  it("un objeto más gordo da mayor maxThickness que uno flaco", () => {
    const gordo = blankImage(32, 32, [255, 255, 255, 255]);
    paintRect(gordo, 6, 6, 25, 25, [30, 30, 30, 255]);
    const flaco = blankImage(32, 32, [255, 255, 255, 255]);
    paintRect(flaco, 14, 6, 17, 25, [30, 30, 30, 255]);
    const dg = estimateDepth(gordo, segmentByFloodFill(gordo.pixels, 32, 32));
    const df = estimateDepth(flaco, segmentByFloodFill(flaco.pixels, 32, 32));
    expect(dg.maxThickness).toBeGreaterThan(df.maxThickness * 2);
  });

  it("una máscara vacía no produce NaN ni confianza inventada", () => {
    const vacio = blankImage(10, 10, [200, 200, 200, 255]);
    const d = estimateDepth(vacio, segmentByFloodFill(vacio.pixels, 10, 10));
    expect(d.confidence).toBe(0);
    for (const v of d.depth) expect(Number.isNaN(v)).toBe(false);
  });

  it("nunca produce NaN con una imagen de un solo píxel", () => {
    const uno = blankImage(1, 1, [10, 10, 10, 255]);
    const d = estimateDepth(uno, segmentByFloodFill(uno.pixels, 1, 1));
    for (const v of d.depth) expect(Number.isNaN(v)).toBe(false);
  });
});

describe("depthConfidence: se informa lo que se puede sostener", () => {
  // El techo duro es la afirmación importante: esto es una heurística
  // geométrica, no una medición. Prometer más sería lo que el spec §29
  // y §42 prohíben.
  it("nunca supera 0.55, por más señal que haya", () => {
    expect(depthConfidence(10, 0)).toBeLessThanOrEqual(0.55);
    expect(depthConfidence(1e9, 0)).toBeLessThanOrEqual(0.55);
  });

  it("más relieve en la foto da más confianza que una silueta plana", () => {
    expect(depthConfidence(0.12, 0)).toBeGreaterThan(depthConfidence(0, 0));
  });

  it("un perímetro heterogéneo la baja", () => {
    expect(depthConfidence(0.12, 0.5)).toBeLessThan(depthConfidence(0.12, 0));
  });

  it("nunca da cero ni negativo cuando hay objeto", () => {
    expect(depthConfidence(0, 1)).toBeGreaterThan(0);
  });
});
