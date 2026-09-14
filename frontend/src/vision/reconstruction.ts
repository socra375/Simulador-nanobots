// De la imagen a una nube de puntos 3D con color (Fase 38).
//
// Salida: posiciones centradas en el origen y escaladas al mismo cubo que
// usan los 17 generadores de formas (±SHAPE_HALF_EXTENT), más UN COLOR
// POR PUNTO sacado del píxel que lo generó. Ese color por punto es el
// dato que el proyecto no tenía: hasta acá el color venía de un
// histograma de 4 tonos para toda la figura.
//
// LA NUBE ES SÓLIDA, NO UNA CÁSCARA. Para cada píxel del objeto se emiten
// puntos a lo largo de todo su espesor, no sólo las dos caras. Motivo: la
// nube se voxeliza después, y `surfacePoints` extrae la cáscara mirando
// celdas con vecinos vacíos. Si la nube ya fuera una cáscara, donde la
// profundidad cambia rápido entre píxeles vecinos quedarían huecos entre
// las dos caras y la cáscara extraída tendría agujeros. Rellenando el
// volumen, la cáscara sale limpia por construcción.

import { SHAPE_HALF_EXTENT } from "../shapes";
import { pixelIndex, type ImageBuffer } from "./image-buffer";
import type { ObjectMask } from "./segmentation";
import type { DepthMap } from "./depth-estimator";
import { detectSymmetry, type SymmetryResult } from "./symmetry";

export const RECON_MODE = {
  /** Silueta extruida a espesor constante. El modo de último recurso. */
  EXTRUSION: "EXTRUSION",
  /** Silueta + profundidad estimada. El modo por defecto. */
  DEPTH: "DEPTH",
  /** Profundidad + simetría bilateral, sólo si la silueta la tiene de verdad. */
  DEPTH_SYMMETRY: "DEPTH_SYMMETRY",
} as const;

export type ReconMode = (typeof RECON_MODE)[keyof typeof RECON_MODE];

export const RECON_MODE_LABELS: Record<ReconMode, string> = {
  EXTRUSION: "Extrusión de silueta",
  DEPTH: "Profundidad estimada",
  DEPTH_SYMMETRY: "Profundidad + simetría",
};

/**
 * Espesor del objeto como fracción de su lado MENOR. Con 0.5, algo de
 * silueta cuadrada sale con un espesor igual a la mitad de su lado — o
 * sea aproximadamente esférico, que es la suposición menos comprometida
 * cuando no se sabe nada de la tercera dimensión.
 */
export const DEPTH_RATIO = 0.5;

/** Espesor del modo extrusión, como fracción del lado menor. */
export const EXTRUSION_RATIO = 0.35;

/** Tope de puntos de la nube. Arriba de esto se sube el paso de muestreo. */
export const MAX_CLOUD_POINTS = 120_000;

export interface Reconstruction {
  /** n*3 posiciones, centradas en el origen. */
  readonly points: Float32Array;
  /** n*3 bytes RGB, alineado punto a punto con `points`. */
  readonly colors: Uint8Array;
  readonly count: number;
  readonly mode: ReconMode;
  /** Sólo en modo simetría; null en el resto. */
  readonly symmetry: SymmetryResult | null;
  /** 0..1 */
  readonly confidence: number;
  /** Lado del objeto en píxeles, para diagnóstico. */
  readonly sourceExtent: { width: number; height: number };
}

const EMPTY: Reconstruction = {
  points: new Float32Array(0),
  colors: new Uint8Array(0),
  count: 0,
  mode: RECON_MODE.DEPTH,
  symmetry: null,
  confidence: 0,
  sourceExtent: { width: 0, height: 0 },
};

/**
 * Confianza de la reconstrucción: nunca puede superar a la de las etapas
 * de las que depende, y el modo la modula. La extrusión es honestamente
 * peor que la profundidad, y la simetría —cuando la silueta de verdad la
 * tiene— agrega información que la foto no mostraba.
 */
export function reconConfidence(
  mode: ReconMode,
  segmentation: number,
  depth: number,
  symmetryScore: number,
): number {
  const base = Math.min(segmentation, depth);
  if (mode === RECON_MODE.EXTRUSION) return base * 0.6;
  if (mode === RECON_MODE.DEPTH_SYMMETRY) return Math.min(1, base * (1 + 0.25 * symmetryScore));
  return base;
}

/**
 * Construye la nube 3D con color.
 *
 * `segmentationConfidence` entra como parámetro en vez de recalcularse
 * acá para que este módulo no dependa del de confianza: es cinemática de
 * datos, no evaluación.
 */
export function reconstruct(
  img: ImageBuffer,
  m: ObjectMask,
  depthMap: DepthMap,
  mode: ReconMode = RECON_MODE.DEPTH,
  opts: {
    voxelRes?: number;
    maxPoints?: number;
    segmentationConfidence?: number;
    half?: number;
  } = {},
): Reconstruction {
  const bbox = m.bbox;
  if (!bbox || m.area === 0) return { ...EMPTY, mode };

  const half = opts.half ?? SHAPE_HALF_EXTENT;
  const voxelRes = opts.voxelRes ?? 48;
  const maxPoints = opts.maxPoints ?? MAX_CLOUD_POINTS;
  const { width, height } = m;

  // --- Máscara y profundidad efectivas -------------------------------
  // En modo simetría se completa la silueta con su reflejo: lo que la
  // foto no mostró de un lado se toma del otro. Si la silueta NO es
  // simétrica de verdad, `detectSymmetry` lo dice y se cae a DEPTH — la
  // simetría no se fuerza (spec §8).
  let symmetry: SymmetryResult | null = null;
  let effMask = m.mask;
  let effDepth = depthMap.depth;
  let effMode = mode;

  if (mode === RECON_MODE.DEPTH_SYMMETRY) {
    symmetry = detectSymmetry(m);
    if (!symmetry.symmetric) {
      effMode = RECON_MODE.DEPTH;
    } else {
      effMask = new Uint8Array(width * height);
      effDepth = new Float32Array(width * height);
      for (let y = 0; y < height; y++) {
        const row = y * width;
        for (let x = 0; x < width; x++) {
          const mx = Math.round(2 * symmetry.axisX - x);
          const mirrored = mx >= 0 && mx < width ? row + mx : -1;
          const a = m.mask[row + x];
          const b = mirrored >= 0 ? m.mask[mirrored] : 0;
          effMask[row + x] = a || b ? 1 : 0;
          const da = a ? depthMap.depth[row + x] : 0;
          const db = mirrored >= 0 && b ? depthMap.depth[mirrored] : 0;
          effDepth[row + x] = Math.max(da, db);
        }
      }
    }
  }

  // --- Escala imagen -> mundo ----------------------------------------
  // Se ajusta el RECUADRO DEL OBJETO al cubo, no el frame entero: un
  // objeto chico en una foto grande tiene que llenar el volumen igual.
  const bw = bbox.maxX - bbox.minX + 1;
  const bh = bbox.maxY - bbox.minY + 1;
  const scale = (2 * half) / Math.max(bw, bh);
  const cx = (bbox.minX + bbox.maxX) / 2;
  const cy = (bbox.minY + bbox.maxY) / 2;

  const ratio = effMode === RECON_MODE.EXTRUSION ? EXTRUSION_RATIO : DEPTH_RATIO;
  const thickness = ratio * Math.min(bw, bh) * scale;
  const cellSize = (2 * half) / voxelRes;

  // --- Paso de muestreo -----------------------------------------------
  // Primero se estima cuántos puntos saldrían con paso 1; si se pasa del
  // tope, se sube el paso en píxeles. Submuestrear es honesto (se pierde
  // detalle); inventar puntos no lo sería.
  const zSamples = (d: number): number => {
    const zw = effMode === RECON_MODE.EXTRUSION ? thickness : d * thickness;
    return Math.max(2, Math.ceil((2 * zw) / cellSize) + 1);
  };

  let estimate = 0;
  for (let i = 0; i < width * height; i++) {
    if (effMask[i]) estimate += zSamples(effDepth[i]);
  }
  const step = estimate > maxPoints ? Math.max(1, Math.ceil(Math.sqrt(estimate / maxPoints))) : 1;

  // --- Emisión ---------------------------------------------------------
  const positions: number[] = [];
  const rgb: number[] = [];
  for (let y = bbox.minY; y <= bbox.maxY; y += step) {
    for (let x = bbox.minX; x <= bbox.maxX; x += step) {
      const i = y * width + x;
      if (!effMask[i]) continue;

      const wx = (x - cx) * scale;
      // La Y de imagen crece hacia abajo y la del mundo hacia arriba.
      const wy = -(y - cy) * scale;
      const zw = effMode === RECON_MODE.EXTRUSION ? thickness : effDepth[i] * thickness;

      // El color sale del píxel ORIGINAL; en modo simetría, un píxel que
      // sólo existe en el reflejo toma el color de su espejo.
      let sx = x;
      if (!m.mask[i] && symmetry) {
        const mx = Math.round(2 * symmetry.axisX - x);
        if (mx >= 0 && mx < width && m.mask[y * width + mx]) sx = mx;
      }
      const p = pixelIndex(sx, y, width);
      const r = img.pixels[p], g = img.pixels[p + 1], b = img.pixels[p + 2];

      const n = zSamples(effDepth[i]);
      for (let k = 0; k < n; k++) {
        // De -zw a +zw: la cara de atrás es el espejo de la de adelante,
        // que es la suposición mínima cuando no hay foto trasera.
        const t = n === 1 ? 0 : k / (n - 1);
        positions.push(wx, wy, -zw + 2 * zw * t);
        rgb.push(r, g, b);
      }
    }
  }

  const count = positions.length / 3;
  const confidence = reconConfidence(
    effMode,
    opts.segmentationConfidence ?? 1,
    depthMap.confidence,
    symmetry?.score ?? 0,
  );

  return {
    points: Float32Array.from(positions),
    colors: Uint8Array.from(rgb),
    count,
    mode: effMode,
    symmetry,
    confidence,
    sourceExtent: { width: bw, height: bh },
  };
}
