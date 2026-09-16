// El pipeline pesado, fuera del hilo del render (Fase 41, spec §34).
//
// Qué corre acá: segmentación, profundidad, reconstrucción, voxelización
// y validación — todo lo que escala con la resolución. A 128³ eso son ~2
// millones de celdas recorridas más de una vez; en el hilo principal se
// ve como un tirón de varios cuadros justo cuando el usuario aprieta el
// botón.
//
// Qué NO corre acá: la carga de la imagen. Decodificar un archivo y
// dibujarlo en un canvas necesita DOM, y es barato igual (milisegundos).
// El hilo principal manda los píxeles ya listos.
//
// El Worker llama a la MISMA función que el camino en línea
// (`runVisionCore`), así que no hay dos implementaciones que puedan
// divergir — que es lo que hace que el fallback del §31 sea confiable y
// no una segunda versión a medio mantener.

import { runVisionCore, type PipelineOptions, type VisionCoreResult } from "./pipeline";
import { setDepthProvider } from "./depth-provider";
import type { ImageBuffer } from "./image-buffer";

export interface WorkerRequest {
  readonly id: number;
  readonly pixels: Uint8ClampedArray;
  readonly width: number;
  readonly height: number;
  readonly options: PipelineOptions;
  /**
   * El Worker tiene su propio módulo, así que su proveedor activo NO es
   * el del hilo principal: se manda explícitamente.
   */
  readonly depthProviderId: string;
}

export type WorkerResponse =
  | { readonly id: number; readonly ok: true; readonly core: VisionCoreResult }
  | { readonly id: number; readonly ok: false; readonly error: string };

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const { id, pixels, width, height, options, depthProviderId } = event.data;
  try {
    setDepthProvider(depthProviderId);
    const img: ImageBuffer = { pixels, width, height };
    const core = await runVisionCore(img, options);
    const reply: WorkerResponse = { id, ok: true, core };
    // Se transfieren los buffers grandes en vez de copiarlos: la cáscara a
    // 128³ puede ser más de un megabyte.
    self.postMessage(reply, [
      core.cloud.points.buffer,
      core.cloud.colors.buffer,
      core.cloud.origin.buffer,
    ] as Transferable[]);
  } catch (err) {
    const reply: WorkerResponse = { id, ok: false, error: err instanceof Error ? err.message : String(err) };
    self.postMessage(reply);
  }
};
