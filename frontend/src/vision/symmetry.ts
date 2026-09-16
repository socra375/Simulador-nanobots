// Detección de simetría bilateral (Fase 38).
//
// El spec §8 (MODE C) pide inferir la parte oculta por simetría en
// objetos que la tienen —vehículos, robots, muebles— y advierte: "NO
// aplicar simetría automáticamente a objetos que claramente no la
// poseen". O sea que la simetría no se puede asumir: hay que MEDIRLA y
// dejar que el resultado decida.
//
// Se mide buscando el eje vertical que maximiza la coincidencia entre la
// silueta y su reflejo. El puntaje es Jaccard (intersección sobre unión),
// que es 1 para una silueta perfectamente simétrica y baja rápido en
// cuanto deja de serlo.

import type { ObjectMask } from "./segmentation";

/**
 * Por debajo de esto la silueta no se considera simétrica y el modo C
 * cae al modo B. Calibrado para aceptar un auto de frente o una silla
 * (que nunca dan 1 por la iluminación y el recorte) y rechazar una
 * persona en movimiento o un objeto fotografiado en diagonal.
 */
export const SYMMETRY_MIN_SCORE = 0.82;

export interface SymmetryResult {
  /** Columna del eje, en píxeles (puede ser fraccionaria por el paso de 0.5). */
  readonly axisX: number;
  /** 0..1 — Jaccard entre la silueta y su reflejo sobre ese eje. */
  readonly score: number;
  /** ¿Supera el umbral? Es lo único que el reconstructor debería mirar. */
  readonly symmetric: boolean;
}

/** Jaccard entre la máscara y su reflejo sobre `axisX` (en columnas). */
export function mirrorScore(m: ObjectMask, axisX: number): number {
  const { mask, width, height } = m;
  let inter = 0;
  let union = 0;
  for (let y = 0; y < height; y++) {
    const row = y * width;
    for (let x = 0; x < width; x++) {
      const a = mask[row + x];
      // Reflejo: x' = 2*axis - x. Se redondea porque el eje puede caer
      // entre dos columnas (paso de media columna, abajo).
      const mx = Math.round(2 * axisX - x);
      const b = mx >= 0 && mx < width ? mask[row + mx] : 0;
      if (a || b) union++;
      if (a && b) inter++;
    }
  }
  return union === 0 ? 0 : inter / union;
}

/**
 * Busca el mejor eje de simetría vertical.
 *
 * Sólo se prueban ejes dentro del recuadro del objeto y cerca de su
 * centro: un eje lejano da puntajes altos espurios (dos siluetas que casi
 * no se solapan tienen unión chica). El barrido va en pasos de media
 * columna porque el eje real de un objeto centrado a mano cae entre
 * píxeles más veces de las que cae justo encima de uno.
 */
export function detectSymmetry(m: ObjectMask, minScore: number = SYMMETRY_MIN_SCORE): SymmetryResult {
  if (!m.bbox || m.area === 0) return { axisX: m.width / 2, score: 0, symmetric: false };

  const { minX, maxX } = m.bbox;
  const center = (minX + maxX) / 2;
  const span = (maxX - minX) / 2;
  // Se explora ±25% del semiancho alrededor del centro del recuadro.
  const reach = Math.max(1, span * 0.25);

  // El barrido va sobre una grilla de MEDIA COLUMNA absoluta (k/2), no
  // sobre pasos de 0.5 a partir de un extremo fraccionario: así el eje
  // real de un objeto de ancho par —que cae exactamente en una mitad—
  // siempre es uno de los candidatos, en vez de quedar entre dos.
  let bestAxis = center;
  let bestScore = 0;
  const from = Math.floor((center - reach) * 2);
  const to = Math.ceil((center + reach) * 2);
  for (let k = from; k <= to; k++) {
    const axis = k / 2;
    const score = mirrorScore(m, axis);
    if (score > bestScore) {
      bestScore = score;
      bestAxis = axis;
    }
  }
  return { axisX: bestAxis, score: bestScore, symmetric: bestScore >= minScore };
}
