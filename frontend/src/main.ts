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

const MAX_NANOBOTS = 10000;
// Techo inicial de Microbots (Fase 15): sin física boid propia (ease-in
// puro en TS, ver animate()) y con render de escritura directa a buffer
// (microbot-mesh.ts) en vez de THREE.Object3D por instancia, el costo por
// agente es mucho menor que el de Nanobots — se parte de 6x el techo de
// Nanobots como punto de partida conservador (ver plan de Fase 15),
// ajustable acá si la verificación visual real sugiere subir/bajar.
const MAX_MICROBOTS = 60000;
// Duración fija del ease-in del exoesqueleto de Microbots: no depende de
// física (no hay nada que "asentar"), así que es un tiempo fijo en vez del
// mecanismo de asentamiento sostenido que usa el resto de las fases.
const MICROBOT_EXO_DURATION = 1.6;

// Seek más suave en reposo (cluster orgánico alrededor del núcleo) y más
// fuerte al formar una figura (para que se vea nítida pese al ruido de
// cohesión/separación entre agentes).
const IDLE_SEEK_WEIGHT = 0.5;
const FORMING_SEEK_WEIGHT = 3.5;
// Cuánto se atenúan cohesión/separación/alineación mientras se forma una
// figura (ver applyParams) — casi apagadas, para que cada nanobot converja
// derecho a su target en vez de pelear con sus vecinos por el camino.
const FORMING_FLOCK_SCALE = 0.12;

// Revelado por fases al formar una figura: ESTRUCTURA, luego RELACION,
// luego DETALLE y por último una sub-fase por cada "ola" de COLOR (un
// cluster de color de la foto, ver image-color.ts pickColorClusters) —
// fase 0/1/2 son siempre ESTRUCTURA/RELACION/DETALLE, y de la fase 3 en
// adelante cada una es una ola de color distinta (ver colorPhaseCount,
// recalculado en cada startFormation según cuántos colores tenga la foto).
// En vez de un tiempo fijo (el viaje real desde el núcleo hasta el punto
// de formación puede tardar varios segundos según la distancia/velocidad),
// se espera a que el grupo recién revelado esté cerca de su posición final
// (distancia promedio por debajo de PHASE_SETTLE_DISTANCE) y se QUEDE así
// de forma sostenida —no un instante fugaz— durante
// PHASE_SETTLE_HOLD_SECONDS antes de soltar al siguiente, así da tiempo
// real a ver cada capa/ola ya sincronizada con la anterior antes de que
// aparezca la próxima. Con un tope de tiempo (PHASE_MAX_SECONDS) para no
// quedarse trabado si nunca converge del todo.
const PHASE_MIN_HOLD_SECONDS = 0.5;
const PHASE_SETTLE_DISTANCE = 0.6;
const PHASE_SETTLE_HOLD_SECONDS = 1;
const PHASE_MAX_SECONDS = 7;
const SKELETON_PHASES = 3; // ESTRUCTURA(0), RELACION(1), DETALLE(2)

// Animación de regreso al núcleo: cada nanobot espera su turno (en fila,
// por índice) y luego recorre una espiral (radio decreciente + giro)
// convergiendo al núcleo, en vez de simplemente reasignar el target y dejar
// que el boid físico lo persiga como cualquier otro movimiento.
const RETURN_SPIRAL_DURATION = 2.4;
const RETURN_QUEUE_SPAN = 2.2;
const RETURN_SPIRAL_TURNS = 2.5;

const DEFAULT_STATE: UiState = {
  count: 80,
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

interface ReturnAnimation {
  startAngle: Float32Array;
  startRadius: Float32Array;
  startY: Float32Array;
  delay: Float32Array;
  elapsed: number;
  count: number;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

async function main() {
  const container = document.getElementById("app")!;
  const { scene, composer, controls } = createScene(container);

  const swarmMesh = createNanobotSwarmMesh(MAX_NANOBOTS);
  scene.add(swarmMesh.group);

  const microbotMesh = createMicrobotSwarmMesh(MAX_MICROBOTS);
  microbotMesh.setVisible(false);
  scene.add(microbotMesh.group);

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
  // Olas de color (clusters RGB + peso) de la última foto adjuntada, para
  // el rol COLOR — se reaplican si hace falta rearmar la figura (p.ej. al
  // cambiar la cantidad de nanobots) sin pedir la foto de nuevo.
  let currentColorClusters: ColorCluster[] = DEFAULT_COLOR_CLUSTERS;
  // A qué ola de color pertenece cada agente COLOR (0 para el resto de los
  // roles) — ver ShapeFormation.colorWave en shapes.ts.
  let currentColorWave: Uint8Array<ArrayBufferLike> = new Uint8Array(0);
  // Fases totales de la formación activa: SKELETON_PHASES + 1 fase por
  // cada ola de color (mínimo 1) — se recalcula en cada startFormation.
  let phaseCount = SKELETON_PHASES + 1;
  // Rol (estructura/relación/detalle) y vigas de relación de cada agente —
  // solo tienen sentido mientras se está formando una figura; en reposo el
  // enjambre está oculto así que el contenido no importa visualmente.
  let currentRoles: Uint8Array<ArrayBufferLike> = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
  let currentRelationSpans: Float32Array = new Float32Array(state.count * 6);
  // Punto final (fijo) de cada agente si hay una figura formada; en reposo
  // queda todo en cero. Le permite a nanobot-mesh.ts dibujar cada nanobot
  // exactamente ahí (sin el micro-temblor residual de la física) una vez
  // que llega, en vez de perseguir su posición física para siempre.
  let currentFormationTargets: Float32Array = new Float32Array(state.count * 3);

  // Formado por fases: la figura completa ya está calculada, pero solo se
  // "revelan" (se les asigna el target real y se dibujan) los agentes cuyo
  // rol ya salió del núcleo — el resto sigue con target de idleCluster.
  let currentFormation: ShapeFormation | null = null;
  let idlePointsForFormation: Float32Array = new Float32Array(0);
  let formationPhase = 0; // cuántas fases ya salieron (0..phaseCount)
  let phaseTimer = 0;
  let settledStreak = 0; // segundos consecutivos que el grupo revelado lleva asentado

  let returnAnimation: ReturnAnimation | null = null;

  // Microbots (Fase 15): exoesqueleto denso e independiente de la física
  // Wasm — se anima con un simple ease-in (posición inicial de reposo ->
  // posición final del exoesqueleto) en vez de simularse. Los Nanobots
  // esperan a que este ease-in termine (`pendingFormation`) antes de
  // empezar a moverse, para que el exoesqueleto ya esté sólido cuando
  // Nanobots llegue a alinearse/rellenar encima.
  let microbotCount = Math.min(state.microbotCount, MAX_MICROBOTS);
  let microbotExo: Exoskeleton | null = null;
  let microbotIdlePoints: Float32Array = new Float32Array(0);
  let microbotElapsed = 0;
  // Buffer reusado cuadro a cuadro para la posición interpolada — evita
  // asignar un Float32Array nuevo por frame con decenas de miles de
  // elementos (ver animate()).
  const microbotRenderPoints = new Float32Array(MAX_MICROBOTS * 3);
  // Formación de Nanobots que espera a que el exoesqueleto de Microbots
  // termine de asentarse antes de arrancar (ver setMode/animate()).
  let pendingFormation: { shapeName: string; colorClusters: ColorCluster[] } | null = null;

  function computeMicrobotTargets(): void {
    microbotExo = buildExoskeleton(currentShapeName ?? "", microbotCount, FORMATION_CENTER);
    microbotIdlePoints = idleCluster(microbotCount, reactorCenter);
    microbotElapsed = 0;
  }

  function applyParams() {
    const forming = mode === "forming";
    // Al formar una figura, la nube de puntos (shapes.ts) ya define la
    // forma completa — la cohesión/separación/alineación entre vecinos deja
    // de aportar y, a full potencia, compite contra el seek fuerte hacia el
    // target propio, generando un temblor errático en vez de una
    // convergencia prolija y coordinada. Se atenúan mucho (no se apagan del
    // todo, para conservar algo de evasión de colisiones) mientras se está
    // formando; en reposo se dejan tal cual las controla el usuario.
    const flock = forming ? FORMING_FLOCK_SCALE : 1;
    swarm.setParams({
      cohesion: state.cohesion * flock,
      separation: state.separation * flock,
      alignment: state.alignment * flock,
      maxSpeed: state.maxSpeed,
      seekWeight: forming ? FORMING_SEEK_WEIGHT : IDLE_SEEK_WEIGHT,
    });
  }

  function applyIdleTargets() {
    swarm.setAgentTargets(idleCluster(state.count, reactorCenter));
    currentRoles = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
    currentRelationSpans = new Float32Array(state.count * 6);
    currentFormationTargets = new Float32Array(state.count * 3);
  }

  // A qué fase de revelado (0..phaseCount-1) pertenece el agente `i`: los
  // primeros 3 roles son 1 fase cada uno; dentro de COLOR, cada ola de
  // color es su propia fase (SKELETON_PHASES + colorWave).
  function revealPhaseOf(i: number): number {
    const role = currentRoles[i];
    return role < SKELETON_PHASES ? role : SKELETON_PHASES + currentColorWave[i];
  }

  // Mezcla los targets: los agentes cuya fase ya fue revelada (< formationPhase)
  // van a su punto real de la figura; el resto se queda esperando en su
  // punto de idle, como si siguiera "dentro" del núcleo.
  function applyPhaseTargets(): void {
    if (!currentFormation) return;
    const count = state.count;
    const { points } = currentFormation;
    const mixed = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const revealed = revealPhaseOf(i) < formationPhase;
      const src = revealed ? points : idlePointsForFormation;
      mixed[i * 3 + 0] = src[i * 3 + 0];
      mixed[i * 3 + 1] = src[i * 3 + 1];
      mixed[i * 3 + 2] = src[i * 3 + 2];
    }
    swarm.setAgentTargets(mixed);
  }

  // ¿El grupo que acaba de salir (fase `formationPhase - 1`) está cerca de
  // su posición final EN ESTE INSTANTE? (el llamador exige que esto se
  // mantenga cierto por PHASE_SETTLE_HOLD_SECONDS seguidos antes de soltar
  // a la siguiente fase — ver settledStreak en animate()).
  function isPhaseGroupSettled(): boolean {
    if (!currentFormation) return true;
    const phaseJustRevealed = formationPhase - 1;
    const { points } = currentFormation;
    const positions = swarm.getPositions();
    let sum = 0;
    let n = 0;
    for (let i = 0; i < state.count; i++) {
      if (revealPhaseOf(i) !== phaseJustRevealed) continue;
      const dx = positions[i * 3 + 0] - points[i * 3 + 0];
      const dy = positions[i * 3 + 1] - points[i * 3 + 1];
      const dz = positions[i * 3 + 2] - points[i * 3 + 2];
      sum += Math.sqrt(dx * dx + dy * dy + dz * dz);
      n++;
    }
    return n === 0 || sum / n < PHASE_SETTLE_DISTANCE;
  }

  function startFormation(name: string, colorClusters: ColorCluster[]): void {
    const formation = formShapeWithRoles(name, state.count, FORMATION_CENTER, colorClusters);
    if (!formation) return;
    currentFormation = formation;
    currentRoles = formation.roles;
    currentRelationSpans = formation.relationSpans;
    currentFormationTargets = formation.points;
    currentColorWave = formation.colorWave;
    idlePointsForFormation = idleCluster(state.count, reactorCenter);
    currentColorClusters = colorClusters;
    phaseCount = SKELETON_PHASES + formation.colorWaveCount;
    swarmMesh.setColorClusters(colorClusters);
    swarmMesh.setSkeletonGrayscale(false); // por si quedó gris de una figura anterior
    formationPhase = 1; // ESTRUCTURA sale de inmediato
    phaseTimer = 0;
    settledStreak = 0;
    applyPhaseTargets();
  }

  // Transición de modo: recalcula los targets del enjambre (reposo o
  // figura), ajusta la fuerza de seek acorde, y muestra/oculta el enjambre
  // (en reposo "está dentro" del núcleo, no se dibuja). Al formar, los
  // Nanobots quedan pendientes (`pendingFormation`) hasta que el
  // exoesqueleto de Microbots termine su ease-in (ver animate()).
  function setMode(next: Mode, shapeName?: string, colorClusters?: ColorCluster[]) {
    mode = next;
    returnAnimation = null;
    pendingFormation = null;
    currentFormation = null;
    formationPhase = 0;
    applyIdleTargets();
    swarmMesh.setVisible(false);
    if (next === "forming" && shapeName) {
      currentShapeName = shapeName;
      currentColorClusters = colorClusters ?? DEFAULT_COLOR_CLUSTERS;
      pendingFormation = { shapeName, colorClusters: currentColorClusters };
      computeMicrobotTargets();
      microbotMesh.setVisible(true);
    } else {
      currentShapeName = null;
      microbotExo = null;
      microbotMesh.setVisible(false);
    }
    applyParams();
  }

  // Captura las posiciones actuales y arma la animación de regreso: cada
  // nanobot espera su turno (en fila, por índice) y luego espirala hacia el
  // núcleo (radio decreciente + giro) en vez de saltar directo al target.
  function beginReturnAnimation(): void {
    const count = swarm.getCount();
    const positions = swarm.getPositions();
    const startAngle = new Float32Array(count);
    const startRadius = new Float32Array(count);
    const startY = new Float32Array(count);
    const delay = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const dx = positions[i * 3 + 0] - reactorCenter[0];
      const dz = positions[i * 3 + 2] - reactorCenter[2];
      startAngle[i] = Math.atan2(dz, dx);
      startRadius[i] = Math.hypot(dx, dz);
      startY[i] = positions[i * 3 + 1];
      delay[i] = count > 1 ? (i / (count - 1)) * RETURN_QUEUE_SPAN : 0;
    }
    returnAnimation = { startAngle, startRadius, startY, delay, elapsed: 0, count };
    swarmMesh.setVisible(true);
  }

  // Avanza la animación de regreso `dt` segundos, escribiendo directo sobre
  // el buffer de posiciones físicas (mismo patrón zero-copy que el resto).
  // Devuelve true cuando todos los agentes ya llegaron al núcleo.
  function stepReturnAnimation(dt: number): boolean {
    if (!returnAnimation) return true;
    returnAnimation.elapsed += dt;
    const { startAngle, startRadius, startY, delay, elapsed, count } = returnAnimation;
    const positions = swarm.getPositions();
    let allDone = true;
    for (let i = 0; i < count; i++) {
      const t = elapsed - delay[i];
      if (t <= 0) {
        allDone = false;
        continue; // todavía espera su turno en la fila
      }
      const p = Math.min(t / RETURN_SPIRAL_DURATION, 1);
      if (p < 1) allDone = false;
      const eased = easeInOutCubic(p);
      const radius = startRadius[i] * (1 - eased);
      const angle = startAngle[i] + eased * RETURN_SPIRAL_TURNS * Math.PI * 2;
      positions[i * 3 + 0] = reactorCenter[0] + Math.cos(angle) * radius;
      positions[i * 3 + 1] = startY[i] + (reactorCenter[1] - startY[i]) * eased;
      positions[i * 3 + 2] = reactorCenter[2] + Math.sin(angle) * radius;
    }
    return allDone;
  }

  // Botón "Volver al núcleo": si hay una figura formada, dispara la
  // animación espiral; si ya está en reposo, es un no-op seguro.
  function returnToCore(): void {
    if (mode !== "forming") {
      setMode("idle");
      return;
    }
    mode = "idle";
    currentShapeName = null;
    currentFormation = null;
    formationPhase = 0;
    pendingFormation = null;
    microbotExo = null;
    microbotMesh.setVisible(false);
    beginReturnAnimation();
  }

  // `swarm.init()` reasigna (y reinicializa) el buffer de targets en C++,
  // así que tras cambiar la cantidad hay que reescribir el target activo.
  // Si Nanobots todavía está esperando al exoesqueleto de Microbots
  // (`pendingFormation`), no hay figura propia que reescribir todavía —
  // se queda en reposo con la nueva cantidad hasta que le toque su turno.
  function applyCount(count: number) {
    returnAnimation = null;
    state.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
    if (mode === "forming" && currentShapeName && !pendingFormation) {
      startFormation(currentShapeName, currentColorClusters);
    } else {
      applyIdleTargets();
    }
  }

  // Cambia la cantidad de Microbots: si hay una figura en curso y el
  // exoesqueleto ya terminó su ease-in (Nanobots ya está rellenando), el
  // exoesqueleto se recalcula y se muestra directo en su posición final
  // (sin repetir la suspenso del ease-in); si todavía está pendiente, el
  // nuevo conteo simplemente sigue su ease-in normal.
  function applyMicrobotCount(count: number): void {
    microbotCount = Math.min(count, MAX_MICROBOTS);
    state.microbotCount = microbotCount;
    if (mode !== "forming") return;
    computeMicrobotTargets();
    if (!pendingFormation) microbotElapsed = MICROBOT_EXO_DURATION;
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

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    reactor.update(dt);
    controls.update(); // necesario por el damping de OrbitControls

    // Microbots: ease-in propio (sin física Wasm) del cluster de reposo al
    // exoesqueleto de la figura. Nanobots espera a que termine
    // (`pendingFormation`) antes de arrancar su propio revelado — así el
    // esqueleto ya está sólido cuando Nanobots empieza a alinearse encima.
    if (mode === "forming" && microbotExo) {
      microbotElapsed = Math.min(microbotElapsed + dt, MICROBOT_EXO_DURATION);
      const eased = easeInOutCubic(microbotElapsed / MICROBOT_EXO_DURATION);
      const exoPoints = microbotExo.points;
      for (let i = 0; i < microbotCount * 3; i++) {
        microbotRenderPoints[i] = microbotIdlePoints[i] + (exoPoints[i] - microbotIdlePoints[i]) * eased;
      }
      microbotMesh.updateFromPositions(microbotRenderPoints, microbotCount, microbotExo.isBeam, microbotExo.relationSpans);
      if (microbotElapsed >= MICROBOT_EXO_DURATION && pendingFormation) {
        const { shapeName, colorClusters } = pendingFormation;
        pendingFormation = null;
        startFormation(shapeName, colorClusters);
        swarmMesh.setVisible(true);
      }
    }

    let visibleRoles: RoleVisibility = ALL_ROLES_VISIBLE;
    let revealedColorWaves = 0;

    if (returnAnimation) {
      // Mientras dura la espiral de regreso, la física normal se pausa: la
      // posición la maneja por completo la animación (ver stepReturnAnimation).
      const done = stepReturnAnimation(dt);
      if (done) {
        returnAnimation = null;
        applyIdleTargets();
        applyParams();
        swarmMesh.setVisible(false);
      }
    } else {
      if (mode === "forming" && !pendingFormation && formationPhase < phaseCount) {
        phaseTimer += dt;
        settledStreak = isPhaseGroupSettled() ? settledStreak + dt : 0;
        const readyForNext =
          phaseTimer >= PHASE_MAX_SECONDS ||
          (phaseTimer >= PHASE_MIN_HOLD_SECONDS && settledStreak >= PHASE_SETTLE_HOLD_SECONDS);
        if (readyForNext) {
          phaseTimer = 0;
          settledStreak = 0;
          formationPhase++;
          applyPhaseTargets();
        }
      }
      if (mode === "forming") {
        revealedColorWaves = Math.max(0, formationPhase - SKELETON_PHASES);
        visibleRoles = [0 < formationPhase, 1 < formationPhase, 2 < formationPhase, revealedColorWaves > 0];
        // Apenas la primera ola de COLOR se revela (ya viajando desde el
        // núcleo hacia su posición), las otras 3 capas pierden su color de
        // rol fijo y pasan a gris: no desaparecen (DETALLE, recién bien
        // asentado, sigue ahí dando volumen), pero dejan de competir
        // visualmente con el color real de la foto, que termina
        // predominando apenas cada ola llega y cubre hasta el hueco más
        // chico que le toca.
        swarmMesh.setSkeletonGrayscale(revealedColorWaves > 0);
      }
      swarm.step(dt);
    }

    const positions = swarm.getPositions();
    swarmMesh.updateFromPositions(
      positions,
      swarm.getCount(),
      currentRoles,
      currentRelationSpans,
      currentFormationTargets,
      visibleRoles,
      currentColorWave,
      revealedColorWaves,
    );

    composer.render();
  }

  requestAnimationFrame(animate);
}

main().catch((err) => {
  console.error("Error inicializando el simulador de nanobots:", err);
});
