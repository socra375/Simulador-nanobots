import { describe, expect, it } from "vitest";
import { RECON_MODE, reconConfidence, reconstruct } from "./reconstruction";
import { segmentByFloodFill } from "./segmentation";
import { estimateDepth } from "./depth-estimator";
import { SHAPE_HALF_EXTENT } from "../shapes";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

function build(img: ReturnType<typeof blankImage>) {
  const mask = segmentByFloodFill(img.pixels, img.width, img.height);
  const depth = estimateDepth(img, mask);
  return { img, mask, depth };
}

const rojo = (() => {
  const img = blankImage(28, 28, [255, 255, 255, 255]);
  paintRect(img, 7, 7, 20, 20, [200, 40, 40, 255]);
  return build(img);
})();

describe("reconstruct: geometría", () => {
  it("devuelve n*3 posiciones y n*3 bytes de color, alineados", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    expect(r.cloud.count).toBeGreaterThan(0);
    expect(r.cloud.points.length).toBe(r.cloud.count * 3);
    expect(r.cloud.colors.length).toBe(r.cloud.count * 3);
  });

  it("queda centrada en el origen y dentro del cubo de las formas", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < r.cloud.count; i++) {
      minX = Math.min(minX, r.cloud.points[i * 3]);
      maxX = Math.max(maxX, r.cloud.points[i * 3]);
      minY = Math.min(minY, r.cloud.points[i * 3 + 1]);
      maxY = Math.max(maxY, r.cloud.points[i * 3 + 1]);
    }
    // Centrada: el punto medio del recuadro cae en el origen.
    expect((minX + maxX) / 2).toBeCloseTo(0, 5);
    expect((minY + maxY) / 2).toBeCloseTo(0, 5);
    // Y dentro del cubo que usan los 17 generadores existentes.
    for (let i = 0; i < r.cloud.points.length; i++) {
      expect(Math.abs(r.cloud.points[i])).toBeLessThanOrEqual(SHAPE_HALF_EXTENT + 1e-4);
    }
  });

  it("NO deforma: una silueta apaisada sale apaisada en 3D", () => {
    const img = blankImage(40, 40, [255, 255, 255, 255]);
    paintRect(img, 4, 16, 35, 23, [30, 30, 30, 255]); // 32 x 8
    const b = build(img);
    const r = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH);
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (let i = 0; i < r.cloud.count; i++) {
      minX = Math.min(minX, r.cloud.points[i * 3]);
      maxX = Math.max(maxX, r.cloud.points[i * 3]);
      minY = Math.min(minY, r.cloud.points[i * 3 + 1]);
      maxY = Math.max(maxY, r.cloud.points[i * 3 + 1]);
    }
    expect((maxX - minX) / (maxY - minY)).toBeCloseTo(32 / 8, 0);
  });

  it("el color de cada punto es el del píxel que lo generó", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    for (let i = 0; i < r.cloud.count; i++) {
      expect(r.cloud.colors[i * 3]).toBe(200);
      expect(r.cloud.colors[i * 3 + 1]).toBe(40);
      expect(r.cloud.colors[i * 3 + 2]).toBe(40);
    }
  });

  it("dos zonas de distinto color dan puntos de distinto color", () => {
    const img = blankImage(32, 32, [255, 255, 255, 255]);
    paintRect(img, 6, 6, 25, 15, [220, 20, 20, 255]);
    paintRect(img, 6, 16, 25, 25, [20, 20, 220, 255]);
    const b = build(img);
    const r = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH);
    const vistos = new Set<string>();
    for (let i = 0; i < r.cloud.count; i++) {
      vistos.add(`${r.cloud.colors[i * 3]},${r.cloud.colors[i * 3 + 1]},${r.cloud.colors[i * 3 + 2]}`);
    }
    expect(vistos.has("220,20,20")).toBe(true);
    expect(vistos.has("20,20,220")).toBe(true);
  });

  // La nube tiene que ser SÓLIDA, no una cáscara de dos caras: se
  // voxeliza después, y `surfacePoints` extrae la cáscara mirando celdas
  // con vecinos vacíos. Si ya viniera como cáscara, donde la profundidad
  // cambia rápido quedarían huecos entre las dos caras y la cáscara final
  // saldría agujereada.
  //
  // Se mide agrupando los puntos por su columna (x, y): una cáscara da
  // exactamente 2 por columna; sólida da tantos como celdas de vóxel
  // quepan en el espesor de esa columna.
  it("la nube es SÓLIDA: la columna más gruesa aporta más de dos puntos", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    const porColumna = new Map<string, number>();
    for (let i = 0; i < r.cloud.count; i++) {
      const k = `${Math.round(r.cloud.points[i * 3] * 1000)},${Math.round(r.cloud.points[i * 3 + 1] * 1000)}`;
      porColumna.set(k, (porColumna.get(k) ?? 0) + 1);
    }
    let max = 0;
    for (const v of porColumna.values()) max = Math.max(max, v);
    expect(max).toBeGreaterThan(2);
  });

  it("la profundidad cierra el volumen: el contorno es más fino que el centro", () => {
    const r = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.DEPTH);
    // Espesor por columna de la nube: el borde izquierdo contra el centro.
    let bordeMax = 0, centroMax = 0;
    let minX = Infinity, maxX = -Infinity;
    for (let i = 0; i < r.cloud.count; i++) {
      minX = Math.min(minX, r.cloud.points[i * 3]);
      maxX = Math.max(maxX, r.cloud.points[i * 3]);
    }
    const ancho = maxX - minX;
    for (let i = 0; i < r.cloud.count; i++) {
      const x = r.cloud.points[i * 3];
      const z = Math.abs(r.cloud.points[i * 3 + 2]);
      if (x < minX + ancho * 0.05) bordeMax = Math.max(bordeMax, z);
      if (Math.abs(x) < ancho * 0.05) centroMax = Math.max(centroMax, z);
    }
    expect(bordeMax).toBeLessThan(centroMax * 0.6);
  });
});

describe("reconstruct: modos", () => {
  it("la extrusión da espesor CONSTANTE, la profundidad no", () => {
    const ext = reconstruct(rojo.img, rojo.mask, rojo.depth, RECON_MODE.EXTRUSION);
    let minZ = Infinity, maxZ = -Infinity;
    // Espesor de cada columna: en extrusión todas valen lo mismo.
    const porColumna = new Map<number, number>();
    for (let i = 0; i < ext.cloud.count; i++) {
      const x = Math.round(ext.cloud.points[i * 3] * 100);
      const z = Math.abs(ext.cloud.points[i * 3 + 2]);
      porColumna.set(x, Math.max(porColumna.get(x) ?? 0, z));
    }
    for (const v of porColumna.values()) { minZ = Math.min(minZ, v); maxZ = Math.max(maxZ, v); }
    expect(maxZ - minZ).toBeLessThan(1e-3);
  });

  it("modo simetría sobre una forma asimétrica CAE a profundidad, no la fuerza", () => {
    const img = blankImage(32, 32, [255, 255, 255, 255]);
    paintRect(img, 8, 8, 12, 24, [20, 20, 20, 255]);
    paintRect(img, 12, 20, 26, 24, [20, 20, 20, 255]);
    const b = build(img);
    const r = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH_SYMMETRY);
    expect(r.mode).toBe(RECON_MODE.DEPTH);
    expect(r.symmetry?.symmetric).toBe(false);
  });

  it("modo simetría sobre una forma simétrica sí la aplica", () => {
    const b = build(squareOnWhite(28, 7));
    const r = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH_SYMMETRY);
    expect(r.mode).toBe(RECON_MODE.DEPTH_SYMMETRY);
    expect(r.symmetry?.symmetric).toBe(true);
  });
});

describe("reconstruct: casos límite", () => {
  it("una máscara vacía devuelve una nube vacía, sin NaN", () => {
    const vacio = blankImage(16, 16, [180, 180, 180, 255]);
    const b = build(vacio);
    const r = reconstruct(b.img, b.mask, b.depth);
    expect(r.cloud.count).toBe(0);
    expect(r.cloud.points.length).toBe(0);
    expect(r.confidence).toBe(0);
  });

  it("respeta el tope de puntos submuestreando, sin inventar nada", () => {
    const img = blankImage(64, 64, [255, 255, 255, 255]);
    paintRect(img, 2, 2, 61, 61, [30, 30, 30, 255]);
    const b = build(img);
    const chico = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH, { maxPoints: 500 });
    const grande = reconstruct(b.img, b.mask, b.depth, RECON_MODE.DEPTH, { maxPoints: 200_000 });
    expect(chico.cloud.count).toBeLessThan(grande.cloud.count);
    expect(chico.cloud.count).toBeGreaterThan(0);
  });

  it("nunca produce NaN, con cualquier modo", () => {
    for (const mode of [RECON_MODE.EXTRUSION, RECON_MODE.DEPTH, RECON_MODE.DEPTH_SYMMETRY]) {
      const r = reconstruct(rojo.img, rojo.mask, rojo.depth, mode);
      for (let i = 0; i < r.cloud.points.length; i++) expect(Number.isNaN(r.cloud.points[i])).toBe(false);
    }
  });
});

describe("reconConfidence", () => {
  it("la extrusión es honestamente peor que la profundidad", () => {
    expect(reconConfidence(RECON_MODE.EXTRUSION, 0.9, 0.5, 0))
      .toBeLessThan(reconConfidence(RECON_MODE.DEPTH, 0.9, 0.5, 0));
  });

  it("nunca supera al eslabón más débil de la cadena", () => {
    expect(reconConfidence(RECON_MODE.DEPTH, 0.3, 0.9, 0)).toBeLessThanOrEqual(0.3);
    expect(reconConfidence(RECON_MODE.DEPTH, 0.9, 0.2, 0)).toBeLessThanOrEqual(0.2);
  });

  it("la simetría sube la confianza sólo cuando hay simetría real", () => {
    const con = reconConfidence(RECON_MODE.DEPTH_SYMMETRY, 0.8, 0.5, 0.95);
    const sin = reconConfidence(RECON_MODE.DEPTH_SYMMETRY, 0.8, 0.5, 0);
    expect(con).toBeGreaterThan(sin);
  });
});
