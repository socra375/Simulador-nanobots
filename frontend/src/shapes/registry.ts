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
}

const SHAPES = new Map<string, ShapeDef>();
const ALIASES = new Map<string, string>();

export function registerShape(def: ShapeDef): void {
  SHAPES.set(def.name, def);
  for (const alias of def.aliases) ALIASES.set(alias, def.name);
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
  const available = Math.floor(source.length / 3);
  // Jitter chico para los puntos que se repiten más allá de la primera
  // pasada (cuando se pide más `count` que vóxeles de superficie hay) —
  // evita esferas perfectamente apiladas en la misma posición.
  const jitter = SHAPE_HALF_EXTENT * 0.02;
  return (count: number) => {
    const out = new Float32Array(count * 3);
    if (available === 0) return out;
    for (let i = 0; i < count; i++) {
      const reused = i >= available;
      const srcIdx = reused ? Math.floor(Math.random() * available) : i;
      const jx = reused ? (Math.random() * 2 - 1) * jitter : 0;
      const jy = reused ? (Math.random() * 2 - 1) * jitter : 0;
      const jz = reused ? (Math.random() * 2 - 1) * jitter : 0;
      out[i * 3 + 0] = source[srcIdx * 3 + 0] + jx;
      out[i * 3 + 1] = source[srcIdx * 3 + 1] + jy;
      out[i * 3 + 2] = source[srcIdx * 3 + 2] + jz;
    }
    return out;
  };
}

// Registra la nube de puntos escaneada bajo el nombre reservado
// "escaneo" y devuelve ese nombre — llamar a formShapeWithRoles/
// buildExoskeleton con él funciona exactamente igual que con cualquier
// otra forma.
export function registerCustomScan(points: Float32Array): string {
  registerShape({
    name: CUSTOM_SCAN_NAME,
    aliases: [],
    generate: makeGeneratorFromPointCloud(points),
  });
  return CUSTOM_SCAN_NAME;
}
