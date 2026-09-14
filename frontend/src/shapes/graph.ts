// acumulaban líneas redundantes cruzando el interior.
export function buildMinimumSpanningTree(anchors: Float32Array, anchorCount: number): Array<[number, number]> {
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
export const EXTRA_NEAREST_PER_ANCHOR = 2;

export function buildExtraNearestEdges(
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
export function buildRelationEdges(anchors: Float32Array, anchorCount: number): Array<[number, number]> {
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
export function assignRelationEdges(
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
export const STRUCTURE_OVERSAMPLE_FACTOR = 4;

// Elige `want` puntos de entre `candidates` (candidateCount de ellos) con
// farthest-point sampling (greedy: cada nuevo punto es el más lejano a
// todos los ya elegidos): da una distribución PAREJA por toda la silueta de
// la figura en vez de la aglomeración/huecos que deja un muestreo al azar
// crudo — el "exoesqueleto" de ESTRUCTURA queda cubriendo la forma de
// manera uniforme, para que RELACION tenga anclas bien repartidas a las
// que conectarse en cualquier zona de la figura.
export function farthestPointSample(candidates: Float32Array, candidateCount: number, want: number): Float32Array {
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
export function buildStructureAnchors(generator: (n: number) => Float32Array, count: number): Float32Array {
  if (count <= 0) return new Float32Array(0);
  const oversampled = generator(count * STRUCTURE_OVERSAMPLE_FACTOR);
  return farthestPointSample(oversampled, oversampled.length / 3, count);
}
