import { createScene } from "./scene";
import { createNanobotSwarmMesh } from "./nanobot-mesh";
import { createMicrobotSwarmMesh } from "./microbot-mesh";
import { Swarm } from "./swarm";
import { createReactor } from "./reactor";
import { FORMATION_CENTER } from "./shapes";
import {
  createControlPanel,
  addAgentStatePanel,
  addTaskQueuePanel,
  addCoveragePanel,
  addBotTypePanel,
  type UiState,
} from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";
import { type ColorCluster } from "./image-color";
import { createMetrics } from "./core/metrics";
import { makeSwirlAxes } from "./core/kinematics";
import { createSimulation, IDLE_SEEK_WEIGHT } from "./core/simulation";
import { createFrameLoop } from "./core/loop";

// Punto de entrada: SOLO cableado. La simulación del enjambre vive en
// core/simulation.ts y el loop en core/loop.ts — hasta la Fase 27 todo
// esto era una closure de 551 líneas sin un solo export, imposible de
// testear y sin lugar donde enganchar lo que viene (SwarmDirector,
// agentes con estado, voxels).
//
// Acá quedan la escena, el postprocesado, el reactor, las métricas y el
// panel de control: presentación y entrada del usuario.

// Fase 18: los Nanobots pasan a escritura directa de instanceMatrix y
// dejan de depender de la física boid para converger al formar, así que
// soportan el mismo techo que Microbots. Es un TECHO, no lo que se
// reserva: las mallas crecen por demanda (ver ensureCapacity).
const MAX_NANOBOTS = 60000;
const MAX_MICROBOTS = 60000;

const DEFAULT_STATE: UiState = {
  // Antes 80 (sin cambios desde la Fase 1) — con el exoesqueleto de
  // Microbots mucho más rico (Fase 15), ese relleno se veía pobre en
  // comparación.
  count: 3000,
  microbotCount: 4000,
  cohesion: 0.8,
  separation: 1.5,
  alignment: 0.6,
  maxSpeed: 4,
  seekWeight: IDLE_SEEK_WEIGHT,
};

async function main() {
  const container = document.getElementById("app")!;
  const { scene, renderer, composer, controls } = createScene(container);

  // Fase 26a: el brief exige medir antes de optimizar, y el informe final
  // necesita números de "antes". Se expone en `window` para poder leerlo
  // desde el script de benchmark headless (bench/frame-bench.mjs).
  const metrics = createMetrics();
  (window as unknown as { __nanobotMetrics: typeof metrics }).__nanobotMetrics = metrics;
  // Por defecto three.js resetea `renderer.info` en cada render. Con
  // EffectComposer eso significa que al terminar el cuadro el contador
  // sólo refleja el ÚLTIMO pase (el quad de bloom, 1 draw call) en vez de
  // la escena entera. Con autoReset apagado el reset lo hacemos nosotros
  // al principio del cuadro y el conteo queda acumulado sobre los pases.
  renderer.info.autoReset = false;

  const swarmMesh = createNanobotSwarmMesh(MAX_NANOBOTS);
  scene.add(swarmMesh.group);

  const microbotMesh = createMicrobotSwarmMesh(MAX_MICROBOTS);
  microbotMesh.setVisible(false);
  scene.add(microbotMesh.group);

  const reactor = createReactor();
  scene.add(reactor.group);
  const reactorCenter = reactor.position.toArray() as [number, number, number];

  // Eje del "vórtice" de lanzamiento: fijo para toda la animación
  // (dirección núcleo -> centro de formación). Se calcula UNA vez acá, no
  // por agente ni por cuadro.
  const swirlAxes = makeSwirlAxes(reactorCenter, FORMATION_CENTER);

  const swarm = new Swarm();
  await swarm.load();

  const state: UiState = { ...DEFAULT_STATE };
  // Si el backend Python tiene una configuración guardada, se usa como
  // punto de partida en vez de los valores por defecto.
  const stored = await loadConfig();
  if (stored) Object.assign(state, stored);

  const sim = createSimulation({
    swarm,
    swarmMesh,
    microbotMesh,
    settings: state,
    reactorCenter,
    swirlAxes,
    maxNanobots: MAX_NANOBOTS,
    maxMicrobots: MAX_MICROBOTS,
    onFormationSettled: (ms) => metrics.mark("formacionMs", ms),
  });

  const gui = createControlPanel(state, {
    onCountChange: (count: number) => sim.setNanobotCount(count),
    onParamsChange: () => sim.applyParams(),
    onSave: async (config: SwarmConfig) => {
      await saveConfig(config);
    },
    onLoad: async () => {
      const loaded = await loadConfig();
      if (!loaded) return;
      Object.assign(state, loaded);
      sim.setNanobotCount(state.count);
      sim.applyParams();
      gui.controllersRecursive().forEach((c) => c.updateDisplay());
    },
    onFormShape: (shapeName: string, colorClusters: ColorCluster[]) => sim.formShape(shapeName, colorClusters),
    onReturnToCore: () => sim.returnToCore(),
    onMicrobotCountChange: (count: number) => sim.setMicrobotCount(count),
  });

  // Fase 28: el desglose por estado sale del AgentStore, que se llena en
  // el mismo recorrido por agente que ya escribe las posiciones. El lector
  // se crea UNA vez acá (no por cuadro) y el panel decide cuándo llamarlo.
  const paintAgentStates = addAgentStatePanel(gui);
  const readStateCounts = () => sim.state.stateCounts;

  // Fase 29: la cola de tareas del director, en vivo.
  const paintTaskQueue = addTaskQueuePanel(gui);
  const readDirector = () => sim.director;

  // Fase 30: cuánto de la figura llegan a cubrir los nanobots actuales.
  const paintCoverage = addCoveragePanel(gui);
  const readCoverage = () => sim.state.coverage;

  // Fase 31: desglose del enjambre por tipo de bot.
  const paintBotTypes = addBotTypePanel(gui);
  const readTypeCounts = () => sim.state.typeCounts;

  const loop = createFrameLoop(
    (dt) => {
      const frameStart = performance.now();
      renderer.info.reset();

      reactor.update(dt);
      controls.update(); // necesario por el damping de OrbitControls
      sim.step(dt);
      composer.render();

      // Se mide el trabajo real del cuadro (JS + envío de dibujado), no el
      // intervalo entre cuadros: ese intervalo lo fija el vsync y taparía
      // cualquier mejora mientras sobre presupuesto.
      metrics.sampleFrame(performance.now() - frameStart);
      metrics.setAgentCounts(
        sim.state.nanobotPhase === "idle" ? swarm.getCount() : sim.state.nanobotAnimCount,
        sim.state.microbotPhase === "hidden" ? 0 : sim.state.microbotCount,
      );
      metrics.setRenderInfo(renderer.info.render.calls, renderer.info.render.triangles);
      paintAgentStates(readStateCounts);
      paintTaskQueue(readDirector);
      paintCoverage(readCoverage);
      paintBotTypes(readTypeCounts);
    },
    {
      onError: (err) => console.error("Error en el loop de animación; se detiene el render:", err),
    },
  );

  loop.start();
}

main().catch((err) => {
  console.error("Error inicializando el simulador de nanobots:", err);
});
