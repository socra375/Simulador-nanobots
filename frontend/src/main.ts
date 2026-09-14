import { createScene } from "./scene";
import { createNanobotSwarmMesh } from "./nanobot-mesh";
import { createMicrobotSwarmMesh } from "./microbot-mesh";
import { Swarm } from "./swarm";
import { createReactor } from "./reactor";
import {
  formShapeWithRoles,
  buildExoskeleton,
  idleCluster,
  FORMATION_CENTER,
  NANOBOT_ROLE,
  type ShapeFormation,
  type Exoskeleton,
} from "./shapes";
import { createControlPanel, type UiState } from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";
import { DEFAULT_COLOR_CLUSTERS, type ColorCluster } from "./image-color";
import { createMetrics } from "./core/metrics";
import {
  DEFAULT_NANOBOT_TIMINGS,
  easeInOutCubic,
  layerIndexAt,
  makeSwirlAxes,
  planLayers,
  writeMicrobotFrame,
  writeNanobotFrame,
  type LayerPlan,
  type SwirlAxes,
} from "./core/kinematics";

// Fase 18: los Nanobots pasan a comportarse como Microbots por dentro —
// escritura directa a instanceMatrix (nanobot-mesh.ts) en vez de
// THREE.Object3D por instancia, y ya no dependen de la física boid para
// converger al formar una figura (ver más abajo) — mismo techo que
// Microbots.
const MAX_NANOBOTS = 60000;
// Techo inicial de Microbots (Fase 15): sin física boid propia (ease-in
// puro en TS, ver animate()) y con render de escritura directa a buffer
// (microbot-mesh.ts) en vez de THREE.Object3D por instancia, el costo por
// agente es mucho menor que el de Nanobots — se parte de 6x el techo de
// Nanobots como punto de partida conservador (ver plan de Fase 15),
// ajustable acá si la verificación visual real sugiere subir/bajar.
const MAX_MICROBOTS = 60000;
// Duración fija del lanzamiento/repliegue del exoesqueleto de Microbots
// (Fase 16): no depende de física (no hay nada que "asentar"), así que es
// un tiempo fijo en vez del mecanismo de asentamiento sostenido que usa el
// resto de las fases. Usada en ambos sentidos: subiendo durante el
// lanzamiento, bajando durante el repliegue (ver animate()).
const MICROBOT_EXO_DURATION = 2.2;
// Animación de "lanzamiento en vórtice" de Microbots (Fase 16): en vez de
// aparecer ya dispersos cerca del núcleo y volar en línea recta, cada
// microbot arranca EXACTO en el núcleo y viaja a su punto final con un
// remolino que se abre y se vuelve a cerrar por el camino (ver
// swirlOffset/renderMicrobotsAt) — notoriamente "sale del núcleo" en vez de
// solo materializarse.
const MICROBOT_SWIRL_TURNS = 1.5;
const MICROBOT_SWIRL_MAX_RADIUS = 1.4;

// Física boid SOLO en reposo (Fase 18): al formar una figura, los Nanobots
// dejan de converger vía física (cohesión/separación/alineación/seek en
// Wasm) y pasan a una animación 100% scripted (ver NANOBOT_*_DURATION más
// abajo) — mucho más rápida y sin el límite de vecinos-por-agente que
// antes topaba la cantidad en 10.000. En reposo, el enjambre orgánico
// sigue exactamente igual que siempre.
const IDLE_SEEK_WEIGHT = 0.5;

// Animación de "enjambre escalonado por capas" al formar una figura (Fase
// 19, reemplaza la "bola fusionada" de Fase 18 — ese bloque sincronizado
// se veía como una maraña de esferas grandes superpuestas en vez de un
// enjambre de nanopartículas asentándose, como el nanotech de Iron Man).
// Se arma por CAPAS en secuencia (Detalle primero, luego cada ola de Color
// una por una — ver nanobotLayerOf más abajo), y DENTRO de cada capa cada
// agente tiene su PROPIO instante de salida del núcleo (no sincronizado):
// NANOBOT_TRAVEL_DURATION es cuánto tarda UN agente en volar del núcleo a
// su punto final; NANOBOT_LAYER_STAGGER_SPAN es cuánto se reparte el
// instante de salida entre el primer y el último agente de esa capa (mismo
// rol que RETURN_QUEUE_SPAN en la vieja espiral de regreso pre-Fase-18).
// Las duraciones/remolinos de Nanobots viven ahora en
// DEFAULT_NANOBOT_TIMINGS (core/kinematics.ts), junto con la matemática
// que los usa.
const NANOBOT_LAYER_DURATION = DEFAULT_NANOBOT_TIMINGS.layerDuration;

// Fase 22: SOLO la 1ra ola de Color (layerIndex === 1, la que sigue a
// Detalle) sale distinto — en vez de que cada agente vuele individual
// desde el núcleo de entrada, primero viaja una "bola mediana" (todos los
// agentes de esa ola juntos, con un remolino chico) desde el núcleo hasta
// el centroide de esa ola (`nanobotWave0Landing`, ver startFormation), y
// RECIÉN AHÍ se abren en el mismo enjambre escalonado de siempre — sin
// sumar duración: se reparte el mismo NANOBOT_LAYER_DURATION de esa capa
// en "bola" (primera fracción) + "enjambre" (el resto). El resto de las
// capas (Detalle, y las olas de color siguientes) no cambian.
const DEFAULT_STATE: UiState = {
  // Antes 80 (sin cambios desde la Fase 1) — con el exoesqueleto de
  // Microbots ahora mucho más rico (Fase 15), ese relleno por defecto se
  // veía pobre en comparación; ver también SCALE_BASELINE_COUNT en
  // nanobot-mesh.ts.
  count: 3000,
  microbotCount: 4000,
  cohesion: 0.8,
  separation: 1.5,
  alignment: 0.6,
  maxSpeed: 4,
  seekWeight: IDLE_SEEK_WEIGHT,
};

type Mode = "idle" | "forming";
type RoleVisibility = readonly [boolean, boolean, boolean, boolean];
const ALL_ROLES_VISIBLE: RoleVisibility = [true, true, true, true];
// Mutable y reusada cuadro a cuadro mientras se forma/repliega: solo
// cambia el último elemento (si la 1ra ola de Color ya está revelada), y
// el literal equivalente asignaba un array nuevo en cada cuadro.
const formingRoleVisibility: [boolean, boolean, boolean, boolean] = [false, false, true, false];

async function main() {
  const container = document.getElementById("app")!;
  const { scene, renderer, composer, controls } = createScene(container);

  // Fase 26a: el brief exige medir antes de optimizar, y el informe final
  // necesita números de "antes". Se expone en `window` para poder leerlo
  // desde el script de benchmark headless (bench/frame-bench.mjs).
  const metrics = createMetrics();
  (window as unknown as { __nanobotMetrics: typeof metrics }).__nanobotMetrics = metrics;
  // Por defecto three.js resetea `renderer.info` en cada render. Con
  // EffectComposer eso significa que al terminar el frame el contador solo
  // refleja el ÚLTIMO pase (el quad de bloom, 1 draw call) en vez de la
  // escena entera. Con autoReset apagado, el reset lo hacemos nosotros al
  // principio del frame y el conteo queda acumulado sobre todos los pases.
  renderer.info.autoReset = false;

  const swarmMesh = createNanobotSwarmMesh(MAX_NANOBOTS);
  scene.add(swarmMesh.group);

  const microbotMesh = createMicrobotSwarmMesh(MAX_MICROBOTS);
  microbotMesh.setVisible(false);
  scene.add(microbotMesh.group);

  const reactor = createReactor();
  scene.add(reactor.group);
  const reactorCenter = reactor.position.toArray() as [number, number, number];

  // Eje del "vórtice" de lanzamiento de Microbots (Fase 16): fijo para
  // TODA la animación (dirección núcleo -> centro de formación, con una
  // base ortonormal perpendicular armada a mano) — se calcula UNA sola vez
  // acá en vez de por agente/frame, así el costo por agente en animate()
  // se reduce a un lerp + 1 coseno + 1 seno (nada de raíces cuadradas ni
  // productos cruzados repetidos).
  const swirlAxes: SwirlAxes = makeSwirlAxes(reactorCenter, FORMATION_CENTER);

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
  // Olas de color (clusters RGB + peso) de la última foto adjuntada, para
  // el rol COLOR — se reaplican si hace falta rearmar la figura (p.ej. al
  // cambiar la cantidad de nanobots) sin pedir la foto de nuevo.
  let currentColorClusters: ColorCluster[] = DEFAULT_COLOR_CLUSTERS;
  // A qué ola de color pertenece cada agente COLOR (0 para el resto de los
  // roles) — ver ShapeFormation.colorWave en shapes.ts.
  let currentColorWave: Uint8Array<ArrayBufferLike> = new Uint8Array(0);
  // Rol (detalle/color) y vigas de relación de cada agente — solo tienen
  // sentido mientras se está formando una figura; en reposo el enjambre
  // está oculto así que el contenido no importa visualmente.
  let currentRoles: Uint8Array<ArrayBufferLike> = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
  let currentRelationSpans: Float32Array = new Float32Array(state.count * 6);
  // Punto final (fijo) de cada agente si hay una figura formada; en reposo
  // queda todo en cero. Le permite a nanobot-mesh.ts dibujar cada nanobot
  // exactamente ahí una vez asentado.
  let currentFormationTargets: Float32Array = new Float32Array(state.count * 3);

  // Figura activa de Nanobots (null en reposo) — sus `points` son el
  // destino final que persigue el vuelo por capas de renderNanobotsAt.
  let currentFormation: ShapeFormation | null = null;

  // Animación de Nanobots al formar (Fase 19): sin física de convergencia
  // — ver NANOBOT_*/renderNanobotsAt más abajo. Espeja el ciclo de vida de
  // MicrobotPhase: "forming" sube `nanobotElapsed` de 0 a
  // `nanobotPlan.totalDuration` (una capa detrás de otra, cada una con salida
  // escalonada por agente), "settled" no recalcula nada cuadro a cuadro,
  // "retracting" revierte el mismo camino (las capas posteriores se
  // repliegan primero, orden inverso del armado).
  type NanobotPhase = "idle" | "forming" | "settled" | "retracting";
  let nanobotPhase: NanobotPhase = "idle";
  let nanobotElapsed = 0;
  // Cantidad de agentes que tiene la animación EN CURSO — capturada al
  // arrancar (startFormation), no `state.count` en vivo: si el usuario
  // cambia la cantidad de nanobots a mitad de un repliegue, no se toca
  // (ver applyCount), así que el buffer de destino sigue siendo válido
  // hasta que el repliegue termine solo.
  let nanobotAnimCount = 0;
  // Reparto por capas de la figura activa (qué capa le toca a cada agente,
  // su escalonado dentro de la capa, y adónde viaja la "bola" de la 1ra
  // ola de Color). Lo calcula planLayers() en core/kinematics.ts.
  let nanobotPlan: LayerPlan = {
    layerOf: new Uint8Array(0),
    delayFraction: new Float32Array(0),
    layerCount: 1,
    totalDuration: NANOBOT_LAYER_DURATION,
    wave0Landing: [...FORMATION_CENTER],
  };
  const nanobotRenderPositions = new Float32Array(MAX_NANOBOTS * 3);

  // Microbots (Fase 15/16): exoesqueleto denso e independiente de la
  // física Wasm — se anima con un lanzamiento en vórtice propio (ver
  // constantes MICROBOT_SWIRL_*/renderMicrobotsAt) en vez de simularse.
  // Los Nanobots esperan a que termine (`pendingFormation`) antes de
  // empezar a moverse, para que el exoesqueleto ya esté sólido cuando
  // Nanobots llegue a alinearse/rellenar encima.
  type MicrobotPhase = "hidden" | "launching" | "settled" | "retracting";
  let microbotPhase: MicrobotPhase = "hidden";
  let microbotCount = Math.min(state.microbotCount, MAX_MICROBOTS);
  let microbotExo: Exoskeleton | null = null;
  let microbotElapsed = 0;
  // Buffers reusados cuadro a cuadro (nodos y vigas) — evita asignar
  // Float32Array nuevos por frame con decenas de miles de elementos.
  const microbotRenderPoints = new Float32Array(MAX_MICROBOTS * 3);
  const microbotRenderRelationSpans = new Float32Array(MAX_MICROBOTS * 6);
  // Formación de Nanobots que espera a que el exoesqueleto de Microbots
  // termine de asentarse antes de arrancar (ver setMode/animate()).
  let pendingFormation: { shapeName: string; colorClusters: ColorCluster[] } | null = null;
  // Instante del click en "Formar objeto", para medir el tiempo total de
  // construcción (ver metrics.mark("formacionMs") en animate()).
  let formationStartedAt: number | null = null;
  // Cantidad de Nanobots pedida mientras había un repliegue en curso: se
  // aplica al terminar, no en el medio (ver applyCount).
  let pendingCount: number | null = null;

  function computeMicrobotTargets(): void {
    microbotExo = buildExoskeleton(currentShapeName ?? "", microbotCount, FORMATION_CENTER);
  }

  // Dibuja el exoesqueleto de Microbots en el progreso `eased` (0=núcleo,
  // 1=posición final) y lo manda al mesh. La matemática vive en
  // core/kinematics.ts; acá solo queda el cableado con el estado vivo.
  function renderMicrobotsAt(eased: number): void {
    if (!microbotExo) return;
    const { points, relationSpans, isBeam } = microbotExo;
    writeMicrobotFrame(
      microbotRenderPoints,
      microbotRenderRelationSpans,
      points,
      relationSpans,
      isBeam,
      microbotCount,
      reactorCenter,
      swirlAxes,
      eased,
      MICROBOT_SWIRL_TURNS,
      MICROBOT_SWIRL_MAX_RADIUS,
    );
    microbotMesh.updateFromPositions(microbotRenderPoints, microbotCount, isBeam, microbotRenderRelationSpans);
  }

  // Qué capa (0=Detalle, 1+colorWave=ola de Color) está activa/animando —
  // compartida entre renderNanobotsAt y la visibilidad/grayscale en
  // animate()/applyCount, para que ambas coincidan siempre.
  function nanobotLayerIndexAt(elapsed: number): number {
    return layerIndexAt(elapsed, nanobotPlan.layerCount, NANOBOT_LAYER_DURATION);
  }

  // Dibuja la animación de Nanobots en el progreso `elapsed` (0..
  // nanobotPlan.totalDuration) en `nanobotRenderPositions`: capa por capa
  // (Detalle, luego cada ola de Color), y DENTRO de cada capa cada agente
  // vuela individualmente del núcleo a su punto final con su propio
  // instante de salida (`nanobotDelayFraction`) — un enjambre que fluye y
  // se asienta progresivamente, no un bloque sincronizado. Los agentes de
  // capas ya asentadas quedan exactos en su target (sin recalcular
  // trigonometría); los de capas futuras se quedan en el núcleo (ocultos
  // por `visibleRoles`/`revealedColorWaves`, ver animate()).
  function renderNanobotsAt(elapsed: number): void {
    if (!currentFormation) return;
    writeNanobotFrame(
      nanobotRenderPositions,
      currentFormation.points,
      nanobotAnimCount,
      nanobotPlan,
      reactorCenter,
      swirlAxes,
      elapsed,
    );
  }

  function applyParams() {
    // La física boid ahora corre SOLO en reposo (Fase 18) — al formar una
    // figura, los Nanobots se mueven por la animación scripted de
    // renderNanobotsAt, así que ya no hace falta atenuar cohesión/
    // separación/alineación ni subir el seek: swarm.step(dt) directamente
    // no se llama mientras se forma (ver animate()).
    swarm.setParams({
      cohesion: state.cohesion,
      separation: state.separation,
      alignment: state.alignment,
      maxSpeed: state.maxSpeed,
      seekWeight: IDLE_SEEK_WEIGHT,
    });
  }

  function applyIdleTargets() {
    swarm.setAgentTargets(idleCluster(state.count, reactorCenter));
    currentRoles = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
    currentRelationSpans = new Float32Array(state.count * 6);
    currentFormationTargets = new Float32Array(state.count * 3);
  }

  // Calcula la figura completa y arma el revelado por capas (Detalle,
  // luego cada ola de Color en orden) para animar desde `nanobotElapsed =
  // 0`: `nanobotLayerOf[i]` es la capa de cada agente, `nanobotDelayFraction[i]`
  // su posición relativa (0..1) dentro de esa capa (agentes de una misma
  // capa ya salen contiguos de `write()` en formShapeWithRoles, así que un
  // contador por capa alcanza, sin ordenar nada).
  function startFormation(name: string, colorClusters: ColorCluster[]): void {
    const formation = formShapeWithRoles(name, state.count, FORMATION_CENTER, colorClusters);
    if (!formation) return;
    currentFormation = formation;
    currentRoles = formation.roles;
    currentRelationSpans = formation.relationSpans;
    currentFormationTargets = formation.points;
    currentColorWave = formation.colorWave;
    currentColorClusters = colorClusters;
    nanobotAnimCount = state.count;
    nanobotPlan = planLayers(
      formation.roles,
      formation.colorWave,
      formation.points,
      state.count,
      formation.colorWaveCount,
      NANOBOT_ROLE.COLOR,
      NANOBOT_LAYER_DURATION,
      FORMATION_CENTER,
    );

    // formation.colorClusters es un eco de `colorClusters` para casi todas
    // las formas (derivados de la foto adjuntada), pero para "cabeza"
    // (Fase 21) son los 4 tonos fijos por parte anatómica (piel/cabello/
    // ojos/labios) en vez de la foto — shapes.ts decide cuál corresponde,
    // acá solo se lee el resultado.
    swarmMesh.setColorClusters(formation.colorClusters);
  }

  // Transición de modo: recalcula los targets del enjambre (reposo o
  // figura), ajusta la fuerza de seek acorde, y muestra/oculta el enjambre
  // (en reposo "está dentro" del núcleo, no se dibuja). Al formar, los
  // Nanobots quedan pendientes (`pendingFormation`) hasta que el
  // exoesqueleto de Microbots termine su ease-in (ver animate()).
  function setMode(next: Mode, shapeName?: string, colorClusters?: ColorCluster[]) {
    formationStartedAt = next === "forming" && shapeName ? performance.now() : null;
    mode = next;
    pendingFormation = null;
    currentFormation = null;
    nanobotPhase = "idle";
    nanobotElapsed = 0;
    applyIdleTargets();
    swarmMesh.setVisible(false);
    swarmMesh.setSkeletonGrayscale(false);
    if (next === "forming" && shapeName) {
      currentShapeName = shapeName;
      currentColorClusters = colorClusters ?? DEFAULT_COLOR_CLUSTERS;
      pendingFormation = { shapeName, colorClusters: currentColorClusters };
      computeMicrobotTargets();
      // Si veníamos de un repliegue EN CURSO, se retoma el lanzamiento
      // desde donde quedó en vez de reiniciar en 0: resetear acá hacía que
      // todo el exoesqueleto saltara de golpe al núcleo (teletransporte
      // visible) en vez de seguir hacia afuera. El morphing completo entre
      // dos figuras (interpolar desde las posiciones actuales hacia los
      // nuevos destinos) es la Fase 7 del brief; esto solo saca el salto.
      if (microbotPhase !== "retracting") microbotElapsed = 0;
      microbotPhase = "launching";
      microbotMesh.setVisible(true);
    } else {
      currentShapeName = null;
      microbotExo = null;
      microbotPhase = "hidden";
      microbotElapsed = 0;
      microbotMesh.setVisible(false);
    }
    applyParams();
  }

  // Botón "Volver al núcleo": si hay una figura formada, repliega Microbots
  // Y Nanobots por el mismo camino que salieron pero al revés (ver
  // animate()); si ya está en reposo, es un no-op seguro. `currentFormation`
  // se conserva a propósito (no se limpia acá) — renderNanobotsAt lo
  // necesita hasta que el repliegue termine solo.
  function returnToCore(): void {
    if (mode !== "forming") {
      setMode("idle");
      return;
    }
    mode = "idle";
    currentShapeName = null;
    pendingFormation = null;
    if (microbotPhase === "launching" || microbotPhase === "settled") {
      microbotPhase = "retracting";
    }
    if (nanobotPhase === "forming" || nanobotPhase === "settled") {
      nanobotPhase = "retracting";
    }
  }

  // `swarm.init()` reasigna (y reinicializa) el buffer de targets en C++,
  // así que tras cambiar la cantidad hay que reescribir el target activo.
  // Si Nanobots todavía está esperando al exoesqueleto de Microbots
  // (`pendingFormation`), no hay figura propia que reescribir todavía —
  // se queda en reposo con la nueva cantidad hasta que le toque su turno.
  // Mientras se repliega (`nanobotPhase === "retracting"`) no se toca nada
  // — `currentFormation`/`nanobotAnimCount` siguen siendo los del repliegue
  // en curso; se resetean solos al llegar al núcleo (ver animate()).
  function applyCount(count: number) {
    // Antes se hacía `swarm.init` + `setCount` y RECIÉN DESPUÉS se salía
    // si había un repliegue en curso: eso dejaba el buffer de Wasm en la
    // cantidad nueva mientras `nanobotAnimCount`/`currentRoles`/
    // `currentFormationTargets` seguían en la vieja, y `mesh.count` ya
    // apuntaba a la nueva (dibujando instancias con matrices viejas si el
    // conteo subía). Ahora el cambio se DIFIERE entero hasta que el
    // repliegue termina solo (ver animate()), que es el único momento en
    // que todos esos buffers se pueden reemplazar de forma consistente.
    if (nanobotPhase === "retracting") {
      pendingCount = count;
      return;
    }
    state.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
    if (mode === "forming" && currentShapeName && !pendingFormation) {
      const wasSettled = nanobotPhase === "settled";
      startFormation(currentShapeName, currentColorClusters);
      if (wasSettled) {
        nanobotPhase = "settled";
        nanobotElapsed = nanobotPlan.totalDuration;
        renderNanobotsAt(nanobotElapsed);
        swarmMesh.setSkeletonGrayscale(nanobotPlan.layerCount > 1);
        swarmMesh.updateFromPositions(
          nanobotRenderPositions,
          nanobotAnimCount,
          currentRoles,
          currentRelationSpans,
          currentFormationTargets,
          ALL_ROLES_VISIBLE,
          currentColorWave,
          nanobotPlan.layerCount - 1,
        );
      }
      // Si seguía "forming", continúa animando desde el progreso actual con
      // los nuevos targets (mismo patrón que applyMicrobotCount).
    } else {
      applyIdleTargets();
    }
  }

  // Cambia la cantidad de Microbots: si el exoesqueleto ya está asentado
  // (Nanobots ya está rellenando), se recalcula y se dibuja directo en su
  // posición final (sin repetir el lanzamiento en vórtice); si todavía
  // está en pleno lanzamiento, sigue animando normalmente con el nuevo
  // conteo desde el progreso actual.
  function applyMicrobotCount(count: number): void {
    microbotCount = Math.min(count, MAX_MICROBOTS);
    state.microbotCount = microbotCount;
    if (microbotPhase !== "launching" && microbotPhase !== "settled") return;
    computeMicrobotTargets();
    if (microbotPhase === "settled") renderMicrobotsAt(1);
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
    onFormShape: (shapeName: string, colorClusters: ColorCluster[]) => setMode("forming", shapeName, colorClusters),
    onReturnToCore: () => returnToCore(),
    onMicrobotCountChange: applyMicrobotCount,
  });

  let lastTime = performance.now();

  // El re-agendado va al FINAL y dentro de try/finally. Antes era la
  // primera sentencia del cuerpo: si algo tiraba, el siguiente cuadro ya
  // estaba agendado y la excepción se repetía 60 veces por segundo,
  // inundando la consola y tapando el error original. Ahora un fallo
  // detiene el loop y se reporta una sola vez.
  let loopRunning = true;

  function animate() {
    try {
      renderFrame();
    } catch (err) {
      loopRunning = false;
      console.error("Error en el loop de animación; se detiene el render:", err);
    } finally {
      if (loopRunning) requestAnimationFrame(animate);
    }
  }

  function renderFrame() {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    renderer.info.reset();

    reactor.update(dt);
    controls.update(); // necesario por el damping de OrbitControls

    // Microbots: lanzamiento/repliegue en vórtice (sin física Wasm, ver
    // renderMicrobotsAt) — sube durante el lanzamiento, baja durante el
    // repliegue, misma duración en ambos sentidos. Nanobots espera a que
    // el lanzamiento termine (`pendingFormation`) antes de arrancar su
    // propio revelado, así el exoesqueleto ya está sólido cuando Nanobots
    // empieza a alinearse/rellenar encima. Una vez "settled" no hace falta
    // recalcular nada cuadro a cuadro — el buffer de instancias ya quedó
    // en su posición final.
    if (microbotPhase === "launching" || microbotPhase === "retracting") {
      const direction = microbotPhase === "launching" ? 1 : -1;
      microbotElapsed = Math.min(Math.max(microbotElapsed + direction * dt, 0), MICROBOT_EXO_DURATION);
      renderMicrobotsAt(easeInOutCubic(microbotElapsed / MICROBOT_EXO_DURATION));
      if (microbotPhase === "launching" && microbotElapsed >= MICROBOT_EXO_DURATION) {
        microbotPhase = "settled";
        if (pendingFormation) {
          const { shapeName, colorClusters } = pendingFormation;
          pendingFormation = null;
          startFormation(shapeName, colorClusters);
          nanobotPhase = "forming";
          nanobotElapsed = 0;
          swarmMesh.setVisible(true);
        }
      } else if (microbotPhase === "retracting" && microbotElapsed <= 0) {
        microbotPhase = "hidden";
        microbotExo = null;
        microbotMesh.setVisible(false);
      }
    }

    // Nanobots: física boid SOLO en reposo (Fase 19) — al formar/replegar,
    // la posición la maneja por completo la animación scripted por capas
    // (renderNanobotsAt) y su reverso, sin tocar swarm.step(dt) en
    // absoluto (ver applyParams/startFormation). Una vez "settled" no hace
    // falta recalcular ni redibujar nada cuadro a cuadro — el buffer de
    // instancias ya quedó en su posición final.
    if (nanobotPhase === "forming" || nanobotPhase === "retracting") {
      const direction = nanobotPhase === "forming" ? 1 : -1;
      nanobotElapsed = Math.min(Math.max(nanobotElapsed + direction * dt, 0), nanobotPlan.totalDuration);
      renderNanobotsAt(nanobotElapsed);
      const layerIndex = nanobotLayerIndexAt(nanobotElapsed);
      // Detalle se pasa a gris apenas arranca la primera ola de Color
      // (capa 1), para que el color real de la foto termine predominando
      // en vez de competir con el verde fijo del rol.
      swarmMesh.setSkeletonGrayscale(layerIndex >= 1);
      formingRoleVisibility[3] = layerIndex >= 1;
      swarmMesh.updateFromPositions(
        nanobotRenderPositions,
        nanobotAnimCount,
        currentRoles,
        currentRelationSpans,
        currentFormationTargets,
        formingRoleVisibility,
        currentColorWave,
        layerIndex,
      );
      if (nanobotPhase === "forming" && nanobotElapsed >= nanobotPlan.totalDuration) {
        nanobotPhase = "settled";
        // "Tiempo de construcción" del brief: desde el click en "Formar
        // objeto" hasta que la última ola de color termina de asentarse
        // (incluye el lanzamiento del exoesqueleto de Microbots).
        if (formationStartedAt !== null) {
          metrics.mark("formacionMs", performance.now() - formationStartedAt);
          formationStartedAt = null;
        }
      } else if (nanobotPhase === "retracting" && nanobotElapsed <= 0) {
        nanobotPhase = "idle";
        currentFormation = null;
        swarmMesh.setVisible(false);
        // Un cambio de cantidad pedido durante el repliegue se aplica
        // recién acá, con todos los buffers ya libres (ver applyCount).
        // applyCount() rehace los targets de reposo por su cuenta.
        if (pendingCount !== null) {
          const next = pendingCount;
          pendingCount = null;
          applyCount(next);
        } else {
          applyIdleTargets();
        }
        applyParams();
      }
    } else if (nanobotPhase === "idle") {
      swarm.step(dt);
      swarmMesh.updateFromPositions(
        swarm.getPositions(),
        swarm.getCount(),
        currentRoles,
        currentRelationSpans,
        currentFormationTargets,
        ALL_ROLES_VISIBLE,
        currentColorWave,
        0,
      );
    }
    // nanobotPhase === "settled": nada que hacer, el frame anterior ya
    // dejó el buffer de instancias en su posición final.

    composer.render();

    // Se mide el trabajo real del cuadro (JS + envío de dibujado), no el
    // intervalo entre cuadros: ese intervalo lo fija el vsync y taparía
    // cualquier mejora mientras sobre presupuesto.
    metrics.sampleFrame(performance.now() - now);
    metrics.setAgentCounts(
      nanobotPhase === "idle" ? swarm.getCount() : nanobotAnimCount,
      microbotPhase === "hidden" ? 0 : microbotCount,
    );
    metrics.setRenderInfo(renderer.info.render.calls, renderer.info.render.triangles);
  }

  requestAnimationFrame(animate);
}

main().catch((err) => {
  console.error("Error inicializando el simulador de nanobots:", err);
});
