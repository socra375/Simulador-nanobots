import * as THREE from "three";

// Geometría procedural para los nanobots: alterna entre icosaedros, esferas y
// hexágonos extruidos para dar variedad visual dentro del enjambre, todos con
// material tipo wireframe/neón brillante (look holográfico).
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

const GEOMETRY_VARIANTS = [
  new THREE.IcosahedronGeometry(0.45, 0),
  new THREE.SphereGeometry(0.4, 8, 6),
  buildHexagonGeometry(0.4, 0.15),
];

const NEON_COLORS = [0x4be3ff, 0x7dffb3, 0xff5fd6];

export interface NanobotSwarmMesh {
  group: THREE.Group;
  setCount: (count: number) => void;
  updateFromPositions: (positions: Float32Array, count: number) => void;
}

// Usamos un InstancedMesh por variante geométrica para soportar hasta 200
// nanobots con muy pocos draw calls (requisito de rendimiento).
export function createNanobotSwarmMesh(maxCount: number): NanobotSwarmMesh {
  const group = new THREE.Group();
  const dummy = new THREE.Object3D();

  const instancedMeshes = GEOMETRY_VARIANTS.map((geometry, i) => {
    const material = new THREE.MeshBasicMaterial({
      color: NEON_COLORS[i % NEON_COLORS.length],
      wireframe: true,
    });
    const mesh = new THREE.InstancedMesh(geometry, material, maxCount);
    mesh.count = 0;
    group.add(mesh);
    return mesh;
  });

  function setCount(count: number) {
    const perVariant = Math.ceil(count / instancedMeshes.length);
    instancedMeshes.forEach((mesh, i) => {
      const start = i * perVariant;
      const end = Math.min(count, start + perVariant);
      mesh.count = Math.max(0, end - start);
    });
  }

  function updateFromPositions(positions: Float32Array, count: number) {
    const perVariant = Math.ceil(count / instancedMeshes.length);
    for (let i = 0; i < count; i++) {
      const variantIndex = Math.min(
        instancedMeshes.length - 1,
        Math.floor(i / perVariant),
      );
      const mesh = instancedMeshes[variantIndex];
      const localIndex = i - variantIndex * perVariant;

      dummy.position.set(
        positions[i * 3 + 0],
        positions[i * 3 + 1],
        positions[i * 3 + 2],
      );
      dummy.rotation.set(
        positions[i * 3 + 1] * 0.15,
        positions[i * 3 + 0] * 0.15,
        0,
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(localIndex, dummy.matrix);
    }
    instancedMeshes.forEach((mesh) => {
      mesh.instanceMatrix.needsUpdate = true;
    });
  }

  setCount(maxCount);

  return { group, setCount, updateFromPositions };
}
