import GUI from "lil-gui";
import type { SwarmParams } from "./swarm";
import type { SwarmConfig } from "./config-client";
import { resolveShapeName, listSupportedNames } from "./shapes";
import { extractDominantColorFromFile } from "./image-color";

export interface UiState extends SwarmParams {
  count: number;
}

export interface UiCallbacks {
  onCountChange: (count: number) => void;
  onParamsChange: (params: SwarmParams) => void;
  onSave: (config: SwarmConfig) => void;
  onLoad: () => void;
  // dominantColor: 0xRRGGBB extraído de la foto adjuntada (ver
  // image-color.ts) — lo usa el 4to rol de nanobots (COLOR, ver shapes.ts).
  onFormShape: (canonicalShapeName: string, dominantColor: number) => void;
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

  gui
    .add(state, "count", 20, 10000, 1)
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

  return gui;
}

// Carpeta "Comandos": el usuario escribe el nombre de un objeto, adjunta
// una foto de confirmación y el enjambre forma esa figura. La foto sirve
// para dos cosas: es el requisito de confirmación de UX (no hay backend/IA
// de visión en producción — la FORMA real sale de shapes.ts, no de la
// imagen) y además se le extrae el color RGB dominante en el navegador
// (histograma simple, ver image-color.ts) para el 4to rol de nanobots
// (COLOR) — así la figura queda pintada con el color real del objeto
// fotografiado.
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
  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    if (photoObjectUrl) URL.revokeObjectURL(photoObjectUrl);
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
      const dominantColor = await extractDominantColorFromFile(attachedFile);
      callbacks.onFormShape(canonical, dominantColor);
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
