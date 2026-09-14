// Imágenes sintéticas para los tests del pipeline de visión (Fase 38).
//
// vitest corre en node SIN DOM, así que acá no hay canvas ni Image: se
// arman los píxeles a mano. Es la misma restricción que ya tenían
// image-color.test.ts y visual-hull.test.ts, y la razón por la que todo
// lo testeable del pipeline son funciones puras sobre TypedArrays.

import type { ImageBuffer } from "./image-buffer";

export function blankImage(width: number, height: number, rgba: [number, number, number, number]): ImageBuffer {
  const pixels = new Uint8ClampedArray(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    pixels[i * 4] = rgba[0];
    pixels[i * 4 + 1] = rgba[1];
    pixels[i * 4 + 2] = rgba[2];
    pixels[i * 4 + 3] = rgba[3];
  }
  return { pixels, width, height };
}

/** Pinta un rectángulo [x0, x1] x [y0, y1] inclusive. */
export function paintRect(
  img: ImageBuffer,
  x0: number, y0: number, x1: number, y1: number,
  rgba: [number, number, number, number],
): void {
  for (let y = Math.max(0, y0); y <= Math.min(img.height - 1, y1); y++) {
    for (let x = Math.max(0, x0); x <= Math.min(img.width - 1, x1); x++) {
      const i = (y * img.width + x) * 4;
      img.pixels[i] = rgba[0];
      img.pixels[i + 1] = rgba[1];
      img.pixels[i + 2] = rgba[2];
      img.pixels[i + 3] = rgba[3];
    }
  }
}

/** Fondo blanco opaco con un cuadrado oscuro centrado. */
export function squareOnWhite(size: number, margin: number, rgb: [number, number, number] = [20, 20, 20]): ImageBuffer {
  const img = blankImage(size, size, [255, 255, 255, 255]);
  paintRect(img, margin, margin, size - 1 - margin, size - 1 - margin, [...rgb, 255]);
  return img;
}

/** Máscara binaria cruda, sin pasar por segmentación. */
export function rectMask(width: number, height: number, x0: number, y0: number, x1: number, y1: number): Uint8Array {
  const mask = new Uint8Array(width * height);
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) mask[y * width + x] = 1;
  return mask;
}
