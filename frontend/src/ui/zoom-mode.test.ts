import { describe, expect, it, vi } from "vitest";
import { createZoomMode, ZOOM_FOV, ZOOM_MIN_DISTANCE } from "./zoom-mode";

// Dobles mínimos: al modo zoom sólo le importan `minDistance` del control
// y `fov` de la cámara, así que no hace falta arrastrar three entero.
function makeDeps(minDistance = 6, fov = 55) {
  const camera = { fov, updateProjectionMatrix: vi.fn() };
  const controls = { minDistance };
  const changes: boolean[] = [];
  const deps = {
    camera: camera as never,
    controls: controls as never,
    onChange: (a: boolean) => changes.push(a),
  };
  return { camera, controls, changes, deps };
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
