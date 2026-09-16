import { describe, expect, it } from "vitest";
import { formShapeWithRoles } from "./formation";
import { getShape, makeColoredGeneratorFromPointCloud, registerCustomScan } from "./registry";
import { NANOBOT_ROLE } from "./types";
import { acceptsObjectMaterial, BOT_TYPE } from "../swarm/bot-types";
import { botVisual } from "../swarm/bot-config";

const CENTER: [number, number, number] = [0, 0, 0];

/** Nube de 3 puntos con 3 colores muy distintos. */
function nubeDeColores() {
  const points = Float32Array.from([-2, 0, 0, 0, 0, 0, 2, 0, 0]);
  const colors = Uint8Array.from([255, 0, 0, 0, 255, 0, 0, 0, 255]);
  return { points, colors };
}

describe("makeColoredGeneratorFromPointCloud", () => {
  // La razón de que posiciones y colores salgan de UNA sola llamada: el
  // resampleo usa Math.random() para los puntos repetidos, así que dos
  // llamadas separadas darían muestreos distintos y cada agente
  // terminaría con el color de un punto que no es el suyo.
  it("posición y color salen del MISMO muestreo", () => {
    const { points, colors } = nubeDeColores();
    const gen = makeColoredGeneratorFromPointCloud(points, colors);
    const out = gen(3);
    // Las primeras `available` posiciones se copian en orden, sin jitter.
    for (let i = 0; i < 3; i++) {
      expect(out.points[i * 3]).toBeCloseTo(points[i * 3], 5);
      expect(out.colors[i * 3 + 0]).toBe(colors[i * 3 + 0]);
      expect(out.colors[i * 3 + 1]).toBe(colors[i * 3 + 1]);
      expect(out.colors[i * 3 + 2]).toBe(colors[i * 3 + 2]);
    }
  });

  it("un punto repetido lleva el color de su original, sin jitterear el color", () => {
    const { points, colors } = nubeDeColores();
    const out = makeColoredGeneratorFromPointCloud(points, colors)(60);
    const validos = new Set(["255,0,0", "0,255,0", "0,0,255"]);
    for (let i = 0; i < 60; i++) {
      const c = `${out.colors[i * 3]},${out.colors[i * 3 + 1]},${out.colors[i * 3 + 2]}`;
      expect(validos.has(c)).toBe(true);
    }
  });

  it("sin colores de origen devuelve blanco: el neutro del render", () => {
    const out = makeColoredGeneratorFromPointCloud(nubeDeColores().points, null)(3);
    expect(Array.from(out.colors)).toEqual([255, 255, 255, 255, 255, 255, 255, 255, 255]);
  });

  it("una nube vacía no rompe ni produce basura", () => {
    const out = makeColoredGeneratorFromPointCloud(new Float32Array(0), null)(5);
    expect(out.points).toHaveLength(15);
    expect(out.colors).toHaveLength(15);
  });
});

describe("registerCustomScan con color", () => {
  it("declara generateWithColor SÓLO si de verdad hay color", () => {
    const { points, colors } = nubeDeColores();
    registerCustomScan(points, colors);
    expect(getShape("escaneo")!.generateWithColor).toBeTypeOf("function");

    // Sin colores no debe anunciar que los tiene y devolver blanco.
    registerCustomScan(points);
    expect(getShape("escaneo")!.generateWithColor).toBeUndefined();
  });
});

describe("formShapeWithRoles: color por punto", () => {
  it("las 17 formas de siempre siguen con pointColors en null", () => {
    const f = formShapeWithRoles("cubo", 200, CENTER, [{ color: 0xff0000, weight: 1 }]);
    expect(f!.pointColors).toBeNull();
  });

  it("una figura escaneada con color lo lleva punto por punto", () => {
    const { points, colors } = nubeDeColores();
    registerCustomScan(points, colors);
    const f = formShapeWithRoles("escaneo", 400, CENTER, [{ color: 0x123456, weight: 1 }]);
    expect(f!.pointColors).not.toBeNull();
    expect(f!.pointColors!.length).toBe(400 * 3);
  });

  // LA REGLA DURA del spec §14 y §20, del lado de los datos: el color del
  // objeto llega SÓLO a los agentes de rol COLOR (los Material Bots). Los
  // de DETALLE son Nanobots y conservan su identidad.
  it("sólo los agentes de rol COLOR llevan color de objeto", () => {
    const { points, colors } = nubeDeColores();
    registerCustomScan(points, colors);
    const f = formShapeWithRoles("escaneo", 400, CENTER, [{ color: 0x123456, weight: 1 }])!;

    let detalleConColor = 0;
    let colorConColor = 0;
    for (let i = 0; i < 400; i++) {
      const tieneColor =
        f.pointColors![i * 3] !== 0 || f.pointColors![i * 3 + 1] !== 0 || f.pointColors![i * 3 + 2] !== 0;
      if (f.roles[i] === NANOBOT_ROLE.DETAIL && tieneColor) detalleConColor++;
      if (f.roles[i] === NANOBOT_ROLE.COLOR && tieneColor) colorConColor++;
    }
    expect(detalleConColor).toBe(0);
    expect(colorConColor).toBeGreaterThan(0);
  });

  it("los colores que llegan son los de la nube, no un promedio inventado", () => {
    const { points, colors } = nubeDeColores();
    registerCustomScan(points, colors);
    const f = formShapeWithRoles("escaneo", 300, CENTER, [{ color: 0x123456, weight: 1 }])!;
    const vistos = new Set<string>();
    for (let i = 0; i < 300; i++) {
      if (f.roles[i] !== NANOBOT_ROLE.COLOR) continue;
      vistos.add(`${f.pointColors![i * 3]},${f.pointColors![i * 3 + 1]},${f.pointColors![i * 3 + 2]}`);
    }
    for (const c of vistos) expect(["255,0,0", "0,255,0", "0,0,255"]).toContain(c);
  });

  it("'cabeza' usa sus partes anatómicas y NO entra al camino de color por punto", () => {
    // Las olas de "cabeza" son partes del cuerpo con tonos fijos; mezclar
    // eso con color por punto daría dos fuentes de verdad para lo mismo.
    const f = formShapeWithRoles("cabeza", 300, CENTER, [{ color: 0xff0000, weight: 1 }]);
    expect(f!.pointColors).toBeNull();
    expect(f!.colorWaveCount).toBe(4);
  });
});

// El Microbot es la referencia visual constante de la escena: si se
// repintara con el color del objeto, se perdería la única señal fija de
// dónde está la estructura. La regla se cumple por CONSTRUCCIÓN —los
// Microbots viven en otra malla, que no tiene forma de recibir estos
// colores— y esto lo fija por escrito.
describe("regla del Material Bot (spec §14)", () => {
  it("el Microbot declara que NO acepta material de objeto", () => {
    expect(acceptsObjectMaterial(BOT_TYPE.MICROBOT)).toBe(false);
    expect(acceptsObjectMaterial(BOT_TYPE.MATERIAL)).toBe(true);
    expect(acceptsObjectMaterial(BOT_TYPE.NANOBOT)).toBe(true);
  });

  it("formar una figura con color no cambia el color de identidad del Microbot", () => {
    const antes = botVisual(BOT_TYPE.MICROBOT).identityColor;
    const { points, colors } = nubeDeColores();
    registerCustomScan(points, colors);
    formShapeWithRoles("escaneo", 400, CENTER, [{ color: 0x123456, weight: 1 }]);
    expect(botVisual(BOT_TYPE.MICROBOT).identityColor).toBe(antes);
  });
});
