import { describe, expect, it } from "vitest";
import { fitDimensions, hasAlphaChannel, luminance, pixelIndex } from "./image-buffer";
import { blankImage, paintRect } from "./fixtures";

// El motivo de este módulo es que los dos cargadores anteriores
// deformaban la imagen a un cuadrado. Eso era inocuo para un histograma
// de color; deja de serlo cuando la silueta de UNA foto define la
// geometría. Estos tests fijan justamente esa propiedad.
describe("fitDimensions: la relación de aspecto se conserva", () => {
  it("una imagen apaisada sigue siendo apaisada", () => {
    const { width, height } = fitDimensions(1920, 1080, 192);
    expect(width).toBe(192);
    expect(height).toBe(108);
    // La proporción original, dentro del redondeo a píxel entero.
    expect(width / height).toBeCloseTo(1920 / 1080, 1);
  });

  it("una imagen vertical sigue siendo vertical", () => {
    const { width, height } = fitDimensions(1080, 1920, 192);
    expect(height).toBe(192);
    expect(width).toBe(108);
  });

  it("no agranda una imagen más chica que el límite", () => {
    expect(fitDimensions(40, 30, 192)).toEqual({ width: 40, height: 30 });
  });

  it("una imagen extremadamente alargada conserva al menos 1 píxel en el lado corto", () => {
    const { width, height } = fitDimensions(4000, 3, 192);
    expect(width).toBe(192);
    expect(height).toBeGreaterThanOrEqual(1);
  });

  it("dimensiones inválidas dan cero en vez de NaN", () => {
    expect(fitDimensions(0, 100)).toEqual({ width: 0, height: 0 });
    expect(fitDimensions(-5, 10)).toEqual({ width: 0, height: 0 });
  });
});

describe("utilidades de píxel", () => {
  it("pixelIndex apunta al canal R del píxel pedido", () => {
    expect(pixelIndex(0, 0, 10)).toBe(0);
    expect(pixelIndex(3, 2, 10)).toBe((2 * 10 + 3) * 4);
  });

  it("la luminancia pesa el verde por encima del rojo y del azul", () => {
    expect(luminance(0, 255, 0)).toBeGreaterThan(luminance(255, 0, 0));
    expect(luminance(255, 0, 0)).toBeGreaterThan(luminance(0, 0, 255));
    expect(luminance(255, 255, 255)).toBeCloseTo(255, 3);
    expect(luminance(0, 0, 0)).toBe(0);
  });

  it("detecta transparencia real y no la confunde con opacidad total", () => {
    const opaca = blankImage(8, 8, [10, 20, 30, 255]);
    expect(hasAlphaChannel(opaca)).toBe(false);
    const conAlpha = blankImage(8, 8, [10, 20, 30, 255]);
    paintRect(conAlpha, 2, 2, 4, 4, [10, 20, 30, 0]);
    expect(hasAlphaChannel(conAlpha)).toBe(true);
  });
});
