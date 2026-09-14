import { describe, expect, it } from "vitest";
import {
  createSwarmDirector,
  TASK_STATUS,
  TASK_TYPE,
  type SwarmDirector,
} from "./director";
import { layerIndexAt } from "../core/kinematics";
import { taskExecutor, TASK_EXECUTOR } from "./director";
import { BOT_TYPE } from "./bot-types";

const EXO = 2.2;
const LAYER = 2.0;

/** La secuencia completa, como la arma la simulación en dos momentos. */
function planned(layerCount: number): SwarmDirector {
  const d = createSwarmDirector();
  d.planStructure(EXO);
  d.planLayers({ layerCount, layerDuration: LAYER });
  return d;
}

describe("cola de tareas", () => {
  it("una formación encola exoesqueleto + relleno + una tarea por ola de color", () => {
    const d = planned(4); // DETALLE + 3 olas
    expect(d.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.FILL_STRUCTURE,
      TASK_TYPE.APPLY_COLOR,
      TASK_TYPE.APPLY_COLOR,
      TASK_TYPE.APPLY_COLOR,
    ]);
    expect(d.tasks.filter((t) => t.type === TASK_TYPE.APPLY_COLOR).map((t) => t.wave)).toEqual([0, 1, 2]);
  });

  it("una figura sin olas de color encola sólo exoesqueleto + relleno", () => {
    const d = planned(1);
    expect(d.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE, TASK_TYPE.FILL_STRUCTURE]);
  });

  it("las ventanas de las capas son contiguas (sin huecos ni solapes)", () => {
    const d = planned(4);
    const nano = d.tasks.filter((t) => t.clock === "nanobot");
    for (let i = 1; i < nano.length; i++) expect(nano[i].t0).toBeCloseTo(nano[i - 1].t1, 10);
    expect(nano[0].t0).toBe(0);
    expect(nano[nano.length - 1].t1).toBeCloseTo(4 * LAYER, 10);
  });

  it("todas arrancan pendientes", () => {
    const d = planned(3);
    expect(d.tasks.every((t) => t.status === TASK_STATUS.PENDING)).toBe(true);
    expect(d.active).toBeNull();
  });

  it("planificar de nuevo descarta la cola anterior", () => {
    const d = planned(4); // 5 tareas
    d.planStructure(EXO);
    d.planLayers({ layerCount: 2, layerDuration: LAYER });
    // layerCount 2 = DETALLE + 1 ola: exoesqueleto + relleno + color 1.
    expect(d.tasks.map((t) => t.type)).toEqual([
      TASK_TYPE.CREATE_STRUCTURE,
      TASK_TYPE.FILL_STRUCTURE,
      TASK_TYPE.APPLY_COLOR,
    ]);
  });
});

describe("la cola se arma en dos momentos", () => {
  it("planStructure sola deja únicamente el exoesqueleto: todavía no se sabe cuántas olas hay", () => {
    const d = createSwarmDirector();
    d.planStructure(EXO);
    expect(d.tasks.map((t) => t.type)).toEqual([TASK_TYPE.CREATE_STRUCTURE]);
  });

  it("planLayers NO pisa el exoesqueleto ya en curso", () => {
    const d = createSwarmDirector();
    d.planStructure(EXO);
    d.sync(EXO, 0); // exoesqueleto cumplido
    expect(d.isStructureDone()).toBe(true);

    d.planLayers({ layerCount: 3, layerDuration: LAYER });
    // Si planLayers reconstruyera la cola entera, el exoesqueleto volvería
    // a PENDING y la simulación no arrancaría nunca el relleno.
    expect(d.isStructureDone()).toBe(true);
    expect(d.tasks).toHaveLength(4);
  });

  it("re-planificar capas (cambio de cantidad a mitad de formación) no duplica tareas", () => {
    const d = planned(3);
    d.planLayers({ layerCount: 3, layerDuration: LAYER });
    expect(d.tasks.filter((t) => t.clock === "nanobot")).toHaveLength(3);
    expect(d.tasks.filter((t) => t.type === TASK_TYPE.CREATE_STRUCTURE)).toHaveLength(1);
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

  it("las olas de color se cumplen una por una, en orden", () => {
    const d = planned(3); // relleno + ola 0 + ola 1
    d.sync(EXO, LAYER * 0.5);
    expect(d.tasks[1].status).toBe(TASK_STATUS.RUNNING); // relleno
    expect(d.tasks[2].status).toBe(TASK_STATUS.PENDING);

    d.sync(EXO, LAYER * 1.5);
    expect(d.tasks[1].status).toBe(TASK_STATUS.DONE);
    expect(d.tasks[2].status).toBe(TASK_STATUS.RUNNING); // ola 0
    expect(d.tasks[3].status).toBe(TASK_STATUS.PENDING);

    d.sync(EXO, LAYER * 3);
    expect(d.tasks.every((t) => t.status === TASK_STATUS.DONE)).toBe(true);
    expect(d.active).toBeNull();
  });

  it("hay UNA sola tarea corriendo a la vez por reloj", () => {
    const d = planned(4);
    for (let e = 0; e <= 4 * LAYER; e += 0.13) {
      d.sync(EXO, e);
      const corriendo = d.tasks.filter((t) => t.status === TASK_STATUS.RUNNING);
      expect(corriendo.length).toBeLessThanOrEqual(1);
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
  it("nanobotLayerIndex da EXACTAMENTE lo mismo que layerIndexAt, en todo el recorrido", () => {
    for (const layerCount of [1, 2, 3, 4, 5]) {
      const d = planned(layerCount);
      const total = layerCount * LAYER;
      for (let e = 0; e <= total + 0.5; e += 0.01) {
        expect(d.nanobotLayerIndex(e)).toBe(layerIndexAt(e, layerCount, LAYER));
      }
    }
  });

  it("también coincide en los bordes exactos de capa", () => {
    const layerCount = 4;
    const d = planned(layerCount);
    for (let k = 0; k <= layerCount; k++) {
      const borde = k * LAYER;
      expect(d.nanobotLayerIndex(borde)).toBe(layerIndexAt(borde, layerCount, LAYER));
    }
  });
});

describe("describe() para el panel", () => {
  it("numera las olas de color desde 1 y muestra el estado de cada tarea", () => {
    const d = planned(3);
    d.sync(EXO, LAYER * 1.5);
    expect(d.describe()).toEqual([
      "exoesqueleto: done",
      "relleno: done",
      "color 1: running",
      "color 2: pending",
    ]);
  });
});

describe("qué tipo de bot ejecuta cada tarea (spec §17)", () => {
  it("la estructura la arman los Microbots", () => {
    expect(taskExecutor(TASK_TYPE.CREATE_STRUCTURE)).toBe(BOT_TYPE.MICROBOT);
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
