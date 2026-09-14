import GUI from "lil-gui";
import type { SwarmParams } from "./swarm";
import type { SwarmConfig } from "./config-client";
import { resolveShapeName, listSupportedNames, registerCustomScan } from "./shapes";
import { extractColorClustersFromFile, type ColorCluster } from "./image-color";
import { buildVisualHullPoints, type ScanPhotos } from "./visual-hull";

export interface UiState extends SwarmParams {
  count: number;
  // Cantidad de Microbots (Fase 15): población aparte que arma el
  // exoesqueleto (nodos+vigas) de la figura antes que Nanobots — no tiene
  // física propia ni "Comandos" propio, ver microbot-mesh.ts/main.ts.
  microbotCount: number;
}

export interface UiCallbacks {
  onCountChange: (count: number) => void;
  onMicrobotCountChange: (count: number) => void;
  onParamsChange: (params: SwarmParams) => void;
  onSave: (config: SwarmConfig) => void;
  onLoad: () => void;
  // Olas de color (0xRRGGBB + peso) extraídas de la foto adjuntada (ver
  // image-color.ts pickColorClusters) — las usa el 4to rol de nanobots
  // (COLOR, ver shapes.ts), una por sub-fase de revelado.
  onFormShape: (canonicalShapeName: string, colorClusters: ColorCluster[]) => void;
  onReturnToCore: () => void;
}

// Panel de control (lil-gui): cantidad de nanobots (20-10.000), velocidad
// máxima y pesos de cohesión/separación/alineación, más botones de
// guardar/cargar configuración (delegados al backend Python vía
// config-client.ts). A partir de cientos de agentes, boids.cpp usa una
// grilla espacial para la búsqueda de vecinos (ver init()/step() ahí) en
// vez de comparar cada agente contra todos los demás.
export function createControlPanel(state: UiState, callbacks: UiCallbacks): GUI {
  const gui = new GUI({ title: "Parámetros del enjambre" });

  // Microbots: capa de exoesqueleto por debajo de Nanobots (ver
  // microbot-mesh.ts) — sin física propia, así que soporta MUCHOS más
  // agentes (hasta 60.000) sin frisar; paso de slider más grueso (100)
  // porque el rango es mucho más ancho que el de Nanobots.
  const microbotsFolder = gui.addFolder("Microbots (exoesqueleto)");
  microbotsFolder
    .add(state, "microbotCount", 0, 60000, 100)
    .name("Cantidad")
    .onFinishChange((value: number) => callbacks.onMicrobotCountChange(value));

  gui
    .add(state, "count", 20, 60000, 1)
    .name("Nanobots")
    .onFinishChange((value: number) => callbacks.onCountChange(value));

  gui
    .add(state, "maxSpeed", 0.5, 10, 0.1)
    .name("Velocidad máx.")
    .onChange(() => callbacks.onParamsChange(state));

  gui
    .add(state, "cohesion", 0, 3, 0.05)
    .name("Cohesión")
    .onChange(() => callbacks.onParamsChange(state));

  gui
    .add(state, "separation", 0, 3, 0.05)
    .name("Separación")
    .onChange(() => callbacks.onParamsChange(state));

  gui
    .add(state, "alignment", 0, 3, 0.05)
    .name("Alineación")
    .onChange(() => callbacks.onParamsChange(state));

  const actions = {
    guardar: () =>
      callbacks.onSave({
        count: state.count,
        cohesion: state.cohesion,
        separation: state.separation,
        alignment: state.alignment,
        maxSpeed: state.maxSpeed,
      }),
    cargar: () => callbacks.onLoad(),
  };

  gui.add(actions, "guardar").name("Guardar configuración");
  gui.add(actions, "cargar").name("Cargar configuración");

  addCommandsFolder(gui, callbacks);
  addScanFolder(gui, callbacks);

  return gui;
}

// Carpeta "Comandos": el usuario escribe el nombre de un objeto, adjunta
// una foto de confirmación y el enjambre forma esa figura. La foto sirve
// para dos cosas: es el requisito de confirmación de UX (no hay backend/IA
// de visión en producción — la FORMA real sale de shapes.ts, no de la
// imagen) y además se le extraen hasta 4 "olas" de color en el navegador
// (histograma + clustering por proximidad, ver image-color.ts) para el 4to
// rol de nanobots (COLOR) — si la foto tiene varias zonas de color
// reconociblemente distintas, cada una sale como su propia ola.
function addCommandsFolder(gui: GUI, callbacks: UiCallbacks): void {
  const folder = gui.addFolder("Comandos");
  const commands = { objectName: "" };
  let attachedFile: File | null = null;

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  const preview = document.createElement("img");
  preview.style.cssText =
    "width:100%;max-height:80px;object-fit:contain;display:none;margin:4px 0;border-radius:4px;";

  const status = document.createElement("div");
  status.style.cssText = "font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";

  let photoObjectUrl: string | null = null;
  // Antes solo se revocaba la URL ANTERIOR al adjuntar una foto nueva, así
  // que la última siempre quedaba viva (el navegador mantiene el blob en
  // memoria hasta que se revoca o se cierra la pestaña). Revocando apenas
  // la imagen quedó decodificada no queda ninguna colgada, y el preview se
  // sigue viendo igual porque ya no necesita la URL.
  function releasePhotoUrl(): void {
    if (!photoObjectUrl) return;
    URL.revokeObjectURL(photoObjectUrl);
    photoObjectUrl = null;
  }
  preview.addEventListener("load", releasePhotoUrl);
  preview.addEventListener("error", releasePhotoUrl);

  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    releasePhotoUrl();
    photoObjectUrl = URL.createObjectURL(file);
    preview.src = photoObjectUrl;
    preview.style.display = "block";
    attachedFile = file;
    status.textContent = `Foto adjunta: ${file.name}`;
  });

  folder.add(commands, "objectName").name("Objeto");

  const actions = {
    adjuntarFoto: () => fileInput.click(),
    formarObjeto: async () => {
      if (!attachedFile) {
        status.textContent = "Subí una foto del objeto antes de formarlo.";
        return;
      }
      const canonical = resolveShapeName(commands.objectName);
      if (!canonical) {
        status.textContent = `Objeto no reconocido. Probá: ${listSupportedNames().join(", ")}`;
        return;
      }
      status.textContent = `Formando: ${canonical}`;
      const colorClusters = await extractColorClustersFromFile(attachedFile);
      callbacks.onFormShape(canonical, colorClusters);
    },
    volverAlNucleo: () => {
      status.textContent = "Volviendo al núcleo...";
      callbacks.onReturnToCore();
    },
  };

  folder.add(actions, "adjuntarFoto").name("Adjuntar foto");
  folder.add(actions, "formarObjeto").name("Formar objeto");
  folder.add(actions, "volverAlNucleo").name("Volver al núcleo");

  folder.domElement.appendChild(preview);
  folder.domElement.appendChild(status);
}

// Carpeta "Escaneo 3D" (Fase 23): en vez de un nombre + 1 foto de
// confirmación (ver addCommandsFolder), acá se suben 4 fotos reales del
// MISMO objeto (frente/atrás/lateral izq./lateral der.) y se reconstruye
// su forma 3D real por "visual hull" (ver visual-hull.ts) — sin nombre
// que escribir, la forma sale de las fotos mismas. El color sigue
// saliendo del histograma de la foto frontal (mismo mecanismo que
// addCommandsFolder, sin cambios) — no hay color real por-punto en esta
// fase.
type ScanSlot = "front" | "back" | "left" | "right";
const SCAN_SLOT_LABELS: Record<ScanSlot, string> = {
  front: "Foto frontal",
  back: "Foto trasera",
  left: "Foto lateral izq.",
  right: "Foto lateral der.",
};

function addScanFolder(gui: GUI, callbacks: UiCallbacks): void {
  const folder = gui.addFolder("Escaneo 3D (4 fotos)");
  const attached: Partial<Record<ScanSlot, File>> = {};

  // Fase 23 (verificación con fotos reales): la reconstrucción falla más
  // por encuadre inconsistente que por el algoritmo en sí — cada foto
  // necesita mapear al MISMO objeto a la MISMA escala en la grilla de
  // vóxeles compartida, así que un recorte/zoom distinto por vista rompe
  // la reconstrucción aunque el fondo esté perfectamente limpio.
  const tip = document.createElement("div");
  tip.style.cssText = "font-size:10px;color:#8fa3ad;padding:2px 6px 6px;line-height:1.4;";
  tip.textContent =
    "Consejo: mismo fondo liso y contrastante, objeto centrado y a la MISMA distancia/zoom en las 4 fotos (no recortar cada una por separado).";
  folder.domElement.appendChild(tip);

  const status = document.createElement("div");
  status.style.cssText = "font-size:11px;color:#4be3ff;padding:2px 6px;min-height:14px;";

  function makeSlotInput(slot: ScanSlot): HTMLInputElement {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";
    input.dataset.scanSlot = slot; // selector estable para E2E
    document.body.appendChild(input);
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file) return;
      attached[slot] = file;
      status.textContent = `${SCAN_SLOT_LABELS[slot]}: ${file.name}`;
    });
    return input;
  }

  const slots: ScanSlot[] = ["front", "back", "left", "right"];
  const inputs = Object.fromEntries(slots.map((slot) => [slot, makeSlotInput(slot)])) as Record<
    ScanSlot,
    HTMLInputElement
  >;

  const actions = {
    reconstruir: async () => {
      const missing = slots.find((slot) => !attached[slot]);
      if (missing) {
        status.textContent = `Falta adjuntar: ${SCAN_SLOT_LABELS[missing]}.`;
        return;
      }
      status.textContent = "Reconstruyendo en 3D...";
      const photos = attached as ScanPhotos;
      const points = await buildVisualHullPoints(photos);
      if (points.length === 0) {
        status.textContent = "No se pudo reconstruir nada — probá con fondo más liso/contrastante.";
        return;
      }
      const canonical = registerCustomScan(points);
      const colorClusters = await extractColorClustersFromFile(photos.front);
      status.textContent = "Formando: escaneo";
      callbacks.onFormShape(canonical, colorClusters);
    },
  };

  for (const slot of slots) {
    folder.add({ fn: () => inputs[slot].click() }, "fn").name(SCAN_SLOT_LABELS[slot]);
  }
  folder.add(actions, "reconstruir").name("Reconstruir en 3D");
  folder.domElement.appendChild(status);
}
