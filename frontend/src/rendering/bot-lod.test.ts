import { describe, expect, it } from "vitest";
import { createLodSelector, LOD_LEVEL, LOD_THRESHOLDS } from "./bot-lod";

describe("selector de nivel de detalle", () => {
  it("arranca en el nivel medio", () => {
    expect(createLodSelector().level).toBe(LOD_LEVEL.MID);
  });

  it("cerca sube a detalle, lejos baja a sólido mínimo", () => {
    const lod = createLodSelector();
    expect(lod.update(5)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);

    expect(lod.update(60)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.FAR);
  });

  it("informa si el nivel NO cambió, para no reasignar geometría al pedo", () => {
    const lod = createLodSelector();
    expect(lod.update(25)).toBe(false);
    expect(lod.update(26)).toBe(false);
  });

  // Este es el motivo entero de la histéresis: sin ella, la cámara quieta
  // justo sobre un umbral hace parpadear la malla cuadro a cuadro.
  it("quedarse sobre el umbral NO hace oscilar el nivel", () => {
    const lod = createLodSelector();
    lod.update(5); // NEAR
    let cambios = 0;
    // Micro-temblor alrededor del umbral, como el damping de la cámara.
    for (let i = 0; i < 200; i++) {
      const jitter = (i % 2 === 0 ? 0.4 : -0.4);
      if (lod.update(LOD_THRESHOLDS.near + jitter)) cambios++;
    }
    expect(cambios).toBe(0);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
  });

  it("pero un movimiento real sí cambia el nivel", () => {
    const lod = createLodSelector();
    lod.update(5);
    expect(lod.level).toBe(LOD_LEVEL.NEAR);
    expect(lod.update(LOD_THRESHOLDS.near + 5)).toBe(true);
    expect(lod.level).toBe(LOD_LEVEL.MID);
  });

  it("se puede saltar dos niveles de una (zoom brusco)", () => {
    const lod = createLodSelector(LOD_LEVEL.FAR);
    expect(lod.update(2)).toBe(true);
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
