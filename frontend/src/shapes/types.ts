

// --- Los 3 roles de nanobots que participan al formar una figura ---
//
// - ESTRUCTURA: un subconjunto de "puntos ancla" de la propia figura (el
//   mismo generador, llamado con menos puntos, pero elegidos con farthest
//   point sampling — ver buildStructureAnchors — para que queden PAREJOS
//   por toda la silueta en vez de un muestreo al azar que puede dejar
//   zonas sin cubrir) — define el esqueleto/exoesqueleto, como las vigas
//   de una construcción.
// - RELACION: interpolados a lo largo del segmento entre pares de anclas
//   de ESTRUCTURA cercanas — literalmente "se unen unos con otros",
//   trazando las conexiones entre los puntos de estructura (como cables
//   uniendo las vigas).
// - DETALLE: el relleno denso de la figura a resolución completa (el
//   grueso de la cantidad) — da la silueta 3D nítida y sólida por encima
//   del esqueleto de las otras dos, con el color neón fijo de su rol.
// - COLOR: el mismo relleno a resolución completa que DETALLE (mismo
//   generador, otra muestra), pero coloreado en tiempo real con el color
//   RGB dominante de la foto adjuntada en "Comandos" (ver
//   image-color.ts) en vez de un color de rol fijo — es la "capa de
//   pintura" final. Es el 75% FIJO del total (no un resto ni una fracción
//   más del reparto entre las otras 3 — ver ROLE_RATIO_COLOR), así al
//   revelarse cubre de sobra hasta el hueco más chico que hayan dejado
//   ESTRUCTURA/RELACION/DETALLE, y reemplaza visualmente sus colores fijos
//   (cian/magenta/verde).
// Fase 27: ESTRUCTURA y RELACION se eliminaron. Desde la Fase 15 el
// exoesqueleto (nodos + vigas) lo arma la población de Microbots por
// separado, así que a esos dos roles se les asignaban SIEMPRE 0 agentes:
// su rama de render en nanobot-mesh.ts era inalcanzable por construcción
// y `relationSpans` se reservaba (count*6 floats, 1,44 MB a 60.000) para
// no escribirse nunca. Los Nanobots son hoy exactamente dos cosas:
// relleno (DETALLE) y pintura (COLOR).
export const NANOBOT_ROLE = { DETAIL: 0, COLOR: 1 } as const;
export type NanobotRole = (typeof NANOBOT_ROLE)[keyof typeof NANOBOT_ROLE];

// COLOR es una fracción FIJA e INDEPENDIENTE del total (75%) — a
// propósito NO se calcula junto con/a partir del resto como las otras 3,
// para que su tamaño no dependa de cuánto usen ESTRUCTURA/RELACION/
// DETALLE: siempre es la ampla mayoría del enjambre, así al revelarse
// cubre de sobra hasta el hueco más chico que hayan dejado las 3 capas
// anteriores (ver formShapeWithRoles).
export const ROLE_RATIO_COLOR = 0.75;

// Desde Fase 15, ESTRUCTURA/RELACION de Nanobots quedan SIEMPRE en 0: el
// exoesqueleto (nodos+vigas) ahora lo arma la población de Microbots por
// separado (ver buildExoskeleton más abajo y microbot-mesh.ts) — los
// Nanobots se posan/alinean sobre ese exoesqueleto y solo aportan
// relleno (DETALLE, ~25% del total) y pintura (COLOR, 75% fijo). El
// 25% restante (después de COLOR) va entero a DETALLE.

// Paleta de material de una figura: los colores que el objeto lleva y en
// qué proporción.
//
// FASE 42 — QUÉ CAMBIÓ Y POR QUÉ. Hasta la Fase 41 esto era una "ola de
// color": un grupo de agentes pintados todos del mismo tono, y cada ola
// era un MUESTREO INDEPENDIENTE DE LA SILUETA COMPLETA. El resultado era
// que rojo y dorado quedaban intercalados agente por agente sobre todo el
// objeto — el damero. La ola decidía el color, que es exactamente la
// dependencia que había que romper.
//
// Ahora esto es sólo una PALETA: qué colores hay y cuánto pesa cada uno.
// Dónde va cada color lo decide la posición (ver material/material-map.ts)
// y cuándo aparece lo decide la activación por regiones (ver
// material/material-animation.ts).
export interface ColorClusterInput {
  color: number; // 0xRRGGBB
  weight: number; // fracción del material que representa este color
}

export interface ShapeFormation {
  points: Float32Array; // count*3 floats, ya trasladados a `center`
  roles: Uint8Array<ArrayBufferLike>; // largo count, uno de NANOBOT_ROLE por agente
  /**
   * Paleta de material de esta figura. Para casi todas las formas es un eco
   * de los clusters derivados de la foto; para "cabeza" son los tonos fijos
   * de sus partes anatómicas (CABEZA_PARTS).
   *
   * Sólo se usa como paleta de respaldo cuando `pointColors` es null: si la
   * figura trae color por punto, el color sale de ahí y esto queda como
   * información para la UI.
   */
  colorClusters: ColorClusterInput[];
  /**
   * Color del objeto por agente (count*3 bytes RGB), o null si esta forma
   * no lo trae.
   *
   * Tiene valores útiles SÓLO en las posiciones de los agentes con rol
   * COLOR: son los Material Bots, los únicos que llevan el material del
   * objeto (spec §14). Los de DETALLE quedan en cero.
   *
   * Es no-null en dos casos, y los dos son información espacial REAL:
   *  - el escaneo desde imagen, donde cada punto lleva el píxel del que
   *    salió;
   *  - las formas con partes de color propio (hoy "cabeza": piel, cabello,
   *    ojos y labios son generadores distintos, así que cada punto sabe de
   *    qué parte es).
   *
   * Cuando es null, la figura no tiene información de DÓNDE va cada color y
   * el mapa de material lo declara como aproximado (MATERIAL_SOURCE.FALLBACK).
   */
  pointColors: Uint8Array | null;
}
