import { describe, expect, it } from "vitest";
import {
  createSwarmDirector,
  TASK_STATUS,
  TASK_TYPE,
  type SwarmDirector,
} from "./director";
import { groupWindow, layerIndexAt } from "../core/kinematics";
import { taskExecutor, TASK_EXECUTOR } from "./director";
import { BOT_TYPE } from "./bot-types";

const EXO = 2.2;
const LAYER = 2.0;

/**
 * Exoesqueleto de un solo grupo: la figura no tiene vigas (las humanoides
 * usan hueso macizo), así que no hay tarea de uniones.
 */
const SIN_VIGAS = { exoDuration: EXO, nodeEnd: EXO, beamStart: null };
/**
 * Exoesqueleto en dos grupos, con las MISMAS ventanas que usa la
 * cinemática para escribir las posiciones.
 */
const CON_VIGAS = {
  exoDuration: EXO,
  nodeEnd: groupWindow(0, 2).end * EXO,
  beamStart: groupWindow(1, 2).start * EXO,
};

// Fase 42: la cola de Nanobots dejó de ser "1 relleno + N olas de color".
// Ahora son tres cosas distintas: el relleno, la COBERTURA (los Material
// Bots vuelan, se asientan y se activan, todavía sin material) y una tarea
// por TANDA de activación de regiones. Las ventanas se las pasa la
// simulación desde `planMaterialTimeline` — el director no las recalcula.
const SLOT = 0.8;
const SLOT_STEP = SLOT * 0.75;
/** Segundo en que arranca la primera tanda: vuelo + asentamiento + activación. */
const MATERIAL_START = 2 * LAYER + 0.45 + 0.9;

function materialPlan(slots: number) {
  return {
    start: MATERIAL_START,
    slots,
    slotDuration: SLOT,
    slotStep: SLOT_STEP,
    end: MATERIAL_START + (slots - 1) * SLOT_STEP + SLOT,
  };
}

/** La secuencia completa, como la arma la simulación en dos momentos. */
function planned(slots: number): SwarmDirector {
  const d = createSwarmDirector();
  d.planStructure(SIN_VIGAS);
  d.planLayers({ layerCount: 2, layerDuration: LAYER, material: materialPlan(slots) });
  return d;
}

describe("cola de tareas", () => {
  it("una formación encola exoesqueleto + relleno + cobertura + una tarea por tanda", () => {
    const d = planned(3);
    expect(d.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.FILL_STRUCTURE,
      TASK_TYPE.SPREAD_MATERIAL,
      TASK_TYPE.APPLY_COLOR,
      TASK_TYPE.APPLY_COLOR,
      TASK_TYPE.APPLY_COLOR,
    ]);
    expect(d.tasks.filter((t) => t.type === TASK_TYPE.APPLY_COLOR).map((t) => t.wave)).toEqual([0, 1, 2]);
  });

  it("una figura sin material encola sólo exoesqueleto + relleno", () => {
    const d = createSwarmDirector();
    d.planStructure(SIN_VIGAS);
    d.planLayers({ layerCount: 2, layerDuration: LAYER, material: null });
    expect(d.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE, TASK_TYPE.FILL_STRUCTURE]);
  });

  it("el relleno y la cobertura son contiguos, y la cobertura llega hasta la 1ra tanda", () => {
    // La cobertura NO termina cuando los bots dejan de volar: incluye el
    // asentamiento y el parpadeo, que es el rato en que se ve el objeto
    // cubierto de bots sin material (spec §8). Si terminara antes, la cola
    // diría que ya se está aplicando material cuando todavía no.
    const d = planned(2);
    const fill = d.tasks.find((t) => t.type === TASK_TYPE.FILL_STRUCTURE)!;
    const spread = d.tasks.find((t) => t.type === TASK_TYPE.SPREAD_MATERIAL)!;
    expect(fill.t0).toBe(0);
    expect(fill.t1).toBeCloseTo(LAYER, 10);
    expect(spread.t0).toBeCloseTo(LAYER, 10);
    expect(spread.t1).toBeCloseTo(MATERIAL_START, 10);
  });

  it("las tandas se SOLAPAN, a diferencia de las capas de vuelo", () => {
    // Un solape chico es lo que hace que la transformación se lea como
    // algo que recorre el objeto y no como N animaciones pegadas.
    const d = planned(3);
    const slots = d.tasks.filter((t) => t.type === TASK_TYPE.APPLY_COLOR);
    for (let i = 1; i < slots.length; i++) {
      expect(slots[i].t0).toBeLessThan(slots[i - 1].t1);
      expect(slots[i].t0).toBeGreaterThan(slots[i - 1].t0);
    }
  });

  it("todas arrancan pendientes", () => {
    const d = planned(2);
    expect(d.tasks.every((t) => t.status === TASK_STATUS.PENDING)).toBe(true);
    expect(d.active).toBeNull();
  });

  it("planificar de nuevo descarta la cola anterior", () => {
    const d = planned(3); // 6 tareas
    d.planStructure(SIN_VIGAS);
    d.planLayers({ layerCount: 2, layerDuration: LAYER, material: materialPlan(1) });
    expect(d.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.FILL_STRUCTURE,
      TASK_TYPE.SPREAD_MATERIAL,
      TASK_TYPE.APPLY_COLOR,
    ]);
  });
});

describe("la cola se arma en dos momentos", () => {
  it("planStructure sola deja únicamente el exoesqueleto: todavía no se sabe cuántas regiones hay", () => {
    const d = createSwarmDirector();
    d.planStructure(SIN_VIGAS);
    expect(d.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE]);
  });

  it("planLayers NO pisa el exoesqueleto ya en curso", () => {
    const d = createSwarmDirector();
    d.planStructure(SIN_VIGAS);
    d.sync(EXO, 0); // exoesqueleto cumplido
    expect(d.isStructureDone()).toBe(true);

    d.planLayers({ layerCount: 2, layerDuration: LAYER, material: materialPlan(2) });
    // Si planLayers reconstruyera la cola entera, el exoesqueleto volvería
    // a PENDING y la simulación no arrancaría nunca el relleno.
    expect(d.isStructureDone()).toBe(true);
    expect(d.tasks).toHaveLength(5);
  });

  it("re-planificar capas (cambio de cantidad a mitad de formación) no duplica tareas", () => {
    const d = planned(2);
    d.planLayers({ layerCount: 2, layerDuration: LAYER, material: materialPlan(2) });
    expect(d.tasks.filter((t) => t.clock === "nanobot")).toHaveLength(4);
    expect(d.tasks.filter((t) => t.type === TASK_TYPE.CREATE_STRUCTURE)).toHaveLength(1);
  });
});

// Fase 37: el exoesqueleto dejó de salir de un saque. Los nodos van
// primero y las uniones después, cada grupo con su ventana, y la cola de
// tareas tiene que describir esa secuencia — no seguir diciendo
// "exoesqueleto" como si fuera un solo bulto.
describe("exoesqueleto en dos grupos", () => {
  it("encola nodos y uniones, en ese orden", () => {
    const d = createSwarmDirector();
    d.planStructure(CON_VIGAS);
    expect(d.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.CONNECT_STRUCTURE,
    ]);
    expect(d.tasks.every((t) => t.clock === "microbot")).toBe(true);
  });

  it("las uniones arrancan DESPUÉS de que los nodos están casi puestos, con un solape chico", () => {
    const d = createSwarmDirector();
    d.planStructure(CON_VIGAS);
    const [nodos, uniones] = d.tasks;
    // Si arrancaran en 0 sería el bulto único de antes.
    expect(uniones.t0).toBeGreaterThan(0);
    // Y si arrancaran después del final de los nodos, el enjambre se
    // cortaría en seco entre grupo y grupo.
    expect(uniones.t0).toBeLessThan(nodos.t1);
    // El solape es chico: la mayor parte de cada ventana el grupo está solo.
    expect(nodos.t1 - uniones.t0).toBeLessThan((nodos.t1 - nodos.t0) * 0.25);
    // Las uniones llegan hasta el final del lanzamiento.
    expect(uniones.t1).toBeCloseTo(EXO, 10);
  });

  it("el relleno NO se habilita mientras las uniones siguen saliendo", () => {
    const d = createSwarmDirector();
    d.planStructure(CON_VIGAS);
    const [nodos, uniones] = d.tasks;

    // Nodos ya puestos, uniones a mitad de camino: si isStructureDone()
    // mirara sólo la primera tarea (como antes de la Fase 37), acá daría
    // true y los Nanobots saldrían encima de las vigas en vuelo.
    d.sync((nodos.t1 + uniones.t1) / 2, 0);
    expect(nodos.status).toBe(TASK_STATUS.DONE);
    expect(uniones.status).toBe(TASK_STATUS.RUNNING);
    expect(d.isStructureDone()).toBe(false);

    d.sync(EXO, 0);
    expect(d.isStructureDone()).toBe(true);
  });

  it("sin vigas no encola una tarea de uniones que nadie ejecutaría", () => {
    const d = createSwarmDirector();
    d.planStructure(SIN_VIGAS);
    expect(d.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE]);
    d.sync(EXO, 0);
    expect(d.isStructureDone()).toBe(true);
  });

  it("el panel nombra los dos grupos por separado", () => {
    const d = createSwarmDirector();
    d.planStructure(CON_VIGAS);
    d.sync(EXO, 0);
    expect(d.describe()).toEqual(["exoesqueleto: done", "uniones: done"]);
  });
});

describe("sync contra los relojes", () => {
  it("el exoesqueleto corre con el reloj de Microbots y se cumple al llegar a su fin", () => {
    const d = planned(3);
    d.sync(1.0, 0);
    expect(d.tasks[0].status).toBe(TASK_STATUS.RUNNING);
    expect(d.active?.type).toBe(TASK_TYPE.CREATE_STRUCTURE);
    d.sync(EXO, 0);
    expect(d.tasks[0].status).toBe(TASK_STATUS.DONE);
    expect(d.isStructureDone()).toBe(true);
  });

  it("el relleno no arranca mientras el reloj de Nanobots está en cero", () => {
    const d = planned(3);
    d.sync(1.0, 0);
    // t0 = 0, así que a elapsed 0 ya cuenta como corriendo — pero el
    // reloj de Nanobots no avanza hasta que el exoesqueleto termina, y de
    // eso se encarga la simulación (isStructureDone).
    expect(d.isStructureDone()).toBe(false);
  });

  it("las etapas de Nanobots se cumplen en orden: relleno, cobertura, tandas", () => {
    const d = planned(2);
    d.sync(EXO, LAYER * 0.5);
    expect(d.tasks[1].status).toBe(TASK_STATUS.RUNNING); // relleno
    expect(d.tasks[2].status).toBe(TASK_STATUS.PENDING); // cobertura

    d.sync(EXO, LAYER * 1.5);
    expect(d.tasks[1].status).toBe(TASK_STATUS.DONE);
    expect(d.tasks[2].status).toBe(TASK_STATUS.RUNNING); // cobertura
    expect(d.tasks[3].status).toBe(TASK_STATUS.PENDING); // 1ra tanda

    d.sync(EXO, MATERIAL_START + 0.1);
    expect(d.tasks[2].status).toBe(TASK_STATUS.DONE);
    expect(d.tasks[3].status).toBe(TASK_STATUS.RUNNING);

    d.sync(EXO, materialPlan(2).end + 0.1);
    expect(d.tasks.every((t) => t.status === TASK_STATUS.DONE)).toBe(true);
    expect(d.active).toBeNull();
  });

  it("las etapas de VUELO no se solapan; las TANDAS de material sí, a lo sumo de a dos", () => {
    // Fase 42: el "una sola tarea a la vez" dejó de valer para todo, y el
    // cambio es deliberado. Las tandas se solapan un 25% para que la
    // transformación se lea corrida en vez de a saltos — pero el solape
    // está acotado: con 0,25 nunca puede haber tres encendidas a la vez, y
    // el vuelo sigue siendo estrictamente secuencial.
    const d = planned(4);
    for (let e = 0; e <= materialPlan(4).end + 0.5; e += 0.07) {
      d.sync(EXO, e);
      const corriendo = d.tasks.filter((t) => t.status === TASK_STATUS.RUNNING);
      const vuelo = corriendo.filter(
        (t) => t.type === TASK_TYPE.FILL_STRUCTURE || t.type === TASK_TYPE.SPREAD_MATERIAL,
      );
      const tandas = corriendo.filter((t) => t.type === TASK_TYPE.APPLY_COLOR);
      expect(vuelo.length).toBeLessThanOrEqual(1);
      expect(tandas.length).toBeLessThanOrEqual(2);
      // Y nunca a la vez: mientras se cubre la superficie no se aplica
      // material, que es todo el punto de que sean etapas separadas.
      expect(vuelo.length === 0 || tandas.length === 0).toBe(true);
    }
  });
});

describe("repliegue", () => {
  it("cancela lo pendiente y lo que estaba corriendo, y conserva lo cumplido", () => {
    const d = planned(4);
    d.sync(EXO, LAYER * 1.5); // relleno cumplido, ola 0 corriendo
    d.planReturn();
    expect(d.tasks[0].status).toBe(TASK_STATUS.DONE); // exoesqueleto: historial
    expect(d.tasks[1].status).toBe(TASK_STATUS.DONE); // relleno: historial
    expect(d.tasks[2].status).toBe(TASK_STATUS.CANCELLED); // ola 0: se estaba haciendo
    expect(d.tasks[3].status).toBe(TASK_STATUS.CANCELLED); // ola 1: nunca empezó
    expect(d.tasks[d.tasks.length - 1].type).toBe(TASK_TYPE.RETURN_TO_CORE);
  });

  it("el repliegue se cumple recién cuando los DOS relojes vuelven a cero", () => {
    const d = planned(3);
    d.sync(EXO, LAYER * 3);
    d.planReturn();

    d.sync(EXO, LAYER); // Nanobots replegando, Microbots todavía afuera
    expect(d.active?.type).toBe(TASK_TYPE.RETURN_TO_CORE);

    d.sync(EXO, 0); // Nanobots en el núcleo, Microbots NO
    expect(d.active?.type).toBe(TASK_TYPE.RETURN_TO_CORE);

    d.sync(0, 0);
    expect(d.active).toBeNull();
    expect(d.tasks[d.tasks.length - 1].status).toBe(TASK_STATUS.DONE);
  });

  it("una tarea cancelada no revive aunque el reloj vuelva a pasar por su ventana", () => {
    const d = planned(3);
    // Repliegue pedido a mitad de la ola 0: queda CANCELADA (no cumplida).
    d.sync(EXO, LAYER * 1.5);
    d.planReturn();
    expect(d.tasks[2].status).toBe(TASK_STATUS.CANCELLED);

    // El reloj ahora retrocede y vuelve a pasar por [LAYER, 2*LAYER], la
    // ventana de esa misma ola. Sin el guard de `retracting` la tarea
    // volvería a marcarse RUNNING y el panel diría que se está pintando
    // algo que en realidad se está deshaciendo.
    d.sync(EXO, LAYER * 1.2);
    expect(d.tasks[2].status).toBe(TASK_STATUS.CANCELLED);
    d.sync(EXO, LAYER * 0.5);
    expect(d.tasks[2].status).toBe(TASK_STATUS.CANCELLED);
  });

  it("clear() deja la cola vacía", () => {
    const d = planned(3);
    d.clear();
    expect(d.tasks).toHaveLength(0);
    expect(d.active).toBeNull();
    expect(d.isStructureDone()).toBe(false);
  });
});

// ESTE es el test que justifica la fase entera. El director reemplaza al
// layerIndex que antes se calculaba suelto en step(); si difiere aunque
// sea en un cuadro, el revelado por capas cambia y la animación —
// calibrada desde la Fase 19 — se rompe.
describe("equivalencia con el cálculo anterior", () => {
  // El test original de la Fase 29 barría layerCount de 1 a 5, porque
  // había una capa por ola de color. Desde la Fase 42 el vuelo son SIEMPRE
  // dos capas (relleno + material) y las tandas ya no son capas, así que
  // lo que se sigue afirmando —que el índice de capa sale de la cola de
  // tareas y no de una cuenta suelta paralela— se afirma sobre 2.
  const LAYERS = 2;

  it("nanobotLayerIndex da EXACTAMENTE lo mismo que layerIndexAt, en todo el recorrido", () => {
    const d = planned(3);
    for (let e = 0; e <= LAYERS * LAYER + 0.5; e += 0.01) {
      expect(d.nanobotLayerIndex(e)).toBe(layerIndexAt(e, LAYERS, LAYER));
    }
  });

  it("también coincide en los bordes exactos de capa", () => {
    const d = planned(3);
    for (let k = 0; k <= LAYERS; k++) {
      const borde = k * LAYER;
      expect(d.nanobotLayerIndex(borde)).toBe(layerIndexAt(borde, LAYERS, LAYER));
    }
  });

  it("topa en la capa de material aunque el reloj siga corriendo por las tandas", () => {
    // Durante todo el material el reloj sigue subiendo, pero ya no hay más
    // capas de vuelo: si el índice siguiera creciendo, la malla intentaría
    // revelar un rol que no existe.
    const d = planned(4);
    expect(d.nanobotLayerIndex(materialPlan(4).end)).toBe(1);
  });
});

describe("describe() para el panel", () => {
  it("numera las tandas de material desde 1 y muestra el estado de cada tarea", () => {
    const d = planned(2);
    d.sync(EXO, LAYER * 1.5);
    expect(d.describe()).toEqual([
      "exoesqueleto: done",
      "relleno: done",
      "cobertura: running",
      "material 1: pending",
      "material 2: pending",
    ]);
  });
});

describe("qué tipo de bot ejecuta cada tarea (spec §17)", () => {
  it("la estructura la arman los Microbots", () => {
    expect(taskExecutor(TASK_TYPE.CREATE_STRUCTURE)).toBe(BOT_TYPE.MICROBOT);
  });

  it("las uniones las hacen los Union Bots", () => {
    expect(taskExecutor(TASK_TYPE.CONNECT_STRUCTURE)).toBe(BOT_TYPE.UNION);
  });

  it("el relleno lo hacen los Nanobots", () => {
    expect(taskExecutor(TASK_TYPE.FILL_STRUCTURE)).toBe(BOT_TYPE.NANOBOT);
  });

  it("el color lo aplican los Material Bots", () => {
    expect(taskExecutor(TASK_TYPE.APPLY_COLOR)).toBe(BOT_TYPE.MATERIAL);
  });

  it("TODA tarea existente tiene un tipo asignado", () => {
    // Si alguien agrega un tipo de tarea y se olvida de la tabla, esto lo
    // agarra en vez de dejar un undefined circulando.
    for (const type of Object.values(TASK_TYPE)) {
      expect(taskExecutor(type)).toBeTypeOf("number");
    }
  });

  it("la tabla cubre exactamente los tipos de tarea que existen, ni uno más", () => {
    expect(Object.keys(TASK_EXECUTOR).sort()).toEqual(Object.values(TASK_TYPE).sort());
  });
});
