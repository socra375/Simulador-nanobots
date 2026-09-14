// Proveedor de visión (Fase 38, spec §32-§33).
//
// POR QUÉ HAY INTERFAZ SI HAY UN SOLO IMPLEMENTADOR: para que conectar
// después un modelo de profundidad o un servicio de segmentación sea
// agregar un archivo, no reescribir el pipeline. El pipeline consume
// `VisionProvider`, nunca las funciones locales directamente.
//
// POR QUÉ NO HAY UN `CloudVisionProvider` VACÍO: un proveedor sin
// servicio detrás es exactamente el módulo decorativo que el brief §29
// prohíbe — una clase que existe para que el diagrama quede lindo y que
// devuelve lo mismo que el local. La interfaz más un implementador real
// es lo honesto; el segundo entra el día que haya un servicio al que
// llamar, y sin tocar nada de lo de acá.
//
// PRIVACIDAD (spec §33): `external` es lo que la UI mira para avisar
// antes de mandar nada afuera. El proveedor local no sale del navegador,
// así que hoy no hay ningún camino por el que una imagen se suba.

import type { ImageBuffer } from "./image-buffer";
import { segment, type ObjectMask } from "./segmentation";
import { estimateDepth, type DepthMap } from "./depth-estimator";

export interface VisionProvider {
  readonly id: string;
  readonly name: string;
  /** Si es true, la imagen sale del navegador y hay que pedir permiso. */
  readonly external: boolean;
  segment(img: ImageBuffer): Promise<ObjectMask>;
  estimateDepth(img: ImageBuffer, mask: ObjectMask): Promise<DepthMap>;
}

/**
 * Todo en el navegador, sin red y sin modelo: flood fill para la máscara
 * (o el canal alpha si lo hay) e inflado de silueta para la profundidad.
 *
 * Es también el FALLBACK del spec §31: si algún día se agrega un
 * proveedor externo y no está disponible, el simulador sigue funcionando
 * con éste en vez de quedar inutilizable.
 */
export const localVisionProvider: VisionProvider = {
  id: "local",
  name: "Local (sin IA, en el navegador)",
  external: false,
  async segment(img) {
    return segment(img);
  },
  async estimateDepth(img, mask) {
    return estimateDepth(img, mask);
  },
};

let active: VisionProvider = localVisionProvider;

export function getVisionProvider(): VisionProvider {
  return active;
}

export function setVisionProvider(provider: VisionProvider): void {
  active = provider;
}

/** Lista para la UI. Hoy tiene uno solo, y eso es exacto. */
export function listVisionProviders(): readonly VisionProvider[] {
  return [localVisionProvider];
}
