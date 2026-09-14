// Cinemática del enjambre (Fase 27b): toda la matemática de "dónde está
// cada agente en el instante t", extraída de la closure de main.ts a
// funciones puras.
//
// Por qué importa: hasta la Fase 26 esto vivía dentro de un `main()` de
// 551 líneas sin un solo export, así que era imposible de testear y
// cualquier cosa que quisiera reusarlo (el SwarmDirector, el morphing,
// la reparación) tenía que vivir adentro de la misma closure. Acá las
// funciones reciben todo por parámetro y escriben en buffers del
// llamador: cero estado propio, cero asignación por cuadro.
//
// La equivalencia con el código anterior NO se asume: está verificada
// contra un fixture grabado de la app en ejecución antes de mover nada
// (ver core/__fixtures__/nanobot-frames.json y kinematics.test.ts).

import { AGENT_STATE } from "../swarm/agent-store";

export type Vec3 = readonly [number, number, number];

/** Fase por agente, para que no giren todos sincronizados. */
export const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

export function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Base ortonormal perpendicular al eje `from -> to`, usada como plano del
 * remolino. Se calcula UNA vez por escena (no por agente ni por cuadro),
 * así el costo por agente queda en un lerp + un seno + un coseno.
 */
export interface SwirlAxes {
  ux: number; uy: number; uz: number;
  vx: number; vy: number; vz: number;
}

export function makeSwirlAxes(from: Vec3, to: Vec3): SwirlAxes {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const dz = to[2] - from[2];
  const len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
  const ux = dx / len, uy = dy / len, uz = dz / len;
  const arbX = Math.abs(uy) > 0.99 ? 1 : 0;
  const arbY = Math.abs(uy) > 0.99 ? 0 : 1;
  let rx = arbY * uz;
  let ry = -arbX * uz;
  let rz = arbX * uy - arbY * ux;
  const rlen = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1;
  rx /= rlen; ry /= rlen; rz /= rlen;
  return {
    ux: rx, uy: ry, uz: rz,
    vx: uy * rz - uz * ry,
    vy: uz * rx - ux * rz,
    vz: ux * ry - uy * rx,
  };
}

/**
 * Offset del remolino de un agente en el progreso `eased` (0..1): CERO en
 * los dos extremos — arranca y termina exacto en su punto sin importar el
 * remolino — y máximo a mitad de camino.
 */
export function swirlOffset(
  eased: number,
  i: number,
  turns: number,
  maxRadius: number,
  axes: SwirlAxes,
  out: [number, number, number],
): void {
  const amplitude = maxRadius * Math.sin(eased * Math.PI);
  const angle = eased * turns * Math.PI * 2 + i * GOLDEN_ANGLE;
  const c = Math.cos(angle) * amplitude;
  const s = Math.sin(angle) * amplitude;
  out[0] = axes.ux * c + axes.vx * s;
  out[1] = axes.uy * c + axes.vy * s;
  out[2] = axes.uz * c + axes.vz * s;
}

export interface NanobotTimings {
  travelDuration: number;
  layerStaggerSpan: number;
  layerDuration: number;
  swirlTurns: number;
  swirlMaxRadius: number;
  packetDuration: number;
  packetSwirlTurns: number;
  packetSwirlMaxRadius: number;
  burstTravelDuration: number;
  burstStaggerSpan: number;
}

const TRAVEL_DURATION = 1.0;
const LAYER_STAGGER_SPAN = 1.0;
const LAYER_DURATION = TRAVEL_DURATION + LAYER_STAGGER_SPAN;
const PACKET_FRACTION = 0.35;
const PACKET_DURATION = LAYER_DURATION * PACKET_FRACTION;
const BURST_WINDOW = LAYER_DURATION - PACKET_DURATION;

export const DEFAULT_NANOBOT_TIMINGS: NanobotTimings = {
  travelDuration: TRAVEL_DURATION,
  layerStaggerSpan: LAYER_STAGGER_SPAN,
  layerDuration: LAYER_DURATION,
  // Fase 35: el remolino era invisible y había que medirlo para verlo.
  // El trayecto del reactor (-8, 8, -8) al centro de formación (4, 2, 4)
  // mide EXACTAMENTE 18 unidades; con maxRadius 1.0 el desvío lateral
  // máximo era del 5,6% con poco más de una vuelta. O sea: un bamboleo,
  // no un vórtice. Ahora el radio es ~22% del trayecto y da 2,5 vueltas.
  swirlTurns: 2.5,
  swirlMaxRadius: 4.0,
  packetDuration: PACKET_DURATION,
  // La "bola" de la 1ra ola viaja compacta: su remolino tiene que ser
  // mucho menor que el del vuelo individual o deja de leerse como bola.
  packetSwirlTurns: 2.0,
  packetSwirlMaxRadius: 1.2,
  burstTravelDuration: BURST_WINDOW / 2,
  burstStaggerSpan: BURST_WINDOW / 2,
};

/**
 * Reparto por capas de una formación: a qué capa pertenece cada agente
 * (0 = Detalle, 1+ola = Color) y su posición relativa DENTRO de la capa,
 * que se usa como fracción del escalonado de salida.
 */
export interface LayerPlan {
  layerOf: Uint8Array;
  delayFraction: Float32Array;
  layerCount: number;
  totalDuration: number;
  /** Centroide de la 1ra ola de Color: adónde viaja la "bola" antes de abrirse. */
  wave0Landing: [number, number, number];
}

/** Capa activa/animando en el progreso `elapsed`. */
export function layerIndexAt(elapsed: number, layerCount: number, layerDuration: number): number {
  return Math.min(Math.floor(elapsed / layerDuration), layerCount - 1);
}

/**
 * Arma el reparto por capas de una formación recién calculada.
 *
 * `colorRole` se pasa como número en vez de importar NANOBOT_ROLE para
 * que este módulo no dependa de shapes: la cinemática no necesita saber
 * qué formas existen.
 *
 * Los agentes de una misma capa ya salen CONTIGUOS del generador de la
 * formación, así que alcanza con un contador por capa para asignar la
 * fracción de escalonado — no hace falta ordenar nada.
 */
export function planLayers(
  roles: Uint8Array,
  colorWave: Uint8Array,
  points: Float32Array,
  count: number,
  colorWaveCount: number,
  colorRole: number,
  layerDuration: number,
  fallbackLanding: Vec3,
): LayerPlan {
  const layerCount = 1 + colorWaveCount;
  const layerOf = new Uint8Array(count);
  const layerCounts = new Array<number>(layerCount).fill(0);
  // Centroide de la 1ra ola de Color: adónde viaja la bola antes de
  // abrirse. Se acumula en el mismo pase que ya recorre los agentes.
  let sumX = 0, sumY = 0, sumZ = 0, wave0Count = 0;
  for (let i = 0; i < count; i++) {
    const layer = roles[i] === colorRole ? 1 + colorWave[i] : 0;
    layerOf[i] = layer;
    layerCounts[layer]++;
    if (layer === 1) {
      sumX += points[i * 3 + 0];
      sumY += points[i * 3 + 1];
      sumZ += points[i * 3 + 2];
      wave0Count++;
    }
  }

  const delayFraction = new Float32Array(count);
  const layerCursor = new Array<number>(layerCount).fill(0);
  for (let i = 0; i < count; i++) {
    const layer = layerOf[i];
    const n = layerCounts[layer];
    delayFraction[i] = n > 1 ? layerCursor[layer] / (n - 1) : 0;
    layerCursor[layer]++;
  }

  return {
    layerOf,
    delayFraction,
    layerCount,
    totalDuration: layerCount * layerDuration,
    wave0Landing:
      wave0Count > 0
        ? [sumX / wave0Count, sumY / wave0Count, sumZ / wave0Count]
        : [fallbackLanding[0], fallbackLanding[1], fallbackLanding[2]],
  };
}

// Scratch de módulo reusado por writeNanobotFrame/writeMicrobotFrame. JS
// es de un solo hilo y ninguna de las dos es reentrante, así que compartir
// el buffer es seguro y evita asignar por agente y por cuadro.
const swirlScratch: [number, number, number] = [0, 0, 0];

// Umbral del tramo final del vuelo: a partir de acá el agente se está
// acomodando en su destino en vez de viajando hacia él.
const ASSEMBLING_FROM = 0.85;

function progressState(eased: number, movingState: number): number {
  if (eased >= 1) return AGENT_STATE.ATTACHED;
  if (eased <= 0) return AGENT_STATE.CORE;
  if (eased >= ASSEMBLING_FROM && movingState === AGENT_STATE.TRAVELING) return AGENT_STATE.ASSEMBLING;
  return movingState;
}

/**
 * Escribe en `out` la posición de cada Nanobot en el progreso `elapsed`.
 *
 * Capa por capa: las ya asentadas quedan exactas en su destino (sin
 * recalcular trigonometría), las futuras se quedan en el núcleo, y la
 * activa vuela con salida escalonada por agente. La 1ra ola de Color es
 * el único caso especial: primero viaja como bola compacta hasta
 * `wave0Landing` y recién ahí se abre en enjambre — en el instante exacto
 * del cambio la bola tiene `eased = 1`, así que todos arrancan el
 * enjambre justo donde aterrizó, sin salto.
 */
export function writeNanobotFrame(
  out: Float32Array,
  points: Float32Array,
  count: number,
  plan: LayerPlan,
  core: Vec3,
  axes: SwirlAxes,
  elapsed: number,
  timings: NanobotTimings = DEFAULT_NANOBOT_TIMINGS,
  /**
   * Opcional: estado por agente (ver AGENT_STATE). Se escribe DENTRO del
   * mismo recorrido que ya calcula las posiciones — un byte por agente,
   * sin un segundo pase. Es la única dependencia de dominio de este
   * módulo, y es un enum de números sin comportamiento.
   */
  outState?: Uint8Array,
  /** Qué estado usar para "en movimiento": TRAVELING al formar, RETURNING al replegar. */
  movingState: number = AGENT_STATE.TRAVELING,
  /**
   * Morph directo (Fase 30b): de dónde arranca cada agente, count*3. Sin
   * esto todos salen del núcleo, que es el comportamiento de siempre —
   * por eso es opcional y no un parámetro obligatorio: los golden frames
   * y los tests de caracterización siguen ejercitando exactamente el
   * mismo camino de código que antes.
   *
   * Con `from`, la sub-fase de "bola" de la 1ra ola de color se saltea: la
   * bola tiene sentido saliendo del reactor, no cuando los agentes ya
   * están repartidos sobre la figura anterior.
   */
  from: Float32Array | null = null,
  /**
   * Espiral de regreso (Fase 35). Cuando es true, el repliegue deja de
   * ser "la formación al revés" y pasa a ser una cola en espiral que
   * converge al núcleo: cada agente se va enroscando alrededor del eje
   * núcleo->figura mientras cae hacia el centro, escalonado por su
   * delayFraction, así se ve una fila girando en vez de una figura que
   * se desarma en el lugar.
   *
   * Opt-in, igual que `from`: sin esto el camino de código es el de
   * siempre y los golden frames siguen cubriéndolo.
   */
  spiralReturn = false,
): void {
  const { layerOf, delayFraction, layerCount, wave0Landing } = plan;

  if (spiralReturn) {
    writeSpiralReturn(out, points, count, plan, core, axes, elapsed, timings, outState);
    return;
  }

  const layerIndex = layerIndexAt(elapsed, layerCount, timings.layerDuration);
  const layerElapsed = elapsed - layerIndex * timings.layerDuration;
  const isFirstColorWave = layerIndex === 1;

  for (let i = 0; i < count; i++) {
    const layer = layerOf[i];
    if (layer < layerIndex) {
      out[i * 3 + 0] = points[i * 3 + 0];
      out[i * 3 + 1] = points[i * 3 + 1];
      out[i * 3 + 2] = points[i * 3 + 2];
      if (outState) outState[i] = AGENT_STATE.ATTACHED;
    } else if (layer > layerIndex) {
      // Todavía no le toca: en una formación normal espera dentro del
      // núcleo; en un morph espera donde está, porque mandarlo al reactor
      // primero sería justo el teletransporte que el morph viene a sacar.
      const wx = from ? from[i * 3 + 0] : core[0];
      const wy = from ? from[i * 3 + 1] : core[1];
      const wz = from ? from[i * 3 + 2] : core[2];
      out[i * 3 + 0] = wx;
      out[i * 3 + 1] = wy;
      out[i * 3 + 2] = wz;
      if (outState) outState[i] = AGENT_STATE.CORE;
    } else if (!from && isFirstColorWave && layerElapsed < timings.packetDuration) {
      const eased = easeInOutCubic(Math.min(Math.max(layerElapsed / timings.packetDuration, 0), 1));
      swirlOffset(eased, i, timings.packetSwirlTurns, timings.packetSwirlMaxRadius, axes, swirlScratch);
      out[i * 3 + 0] = core[0] + (wave0Landing[0] - core[0]) * eased + swirlScratch[0];
      out[i * 3 + 1] = core[1] + (wave0Landing[1] - core[1]) * eased + swirlScratch[1];
      out[i * 3 + 2] = core[2] + (wave0Landing[2] - core[2]) * eased + swirlScratch[2];
      // La "bola" viaja entera: todos sus agentes están en movimiento.
      if (outState) outState[i] = movingState;
    } else if (!from && isFirstColorWave) {
      const burstElapsed = layerElapsed - timings.packetDuration;
      const localT = (burstElapsed - delayFraction[i] * timings.burstStaggerSpan) / timings.burstTravelDuration;
      const eased = easeInOutCubic(Math.min(Math.max(localT, 0), 1));
      swirlOffset(eased, i, timings.swirlTurns, timings.swirlMaxRadius, axes, swirlScratch);
      out[i * 3 + 0] = wave0Landing[0] + (points[i * 3 + 0] - wave0Landing[0]) * eased + swirlScratch[0];
      out[i * 3 + 1] = wave0Landing[1] + (points[i * 3 + 1] - wave0Landing[1]) * eased + swirlScratch[1];
      out[i * 3 + 2] = wave0Landing[2] + (points[i * 3 + 2] - wave0Landing[2]) * eased + swirlScratch[2];
      if (outState) outState[i] = progressState(eased, movingState);
    } else {
      const localT = (layerElapsed - delayFraction[i] * timings.layerStaggerSpan) / timings.travelDuration;
      const eased = easeInOutCubic(Math.min(Math.max(localT, 0), 1));
      swirlOffset(eased, i, timings.swirlTurns, timings.swirlMaxRadius, axes, swirlScratch);
      const sx = from ? from[i * 3 + 0] : core[0];
      const sy = from ? from[i * 3 + 1] : core[1];
      const sz = from ? from[i * 3 + 2] : core[2];
      out[i * 3 + 0] = sx + (points[i * 3 + 0] - sx) * eased + swirlScratch[0];
      out[i * 3 + 1] = sy + (points[i * 3 + 1] - sy) * eased + swirlScratch[1];
      out[i * 3 + 2] = sz + (points[i * 3 + 2] - sz) * eased + swirlScratch[2];
      if (outState) outState[i] = progressState(eased, movingState);
    }
  }
}

/** Vueltas que da la cola al replegarse. */
const SPIRAL_RETURN_TURNS = 3.0;
/** Radio de la espiral al arrancar, en el punto más lejano del núcleo. */
const SPIRAL_RETURN_RADIUS = 6.0;

/**
 * Repliegue en espiral: los agentes vuelven al núcleo enroscándose.
 *
 * POR QUÉ NO ES "LA FORMACIÓN AL REVÉS": deshaciendo la formación, cada
 * agente vuelve por la misma recta por la que vino y el conjunto se
 * desarma en el lugar — se ve como un borrado, no como un regreso. Acá el
 * progreso global se reparte en una COLA (los de las capas más altas
 * salen primero, igual que al armar pero al revés) y cada agente sigue una
 * espiral que se cierra sobre el eje núcleo->figura.
 *
 * `elapsed` sigue bajando de totalDuration a 0, igual que antes, así que
 * la máquina de estados de la simulación no cambia en nada.
 */
function writeSpiralReturn(
  out: Float32Array,
  points: Float32Array,
  count: number,
  plan: LayerPlan,
  core: Vec3,
  axes: SwirlAxes,
  elapsed: number,
  timings: NanobotTimings,
  outState?: Uint8Array,
): void {
  const { layerOf, delayFraction, layerCount } = plan;
  const total = layerCount * timings.layerDuration;
  // 0 = recién empieza el repliegue (todos en la figura), 1 = todos en el
  // núcleo. Se invierte porque `elapsed` viene bajando.
  const global = total > 0 ? 1 - Math.min(Math.max(elapsed / total, 0), 1) : 1;

  for (let i = 0; i < count; i++) {
    // La cola: las capas de arriba (color) se van primero y, dentro de
    // cada capa, el orden de llegada se respeta al revés. Sin esto todos
    // saldrían a la vez y no habría fila.
    const layerRank = layerCount > 1 ? (layerCount - 1 - layerOf[i]) / (layerCount - 1) : 0;
    const queue = (layerRank + delayFraction[i]) * 0.5;
    const local = Math.min(Math.max((global - queue * 0.6) / 0.4, 0), 1);
    const eased = easeInOutCubic(local);

    if (local <= 0) {
      // Todavía en su lugar de la figura, esperando su turno.
      out[i * 3 + 0] = points[i * 3 + 0];
      out[i * 3 + 1] = points[i * 3 + 1];
      out[i * 3 + 2] = points[i * 3 + 2];
      if (outState) outState[i] = AGENT_STATE.ATTACHED;
      continue;
    }

    // La amplitud vale CERO en los dos extremos y es máxima a mitad de
    // camino (mismo patrón que swirlOffset). Con un `1 - eased` lineal el
    // agente arrancaba con la amplitud al máximo y SALTABA seis unidades
    // de costado en el instante en que empezaba a moverse: un corte
    // visible. Así sale exacto de su lugar en la figura, se abre girando,
    // y llega exacto al núcleo en vez de quedar en órbita.
    const amplitude = SPIRAL_RETURN_RADIUS * Math.sin(eased * Math.PI);
    const angle = eased * SPIRAL_RETURN_TURNS * Math.PI * 2 + i * GOLDEN_ANGLE;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    out[i * 3 + 0] = points[i * 3 + 0] + (core[0] - points[i * 3 + 0]) * eased + (axes.ux * cos + axes.vx * sin) * amplitude;
    out[i * 3 + 1] = points[i * 3 + 1] + (core[1] - points[i * 3 + 1]) * eased + (axes.uy * cos + axes.vy * sin) * amplitude;
    out[i * 3 + 2] = points[i * 3 + 2] + (core[2] - points[i * 3 + 2]) * eased + (axes.uz * cos + axes.vz * sin) * amplitude;
    if (outState) outState[i] = eased >= 1 ? AGENT_STATE.CORE : AGENT_STATE.RETURNING;
  }
}

/**
 * Escribe el exoesqueleto de Microbots en el progreso `eased` (0=núcleo,
 * 1=posición final): los nodos van a `outPoints` y las vigas a
 * `outSpans`. Los DOS extremos de una viga usan el mismo offset de
 * remolino (mismo `i`), así viaja como pieza rígida que además "crece"
 * desde largo ~0 en el núcleo hasta su largo real.
 */
export function writeMicrobotFrame(
  outPoints: Float32Array,
  outSpans: Float32Array,
  points: Float32Array,
  relationSpans: Float32Array,
  isBeam: Uint8Array,
  count: number,
  core: Vec3,
  axes: SwirlAxes,
  eased: number,
  turns: number,
  maxRadius: number,
): void {
  for (let i = 0; i < count; i++) {
    swirlOffset(eased, i, turns, maxRadius, axes, swirlScratch);
    if (!isBeam[i]) {
      outPoints[i * 3 + 0] = core[0] + (points[i * 3 + 0] - core[0]) * eased + swirlScratch[0];
      outPoints[i * 3 + 1] = core[1] + (points[i * 3 + 1] - core[1]) * eased + swirlScratch[1];
      outPoints[i * 3 + 2] = core[2] + (points[i * 3 + 2] - core[2]) * eased + swirlScratch[2];
    } else {
      outSpans[i * 6 + 0] = core[0] + (relationSpans[i * 6 + 0] - core[0]) * eased + swirlScratch[0];
      outSpans[i * 6 + 1] = core[1] + (relationSpans[i * 6 + 1] - core[1]) * eased + swirlScratch[1];
      outSpans[i * 6 + 2] = core[2] + (relationSpans[i * 6 + 2] - core[2]) * eased + swirlScratch[2];
      outSpans[i * 6 + 3] = core[0] + (relationSpans[i * 6 + 3] - core[0]) * eased + swirlScratch[0];
      outSpans[i * 6 + 4] = core[1] + (relationSpans[i * 6 + 4] - core[1]) * eased + swirlScratch[1];
      outSpans[i * 6 + 5] = core[2] + (relationSpans[i * 6 + 5] - core[2]) * eased + swirlScratch[2];
    }
  }
}
