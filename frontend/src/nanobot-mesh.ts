import * as THREE from "three";
import { NANOBOT_ROLE } from "./shapes";
import { BOT_TYPE } from "./swarm/bot-types";
import { botVisual, MATERIAL_EMISSIVE_INTENSITY } from "./swarm/bot-config";
import { createBotGeometries, LOD_LEVEL, type BotGeometrySet, type LodLevel } from "./rendering/bot-models";
import { createInstanceColorBuffer, patchMaterialForInstanceColor } from "./rendering/instance-color";

// Geometría y material por ROL de nanobot (ver shapes/types.ts). Desde la
// Fase 27 hay exactamente dos: el exoesqueleto lo arma la población de
// Microbots, así que los Nanobots solo rellenan y pintan.
// - DETALLE: esfera SÓLIDA emissive — el relleno que le da cuerpo a la
//   silueta, encima del exoesqueleto de Microbots.
// - COLOR: esfera SÓLIDA idéntica a DETALLE, con material BLANCO fijo y
//   el color real de cada agente por INSTANCIA (ver rendering/
//   instance-color.ts, que multiplica el tint sobre el difuso Y sobre la
//   radiancia emissive — sin esa segunda parte el color quedaba apagado
//   contra el fondo oscuro).
//
//   FASE 42: desaparecieron las mallas POR OLA. Existían para darle a cada
//   ola su propio color plano de material, y ese mecanismo era exactamente
//   el que producía el damero: el color de un agente salía de su ola, no de
//   su posición. Ahora el color de cada agente sale del mapa de material
//   (material/material-map.ts) y el tint por instancia lo transporta entero,
//   así que cuatro mallas extra dejaron de tener función. Son cuatro draw
//   calls menos y un eje menos de estado.
//
//   El tint va en FLOATS y puede pasarse de 1: eso es lo que permite el
//   parpadeo de activación y el destello de transformación sin un shader
//   nuevo — un tint de 2.0 es literalmente el doble de brillo, y el bloom
//   lo recoge.
// Fase 16 había subido esto a 1500 para que el relleno se viera más denso
// al conteo default más alto, pero el resultado se vio "grueso" contra el
// exoesqueleto de hueso fino de Microbots (Fase 17) — vuelve a 80 (el
// valor de Fase 1: esferas finas/chicas, como antes) y el contraste de
// "mucha cantidad" se logra solo con el default de Nanobots más alto
// (3000, ver DEFAULT_STATE en main.ts), no agrandando cada esfera.
const SCALE_BASELINE_COUNT = 80;

// Capacidad inicial de cada InstancedMesh: cubre el conteo por defecto
// (3.000, ver DEFAULT_STATE en main.ts) sin tener que recrear nada.
const INITIAL_CAPACITY = 4096;

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

// Color de rol fijo de DETALLE (COLOR no tiene uno propio: su material es
// blanco y el color lo trae el tint por instancia). Guardado como constante (no solo inline
// en buildRoleMaterial) porque setSkeletonGrayscale() necesita poder
// RESTAURARLO: mientras la capa de COLOR viaja desde el núcleo, DETALLE
// pierde su color (pasa a gris) para que el color de la foto termine
// predominando al llegar.
// El color de identidad del tipo NANOBOT sale de la config central
// (swarm/bot-config.ts), no de una constante suelta acá: la spec pide un
// solo lugar donde cambiar la paleta.
const DETAIL_COLOR = botVisual(BOT_TYPE.NANOBOT).identityColor;
const DETAIL_EMISSIVE = 0x7dffb3;
const SKELETON_GRAYSCALE_COLOR = 0x555555;
const SKELETON_GRAYSCALE_EMISSIVE = 0x2a2a2a;

// Índice = NANOBOT_ROLE.{DETAIL,COLOR}. COLOR es levemente más grande que
// DETALLE a propósito: se solapa más entre sí para tapar huecos/grietas en
// vez de dejar el fondo visible entre bot y bot.
//
// Fase 32: de esferas a prismas HEXAGONALES, con tres niveles de detalle
// cada uno. Además de ser lo que pide la spec, sale más barato: la esfera
// tenía ~350 triángulos por instancia y el hexágono tiene ~20.
const ROLE_GEOMETRY_SETS: BotGeometrySet[] = [
  createBotGeometries(0.55, 0.42), // detalle
  createBotGeometries(0.6, 0.46), // color (capa de material final)
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
  // BLANCO, siempre: el shader MULTIPLICA el tint por instancia, así que
  // cualquier otro tono teñiría el color real del objeto. El blanco es el
  // neutro del producto y el único valor correcto acá.
  return new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: MATERIAL_EMISSIVE_INTENSITY,
    roughness: 0.35,
    metalness: 0.1,
  });
}

export interface LayerDisplay {
  visible: boolean;
  offsetY: number;
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
  ) => void;
  setVisible: (visible: boolean) => void;
  /**
   * Tint por agente (count*3 FLOATS, no bytes), o null para el neutro.
   *
   * Es un MULTIPLICADOR sobre el material blanco, así que un 1 deja el bot
   * como está y un valor mayor lo hace brillar. Lo produce
   * material/material-animation.ts, que mezcla el color de identidad del
   * Material Bot con el color del objeto según el avance de la
   * transformación y le suma los destellos.
   *
   * Sólo llega a la malla de COLOR: son los Material Bots, los únicos que
   * llevan el material del objeto. DETALLE conserva su verde de identidad y
   * los Microbots viven en otra malla, así que la regla dura del spec §14
   * se cumple porque no existe el camino, no porque alguien lo chequee.
   */
  setInstanceTint: (tint: Float32Array | null) => void;
  // true: DETALLE pierde su color de rol fijo y pasa a un gris apagado
  // (mientras COLOR viaja hacia su posición, para que su color termine
  // predominando al llegar). false: lo restaura. No afecta a COLOR.
  setSkeletonGrayscale: (active: boolean) => void;
  /**
   * Cambia el nivel de detalle de TODAS las mallas de la población.
   * Reasigna la geometría ya construida; no construye nada, así que se
   * puede llamar en un movimiento de cámara sin costo perceptible. El
   * instanceMatrix no se toca: las instancias siguen donde estaban.
   */
  setLodLevel: (level: LodLevel) => void;
  /**
   * Visibilidad y desplazamiento vertical por capa (vista de capas).
   *
   * Es puramente de PRESENTACIÓN: no toca posiciones de agentes ni estado
   * de simulación. La visibilidad de cada capa se aplica sobre `.visible`
   * de la malla, que es un eje independiente del conteo de instancias con
   * el que se maneja el revelado progresivo — por eso las dos cosas
   * conviven sin pisarse.
   */
  setLayerDisplay: (detail: LayerDisplay, material: LayerDisplay) => void;
}

// UN InstancedMesh por rol (detalle/color) — dos en total desde la Fase 42,
// que eliminó las cuatro mallas por ola de color. Los dos comparten la
// MISMA capacidad (ver ensureCapacity): como la proporción entre roles no
// es pareja (25/75), repartirla de antemano sería frágil. `maxCount` es
// solo el techo duro, ya no lo que se reserva.
export function createNanobotSwarmMesh(maxCount: number): NanobotSwarmMesh {
  const group = new THREE.Group();
  // Escritura directa al buffer de instanceMatrix (Fase 18): con hasta
  // 60.000 instancias, el costo por-agente de THREE.Object3D/updateMatrix()
  // (compone posición+rotación+escala vía Matrix4.compose) es el cuello de
  // botella real del render — mismo diagnóstico que llevó a microbot-mesh.ts
  // a evitarlo desde el principio. Toda la geometría que se dibuja acá es
  // esférica, así que no hace falta rotación por instancia (una esfera se
  // ve igual rotada).

  // Los materiales se crean UNA sola vez y SOBREVIVEN a las recreaciones
  // de mallas de ensureCapacity(): setColorClusters()/setSkeletonGrayscale()
  // mutan su color en caliente, así que recrearlos perdería el estado
  // visual actual (la figura cambiaría de color sola al subir el conteo).
  // Nivel de detalle vigente para TODAS las mallas de esta población.
  let lodLevel: LodLevel = LOD_LEVEL.MID;
  const geometryFor = (role: number): THREE.BufferGeometry => ROLE_GEOMETRY_SETS[role].byLevel[lodLevel];

  const roleMaterials = ROLE_GEOMETRY_SETS.map((_, role) => buildRoleMaterial(role));
  // Sólo el material de COLOR se parcha: son los Material Bots, los únicos
  // que llevan el material del objeto. DETALLE conserva el verde de
  // identidad del Nanobot, y los Microbots viven en OTRA malla que este
  // archivo no toca — así la regla dura del spec §14 ("el Microbot NO
  // recibe el color del objeto") se cumple por construcción, no por una
  // comprobación que alguien pueda olvidarse de hacer.
  patchMaterialForInstanceColor(roleMaterials[NANOBOT_ROLE.COLOR]);

  let capacity = 0;
  let instancedMeshes: THREE.InstancedMesh[] = [];
  let meshArrays: Float32Array[] = [];
  /** Buffer de color por instancia de la malla de COLOR. */
  let colorArray: Float32Array = new Float32Array(0);
  // Tint por agente (count*3 floats), o null si no hay figura con material.
  let instanceTint: Float32Array | null = null;
  /**
   * Si el tint cambió desde la última vez que se copió al buffer de
   * instancias. Copiar y SUBIR count*3 floats por cuadro cuando el
   * contenido es idéntico es trabajo puro para nadie — medido: a 10.000
   * agentes valía ~9 ms por cuadro durante el vuelo, donde todos los
   * Material Bots llevan el mismo color de identidad constante.
   */
  let tintDirty = true;
  /**
   * Con qué visibilidad del rol COLOR se escribieron los colores por
   * última vez. Si cambia, la COMPACTACIÓN de instancias cambia y hay que
   * reescribirlos aunque el tint sea el mismo: el agente que estaba en el
   * índice local 0 ya no es el mismo agente.
   */
  let tintWrittenVisible = false;
  // Estado de histéresis por agente (1 = ya "encajado" en su target fijo).
  // Se reinicia en setCount porque los índices pueden pasar a representar
  // otro agente distinto tras un cambio de cantidad.
  let snapped = new Uint8Array(0);

  function makeMesh(geometry: THREE.BufferGeometry, material: THREE.Material, cap: number): THREE.InstancedMesh {
    const mesh = new THREE.InstancedMesh(geometry, material, cap);
    // Las instancias llevan su propia posición en instanceMatrix, pero
    // three calcula la esfera envolvente de un InstancedMesh desde la
    // GEOMETRÍA, no desde las instancias: cree que toda la malla es una
    // esfera del tamaño de UN bot en el origen de la escena. De lejos eso
    // no se nota (el origen cae dentro del frustum), pero al acercarse con
    // el zoom especial el origen queda afuera y three descarta la malla
    // ENTERA: pantalla negra. Verificado en pantalla.
    mesh.frustumCulled = false;
    mesh.count = 0;
    // Fase 21: los Nanobots no proyectan sombra (el pase de sombras de
    // miles de instancias con mapa 2048px+PCF es un costo real de GPU; el
    // reactor sigue proyectando la suya).
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  // Antes cada InstancedMesh reservaba SIEMPRE `maxCount` (60.000) sin
  // importar cuántos agentes hubiera de verdad: con el default de 3.000
  // eran ~19 MB de instanceMatrix reservados para instancias inexistentes
  // (medido en bench/BASELINE.md: el heap no dependía del conteo). Ahora
  // se arranca chico y se crece duplicando, solo cuando el usuario sube el
  // conteo por encima de lo reservado. Crecer implica recrear las mallas
  // (el tamaño de instanceMatrix es fijo al construirlas), pero pasa como
  // mucho un puñado de veces por sesión, nunca por cuadro.
  function ensureCapacity(needed: number): void {
    // `capacity > 0` en la guarda: la PRIMERA llamada siempre construye,
    // aunque pidan 0 agentes. Si no, arrancar con setCount(0) dejaría los
    // arrays de mallas vacíos y updateFromPositions leería undefined.
    if (capacity > 0 && needed <= capacity) return;
    let next = Math.max(capacity, INITIAL_CAPACITY);
    while (next < needed) next *= 2;
    capacity = Math.min(next, maxCount);

    for (const mesh of instancedMeshes) {
      group.remove(mesh);
      mesh.dispose(); // libera el buffer de instanceMatrix; geometría y material son compartidos
    }

    instancedMeshes = ROLE_GEOMETRY_SETS.map((_, role) => makeMesh(geometryFor(role), roleMaterials[role], capacity));
    // Asignar `instanceColor` es lo que hace que three defina
    // USE_INSTANCING_COLOR y el parche entre en acción. Arranca en blanco,
    // el neutro del producto: sin tint escrito se ve igual que el material.
    const colorMesh = instancedMeshes[NANOBOT_ROLE.COLOR];
    colorMesh.instanceColor = createInstanceColorBuffer(capacity);
    meshArrays = instancedMeshes.map((mesh) => mesh.instanceMatrix.array as Float32Array);
    colorArray = colorMesh.instanceColor.array as Float32Array;
    // Buffer nuevo, en blanco: lo que hubiera escrito antes se perdió.
    tintDirty = true;
    snapped = new Uint8Array(capacity);
  }

  // Buffers reusados cuadro a cuadro por updateFromPositions — su largo
  // depende de la CANTIDAD DE MALLAS (fija), no de la capacidad.
  const localCounters = new Array<number>(ROLE_GEOMETRY_SETS.length).fill(0);

  function setCount(count: number) {
    ensureCapacity(count);
    // Reparto aproximado solo para el estado inicial (antes de la primera
    // updateFromPositions con roles reales) — evita instancias fantasma.
    const perRole = Math.ceil(count / instancedMeshes.length);
    instancedMeshes.forEach((mesh, i) => {
      const start = i * perRole;
      const end = Math.min(count, start + perRole);
      mesh.count = Math.max(0, end - start);
    });
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
    const materialVisible = visibleRoles[NANOBOT_ROLE.COLOR];
    const writeColors = instanceTint !== null && (tintDirty || materialVisible !== tintWrittenVisible);

    for (let i = 0; i < count; i++) {
      const role = roles[i];
      // Rol todavía no revelado (ver formationPhase en main.ts): el agente
      // sigue "dentro" del núcleo, no se dibuja hasta que le toque su turno.
      if (!visibleRoles[role]) continue;

      const arr = meshArrays[role];
      const localIndex = localCounters[role]++;
      // El tint, en el MISMO recorrido que ya calcula la matriz: tres
      // floats más por agente, sin un segundo pase. Si la figura no trae
      // tint el buffer se queda en blanco y manda el material.
      if (role === NANOBOT_ROLE.COLOR && writeColors && instanceTint) {
        colorArray[localIndex * 3 + 0] = instanceTint[i * 3 + 0];
        colorArray[localIndex * 3 + 1] = instanceTint[i * 3 + 1];
        colorArray[localIndex * 3 + 2] = instanceTint[i * 3 + 2];
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
    if (writeColors) {
      tintDirty = false;
      tintWrittenVisible = materialVisible;
    }

    for (let role = 0; role < instancedMeshes.length; role++) {
      const mesh = instancedMeshes[role];
      mesh.count = localCounters[role];
      mesh.instanceMatrix.clearUpdateRanges();
      mesh.instanceMatrix.addUpdateRange(0, mesh.count * 16);
      mesh.instanceMatrix.needsUpdate = true;
      if (role === NANOBOT_ROLE.COLOR && writeColors && mesh.instanceColor) {
        mesh.instanceColor.clearUpdateRanges();
        mesh.instanceColor.addUpdateRange(0, mesh.count * 3);
        mesh.instanceColor.needsUpdate = true;
      }
    }
  }

  // Oculta todo el enjambre: se usa en reposo, ya que los nanobots "están
  // dentro" del núcleo (siguen simulándose físicamente, solo no se dibujan).
  function setVisible(visible: boolean) {
    group.visible = visible;
  }

  /**
   * Tint por agente. Ver la documentación de la interfaz: es un
   * multiplicador en floats sobre el material blanco de la malla de COLOR.
   */
  function setInstanceTint(tint: Float32Array | null) {
    instanceTint = tint;
    tintDirty = true;
    if (tint) return;
    // Volver a blanco: el neutro del producto. Si quedaran los valores
    // viejos escritos, teñirían la figura siguiente.
    colorArray.fill(1);
    const mesh = instancedMeshes[NANOBOT_ROLE.COLOR];
    if (mesh?.instanceColor) mesh.instanceColor.needsUpdate = true;
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

  function setLayerDisplay(detail: LayerDisplay, material: LayerDisplay) {
    const detailMesh = instancedMeshes[NANOBOT_ROLE.DETAIL];
    detailMesh.visible = detail.visible;
    detailMesh.position.y = detail.offsetY;

    const materialMesh = instancedMeshes[NANOBOT_ROLE.COLOR];
    materialMesh.visible = material.visible;
    materialMesh.position.y = material.offsetY;
  }

  function setLodLevel(level: LodLevel) {
    if (level === lodLevel) return;
    lodLevel = level;
    // Sólo se reasigna la referencia: las geometrías de los tres niveles
    // ya están construidas desde el arranque, y el instanceMatrix de cada
    // malla no se toca.
    for (let role = 0; role < instancedMeshes.length; role++) {
      instancedMeshes[role].geometry = geometryFor(role);
    }
  }

  setCount(0);

  return {
    group,
    setCount,
    updateFromPositions,
    setVisible,
    setInstanceTint,
    setSkeletonGrayscale,
    setLodLevel,
    setLayerDisplay,
  };
}
