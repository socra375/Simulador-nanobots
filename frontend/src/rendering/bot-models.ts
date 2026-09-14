// Geometrías de los bots por nivel de detalle (Fase 32, corregido en 34).
//
// LA LECCIÓN DE LA FASE 32, que es la que ordena este archivo: hacer el
// hexágono visible a distancia normal fue un error. A 3.000 agentes el
// enjambre tiene que leerse como MATERIA —una superficie continua— y no
// como un montón de fichas. Un prisma con la cara plana apuntando a la
// cámara es la peor silueta posible para eso: máxima área, iluminación
// uniforme, y con emissive + bloom florece mucho más que una esfera con
// degradé. De ahí que se vieran "gruesos".
//
// Así que la forma hexagonal NO es el aspecto normal del bot: es lo que
// se descubre al acercarse. A distancia se usa una esfera lisa, igual que
// antes de la Fase 32, sólo que de baja resolución (la de 16x12 gastaba
// ~350 triángulos por instancia para un punto de pocos píxeles).
//
// Reparto de niveles:
//
//   FAR  -> esfera de 6x4. A esa distancia ocupa pocos píxeles.
//   MID  -> esfera de 8x6. Es la vista NORMAL de la simulación.
//   NEAR -> prisma hexagonal con bisel. Sólo se llega acá con el zoom
//           especial (ver bot-lod.ts): el umbral está por debajo del
//           acercamiento que permite la cámara normal.
//
// El hexágono sigue siendo mucho más barato que la esfera original, así
// que el nivel donde más agentes se ven de cerca es también el más
// liviano por instancia.

import * as THREE from "three";

export const LOD_LEVEL = {
  /** Cámara lejos: ocupa pocos píxeles, alcanza con una esfera muy basta. */
  FAR: 0,
  /** Vista normal de la simulación: esfera lisa, el bot no se distingue solo. */
  MID: 1,
  /** Zoom especial: recién acá aparece el hexágono con su bisel. */
  NEAR: 2,
} as const;

export type LodLevel = (typeof LOD_LEVEL)[keyof typeof LOD_LEVEL];

export const LOD_LEVEL_COUNT = 3;

/**
 * Geometría de un bot para un nivel dado.
 *
 * `radius` es el mismo en los tres niveles a propósito: el bot no cambia
 * de tamaño al acercarse, cambia de FORMA. Si además creciera, el cambio
 * de nivel se notaría como un salto.
 */
function botGeometry(radius: number, height: number, detail: LodLevel): THREE.BufferGeometry {
  // Lejos y a distancia normal: esfera, como antes de la Fase 32. Los
  // segmentos bajan mucho porque a esa escala la silueta ya es un punto;
  // la de 16x12 original gastaba ~350 triángulos para eso.
  if (detail === LOD_LEVEL.FAR) return new THREE.SphereGeometry(radius, 6, 4);
  if (detail === LOD_LEVEL.MID) return new THREE.SphereGeometry(radius, 8, 6);

  // NEAR: cuerpo hexagonal más un anillo biselado apenas mayor, para que
  // de cerca se lea un borde y no una ficha lisa. Se fusionan en UNA
  // geometría para no romper el instanciado: sigue siendo un solo draw
  // call por malla.
  //
  // `rotateX` se aplica UNA vez sobre la geometría (no por instancia ni
  // por cuadro), así que es gratis.
  const body = new THREE.CylinderGeometry(radius, radius, height, 6, 1, false);
  body.rotateX(Math.PI / 2);
  const bevel = new THREE.CylinderGeometry(radius * 1.12, radius * 1.12, height * 0.45, 6, 1, false);
  bevel.rotateX(Math.PI / 2);
  return mergeGeometries([body, bevel]);
}

/**
 * Une varias geometrías no indexadas en una sola. Three trae un helper
 * para esto en `examples/jsm`, pero es una sola pasada de copia de
 * atributos y hacerlo acá evita arrastrar otro módulo por 20 líneas.
 */
function mergeGeometries(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const nonIndexed = parts.map((g) => {
    const flat = g.index ? g.toNonIndexed() : g;
    if (flat !== g) g.dispose();
    return flat;
  });

  let total = 0;
  for (const g of nonIndexed) total += g.getAttribute("position").count;

  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  let offset = 0;
  for (const g of nonIndexed) {
    const p = g.getAttribute("position") as THREE.BufferAttribute;
    const n = g.getAttribute("normal") as THREE.BufferAttribute;
    position.set(p.array as Float32Array, offset * 3);
    normal.set(n.array as Float32Array, offset * 3);
    offset += p.count;
    g.dispose();
  }

  const merged = new THREE.BufferGeometry();
  merged.setAttribute("position", new THREE.BufferAttribute(position, 3));
  merged.setAttribute("normal", new THREE.BufferAttribute(normal, 3));
  return merged;
}

export interface BotGeometrySet {
  /** Indexado por LOD_LEVEL. */
  readonly byLevel: readonly THREE.BufferGeometry[];
  dispose(): void;
}

/**
 * Las tres versiones de un bot. Se construyen UNA vez al crear la malla,
 * no al cambiar de nivel: cambiar de LOD tiene que ser reasignar una
 * referencia, no reconstruir geometría en pleno movimiento de cámara.
 */
export function createBotGeometries(radius: number, height: number): BotGeometrySet {
  const byLevel = [
    botGeometry(radius, height, LOD_LEVEL.FAR),
    botGeometry(radius, height, LOD_LEVEL.MID),
    botGeometry(radius, height, LOD_LEVEL.NEAR),
  ];
  return {
    byLevel,
    dispose(): void {
      for (const g of byLevel) g.dispose();
    },
  };
}
