// Carga de imagen compartida (Fase 38).
//
// Hasta acá había DOS cargadores imagen->canvas independientes y con
// políticas distintas: `loadPixels` en visual-hull.ts (128px, RECHAZA la
// promesa ante error) y `extractFromFile` en image-color.ts (32px, cae a
// un fallback para no bloquear "Formar objeto"). Las dos deforman la
// imagen a un cuadrado.
//
// Deformar a cuadrado era inocuo mientras la salida era un histograma de
// colores o una silueta que después se intersecaba con otras tres igual
// de deformadas. Deja de serlo cuando la silueta de UNA sola foto define
// la geometría: un auto apaisado reconstruido desde un canvas cuadrado
// sale con las proporciones mal. Por eso este cargador conserva la
// relación de aspecto y devuelve el ancho y el alto reales.
//
// La política de error no se unifica a la fuerza: `loadImageBuffer`
// rechaza (quien reconstruye necesita saber que falló) y quien prefiera
// un fallback lo envuelve, que es lo que hace image-color.ts.

/** Píxeles RGBA de una imagen, con sus dimensiones reales. */
export interface ImageBuffer {
  /** width*height*4, RGBA. */
  readonly pixels: Uint8ClampedArray;
  readonly width: number;
  readonly height: number;
}

/** Lado máximo por defecto al que se reduce la imagen antes de procesarla. */
export const DEFAULT_MAX_SIDE = 192;

/**
 * Dimensiones a las que reducir una imagen para que su lado mayor no
 * pase de `maxSide`, conservando la relación de aspecto. Nunca agranda:
 * una imagen chica se procesa a su tamaño real en vez de interpolarse,
 * que no agregaría información.
 *
 * Pura y testeable: el redimensionado es donde se pierden las
 * proporciones, así que conviene poder afirmarlo sin un DOM.
 */
export function fitDimensions(
  width: number,
  height: number,
  maxSide: number = DEFAULT_MAX_SIDE,
): { width: number; height: number } {
  if (width <= 0 || height <= 0) return { width: 0, height: 0 };
  const longest = Math.max(width, height);
  if (longest <= maxSide) return { width, height };
  const scale = maxSide / longest;
  return {
    // Al menos 1 píxel por eje: una imagen de 4000x3 no puede quedar en 0.
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

/** Índice del primer byte (R) del píxel (x, y). */
export function pixelIndex(x: number, y: number, width: number): number {
  return (y * width + x) * 4;
}

/**
 * Luminancia perceptual 0-255 de un píxel. Se usa como pista de relieve
 * en la estimación de profundidad y para decidir si un color es claro.
 */
export function luminance(r: number, g: number, b: number): number {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * ¿La imagen trae transparencia real? Si la trae, el canal alpha separa
 * objeto de fondo mucho mejor que cualquier heurística (spec §5), así que
 * conviene saberlo antes de segmentar.
 */
export function hasAlphaChannel(img: ImageBuffer): boolean {
  const { pixels } = img;
  for (let i = 3; i < pixels.length; i += 4) {
    if (pixels[i] < 250) return true;
  }
  return false;
}

/**
 * Carga un File de imagen y devuelve sus píxeles reducidos a `maxSide`,
 * SIN deformar. Rechaza si la imagen no se puede leer.
 *
 * Toca el DOM (Image + canvas), así que no lo cubren los tests unitarios
 * —vitest corre en node sin DOM— igual que `extractSilhouette` desde la
 * Fase 23. Lo que sí se testea es todo lo que consume su salida.
 */
export function loadImageBuffer(file: File, maxSide: number = DEFAULT_MAX_SIDE): Promise<ImageBuffer> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      try {
        const { width, height } = fitDimensions(img.naturalWidth, img.naturalHeight, maxSide);
        if (width === 0 || height === 0) {
          reject(new Error("La imagen no tiene dimensiones válidas"));
          return;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas 2D no disponible"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve({ pixels: ctx.getImageData(0, 0, width, height).data, width, height });
      } catch (err) {
        reject(err);
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("No se pudo cargar la imagen"));
    };
    img.src = url;
  });
}

/**
 * Variante que DEFORMA la imagen a un cuadrado de `size x size`.
 *
 * Existe porque dos consumidores la necesitan así y por razones
 * distintas, no por descuido:
 * - El visual hull de 4 fotos proyecta con `project(a, b, s, size)`
 *   asumiendo un frame cuadrado; darle un frame apaisado desalinearía las
 *   cuatro vistas entre sí.
 * - El histograma de color sólo cuenta píxeles: la relación de aspecto no
 *   cambia el resultado, y un canvas de 32x32 es mucho más barato.
 *
 * Para reconstruir desde una sola foto se usa `loadImageBuffer`, que sí
 * conserva las proporciones.
 */
export function loadImageBufferSquare(file: File, size: number): Promise<ImageBuffer> {
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
        resolve({ pixels: ctx.getImageData(0, 0, size, size).data, width: size, height: size });
      } catch (err) {
        reject(err);
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("No se pudo cargar la imagen"));
    };
    img.src = url;
  });
}
