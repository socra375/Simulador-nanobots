// Tipos de bot (Fase 31).
//
// Hasta acá el enjambre tenía DOS ejes sin nombre común: la población
// (Microbots, que arman el exoesqueleto) y el rol dentro de Nanobots
// (DETALLE / COLOR). Este módulo introduce un único eje explícito —el
// TIPO de bot— y mapea lo que YA existe, en vez de agregar una capa
// paralela que duplique el sistema.
//
// QUÉ MAPEA A AGENTES REALES Y QUÉ NO, dicho sin maquillaje:
//
//   MICROBOT  -> nodos del exoesqueleto. Existen hoy.
//   UNION     -> vigas del exoesqueleto. Existen hoy: conectan nodos y dan
//                rigidez, y ya se calculan con un árbol de expansión
//                mínima. No es un tipo nuevo: es ponerle nombre a lo que
//                esas vigas ya hacían.
//   NANOBOT   -> rol DETALLE. Existe hoy.
//   MATERIAL  -> rol COLOR. Existe hoy: son los agentes que llevan el
//                color/material del objeto. La lectura honesta es "los que
//                aplican el material", no un sistema de despacho aparte.
//   REPAIR    -> todavía NO hay agentes de este tipo. La entrada que
//                necesita sí existe (validateCoverage devuelve las celdas
//                faltantes). Entra con su handler real, no vacío.
//   TRANSFORM -> todavía NO hay agentes de este tipo. El morph directo ya
//                existe y es la base. Entra con su handler real.
//
// Los dos últimos se declaran acá porque el store y el director tienen que
// poder reconocerlos, pero NO se les inventan agentes: el conteo por tipo
// va a dar 0 y la UI lo dice con todas las letras en vez de mostrar un
// tipo que parece funcionar.

export const BOT_TYPE = {
  /** Estructura principal: la base geométrica sobre la que se apoya todo. */
  MICROBOT: 0,
  /** Detalle y precisión: rellena y sube la resolución de la superficie. */
  NANOBOT: 1,
  /** Conexión estructural: une agentes y capas, y sostiene la estructura. */
  UNION: 2,
  /** Mantenimiento: detecta huecos y los rellena. */
  REPAIR: 3,
  /** Reconfiguración: mueve agentes al cambiar de una forma a otra. */
  TRANSFORM: 4,
  /** Aplica material, acabado y color del objeto. */
  MATERIAL: 5,
} as const;

export type BotType = (typeof BOT_TYPE)[keyof typeof BOT_TYPE];

export const BOT_TYPE_COUNT = 6;

export interface BotTypeInfo {
  readonly type: BotType;
  readonly key: string;
  readonly name: string;
  readonly role: string;
  readonly fn: string;
  /**
   * Tamaño relativo al Nanobot (= 1), sólo para el render. Sigue el orden
   * de la referencia: el Nanobot es el más chico, el Transform el más
   * grande.
   */
  readonly relativeSize: number;
  /**
   * Si los Material Bots pueden pintarlo con el color del objeto.
   *
   * El MICROBOT es el único en `false`, y es una regla dura, no una
   * preferencia: si la estructura base pudiera repintarse se perdería la
   * única referencia visual constante para distinguir estructura de
   * recubrimiento.
   */
  readonly acceptsObjectMaterial: boolean;
  /** Si hoy existen agentes de este tipo, o sólo está declarado el tipo. */
  readonly implemented: boolean;
  /** Qué falta, cuando `implemented` es false. Se muestra en la UI. */
  readonly pendingReason?: string;
  /**
   * Aclaración para un tipo que SÍ existe pero cuya cantidad puede ser 0
   * por razones legítimas. Sin esto, un cero se lee como un bug.
   */
  readonly note?: string;
}

export const BOT_TYPES: readonly BotTypeInfo[] = [
  {
    type: BOT_TYPE.MICROBOT,
    key: "microbot",
    name: "Microbot",
    role: "Estructura principal",
    fn: "Construye el exoesqueleto y la base geométrica",
    relativeSize: 2.2,
    acceptsObjectMaterial: false,
    implemented: true,
  },
  {
    type: BOT_TYPE.NANOBOT,
    key: "nanobot",
    name: "Nanobot",
    role: "Detalle y precisión",
    fn: "Rellena superficies y sube la resolución de la figura",
    relativeSize: 1,
    acceptsObjectMaterial: true,
    implemented: true,
  },
  {
    type: BOT_TYPE.UNION,
    key: "union",
    name: "Union Bot",
    role: "Conexión estructural",
    fn: "Une nodos del exoesqueleto y sostiene la estructura",
    relativeSize: 2.6,
    acceptsObjectMaterial: true,
    implemented: true,
    // Verificado en pantalla: cubo y carro dan 3520 Union Bots contra 480
    // Microbots, pero persona da 0. No es un fallo: las formas humanoides
    // usan huesos reales como nube densa de puntos y no llevan vigas
    // (decisión de la Fase 17, con test que la fija). Sin esta aclaración
    // el 0 se leería como un bug.
    note: "Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas humanoides usan hueso macizo, sin vigas.",
  },
  {
    type: BOT_TYPE.REPAIR,
    key: "repair",
    name: "Repair Bot",
    role: "Mantenimiento",
    fn: "Detecta huecos en la figura y los rellena",
    relativeSize: 1.8,
    acceptsObjectMaterial: true,
    implemented: false,
    pendingReason:
      "La detección de huecos ya existe (cobertura por vóxeles); falta el despacho de agentes que los rellene.",
  },
  {
    type: BOT_TYPE.TRANSFORM,
    key: "transform",
    name: "Transform Bot",
    role: "Reconfiguración",
    fn: "Coordina el cambio de una forma a otra",
    relativeSize: 3,
    acceptsObjectMaterial: true,
    implemented: false,
    pendingReason:
      "El morph directo entre figuras ya funciona, pero lo ejecuta el enjambre entero, no agentes de este tipo.",
  },
  {
    type: BOT_TYPE.MATERIAL,
    key: "material",
    name: "Material Bot",
    role: "Material y recubrimiento",
    fn: "Aplica el color y el material del objeto sobre las demás capas",
    relativeSize: 1.4,
    acceptsObjectMaterial: true,
    implemented: true,
  },
];

export function botTypeInfo(type: number): BotTypeInfo {
  return BOT_TYPES[type] ?? BOT_TYPES[BOT_TYPE.NANOBOT];
}

/**
 * Regla dura: los Material Bots reparten el color del objeto sobre todas
 * las capas MENOS la estructura.
 *
 * Es una función y no un `if` suelto a propósito: la consultan el render y
 * los tests, y tiene que haber un solo lugar donde cambiarla.
 */
export function acceptsObjectMaterial(type: number): boolean {
  return botTypeInfo(type).acceptsObjectMaterial;
}
