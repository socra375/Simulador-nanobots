// Visualización por capas (Fase 33, spec §11-§12).
//
// Dos herramientas distintas, que conviene no confundir:
//
//   VISIBILIDAD  -> apagar una capa la oculta. Es un filtro de qué mirar.
//   SEPARACIÓN   -> "Ver capas" separa las capas en el eje vertical para
//                   entender cómo se apila el objeto.
//
// LA REGLA QUE ORDENA TODO ESTO: ninguna de las dos toca la simulación.
// Las posiciones reales, los estados y la cola de tareas siguen igual; lo
// único que cambia es cómo se dibuja. Por eso el desplazamiento se aplica
// al `position.y` de los GRUPOS de three, no a los buffers de agentes: un
// grupo desplazado se restaura poniendo el offset en 0, mientras que tocar
// los buffers sería corromper el estado que la animación está usando.

export const SWARM_LAYER = {
  /** Nodos del exoesqueleto: la estructura. */
  STRUCTURE: 0,
  /** Vigas del exoesqueleto: las conexiones. */
  CONNECTION: 1,
  /** Nanobots de detalle. */
  DETAIL: 2,
  /** Capa de material/color. */
  MATERIAL: 3,
} as const;

export type SwarmLayer = (typeof SWARM_LAYER)[keyof typeof SWARM_LAYER];

export interface LayerInfo {
  readonly layer: SwarmLayer;
  readonly name: string;
  readonly hint: string;
}

export const SWARM_LAYERS: readonly LayerInfo[] = [
  { layer: SWARM_LAYER.STRUCTURE, name: "Estructura (Microbots)", hint: "Nodos del exoesqueleto" },
  { layer: SWARM_LAYER.CONNECTION, name: "Conexiones (Union Bots)", hint: "Vigas que unen los nodos" },
  { layer: SWARM_LAYER.DETAIL, name: "Detalle (Nanobots)", hint: "Relleno de superficie" },
  { layer: SWARM_LAYER.MATERIAL, name: "Material (Material Bots)", hint: "Color y acabado del objeto" },
];

export interface LayerVisibility {
  readonly visible: readonly boolean[];
  /** Separación vertical entre capas, en unidades de mundo. 0 = apiladas. */
  readonly explode: number;
}

export interface LayerInspector {
  readonly element: HTMLElement;
  readonly state: LayerVisibility;
  setOpen(open: boolean): void;
  dispose(): void;
}

export interface LayerInspectorDeps {
  onChange: (state: LayerVisibility) => void;
}

export function createLayerInspector(deps: LayerInspectorDeps): LayerInspector {
  const visible = SWARM_LAYERS.map(() => true);
  let explode = 0;

  const element = document.createElement("div");
  element.style.cssText = [
    "position:fixed", "left:12px", "top:12px", "width:250px",
    "background:rgba(14,16,20,0.92)", "border:1px solid rgba(255,255,255,0.12)",
    "border-radius:6px", "color:#e8ecf2", "font:12px/1.5 system-ui,sans-serif",
    "z-index:20", "display:none", "padding:8px 10px", "backdrop-filter:blur(6px)",
  ].join(";");

  const title = document.createElement("strong");
  title.textContent = "Capas de construcción";
  title.style.cssText = "display:block;margin-bottom:6px";
  element.appendChild(title);

  const state: LayerVisibility = {
    get visible() { return visible; },
    get explode() { return explode; },
  } as LayerVisibility;

  for (const info of SWARM_LAYERS) {
    const label = document.createElement("label");
    label.style.cssText = "display:flex;align-items:center;gap:6px;padding:1px 0;cursor:pointer";
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = true;
    box.addEventListener("change", () => {
      visible[info.layer] = box.checked;
      deps.onChange(state);
    });
    const text = document.createElement("span");
    text.textContent = info.name;
    text.title = info.hint;
    label.append(box, text);
    element.appendChild(label);
  }

  const sep = document.createElement("div");
  sep.style.cssText = "margin-top:8px;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px";
  const sepLabel = document.createElement("div");
  sepLabel.textContent = "Ver capas (separar)";
  sepLabel.style.opacity = "0.75";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = "0";
  slider.max = "12";
  slider.step = "0.5";
  slider.value = "0";
  slider.style.width = "100%";
  slider.addEventListener("input", () => {
    explode = Number(slider.value);
    deps.onChange(state);
  });
  const note = document.createElement("div");
  note.textContent = "Sólo afecta cómo se dibuja: la simulación no cambia.";
  note.style.cssText = "font-size:10px;opacity:0.45;line-height:1.35;margin-top:2px";
  sep.append(sepLabel, slider, note);
  element.appendChild(sep);

  return {
    element,
    state,
    setOpen(open): void {
      element.style.display = open ? "block" : "none";
    },
    dispose(): void {
      element.remove();
    },
  };
}
