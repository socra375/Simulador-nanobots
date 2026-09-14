import * as THREE from "three";
import { NANOBOT_ROLE } from "./shapes";
import { DEFAULT_DOMINANT_COLOR, MAX_COLOR_CLUSTERS, type ColorCluster } from "./image-color";

// Geometría y material por ROL de nanobot (ver shapes/types.ts). Desde la
// Fase 27 hay exactamente dos: el exoesqueleto lo arma la población de
// Microbots, así que los Nanobots solo rellenan y pintan.
// - DETALLE: esfera SÓLIDA emissive — el relleno que le da cuerpo a la
//   silueta, encima del exoesqueleto de Microbots.
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
// Fase 16 había subido esto a 1500 para que el relleno se viera más denso
// al conteo default más alto, pero el resultado se vio "grueso" contra el
// exoesqueleto de hueso fino de Microbots (Fase 17) — vuelve a 80 (el
// valor de Fase 1: esferas finas/chicas, como antes) y el contraste de
// "mucha cantidad" se logra solo con el default de Nanobots más alto
// (3000, ver DEFAULT_STATE en main.ts), no agrandando cada esfera.
const SCALE_BASELINE_COUNT = 80;

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

// Color de rol fijo de DETALLE (COLOR no tiene uno propio — se pisa en
// caliente vía setColorClusters). Guardado como constante (no solo inline
// en buildRoleMaterial) porque setSkeletonGrayscale() necesita poder
// RESTAURARLO: mientras la capa de COLOR viaja desde el núcleo, DETALLE
// pierde su color (pasa a gris) para que el color de la foto termine
// predominando al llegar.
const DETAIL_COLOR = 0x1c8f5a;
const DETAIL_EMISSIVE = 0x7dffb3;
const SKELETON_GRAYSCALE_COLOR = 0x555555;
const SKELETON_GRAYSCALE_EMISSIVE = 0x2a2a2a;

// Índice = NANOBOT_ROLE.{DETAIL,COLOR}. COLOR es levemente más grande que
// DETALLE a propósito: se solapa más entre sí para tapar huecos/grietas en
// vez de dejar el fondo negro visible entre esfera y esfera.
const ROLE_GEOMETRIES: THREE.BufferGeometry[] = [
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

export interface NanobotSwarmMesh {
  group: THREE.Group;
  setCount: (count: number) => void;
  updateFromPositions: (
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    formationTargets: Float32Array,
    visibleRoles: readonly [boolean, boolean],
    colorWave: Uint8Array<ArrayBufferLike>,
    revealedColorWaves: number,
  ) => void;
  setVisible: (visible: boolean) => void;
  // Fija los colores RGB de las "olas" de COLOR (ver image-color.ts
  // pickColorClusters) — llamado una vez por "Formar objeto", antes de que
  // el rol COLOR se revele. El color real de cada agente se aplica por
  // instancia en updateFromPositions según su colorWave.
  setColorClusters: (clusters: ColorCluster[]) => void;
  // true: DETALLE pierde su color de rol fijo y pasa a un gris apagado
  // (mientras COLOR viaja hacia su posición, para que su color termine
  // predominando al llegar). false: lo restaura. No afecta a COLOR.
  setSkeletonGrayscale: (active: boolean) => void;
}

// Un InstancedMesh por rol (detalle/color) más uno por ola de color extra,
// para soportar miles de nanobots con muy pocos draw calls. Cada uno
// reserva capacidad para `maxCount` completo: como la proporción entre
// roles no es pareja (25/75), sería frágil repartirla de antemano.
export function createNanobotSwarmMesh(maxCount: number): NanobotSwarmMesh {
  const group = new THREE.Group();
  // Escritura directa al buffer de instanceMatrix (Fase 18): con hasta
  // 60.000 instancias, el costo por-agente de THREE.Object3D/updateMatrix()
  // (compone posición+rotación+escala vía Matrix4.compose) es el cuello de
  // botella real del render — mismo diagnóstico que llevó a microbot-mesh.ts
  // a evitarlo desde el principio. Toda la geometría que se dibuja acá es
  // esférica, así que no hace falta rotación por instancia (una esfera se
  // ve igual rotada).

  const instancedMeshes = ROLE_GEOMETRIES.map((geometry, role) => {
    const mesh = new THREE.InstancedMesh(geometry, buildRoleMaterial(role), maxCount);
    mesh.count = 0;
    // Fase 21: los Nanobots dejan de proyectar sombra (perf — el pase de
    // sombras de miles de instancias con mapa 2048px+PCF es un costo real
    // de GPU independiente del fix de buffer de Fase 20; el reactor sigue
    // proyectando/recibiendo la suya). Microbots ya no proyectaban sombra
    // (nunca se activó ahí), así que este cambio alcanza para bajar el
    // costo del pase de sombras de todo el enjambre.
    mesh.castShadow = false;
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
    // Fase 21: los Nanobots dejan de proyectar sombra (perf — el pase de
    // sombras de miles de instancias con mapa 2048px+PCF es un costo real
    // de GPU independiente del fix de buffer de Fase 20; el reactor sigue
    // proyectando/recibiendo la suya). Microbots ya no proyectaban sombra
    // (nunca se activó ahí), así que este cambio alcanza para bajar el
    // costo del pase de sombras de todo el enjambre.
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    group.add(mesh);
    colorWaveMeshes.push(mesh);
  }

  // Estado de histéresis por agente (1 = ya "encajado" en su target fijo).
  // Se reinicia en setCount porque los índices pueden pasar a representar
  // otro agente distinto tras un cambio de cantidad.
  const snapped = new Uint8Array(maxCount);

  // Buffers reusados cuadro a cuadro por updateFromPositions (se llama
  // TODOS los frames, incluso en reposo) — evita asignar arrays nuevos por
  // frame (antes: `new Array(...)`/`.map(...)` en cada llamada), mismo
  // patrón que los scratch de Vector3/Matrix4 de microbot-mesh.ts.
  const localCounters = new Array<number>(instancedMeshes.length).fill(0);
  const waveLocalCounters = new Array<number>(colorWaveMeshes.length).fill(0);
  const meshArrays = instancedMeshes.map((mesh) => mesh.instanceMatrix.array as Float32Array);
  const waveArrays = colorWaveMeshes.map((mesh) => mesh.instanceMatrix.array as Float32Array);

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

  function writeScaleMatrix(arr: Float32Array, offset: number, px: number, py: number, pz: number, scale: number) {
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
    positions: Float32Array,
    count: number,
    roles: Uint8Array<ArrayBufferLike>,
    formationTargets: Float32Array,
    visibleRoles: readonly [boolean, boolean],
    colorWave: Uint8Array<ArrayBufferLike>,
    revealedColorWaves: number,
  ) {
    // En reposo el enjambre está OCULTO (ver setVisible más abajo) pero la
    // física boid se sigue corriendo y este método se seguía llamando cada
    // cuadro: escribía hasta count*16 floats de matrices y los subía a la
    // GPU para un grupo que no se dibuja. Medido antes de este corte
    // (bench/BASELINE.md): 6,29 ms por cuadro a 10.000 agentes, íntegros
    // al pedo. Si no se ve, no hace falta escribirlo — las matrices se
    // recalculan enteras en el primer cuadro visible.
    if (!group.visible) return;

    // Con miles de nanobots en el mismo volumen, el tamaño fijo (afinado
    // para ~80) los hace superponerse tanto que una figura se ve como un
    // blob sólido en vez de un contorno nítido. Se achican con la densidad
    // (proporcional a count^(-1/3)) así más cantidad aporta más detalle.
    const scale = Math.min(1, Math.cbrt(SCALE_BASELINE_COUNT / count));
    localCounters.fill(0);
    waveLocalCounters.fill(0);

    for (let i = 0; i < count; i++) {
      const role = roles[i];
      // Rol todavía no revelado (ver formationPhase en main.ts): el agente
      // sigue "dentro" del núcleo, no se dibuja hasta que le toque su turno.
      if (!visibleRoles[role]) continue;

      let arr: Float32Array;
      let localIndex: number;
      if (role === NANOBOT_ROLE.COLOR) {
        // Dentro de COLOR, cada agente pertenece a una "ola" (colorWave)
        // que se revela en su propia sub-fase — aunque el rol ya esté
        // visible, un agente de una ola posterior sigue sin dibujarse
        // hasta su turno, y cada ola va a SU PROPIO mesh (ver arriba).
        const wave = colorWave[i];
        if (wave >= revealedColorWaves) continue;
        const waveIndex = Math.min(wave, colorWaveMeshes.length - 1);
        arr = waveArrays[waveIndex];
        localIndex = waveLocalCounters[waveIndex]++;
      } else {
        arr = meshArrays[role];
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

      writeScaleMatrix(arr, localIndex * 16, px, py, pz, scale);
    }

    // Sin `addUpdateRange`, three.js sube el buffer COMPLETO de
    // instanceMatrix (dimensionado a `maxCount`=60.000) por cada mesh en
    // CADA frame, sin importar cuántas instancias están realmente en uso
    // (`mesh.count`) — con hasta 7 meshes de nanobots eso son ~25MB
    // subidos a la GPU por frame, todo el tiempo (incluso en reposo, ya
    // que la física idle llama a updateFromPositions cada frame). Acotar
    // el rango subido al conteo real en uso evita ese costo fijo.
    // `for` plano en vez de forEach: esto corre en cada cuadro y cada
    // forEach asignaba una closure nueva.
    for (let role = 0; role < instancedMeshes.length; role++) {
      if (role === NANOBOT_ROLE.COLOR) continue; // lo maneja colorWaveMeshes abajo
      const mesh = instancedMeshes[role];
      mesh.count = localCounters[role];
      mesh.instanceMatrix.clearUpdateRanges();
      mesh.instanceMatrix.addUpdateRange(0, mesh.count * 16);
      mesh.instanceMatrix.needsUpdate = true;
    }
    for (let w = 0; w < colorWaveMeshes.length; w++) {
      const mesh = colorWaveMeshes[w];
      mesh.count = waveLocalCounters[w];
      mesh.instanceMatrix.clearUpdateRanges();
      mesh.instanceMatrix.addUpdateRange(0, mesh.count * 16);
      mesh.instanceMatrix.needsUpdate = true;
    }
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
