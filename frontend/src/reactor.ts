import * as THREE from "three";

// El núcleo/reactor: objeto fijo en una esquina superior de la escena donde
// "viven" los nanobots en reposo (ocultos — ver nanobot-mesh.ts setVisible),
// y desde donde salen al formar una figura (ver shapes.ts). Posicionado
// dentro del volumen físico del core C++ (kBounds=12 en boids.cpp).
export const REACTOR_POSITION = new THREE.Vector3(-8, 8, -8);

export interface Reactor {
  group: THREE.Group;
  position: THREE.Vector3;
  update: (dt: number) => void;
}

export function createReactor(position: THREE.Vector3 = REACTOR_POSITION): Reactor {
  const group = new THREE.Group();
  group.position.copy(position);

  // Núcleo emisivo: MeshStandardMaterial con emissive brilla por sí solo
  // (no depende de las luces de la escena), coherente con el resto del
  // enjambre en modo "wireframe/neón".
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.9, 1),
    new THREE.MeshStandardMaterial({
      color: 0x332400,
      emissive: 0xffe14b,
      emissiveIntensity: 1.8,
      roughness: 0.4,
      metalness: 0.2,
    }),
  );
  group.add(core);

  // Carcasa de contención: wireframe semitransparente, mismo lenguaje
  // visual que los nanobots (MeshBasicMaterial wireframe).
  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.8, 1),
    new THREE.MeshBasicMaterial({
      color: 0xffe14b,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    }),
  );
  group.add(shell);

  const glow = new THREE.PointLight(0xffe14b, 3, 14);
  group.add(glow);

  // Giro lento y constante de la carcasa (look "reactor vivo"). Se usa
  // rotateY/rotateX (rotación incremental vía quaternion internamente en
  // three.js) en vez de escribir `rotation.x/y` a mano, evitando cualquier
  // ambigüedad de orden de ejes Euler.
  function update(dt: number): void {
    shell.rotateY(dt * 0.3);
    shell.rotateX(dt * 0.15);
  }

  return { group, position: group.position, update };
}
