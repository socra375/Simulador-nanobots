import { describe, expect, it } from "vitest";
import { pickDominantColor, pickColorClusters, DEFAULT_DOMINANT_COLOR } from "./image-color";

// Solo se testean las funciones puras pickDominantColor()/pickColorClusters()
// (sin DOM): extractDominantColorFromFile()/extractColorClustersFromFile()
// dependen de Image/canvas del navegador real y se verifican manualmente/E2E.

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

describe("pickColorClusters", () => {
  it("una foto de un solo color da un único cluster con weight 1", () => {
    const pixels = solidPixels(200, 30, 30, 255, 200);
    const clusters = pickColorClusters(pixels);
    expect(clusters).toHaveLength(1);
    expect(clusters[0].color).toBe(0xc81e1e);
    expect(clusters[0].weight).toBe(1);
  });

  it("dos zonas de color bien distintas dan dos olas, ordenadas de mayor a menor peso", () => {
    const red = solidPixels(220, 20, 20, 255, 60);
    const blue = solidPixels(20, 20, 220, 255, 40);
    const pixels = concatPixels(red, blue);
    const clusters = pickColorClusters(pixels);
    expect(clusters).toHaveLength(2);
    expect(clusters[0].color).toBe(0xdc1414);
    expect(clusters[1].color).toBe(0x1414dc);
    expect(clusters[0].weight).toBeCloseTo(0.6, 1);
    expect(clusters[1].weight).toBeCloseTo(0.4, 1);
    expect(clusters[0].weight + clusters[1].weight).toBeCloseTo(1, 5);
  });

  it("proximidad de color: tonos parecidos de una misma zona se fusionan en UNA sola ola", () => {
    // Varios rojos ligeramente distintos (ruido de cuantización) deben
    // quedar juntos en un solo cluster, no partidos en varios.
    const pixels = concatPixels(
      solidPixels(200, 30, 30, 255, 40),
      solidPixels(205, 35, 28, 255, 40),
      solidPixels(195, 25, 33, 255, 40),
    );
    const clusters = pickColorClusters(pixels);
    expect(clusters).toHaveLength(1);
    expect(clusters[0].weight).toBe(1);
  });

  it("ignora fondo blanco/negro/transparente igual que pickDominantColor", () => {
    const pixels = concatPixels(
      solidPixels(250, 250, 250, 255, 900),
      solidPixels(30, 120, 220, 255, 60),
      solidPixels(220, 30, 120, 255, 40),
    );
    const clusters = pickColorClusters(pixels);
    expect(clusters.length).toBeGreaterThanOrEqual(1);
    for (const c of clusters) expect(c.color).not.toBe(0xfafafa);
  });

  it("respeta el tope maxClusters, re-normalizando los pesos de los que quedan", () => {
    const pixels = concatPixels(
      solidPixels(220, 20, 20, 255, 40), // rojo
      solidPixels(20, 220, 20, 255, 30), // verde
      solidPixels(20, 20, 220, 255, 20), // azul
      solidPixels(220, 220, 20, 255, 10), // amarillo (el más chico, se descarta con maxClusters=3)
    );
    const clusters = pickColorClusters(pixels, 3);
    expect(clusters).toHaveLength(3);
    const totalWeight = clusters.reduce((sum, c) => sum + c.weight, 0);
    expect(totalWeight).toBeCloseTo(1, 5);
  });

  it("cae a un único cluster por defecto si no hay ningún pixel válido", () => {
    const pixels = concatPixels(solidPixels(255, 255, 255, 255, 20), solidPixels(0, 0, 0, 255, 20));
    const clusters = pickColorClusters(pixels);
    expect(clusters).toEqual([{ color: DEFAULT_DOMINANT_COLOR, weight: 1 }]);
  });
});
