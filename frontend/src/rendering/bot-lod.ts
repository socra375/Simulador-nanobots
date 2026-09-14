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

/**
 * Distancia de cámara al centro por debajo de la cual se usa cada nivel.
 *
 * `near` está POR DEBAJO del `minDistance` de la cámara normal (6, ver
 * scene.ts), y eso es deliberado: significa que el nivel hexagonal es
 * inalcanzable con el zoom común y sólo se llega con el zoom especial,
 * que baja ese límite a 0,8. Es exactamente lo pedido — a distancia
 * normal el enjambre se lee como materia, y la forma del bot es algo que
 * se descubre al acercarse.
 *
 * En la Fase 32 `near` estaba en 14, por encima de la distancia inicial
 * de la cámara (~26 no, pero sí del acercamiento normal), así que el
 * hexágono aparecía en la vista corriente y el enjambre se veía grueso.
 */
export const LOD_THRESHOLDS = {
  /** Más cerca que esto: hexágono. Sólo accesible en zoom especial. */
  near: 5,
  /** Más cerca que esto: esfera de vista normal. Más lejos: esfera basta. */
  mid: 34,
} as const;

/**
 * Margen de histéresis, como FRACCIÓN del umbral.
 *
 * Era un valor fijo en unidades de mundo (2,5). Funcionaba con los
 * umbrales de la Fase 32, pero al bajar `near` a 5 ese margen pasaba a
 * ser la mitad del umbral: había que llegar a distancia 2,5 para que
 * apareciera el hexágono, casi pegado al límite del zoom especial (0,8).
 * Proporcional, cada umbral tiene un margen acorde a su escala.
 */
const HYSTERESIS_FRACTION = 0.12;

const NEAR_MARGIN = LOD_THRESHOLDS.near * HYSTERESIS_FRACTION;
const MID_MARGIN = LOD_THRESHOLDS.mid * HYSTERESIS_FRACTION;

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
        next = distance > LOD_THRESHOLDS.near + NEAR_MARGIN
          ? (distance > LOD_THRESHOLDS.mid + MID_MARGIN ? LOD_LEVEL.FAR : LOD_LEVEL.MID)
          : LOD_LEVEL.NEAR;
      } else if (level === LOD_LEVEL.FAR) {
        next = distance < LOD_THRESHOLDS.mid - MID_MARGIN
          ? (distance < LOD_THRESHOLDS.near - NEAR_MARGIN ? LOD_LEVEL.NEAR : LOD_LEVEL.MID)
          : LOD_LEVEL.FAR;
      } else {
        if (distance < LOD_THRESHOLDS.near - NEAR_MARGIN) next = LOD_LEVEL.NEAR;
        else if (distance > LOD_THRESHOLDS.mid + MID_MARGIN) next = LOD_LEVEL.FAR;
        else next = LOD_LEVEL.MID;
      }

      if (next === level) return false;
      level = next;
      return true;
    },
  };
}

export { LOD_LEVEL, LOD_LEVEL_COUNT, type LodLevel };
