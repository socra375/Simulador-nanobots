import { describe, expect, it } from "vitest";
import {
  confidenceLabel,
  LOW_CONFIDENCE,
  overallConfidence,
  segmentationConfidence,
  SINGLE_IMAGE_DISCLAIMER,
} from "./confidence";
import { segment, segmentByAlpha, segmentByFloodFill } from "./segmentation";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

describe("segmentationConfidence", () => {
  it("una máscara de alpha es casi exacta: no se estimó nada", () => {
    const img = blankImage(16, 16, [40, 40, 40, 0]);
    paintRect(img, 4, 4, 11, 11, [40, 40, 40, 255]);
    const c = segmentationConfidence(segment(img));
    expect(c.value).toBeGreaterThan(0.9);
    expect(c.reason).toContain("alpha");
  });

  it("un recorte limpio sobre fondo liso da confianza alta", () => {
    const c = segmentationConfidence(segmentByFloodFill(squareOnWhite(24, 6).pixels, 24, 24));
    expect(c.value).toBeGreaterThan(0.85);
  });

  it("sin objeto la confianza es cero y lo dice", () => {
    const vacio = blankImage(12, 12, [200, 200, 200, 255]);
    const c = segmentationConfidence(segmentByFloodFill(vacio.pixels, 12, 12));
    expect(c.value).toBe(0);
    expect(c.reason).toContain("ningún objeto");
  });

  it("un objeto diminuto baja la confianza: la máscara probablemente falló", () => {
    const img = blankImage(64, 64, [255, 255, 255, 255]);
    paintRect(img, 31, 31, 32, 32, [20, 20, 20, 255]); // 4 px de 4096
    const c = segmentationConfidence(segmentByFloodFill(img.pixels, 64, 64));
    expect(c.value).toBeLessThan(0.3);
    expect(c.reason).toContain("del encuadre");
  });

  it("si casi todo el encuadre queda como objeto, el fondo no se separó", () => {
    // Máscara de alpha casi llena: fuerza el camino de área excesiva sin
    // depender del flood fill.
    const mask = new Uint8Array(16 * 16).fill(1);
    mask[0] = 0;
    const m = { ...segmentByAlpha(new Uint8ClampedArray(16 * 16 * 4), 16, 16), mask, area: 255, source: "flood" as const };
    const c = segmentationConfidence(m);
    expect(c.value).toBeLessThan(0.3);
    expect(c.reason).toContain("no se separó");
  });

  it("un perímetro heterogéneo baja la confianza respecto de uno liso", () => {
    const liso = segmentByFloodFill(squareOnWhite(24, 6).pixels, 24, 24);
    const sucio = blankImage(24, 24, [255, 255, 255, 255]);
    paintRect(sucio, 0, 0, 5, 23, [10, 10, 10, 255]); // media franja negra al borde
    paintRect(sucio, 10, 8, 16, 15, [200, 30, 30, 255]);
    const m = segmentByFloodFill(sucio.pixels, 24, 24);
    if (m.area > 0) {
      expect(segmentationConfidence(m).value).toBeLessThan(segmentationConfidence(liso).value);
    }
  });
});

describe("confianza global", () => {
  it("es la del eslabón más débil, no un promedio", () => {
    const stages = [
      { stage: "a", value: 0.9, reason: "" },
      { stage: "b", value: 0.3, reason: "" },
      { stage: "c", value: 0.95, reason: "" },
    ];
    expect(overallConfidence(stages)).toBe(0.3);
  });

  it("sin etapas es cero, no 1", () => {
    expect(overallConfidence([])).toBe(0);
  });

  it("rotula como aproximada por debajo del umbral", () => {
    expect(confidenceLabel(LOW_CONFIDENCE - 0.01)).toBe("Reconstrucción aproximada");
    expect(confidenceLabel(LOW_CONFIDENCE + 0.01)).toBe("Reconstrucción estimada");
  });

  // El spec §29 exige este aviso. Es un test para que no se borre sin
  // querer en un refactor de UI.
  it("el aviso de una sola imagen dice que la geometría es una estimación", () => {
    expect(SINGLE_IMAGE_DISCLAIMER).toContain("estimación");
    expect(SINGLE_IMAGE_DISCLAIMER).toContain("profundidad");
  });
});
