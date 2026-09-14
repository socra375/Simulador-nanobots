// Proveedor de profundidad intercambiable (Fase 40b, spec §32).
//
// POR QUÉ ES UN PROVIDER APARTE del VisionProvider. La segmentación y la
// profundidad se mejoran por caminos distintos: separar objeto de fondo se
// puede hacer razonablemente bien sin ningún modelo (el flood fill ya lo
// hace), mientras que estimar profundidad de verdad SÍ necesita un modelo
// entrenado. Son las dos etapas con techos de calidad muy distintos, así
// que tienen que poder reemplazarse por separado: enchufar un modelo de
// profundidad no debería obligar a tocar la segmentación, ni al revés.
//
// `maxConfidence` es parte de la interfaz a propósito. Cada proveedor
// declara hasta dónde puede afirmar, y el pipeline no puede publicar más
// que eso. El heurístico de acá tiene un techo bajo porque es una
// heurística geométrica; un modelo real vendría con el suyo, más alto y
// justificado por su propia evaluación. Sin este campo, cambiar de
// proveedor cambiaría la calidad sin cambiar el número que se le muestra
// al usuario.
//
// NO HAY UN PROVEEDOR EXTERNO ESCRITO. Un provider sin servicio detrás
// devuelve lo mismo que el local y es el módulo decorativo que el brief
// §29 prohíbe. La interfaz más un implementador real es lo honesto.

import type { ImageBuffer } from "./image-buffer";
import type { ObjectMask } from "./segmentation";
import { estimateDepth, INFLATE_GAMMA, SHADING_WEIGHT, type DepthMap } from "./depth-estimator";

export interface DepthProvider {
  readonly id: string;
  readonly name: string;
  /** Si es true, la imagen sale del navegador y hay que pedir permiso (§33). */
  readonly external: boolean;
  /** Techo de confianza que este proveedor puede sostener, 0..1. */
  readonly maxConfidence: number;
  /** Qué hace, en una línea, para mostrarlo en el panel. */
  readonly description: string;
  estimate(img: ImageBuffer, mask: ObjectMask): Promise<DepthMap>;
}

/**
 * El único proveedor real hoy: inflado de la silueta por transformada de
 * distancia, más una corrección por sombreado. Todo en el navegador, sin
 * red y sin modelo.
 *
 * Es también el FALLBACK del spec §31: si mañana hay un proveedor externo
 * y no está disponible, el simulador sigue funcionando con éste en vez de
 * quedar inutilizable.
 */
export const inflateDepthProvider: DepthProvider = {
  id: "inflate",
  name: "Inflado de silueta (local, sin IA)",
  external: false,
  // El mismo techo que aplica depth-estimator.ts. Está acá arriba para que
  // se pueda comparar de un vistazo contra el de otro proveedor.
  maxConfidence: 0.55,
  description: "Infla la silueta por distancia al contorno y corrige con el sombreado de la foto.",
  async estimate(img, mask) {
    return estimateDepth(img, mask, INFLATE_GAMMA, SHADING_WEIGHT);
  },
};

/**
 * Profundidad constante: el objeto es una loncha de espesor parejo.
 *
 * NO es un proveedor de relleno ni un placeholder: es lo que corresponde
 * usar cuando la foto no da ninguna pista de relieve (un logo, un recorte
 * plano, un dibujo), donde inflar la silueta inventaría un volumen que no
 * está. Su confianza es más baja justamente porque no estima nada.
 */
export const flatDepthProvider: DepthProvider = {
  id: "flat",
  name: "Espesor constante (sin estimar)",
  external: false,
  maxConfidence: 0.3,
  description: "No estima relieve: da el mismo espesor a todo el objeto.",
  async estimate(_img, mask) {
    const depth = new Float32Array(mask.width * mask.height);
    for (let i = 0; i < depth.length; i++) depth[i] = mask.mask[i] ? 1 : 0;
    return {
      depth,
      width: mask.width,
      height: mask.height,
      maxThickness: mask.area > 0 ? 1 : 0,
      confidence: mask.area > 0 ? 0.3 : 0,
    };
  },
};

const PROVIDERS: DepthProvider[] = [inflateDepthProvider, flatDepthProvider];
let active: DepthProvider = inflateDepthProvider;

export function getDepthProvider(): DepthProvider {
  return active;
}

/** Cambia el proveedor activo. Devuelve false si ese id no está registrado. */
export function setDepthProvider(id: string): boolean {
  const found = PROVIDERS.find((p) => p.id === id);
  if (!found) return false;
  active = found;
  return true;
}

/**
 * Registra un proveedor nuevo (un modelo local, una API). Reemplaza al que
 * tenga el mismo id, para que recargar uno no lo duplique.
 */
export function registerDepthProvider(provider: DepthProvider): void {
  const at = PROVIDERS.findIndex((p) => p.id === provider.id);
  if (at >= 0) PROVIDERS[at] = provider;
  else PROVIDERS.push(provider);
  if (active.id === provider.id) active = provider;
}

export function listDepthProviders(): readonly DepthProvider[] {
  return PROVIDERS;
}
