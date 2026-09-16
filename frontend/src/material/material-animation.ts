// Animación del material (Fase 42).
//
// LA SEPARACIÓN QUE SOSTIENE ESTE ARCHIVO: acá NO se decide ningún color.
// El color de cada agente ya está fijado en el MaterialMap, que sale de la
// posición. Este módulo decide únicamente CUÁNDO y CÓMO aparece:
//
//     MaterialMap  -> QUÉ material lleva cada agente   (posición)
//     este archivo -> CUÁNDO se enciende y se transforma (tiempo)
//
// Eso es lo que la spec §14 llama "transformar la ola, no eliminarla": la
// ola sigue existiendo, pero activa una REGIÓN en vez de repartir un color.
//
// LAS CUATRO ETAPAS, sobre el MISMO reloj de Nanobots que ya existía (no
// hay un reloj nuevo; se le agrega cola al que había):
//
//   SPREAD      los Material Bots vuelan y cubren la superficie entera,
//               con su color de identidad. Es la animación por capas de
//               siempre — este archivo no participa.
//   SETTLE      pausa breve. Se ve el objeto CUBIERTO DE BOTS, que es el
//               fotograma que la spec §8 pide explícitamente y que antes
//               no existía: el color aparecía mientras todavía volaban.
//   ACTIVATION  parpadeo. Determinista por índice de agente (fase áurea),
//               nunca `Math.random` por cuadro: un random por cuadro da
//               ruido de televisión, no una red encendiéndose.
//   FORMATION   cada tanda de regiones se transforma, y dentro de cada
//               región el material avanza desde la semilla hacia afuera.
//
// El repliegue no necesita NADA de esto al revés: como el tint es una
// función pura de `elapsed`, correr el reloj hacia atrás revierte la
// transformación sola (material -> agentes -> vuelo), que es justo lo que
// pide la spec §22. Por eso el tint no guarda estado entre cuadros.

import { easeInOutCubic, GOLDEN_ANGLE } from "../core/kinematics";
import { NO_REGION, type MaterialMap } from "./material-map";

export const MATERIAL_PHASE = {
  /** Los Material Bots todavía están viajando. */
  SPREAD: 0,
  /** Cubren la superficie y se asientan. */
  SETTLE: 1,
  /** Parpadeo de activación. */
  ACTIVATION: 2,
  /** Las regiones se transforman en material. */
  FORMATION: 3,
  /** Terminado. */
  COMPLETE: 4,
} as const;

export type MaterialPhase = (typeof MATERIAL_PHASE)[keyof typeof MATERIAL_PHASE];

export const MATERIAL_PHASE_LABELS: readonly string[] = [
  "cubriendo superficie",
  "asentado",
  "activación",
  "formando material",
  "material completo",
];

/** Pausa con la superficie ya cubierta, antes del parpadeo. */
export const SETTLE_DURATION = 0.45;
/** Cuánto dura el parpadeo de activación. */
export const ACTIVATION_DURATION = 0.9;
/** Cuánto tarda una tanda de regiones en transformarse. */
export const SLOT_DURATION = 0.8;
/**
 * Solape entre tandas: con 0 se cortan en seco una tras otra; con un
 * solape chico la siguiente ya está arrancando cuando la anterior termina,
 * que es lo que hace que se lea como una transformación que recorre el
 * objeto y no como N animaciones pegadas. Mismo criterio (y mismo valor)
 * que GROUP_OVERLAP en la cinemática.
 */
export const SLOT_OVERLAP = 0.25;
/** Fracción de la tanda que se va en escalonar a los agentes de la región. */
export const SLOT_STAGGER_FRACTION = 0.6;

/** Ciclos de parpadeo durante la activación. */
export const PULSE_CYCLES = 2.5;
/** Cuánto sube el brillo en el pico del parpadeo. */
export const FLASH_GAIN = 1.4;
/** Cuánto sube el brillo justo cuando un agente se convierte en material. */
export const TRANSITION_GAIN = 0.9;

export interface MaterialTimeline {
  /** Segundo en que termina el vuelo (los bots ya cubren la superficie). */
  readonly travelEnd: number;
  readonly settleEnd: number;
  readonly activationEnd: number;
  readonly slots: number;
  readonly slotDuration: number;
  /** Cuánto se corre cada tanda respecto de la anterior. */
  readonly slotStep: number;
  /** Segundo en que todo el material está puesto. */
  readonly end: number;
}

export function planMaterialTimeline(travelEnd: number, slots: number): MaterialTimeline {
  const n = Math.max(1, slots);
  const settleEnd = travelEnd + SETTLE_DURATION;
  const activationEnd = settleEnd + ACTIVATION_DURATION;
  const slotStep = SLOT_DURATION * (1 - SLOT_OVERLAP);
  return {
    travelEnd,
    settleEnd,
    activationEnd,
    slots: n,
    slotDuration: SLOT_DURATION,
    slotStep,
    end: activationEnd + (n - 1) * slotStep + SLOT_DURATION,
  };
}

/**
 * ¿El tint puede cambiar de un cuadro al otro en este instante?
 *
 * Sólo durante la ACTIVACIÓN (parpadeo) y la FORMACIÓN (el material
 * avanzando). Mientras los bots vuelan y mientras se asientan, todos
 * llevan el mismo color de identidad constante; una vez completo, todos
 * llevan su material final. En esos tramos reescribir count*3 floats por
 * cuadro y volver a subirlos a la GPU es trabajo puro para nadie — medido:
 * a 10.000 agentes el cuadro al formar pasó de 25 a 34 ms por hacerlo.
 *
 * El llamador igual tiene que escribirlo UNA vez al entrar a cada etapa
 * estática, porque el valor constante de "asentado" no es el mismo que el
 * de "completo".
 */
export function materialTintIsStatic(elapsed: number, t: MaterialTimeline): boolean {
  const phase = materialPhaseAt(elapsed, t);
  return phase === MATERIAL_PHASE.SPREAD || phase === MATERIAL_PHASE.SETTLE || phase === MATERIAL_PHASE.COMPLETE;
}

export function materialPhaseAt(elapsed: number, t: MaterialTimeline): MaterialPhase {
  if (elapsed < t.travelEnd) return MATERIAL_PHASE.SPREAD;
  if (elapsed < t.settleEnd) return MATERIAL_PHASE.SETTLE;
  if (elapsed < t.activationEnd) return MATERIAL_PHASE.ACTIVATION;
  if (elapsed < t.end) return MATERIAL_PHASE.FORMATION;
  return MATERIAL_PHASE.COMPLETE;
}

/** Progreso 0..1 de una tanda de regiones. */
export function slotProgress(elapsed: number, t: MaterialTimeline, slot: number): number {
  const start = t.activationEnd + slot * t.slotStep;
  const local = (elapsed - start) / t.slotDuration;
  return local <= 0 ? 0 : local >= 1 ? 1 : local;
}

/**
 * Cuánto material tiene un agente: 0 = sigue siendo un bot, 1 = material
 * puro. Dentro de su tanda, los agentes cercanos a la semilla se
 * transforman primero (`spread` es la distancia normalizada a la semilla),
 * así el material se propaga por la superficie en vez de aparecer de golpe.
 */
export function agentMaterialProgress(
  elapsed: number,
  t: MaterialTimeline,
  slot: number,
  spread: number,
): number {
  const p = slotProgress(elapsed, t, slot);
  if (p <= 0) return 0;
  if (p >= 1) return 1;
  const stagger = SLOT_STAGGER_FRACTION;
  const ramp = 1 - stagger;
  const local = (p - spread * stagger) / ramp;
  return easeInOutCubic(local <= 0 ? 0 : local >= 1 ? 1 : local);
}

/**
 * Multiplicador de brillo del parpadeo de activación (1 = sin cambio).
 *
 * La fase de cada agente sale del ángulo áureo sobre su índice: reparto
 * parejo, determinista y sin tabla. La envolvente crece con el avance de
 * la activación, así arranca salpicado y termina con toda la red
 * encendida — el "✨ ● ✨ ● → ✨ ✨ ✨ ✨" de la spec §10.
 */
export function activationFlash(elapsed: number, t: MaterialTimeline, index: number): number {
  if (elapsed < t.settleEnd || elapsed >= t.activationEnd) return 1;
  const span = t.activationEnd - t.settleEnd;
  const u = span > 0 ? (elapsed - t.settleEnd) / span : 1;
  // Fase por agente en 0..1, sin usar el módulo de un flotante grande.
  const phase = (index * GOLDEN_ANGLE) / (Math.PI * 2);
  const s = Math.sin((u * PULSE_CYCLES + phase) * Math.PI * 2);
  return 1 + FLASH_GAIN * (s > 0 ? s : 0) * u;
}

/**
 * Destello del instante de la transformación: cero en los dos extremos y
 * máximo a mitad de camino, así un agente no pasa de azul a rojo de golpe
 * (spec §17) sino que pega un brillo mientras cambia.
 */
export function transitionFlash(progress: number): number {
  if (progress <= 0 || progress >= 1) return 1;
  return 1 + TRANSITION_GAIN * Math.sin(progress * Math.PI);
}

/** Colores del modo DEBUG de regiones (spec §25). Sólo para depurar. */
export const REGION_DEBUG_COLORS: readonly number[] = [
  0xff3b30, 0x34c759, 0x0a84ff, 0xffd60a, 0xff2d95, 0x30d5c8, 0xaf52de, 0xff9500,
];

const WHITE: readonly [number, number, number] = [1, 1, 1];

/**
 * Escribe el tint por agente (count*3 floats) que el render multiplica
 * sobre el material blanco de la malla.
 *
 * VA EN FLOATS Y PUEDE PASARSE DE 1 a propósito: el parche de shader de
 * rendering/instance-color.ts multiplica el tint tanto sobre el color
 * difuso como sobre la radiancia emissive, así que un valor por encima de
 * 1 es literalmente un destello que el bloom recoge. Sin eso, "parpadear"
 * habría necesitado un shader nuevo.
 *
 * Devuelve `true` si el contenido puede seguir cambiando (hay que volver a
 * subirlo a la GPU) y `false` cuando ya llegó a su estado final y el
 * llamador puede dejar de escribirlo cuadro a cuadro.
 */
export function writeMaterialTint(
  out: Float32Array,
  map: MaterialMap,
  timeline: MaterialTimeline,
  elapsed: number,
  identity: readonly [number, number, number],
  debugRegions = false,
): boolean {
  const { count, region, spread, color, regions } = map;
  const phase = materialPhaseAt(elapsed, timeline);

  if (debugRegions) {
    for (let i = 0; i < count; i++) {
      const r = region[i];
      if (r === NO_REGION) {
        out[i * 3 + 0] = WHITE[0]; out[i * 3 + 1] = WHITE[1]; out[i * 3 + 2] = WHITE[2];
        continue;
      }
      const hex = REGION_DEBUG_COLORS[r % REGION_DEBUG_COLORS.length];
      out[i * 3 + 0] = ((hex >> 16) & 0xff) / 255;
      out[i * 3 + 1] = ((hex >> 8) & 0xff) / 255;
      out[i * 3 + 2] = (hex & 0xff) / 255;
    }
    return false;
  }

  const flashing = phase === MATERIAL_PHASE.ACTIVATION;

  for (let i = 0; i < count; i++) {
    const r = region[i];
    if (r === NO_REGION) {
      // No lleva material (Nanobot de detalle): neutro. El render de esa
      // capa no lee el tint, pero dejarlo en blanco evita que un buffer
      // reusado tiña la figura siguiente.
      out[i * 3 + 0] = WHITE[0]; out[i * 3 + 1] = WHITE[1]; out[i * 3 + 2] = WHITE[2];
      continue;
    }
    const p = agentMaterialProgress(elapsed, timeline, regions[r].slot, spread[i]);
    // Sólo se paga un seno por agente cuando de verdad está pasando algo:
    // durante el parpadeo, o mientras ese agente se está transformando.
    const gain = (flashing ? activationFlash(elapsed, timeline, i) : 1) * (p > 0 && p < 1 ? transitionFlash(p) : 1);
    const mr = color[i * 3 + 0] / 255;
    const mg = color[i * 3 + 1] / 255;
    const mb = color[i * 3 + 2] / 255;
    out[i * 3 + 0] = (identity[0] + (mr - identity[0]) * p) * gain;
    out[i * 3 + 1] = (identity[1] + (mg - identity[1]) * p) * gain;
    out[i * 3 + 2] = (identity[2] + (mb - identity[2]) * p) * gain;
  }

  return phase !== MATERIAL_PHASE.COMPLETE;
}
