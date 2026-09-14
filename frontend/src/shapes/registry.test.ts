import { describe, expect, it } from "vitest";
import { getShape, listSupportedNames, registerShape, resolveShapeName } from "./registry";
import { buildExoskeleton, formShapeWithRoles } from "./formation";

// El registro es estado de módulo (igual que antes del split: el viejo
// SHAPE_GENERATORS era un record mutable, y registerCustomScan lo
// mutaba en runtime). Vitest aísla el registro de módulos por archivo,
// así que las formas de prueba de acá no se filtran a shapes.test.ts.

function sphereLike(count: number): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    out[i * 3 + 0] = Math.cos(i);
    out[i * 3 + 1] = Math.sin(i);
    out[i * 3 + 2] = i / Math.max(1, count);
  }
  return out;
}

describe("registerShape / getShape", () => {
  it("una forma nueva queda resoluble por su nombre y por sus alias", () => {
    registerShape({ name: "probeta", aliases: ["tubo", "matraz"], generate: sphereLike });
    expect(resolveShapeName("probeta")).toBe("probeta");
    expect(resolveShapeName("tubo")).toBe("probeta");
    expect(resolveShapeName("matraz")).toBe("probeta");
    expect(listSupportedNames()).toContain("probeta");
  });

  it("resolveShapeName sigue normalizando mayúsculas, espacios y acentos", () => {
    registerShape({ name: "cristal", aliases: ["vidrio"], generate: sphereLike });
    expect(resolveShapeName("  CRISTAL ")).toBe("cristal");
    expect(resolveShapeName("Vídrio")).toBe("cristal");
  });

  it("devuelve null para lo que no existe, y getShape también", () => {
    expect(resolveShapeName("no-existe-123")).toBeNull();
    expect(getShape("no-existe-123")).toBeNull();
  });

  it("registrar dos veces el mismo nombre reemplaza la definición (lo que usa el escaneo 3D)", () => {
    const primero = (count: number) => new Float32Array(count * 3).fill(1);
    const segundo = (count: number) => new Float32Array(count * 3).fill(2);
    registerShape({ name: "reemplazable", aliases: [], generate: primero });
    expect(getShape("reemplazable")!.generate(1)[0]).toBe(1);
    registerShape({ name: "reemplazable", aliases: [], generate: segundo });
    expect(getShape("reemplazable")!.generate(1)[0]).toBe(2);
    // Sin duplicar la entrada en el listado.
    expect(listSupportedNames().filter((n) => n === "reemplazable")).toHaveLength(1);
  });
});

describe("ShapeDef.bones decide la rama del exoesqueleto", () => {
  it("sin `bones`, el exoesqueleto usa la rama genérica y SÍ produce vigas", () => {
    registerShape({ name: "sinhuesos", aliases: [], generate: sphereLike });
    const exo = buildExoskeleton("sinhuesos", 300, [0, 0, 0])!;
    expect(exo).not.toBeNull();
    expect(exo.isBeam.some((v) => v === 1)).toBe(true);
  });

  it("con `bones`, se usa ese generador y no hay vigas", () => {
    const bones = (count: number) => new Float32Array(count * 3).fill(0.5);
    registerShape({ name: "conhuesos", aliases: [], generate: sphereLike, bones });
    const exo = buildExoskeleton("conhuesos", 300, [0, 0, 0])!;
    expect(exo.isBeam.every((v) => v === 0)).toBe(true);
    // Los puntos salen del generador de huesos (0.5), no del de tejido.
    expect(exo.points[0]).toBeCloseTo(0.5, 6);
  });
});

describe("ShapeDef.colorParts decide de dónde salen las olas de color", () => {
  const rojo = 0xff0000;
  const azul = 0x0000ff;

  it("sin `colorParts`, las olas usan los clusters de la foto", () => {
    registerShape({ name: "sinpartes", aliases: [], generate: sphereLike });
    const f = formShapeWithRoles("sinpartes", 400, [0, 0, 0], [
      { color: rojo, weight: 0.5 },
      { color: azul, weight: 0.5 },
    ])!;
    expect(f.colorWaveCount).toBe(2);
    expect(f.colorClusters.map((c) => c.color)).toEqual([rojo, azul]);
  });

  it("con `colorParts`, se ignoran los clusters de la foto y mandan los tonos fijos", () => {
    const verde = 0x00ff00;
    registerShape({
      name: "conpartes",
      aliases: [],
      generate: sphereLike,
      colorParts: [
        { color: verde, weight: 0.7, generator: sphereLike },
        { color: azul, weight: 0.3, generator: sphereLike },
      ],
    });
    const f = formShapeWithRoles("conpartes", 400, [0, 0, 0], [{ color: rojo, weight: 1 }])!;
    expect(f.colorWaveCount).toBe(2);
    expect(f.colorClusters.map((c) => c.color)).toEqual([verde, azul]);
    expect(f.colorClusters.map((c) => c.color)).not.toContain(rojo);
  });
});
