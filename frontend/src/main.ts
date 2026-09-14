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
  addInspectionFolder,
  type UiState,
} from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";
import { type ColorCluster } from "./image-color";
import { createMetrics } from "./core/metrics";
import { makeSwirlAxes } from "./core/kinematics";
import { createSimulation, IDLE_SEEK_WEIGHT } from "./core/simulation";
import { createFrameLoop } from "./core/loop";
import { createLodSelector, LOD_LEVEL } from "./rendering/bot-lod";
import { createZoomMode } from "./ui/zoom-mode";
import { createBotInspector } from "./ui/bot-inspector";
import { createLayerInspector, SWARM_LAYER, type LayerVisibility } from "./ui/layer-inspector";

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
  const { scene, camera, renderer, composer, controls } = createScene(container);

  // Fase 26a: el brief exige medir antes de optimizar, y el informe final
  // necesita números de "antes". Se expone en `window` para poder leerlo
  // desde el script de benchmark headless (bench/frame-bench.mjs).
  const metrics = createMetrics();
  (window as unknown as { __nanobotMetrics: typeof metrics }).__nanobotMetrics = metrics;
  // Sonda de cámara: la usan los scripts de verificación visual para
  // poder afirmar DÓNDE quedó la cámara en vez de mirar un PNG negro y
  // adivinar. No cuesta nada y ya se ganó el lugar una vez.
  (window as unknown as { __nanobotCamera: unknown }).__nanobotCamera = {
    get: () => ({
      pos: camera.position.toArray(),
      target: controls.target.toArray(),
      distance: controls.getDistance(),
      fov: camera.fov,
      minDistance: controls.minDistance,
    }),
  };
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
    reactor,
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

  // Fase 32: nivel de detalle por distancia de cámara. Un nivel para toda
  // la población, no uno por agente — eso es lo que mantiene UNA malla
  // instanciada por rol en vez de partirla en tres y reordenar instancias
  // cada vez que la cámara se mueve.
  const lod = createLodSelector();
  swarmMesh.setLodLevel(lod.level);

  // --- Modo de inspección (Fase 33) ---------------------------------
  //
  // Tres herramientas que comparten propósito: acercarse más de lo que el
  // zoom normal permite, mirar un tipo de bot en detalle, y separar las
  // capas para entender cómo se apila el objeto. NINGUNA toca la
  // simulación: sólo cambian cómo se dibuja lo que ya está pasando.

  const inspector = createBotInspector();
  document.body.appendChild(inspector.element);

  const layerState = {
    visible: [true, true, true, true],
    explode: 0,
  };

  function applyLayers(state: LayerVisibility): void {
    // El desplazamiento se reparte simétrico alrededor del centro para que
    // separar las capas no mande la figura entera fuera de cuadro.
    const step = state.explode;
    microbotMesh.setLayerDisplay(
      { visible: state.visible[SWARM_LAYER.STRUCTURE], offsetY: -1.5 * step },
      { visible: state.visible[SWARM_LAYER.CONNECTION], offsetY: -0.5 * step },
    );
    swarmMesh.setLayerDisplay(
      { visible: state.visible[SWARM_LAYER.DETAIL], offsetY: 0.5 * step },
      { visible: state.visible[SWARM_LAYER.MATERIAL], offsetY: 1.5 * step },
    );
  }

  const layers = createLayerInspector({ onChange: applyLayers });
  document.body.appendChild(layers.element);
  applyLayers(layerState as LayerVisibility);

  const zoom = createZoomMode({
    camera,
    controls,
    // Acercarse a donde están los bots: la figura si hay una, el núcleo
    // si el enjambre está en reposo. Sin esto el zoom cae en el origen de
    // la escena, que está vacío.
    focusTarget: () => (sim.state.forming ? FORMATION_CENTER : reactorCenter),
    onChange: (on) => {
      // En zoom especial el detalle alto es el punto: se fuerza sin
      // esperar a que la distancia cruce el umbral.
      if (on) swarmMesh.setLodLevel(LOD_LEVEL.NEAR);
      else swarmMesh.setLodLevel(lod.level);
    },
  });

  let layersOpen = false;
  addInspectionFolder(gui, {
    onToggleZoom: () => zoom.toggle(),
    onToggleInspector: () => {
      inspector.setOpen(!inspector.open);
      return inspector.open;
    },
    onToggleLayers: () => {
      layersOpen = !layersOpen;
      layers.setOpen(layersOpen);
      return layersOpen;
    },
  });

  const loop = createFrameLoop(
    (dt) => {
      const frameStart = performance.now();
      renderer.info.reset();

      reactor.update(dt);
      controls.update(); // necesario por el damping de OrbitControls
      // `update` devuelve true sólo cuando el nivel CAMBIÓ, así que en un
      // paneo normal esto es una resta y una comparación por cuadro.
      // Con el zoom especial activo el nivel lo fija el modo, no la
      // distancia: si no, alejarse un poco dentro del modo bajaría el
      // detalle justo cuando el usuario lo pidió.
      if (lod.update(controls.getDistance()) && !zoom.active) swarmMesh.setLodLevel(lod.level);
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
      inspector.setCounts(sim.state.typeCounts);
      inspector.render(dt);
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
