import { createScene } from "./scene";
import { createNanobotSwarmMesh } from "./nanobot-mesh";
import { Swarm } from "./swarm";
import { CursorTarget } from "./input";
import { createControlPanel, type UiState } from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";

const MAX_NANOBOTS = 200;
const DEFAULT_STATE: UiState = {
  count: 80,
  cohesion: 0.8,
  separation: 1.5,
  alignment: 0.6,
  maxSpeed: 4,
};

async function main() {
  const container = document.getElementById("app")!;
  const { scene, camera, renderer } = createScene(container);

  const swarmMesh = createNanobotSwarmMesh(MAX_NANOBOTS);
  scene.add(swarmMesh.group);

  const cursorTarget = new CursorTarget(camera, renderer.domElement);

  // Núcleo de física: carga el módulo Wasm compilado desde /cpp/boids.cpp.
  const swarm = new Swarm();
  await swarm.load();

  const state: UiState = { ...DEFAULT_STATE };

  // Si el backend Python tiene una configuración guardada, se usa como punto
  // de partida en vez de los valores por defecto.
  const stored = await loadConfig();
  if (stored) Object.assign(state, stored);

  function applyCount(count: number) {
    state.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
  }

  function applyParams() {
    swarm.setParams({
      cohesion: state.cohesion,
      separation: state.separation,
      alignment: state.alignment,
      maxSpeed: state.maxSpeed,
    });
  }

  applyCount(state.count);
  applyParams();

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
  });

  let lastTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    const target = cursorTarget.update();
    swarm.setTarget(target.x, target.y, target.z);
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
