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

const SHAPE_GENERATORS: Record<string, (count: number) => Float32Array> = {
  cubo,
  esfera,
  piramide,
  estrella,
  anillo,
  corazon,
  cruz,
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
// - ESTRUCTURA: un subconjunto disperso de "puntos ancla" de la propia
//   figura (el mismo generador, llamado con menos puntos) — define el
//   esqueleto/silueta general, como las vigas de una construcción.
// - RELACION: interpolados a lo largo del segmento entre pares de anclas
//   de ESTRUCTURA cercanas — literalmente "se unen unos con otros",
//   trazando las conexiones entre los puntos de estructura (como cables
//   uniendo las vigas).
// - DETALLE: el relleno denso de la figura a resolución completa (el
//   grueso de la cantidad) — aporta el color/pulido final, dando la
//   silueta 3D nítida y sólida por encima del esqueleto de las otras dos.
export const NANOBOT_ROLE = { STRUCTURE: 0, RELATION: 1, DETAIL: 2 } as const;
export type NanobotRole = (typeof NANOBOT_ROLE)[keyof typeof NANOBOT_ROLE];

const ROLE_RATIO_STRUCTURE = 0.15;
const ROLE_RATIO_RELATION = 0.25;
// El resto (~60%) es DETALLE.

export interface ShapeFormation {
  points: Float32Array; // count*3 floats, ya trasladados a `center`
  roles: Uint8Array<ArrayBufferLike>; // largo count, uno de NANOBOT_ROLE por agente
}

function nearestNeighborInterpolated(anchors: Float32Array, anchorCount: number, outCount: number): Float32Array {
  const out = new Float32Array(outCount * 3);
  if (anchorCount === 0) return out;
  for (let i = 0; i < outCount; i++) {
    const a = Math.floor(Math.random() * anchorCount);
    let b = a;
    if (anchorCount > 1) {
      while (b === a) b = Math.floor(Math.random() * anchorCount);
    }
    const t = Math.random();
    out[i * 3 + 0] = anchors[a * 3 + 0] * (1 - t) + anchors[b * 3 + 0] * t;
    out[i * 3 + 1] = anchors[a * 3 + 1] * (1 - t) + anchors[b * 3 + 1] * t;
    out[i * 3 + 2] = anchors[a * 3 + 2] * (1 - t) + anchors[b * 3 + 2] * t;
  }
  return out;
}

// Genera la nube de puntos de la figura (repartida en los 3 roles) y la
// traslada a `center`. Devuelve null si `name` no matchea ninguna forma
// conocida.
export function formShapeWithRoles(
  name: string,
  count: number,
  center: [number, number, number] = FORMATION_CENTER,
): ShapeFormation | null {
  const canonical = resolveShapeName(name);
  if (!canonical) return null;
  const generator = SHAPE_GENERATORS[canonical];

  const structureCount = count > 0 ? Math.min(count, Math.max(4, Math.round(count * ROLE_RATIO_STRUCTURE))) : 0;
  const relationCount = Math.round(Math.max(0, count - structureCount) * ROLE_RATIO_RELATION);
  const detailCount = count - structureCount - relationCount;

  const structurePts = generator(structureCount);
  const relationPts = nearestNeighborInterpolated(structurePts, structureCount, relationCount);
  const detailPts = generator(detailCount);

  const points = new Float32Array(count * 3);
  const roles = new Uint8Array(count);
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
  write(relationPts, relationCount, NANOBOT_ROLE.RELATION);
  write(detailPts, detailCount, NANOBOT_ROLE.DETAIL);

  return { points, roles };
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
