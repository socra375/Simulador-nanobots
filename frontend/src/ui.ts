import GUI from "lil-gui";
import type { SwarmParams } from "./swarm";
import type { SwarmConfig } from "./config-client";
import { resolveShapeName, listSupportedNames, registerCustomScan } from "./shapes";
import { addImageTo3DFolder } from "./ui/image-to-3d-panel";
import { extractColorClustersFromFile, type ColorCluster } from "./image-color";
import { buildVisualHullPoints, type ScanPhotos } from "./visual-hull";
import { AGENT_STATE_NAMES } from "./swarm/agent-store";
import { type SwarmDirector } from "./swarm/director";
import { type CoverageInfo } from "./core/simulation";
import { BOT_TYPES } from "./swarm/bot-types";
import { botVisual } from "./swarm/bot-config";

export interface UiState extends SwarmParams {
  count: number;
  // Cantidad de Microbots (Fase 15): población aparte que arma el
  // exoesqueleto (nodos+vigas) de la figura antes que Nanobots — no tiene
  // física propia ni "Comandos" propio, ver microbot-mesh.ts/main.ts.
  microbotCount: number;
}

export interface UiCallbacks {
  /** Cuántos nanobots hay configurados. Lo lee el panel Imagen → 3D para
   *  avisar si la cáscara pide más agentes de los que hay. */
  readNanobotCount?: () => number;
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
  addImageTo3DFolder(gui, {
    onFormShape: callbacks.onFormShape,
    readNanobotCount: callbacks.readNanobotCount ?? (() => state.count),
  });

  return gui;
}

// Cada cuánto se repinta el desglose de estados. A 60fps repintar el DOM
// en cada cuadro es puro desperdicio: el ojo no distingue más de unas
// pocas actualizaciones por segundo, y el conteo en sí recorre todos los
// agentes (ver AgentStore.countByState), así que tampoco conviene pedirlo
// 60 veces por segundo con 60.000 agentes.
const STATE_PANEL_INTERVAL_MS = 200;

/**
 * Desglose en vivo de en qué estado está cada agente (Fase 28). Recibe un
 * lector en vez del array ya contado a propósito: así el recorrido por
 * agente sólo ocurre cuando de verdad se va a repintar.
 */
export function addAgentStatePanel(gui: GUI): (readCounts: () => Uint32Array) => void {
  const folder = gui.addFolder("Estado de los agentes");
  const list = document.createElement("div");
  list.style.padding = "6px 10px";
  list.style.fontSize = "11px";
  list.style.lineHeight = "1.6";
  list.style.whiteSpace = "pre";
  list.style.opacity = "0.85";
  list.textContent = "sin agentes";
  folder.domElement.appendChild(list);

  let lastPaint = -Infinity;
  let lastText = "";

  return (readCounts) => {
    const now = performance.now();
    if (now - lastPaint < STATE_PANEL_INTERVAL_MS) return;
    lastPaint = now;

    const counts = readCounts();
    let text = "";
    for (let i = 0; i < AGENT_STATE_NAMES.length; i++) {
      if (counts[i] === 0) continue;
      text += `${AGENT_STATE_NAMES[i]}: ${counts[i]}\n`;
    }
    const next = text === "" ? "sin agentes" : text.trimEnd();
    // Escribir el mismo texto igual ensucia el layout del navegador.
    if (next === lastText) return;
    lastText = next;
    list.textContent = next;
  };
}

/**
 * Cola de tareas del director (Fase 29). Mismo criterio que el panel de
 * estados: recibe un lector y se repinta pocas veces por segundo. Es lo
 * que hace que la cola sea observable y no un registro interno que nadie
 * mira.
 */
export function addTaskQueuePanel(gui: GUI): (readDirector: () => SwarmDirector) => void {
  const folder = gui.addFolder("Cola de tareas");
  const list = document.createElement("div");
  list.style.padding = "6px 10px";
  list.style.fontSize = "11px";
  list.style.lineHeight = "1.6";
  list.style.whiteSpace = "pre";
  list.style.opacity = "0.85";
  list.textContent = "sin tareas";
  folder.domElement.appendChild(list);

  let lastPaint = -Infinity;
  let lastText = "";

  return (readDirector) => {
    const now = performance.now();
    if (now - lastPaint < STATE_PANEL_INTERVAL_MS) return;
    lastPaint = now;

    const lines = readDirector().describe();
    const next = lines.length ? lines.join("\n") : "sin tareas";
    if (next === lastText) return;
    lastText = next;
    list.textContent = next;
  };
}

/**
 * Cobertura de la figura (Fase 30): qué fracción del volumen de la forma
 * ocupan realmente los nanobots. Responde a "¿me alcanzan los agentes
 * para esta figura?", que antes sólo se podía adivinar mirando.
 */
export function addCoveragePanel(gui: GUI): (readCoverage: () => CoverageInfo | null) => void {
  const folder = gui.addFolder("Cobertura de la figura");
  const line = document.createElement("div");
  line.style.padding = "6px 10px";
  line.style.fontSize = "11px";
  line.style.lineHeight = "1.6";
  line.style.whiteSpace = "pre";
  line.style.opacity = "0.85";
  line.textContent = "sin figura";
  folder.domElement.appendChild(line);

  let lastPaint = -Infinity;
  let lastText = "";

  return (readCoverage) => {
    const now = performance.now();
    if (now - lastPaint < STATE_PANEL_INTERVAL_MS) return;
    lastPaint = now;

    const c = readCoverage();
    const next = c
      ? `${Math.round(c.fraction * 100)}% del volumen\n${c.covered} de ${c.total} celdas`
      : "sin figura";
    if (next === lastText) return;
    lastText = next;
    line.textContent = next;
  };
}

/**
 * Panel de material (Fase 42): las regiones espaciales, la paleta, y de
 * dónde salió cada color.
 *
 * LO QUE ESTE PANEL DICE Y OTROS NO DIRÍAN: si el reparto de color es
 * OBSERVADO (la foto sabe dónde va cada tono) o APROXIMADO (sólo se conoce
 * la paleta y las bandas son una decisión de presentación). Mostrar tres
 * colores bonitos sin decir cuál de los dos casos es sería exactamente la
 * clase de dato inventado que el resto del proyecto evita.
 *
 * El interruptor de DEBUG pinta cada región de un color distinto (spec
 * §25). Es sólo de presentación: no toca el mapa de material ni el estado
 * de ningún agente, y se apaga del todo.
 */
export function addMaterialPanel(
  gui: GUI,
  onDebugChange: (on: boolean) => void,
): (read: () => MaterialPanelInfo | null) => void {
  const folder = gui.addFolder("Material y regiones");

  const line = document.createElement("div");
  line.style.padding = "6px 10px 2px";
  line.style.fontSize = "11px";
  line.style.lineHeight = "1.6";
  line.style.whiteSpace = "pre-wrap";
  line.style.opacity = "0.85";
  line.textContent = "sin figura";
  folder.domElement.appendChild(line);

  const swatches = document.createElement("div");
  swatches.style.cssText = "display:flex;flex-wrap:wrap;gap:4px;padding:2px 10px 8px";
  folder.domElement.appendChild(swatches);

  const debugState = { regiones: false };
  folder.add(debugState, "regiones").name("depurar regiones").onChange((v: boolean) => onDebugChange(v));

  let lastPaint = -Infinity;
  let lastText = "";
  let lastPalette = "";

  return (read) => {
    const now = performance.now();
    if (now - lastPaint < STATE_PANEL_INTERVAL_MS) return;
    lastPaint = now;

    const info = read();
    const next = info
      ? [
          `${info.regions} ${info.regions === 1 ? "región" : "regiones"} · ${info.slots} ${info.slots === 1 ? "tanda" : "tandas"}`,
          `${info.materialCount} Material Bots`,
          info.phase,
          info.sourceLabel,
        ].join("\n")
      : "sin figura";
    if (next !== lastText) {
      lastText = next;
      line.textContent = next;
    }

    const key = info ? info.palette.join(",") : "";
    if (key !== lastPalette) {
      lastPalette = key;
      swatches.replaceChildren();
      for (const color of info?.palette ?? []) {
        const chip = document.createElement("span");
        chip.title = hexColor(color);
        chip.style.cssText = `width:16px;height:16px;border-radius:3px;border:1px solid rgba(255,255,255,0.25);background:${hexColor(color)}`;
        swatches.appendChild(chip);
      }
    }
  };
}

export interface MaterialPanelInfo {
  readonly regions: number;
  readonly slots: number;
  readonly materialCount: number;
  readonly palette: readonly number[];
  /** Etapa actual, ya en texto. */
  readonly phase: string;
  /** "color por posición" vs "paleta repartida en bandas (aproximado)". */
  readonly sourceLabel: string;
}

function hexColor(value: number): string {
  return `#${value.toString(16).padStart(6, "0")}`;
}

/**
 * Desglose del enjambre por TIPO de bot (Fase 31), con su color de
 * identificación al lado.
 *
 * Los tipos que todavía no tienen agentes se muestran igual, pero con el
 * motivo escrito. Ocultarlos daría a entender que no existen; mostrarlos
 * sin aclaración daría a entender que funcionan.
 */
export function addBotTypePanel(gui: GUI): (readCounts: () => Uint32Array) => void {
  const folder = gui.addFolder("Tipos de bot");
  const list = document.createElement("div");
  list.style.padding = "6px 10px";
  list.style.fontSize = "11px";
  list.style.lineHeight = "1.7";
  folder.domElement.appendChild(list);

  const valueCells: HTMLSpanElement[] = [];
  for (const info of BOT_TYPES) {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.gap = "6px";

    const dot = document.createElement("span");
    dot.style.width = "9px";
    dot.style.height = "9px";
    dot.style.borderRadius = "2px";
    dot.style.flex = "0 0 auto";
    dot.style.background = hexColor(botVisual(info.type).identityColor);
    row.appendChild(dot);

    const name = document.createElement("span");
    name.textContent = info.name;
    name.style.flex = "1 1 auto";
    name.style.opacity = info.implemented ? "0.9" : "0.5";
    name.title = `${info.role} — ${info.fn}`;
    row.appendChild(name);

    const value = document.createElement("span");
    value.style.opacity = "0.75";
    value.textContent = "0";
    row.appendChild(value);
    valueCells.push(value);

    list.appendChild(row);

    const aclaracion = info.implemented ? info.note : info.pendingReason;
    if (aclaracion) {
      const note = document.createElement("div");
      note.textContent = aclaracion;
      note.style.fontSize = "10px";
      note.style.opacity = "0.45";
      note.style.margin = "-2px 0 4px 15px";
      note.style.lineHeight = "1.35";
      list.appendChild(note);
    }
  }

  let lastPaint = -Infinity;
  const lastValues = BOT_TYPES.map(() => -1);

  return (readCounts) => {
    const now = performance.now();
    if (now - lastPaint < STATE_PANEL_INTERVAL_MS) return;
    lastPaint = now;

    const counts = readCounts();
    for (let i = 0; i < BOT_TYPES.length; i++) {
      const n = counts[BOT_TYPES[i].type] ?? 0;
      if (n === lastValues[i]) continue;
      lastValues[i] = n;
      valueCells[i].textContent = BOT_TYPES[i].implemented ? String(n) : "sin agentes";
    }
  };
}

export interface InspectionCallbacks {
  onToggleZoom: () => boolean;
  onToggleInspector: () => boolean;
  onToggleLayers: () => boolean;
}

/**
 * Carpeta "Inspección": los tres interruptores del modo de observación
 * (Fase 33). Van juntos porque son la misma herramienta vista desde tres
 * ángulos — acercarse, mirar un tipo, y separar las capas.
 */
export function addInspectionFolder(gui: GUI, callbacks: InspectionCallbacks): void {
  const folder = gui.addFolder("Inspección");

  const tip = document.createElement("div");
  tip.style.cssText = "font-size:10px;opacity:0.5;line-height:1.35;padding:4px 10px";
  tip.textContent =
    "El Zoom especial deja acercarse mucho más que el zoom normal, y ahí se distingue el hexágono y el tipo de cada bot.";
  folder.domElement.appendChild(tip);

  const acciones = {
    zoom: () => {
      const on = callbacks.onToggleZoom();
      zoomCtrl.name(on ? "Zoom especial: ACTIVO" : "Zoom especial");
    },
    inspector: () => {
      const on = callbacks.onToggleInspector();
      inspCtrl.name(on ? "Inspección de bots: ABIERTA" : "Inspección de bots");
    },
    capas: () => {
      const on = callbacks.onToggleLayers();
      capasCtrl.name(on ? "Ver capas: ABIERTO" : "Ver capas");
    },
  };

  const zoomCtrl = folder.add(acciones, "zoom").name("Zoom especial");
  const inspCtrl = folder.add(acciones, "inspector").name("Inspección de bots");
  const capasCtrl = folder.add(acciones, "capas").name("Ver capas");
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
  // Marcador propio para el E2E. Antes este input era "el único sin
  // data-scan-slot" y el test lo elegía por exclusión; con el panel
  // Imagen → 3D apareció un segundo input sin ese atributo y el selector
  // pasó a matchear dos elementos. Un selector POSITIVO no se rompe cada
  // vez que aparece un input nuevo.
  fileInput.dataset.commandSlot = "photo";
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
