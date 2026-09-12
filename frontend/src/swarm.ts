// Puente TypeScript <-> C++/WebAssembly.
//
// El módulo `boids.js` (generado por Emscripten a partir de /cpp/boids.cpp)
// expone las funciones de física del enjambre y su memoria lineal (HEAPF32).
// En vez de copiar datos de un lado a otro en cada frame, construimos una
// `Float32Array` que apunta directamente al buffer de memoria del propio
// Wasm: cuando C++ escribe nuevas posiciones dentro de `step()`, esa misma
// vista ya refleja los valores actualizados sin ningún `postMessage` ni JSON.
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
}

export class Swarm {
  private module: BoidsModule | null = null;
  private count = 0;

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
    this.mod.ccall("init", null, ["number"], [count]);
  }

  setTarget(x: number, y: number, z: number): void {
    this.mod.ccall("setTarget", null, ["number", "number", "number"], [x, y, z]);
  }

  setParams(params: SwarmParams): void {
    this.mod.ccall(
      "setParams",
      null,
      ["number", "number", "number", "number"],
      [params.cohesion, params.separation, params.alignment, params.maxSpeed],
    );
  }

  step(dt: number): void {
    this.mod.ccall("step", null, ["number"], [dt]);
  }

  // Devuelve una vista Float32Array (sin copia) sobre las posiciones actuales
  // de todos los nanobots, calculada leyendo el puntero desde C++ cada vez
  // (el puntero puede cambiar si `init` reasigna el buffer al cambiar count).
  getPositions(): Float32Array {
    const ptr = this.mod.ccall("getPositionsPtr", "number", [], []) as number;
    return new Float32Array(
      this.mod.HEAPF32.buffer,
      ptr,
      this.count * 3,
    );
  }

  getCount(): number {
    return this.count;
  }
}
