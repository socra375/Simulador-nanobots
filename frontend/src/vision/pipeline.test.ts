import { describe, expect, it } from "vitest";
import { runVisionCore, toResult, VOXEL_RESOLUTIONS } from "./pipeline";
import { RECON_MODE } from "./reconstruction";
import { POINT_ORIGIN } from "./reconstruction-result";
import { setDepthProvider } from "./depth-provider";
import { blankImage, paintRect } from "./fixtures";
import { SHAPE_HALF_EXTENT } from "../shapes";

const AGENT_BUDGET = 60000;

function fotoSintetica(size = 48) {
  const img = blankImage(size, size, [250, 250, 250, 255]);
  paintRect(img, 8, 8, size - 9, size - 9, [200, 50, 50, 255]);
  paintRect(img, 8, 8, size - 9, 18, [50, 80, 220, 255]); // franja azul arriba
  return img;
}

describe("runVisionCore: la cadena completa", () => {
  it("de una imagen sale una cáscara con color y procedencia", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    expect(core.cloud.count).toBeGreaterThan(0);
    expect(core.cloud.points.length).toBe(core.cloud.count * 3);
    expect(core.cloud.colors.length).toBe(core.cloud.count * 3);
    expect(core.cloud.origin.length).toBe(core.cloud.count);
    expect(core.stats.surfaceVoxels).toBe(core.cloud.count);
  });

  it("la cáscara queda dentro del cubo de las formas del proyecto", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    for (let i = 0; i < core.cloud.points.length; i++) {
      expect(Math.abs(core.cloud.points[i])).toBeLessThanOrEqual(SHAPE_HALF_EXTENT + 1e-4);
    }
  });

  it("conserva los colores de la foto, no un promedio gris", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    let rojos = 0, azules = 0;
    for (let i = 0; i < core.cloud.count; i++) {
      const r = core.cloud.colors[i * 3], b = core.cloud.colors[i * 3 + 2];
      if (r > 150 && b < 100) rojos++;
      if (b > 150 && r < 100) azules++;
    }
    expect(rojos).toBeGreaterThan(0);
    expect(azules).toBeGreaterThan(0);
  });

  // La procedencia tiene que sobrevivir a la voxelización: la pregunta
  // honesta es sobre lo que el enjambre CONSTRUYE, no sobre la nube
  // intermedia, donde el relleno interior sesgaría el número.
  it("la procedencia sobrevive a la voxelización", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    const o = core.stats.origins;
    expect(o.observed + o.interpolated + o.inferred).toBe(core.cloud.count);
    expect(o.observed).toBeGreaterThan(0);
    expect(o.inferred).toBeGreaterThan(0);
    expect(o.observedFraction).toBeGreaterThan(0);
    expect(o.observedFraction).toBeLessThan(1);
  });

  it("si una celda tiene algún punto observado, la celda cuenta como observada", async () => {
    // El mínimo, no el máximo: quedarse con el máximo marcaría como
    // inventado algo que la foto sí mostró.
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    expect(Array.from(core.cloud.origin).some((v) => v === POINT_ORIGIN.OBSERVED)).toBe(true);
  });

  it("más resolución da más vóxeles de superficie", async () => {
    const baja = await runVisionCore(fotoSintetica(64), { voxelRes: 48 });
    const alta = await runVisionCore(fotoSintetica(64), { voxelRes: 96 });
    expect(alta.stats.surfaceVoxels).toBeGreaterThan(baja.stats.surfaceVoxels);
  });

  // La resolución la limita el PRESUPUESTO DE AGENTES, no la memoria. A
  // 128³ un objeto que llena el encuadre pasa los 60.000 vóxeles de
  // superficie: por eso la escalera se corta ahí y por eso el panel avisa
  // antes de construir. Lo que se afirma es la relación, no que nunca
  // pase.
  it("la resolución media entra en el presupuesto y la máxima puede no entrar", async () => {
    const media = await runVisionCore(fotoSintetica(96), { voxelRes: 64 });
    expect(media.stats.surfaceVoxels).toBeLessThan(AGENT_BUDGET);

    const grande = blankImage(48, 48, [250, 250, 250, 255]);
    paintRect(grande, 8, 8, 39, 39, [200, 50, 50, 255]);
    const maxima = await runVisionCore(grande, { voxelRes: 128 });
    // Este es el caso que el panel tiene que avisar: existe de verdad, no
    // es una precaución teórica.
    expect(maxima.stats.surfaceVoxels).toBeGreaterThan(AGENT_BUDGET);
    expect(VOXEL_RESOLUTIONS[VOXEL_RESOLUTIONS.length - 1]).toBe(128);
  });

  // REGRESIÓN. La densidad de muestreo se ajusta al tamaño de celda; si
  // alguien vuelve a separarla en dos ajustes independientes, un objeto
  // macizo sale como un peine. Medido antes del arreglo: 231 piezas.
  it("un objeto macizo sale de UNA pieza, en TODAS las resoluciones", async () => {
    for (const res of VOXEL_RESOLUTIONS) {
      const core = await runVisionCore(fotoSintetica(64), { voxelRes: res });
      expect(core.stats.components, `resolución ${res}`).toBe(1);
      expect(core.stats.cohesion, `resolución ${res}`).toBe(1);
    }
  });

  // FASE 45: este test medía lo contrario. Con dos barras separadas
  // esperaba DOS piezas ("salió en pedazos"), porque hasta entonces la
  // segmentación se llevaba todo lo que no era fondo. Ahora el pipeline se
  // enfoca en el objeto principal, así que dos barras separadas son UN
  // objeto y una descartada — que es justo lo que el usuario pidió, y lo
  // que este test fija ahora. La detección de fragmentación en sí sigue
  // cubierta donde vive: voxel/validate.test.ts la prueba directamente.
  it("con dos objetos separados construye SÓLO el principal, y dice cuánto descartó", async () => {
    const img = blankImage(48, 48, [250, 250, 250, 255]);
    paintRect(img, 5, 5, 24, 42, [30, 30, 30, 255]); // barra ancha
    paintRect(img, 34, 5, 42, 42, [30, 30, 30, 255]); // barra angosta
    const core = await runVisionCore(img, { voxelRes: 48 });
    expect(core.mask.discarded).toBeGreaterThan(0);
    // La barra angosta desapareció de la máscara: su columna quedó vacía.
    expect(core.mask.bbox!.maxX).toBeLessThan(34);
    // Y lo que queda es UNA pieza maciza, no dos.
    expect(core.stats.components).toBe(1);
    expect(core.stats.cohesion).toBe(1);
  });

  it("una imagen sin objeto devuelve vacío y confianza cero, sin romper", async () => {
    const core = await runVisionCore(blankImage(32, 32, [200, 200, 200, 255]), { voxelRes: 48 });
    expect(core.cloud.count).toBe(0);
    expect(core.confidence).toBe(0);
    expect(core.stats.origins.observedFraction).toBe(0);
  });

  it("mide el tiempo de cada etapa", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    for (const etapa of ["segmentacion", "profundidad", "reconstruccion", "voxelizacion", "validacion"]) {
      expect(core.stats.timings[etapa]).toBeGreaterThanOrEqual(0);
    }
  });

  it("informa qué proveedores se usaron", async () => {
    setDepthProvider("flat");
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    expect(core.depthProviderId).toBe("flat");
    expect(core.visionProviderId).toBe("local");
    setDepthProvider("inflate");
  });

  it("la confianza global es la del eslabón más débil", async () => {
    const core = await runVisionCore(fotoSintetica(), { voxelRes: 48 });
    const min = Math.min(...core.stages.map((s) => s.value));
    expect(core.confidence).toBeCloseTo(min, 10);
  });

  it("cada modo produce una cáscara distinta pero válida", async () => {
    for (const mode of Object.values(RECON_MODE)) {
      const core = await runVisionCore(fotoSintetica(), { voxelRes: 48, mode });
      expect(core.cloud.count).toBeGreaterThan(0);
      for (let i = 0; i < core.cloud.points.length; i++) {
        expect(Number.isNaN(core.cloud.points[i])).toBe(false);
      }
    }
  });
});

describe("toResult: el contrato público", () => {
  it("junta origen, nube, etapas y estadísticas en un solo objeto", async () => {
    const img = fotoSintetica();
    const core = await runVisionCore(img, { voxelRes: 48, mode: RECON_MODE.DEPTH });
    const r = toResult(core, "auto.jpg", img);
    expect(r.source.fileName).toBe("auto.jpg");
    expect(r.source.width).toBe(img.width);
    expect(r.source.mode).toBe(RECON_MODE.DEPTH);
    expect(r.source.depthProvider).toBe("inflate");
    expect(r.cloud).toBe(core.cloud);
    expect(r.stats.origins.observed).toBeGreaterThan(0);
  });
});

describe("una imagen grande no rompe ni tarda de más", () => {
  it("procesa 512×512 sin NaN", async () => {
    const grande = blankImage(512, 512, [250, 250, 250, 255]);
    paintRect(grande, 40, 40, 470, 470, [90, 160, 60, 255]);
    const core = await runVisionCore(grande, { voxelRes: 64 });
    expect(core.cloud.count).toBeGreaterThan(0);
    for (let i = 0; i < core.cloud.points.length; i++) {
      expect(Number.isNaN(core.cloud.points[i])).toBe(false);
    }
  });

  it("una imagen de 1×1 no rompe", async () => {
    const core = await runVisionCore(blankImage(1, 1, [10, 10, 10, 255]), { voxelRes: 48 });
    expect(core.cloud.count).toBeGreaterThanOrEqual(0);
  });
});
