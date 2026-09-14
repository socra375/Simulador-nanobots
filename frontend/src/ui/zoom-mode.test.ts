import { describe, expect, it, vi } from "vitest";
import { createZoomMode, ZOOM_FOV, ZOOM_MIN_DISTANCE } from "./zoom-mode";

// Dobles mínimos: al modo zoom sólo le importan `minDistance` del control
// y `fov` de la cámara, así que no hace falta arrastrar three entero.
function makeDeps(minDistance = 6, fov = 55, focus?: readonly [number, number, number]) {
  const camera = { fov, updateProjectionMatrix: vi.fn() };
  // El objetivo de órbita es un Vector3 de three; acá alcanza con algo
  // que sepa copiarse y clonarse.
  const target = {
    x: 0, y: 0, z: 0,
    set(x: number, y: number, z: number) { this.x = x; this.y = y; this.z = z; return this; },
    copy(v: { x: number; y: number; z: number }) { return this.set(v.x, v.y, v.z); },
    clone() { return { ...this }; },
  };
  const controls = { minDistance, target };
  const changes: boolean[] = [];
  const deps = {
    camera: camera as never,
    controls: controls as never,
    onChange: (a: boolean) => changes.push(a),
    ...(focus ? { focusTarget: () => focus } : {}),
  };
  return { camera, controls, target, changes, deps };
}

describe("modo zoom especial", () => {
  it("arranca apagado", () => {
    const { deps } = makeDeps();
    expect(createZoomMode(deps).active).toBe(false);
  });

  it("al entrar deja acercarse MUCHO más que el zoom normal", () => {
    // Es el requisito central: el zoom normal no alcanza para ver el
    // detalle. Si el modo no bajara este límite, no serviría para nada.
    const { controls, deps } = makeDeps(6);
    const zoom = createZoomMode(deps);
    zoom.enter();
    expect(controls.minDistance).toBe(ZOOM_MIN_DISTANCE);
    expect(controls.minDistance).toBeLessThan(6);
  });

  it("achica el campo de visión para que acercarse no deforme", () => {
    const { camera, deps } = makeDeps(6, 55);
    createZoomMode(deps).enter();
    expect(camera.fov).toBe(ZOOM_FOV);
    expect(camera.updateProjectionMatrix).toHaveBeenCalled();
  });

  it("al salir restaura los valores QUE HABÍA, no unos por defecto", () => {
    // Si el usuario había cambiado el mínimo, salir del modo no se lo
    // puede pisar con una constante.
    const { camera, controls, deps } = makeDeps(11, 42);
    const zoom = createZoomMode(deps);
    zoom.enter();
    zoom.exit();
    expect(controls.minDistance).toBe(11);
    expect(camera.fov).toBe(42);
  });

  it("toggle alterna y devuelve el estado nuevo", () => {
    const { deps } = makeDeps();
    const zoom = createZoomMode(deps);
    expect(zoom.toggle()).toBe(true);
    expect(zoom.active).toBe(true);
    expect(zoom.toggle()).toBe(false);
    expect(zoom.active).toBe(false);
  });

  it("entrar dos veces no pisa el valor guardado", () => {
    // Sin el guard, el segundo enter() guardaría el minDistance YA
    // modificado y salir dejaría la cámara encerrada en el zoom.
    const { controls, deps } = makeDeps(9);
    const zoom = createZoomMode(deps);
    zoom.enter();
    zoom.enter();
    zoom.exit();
    expect(controls.minDistance).toBe(9);
  });

  it("salir sin haber entrado no toca nada", () => {
    const { controls, camera, deps } = makeDeps(7, 50);
    createZoomMode(deps).exit();
    expect(controls.minDistance).toBe(7);
    expect(camera.fov).toBe(50);
  });

  it("avisa del cambio para que el nivel de detalle se ajuste", () => {
    const { changes, deps } = makeDeps();
    const zoom = createZoomMode(deps);
    zoom.enter();
    zoom.exit();
    expect(changes).toEqual([true, false]);
  });

  it("no avisa si el estado no cambió", () => {
    const { changes, deps } = makeDeps();
    const zoom = createZoomMode(deps);
    zoom.enter();
    zoom.enter();
    expect(changes).toEqual([true]);
  });
});

// Este bloque existe por un bug que los tests NO detectaron y sí se vio en
// pantalla: el zoom especial terminaba mirando un vacío negro. Se acercaba
// al objetivo de la órbita, que es el origen de la escena — pero la figura
// está en (4, 2, 4) y el núcleo en (-8, 8, -8). Acercarse muchísimo a un
// punto donde no hay nada no sirve para inspeccionar nada.
describe("a dónde se acerca el zoom", () => {
  it("apunta al foco que se le pasa, no al origen", () => {
    const { target, deps } = makeDeps(6, 55, [4, 2, 4]);
    createZoomMode(deps).enter();
    expect([target.x, target.y, target.z]).toEqual([4, 2, 4]);
  });

  it("al salir restaura el objetivo de órbita anterior", () => {
    const { target, deps } = makeDeps(6, 55, [4, 2, 4]);
    target.set(1, 1, 1);
    const zoom = createZoomMode(deps);
    zoom.enter();
    zoom.exit();
    expect([target.x, target.y, target.z]).toEqual([1, 1, 1]);
  });

  it("el foco se consulta AL ENTRAR, no una sola vez al construir", () => {
    // El enjambre se mueve: si el foco se resolviera al construir, entrar
    // al zoom después de formar otra figura apuntaría al lugar viejo.
    let donde: readonly [number, number, number] = [0, 0, 0];
    const camera = { fov: 55, updateProjectionMatrix: vi.fn() };
    const target = {
      x: 0, y: 0, z: 0,
      set(x: number, y: number, z: number) { this.x = x; this.y = y; this.z = z; return this; },
      copy(v: { x: number; y: number; z: number }) { return this.set(v.x, v.y, v.z); },
      clone() { return { ...this }; },
    };
    const zoom = createZoomMode({
      camera: camera as never,
      controls: { minDistance: 6, target } as never,
      focusTarget: () => donde,
    });
    donde = [9, 9, 9];
    zoom.enter();
    expect([target.x, target.y, target.z]).toEqual([9, 9, 9]);
  });

  it("sin foco no toca el objetivo de órbita", () => {
    const { target, deps } = makeDeps();
    target.set(2, 2, 2);
    createZoomMode(deps).enter();
    expect([target.x, target.y, target.z]).toEqual([2, 2, 2]);
  });
});
