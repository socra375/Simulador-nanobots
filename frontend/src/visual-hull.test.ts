import { describe, expect, it } from "vitest";
import { silhouetteFromPixels, carveVisualHull, type Silhouette } from "./visual-hull";

// Solo se testean las funciones puras (sin DOM): extractSilhouette()/
// buildVisualHullPoints() dependen de Image/canvas del navegador real y
// se verifican manualmente/E2E (mismo patrón que image-color.test.ts).

function solidPixels(r: number, g: number, b: number, size: number): Uint8ClampedArray {
  const data = new Uint8ClampedArray(size * size * 4);
  for (let i = 0; i < size * size; i++) {
    data[i * 4 + 0] = r;
    data[i * 4 + 1] = g;
    data[i * 4 + 2] = b;
    data[i * 4 + 3] = 255;
  }
  return data;
}

// Fondo blanco en las 4 esquinas + un cuadrado de otro color en el medio
// de la mitad izquierda del frame (SIN tocar ninguna esquina) — así la
// heurística de "fondo = promedio de las esquinas" tiene esquinas reales
// de fondo para comparar, sin importar el `region` de prueba.
function syntheticPixels(size: number, hasObject: boolean): Uint8ClampedArray {
  const data = solidPixels(255, 255, 255, size); // fondo blanco
  if (!hasObject) return data;
  const margin = 2;
  for (let y = margin; y < size - margin; y++) {
    for (let x = margin; x < size / 2 - margin; x++) {
      const idx = (y * size + x) * 4;
      data[idx] = 20;
      data[idx + 1] = 20;
      data[idx + 2] = 20;
      data[idx + 3] = 255;
    }
  }
  return data;
}

describe("silhouetteFromPixels", () => {
  it("separa objeto/fondo por distancia de color a las esquinas", () => {
    const size = 16;
    const s = silhouetteFromPixels(syntheticPixels(size, true), size);
    // Esquinas (fondo blanco) deben quedar en 0.
    expect(s.mask[0]).toBe(0); // (0,0)
    expect(s.mask[size - 1]).toBe(0); // (size-1,0)
    // Centro del cuadrado oscuro (objeto) debe quedar en 1.
    expect(s.mask[8 * size + 4]).toBe(1);
    // Centro de la mitad derecha (fondo) debe quedar en 0.
    expect(s.mask[8 * size + 12]).toBe(0);
  });

  it("un frame todo del color de fondo da máscara vacía", () => {
    const size = 16;
    const s = silhouetteFromPixels(syntheticPixels(size, false), size);
    expect(s.mask.some((v) => v !== 0)).toBe(false);
  });
});

// Para carveVisualHull no hace falta pasar por la heurística de fondo de
// silhouetteFromPixels (que asume que las ESQUINAS son fondo — no vale
// para un frame "todo objeto"): se arman las máscaras directo.
function mask(size: number, region: "left" | "right" | "all" | "none"): Silhouette {
  const m = new Uint8Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inRegion =
        region === "all" || (region === "left" && x < size / 2) || (region === "right" && x >= size / 2);
      m[y * size + x] = inRegion ? 1 : 0;
    }
  }
  return { mask: m, size };
}

describe("carveVisualHull", () => {
  const SIZE = 16;
  const VOXEL_RES = 12;
  const allOpen = mask(SIZE, "all");

  it("con las 4 vistas completamente abiertas, sobrevive la grilla completa (hay puntos de superficie)", () => {
    const points = carveVisualHull(allOpen, allOpen, allOpen, allOpen, VOXEL_RES);
    expect(points.length).toBeGreaterThan(0);
    expect(points.length % 3).toBe(0);
    expect(points.some((v) => Number.isNaN(v))).toBe(false);
  });

  it("si alguna de las 4 vistas no tiene nada de objeto, no sobrevive ningún vóxel (intersección vacía)", () => {
    const empty = mask(SIZE, "none");
    const points = carveVisualHull(allOpen, allOpen, allOpen, empty, VOXEL_RES);
    expect(points.length).toBe(0);
  });

  it("la vista frontal restringe X: objeto solo en la mitad izquierda del frame -> sobreviven solo vóxeles con x<0", () => {
    const frontLeft = mask(SIZE, "left");
    const points = carveVisualHull(frontLeft, allOpen, allOpen, allOpen, VOXEL_RES);
    expect(points.length).toBeGreaterThan(0);
    for (let i = 0; i < points.length; i += 3) {
      expect(points[i]).toBeLessThanOrEqual(0);
    }
  });

  it("la vista trasera restringe X con el signo invertido respecto a la frontal", () => {
    const backLeft = mask(SIZE, "left");
    const points = carveVisualHull(allOpen, backLeft, allOpen, allOpen, VOXEL_RES);
    expect(points.length).toBeGreaterThan(0);
    for (let i = 0; i < points.length; i += 3) {
      expect(points[i]).toBeGreaterThanOrEqual(0);
    }
  });

  it("las vistas laterales restringen Z (izquierda y derecha con signo opuesto)", () => {
    const leftMask = mask(SIZE, "left");
    const pointsLeft = carveVisualHull(allOpen, allOpen, leftMask, allOpen, VOXEL_RES);
    expect(pointsLeft.length).toBeGreaterThan(0);
    for (let i = 0; i < pointsLeft.length; i += 3) {
      expect(pointsLeft[i + 2]).toBeLessThanOrEqual(0);
    }

    const rightMask = mask(SIZE, "left");
    const pointsRight = carveVisualHull(allOpen, allOpen, allOpen, rightMask, VOXEL_RES);
    expect(pointsRight.length).toBeGreaterThan(0);
    for (let i = 0; i < pointsRight.length; i += 3) {
      expect(pointsRight[i + 2]).toBeGreaterThanOrEqual(0);
    }
  });
});
