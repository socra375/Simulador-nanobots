import {
  formShapeWithRoles,
  buildExoskeleton,
  idleCluster,
  FORMATION_CENTER,
  NANOBOT_ROLE,
  type ShapeFormation,
  type Exoskeleton,
} from "../shapes";
import {
  DEFAULT_NANOBOT_TIMINGS,
  groupWindow,
  materialApex,
  planLayers,
  writeMicrobotFrame,
  writeNanobotFrame,
  type LayerPlan,
  type SwirlAxes,
  type Vec3,
} from "./kinematics";
import { DEFAULT_COLOR_CLUSTERS, type ColorCluster } from "../image-color";
import { AGENT_STATE, createAgentStore, type AgentStore } from "../swarm/agent-store";
import { createSwarmDirector, type SwarmDirector } from "../swarm/director";
import { BOT_TYPE, BOT_TYPE_COUNT } from "../swarm/bot-types";
import { getShape, shapeRevision } from "../shapes/registry";
import { validateCoverage, voxelizePoints, type VoxelGrid } from "../voxel/grid";
import { findComponents, type ComponentReport } from "../voxel/validate";
import { buildMorphSource } from "../voxel/correspondence";
import { buildMaterialMap, type MaterialMap } from "../material/material-map";
import {
  materialPhaseAt,
  materialTintIsStatic,
  planMaterialTimeline,
  writeMaterialTint,
  MATERIAL_PHASE,
  type MaterialPhase,
  type MaterialTimeline,
} from "../material/material-animation";
import { botVisual } from "../swarm/bot-config";

// Simulación del enjambre (Fase 27c).
//
// Hasta acá TODO el estado vivía dentro de un `main()` de 551 líneas sin
// un solo export: imposible de testear, e imposible de extender sin
// meterse dentro de esa closure. Este módulo lo saca afuera, con las
// dependencias inyectadas, para que el SwarmDirector, los agentes con
// estado y el morphing que vienen después tengan dónde engancharse.
//
// Lo que NO vive acá: escena, cámara, postprocesado, reactor y panel de
// control. Eso es presentación y sigue en main.ts.

// Fase 37: el exoesqueleto ya no sale de un saque, sale en dos grupos
// (nodos y después uniones). La duración sube porque ahora tiene que
// alcanzar para las dos ventanas más la cola de asentamiento; cada grupo
// vuela ~1,65 s, parecido a lo que tardaba antes el lanzamiento entero.
export const MICROBOT_EXO_DURATION = 3.4;
// Mismo problema y mismo trayecto de 18 unidades que el remolino de
// Nanobots: 1.4 era un 7,8% de desvío, invisible. Los Microbots giran un
// poco más abierto porque salen todos juntos y el vórtice es lo único que
// los separa visualmente durante el viaje.
const MICROBOT_SWIRL_TURNS = 2.2;
const MICROBOT_SWIRL_MAX_RADIUS = 5.0;
const NANOBOT_LAYER_DURATION = DEFAULT_NANOBOT_TIMINGS.layerDuration;

// Densidad de referencia con la que se voxeliza la figura "ideal" para
// medir cobertura (Fase 30). Tiene que ser bastante mayor que cualquier
// cantidad de nanobots razonable: si fuera parecida, la figura de
// referencia tendría los mismos huecos que el enjambre y la cobertura
// daría ~100% siempre, midiendo nada. Es un costo de UNA vez por
// formación, no por cuadro.
const COVERAGE_REFERENCE_COUNT = 40000;
const ORIGIN: readonly [number, number, number] = [0, 0, 0];

// Grilla de referencia por forma. Sirve para dos cosas: evita repetir
// 40.000 puntos en cada formación, y sobre todo hace que la cobertura sea
// COMPARABLE — los generadores tienen jitter aleatorio, así que dos
// llamadas a cubo(40000) voxelizan a un número de celdas levemente
// distinto (medido: ~0,4%). Sin el caché, comparar la cobertura a 300
// agentes contra la de 8.000 estaría midiendo también ese ruido de
// muestreo, no sólo la diferencia de cantidad.
//
// Es de módulo, no por simulación: la figura ideal depende de la FORMA,
// no de quién la está simulando. La clave incluye la revisión de la forma
// porque "escaneo" se re-registra en cada reconstrucción 3D (ver
// registerCustomScan) y la referencia vieja ya no describiría la figura.
const referenceGrids = new Map<string, VoxelGrid>();
// Tope del caché. Sin él crecía sin límite: hay 17 formas registradas y
// "escaneo" suma una entrada por cada reconstrucción 3D. A res 48 cada
// entrada son 216 KB, así que 24 entradas son ~5 MB — despreciable al
// lado del heap de 33,5 MB, y acotado. Se expulsa la más vieja (el Map de
// JS conserva el orden de inserción), que para este uso es la forma que
// hace más tiempo que no se pide.
const REFERENCE_GRID_CACHE_MAX = 24;

// La física boid corre SOLO en reposo (Fase 18), así que este peso de
// seek es el único que se usa: al formar, la posición la maneja por
// completo la animación scripted.
export const IDLE_SEEK_WEIGHT = 0.5;

type RoleVisibility = readonly [boolean, boolean];
const ALL_ROLES_VISIBLE: RoleVisibility = [true, true];
// Mutable y reusada cuadro a cuadro: el literal equivalente asignaba un
// array nuevo en cada cuadro.
const formingRoleVisibility: [boolean, boolean] = [true, false];

export type NanobotPhase = "idle" | "forming" | "settled" | "retracting";
export type MicrobotPhase = "hidden" | "launching" | "settled" | "retracting";

export interface SwarmParams {
  cohesion: number;
  separation: number;
  alignment: number;
  maxSpeed: number;
  seekWeight: number;
}

export interface SwarmApi {
  init(count: number): void;
  setParams(params: SwarmParams): void;
  step(dt: number): void;
  getPositions(): Float32Array;
  getCount(): number;
  setAgentTargets(points: Float32Array): void;
}

export interface NanobotMeshApi {
  setCount(count: number): void;
  updateFromPositions(
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    formationTargets: Float32Array,
    visibleRoles: RoleVisibility,
  ): void;
  setVisible(visible: boolean): void;
  /** Tint por agente (count*3 floats), o null para el neutro. */
  setInstanceTint(tint: Float32Array | null): void;
  setSkeletonGrayscale(active: boolean): void;
}

export interface MicrobotMeshApi {
  updateFromPositions(
    points: Float32Array,
    count: number,
    isBeam: Uint8Array,
    relationSpans: Float32Array,
  ): void;
  setVisible(visible: boolean): void;
}

/** Lo que la simulación necesita de la config de usuario. */
export interface SimSettings {
  count: number;
  microbotCount: number;
  cohesion: number;
  separation: number;
  alignment: number;
  maxSpeed: number;
}

/**
 * Lo que la simulación necesita del núcleo (Fase 36). Se declara acá, en
 * vez de importar el Reactor entero, para que la simulación siga siendo
 * testeable sin three.js — igual que las mallas.
 */
export interface ReactorApi {
  pulseColor(color: number): void;
  resetColor(): void;
}

export interface SimulationDeps {
  swarm: SwarmApi;
  swarmMesh: NanobotMeshApi;
  microbotMesh: MicrobotMeshApi;
  /** Objeto de settings COMPARTIDO con la UI (lil-gui lo muta en vivo). */
  settings: SimSettings;
  reactorCenter: Vec3;
  swirlAxes: SwirlAxes;
  maxNanobots: number;
  maxMicrobots: number;
  /** Reloj inyectable, para que los tests no dependan de performance.now. */
  now?: () => number;
  /** Duración total de una formación, en ms, al terminar de asentarse. */
  onFormationSettled?: (ms: number) => void;
  /** Opcional: el núcleo, para que parpadee al desplegar cada ola de color. */
  reactor?: ReactorApi;
}

/** Estado observable — para la UI, las métricas y los tests. */
export interface CoverageInfo {
  /** 0..1 */
  readonly fraction: number;
  /** Celdas de la figura cubiertas por al menos un agente. */
  readonly covered: number;
  /** Celdas que tiene la figura de referencia. */
  readonly total: number;
  /**
   * Índices de celda de la figura que ningún agente ocupa (spec §20).
   *
   * Hasta la Fase 39 `validateCoverage` los calculaba y `measureCoverage`
   * los tiraba. Retenerlos no cuesta nada —es el mismo recorrido— y son
   * exactamente la entrada que va a consumir la reparación cuando el
   * Repair Bot exista. Hoy su consumidor es el informe de validación.
   */
  readonly missing: Int32Array;
  /**
   * En cuántas piezas separadas quedó la figura construida (spec §20).
   * Un objeto que sale en cinco pedazos flotando es un resultado malo, y
   * hasta acá no había forma de notarlo.
   */
  readonly components: ComponentReport;
}

export interface SimState {
  readonly nanobotPhase: NanobotPhase;
  readonly microbotPhase: MicrobotPhase;
  readonly nanobotElapsed: number;
  readonly microbotElapsed: number;
  readonly nanobotAnimCount: number;
  readonly microbotCount: number;
  readonly currentShapeName: string | null;
  /**
   * Cuántos agentes hay en cada estado (índice = AGENT_STATE), para el
   * panel. Se rellena un array reusado, sin asignar por consulta.
   */
  readonly stateCounts: Uint32Array;
  /**
   * Qué fracción del volumen de la figura ocupan realmente los nanobots
   * (Fase 30). Responde a "¿me alcanzan los agentes para esta figura?".
   * null en reposo o si la forma no se pudo resolver.
   */
  readonly coverage: CoverageInfo | null;
  /**
   * Cuántos agentes hay de cada tipo (índice = BOT_TYPE). Incluye los
   * Microbots y los Union Bots, que viven en la otra malla — el desglose
   * es del enjambre entero, no sólo de los Nanobots.
   */
  readonly typeCounts: Uint32Array;
  /**
   * Mapa de material de la figura en curso, o null en reposo. Lo lee el
   * panel para mostrar regiones, paleta y si el reparto es observado o
   * aproximado.
   */
  readonly materialMap: MaterialMap | null;
  /** Etapa del material (cubriendo / activación / formando / completo). */
  readonly materialPhase: MaterialPhase;
  /**
   * Derivado, NO almacenado. Antes existía un `mode` aparte que se seteaba
   * en paralelo con `currentShapeName` y podía quedar desfasado: por
   * ejemplo `returnToCore()` ponía `mode = "idle"` mientras las otras dos
   * máquinas seguían en "retracting" durante segundos. Al derivarlo, ese
   * desfase deja de ser posible por construcción.
   */
  readonly forming: boolean;
}

export interface Simulation {
  readonly state: SimState;
  /** Estado por agente (SoA). Lo lee el panel y, más adelante, la reparación. */
  readonly agents: AgentStore;
  /** Cola de tareas. La lee el panel; la escribe formShape/returnToCore. */
  readonly director: SwarmDirector;
  /** Avanza un cuadro. Es el cuerpo del viejo animate(), sin render. */
  step(dt: number): void;
  formShape(shapeName: string, colorClusters: ColorCluster[]): void;
  returnToCore(): void;
  setNanobotCount(count: number): void;
  setMicrobotCount(count: number): void;
  applyParams(): void;
  /**
   * Modo DEBUG de regiones (spec §25): pinta cada región con un color
   * distinto en vez del material real. Es puramente de presentación — no
   * toca el mapa de material ni el estado de ningún agente.
   */
  setRegionDebug(on: boolean): void;
  readonly regionDebug: boolean;
  /** Sólo para tests/depuración: posiciones escritas en el último cuadro. */
  readonly renderPositions: Float32Array;
}

/**
 * 0xRRGGBB -> tripla 0..1 en `out`, el espacio en el que trabaja el tint.
 *
 * Escribe en un buffer del llamador porque esto se consulta una vez por
 * cuadro: devolver un array nuevo sería una asignación por cuadro para
 * nada.
 */
function hexToUnit(hex: number, out: [number, number, number]): [number, number, number] {
  out[0] = ((hex >> 16) & 0xff) / 255;
  out[1] = ((hex >> 8) & 0xff) / 255;
  out[2] = (hex & 0xff) / 255;
  return out;
}

export function createSimulation(deps: SimulationDeps): Simulation {
  const { swarm, swarmMesh, microbotMesh, settings, reactorCenter, swirlAxes } = deps;
  const now = deps.now ?? (() => performance.now());

  let currentShapeName: string | null = null;
  let currentColorClusters: ColorCluster[] = DEFAULT_COLOR_CLUSTERS;
  let currentRoles: Uint8Array<ArrayBufferLike> = new Uint8Array(settings.count).fill(NANOBOT_ROLE.DETAIL);
  let currentFormationTargets: Float32Array = new Float32Array(settings.count * 3);
  let currentFormation: ShapeFormation | null = null;

  let nanobotPhase: NanobotPhase = "idle";
  let nanobotElapsed = 0;
  // Cantidad de agentes de la animación EN CURSO — congelada al arrancar,
  // no `settings.count` en vivo: si cambian la cantidad a mitad de un
  // repliegue, el buffer de destino sigue siendo válido hasta que termine.
  let nanobotAnimCount = 0;
  let nanobotPlan: LayerPlan = {
    layerOf: new Uint8Array(0),
    delayFraction: new Float32Array(0),
    layerCount: 1,
    travelDuration: NANOBOT_LAYER_DURATION,
    totalDuration: NANOBOT_LAYER_DURATION,
    wave0Landing: [...FORMATION_CENTER],
  };
  // --- Material (Fase 42) ---
  //
  // El mapa dice QUÉ material lleva cada agente (sale de la posición); la
  // línea de tiempo dice CUÁNDO aparece. El tint es lo único que se
  // recalcula por cuadro, y sólo mientras algo esté cambiando.
  let materialMap: MaterialMap | null = null;
  let materialTimeline: MaterialTimeline = planMaterialTimeline(NANOBOT_LAYER_DURATION * 2, 1);
  const materialTint = new Float32Array(deps.maxNanobots * 3).fill(1);
  let regionDebug = false;
  /**
   * Última etapa de material para la que ya se escribió el tint. Mientras
   * la etapa es estática (vuelo, asentamiento, completo) el tint no cambia
   * de un cuadro al otro, así que alcanza con haberlo escrito una vez.
   */
  let tintWrittenForPhase = -1;
  // Última tanda para la que se disparó el parpadeo del núcleo.
  let lastPulsedSlot = -1;
  // Se relee de la config en cada refresco, no se congela al arrancar: la
  // paleta de identidad es configurable en caliente (setBotIdentityColor),
  // y una copia congelada acá haría que cambiarla no tuviera efecto sobre
  // los bots que todavía no se transformaron.
  const materialIdentity: [number, number, number] = [0, 0, 0];
  const nanobotRenderPositions = new Float32Array(deps.maxNanobots * 3);
  // Estado por agente en Structure-of-Arrays. Se escribe dentro del mismo
  // recorrido que calcula las posiciones (ver writeNanobotFrame), así que
  // no cuesta un segundo pase.
  const agents = createAgentStore();
  const stateCountsScratch = new Uint32Array(8);
  const typeCountsScratch = new Uint32Array(BOT_TYPE_COUNT);
  // Fase 29: la secuencia (exoesqueleto -> relleno -> una ola de color por
  // capa) deja de estar implícita en aritmética suelta acá adentro y pasa a
  // ser una cola de tareas consultable. El director NO tiene reloj propio:
  // lee `microbotElapsed`/`nanobotElapsed`, que siguen siendo la única
  // línea temporal.
  const director = createSwarmDirector();
  let coverage: CoverageInfo | null = null;
  // Morph directo (Fase 30b): de dónde arranca cada agente. null = del
  // núcleo, que es una formación normal desde el reposo.
  let morphFrom: Float32Array | null = null;
  // La figura anterior, congelada, mientras el exoesqueleto nuevo se
  // relanza (~2 s). Sin esto la malla se ocultaba y la figura DESAPARECÍA
  // en esa ventana — verificado en pantalla: quedaba sólo el reactor. Un
  // morph que hace desaparecer la figura no es un morph.
  let morphHold: {
    positions: Float32Array;
    count: number;
    roles: Uint8Array<ArrayBufferLike>;
  } | null = null;

  let microbotPhase: MicrobotPhase = "hidden";
  let microbotCount = Math.min(settings.microbotCount, deps.maxMicrobots);
  let microbotExo: Exoskeleton | null = null;
  // Cuántas de esas instancias son vigas. Define si el exoesqueleto sale
  // en uno o en dos grupos, y alimenta el desglose por tipo.
  let microbotBeamCount = 0;
  let microbotElapsed = 0;
  const microbotRenderPoints = new Float32Array(deps.maxMicrobots * 3);
  const microbotRenderRelationSpans = new Float32Array(deps.maxMicrobots * 6);

  // Formación que espera a que el exoesqueleto de Microbots termine de
  // asentarse antes de arrancar (ver step()).
  let pendingFormation: { shapeName: string; colorClusters: ColorCluster[] } | null = null;
  let formationStartedAt: number | null = null;
  // Cantidad pedida durante un repliegue: se aplica al terminar, no en el
  // medio (ver setNanobotCount).
  let pendingCount: number | null = null;

  function computeMicrobotTargets(): void {
    const exo = buildExoskeleton(currentShapeName ?? "", microbotCount, FORMATION_CENTER);
    microbotExo = exo;
    // Se cuenta UNA vez acá, al construir el exoesqueleto, y no en cada
    // lectura del desglose por tipo: es el mismo recorrido de hasta 60.000
    // elementos, pero una vez por figura en lugar de una por cuadro.
    let beams = 0;
    if (exo) for (let i = 0; i < microbotCount; i++) if (exo.isBeam[i]) beams++;
    microbotBeamCount = beams;
  }

  /**
   * Cuántos grupos escalonados tiene la salida del exoesqueleto: nodos y
   * uniones, o uno solo cuando la figura no tiene vigas (las humanoides
   * usan hueso macizo). Con un grupo vacío quedaría medio lanzamiento sin
   * nada en pantalla.
   */
  function microbotGroups(): number {
    return microbotBeamCount > 0 ? 2 : 1;
  }

  function renderMicrobotsAt(progress: number): void {
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
      progress,
      MICROBOT_SWIRL_TURNS,
      MICROBOT_SWIRL_MAX_RADIUS,
      microbotGroups(),
    );
    microbotMesh.updateFromPositions(microbotRenderPoints, microbotCount, isBeam, microbotRenderRelationSpans);
  }

  /**
   * Encola el exoesqueleto con las MISMAS ventanas que usa la cinemática
   * para escribir las posiciones (ver groupWindow): la cola de tareas
   * describe lo que se ve, no una versión aparte de la secuencia.
   */
  function planStructureTasks(): void {
    const groups = microbotGroups();
    director.planStructure({
      exoDuration: MICROBOT_EXO_DURATION,
      nodeEnd: groupWindow(0, groups).end * MICROBOT_EXO_DURATION,
      beamStart: groups > 1 ? groupWindow(1, groups).start * MICROBOT_EXO_DURATION : null,
    });
  }

  function renderNanobotsAt(elapsed: number, retracting = false): void {
    if (!currentFormation) return;
    writeNanobotFrame(
      nanobotRenderPositions,
      currentFormation.points,
      nanobotAnimCount,
      nanobotPlan,
      reactorCenter,
      swirlAxes,
      elapsed,
      DEFAULT_NANOBOT_TIMINGS,
      agents.state,
      retracting ? AGENT_STATE.RETURNING : AGENT_STATE.TRAVELING,
      morphFrom,
      // Fase 35: al replegarse, la espiral. Al formar (y al morphear), el
      // vuelo por capas de siempre.
      retracting,
    );
  }

  function applyParams(): void {
    swarm.setParams({
      cohesion: settings.cohesion,
      separation: settings.separation,
      alignment: settings.alignment,
      maxSpeed: settings.maxSpeed,
      seekWeight: IDLE_SEEK_WEIGHT,
    });
  }

  function applyIdleTargets(): void {
    swarm.setAgentTargets(idleCluster(settings.count, reactorCenter as [number, number, number]));
    currentRoles = new Uint8Array(settings.count).fill(NANOBOT_ROLE.DETAIL);
    currentFormationTargets = new Float32Array(settings.count * 3);
    agents.reset(settings.count, currentRoles, currentFormationTargets);
  }

  /**
   * Cobertura de la figura por el enjambre actual (Fase 30).
   *
   * Compara dos voxelizaciones sobre la MISMA grilla: la figura ideal
   * (el generador a densidad de referencia) contra los destinos reales de
   * los agentes. El resultado dice si la cantidad de nanobots alcanza
   * para representar esta forma, que es algo que el usuario no tenía cómo
   * saber salvo mirando y adivinando.
   *
   * Se calcula UNA vez por formación, y la grilla ideal se cachea por
   * forma: la primera vez cuesta 40.000 divisiones enteras (irrelevante
   * al lado de generar la formación), después es gratis. Cero costo por
   * cuadro en ambos casos.
   */
  function measureCoverage(name: string, points: Float32Array, count: number): CoverageInfo | null {
    const def = getShape(name);
    if (!def) return null;
    // El generador devuelve la figura centrada en el origen; los destinos
    // de los agentes ya vienen trasladados a FORMATION_CENTER.
    const key = `${name}#${shapeRevision(name)}`;
    let ideal = referenceGrids.get(key);
    if (!ideal) {
      ideal = voxelizePoints(def.generate(COVERAGE_REFERENCE_COUNT), COVERAGE_REFERENCE_COUNT, ORIGIN);
      if (referenceGrids.size >= REFERENCE_GRID_CACHE_MAX) {
        const oldest = referenceGrids.keys().next();
        if (!oldest.done) referenceGrids.delete(oldest.value);
      }
      referenceGrids.set(key, ideal);
    }
    const real = voxelizePoints(points, count, FORMATION_CENTER);
    const report = validateCoverage(ideal, real);
    return {
      fraction: report.coverage,
      covered: report.covered,
      total: report.target,
      missing: report.missing,
      // Sobre la grilla REAL, no la ideal: la pregunta es en cuántas
      // piezas quedó lo que el enjambre construye, no la figura de
      // referencia (que por definición es de una sola pieza).
      components: findComponents(real),
    };
  }

  function startFormation(name: string, colorClusters: ColorCluster[]): void {
    const formation = formShapeWithRoles(
      name,
      settings.count,
      FORMATION_CENTER,
      colorClusters,
    );
    if (!formation) return;
    currentFormation = formation;
    // RE-APUNTA a los arrays de la formación, no los copia: si esto pasara
    // a ser una copia, un cambio de cantidad a mitad de formación dejaría
    // a estos dos leyendo datos viejos (hay un test que afirma la
    // identidad, no la igualdad).
    currentRoles = formation.roles;
    currentFormationTargets = formation.points;
    currentColorClusters = colorClusters;
    nanobotAnimCount = settings.count;

    // EL ORDEN IMPORTA: primero el mapa de material (que necesita los
    // puntos), después la línea de tiempo (que necesita cuántas tandas
    // tiene el mapa), y recién ahí el plan de capas (que necesita saber
    // cuánto dura la cola de material para dar el total).
    const isMaterial = new Uint8Array(settings.count);
    for (let i = 0; i < settings.count; i++) {
      isMaterial[i] = formation.roles[i] === NANOBOT_ROLE.COLOR ? 1 : 0;
    }
    // El ÁPICE: dónde se para la bola de Material Bots antes de
    // derramarse. Lo comparten el vuelo y el material a propósito — si
    // cada uno eligiera su origen, se verían dos animaciones peleadas.
    const apex = materialApex(
      formation.roles,
      formation.points,
      settings.count,
      NANOBOT_ROLE.COLOR,
      FORMATION_CENTER,
    );
    materialMap = buildMaterialMap({
      points: formation.points,
      count: settings.count,
      isMaterial,
      pointColors: formation.pointColors,
      clusters: formation.colorClusters,
      center: FORMATION_CENTER,
      // Desde ARRIBA, no desde el núcleo: el material se derrama sobre el
      // objeto como un líquido, siguiendo al mismo punto donde cae la
      // bola de bots.
      propagationOrigin: apex,
    });
    const travelDuration = 2 * NANOBOT_LAYER_DURATION;
    materialTimeline = planMaterialTimeline(travelDuration, materialMap.slots);

    nanobotPlan = planLayers(
      formation.roles,
      formation.points,
      settings.count,
      NANOBOT_ROLE.COLOR,
      NANOBOT_LAYER_DURATION,
      FORMATION_CENTER,
      reactorCenter,
      materialTimeline.end - travelDuration,
    );
    // El store apunta a los arrays de ESTA formación (no los copia, igual
    // que currentRoles/currentFormationTargets arriba).
    agents.adoptFormation({
      count: settings.count,
      role: formation.roles,
      region: materialMap.region,
      layer: nanobotPlan.layerOf,
      delayFraction: nanobotPlan.delayFraction,
      target: formation.points,
    });

    // Cada destino se empareja con el agente viejo más cercano (por
    // celda de vóxel) para que nadie cruce la figura de punta a punta.
    morphFrom =
      morphHold && morphHold.count > 0
        ? buildMorphSource(
            formation.points,
            settings.count,
            morphHold.positions,
            morphHold.count,
            reactorCenter as [number, number, number],
            // El cubo de vóxeles va centrado donde está la figura, no en
            // el origen: los destinos vienen trasladados a
            // FORMATION_CENTER, y sin esto la mitad caía fuera del cubo y
            // perdía la localidad que la correspondencia busca dar.
            FORMATION_CENTER,
          ).from
        : null;
    // La retención cumplió su función: de acá en más dibuja la animación.
    morphHold = null;

    coverage = measureCoverage(name, formation.points, settings.count);

    // Fase 31: el tipo de cada agente se deriva de su rol. La capa que
    // lleva el color del objeto SON los Material Bots; el resto de la
    // nube son Nanobots de detalle.
    agents.assignTypesFromRoles(NANOBOT_ROLE.COLOR);

    // Recién acá se sabe cuántas olas de color tiene la figura, así que
    // recién acá se pueden encolar las tareas de Nanobots (el exoesqueleto
    // ya venía encolado desde formShape).
    director.planLayers({
      layerCount: nanobotPlan.layerCount,
      layerDuration: NANOBOT_LAYER_DURATION,
      material: {
        start: materialTimeline.activationEnd,
        slots: materialTimeline.slots,
        slotDuration: materialTimeline.slotDuration,
        slotStep: materialTimeline.slotStep,
        end: materialTimeline.end,
      },
    });

    lastPulsedSlot = -1;
    tintWrittenForPhase = -1;
    // El tint arranca en el color de IDENTIDAD del Material Bot: al llegar
    // a la superficie se ven bots, no material (spec §8). El material
    // aparece después, región por región.
    refreshMaterialTint(0);
    swarmMesh.setInstanceTint(materialTint);
  }

  /**
   * Recalcula el tint de este cuadro. Devuelve false cuando ya no puede
   * cambiar más, para que el llamador pueda dejar de escribirlo.
   */
  function refreshMaterialTint(elapsed: number): boolean {
    if (!materialMap) return false;
    hexToUnit(botVisual(BOT_TYPE.MATERIAL).identityColor, materialIdentity);
    tintWrittenForPhase = materialPhaseAt(elapsed, materialTimeline);
    return writeMaterialTint(materialTint, materialMap, materialTimeline, elapsed, materialIdentity, regionDebug);
  }

  /**
   * El tint del cuadro, saltándose el trabajo cuando no puede haber
   * cambiado. Devuelve true si hay que volver a subirlo a la GPU.
   */
  function refreshMaterialTintIfNeeded(elapsed: number): boolean {
    if (!materialMap) return false;
    if (materialTintIsStatic(elapsed, materialTimeline)) {
      // Estático: sólo hace falta escribirlo al ENTRAR a esta etapa.
      if (materialPhaseAt(elapsed, materialTimeline) === tintWrittenForPhase) return false;
      refreshMaterialTint(elapsed);
      return true;
    }
    return refreshMaterialTint(elapsed);
  }

  function goIdle(): void {
    pendingFormation = null;
    currentFormation = null;
    nanobotPhase = "idle";
    nanobotElapsed = 0;
    applyIdleTargets();
    swarmMesh.setVisible(false);
    swarmMesh.setSkeletonGrayscale(false);
    swarmMesh.setInstanceTint(null);
    materialMap = null;
    lastPulsedSlot = -1;
    currentShapeName = null;
    microbotExo = null;
    microbotPhase = "hidden";
    microbotElapsed = 0;
    microbotMesh.setVisible(false);
    director.clear();
    coverage = null;
    morphFrom = null;
    morphHold = null;
    deps.reactor?.resetColor();
    applyParams();
  }

  function formShape(shapeName: string, colorClusters: ColorCluster[]): void {
    formationStartedAt = now();
    // MORPH DIRECTO: si ya hay una figura en pantalla, los agentes tienen
    // que viajar desde donde están, no desaparecer y rearrancar del
    // reactor. Se congelan sus posiciones ACÁ, antes de que el reseteo de
    // abajo las pise. Desde el reposo no hay nada que congelar: salen del
    // núcleo como siempre.
    morphHold =
      currentShapeName !== null && currentFormation !== null
        ? {
            positions: nanobotRenderPositions.slice(0, nanobotAnimCount * 3),
            count: nanobotAnimCount,
            roles: currentRoles,
          }
        : null;

    pendingFormation = null;
    currentFormation = null;
    nanobotPhase = "idle";
    nanobotElapsed = 0;
    applyIdleTargets();
    // Con morph, la figura anterior se queda en pantalla (la redibuja
    // step() mientras dure la retención); sin morph se oculta como siempre.
    if (!morphHold) {
      swarmMesh.setVisible(false);
      swarmMesh.setSkeletonGrayscale(false);
    }

    currentShapeName = shapeName;
    currentColorClusters = colorClusters ?? DEFAULT_COLOR_CLUSTERS;
    pendingFormation = { shapeName, colorClusters: currentColorClusters };
    computeMicrobotTargets();
    // Si veníamos de un repliegue EN CURSO se retoma desde donde quedó:
    // reiniciar en 0 hacía que el exoesqueleto saltara de golpe al núcleo
    // (teletransporte visible) en vez de seguir hacia afuera.
    if (microbotPhase !== "retracting") microbotElapsed = 0;
    microbotPhase = "launching";
    microbotMesh.setVisible(true);
    planStructureTasks();
    applyParams();
  }

  function returnToCore(): void {
    if (currentShapeName === null) {
      goIdle();
      return;
    }
    currentShapeName = null;
    pendingFormation = null;
    if (microbotPhase === "launching" || microbotPhase === "settled") microbotPhase = "retracting";
    if (nanobotPhase === "forming" || nanobotPhase === "settled") nanobotPhase = "retracting";
    // Cancela lo pendiente y encola el repliegue. Lo ya cumplido queda
    // como historial en la cola, no se reescribe.
    director.planReturn();
  }

  function setNanobotCount(count: number): void {
    // Aplicar esto a mitad de un repliegue dejaría el buffer de Wasm en la
    // cantidad nueva mientras nanobotAnimCount/currentRoles/
    // currentFormationTargets siguen en la vieja. Se difiere entero hasta
    // que el repliegue termina (ver step()), que es el único momento en que
    // todos esos buffers se pueden reemplazar de forma consistente.
    if (nanobotPhase === "retracting") {
      pendingCount = count;
      return;
    }
    settings.count = count;
    swarm.init(count);
    swarmMesh.setCount(count);
    if (currentShapeName && !pendingFormation) {
      const wasSettled = nanobotPhase === "settled";
      startFormation(currentShapeName, currentColorClusters);
      if (wasSettled) {
        nanobotPhase = "settled";
        nanobotElapsed = nanobotPlan.totalDuration;
        renderNanobotsAt(nanobotElapsed);
        swarmMesh.setSkeletonGrayscale(true);
        // El material ya está puesto: hay que rehacer el tint a ese
        // instante, o la figura recién recontada se vería con los bots en
        // color de identidad en vez de con su material.
        refreshMaterialTint(nanobotElapsed);
        swarmMesh.updateFromPositions(
          nanobotRenderPositions,
          nanobotAnimCount,
          currentRoles,
          currentFormationTargets,
          ALL_ROLES_VISIBLE,
        );
      }
      // Si seguía "forming", sigue animando desde el progreso actual con
      // los nuevos destinos.
    } else {
      applyIdleTargets();
    }
  }

  function setMicrobotCount(count: number): void {
    microbotCount = Math.min(count, deps.maxMicrobots);
    settings.microbotCount = microbotCount;
    if (microbotPhase !== "launching" && microbotPhase !== "settled") return;
    const groupsAntes = microbotGroups();
    computeMicrobotTargets();
    // Bajar mucho la cantidad puede dejar la figura sin vigas, y con eso el
    // exoesqueleto pasa de dos grupos a uno. Se re-encola sólo en ese caso
    // y sólo durante el lanzamiento: ya asentado, planStructure borraría
    // las tareas de Nanobots que para entonces sí existen.
    if (microbotPhase === "launching" && microbotGroups() !== groupsAntes) planStructureTasks();
    if (microbotPhase === "settled") renderMicrobotsAt(1);
  }

  /**
   * Qué "entrega" del núcleo corresponde a este instante: -1 mientras los
   * bots todavía vuelan, 0 al empezar la ACTIVACIÓN, y 1..slots por cada
   * tanda de material.
   *
   * POR QUÉ ARRANCA EN LA ACTIVACIÓN Y NO EN LA PRIMERA TANDA. En la Fase
   * 42 el primer pulso caía recién al empezar a aplicar el material, o
   * sea en el último tramo de una formación de ~12 s, y duraba 0,9 s: en
   * la práctica no se veía. El núcleo ENTREGA el material cuando la red
   * se enciende, que es lo que la activación representa, así que ése es
   * el momento del primer destello.
   */
  function activeSlot(elapsed: number): number {
    if (!materialMap || elapsed < materialTimeline.settleEnd) return -1;
    if (elapsed < materialTimeline.activationEnd) return 0;
    const raw = Math.floor((elapsed - materialTimeline.activationEnd) / materialTimeline.slotStep);
    return Math.min(Math.max(raw, 0), materialTimeline.slots - 1) + 1;
  }

  /**
   * Color con el que el núcleo destella en cada entrega. El 0 es la
   * activación (todavía no se aplicó nada): usa el color DOMINANTE del
   * objeto, que es lo que está por entregar. De ahí en más, el de la
   * región más grande de esa tanda.
   */
  function slotColor(slot: number): number | null {
    if (!materialMap) return null;
    if (slot === 0) return materialMap.palette[0] ?? null;
    let best: { count: number; color: number } | null = null;
    for (const region of materialMap.regions) {
      if (region.slot !== slot - 1) continue;
      if (!best || region.count > best.count) best = { count: region.count, color: region.color };
    }
    return best ? best.color : null;
  }

  /**
   * Vuelve a escribir el cuadro actual en la malla sin avanzar el reloj.
   *
   * Hace falta porque la fase "settled" no dibuja: una vez terminada la
   * figura, el buffer de instancias ya está donde tiene que estar y step()
   * no lo toca. Cualquier cambio que sólo afecte al COLOR (el modo debug,
   * un recuento de agentes) necesita empujarlo a mano.
   */
  function redrawCurrentFrame(): void {
    if (!currentFormation || nanobotAnimCount === 0) return;
    swarmMesh.updateFromPositions(
      nanobotRenderPositions,
      nanobotAnimCount,
      currentRoles,
      currentFormationTargets,
      nanobotPhase === "settled" ? ALL_ROLES_VISIBLE : formingRoleVisibility,
    );
  }

  function step(dt: number): void {
    // Microbots: lanzamiento/repliegue en vórtice, sin física. Nanobots
    // espera a que termine (`pendingFormation`) antes de arrancar su
    // revelado, así el exoesqueleto ya está sólido cuando llega a
    // rellenar encima. Una vez "settled" no se recalcula nada por cuadro.
    if (microbotPhase === "launching" || microbotPhase === "retracting") {
      const direction = microbotPhase === "launching" ? 1 : -1;
      microbotElapsed = Math.min(Math.max(microbotElapsed + direction * dt, 0), MICROBOT_EXO_DURATION);
      // Progreso crudo: el suavizado y el reparto por grupo los aplica la
      // cinemática, que es la que sabe qué ventana le toca a cada uno.
      renderMicrobotsAt(microbotElapsed / MICROBOT_EXO_DURATION);
      director.sync(microbotElapsed, nanobotElapsed);
      // El relleno arranca cuando el director da por cumplida la tarea del
      // exoesqueleto — antes esta condición estaba duplicada acá como una
      // comparación suelta contra MICROBOT_EXO_DURATION.
      if (microbotPhase === "launching" && director.isStructureDone()) {
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

    // Nanobots: física boid SOLO en reposo. Al formar/replegar la posición
    // la maneja por completo la animación scripted.
    if (nanobotPhase === "forming" || nanobotPhase === "retracting") {
      const direction = nanobotPhase === "forming" ? 1 : -1;
      nanobotElapsed = Math.min(Math.max(nanobotElapsed + direction * dt, 0), nanobotPlan.totalDuration);
      renderNanobotsAt(nanobotElapsed, nanobotPhase === "retracting");
      director.sync(microbotElapsed, nanobotElapsed);
      // Qué capa se revela sale de la COLA DE TAREAS, no de una cuenta
      // suelta: la tarea de Nanobots activa ES la capa activa. Un test
      // barre todo el recorrido afirmando que da exactamente lo mismo que
      // el layerIndexAt que había antes.
      const layerIndex = director.nanobotLayerIndex(nanobotElapsed);
      // Fase 36/42: al ENTRAR en una tanda de material, el núcleo parpadea
      // y toma el color de la región que se está transformando — es el
      // traspaso del material desde el núcleo hacia la figura. Sólo al
      // entrar, no cada cuadro: el parpadeo dura casi un segundo y
      // relanzarlo 60 veces por segundo lo dejaría clavado en el primer
      // destello.
      const slot = activeSlot(nanobotElapsed);
      if (slot !== lastPulsedSlot) {
        lastPulsedSlot = slot;
        const hex = slot >= 0 ? slotColor(slot) : null;
        if (hex !== null) deps.reactor?.pulseColor(hex);
      }
      // Detalle pasa a gris apenas sale la capa de material, para que el
      // color real del objeto termine predominando.
      swarmMesh.setSkeletonGrayscale(layerIndex >= 1);
      formingRoleVisibility[1] = layerIndex >= 1;
      // El tint sólo se recalcula mientras puede cambiar: una vez que todo
      // el material está puesto, el buffer ya dice lo correcto y volver a
      // escribirlo cuadro a cuadro sería trabajo puro para nadie.
      if (refreshMaterialTintIfNeeded(nanobotElapsed)) swarmMesh.setInstanceTint(materialTint);
      swarmMesh.updateFromPositions(
        nanobotRenderPositions,
        nanobotAnimCount,
        currentRoles,
        currentFormationTargets,
        formingRoleVisibility,
      );
      if (nanobotPhase === "forming" && nanobotElapsed >= nanobotPlan.totalDuration) {
        nanobotPhase = "settled";
        if (formationStartedAt !== null) {
          deps.onFormationSettled?.(now() - formationStartedAt);
          formationStartedAt = null;
        }
      } else if (nanobotPhase === "retracting" && nanobotElapsed <= 0) {
        nanobotPhase = "idle";
        currentFormation = null;
        // Ya no hay figura: mostrar la cobertura de la anterior sería
        // informar sobre algo que no está en pantalla.
        coverage = null;
        morphFrom = null;
        morphHold = null;
        materialMap = null;
        lastPulsedSlot = -1;
        deps.reactor?.resetColor();
        swarmMesh.setInstanceTint(null);
        swarmMesh.setVisible(false);
        // Un cambio de cantidad pedido durante el repliegue se aplica
        // recién acá, con todos los buffers ya libres.
        if (pendingCount !== null) {
          const next = pendingCount;
          pendingCount = null;
          setNanobotCount(next);
        } else {
          applyIdleTargets();
        }
        applyParams();
      }
    } else if (nanobotPhase === "idle") {
      // La física del enjambre en reposo sigue corriendo igual; lo que
      // cambia es QUÉ se dibuja.
      swarm.step(dt);
      if (morphHold) {
        // Morph en curso: la figura anterior se queda quieta y visible
        // mientras el exoesqueleto nuevo se relanza (~2 s).
        //
        // Tiene que estar DENTRO de esta rama, no en un `if` aparte antes:
        // así estaba en el primer intento y el dibujado de reposo de acá
        // abajo lo pisaba en el mismo cuadro, dejando en pantalla el
        // enjambre en descanso en vez de la figura.
        swarmMesh.updateFromPositions(
          morphHold.positions,
          morphHold.count,
          morphHold.roles,
          morphHold.positions,
          ALL_ROLES_VISIBLE,
        );
      } else {
        swarmMesh.updateFromPositions(
          swarm.getPositions(),
          swarm.getCount(),
          currentRoles,
          currentFormationTargets,
          ALL_ROLES_VISIBLE,
        );
      }
    }
    // "settled": nada que hacer, el cuadro anterior ya dejó el buffer de
    // instancias en su posición final.
  }

  const state: SimState = {
    get nanobotPhase() { return nanobotPhase; },
    get microbotPhase() { return microbotPhase; },
    get nanobotElapsed() { return nanobotElapsed; },
    get microbotElapsed() { return microbotElapsed; },
    get nanobotAnimCount() { return nanobotAnimCount; },
    get microbotCount() { return microbotCount; },
    get currentShapeName() { return currentShapeName; },
    get stateCounts() { return agents.countByState(stateCountsScratch); },
    get coverage() { return coverage; },
    get materialMap() { return materialMap; },
    get materialPhase() {
      return materialMap ? materialPhaseAt(nanobotElapsed, materialTimeline) : MATERIAL_PHASE.SPREAD;
    },
    get typeCounts() {
      agents.countByType(typeCountsScratch);
      // Microbots y Union Bots no están en el AgentStore: viven en la malla
      // del exoesqueleto, que reparte sus instancias entre nodos (estructura)
      // y vigas (conexión). Se suman acá para que el desglose describa el
      // enjambre COMPLETO y no sólo media población.
      if (microbotPhase !== "hidden" && microbotExo) {
        typeCountsScratch[BOT_TYPE.MICROBOT] += microbotCount - microbotBeamCount;
        typeCountsScratch[BOT_TYPE.UNION] += microbotBeamCount;
      }
      return typeCountsScratch;
    },
    get forming() { return currentShapeName !== null; },
  };

  setNanobotCount(settings.count);
  goIdle();

  return {
    state,
    agents,
    director,
    step,
    formShape,
    returnToCore,
    setNanobotCount,
    setMicrobotCount,
    applyParams,
    setRegionDebug(on: boolean): void {
      if (on === regionDebug) return;
      regionDebug = on;
      tintWrittenForPhase = -1;
      refreshMaterialTint(nanobotElapsed);
      swarmMesh.setInstanceTint(materialMap ? materialTint : null);
      // Y REDIBUJAR. Con la figura ya asentada, step() no hace nada (el
      // cuadro anterior dejó el buffer de instancias en su lugar), así que
      // sin esto el tint nuevo se queda en RAM y no llega nunca a la GPU:
      // el interruptor no hacía nada visible. Verificado en pantalla.
      redrawCurrentFrame();
    },
    get regionDebug() { return regionDebug; },
    renderPositions: nanobotRenderPositions,
  };
}
