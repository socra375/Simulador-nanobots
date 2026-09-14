// Geometrías de los bots por nivel de detalle (Fase 32).
//
// La spec pide que los bots sean HEXAGONALES. Un prisma hexagonal es un
// `CylinderGeometry` con 6 segmentos radiales — no hace falta geometría a
// mano ni una dependencia nueva.
//
// DATO QUE CAMBIA LA INTUICIÓN: el hexágono no es un lujo que se paga con
// rendimiento, es MÁS BARATO que lo que había. La esfera de antes tenía
// 16x12 segmentos (~350 triángulos por instancia); un prisma hexagonal
// tiene ~20. A 60.000 agentes eso es pasar de ~21 millones de triángulos a
// ~1,2 millones. O sea que la forma pedida y el objetivo de rendimiento
// apuntan para el mismo lado, no en contra.
//
// Por eso el LOD de acá NO existe para "salvar" al hexágono: existe para
// que el nivel de ZOOM pueda gastar en detalle (biselado, cuerpo
// compuesto) sin que ese gasto aparezca cuando la cámara está lejos y
// nadie lo vería.

import * as THREE from "three";

export const LOD_LEVEL = {
  /** Cámara lejos: la silueta no se distingue, alcanza con un sólido mínimo. */
  FAR: 0,
  /** Distancia media: se lee el hexágono. Es el nivel por defecto. */
  MID: 1,
  /** Zoom especial: se ven el bisel y el cuerpo del bot. */
  NEAR: 2,
} as const;

export type LodLevel = (typeof LOD_LEVEL)[keyof typeof LOD_LEVEL];

export const LOD_LEVEL_COUNT = 3;

/**
 * Prisma hexagonal acostado: las caras planas miran arriba y abajo, como
 * las fichas de la referencia. `rotateX` se aplica UNA vez sobre la
 * geometría (no por instancia y no por cuadro), así que es gratis.
 */
function hexPrism(radius: number, height: number, detail: LodLevel): THREE.BufferGeometry {
  if (detail === LOD_LEVEL.FAR) {
    // Lejos ni siquiera se distingue el contorno: un tetraedro es el
    // sólido más barato que sigue ocupando el mismo espacio en pantalla.
    return new THREE.TetrahedronGeometry(radius);
  }

  const geom = new THREE.CylinderGeometry(radius, radius, height, 6, 1, false);
  geom.rotateX(Math.PI / 2);
  if (detail === LOD_LEVEL.MID) return geom;

  // NEAR: cuerpo hexagonal más un anillo biselado apenas mayor, para que
  // de cerca se lea un borde y no una ficha lisa. Se fusionan en UNA
  // geometría para no romper el instanciado: sigue siendo un solo draw
  // call por malla.
  const bevel = new THREE.CylinderGeometry(radius * 1.12, radius * 1.12, height * 0.45, 6, 1, false);
  bevel.rotateX(Math.PI / 2);
  return mergeGeometries([geom, bevel]);
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
    hexPrism(radius, height, LOD_LEVEL.FAR),
    hexPrism(radius, height, LOD_LEVEL.MID),
    hexPrism(radius, height, LOD_LEVEL.NEAR),
  ];
  return {
    byLevel,
    dispose(): void {
      for (const g of byLevel) g.dispose();
    },
  };
}
