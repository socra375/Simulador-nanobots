import * as THREE from "three";
import { FORMATION_CENTER } from "../shapes";

// Vista previa de la reconstrucción, EN LA ESCENA (Fase 43).
//
// POR QUÉ EXISTE: el panel "Imagen → 3D" mostraba el resultado de
// reconstruir dentro de su propia carpeta del menú, en un canvas 2D de
// 240 px. Ahí se ve la imagen, la máscara y la profundidad —que son
// imágenes y están bien como imágenes— pero la NUBE DE PUNTOS es un
// objeto tridimensional, y mirarlo proyectado en una miniatura del menú
// no permite lo único que importa de una reconstrucción 3D: girarla y ver
// si el volumen cerró. Ahora la nube aparece donde se arma todo, en el
// mismo lugar y a la misma escala en que la va a construir el enjambre,
// con los controles de cámara de siempre.
//
// ES SÓLO PRESENTACIÓN: no toca la simulación, no crea agentes y no
// participa de ninguna física. Se apaga sola en cuanto el enjambre empieza
// a construir, porque a partir de ahí lo que hay que mirar son los bots.
//
// Un único `THREE.Points` con color por vértice: la nube puede tener
// cientos de miles de puntos y un objeto por punto sería exactamente lo
// que el resto del proyecto evita.

/** Tamaño de cada punto de la nube, en unidades de mundo. */
const POINT_SIZE = 0.09;

export interface CloudPreview {
  readonly group: THREE.Group;
  /**
   * Muestra la nube. `points` son count*3 floats centrados en el origen
   * (igual que los devuelve la reconstrucción) y `colors` count*3 bytes
   * RGB, o null para un gris neutro.
   */
  show(points: Float32Array, colors: Uint8Array | null, count: number): void;
  hide(): void;
  readonly visible: boolean;
  dispose(): void;
}

export function createCloudPreview(
  center: readonly [number, number, number] = FORMATION_CENTER,
): CloudPreview {
  const group = new THREE.Group();
  group.position.set(center[0], center[1], center[2]);
  group.visible = false;

  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({
    size: POINT_SIZE,
    vertexColors: true,
    // La nube es una vista previa, no el objeto: se la deja translúcida
    // para que se lea como "esto todavía no está construido".
    transparent: true,
    opacity: 0.75,
    // Sin atenuación por distancia los puntos lejanos se ven igual de
    // grandes que los cercanos y la nube pierde toda profundidad.
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  // Misma razón que en las mallas del enjambre: three calcula la esfera
  // envolvente desde la geometría, y acá la geometría cambia de tamaño en
  // cada reconstrucción.
  points.frustumCulled = false;
  group.add(points);

  function show(src: Float32Array, colors: Uint8Array | null, count: number): void {
    if (count <= 0) {
      hide();
      return;
    }
    // Buffers NUEVOS por reconstrucción, no reusados: pasa una vez por
    // clic, no por cuadro, y el tamaño cambia cada vez.
    const position = new Float32Array(count * 3);
    position.set(src.subarray(0, count * 3));
    const color = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      color[i] = colors ? colors[i] / 255 : 0.7;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(color, 3));
    geometry.setDrawRange(0, count);
    group.visible = true;
  }

  function hide(): void {
    group.visible = false;
  }

  return {
    group,
    show,
    hide,
    get visible() { return group.visible; },
    dispose(): void {
      geometry.dispose();
      material.dispose();
    },
  };
}
