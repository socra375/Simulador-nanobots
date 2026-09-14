// Director de enjambre y cola de tareas (Fase 29).
//
// Hasta acá la secuencia "armar exoesqueleto -> rellenar -> pintar ola 0 ->
// pintar ola 1 -> ..." estaba implícita en aritmética suelta dentro de
// step(): un layerIndex calculado a partir del reloj, y un handoff
// hardcodeado de Microbots a Nanobots. Funcionaba, pero no había forma de
// preguntarle al sistema QUÉ está haciendo, ni de encolar otra cosa.
//
// LA DECISIÓN CENTRAL: las tareas NO tienen reloj propio.
//
// La tentación es darle a cada tarea su propio `elapsed` y hacer que el
// director las avance. Eso habría cambiado el resultado visible: dos
// relojes que arrancan y paran por separado acumulan desfases distintos a
// los del reloj único, y la animación —que está calibrada al milisegundo
// desde la Fase 19— se habría movido.
//
// Acá `nanobotElapsed` y `microbotElapsed` siguen siendo la única línea
// temporal monótona, y cada tarea ocupa una VENTANA [t0, t1] sobre uno de
// esos dos relojes. El director no avanza nada: mira el reloj y deduce qué
// tarea está corriendo. Por eso `nanobotLayerIndex()` da exactamente lo
// mismo que el `layerIndexAt` que había antes — hay un test que lo barre
// valor por valor, justamente porque "es idéntico" es una afirmación que
// hay que probar, no declarar.
//
// QUÉ TIPOS DE TAREA EXISTEN Y POR QUÉ SÓLO ESOS:
//
// Están los cuatro que tienen un handler real hoy. `REPAIR`, `TRANSFORM`,
// `DISASSEMBLE` y `APPLY_MATERIAL` NO están declarados: un tipo de tarea
// sin nada que lo ejecute es una lista de enums que finge un sistema. Los
// cuatro entran sin reescribir esto cuando lleguen sus consumidores,
// porque la ventana sobre el reloj compartido y el `cancel` ya son
// generales.

export const TASK_TYPE = {
  /** Exoesqueleto de Microbots saliendo del núcleo. Reloj: microbot. */
  CREATE_STRUCTURE: "CREATE_STRUCTURE",
  /** Capa de DETALLE de Nanobots (la "carne" sobre el hueso). Reloj: nanobot. */
  FILL_STRUCTURE: "FILL_STRUCTURE",
  /** Una ola de color. Hay una tarea por ola. Reloj: nanobot. */
  APPLY_COLOR: "APPLY_COLOR",
  /** Repliegue completo al núcleo. Recorre los dos relojes hacia atrás. */
  RETURN_TO_CORE: "RETURN_TO_CORE",
} as const;

export type TaskType = (typeof TASK_TYPE)[keyof typeof TASK_TYPE];

export const TASK_STATUS = {
  PENDING: "pending",
  RUNNING: "running",
  DONE: "done",
  CANCELLED: "cancelled",
} as const;

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

/** Cuál de los dos relojes mide el progreso de una tarea. */
export type TaskClock = "microbot" | "nanobot";

export interface Task {
  readonly id: number;
  readonly type: TaskType;
  readonly clock: TaskClock;
  /** Ventana sobre el reloj, en segundos. */
  readonly t0: number;
  readonly t1: number;
  /** Sólo para APPLY_COLOR: qué ola de color pinta. -1 en el resto. */
  readonly wave: number;
  status: TaskStatus;
}

export interface LayerPlanInput {
  /** Capas de Nanobots: 1 (DETALLE) + una por ola de color. */
  layerCount: number;
  /** Duración de cada capa sobre el reloj de Nanobots. */
  layerDuration: number;
}

export interface SwarmDirector {
  readonly tasks: readonly Task[];
  /** La tarea corriendo ahora mismo, o null. */
  readonly active: Task | null;
  /**
   * Arranca una formación nueva: descarta la cola anterior y encola el
   * exoesqueleto. Se llama apenas el usuario pide la figura — en ese
   * momento todavía no se sabe cuántas olas de color va a tener.
   */
  planStructure(exoDuration: number): void;
  /**
   * Encola el relleno y una tarea por ola de color. Se llama cuando la
   * forma ya se resolvió y recién ahí se conoce `layerCount`. Reemplaza
   * las tareas de Nanobots que hubiera (p. ej. si cambió la cantidad de
   * agentes a mitad de formación) y NO toca el exoesqueleto.
   */
  planLayers(plan: LayerPlanInput): void;
  /**
   * Cancela lo pendiente y encola el repliegue. Devuelve la tarea nueva.
   * Las tareas ya cumplidas quedan como DONE: son historial, no se
   * reescriben.
   */
  planReturn(): void;
  /** Vuelve a cero (reposo, sin figura). */
  clear(): void;
  /**
   * Actualiza el estado de cada tarea a partir de los relojes. NO avanza
   * los relojes: los recibe ya avanzados por la simulación.
   */
  sync(microbotElapsed: number, nanobotElapsed: number): void;
  /**
   * Capa de Nanobots activa (0 = DETALLE, 1+ = ola de color). Es lo que la
   * malla usa como `revealedColorWaves`: sale de la cola de tareas, no de
   * una cuenta suelta.
   */
  nanobotLayerIndex(nanobotElapsed: number): number;
  /** ¿Ya terminó el exoesqueleto? Es lo que habilita el relleno. */
  isStructureDone(): boolean;
  /** Resumen corto por tarea, para el panel. */
  describe(): string[];
}

const TASK_LABELS: Record<TaskType, string> = {
  CREATE_STRUCTURE: "exoesqueleto",
  FILL_STRUCTURE: "relleno",
  APPLY_COLOR: "color",
  RETURN_TO_CORE: "repliegue",
};

export function createSwarmDirector(): SwarmDirector {
  let tasks: Task[] = [];
  let nextId = 1;
  // Se guarda del último planFormation: nanobotLayerIndex lo necesita para
  // topar el índice en la última capa, igual que hacía layerIndexAt.
  let layerCount = 1;
  let layerDuration = 1;
  let retracting = false;

  function make(type: TaskType, clock: TaskClock, t0: number, t1: number, wave = -1): Task {
    return { id: nextId++, type, clock, t0, t1, wave, status: TASK_STATUS.PENDING };
  }

  return {
    get tasks() { return tasks; },

    get active() {
      for (const t of tasks) if (t.status === TASK_STATUS.RUNNING) return t;
      return null;
    },

    planStructure(exoDuration): void {
      retracting = false;
      tasks = [make(TASK_TYPE.CREATE_STRUCTURE, "microbot", 0, exoDuration)];
    },

    planLayers(plan): void {
      layerCount = Math.max(1, plan.layerCount);
      layerDuration = plan.layerDuration;
      retracting = false;
      // Se reemplazan SÓLO las tareas del reloj de Nanobots: el
      // exoesqueleto puede estar corriendo o ya cumplido y no se toca.
      tasks = tasks.filter((t) => t.clock !== "nanobot");
      // La capa 0 es el relleno; de ahí en adelante, una ola de color por
      // capa. Las ventanas son contiguas a propósito: así el último agente
      // de una capa llega justo cuando arranca la siguiente, sin salto
      // (ver writeNanobotFrame).
      tasks.push(make(TASK_TYPE.FILL_STRUCTURE, "nanobot", 0, layerDuration));
      for (let w = 0; w < layerCount - 1; w++) {
        tasks.push(
          make(TASK_TYPE.APPLY_COLOR, "nanobot", (w + 1) * layerDuration, (w + 2) * layerDuration, w),
        );
      }
    },

    planReturn(): void {
      retracting = true;
      for (const t of tasks) {
        // Lo que todavía no empezó se cancela; lo que estaba corriendo
        // también (se está deshaciendo). Lo cumplido queda como historial.
        if (t.status === TASK_STATUS.PENDING || t.status === TASK_STATUS.RUNNING) {
          t.status = TASK_STATUS.CANCELLED;
        }
      }
      tasks.push(make(TASK_TYPE.RETURN_TO_CORE, "nanobot", 0, layerCount * layerDuration));
    },

    clear(): void {
      tasks = [];
      retracting = false;
    },

    sync(microbotElapsed, nanobotElapsed): void {
      for (const t of tasks) {
        if (t.status === TASK_STATUS.CANCELLED) continue;
        const elapsed = t.clock === "microbot" ? microbotElapsed : nanobotElapsed;

        if (t.type === TASK_TYPE.RETURN_TO_CORE) {
          // El repliegue corre el reloj hacia ATRÁS: está cumplido cuando
          // los dos relojes volvieron a cero, no cuando pasa un t1.
          t.status =
            nanobotElapsed <= 0 && microbotElapsed <= 0 ? TASK_STATUS.DONE : TASK_STATUS.RUNNING;
          continue;
        }
        if (retracting) continue;

        if (elapsed >= t.t1) t.status = TASK_STATUS.DONE;
        else if (elapsed >= t.t0) t.status = TASK_STATUS.RUNNING;
        else t.status = TASK_STATUS.PENDING;
      }
    },

    nanobotLayerIndex(nanobotElapsed): number {
      // Equivalente exacto al viejo layerIndexAt: la última capa cuyo t0 ya
      // pasó, topada en la última. El test kinematics/director lo barre.
      const raw = Math.floor(nanobotElapsed / layerDuration);
      return Math.min(Math.max(raw, 0), layerCount - 1);
    },

    isStructureDone(): boolean {
      for (const t of tasks) {
        if (t.type === TASK_TYPE.CREATE_STRUCTURE) return t.status === TASK_STATUS.DONE;
      }
      return false;
    },

    describe(): string[] {
      return tasks.map((t) => {
        const label = t.type === TASK_TYPE.APPLY_COLOR ? `${TASK_LABELS[t.type]} ${t.wave + 1}` : TASK_LABELS[t.type];
        return `${label}: ${t.status}`;
      });
    },
  };
}
