import * as THREE from "three";
import { BOT_TYPE } from "./swarm/bot-types";
import { botVisual } from "./swarm/bot-config";
import { createBotGeometries, LOD_LEVEL } from "./rendering/bot-models";

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
// Blanco hueso, con muy poco brillo (Fase 21): antes cian/azul saturado —
// el pedido explícito es que el exoesqueleto se vea como hueso real y no
// compita visualmente con la capa de tejido que se posa encima (ver
// nanobot-mesh.ts). emissiveIntensity baja de 0.9/0.75 a un valor apenas
// perceptible, solo para que no se vea plano bajo la luz ambiental.
// Fase 31: los dos cuerpos de esta malla son DOS TIPOS de bot distintos,
// y ahora se ven como tales.
//
// - Los NODOS son Microbots: la estructura principal. Azul.
// - Las VIGAS son Union Bots. No es un tipo inventado para la ocasión:
//   estas vigas ya conectaban nodos y daban rigidez desde la Fase 15
//   (se calculan con un árbol de expansión mínima). Lo único que cambia
//   es que ahora se llaman por su nombre y se distinguen a la vista.
//
// Los colores salen de la config central, no de constantes sueltas.
const NODE_COLOR = botVisual(BOT_TYPE.MICROBOT).identityColor;
const NODE_EMISSIVE = botVisual(BOT_TYPE.MICROBOT).identityEmissive;
const BEAM_COLOR = botVisual(BOT_TYPE.UNION).identityColor;
const BEAM_EMISSIVE = botVisual(BOT_TYPE.UNION).identityEmissive;

export interface LayerDisplay {
  visible: boolean;
  offsetY: number;
}

export interface MicrobotSwarmMesh {
  /**
   * Visibilidad y desplazamiento vertical de las dos capas de esta malla:
   * los NODOS son la estructura (Microbots) y las VIGAS las conexiones
   * (Union Bots). Sólo presentación; la simulación no se entera.
   */
  setLayerDisplay: (structure: LayerDisplay, connection: LayerDisplay) => void;
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
  // Fase 32: los nodos son Microbots, así que también son hexagonales.
  // Se usa el nivel MEDIO fijo: estos nodos son muy chicos (radio 0.07) y
  // el nivel detallado no se distinguiría ni pegando la cámara, así que
  // pagar por él sería gasto sin nada a cambio.
  const nodeGeometry = createBotGeometries(NODE_RADIUS, NODE_RADIUS * 0.8).byLevel[LOD_LEVEL.MID];
  const beamGeometry = new THREE.CylinderGeometry(BEAM_RADIUS, BEAM_RADIUS, 1, 5);

  const nodeMaterial = new THREE.MeshStandardMaterial({
    color: NODE_COLOR,
    emissive: NODE_EMISSIVE,
    emissiveIntensity: 0.3,
    roughness: 0.55,
    metalness: 0.05,
  });
  const beamMaterial = new THREE.MeshStandardMaterial({
    color: BEAM_COLOR,
    emissive: BEAM_EMISSIVE,
    emissiveIntensity: 0.25,
    roughness: 0.6,
    metalness: 0.05,
  });

  const nodeMesh = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, maxCount);
  const beamMesh = new THREE.InstancedMesh(beamGeometry, beamMaterial, maxCount);
  // Mismo motivo que en nanobot-mesh: la esfera envolvente que calcula
  // three para un InstancedMesh sale de la geometría y no de las
  // instancias, así que de cerca descartaría la malla entera.
  nodeMesh.frustumCulled = false;
  beamMesh.frustumCulled = false;
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

    // Ver el mismo comentario en nanobot-mesh.ts: sin `addUpdateRange`,
    // three.js sube el buffer COMPLETO de instanceMatrix (dimensionado a
    // `maxCount`=60.000) por mesh en cada frame sin importar cuántas
    // instancias están realmente en uso — acotar el rango al conteo real
    // evita ese costo fijo durante el lanzamiento/repliegue.
    nodeMesh.count = nodeIndex;
    beamMesh.count = beamIndex;
    nodeMesh.instanceMatrix.clearUpdateRanges();
    nodeMesh.instanceMatrix.addUpdateRange(0, nodeIndex * 16);
    nodeMesh.instanceMatrix.needsUpdate = true;
    beamMesh.instanceMatrix.clearUpdateRanges();
    beamMesh.instanceMatrix.addUpdateRange(0, beamIndex * 16);
    beamMesh.instanceMatrix.needsUpdate = true;
  }

  function setVisible(visible: boolean) {
    group.visible = visible;
  }

  function setLayerDisplay(structure: LayerDisplay, connection: LayerDisplay) {
    nodeMesh.visible = structure.visible;
    nodeMesh.position.y = structure.offsetY;
    beamMesh.visible = connection.visible;
    beamMesh.position.y = connection.offsetY;
  }

  return { group, setCount, setVisible, updateFromPositions, setLayerDisplay };
}
