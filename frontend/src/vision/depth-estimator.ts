// Estimación de profundidad desde UNA imagen (Fase 38).
//
// LO QUE ESTO NO ES: un modelo de profundidad. No hay ninguna IA acá, y
// una foto plana no contiene la información necesaria para conocer la
// geometría real (spec §7, §29). Esto estima, y lo dice.
//
// LO QUE SÍ ES: dos pistas geométricas reales, combinadas.
//
// 1. INFLADO DE LA SILUETA (el término dominante). La transformada de
//    distancia dice, para cada píxel del objeto, a qué distancia está del
//    borde de la silueta. Cuanto más adentro, más grueso — es la misma
//    intuición que usa el modelado por inflado: un objeto se ve más
//    "profundo" en su centro que en su contorno. El resultado es una
//    forma redondeada, no una extrusión plana, y llega a CERO exacto en
//    el borde, así que la cara de adelante y la de atrás se cierran y el
//    volumen queda estanco.
//
// 2. RELIEVE POR SOMBREADO (corrección chica). La luminancia menos su
//    versión desenfocada deja el detalle local y descarta el color base:
//    un filo iluminado queda por encima de su entorno, un pliegue por
//    debajo. Es una pista débil —depende de dónde estaba la luz— así que
//    entra con poco peso y MODULADA por el inflado, para no despegar el
//    borde de la silueta.
//
// CONVENCIÓN, explícita como pide el spec §7:
//   0.0 = sobre el plano de fondo (el contorno de la silueta)
//   1.0 = el punto que más sobresale hacia la cámara
// Es decir, la profundidad crece hacia el observador.

import { luminance, type ImageBuffer } from "./image-buffer";
import type { ObjectMask } from "./segmentation";

/**
 * Exponente del inflado. Con 1 el perfil es cónico (aristas duras en el
 * centro); por debajo de 1 se redondea y el volumen se llena más, que es
 * lo que se parece a un objeto real.
 */
export const INFLATE_GAMMA = 0.65;

/** Cuánto puede corregir el sombreado, como fracción del grosor local. */
export const SHADING_WEIGHT = 0.35;

/** Radio del desenfoque que separa el relieve del color base. */
export const RELIEF_BLUR_RADIUS = 3;

export interface DepthMap {
  /** width*height, 0..1. Fuera de la máscara vale 0. */
  readonly depth: Float32Array;
  readonly width: number;
  readonly height: number;
  /** Distancia máxima al borde, en píxeles. Mide cuán "gordo" es el objeto. */
  readonly maxThickness: number;
  /** 0..1 — ver `depthConfidence`. */
  readonly confidence: number;
}

/**
 * Transformada de distancia por chamfer de dos pasadas (3-4).
 *
 * Devuelve, por píxel de objeto, la distancia aproximada al fondo más
 * cercano, en píxeles. Los píxeles de fondo valen 0. Es O(width*height)
 * con dos recorridos, en vez del O(n²) de una búsqueda directa.
 *
 * El error del chamfer 3-4 frente a la distancia euclídea real es de
 * ~2-4%, irrelevante para inflar una silueta.
 */
export function distanceTransform(mask: Uint8Array, width: number, height: number): Float32Array {
  const cells = width * height;
  const dist = new Float32Array(cells);
  const FAR = width + height + 1;
  for (let i = 0; i < cells; i++) dist[i] = mask[i] ? FAR : 0;

  const D1 = 1;          // vecino ortogonal
  const D2 = Math.SQRT2; // vecino diagonal

  // Pasada hacia adelante: arriba-izquierda -> abajo-derecha.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = y * width + x;
      if (!mask[i]) continue;
      let d = dist[i];
      if (x > 0) d = Math.min(d, dist[i - 1] + D1);
      if (y > 0) d = Math.min(d, dist[i - width] + D1);
      if (x > 0 && y > 0) d = Math.min(d, dist[i - width - 1] + D2);
      if (x < width - 1 && y > 0) d = Math.min(d, dist[i - width + 1] + D2);
      dist[i] = d;
    }
  }
  // Pasada hacia atrás: abajo-derecha -> arriba-izquierda.
  for (let y = height - 1; y >= 0; y--) {
    for (let x = width - 1; x >= 0; x--) {
      const i = y * width + x;
      if (!mask[i]) continue;
      let d = dist[i];
      if (x < width - 1) d = Math.min(d, dist[i + 1] + D1);
      if (y < height - 1) d = Math.min(d, dist[i + width] + D1);
      if (x < width - 1 && y < height - 1) d = Math.min(d, dist[i + width + 1] + D2);
      if (x > 0 && y < height - 1) d = Math.min(d, dist[i + width - 1] + D2);
      dist[i] = d;
    }
  }
  return dist;
}

/** Desenfoque de caja separable sobre un canal. Reusa un solo buffer temporal. */
export function boxBlur(src: Float32Array, width: number, height: number, radius: number): Float32Array {
  if (radius < 1) return src.slice();
  const tmp = new Float32Array(src.length);
  const out = new Float32Array(src.length);
  // Horizontal.
  for (let y = 0; y < height; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      let sum = 0, n = 0;
      const from = Math.max(0, x - radius);
      const to = Math.min(width - 1, x + radius);
      for (let k = from; k <= to; k++) { sum += src[row + k]; n++; }
      tmp[row + x] = sum / n;
    }
  }
  // Vertical.
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let sum = 0, n = 0;
      const from = Math.max(0, y - radius);
      const to = Math.min(height - 1, y + radius);
      for (let k = from; k <= to; k++) { sum += tmp[k * width + x]; n++; }
      out[y * width + x] = sum / n;
    }
  }
  return out;
}

/**
 * Confianza de la profundidad estimada.
 *
 * TECHO DURO de 0.55: esto es una heurística geométrica, no una medición
 * ni un modelo entrenado. Afirmar más sería justo lo que el spec §29 y
 * §42 prohíben. Dentro de ese techo, sube cuando el sombreado aporta
 * señal real (una foto con relieve visible da más información que una
 * silueta de color plano, donde lo único que queda es el inflado) y baja
 * cuando el objeto está cortado por el borde del frame.
 */
export function depthConfidence(reliefEnergy: number, borderSpread: number): number {
  const CEILING = 0.55;
  const FLOOR = 0.18;
  const fromRelief = Math.min(1, reliefEnergy / 0.12);
  // Un perímetro heterogéneo significa que la silueta de la que se
  // infla puede estar mal: la profundidad no puede ser mejor que ella.
  const shaky = Math.min(1, borderSpread * 5);
  const raw = FLOOR + (CEILING - FLOOR) * fromRelief;
  return Math.max(0.05, raw * (1 - 0.5 * shaky));
}

/**
 * Mapa de profundidad estimado para el objeto de `mask`.
 *
 * Fuera de la máscara la profundidad es 0 y ahí se queda: el fondo no se
 * reconstruye.
 */
export function estimateDepth(
  img: ImageBuffer,
  m: ObjectMask,
  gamma: number = INFLATE_GAMMA,
  shadingWeight: number = SHADING_WEIGHT,
): DepthMap {
  const { width, height } = m;
  const cells = width * height;
  const depth = new Float32Array(cells);

  if (m.area === 0) {
    return { depth, width, height, maxThickness: 0, confidence: 0 };
  }

  const dist = distanceTransform(m.mask, width, height);
  let maxThickness = 0;
  for (let i = 0; i < cells; i++) if (dist[i] > maxThickness) maxThickness = dist[i];
  if (maxThickness <= 0) {
    return { depth, width, height, maxThickness: 0, confidence: 0.05 };
  }

  // Relieve: luminancia menos su desenfoque, normalizado a ±1 por el
  // desvío típico de la propia imagen (una foto de bajo contraste no
  // debería quedar sin relieve sólo por ser de bajo contraste).
  const lum = new Float32Array(cells);
  for (let i = 0; i < cells; i++) {
    const b = i * 4;
    lum[i] = luminance(img.pixels[b], img.pixels[b + 1], img.pixels[b + 2]) / 255;
  }
  const blurred = boxBlur(lum, width, height, RELIEF_BLUR_RADIUS);

  let sumSq = 0;
  for (let i = 0; i < cells; i++) {
    if (!m.mask[i]) continue;
    const d = lum[i] - blurred[i];
    sumSq += d * d;
  }
  const reliefEnergy = Math.sqrt(sumSq / m.area);
  // Sin relieve medible, el divisor no debe amplificar ruido numérico.
  const reliefScale = reliefEnergy > 1e-4 ? 1 / (reliefEnergy * 3) : 0;

  for (let i = 0; i < cells; i++) {
    if (!m.mask[i]) continue;
    const t = Math.pow(dist[i] / maxThickness, gamma);
    const relief = Math.max(-1, Math.min(1, (lum[i] - blurred[i]) * reliefScale));
    // El relieve se MULTIPLICA por el grosor: en el borde (t=0) no puede
    // levantar nada, así que la superficie sigue cerrando sobre la
    // silueta pase lo que pase con la iluminación.
    const d = t * (1 + shadingWeight * relief);
    depth[i] = Math.max(0, Math.min(1, d));
  }

  return {
    depth,
    width,
    height,
    maxThickness,
    confidence: depthConfidence(reliefEnergy, m.borderSpread),
  };
}
