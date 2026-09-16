// El pipeline imagen→3D, de punta a punta (Fase 41).
//
//   ImageBuffer -> máscara -> profundidad -> nube 3D con color
//               -> vóxeles -> cáscara -> forma registrada
//
// Está partido en dos a propósito:
//
// - `runVisionCore` es PURO: entra un ImageBuffer, sale un resultado. No
//   toca el DOM ni el registro de formas, así que puede correr dentro de
//   un Worker (spec §34) y se puede testear en node sin navegador.
// - `runPipeline` es el envoltorio que sí toca el mundo: carga el archivo,
//   despacha al Worker (o cae a ejecución en línea si no hay), y registra
//   la forma resultante.
//
// Esa división es también la que hace que el fallback del spec §31 sea
// trivial: el camino en línea llama EXACTAMENTE a la misma función que el
// Worker, así que no hay dos implementaciones que puedan divergir.

import { loadImageBuffer, type ImageBuffer } from "./image-buffer";
import { segment, type ObjectMask } from "./segmentation";
import type { DepthMap } from "./depth-estimator";
import { getDepthProvider } from "./depth-provider";
import { RECON_MODE, reconstruct, type ReconMode } from "./reconstruction";
import {
  breakdownOrigins,
  emptyCloud,
  type PointCloud,
  type ReconstructionResult,
  type ReconstructionStats,
} from "./reconstruction-result";
import {
  depthStage,
  overallConfidence,
  reconstructionStage,
  segmentationConfidence,
  type StageConfidence,
} from "./confidence";
import { getVisionProvider } from "./vision-provider";
import { surfacePointsWithColor, voxelizePointsWithColor } from "../voxel/grid";
import { findComponents } from "../voxel/validate";

/**
 * Resoluciones ofrecidas. NO llegan a 256 ni 512, y no es por memoria:
 * a 128³ la cáscara de un objeto típico ronda los 50.000 vóxeles, contra
 * un techo de 60.000 agentes. Ofrecer 256 sería ofrecer una figura que el
 * enjambre no puede construir y mostrarla como construida.
 */
export const VOXEL_RESOLUTIONS = [48, 64, 96, 128] as const;
export const RESOLUTION_LABELS: Record<number, string> = {
  48: "Baja", 64: "Media", 96: "Alta", 128: "Extrema",
};

export interface PipelineOptions {
  readonly mode?: ReconMode;
  readonly voxelRes?: number;
  readonly maxPoints?: number;
}

/** Lo que el núcleo puro devuelve. Todo TypedArrays, transferible a/desde un Worker. */
export interface VisionCoreResult {
  readonly mask: ObjectMask;
  readonly depth: DepthMap;
  /** La cáscara final, ya voxelizada: lo que el enjambre va a construir. */
  readonly cloud: PointCloud;
  readonly stages: readonly StageConfidence[];
  readonly confidence: number;
  readonly stats: ReconstructionStats;
  readonly mode: ReconMode;
  readonly depthProviderId: string;
  readonly visionProviderId: string;
}

function now(): number {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

/**
 * El pipeline puro. Sin DOM, sin registro de formas, sin efectos.
 *
 * `estimateDepth` se inyecta en vez de importarse fijo para que el Worker
 * pueda pasar el proveedor que corresponda: dentro del Worker no hay
 * estado global compartido con el hilo principal.
 */
export async function runVisionCore(
  img: ImageBuffer,
  opts: PipelineOptions = {},
): Promise<VisionCoreResult> {
  const mode = opts.mode ?? RECON_MODE.DEPTH;
  const voxelRes = opts.voxelRes ?? 64;
  const timings: Record<string, number> = {};

  let t = now();
  const mask = segment(img);
  timings.segmentacion = now() - t;
  const segStage = segmentationConfidence(mask);

  t = now();
  const depth = await getDepthProvider().estimate(img, mask);
  timings.profundidad = now() - t;

  t = now();
  const recon = reconstruct(img, mask, depth, mode, {
    voxelRes,
    maxPoints: opts.maxPoints,
    segmentationConfidence: segStage.value,
  });
  timings.reconstruccion = now() - t;

  const stages = [segStage, depthStage(depth.confidence), reconstructionStage(recon.confidence, recon.mode)];

  if (recon.cloud.count === 0) {
    return {
      mask, depth, cloud: emptyCloud(), stages, confidence: 0, mode: recon.mode,
      depthProviderId: getDepthProvider().id,
      visionProviderId: getVisionProvider().id,
      stats: {
        cloudPoints: 0, voxels: 0, surfaceVoxels: 0, voxelRes,
        components: 0, cohesion: 1,
        origins: breakdownOrigins(emptyCloud()),
        timings,
      },
    };
  }

  t = now();
  const grid = voxelizePointsWithColor(
    recon.cloud.points, recon.cloud.colors, recon.cloud.count,
    [0, 0, 0], voxelRes, undefined, recon.cloud.origin,
  );
  timings.voxelizacion = now() - t;

  t = now();
  const surface = surfacePointsWithColor(grid);
  const components = findComponents(grid);
  timings.validacion = now() - t;

  let voxels = 0;
  for (let i = 0; i < grid.occupied.length; i++) if (grid.occupied[i]) voxels++;

  const cloud: PointCloud = {
    points: surface.points,
    colors: surface.colors,
    // Si la grilla no trajo procedencia, se marca todo como inferido: es
    // lo conservador. Decir "observado" sin dato sería afirmar de más.
    origin: surface.origin ?? new Uint8Array(surface.count).fill(2),
    count: surface.count,
  };

  return {
    mask, depth, cloud, stages,
    confidence: overallConfidence(stages),
    mode: recon.mode,
    depthProviderId: getDepthProvider().id,
    visionProviderId: getVisionProvider().id,
    stats: {
      cloudPoints: recon.cloud.count,
      voxels,
      surfaceVoxels: surface.count,
      voxelRes,
      components: components.count,
      cohesion: components.cohesion,
      // Sobre la CÁSCARA, no sobre la nube previa: es lo que el enjambre
      // construye de verdad, y el relleno interior sesgaría el número.
      origins: breakdownOrigins(cloud),
      timings,
    },
  };
}

/** Arma el resultado público a partir del núcleo y los datos del archivo. */
export function toResult(
  core: VisionCoreResult,
  fileName: string,
  img: { width: number; height: number },
): ReconstructionResult {
  return {
    source: {
      fileName,
      width: img.width,
      height: img.height,
      mode: core.mode,
      visionProvider: core.visionProviderId,
      depthProvider: core.depthProviderId,
    },
    cloud: core.cloud,
    stages: core.stages,
    confidence: core.confidence,
    stats: core.stats,
  };
}

/**
 * De archivo a resultado. La carga de la imagen queda en el hilo
 * principal (es un decode + un drawImage, milisegundos) y lo pesado se
 * delega, si se puede.
 */
export async function runPipeline(
  file: File,
  opts: PipelineOptions & { runCore?: (img: ImageBuffer, o: PipelineOptions) => Promise<VisionCoreResult> } = {},
): Promise<{ result: ReconstructionResult; image: ImageBuffer; core: VisionCoreResult }> {
  const image = await loadImageBuffer(file);
  const run = opts.runCore ?? runVisionCore;
  const core = await run(image, opts);
  return { result: toResult(core, file.name, image), image, core };
}
