// Extrae el color RGB "dominante" de la foto adjuntada en "Comandos", para
// el 4to rol de nanobots (NANOBOT_ROLE.COLOR, ver shapes.ts): no hay ningún
// modelo de IA de visión — es un histograma de color simple, 100% en el
// navegador (canvas 2D), separado en dos partes para poder testear la
// lógica de bucketing sin depender de las APIs de imagen/canvas del DOM:
// - pickDominantColor(): pura, opera sobre un array de pixeles RGBA plano.
// - extractDominantColorFromFile(): la parte que sí toca el DOM (Image +
//   canvas) para conseguir esos pixeles a partir del File adjuntado.

const QUANT_LEVELS = 8; // por canal -> 8^3 = 512 buckets de color
const QUANT_STEP = 256 / QUANT_LEVELS;
const MIN_ALPHA = 128;
const NEAR_WHITE = 235;
const NEAR_BLACK = 20;
const CANVAS_SAMPLE_SIZE = 32; // alcanza para un histograma, y es barato

// Fallback si la foto no aporta ningún pixel válido (transparente, o todo
// fondo blanco/negro) — el mismo cian que ya usa ESTRUCTURA, para que el
// enjambre no se quede sin color en vez de crashear.
export const DEFAULT_DOMINANT_COLOR = 0x4be3ff;

// Recibe pixeles RGBA planos (el mismo formato que
// CanvasRenderingContext2D.getImageData().data) y devuelve el color
// dominante como entero 0xRRGGBB. Ignora pixeles transparentes y
// blanco/negro casi puro (típicamente el fondo de la foto, no el objeto
// fotografiado) para no terminar "pintando" el enjambre del color del
// papel de fondo en vez del objeto.
export function pickDominantColor(pixels: Uint8ClampedArray | number[]): number {
  const bucketCount = QUANT_LEVELS * QUANT_LEVELS * QUANT_LEVELS;
  const counts = new Uint32Array(bucketCount);
  const sumR = new Float64Array(bucketCount);
  const sumG = new Float64Array(bucketCount);
  const sumB = new Float64Array(bucketCount);

  for (let i = 0; i + 3 < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (a < MIN_ALPHA) continue;
    if (r > NEAR_WHITE && g > NEAR_WHITE && b > NEAR_WHITE) continue;
    if (r < NEAR_BLACK && g < NEAR_BLACK && b < NEAR_BLACK) continue;

    const bucketR = Math.min(QUANT_LEVELS - 1, Math.floor(r / QUANT_STEP));
    const bucketG = Math.min(QUANT_LEVELS - 1, Math.floor(g / QUANT_STEP));
    const bucketB = Math.min(QUANT_LEVELS - 1, Math.floor(b / QUANT_STEP));
    const bucket = (bucketR * QUANT_LEVELS + bucketG) * QUANT_LEVELS + bucketB;

    counts[bucket]++;
    sumR[bucket] += r;
    sumG[bucket] += g;
    sumB[bucket] += b;
  }

  let bestBucket = -1;
  let bestCount = 0;
  for (let i = 0; i < bucketCount; i++) {
    if (counts[i] > bestCount) {
      bestCount = counts[i];
      bestBucket = i;
    }
  }
  if (bestBucket === -1) return DEFAULT_DOMINANT_COLOR;

  const r = Math.round(sumR[bestBucket] / counts[bestBucket]);
  const g = Math.round(sumG[bestBucket] / counts[bestBucket]);
  const b = Math.round(sumB[bestBucket] / counts[bestBucket]);
  return (r << 16) | (g << 8) | b;
}

// Carga el File de imagen adjuntado, lo dibuja en un canvas chico (más
// rápido que procesar la foto a resolución completa) y le pasa los pixeles
// resultantes a pickDominantColor(). Nunca rechaza la promesa: ante
// cualquier error (imagen corrupta, canvas no disponible) cae al color por
// defecto en vez de bloquear "Formar objeto".
export function extractDominantColorFromFile(file: File): Promise<number> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    const cleanup = () => URL.revokeObjectURL(url);

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = CANVAS_SAMPLE_SIZE;
        canvas.height = CANVAS_SAMPLE_SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(DEFAULT_DOMINANT_COLOR);
          return;
        }
        ctx.drawImage(img, 0, 0, CANVAS_SAMPLE_SIZE, CANVAS_SAMPLE_SIZE);
        const { data } = ctx.getImageData(0, 0, CANVAS_SAMPLE_SIZE, CANVAS_SAMPLE_SIZE);
        resolve(pickDominantColor(data));
      } catch {
        resolve(DEFAULT_DOMINANT_COLOR);
      } finally {
        cleanup();
      }
    };
    img.onerror = () => {
      cleanup();
      resolve(DEFAULT_DOMINANT_COLOR);
    };
    img.src = url;
  });
}
