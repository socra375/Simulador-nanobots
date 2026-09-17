import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
// El umbral vive en bot-config.ts junto con la intensidad del emissive:
// son la misma pregunta (qué florece), y el techo de brillo del material
// los DERIVA en vez de adivinarlos (ver material/material-animation.ts).
import { BLOOM_THRESHOLD } from "./swarm/bot-config";

// Construye la escena 3D con estética futurista/holográfica: fondo oscuro,
// cuadrícula sutil tipo "piso de laboratorio" y una luz de acento neón.
// Profundidad/definición: sombras reales (luz direccional + piso que las
// recibe), tone mapping cinematográfico, y postprocesado de bloom/glow
// sobre los materiales emissive del enjambre/reactor (ver nanobot-mesh.ts/
// reactor.ts) — todo vía `composer`, que reemplaza a `renderer.render()`
// directo en el loop de main.ts.
export interface SceneBundle {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  controls: OrbitControls;
}

export function createScene(container: HTMLElement): SceneBundle {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x03050a);
  scene.fog = new THREE.FogExp2(0x03050a, 0.018);

  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    0.1,
    200,
  );
  camera.position.set(0, 6, 26);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  // Cuadrícula sutil en el "piso" para reforzar la sensación holográfica.
  const grid = new THREE.GridHelper(60, 60, 0x1a6fa8, 0x0c2b3d);
  grid.position.y = -13;
  (grid.material as THREE.Material).opacity = 0.35;
  (grid.material as THREE.Material).transparent = true;
  scene.add(grid);

  // Plano invisible (solo recibe sombra, ShadowMaterial no se dibuja donde
  // no cae sombra) justo debajo del grid: sin esto las sombras de los
  // nanobots/reactor no tendrían dónde proyectarse.
  const shadowFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 120),
    new THREE.ShadowMaterial({ opacity: 0.45 }),
  );
  shadowFloor.rotation.x = -Math.PI / 2;
  shadowFloor.position.y = -13;
  shadowFloor.receiveShadow = true;
  scene.add(shadowFloor);

  const ambient = new THREE.AmbientLight(0x1c3a52, 1.2);
  scene.add(ambient);

  const accentLight = new THREE.PointLight(0x4be3ff, 2.2, 60);
  accentLight.position.set(0, 10, 10);
  scene.add(accentLight);

  // Luz clave direccional: la única que proyecta sombras reales (dan la
  // sensación de profundidad/volumen que las luces puntuales/ambiental por
  // sí solas no logran). El frustum de su cámara de sombra cubre el
  // volumen físico del enjambre (kBounds=12 en boids.cpp) más el reactor.
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
  keyLight.position.set(14, 22, 10);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  keyLight.shadow.camera.left = -22;
  keyLight.shadow.camera.right = 22;
  keyLight.shadow.camera.top = 22;
  keyLight.shadow.camera.bottom = -22;
  keyLight.shadow.camera.near = 1;
  keyLight.shadow.camera.far = 60;
  keyLight.shadow.bias = -0.0015;
  scene.add(keyLight);

  // Controles de cámara: rotar arrastrando (botón izquierdo), zoom con la
  // rueda del mouse. `controls.update()` debe llamarse en cada frame del
  // loop de animación (necesario por el damping, que suaviza el movimiento).
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.minDistance = 6;
  controls.maxDistance = 80;
  controls.target.set(0, 0, 0);

  // Postprocesado: RenderPass dibuja la escena normal, UnrealBloomPass le
  // suma un glow a lo que ya es brillante (los materiales emissive del
  // enjambre/reactor) sin necesidad de máscaras — el threshold alto evita
  // que el resto de la escena (oscura) también brille.
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.55, // strength
    0.4, // radius
    BLOOM_THRESHOLD, // threshold
  );
  composer.addPass(bloomPass);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer, composer, controls };
}
