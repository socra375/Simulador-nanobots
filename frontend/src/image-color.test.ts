import { describe, expect, it } from "vitest";
import { pickDominantColor, DEFAULT_DOMINANT_COLOR } from "./image-color";

// Solo se testea pickDominantColor() (pura, sin DOM): extractDominantColorFromFile()
// depende de Image/canvas del navegador real y se verifica manualmente/E2E.

function solidPixels(r: number, g: number, b: number, a: number, count: number): Uint8ClampedArray {
  const data = new Uint8ClampedArray(count * 4);
  for (let i = 0; i < count; i++) {
    data[i * 4 + 0] = r;
    data[i * 4 + 1] = g;
    data[i * 4 + 2] = b;
    data[i * 4 + 3] = a;
  }
  return data;
}

function concatPixels(...arrays: Uint8ClampedArray[]): Uint8ClampedArray {
  const total = arrays.reduce((sum, a) => sum + a.length, 0);
  const out = new Uint8ClampedArray(total);
  let offset = 0;
  for (const a of arrays) {
    out.set(a, offset);
    offset += a.length;
  }
  return out;
}

describe("pickDominantColor", () => {
  it("detecta un color sólido puro", () => {
    const pixels = solidPixels(220, 20, 20, 255, 100);
    expect(pickDominantColor(pixels)).toBe(0xdc1414);
  });

  it("ignora el fondo blanco y elige el color minoritario pero saturado", () => {
    const background = solidPixels(250, 250, 250, 255, 900);
    const object = solidPixels(30, 120, 220, 255, 100);
    const pixels = concatPixels(background, object);
    expect(pickDominantColor(pixels)).toBe(0x1e78dc);
  });

  it("ignora el fondo negro (sombra) igual que el blanco", () => {
    const background = solidPixels(5, 5, 5, 255, 900);
    const object = solidPixels(40, 200, 90, 255, 100);
    const pixels = concatPixels(background, object);
    expect(pickDominantColor(pixels)).toBe(0x28c85a);
  });

  it("ignora pixeles transparentes", () => {
    const transparent = solidPixels(255, 0, 0, 0, 500);
    const object = solidPixels(10, 10, 200, 255, 50);
    const pixels = concatPixels(transparent, object);
    expect(pickDominantColor(pixels)).toBe(0x0a0ac8);
  });

  it("elige el color mayoritario cuando hay varios colores válidos", () => {
    const minority = solidPixels(0, 200, 0, 255, 30);
    const majority = solidPixels(200, 0, 0, 255, 70);
    const pixels = concatPixels(minority, majority);
    expect(pickDominantColor(pixels)).toBe(0xc80000);
  });

  it("cae al color por defecto si no hay ningún pixel válido (todo transparente/blanco/negro)", () => {
    const pixels = concatPixels(
      solidPixels(255, 255, 255, 255, 20),
      solidPixels(0, 0, 0, 255, 20),
      solidPixels(100, 100, 100, 0, 20),
    );
    expect(pickDominantColor(pixels)).toBe(DEFAULT_DOMINANT_COLOR);
  });

  it("cae al color por defecto con un array vacío", () => {
    expect(pickDominantColor(new Uint8ClampedArray(0))).toBe(DEFAULT_DOMINANT_COLOR);
  });
});
