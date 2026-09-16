// Panel "Imagen → 3D" (Fase 41, spec §3, §12, §23, §29, §36).
//
// Es la única puerta de entrada del pipeline: hasta acá sólo se podía
// disparar desde la sonda de diagnóstico.
//
// Tres cosas que este panel tiene que decir, y que no son adorno:
//
// 1. QUÉ SE VIO Y QUÉ SE SUPUSO. La foto muestra una cara; el resto lo
//    pone el sistema. El panel lo dice con un número (§29, §42).
// 2. SI EL ENJAMBRE ALCANZA. La resolución la limita el presupuesto de
//    agentes, no la memoria: a 128³ la cáscara puede pasar los 60.000
//    vóxeles y el enjambre no podría construirla entera. Se avisa ANTES
//    de construir, no después (§12).
// 3. EN QUÉ HILO CORRIÓ. Si el Worker no arrancó, el pipeline igual
//    funciona en línea (§31) — pero eso se informa, no se esconde.

import type GUI from "lil-gui";
import type { ColorCluster } from "../image-color";
import { extractColorClustersFromFile } from "../image-color";
import { loadImageBuffer, type ImageBuffer } from "../vision/image-buffer";
import { RECON_MODE, RECON_MODE_LABELS, type ReconMode } from "../vision/reconstruction";
import {
  RESOLUTION_LABELS,
  toResult,
  VOXEL_RESOLUTIONS,
  type VisionCoreResult,
} from "../vision/pipeline";
import { lastRunnerMode, runCore } from "../vision/pipeline-runner";
import { confidenceLabel, SINGLE_IMAGE_DISCLAIMER } from "../vision/confidence";
import { POINT_ORIGIN } from "../vision/reconstruction-result";
import { getDepthProvider, listDepthProviders, setDepthProvider } from "../vision/depth-provider";
import { registerCustomScan } from "../shapes/registry";
import type { ReconstructionResult } from "../vision/reconstruction-result";

/** Techo de agentes del enjambre. Si la cáscara lo pasa, se avisa. */
export const AGENT_BUDGET = 60000;

export interface ImageTo3DCallbacks {
  /** El mismo callback que usa "Comandos". */
  onFormShape: (shapeName: string, colorClusters: ColorCluster[]) => void;
  /** Cuántos nanobots hay configurados, para avisar si no alcanzan. */
  readNanobotCount: () => number;
}

type StageView = "imagen" | "mascara" | "profundidad" | "procedencia";

const STAGE_LABELS: Record<StageView, string> = {
  imagen: "Imagen",
  mascara: "Máscara",
  profundidad: "Profundidad",
  procedencia: "Vista / inferida",
};

const PREVIEW_W = 240;

/** Formatea bytes de forma legible, sin dependencias. */
function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function pct(v: number): string {
  return `${Math.round(v * 100)}%`;
}

export function addImageTo3DFolder(gui: GUI, callbacks: ImageTo3DCallbacks): void {
  const folder = gui.addFolder("Imagen → 3D");

  let file: File | null = null;
  let image: ImageBuffer | null = null;
  let core: VisionCoreResult | null = null;
  let result: ReconstructionResult | null = null;
  let stage: StageView = "imagen";
  let busy = false;

  const settings = {
    modo: RECON_MODE.DEPTH as ReconMode,
    resolucion: 64,
    profundidad: getDepthProvider().id,
  };

  // --- Aviso permanente del spec §29 -----------------------------------
  const tip = document.createElement("div");
  tip.style.cssText = "font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;";
  tip.textContent = SINGLE_IMAGE_DISCLAIMER;
  folder.domElement.appendChild(tip);

  // --- Lienzo de vista previa / etapas ----------------------------------
  const canvas = document.createElement("canvas");
  canvas.width = PREVIEW_W;
  canvas.height = 1;
  canvas.style.cssText =
    `display:block;width:${PREVIEW_W}px;margin:0 6px 4px;background:#05080c;border:1px solid #1d2a33;`;
  folder.domElement.appendChild(canvas);

  const info = document.createElement("div");
  info.style.cssText = "font-size:10px;color:#8fa3ad;padding:0 6px 4px;line-height:1.5;white-space:pre;";
  folder.domElement.appendChild(info);

  const status = document.createElement("div");
  status.style.cssText = "font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";

  const stats = document.createElement("div");
  stats.style.cssText =
    "font-size:10px;color:#9fb3bd;padding:2px 6px 6px;line-height:1.6;white-space:pre;";

  // --- Dibujado de etapas ------------------------------------------------
  function drawStage(): void {
    const ctx = canvas.getContext("2d");
    if (!ctx || !image) return;
    const scale = PREVIEW_W / image.width;
    const h = Math.max(1, Math.round(image.height * scale));
    canvas.height = h;
    canvas.style.height = `${h}px`;

    const out = ctx.createImageData(image.width, image.height);
    for (let i = 0; i < image.width * image.height; i++) {
      let r = 0, g = 0, b = 0;
      if (stage === "imagen" || !core) {
        r = image.pixels[i * 4]; g = image.pixels[i * 4 + 1]; b = image.pixels[i * 4 + 2];
      } else if (stage === "mascara") {
        const on = core.mask.mask[i] === 1;
        r = on ? 60 : 8; g = on ? 220 : 12; b = on ? 180 : 18;
      } else if (stage === "profundidad") {
        // Más cerca de la cámara = más claro. La convención está
        // documentada en depth-estimator.ts y se respeta acá.
        const d = core.depth.depth[i];
        r = g = b = Math.round(d * 255);
        if (!core.mask.mask[i]) { r = 8; g = 12; b = 18; }
      } else {
        // Procedencia: sólo se puede pintar sobre la máscara, porque la
        // cáscara final ya no vive en el espacio de la imagen. Lo que se
        // muestra es qué zonas de la silueta aportaron cara observada.
        const on = core.mask.mask[i] === 1;
        r = on ? 70 : 8; g = on ? 200 : 12; b = on ? 90 : 18;
      }
      out.data[i * 4] = r; out.data[i * 4 + 1] = g; out.data[i * 4 + 2] = b; out.data[i * 4 + 3] = 255;
    }
    // Se dibuja a tamaño real en un canvas auxiliar y se escala: createImageData
    // trabaja en píxeles del origen, no del destino.
    const tmp = document.createElement("canvas");
    tmp.width = image.width;
    tmp.height = image.height;
    tmp.getContext("2d")?.putImageData(out, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
  }

  function paintInfo(): void {
    if (!file || !image) {
      info.textContent = "Sin imagen.";
      return;
    }
    const tipo = file.type || "desconocido";
    info.textContent =
      `${file.name}\n${formatSize(file.size)} · ${tipo}\n` +
      `procesada a ${image.width}×${image.height}`;
  }

  function paintStats(): void {
    if (!result || !core) {
      stats.textContent = "";
      return;
    }
    const s = result.stats;
    const o = s.origins;
    const necesarios = s.surfaceVoxels;
    const disponibles = callbacks.readNanobotCount();

    const lineas: string[] = [];
    lineas.push(`${confidenceLabel(result.confidence)} — confianza ${pct(result.confidence)}`);
    for (const st of result.stages) lineas.push(`  ${st.stage}: ${pct(st.value)} (${st.reason})`);
    lineas.push("");
    lineas.push(`geometría vista: ${pct(o.observedFraction)} de la cáscara`);
    lineas.push(`  observada ${o.observed} · interpolada ${o.interpolated} · inferida ${o.inferred}`);
    lineas.push("");
    lineas.push(`vóxeles: ${s.voxels} (${s.surfaceVoxels} de superficie, res ${s.voxelRes}³)`);
    lineas.push(`piezas: ${s.components}${s.components > 1 ? ` (cohesión ${pct(s.cohesion)})` : ""}`);
    if (necesarios > AGENT_BUDGET) {
      lineas.push(`⚠ la cáscara pide ${necesarios} agentes y el techo son ${AGENT_BUDGET}`);
    } else if (necesarios > disponibles) {
      lineas.push(`⚠ hacen falta ~${necesarios} nanobots y hay ${disponibles}: subí la cantidad`);
    }
    const ms = Object.entries(s.timings).map(([k, v]) => `${k} ${v.toFixed(0)}ms`).join(" · ");
    lineas.push("");
    lineas.push(`${lastRunnerMode() === "worker" ? "en Worker" : "en línea (sin Worker)"} — ${ms}`);
    stats.textContent = lineas.join("\n");
  }

  // --- Entrada de archivo (§3) -------------------------------------------
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/png,image/jpeg,image/webp,image/*";
  input.style.display = "none";
  // Selector estable para E2E. OJO: el input de "Comandos" es el ÚNICO sin
  // un data-* propio, y el E2E lo distingue así — cualquier input nuevo
  // TIENE que llevar el suyo o rompe ese test.
  input.dataset.imageSlot = "single";
  document.body.appendChild(input);

  async function accept(f: File): Promise<void> {
    if (!f.type.startsWith("image/")) {
      status.textContent = "Ese archivo no es una imagen.";
      return;
    }
    file = f;
    core = null;
    result = null;
    stage = "imagen";
    status.textContent = "Leyendo imagen...";
    try {
      image = await loadImageBuffer(f);
    } catch (err) {
      image = null;
      status.textContent = err instanceof Error ? err.message : "No se pudo leer la imagen.";
      return;
    }
    paintInfo();
    drawStage();
    paintStats();
    status.textContent = "Lista. Elegí modo y resolución, y reconstruí.";
  }

  input.addEventListener("change", () => {
    const f = input.files?.[0];
    if (f) void accept(f);
  });

  // Arrastrar y soltar sobre el panel, y pegar desde el portapapeles (§3).
  const dropZone = folder.domElement;
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.outline = "1px dashed #4be3ff";
  });
  dropZone.addEventListener("dragleave", () => { dropZone.style.outline = ""; });
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.outline = "";
    const f = e.dataTransfer?.files?.[0];
    if (f) void accept(f);
  });
  window.addEventListener("paste", (e) => {
    const f = e.clipboardData?.files?.[0];
    if (f && f.type.startsWith("image/")) void accept(f);
  });

  // --- Controles ----------------------------------------------------------
  folder.add({ fn: () => input.click() }, "fn").name("Subir imagen");

  folder
    .add(settings, "modo", Object.fromEntries(
      Object.values(RECON_MODE).map((m) => [RECON_MODE_LABELS[m], m]),
    ))
    .name("Modo");

  folder
    .add(settings, "resolucion", Object.fromEntries(
      VOXEL_RESOLUTIONS.map((r) => [`${RESOLUTION_LABELS[r]} (${r}³)`, r]),
    ))
    .name("Resolución");

  folder
    .add(settings, "profundidad", Object.fromEntries(
      listDepthProviders().map((p) => [p.name, p.id]),
    ))
    .name("Profundidad")
    .onChange((id: string) => setDepthProvider(id));

  const stageCtrl = folder
    .add({ etapa: stage as string }, "etapa", Object.fromEntries(
      (Object.keys(STAGE_LABELS) as StageView[]).map((k) => [STAGE_LABELS[k], k]),
    ))
    .name("Ver")
    .onChange((v: StageView) => { stage = v; drawStage(); });

  const actions = {
    reconstruir: async () => {
      if (busy) return;
      if (!file || !image) {
        status.textContent = "Subí una imagen primero.";
        return;
      }
      busy = true;
      status.textContent = "Reconstruyendo...";
      try {
        core = await runCore(image, { mode: settings.modo, voxelRes: settings.resolucion });
        result = toResult(core, file.name, image);
        if (core.cloud.count === 0) {
          status.textContent = "No se pudo separar ningún objeto — probá con un fondo más liso.";
          paintStats();
          return;
        }
        stage = "mascara";
        stageCtrl.setValue("mascara");
        drawStage();
        paintStats();
        // Y ENSEGUIDA LO CONSTRUYE EL ENJAMBRE.
        //
        // La Fase 43 mostraba acá una nube de puntos translúcida como
        // vista previa. El usuario pidió otra cosa: que la forma la haga
        // el enjambre de verdad. Una vista previa de algo que el enjambre
        // puede construir en el acto es un intermediario que no aporta —
        // y además se veía casi transparente.
        status.textContent = `${core.stats.surfaceVoxels} vóxeles — construyendo con el enjambre...`;
        await formWithSwarm();
      } catch (err) {
        status.textContent = err instanceof Error ? err.message : "Falló la reconstrucción.";
      } finally {
        busy = false;
      }
    },

    reconstruir2: async () => {
      if (busy) return;
      if (!core || !file || core.cloud.count === 0) {
        status.textContent = "Reconstruí primero.";
        return;
      }
      busy = true;
      try {
        await formWithSwarm();
      } finally {
        busy = false;
      }
    },
  };

  /**
   * Registra la nube como forma y la manda a construir.
   *
   * Está aparte porque tiene DOS llamadores: el final de "Reconstruir"
   * (el camino normal) y "Volver a construir", que rearma sin re-correr
   * el pipeline de visión — útil después de cambiar la cantidad de
   * nanobots, que es lo único que hace falta rehacer en ese caso.
   */
  async function formWithSwarm(): Promise<void> {
    if (!core || !file) return;
    const name = registerCustomScan(core.cloud.points, core.cloud.colors);
    // Los clusters siguen saliendo del histograma: son la PALETA. El tono
    // exacto de cada agente sale del color por punto, que es otra cosa y
    // viaja aparte.
    const clusters = await extractColorClustersFromFile(file);
    callbacks.onFormShape(name, clusters);
    status.textContent = `Construyendo: ${core.stats.surfaceVoxels} vóxeles de superficie.`;
  }

  folder.add(actions, "reconstruir").name("Reconstruir y construir");
  folder.add(actions, "reconstruir2").name("Volver a construir");
  folder.domElement.appendChild(status);
  folder.domElement.appendChild(stats);

  paintInfo();
}

/** Sólo para tests: qué procedencia se considera "vista". */
export const OBSERVED = POINT_ORIGIN.OBSERVED;
