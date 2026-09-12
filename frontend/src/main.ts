import { createScene } from "./scene";
import { createNanobotSwarmMesh } from "./nanobot-mesh";
import { Swarm } from "./swarm";
import { createReactor } from "./reactor";
import { formShape, idleCluster, FORMATION_CENTER } from "./shapes";
import { createControlPanel, type UiState } from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";

const MAX_NANOBOTS = 200;

// Seek más suave en reposo (cluster orgánico alrededor del núcleo) y más
// fuerte al formar una figura (para que se vea nítida pese al ruido de
// cohesión/separación entre agentes).
const IDLE_SEEK_WEIGHT = 0.5;
const FORMING_SEEK_WEIGHT = 3.5;

const DEFAULT_STATE: UiState = {
  count: 80,
  cohesion: 0.8,
  separation: 1.5,
  alignment: 0.6,
  maxSpeed: 4,
  seekWeight: IDLE_SEEK_WEIGHT,
};

type Mode = "idle" | "forming";

async function main() {
  const container = document.getElementById("app")!;
  const { scene, camera, renderer } = createScene(container);

  const swarmMesh = createNanobotSwarmMesh(MAX_NANOBOTS);
  scene.add(swarmMesh.group);

  const reactor = createReactor();
  scene.add(reactor.group);
  const reactorCenter = reactor.position.toArray() as [number, number, number];

  // Núcleo de física: carga el módulo Wasm compilado desde /cpp/boids.cpp.
  const swarm = new Swarm();
  await swarm.load();

  const state: UiState = { ...DEFAULT_STATE };

  // Si el backend Python tiene una configuración guardada, se usa como punto
  // de partida en vez de los valores por defecto.
  const stored = await loadConfig();
  if (stored) Object.assign(state, stored);

  let mode: Mode = "idle";
  let currentShapeName: string | null = null;

  function applyParams() {
    swarm.setParams({
      cohesion: state.cohesion,
      separation: state.separation,
      alignment: state.alignment,
      maxSpeed: state.maxSpeed,
      seekWeight: mode === "forming" ? FORMING_SEEK_WEIGHT : IDLE_SEEK_WEIGHT,
    });
  }

  function applyIdleTargets() {
    swarm.setAgentTargets(idleCluster(state.count, reactorCenter));
  }

  function applyShapeTargets(name: string): void {
    const points = formShape(name, state.count, FORMATION_CENTER);
    if (points) swarm.setAgentTargets(points);
  }

  // Transición de modo: recalcula los targets del enjambre (reposo o
  // figura) y ajusta la fuerza de seek acorde.
  function setMode(next: Mode, shapeName?: string) {
    mode = next;
    currentShapeName = next === "forming" ? (shapeName ?? null) : null;
    if (next === "forming" && currentShapeName) applyShapeTargets(currentShapeName);
    else applyIdleTargets();
    applyParams();
  }

  // `swarm.init()` reasigna (y reinicializa) el buffer de targets en C++,
  // así que tras cambiar la cantidad hay que reescribir el target activo.
  function applyCount(count: number) {
    state.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
    if (mode === "forming" && currentShapeName) applyShapeTargets(currentShapeName);
    else applyIdleTargets();
  }

  applyCount(state.count);
  setMode("idle");

  const gui = createControlPanel(state, {
    onCountChange: applyCount,
    onParamsChange: applyParams,
    onSave: async (config: SwarmConfig) => {
      await saveConfig(config);
    },
    onLoad: async () => {
      const loaded = await loadConfig();
      if (!loaded) return;
      Object.assign(state, loaded);
      applyCount(state.count);
      applyParams();
      gui.controllersRecursive().forEach((c) => c.updateDisplay());
    },
    onFormShape: (shapeName: string) => setMode("forming", shapeName),
    onReturnToCore: () => setMode("idle"),
  });

  let lastTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    reactor.update(dt);
    // Los targets del enjambre solo se reescriben en transiciones de modo
    // y en cambios de cantidad (ver setMode/applyCount) — no hace falta
    // tocarlos en cada frame.
    swarm.step(dt);

    const positions = swarm.getPositions();
    swarmMesh.updateFromPositions(positions, swarm.getCount());

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

main().catch((err) => {
  console.error("Error inicializando el simulador de nanobots:", err);
});
