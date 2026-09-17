import { beforeEach, describe, expect, it } from "vitest";
import {
  createSimulation,
  MICROBOT_EXO_DURATION,
  type MicrobotMeshApi,
  type NanobotMeshApi,
  type SimSettings,
  type Simulation,
  type SwarmApi,
} from "./simulation";
import { MATERIAL_PHASE } from "../material/material-animation";
import { MATERIAL_SOURCE } from "../material/material-map";
import { resolveMaterial } from "../material/material-library";
import { DEFAULT_NANOBOT_TIMINGS, makeSwirlAxes } from "./kinematics";
import { AGENT_STATE } from "../swarm/agent-store";
import { BOT_TYPE } from "../swarm/bot-types";
import { TASK_STATUS, TASK_TYPE } from "../swarm/director";

// Arnés de la máquina de estados. Antes de la Fase 27c esto era
// literalmente intesteable: todo vivía en una closure de main() sin
// exports. Con las dependencias inyectadas se puede correr la simulación
// completa contra mallas falsas que registran cada llamada, y afirmar la
// SECUENCIA — que es donde estaban los bugs históricos (el traspaso
// pendingFormation, el reset de fin de repliegue, el conteo diferido).

interface Recorded {
  calls: string[];
  lastUpdate: {
    count: number;
    roles: Uint8Array<ArrayBufferLike>;
    visibleRoles: readonly [boolean, boolean];
  } | null;
  formationSettledMs: number[];
  /** Copia de las posiciones del último cuadro (el buffer real se reusa). */
  lastPositions: Float32Array | null;
  /** Último cuadro del exoesqueleto: nodos, vigas y quién es quién. */
  lastMicro: { points: Float32Array; spans: Float32Array; isBeam: Uint8Array; count: number } | null;
  /** Último tint por agente que recibió la malla (Fase 42). */
  lastTint: Float32Array | null;
}

function makeSim(settings?: Partial<SimSettings>, reactor?: { pulseColor(c: number): void; resetColor(): void }) {
  const rec: Recorded = {
    calls: [], lastUpdate: null, formationSettledMs: [], lastPositions: null, lastMicro: null,
    lastTint: null,
  };
  let swarmCount = 0;
  const positions = new Float32Array(60000 * 3);

  const swarm: SwarmApi = {
    init(count) { rec.calls.push(`swarm.init(${count})`); swarmCount = count; },
    setParams() { rec.calls.push("swarm.setParams"); },
    step() { rec.calls.push("swarm.step"); },
    getPositions: () => positions,
    getCount: () => swarmCount,
    setAgentTargets() { rec.calls.push("swarm.setAgentTargets"); },
  };

  const swarmMesh: NanobotMeshApi = {
    setCount(count) { rec.calls.push(`mesh.setCount(${count})`); },
    updateFromPositions(p, count, roles, _t, visibleRoles) {
      rec.calls.push(`mesh.update(${count},${visibleRoles[1] ? 1 : 0})`);
      rec.lastUpdate = { count, roles, visibleRoles };
      rec.lastPositions = p.slice(0, count * 3);
    },
    setVisible(v) { rec.calls.push(`mesh.setVisible(${v})`); },
    setInstanceTint(tint) {
      rec.calls.push(`mesh.setInstanceTint(${tint ? "buffer" : "null"})`);
      rec.lastTint = tint;
    },
    setSkeletonGrayscale(a) { rec.calls.push(`mesh.grayscale(${a})`); },
  };

  const microbotMesh: MicrobotMeshApi = {
    updateFromPositions(points, count, isBeam, spans) {
      rec.calls.push("micro.update");
      rec.lastMicro = {
        points: points.slice(0, count * 3),
        spans: spans.slice(0, count * 6),
        isBeam: isBeam.slice(0, count),
        count,
      };
    },
    setVisible(v) { rec.calls.push(`micro.setVisible(${v})`); },
  };

  const merged: SimSettings = {
    count: 300, microbotCount: 200,
    cohesion: 0.8, separation: 1.5, alignment: 0.6, maxSpeed: 4,
    ...settings,
  };

  let clock = 0;
  const sim = createSimulation({
    swarm, swarmMesh, microbotMesh,
    settings: merged,
    reactorCenter: [-8, 8, -8],
    swirlAxes: makeSwirlAxes([-8, 8, -8], [4, 2, 4]),
    maxNanobots: 60000,
    maxMicrobots: 60000,
    now: () => (clock += 100),
    onFormationSettled: (ms) => rec.formationSettledMs.push(ms),
    reactor,
  });
  rec.calls.length = 0; // descartar lo de la construcción
  return { sim, rec, settings: merged };
}

/** Avanza `seconds` en pasos de 0.1 (ningún estado dura menos que eso). */
function advance(sim: Simulation, seconds: number): void {
  const steps = Math.round(seconds / 0.1);
  for (let i = 0; i < steps; i++) sim.step(0.1);
}

const FULL_LAUNCH = MICROBOT_EXO_DURATION + 0.2;
/**
 * Con qué holgura avanzar para dar por terminada la animación de Nanobots.
 *
 * Fase 42: el vuelo son 2 capas (relleno + material) y después viene la
 * cola de material (asentamiento + activación + hasta 6 tandas solapadas),
 * que en el peor caso suma ~5,2 s más. Antes alcanzaba con
 * `layerDuration * 3`; ahora eso queda CORTO y la figura se quedaría en
 * "forming". Se sobra a propósito: estos tests preguntan "¿terminó?", no
 * "¿cuánto tardó exactamente?".
 */
const NANOBOT_FULL = DEFAULT_NANOBOT_TIMINGS.layerDuration * 2 + 6;

describe("estado inicial", () => {
  it("arranca en reposo, con el exoesqueleto oculto y sin figura", () => {
    const { sim } = makeSim();
    expect(sim.state.nanobotPhase).toBe("idle");
    expect(sim.state.microbotPhase).toBe("hidden");
    expect(sim.state.currentShapeName).toBeNull();
    expect(sim.state.forming).toBe(false);
  });

  it("en reposo corre la física y dibuja, cuadro a cuadro", () => {
    const { sim, rec } = makeSim();
    sim.step(0.1);
    expect(rec.calls).toContain("swarm.step");
    expect(rec.lastUpdate?.visibleRoles).toEqual([true, true]);
  });
});

describe("formar una figura", () => {
  let h: ReturnType<typeof makeSim>;
  beforeEach(() => { h = makeSim(); });

  it("los Nanobots NO arrancan hasta que el exoesqueleto termina de salir", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(h.sim.state.microbotPhase).toBe("launching");
    // Nanobots sigue en reposo durante todo el lanzamiento.
    advance(h.sim, MICROBOT_EXO_DURATION - 0.3);
    expect(h.sim.state.microbotPhase).toBe("launching");
    expect(h.sim.state.nanobotPhase).toBe("idle");

    advance(h.sim, 0.5);
    expect(h.sim.state.microbotPhase).toBe("settled");
    expect(h.sim.state.nanobotPhase).toBe("forming");
  });

  it("el enjambre se hace visible justo en el traspaso, no antes", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(h.rec.calls).toContain("mesh.setVisible(false)");
    expect(h.rec.calls).not.toContain("mesh.setVisible(true)");
    advance(h.sim, FULL_LAUNCH);
    expect(h.rec.calls).toContain("mesh.setVisible(true)");
  });

  it("`forming` es derivado del nombre de la figura, no un estado aparte", () => {
    expect(h.sim.state.forming).toBe(false);
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(h.sim.state.forming).toBe(true);
    expect(h.sim.state.currentShapeName).toBe("cubo");
    h.sim.returnToCore();
    // Se vuelve false EN EL ACTO, aunque el exoesqueleto siga replegando
    // durante segundos. Ese desfase entre "ya no hay figura" y "las
    // máquinas todavía se están moviendo" era justo el bug del viejo
    // `mode` almacenado; al derivarlo no puede volver a pasar.
    expect(h.sim.state.forming).toBe(false);
    expect(h.sim.state.microbotPhase).toBe("retracting");
    // Los Nanobots ni habían arrancado (esperaban al exoesqueleto), así
    // que no hay nada que replegar de su lado.
    expect(h.sim.state.nanobotPhase).toBe("idle");
  });

  it("revela DETALLE primero y COLOR recién en la capa 1", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH);
    // Capa 0 (Detalle): COLOR todavía oculto y sin gris.
    expect(h.rec.lastUpdate?.visibleRoles).toEqual([true, false]);
    expect(h.rec.calls).toContain("mesh.grayscale(false)");

    advance(h.sim, DEFAULT_NANOBOT_TIMINGS.layerDuration);
    expect(h.rec.lastUpdate?.visibleRoles).toEqual([true, true]);
    expect(h.rec.calls).toContain("mesh.grayscale(true)");
  });

  it("al asentarse reporta la duración total de la construcción", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(h.sim.state.nanobotPhase).toBe("settled");
    expect(h.rec.formationSettledMs).toHaveLength(1);
    expect(h.rec.formationSettledMs[0]).toBeGreaterThan(0);
  });

  it("una vez asentado no vuelve a tocar el buffer de instancias", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + NANOBOT_FULL);
    h.rec.calls.length = 0;
    advance(h.sim, 1);
    expect(h.rec.calls.filter((c) => c.startsWith("mesh.update"))).toHaveLength(0);
  });
});

describe("volver al núcleo", () => {
  it("repliega ambas poblaciones y al terminar vuelve a reposo", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();
    expect(sim.state.nanobotPhase).toBe("retracting");
    expect(sim.state.microbotPhase).toBe("retracting");

    rec.calls.length = 0;
    advance(sim, 20);
    expect(sim.state.nanobotPhase).toBe("idle");
    expect(sim.state.microbotPhase).toBe("hidden");
    // El reset de fin de repliegue: ocultar, rehacer targets de reposo y
    // reaplicar parámetros. Si faltara applyParams, el seek quedaría mal y
    // la física de reposo sería sutilmente distinta.
    expect(rec.calls).toContain("mesh.setVisible(false)");
    expect(rec.calls).toContain("swarm.setAgentTargets");
    expect(rec.calls).toContain("swarm.setParams");
  });

  it("estando ya en reposo es un no-op seguro", () => {
    const { sim } = makeSim();
    expect(() => sim.returnToCore()).not.toThrow();
    expect(sim.state.nanobotPhase).toBe("idle");
    expect(sim.state.microbotPhase).toBe("hidden");
  });
});

describe("cambiar la cantidad de Nanobots", () => {
  it("en reposo se aplica en el acto", () => {
    const { sim, rec } = makeSim();
    sim.setNanobotCount(900);
    expect(rec.calls).toContain("swarm.init(900)");
    expect(rec.calls).toContain("mesh.setCount(900)");
  });

  it("durante un repliegue se DIFIERE y se aplica al terminar", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();

    rec.calls.length = 0;
    sim.setNanobotCount(1500);
    // Nada todavía: reasignar el buffer de Wasm a mitad del repliegue
    // dejaría Wasm y los arrays de JS con tamaños distintos.
    expect(rec.calls.filter((c) => c.startsWith("swarm.init"))).toHaveLength(0);

    advance(sim, 20);
    expect(rec.calls).toContain("swarm.init(1500)");
  });

  it("con una figura asentada, rehace la formación al nuevo tamaño", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");

    sim.setNanobotCount(1200);
    expect(sim.state.nanobotPhase).toBe("settled");
    expect(sim.state.nanobotAnimCount).toBe(1200);
    // Los roles que llegan al mesh son los de la formación NUEVA: si
    // startFormation copiara en un array pre-dimensionado en vez de
    // re-apuntar al de la formación, acá seguiría viéndose el tamaño viejo.
    expect(rec.lastUpdate?.roles.length).toBe(1200);
    expect(rec.lastUpdate?.count).toBe(1200);
  });
});

describe("interrumpir un repliegue con una figura nueva", () => {
  it("retoma el lanzamiento desde donde quedó, sin saltar al núcleo", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH);
    sim.returnToCore();
    advance(sim, 0.5); // repliegue a mitad de camino
    const elapsedAlInterrumpir = sim.state.microbotElapsed;
    expect(elapsedAlInterrumpir).toBeGreaterThan(0);
    expect(elapsedAlInterrumpir).toBeLessThan(MICROBOT_EXO_DURATION);

    sim.formShape("esfera", [{ color: 0x00ff00, weight: 1 }]);
    expect(sim.state.microbotPhase).toBe("launching");
    // El progreso se conserva: resetear a 0 acá teletransportaba todo el
    // exoesqueleto al núcleo de golpe.
    expect(sim.state.microbotElapsed).toBeCloseTo(elapsedAlInterrumpir, 6);
  });

  it("empezar de cero (no desde un repliegue) sí arranca en 0", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(sim.state.microbotElapsed).toBe(0);
  });

  it("pedir otra figura mientras se forma reemplaza a la anterior", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.5);
    expect(sim.state.nanobotPhase).toBe("forming");

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    expect(sim.state.currentShapeName).toBe("estrella");
    expect(sim.state.nanobotPhase).toBe("idle"); // vuelve a esperar al exoesqueleto
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
  });
});

describe("cantidad de Microbots", () => {
  it("se acota al techo", () => {
    const { sim } = makeSim();
    sim.setMicrobotCount(999999);
    expect(sim.state.microbotCount).toBe(60000);
  });

  it("cambiarla con el exoesqueleto oculto no redibuja nada", () => {
    const { sim, rec } = makeSim();
    rec.calls.length = 0;
    sim.setMicrobotCount(500);
    expect(rec.calls.filter((c) => c === "micro.update")).toHaveLength(0);
  });
});

describe("robustez", () => {
  it("un nombre de figura inexistente no rompe ni deja la simulación trabada", () => {
    const { sim } = makeSim();
    sim.formShape("no-existe-123", [{ color: 0xff0000, weight: 1 }]);
    expect(() => advance(sim, FULL_LAUNCH + 5)).not.toThrow();
    // La máquina de fases avanza igual (no se traba), simplemente no hay
    // nada que dibujar: renderNanobotsAt sale temprano sin formación.
    expect(sim.state.nanobotPhase).toBe("settled");
    sim.returnToCore();
    expect(() => advance(sim, 20)).not.toThrow();
    expect(sim.state.nanobotPhase).toBe("idle");
  });

  it("con 0 nanobots no explota", () => {
    const { sim } = makeSim({ count: 0 });
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(() => advance(sim, FULL_LAUNCH + 10)).not.toThrow();
  });
});

// Fase 28: el desglose por estado es lo que hace que el AgentStore NO sea
// decorativo — el panel lo muestra en vivo. Estos tests afirman que de
// verdad evoluciona con la animación, no que exista el campo.
function total(counts: Uint32Array): number {
  let sum = 0;
  for (let i = 0; i < counts.length; i++) sum += counts[i];
  return sum;
}

describe("desglose por estado (AgentStore)", () => {

  it("en reposo todos los agentes están en IDLE", () => {
    const { sim, settings } = makeSim();
    sim.step(0.1);
    const counts = sim.state.stateCounts;
    expect(counts[AGENT_STATE.IDLE]).toBe(settings.count);
  });

  it("al arrancar la formación todos están en el núcleo, no asentados", () => {
    const { sim, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    // Los nanobots esperan al exoesqueleto: todavía no voló ninguno.
    advance(sim, FULL_LAUNCH);
    const counts = sim.state.stateCounts;
    expect(counts[AGENT_STATE.CORE] + counts[AGENT_STATE.TRAVELING]).toBe(settings.count);
    expect(counts[AGENT_STATE.ATTACHED]).toBe(0);
  });

  it("a mitad de la formación hay agentes en vuelo Y agentes ya asentados", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 1.5);
    const counts = sim.state.stateCounts;
    const enVuelo = counts[AGENT_STATE.TRAVELING] + counts[AGENT_STATE.ASSEMBLING];
    expect(enVuelo).toBeGreaterThan(0);
    expect(counts[AGENT_STATE.ATTACHED]).toBeGreaterThan(0);
  });

  it("al terminar la formación TODOS quedan asentados", () => {
    const { sim, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
    expect(sim.state.stateCounts[AGENT_STATE.ATTACHED]).toBe(settings.count);
  });

  it("durante el repliegue los agentes en vuelo cuentan como RETURNING, no TRAVELING", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();
    // FASE 42: el repliegue ya no arranca moviendo gente. Primero el
    // material se revierte a agentes (el reloj baja por la cola de
    // material, donde nadie se mueve) y RECIÉN AHÍ empieza la espiral —
    // que es la secuencia que pide la spec §22. Por eso hay que avanzar
    // más allá de esa cola para ver a alguien volviendo.
    advance(sim, 6);
    const counts = sim.state.stateCounts;
    expect(counts[AGENT_STATE.RETURNING]).toBeGreaterThan(0);
    expect(counts[AGENT_STATE.TRAVELING]).toBe(0);
  });

  it("al empezar el repliegue nadie se mueve todavía: primero se revierte el material", () => {
    // El contrapunto del test de arriba, y la razón por la que hizo falta
    // cambiarlo: durante la cola de material el objeto se queda ENTERO en
    // su lugar mientras el material vuelve a ser agentes.
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();
    advance(sim, 0.4);
    const counts = sim.state.stateCounts;
    expect(counts[AGENT_STATE.ATTACHED]).toBe(sim.state.nanobotAnimCount);
    expect(counts[AGENT_STATE.RETURNING]).toBe(0);
  });

  it("terminado el repliegue vuelven todos a IDLE", () => {
    const { sim, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();
    advance(sim, 20);
    expect(sim.state.nanobotPhase).toBe("idle");
    expect(sim.state.stateCounts[AGENT_STATE.IDLE]).toBe(settings.count);
  });

  it("el desglose suma la cantidad ANIMADA, no la capacidad del buffer", () => {
    // 500 primero y 120 después: el buffer de estado se dimensionó para
    // 500 y no se encoge. Si countByState recorriera el buffer entero en
    // vez de los agentes activos, la suma daría 500.
    const { sim } = makeSim({ count: 500 });
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(total(sim.state.stateCounts)).toBe(500);

    sim.returnToCore();
    advance(sim, 20);
    sim.setNanobotCount(120);
    advance(sim, 0.2);
    expect(total(sim.state.stateCounts)).toBe(120);
  });
});

// Fase 29: la cola de tareas contra la máquina de estados real. Lo que se
// afirma acá no es que el director exista, sino que GOBIERNA la secuencia:
// el relleno espera al exoesqueleto, las olas se cumplen en orden, y el
// repliegue cancela lo que quedaba.
describe("cola de tareas (SwarmDirector)", () => {
  it("en reposo no hay tareas", () => {
    const { sim } = makeSim();
    sim.step(0.1);
    expect(sim.director.tasks).toHaveLength(0);
  });

  it("pedir una figura encola primero el exoesqueleto, todavía sin las capas", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    // Las olas de color no se conocen hasta que la forma se resuelve, y eso
    // pasa recién cuando el exoesqueleto termina. "cubo" tiene vigas, así
    // que su exoesqueleto sale en dos grupos (Fase 37).
    expect(sim.director.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.CONNECT_STRUCTURE,
    ]);
    expect(sim.director.tasks.every((t) => t.status === TASK_STATUS.PENDING)).toBe(true);
  });

  it("el exoesqueleto corre y, al cumplirse, aparecen las tareas de las capas", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    // A mitad del lanzamiento van los nodos; cerca del final, las uniones.
    advance(sim, MICROBOT_EXO_DURATION * 0.3);
    expect(sim.director.active?.type).toBe(TASK_TYPE.CREATE_STRUCTURE);
    advance(sim, MICROBOT_EXO_DURATION * 0.5);
    expect(sim.director.active?.type).toBe(TASK_TYPE.CONNECT_STRUCTURE);
    expect(sim.director.isStructureDone()).toBe(false);

    advance(sim, MICROBOT_EXO_DURATION * 0.3);
    expect(sim.director.isStructureDone()).toBe(true);
    const tipos = sim.director.tasks.map((t) => t.type);
    expect(tipos[0]).toBe(TASK_TYPE.CREATE_STRUCTURE);
    expect(tipos).toContain(TASK_TYPE.FILL_STRUCTURE);
    expect(tipos).toContain(TASK_TYPE.APPLY_COLOR);
  });

  it("las tareas se cumplen en orden y al asentarse no queda ninguna corriendo", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.3);
    expect(sim.director.active?.type).toBe(TASK_TYPE.FILL_STRUCTURE);

    // Los Material Bots cubriendo la superficie: siguen siendo bots, el
    // material todavía no se aplicó.
    advance(sim, DEFAULT_NANOBOT_TIMINGS.layerDuration);
    expect(sim.director.active?.type).toBe(TASK_TYPE.SPREAD_MATERIAL);

    // Y recién después de asentarse (0,45 s) y activarse (0,9 s), la
    // primera tanda. El reloj va en 2,3: hay que pasar los 5,35 s en que
    // arranca (2 capas de vuelo = 4 s, más las dos etapas de arriba).
    advance(sim, 3.5);
    expect(sim.director.active?.type).toBe(TASK_TYPE.APPLY_COLOR);

    advance(sim, NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
    expect(sim.director.active).toBeNull();
    expect(sim.director.tasks.every((t) => t.status === TASK_STATUS.DONE)).toBe(true);
  });

  it("volver al núcleo cancela lo que quedaba y encola el repliegue", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.3); // relleno en curso, olas pendientes
    sim.returnToCore();

    const cancelled = sim.director.tasks.filter((t) => t.status === TASK_STATUS.CANCELLED);
    expect(cancelled.length).toBeGreaterThan(0);
    expect(sim.director.tasks[sim.director.tasks.length - 1].type).toBe(TASK_TYPE.RETURN_TO_CORE);

    advance(sim, 20);
    expect(sim.state.nanobotPhase).toBe("idle");
    expect(sim.director.active).toBeNull();
  });

  it("formar otra figura sin volver al núcleo reemplaza la cola entera", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    const idsViejos = sim.director.tasks.map((t) => t.id);

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    const idsNuevos = sim.director.tasks.map((t) => t.id);
    expect(idsNuevos.some((id) => idsViejos.includes(id))).toBe(false);
  });

  it("describe() sigue el avance real de la formación", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(sim.director.describe()).toEqual(["exoesqueleto: pending", "uniones: pending"]);

    advance(sim, FULL_LAUNCH + 0.3);
    const d = sim.director.describe();
    expect(d[0]).toBe("exoesqueleto: done");
    expect(d[1]).toBe("uniones: done");
    expect(d[2]).toBe("relleno: running");
  });
});

// Fase 30: la métrica de cobertura. Lo que se afirma acá no es que el
// campo exista, sino que MIDE algo: más nanobots tienen que cubrir más
// volumen de la misma figura. Si diera un número fijo, estos tests lo
// dicen.
describe("cobertura de la figura (VoxelGrid)", () => {
  it("en reposo no hay cobertura que informar", () => {
    const { sim } = makeSim();
    sim.step(0.1);
    expect(sim.state.coverage).toBeNull();
  });

  it("formar una figura calcula la cobertura", () => {
    const { sim } = makeSim({ count: 2000 });
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.2);
    const c = sim.state.coverage;
    expect(c).not.toBeNull();
    expect(c!.total).toBeGreaterThan(0);
    expect(c!.covered).toBeGreaterThan(0);
    expect(c!.fraction).toBeGreaterThan(0);
    expect(c!.fraction).toBeLessThanOrEqual(1);
  });

  it("MÁS nanobots cubren MÁS: la métrica responde a la cantidad", () => {
    const pocos = makeSim({ count: 300 });
    pocos.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(pocos.sim, FULL_LAUNCH + 0.2);

    const muchos = makeSim({ count: 8000 });
    muchos.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(muchos.sim, FULL_LAUNCH + 0.2);

    expect(muchos.sim.state.coverage!.fraction).toBeGreaterThan(pocos.sim.state.coverage!.fraction);
  });

  it("la figura de referencia es la misma sin importar cuántos agentes haya", () => {
    // `total` describe la FIGURA, no el enjambre: si cambiara con el
    // conteo, comparar cobertura entre dos cantidades no querría decir
    // nada.
    const a = makeSim({ count: 300 });
    a.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(a.sim, FULL_LAUNCH + 0.2);

    const b = makeSim({ count: 8000 });
    b.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(b.sim, FULL_LAUNCH + 0.2);

    expect(b.sim.state.coverage!.total).toBe(a.sim.state.coverage!.total);
  });

  it("volver al núcleo borra la cobertura: ya no hay figura que medir", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.coverage).not.toBeNull();

    sim.returnToCore();
    advance(sim, 20);
    expect(sim.state.coverage).toBeNull();
  });

  it("una forma desconocida no rompe nada: cobertura null", () => {
    const { sim } = makeSim();
    sim.formShape("no-existe-123", [{ color: 0xff0000, weight: 1 }]);
    expect(() => advance(sim, FULL_LAUNCH + 5)).not.toThrow();
    expect(sim.state.coverage).toBeNull();
  });
});

// Fase 30b: morph directo. El usuario lo eligió como comportamiento por
// defecto: al pedir otra figura, los agentes viajan desde donde están en
// vez de volver al reactor y rearrancar.
describe("morph directo", () => {
  const CORE: readonly [number, number, number] = [-8, 8, -8];

  function enElNucleo(pos: Float32Array, count: number): number {
    let n = 0;
    for (let i = 0; i < count; i++) {
      if (pos[i * 3] === CORE[0] && pos[i * 3 + 1] === CORE[1] && pos[i * 3 + 2] === CORE[2]) n++;
    }
    return n;
  }

  it("desde el REPOSO los agentes salen del núcleo (comportamiento de siempre)", () => {
    const { sim, rec, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.1);
    // Las capas que todavía no fueron reveladas esperan dentro del núcleo.
    expect(enElNucleo(rec.lastPositions!, settings.count)).toBeGreaterThan(0);
  });

  it("pedir otra figura SIN volver al núcleo no manda a nadie de vuelta al reactor", () => {
    const { sim, rec, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.1);
    // Antes del morph, las capas no reveladas se teletransportaban al
    // reactor y la figura anterior desaparecía de golpe.
    expect(enElNucleo(rec.lastPositions!, settings.count)).toBe(0);
  });

  it("los agentes arrancan CERCA de donde estaban, no en cualquier lado", () => {
    const { sim, rec, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    const antes = rec.lastPositions!.slice();

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.05);
    const despues = rec.lastPositions!;

    // Cada posición nueva tiene que coincidir con ALGUNA vieja (recién
    // arrancado el morph casi nadie se movió todavía). Se compara contra
    // el conjunto, no índice a índice: la correspondencia por vóxel
    // reasigna qué agente va a qué destino.
    const viejas = new Set<string>();
    for (let i = 0; i < settings.count; i++) {
      viejas.add(`${antes[i * 3].toFixed(2)},${antes[i * 3 + 1].toFixed(2)},${antes[i * 3 + 2].toFixed(2)}`);
    }
    let coinciden = 0;
    for (let i = 0; i < settings.count; i++) {
      const k = `${despues[i * 3].toFixed(2)},${despues[i * 3 + 1].toFixed(2)},${despues[i * 3 + 2].toFixed(2)}`;
      if (viejas.has(k)) coinciden++;
    }
    expect(coinciden / settings.count).toBeGreaterThan(0.8);
  });

  it("tras volver al núcleo, la figura siguiente vuelve a salir del reactor", () => {
    const { sim, rec, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.returnToCore();
    advance(sim, 20);
    expect(sim.state.nanobotPhase).toBe("idle");

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, FULL_LAUNCH + 0.1);
    expect(enElNucleo(rec.lastPositions!, settings.count)).toBeGreaterThan(0);
  });

  it("el morph termina igual: todos asentados en la figura nueva", () => {
    const { sim, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
    expect(sim.state.stateCounts[AGENT_STATE.ATTACHED]).toBe(settings.count);
  });
});

// Este bloque existe por un fallo que los tests NO detectaron y sí se vio
// en pantalla: al pedir la figura nueva, la malla se ocultaba durante los
// ~2 s del relanzamiento del exoesqueleto y la figura anterior
// DESAPARECÍA, quedando sólo el reactor. Los tests de morph miraban las
// posiciones al arrancar la animación, no la visibilidad de la ventana de
// espera. Un morph que hace desaparecer la figura no es un morph.
describe("morph: la figura anterior no desaparece mientras espera", () => {
  it("NO se oculta la malla al pedir otra figura sin volver al núcleo", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);

    rec.calls.length = 0;
    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, MICROBOT_EXO_DURATION * 0.5);

    expect(rec.calls).not.toContain("mesh.setVisible(false)");
  });

  it("la sigue dibujando durante la espera, con la figura VIEJA", () => {
    const { sim, rec, settings } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    const antes = rec.lastPositions!.slice();

    sim.formShape("estrella", [{ color: 0x00ff00, weight: 1 }]);
    advance(sim, MICROBOT_EXO_DURATION * 0.5);

    // Se sigue dibujando...
    expect(rec.lastPositions).not.toBeNull();
    expect(rec.lastUpdate!.count).toBe(settings.count);
    // ...y quieta, exactamente donde estaba.
    for (let i = 0; i < 30; i++) expect(rec.lastPositions![i]).toBeCloseTo(antes[i], 5);
  });

  it("desde el REPOSO sí se oculta: no hay figura anterior que preservar", () => {
    const { sim, rec } = makeSim();
    rec.calls.length = 0;
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(rec.calls).toContain("mesh.setVisible(false)");
  });

  it("tras volver al núcleo se vuelve a dibujar el enjambre en reposo, no la figura retenida", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + NANOBOT_FULL);
    const figura = rec.lastPositions!.slice();
    sim.returnToCore();
    advance(sim, 20);

    advance(sim, 1);
    // En reposo la malla SÍ se sigue actualizando (con el enjambre en
    // descanso, oculto). Lo que no puede pasar es que siga mostrando la
    // figura vieja congelada.
    expect(rec.calls).toContain("mesh.setVisible(false)");
    let iguales = 0;
    for (let i = 0; i < 30; i++) if (rec.lastPositions![i] === figura[i]) iguales++;
    expect(iguales).toBeLessThan(30);
  });
});

// Fase 36: el núcleo parpadea y toma el color de cada ola al desplegarla.
describe("parpadeo del núcleo (Material Bots)", () => {
  function makeSimConReactor(settings?: Partial<SimSettings>) {
    const pulses: number[] = [];
    let resets = 0;
    const h = makeSim(settings, { pulseColor: (c) => pulses.push(c), resetColor: () => { resets++; } });
    return { ...h, pulses, resets: () => resets };
  }

  it("en reposo no parpadea", () => {
    const h = makeSimConReactor();
    advance(h.sim, 1);
    expect(h.pulses).toHaveLength(0);
  });

  it("no parpadea mientras los bots todavía están cubriendo la superficie", () => {
    // FASE 42: la ventana de "sin parpadeo" se alargó. Antes terminaba al
    // acabar el relleno; ahora incluye el vuelo de los Material Bots, su
    // asentamiento y su activación — todo ese rato se ven BOTS, no
    // material, así que el núcleo no tiene nada que entregar todavía.
    const h = makeSimConReactor();
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 2);
    expect(h.pulses).toHaveLength(0);
  });

  it("parpadea al entrar la primera tanda de material, con SU color", () => {
    const h = makeSimConReactor();
    h.sim.formShape("cubo", [{ color: 0x123456, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + NANOBOT_FULL);
    expect(h.pulses).toContain(0x123456);
  });

  it("parpadea UNA vez por entrega, no cada cuadro", () => {
    // El parpadeo dura casi un segundo; relanzarlo 60 veces por segundo lo
    // dejaría clavado en el primer destello.
    //
    // Fase 44: las entregas son la ACTIVACIÓN más una por tanda. Antes el
    // primer destello caía recién con la primera tanda —el último tramo
    // de una formación de ~12 s— y no se llegaba a ver.
    const h = makeSimConReactor();
    h.sim.formShape("cubo", [{ color: 0x111111, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + NANOBOT_FULL);
    const tandas = h.sim.director.tasks.filter((t) => t.type === TASK_TYPE.APPLY_COLOR).length;
    expect(h.pulses.length).toBeLessThanOrEqual(tandas + 1);
    expect(h.pulses.length).toBeGreaterThan(0);
  });

  it("el primer destello llega con la ACTIVACIÓN, antes de que aparezca el material", () => {
    // La razón del cambio: el núcleo entrega el material cuando la red se
    // enciende, no cuando el material ya está puesto.
    const h = makeSimConReactor();
    h.sim.formShape("cubo", [{ color: 0x123456, weight: 1 }]);
    // Vuelo (2 capas x 2 s) + asentamiento (0,45 s) + un poco de la
    // activación: todavía no empezó a aplicarse nada.
    advance(h.sim, FULL_LAUNCH + 4.7);
    expect(h.sim.state.materialPhase).toBe(MATERIAL_PHASE.ACTIVATION);
    expect(h.pulses.length).toBeGreaterThan(0);
  });

  it("vuelve al azul de identidad al volver al núcleo", () => {
    const h = makeSimConReactor();
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + NANOBOT_FULL);
    const antes = h.resets();
    h.sim.returnToCore();
    advance(h.sim, 20);
    expect(h.resets()).toBeGreaterThan(antes);
  });

  it("sin núcleo inyectado no se rompe nada", () => {
    // El reactor es opcional para que la simulación siga siendo testeable
    // sin three.js.
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    expect(() => advance(sim, FULL_LAUNCH + NANOBOT_FULL)).not.toThrow();
  });
});

// Fase 37. El pedido fue estético y concreto: que el enjambre no salga
// todo junto, sino un grupo y después otro. Acá se afirma sobre las
// posiciones reales, no sobre la cola de tareas: la cola podría decir
// cualquier cosa mientras la pantalla muestra un solo bulto.
describe("el exoesqueleto sale por grupos, no todo junto", () => {
  const CORE: readonly [number, number, number] = [-8, 8, -8];

  /** Distancia máxima al núcleo dentro de un grupo (0 = ninguno salió). */
  function maxDistancia(rec: Recorded, quiero: 0 | 1): number {
    const m = rec.lastMicro!;
    let max = 0;
    for (let i = 0; i < m.count; i++) {
      if ((m.isBeam[i] ? 1 : 0) !== quiero) continue;
      // Los nodos viven en `points`; las vigas, en el primer extremo de su span.
      const base = quiero === 0 ? m.points[i * 3 + 0] : m.spans[i * 6 + 0];
      const y = quiero === 0 ? m.points[i * 3 + 1] : m.spans[i * 6 + 1];
      const z = quiero === 0 ? m.points[i * 3 + 2] : m.spans[i * 6 + 2];
      max = Math.max(max, Math.hypot(base - CORE[0], y - CORE[1], z - CORE[2]));
    }
    return max;
  }

  it("a un tercio del lanzamiento los nodos ya salieron y las vigas siguen en el núcleo", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, MICROBOT_EXO_DURATION * 0.3);

    const nodos = maxDistancia(rec, 0);
    const vigas = maxDistancia(rec, 1);
    expect(nodos).toBeGreaterThan(2);
    // Antes de la Fase 37 esto daba lo mismo que `nodos`: un único
    // progreso compartido por las dos poblaciones.
    expect(vigas).toBeLessThan(nodos * 0.25);
  });

  it("más tarde las vigas también salen y al final los dos grupos están afuera", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, MICROBOT_EXO_DURATION * 0.3);
    const vigasTemprano = maxDistancia(rec, 1);

    advance(sim, MICROBOT_EXO_DURATION * 0.5);
    const vigasTarde = maxDistancia(rec, 1);
    expect(vigasTarde).toBeGreaterThan(vigasTemprano + 2);

    advance(sim, MICROBOT_EXO_DURATION * 0.3);
    expect(maxDistancia(rec, 0)).toBeGreaterThan(2);
    expect(maxDistancia(rec, 1)).toBeGreaterThan(2);
  });

  it("una figura sin vigas sale en un solo grupo, sin media salida vacía", () => {
    const { sim, rec } = makeSim();
    // Las humanoides usan hueso macizo: buildExoskeleton no genera vigas.
    sim.formShape("cabeza", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, MICROBOT_EXO_DURATION * 0.3);

    expect(rec.lastMicro!.isBeam.some((b) => b === 1)).toBe(false);
    expect(sim.director.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE]);
    // Con dos grupos sobre una figura sin vigas, a esta altura el único
    // grupo que existe recién estaría arrancando.
    expect(maxDistancia(rec, 0)).toBeGreaterThan(2);
  });

  it("el relleno de Nanobots no arranca hasta que los DOS grupos terminaron", () => {
    const { sim } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    // Justo después de que los nodos se cumplen, con las vigas en vuelo.
    advance(sim, MICROBOT_EXO_DURATION * 0.8);
    expect(sim.director.active?.type).toBe(TASK_TYPE.CONNECT_STRUCTURE);
    expect(sim.state.nanobotPhase).toBe("idle");

    advance(sim, MICROBOT_EXO_DURATION * 0.3);
    expect(sim.state.nanobotPhase).toBe("forming");
  });
});

// --- Fase 45: elegir de qué está hecho el objeto ---

describe("material elegido", () => {
  const HUESO = resolveMaterial("hueso")!.definition;

  function formarYAsentar(sim: Simulation): void {
    sim.formShape("cubo", [{ color: 0xd02020, weight: 1 }]);
    advance(sim, FULL_LAUNCH);
    advance(sim, NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
  }

  it("sin figura, se guarda y se aplica a la que se forme después", () => {
    const { sim } = makeSim({ count: 400 });
    sim.setMaterial(HUESO);
    expect(sim.chosenMaterial?.id).toBe("hueso");
    formarYAsentar(sim);
    expect(sim.state.materialMap?.source).toBe(MATERIAL_SOURCE.CHOSEN);
    expect(sim.state.materialMap?.palette).toEqual([HUESO.color]);
  });

  // EL COMPORTAMIENTO QUE HACE QUE SE VEA: con la figura ya asentada, el
  // cambio de material no es instantáneo — rebobina hasta el final del
  // vuelo para que se vuelva a ver el parpadeo y el derrame sobre la
  // figura que ya está en pantalla.
  it("con la figura asentada, REBOBINA la transformación en vez de cambiar el color de golpe", () => {
    const { sim } = makeSim({ count: 400 });
    formarYAsentar(sim);
    sim.setMaterial(HUESO);
    expect(sim.state.nanobotPhase).toBe("forming");
    expect(sim.state.materialPhase).not.toBe(MATERIAL_PHASE.COMPLETE);
    // Y llega sola al final, sin volver a volar.
    advance(sim, NANOBOT_FULL);
    expect(sim.state.nanobotPhase).toBe("settled");
    expect(sim.state.materialPhase).toBe(MATERIAL_PHASE.COMPLETE);
  });

  // ...pero los bots NO se mueven: al rebobinar al final del vuelo ya
  // están en su destino. Si saltaran, se vería un teletransporte.
  it("al rebobinar, los agentes se quedan donde están", () => {
    const { sim, rec } = makeSim({ count: 400 });
    formarYAsentar(sim);
    const antes = rec.lastPositions!.slice();
    sim.setMaterial(HUESO);
    sim.step(0.016);
    const despues = rec.lastPositions!;
    let maxSalto = 0;
    for (let i = 0; i < antes.length; i++) maxSalto = Math.max(maxSalto, Math.abs(antes[i] - despues[i]));
    expect(maxSalto).toBeLessThan(0.05);
    // Y la capa de material sigue VISIBLE: si el rebobinado cayera en un
    // instante donde todavía no está revelada, la figura parpadearía
    // perdiendo tres cuartos de sus agentes por un cuadro.
    expect(rec.lastUpdate?.visibleRoles[1]).toBe(true);
  });

  // LO QUE LA PANTALLA ENCONTRÓ Y LOS TESTS NO: cambiar el material
  // reconstruye el mapa, y el primer intento reusó `adoptFormation` para
  // meterlo en el store. Eso EMPIEZA una formación — manda a todos los
  // agentes al núcleo y los vuelve a marcar Nanobot— así que el panel
  // pasaba a decir "3.000 Nanobot, 0 Material Bot" sobre una figura que
  // estaba ahí, terminada, hecha de material.
  it("cambiar el material NO deshace el tipo ni el estado de los agentes", () => {
    const { sim } = makeSim({ count: 400 });
    formarYAsentar(sim);
    const tiposAntes = Array.from(sim.state.typeCounts);
    const estadosAntes = Array.from(sim.state.stateCounts);
    expect(tiposAntes[BOT_TYPE.MATERIAL]).toBeGreaterThan(0);

    sim.setMaterial(HUESO);

    expect(Array.from(sim.state.typeCounts)).toEqual(tiposAntes);
    expect(Array.from(sim.state.stateCounts)).toEqual(estadosAntes);
  });

  // ...y sin embargo las regiones SÍ tienen que quedar actualizadas: son
  // las del mapa nuevo, y el inspector las lee del store.
  it("pero las regiones del store SÍ pasan a ser las del mapa nuevo", () => {
    const { sim } = makeSim({ count: 400 });
    formarYAsentar(sim);
    sim.setMaterial(HUESO);
    expect(sim.agents.region).toBe(sim.state.materialMap!.region);
  });

  it("volver a null devuelve el color de la figura", () => {
    const { sim } = makeSim({ count: 400 });
    sim.setMaterial(HUESO);
    formarYAsentar(sim);
    sim.setMaterial(null);
    expect(sim.chosenMaterial).toBeNull();
    expect(sim.state.materialMap?.source).not.toBe(MATERIAL_SOURCE.CHOSEN);
  });

  it("elegir material sin figura no dibuja nada ni rompe", () => {
    const { sim, rec } = makeSim({ count: 400 });
    rec.calls.length = 0;
    sim.setMaterial(HUESO);
    expect(rec.calls).toEqual([]);
    expect(sim.state.materialMap).toBeNull();
  });
});
