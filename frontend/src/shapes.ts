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

// Como sampleCylinderSurface, pero el radio lateral interpola linealmente
// entre radiusBottom (y=-halfHeight) y radiusTop (y=+halfHeight) — da
// segmentos "ahusados" (bíceps más grueso que la muñeca, capó más angosto
// adelante) en vez de cilindros perfectamente rectos.
function sampleTaperedCylinderSurface(
  radiusTop: number,
  radiusBottom: number,
  halfHeight: number,
  count: number,
): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    if (Math.random() < 0.15) {
      const isTop = Math.random() < 0.5;
      const capR = isTop ? radiusTop : radiusBottom;
      const r = capR * Math.sqrt(Math.random());
      const y = isTop ? halfHeight : -halfHeight;
      pts[i * 3] = Math.cos(theta) * r;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = Math.sin(theta) * r;
    } else {
      const y = randRange(-halfHeight, halfHeight);
      const yFrac = (y + halfHeight) / (2 * halfHeight || 1);
      const radius = radiusBottom + (radiusTop - radiusBottom) * yFrac;
      pts[i * 3] = Math.cos(theta) * radius;
      pts[i * 3 + 1] = y;
      pts[i * 3 + 2] = Math.sin(theta) * radius;
    }
  }
  return pts;
}

// Hueso largo literal (fémur, húmero, etc.): dos mitades ahusadas de
// sampleTaperedCylinderSurface espalda con espalda (angosto en el medio
// -diáfisis-, ensanchando hacia cada punta) + una esfera en cada extremo
// (epífisis redondeada) — la silueta clásica de hueso, armada 100% con
// primitivos ya existentes. `halfLength` es la mitad del largo de la
// diáfisis (sin contar las esferas de las puntas).
function sampleLongBoneSurface(
  shaftRadius: number,
  endRadius: number,
  halfLength: number,
  count: number,
): Float32Array {
  const half = halfLength / 2;
  const [cap1Count, lowerCount, upperCount, cap2Count] = splitCounts(count, [12, 38, 38, 12]);
  const cap1 = translate(sampleSphereSurface(endRadius, cap1Count), 0, -halfLength, 0);
  const lower = translate(sampleTaperedCylinderSurface(shaftRadius, endRadius, half, lowerCount), 0, -half, 0);
  const upper = translate(sampleTaperedCylinderSurface(endRadius, shaftRadius, half, upperCount), 0, half, 0);
  const cap2 = translate(sampleSphereSurface(endRadius, cap2Count), 0, halfLength, 0);
  return concatParts([cap1, lower, upper, cap2]);
}

// "Líneas de acento": reparte `count` puntos a lo largo de una polilínea
// (los segmentos consecutivos de `points`), proporcional a la longitud de
// cada segmento, con un jitter uniforme pequeño en las 3 componentes —
// simula costillas/abdominales/líneas de carrocería como zonas de mayor
// densidad de puntos en vez de una sub-parte sólida. Con 2 puntos da una
// línea recta; con 3+ aproxima un arco (p.ej. paso de rueda) sin curvas.
function samplePolyline(
  points: Array<[number, number, number]>,
  count: number,
  jitter: number,
): Float32Array {
  const pts = new Float32Array(count * 3);
  if (points.length < 2 || count <= 0) return pts;
  const segCount = points.length - 1;
  const lengths: number[] = [];
  for (let i = 0; i < segCount; i++) {
    const [ax, ay, az] = points[i];
    const [bx, by, bz] = points[i + 1];
    lengths.push(Math.hypot(bx - ax, by - ay, bz - az) || 1e-6);
  }
  const segAssign = splitCounts(count, lengths);
  let cursor = 0;
  for (let seg = 0; seg < segCount; seg++) {
    const [ax, ay, az] = points[seg];
    const [bx, by, bz] = points[seg + 1];
    const n = segAssign[seg];
    for (let i = 0; i < n; i++) {
      const t = Math.random();
      pts[cursor * 3] = ax + (bx - ax) * t + randRange(-jitter, jitter);
      pts[cursor * 3 + 1] = ay + (by - ay) * t + randRange(-jitter, jitter);
      pts[cursor * 3 + 2] = az + (bz - az) * t + randRange(-jitter, jitter);
      cursor++;
    }
  }
  return pts;
}

function scaleAxis(pts: Float32Array, axis: 0 | 1 | 2, factor: number): Float32Array {
  const out = new Float32Array(pts.length);
  out.set(pts);
  for (let i = axis; i < out.length; i += 3) out[i] *= factor;
  return out;
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

// Carro deportivo: chasis bajo + capó ahusado (tubo aplanado, angosto hacia
// el paragolpes) + techo tipo cupé (corrido hacia atrás) + baúl + paragolpes
// delantero + alerón trasero (sobre 2 struts) + espejos + faros + 4 ruedas,
// más líneas de acento (capó, laterales de carrocería, pasos de rueda) como
// zonas de mayor densidad de puntos en vez de sub-partes sólidas.
function carro(count: number): Float32Array {
  const chassisHx = s * 0.62;
  const chassisHy = s * 0.14;
  const chassisHz = s * 0.42;

  const hoodHalfLen = chassisHx * 0.5;
  const hoodBackR = s * 0.3;
  const hoodFrontR = s * 0.14;
  const hoodFlatten = 0.35;

  const roofHx = s * 0.34;
  const roofHy = s * 0.16;
  const roofHz = s * 0.32;

  const trunkHx = s * 0.16;
  const trunkHy = s * 0.1;
  const trunkHz = s * 0.36;

  const bumperHx = s * 0.05;
  const bumperHy = s * 0.08;
  const bumperHz = s * 0.4;

  const wingHx = s * 0.05;
  const wingHy = s * 0.018;
  const wingHz = s * 0.34;
  const strutR = s * 0.018;
  const strutHalfH = s * 0.1;

  const mirrorHx = s * 0.045;
  const mirrorHy = s * 0.03;
  const mirrorHz = s * 0.04;

  const headlightR = s * 0.055;
  const wheelR = s * 0.22;
  const wheelHalfH = s * 0.1;

  const frontX = chassisHx;
  const rearX = -chassisHx;

  const [
    chassisCount,
    hoodCount,
    roofCount,
    trunkCount,
    bumperCount,
    wingCount,
    strutsTotal,
    mirrorsTotal,
    headlightsTotal,
    wheelsTotal,
    accentTotal,
  ] = splitCounts(count, [22, 10, 14, 6, 4, 5, 2, 2, 2, 20, 13]);

  const [leftStrutCount, rightStrutCount] = splitCounts(strutsTotal, [1, 1]);
  const [leftMirrorCount, rightMirrorCount] = splitCounts(mirrorsTotal, [1, 1]);
  const [leftHeadlightCount, rightHeadlightCount] = splitCounts(headlightsTotal, [1, 1]);
  const wheelCounts = splitCounts(wheelsTotal, [1, 1, 1, 1]);

  const chassis = sampleBoxSurface(chassisHx, chassisHy, chassisHz, chassisCount);

  // Capó: tubo ahusado (radiusTop hacia +X/adelante, más angosto) aplanado
  // en altura (eje local X, que tras rotar pasa a ser la altura mundial).
  const hood = translate(
    rotateAxisYtoX(scaleAxis(sampleTaperedCylinderSurface(hoodFrontR, hoodBackR, hoodHalfLen, hoodCount), 0, hoodFlatten)),
    hoodHalfLen,
    chassisHy + hoodBackR * hoodFlatten * 0.6,
    0,
  );

  const roof = translate(
    sampleBoxSurface(roofHx, roofHy, roofHz, roofCount),
    -chassisHx * 0.12,
    chassisHy + roofHy,
    0,
  );

  const trunk = translate(
    sampleBoxSurface(trunkHx, trunkHy, trunkHz, trunkCount),
    rearX + trunkHx * 0.6,
    chassisHy + trunkHy,
    0,
  );

  const bumper = translate(
    sampleBoxSurface(bumperHx, bumperHy, bumperHz, bumperCount),
    frontX + bumperHx * 0.7,
    -chassisHy * 0.3,
    0,
  );

  const wingY = chassisHy + trunkHy * 2 + strutHalfH * 2 + wingHy;
  const wing = translate(sampleBoxSurface(wingHx, wingHy, wingHz, wingCount), rearX + trunkHx * 0.4, wingY, 0);
  const strutBaseY = chassisHy + trunkHy * 2;
  const wingStruts = [
    translate(sampleCylinderSurface(strutR, strutHalfH, leftStrutCount), rearX + trunkHx * 0.4, strutBaseY + strutHalfH, -wingHz * 0.7),
    translate(sampleCylinderSurface(strutR, strutHalfH, rightStrutCount), rearX + trunkHx * 0.4, strutBaseY + strutHalfH, wingHz * 0.7),
  ];

  const mirrors = [
    translate(sampleBoxSurface(mirrorHx, mirrorHy, mirrorHz, leftMirrorCount), -chassisHx * 0.05, chassisHy + roofHy * 1.6, -roofHz - mirrorHz),
    translate(sampleBoxSurface(mirrorHx, mirrorHy, mirrorHz, rightMirrorCount), -chassisHx * 0.05, chassisHy + roofHy * 1.6, roofHz + mirrorHz),
  ];

  const headlights = [
    translate(sampleSphereSurface(headlightR, leftHeadlightCount), frontX * 0.96, chassisHy * 0.4, -chassisHz * 0.7),
    translate(sampleSphereSurface(headlightR, rightHeadlightCount), frontX * 0.96, chassisHy * 0.4, chassisHz * 0.7),
  ];

  const wheelOffsets: Array<[number, number]> = [
    [-chassisHx * 0.55, -chassisHz * 0.95],
    [chassisHx * 0.55, -chassisHz * 0.95],
    [-chassisHx * 0.55, chassisHz * 0.95],
    [chassisHx * 0.55, chassisHz * 0.95],
  ];
  const wheels = wheelOffsets.map(([wx, wz], i) =>
    translate(rotateAxisYtoX(sampleCylinderSurface(wheelR, wheelHalfH, wheelCounts[i])), wx, -chassisHy, wz),
  );

  const accentLines: Array<{ pts: Array<[number, number, number]>; weight: number }> = [
    {
      pts: [
        [0, chassisHy + hoodBackR * hoodFlatten, 0],
        [frontX, chassisHy + hoodFrontR * hoodFlatten, 0],
      ],
      weight: hoodHalfLen * 2,
    },
    {
      pts: [
        [rearX * 0.9, chassisHy * 0.3, -chassisHz * 0.98],
        [frontX * 0.9, chassisHy * 0.55, -chassisHz * 0.98],
      ],
      weight: chassisHx * 1.8,
    },
    {
      pts: [
        [rearX * 0.9, chassisHy * 0.3, chassisHz * 0.98],
        [frontX * 0.9, chassisHy * 0.55, chassisHz * 0.98],
      ],
      weight: chassisHx * 1.8,
    },
    ...wheelOffsets.map(([wx, wz]) => ({
      pts: [
        [wx - wheelR * 1.3, chassisHy * 0.2, wz] as [number, number, number],
        [wx, chassisHy * 0.75, wz] as [number, number, number],
        [wx + wheelR * 1.3, chassisHy * 0.2, wz] as [number, number, number],
      ],
      weight: wheelR * 2.6,
    })),
  ];
  const accentCounts = splitCounts(accentTotal, accentLines.map((l) => l.weight));
  const accentParts = accentLines.map((line, i) => samplePolyline(line.pts, accentCounts[i], s * 0.02));

  return concatParts([
    chassis,
    hood,
    roof,
    trunk,
    bumper,
    wing,
    ...wingStruts,
    ...mirrors,
    ...headlights,
    ...wheels,
    ...accentParts,
  ]);
}

// Teléfono: una sola caja delgada, alta y angosta (proporción reconocible
// de smartphone) — no necesita partes compuestas.
function telefono(count: number): Float32Array {
  return sampleBoxSurface(s * 0.42, s * 0.85, s * 0.09, count);
}

// Medidas y posiciones de la figura humana, compartidas entre el tejido
// (persona()) y el esqueleto de hueso literal (personaBones(), ver
// HUMANOID_BONE_GENERATORS más abajo) — así el hueso cae SIEMPRE alineado
// exacto bajo el tejido/piel, sin importar qué tanto cambien las
// proporciones de una fase a otra.
interface PersonaLayout {
  headR: number;
  neckR: number;
  neckHalfH: number;
  chestTopR: number;
  chestBottomR: number;
  chestHalfH: number;
  pelvisHx: number;
  pelvisHy: number;
  pelvisHz: number;
  shoulderR: number;
  upperArmTopR: number;
  upperArmBottomR: number;
  upperArmHalfH: number;
  forearmTopR: number;
  forearmBottomR: number;
  forearmHalfH: number;
  handR: number;
  thighTopR: number;
  thighBottomR: number;
  thighHalfH: number;
  calfTopR: number;
  calfBottomR: number;
  calfHalfH: number;
  footHx: number;
  footHy: number;
  footHz: number;
  waistY: number;
  pelvisCenterY: number;
  chestCenterY: number;
  chestTopY: number;
  neckCenterY: number;
  headCenterY: number;
  shoulderY: number;
  shoulderX: number;
  armX: number;
  upperArmCenterY: number;
  elbowY: number;
  forearmCenterY: number;
  wristY: number;
  handCenterY: number;
  hipX: number;
  hipY: number;
  thighCenterY: number;
  kneeY: number;
  calfCenterY: number;
  ankleY: number;
  footCenterY: number;
  chestFrontZ: number;
}

function personaLayout(): PersonaLayout {
  const headR = s * 0.2;
  const neckR = s * 0.09;
  const neckHalfH = s * 0.045;
  const chestTopR = s * 0.34;
  const chestBottomR = s * 0.22; // cintura
  const chestHalfH = s * 0.28;
  const pelvisHx = s * 0.26;
  const pelvisHy = s * 0.14;
  const pelvisHz = s * 0.18;
  const shoulderR = s * 0.07;
  const upperArmTopR = s * 0.085;
  const upperArmBottomR = s * 0.06;
  const upperArmHalfH = s * 0.22;
  const forearmTopR = s * 0.06;
  const forearmBottomR = s * 0.045;
  const forearmHalfH = s * 0.2;
  const handR = s * 0.06;
  const thighTopR = s * 0.14;
  const thighBottomR = s * 0.1;
  const thighHalfH = s * 0.28;
  const calfTopR = s * 0.1;
  const calfBottomR = s * 0.07;
  const calfHalfH = s * 0.26;
  const footHx = s * 0.06;
  const footHy = s * 0.04;
  const footHz = s * 0.14;

  // Apilado en Y a partir de la línea de cintura (waistY = 0).
  const waistY = 0;
  const pelvisCenterY = waistY - pelvisHy;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const neckCenterY = chestTopY + neckHalfH;
  const headCenterY = neckCenterY + neckHalfH + headR * 0.9;
  const shoulderY = chestTopY;
  const shoulderX = chestTopR * 0.95;
  const armX = shoulderX;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const handCenterY = wristY - handR * 0.8;
  const hipX = pelvisHx * 0.5;
  const hipY = waistY - pelvisHy * 2;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;
  const chestFrontZ = chestTopR * 0.85;

  return {
    headR, neckR, neckHalfH, chestTopR, chestBottomR, chestHalfH,
    pelvisHx, pelvisHy, pelvisHz, shoulderR,
    upperArmTopR, upperArmBottomR, upperArmHalfH,
    forearmTopR, forearmBottomR, forearmHalfH, handR,
    thighTopR, thighBottomR, thighHalfH, calfTopR, calfBottomR, calfHalfH,
    footHx, footHy, footHz,
    waistY, pelvisCenterY, chestCenterY, chestTopY, neckCenterY, headCenterY,
    shoulderY, shoulderX, armX, upperArmCenterY, elbowY, forearmCenterY, wristY, handCenterY,
    hipX, hipY, thighCenterY, kneeY, calfCenterY, ankleY, footCenterY, chestFrontZ,
  };
}

// Persona/personaje anatómico: cabeza + cuello + pecho/pelvis ahusados (V de
// torso) + hombros + brazos/piernas en 2 segmentos c/u (más grueso arriba,
// más angosto abajo, como bíceps/muslo vs. muñeca/tobillo) + manos + pies,
// más líneas de acento (costillas, clavícula, línea abdominal) imitando el
// look anatómico de holograma de la referencia.
function persona(count: number): Float32Array {
  const {
    headR, neckR, neckHalfH, chestTopR, chestBottomR, chestHalfH,
    pelvisHx, pelvisHy, pelvisHz, shoulderR,
    upperArmTopR, upperArmBottomR, upperArmHalfH,
    forearmTopR, forearmBottomR, forearmHalfH, handR,
    thighTopR, thighBottomR, thighHalfH, calfTopR, calfBottomR, calfHalfH,
    footHx, footHy, footHz,
    chestCenterY, chestTopY, neckCenterY, headCenterY,
    shoulderY, shoulderX, armX, upperArmCenterY, forearmCenterY, handCenterY,
    hipX, thighCenterY, calfCenterY, footCenterY, chestFrontZ,
    waistY, pelvisCenterY,
  } = personaLayout();

  const [
    headCount,
    neckCount,
    chestCount,
    pelvisCount,
    shouldersTotal,
    upperArmsTotal,
    forearmsTotal,
    handsTotal,
    thighsTotal,
    calvesTotal,
    feetTotal,
    accentTotal,
  ] = splitCounts(count, [8, 2, 16, 10, 2, 10, 8, 4, 14, 10, 6, 10]);

  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);
  const [leftUpperArmCount, rightUpperArmCount] = splitCounts(upperArmsTotal, [1, 1]);
  const [leftForearmCount, rightForearmCount] = splitCounts(forearmsTotal, [1, 1]);
  const [leftHandCount, rightHandCount] = splitCounts(handsTotal, [1, 1]);
  const [leftThighCount, rightThighCount] = splitCounts(thighsTotal, [1, 1]);
  const [leftCalfCount, rightCalfCount] = splitCounts(calvesTotal, [1, 1]);
  const [leftFootCount, rightFootCount] = splitCounts(feetTotal, [1, 1]);

  const head = translate(scaleAxis(sampleSphereSurface(headR, headCount), 2, 0.8), 0, headCenterY, 0);
  const neck = translate(sampleTaperedCylinderSurface(neckR, neckR * 1.1, neckHalfH, neckCount), 0, neckCenterY, 0);
  const chest = translate(sampleTaperedCylinderSurface(chestTopR, chestBottomR, chestHalfH, chestCount), 0, chestCenterY, 0);
  const pelvis = translate(sampleBoxSurface(pelvisHx, pelvisHy, pelvisHz, pelvisCount), 0, pelvisCenterY, 0);

  const shoulders = [
    translate(sampleSphereSurface(shoulderR, leftShoulderCount), -shoulderX, shoulderY, 0),
    translate(sampleSphereSurface(shoulderR, rightShoulderCount), shoulderX, shoulderY, 0),
  ];
  const upperArms = [
    translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, leftUpperArmCount), -armX, upperArmCenterY, 0),
    translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, rightUpperArmCount), armX, upperArmCenterY, 0),
  ];
  const forearms = [
    translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, leftForearmCount), -armX, forearmCenterY, 0),
    translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, rightForearmCount), armX, forearmCenterY, 0),
  ];
  const hands = [
    translate(scaleAxis(sampleSphereSurface(handR, leftHandCount), 2, 0.6), -armX, handCenterY, 0),
    translate(scaleAxis(sampleSphereSurface(handR, rightHandCount), 2, 0.6), armX, handCenterY, 0),
  ];
  const thighs = [
    translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, leftThighCount), -hipX, thighCenterY, 0),
    translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, rightThighCount), hipX, thighCenterY, 0),
  ];
  const calves = [
    translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, leftCalfCount), -hipX, calfCenterY, 0),
    translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, rightCalfCount), hipX, calfCenterY, 0),
  ];
  const feet = [
    translate(sampleBoxSurface(footHx, footHy, footHz, leftFootCount), -hipX, footCenterY, footHz * 0.5),
    translate(sampleBoxSurface(footHx, footHy, footHz, rightFootCount), hipX, footCenterY, footHz * 0.5),
  ];

  const ribY = [chestCenterY + chestHalfH * 0.5, chestCenterY, chestCenterY - chestHalfH * 0.4];
  const accentLines: Array<{ pts: Array<[number, number, number]>; weight: number }> = [
    { pts: [[-shoulderX * 0.7, shoulderY, chestFrontZ * 0.6], [shoulderX * 0.7, shoulderY, chestFrontZ * 0.6]], weight: shoulderX },
    ...ribY.map((y, i) => ({
      pts: [
        [-chestTopR * (0.75 - i * 0.08), y, chestFrontZ] as [number, number, number],
        [chestTopR * (0.75 - i * 0.08), y, chestFrontZ] as [number, number, number],
      ],
      weight: chestTopR,
    })),
    {
      pts: [
        [0, chestTopY * 0.9, chestFrontZ],
        [s * 0.02, chestCenterY, chestFrontZ * 0.95],
        [-s * 0.02, waistY + chestHalfH * 0.3, chestFrontZ * 0.9],
        [0, waistY, chestFrontZ * 0.85],
      ],
      weight: chestHalfH * 1.5,
    },
  ];
  const accentCounts = splitCounts(accentTotal, accentLines.map((l) => l.weight));
  const accentParts = accentLines.map((line, i) => samplePolyline(line.pts, accentCounts[i], s * 0.015));

  return concatParts([
    head,
    neck,
    chest,
    pelvis,
    ...shoulders,
    ...upperArms,
    ...forearms,
    ...hands,
    ...thighs,
    ...calves,
    ...feet,
    ...accentParts,
  ]);
}

// --- Partes del cuerpo formables por separado (Fase 17) ---
//
// Mismo patrón que persona()/carro(): primitivos existentes +
// translate/concatParts/splitCounts, pero escaladas para verse bien como
// objeto INDIVIDUAL (más grandes que la fracción interna equivalente
// dentro de persona()). El tejido/piel (Nanobots) sale de estas — el
// esqueleto/hueso literal (Microbots) sale de las funciones *Bones más
// abajo, ver HUMANOID_BONE_GENERATORS.

function cabeza(count: number): Float32Array {
  const headR = s * 0.5;
  const neckR = s * 0.24;
  const neckHalfH = s * 0.16;
  const headCenterY = neckHalfH + headR * 0.9;

  const [headCount, neckCount] = splitCounts(count, [85, 15]);
  const head = translate(scaleAxis(sampleSphereSurface(headR, headCount), 2, 0.82), 0, headCenterY, 0);
  const neck = translate(sampleTaperedCylinderSurface(neckR, neckR * 1.15, neckHalfH, neckCount), 0, 0, 0);
  return concatParts([head, neck]);
}

function torso(count: number): Float32Array {
  const chestTopR = s * 0.62;
  const chestBottomR = s * 0.42;
  const chestHalfH = s * 0.55;
  const pelvisHx = s * 0.48;
  const pelvisHy = s * 0.26;
  const pelvisHz = s * 0.34;
  const shoulderR = s * 0.14;

  const waistY = 0;
  const pelvisCenterY = waistY - pelvisHy;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const shoulderX = chestTopR * 0.95;

  const [chestCount, pelvisCount, shouldersTotal] = splitCounts(count, [55, 30, 15]);
  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);

  const chest = translate(sampleTaperedCylinderSurface(chestTopR, chestBottomR, chestHalfH, chestCount), 0, chestCenterY, 0);
  const pelvis = translate(sampleBoxSurface(pelvisHx, pelvisHy, pelvisHz, pelvisCount), 0, pelvisCenterY, 0);
  const shoulders = [
    translate(sampleSphereSurface(shoulderR, leftShoulderCount), -shoulderX, chestTopY, 0),
    translate(sampleSphereSurface(shoulderR, rightShoulderCount), shoulderX, chestTopY, 0),
  ];
  return concatParts([chest, pelvis, ...shoulders]);
}

// Brazo: hombro + brazo (bíceps) ahusado + codo + antebrazo ahusado + mano
// con dedos abanicados (una simple esfera achatada, como en persona(), no
// alcanza como objeto SOLO).
function brazo(count: number): Float32Array {
  const shoulderR = s * 0.22;
  const upperArmTopR = s * 0.26;
  const upperArmBottomR = s * 0.19;
  const upperArmHalfH = s * 0.6;
  const elbowR = s * 0.16;
  const forearmTopR = s * 0.18;
  const forearmBottomR = s * 0.12;
  const forearmHalfH = s * 0.55;
  const handHx = s * 0.15;
  const handHy = s * 0.2;
  const handHz = s * 0.06;
  const fingerR = s * 0.035;
  const fingerHalfH = s * 0.15;

  const shoulderY = 0;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const palmCenterY = wristY - handHy;
  const palmBottomY = wristY - handHy * 2;
  const fingerCenterY = palmBottomY - fingerHalfH;

  const [shoulderCount, upperArmCount, elbowCount, forearmCount, handCount, fingersTotal] =
    splitCounts(count, [6, 24, 4, 20, 16, 30]);
  const fingerCounts = splitCounts(fingersTotal, [1, 1, 1, 1, 1]);

  const shoulder = translate(sampleSphereSurface(shoulderR, shoulderCount), 0, shoulderY, 0);
  const upperArm = translate(sampleTaperedCylinderSurface(upperArmTopR, upperArmBottomR, upperArmHalfH, upperArmCount), 0, upperArmCenterY, 0);
  const elbow = translate(sampleSphereSurface(elbowR, elbowCount), 0, elbowY, 0);
  const forearm = translate(sampleTaperedCylinderSurface(forearmTopR, forearmBottomR, forearmHalfH, forearmCount), 0, forearmCenterY, 0);
  const hand = translate(sampleBoxSurface(handHx, handHy, handHz, handCount), 0, palmCenterY, 0);
  const fingerOffsets = [-2, -1, 0, 1, 2];
  const fingers = fingerOffsets.map((off, i) =>
    translate(sampleTaperedCylinderSurface(fingerR, fingerR * 1.3, fingerHalfH, fingerCounts[i]), off * handHx * 0.4, fingerCenterY, 0),
  );
  return concatParts([shoulder, upperArm, elbow, forearm, hand, ...fingers]);
}

// Pierna: cadera + muslo ahusado + rodilla + pantorrilla ahusada + pie con
// dedos (cajas chicas, más detalle que la caja simple de persona()).
function pierna(count: number): Float32Array {
  const hipR = s * 0.24;
  const thighTopR = s * 0.3;
  const thighBottomR = s * 0.2;
  const thighHalfH = s * 0.65;
  const kneeR = s * 0.18;
  const calfTopR = s * 0.2;
  const calfBottomR = s * 0.13;
  const calfHalfH = s * 0.62;
  const footHx = s * 0.16;
  const footHy = s * 0.09;
  const footHz = s * 0.36;
  const toeR = s * 0.04;
  const toeHalfH = s * 0.09;

  const hipY = 0;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;

  const [hipCount, thighCount, kneeCount, calfCount, footCount, toesTotal] =
    splitCounts(count, [6, 26, 4, 22, 22, 20]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const hip = translate(sampleSphereSurface(hipR, hipCount), 0, hipY, 0);
  const thigh = translate(sampleTaperedCylinderSurface(thighTopR, thighBottomR, thighHalfH, thighCount), 0, thighCenterY, 0);
  const knee = translate(sampleSphereSurface(kneeR, kneeCount), 0, kneeY, 0);
  const calf = translate(sampleTaperedCylinderSurface(calfTopR, calfBottomR, calfHalfH, calfCount), 0, calfCenterY, 0);
  const foot = translate(sampleBoxSurface(footHx, footHy, footHz, footCount), 0, footCenterY, footHz * 0.5);
  const toeOffsets = [-0.6, -0.3, 0, 0.3, 0.6];
  const toes = toeOffsets.map((off, i) =>
    translate(sampleBoxSurface(toeR, toeR, toeHalfH, toeCounts[i]), off * footHx, footCenterY, footHz + toeHalfH),
  );
  return concatParts([hip, thigh, knee, calf, foot, ...toes]);
}

// Mano: muñeca + palma + 5 dedos ahusados de largo distinto (pulgar más
// corto y separado, medio el más largo).
function mano(count: number): Float32Array {
  const wristR = s * 0.22;
  const wristHalfH = s * 0.18;
  const palmHx = s * 0.42;
  const palmHy = s * 0.5;
  const palmHz = s * 0.16;
  const fingerR = s * 0.07;
  const fingerTipR = s * 0.05;
  const fingerLengths = [0.55, 0.72, 0.78, 0.7, 0.5]; // pulgar, índice, medio, anular, meñique
  const fingerOffsetsX = [-0.85, -0.45, 0, 0.45, 0.85];

  const wristCenterY = 0;
  const palmCenterY = wristCenterY - wristHalfH - palmHy;
  const palmBottomY = palmCenterY - palmHy;

  const [wristCount, palmCount, fingersTotal] = splitCounts(count, [10, 35, 55]);
  const fingerCounts = splitCounts(fingersTotal, [0.9, 1, 1.1, 1, 0.8]);

  const wrist = translate(sampleTaperedCylinderSurface(wristR, wristR * 1.1, wristHalfH, wristCount), 0, wristCenterY, 0);
  const palm = translate(sampleBoxSurface(palmHx, palmHy, palmHz, palmCount), 0, palmCenterY, 0);
  const fingers = fingerOffsetsX.map((offX, i) => {
    const halfH = s * fingerLengths[i] * 0.5;
    return translate(
      sampleTaperedCylinderSurface(fingerR, fingerTipR, halfH, fingerCounts[i]),
      offX * palmHx,
      palmBottomY - halfH,
      0,
    );
  });
  return concatParts([wrist, palm, ...fingers]);
}

// Pie: tobillo + empeine + 5 dedos cortos.
function pie(count: number): Float32Array {
  const ankleR = s * 0.24;
  const ankleHalfH = s * 0.2;
  const footHx = s * 0.34;
  const footHy = s * 0.22;
  const footHz = s * 0.75;
  const toeR = s * 0.09;
  const toeLengthScale = [0.75, 1, 0.95, 0.85, 0.7];
  const toeOffsetsX = [-0.65, -0.3, 0, 0.3, 0.65];

  const ankleCenterY = 0;
  const footCenterY = ankleCenterY - ankleHalfH - footHy;
  const footFrontZ = footHz * 0.3 + footHz;

  const [ankleCount, footCount, toesTotal] = splitCounts(count, [10, 55, 35]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const ankle = translate(sampleTaperedCylinderSurface(ankleR, ankleR * 1.1, ankleHalfH, ankleCount), 0, ankleCenterY, 0);
  const foot = translate(sampleBoxSurface(footHx, footHy, footHz, footCount), 0, footCenterY, footHz * 0.3);
  const toes = toeOffsetsX.map((offX, i) => {
    const halfLen = s * 0.16 * toeLengthScale[i];
    return translate(sampleBoxSurface(toeR, toeR, halfLen, toeCounts[i]), offX * footHx, footCenterY, footFrontZ + halfLen);
  });
  return concatParts([ankle, foot, ...toes]);
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
  cabeza,
  torso,
  brazo,
  pierna,
  mano,
  pie,
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
  brazos: "brazo",
  piernas: "pierna",
  pies: "pie",
  manos: "mano",
  tronco: "torso",
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

// --- Hueso literal (Microbots) para formas humanoides (Fase 17) ---
//
// Para persona/cabeza/torso/brazo/pierna/mano/pie, el exoesqueleto de
// Microbots ya NO es el anclas+MST genérico de abajo — es una nube de
// puntos densa sobre huesos REALES (sampleLongBoneSurface + esferas para
// cráneo/vértebras/articulaciones), usando personaLayout() para que caiga
// exacto alineado bajo el tejido de persona()/brazo()/etc. Se lee sólido
// por densidad de puntos, igual que ya hace DETALLE/COLOR de Nanobots —
// no hace falta red de nodos+vigas para esto.
function personaBones(count: number): Float32Array {
  const L = personaLayout();
  const skullR = L.headR * 0.75;
  const spineR = L.neckR * 0.7;
  const humerusShaft = L.upperArmBottomR * 0.4;
  const humerusEnd = L.upperArmTopR * 0.55;
  const humerusHalf = L.upperArmHalfH * 0.75;
  const forearmBoneShaft = L.forearmBottomR * 0.4;
  const forearmBoneEnd = L.forearmTopR * 0.55;
  const forearmBoneHalf = L.forearmHalfH * 0.75;
  const femurShaft = L.thighBottomR * 0.4;
  const femurEnd = L.thighTopR * 0.55;
  const femurHalf = L.thighHalfH * 0.75;
  const tibiaShaft = L.calfBottomR * 0.4;
  const tibiaEnd = L.calfTopR * 0.55;
  const tibiaHalf = L.calfHalfH * 0.75;
  const handBoneR = L.handR * 0.5;
  const footBoneR = L.footHy * 0.7;

  const spineY = [L.chestTopY, L.chestCenterY, L.waistY, L.pelvisCenterY];
  const ribY = [L.chestCenterY + L.chestHalfH * 0.4, L.chestCenterY, L.chestCenterY - L.chestHalfH * 0.4];

  const [
    skullCount, spineTotal, ribsTotal,
    humerusTotal, forearmBoneTotal, handBoneTotal,
    femurTotal, tibiaBoneTotal, footBoneTotal,
  ] = splitCounts(count, [10, 10, 10, 14, 12, 4, 16, 14, 4]);

  const spineCounts = splitCounts(spineTotal, spineY.map(() => 1));
  const ribCounts = splitCounts(ribsTotal, ribY.map(() => 1));
  const [leftHumerusCount, rightHumerusCount] = splitCounts(humerusTotal, [1, 1]);
  const [leftForearmBoneCount, rightForearmBoneCount] = splitCounts(forearmBoneTotal, [1, 1]);
  const [leftHandBoneCount, rightHandBoneCount] = splitCounts(handBoneTotal, [1, 1]);
  const [leftFemurCount, rightFemurCount] = splitCounts(femurTotal, [1, 1]);
  const [leftTibiaCount, rightTibiaCount] = splitCounts(tibiaBoneTotal, [1, 1]);
  const [leftFootBoneCount, rightFootBoneCount] = splitCounts(footBoneTotal, [1, 1]);

  const skull = translate(sampleSphereSurface(skullR, skullCount), 0, L.headCenterY, 0);
  const spine = spineY.map((y, i) => translate(sampleSphereSurface(spineR, spineCounts[i]), 0, y, 0));
  const ribs = ribY.map((y, i) =>
    samplePolyline(
      [
        [-L.chestTopR * 0.7, y, L.chestFrontZ * 0.9],
        [0, y, L.chestFrontZ],
        [L.chestTopR * 0.7, y, L.chestFrontZ * 0.9],
      ],
      ribCounts[i],
      s * 0.01,
    ),
  );
  const humeri = [
    translate(sampleLongBoneSurface(humerusShaft, humerusEnd, humerusHalf, leftHumerusCount), -L.armX, L.upperArmCenterY, 0),
    translate(sampleLongBoneSurface(humerusShaft, humerusEnd, humerusHalf, rightHumerusCount), L.armX, L.upperArmCenterY, 0),
  ];
  const forearmBones = [
    translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmBoneHalf, leftForearmBoneCount), -L.armX, L.forearmCenterY, 0),
    translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmBoneHalf, rightForearmBoneCount), L.armX, L.forearmCenterY, 0),
  ];
  const handBones = [
    translate(sampleSphereSurface(handBoneR, leftHandBoneCount), -L.armX, L.handCenterY, 0),
    translate(sampleSphereSurface(handBoneR, rightHandBoneCount), L.armX, L.handCenterY, 0),
  ];
  const femurs = [
    translate(sampleLongBoneSurface(femurShaft, femurEnd, femurHalf, leftFemurCount), -L.hipX, L.thighCenterY, 0),
    translate(sampleLongBoneSurface(femurShaft, femurEnd, femurHalf, rightFemurCount), L.hipX, L.thighCenterY, 0),
  ];
  const tibiaBones = [
    translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, tibiaHalf, leftTibiaCount), -L.hipX, L.calfCenterY, 0),
    translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, tibiaHalf, rightTibiaCount), L.hipX, L.calfCenterY, 0),
  ];
  const footBones = [
    translate(sampleSphereSurface(footBoneR, leftFootBoneCount), -L.hipX, L.footCenterY, 0),
    translate(sampleSphereSurface(footBoneR, rightFootBoneCount), L.hipX, L.footCenterY, 0),
  ];

  return concatParts([
    skull, ...spine, ...ribs,
    ...humeri, ...forearmBones, ...handBones,
    ...femurs, ...tibiaBones, ...footBones,
  ]);
}

function cabezaBones(count: number): Float32Array {
  const headR = s * 0.5;
  const neckHalfH = s * 0.16;
  const skullR = headR * 0.8;
  const headCenterY = neckHalfH + headR * 0.9;
  const spineR = s * 0.1;
  const [skullCount, spineCount] = splitCounts(count, [80, 20]);
  const skull = translate(sampleSphereSurface(skullR, skullCount), 0, headCenterY, 0);
  const spine = translate(sampleSphereSurface(spineR, spineCount), 0, 0, 0);
  return concatParts([skull, spine]);
}

function torsoBones(count: number): Float32Array {
  const chestTopR = s * 0.62;
  const chestHalfH = s * 0.55;
  const pelvisHy = s * 0.26;
  const waistY = 0;
  const chestCenterY = waistY + chestHalfH;
  const chestTopY = chestCenterY + chestHalfH;
  const pelvisCenterY = waistY - pelvisHy;
  const chestFrontZ = chestTopR * 0.85;
  const shoulderX = chestTopR * 0.95;
  const spineR = s * 0.09;
  const shoulderBladeR = s * 0.12;

  const spineY = [chestTopY, chestCenterY, waistY, pelvisCenterY];
  const ribY = [chestCenterY + chestHalfH * 0.4, chestCenterY, chestCenterY - chestHalfH * 0.4];

  const [spineTotal, ribsTotal, shouldersTotal] = splitCounts(count, [30, 45, 25]);
  const spineCounts = splitCounts(spineTotal, spineY.map(() => 1));
  const ribCounts = splitCounts(ribsTotal, ribY.map(() => 1));
  const [leftShoulderCount, rightShoulderCount] = splitCounts(shouldersTotal, [1, 1]);

  const spine = spineY.map((y, i) => translate(sampleSphereSurface(spineR, spineCounts[i]), 0, y, 0));
  const ribs = ribY.map((y, i) =>
    samplePolyline(
      [
        [-chestTopR * 0.7, y, chestFrontZ * 0.9],
        [0, y, chestFrontZ],
        [chestTopR * 0.7, y, chestFrontZ * 0.9],
      ],
      ribCounts[i],
      s * 0.01,
    ),
  );
  const shoulders = [
    translate(sampleSphereSurface(shoulderBladeR, leftShoulderCount), -shoulderX, chestTopY, 0),
    translate(sampleSphereSurface(shoulderBladeR, rightShoulderCount), shoulderX, chestTopY, 0),
  ];
  return concatParts([...spine, ...ribs, ...shoulders]);
}

function brazoBones(count: number): Float32Array {
  const upperArmHalfH = s * 0.6;
  const forearmHalfH = s * 0.55;
  const handHy = s * 0.2;
  const shoulderY = 0;
  const upperArmCenterY = shoulderY - upperArmHalfH;
  const elbowY = shoulderY - upperArmHalfH * 2;
  const forearmCenterY = elbowY - forearmHalfH;
  const wristY = elbowY - forearmHalfH * 2;
  const handCenterY = wristY - handHy;

  const humerusShaft = s * 0.08;
  const humerusEnd = s * 0.13;
  const forearmBoneShaft = s * 0.06;
  const forearmBoneEnd = s * 0.1;
  const handBoneR = s * 0.09;

  const [humerusCount, forearmBoneCount, handBoneCount] = splitCounts(count, [40, 40, 20]);
  const humerus = translate(sampleLongBoneSurface(humerusShaft, humerusEnd, upperArmHalfH * 0.8, humerusCount), 0, upperArmCenterY, 0);
  const forearmBone = translate(sampleLongBoneSurface(forearmBoneShaft, forearmBoneEnd, forearmHalfH * 0.8, forearmBoneCount), 0, forearmCenterY, 0);
  const handBone = translate(sampleSphereSurface(handBoneR, handBoneCount), 0, handCenterY, 0);
  return concatParts([humerus, forearmBone, handBone]);
}

function piernaBones(count: number): Float32Array {
  const thighHalfH = s * 0.65;
  const calfHalfH = s * 0.62;
  const footHy = s * 0.09;
  const hipY = 0;
  const thighCenterY = hipY - thighHalfH;
  const kneeY = hipY - thighHalfH * 2;
  const calfCenterY = kneeY - calfHalfH;
  const ankleY = kneeY - calfHalfH * 2;
  const footCenterY = ankleY - footHy;

  const femurShaft = s * 0.1;
  const femurEnd = s * 0.16;
  const tibiaShaft = s * 0.08;
  const tibiaEnd = s * 0.12;
  const footBoneR = s * 0.1;

  const [femurCount, tibiaCount, footBoneCount] = splitCounts(count, [42, 40, 18]);
  const femur = translate(sampleLongBoneSurface(femurShaft, femurEnd, thighHalfH * 0.8, femurCount), 0, thighCenterY, 0);
  const tibia = translate(sampleLongBoneSurface(tibiaShaft, tibiaEnd, calfHalfH * 0.8, tibiaCount), 0, calfCenterY, 0);
  const footBone = translate(sampleSphereSurface(footBoneR, footBoneCount), 0, footCenterY, 0);
  return concatParts([femur, tibia, footBone]);
}

function manoBones(count: number): Float32Array {
  const wristHalfH = s * 0.18;
  const palmHy = s * 0.5;
  const palmHx = s * 0.42;
  const fingerLengths = [0.55, 0.72, 0.78, 0.7, 0.5];
  const fingerOffsetsX = [-0.85, -0.45, 0, 0.45, 0.85];

  const wristCenterY = 0;
  const palmCenterY = wristCenterY - wristHalfH - palmHy;
  const palmBottomY = palmCenterY - palmHy;

  const wristR = s * 0.08;
  const metacarpalR = s * 0.035;

  const [wristCount, fingersTotal] = splitCounts(count, [15, 85]);
  const fingerCounts = splitCounts(fingersTotal, [0.9, 1, 1.1, 1, 0.8]);

  const wrist = translate(sampleSphereSurface(wristR, wristCount), 0, wristCenterY, 0);
  const fingers = fingerOffsetsX.map((offX, i) => {
    const halfH = s * fingerLengths[i] * 0.4;
    return translate(
      sampleLongBoneSurface(metacarpalR * 0.7, metacarpalR, halfH, fingerCounts[i]),
      offX * palmHx,
      palmBottomY - halfH,
      0,
    );
  });
  return concatParts([wrist, ...fingers]);
}

function pieBones(count: number): Float32Array {
  const ankleHalfH = s * 0.2;
  const footHy = s * 0.22;
  const footHz = s * 0.75;
  const footHx = s * 0.34;
  const toeLengthScale = [0.75, 1, 0.95, 0.85, 0.7];
  const toeOffsetsX = [-0.65, -0.3, 0, 0.3, 0.65];

  const ankleCenterY = 0;
  const footCenterY = ankleCenterY - ankleHalfH - footHy;
  const footFrontZ = footHz * 0.3 + footHz;

  const ankleR = s * 0.1;
  const metatarsalR = s * 0.04;

  const [ankleCount, toesTotal] = splitCounts(count, [20, 80]);
  const toeCounts = splitCounts(toesTotal, [1, 1, 1, 1, 1]);

  const ankle = translate(sampleSphereSurface(ankleR, ankleCount), 0, ankleCenterY, 0);
  const toes = toeOffsetsX.map((offX, i) => {
    const halfLen = s * 0.16 * toeLengthScale[i] * 0.7;
    return translate(
      sampleLongBoneSurface(metatarsalR * 0.7, metatarsalR, halfLen, toeCounts[i]),
      offX * footHx,
      footCenterY,
      footFrontZ * 0.6,
    );
  });
  return concatParts([ankle, ...toes]);
}

// Formas humanoides con hueso LITERAL (Fase 17): buildExoskeleton() usa
// esto en vez del anclas+MST genérico de abajo cuando el nombre matchea —
// las formas no-humanoides (cubo, carro, etc.) no tienen huesos reales,
// así que siguen con el exoesqueleto genérico.
const HUMANOID_BONE_GENERATORS: Record<string, (count: number) => Float32Array> = {
  persona: personaBones,
  cabeza: cabezaBones,
  torso: torsoBones,
  brazo: brazoBones,
  pierna: piernaBones,
  mano: manoBones,
  pie: pieBones,
};

// --- Exoesqueleto de Microbots (Fase 15) ---
//
// Población aparte de Nanobots: arma un esqueleto/exoesqueleto SOLO de
// nodos (anclas, farthest-point) + vigas (MST + vecinos cercanos) a MUCHA
// más resolución que el (ex) esqueleto de Nanobots, ya que Nanobots ahora
// solo rellena/pinta encima (ver comentario sobre SKELETON arriba). No
// tiene roles COLOR/DETALLE ni olas — es un único cuerpo sólido.
//
// El número de anclas (nodos) se limita a MICROBOT_ANCHOR_CAP: tanto
// farthestPointSample como el MST son ~O(anchorCount²) — con
// microbotCount en las decenas de miles haría falta acotar las anclas
// (que solo necesitan ser suficientes para una malla bien repartida, no
// una por microbot) para que "Formar objeto" no se trabe. El resto del
// budget (la gran mayoría) va a vigas, que son O(outCount) — baratas a
// cualquier escala.
const MICROBOT_ANCHOR_RATIO = 0.12;
const MICROBOT_ANCHOR_CAP = 2000;

export interface Exoskeleton {
  points: Float32Array; // count*3 floats, ya trasladados a `center`
  isBeam: Uint8Array; // largo count: 1 = viga (usar relationSpans), 0 = nodo/ancla
  relationSpans: Float32Array; // count*6 floats, solo válido para vigas
}

export function buildExoskeleton(
  name: string,
  count: number,
  center: [number, number, number] = FORMATION_CENTER,
): Exoskeleton | null {
  const canonical = resolveShapeName(name);
  if (!canonical) return null;

  const boneGenerator = HUMANOID_BONE_GENERATORS[canonical];
  if (boneGenerator) {
    const pts = boneGenerator(count);
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      points[i * 3 + 0] = pts[i * 3 + 0] + center[0];
      points[i * 3 + 1] = pts[i * 3 + 1] + center[1];
      points[i * 3 + 2] = pts[i * 3 + 2] + center[2];
    }
    return { points, isBeam: new Uint8Array(count), relationSpans: new Float32Array(count * 6) };
  }

  const generator = SHAPE_GENERATORS[canonical];

  const anchorCount =
    count > 0 ? Math.min(count, MICROBOT_ANCHOR_CAP, Math.max(4, Math.round(count * MICROBOT_ANCHOR_RATIO))) : 0;
  const beamCount = Math.max(0, count - anchorCount);

  const anchors = buildStructureAnchors(generator, anchorCount);
  const edges = buildRelationEdges(anchors, anchorCount);
  const { points: beamPts, spans: beamSpansLocal } = assignRelationEdges(anchors, edges, beamCount);

  const points = new Float32Array(count * 3);
  const isBeam = new Uint8Array(count);
  const relationSpans = new Float32Array(count * 6);
  let cursor = 0;

  for (let i = 0; i < anchorCount; i++) {
    points[cursor * 3 + 0] = anchors[i * 3 + 0] + center[0];
    points[cursor * 3 + 1] = anchors[i * 3 + 1] + center[1];
    points[cursor * 3 + 2] = anchors[i * 3 + 2] + center[2];
    cursor++;
  }
  for (let i = 0; i < beamCount; i++) {
    points[cursor * 3 + 0] = beamPts[i * 3 + 0] + center[0];
    points[cursor * 3 + 1] = beamPts[i * 3 + 1] + center[1];
    points[cursor * 3 + 2] = beamPts[i * 3 + 2] + center[2];
    isBeam[cursor] = 1;
    relationSpans[cursor * 6 + 0] = beamSpansLocal[i * 6 + 0] + center[0];
    relationSpans[cursor * 6 + 1] = beamSpansLocal[i * 6 + 1] + center[1];
    relationSpans[cursor * 6 + 2] = beamSpansLocal[i * 6 + 2] + center[2];
    relationSpans[cursor * 6 + 3] = beamSpansLocal[i * 6 + 3] + center[0];
    relationSpans[cursor * 6 + 4] = beamSpansLocal[i * 6 + 4] + center[1];
    relationSpans[cursor * 6 + 5] = beamSpansLocal[i * 6 + 5] + center[2];
    cursor++;
  }

  return { points, isBeam, relationSpans };
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
  // ESTRUCTURA/RELACION quedan en 0 (ver comentario arriba) — todo el
  // budget restante va a DETALLE.
  const detailCount = Math.max(0, count - colorCount);
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
