// Configuración visual de los tipos de bot (Fase 31).
//
// UN SOLO LUGAR donde cambiar los colores. Antes el verde de DETALLE vivía
// en nanobot-mesh.ts y el blanco hueso de los Microbots en
// microbot-mesh.ts, cada uno como constante suelta; agregar cuatro tipos
// más con ese patrón habría dejado los colores repartidos por medio
// proyecto.
//
// LA DISTINCIÓN QUE SOSTIENE TODO ESTE MÓDULO:
//
//   identityColor      = de qué TIPO es el bot. No cambia nunca.
//   color del objeto   = de qué está hecho lo que se está construyendo.
//                        Lo reparten los Material Bots y sale de la foto.
//
// No son lo mismo y no deben mezclarse. Un Nanobot puede terminar pintado
// de rojo porque el objeto es rojo, y sigue siendo un Nanobot. Por eso la
// lógica NUNCA pregunta por el color para decidir qué hace un agente:
// pregunta por su tipo. Un `if (esRojo) reparar()` sería un bug esperando
// a que alguien cambie la paleta.

import { BOT_TYPE, BOT_TYPE_COUNT, type BotType } from "./bot-types";

export interface BotVisual {
  /** Color de identificación del TIPO. Nunca es el color del objeto. */
  identityColor: number;
  /** Emissive, para que el tipo se distinga también con poca luz. */
  identityEmissive: number;
  /** Intensidad del emissive. */
  emissiveIntensity: number;
}

/**
 * Paleta por tipo. Editable: cambiar un valor acá cambia el color en la
 * simulación, en el inspector y en la leyenda, sin tocar nada más.
 */
export const BOT_VISUALS: Record<BotType, BotVisual> = {
  [BOT_TYPE.MICROBOT]: { identityColor: 0x2f6fd0, identityEmissive: 0x0d2550, emissiveIntensity: 0.35 },
  [BOT_TYPE.NANOBOT]: { identityColor: 0x1c8f5a, identityEmissive: 0x0a3a24, emissiveIntensity: 0.35 },
  [BOT_TYPE.UNION]: { identityColor: 0xd9a41a, identityEmissive: 0x4a3405, emissiveIntensity: 0.4 },
  [BOT_TYPE.REPAIR]: { identityColor: 0xc8342f, identityEmissive: 0x45100e, emissiveIntensity: 0.4 },
  [BOT_TYPE.TRANSFORM]: { identityColor: 0x8b46c4, identityEmissive: 0x2e1244, emissiveIntensity: 0.4 },
  [BOT_TYPE.MATERIAL]: { identityColor: 0x1fb8b0, identityEmissive: 0x0a3d3a, emissiveIntensity: 0.4 },
};

export function botVisual(type: number): BotVisual {
  return BOT_VISUALS[type as BotType] ?? BOT_VISUALS[BOT_TYPE.NANOBOT];
}

// --- Las dos constantes que deciden qué FLORECE (Fase 45) ---
//
// Estaban sueltas en dos archivos que no se conocen —`scene.ts` tenía el
// umbral del bloom y `nanobot-mesh.ts` la intensidad del emissive— y el
// techo de brillo del material se calibraba contra un número inventado
// que no se parecía a ninguno de los dos. Resultado: un material claro
// (hueso, mármol, nieve) seguía floreciendo hasta volverse una mancha
// blanca sin forma, aunque hubiera "un techo".
//
// Acá viven juntas porque son UNA sola pregunta —cuánto tiene que emitir
// algo para que el bloom lo recoja— y porque así `toneScale()` en
// material/material-animation.ts puede DERIVAR su presupuesto en vez de
// adivinarlo, sin importar three.js (los tests corren en node).
//
// Si alguna se toca, el presupuesto se reajusta solo.

/** Umbral del `UnrealBloomPass` de la escena. Por encima de esto, florece. */
export const BLOOM_THRESHOLD = 0.35;

/** `emissiveIntensity` del material que llevan los Material Bots. */
export const MATERIAL_EMISSIVE_INTENSITY = 0.85;

/**
 * Cambia el color de identificación de un tipo en caliente. Existe para
 * que la paleta sea configurable (lo pide la spec) sin que nadie tenga que
 * editar el código fuente ni buscar el color en varios archivos.
 *
 * Devuelve false si el tipo no existe, en vez de escribir una clave
 * inventada en el mapa.
 */
export function setBotIdentityColor(type: number, color: number, emissive?: number): boolean {
  if (!Number.isInteger(type) || type < 0 || type >= BOT_TYPE_COUNT) return false;
  const visual = BOT_VISUALS[type as BotType];
  visual.identityColor = color;
  if (emissive !== undefined) visual.identityEmissive = emissive;
  return true;
}
