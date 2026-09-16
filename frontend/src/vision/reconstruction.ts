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
import { emptyCloud, POINT_ORIGIN, type PointCloud } from "./reconstruction-result";

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

/**
 * Tope de seguridad de la nube. NO es la palanca de densidad: la densidad
 * la fija el tamaño de celda (ver abajo). Esto sólo evita que una imagen
 * enorme con una resolución enorme reviente la memoria.
 */
export const MAX_CLOUD_POINTS = 2_500_000;

/**
 * Separación objetivo de la retícula, como fracción del lado de celda.
 * Por debajo de 1 se garantiza que dos muestras consecutivas caen en la
 * misma celda o en celdas vecinas, que es lo que hace que la figura salga
 * maciza y no como un peine.
 */
export const LATTICE_FILL = 0.9;

export interface Reconstruction {
  /**
   * Posiciones, color y PROCEDENCIA, los tres alineados punto a punto.
   * Viajan juntos en un solo tipo para que no se puedan desalinear.
   */
  readonly cloud: PointCloud;
  readonly mode: ReconMode;
  /** Sólo en modo simetría; null en el resto. */
  readonly symmetry: SymmetryResult | null;
  /** 0..1 */
  readonly confidence: number;
  /** Lado del objeto en píxeles, para diagnóstico. */
  readonly sourceExtent: { width: number; height: number };
}

const EMPTY: Reconstruction = {
  cloud: emptyCloud(),
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
  observedFraction = 1,
): number {
  const base = Math.min(segmentation, depth);
  const porModo =
    mode === RECON_MODE.EXTRUSION
      ? base * 0.6
      : mode === RECON_MODE.DEPTH_SYMMETRY
        ? Math.min(1, base * (1 + 0.25 * symmetryScore))
        : base;
  // Cuanta menos geometría se VIO de verdad, menos se puede afirmar. Es la
  // consecuencia directa de distinguir observado de inferido: si la nube
  // es mayoría suposición, decirlo es parte del resultado. No baja a cero
  // porque la cara vista sigue siendo información real.
  const porProcedencia = 0.5 + 0.5 * Math.min(1, Math.max(0, observedFraction) * 2);
  return porModo * porProcedencia;
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

  // --- Densidad de muestreo --------------------------------------------
  //
  // LA REGLA: la retícula se ajusta al TAMAÑO DE CELDA, no a un tope de
  // puntos. Muestrear más fino que la celda es desperdicio (varios puntos
  // caen en la misma celda y se promedian igual); muestrear más grueso
  // deja huecos, y la figura sale como un peine.
  //
  // Esto fue un bug real, medido: antes había dos ajustes independientes
  // —uno que subía la densidad contra la celda y otro que la bajaba para
  // respetar un tope de puntos— y cuando el segundo se activaba, la huella
  // efectiva del píxel se duplicaba sin que el primero compensara. Un
  // objeto macizo salía en 231 pedazos. Ahora hay UN solo cálculo y los
  // dos ajustes son las dos caras de la misma cuenta:
  //
  //   - imagen más GRUESA que la grilla -> `sub` muestras por píxel
  //   - imagen más FINA que la grilla   -> se saltan `step` píxeles
  //
  // El conteo queda acotado por la cantidad de celdas del objeto, que es
  // lo que de verdad limita el resultado.
  const pixelWorld = scale;
  const target = cellSize * LATTICE_FILL;
  const perPixel = pixelWorld / target;
  const sub = perPixel >= 1 ? Math.ceil(perPixel) : 1;
  const step = perPixel >= 1 ? 1 : Math.max(1, Math.floor(1 / perPixel));
  const zSamples = (d: number): number => {
    const zw = effMode === RECON_MODE.EXTRUSION ? thickness : d * thickness;
    return Math.max(2, Math.ceil((2 * zw) / cellSize) + 1);
  };

  // Guarda de memoria, no de densidad: si ni así entra, se recorta el
  // muestreo en Z, que es el eje con más redundancia (el interior se
  // promedia igual al voxelizar).
  let estimate = 0;
  for (let y = bbox.minY; y <= bbox.maxY; y += step) {
    for (let x = bbox.minX; x <= bbox.maxX; x += step) {
      const i = y * width + x;
      if (effMask[i]) estimate += zSamples(effDepth[i]) * sub * sub;
    }
  }
  const zThin = estimate > maxPoints ? Math.max(1, Math.ceil(estimate / maxPoints)) : 1;

  // --- Emisión ---------------------------------------------------------
  const positions: number[] = [];
  const rgb: number[] = [];
  const origins: number[] = [];
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
      // Un píxel que la foto NO mostró y que sólo existe por el reflejo:
      // todo lo que salga de él es inferido, incluida su cara de adelante.
      const desdeReflejo = !m.mask[i];
      let sx = x;
      if (desdeReflejo && symmetry) {
        const mx = Math.round(2 * symmetry.axisX - x);
        if (mx >= 0 && mx < width && m.mask[y * width + mx]) sx = mx;
      }
      const p = pixelIndex(sx, y, width);
      const r = img.pixels[p], g = img.pixels[p + 1], b = img.pixels[p + 2];

      const n = Math.max(2, Math.ceil(zSamples(effDepth[i]) / zThin));
      for (let sy = 0; sy < sub; sy++) {
      for (let sx = 0; sx < sub; sx++) {
      // Retícula dentro de la huella del píxel: el mismo color y la misma
      // profundidad, repartidos para que no queden celdas vacías entre
      // píxeles vecinos.
      const ox = sub === 1 ? 0 : (sx / sub - 0.5 + 0.5 / sub) * pixelWorld;
      const oy = sub === 1 ? 0 : (sy / sub - 0.5 + 0.5 / sub) * pixelWorld;
      for (let k = 0; k < n; k++) {
        // De -zw a +zw: la cara de atrás es el espejo de la de adelante,
        // que es la suposición mínima cuando no hay foto trasera.
        const t = n === 1 ? 0 : k / (n - 1);
        positions.push(wx + ox, wy + oy, -zw + 2 * zw * t);
        rgb.push(r, g, b);
        // t=1 es la cara de ADELANTE (z = +zw), la que mira a la cámara:
        // eso es lo único que la foto respalda. t=0 es la cara de atrás,
        // pura suposición. El medio está acotado por las dos.
        origins.push(
          desdeReflejo
            ? POINT_ORIGIN.INFERRED
            : n === 1 || k === n - 1
              ? POINT_ORIGIN.OBSERVED
              : k === 0
                ? POINT_ORIGIN.INFERRED
                : POINT_ORIGIN.INTERPOLATED,
        );
      }
      }
      }
    }
  }

  const count = positions.length / 3;
  const origin = Uint8Array.from(origins);
  let observed = 0;
  for (let i = 0; i < count; i++) if (origin[i] === POINT_ORIGIN.OBSERVED) observed++;

  const confidence = reconConfidence(
    effMode,
    opts.segmentationConfidence ?? 1,
    depthMap.confidence,
    symmetry?.score ?? 0,
    count === 0 ? 0 : observed / count,
  );

  return {
    cloud: {
      points: Float32Array.from(positions),
      colors: Uint8Array.from(rgb),
      origin,
      count,
    },
    mode: effMode,
    symmetry,
    confidence,
    sourceExtent: { width: bw, height: bh },
  };
}
