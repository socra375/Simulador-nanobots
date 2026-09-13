import * as THREE from "three";

// Render de la población de Microbots (Fase 15): exoesqueleto denso
// (nodos + vigas) a conteos MUCHO más altos que Nanobots (decenas de
// miles), sin física propia (main.ts anima un simple ease-in de posición,
// ver buildExoskeleton en shapes.ts). Para que eso no "frise" con conteos
// grandes, el loop por-instancia evita el camino caro de nanobot-mesh.ts
// (THREE.Object3D + dummy.updateMatrix(), que compone quaternion/
// posición/escala por instancia vía objetos): acá se escribe directo
// sobre el buffer de instanceMatrix, con una base ortonormal armada a
// mano para las vigas (translate+"mirar hacia"+escala no-uniforme) en vez
// de Quaternion.setFromUnitVectors — mismo resultado visual, bastante más
// barato por instancia.

const NODE_RADIUS = 0.07;
const BEAM_RADIUS = 0.03;
const NODE_COLOR = 0x2fb8ff;
const NODE_EMISSIVE = 0x6fd8ff;
const BEAM_COLOR = 0x1a6f99;
const BEAM_EMISSIVE = 0x3fb0e0;

export interface MicrobotSwarmMesh {
  group: THREE.Group;
  setCount: (count: number) => void;
  setVisible: (visible: boolean) => void;
  // `points`/`isBeam`/`relationSpans` son EXACTAMENTE lo que main.ts
  // calculó para este frame (ya interpolado si está en pleno ease-in) —
  // este módulo no anima nada, solo dibuja.
  updateFromPositions: (points: Float32Array, count: number, isBeam: Uint8Array, relationSpans: Float32Array) => void;
}

export function createMicrobotSwarmMesh(maxCount: number): MicrobotSwarmMesh {
  const group = new THREE.Group();

  // Geometría bajo-poly a propósito (nodos/vigas son diminutos y hay
  // muchísimos): más segmentos no se notarían y sí costarían vértices.
  const nodeGeometry = new THREE.IcosahedronGeometry(NODE_RADIUS, 0);
  const beamGeometry = new THREE.CylinderGeometry(BEAM_RADIUS, BEAM_RADIUS, 1, 5);

  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: NODE_COLOR,
    emissive: NODE_EMISSIVE,
    emissiveIntensity: 0.9,
    roughness: 0.4,
    metalness: 0.2,
  });
  const beamMaterial = new THREE.MeshStandardMaterial({
    color: BEAM_COLOR,
    emissive: BEAM_EMISSIVE,
    emissiveIntensity: 0.75,
    roughness: 0.45,
    metalness: 0.2,
  });

  const nodeMesh = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, maxCount);
  const beamMesh = new THREE.InstancedMesh(beamGeometry, beamMaterial, maxCount);
  nodeMesh.count = 0;
  beamMesh.count = 0;
  group.add(nodeMesh, beamMesh);

  // Escala auxiliares reutilizados entre instancias (evita asignar nuevos
  // objetos por agente en el loop caliente).
  const up = new THREE.Vector3();
  const right = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const arbitrary = new THREE.Vector3();
  const basis = new THREE.Matrix4();

  function setCount(_count: number) {
    nodeMesh.count = 0;
    beamMesh.count = 0;
  }

  function writeNodeMatrix(arr: Float32Array, offset: number, px: number, py: number, pz: number, scale: number) {
    arr[offset + 0] = scale;
    arr[offset + 1] = 0;
    arr[offset + 2] = 0;
    arr[offset + 3] = 0;
    arr[offset + 4] = 0;
    arr[offset + 5] = scale;
    arr[offset + 6] = 0;
    arr[offset + 7] = 0;
    arr[offset + 8] = 0;
    arr[offset + 9] = 0;
    arr[offset + 10] = scale;
    arr[offset + 11] = 0;
    arr[offset + 12] = px;
    arr[offset + 13] = py;
    arr[offset + 14] = pz;
    arr[offset + 15] = 1;
  }

  function updateFromPositions(
    points: Float32Array,
    count: number,
    isBeam: Uint8Array,
    relationSpans: Float32Array,
  ) {
    const nodeArr = nodeMesh.instanceMatrix.array as Float32Array;
    const beamArr = beamMesh.instanceMatrix.array as Float32Array;
    let nodeIndex = 0;
    let beamIndex = 0;

    for (let i = 0; i < count; i++) {
      const px = points[i * 3 + 0];
      const py = points[i * 3 + 1];
      const pz = points[i * 3 + 2];

      if (!isBeam[i]) {
        writeNodeMatrix(nodeArr, nodeIndex * 16, px, py, pz, 1);
        nodeIndex++;
        continue;
      }

      const ax = relationSpans[i * 6 + 0];
      const ay = relationSpans[i * 6 + 1];
      const az = relationSpans[i * 6 + 2];
      const bx = relationSpans[i * 6 + 3];
      const by = relationSpans[i * 6 + 4];
      const bz = relationSpans[i * 6 + 5];
      up.set(bx - ax, by - ay, bz - az);
      const length = Math.max(up.length(), 0.001);
      up.multiplyScalar(1 / length);
      // Base ortonormal con `up` como nuevo eje Y (evita Quaternion): se
      // elige un vector "arbitrario" no paralelo a `up` para arrancar,
      // igual que la técnica estándar de "look-at" sin trigonometría.
      arbitrary.set(Math.abs(up.y) > 0.99 ? 1 : 0, Math.abs(up.y) > 0.99 ? 0 : 1, 0);
      right.crossVectors(arbitrary, up).normalize();
      forward.crossVectors(up, right);
      // right/forward quedan con radio 1 (el radio real ya está en la
      // geometría del cilindro); solo el eje `up` se escala al largo real.
      basis.makeBasis(right, up.multiplyScalar(length), forward);
      basis.setPosition(ax + (bx - ax) * 0.5, ay + (by - ay) * 0.5, az + (bz - az) * 0.5);
      basis.toArray(beamArr, beamIndex * 16);
      beamIndex++;
    }

    nodeMesh.count = nodeIndex;
    beamMesh.count = beamIndex;
    nodeMesh.instanceMatrix.needsUpdate = true;
    beamMesh.instanceMatrix.needsUpdate = true;
  }

  function setVisible(visible: boolean) {
    group.visible = visible;
  }

  return { group, setCount, setVisible, updateFromPositions };
}
