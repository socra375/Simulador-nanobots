import { SHAPE_HALF_EXTENT } from "./shapes";
import {
  createVoxelGrid,
  DEFAULT_VOXEL_RES,
  surfacePoints,
  voxelIndex,
  voxelWorldCoord,
  type VoxelGrid,
} from "./voxel/grid";

// Fase 23 — Reconstrucción 3D real desde 4 fotos (frente/atrás/lateral
// izq./lateral der.) vía "visual hull" (shape-from-silhouette): una
// técnica clásica de visión por computadora SIN modelo de IA — se talla
// una grilla de vóxeles intersectando las 4 siluetas (siempre y cuando
// una posición 3D caiga DENTRO del contorno del objeto en las 4 fotos a
// la vez, sobrevive). No es un escaneo tipo LIDAR: concavidades
// invisibles desde las 4 vistas quedan "rellenas" (el visual hull
// sobre-aproxima esas zonas), y no hay alineación automática entre fotos
// — el objeto debe estar centrado y a tamaño similar en las 4 tomas.
//
// Convención de cámara asumida (las 4 fotos se toman con la cámara en
// posición vertical normal, sin inclinar):
// - Frente: mirando el objeto de frente -> pixel_x ~ +x del mundo.
// - Atrás: dando la vuelta al objeto -> pixel_x ~ -x del mundo (se ve
//   invertido en X respecto al frente, como cualquier objeto visto por
//   detrás).
// - Lateral izquierdo: parado a la izquierda del objeto -> pixel_x ~ +z.
// - Lateral derecho: parado a la derecha -> pixel_x ~ -z.
// El eje vertical (Y) es el mismo en las 4 fotos (cámara siempre en
// posición normal, sin rotarla).

const SILHOUETTE_SIZE = 128;
// Diferencia de color tolerada (RGB, 0-255 por eje) entre un píxel de
// fondo YA confirmado y su vecino inmediato durante el flood fill de
// abajo. Es un umbral LOCAL (paso a paso), no una distancia a un color
// de referencia fijo — por eso tolera fondos con degradé/iluminación
// desigual (probado en Fase 23: un fondo de estudio con degradé engañaba
// por completo al umbral fijo anterior, ya que la esquina y el centro del
// fondo podían diferir mucho más que esto aun siendo "el mismo fondo").
const FLOOD_STEP_THRESHOLD = 18;

export interface ScanPhotos {
  front: File;
  back: File;
  left: File;
  right: File;
}

export interface Silhouette {
  mask: Uint8Array; // size*size, 1 = objeto, 0 = fondo
  size: number;
}

// Separa objeto/fondo por flood fill (relleno por continuidad) desde el
// borde del frame: se asume que el borde es fondo (mismo supuesto de
// antes), pero en vez de compararlo con un único color de referencia fijo
// (promedio de las 4 esquinas), el fondo se "propaga" hacia adentro
// píxel a píxel mientras el salto de color entre vecinos sea chico — así
// sigue el degradé del fondo en vez de romperse con él. Cualquier píxel
// al que el flood fill no llega (por un salto de color grande, el borde
// real del objeto) queda como objeto. Pura, testeable sin DOM.
export function silhouetteFromPixels(pixels: Uint8ClampedArray, size: number): Silhouette {
  const isBackground = new Uint8Array(size * size);
  const visited = new Uint8Array(size * size);
  const queue: number[] = [];

  const colorAt = (i: number): [number, number, number] => {
    const idx = i * 4;
    return [pixels[idx], pixels[idx + 1], pixels[idx + 2]];
  };

  for (let x = 0; x < size; x++) {
    queue.push(x); // fila de arriba
    queue.push((size - 1) * size + x); // fila de abajo
  }
  for (let y = 0; y < size; y++) {
    queue.push(y * size); // columna izquierda
    queue.push(y * size + size - 1); // columna derecha
  }
  for (const i of queue) {
    if (!visited[i]) {
      visited[i] = 1;
      isBackground[i] = 1;
    }
  }

  const thresholdSq = FLOOD_STEP_THRESHOLD * FLOOD_STEP_THRESHOLD;
  let head = 0;
  while (head < queue.length) {
    const i = queue[head++];
    const [r, g, b] = colorAt(i);
    const x = i % size;
    const y = (i - x) / size;
    const neighbors: number[] = [];
    if (x > 0) neighbors.push(i - 1);
    if (x < size - 1) neighbors.push(i + 1);
    if (y > 0) neighbors.push(i - size);
    if (y < size - 1) neighbors.push(i + size);
    for (const n of neighbors) {
      if (visited[n]) continue;
      const [nr, ng, nb] = colorAt(n);
      const dr = nr - r, dg = ng - g, db = nb - b;
      visited[n] = 1;
      if (dr * dr + dg * dg + db * db <= thresholdSq) {
        isBackground[n] = 1;
        queue.push(n);
      }
    }
  }

  const mask = new Uint8Array(size * size);
  for (let i = 0; i < size * size; i++) mask[i] = isBackground[i] ? 0 : 1;
  return { mask, size };
}

function loadPixels(file: File, size: number): Promise<Uint8ClampedArray> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas 2D no disponible"));
          return;
        }
        ctx.drawImage(img, 0, 0, size, size);
        resolve(ctx.getImageData(0, 0, size, size).data);
      } catch (err) {
        reject(err);
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("No se pudo cargar la foto"));
    };
    img.src = url;
  });
}

export async function extractSilhouette(file: File, size: number = SILHOUETTE_SIZE): Promise<Silhouette> {
  const pixels = await loadPixels(file, size);
  return silhouetteFromPixels(pixels, size);
}

function inMask(mask: Uint8Array, size: number, px: number, py: number): boolean {
  if (px < 0 || px >= size || py < 0 || py >= size) return false;
  return mask[py * size + px] === 1;
}

// Proyección ortográfica: `a` es la coordenada horizontal de esa vista
// (ver convención de cámara arriba), `b` siempre el mundo-Y (compartido
// por las 4 vistas). Ambos en [-s, s] -> pixel [0, size).
function project(a: number, b: number, s: number, size: number): [number, number] {
  const px = Math.floor(((a / s + 1) / 2) * size);
  const py = Math.floor(((-b / s + 1) / 2) * size); // Y de imagen crece hacia abajo
  return [px, py];
}

// Talla la grilla de vóxeles intersectando las 4 siluetas: un vóxel
// sobrevive sólo si cae dentro del contorno en las CUATRO vistas a la vez
// — eso es el visual hull. Costo: ~voxelRes³ operaciones simples, UNA sola
// vez al reconstruir (no es un costo por-frame, no afecta el framerate).
//
// Fase 30: la grilla de ocupación que esto armaba a mano ahora es un
// VoxelGrid (voxel/grid.ts). Misma convención de índices y coordenadas;
// lo único que cambió es de dónde sale el Uint8Array.
export function carveVisualHullGrid(
  front: Silhouette,
  back: Silhouette,
  left: Silhouette,
  right: Silhouette,
  voxelRes: number = DEFAULT_VOXEL_RES,
): VoxelGrid {
  const s = SHAPE_HALF_EXTENT;
  const grid = createVoxelGrid(voxelRes, s);

  for (let vz = 0; vz < voxelRes; vz++) {
    const z = voxelWorldCoord(vz, voxelRes, s);
    for (let vy = 0; vy < voxelRes; vy++) {
      const y = voxelWorldCoord(vy, voxelRes, s);
      for (let vx = 0; vx < voxelRes; vx++) {
        const x = voxelWorldCoord(vx, voxelRes, s);

        const [fpx, fpy] = project(x, y, s, front.size);
        if (!inMask(front.mask, front.size, fpx, fpy)) continue;
        const [bpx, bpy] = project(-x, y, s, back.size);
        if (!inMask(back.mask, back.size, bpx, bpy)) continue;
        const [lpx, lpy] = project(z, y, s, left.size);
        if (!inMask(left.mask, left.size, lpx, lpy)) continue;
        const [rpx, rpy] = project(-z, y, s, right.size);
        if (!inMask(right.mask, right.size, rpx, rpy)) continue;

        grid.occupied[voxelIndex(vx, vy, vz, voxelRes)] = 1;
      }
    }
  }
  return grid;
}

// Los centros de los vóxeles de SUPERFICIE del visual hull, como nube de
// puntos — directamente consumible por registerCustomScan (shapes.ts).
//
// La firma y el resultado son idénticos a los de antes de la Fase 30: los
// 7 tests de este archivo pasan sin tocarse, que es justamente la prueba
// de que el VoxelGrid generaliza lo que había y no lo reemplaza por algo
// parecido.
export function carveVisualHull(
  front: Silhouette,
  back: Silhouette,
  left: Silhouette,
  right: Silhouette,
  voxelRes: number = DEFAULT_VOXEL_RES,
): Float32Array {
  return surfacePoints(carveVisualHullGrid(front, back, left, right, voxelRes));
}

// Wrapper de extremo a extremo: de los 4 archivos a la nube de puntos
// final. Es lo único que ui.ts necesita llamar.
export async function buildVisualHullPoints(photos: ScanPhotos, voxelRes: number = DEFAULT_VOXEL_RES): Promise<Float32Array> {
  const [front, back, left, right] = await Promise.all([
    extractSilhouette(photos.front),
    extractSilhouette(photos.back),
    extractSilhouette(photos.left),
    extractSilhouette(photos.right),
  ]);
  return carveVisualHull(front, back, left, right, voxelRes);
}
