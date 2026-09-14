// Arnés de medición (Fase 26a). El brief pide "primero medir" antes de
// optimizar o migrar nada a WebGPU, y el informe final necesita números
// de "antes" contra los que comparar.
//
// Restricción de diseño: esto corre DENTRO del loop de render, así que el
// camino caliente (`sampleFrame`) no puede asignar memoria — de lo
// contrario el propio medidor ensucia lo que mide. Por eso las muestras
// viven en un buffer circular preasignado y las únicas asignaciones
// ocurren en `snapshot()`, que se llama a mano (desde la UI o desde el
// script de benchmark), no cuadro a cuadro.

// ~4 segundos a 60fps: suficiente para que el p95 sea estable sin que las
// muestras viejas tapen un cambio reciente de comportamiento.
const SAMPLE_CAPACITY = 240;

export interface MetricsSnapshot {
  /** Cuadros medidos desde el último `reset()`. */
  frames: number;
  /** Derivado del tiempo de cuadro promedio de la ventana, no del reloj de pared. */
  fps: number;
  frameMsAvg: number;
  /** El p95 importa más que el promedio: los tirones son lo que se percibe. */
  frameMsP95: number;
  frameMsMax: number;
  nanobots: number;
  microbots: number;
  drawCalls: number;
  triangles: number;
  /** `null` fuera de Chromium — `performance.memory` no es estándar. */
  heapUsedMB: number | null;
  /** Duraciones puntuales con nombre (formación, exoesqueleto, etc.). */
  timings: Record<string, number>;
}

export interface Metrics {
  sampleFrame(frameMs: number): void;
  setAgentCounts(nanobots: number, microbots: number): void;
  setRenderInfo(drawCalls: number, triangles: number): void;
  mark(name: string, durationMs: number): void;
  time<T>(name: string, fn: () => T): T;
  snapshot(): MetricsSnapshot;
  reset(): void;
}

interface ChromeMemory {
  usedJSHeapSize: number;
}

function readHeapMB(): number | null {
  const mem = (performance as Performance & { memory?: ChromeMemory }).memory;
  return mem ? mem.usedJSHeapSize / (1024 * 1024) : null;
}

export function createMetrics(): Metrics {
  const samples = new Float64Array(SAMPLE_CAPACITY);
  // Copia reusada para ordenar en `snapshot()` sin asignar un array nuevo
  // cada vez que se consulta.
  const sortScratch = new Float64Array(SAMPLE_CAPACITY);
  let cursor = 0;
  let filled = 0;
  let frames = 0;
  let nanobots = 0;
  let microbots = 0;
  let drawCalls = 0;
  let triangles = 0;
  const timings: Record<string, number> = {};

  return {
    sampleFrame(frameMs: number): void {
      samples[cursor] = frameMs;
      cursor = (cursor + 1) % SAMPLE_CAPACITY;
      if (filled < SAMPLE_CAPACITY) filled++;
      frames++;
    },

    setAgentCounts(nextNanobots: number, nextMicrobots: number): void {
      nanobots = nextNanobots;
      microbots = nextMicrobots;
    },

    setRenderInfo(nextDrawCalls: number, nextTriangles: number): void {
      drawCalls = nextDrawCalls;
      triangles = nextTriangles;
    },

    mark(name: string, durationMs: number): void {
      timings[name] = durationMs;
    },

    time<T>(name: string, fn: () => T): T {
      const started = performance.now();
      try {
        return fn();
      } finally {
        timings[name] = performance.now() - started;
      }
    },

    snapshot(): MetricsSnapshot {
      if (filled === 0) {
        return {
          frames: 0, fps: 0, frameMsAvg: 0, frameMsP95: 0, frameMsMax: 0,
          nanobots, microbots, drawCalls, triangles,
          heapUsedMB: readHeapMB(), timings: { ...timings },
        };
      }
      let sum = 0;
      let max = 0;
      for (let i = 0; i < filled; i++) {
        const v = samples[i];
        sum += v;
        if (v > max) max = v;
        sortScratch[i] = v;
      }
      // TypedArray.sort() ordena numéricamente por defecto (a diferencia
      // de Array.prototype.sort, que ordena como texto).
      const sorted = sortScratch.subarray(0, filled);
      sorted.sort();
      const avg = sum / filled;
      const p95Index = Math.min(filled - 1, Math.floor(filled * 0.95));
      return {
        frames,
        fps: avg > 0 ? 1000 / avg : 0,
        frameMsAvg: avg,
        frameMsP95: sorted[p95Index],
        frameMsMax: max,
        nanobots,
        microbots,
        drawCalls,
        triangles,
        heapUsedMB: readHeapMB(),
        timings: { ...timings },
      };
    },

    reset(): void {
      cursor = 0;
      filled = 0;
      frames = 0;
      for (const key of Object.keys(timings)) delete timings[key];
    },
  };
}
