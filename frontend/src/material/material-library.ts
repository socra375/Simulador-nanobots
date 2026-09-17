// Biblioteca de materiales (Fase 45).
//
// QUÉ PREGUNTA CONTESTA ESTE ARCHIVO, Y CUÁL NO.
//
//   contesta:  "de qué está hecho el objeto"   -> un color y cómo brilla
//   NO contesta: "dónde va cada color"          -> eso sigue siendo
//                material-map.ts, o sea POSICIÓN + REGIÓN
//
// Elegir un material NO reemplaza al mapa de material ni lo puentea: el
// mapa sigue partiendo la figura en regiones contiguas y sigue decidiendo
// el orden de propagación desde el ápice. Lo único que cambia es de dónde
// sale el color de esas regiones — de la foto, o de acá.
//
// DOS PROCEDENCIAS, Y LA DIFERENCIA SE DICE (igual que en MATERIAL_SOURCE):
//
//   biblioteca  el material está acá abajo, con un color elegido a mano
//               mirando el material real (el hueso no es blanco puro; es
//               crema con un amarillo bajo).
//   derivado    el nombre no está en la biblioteca. Se acepta igual —la
//               spec pide materiales ficticios— pero el color sale de un
//               hash del nombre, y eso se declara en la UI en vez de
//               hacerlo pasar por un color "conocido". "Vibranium" tiene
//               una entrada real; "flogisto" no, y su color es una
//               convención reproducible, no un dato.
//
// EL CAMPO `glow` EXISTE POR UN BUG REAL, no por decoración: el tint por
// instancia multiplica el emissive del material (ver instance-color.ts) y
// el bloom de la escena recoge todo lo que pase de 0.35. Un material claro
// —hueso, nieve, mármol, o el blanco del fondo de una foto mal recortada—
// satura los tres canales y el objeto entero florece hasta perder la
// forma. `glow` es cuánto presupuesto de luminancia se le concede a cada
// material: el oro pulido brilla, el hueso no. Lo aplica
// material-animation.ts (toneScale), que es donde vive el reloj y el
// brillo; acá sólo se declara el dato.

/** Cuánto varía el tono agente a agente, como fracción. */
export const MAX_VARIATION = 0.3;

export interface MaterialDefinition {
  /** Identificador estable, sin acentos ni espacios. */
  readonly id: string;
  /** Nombre que se muestra. */
  readonly name: string;
  /** Color base, 0xRRGGBB. */
  readonly color: number;
  /**
   * Cuánta luz puede emitir, 0..1. No es "cuán claro es el color" —es
   * cuánto le corresponde BRILLAR. El mercurio y el hueso pueden tener
   * una claridad parecida y brillar completamente distinto.
   */
  readonly glow: number;
  /**
   * Cuánto varía el tono de un agente al de al lado, 0..MAX_VARIATION.
   * El hueso, la madera y el mármol tienen veta; el plástico no. Sin esto
   * todo material se ve como plástico pintado.
   */
  readonly variation: number;
  /** Para agrupar en el desplegable. */
  readonly family: MaterialFamily;
  /** Otros nombres con los que el usuario puede escribirlo. */
  readonly aliases?: readonly string[];
}

export type MaterialFamily = "metal" | "mineral" | "organico" | "construccion" | "elemento" | "ficcion";

export const MATERIAL_FAMILY_LABELS: Record<MaterialFamily, string> = {
  metal: "Metales",
  mineral: "Minerales y piedras",
  organico: "Orgánicos",
  construccion: "Fabricados",
  elemento: "Elementos",
  ficcion: "Ficción",
};

export const MATERIAL_LIBRARY: readonly MaterialDefinition[] = [
  // --- Metales ---
  { id: "oro", name: "Oro", color: 0xd4af37, glow: 0.85, variation: 0.06, family: "metal", aliases: ["gold", "dorado", "aureo"] },
  { id: "plata", name: "Plata", color: 0xc0c4c8, glow: 0.8, variation: 0.05, family: "metal", aliases: ["silver", "plateado"] },
  { id: "cobre", name: "Cobre", color: 0xb87333, glow: 0.7, variation: 0.08, family: "metal", aliases: ["copper"] },
  { id: "bronce", name: "Bronce", color: 0x9c7a3c, glow: 0.65, variation: 0.08, family: "metal", aliases: ["bronze", "laton", "latón"] },
  { id: "hierro", name: "Hierro", color: 0x6b6b6e, glow: 0.35, variation: 0.1, family: "metal", aliases: ["iron", "fierro"] },
  { id: "acero", name: "Acero", color: 0x8c9196, glow: 0.6, variation: 0.05, family: "metal", aliases: ["steel", "inoxidable", "acero inoxidable"] },
  { id: "titanio", name: "Titanio", color: 0x7d8890, glow: 0.55, variation: 0.05, family: "metal", aliases: ["titanium"] },
  { id: "aluminio", name: "Aluminio", color: 0xa8adb3, glow: 0.6, variation: 0.04, family: "metal", aliases: ["aluminum", "aluminium"] },
  { id: "plomo", name: "Plomo", color: 0x59606b, glow: 0.2, variation: 0.06, family: "metal", aliases: ["lead"] },
  { id: "cromo", name: "Cromo", color: 0xbfc7cc, glow: 0.95, variation: 0.03, family: "metal", aliases: ["chrome", "cromado"] },
  { id: "oxido", name: "Óxido", color: 0x8a3b1e, glow: 0.2, variation: 0.16, family: "metal", aliases: ["herrumbre", "rust", "oxidado", "corroido", "corroído"] },

  // --- Minerales y piedras ---
  { id: "diamante", name: "Diamante", color: 0xb8e6f0, glow: 0.9, variation: 0.04, family: "mineral", aliases: ["diamond", "brillante"] },
  { id: "rubi", name: "Rubí", color: 0xb0121c, glow: 0.8, variation: 0.06, family: "mineral", aliases: ["ruby"] },
  { id: "esmeralda", name: "Esmeralda", color: 0x0f7d4a, glow: 0.8, variation: 0.06, family: "mineral", aliases: ["emerald"] },
  { id: "zafiro", name: "Zafiro", color: 0x0f3fa8, glow: 0.8, variation: 0.06, family: "mineral", aliases: ["sapphire"] },
  { id: "amatista", name: "Amatista", color: 0x7b4bb5, glow: 0.7, variation: 0.07, family: "mineral", aliases: ["amethyst"] },
  { id: "ambar", name: "Ámbar", color: 0xc07a1e, glow: 0.65, variation: 0.1, family: "mineral", aliases: ["amber", "resina"] },
  { id: "jade", name: "Jade", color: 0x3d8b6b, glow: 0.5, variation: 0.1, family: "mineral" },
  { id: "marmol", name: "Mármol", color: 0xcfc9bd, glow: 0.18, variation: 0.14, family: "mineral", aliases: ["marble"] },
  { id: "granito", name: "Granito", color: 0x6e6a67, glow: 0.15, variation: 0.18, family: "mineral", aliases: ["granite"] },
  { id: "obsidiana", name: "Obsidiana", color: 0x17161c, glow: 0.45, variation: 0.08, family: "mineral", aliases: ["obsidian", "vidrio volcanico"] },
  { id: "cuarzo", name: "Cuarzo", color: 0xd8cfd6, glow: 0.6, variation: 0.08, family: "mineral", aliases: ["quartz", "cristal de roca"] },
  { id: "perla", name: "Perla", color: 0xd6cdc2, glow: 0.4, variation: 0.07, family: "mineral", aliases: ["pearl", "nacar", "nácar"] },
  { id: "carbon", name: "Carbón", color: 0x24242a, glow: 0.1, variation: 0.14, family: "mineral", aliases: ["coal", "grafito", "carbono"] },
  { id: "arena", name: "Arena", color: 0xc2a678, glow: 0.15, variation: 0.14, family: "mineral", aliases: ["sand", "arenisca"] },
  { id: "tierra", name: "Tierra", color: 0x5c4326, glow: 0.08, variation: 0.18, family: "mineral", aliases: ["soil", "barro", "lodo"] },

  // --- Orgánicos ---
  { id: "piel", name: "Piel", color: 0xd8a184, glow: 0.12, variation: 0.1, family: "organico", aliases: ["skin", "carne cutanea", "epidermis", "cutis"] },
  { id: "hueso", name: "Hueso", color: 0xded3b4, glow: 0.12, variation: 0.13, family: "organico", aliases: ["bone", "esqueleto", "huesos", "calcio"] },
  { id: "musculo", name: "Músculo", color: 0x9e2b28, glow: 0.18, variation: 0.14, family: "organico", aliases: ["muscle", "carne", "tejido muscular"] },
  { id: "sangre", name: "Sangre", color: 0x7a0c12, glow: 0.3, variation: 0.1, family: "organico", aliases: ["blood", "hemoglobina"] },
  { id: "cartilago", name: "Cartílago", color: 0xc8c3b0, glow: 0.14, variation: 0.09, family: "organico", aliases: ["cartilage", "tendon", "tendón", "ligamento"] },
  { id: "esmalte", name: "Esmalte dental", color: 0xe4e0cf, glow: 0.3, variation: 0.06, family: "organico", aliases: ["diente", "dientes", "tooth", "enamel", "marfil"] },
  { id: "cabello", name: "Cabello", color: 0x3a2418, glow: 0.12, variation: 0.14, family: "organico", aliases: ["hair", "pelo", "pelaje"] },
  { id: "cuero", name: "Cuero", color: 0x6b4327, glow: 0.12, variation: 0.12, family: "organico", aliases: ["leather", "piel curtida"] },
  { id: "madera", name: "Madera", color: 0x8a5a2b, glow: 0.1, variation: 0.16, family: "organico", aliases: ["wood", "roble", "pino", "tronco"] },
  { id: "hoja", name: "Hoja / planta", color: 0x3f7d29, glow: 0.2, variation: 0.14, family: "organico", aliases: ["leaf", "planta", "vegetal", "cesped", "césped", "musgo"] },
  { id: "coral", name: "Coral", color: 0xd4674f, glow: 0.35, variation: 0.12, family: "organico" },
  { id: "chocolate", name: "Chocolate", color: 0x4a2a18, glow: 0.15, variation: 0.08, family: "organico", aliases: ["cacao"] },

  // --- Fabricados ---
  { id: "vidrio", name: "Vidrio", color: 0x9fd6de, glow: 0.55, variation: 0.05, family: "construccion", aliases: ["glass", "cristal"] },
  { id: "ceramica", name: "Cerámica", color: 0xd9cbb8, glow: 0.2, variation: 0.08, family: "construccion", aliases: ["ceramic", "porcelana", "loza", "barro cocido"] },
  { id: "plastico", name: "Plástico", color: 0xd8483f, glow: 0.3, variation: 0.03, family: "construccion", aliases: ["plastic", "polimero", "polímero", "acrilico", "acrílico"] },
  { id: "caucho", name: "Caucho", color: 0x232327, glow: 0.05, variation: 0.05, family: "construccion", aliases: ["goma", "rubber", "neumatico", "neumático"] },
  { id: "hormigon", name: "Hormigón", color: 0x9a9791, glow: 0.1, variation: 0.12, family: "construccion", aliases: ["concreto", "cemento", "concrete"] },
  { id: "ladrillo", name: "Ladrillo", color: 0x9c4a2f, glow: 0.12, variation: 0.14, family: "construccion", aliases: ["brick", "adobe"] },
  { id: "tela", name: "Tela", color: 0x3f5f9c, glow: 0.1, variation: 0.1, family: "construccion", aliases: ["fabric", "algodon", "algodón", "lana", "seda", "textil"] },
  { id: "papel", name: "Papel", color: 0xd2cdbe, glow: 0.12, variation: 0.08, family: "construccion", aliases: ["paper", "carton", "cartón"] },
  { id: "fibra-carbono", name: "Fibra de carbono", color: 0x2b2e33, glow: 0.35, variation: 0.06, family: "construccion", aliases: ["carbon fiber", "fibra"] },
  { id: "neon", name: "Neón", color: 0x2fe6ff, glow: 1, variation: 0.04, family: "construccion", aliases: ["neon", "led", "luz"] },

  // --- Elementos ---
  { id: "agua", name: "Agua", color: 0x2f7fb5, glow: 0.5, variation: 0.08, family: "elemento", aliases: ["water", "liquido", "líquido", "mar"] },
  { id: "hielo", name: "Hielo", color: 0x9fd3e8, glow: 0.55, variation: 0.08, family: "elemento", aliases: ["ice", "escarcha", "nieve", "snow"] },
  { id: "lava", name: "Lava", color: 0xe04a10, glow: 1, variation: 0.12, family: "elemento", aliases: ["magma", "roca fundida"] },
  { id: "fuego", name: "Fuego", color: 0xf07018, glow: 1, variation: 0.14, family: "elemento", aliases: ["fire", "llama", "flama"] },
  { id: "humo", name: "Humo", color: 0x5a5a60, glow: 0.2, variation: 0.12, family: "elemento", aliases: ["smoke", "niebla", "ceniza"] },
  { id: "mercurio", name: "Mercurio", color: 0xaeb4bc, glow: 0.9, variation: 0.04, family: "elemento", aliases: ["azogue", "mercury"] },

  // --- Ficción ---
  { id: "vibranium", name: "Vibranium", color: 0x4a5a86, glow: 0.7, variation: 0.06, family: "ficcion", aliases: ["vibranio"] },
  { id: "adamantium", name: "Adamantium", color: 0x8f98a6, glow: 0.85, variation: 0.04, family: "ficcion", aliases: ["adamantio", "adamantina"] },
  { id: "mithril", name: "Mithril", color: 0xd3dde8, glow: 0.8, variation: 0.04, family: "ficcion", aliases: ["mitril", "mitrilo"] },
  { id: "kriptonita", name: "Kriptonita", color: 0x4cd93a, glow: 1, variation: 0.08, family: "ficcion", aliases: ["kryptonite", "criptonita"] },
  { id: "uru", name: "Uru", color: 0x6d6257, glow: 0.6, variation: 0.08, family: "ficcion" },
  { id: "orichalcum", name: "Oricalco", color: 0xc98c2e, glow: 0.85, variation: 0.07, family: "ficcion", aliases: ["orichalcum", "oricalco"] },
  { id: "eterio", name: "Eterio", color: 0x9b5ce6, glow: 1, variation: 0.1, family: "ficcion", aliases: ["ether", "eter", "éter", "energia", "energía", "plasma"] },
  { id: "antimateria", name: "Antimateria", color: 0xff2fb0, glow: 1, variation: 0.06, family: "ficcion", aliases: ["antimatter"] },
];

/** De dónde salió el color de un material resuelto. */
export const MATERIAL_ORIGIN = {
  /** Está en la biblioteca: el color es una elección deliberada. */
  LIBRARY: 0,
  /** No está: el color sale de un hash del nombre, y se dice. */
  DERIVED: 1,
} as const;

export type MaterialOrigin = (typeof MATERIAL_ORIGIN)[keyof typeof MATERIAL_ORIGIN];

export interface ResolvedMaterial {
  readonly definition: MaterialDefinition;
  readonly origin: MaterialOrigin;
  /** Lo que escribió el usuario, tal cual. */
  readonly query: string;
}

/**
 * Normaliza para comparar: minúsculas, sin acentos, sin puntuación y con
 * un solo espacio entre palabras. Así "Ámbar", "ambar" y "AMBAR " son la
 * misma consulta, que es lo que espera cualquiera que escriba a mano.
 */
export function normalizeMaterialName(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/[\s-]+/g, " ")
    .trim();
}

/** Todos los nombres con los que se puede pedir una definición. */
function keysOf(def: MaterialDefinition): string[] {
  return [def.id, def.name, ...(def.aliases ?? [])].map(normalizeMaterialName);
}

const BY_KEY = new Map<string, MaterialDefinition>();
for (const def of MATERIAL_LIBRARY) {
  for (const key of keysOf(def)) {
    // El primero gana: si dos materiales comparten un alias, se queda el
    // que aparece antes en la biblioteca, y eso es estable porque la
    // biblioteca es una lista literal, no un objeto reordenable.
    if (!BY_KEY.has(key)) BY_KEY.set(key, def);
  }
}

/**
 * Hash FNV-1a de 32 bits. Determinista y sin dependencias: el mismo nombre
 * da el mismo color en cualquier máquina y en cualquier sesión, que es lo
 * que pide la spec §20.
 */
export function hashName(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/** HSL a 0xRRGGBB, con h en vueltas (0..1) y s/l en 0..1. */
export function hslToHex(h: number, s: number, l: number): number {
  const f = (n: number): number => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(Math.max(0, Math.min(1, v)) * 255);
  };
  return (f(0) << 16) | (f(8) << 8) | f(4);
}

/**
 * Material inventado a partir de su nombre.
 *
 * El tono sale del hash; la saturación y la claridad NO, y eso es
 * deliberado: quedan fijas en una banda segura para que ningún nombre
 * pueda producir un blanco que sature el bloom ni un negro invisible. Un
 * material inventado tiene que verse como un material, no como un error.
 */
export function derivedMaterial(query: string): MaterialDefinition {
  const normalized = normalizeMaterialName(query);
  const h = hashName(normalized);
  const hue = (h % 360) / 360;
  // Segundo y tercer byte del hash: variaciones chicas dentro de la banda
  // segura, para que dos nombres parecidos no den exactamente el mismo
  // material salvo por el tono.
  const sat = 0.45 + ((h >>> 8) & 0xff) / 255 * 0.3;
  const light = 0.42 + ((h >>> 16) & 0xff) / 255 * 0.12;
  return {
    id: `derivado-${normalized.replace(/\s/g, "-") || "sin-nombre"}`,
    name: query.trim() || "material sin nombre",
    color: hslToHex(hue, sat, light),
    glow: 0.55,
    variation: 0.08,
    family: "ficcion",
  };
}

/**
 * Resuelve lo que el usuario escribió o eligió.
 *
 * El orden es exacto → subcadena → derivado, y la subcadena elige la
 * CLAVE MÁS LARGA que aparezca en la consulta, no la primera: sin eso,
 * "acero inoxidable" caería en "acero" sólo por estar antes en la lista, y
 * "fibra de carbono" caería en "carbono". Con empate de longitud gana el
 * orden de la biblioteca, que es fijo.
 */
export function resolveMaterial(query: string): ResolvedMaterial | null {
  const normalized = normalizeMaterialName(query);
  if (!normalized) return null;

  const exact = BY_KEY.get(normalized);
  if (exact) return { definition: exact, origin: MATERIAL_ORIGIN.LIBRARY, query };

  let best: MaterialDefinition | null = null;
  let bestLength = 0;
  for (const def of MATERIAL_LIBRARY) {
    for (const key of keysOf(def)) {
      if (key.length <= bestLength) continue;
      if (normalized.includes(key) || key.includes(normalized)) {
        best = def;
        bestLength = key.length;
      }
    }
  }
  if (best) return { definition: best, origin: MATERIAL_ORIGIN.LIBRARY, query };

  return { definition: derivedMaterial(query), origin: MATERIAL_ORIGIN.DERIVED, query };
}

/** Etiqueta honesta de procedencia, para la UI. */
export function materialOriginLabel(resolved: ResolvedMaterial): string {
  return resolved.origin === MATERIAL_ORIGIN.LIBRARY
    ? "color de biblioteca"
    : "no está en la biblioteca: color derivado del nombre";
}

/** Nombres de la biblioteca agrupados por familia, para el desplegable. */
export function materialNamesByFamily(): Array<{ family: MaterialFamily; label: string; names: string[] }> {
  const families: MaterialFamily[] = ["metal", "mineral", "organico", "construccion", "elemento", "ficcion"];
  return families.map((family) => ({
    family,
    label: MATERIAL_FAMILY_LABELS[family],
    names: MATERIAL_LIBRARY.filter((d) => d.family === family).map((d) => d.name),
  }));
}
