// El contrato de datos del pipeline imagen→3D (Fase 40b).
//
// POR QUÉ EXISTE ESTE ARCHIVO. Sin él, cada etapa devuelve sus propios
// arrays sueltos (puntos acá, colores allá, una máscara por un lado, una
// confianza por otro) y quien los consume tiene que volver a juntarlos, en
// el orden correcto, cada vez. Eso es exactamente cómo un pipeline se
// convierte en una maraña: el día que una etapa devuelve un array más, hay
// que tocar todos los llamadores. Acá hay UN tipo que viaja entero de
// punta a punta, y las etapas lo llenan.
//
// LA REPRESENTACIÓN INTERMEDIA ES UNA NUBE DE PUNTOS, NO UNA MALLA.
// Es una decisión, no una limitación: el enjambre consume posiciones, y la
// voxelización sale de la nube. Una malla de triángulos con normales y
// caras sería un subsistema entero que después nadie usa — el enjambre no
// dibuja triángulos, dibuja instancias. Si algún día hace falta una malla
// (para exportar, por ejemplo), sale de la nube o de la grilla de vóxeles;
// no al revés.
//
// GEOMETRÍA VISTA vs GEOMETRÍA INFERIDA. Una foto muestra UNA cara del
// objeto. Todo lo demás —el espesor, la cara de atrás, lo que completa la
// simetría— lo pone el sistema. Mezclar las dos cosas en una nube
// indistinta sería presentar como observado algo que se inventó, que es
// justo lo que el spec §29 y §42 prohíben. Por eso cada punto lleva de
// dónde salió, y la confianza se calcula con eso.

import type { ReconMode } from "./reconstruction";
import type { StageConfidence } from "./confidence";

/** De dónde salió cada punto de la nube. */
export const POINT_ORIGIN = {
  /**
   * La cámara lo VIO: es la cara frontal, sacada de un píxel real, con el
   * color de ese píxel. Es lo único que la foto respalda de verdad.
   */
  OBSERVED: 0,
  /**
   * Relleno entre la cara de adelante y la de atrás. No se vio, pero está
   * ACOTADO por dos superficies: el objeto tiene que ser sólido ahí.
   */
  INTERPOLATED: 1,
  /**
   * La cara de atrás, y lo que completó la simetría. No se vio nunca y
   * nada lo acota: es la parte de la reconstrucción que es una suposición.
   */
  INFERRED: 2,
} as const;

export type PointOrigin = (typeof POINT_ORIGIN)[keyof typeof POINT_ORIGIN];

export const POINT_ORIGIN_LABELS: Record<PointOrigin, string> = {
  [POINT_ORIGIN.OBSERVED]: "observada",
  [POINT_ORIGIN.INTERPOLATED]: "interpolada",
  [POINT_ORIGIN.INFERRED]: "inferida",
};

/**
 * La representación intermedia del pipeline: posiciones, color y
 * procedencia, los tres alineados punto a punto.
 *
 * Los tres arrays viajan juntos en este tipo y no sueltos, justamente
 * para que no se puedan desalinear: cualquier etapa que reordene o
 * submuestree tiene que hacerlo con los tres a la vez.
 */
export interface PointCloud {
  /** count*3 posiciones, centradas en el origen. */
  readonly points: Float32Array;
  /** count*3 bytes RGB del material del objeto. */
  readonly colors: Uint8Array;
  /** count bytes, uno de POINT_ORIGIN. */
  readonly origin: Uint8Array;
  readonly count: number;
}

export function emptyCloud(): PointCloud {
  return { points: new Float32Array(0), colors: new Uint8Array(0), origin: new Uint8Array(0), count: 0 };
}

/** Cuántos puntos hay de cada procedencia. */
export interface OriginBreakdown {
  readonly observed: number;
  readonly interpolated: number;
  readonly inferred: number;
  /** observed / count. Es el número honesto: qué parte de esto se vio. */
  readonly observedFraction: number;
}

export function breakdownOrigins(cloud: PointCloud): OriginBreakdown {
  let observed = 0, interpolated = 0, inferred = 0;
  for (let i = 0; i < cloud.count; i++) {
    const o = cloud.origin[i];
    if (o === POINT_ORIGIN.OBSERVED) observed++;
    else if (o === POINT_ORIGIN.INTERPOLATED) interpolated++;
    else inferred++;
  }
  return {
    observed,
    interpolated,
    inferred,
    observedFraction: cloud.count === 0 ? 0 : observed / cloud.count,
  };
}

/** De dónde salió esta reconstrucción. Para el panel y los diagnósticos. */
export interface ReconstructionSource {
  /** Nombre del archivo, tal como lo subió el usuario. */
  readonly fileName: string;
  /** Resolución con la que se procesó (no la original del archivo). */
  readonly width: number;
  readonly height: number;
  readonly mode: ReconMode;
  /** Qué proveedor de visión y cuál de profundidad se usaron. */
  readonly visionProvider: string;
  readonly depthProvider: string;
}

export interface ReconstructionStats {
  /** Puntos de la nube antes de voxelizar. */
  readonly cloudPoints: number;
  /** Celdas ocupadas de la grilla. */
  readonly voxels: number;
  /** Celdas de superficie: las que el enjambre va a construir. */
  readonly surfaceVoxels: number;
  /** Resolución de la grilla usada. */
  readonly voxelRes: number;
  /** Piezas separadas en las que quedó la figura, y qué tan unida está. */
  readonly components: number;
  readonly cohesion: number;
  readonly origins: OriginBreakdown;
  /** Milisegundos por etapa. */
  readonly timings: Readonly<Record<string, number>>;
}

/**
 * Lo que el pipeline entero devuelve. Es el único tipo que la UI y la
 * simulación necesitan conocer.
 */
export interface ReconstructionResult {
  readonly source: ReconstructionSource;
  /** La cáscara que el enjambre va a construir, ya voxelizada. */
  readonly cloud: PointCloud;
  readonly stages: readonly StageConfidence[];
  /** 0..1 — el eslabón más débil de la cadena. */
  readonly confidence: number;
  readonly stats: ReconstructionStats;
}
