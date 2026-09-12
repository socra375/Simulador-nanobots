// Puente TypeScript <-> C++/WebAssembly.
//
// El módulo `boids.js` (generado por Emscripten a partir de /cpp/boids.cpp)
// expone las funciones de física del enjambre y su memoria lineal (HEAPF32).
// En vez de copiar datos de un lado a otro en cada frame, construimos una
// `Float32Array` que apunta directamente al buffer de memoria del propio
// Wasm: cuando C++ escribe nuevas posiciones dentro de `step()`, esa misma
// vista ya refleja los valores actualizados sin ningún `postMessage` ni JSON.
// El mismo patrón se usa para el buffer de targets por-agente: TS escribe
// ahí directo (idle o figura a formar) sin pasar por ccall en cada frame.
//
// @ts-expect-error -- boids.js es un artefacto de build (no tiene tipos .d.ts)
import createBoidsModule from "../public/wasm/boids.js";

interface BoidsModule {
  HEAPF32: Float32Array;
  ccall: (
    name: string,
    returnType: string | null,
    argTypes: string[],
    args: unknown[],
  ) => unknown;
}

export interface SwarmParams {
  cohesion: number;
  separation: number;
  alignment: number;
  maxSpeed: number;
  seekWeight: number;
}

export class Swarm {
  private module: BoidsModule | null = null;
  private count = 0;
  private cachedPtr = -1;
  private cachedView: Float32Array | null = null;
  private cachedTargetPtr = -1;
  private cachedTargetView: Float32Array | null = null;

  async load(): Promise<void> {
    this.module = (await createBoidsModule()) as BoidsModule;
  }

  private get mod(): BoidsModule {
    if (!this.module) {
      throw new Error("Swarm.load() debe completarse antes de usar el módulo Wasm");
    }
    return this.module;
  }

  // (Re)inicializa el enjambre con `count` nanobots.
  init(count: number): void {
    this.count = count;
    this.cachedView = null;
    this.cachedTargetView = null;
    this.mod.ccall("init", null, ["number"], [count]);
  }

  setParams(params: SwarmParams): void {
    this.mod.ccall(
      "setParams",
      null,
      ["number", "number", "number", "number", "number"],
      [params.cohesion, params.separation, params.alignment, params.maxSpeed, params.seekWeight],
    );
  }

  step(dt: number): void {
    this.mod.ccall("step", null, ["number"], [dt]);
  }

  // Devuelve una vista Float32Array (sin copia) sobre las posiciones actuales.
  // Se cachea entre llamadas: solo se reconstruye si cambió el puntero (p.ej.
  // `init` reasignó el buffer) o si ALLOW_MEMORY_GROWTH movió el heap de Wasm
  // a un ArrayBuffer nuevo, invalidando la vista anterior.
  getPositions(): Float32Array {
    const ptr = this.mod.ccall("getPositionsPtr", "number", [], []) as number;
    const buffer = this.mod.HEAPF32.buffer;
    if (!this.cachedView || ptr !== this.cachedPtr || this.cachedView.buffer !== buffer) {
      this.cachedPtr = ptr;
      this.cachedView = new Float32Array(buffer, ptr, this.count * 3);
    }
    return this.cachedView;
  }

  // Vista sin copia sobre el buffer de targets por-agente (mismo patrón de
  // cacheo/invalidación que getPositions).
  getTargetPositions(): Float32Array {
    const ptr = this.mod.ccall("getTargetPositionsPtr", "number", [], []) as number;
    const buffer = this.mod.HEAPF32.buffer;
    if (
      !this.cachedTargetView ||
      ptr !== this.cachedTargetPtr ||
      this.cachedTargetView.buffer !== buffer
    ) {
      this.cachedTargetPtr = ptr;
      this.cachedTargetView = new Float32Array(buffer, ptr, this.count * 3);
    }
    return this.cachedTargetView;
  }

  // Copia `points` (largo count*3) directo sobre el buffer de targets: así
  // se le indica al enjambre hacia dónde converger (cluster de reposo
  // alrededor del núcleo, o la nube de puntos de una figura pedida).
  setAgentTargets(points: Float32Array): void {
    this.getTargetPositions().set(points.subarray(0, this.count * 3));
  }

  getCount(): number {
    return this.count;
  }
}
