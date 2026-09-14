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
import { DEFAULT_NANOBOT_TIMINGS, makeSwirlAxes } from "./kinematics";

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
    revealedColorWaves: number;
  } | null;
  formationSettledMs: number[];
}

function makeSim(settings?: Partial<SimSettings>) {
  const rec: Recorded = { calls: [], lastUpdate: null, formationSettledMs: [] };
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
    updateFromPositions(_p, count, roles, _t, visibleRoles, _w, revealedColorWaves) {
      rec.calls.push(`mesh.update(${count},${revealedColorWaves})`);
      rec.lastUpdate = { count, roles, visibleRoles, revealedColorWaves };
    },
    setVisible(v) { rec.calls.push(`mesh.setVisible(${v})`); },
    setColorClusters() { rec.calls.push("mesh.setColorClusters"); },
    setSkeletonGrayscale(a) { rec.calls.push(`mesh.grayscale(${a})`); },
  };

  const microbotMesh: MicrobotMeshApi = {
    updateFromPositions() { rec.calls.push("micro.update"); },
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
    advance(h.sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
    expect(h.sim.state.nanobotPhase).toBe("settled");
    expect(h.rec.formationSettledMs).toHaveLength(1);
    expect(h.rec.formationSettledMs[0]).toBeGreaterThan(0);
  });

  it("una vez asentado no vuelve a tocar el buffer de instancias", () => {
    h.sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(h.sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
    h.rec.calls.length = 0;
    advance(h.sim, 1);
    expect(h.rec.calls.filter((c) => c.startsWith("mesh.update"))).toHaveLength(0);
  });
});

describe("volver al núcleo", () => {
  it("repliega ambas poblaciones y al terminar vuelve a reposo", () => {
    const { sim, rec } = makeSim();
    sim.formShape("cubo", [{ color: 0xff0000, weight: 1 }]);
    advance(sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
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
    advance(sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
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
    advance(sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
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
    advance(sim, FULL_LAUNCH + DEFAULT_NANOBOT_TIMINGS.layerDuration * 3);
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
