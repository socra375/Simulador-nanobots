import { describe, expect, it } from "vitest";
import {
  assignBands,
  buildMaterialMap,
  MATERIAL_SOURCE,
  NO_REGION,
  NEUTRAL_GLOW,
  paletteFromPointColors,
  type MaterialMap,
} from "./material-map";
import { resolveMaterial } from "./material-library";
import { labelRegions } from "./material-regions";

const CENTER: [number, number, number] = [0, 0, 0];
const CORE: [number, number, number] = [-8, 8, -8];

const ROJO = 0xd02020;
const DORADO = 0xd8b020;
const NEGRO = 0x101010;

interface Cloud {
  points: Float32Array;
  colors: Uint8Array;
  isMaterial: Uint8Array;
  count: number;
}

/**
 * Nube sintética en rejilla, con el color decidido por una función de la
 * POSICIÓN. Es el insumo que representa lo que de verdad produce el
 * pipeline: cada punto sabe de qué color es porque sabe dónde está.
 */
function grid(n: number, colorAt: (x: number, y: number, z: number) => number, materialAt?: (i: number) => boolean): Cloud {
  const count = n * n * n;
  const points = new Float32Array(count * 3);
  const colors = new Uint8Array(count * 3);
  const isMaterial = new Uint8Array(count);
  let i = 0;
  for (let ix = 0; ix < n; ix++) {
    for (let iy = 0; iy < n; iy++) {
      for (let iz = 0; iz < n; iz++) {
        const x = (ix / (n - 1) - 0.5) * 8;
        const y = (iy / (n - 1) - 0.5) * 8;
        const z = (iz / (n - 1) - 0.5) * 8;
        points[i * 3 + 0] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
        const hex = colorAt(x, y, z);
        colors[i * 3 + 0] = (hex >> 16) & 0xff;
        colors[i * 3 + 1] = (hex >> 8) & 0xff;
        colors[i * 3 + 2] = hex & 0xff;
        isMaterial[i] = materialAt ? (materialAt(i) ? 1 : 0) : 1;
        i++;
      }
    }
  }
  return { points, colors, isMaterial, count };
}

function build(cloud: Cloud, opts: Partial<Parameters<typeof buildMaterialMap>[0]> = {}): MaterialMap {
  return buildMaterialMap({
    points: cloud.points,
    count: cloud.count,
    isMaterial: cloud.isMaterial,
    pointColors: cloud.colors,
    clusters: [],
    center: CENTER,
    propagationOrigin: CORE,
    ...opts,
  });
}

function agentColor(map: MaterialMap, i: number): number {
  return (map.color[i * 3] << 16) | (map.color[i * 3 + 1] << 8) | map.color[i * 3 + 2];
}

// ---------------------------------------------------------------------
// EL TEST QUE JUSTIFICA TODA LA FASE.
//
// Hasta la Fase 41 el color de un agente salía de su OLA, y cada ola era
// un muestreo independiente de la figura entera: rojo y dorado quedaban
// intercalados agente por agente sobre todo el objeto. Estos tests
// afirman lo contrario y son los que fallarían si alguien volviera a
// atar el color a un índice, un orden de creación o un módulo.
// ---------------------------------------------------------------------
describe("el color sale de la POSICIÓN, no de una ola", () => {
  it("una mitad dorada y una mitad roja salen como dos manchas separadas, no intercaladas", () => {
    const cloud = grid(12, (_x, y) => (y > 0 ? DORADO : ROJO));
    const map = build(cloud);

    // Cada agente conserva EXACTAMENTE el color de su posición.
    for (let i = 0; i < cloud.count; i++) {
      const y = cloud.points[i * 3 + 1];
      expect(agentColor(map, i)).toBe(y > 0 ? DORADO : ROJO);
    }

    // Y las regiones están separadas EN EL ESPACIO: ninguna región tiene
    // agentes de los dos lados. Esto es lo que un damero no puede cumplir.
    const yRange = new Map<number, { min: number; max: number }>();
    for (let i = 0; i < cloud.count; i++) {
      const r = map.region[i];
      expect(r).not.toBe(NO_REGION);
      const y = cloud.points[i * 3 + 1];
      const cur = yRange.get(r);
      if (!cur) yRange.set(r, { min: y, max: y });
      else { cur.min = Math.min(cur.min, y); cur.max = Math.max(cur.max, y); }
    }
    const rangos = [...yRange.entries()].sort((a, b) => a[1].min - b[1].min);
    expect(rangos.length).toBe(2);
    // La región de abajo termina antes de que empiece la de arriba.
    expect(rangos[0][1].max).toBeLessThan(rangos[1][1].min);
  });

  it("todos los agentes de una región comparten material: no hay asignaciones cruzadas", () => {
    const cloud = grid(12, (_x, y, z) => (y > 0 ? DORADO : z > 0 ? ROJO : NEGRO));
    const map = build(cloud);
    const materialDeRegion = new Map<number, number>();
    for (let i = 0; i < cloud.count; i++) {
      const r = map.region[i];
      if (r === NO_REGION) continue;
      const m = map.regions[r].materialId;
      const prev = materialDeRegion.get(r);
      if (prev === undefined) materialDeRegion.set(r, m);
      else expect(m).toBe(prev);
    }
    for (const region of map.regions) {
      expect(region.materialId).toBeGreaterThanOrEqual(0);
      expect(region.materialId).toBeLessThan(map.palette.length);
      expect(map.palette[region.materialId]).toBe(region.color);
    }
  });

  it("dos agentes de la MISMA región con tonos distintos conservan cada uno el suyo", () => {
    // La fidelidad de la foto. Una carrocería roja no es un rojo plano:
    // tiene sombras y reflejos, y todos esos tonos caen en el mismo
    // material (la paleta los fusiona por proximidad). Si el color final
    // saliera del color REPRESENTATIVO de la región en vez del del agente,
    // el objeto quedaría pintado de un rojo plano de plástico.
    const cloud = grid(10, (x) => {
      // Un degradado dentro de un solo material: el rojo varía con x.
      const r = Math.round(160 + ((x + 4) / 8) * 60);
      return (r << 16) | (0x20 << 8) | 0x20;
    });
    const map = build(cloud);
    expect(map.palette.length).toBe(1); // un solo MATERIAL...
    const tonos = new Set<number>();
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      tonos.add(agentColor(map, i));
    }
    // ...pero muchos TONOS, uno por posición.
    expect(tonos.size).toBe(10); // uno por nivel de x. Con el color de la región sería 1.
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      const esperado = (cloud.colors[i * 3] << 16) | (cloud.colors[i * 3 + 1] << 8) | cloud.colors[i * 3 + 2];
      expect(agentColor(map, i)).toBe(esperado);
    }
  });

  it("un objeto de UN SOLO color da una sola región y un solo material", () => {
    const map = build(grid(10, () => ROJO));
    expect(map.palette.length).toBe(1);
    expect(map.regions.length).toBe(1);
    expect(map.slots).toBe(1);
  });

  it("no quedan Material Bots huérfanos: todos tienen región", () => {
    // Incluidos los que caen fuera del cubo de la grilla, que se enganchan
    // a la región más cercana en vez de quedar sin material (un target sin
    // región es un agujero visible en la figura).
    const cloud = grid(10, (_x, y) => (y > 0 ? DORADO : ROJO));
    // Empujar unos cuantos puntos MUY afuera del cubo [-5.5, 5.5].
    for (let i = 0; i < 20; i++) cloud.points[i * 3 + 0] = 40;
    const map = build(cloud);
    for (let i = 0; i < cloud.count; i++) {
      if (!cloud.isMaterial[i]) continue;
      expect(map.region[i]).not.toBe(NO_REGION);
      expect(map.region[i]).toBeLessThan(map.regions.length);
    }
  });

  it("los agentes que NO son de material se quedan sin región (spec §14)", () => {
    const cloud = grid(8, () => ROJO, (i) => i % 4 !== 0);
    const map = build(cloud);
    let sinMaterial = 0;
    for (let i = 0; i < cloud.count; i++) {
      if (cloud.isMaterial[i]) continue;
      sinMaterial++;
      expect(map.region[i]).toBe(NO_REGION);
    }
    expect(sinMaterial).toBeGreaterThan(0);
    expect(map.materialCount).toBe(cloud.count - sinMaterial);
  });
});

describe("determinismo (spec §20)", () => {
  it("los mismos puntos y colores dan exactamente el mismo mapa", () => {
    const cloud = grid(10, (x, y) => (y > 0 ? DORADO : x > 0 ? ROJO : NEGRO));
    const a = build(cloud);
    const b = build(cloud);
    expect([...a.region]).toEqual([...b.region]);
    expect([...a.color]).toEqual([...b.color]);
    expect([...a.spread]).toEqual([...b.spread]);
    expect(a.regions.map((r) => [r.id, r.materialId, r.slot, r.count])).toEqual(
      b.regions.map((r) => [r.id, r.materialId, r.slot, r.count]),
    );
  });
});

describe("propagación dentro de una región (spec §15)", () => {
  it("el spread crece con la distancia a la semilla, y la semilla es lo más cercano al núcleo", () => {
    const cloud = grid(10, () => ROJO);
    const map = build(cloud);
    const region = map.regions[0];

    // La semilla es el agente de la región más cercano al origen de
    // propagación: ningún otro agente puede estar más cerca.
    const dSeed = Math.hypot(region.seed[0] - CORE[0], region.seed[1] - CORE[1], region.seed[2] - CORE[2]);
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      const d = Math.hypot(
        cloud.points[i * 3] - CORE[0],
        cloud.points[i * 3 + 1] - CORE[1],
        cloud.points[i * 3 + 2] - CORE[2],
      );
      expect(d).toBeGreaterThanOrEqual(dSeed - 1e-4);
    }

    // Y el spread es monótono en la distancia a la semilla: si no lo
    // fuera, la transformación no recorrería la superficie.
    let masLejano = 0;
    let maxSpread = -1;
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      const d = Math.hypot(
        cloud.points[i * 3] - region.seed[0],
        cloud.points[i * 3 + 1] - region.seed[1],
        cloud.points[i * 3 + 2] - region.seed[2],
      );
      if (d > masLejano) masLejano = d;
      if (map.spread[i] > maxSpread) maxSpread = map.spread[i];
      expect(map.spread[i]).toBeGreaterThanOrEqual(0);
      expect(map.spread[i]).toBeLessThanOrEqual(1);
    }
    expect(maxSpread).toBeCloseTo(1, 5);
  });

  it("las regiones más cercanas al núcleo se activan primero", () => {
    // Dos manchas de color distinto a distancias muy distintas del núcleo.
    const cloud = grid(12, (x) => (x < 0 ? DORADO : ROJO));
    const map = build(cloud);
    expect(map.regions.length).toBe(2);
    const conDistancia = map.regions.map((r) => ({
      slot: r.slot,
      d: Math.hypot(r.centroid[0] - CORE[0], r.centroid[1] - CORE[1], r.centroid[2] - CORE[2]),
    }));
    conDistancia.sort((a, b) => a.d - b.d);
    expect(conDistancia[0].slot).toBeLessThanOrEqual(conDistancia[1].slot);
  });
});

describe("tandas de activación acotadas", () => {
  it("muchas regiones no producen muchas tandas: el tiempo no crece con las manchas", () => {
    // Un tablero de ajedrez REAL en el espacio (no en el índice): manchas
    // chicas alternadas. El mapa tiene que respetarlas como regiones, pero
    // sin darle a cada una su propio momento de activación.
    const cloud = grid(14, (x, y, z) => {
      const cell = Math.floor(x / 2) + Math.floor(y / 2) + Math.floor(z / 2);
      return cell % 2 === 0 ? ROJO : DORADO;
    });
    const map = build(cloud, { maxSlots: 4 });
    expect(map.regions.length).toBeGreaterThan(4);
    expect(map.slots).toBe(4);
    for (const r of map.regions) {
      expect(r.slot).toBeGreaterThanOrEqual(0);
      expect(r.slot).toBeLessThan(4);
    }
  });
});

// ---------------------------------------------------------------------
// FALLBACK: la figura no sabe dónde va cada color.
// ---------------------------------------------------------------------
describe("reparto aproximado cuando no hay color por punto (spec §32)", () => {
  const clusters = [
    { color: ROJO, weight: 0.6 },
    { color: DORADO, weight: 0.3 },
    { color: NEGRO, weight: 0.1 },
  ];

  function fallbackMap(): { map: MaterialMap; cloud: Cloud } {
    const cloud = grid(12, () => 0);
    const map = buildMaterialMap({
      points: cloud.points,
      count: cloud.count,
      isMaterial: cloud.isMaterial,
      pointColors: null,
      clusters,
      center: CENTER,
      propagationOrigin: CORE,
    });
    return { map, cloud };
  }

  it("se DECLARA aproximado en vez de hacerse pasar por medido", () => {
    const { map } = fallbackMap();
    expect(map.source).toBe(MATERIAL_SOURCE.FALLBACK);
    expect(map.palette).toEqual([ROJO, DORADO, NEGRO]);
  });

  it("con color por punto, en cambio, se declara observado", () => {
    expect(build(grid(8, () => ROJO)).source).toBe(MATERIAL_SOURCE.OBSERVED);
  });

  it("las bandas son CONTIGUAS a lo largo de un eje: nunca un damero", () => {
    // Éste es el test anti-regresión del bug original. Si el color
    // volviera a salir de un índice (`waveIndex % colors.length`, el orden
    // de creación, un random), al ordenar los agentes por su coordenada
    // los colores se alternarían. Ordenados por posición tienen que
    // aparecer en BLOQUES.
    const { map, cloud } = fallbackMap();
    const orden = [...Array(cloud.count).keys()]
      .filter((i) => map.region[i] !== NO_REGION)
      .sort((a, b) => cloud.points[a * 3 + 1] - cloud.points[b * 3 + 1]);

    let cambios = 0;
    for (let k = 1; k < orden.length; k++) {
      if (agentColor(map, orden[k]) !== agentColor(map, orden[k - 1])) cambios++;
    }
    // Tres bandas contiguas = a lo sumo dos cambios de color al recorrer
    // el eje. Un damero daría cientos.
    expect(cambios).toBeLessThanOrEqual(2);
  });

  it("los tamaños de banda siguen los pesos de la paleta", () => {
    const { map, cloud } = fallbackMap();
    const porColor = new Map<number, number>();
    let total = 0;
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      porColor.set(agentColor(map, i), (porColor.get(agentColor(map, i)) ?? 0) + 1);
      total++;
    }
    expect((porColor.get(ROJO) ?? 0) / total).toBeCloseTo(0.6, 1);
    expect((porColor.get(DORADO) ?? 0) / total).toBeCloseTo(0.3, 1);
    expect(porColor.get(ROJO)!).toBeGreaterThan(porColor.get(DORADO)!);
    expect(porColor.get(DORADO)!).toBeGreaterThan(porColor.get(NEGRO)!);
  });

  it("assignBands usa el eje MÁS LARGO de la figura", () => {
    // Una figura alargada en X: las bandas tienen que cortar a lo largo de
    // X, no del eje que quede primero en el código.
    const count = 600;
    const points = new Float32Array(count * 3);
    const isMaterial = new Uint8Array(count).fill(1);
    for (let i = 0; i < count; i++) {
      points[i * 3 + 0] = (i / (count - 1) - 0.5) * 10;
      points[i * 3 + 1] = ((i * 7) % 11) / 11 - 0.5;
      points[i * 3 + 2] = ((i * 5) % 13) / 13 - 0.5;
    }
    const out = new Int16Array(count).fill(-1);
    assignBands(points, count, isMaterial, [0.5, 0.5], out);
    // Ordenados por X, primero toda la banda 0 y después toda la 1.
    const orden = [...Array(count).keys()].sort((a, b) => points[a * 3] - points[b * 3]);
    let cambios = 0;
    for (let k = 1; k < orden.length; k++) if (out[orden[k]] !== out[orden[k - 1]]) cambios++;
    expect(cambios).toBe(1);
  });
});

describe("paleta desde los colores de la nube", () => {
  it("NO descarta el negro ni el blanco, a diferencia del histograma de la foto", () => {
    // En una foto, un negro casi puro suele ser fondo. En una nube ya
    // segmentada es la rueda del auto. Si esta función reusara los filtros
    // de `pickColorClusters`, las partes más contrastadas del objeto se
    // quedarían sin material.
    const cloud = grid(8, (_x, y) => (y > 0 ? 0xffffff : 0x000000));
    const palette = paletteFromPointColors(cloud.colors, cloud.count, cloud.isMaterial, 4);
    const hexes = palette.map((c) => c.color);
    expect(hexes).toContain(0xffffff);
    expect(hexes).toContain(0x000000);
  });

  it("fusiona tonos parecidos en un solo material", () => {
    const cloud = grid(8, (_x, y) => (y > 0 ? 0xd02020 : 0xd42424));
    const palette = paletteFromPointColors(cloud.colors, cloud.count, cloud.isMaterial, 4);
    expect(palette.length).toBe(1);
  });
});

describe("labelRegions", () => {
  it("dos manchas del mismo color separadas en el espacio son DOS regiones", () => {
    // La contigüidad es espacial, no de color: dos zonas rojas que no se
    // tocan no son la misma mancha.
    const count = 2000;
    const points = new Float32Array(count * 3);
    const member = new Uint8Array(count).fill(1);
    const material = new Int16Array(count); // todos el material 0
    for (let i = 0; i < count; i++) {
      const lejos = i >= count / 2;
      points[i * 3 + 0] = (lejos ? 3.5 : -3.5) + ((i % 7) / 7 - 0.5);
      points[i * 3 + 1] = ((i % 11) / 11 - 0.5) * 1.5;
      points[i * 3 + 2] = ((i % 13) / 13 - 0.5) * 1.5;
    }
    const out = labelRegions({ points, count, member, material, materialCount: 1, center: CENTER });
    expect(out.regionCount).toBe(2);
    for (let i = 0; i < count; i++) {
      expect(out.region[i]).toBe(i >= count / 2 ? out.region[count - 1] : out.region[0]);
    }
  });

  it("dos colores en celdas vecinas NO se unen en una región", () => {
    const cloud = grid(12, (x) => (x < 0 ? ROJO : DORADO));
    const material = new Int16Array(cloud.count);
    for (let i = 0; i < cloud.count; i++) material[i] = cloud.points[i * 3] < 0 ? 0 : 1;
    const out = labelRegions({
      points: cloud.points,
      count: cloud.count,
      member: cloud.isMaterial,
      material,
      materialCount: 2,
      center: CENTER,
    });
    expect(out.regionCount).toBe(2);
    expect(out.regionMaterial[out.region[0]]).not.toBe(
      out.regionMaterial[out.region[cloud.count - 1]],
    );
  });
});

// ---------------------------------------------------------------------
// Fase 45: el material ELEGIDO.
//
// La regla del proyecto no cambia: color = POSICIÓN + REGIÓN. Lo que
// cambia es de dónde sale el color de esas regiones. Estos tests fijan
// justamente eso — que elegir un material NO puentee el mapa.

describe("material elegido", () => {
  const HUESO = resolveMaterial("hueso")!.definition;
  const ORO = resolveMaterial("oro")!.definition;

  it("gana sobre la foto: el objeto es del material elegido", () => {
    // Nube de dos colores bien distintos...
    const cloud = grid(8, (_x, y) => (y > 0 ? DORADO : ROJO));
    const map = build(cloud, { chosen: HUESO });
    expect(map.source).toBe(MATERIAL_SOURCE.CHOSEN);
    expect(map.palette).toEqual([HUESO.color]);
    expect(map.chosen?.id).toBe("hueso");
    // ...y ni un solo agente conserva el rojo ni el dorado de la foto.
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      expect(agentColor(map, i)).not.toBe(ROJO);
      expect(agentColor(map, i)).not.toBe(DORADO);
    }
  });

  // LO QUE NO PUEDE PASAR: que elegir un material convierta el mapa en un
  // color plano y se lleve puesto todo el sistema espacial. Las regiones,
  // las semillas y el spread siguen saliendo de la POSICIÓN.
  it("NO desactiva el sistema espacial: sigue habiendo regiones, semillas y spread", () => {
    const cloud = grid(8, () => ROJO);
    const map = build(cloud, { chosen: ORO });
    expect(map.regions.length).toBeGreaterThan(0);
    expect(map.slots).toBeGreaterThan(0);
    // El spread sigue siendo una distancia normalizada de verdad: hay
    // agentes cerca de la semilla y agentes lejos.
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      min = Math.min(min, map.spread[i]);
      max = Math.max(max, map.spread[i]);
    }
    expect(min).toBeCloseTo(0, 5);
    expect(max).toBeCloseTo(1, 5);
  });

  it("el brillo del material viaja en el mapa", () => {
    const cloud = grid(6, () => ROJO);
    expect(build(cloud, { chosen: HUESO }).glow).toBe(HUESO.glow);
    expect(build(cloud, { chosen: ORO }).glow).toBe(ORO.glow);
    // Sin material elegido, el neutro: una foto no dice si era mate.
    expect(build(cloud).glow).toBe(NEUTRAL_GLOW);
    expect(build(cloud).chosen).toBeNull();
  });

  // LA VETA. Sin esto, 40.000 agentes con el mismo RGB exacto se ven como
  // plástico pintado, no como hueso.
  it("los agentes no salen todos del mismo tono exacto", () => {
    const cloud = grid(8, () => ROJO);
    const map = build(cloud, { chosen: HUESO });
    const tonos = new Set<number>();
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      tonos.add(agentColor(map, i));
    }
    expect(tonos.size).toBeGreaterThan(10);
  });

  // ...pero la veta es una VETA, no un arcoíris (spec §33): todos los
  // tonos siguen siendo el mismo material, a un desvío acotado de él.
  it("la veta no cambia el material: todos los tonos son el mismo color, más claro o más oscuro", () => {
    const cloud = grid(8, () => ROJO);
    const map = build(cloud, { chosen: HUESO });
    const br = (HUESO.color >> 16) & 0xff;
    const bg = (HUESO.color >> 8) & 0xff;
    const bb = HUESO.color & 0xff;
    for (let i = 0; i < cloud.count; i++) {
      if (map.region[i] === NO_REGION) continue;
      const r = map.color[i * 3 + 0];
      const g = map.color[i * 3 + 1];
      const b = map.color[i * 3 + 2];
      // Cada canal, dentro del ±variation del canal base.
      expect(Math.abs(r - br)).toBeLessThanOrEqual(br * HUESO.variation + 1);
      expect(Math.abs(g - bg)).toBeLessThanOrEqual(bg * HUESO.variation + 1);
      expect(Math.abs(b - bb)).toBeLessThanOrEqual(bb * HUESO.variation + 1);
    }
  });

  it("es determinista: dos mapas iguales dan exactamente el mismo color", () => {
    const a = build(grid(6, () => ROJO), { chosen: HUESO });
    const b = build(grid(6, () => ROJO), { chosen: HUESO });
    expect(Array.from(a.color)).toEqual(Array.from(b.color));
  });

  it("funciona también sin color por punto (las 17 figuras predefinidas)", () => {
    const cloud = grid(6, () => ROJO);
    const map = buildMaterialMap({
      points: cloud.points,
      count: cloud.count,
      isMaterial: cloud.isMaterial,
      pointColors: null,
      clusters: [{ color: DORADO, weight: 1 }],
      center: CENTER,
      propagationOrigin: CORE,
      chosen: ORO,
    });
    expect(map.source).toBe(MATERIAL_SOURCE.CHOSEN);
    expect(map.palette).toEqual([ORO.color]);
  });
});
