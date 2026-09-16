import { SHAPE_HALF_EXTENT } from "./constants";
import { anillo, corazon, cruz, cubo, esfera, estrella, piramide } from "./primitives";
import { carro, persona, telefono } from "./composites";
import { brazo, cabeza, mano, pie, pierna, torso, CABEZA_PARTS } from "./anatomy";
import {
  brazoBones,
  cabezaBones,
  manoBones,
  personaBones,
  pieBones,
  piernaBones,
  torsoBones,
} from "./bones";

// Registro de formas (Fase 27d).
//
// Antes esto eran TRES estructuras paralelas que había que mantener
// sincronizadas a mano — `SHAPE_GENERATORS`, `SHAPE_ALIASES` y
// `HUMANOID_BONE_GENERATORS` — más un `if (canonical === "cabeza")`
// enterrado en el pipeline de formación. Agregar una forma con huesos
// propios obligaba a tocar los tres lugares y a acordarse del cuarto.
//
// Ahora cada forma se declara UNA vez, con todo lo suyo junto.

export interface ShapeColorPart {
  readonly color: number;
  readonly weight: number;
  readonly generator: (count: number) => Float32Array;
}

/** Nube con color, para las formas que lo traen (hoy: el escaneo). */
export interface ColoredCloud {
  readonly points: Float32Array;
  /** count*3 bytes RGB, alineado punto a punto con `points`. */
  readonly colors: Uint8Array;
}

export interface ShapeDef {
  readonly name: string;
  readonly aliases: readonly string[];
  /** Nube de puntos del tejido/superficie. Todas las formas la tienen. */
  readonly generate: (count: number) => Float32Array;
  /**
   * Huesos reales para el exoesqueleto de Microbots. Sin esto,
   * buildExoskeleton cae solo en la rama genérica (anclas por
   * farthest-point + MST), que es lo correcto para cubo/carro/escaneo.
   */
  readonly bones?: (count: number) => Float32Array;
  /**
   * Olas de color propias de la forma, con tonos fijos por parte (Fase
   * 21). Sin esto, las olas salen del histograma de la foto adjuntada,
   * que es el comportamiento de todas las demás formas.
   */
  readonly colorParts?: readonly ShapeColorPart[];
  /**
   * Variante de `generate` que además devuelve UN COLOR POR PUNTO (Fase
   * 40). Opcional: las 17 formas predefinidas no la declaran y su
   * comportamiento no cambia en nada.
   *
   * POR QUÉ ES UNA FUNCIÓN QUE DEVUELVE LAS DOS COSAS JUNTAS, y no un
   * `pointColors(count)` aparte: `formShapeWithRoles` llama al generador
   * varias veces (una para DETALLE y una por ola de color), y cada llamada
   * resamplea por su cuenta. Con dos funciones separadas, la segunda
   * llamada devolvería los colores de OTRO muestreo y cada agente
   * terminaría con el color de un punto que no es el suyo.
   */
  readonly generateWithColor?: (count: number) => ColoredCloud;
}

const SHAPES = new Map<string, ShapeDef>();
const ALIASES = new Map<string, string>();

// Cuántas veces se registró cada nombre. Casi todas las formas se
// registran una sola vez al cargar el módulo, pero "escaneo" se
// re-registra con puntos nuevos en CADA reconstrucción 3D (ver
// registerCustomScan). Cualquier cosa que cachee algo derivado de un
// generador tiene que poder notar ese cambio; si no, se queda con la
// figura del escaneo anterior.
const REVISIONS = new Map<string, number>();

export function registerShape(def: ShapeDef): void {
  SHAPES.set(def.name, def);
  for (const alias of def.aliases) ALIASES.set(alias, def.name);
  REVISIONS.set(def.name, (REVISIONS.get(def.name) ?? 0) + 1);
}

/** Cambia cada vez que se re-registra la forma. Clave de invalidación. */
export function shapeRevision(name: string): number {
  return REVISIONS.get(name) ?? 0;
}

export function getShape(name: string): ShapeDef | null {
  return SHAPES.get(name) ?? null;
}

registerShape({ name: "cubo", aliases: ["caja", "dado"], generate: cubo });
registerShape({ name: "esfera", aliases: ["bola", "globo", "planeta"], generate: esfera });
registerShape({ name: "piramide", aliases: ["triangulo"], generate: piramide });
registerShape({ name: "estrella", aliases: [], generate: estrella });
registerShape({ name: "anillo", aliases: ["dona", "donut", "rosquilla", "toro"], generate: anillo });
registerShape({ name: "corazon", aliases: ["amor", "love"], generate: corazon });
registerShape({ name: "cruz", aliases: ["plus", "mas"], generate: cruz });
registerShape({ name: "carro", aliases: ["auto", "coche", "vehiculo"], generate: carro });
registerShape({ name: "telefono", aliases: ["celular", "movil", "smartphone"], generate: telefono });
registerShape({
  name: "persona",
  aliases: ["personaje", "humano", "gente"],
  generate: persona,
  bones: personaBones,
});
registerShape({
  name: "cabeza",
  aliases: [],
  generate: cabeza,
  bones: cabezaBones,
  colorParts: CABEZA_PARTS,
});
registerShape({ name: "torso", aliases: ["tronco"], generate: torso, bones: torsoBones });
registerShape({ name: "brazo", aliases: ["brazos"], generate: brazo, bones: brazoBones });
registerShape({ name: "pierna", aliases: ["piernas"], generate: pierna, bones: piernaBones });
registerShape({ name: "mano", aliases: ["manos"], generate: mano, bones: manoBones });
registerShape({ name: "pie", aliases: ["pies"], generate: pie, bones: pieBones });

const COMBINING_DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function normalizeName(input: string): string {
  return input.normalize("NFD").replace(COMBINING_DIACRITICS, "").toLowerCase().trim();
}

// Resuelve lo que escribió el usuario (con sinónimos y sin acentos) al
// nombre canónico de una forma soportada, o null si no matchea ninguna.
export function resolveShapeName(input: string): string | null {
  const key = normalizeName(input);
  if (SHAPES.has(key)) return key;
  const alias = ALIASES.get(key);
  return alias && SHAPES.has(alias) ? alias : null;
}

export function listSupportedNames(): string[] {
  return [...SHAPES.keys()];
}

// Fase 23 — enchufa una nube de puntos externa (p.ej. la reconstrucción
// por "visual hull" de visual-hull.ts, a partir de 4 fotos) al mismo
// pipeline que ya usa cualquier forma con nombre. `source` es una
// cantidad FIJA de puntos (los vóxeles de superficie del escaneo); el
// adaptador la envuelve en un generador `(count) => Float32Array` que
// resamplea con reemplazo hasta `count` — mismo contrato que cumple
// cualquier otra forma. Al no declarar `bones`, el exoesqueleto usa la
// rama genérica (anclas + MST) sin ningún caso especial.
export const CUSTOM_SCAN_NAME = "escaneo";

export function makeGeneratorFromPointCloud(source: Float32Array): (count: number) => Float32Array {
  const withColor = makeColoredGeneratorFromPointCloud(source, null);
  return (count: number) => withColor(count).points;
}

/**
 * Igual que el anterior, pero llevando el color de cada punto junto con su
 * posición. Ambos salen del MISMO muestreo, en la misma pasada: ése es el
 * punto entero de que sea una sola función (ver `generateWithColor`).
 *
 * Si `sourceColors` es null, los colores salen en blanco — el neutro, que
 * el render multiplica sin cambiar nada.
 */
export function makeColoredGeneratorFromPointCloud(
  source: Float32Array,
  sourceColors: Uint8Array | null,
): (count: number) => ColoredCloud {
  const available = Math.floor(source.length / 3);
  // Jitter chico para los puntos que se repiten más allá de la primera
  // pasada (cuando se pide más `count` que vóxeles de superficie hay) —
  // evita esferas perfectamente apiladas en la misma posición. El COLOR no
  // se jitterea: el punto repetido representa el mismo trozo de objeto, así
  // que tiene que llevar el mismo material.
  const jitter = SHAPE_HALF_EXTENT * 0.02;
  return (count: number) => {
    const points = new Float32Array(count * 3);
    const colors = new Uint8Array(count * 3);
    if (available === 0) return { points, colors };
    for (let i = 0; i < count; i++) {
      const reused = i >= available;
      const srcIdx = reused ? Math.floor(Math.random() * available) : i;
      const jx = reused ? (Math.random() * 2 - 1) * jitter : 0;
      const jy = reused ? (Math.random() * 2 - 1) * jitter : 0;
      const jz = reused ? (Math.random() * 2 - 1) * jitter : 0;
      points[i * 3 + 0] = source[srcIdx * 3 + 0] + jx;
      points[i * 3 + 1] = source[srcIdx * 3 + 1] + jy;
      points[i * 3 + 2] = source[srcIdx * 3 + 2] + jz;
      if (sourceColors) {
        colors[i * 3 + 0] = sourceColors[srcIdx * 3 + 0];
        colors[i * 3 + 1] = sourceColors[srcIdx * 3 + 1];
        colors[i * 3 + 2] = sourceColors[srcIdx * 3 + 2];
      } else {
        colors[i * 3 + 0] = 255;
        colors[i * 3 + 1] = 255;
        colors[i * 3 + 2] = 255;
      }
    }
    return { points, colors };
  };
}

// Registra la nube de puntos escaneada bajo el nombre reservado
// "escaneo" y devuelve ese nombre — llamar a formShapeWithRoles/
// buildExoskeleton con él funciona exactamente igual que con cualquier
// otra forma.
export function registerCustomScan(points: Float32Array, colors: Uint8Array | null = null): string {
  const colored = makeColoredGeneratorFromPointCloud(points, colors);
  registerShape({
    name: CUSTOM_SCAN_NAME,
    aliases: [],
    generate: (count) => colored(count).points,
    // Sólo se declara si de verdad hay color: una forma sin color no debe
    // anunciar que lo tiene y devolver blanco.
    ...(colors ? { generateWithColor: colored } : {}),
  });
  return CUSTOM_SCAN_NAME;
}
