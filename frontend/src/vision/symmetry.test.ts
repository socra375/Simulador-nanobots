import { describe, expect, it } from "vitest";
import { detectSymmetry, mirrorScore, SYMMETRY_MIN_SCORE } from "./symmetry";
import { segmentByFloodFill } from "./segmentation";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

function maskOf(img: ReturnType<typeof blankImage>) {
  return segmentByFloodFill(img.pixels, img.width, img.height);
}

describe("detectSymmetry", () => {
  it("un cuadrado centrado es simétrico y el eje cae en su centro", () => {
    const m = maskOf(squareOnWhite(24, 6));
    const s = detectSymmetry(m);
    expect(s.symmetric).toBe(true);
    expect(s.score).toBeGreaterThan(0.95);
    expect(s.axisX).toBeCloseTo(11.5, 1); // centro de 6..17
  });

  it("encuentra el eje de un objeto simétrico DESCENTRADO en el encuadre", () => {
    const img = blankImage(40, 24, [255, 255, 255, 255]);
    paintRect(img, 24, 6, 35, 17, [20, 20, 20, 255]); // corrido a la derecha
    const s = detectSymmetry(maskOf(img));
    expect(s.symmetric).toBe(true);
    expect(s.axisX).toBeCloseTo(29.5, 1);
  });

  // La afirmación que el spec §8 pide de verdad: la simetría NO se aplica
  // sola. Una forma que no la tiene debe ser rechazada.
  it("RECHAZA una silueta claramente asimétrica", () => {
    const img = blankImage(32, 32, [255, 255, 255, 255]);
    // Una "L": un brazo largo a la derecha y nada a la izquierda.
    paintRect(img, 8, 8, 12, 24, [20, 20, 20, 255]);
    paintRect(img, 12, 20, 26, 24, [20, 20, 20, 255]);
    const s = detectSymmetry(maskOf(img));
    expect(s.symmetric).toBe(false);
    expect(s.score).toBeLessThan(SYMMETRY_MIN_SCORE);
  });

  it("una máscara vacía no es simétrica ni inventa un eje fuera del frame", () => {
    const vacio = blankImage(16, 16, [180, 180, 180, 255]);
    const s = detectSymmetry(maskOf(vacio));
    expect(s.symmetric).toBe(false);
    expect(s.axisX).toBeGreaterThanOrEqual(0);
    expect(s.axisX).toBeLessThanOrEqual(16);
  });
});

describe("mirrorScore", () => {
  it("un eje muy lejos del objeto no da un puntaje alto espurio", () => {
    const m = maskOf(squareOnWhite(24, 6));
    // Reflejado sobre la columna 1, el cuadrado cae casi entero fuera del
    // frame: intersección ~0. Si la métrica fuera "coincidencias sobre
    // total de píxeles" en vez de Jaccard, esto daría ~0.9 por los
    // píxeles de fondo que coinciden con fondo.
    expect(mirrorScore(m, 1)).toBeLessThan(0.1);
  });

  it("el puntaje es máximo en el eje real", () => {
    const m = maskOf(squareOnWhite(24, 6));
    const real = mirrorScore(m, 11.5);
    expect(real).toBeGreaterThan(mirrorScore(m, 9));
    expect(real).toBeGreaterThan(mirrorScore(m, 14));
  });
});
