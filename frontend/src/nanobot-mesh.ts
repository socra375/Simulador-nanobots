import * as THREE from "three";
import { NANOBOT_ROLE } from "./shapes";

// Geometría y material por ROL de nanobot (ver shapes.ts):
// - ESTRUCTURA: icosaedro SÓLIDO — los "nodos"/anclas soldados del esqueleto.
// - RELACION: viga (cilindro) SÓLIDA, orientada y estirada entre las 2
//   anclas de ESTRUCTURA que conecta (ver relationSpans) — así se ve
//   literalmente "unida" a la estructura en vez de flotar suelta.
// - DETALLE: esfera SÓLIDA emissive — el relleno que le da color y pulido
//   final a la silueta, encima del esqueleto de las otras dos.
const SCALE_BASELINE_COUNT = 80;

// Índice = NANOBOT_ROLE.{STRUCTURE,RELATION,DETAIL}. La viga de RELACION usa
// un cilindro de altura unitaria (largo 1): se escala en Y al largo real del
// segmento que conecta, así que su "tamaño de diseño" es solo el radio.
const ROLE_GEOMETRIES: THREE.BufferGeometry[] = [
  new THREE.IcosahedronGeometry(0.4, 0), // estructura
  new THREE.CylinderGeometry(0.16, 0.16, 1, 6), // relación
  new THREE.SphereGeometry(0.4, 8, 6), // detalle
];

function buildRoleMaterial(role: number): THREE.Material {
  if (role === NANOBOT_ROLE.DETAIL) {
    return new THREE.MeshStandardMaterial({
      color: 0x1c8f5a,
      emissive: 0x7dffb3,
      emissiveIntensity: 0.9,
      roughness: 0.35,
      metalness: 0.1,
    });
  }
  if (role === NANOBOT_ROLE.RELATION) {
    return new THREE.MeshStandardMaterial({
      color: 0x8a1f6e,
      emissive: 0xff5fd6,
      emissiveIntensity: 0.8,
      roughness: 0.4,
      metalness: 0.2,
    });
  }
  return new THREE.MeshStandardMaterial({
    color: 0x1f5c8a,
    emissive: 0x4be3ff,
    emissiveIntensity: 0.8,
    roughness: 0.4,
    metalness: 0.2,
  });
}

export interface NanobotSwarmMesh {
  group: THREE.Group;
  setCount: (count: number) => void;
  updateFromPositions: (
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    relationSpans: Float32Array,
    visibleRoles: readonly [boolean, boolean, boolean],
  ) => void;
  setVisible: (visible: boolean) => void;
}

// Un InstancedMesh por rol (estructura/relación/detalle) para soportar
// miles de nanobots con muy pocos draw calls. Cada uno reserva capacidad
// para `maxCount` completo: como la proporción entre roles no es pareja
// (15/25/60), sería frágil intentar repartir la capacidad de antemano.
export function createNanobotSwarmMesh(maxCount: number): NanobotSwarmMesh {
  const group = new THREE.Group();
  const dummy = new THREE.Object3D();
  const relationA = new THREE.Vector3();
  const relationB = new THREE.Vector3();
  const relationDir = new THREE.Vector3();
  const UP = new THREE.Vector3(0, 1, 0);

  const instancedMeshes = ROLE_GEOMETRIES.map((geometry, role) => {
    const mesh = new THREE.InstancedMesh(geometry, buildRoleMaterial(role), maxCount);
    mesh.count = 0;
    group.add(mesh);
    return mesh;
  });

  function setCount(count: number) {
    // Reparto aproximado solo para el estado inicial (antes de la primera
    // updateFromPositions con roles reales) — evita instancias fantasma.
    const perRole = Math.ceil(count / instancedMeshes.length);
    instancedMeshes.forEach((mesh, i) => {
      const start = i * perRole;
      const end = Math.min(count, start + perRole);
      mesh.count = Math.max(0, end - start);
    });
  }

  function updateFromPositions(
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    relationSpans: Float32Array,
    visibleRoles: readonly [boolean, boolean, boolean],
  ) {
    // Con miles de nanobots en el mismo volumen, el tamaño fijo (afinado
    // para ~80) los hace superponerse tanto que una figura se ve como un
    // blob sólido en vez de un contorno nítido. Se achican con la densidad
    // (proporcional a count^(-1/3)) así más cantidad aporta más detalle.
    const scale = Math.min(1, Math.cbrt(SCALE_BASELINE_COUNT / count));
    const localCounters = [0, 0, 0];

    for (let i = 0; i < count; i++) {
      const role = roles[i];
      // Rol todavía no revelado (ver formationPhase en main.ts): el agente
      // sigue "dentro" del núcleo, no se dibuja hasta que le toque su turno.
      if (!visibleRoles[role]) continue;
      const mesh = instancedMeshes[role];
      const localIndex = localCounters[role]++;

      if (role === NANOBOT_ROLE.RELATION) {
        // Viga sólida entre las 2 anclas de ESTRUCTURA que este nanobot
        // conecta: se posiciona en su punto físico real (cerca del punto
        // medio del segmento) y se orienta/estira para cubrir el largo
        // real de la conexión.
        relationA.set(
          relationSpans[i * 6 + 0],
          relationSpans[i * 6 + 1],
          relationSpans[i * 6 + 2],
        );
        relationB.set(
          relationSpans[i * 6 + 3],
          relationSpans[i * 6 + 4],
          relationSpans[i * 6 + 5],
        );
        relationDir.subVectors(relationB, relationA);
        const length = Math.max(relationDir.length(), 0.001);
        relationDir.normalize();
        dummy.position.set(positions[i * 3 + 0], positions[i * 3 + 1], positions[i * 3 + 2]);
        dummy.quaternion.setFromUnitVectors(UP, relationDir);
        dummy.scale.set(scale, length, scale);
      } else {
        dummy.position.set(positions[i * 3 + 0], positions[i * 3 + 1], positions[i * 3 + 2]);
        dummy.rotation.set(positions[i * 3 + 1] * 0.15, positions[i * 3 + 0] * 0.15, 0);
        dummy.scale.setScalar(scale);
      }
      dummy.updateMatrix();
      mesh.setMatrixAt(localIndex, dummy.matrix);
    }

    instancedMeshes.forEach((mesh, role) => {
      mesh.count = localCounters[role];
      mesh.instanceMatrix.needsUpdate = true;
    });
  }

  // Oculta todo el enjambre: se usa en reposo, ya que los nanobots "están
  // dentro" del núcleo (siguen simulándose físicamente, solo no se dibujan).
  function setVisible(visible: boolean) {
    group.visible = visible;
  }

  setCount(maxCount);

  return { group, setCount, updateFromPositions, setVisible };
}
