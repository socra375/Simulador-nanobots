import { describe, expect, it } from "vitest";
import { borderColorSpread, maskStats, segment, segmentByAlpha, segmentByFloodFill } from "./segmentation";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

describe("segmentByFloodFill", () => {
  it("separa un objeto centrado de su fondo", () => {
    const img = squareOnWhite(16, 4);
    const m = segmentByFloodFill(img.pixels, 16, 16);
    expect(m.mask[0]).toBe(0); // esquina: fondo
    expect(m.mask[8 * 16 + 8]).toBe(1); // centro: objeto
    expect(m.area).toBe(8 * 8); // el cuadrado de 4..11 en ambos ejes
    expect(m.bbox).toEqual({ minX: 4, minY: 4, maxX: 11, maxY: 11 });
    expect(m.borderTouch).toBe(0);
    expect(m.source).toBe("flood");
  });

  // ESTE es el motivo de generalizar el flood fill: antes asumía un frame
  // cuadrado, y con una foto apaisada el objeto salía deformado.
  it("funciona sobre un frame NO cuadrado, sin deformar el recuadro", () => {
    const img = blankImage(24, 8, [255, 255, 255, 255]);
    paintRect(img, 8, 2, 15, 5, [20, 20, 20, 255]);
    const m = segmentByFloodFill(img.pixels, 24, 8);
    expect(m.bbox).toEqual({ minX: 8, minY: 2, maxX: 15, maxY: 5 });
    expect(m.area).toBe(8 * 4);
  });

  it("un frame del color del fondo da máscara vacía, sin recuadro", () => {
    const img = blankImage(12, 12, [200, 200, 200, 255]);
    const m = segmentByFloodFill(img.pixels, 12, 12);
    expect(m.area).toBe(0);
    expect(m.bbox).toBeNull();
  });

  // La razón de ser del umbral local: un fondo en degradé rompía por
  // completo al umbral fijo contra el color de las esquinas (Fase 24).
  it("sigue un fondo en degradé en vez de romperse con él", () => {
    const img = blankImage(32, 32, [0, 0, 0, 255]);
    for (let y = 0; y < 32; y++) {
      // El degradé va de 60 a ~250: un salto total enorme, pero suave
      // entre vecinos.
      const v = 60 + Math.round((y / 31) * 190);
      paintRect(img, 0, y, 31, y, [v, v, v, 255]);
    }
    paintRect(img, 12, 12, 19, 19, [220, 30, 30, 255]); // objeto rojo
    const m = segmentByFloodFill(img.pixels, 32, 32);
    expect(m.bbox).toEqual({ minX: 12, minY: 12, maxX: 19, maxY: 19 });
  });

  // LIMITACIÓN REAL del algoritmo, fijada acá para que nadie la
  // "arregle" sin querer: todo el perímetro se siembra como fondo, así
  // que un objeto pegado al borde se come desde ahí. Por eso borderTouch
  // es siempre 0 en este camino y la señal de alarma es borderSpread.
  it("un objeto pegado al borde se pierde: el perímetro se siembra como fondo", () => {
    const img = blankImage(16, 16, [255, 255, 255, 255]);
    paintRect(img, 0, 0, 3, 15, [20, 20, 20, 255]); // pegado al borde izquierdo
    const m = segmentByFloodFill(img.pixels, 16, 16);
    expect(m.borderTouch).toBe(0);
    // Del objeto real (4x16 = 64 px) sobrevive un puñado: los pocos que
    // un vecino blanco alcanzó a marcar visitados antes de que el relleno
    // los tomara. La barra desapareció a efectos prácticos.
    expect(m.area).toBeLessThan(64 * 0.2);
    // ...pero el perímetro heterogéneo lo delata.
    expect(m.borderSpread).toBeGreaterThan(0.2);
  });

  it("un fondo liso da borderSpread ~0: la suposición del borde es sólida", () => {
    const m = segmentByFloodFill(squareOnWhite(16, 4).pixels, 16, 16);
    expect(m.borderSpread).toBeLessThan(0.01);
  });

  it("el umbral es un parámetro: subirlo se come más fondo", () => {
    const img = blankImage(24, 24, [255, 255, 255, 255]);
    paintRect(img, 8, 8, 15, 15, [225, 225, 225, 255]); // objeto casi blanco
    const estricto = segmentByFloodFill(img.pixels, 24, 24, 5);
    const laxo = segmentByFloodFill(img.pixels, 24, 24, 80);
    expect(estricto.area).toBeGreaterThan(laxo.area);
    expect(laxo.area).toBe(0);
  });
});

describe("segmentByAlpha", () => {
  it("usa el canal alpha tal cual, sin estimar nada", () => {
    const img = blankImage(10, 10, [10, 10, 10, 0]);
    paintRect(img, 3, 3, 6, 6, [10, 10, 10, 255]);
    const m = segmentByAlpha(img.pixels, 10, 10);
    expect(m.area).toBe(16);
    expect(m.bbox).toEqual({ minX: 3, minY: 3, maxX: 6, maxY: 6 });
    expect(m.source).toBe("alpha");
  });

  it("segment() prefiere el alpha cuando la imagen lo trae", () => {
    // El objeto es del MISMO color que el fondo: sólo el alpha lo separa.
    // Si segment() cayera al flood fill, la máscara saldría vacía.
    const img = blankImage(10, 10, [80, 80, 80, 0]);
    paintRect(img, 2, 2, 7, 7, [80, 80, 80, 255]);
    const m = segment(img);
    expect(m.source).toBe("alpha");
    expect(m.area).toBe(36);
  });

  it("segment() cae al flood fill si no hay transparencia", () => {
    const m = segment(squareOnWhite(16, 4));
    expect(m.source).toBe("flood");
    expect(m.area).toBe(64);
  });
});

describe("borderColorSpread", () => {
  it("un perímetro de un solo color da cero", () => {
    expect(borderColorSpread(blankImage(10, 10, [90, 90, 90, 255]).pixels, 10, 10)).toBeCloseTo(0, 6);
  });

  it("un perímetro con dos colores muy distintos da un valor alto", () => {
    const img = blankImage(10, 10, [255, 255, 255, 255]);
    paintRect(img, 0, 0, 4, 9, [0, 0, 0, 255]); // media imagen negra
    expect(borderColorSpread(img.pixels, 10, 10)).toBeGreaterThan(0.3);
  });
});

describe("maskStats", () => {
  it("una máscara vacía no inventa un recuadro", () => {
    expect(maskStats(new Uint8Array(25), 5, 5)).toEqual({ area: 0, bbox: null, borderTouch: 0 });
  });

  it("un único píxel da un recuadro degenerado pero válido", () => {
    const mask = new Uint8Array(25);
    mask[2 * 5 + 3] = 1;
    expect(maskStats(mask, 5, 5)).toEqual({
      area: 1,
      bbox: { minX: 3, minY: 2, maxX: 3, maxY: 2 },
      borderTouch: 0,
    });
  });
});
