// Estado por agente en Structure-of-Arrays (Fase 28).
//
// El brief pide agentes con estado. La tentación es una clase NanoAgent
// con un objeto por agente; a 60.000 agentes eso son 60.000 objetos que
// el GC tiene que rastrear, y el propio brief lo prohíbe (§9, §12). Acá
// cada campo es un TypedArray contiguo indexado por el id del agente: la
// misma disposición que ya usan el buffer de Wasm y el instanceMatrix de
// three.js, así que los datos viajan sin conversiones.
//
// QUÉ HAY Y QUÉ NO, a propósito:
//
// - `role`, `colorWave`, `layer`, `delayFraction` y `target` son arrays
//   que la simulación YA manejaba sueltos. Acá tienen un solo hogar y una
//   sola API, sin copiarlos: se re-apunta a los arrays de la formación,
//   igual que antes (copiarlos costaría ~1 MB por figura a 60.000 y
//   tendría dos fuentes de verdad).
// - `state` es nuevo y lo posee el store. Se escribe durante el mismo
//   recorrido por agente que ya hace la animación (un byte, prácticamente
//   gratis) y lo lee el panel para mostrar en vivo cuántos agentes están
//   en el núcleo, viajando o ya asentados.
// - `energy`, `health`, `material` y `parentId` NO están. Hoy no hay
//   nada que los lea ni los escriba: serían campos decorativos, que es
//   justo lo que el brief prohíbe. Entran cuando entren sus consumidores
//   (materiales y reparación). Agregarlos es una línea acá más el pase
//   que los escriba.
// - `velocity` tampoco: vive en C++ y ningún consumidor de JS la necesita.
//   Espejarla sería duplicar 720 KB para nadie.

import { BOT_TYPE } from "./bot-types";

export const AGENT_STATE = {
  /** Todavía dentro del núcleo: su capa no se reveló. */
  CORE: 0,
  /** Volando del núcleo (o del punto de aterrizaje) hacia su destino. */
  TRAVELING: 1,
  /** Acomodándose en el tramo final del vuelo. */
  ASSEMBLING: 2,
  /** Asentado exacto en su destino. */
  ATTACHED: 3,
  /** Replegándose hacia el núcleo. */
  RETURNING: 4,
  /** Enjambre en reposo: lo mueve la física boid, no una figura. */
  IDLE: 5,
  /**
   * Reservados para la reparación (Fase 9 del brief). Declararlos no
   * cuesta nada y documenta el diseño; hoy nada los produce, y está
   * anotado así a propósito en vez de fingir que el sistema los usa.
   */
  REPAIRING: 6,
  ERROR: 7,
} as const;

export type AgentState = (typeof AGENT_STATE)[keyof typeof AGENT_STATE];

export const AGENT_STATE_NAMES: readonly string[] = [
  "núcleo",
  "viajando",
  "ensamblando",
  "asentado",
  "volviendo",
  "reposo",
  "reparando",
  "error",
];

/**
 * Accesor por agente SIN asignar: es un único objeto que se re-apunta
 * (`seek`). Cómodo para depurar o para lógica que toca pocos agentes.
 *
 * NO retener la referencia: apunta a otro agente en cuanto alguien llame
 * a `seek` de nuevo. Para recorrer muchos agentes, leer los arrays
 * directo — es más rápido y no tiene esta trampa.
 */
export interface AgentRef {
  readonly index: number;
  readonly role: number;
  readonly colorWave: number;
  readonly layer: number;
  readonly state: number;
  readonly botType: number;
  readonly delayFraction: number;
  readonly targetX: number;
  readonly targetY: number;
  readonly targetZ: number;
}

const EMPTY_U8 = new Uint8Array(0);
const EMPTY_F32 = new Float32Array(0);

export interface AgentStore {
  /** Agentes con datos válidos ahora mismo. */
  readonly count: number;
  readonly role: Uint8Array<ArrayBufferLike>;
  readonly colorWave: Uint8Array<ArrayBufferLike>;
  readonly layer: Uint8Array<ArrayBufferLike>;
  readonly delayFraction: Float32Array;
  /** count*3, ya trasladados al centro de la figura. */
  readonly target: Float32Array;
  /** Propiedad del store; uno de AGENT_STATE por agente. */
  readonly state: Uint8Array;
  /**
   * Propiedad del store; uno de BOT_TYPE por agente (Fase 31). Un byte
   * por agente en su propio TypedArray, igual que `state`: sumar un campo
   * al store NO es sumar un objeto por agente.
   */
  readonly botType: Uint8Array;

  /**
   * Apunta el store a los arrays de una formación recién calculada. NO
   * copia: re-apunta, que es lo que venía haciendo la simulación. Si
   * copiara, un cambio de cantidad a mitad de formación dejaría estos
   * arrays con el tamaño viejo.
   */
  adoptFormation(args: {
    count: number;
    role: Uint8Array<ArrayBufferLike>;
    colorWave: Uint8Array<ArrayBufferLike>;
    layer: Uint8Array<ArrayBufferLike>;
    delayFraction: Float32Array;
    target: Float32Array;
  }): void;

  /** Vuelve al reposo: sin figura, todos los agentes en IDLE. */
  reset(count: number, role: Uint8Array<ArrayBufferLike>, target: Float32Array): void;

  /** Pone el mismo estado a todos los agentes activos. */
  fillState(state: AgentState): void;

  /**
   * Deriva el tipo de bot de cada agente a partir de su rol de formación.
   *
   * Los tipos NO son un eje nuevo y paralelo: son el nombre de lo que el
   * enjambre ya hacía. DETALLE son los Nanobots; la capa que lleva el
   * color del objeto son los Material Bots.
   */
  assignTypesFromRoles(colorRole: number): void;

  /** Cuenta agentes por tipo en `out` (largo BOT_TYPE_COUNT), sin asignar. */
  countByType(out: Uint32Array): Uint32Array;

  /**
   * Cuenta agentes por estado en `out` (largo 8), sin asignar. Devuelve
   * el mismo array para poder encadenar.
   */
  countByState(out: Uint32Array): Uint32Array;

  at(index: number): AgentRef;
}

export function createAgentStore(): AgentStore {
  let count = 0;
  let role: Uint8Array<ArrayBufferLike> = EMPTY_U8;
  let colorWave: Uint8Array<ArrayBufferLike> = EMPTY_U8;
  let layer: Uint8Array<ArrayBufferLike> = EMPTY_U8;
  let delayFraction: Float32Array = EMPTY_F32;
  let target: Float32Array = EMPTY_F32;
  let state = new Uint8Array(0);
  let botType = new Uint8Array(0);

  // Flyweight: un solo objeto re-apuntado, nunca uno por agente.
  let cursor = 0;
  const ref: AgentRef = {
    get index() { return cursor; },
    get role() { return role[cursor] ?? 0; },
    get colorWave() { return colorWave[cursor] ?? 0; },
    get layer() { return layer[cursor] ?? 0; },
    get state() { return state[cursor] ?? AGENT_STATE.IDLE; },
    get botType() { return botType[cursor] ?? BOT_TYPE.NANOBOT; },
    get delayFraction() { return delayFraction[cursor] ?? 0; },
    get targetX() { return target[cursor * 3 + 0] ?? 0; },
    get targetY() { return target[cursor * 3 + 1] ?? 0; },
    get targetZ() { return target[cursor * 3 + 2] ?? 0; },
  };

  function ensureStateCapacity(n: number): void {
    if (state.length >= n) return;
    state = new Uint8Array(n);
  }

  function ensureTypeCapacity(n: number): void {
    if (botType.length >= n) return;
    botType = new Uint8Array(n);
  }

  return {
    get count() { return count; },
    get role() { return role; },
    get colorWave() { return colorWave; },
    get layer() { return layer; },
    get delayFraction() { return delayFraction; },
    get target() { return target; },
    get state() { return state; },
    get botType() { return botType; },

    adoptFormation(args): void {
      count = args.count;
      role = args.role;
      colorWave = args.colorWave;
      layer = args.layer;
      delayFraction = args.delayFraction;
      target = args.target;
      ensureStateCapacity(count);
      state.fill(AGENT_STATE.CORE, 0, count);
      ensureTypeCapacity(count);
      // Por defecto todos son Nanobots; adoptFormation no conoce el código
      // del rol COLOR (vive en shapes) y pedírselo acá acoplaría el store a
      // las formas. Lo afina assignTypesFromRoles.
      botType.fill(BOT_TYPE.NANOBOT, 0, count);
    },

    reset(nextCount, nextRole, nextTarget): void {
      count = nextCount;
      role = nextRole;
      colorWave = EMPTY_U8;
      layer = EMPTY_U8;
      delayFraction = EMPTY_F32;
      target = nextTarget;
      ensureStateCapacity(count);
      state.fill(AGENT_STATE.IDLE, 0, count);
      ensureTypeCapacity(count);
      botType.fill(BOT_TYPE.NANOBOT, 0, count);
    },

    fillState(next): void {
      ensureStateCapacity(count);
      state.fill(next, 0, count);
    },

    assignTypesFromRoles(colorRole): void {
      ensureTypeCapacity(count);
      for (let i = 0; i < count; i++) {
        botType[i] = role[i] === colorRole ? BOT_TYPE.MATERIAL : BOT_TYPE.NANOBOT;
      }
    },

    countByType(out): Uint32Array {
      out.fill(0);
      for (let i = 0; i < count; i++) out[botType[i]]++;
      return out;
    },

    countByState(out): Uint32Array {
      out.fill(0);
      for (let i = 0; i < count; i++) out[state[i]]++;
      return out;
    },

    at(index): AgentRef {
      cursor = index;
      return ref;
    },
  };
}
