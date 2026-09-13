import { SHAPE_HALF_EXTENT } from "./shapes";

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
const DEFAULT_VOXEL_RES = 48;
// Distancia de color (RGB, 0-255 por eje) al fondo asumido para separar
// objeto/fondo — mismo orden de magnitud que CLUSTER_MERGE_DISTANCE de
// image-color.ts. Sin IA: funciona mejor con fondo liso y contrastante.
const BACKGROUND_DISTANCE = 60;

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

// Separa objeto/fondo por distancia de color al promedio de las 4
// esquinas (asumido como "color de fondo") — pura, testeable sin DOM.
export function silhouetteFromPixels(pixels: Uint8ClampedArray, size: number): Silhouette {
  const corners: Array<[number, number]> = [
    [0, 0],
    [size - 1, 0],
    [0, size - 1],
    [size - 1, size - 1],
  ];
  let bgR = 0, bgG = 0, bgB = 0;
  for (const [cx, cy] of corners) {
    const idx = (cy * size + cx) * 4;
    bgR += pixels[idx];
    bgG += pixels[idx + 1];
    bgB += pixels[idx + 2];
  }
  bgR /= corners.length;
  bgG /= corners.length;
  bgB /= corners.length;

  const mask = new Uint8Array(size * size);
  const thresholdSq = BACKGROUND_DISTANCE * BACKGROUND_DISTANCE;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const dr = pixels[idx] - bgR;
      const dg = pixels[idx + 1] - bgG;
      const db = pixels[idx + 2] - bgB;
      mask[y * size + x] = dr * dr + dg * dg + db * db > thresholdSq ? 1 : 0;
    }
  }
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

// Talla la grilla de vóxeles intersectando las 4 siluetas y devuelve los
// centros de los vóxeles de SUPERFICIE (con al menos 1 de 6 vecinos que
// no sobrevivió, o en el borde de la grilla) como nube de puntos —
// directamente consumible por registerCustomScan (shapes.ts). Costo:
// ~voxelRes³ operaciones simples, UNA sola vez al reconstruir (no es un
// costo por-frame, no afecta el framerate del render).
export function carveVisualHull(
  front: Silhouette,
  back: Silhouette,
  left: Silhouette,
  right: Silhouette,
  voxelRes: number = DEFAULT_VOXEL_RES,
): Float32Array {
  const s = SHAPE_HALF_EXTENT;
  const kept = new Uint8Array(voxelRes * voxelRes * voxelRes);
  const idx = (vx: number, vy: number, vz: number) => (vz * voxelRes + vy) * voxelRes + vx;
  const worldCoord = (v: number) => ((v + 0.5) / voxelRes - 0.5) * 2 * s;

  for (let vz = 0; vz < voxelRes; vz++) {
    const z = worldCoord(vz);
    for (let vy = 0; vy < voxelRes; vy++) {
      const y = worldCoord(vy);
      for (let vx = 0; vx < voxelRes; vx++) {
        const x = worldCoord(vx);

        const [fpx, fpy] = project(x, y, s, front.size);
        if (!inMask(front.mask, front.size, fpx, fpy)) continue;
        const [bpx, bpy] = project(-x, y, s, back.size);
        if (!inMask(back.mask, back.size, bpx, bpy)) continue;
        const [lpx, lpy] = project(z, y, s, left.size);
        if (!inMask(left.mask, left.size, lpx, lpy)) continue;
        const [rpx, rpy] = project(-z, y, s, right.size);
        if (!inMask(right.mask, right.size, rpx, rpy)) continue;

        kept[idx(vx, vy, vz)] = 1;
      }
    }
  }

  const surfacePoints: number[] = [];
  for (let vz = 0; vz < voxelRes; vz++) {
    for (let vy = 0; vy < voxelRes; vy++) {
      for (let vx = 0; vx < voxelRes; vx++) {
        if (!kept[idx(vx, vy, vz)]) continue;
        const onBoundary =
          vx === 0 || vx === voxelRes - 1 || vy === 0 || vy === voxelRes - 1 || vz === 0 || vz === voxelRes - 1;
        const isSurface =
          onBoundary ||
          !kept[idx(vx - 1, vy, vz)] ||
          !kept[idx(vx + 1, vy, vz)] ||
          !kept[idx(vx, vy - 1, vz)] ||
          !kept[idx(vx, vy + 1, vz)] ||
          !kept[idx(vx, vy, vz - 1)] ||
          !kept[idx(vx, vy, vz + 1)];
        if (!isSurface) continue;
        surfacePoints.push(worldCoord(vx), worldCoord(vy), worldCoord(vz));
      }
    }
  }
  return new Float32Array(surfacePoints);
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
