import { createScene } from "./scene";
import { createNanobotSwarmMesh } from "./nanobot-mesh";
import { Swarm } from "./swarm";
import { createReactor } from "./reactor";
import {
  formShapeWithRoles,
  idleCluster,
  FORMATION_CENTER,
  NANOBOT_ROLE,
  type ShapeFormation,
} from "./shapes";
import { createControlPanel, type UiState } from "./ui";
import { loadConfig, saveConfig, type SwarmConfig } from "./config-client";

const MAX_NANOBOTS = 10000;

// Seek más suave en reposo (cluster orgánico alrededor del núcleo) y más
// fuerte al formar una figura (para que se vea nítida pese al ruido de
// cohesión/separación entre agentes).
const IDLE_SEEK_WEIGHT = 0.5;
const FORMING_SEEK_WEIGHT = 3.5;

// Revelado por fases al formar una figura: primero ESTRUCTURA, luego
// RELACION, por último DETALLE. En vez de un tiempo fijo (el viaje real
// desde el núcleo hasta el punto de formación puede tardar varios segundos
// según la distancia/velocidad), se espera a que el grupo recién revelado
// esté razonablemente cerca de su posición final (distancia promedio por
// debajo de PHASE_SETTLE_DISTANCE) antes de soltar al siguiente — con un
// tope de tiempo (PHASE_MAX_SECONDS) para no quedarse trabado si nunca
// converge del todo.
const PHASE_MIN_HOLD_SECONDS = 0.5;
const PHASE_SETTLE_DISTANCE = 1.2;
const PHASE_MAX_SECONDS = 5;
const PHASE_COUNT = 3;

// Animación de regreso al núcleo: cada nanobot espera su turno (en fila,
// por índice) y luego recorre una espiral (radio decreciente + giro)
// convergiendo al núcleo, en vez de simplemente reasignar el target y dejar
// que el boid físico lo persiga como cualquier otro movimiento.
const RETURN_SPIRAL_DURATION = 2.4;
const RETURN_QUEUE_SPAN = 2.2;
const RETURN_SPIRAL_TURNS = 2.5;

const DEFAULT_STATE: UiState = {
  count: 80,
  cohesion: 0.8,
  separation: 1.5,
  alignment: 0.6,
  maxSpeed: 4,
  seekWeight: IDLE_SEEK_WEIGHT,
};

type Mode = "idle" | "forming";
type RoleVisibility = readonly [boolean, boolean, boolean];
const ALL_ROLES_VISIBLE: RoleVisibility = [true, true, true];

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
  const { scene, camera, renderer, controls } = createScene(container);

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
  // Rol (estructura/relación/detalle) y vigas de relación de cada agente —
  // solo tienen sentido mientras se está formando una figura; en reposo el
  // enjambre está oculto así que el contenido no importa visualmente.
  let currentRoles: Uint8Array<ArrayBufferLike> = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
  let currentRelationSpans: Float32Array = new Float32Array(state.count * 6);

  // Formado por fases: la figura completa ya está calculada, pero solo se
  // "revelan" (se les asigna el target real y se dibujan) los agentes cuyo
  // rol ya salió del núcleo — el resto sigue con target de idleCluster.
  let currentFormation: ShapeFormation | null = null;
  let idlePointsForFormation: Float32Array = new Float32Array(0);
  let formationPhase = 0; // cuántos roles ya salieron (0..PHASE_COUNT)
  let phaseTimer = 0;

  let returnAnimation: ReturnAnimation | null = null;

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
    currentRoles = new Uint8Array(state.count).fill(NANOBOT_ROLE.DETAIL);
    currentRelationSpans = new Float32Array(state.count * 6);
  }

  // Mezcla los targets: los agentes cuyo rol ya fue revelado (role <
  // formationPhase) van a su punto real de la figura; el resto se queda
  // esperando en su punto de idle, como si siguiera "dentro" del núcleo.
  function applyPhaseTargets(): void {
    if (!currentFormation) return;
    const count = state.count;
    const { points, roles } = currentFormation;
    const mixed = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const revealed = roles[i] < formationPhase;
      const src = revealed ? points : idlePointsForFormation;
      mixed[i * 3 + 0] = src[i * 3 + 0];
      mixed[i * 3 + 1] = src[i * 3 + 1];
      mixed[i * 3 + 2] = src[i * 3 + 2];
    }
    swarm.setAgentTargets(mixed);
  }

  // ¿El grupo que acaba de salir (rol `formationPhase - 1`) ya llegó lo
  // bastante cerca de su posición final como para soltar al siguiente?
  function isPhaseGroupSettled(): boolean {
    if (!currentFormation) return true;
    const roleJustRevealed = formationPhase - 1;
    const { points, roles } = currentFormation;
    const positions = swarm.getPositions();
    let sum = 0;
    let n = 0;
    for (let i = 0; i < state.count; i++) {
      if (roles[i] !== roleJustRevealed) continue;
      const dx = positions[i * 3 + 0] - points[i * 3 + 0];
      const dy = positions[i * 3 + 1] - points[i * 3 + 1];
      const dz = positions[i * 3 + 2] - points[i * 3 + 2];
      sum += Math.sqrt(dx * dx + dy * dy + dz * dz);
      n++;
    }
    return n === 0 || sum / n < PHASE_SETTLE_DISTANCE;
  }

  function startFormation(name: string): void {
    const formation = formShapeWithRoles(name, state.count, FORMATION_CENTER);
    if (!formation) return;
    currentFormation = formation;
    currentRoles = formation.roles;
    currentRelationSpans = formation.relationSpans;
    idlePointsForFormation = idleCluster(state.count, reactorCenter);
    formationPhase = 1; // ESTRUCTURA sale de inmediato
    phaseTimer = 0;
    applyPhaseTargets();
  }

  // Transición de modo: recalcula los targets del enjambre (reposo o
  // figura), ajusta la fuerza de seek acorde, y muestra/oculta el enjambre
  // (en reposo "está dentro" del núcleo, no se dibuja).
  function setMode(next: Mode, shapeName?: string) {
    mode = next;
    returnAnimation = null;
    if (next === "forming" && shapeName) {
      currentShapeName = shapeName;
      startFormation(shapeName);
      swarmMesh.setVisible(true);
    } else {
      currentShapeName = null;
      currentFormation = null;
      formationPhase = 0;
      applyIdleTargets();
      swarmMesh.setVisible(false);
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
    beginReturnAnimation();
  }

  // `swarm.init()` reasigna (y reinicializa) el buffer de targets en C++,
  // así que tras cambiar la cantidad hay que reescribir el target activo.
  function applyCount(count: number) {
    returnAnimation = null;
    state.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
    if (mode === "forming" && currentShapeName) startFormation(currentShapeName);
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
    onReturnToCore: () => returnToCore(),
  });

  let lastTime = performance.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    reactor.update(dt);
    controls.update(); // necesario por el damping de OrbitControls

    let visibleRoles: RoleVisibility = ALL_ROLES_VISIBLE;

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
      if (mode === "forming" && formationPhase < PHASE_COUNT) {
        phaseTimer += dt;
        const readyForNext =
          phaseTimer >= PHASE_MAX_SECONDS ||
          (phaseTimer >= PHASE_MIN_HOLD_SECONDS && isPhaseGroupSettled());
        if (readyForNext) {
          phaseTimer = 0;
          formationPhase++;
          applyPhaseTargets();
        }
      }
      if (mode === "forming") {
        visibleRoles = [0 < formationPhase, 1 < formationPhase, 2 < formationPhase];
      }
      swarm.step(dt);
    }

    const positions = swarm.getPositions();
    swarmMesh.updateFromPositions(positions, swarm.getCount(), currentRoles, currentRelationSpans, visibleRoles);

    renderer.render(scene, camera);
  }

  requestAnimationFrame(animate);
}

main().catch((err) => {
  console.error("Error inicializando el simulador de nanobots:", err);
});
