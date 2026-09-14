import { randRange, s } from "./constants";

// --- Generadores: cada uno devuelve count*3 floats centrados en (0,0,0) ---

export function cubo(count: number): Float32Array {
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
export function esfera(count: number): Float32Array {
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
export function piramide(count: number): Float32Array {
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
export function estrella(count: number): Float32Array {
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
export function anillo(count: number): Float32Array {
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
export function corazon(count: number): Float32Array {
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
export function cruz(count: number): Float32Array {
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
