import { describe, expect, it } from "vitest";
import {
  derivedMaterial,
  hashName,
  hslToHex,
  MATERIAL_LIBRARY,
  MATERIAL_ORIGIN,
  materialNamesByFamily,
  materialOriginLabel,
  normalizeMaterialName,
  resolveMaterial,
} from "./material-library";
import {
  emittedLuminance,
  lumaBudget,
  luminance,
  MATTE_GLOW_MAX,
  toneScale,
} from "./material-animation";
import { BLOOM_THRESHOLD } from "../swarm/bot-config";

describe("normalizeMaterialName", () => {
  it("ignora mayúsculas, acentos, espacios de más y puntuación", () => {
    expect(normalizeMaterialName("  Ámbar!! ")).toBe("ambar");
    expect(normalizeMaterialName("FIBRA  DE   CARBONO")).toBe("fibra de carbono");
    expect(normalizeMaterialName("acero-inoxidable")).toBe("acero inoxidable");
  });

  it("una consulta vacía queda vacía, no se convierte en algo", () => {
    expect(normalizeMaterialName("   ")).toBe("");
    expect(normalizeMaterialName("!!!")).toBe("");
  });
});

describe("resolveMaterial: lo que está en la biblioteca", () => {
  it("encuentra por nombre, por id y por alias, escrito como sea", () => {
    for (const consulta of ["Hueso", "hueso", "HUESO", "bone", "esqueleto"]) {
      const r = resolveMaterial(consulta)!;
      expect(r.definition.id, consulta).toBe("hueso");
      expect(r.origin, consulta).toBe(MATERIAL_ORIGIN.LIBRARY);
    }
  });

  // Las dos que la spec nombra explícitamente.
  it("piel y hueso están, y no son el mismo color", () => {
    const piel = resolveMaterial("piel")!.definition;
    const hueso = resolveMaterial("hueso")!.definition;
    expect(piel.id).toBe("piel");
    expect(hueso.id).toBe("hueso");
    expect(piel.color).not.toBe(hueso.color);
  });

  // REGRESIÓN: con el match por subcadena ingenuo (el primero que
  // aparezca), "acero inoxidable" caía en "acero" y "fibra de carbono" en
  // "carbono", porque esas claves están antes en la lista. Gana la clave
  // MÁS LARGA, no la primera.
  it("una consulta compuesta gana con la clave más larga, no con la primera", () => {
    expect(resolveMaterial("acero inoxidable")!.definition.id).toBe("acero");
    expect(resolveMaterial("fibra de carbono")!.definition.id).toBe("fibra-carbono");
    expect(resolveMaterial("un objeto de fibra de carbono")!.definition.id).toBe("fibra-carbono");
  });

  it("acepta una frase que contiene el material", () => {
    expect(resolveMaterial("quiero que sea de oro macizo")!.definition.id).toBe("oro");
  });

  it("una consulta vacía no resuelve nada", () => {
    expect(resolveMaterial("")).toBeNull();
    expect(resolveMaterial("   ")).toBeNull();
  });
});

describe("resolveMaterial: lo que NO está", () => {
  it("acepta un material inventado, y DICE que el color es derivado", () => {
    const r = resolveMaterial("flogisto")!;
    expect(r.origin).toBe(MATERIAL_ORIGIN.DERIVED);
    expect(r.definition.name).toBe("flogisto");
    expect(materialOriginLabel(r)).toContain("derivado");
  });

  it("es determinista: el mismo nombre da el mismo color siempre", () => {
    expect(derivedMaterial("zylthar").color).toBe(derivedMaterial("zylthar").color);
    expect(derivedMaterial("Zylthar").color).toBe(derivedMaterial("  zylthar ").color);
  });

  it("dos nombres distintos dan colores distintos", () => {
    const colores = new Set(
      ["zylthar", "quorium", "nebulita", "fulgorita", "trilion"].map((n) => derivedMaterial(n).color),
    );
    expect(colores.size).toBe(5);
  });

  // LA RAZÓN DE QUE LA SATURACIÓN Y LA CLARIDAD NO SALGAN DEL HASH: del
  // hash sale SÓLO el tono. Un nombre puede elegir el color, pero no puede
  // elegir ser un blanco que sature el bloom ni un negro invisible.
  //
  // Ojo con lo que este test NO dice: un tono amarillo-verdoso es
  // intrínsecamente luminoso y sí puede pasarse del presupuesto aun dentro
  // de la banda; para eso está el techo de material-animation.ts, y la
  // prueba de abajo lo comprueba. Lo que la banda garantiza es que ningún
  // nombre produzca un color DESCOLORIDO hacia el blanco o el negro.
  const INVENTADOS = ["blanco puro", "luz", "zzzzzz", "aaa", "42", "material x", "nieve eterna"];

  it("ningún nombre inventado sale casi blanco ni casi negro", () => {
    for (const nombre of INVENTADOS) {
      const { color } = derivedMaterial(nombre);
      const canales = [((color >> 16) & 0xff) / 255, ((color >> 8) & 0xff) / 255, (color & 0xff) / 255];
      const max = Math.max(...canales);
      const min = Math.min(...canales);
      expect(max, nombre).toBeGreaterThan(0.25);
      expect(min, nombre).toBeLessThan(0.75);
      // Tiene color de verdad, no es un gris: hay separación entre canales.
      expect(max - min, nombre).toBeGreaterThan(0.15);
    }
  });

  it("después del techo, ningún inventado se pasa del presupuesto", () => {
    for (const nombre of INVENTADOS) {
      const { color, glow } = derivedMaterial(nombre);
      const r = ((color >> 16) & 0xff) / 255;
      const g = ((color >> 8) & 0xff) / 255;
      const b = (color & 0xff) / 255;
      const escala = toneScale(r, g, b, glow);
      expect(luminance(r * escala, g * escala, b * escala), nombre)
        .toBeLessThanOrEqual(lumaBudget(glow) + 1e-9);
    }
  });
});

describe("la biblioteca en sí", () => {
  it("no tiene ids repetidos", () => {
    const ids = MATERIAL_LIBRARY.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("cada material resuelve a sí mismo por su propio nombre", () => {
    for (const def of MATERIAL_LIBRARY) {
      expect(resolveMaterial(def.name)!.definition.id, def.name).toBe(def.id);
    }
  });

  it("todos los valores están en rango", () => {
    for (const def of MATERIAL_LIBRARY) {
      expect(def.color, def.id).toBeGreaterThanOrEqual(0);
      expect(def.color, def.id).toBeLessThanOrEqual(0xffffff);
      expect(def.glow, def.id).toBeGreaterThanOrEqual(0);
      expect(def.glow, def.id).toBeLessThanOrEqual(1);
      expect(def.variation, def.id).toBeGreaterThanOrEqual(0);
      expect(def.variation, def.id).toBeLessThanOrEqual(0.3);
    }
  });

  // El campo `glow` existe por un bug real (el objeto floreciendo con el
  // bloom), no por decoración: tiene que cambiar algo. Si todos valieran
  // lo mismo, sería una columna muerta.
  // LA PRUEBA QUE IMPORTA DE VERDAD, y la que la pantalla obligó a
  // escribir: con el material puesto, ninguno de los mates florece.
  //
  // `MATTE_GLOW_MAX` no es un umbral elegido para que el test pase: sale
  // de despejar el presupuesto contra el umbral del bloom. El mármol
  // (0.18) queda apenas por encima A PROPÓSITO — una piedra pulida sí
  // agarra algo de luz; el hueso y la madera, no.
  const mates = MATERIAL_LIBRARY.filter((d) => d.glow <= MATTE_GLOW_MAX);

  it("hay materiales mates de verdad en la biblioteca", () => {
    expect(mates.length).toBeGreaterThan(10);
    expect(mates.map((d) => d.id)).toContain("hueso");
    expect(mates.map((d) => d.id)).toContain("piel");
  });

  it("ningún material mate de la biblioteca llega al umbral del bloom", () => {
    for (const def of mates) {
      const r = ((def.color >> 16) & 0xff) / 255;
      const g = ((def.color >> 8) & 0xff) / 255;
      const b = (def.color & 0xff) / 255;
      const s = toneScale(r, g, b, def.glow);
      expect(emittedLuminance(r * s, g * s, b * s), def.name).toBeLessThanOrEqual(BLOOM_THRESHOLD);
    }
  });

  it("TODO material, mate o no, se queda dentro de SU presupuesto", () => {
    for (const def of MATERIAL_LIBRARY) {
      const r = ((def.color >> 16) & 0xff) / 255;
      const g = ((def.color >> 8) & 0xff) / 255;
      const b = (def.color & 0xff) / 255;
      const s = toneScale(r, g, b, def.glow);
      expect(luminance(r * s, g * s, b * s), def.name).toBeLessThanOrEqual(lumaBudget(def.glow) + 1e-9);
    }
  });

  it("glow separa de verdad lo que brilla de lo que no", () => {
    const cromo = resolveMaterial("cromo")!.definition;
    const hueso = resolveMaterial("hueso")!.definition;
    expect(cromo.glow).toBeGreaterThan(hueso.glow);
    // Dos claridades parecidas, presupuestos muy distintos: el hueso sale
    // atenuado y el cromo no tanto.
    const escala = (d: typeof cromo): number =>
      toneScale(((d.color >> 16) & 0xff) / 255, ((d.color >> 8) & 0xff) / 255, (d.color & 0xff) / 255, d.glow);
    expect(escala(hueso)).toBeLessThan(escala(cromo));
  });

  it("el desplegable agrupa por familia y no pierde ningún material", () => {
    const grupos = materialNamesByFamily();
    const total = grupos.reduce((s, g) => s + g.names.length, 0);
    expect(total).toBe(MATERIAL_LIBRARY.length);
    for (const g of grupos) expect(g.names.length, g.family).toBeGreaterThan(0);
  });
});

describe("utilidades", () => {
  it("hashName es estable y no depende del largo", () => {
    expect(hashName("a")).toBe(hashName("a"));
    expect(hashName("a")).not.toBe(hashName("b"));
    expect(hashName("")).toBe(0x811c9dc5);
  });

  it("hslToHex da los primarios donde corresponde", () => {
    expect(hslToHex(0, 1, 0.5)).toBe(0xff0000);
    expect(hslToHex(1 / 3, 1, 0.5)).toBe(0x00ff00);
    expect(hslToHex(2 / 3, 1, 0.5)).toBe(0x0000ff);
    expect(hslToHex(0, 0, 1)).toBe(0xffffff);
    expect(hslToHex(0, 0, 0)).toBe(0x000000);
  });
});
