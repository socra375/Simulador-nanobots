// Confianza por etapa (Fase 38, spec §30).
//
// REGLA QUE ORDENA ESTE ARCHIVO: cada número sale de una cantidad que se
// puede medir sobre los datos, no de una calibración inventada. Por eso
// NO existe acá una "confianza de detección de objeto": el proyecto no
// tiene un detector, y publicar "detección: 96%" sería fingir una IA que
// no está (spec §42). Lo que sí hay es segmentación, y de eso se informa.
//
// Los valores son indicadores internos de calidad, no precisión
// científica — el spec §30 lo pide explícitamente y la UI lo repite.

import type { ObjectMask } from "./segmentation";

/** Debajo de esta fracción del frame, la máscara casi seguro falló. */
export const MIN_AREA_FRACTION = 0.02;
/** Arriba de esta, el flood fill se comió el fondo entero como objeto. */
export const MAX_AREA_FRACTION = 0.92;

export interface StageConfidence {
  readonly stage: string;
  /** 0..1 */
  readonly value: number;
  /** Por qué dio eso. Se muestra al usuario, no es sólo para depurar. */
  readonly reason: string;
}

/**
 * Confianza de la separación objeto/fondo.
 *
 * Con canal alpha es alta y con razón: la máscara no se estimó, venía en
 * la imagen. Sin alpha, penaliza las dos formas en que el flood fill
 * falla de verdad: un área absurda (se comió el objeto o se comió el
 * fondo) y un objeto cortado por el borde del frame, que además es donde
 * el relleno arranca.
 */
export function segmentationConfidence(m: ObjectMask): StageConfidence {
  const cells = m.width * m.height;
  if (cells === 0 || m.area === 0) {
    return { stage: "Segmentación", value: 0, reason: "no se encontró ningún objeto" };
  }
  const areaFraction = m.area / cells;

  if (m.source === "alpha") {
    return {
      stage: "Segmentación",
      value: 0.97,
      reason: "la imagen trae canal alpha: la máscara es exacta, no estimada",
    };
  }
  if (areaFraction < MIN_AREA_FRACTION) {
    return {
      stage: "Segmentación",
      value: 0.15,
      reason: `el objeto ocupa sólo ${(areaFraction * 100).toFixed(1)}% del encuadre`,
    };
  }
  if (areaFraction > MAX_AREA_FRACTION) {
    return {
      stage: "Segmentación",
      value: 0.2,
      reason: "casi todo el encuadre quedó como objeto: el fondo no se separó",
    };
  }

  // Acá NO se mira `borderTouch`: con el flood fill vale siempre 0 por
  // construcción (todo el perímetro se siembra como fondo). La señal que
  // sí existe es la heterogeneidad del perímetro: si el borde del
  // encuadre tiene colores muy distintos entre sí, la suposición "el
  // borde es fondo" es floja y la máscara puede estar mal.
  const shaky = Math.min(1, m.borderSpread * 5);
  const value = 0.92 * (1 - 0.7 * shaky);
  return {
    stage: "Segmentación",
    value,
    reason:
      shaky > 0.3
        ? "el borde del encuadre no es un fondo parejo: el objeto puede estar cortado"
        : "fondo separado por continuidad de color",
  };
}

export function depthStage(value: number): StageConfidence {
  return {
    stage: "Profundidad",
    value,
    reason: "estimada por inflado de la silueta más la pista de sombreado — no es una medición",
  };
}

export function reconstructionStage(value: number, mode: string): StageConfidence {
  return { stage: "Reconstrucción 3D", value, reason: `modo ${mode}` };
}

/** Confianza global: la cadena no puede ser mejor que su eslabón más débil. */
export function overallConfidence(stages: readonly StageConfidence[]): number {
  if (stages.length === 0) return 0;
  let min = 1;
  for (const s of stages) if (s.value < min) min = s.value;
  return min;
}

/**
 * Texto que la UI muestra junto al resultado. Es obligatorio por el spec
 * §29: no prometer una reconstrucción perfecta desde una sola imagen.
 */
export const SINGLE_IMAGE_DISCLAIMER =
  "Una sola imagen no contiene toda la información de profundidad. La geometría 3D es una estimación.";

/** Umbral por debajo del cual el resultado se rotula como aproximado. */
export const LOW_CONFIDENCE = 0.45;

export function confidenceLabel(overall: number): string {
  return overall < LOW_CONFIDENCE ? "Reconstrucción aproximada" : "Reconstrucción estimada";
}
