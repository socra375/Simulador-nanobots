// Panel de inspección de bots (Fase 33).
//
// Muestra el modelo 3D grande de UN tipo, con su ficha: nombre, rol,
// función, tamaño relativo, color de identidad y si acepta el material del
// objeto.
//
// REGLA QUE SE RESPETA ACÁ, Y ES LA QUE MÁS IMPORTA: los datos que todavía
// no existen se muestran como "no disponible en esta fase", nunca
// inventados. La spec lo pide y además es lo único honesto: un panel que
// muestra "Energía: 87%" cuando no hay campo de energía en ningún lado
// está mintiendo con formato bonito.

import {
  BOT_TYPES,
  botTypeInfo,
  type BotType,
} from "../swarm/bot-types";
import { botVisual } from "../swarm/bot-config";
import { createInspectionRenderer } from "../rendering/inspection-renderer";

const NO_DISPONIBLE = "no disponible en esta fase";

export interface BotInspector {
  readonly element: HTMLElement;
  readonly open: boolean;
  setOpen(open: boolean): void;
  /** Un cuadro del modelo 3D. No hace nada si el panel está cerrado. */
  render(dt: number): void;
  /** Conteo en vivo por tipo, para mostrar cuántos hay de cada uno. */
  setCounts(counts: Uint32Array): void;
  dispose(): void;
}

function row(label: string, value: string, dim = false): HTMLElement {
  const el = document.createElement("div");
  el.style.display = "flex";
  el.style.justifyContent = "space-between";
  el.style.gap = "10px";
  el.style.padding = "2px 0";
  const l = document.createElement("span");
  l.textContent = label;
  l.style.opacity = "0.55";
  l.style.flex = "0 0 auto";
  const v = document.createElement("span");
  v.textContent = value;
  v.style.textAlign = "right";
  v.style.opacity = dim ? "0.4" : "0.95";
  if (dim) v.style.fontStyle = "italic";
  el.append(l, v);
  return el;
}

export function createBotInspector(): BotInspector {
  const element = document.createElement("div");
  element.style.cssText = [
    "position:fixed", "left:12px", "bottom:12px", "width:300px",
    "background:rgba(14,16,20,0.92)", "border:1px solid rgba(255,255,255,0.12)",
    "border-radius:6px", "color:#e8ecf2", "font:12px/1.5 system-ui,sans-serif",
    "z-index:20", "display:none", "backdrop-filter:blur(6px)",
  ].join(";");

  const header = document.createElement("div");
  header.style.cssText = "display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,0.1)";
  const title = document.createElement("strong");
  title.textContent = "Inspección de bots";
  title.style.flex = "1 1 auto";
  const close = document.createElement("button");
  close.textContent = "✕";
  close.style.cssText = "background:none;border:none;color:inherit;cursor:pointer;font-size:13px;opacity:0.6";
  header.append(title, close);
  element.appendChild(header);

  // Selector de tipo: un chip por tipo, con su color de identidad.
  const tabs = document.createElement("div");
  tabs.style.cssText = "display:flex;flex-wrap:wrap;gap:4px;padding:8px 10px";
  element.appendChild(tabs);

  const viewer = createInspectionRenderer();
  viewer.canvas.style.cssText = "width:100%;height:170px;display:block";
  element.appendChild(viewer.canvas);

  const info = document.createElement("div");
  info.style.cssText = "padding:8px 10px 10px";
  element.appendChild(info);

  let selected: BotType = BOT_TYPES[0].type;
  let open = false;
  let counts: Uint32Array | null = null;
  const chips: HTMLButtonElement[] = [];

  function paintInfo(): void {
    const t = botTypeInfo(selected);
    info.textContent = "";

    const name = document.createElement("div");
    name.textContent = t.name;
    name.style.cssText = "font-size:14px;font-weight:600;margin-bottom:4px";
    name.style.color = `#${botVisual(t.type).identityColor.toString(16).padStart(6, "0")}`;
    info.appendChild(name);

    info.appendChild(row("Rol", t.role));
    info.appendChild(row("Función", t.fn));
    info.appendChild(row("Forma", "Hexágono"));
    info.appendChild(row("Tamaño relativo", `${t.relativeSize.toFixed(1)}× Nanobot`));
    info.appendChild(
      row("Color de identidad", `#${botVisual(t.type).identityColor.toString(16).padStart(6, "0")}`),
    );
    info.appendChild(
      row("Recibe material", t.acceptsObjectMaterial ? "sí" : "no — conserva su color estructural"),
    );

    const n = counts ? counts[t.type] ?? 0 : 0;
    info.appendChild(
      t.implemented ? row("En el enjambre", `${n} agentes`) : row("En el enjambre", "sin agentes", true),
    );

    // Campos que la spec pide pero que todavía no tienen dato real. Se
    // muestran atenuados y con el texto exacto, porque ocultarlos haría
    // creer que no están previstos e inventarlos sería peor.
    info.appendChild(row("Material aplicado", NO_DISPONIBLE, true));
    info.appendChild(row("Energía", NO_DISPONIBLE, true));
    info.appendChild(row("Conexiones", NO_DISPONIBLE, true));

    if (!t.implemented && t.pendingReason) {
      const note = document.createElement("div");
      note.textContent = t.pendingReason;
      note.style.cssText = "margin-top:6px;font-size:11px;opacity:0.45;line-height:1.4";
      info.appendChild(note);
    }
  }

  function select(type: BotType): void {
    selected = type;
    chips.forEach((chip, i) => {
      const on = BOT_TYPES[i].type === type;
      chip.style.opacity = on ? "1" : "0.5";
      chip.style.borderWidth = on ? "2px" : "1px";
    });
    viewer.show(type);
    paintInfo();
  }

  for (const t of BOT_TYPES) {
    const chip = document.createElement("button");
    chip.textContent = t.name.replace(" Bot", "");
    const hex = `#${botVisual(t.type).identityColor.toString(16).padStart(6, "0")}`;
    chip.style.cssText = [
      "flex:1 1 auto", "min-width:74px", "padding:3px 6px", "cursor:pointer",
      "background:rgba(255,255,255,0.05)", `border:1px solid ${hex}`,
      "border-radius:4px", `color:${hex}`, "font:11px system-ui,sans-serif",
    ].join(";");
    chip.addEventListener("click", () => select(t.type));
    tabs.appendChild(chip);
    chips.push(chip);
  }

  function setOpen(next: boolean): void {
    open = next;
    element.style.display = next ? "block" : "none";
    if (!next) return;
    // El canvas mide 0 mientras está oculto: hay que dimensionarlo DESPUÉS
    // de mostrarlo o la primera imagen sale vacía.
    viewer.setSize(element.clientWidth, 170);
    select(selected);
  }

  close.addEventListener("click", () => setOpen(false));
  select(selected);

  return {
    element,
    get open() { return open; },
    setOpen,
    render(dt): void {
      if (!open) return;
      viewer.render(dt);
    },
    setCounts(next): void {
      counts = next;
    },
    dispose(): void {
      viewer.dispose();
      element.remove();
    },
  };
}

export { NO_DISPONIBLE };
