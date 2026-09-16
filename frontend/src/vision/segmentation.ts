// Separación objeto/fondo (Fase 38).
//
// El algoritmo de flood fill es el que ya resolvió la Fase 24 dentro de
// visual-hull.ts; acá se generaliza en tres puntos que hacían falta para
// reconstruir desde UNA sola foto:
//
// 1. Trabaja sobre `width x height`, no sobre un cuadrado. La silueta de
//    una sola foto define la geometría, así que deformarla a cuadrado
//    deformaría el objeto reconstruido.
// 2. El umbral es un parámetro, no una constante privada.
// 3. Si la imagen trae canal alpha, la máscara sale de ahí (spec §5): un
//    PNG recortado ya tiene la respuesta exacta, y adivinarla con una
//    heurística sería peor a propósito.
//
// visual-hull.ts re-exporta `silhouetteFromPixels` como un envoltorio
// cuadrado de esto, así que sus 7 tests siguen pasando sin tocarse — la
// misma prueba de fidelidad que se usó cuando el VoxelGrid absorbió la
// grilla del visual hull.

import { hasAlphaChannel, pixelIndex, type ImageBuffer } from "./image-buffer";

/**
 * Diferencia de color tolerada (RGB, 0-255 por eje) entre un píxel de
 * fondo YA confirmado y su vecino inmediato durante el flood fill. Es un
 * umbral LOCAL (paso a paso), no una distancia a un color de referencia
 * fijo — por eso tolera fondos con degradé o iluminación desigual, que es
 * lo que rompía por completo al umbral fijo anterior (Fase 23: en un
 * fondo de estudio con degradé, la esquina y el centro diferían más entre
 * sí que el objeto respecto al fondo).
 */
export const FLOOD_STEP_THRESHOLD = 18;

/** Debajo de este alpha, el píxel se considera fondo. */
export const ALPHA_THRESHOLD = 128;

export interface MaskBBox {
  readonly minX: number;
  readonly minY: number;
  readonly maxX: number;
  readonly maxY: number;
}

export interface ObjectMask {
  /** width*height, 1 = objeto, 0 = fondo. */
  readonly mask: Uint8Array;
  readonly width: number;
  readonly height: number;
  /** Cuántos píxeles son objeto. */
  readonly area: number;
  /** Recuadro del objeto, o null si la máscara está vacía. */
  readonly bbox: MaskBBox | null;
  /**
   * Cuántos píxeles de objeto tocan el borde del frame.
   *
   * OJO CON ESTE CAMPO: con el flood fill es SIEMPRE 0 por construcción,
   * porque todo el perímetro se siembra como fondo antes de propagar. Es
   * útil sólo para las máscaras de alpha, donde sí indica que el objeto
   * sigue fuera del encuadre. Para el flood fill la señal equivalente es
   * `borderSpread`.
   */
  readonly borderTouch: number;
  /**
   * Qué tan heterogéneo es el color del perímetro del frame, 0..1.
   *
   * El flood fill asume que el borde es fondo. Si el perímetro tiene
   * colores muy distintos entre sí, esa suposición es floja: o el objeto
   * llega hasta el borde, o hay más de un fondo. Es la señal real de
   * "esta segmentación puede estar mal", y reemplaza a `borderTouch`, que
   * en este camino no puede dispararse nunca.
   *
   * 0 para las máscaras de alpha: ahí no se usa ninguna suposición sobre
   * el borde.
   */
  readonly borderSpread: number;
  /** De dónde salió la máscara. Se muestra al usuario. */
  readonly source: "alpha" | "flood";
}

/** Recorre una máscara ya calculada y saca área, recuadro y borde tocado. */
export function maskStats(
  mask: Uint8Array,
  width: number,
  height: number,
): { area: number; bbox: MaskBBox | null; borderTouch: number } {
  let area = 0;
  let borderTouch = 0;
  let minX = width, minY = height, maxX = -1, maxY = -1;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!mask[y * width + x]) continue;
      area++;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      if (x === 0 || y === 0 || x === width - 1 || y === height - 1) borderTouch++;
    }
  }
  return {
    area,
    bbox: area > 0 ? { minX, minY, maxX, maxY } : null,
    borderTouch,
  };
}

/**
 * Desvío típico del color a lo largo del perímetro del frame, normalizado
 * a 0..1 (255 de desvío por canal sería 1). Mide cuán confiable es la
 * suposición "el borde es fondo".
 */
export function borderColorSpread(pixels: Uint8ClampedArray, width: number, height: number): number {
  if (width < 2 || height < 2) return 0;
  let n = 0;
  let sr = 0, sg = 0, sb = 0, sr2 = 0, sg2 = 0, sb2 = 0;
  const take = (i: number): void => {
    const b = i * 4;
    const r = pixels[b], g = pixels[b + 1], bl = pixels[b + 2];
    sr += r; sg += g; sb += bl;
    sr2 += r * r; sg2 += g * g; sb2 += bl * bl;
    n++;
  };
  for (let x = 0; x < width; x++) { take(x); take((height - 1) * width + x); }
  for (let y = 1; y < height - 1; y++) { take(y * width); take(y * width + width - 1); }
  if (n === 0) return 0;
  const varR = Math.max(0, sr2 / n - (sr / n) ** 2);
  const varG = Math.max(0, sg2 / n - (sg / n) ** 2);
  const varB = Math.max(0, sb2 / n - (sb / n) ** 2);
  return Math.min(1, Math.sqrt((varR + varG + varB) / 3) / 255);
}

/**
 * Flood fill (relleno por continuidad) desde el borde del frame: se asume
 * que el borde es fondo, y el fondo se propaga hacia adentro píxel a
 * píxel mientras el salto de color entre VECINOS sea chico. Así sigue el
 * degradé del fondo en vez de romperse con él. Cualquier píxel al que el
 * relleno no llega —porque hubo un salto grande, el borde real del
 * objeto— queda como objeto.
 *
 * Pura y testeable sin DOM.
 */
export function segmentByFloodFill(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  threshold: number = FLOOD_STEP_THRESHOLD,
): ObjectMask {
  const cells = width * height;
  const isBackground = new Uint8Array(cells);
  const visited = new Uint8Array(cells);
  // Cola con cursor, no shift(): shift() sobre un array de 40.000 píxeles
  // es O(n) por elemento.
  const queue = new Int32Array(cells);
  let tail = 0;

  const push = (i: number): void => {
    queue[tail++] = i;
  };

  for (let x = 0; x < width; x++) {
    const top = x;
    const bottom = (height - 1) * width + x;
    if (!visited[top]) { visited[top] = 1; isBackground[top] = 1; push(top); }
    if (!visited[bottom]) { visited[bottom] = 1; isBackground[bottom] = 1; push(bottom); }
  }
  for (let y = 0; y < height; y++) {
    const left = y * width;
    const right = y * width + width - 1;
    if (!visited[left]) { visited[left] = 1; isBackground[left] = 1; push(left); }
    if (!visited[right]) { visited[right] = 1; isBackground[right] = 1; push(right); }
  }

  const thresholdSq = threshold * threshold;
  let head = 0;
  while (head < tail) {
    const i = queue[head++];
    const base = i * 4;
    const r = pixels[base], g = pixels[base + 1], b = pixels[base + 2];
    const x = i % width;
    const y = (i - x) / width;

    // 4-conectividad, sin diagonales: una diagonal puede "colarse" por un
    // borde de un píxel de ancho y vaciar el objeto entero.
    const visit = (n: number): void => {
      if (visited[n]) return;
      // Se marca visitado ANTES del test: un píxel rechazado no se
      // re-evalúa desde otro vecino, que es lo que acota el recorrido.
      visited[n] = 1;
      const nb = n * 4;
      const dr = pixels[nb] - r, dg = pixels[nb + 1] - g, db = pixels[nb + 2] - b;
      if (dr * dr + dg * dg + db * db <= thresholdSq) {
        isBackground[n] = 1;
        push(n);
      }
    };
    if (x > 0) visit(i - 1);
    if (x < width - 1) visit(i + 1);
    if (y > 0) visit(i - width);
    if (y < height - 1) visit(i + width);
  }

  const mask = new Uint8Array(cells);
  for (let i = 0; i < cells; i++) mask[i] = isBackground[i] ? 0 : 1;
  const stats = maskStats(mask, width, height);
  return {
    mask, width, height, source: "flood",
    borderSpread: borderColorSpread(pixels, width, height),
    ...stats,
  };
}

/**
 * Máscara directa desde el canal alpha. Si la imagen ya viene recortada,
 * esto ES la respuesta: no hay nada que estimar.
 */
export function segmentByAlpha(
  pixels: Uint8ClampedArray,
  width: number,
  height: number,
  alphaThreshold: number = ALPHA_THRESHOLD,
): ObjectMask {
  const cells = width * height;
  const mask = new Uint8Array(cells);
  for (let i = 0; i < cells; i++) {
    mask[i] = pixels[i * 4 + 3] >= alphaThreshold ? 1 : 0;
  }
  const stats = maskStats(mask, width, height);
  return { mask, width, height, source: "alpha", borderSpread: 0, ...stats };
}

/**
 * Elige el método: alpha si la imagen lo trae, flood fill si no.
 */
export function segment(img: ImageBuffer, threshold: number = FLOOD_STEP_THRESHOLD): ObjectMask {
  if (hasAlphaChannel(img)) return segmentByAlpha(img.pixels, img.width, img.height);
  return segmentByFloodFill(img.pixels, img.width, img.height, threshold);
}

/** Color promedio del objeto, para la vista previa y los diagnósticos. */
export function maskedAverageColor(img: ImageBuffer, m: ObjectMask): [number, number, number] {
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = 0; y < m.height; y++) {
    for (let x = 0; x < m.width; x++) {
      if (!m.mask[y * m.width + x]) continue;
      const i = pixelIndex(x, y, m.width);
      r += img.pixels[i]; g += img.pixels[i + 1]; b += img.pixels[i + 2];
      n++;
    }
  }
  if (n === 0) return [0, 0, 0];
  return [Math.round(r / n), Math.round(g / n), Math.round(b / n)];
}
