// Biblioteca de formas 3D procedurales para el comando "Formar objeto".
//
// No hay backend ni IA de visión en producción (sitio estático en GitHub
// Pages), así que la foto adjuntada en "Comandos" es solo una confirmación
// visual — la forma real sale de estos generadores, indexados por el
// nombre que escribe el usuario. Cada generador produce exactamente
// `count*3` floats (una nube de puntos centrada en el origen), para que
// escale con el slider de cantidad de nanobots (20-200).
//
// Módulo puro (sin dependencia de three.js): las posiciones son tuplas
// planas, listas para copiarse directo al buffer de targets de Wasm
// (ver Swarm.setAgentTargets en swarm.ts).

export const SHAPE_HALF_EXTENT = 5.5;
// Punto de la escena donde se arman las figuras: lejos del núcleo
// (REACTOR_POSITION en reactor.ts) y dentro de kBounds=12 del core C++ aun
// sumando SHAPE_HALF_EXTENT.
export const FORMATION_CENTER: [number, number, number] = [4, 2, 4];
// Radio del cluster de reposo alrededor del núcleo.
export const IDLE_RADIUS = 2.5;

const s = SHAPE_HALF_EXTENT;

function randRange(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo);
}

// --- Generadores: cada uno devuelve count*3 floats centrados en (0,0,0) ---

function cubo(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const face = i % 6;
    const u = randRange(-s, s);
    const v = randRange(-s, s);
    let x = 0;
    let y = 0;
    let z = 0;
    switch (face) {
      case 0:
        x = s; y = u; z = v; break;
      case 1:
        x = -s; y = u; z = v; break;
      case 2:
        y = s; x = u; z = v; break;
      case 3:
        y = -s; x = u; z = v; break;
      case 4:
        z = s; x = u; y = v; break;
      default:
        z = -s; x = u; y = v; break;
    }
    pts[i * 3] = x;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = z;
  }
  return pts;
}

// Fibonacci sphere: distribución cuasi-uniforme sin apelmazarse en los polos.
function esfera(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const yFrac = count > 1 ? 1 - (i / (count - 1)) * 2 : 0;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - yFrac * yFrac));
    const theta = goldenAngle * i;
    pts[i * 3] = Math.cos(theta) * radiusAtY * s;
    pts[i * 3 + 1] = yFrac * s;
    pts[i * 3 + 2] = Math.sin(theta) * radiusAtY * s;
  }
  return pts;
}

// Pirámide de base cuadrada: 30% de los puntos en la base, el resto
// repartido (muestreo baricéntrico) entre las 4 caras triangulares.
function piramide(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const c0: [number, number, number] = [-s, -s, -s];
  const c1: [number, number, number] = [s, -s, -s];
  const c2: [number, number, number] = [s, -s, s];
  const c3: [number, number, number] = [-s, -s, s];
  const apex: [number, number, number] = [0, s, 0];
  const sides: [number, number, number][][] = [
    [c0, c1, apex],
    [c1, c2, apex],
    [c2, c3, apex],
    [c3, c0, apex],
  ];

  const baseCount = Math.round(count * 0.3);
  for (let i = 0; i < count; i++) {
    let x: number;
    let y: number;
    let z: number;
    if (i < baseCount) {
      x = randRange(-s, s);
      y = -s;
      z = randRange(-s, s);
    } else {
      const [p0, p1, p2] = sides[(i - baseCount) % 4];
      let r1 = Math.random();
      let r2 = Math.random();
      if (r1 + r2 > 1) {
        r1 = 1 - r1;
        r2 = 1 - r2;
      }
      x = p0[0] + r1 * (p1[0] - p0[0]) + r2 * (p2[0] - p0[0]);
      y = p0[1] + r1 * (p1[1] - p0[1]) + r2 * (p2[1] - p0[1]);
      z = p0[2] + r1 * (p1[2] - p0[2]) + r2 * (p2[2] - p0[2]);
    }
    pts[i * 3] = x;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = z;
  }
  return pts;
}

// Estrella de 5 puntas: polígono 2D relleno por muestreo radial
// (r · √random para área uniforme), con jitter leve en Z.
function estrella(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const spikes = 5;
  const outerR = s;
  const innerR = s * 0.42;
  const segAngle = Math.PI / spikes;
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const localT = (t % segAngle) / segAngle;
    const evenSegment = Math.floor(t / segAngle) % 2 === 0;
    const rBoundary = evenSegment
      ? outerR + (innerR - outerR) * localT
      : innerR + (outerR - innerR) * localT;
    const r = rBoundary * Math.sqrt(Math.random());
    pts[i * 3] = Math.cos(t) * r;
    pts[i * 3 + 1] = Math.sin(t) * r;
    pts[i * 3 + 2] = randRange(-s * 0.12, s * 0.12);
  }
  return pts;
}

// Anillo/dona: superficie de un toro (R = radio mayor, r = radio del tubo).
function anillo(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const R = s * 0.75;
  const r = s * 0.28;
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    pts[i * 3] = (R + r * Math.cos(phi)) * Math.cos(theta);
    pts[i * 3 + 1] = r * Math.sin(phi);
    pts[i * 3 + 2] = (R + r * Math.cos(phi)) * Math.sin(theta);
  }
  return pts;
}

// Corazón: curva paramétrica clásica, rellena con √random (área uniforme).
function corazon(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const scale = Math.sqrt(Math.random());
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    pts[i * 3] = (hx / 16) * s * scale;
    pts[i * 3 + 1] = (hy / 16) * s * scale;
    pts[i * 3 + 2] = randRange(-s * 0.15, s * 0.15);
  }
  return pts;
}

// Cruz (+ en 2D con espesor en Z), por rejection sampling en la caja envolvente.
function cruz(count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const L = s;
  const w = s * 0.22;
  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    for (let tries = 0; tries < 20; tries++) {
      x = randRange(-L, L);
      y = randRange(-L, L);
      if (Math.abs(x) <= w || Math.abs(y) <= w) break;
    }
    pts[i * 3] = x;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = randRange(-s * 0.15, s * 0.15);
  }
  return pts;
}

// --- Formas COMPUESTAS (carro/telefono/persona): arman la silueta pegando
// varios primitivos (caja/esfera/cilindro) trasladados, en vez de una sola
// superficie paramétrica. splitCounts() reparte `total` en partes cuyo
// tamaño es proporcional a `weights`, pero garantiza que la SUMA sea
// exactamente `total` (el último elemento absorbe el resto del redondeo) —
// necesario porque cada generador debe devolver EXACTAMENTE count*3 floats.
// Método de "mayores restos" (Hamilton): redondear cada parte por separado
// y ajustar solo la última para cerrar la suma puede dar NEGATIVO cuando el
// redondeo se pasa de largo (p.ej. total=2 repartido en 4 pesos iguales:
// cada uno redondea a 1, suma 4, sobran -2 que le restarían a la última).
// Acá en cambio se trunca (floor) cada parte —nunca negativo— y lo que
// falta para llegar a `total` se reparte de a 1 entre las partes con mayor
// resto fraccionario, así la suma siempre cierra exacto sin negativos.
function splitCounts(total: number, weights: number[]): number[] {
  const sumW = weights.reduce((a, b) => a + b, 0);
  const raw = weights.map((w) => (w / sumW) * total);
  const counts = raw.map((r) => Math.floor(r));
  const remainder = total - counts.reduce((a, b) => a + b, 0);
  const byFractionDesc = raw
    .map((r, i) => ({ i, frac: r - counts[i] }))
    .sort((a, b) => b.frac - a.frac);
  for (let k = 0; k < remainder; k++) {
    counts[byFractionDesc[k % byFractionDesc.length].i]++;
  }
  return counts;
}

function sampleBoxSurface(hx: number, hy: number, hz: number, count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const face = i % 6;
    const u = randRange(-1, 1);
    const v = randRange(-1, 1);
    let x = 0;
    let y = 0;
    let z = 0;
    switch (face) {
      case 0: x = hx; y = u * hy; z = v * hz; break;
      case 1: x = -hx; y = u * hy; z = v * hz; break;
      case 2: y = hy; x = u * hx; z = v * hz; break;
      case 3: y = -hy; x = u * hx; z = v * hz; break;
      case 4: z = hz; x = u * hx; y = v * hy; break;
      default: z = -hz; x = u * hx; y = v * hy; break;
    }
    pts[i * 3] = x;
    pts[i * 3 + 1] = y;
    pts[i * 3 + 2] = z;
  }
  return pts;
}

function sampleSphereSurface(radius: number, count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const yFrac = count > 1 ? 1 - (i / (count - 1)) * 2 : 0;
    const r = Math.sqrt(Math.max(0, 1 - yFrac * yFrac));
    const theta = goldenAngle * i;
    pts[i * 3] = Math.cos(theta) * r * radius;
    pts[i * 3 + 1] = yFrac * radius;
    pts[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return pts;
}

// Cilindro con eje en Y (igual que THREE.CylinderGeometry): superficie
// lateral (85%) + tapas (15%).
function sampleCylinderSurface(radius: number, halfHeight: number, count: number): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    if (Math.random() < 0.15) {
      const r = radius * Math.sqrt(Math.random());
      const y = Math.random() < 0.5 ? halfHeight : -halfHeight;
      pts[i * 3] = Math.cos(theta) * r;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = Math.sin(theta) * r;
    } else {
      pts[i * 3] = Math.cos(theta) * radius;
      pts[i * 3 + 1] = randRange(-halfHeight, halfHeight);
      pts[i * 3 + 2] = Math.sin(theta) * radius;
    }
  }
  return pts;
}

function translate(pts: Float32Array, dx: number, dy: number, dz: number): Float32Array {
  const out = new Float32Array(pts.length);
  for (let i = 0; i < pts.length; i += 3) {
    out[i] = pts[i] + dx;
    out[i + 1] = pts[i + 1] + dy;
    out[i + 2] = pts[i + 2] + dz;
  }
  return out;
}

// Rota 90° alrededor de Z: (x,y,z) -> (y,-x,z) — acuesta un cilindro
// vertical (eje Y, como sampleCylinderSurface) para que quede horizontal
// (eje X), como el eje de una rueda de auto.
function rotateAxisYtoX(pts: Float32Array): Float32Array {
  const out = new Float32Array(pts.length);
  for (let i = 0; i < pts.length; i += 3) {
    out[i] = pts[i + 1];
    out[i + 1] = -pts[i];
    out[i + 2] = pts[i + 2];
  }
  return out;
}

function concatParts(parts: Float32Array[]): Float32Array {
  const total = parts.reduce((sum, p) => sum + p.length, 0);
  const out = new Float32Array(total);
  let offset = 0;
  for (const p of parts) {
    out.set(p, offset);
    offset += p.length;
  }
  return out;
}

// Carro: carrocería (caja) + cabina (caja más chica encima) + 4 ruedas
// (cilindros achatados y "acostados" en las 4 esquinas inferiores).
function carro(count: number): Float32Array {
  const bodyHx = s;
  const bodyHy = s * 0.28;
  const bodyHz = s * 0.42;
  const cabinHx = s * 0.45;
  const cabinHy = s * 0.22;
  const cabinHz = s * 0.38;
  const wheelR = s * 0.22;
  const wheelHalfH = s * 0.1;

  const [bodyCount, cabinCount, wheelsTotal] = splitCounts(count, [45, 22, 33]);
  const wheelCounts = splitCounts(wheelsTotal, [1, 1, 1, 1]);

  const body = sampleBoxSurface(bodyHx, bodyHy, bodyHz, bodyCount);
  const cabin = translate(
    sampleBoxSurface(cabinHx, cabinHy, cabinHz, cabinCount),
    -s * 0.05,
    bodyHy + cabinHy,
    0,
  );
  const wheelOffsets: Array<[number, number]> = [
    [-bodyHx * 0.55, -bodyHz * 0.95],
    [bodyHx * 0.55, -bodyHz * 0.95],
    [-bodyHx * 0.55, bodyHz * 0.95],
    [bodyHx * 0.55, bodyHz * 0.95],
  ];
  const wheels = wheelOffsets.map(([wx, wz], i) =>
    translate(rotateAxisYtoX(sampleCylinderSurface(wheelR, wheelHalfH, wheelCounts[i])), wx, -bodyHy, wz),
  );

  return concatParts([body, cabin, ...wheels]);
}

// Teléfono: una sola caja delgada, alta y angosta (proporción reconocible
// de smartphone) — no necesita partes compuestas.
function telefono(count: number): Float32Array {
  return sampleBoxSurface(s * 0.42, s * 0.85, s * 0.09, count);
}

// Persona/personaje: cabeza (esfera) + torso (caja) + 2 brazos + 2 piernas
// (cilindros), todo centrado y apilado en Y.
function persona(count: number): Float32Array {
  const headR = s * 0.22;
  const torsoHx = s * 0.32;
  const torsoHy = s * 0.5;
  const torsoHz = s * 0.2;
  const armR = s * 0.09;
  const armHalfH = s * 0.45;
  const legR = s * 0.12;
  const legHalfH = s * 0.55;

  const [headCount, torsoCount, armsTotal, legsTotal] = splitCounts(count, [10, 30, 20, 25]);
  const [leftArmCount, rightArmCount] = splitCounts(armsTotal, [1, 1]);
  const [leftLegCount, rightLegCount] = splitCounts(legsTotal, [1, 1]);

  const head = translate(sampleSphereSurface(headR, headCount), 0, torsoHy + headR * 0.9, 0);
  const torso = sampleBoxSurface(torsoHx, torsoHy, torsoHz, torsoCount);
  const leftArm = translate(sampleCylinderSurface(armR, armHalfH, leftArmCount), -(torsoHx + armR), torsoHy * 0.15, 0);
  const rightArm = translate(sampleCylinderSurface(armR, armHalfH, rightArmCount), torsoHx + armR, torsoHy * 0.15, 0);
  const leftLeg = translate(sampleCylinderSurface(legR, legHalfH, leftLegCount), -torsoHx * 0.5, -torsoHy - legHalfH, 0);
  const rightLeg = translate(sampleCylinderSurface(legR, legHalfH, rightLegCount), torsoHx * 0.5, -torsoHy - legHalfH, 0);

  return concatParts([head, torso, leftArm, rightArm, leftLeg, rightLeg]);
}

const SHAPE_GENERATORS: Record<string, (count: number) => Float32Array> = {
  cubo,
  esfera,
  piramide,
  estrella,
  anillo,
  corazon,
  cruz,
  carro,
  telefono,
  persona,
};

const SHAPE_ALIASES: Record<string, string> = {
  bola: "esfera",
  globo: "esfera",
  planeta: "esfera",
  caja: "cubo",
  dado: "cubo",
  triangulo: "piramide",
  dona: "anillo",
  donut: "anillo",
  rosquilla: "anillo",
  toro: "anillo",
  amor: "corazon",
  love: "corazon",
  plus: "cruz",
  mas: "cruz",
  auto: "carro",
  coche: "carro",
  vehiculo: "carro",
  celular: "telefono",
  movil: "telefono",
  smartphone: "telefono",
  personaje: "persona",
  humano: "persona",
  gente: "persona",
};

const COMBINING_DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

function normalizeName(input: string): string {
  return input.normalize("NFD").replace(COMBINING_DIACRITICS, "").toLowerCase().trim();
}

// Resuelve lo que escribió el usuario (con sinónimos y sin acentos) al
// nombre canónico de una forma soportada, o null si no matchea ninguna.
export function resolveShapeName(input: string): string | null {
  const key = normalizeName(input);
  if (SHAPE_GENERATORS[key]) return key;
  const alias = SHAPE_ALIASES[key];
  return alias && SHAPE_GENERATORS[alias] ? alias : null;
}

export function listSupportedNames(): string[] {
  return Object.keys(SHAPE_GENERATORS);
}

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
const ROLE_RATIO_COLOR = 0.75;

// ESTRUCTURA/RELACION/DETALLE se reparten lo que sobra después de
// reservarle a COLOR su 75% fijo (~25% del total) — estos 3 números son
// PESOS RELATIVOS entre sí (no fracciones directas del total): mantienen
// la misma proporción 13:38:24 que tenían cuando sí lo eran, así
// RELACION sigue teniendo SIEMPRE margen de sobra sobre el tamaño del
// árbol de expansión mínima entre anclas de ESTRUCTURA (ver
// buildRelationEdges) para cubrirlo completo, en vez de quedar apenas
// alcanzando el mínimo.
const SKELETON_WEIGHT_STRUCTURE = 13; // ~10-15% de ese 25% restante
const SKELETON_WEIGHT_RELATION = 38; // ~35-40% de ese 25% restante
const SKELETON_WEIGHT_DETAIL = 24;
const SKELETON_WEIGHT_TOTAL = SKELETON_WEIGHT_STRUCTURE + SKELETON_WEIGHT_RELATION + SKELETON_WEIGHT_DETAIL;

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
}

// Árbol de expansión mínima (Prim, O(anchorCount²) — trivial para los
// tamaños en juego, se calcula una sola vez por click en "Formar objeto")
// sobre las anclas de ESTRUCTURA: garantiza que TODAS queden conectadas en
// una sola red, sin importar cuántos nanobots de RELACION haya disponibles.
// Elegir pares al azar (como antes) podía dejar zonas enteras de la figura
// sin ninguna conexión — la "segunda capa a medio hacer" — mientras otras
// acumulaban líneas redundantes cruzando el interior.
function buildMinimumSpanningTree(anchors: Float32Array, anchorCount: number): Array<[number, number]> {
  const edges: Array<[number, number]> = [];
  if (anchorCount < 2) return edges;

  const inTree = new Uint8Array(anchorCount);
  const minDist = new Float32Array(anchorCount).fill(Infinity);
  const parent = new Int32Array(anchorCount).fill(-1);
  inTree[0] = 1;
  for (let j = 1; j < anchorCount; j++) {
    const dx = anchors[j * 3 + 0] - anchors[0];
    const dy = anchors[j * 3 + 1] - anchors[1];
    const dz = anchors[j * 3 + 2] - anchors[2];
    minDist[j] = dx * dx + dy * dy + dz * dz;
    parent[j] = 0;
  }

  for (let iter = 1; iter < anchorCount; iter++) {
    let u = -1;
    let best = Infinity;
    for (let j = 0; j < anchorCount; j++) {
      if (!inTree[j] && minDist[j] < best) {
        best = minDist[j];
        u = j;
      }
    }
    if (u === -1) break;
    inTree[u] = 1;
    edges.push([parent[u], u]);

    const ux = anchors[u * 3 + 0];
    const uy = anchors[u * 3 + 1];
    const uz = anchors[u * 3 + 2];
    for (let j = 0; j < anchorCount; j++) {
      if (inTree[j]) continue;
      const dx = anchors[j * 3 + 0] - ux;
      const dy = anchors[j * 3 + 1] - uy;
      const dz = anchors[j * 3 + 2] - uz;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < minDist[j]) {
        minDist[j] = d;
        parent[j] = u;
      }
    }
  }
  return edges;
}

// Suma 1-2 conexiones extra por ancla a sus vecinas más cercanas (por
// encima del árbol mínimo, que ya garantiza conectividad) para una malla
// visualmente más rica, sin duplicar aristas que el árbol ya cubre.
const EXTRA_NEAREST_PER_ANCHOR = 2;

function buildExtraNearestEdges(
  anchors: Float32Array,
  anchorCount: number,
  existing: Set<string>,
): Array<[number, number]> {
  const edges: Array<[number, number]> = [];
  const k = Math.min(EXTRA_NEAREST_PER_ANCHOR, anchorCount - 1);
  if (k <= 0) return edges;

  const nearestIdx = new Int32Array(k);
  const nearestDist = new Float32Array(k);

  for (let a = 0; a < anchorCount; a++) {
    const ax = anchors[a * 3 + 0];
    const ay = anchors[a * 3 + 1];
    const az = anchors[a * 3 + 2];
    let filled = 0;
    for (let j = 0; j < anchorCount; j++) {
      if (j === a) continue;
      const dx = anchors[j * 3 + 0] - ax;
      const dy = anchors[j * 3 + 1] - ay;
      const dz = anchors[j * 3 + 2] - az;
      const dist = dx * dx + dy * dy + dz * dz;
      let pos = filled < k ? filled : k - 1;
      if (filled === k) {
        if (dist >= nearestDist[k - 1]) continue;
      } else {
        filled++;
      }
      while (pos > 0 && nearestDist[pos - 1] > dist) {
        nearestDist[pos] = nearestDist[pos - 1];
        nearestIdx[pos] = nearestIdx[pos - 1];
        pos--;
      }
      nearestDist[pos] = dist;
      nearestIdx[pos] = j;
    }
    for (let x = 0; x < filled; x++) {
      const b = nearestIdx[x];
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      if (existing.has(key)) continue;
      existing.add(key);
      edges.push([a, b]);
    }
  }
  return edges;
}

// Lista final de conexiones entre anclas de ESTRUCTURA: el árbol mínimo
// primero (para priorizar cobertura completa si hay pocos nanobots de
// RELACION disponibles), y después las conexiones extra a vecinas cercanas.
function buildRelationEdges(anchors: Float32Array, anchorCount: number): Array<[number, number]> {
  if (anchorCount < 2) return [];
  const mst = buildMinimumSpanningTree(anchors, anchorCount);
  const seen = new Set<string>();
  for (const [a, b] of mst) seen.add(a < b ? `${a}-${b}` : `${b}-${a}`);
  return mst.concat(buildExtraNearestEdges(anchors, anchorCount, seen));
}

// Reparte los `outCount` nanobots de RELACION cíclicamente sobre la lista de
// conexiones (si hay más nanobots que conexiones, se repiten desde el
// principio — el árbol mínimo, al ir primero, siempre queda cubierto). Cada
// nanobot vive en el punto medio del segmento que le tocó, y devuelve ambos
// extremos para poder dibujarlo como una viga sólida (ver nanobot-mesh.ts).
function assignRelationEdges(
  anchors: Float32Array,
  edges: Array<[number, number]>,
  outCount: number,
): { points: Float32Array; spans: Float32Array } {
  const points = new Float32Array(outCount * 3);
  const spans = new Float32Array(outCount * 6);
  if (edges.length === 0) return { points, spans };

  for (let i = 0; i < outCount; i++) {
    const [a, b] = edges[i % edges.length];
    const ax = anchors[a * 3 + 0];
    const ay = anchors[a * 3 + 1];
    const az = anchors[a * 3 + 2];
    const bx = anchors[b * 3 + 0];
    const by = anchors[b * 3 + 1];
    const bz = anchors[b * 3 + 2];
    points[i * 3 + 0] = (ax + bx) / 2;
    points[i * 3 + 1] = (ay + by) / 2;
    points[i * 3 + 2] = (az + bz) / 2;
    spans[i * 6 + 0] = ax;
    spans[i * 6 + 1] = ay;
    spans[i * 6 + 2] = az;
    spans[i * 6 + 3] = bx;
    spans[i * 6 + 4] = by;
    spans[i * 6 + 5] = bz;
  }
  return { points, spans };
}

// Cuántos candidatos de más se generan por cada ancla de ESTRUCTURA que
// hace falta, para poder elegir con farthest-point sampling (ver abajo) en
// vez de quedarse con la muestra al azar cruda del generador.
const STRUCTURE_OVERSAMPLE_FACTOR = 4;

// Elige `want` puntos de entre `candidates` (candidateCount de ellos) con
// farthest-point sampling (greedy: cada nuevo punto es el más lejano a
// todos los ya elegidos): da una distribución PAREJA por toda la silueta de
// la figura en vez de la aglomeración/huecos que deja un muestreo al azar
// crudo — el "exoesqueleto" de ESTRUCTURA queda cubriendo la forma de
// manera uniforme, para que RELACION tenga anclas bien repartidas a las
// que conectarse en cualquier zona de la figura.
function farthestPointSample(candidates: Float32Array, candidateCount: number, want: number): Float32Array {
  if (want <= 0 || candidateCount === 0) return new Float32Array(0);
  const n = Math.min(want, candidateCount);
  const chosen = new Int32Array(n);
  const minDistSq = new Float32Array(candidateCount).fill(Infinity);

  let current = Math.floor(Math.random() * candidateCount);
  chosen[0] = current;

  for (let picked = 1; picked < n; picked++) {
    const cx = candidates[current * 3 + 0];
    const cy = candidates[current * 3 + 1];
    const cz = candidates[current * 3 + 2];
    let best = -1;
    let bestDist = -1;
    for (let j = 0; j < candidateCount; j++) {
      const dx = candidates[j * 3 + 0] - cx;
      const dy = candidates[j * 3 + 1] - cy;
      const dz = candidates[j * 3 + 2] - cz;
      const d = dx * dx + dy * dy + dz * dz;
      if (d < minDistSq[j]) minDistSq[j] = d;
      if (minDistSq[j] > bestDist) {
        bestDist = minDistSq[j];
        best = j;
      }
    }
    current = best;
    chosen[picked] = current;
  }

  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const idx = chosen[i];
    out[i * 3 + 0] = candidates[idx * 3 + 0];
    out[i * 3 + 1] = candidates[idx * 3 + 1];
    out[i * 3 + 2] = candidates[idx * 3 + 2];
  }
  return out;
}

// Genera las anclas de ESTRUCTURA: sobre-muestrea la figura y se queda con
// las `count` mejor distribuidas (ver farthestPointSample).
function buildStructureAnchors(generator: (n: number) => Float32Array, count: number): Float32Array {
  if (count <= 0) return new Float32Array(0);
  const oversampled = generator(count * STRUCTURE_OVERSAMPLE_FACTOR);
  return farthestPointSample(oversampled, oversampled.length / 3, count);
}

// Genera la nube de puntos de la figura (repartida en los 3 roles) y la
// traslada a `center`. Devuelve null si `name` no matchea ninguna forma
// conocida.
const DEFAULT_COLOR_CLUSTERS: ColorClusterInput[] = [{ color: 0, weight: 1 }];

export function formShapeWithRoles(
  name: string,
  count: number,
  center: [number, number, number] = FORMATION_CENTER,
  colorClusters: ColorClusterInput[] = DEFAULT_COLOR_CLUSTERS,
): ShapeFormation | null {
  const canonical = resolveShapeName(name);
  if (!canonical) return null;
  const generator = SHAPE_GENERATORS[canonical];
  const clusters = colorClusters.length > 0 ? colorClusters : DEFAULT_COLOR_CLUSTERS;

  // COLOR se calcula PRIMERO y de forma independiente (75% fijo del
  // total) — ESTRUCTURA/RELACION/DETALLE (el "esqueleto") se reparten
  // recién lo que sobra, no al revés, para que el 75% de COLOR nunca
  // dependa de cuánto terminen usando las otras 3.
  const colorCount = count > 0 ? Math.round(count * ROLE_RATIO_COLOR) : 0;
  const skeletonBudget = Math.max(0, count - colorCount);

  const structureCount =
    skeletonBudget > 0
      ? Math.min(
          skeletonBudget,
          Math.max(4, Math.round((skeletonBudget * SKELETON_WEIGHT_STRUCTURE) / SKELETON_WEIGHT_TOTAL)),
        )
      : 0;
  const remainingAfterStructure = Math.max(0, skeletonBudget - structureCount);
  const relationCount = Math.min(
    remainingAfterStructure,
    Math.round((skeletonBudget * SKELETON_WEIGHT_RELATION) / SKELETON_WEIGHT_TOTAL),
  );
  const detailCount = Math.max(0, skeletonBudget - structureCount - relationCount);

  const structurePts = buildStructureAnchors(generator, structureCount);
  const relationEdges = buildRelationEdges(structurePts, structureCount);
  const { points: relationPts, spans: relationSpansLocal } = assignRelationEdges(
    structurePts,
    relationEdges,
    relationCount,
  );
  const detailPts = generator(detailCount);
  // Cada ola de color es una MUESTRA INDEPENDIENTE de la silueta completa
  // (mismo generador que DETALLE, no un subconjunto de colorPts) — así cada
  // una por sí sola ya cubre parejo toda la figura, en vez de quedar
  // agrupada en una sola zona.
  const colorWaveCounts = splitCounts(colorCount, clusters.map((c) => c.weight));
  const colorWavePts = colorWaveCounts.map((n) => generator(n));

  const points = new Float32Array(count * 3);
  const roles = new Uint8Array(count);
  const relationSpans = new Float32Array(count * 6);
  const colorWave = new Uint8Array(count);
  let cursor = 0;

  const write = (src: Float32Array, n: number, role: NanobotRole) => {
    for (let i = 0; i < n; i++) {
      points[cursor * 3 + 0] = src[i * 3 + 0] + center[0];
      points[cursor * 3 + 1] = src[i * 3 + 1] + center[1];
      points[cursor * 3 + 2] = src[i * 3 + 2] + center[2];
      roles[cursor] = role;
      cursor++;
    }
  };

  write(structurePts, structureCount, NANOBOT_ROLE.STRUCTURE);

  for (let i = 0; i < relationCount; i++) {
    points[cursor * 3 + 0] = relationPts[i * 3 + 0] + center[0];
    points[cursor * 3 + 1] = relationPts[i * 3 + 1] + center[1];
    points[cursor * 3 + 2] = relationPts[i * 3 + 2] + center[2];
    roles[cursor] = NANOBOT_ROLE.RELATION;
    relationSpans[cursor * 6 + 0] = relationSpansLocal[i * 6 + 0] + center[0];
    relationSpans[cursor * 6 + 1] = relationSpansLocal[i * 6 + 1] + center[1];
    relationSpans[cursor * 6 + 2] = relationSpansLocal[i * 6 + 2] + center[2];
    relationSpans[cursor * 6 + 3] = relationSpansLocal[i * 6 + 3] + center[0];
    relationSpans[cursor * 6 + 4] = relationSpansLocal[i * 6 + 4] + center[1];
    relationSpans[cursor * 6 + 5] = relationSpansLocal[i * 6 + 5] + center[2];
    cursor++;
  }

  write(detailPts, detailCount, NANOBOT_ROLE.DETAIL);
  for (let wave = 0; wave < colorWavePts.length; wave++) {
    const src = colorWavePts[wave];
    const n = colorWaveCounts[wave];
    for (let i = 0; i < n; i++) {
      points[cursor * 3 + 0] = src[i * 3 + 0] + center[0];
      points[cursor * 3 + 1] = src[i * 3 + 1] + center[1];
      points[cursor * 3 + 2] = src[i * 3 + 2] + center[2];
      roles[cursor] = NANOBOT_ROLE.COLOR;
      colorWave[cursor] = wave;
      cursor++;
    }
  }

  return { points, roles, relationSpans, colorWave, colorWaveCount: clusters.length };
}

// Cluster de reposo: cáscara esférica aleatoria alrededor del núcleo.
export function idleCluster(count: number, center: [number, number, number]): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = IDLE_RADIUS * (0.5 + 0.5 * Math.random());
    pts[i * 3] = center[0] + r * Math.sin(phi) * Math.cos(theta);
    pts[i * 3 + 1] = center[1] + r * Math.sin(phi) * Math.sin(theta);
    pts[i * 3 + 2] = center[2] + r * Math.cos(phi);
  }
  return pts;
}
