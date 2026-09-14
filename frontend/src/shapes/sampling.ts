import { randRange } from "./constants";

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
export function splitCounts(total: number, weights: number[]): number[] {
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

export function sampleBoxSurface(hx: number, hy: number, hz: number, count: number): Float32Array {
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

export function sampleSphereSurface(radius: number, count: number): Float32Array {
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

// Igual que sampleSphereSurface, pero restringe la misma distribución de
// ángulo dorado a una banda de latitud (yFrac entre yFracMin y yFracMax,
// en vez de [-1,1] completo) — sin muestreo por rechazo, mismo costo
// O(count) que la original. Sirve para separar "cabello" (banda superior
// de la cabeza) de "piel" (esfera completa) sin tener que excluir puntos:
// el cabello, a un radio levemente mayor, tapa visualmente a la piel de
// esa banda (mismo principio de solapamiento que ya usa el resto del
// archivo, p.ej. hombros/torso).
export function sampleSphereSurfaceBand(radius: number, count: number, yFracMin: number, yFracMax: number): Float32Array {
  const pts = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const t = count > 1 ? i / (count - 1) : 0;
    const yFrac = yFracMax - t * (yFracMax - yFracMin);
    const r = Math.sqrt(Math.max(0, 1 - yFrac * yFrac));
    const theta = goldenAngle * i;
    pts[i * 3] = Math.cos(theta) * r * radius;
    pts[i * 3 + 1] = yFrac * radius;
    pts[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return pts;
}

// Post-proceso barato (O(count), se corre UNA vez al formar la figura, no
// por frame): para cada punto ya generado (relativo al centro de la
// esfera/elipsoide que lo contiene), si su dirección cae dentro de un
// cono alrededor de (dirX,dirY,dirZ) — umbral `coneCos` = coseno del
// ángulo del cono, más alto = cono más angosto — lo acerca al centro
// (`pullFactor` < 1) para fingir una concavidad (cuenca ocular, cavidad
// nasal) sobre una superficie ya generada, sin necesitar geometría
// cóncava real (esto es una nube de puntos, no una malla con booleanas).
export function carveSocket(
  pts: Float32Array,
  count: number,
  dirX: number,
  dirY: number,
  dirZ: number,
  coneCos: number,
  pullFactor: number,
): void {
  const len = Math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ) || 1;
  const ux = dirX / len, uy = dirY / len, uz = dirZ / len;
  for (let i = 0; i < count; i++) {
    const x = pts[i * 3], y = pts[i * 3 + 1], z = pts[i * 3 + 2];
    const r = Math.sqrt(x * x + y * y + z * z) || 1;
    const cos = (x * ux + y * uy + z * uz) / r;
    if (cos < coneCos) continue;
    pts[i * 3] = x * pullFactor;
    pts[i * 3 + 1] = y * pullFactor;
    pts[i * 3 + 2] = z * pullFactor;
  }
}

// Cilindro con eje en Y (igual que THREE.CylinderGeometry): superficie
// lateral (85%) + tapas (15%).
export function sampleCylinderSurface(radius: number, halfHeight: number, count: number): Float32Array {
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
export function sampleTaperedCylinderSurface(
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
export function sampleLongBoneSurface(
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
export function samplePolyline(
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

export function scaleAxis(pts: Float32Array, axis: 0 | 1 | 2, factor: number): Float32Array {
  const out = new Float32Array(pts.length);
  out.set(pts);
  for (let i = axis; i < out.length; i += 3) out[i] *= factor;
  return out;
}

export function translate(pts: Float32Array, dx: number, dy: number, dz: number): Float32Array {
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
export function rotateAxisYtoX(pts: Float32Array): Float32Array {
  const out = new Float32Array(pts.length);
  for (let i = 0; i < pts.length; i += 3) {
    out[i] = pts[i + 1];
    out[i + 1] = -pts[i];
    out[i + 2] = pts[i + 2];
  }
  return out;
}

export function concatParts(parts: Float32Array[]): Float32Array {
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
