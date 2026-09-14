import { describe, expect, it } from "vitest";
import {
  breakdownOrigins,
  emptyCloud,
  POINT_ORIGIN,
  POINT_ORIGIN_LABELS,
  type PointCloud,
} from "./reconstruction-result";
import { RECON_MODE, reconConfidence, reconstruct } from "./reconstruction";
import { segmentByFloodFill } from "./segmentation";
import { estimateDepth } from "./depth-estimator";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

function build(img: ReturnType<typeof blankImage>) {
  const mask = segmentByFloodFill(img.pixels, img.width, img.height);
  return { img, mask, depth: estimateDepth(img, mask) };
}

function cloudOf(origins: number[]): PointCloud {
  return {
    points: new Float32Array(origins.length * 3),
    colors: new Uint8Array(origins.length * 3),
    origin: Uint8Array.from(origins),
    count: origins.length,
  };
}

describe("breakdownOrigins", () => {
  it("cuenta cada procedencia y da la fracción observada", () => {
    const b = breakdownOrigins(cloudOf([
      POINT_ORIGIN.OBSERVED, POINT_ORIGIN.OBSERVED,
      POINT_ORIGIN.INTERPOLATED,
      POINT_ORIGIN.INFERRED,
    ]));
    expect(b).toEqual({ observed: 2, interpolated: 1, inferred: 1, observedFraction: 0.5 });
  });

  it("una nube vacía da 0, no NaN", () => {
    expect(breakdownOrigins(emptyCloud()).observedFraction).toBe(0);
  });

  it("hay una etiqueta legible para cada procedencia", () => {
    for (const v of Object.values(POINT_ORIGIN)) {
      expect(POINT_ORIGIN_LABELS[v]).toBeTypeOf("string");
    }
  });
});

// La distinción entre lo que la cámara VIO y lo que el sistema SUPUSO es
// la pieza que impide presentar como observado algo que se inventó
// (spec §29, §42).
describe("procedencia por punto", () => {
  const rojo = (() => {
    const img = blankImage(28, 28, [255, 255, 255, 255]);
    paintRect(img, 7, 7, 20, 20, [200, 40, 40, 255]);
    return build(img);
  })();

  it("la cara que mira a la cámara es OBSERVADA y la de atrás INFERIDA", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    let maxZ = -Infinity, minZ = Infinity;
    let origenMaxZ = -1, origenMinZ = -1;
    for (let i = 0; i < r.cloud.count; i++) {
      const z = r.cloud.points[i * 3 + 2];
      if (z > maxZ) { maxZ = z; origenMaxZ = r.cloud.origin[i]; }
      if (z < minZ) { minZ = z; origenMinZ = r.cloud.origin[i]; }
    }
    expect(origenMaxZ).toBe(POINT_ORIGIN.OBSERVED);
    expect(origenMinZ).toBe(POINT_ORIGIN.INFERRED);
  });

  it("el relleno entre las dos caras es INTERPOLADO, ni visto ni supuesto", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    const b = breakdownOrigins(r.cloud);
    expect(b.interpolated).toBeGreaterThan(0);
    expect(b.observed + b.interpolated + b.inferred).toBe(r.cloud.count);
  });

  it("los tres arrays quedan alineados: un origen por punto", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    expect(r.cloud.points.length).toBe(r.cloud.count * 3);
    expect(r.cloud.colors.length).toBe(r.cloud.count * 3);
    expect(r.cloud.origin.length).toBe(r.cloud.count);
  });

  // Lo que la simetría agrega es, por definición, geometría que la foto
  // nunca mostró: tiene que quedar marcada como tal.
  it("lo que completa la simetría se marca INFERIDO, no observado", () => {
    // Objeto simétrico pero con un pedazo tapado de un lado.
    const img = blankImage(32, 32, [255, 255, 255, 255]);
    paintRect(img, 8, 8, 23, 23, [30, 30, 30, 255]);
    paintRect(img, 8, 8, 12, 14, [255, 255, 255, 255]); // muesca a la izquierda
    const b = build(img);
    const conSim = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH_SYMMETRY);
    if (conSim.mode === RECON_MODE.DEPTH_SYMMETRY) {
      const sin = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH);
      expect(breakdownOrigins(conSim.cloud).inferred)
        .toBeGreaterThan(breakdownOrigins(sin.cloud).inferred);
    }
  });

  it("la extrusión también distingue caras: no todo es observado", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.EXTRUSION);
    const b = breakdownOrigins(r.cloud);
    expect(b.observed).toBeGreaterThan(0);
    expect(b.inferred).toBeGreaterThan(0);
    expect(b.observedFraction).toBeLessThan(1);
  });
});

describe("la confianza baja cuando la geometría es mayoría suposición", () => {
  it("menos fracción observada da menos confianza", () => {
    const mucha = reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0, 0.5);
    const poca = reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0, 0.05);
    expect(poca).toBeLessThan(mucha);
  });

  it("no cae a cero: la cara vista sigue siendo información real", () => {
    expect(reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0, 0)).toBeGreaterThan(0);
  });

  it("sin el dato, el comportamiento es el de antes (compatible)", () => {
    expect(reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0))
      .toBeCloseTo(reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0, 1), 10);
  });
});

describe("la representación intermedia es una nube, no una malla", () => {
  // Decisión explícita, fijada por escrito: si alguien agrega vértices,
  // caras o normales al contrato, este test lo obliga a justificarlo.
  it("el contrato no tiene caras, normales ni índices", () => {
    const b = build(squareOnWhite(24, 6));
    const r = reconstruct(b.img, b.mask, b.depth);
    expect(Object.keys(r.cloud).sort()).toEqual(["colors", "count", "origin", "points"]);
  });
});
