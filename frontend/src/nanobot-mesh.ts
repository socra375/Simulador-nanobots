import * as THREE from "three";
import { NANOBOT_ROLE } from "./shapes";

// Geometría y material por ROL de nanobot (ver shapes.ts):
// - ESTRUCTURA: icosaedro wireframe — el "esqueleto" de la figura.
// - RELACION: hexágono extruido wireframe — las "conexiones" entre anclas.
// - DETALLE: esfera SÓLIDA emissive (no wireframe) — el relleno que le da
//   color y pulido final a la silueta, encima del esqueleto de las otras dos.
function buildHexagonGeometry(radius: number, depth: number): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  const sides = 6;
  for (let i = 0; i <= sides; i++) {
    const angle = (i / sides) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  return new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 6,
  });
}

// Cantidad para la que se afinó el tamaño/proporción visual original de
// cada nanobot (Fase 1/2). Por encima de esto, se achican con la densidad.
const SCALE_BASELINE_COUNT = 80;

// Índice = NANOBOT_ROLE.{STRUCTURE,RELATION,DETAIL}.
const ROLE_GEOMETRIES: THREE.BufferGeometry[] = [
  new THREE.IcosahedronGeometry(0.45, 0), // estructura
  buildHexagonGeometry(0.4, 0.15), // relación
  new THREE.SphereGeometry(0.4, 8, 6), // detalle
];

function buildRoleMaterial(role: number): THREE.Material {
  if (role === NANOBOT_ROLE.DETAIL) {
    // Sólido y emissive: el rol que "da color y los últimos retoques".
    return new THREE.MeshStandardMaterial({
      color: 0x1c8f5a,
      emissive: 0x7dffb3,
      emissiveIntensity: 0.9,
      roughness: 0.35,
      metalness: 0.1,
    });
  }
  const color = role === NANOBOT_ROLE.STRUCTURE ? 0x4be3ff : 0xff5fd6;
  return new THREE.MeshBasicMaterial({ color, wireframe: true });
}

export interface NanobotSwarmMesh {
  group: THREE.Group;
  setCount: (count: number) => void;
  updateFromPositions: (positions: Float32Array, count: number, roles: Uint8Array<ArrayBufferLike>) => void;
  setVisible: (visible: boolean) => void;
}

// Un InstancedMesh por rol (estructura/relación/detalle) para soportar
// miles de nanobots con muy pocos draw calls. Cada uno reserva capacidad
// para `maxCount` completo: como la proporción entre roles no es pareja
// (15/25/60), sería frágil intentar repartir la capacidad de antemano.
export function createNanobotSwarmMesh(maxCount: number): NanobotSwarmMesh {
  const group = new THREE.Group();
  const dummy = new THREE.Object3D();

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

  function updateFromPositions(positions: Float32Array, count: number, roles: Uint8Array<ArrayBufferLike>) {
    // Con miles de nanobots en el mismo volumen, el tamaño fijo (afinado
    // para ~80) los hace superponerse tanto que una figura se ve como un
    // blob sólido en vez de un contorno nítido. Se achican con la densidad
    // (proporcional a count^(-1/3)) así más cantidad aporta más detalle.
    const scale = Math.min(1, Math.cbrt(SCALE_BASELINE_COUNT / count));
    const localCounters = [0, 0, 0];

    for (let i = 0; i < count; i++) {
      const role = roles[i];
      const mesh = instancedMeshes[role];
      const localIndex = localCounters[role]++;

      dummy.position.set(positions[i * 3 + 0], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.rotation.set(positions[i * 3 + 1] * 0.15, positions[i * 3 + 0] * 0.15, 0);
      dummy.scale.setScalar(scale);
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
