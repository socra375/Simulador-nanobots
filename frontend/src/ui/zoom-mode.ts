// Modo de zoom especial (Fase 33).
//
// La spec es explícita: "El zoom normal de la escena NO debe ser
// suficiente para ver todos estos detalles". O sea que esto NO es subir
// el zoom máximo y ya — es un modo aparte que:
//
//   - baja el límite de acercamiento MUY por debajo del normal;
//   - achica el campo de visión, para que acercarse no deforme;
//   - fuerza el nivel de detalle alto sin esperar al umbral de distancia.
//
// Al salir se restauran los valores exactos que había, no unos por
// defecto: si el usuario había tocado algo, no se le pisa.

import type * as THREE from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/** Cuánto más cerca deja llegar el modo zoom respecto del normal. */
const ZOOM_MIN_DISTANCE = 0.8;
const ZOOM_FOV = 32;

export interface ZoomMode {
  readonly active: boolean;
  toggle(): boolean;
  enter(): void;
  exit(): void;
}

export interface ZoomModeDeps {
  camera: THREE.PerspectiveCamera;
  controls: OrbitControls;
  /** Se avisa al entrar/salir para forzar (o soltar) el detalle alto. */
  onChange?: (active: boolean) => void;
  /**
   * A DÓNDE acercarse. Sin esto el zoom converge al objetivo de la
   * órbita, que es el origen de la escena — y ahí no hay nada: la figura
   * está en (4, 2, 4) y el núcleo en (-8, 8, -8). Verificado en pantalla:
   * el zoom especial terminaba mirando un vacío negro entre las dos
   * cosas. Se consulta al ENTRAR, no una vez al construir, porque el
   * enjambre se mueve.
   */
  focusTarget?: () => readonly [number, number, number];
}

export function createZoomMode(deps: ZoomModeDeps): ZoomMode {
  const { camera, controls } = deps;
  let active = false;
  // Se guardan los valores REALES del momento de entrar, no constantes.
  let savedMinDistance = controls.minDistance;
  let savedFov = camera.fov;
  const savedTarget = controls.target.clone();

  function enter(): void {
    if (active) return;
    active = true;
    savedMinDistance = controls.minDistance;
    savedFov = camera.fov;
    savedTarget.copy(controls.target);
    const focus = deps.focusTarget?.();
    if (focus) controls.target.set(focus[0], focus[1], focus[2]);
    controls.minDistance = ZOOM_MIN_DISTANCE;
    camera.fov = ZOOM_FOV;
    camera.updateProjectionMatrix();
    deps.onChange?.(true);
  }

  function exit(): void {
    if (!active) return;
    active = false;
    controls.minDistance = savedMinDistance;
    controls.target.copy(savedTarget);
    camera.fov = savedFov;
    camera.updateProjectionMatrix();
    // Si el usuario quedó más cerca que el mínimo normal, OrbitControls lo
    // corrige solo en su próximo update(); no hace falta empujar la cámara
    // a mano y arriesgar un salto brusco.
    deps.onChange?.(false);
  }

  return {
    get active() { return active; },
    enter,
    exit,
    toggle(): boolean {
      if (active) exit();
      else enter();
      return active;
    },
  };
}

export { ZOOM_MIN_DISTANCE, ZOOM_FOV };
