import { SHAPE_HALF_EXTENT } from "./shapes";
import { loadImageBufferSquare } from "./vision/image-buffer";
import { segmentByFloodFill } from "./vision/segmentation";
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

// El flood fill vive ahora en vision/segmentation.ts, generalizado a
// frames no cuadrados y con el umbral como parámetro (Fase 38). Acá queda
// el envoltorio cuadrado que este archivo necesita: los 7 tests de
// visual-hull.test.ts siguen pasando SIN TOCARSE, que es la prueba de que
// la generalización es fiel y no una reescritura con otro nombre — el
// mismo criterio con el que el VoxelGrid absorbió esta misma grilla en la
// Fase 30.
export function silhouetteFromPixels(pixels: Uint8ClampedArray, size: number): Silhouette {
  const { mask } = segmentByFloodFill(pixels, size, size);
  return { mask, size };
}

async function loadPixels(file: File, size: number): Promise<Uint8ClampedArray> {
  const { pixels } = await loadImageBufferSquare(file, size);
  return pixels;
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
