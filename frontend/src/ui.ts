import GUI from "lil-gui";
import type { SwarmParams } from "./swarm";
import type { SwarmConfig } from "./config-client";

export interface UiState extends SwarmParams {
  count: number;
}

export interface UiCallbacks {
  onCountChange: (count: number) => void;
  onParamsChange: (params: SwarmParams) => void;
  onSave: (config: SwarmConfig) => void;
  onLoad: () => void;
}

// Panel de control (lil-gui): cantidad de nanobots (20-200), velocidad máxima
// y pesos de cohesión/separación/alineación, más botones de guardar/cargar
// configuración (delegados al backend Python vía config-client.ts).
export function createControlPanel(state: UiState, callbacks: UiCallbacks): GUI {
  const gui = new GUI({ title: "Parámetros del enjambre" });

  gui
    .add(state, "count", 20, 200, 1)
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

  return gui;
}
