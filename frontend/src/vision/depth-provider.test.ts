import { describe, expect, it } from "vitest";
import {
  flatDepthProvider,
  getDepthProvider,
  inflateDepthProvider,
  listDepthProviders,
  registerDepthProvider,
  setDepthProvider,
  type DepthProvider,
} from "./depth-provider";
import { localVisionProvider } from "./vision-provider";
import { segmentByFloodFill } from "./segmentation";
import { blankImage, paintRect, squareOnWhite } from "./fixtures";

function caso(img = squareOnWhite(24, 6)) {
  return { img, mask: segmentByFloodFill(img.pixels, img.width, img.height) };
}

describe("DepthProvider: intercambiable", () => {
  it("arranca con el inflado de silueta", () => {
    setDepthProvider("inflate");
    expect(getDepthProvider().id).toBe("inflate");
  });

  it("se puede cambiar por id, y un id desconocido no lo cambia", () => {
    setDepthProvider("inflate");
    expect(setDepthProvider("flat")).toBe(true);
    expect(getDepthProvider().id).toBe("flat");
    expect(setDepthProvider("no-existe")).toBe(false);
    expect(getDepthProvider().id).toBe("flat");
    setDepthProvider("inflate");
  });

  it("se puede registrar uno nuevo sin tocar el pipeline", async () => {
    const mio: DepthProvider = {
      id: "test-plano-medio", name: "prueba", external: false,
      maxConfidence: 0.9, description: "Devuelve un espesor medio fijo, sólo para el test.",
      async estimate(_img, m) {
        const depth = new Float32Array(m.width * m.height).fill(0.5);
        return { depth, width: m.width, height: m.height, maxThickness: 1, confidence: 0.9 };
      },
    };
    registerDepthProvider(mio);
    expect(listDepthProviders().some((p) => p.id === "test-plano-medio")).toBe(true);
    setDepthProvider("test-plano-medio");
    const { img, mask } = caso();
    expect((await getDepthProvider().estimate(img, mask)).depth[0]).toBe(0.5);
    setDepthProvider("inflate");
  });

  it("registrar dos veces el mismo id lo reemplaza, no lo duplica", () => {
    const antes = listDepthProviders().length;
    registerDepthProvider({ ...inflateDepthProvider, name: "otro nombre" });
    expect(listDepthProviders().length).toBe(antes);
    registerDepthProvider(inflateDepthProvider);
  });

  // Que el techo esté en la interfaz es lo que impide que cambiar de
  // proveedor cambie la calidad sin cambiar el número que se le muestra
  // al usuario.
  it("cada proveedor declara hasta dónde puede afirmar", () => {
    // Sobre los que el módulo declara, no sobre la lista viva: otros tests
    // registran proveedores de prueba y la lista no se puede limpiar.
    for (const p of [inflateDepthProvider, flatDepthProvider]) {
      expect(p.maxConfidence).toBeGreaterThan(0);
      expect(p.maxConfidence).toBeLessThanOrEqual(1);
      expect(p.description.length).toBeGreaterThan(10);
    }
    // El que no estima nada no puede afirmar tanto como el que sí.
    expect(flatDepthProvider.maxConfidence).toBeLessThan(inflateDepthProvider.maxConfidence);
  });

  it("ninguno de los de hoy manda la imagen afuera (spec §33)", () => {
    for (const p of [inflateDepthProvider, flatDepthProvider]) expect(p.external).toBe(false);
  });

  it("el inflado respeta su propio techo declarado", async () => {
    const texturado = blankImage(48, 48, [255, 255, 255, 255]);
    paintRect(texturado, 4, 4, 43, 43, [40, 40, 40, 255]);
    for (let y = 4; y <= 43; y += 2) paintRect(texturado, 4, y, 43, y, [210, 210, 210, 255]);
    const m = segmentByFloodFill(texturado.pixels, 48, 48);
    const d = await inflateDepthProvider.estimate(texturado, m);
    expect(d.confidence).toBeLessThanOrEqual(inflateDepthProvider.maxConfidence + 1e-9);
  });

  it("el de espesor constante da lo mismo en todo el objeto: no inventa relieve", async () => {
    const { img, mask } = caso();
    const d = await flatDepthProvider.estimate(img, mask);
    const dentro: number[] = [];
    for (let i = 0; i < d.depth.length; i++) if (mask.mask[i]) dentro.push(d.depth[i]);
    expect(new Set(dentro).size).toBe(1);
    expect(dentro[0]).toBe(1);
  });
});

describe("el VisionProvider delega en el proveedor de profundidad activo", () => {
  it("cambiar el proveedor cambia lo que devuelve estimateDepth", async () => {
    const { img, mask } = caso();
    setDepthProvider("inflate");
    const inflado = await localVisionProvider.estimateDepth(img, mask);
    setDepthProvider("flat");
    const plano = await localVisionProvider.estimateDepth(img, mask);
    setDepthProvider("inflate");

    // El inflado tiene gradiente (borde fino, centro grueso); el plano no.
    const centro = 12 * 24 + 12;
    const borde = 6 * 24 + 6;
    expect(inflado.depth[borde]).toBeLessThan(inflado.depth[centro]);
    expect(plano.depth[borde]).toBe(plano.depth[centro]);
  });
});
