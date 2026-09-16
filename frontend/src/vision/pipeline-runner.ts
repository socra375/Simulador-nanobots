// Despacho al Worker, con caída a ejecución en línea (Fase 41).
//
// REGLA DE ORO DE ESTE ARCHIVO: si algo del Worker falla —no arranca, el
// navegador no lo soporta, el `base` de GitHub Pages deja la URL mal— el
// pipeline sigue funcionando en el hilo principal. El simulador nunca
// queda inutilizable por un problema de infraestructura (spec §31). Se
// paga con un tirón de unos cuadros, no con una función rota.
//
// El fallback llama a la misma `runVisionCore` que el Worker, así que el
// resultado es idéntico; lo único que cambia es en qué hilo se calcula.

import type { ImageBuffer } from "./image-buffer";
import { runVisionCore, type PipelineOptions, type VisionCoreResult } from "./pipeline";
import { getDepthProvider } from "./depth-provider";
import type { WorkerRequest, WorkerResponse } from "./pipeline.worker";

export type RunnerMode = "worker" | "inline";

let worker: Worker | null = null;
let workerBroken = false;
let nextId = 1;
let lastMode: RunnerMode = "inline";

/** En qué hilo corrió la última reconstrucción. Lo muestra el panel. */
export function lastRunnerMode(): RunnerMode {
  return lastMode;
}

function ensureWorker(): Worker | null {
  if (workerBroken) return null;
  if (worker) return worker;
  try {
    // `new URL(..., import.meta.url)` es la forma que Vite reconoce para
    // empaquetar un Worker respetando el `base` del build — que acá no es
    // un detalle: en GitHub Pages todo cuelga de /Simulador-nanobots/.
    worker = new Worker(new URL("./pipeline.worker.ts", import.meta.url), { type: "module" });
    worker.onerror = () => {
      workerBroken = true;
      worker?.terminate();
      worker = null;
    };
    return worker;
  } catch {
    workerBroken = true;
    return null;
  }
}

/** Cuánto se espera al Worker antes de resolverlo en línea, en ms. */
export const WORKER_TIMEOUT_MS = 20_000;

export async function runCore(img: ImageBuffer, options: PipelineOptions): Promise<VisionCoreResult> {
  const w = ensureWorker();
  if (!w) {
    lastMode = "inline";
    return runVisionCore(img, options);
  }

  const id = nextId++;
  try {
    const core = await new Promise<VisionCoreResult>((resolve, reject) => {
      const timer = setTimeout(() => {
        cleanup();
        reject(new Error("el Worker no respondió a tiempo"));
      }, WORKER_TIMEOUT_MS);

      const onMessage = (event: MessageEvent<WorkerResponse>) => {
        if (event.data.id !== id) return;
        cleanup();
        if (event.data.ok) resolve(event.data.core);
        else reject(new Error(event.data.error));
      };
      const onError = () => {
        cleanup();
        reject(new Error("el Worker falló"));
      };
      function cleanup() {
        clearTimeout(timer);
        w!.removeEventListener("message", onMessage as EventListener);
        w!.removeEventListener("error", onError);
      }

      w.addEventListener("message", onMessage as EventListener);
      w.addEventListener("error", onError);

      // Se copia el buffer de píxeles en vez de transferirlo: el llamador
      // se queda con la imagen para dibujar la vista previa y las etapas.
      const request: WorkerRequest = {
        id,
        pixels: new Uint8ClampedArray(img.pixels),
        width: img.width,
        height: img.height,
        options,
        depthProviderId: getDepthProvider().id,
      };
      w.postMessage(request, [request.pixels.buffer]);
    });
    lastMode = "worker";
    return core;
  } catch {
    // Cualquier problema del Worker: se resuelve en línea y no se vuelve
    // a intentar con él en esta sesión.
    workerBroken = true;
    worker?.terminate();
    worker = null;
    lastMode = "inline";
    return runVisionCore(img, options);
  }
}
