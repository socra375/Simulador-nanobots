import * as THREE from "three";

// Construye la escena 3D con estética futurista/holográfica: fondo oscuro,
// cuadrícula sutil tipo "piso de laboratorio" y una luz de acento neón.
export interface SceneBundle {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
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
  container.appendChild(renderer.domElement);

  // Cuadrícula sutil en el "piso" para reforzar la sensación holográfica.
  const grid = new THREE.GridHelper(60, 60, 0x1a6fa8, 0x0c2b3d);
  grid.position.y = -13;
  (grid.material as THREE.Material).opacity = 0.35;
  (grid.material as THREE.Material).transparent = true;
  scene.add(grid);

  const ambient = new THREE.AmbientLight(0x1c3a52, 1.2);
  scene.add(ambient);

  const accentLight = new THREE.PointLight(0x4be3ff, 2.2, 60);
  accentLight.position.set(0, 10, 10);
  scene.add(accentLight);

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer };
}
