import { describe, expect, it } from "vitest";
import { AGENT_STATE, AGENT_STATE_NAMES, createAgentStore } from "./agent-store";
import { BOT_TYPE, BOT_TYPE_COUNT } from "./bot-types";

function formationLike(count: number) {
  return {
    count,
    role: new Uint8Array(count),
    region: new Int16Array(count),
    layer: new Uint8Array(count),
    delayFraction: new Float32Array(count),
    target: new Float32Array(count * 3),
  };
}

describe("createAgentStore", () => {
  it("arranca vacío", () => {
    const store = createAgentStore();
    expect(store.count).toBe(0);
    expect(store.countByState(new Uint32Array(8)).every((v) => v === 0)).toBe(true);
  });

  it("adoptFormation RE-APUNTA a los arrays de la formación, no los copia", () => {
    const store = createAgentStore();
    const f = formationLike(50);
    store.adoptFormation(f);
    // Identidad, no igualdad: copiarlos daría dos fuentes de verdad y un
    // cambio de cantidad a mitad de formación dejaría la copia vieja.
    expect(store.role).toBe(f.role);
    expect(store.target).toBe(f.target);
    expect(store.layer).toBe(f.layer);
    expect(store.delayFraction).toBe(f.delayFraction);
  });

  it("al adoptar una formación todos los agentes arrancan en el núcleo", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(120));
    const counts = store.countByState(new Uint32Array(8));
    expect(counts[AGENT_STATE.CORE]).toBe(120);
    expect(counts[AGENT_STATE.ATTACHED]).toBe(0);
  });

  it("reset() deja todo en reposo", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(40));
    const roles = new Uint8Array(70);
    const targets = new Float32Array(70 * 3);
    store.reset(70, roles, targets);
    expect(store.count).toBe(70);
    expect(store.countByState(new Uint32Array(8))[AGENT_STATE.IDLE]).toBe(70);
  });

  it("countByState no asigna: rellena el array que se le pasa y lo devuelve", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(10));
    const out = new Uint32Array(8);
    expect(store.countByState(out)).toBe(out);
    expect(out[AGENT_STATE.CORE]).toBe(10);
    // Se limpia entre llamadas, no acumula.
    store.countByState(out);
    expect(out[AGENT_STATE.CORE]).toBe(10);
  });

  it("countByState sólo cuenta los agentes activos, no la capacidad sobrante", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(100));
    store.adoptFormation(formationLike(30)); // el buffer de estado sigue siendo de 100
    const counts = store.countByState(new Uint32Array(8));
    expect(counts[AGENT_STATE.CORE]).toBe(30);
  });

  it("fillState cambia el estado de todos los activos", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(25));
    store.fillState(AGENT_STATE.ATTACHED);
    expect(store.countByState(new Uint32Array(8))[AGENT_STATE.ATTACHED]).toBe(25);
  });

  it("el buffer de estado se reusa al bajar la cantidad (no reasigna de más)", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(500));
    const buffer = store.state;
    store.adoptFormation(formationLike(100));
    expect(store.state).toBe(buffer);
  });
});

describe("accesor por agente (flyweight)", () => {
  it("lee los campos del agente pedido", () => {
    const store = createAgentStore();
    const f = formationLike(5);
    f.role[3] = 1;
    f.region[3] = 2;
    f.layer[3] = 3;
    f.delayFraction[3] = 0.5;
    f.target[3 * 3 + 0] = 7;
    f.target[3 * 3 + 1] = 8;
    f.target[3 * 3 + 2] = 9;
    store.adoptFormation(f);

    const a = store.at(3);
    expect(a.index).toBe(3);
    expect(a.role).toBe(1);
    expect(a.region).toBe(2);
    expect(a.layer).toBe(3);
    expect(a.delayFraction).toBeCloseTo(0.5, 6);
    expect([a.targetX, a.targetY, a.targetZ]).toEqual([7, 8, 9]);
  });

  it("es UN SOLO objeto re-apuntado: no se puede retener", () => {
    const store = createAgentStore();
    const f = formationLike(4);
    f.role[0] = 9;
    f.role[1] = 4;
    store.adoptFormation(f);

    const primero = store.at(0);
    expect(primero.role).toBe(9);
    const segundo = store.at(1);
    // Misma referencia — y por eso `primero` ahora también apunta al 1.
    expect(segundo).toBe(primero);
    expect(primero.role).toBe(4);
  });

  it("un índice fuera de rango devuelve ceros en vez de undefined", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(2));
    const a = store.at(99);
    expect(a.role).toBe(0);
    expect(a.targetX).toBe(0);
    expect(Number.isNaN(a.delayFraction)).toBe(false);
  });
});

describe("AGENT_STATE", () => {
  it("hay un nombre por cada estado", () => {
    expect(AGENT_STATE_NAMES).toHaveLength(Object.keys(AGENT_STATE).length);
  });

  it("los códigos son contiguos desde 0 (se usan como índice de array)", () => {
    const codes = Object.values(AGENT_STATE).sort((a, b) => a - b);
    expect(codes).toEqual(codes.map((_, i) => i));
  });
});

describe("tipo de bot (Fase 31)", () => {
  it("por defecto todos los agentes de una formación son Nanobots", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(40));
    const counts = store.countByType(new Uint32Array(BOT_TYPE_COUNT));
    expect(counts[BOT_TYPE.NANOBOT]).toBe(40);
  });

  it("assignTypesFromRoles convierte la capa de color en Material Bots", () => {
    const store = createAgentStore();
    const f = formationLike(10);
    // Rol 1 = COLOR en la convención de shapes.
    for (let i = 0; i < 4; i++) f.role[i] = 1;
    store.adoptFormation(f);
    store.assignTypesFromRoles(1);

    const counts = store.countByType(new Uint32Array(BOT_TYPE_COUNT));
    expect(counts[BOT_TYPE.MATERIAL]).toBe(4);
    expect(counts[BOT_TYPE.NANOBOT]).toBe(6);
  });

  it("el tipo es un byte por agente en su propio array, no un objeto por agente", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(1000));
    expect(store.botType).toBeInstanceOf(Uint8Array);
    expect(store.botType.length).toBeGreaterThanOrEqual(1000);
  });

  it("countByType no asigna y sólo cuenta los agentes activos", () => {
    const store = createAgentStore();
    store.adoptFormation(formationLike(200));
    store.adoptFormation(formationLike(25)); // el buffer sigue siendo de 200
    const out = new Uint32Array(BOT_TYPE_COUNT);
    expect(store.countByType(out)).toBe(out);
    let total = 0;
    for (let i = 0; i < BOT_TYPE_COUNT; i++) total += out[i];
    expect(total).toBe(25);
  });

  it("reset() vuelve a dejar todo como Nanobots", () => {
    const store = createAgentStore();
    const f = formationLike(10);
    for (let i = 0; i < 10; i++) f.role[i] = 1;
    store.adoptFormation(f);
    store.assignTypesFromRoles(1);
    store.reset(10, new Uint8Array(10), new Float32Array(30));
    expect(store.countByType(new Uint32Array(BOT_TYPE_COUNT))[BOT_TYPE.NANOBOT]).toBe(10);
  });

  it("el accesor por agente expone el tipo", () => {
    const store = createAgentStore();
    const f = formationLike(5);
    f.role[2] = 1;
    store.adoptFormation(f);
    store.assignTypesFromRoles(1);
    expect(store.at(2).botType).toBe(BOT_TYPE.MATERIAL);
    expect(store.at(0).botType).toBe(BOT_TYPE.NANOBOT);
  });
});
