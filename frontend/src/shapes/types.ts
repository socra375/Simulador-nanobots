

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
export const NANOBOT_ROLE = { STRUCTURE: 0, RELATION: 1, DETAIL: 2, COLOR: 3 } as const;
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

// Una "ola" de color: un grupo de agentes COLOR pintados con el mismo tono
// (ver image-color.ts pickColorClusters), revelado como su propia sub-fase
// (ver PHASE_COUNT dinámico en main.ts) — así, si la foto tiene varias
// zonas de color reconociblemente distintas, salen de a una por vez en vez
// de mezclarse todas juntas.
export interface ColorClusterInput {
  color: number; // 0xRRGGBB — informativo, no se usa acá (ver nanobot-mesh.ts)
  weight: number; // fracción del budget de COLOR que le toca a esta ola
}

export interface ShapeFormation {
  points: Float32Array; // count*3 floats, ya trasladados a `center`
  roles: Uint8Array<ArrayBufferLike>; // largo count, uno de NANOBOT_ROLE por agente
  // Para agentes RELACION: las 2 anclas de ESTRUCTURA que ese nanobot une,
  // ya trasladadas a `center`, como [ax,ay,az,bx,by,bz] — permite dibujarlo
  // como una viga sólida entre ambas en vez de un punto flotante suelto
  // (ver nanobot-mesh.ts). Sin uso para ESTRUCTURA/DETALLE (queda en 0).
  relationSpans: Float32Array; // count*6 floats
  // Para agentes COLOR: a qué ola (índice dentro del array de clusters
  // pasado a formShapeWithRoles) pertenece — 0 para el resto de los roles.
  colorWave: Uint8Array<ArrayBufferLike>; // largo count
  // Cuántas olas de color tiene esta formación (>= 1 siempre) — main.ts lo
  // usa para saber cuántas sub-fases de revelado de COLOR debe recorrer.
  colorWaveCount: number;
  // Color+peso REALMENTE usado para armar cada ola (en el mismo orden que
  // `colorWave`) — normalmente un eco de los `colorClusters` recibidos por
  // parámetro (derivados de la foto), pero para "cabeza" (Fase 21) son los
  // 4 tonos fijos de CABEZA_PARTS en vez de la foto. main.ts solo necesita
  // leer este campo para pintar bien cada ola, sin duplicar el criterio de
  // "es cabeza o no" fuera de este archivo.
  colorClusters: ColorClusterInput[];
}

// Árbol de expansión mínima (Prim, O(anchorCount²) — trivial para los
// tamaños en juego, se calcula una sola vez por click en "Formar objeto")
// sobre las anclas de ESTRUCTURA: garantiza que TODAS queden conectadas en
// una sola red, sin importar cuántos nanobots de RELACION haya disponibles.
// Elegir pares al azar (como antes) podía dejar zonas enteras de la figura
// sin ninguna conexión — la "segunda capa a medio hacer" — mientras otras
