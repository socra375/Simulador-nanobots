// Selección de nivel de detalle por distancia de cámara (Fase 32).
//
// El nivel es UNO PARA TODA LA MALLA, no uno por instancia. Es la decisión
// que mantiene el instanciado: si cada agente eligiera su propio nivel
// habría que partir la población en tres mallas y reordenar instancias
// cada vez que la cámara se mueve — exactamente el costo que el
// instanciado existe para evitar.
//
// La aproximación funciona porque el enjambre entero cabe en un volumen
// chico comparado con la distancia de cámara: cuando estás lejos, TODOS
// los agentes están lejos.
//
// La histéresis no es un adorno: sin ella, quedarse justo sobre un umbral
// hace que el nivel oscile cuadro a cuadro y la malla parpadee.

import { LOD_LEVEL, LOD_LEVEL_COUNT, type LodLevel } from "./bot-models";

/** Distancia de cámara al centro por debajo de la cual se usa cada nivel. */
export const LOD_THRESHOLDS = {
  /** Más cerca que esto: modelo detallado. */
  near: 14,
  /** Más cerca que esto: hexágono. Más lejos: sólido mínimo. */
  mid: 34,
} as const;

/** Margen de histéresis, en unidades de mundo. */
const HYSTERESIS = 2.5;

export interface LodSelector {
  readonly level: LodLevel;
  /** Devuelve true si el nivel CAMBIÓ (o sea, si hay que reasignar geometría). */
  update(distance: number): boolean;
}

export function createLodSelector(initial: LodLevel = LOD_LEVEL.MID): LodSelector {
  let level: LodLevel = initial;

  return {
    get level() { return level; },
    update(distance): boolean {
      // Los umbrales se corren según de qué lado se viene: para SUBIR de
      // detalle hay que acercarse un poco más que el umbral, y para BAJAR
      // hay que alejarse un poco más. Así el punto exacto nunca oscila.
      let next: LodLevel;
      if (level === LOD_LEVEL.NEAR) {
        next = distance > LOD_THRESHOLDS.near + HYSTERESIS
          ? (distance > LOD_THRESHOLDS.mid + HYSTERESIS ? LOD_LEVEL.FAR : LOD_LEVEL.MID)
          : LOD_LEVEL.NEAR;
      } else if (level === LOD_LEVEL.FAR) {
        next = distance < LOD_THRESHOLDS.mid - HYSTERESIS
          ? (distance < LOD_THRESHOLDS.near - HYSTERESIS ? LOD_LEVEL.NEAR : LOD_LEVEL.MID)
          : LOD_LEVEL.FAR;
      } else {
        if (distance < LOD_THRESHOLDS.near - HYSTERESIS) next = LOD_LEVEL.NEAR;
        else if (distance > LOD_THRESHOLDS.mid + HYSTERESIS) next = LOD_LEVEL.FAR;
        else next = LOD_LEVEL.MID;
      }

      if (next === level) return false;
      level = next;
      return true;
    },
  };
}

export { LOD_LEVEL, LOD_LEVEL_COUNT, type LodLevel };
