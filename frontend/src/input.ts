import * as THREE from "three";

// Traduce la posición 2D del mouse a una posición 3D dentro de la escena,
// haciendo raycasting contra un plano invisible situado en el centro del
// enjambre. Esa posición 3D es lo que el enjambre "sigue" (target del boid).
export class CursorTarget {
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2(0, 0);
  private plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private target = new THREE.Vector3(0, 0, 0);
  private camera: THREE.Camera;

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.camera = camera;
    domElement.addEventListener("mousemove", (event) => this.onMouseMove(event));
    domElement.addEventListener("touchmove", (event) => this.onTouchMove(event), {
      passive: true,
    });
  }

  private onMouseMove(event: MouseEvent): void {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  private onTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];
    if (!touch) return;
    this.pointer.x = (touch.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(touch.clientY / window.innerHeight) * 2 + 1;
  }

  // Recalcula el punto 3D donde apunta actualmente el cursor.
  update(): THREE.Vector3 {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    this.raycaster.ray.intersectPlane(this.plane, this.target);
    return this.target;
  }
}
