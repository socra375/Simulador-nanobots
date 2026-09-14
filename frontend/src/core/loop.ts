// Loop de cuadros (Fase 27c).
//
// Antes esto vivía suelto dentro de la closure de main(): un `animate()`
// que se re-agendaba a sí mismo, sin forma de pararlo. No había manera de
// pausar la simulación, ni de apagarla en un test, ni de saber si seguía
// viva.
//
// Dos decisiones que vienen de bugs reales:
// - El re-agendado va al FINAL, dentro de try/finally. Cuando estaba como
//   primera sentencia del cuerpo, una excepción dejaba el siguiente cuadro
//   ya agendado y el error se repetía 60 veces por segundo, inundando la
//   consola y tapando el original.
// - `dt` viene topado. Si la pestaña estuvo en segundo plano, el salto de
//   tiempo real sería enorme y la simulación daría un tirón; es preferible
//   que avance más lento que el reloj a que teletransporte agentes.

export interface FrameLoop {
  start(): void;
  stop(): void;
  readonly running: boolean;
}

export interface FrameLoopOptions {
  /** Tope de `dt` en segundos (default 0.05 = 20fps). */
  maxDt?: number;
  /** Reloj inyectable; los tests pasan uno determinístico. */
  now?: () => number;
  /** Agendador inyectable (default requestAnimationFrame). */
  schedule?: (cb: () => void) => void;
  /** Se llama una sola vez si el cuerpo tira; el loop queda detenido. */
  onError?: (err: unknown) => void;
}

export function createFrameLoop(step: (dt: number) => void, options: FrameLoopOptions = {}): FrameLoop {
  const maxDt = options.maxDt ?? 0.05;
  const now = options.now ?? (() => performance.now());
  const schedule = options.schedule ?? ((cb) => requestAnimationFrame(cb));
  const onError = options.onError;

  let running = false;
  let lastTime = 0;
  // `stop()` no puede des-agendar un cuadro ya pedido: ese cuadro igual se
  // va a ejecutar. Si entremedio se vuelve a arrancar, esa cadena vieja
  // revive y quedan DOS corriendo en paralelo, avanzando la simulación al
  // doble de velocidad. La generación sirve para que cada cadena reconozca
  // que quedó obsoleta y se muera sola.
  let generation = 0;

  function frame(gen: number): void {
    if (!running || gen !== generation) return;
    try {
      const current = now();
      const dt = Math.min((current - lastTime) / 1000, maxDt);
      lastTime = current;
      step(dt);
    } catch (err) {
      running = false;
      if (onError) onError(err);
      else throw err;
    } finally {
      if (running && gen === generation) schedule(() => frame(gen));
    }
  }

  return {
    start(): void {
      if (running) return;
      running = true;
      generation++;
      lastTime = now();
      const gen = generation;
      schedule(() => frame(gen));
    },
    stop(): void {
      running = false;
    },
    get running(): boolean {
      return running;
    },
  };
}
