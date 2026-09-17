import { describe, expect, it } from "vitest";
import {
  acceptsObjectMaterial,
  BOT_TYPE,
  BOT_TYPE_COUNT,
  BOT_TYPES,
  botTypeInfo,
  describePopulation,
  POPULATIONS,
  splitPopulations,
} from "./bot-types";
import { BOT_VISUALS, botVisual, setBotIdentityColor } from "./bot-config";

describe("catálogo de tipos", () => {
  it("hay exactamente los seis tipos declarados", () => {
    expect(BOT_TYPES).toHaveLength(BOT_TYPE_COUNT);
    expect(Object.keys(BOT_TYPE)).toHaveLength(BOT_TYPE_COUNT);
  });

  it("los códigos son contiguos desde 0 (se usan como índice de array)", () => {
    const codes = Object.values(BOT_TYPE).sort((a, b) => a - b);
    expect(codes).toEqual(codes.map((_, i) => i));
  });

  it("cada entrada está en la posición de su propio código", () => {
    BOT_TYPES.forEach((info, i) => expect(info.type).toBe(i));
  });

  it("un tipo fuera de rango no rompe: cae a Nanobot", () => {
    expect(botTypeInfo(99).type).toBe(BOT_TYPE.NANOBOT);
    expect(botTypeInfo(-1).type).toBe(BOT_TYPE.NANOBOT);
  });

  it("los tipos sin agentes hoy dicen explícitamente qué falta", () => {
    // La spec pide preparar sin fingir. Un tipo marcado como no
    // implementado SIN explicación sería justamente el scaffold mudo.
    for (const info of BOT_TYPES) {
      if (!info.implemented) expect(info.pendingReason ?? "").not.toBe("");
    }
  });

  it("un tipo implementado que puede dar 0 trae su aclaración", () => {
    // Union Bot da 0 en formas humanoides (usan hueso macizo, sin vigas).
    // Sin aclaración, ese 0 se lee como un fallo.
    const union = botTypeInfo(BOT_TYPE.UNION);
    expect(union.implemented).toBe(true);
    expect(union.note ?? "").not.toBe("");
  });

  it("Repair y Transform son los únicos todavía sin agentes propios", () => {
    const pendientes = BOT_TYPES.filter((b) => !b.implemented).map((b) => b.type);
    expect(pendientes.sort()).toEqual([BOT_TYPE.REPAIR, BOT_TYPE.TRANSFORM].sort());
  });
});

// ESTA es la regla dura de la spec §20, y por eso tiene su propio bloque:
// si alguna vez alguien la afloja, el enjambre pierde la única referencia
// visual constante para distinguir estructura de recubrimiento.
describe("regla del Material Bot", () => {
  it("el MICROBOT no acepta el color/material del objeto", () => {
    expect(acceptsObjectMaterial(BOT_TYPE.MICROBOT)).toBe(false);
  });

  it("TODOS los demás tipos sí lo aceptan", () => {
    for (const info of BOT_TYPES) {
      if (info.type === BOT_TYPE.MICROBOT) continue;
      expect(acceptsObjectMaterial(info.type)).toBe(true);
    }
  });

  it("el Microbot es el ÚNICO excluido, no uno de varios", () => {
    const excluidos = BOT_TYPES.filter((b) => !b.acceptsObjectMaterial);
    expect(excluidos).toHaveLength(1);
    expect(excluidos[0].type).toBe(BOT_TYPE.MICROBOT);
  });
});

describe("configuración visual", () => {
  it("cada tipo tiene color de identidad propio", () => {
    for (const info of BOT_TYPES) {
      expect(botVisual(info.type).identityColor).toBeGreaterThanOrEqual(0);
    }
  });

  it("los seis colores de identidad son DISTINTOS entre sí", () => {
    // Si dos tipos compartieran color, el modo inspección no serviría para
    // distinguirlos, que es su único propósito.
    const colores = new Set(BOT_TYPES.map((b) => botVisual(b.type).identityColor));
    expect(colores.size).toBe(BOT_TYPE_COUNT);
  });

  it("el color se puede cambiar desde un solo lugar", () => {
    const original = BOT_VISUALS[BOT_TYPE.REPAIR].identityColor;
    expect(setBotIdentityColor(BOT_TYPE.REPAIR, 0x123456)).toBe(true);
    expect(botVisual(BOT_TYPE.REPAIR).identityColor).toBe(0x123456);
    setBotIdentityColor(BOT_TYPE.REPAIR, original);
    expect(botVisual(BOT_TYPE.REPAIR).identityColor).toBe(original);
  });

  it("un tipo inexistente no escribe una clave inventada en el mapa", () => {
    const antes = Object.keys(BOT_VISUALS).length;
    expect(setBotIdentityColor(99, 0xffffff)).toBe(false);
    expect(Object.keys(BOT_VISUALS)).toHaveLength(antes);
  });

  it("el tamaño relativo distingue a los tipos (el Nanobot es el más chico)", () => {
    const nano = botTypeInfo(BOT_TYPE.NANOBOT).relativeSize;
    for (const info of BOT_TYPES) {
      if (info.type === BOT_TYPE.NANOBOT) continue;
      expect(info.relativeSize).toBeGreaterThan(nano);
    }
  });
});

// --- Fase 45: por qué el número del slider no es el del panel ---

describe("splitPopulations / describePopulation", () => {
  function counts(map: Partial<Record<number, number>>): Uint32Array {
    const out = new Uint32Array(BOT_TYPE_COUNT);
    for (const [k, v] of Object.entries(map)) out[Number(k)] = v!;
    return out;
  }

  // EL CASO EXACTO QUE REPORTÓ EL USUARIO: 4.000 Microbots pedidos, y el
  // panel mostraba 480. Los otros 3.520 son las vigas, que son Union Bots.
  it("la suma de los tipos cierra con lo que pide el slider", () => {
    const [exo] = splitPopulations(
      counts({ [BOT_TYPE.MICROBOT]: 480, [BOT_TYPE.UNION]: 3520 }),
      [4000, 3000],
    );
    expect(exo.configured).toBe(4000);
    expect(exo.onScreen).toBe(4000);
    expect(describePopulation(exo)).toContain("480 Microbot");
    expect(describePopulation(exo)).toContain("3.520 Union Bot");
  });

  it("los Nanobots se reparten igual, entre detalle y material", () => {
    const [, enjambre] = splitPopulations(
      counts({ [BOT_TYPE.NANOBOT]: 750, [BOT_TYPE.MATERIAL]: 2250 }),
      [4000, 3000],
    );
    expect(enjambre.configured).toBe(3000);
    expect(enjambre.onScreen).toBe(3000);
    expect(describePopulation(enjambre)).toContain("2.250 Material Bot");
  });

  // Un reparto de ceros se leería como un error de conteo; que no haya
  // nadie en escena es otra cosa, y se dice con esas palabras.
  it("sin nadie en escena lo dice, en vez de mostrar un reparto de ceros", () => {
    const [exo] = splitPopulations(counts({}), [4000, 3000]);
    expect(exo.onScreen).toBe(0);
    expect(describePopulation(exo)).toContain("ninguno en escena");
    expect(describePopulation(exo)).toContain("4.000 pedidos");
  });

  // Las formas humanoides usan hueso macizo, sin vigas: ahí la cuenta
  // cierra con un solo tipo y la frase tiene que seguir cerrando.
  it("una forma sin vigas también cierra", () => {
    const [exo] = splitPopulations(counts({ [BOT_TYPE.MICROBOT]: 4000 }), [4000, 3000]);
    expect(exo.onScreen).toBe(4000);
    expect(describePopulation(exo)).toContain("0 Union Bot");
  });

  it("cada tipo implementado aparece en exactamente una población", () => {
    const vistos = POPULATIONS.flatMap((p) => p.types);
    expect(new Set(vistos).size).toBe(vistos.length);
    for (const info of BOT_TYPES) {
      if (!info.implemented) continue;
      expect(vistos, info.name).toContain(info.type);
    }
  });
});
