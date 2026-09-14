import { describe, expect, it } from "vitest";
import { createLodSelector, LOD_LEVEL, LOD_THRESHOLDS } from "./bot-lod";

describe("selector de nivel de detalle", () => {
  it("arranca en el nivel medio", () => {
    expect(createLodSelector().level).toBe(LOD_LEVEL.MID);
  });

  // Las distancias salen de LOD_THRESHOLDS, no literales: los umbrales
  // son constantes de ajuste visual y ya cambiaron una vez (Fase 34).
  // Un test que los codifica a mano falla por el ajuste, no por un bug.
  const DENTRO = LOD_THRESHOLDS.near / 2;
  const NORMAL = (LOD_THRESHOLDS.near + LOD_THRESHOLDS.mid) / 2;
  const LEJOS = LOD_THRESHOLDS.mid * 2;

  it("cerca sube a detalle, lejos baja a sólido mínimo", () => {
    const lod = createLodSelector();
    expect(lod.update(DENTRO)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);

    expect(lod.update(LEJOS)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.FAR);
  });

  it("informa si el nivel NO cambió, para no reasignar geometría al pedo", () => {
    const lod = createLodSelector();
    expect(lod.update(NORMAL)).toBe(false);
    expect(lod.update(NORMAL + 1)).toBe(false);
  });

  // ESTE es el requisito del usuario: a distancia normal el enjambre se
  // lee como materia, y el hexágono se descubre SÓLO con el zoom
  // especial. El zoom normal no puede acercarse más que CAMERA_MIN.
  it("el nivel hexagonal es INALCANZABLE con el zoom normal", () => {
    const CAMERA_MIN_DISTANCE = 6; // controls.minDistance en scene.ts
    const lod = createLodSelector();
    lod.update(CAMERA_MIN_DISTANCE);
    expect(lod.level).not.toBe(LOD_LEVEL.NEAR);
  });

  // Este es el motivo entero de la histéresis: sin ella, la cámara quieta
  // justo sobre un umbral hace parpadear la malla cuadro a cuadro.
  it("quedarse sobre el umbral NO hace oscilar el nivel", () => {
    const lod = createLodSelector();
    lod.update(LOD_THRESHOLDS.near / 2); // NEAR
    let cambios = 0;
    // Micro-temblor alrededor del umbral, como el damping de la cámara.
    for (let i = 0; i < 200; i++) {
      const jitter = (i % 2 === 0 ? 0.2 : -0.2);
      if (lod.update(LOD_THRESHOLDS.near + jitter)) cambios++;
    }
    expect(cambios).toBe(0);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
  });

  it("pero un movimiento real sí cambia el nivel", () => {
    const lod = createLodSelector();
    lod.update(LOD_THRESHOLDS.near / 2);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
    expect(lod.update(LOD_THRESHOLDS.near * 2)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.MID);
  });

  it("se puede saltar dos niveles de una (zoom brusco)", () => {
    const lod = createLodSelector(LOD_LEVEL.FAR);
    expect(lod.update(LOD_THRESHOLDS.near / 4)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
  });

  it("distancias absurdas no rompen nada", () => {
    const lod = createLodSelector();
    lod.update(0);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
    lod.update(1e9);
    expect(lod.level).toBe(LOD_LEVEL.FAR);
  });
});
