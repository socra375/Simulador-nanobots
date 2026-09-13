import * as THREE from "three";
import { NANOBOT_ROLE } from "./shapes";
import { DEFAULT_DOMINANT_COLOR, MAX_COLOR_CLUSTERS, type ColorCluster } from "./image-color";

// Geometría y material por ROL de nanobot (ver shapes.ts):
// - ESTRUCTURA: icosaedro SÓLIDO — los "nodos"/anclas soldados del esqueleto.
// - RELACION: viga (cilindro) SÓLIDA, orientada y estirada entre las 2
//   anclas de ESTRUCTURA que conecta (ver relationSpans) — así se ve
//   literalmente "unida" a la estructura en vez de flotar suelta.
// - DETALLE: esfera SÓLIDA emissive — el relleno que le da color y pulido
//   final a la silueta, encima del esqueleto de las otras dos.
// - COLOR: esfera SÓLIDA idéntica a DETALLE, pero SIN un color de rol
//   fijo — un InstancedMesh DEDICADO por cada "ola" de color (cluster de
//   color de la foto, ver image-color.ts pickColorClusters), hasta
//   MAX_COLOR_CLUSTERS, cada uno con su propio material real (color +
//   emissive parejos, igual que las otras 3 capas — así brilla igual de
//   fuerte, no un tono apagado). Se probó primero con color POR INSTANCIA
//   (material.vertexColors + setColorAt) pero esa vía sólo tiñe el canal
//   difuso — sin emissive propio quedaba visualmente apagada/invisible
//   contra el fondo oscuro — de ahí el mesh dedicado por ola. Si la foto
//   tiene varias zonas de color reconociblemente distintas, cada ola sale
//   en su propia sub-fase (ver phaseCount dinámico en main.ts) en vez de
//   mezclarse todas de una — "dejando el espacio que no es de ese color"
//   para las olas siguientes.
// Antes 80 (afinado para el default original de Fase 1) — con el nuevo
// default de Nanobots (3000, ver DEFAULT_STATE en main.ts) y el
// exoesqueleto de Microbots mucho más rico (Fase 15), un baseline tan
// bajo encogía las esferas al ~30% de su tamaño de diseño ya con el
// default, dejando el relleno demasiado disperso. Subirlo retrasa el
// encogimiento a cantidades más altas — el `Math.min(1, ...)` de abajo ya
// garantiza que NUNCA queden más grandes que su tamaño de diseño
// (`ROLE_GEOMETRIES`), solo se encogen menos hasta count más alto.
const SCALE_BASELINE_COUNT = 1500;

// Una vez que un nanobot está lo bastante cerca de su punto final (el
// residual de físicas — cohesión/separación entre vecinos, aunque atenuado
// al formar, ver FORMING_FLOCK_SCALE en main.ts — nunca llega a ser
// exactamente cero), se dibuja EXACTO en ese punto (posición y rotación
// fijas) en vez de en su posición física con micro-temblor. Así la figura
// queda sólida y sin vibración una vez armada, no solo "cerca". Se usan dos
// umbrales (histéresis: entra más estricto de lo que sale) para que un
// nanobot justo en el borde no titile entre estático y físico cuadro a
// cuadro.
const SNAP_DISTANCE_SQ = 0.6 * 0.6;
const UNSNAP_DISTANCE_SQ = 1.2 * 1.2;

// Colores de rol fijos de ESTRUCTURA/RELACION/DETALLE (COLOR no tiene uno
// propio — se pisa en caliente vía setDominantColor). Guardados como
// constantes (no solo inline en buildRoleMaterial) porque
// setSkeletonGrayscale() necesita poder RESTAURARLOS: mientras la 4ta capa
// viaja desde el núcleo, las otras 3 pierden su color (pasan a gris) para
// que el color dominante de la foto termine predominando al llegar; ver
// abajo.
const STRUCTURE_COLOR = 0x1f5c8a;
const STRUCTURE_EMISSIVE = 0x4be3ff;
const RELATION_COLOR = 0x8a1f6e;
const RELATION_EMISSIVE = 0xff5fd6;
const DETAIL_COLOR = 0x1c8f5a;
const DETAIL_EMISSIVE = 0x7dffb3;
const SKELETON_GRAYSCALE_COLOR = 0x555555;
const SKELETON_GRAYSCALE_EMISSIVE = 0x2a2a2a;

// Índice = NANOBOT_ROLE.{STRUCTURE,RELATION,DETAIL}. La viga de RELACION usa
// un cilindro de altura unitaria (largo 1): se escala en Y al largo real del
// segmento que conecta, así que su "tamaño de diseño" es solo el radio.
// DETALLE es más grande que los otros dos a propósito: se solapa más entre
// sí para tapar huecos/grietas en el relleno en vez de dejar el fondo negro
// visible entre esfera y esfera.
const ROLE_GEOMETRIES: THREE.BufferGeometry[] = [
  new THREE.IcosahedronGeometry(0.4, 1), // estructura
  new THREE.CylinderGeometry(0.16, 0.16, 1, 10), // relación
  new THREE.SphereGeometry(0.55, 16, 12), // detalle
  new THREE.SphereGeometry(0.6, 16, 12), // color (capa de pintura final)
];

function buildRoleMaterial(role: number): THREE.Material {
  if (role === NANOBOT_ROLE.DETAIL) {
    return new THREE.MeshStandardMaterial({
      color: DETAIL_COLOR,
      emissive: DETAIL_EMISSIVE,
      emissiveIntensity: 0.9,
      roughness: 0.35,
      metalness: 0.1,
    });
  }
  if (role === NANOBOT_ROLE.RELATION) {
    return new THREE.MeshStandardMaterial({
      color: RELATION_COLOR,
      emissive: RELATION_EMISSIVE,
      emissiveIntensity: 0.8,
      roughness: 0.4,
      metalness: 0.2,
    });
  }
  if (role === NANOBOT_ROLE.COLOR) {
    // Color placeholder hasta el primer setColorClusters() real (ver
    // startFormation en main.ts, que lo llama ANTES de que este rol se
    // revele) — nunca se ve así en pantalla en la práctica. Cada ola tiene
    // su PROPIA instancia de este material (ver colorWaveMeshes abajo), no
    // una compartida.
    return new THREE.MeshStandardMaterial({
      color: DEFAULT_DOMINANT_COLOR,
      emissive: DEFAULT_DOMINANT_COLOR,
      emissiveIntensity: 0.85,
      roughness: 0.35,
      metalness: 0.1,
    });
  }
  return new THREE.MeshStandardMaterial({
    color: STRUCTURE_COLOR,
    emissive: STRUCTURE_EMISSIVE,
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
    formationTargets: Float32Array,
    visibleRoles: readonly [boolean, boolean, boolean, boolean],
    colorWave: Uint8Array<ArrayBufferLike>,
    revealedColorWaves: number,
  ) => void;
  setVisible: (visible: boolean) => void;
  // Fija los colores RGB de las "olas" de COLOR (ver image-color.ts
  // pickColorClusters) — llamado una vez por "Formar objeto", antes de que
  // el rol COLOR se revele. El color real de cada agente se aplica por
  // instancia en updateFromPositions según su colorWave.
  setColorClusters: (clusters: ColorCluster[]) => void;
  // true: ESTRUCTURA/RELACION/DETALLE pierden su color de rol fijo y pasan
  // a un gris apagado (mientras COLOR viaja hacia su posición, para que su
  // color termine predominando al llegar). false: los restaura a su color
  // de rol original. No afecta a COLOR (su color siempre es el dominante).
  setSkeletonGrayscale: (active: boolean) => void;
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
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  });

  // Un InstancedMesh dedicado por ola de color (ver arriba) — la ola 0
  // reutiliza el mesh de rol COLOR ya creado arriba; las olas 1..N-1 son
  // meshes adicionales con la misma geometría, cada uno con su propio
  // material (recoloreable en caliente vía setColorClusters).
  const colorWaveMeshes: THREE.InstancedMesh[] = [instancedMeshes[NANOBOT_ROLE.COLOR]];
  for (let w = 1; w < MAX_COLOR_CLUSTERS; w++) {
    const mesh = new THREE.InstancedMesh(
      ROLE_GEOMETRIES[NANOBOT_ROLE.COLOR],
      buildRoleMaterial(NANOBOT_ROLE.COLOR),
      maxCount,
    );
    mesh.count = 0;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    colorWaveMeshes.push(mesh);
  }

  // Estado de histéresis por agente (1 = ya "encajado" en su target fijo).
  // Se reinicia en setCount porque los índices pueden pasar a representar
  // otro agente distinto tras un cambio de cantidad.
  const snapped = new Uint8Array(maxCount);

  function setCount(count: number) {
    // Reparto aproximado solo para el estado inicial (antes de la primera
    // updateFromPositions con roles reales) — evita instancias fantasma.
    const perRole = Math.ceil(count / instancedMeshes.length);
    instancedMeshes.forEach((mesh, i) => {
      const start = i * perRole;
      const end = Math.min(count, start + perRole);
      mesh.count = Math.max(0, end - start);
    });
    for (let w = 1; w < colorWaveMeshes.length; w++) colorWaveMeshes[w].count = 0;
    snapped.fill(0);
  }

  function updateFromPositions(
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    relationSpans: Float32Array,
    formationTargets: Float32Array,
    visibleRoles: readonly [boolean, boolean, boolean, boolean],
    colorWave: Uint8Array<ArrayBufferLike>,
    revealedColorWaves: number,
  ) {
    // Con miles de nanobots en el mismo volumen, el tamaño fijo (afinado
    // para ~80) los hace superponerse tanto que una figura se ve como un
    // blob sólido en vez de un contorno nítido. Se achican con la densidad
    // (proporcional a count^(-1/3)) así más cantidad aporta más detalle.
    const scale = Math.min(1, Math.cbrt(SCALE_BASELINE_COUNT / count));
    const localCounters = new Array<number>(instancedMeshes.length).fill(0);
    const waveLocalCounters = new Array<number>(colorWaveMeshes.length).fill(0);

    for (let i = 0; i < count; i++) {
      const role = roles[i];
      // Rol todavía no revelado (ver formationPhase en main.ts): el agente
      // sigue "dentro" del núcleo, no se dibuja hasta que le toque su turno.
      if (!visibleRoles[role]) continue;

      let mesh: THREE.InstancedMesh;
      let localIndex: number;
      if (role === NANOBOT_ROLE.COLOR) {
        // Dentro de COLOR, cada agente pertenece a una "ola" (colorWave)
        // que se revela en su propia sub-fase — aunque el rol ya esté
        // visible, un agente de una ola posterior sigue sin dibujarse
        // hasta su turno, y cada ola va a SU PROPIO mesh (ver arriba).
        const wave = colorWave[i];
        if (wave >= revealedColorWaves) continue;
        const waveIndex = Math.min(wave, colorWaveMeshes.length - 1);
        mesh = colorWaveMeshes[waveIndex];
        localIndex = waveLocalCounters[waveIndex]++;
      } else {
        mesh = instancedMeshes[role];
        localIndex = localCounters[role]++;
      }

      const liveX = positions[i * 3 + 0];
      const liveY = positions[i * 3 + 1];
      const liveZ = positions[i * 3 + 2];
      const tx = formationTargets[i * 3 + 0];
      const ty = formationTargets[i * 3 + 1];
      const tz = formationTargets[i * 3 + 2];
      // (0,0,0) exacto solo ocurre en reposo (sin figura activa) — target
      // real de una figura formada nunca cae justo en el origen.
      const hasTarget = tx !== 0 || ty !== 0 || tz !== 0;
      if (!hasTarget) {
        snapped[i] = 0;
      } else {
        const dx = liveX - tx;
        const dy = liveY - ty;
        const dz = liveZ - tz;
        const distSq = dx * dx + dy * dy + dz * dz;
        if (snapped[i]) {
          if (distSq > UNSNAP_DISTANCE_SQ) snapped[i] = 0;
        } else if (distSq < SNAP_DISTANCE_SQ) {
          snapped[i] = 1;
        }
      }
      const isSnapped = hasTarget && snapped[i] === 1;
      const px = isSnapped ? tx : liveX;
      const py = isSnapped ? ty : liveY;
      const pz = isSnapped ? tz : liveZ;

      if (role === NANOBOT_ROLE.RELATION) {
        // Viga sólida entre las 2 anclas de ESTRUCTURA que este nanobot
        // conecta: se posiciona en su punto (físico mientras viaja, fijo
        // una vez asentado — ver arriba) y se orienta/estira para cubrir
        // el largo real de la conexión (siempre fijo, ya sale de spans).
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
        dummy.position.set(px, py, pz);
        dummy.quaternion.setFromUnitVectors(UP, relationDir);
        dummy.scale.set(scale, length, scale);
      } else {
        dummy.position.set(px, py, pz);
        dummy.rotation.set(py * 0.15, px * 0.15, 0);
        dummy.scale.setScalar(scale);
      }
      dummy.updateMatrix();
      mesh.setMatrixAt(localIndex, dummy.matrix);
    }

    instancedMeshes.forEach((mesh, role) => {
      if (role === NANOBOT_ROLE.COLOR) return; // lo maneja colorWaveMeshes abajo
      mesh.count = localCounters[role];
      mesh.instanceMatrix.needsUpdate = true;
    });
    colorWaveMeshes.forEach((mesh, w) => {
      mesh.count = waveLocalCounters[w];
      mesh.instanceMatrix.needsUpdate = true;
    });
  }

  // Oculta todo el enjambre: se usa en reposo, ya que los nanobots "están
  // dentro" del núcleo (siguen simulándose físicamente, solo no se dibujan).
  function setVisible(visible: boolean) {
    group.visible = visible;
  }

  function setColorClusters(clusters: ColorCluster[]) {
    colorWaveMeshes.forEach((mesh, w) => {
      const hex = clusters[w]?.color ?? DEFAULT_DOMINANT_COLOR;
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.color.setHex(hex);
      material.emissive.setHex(hex);
    });
  }

  const SKELETON_ROLE_COLORS: Array<{ role: number; color: number; emissive: number }> = [
    { role: NANOBOT_ROLE.STRUCTURE, color: STRUCTURE_COLOR, emissive: STRUCTURE_EMISSIVE },
    { role: NANOBOT_ROLE.RELATION, color: RELATION_COLOR, emissive: RELATION_EMISSIVE },
    { role: NANOBOT_ROLE.DETAIL, color: DETAIL_COLOR, emissive: DETAIL_EMISSIVE },
  ];

  function setSkeletonGrayscale(active: boolean) {
    for (const { role, color, emissive } of SKELETON_ROLE_COLORS) {
      const material = instancedMeshes[role].material as THREE.MeshStandardMaterial;
      material.color.setHex(active ? SKELETON_GRAYSCALE_COLOR : color);
      material.emissive.setHex(active ? SKELETON_GRAYSCALE_EMISSIVE : emissive);
    }
  }

  setCount(maxCount);

  return { group, setCount, updateFromPositions, setVisible, setColorClusters, setSkeletonGrayscale };
}
