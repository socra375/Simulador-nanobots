// Biblioteca de formas 3D procedurales para el comando "Formar objeto".
//
// No hay backend ni IA de visión en producción (sitio estático en GitHub
// Pages), así que la foto adjuntada en "Comandos" es solo una confirmación
// visual — la forma real sale de estos generadores, indexados por el
// nombre que escribe el usuario. Cada generador produce exactamente
// `count*3` floats (una nube de puntos centrada en el origen), para que
// escale con el slider de cantidad de nanobots (20-200).
//
// Módulo puro (sin dependencia de three.js): las posiciones son tuplas
// planas, listas para copiarse directo al buffer de targets de Wasm
// (ver Swarm.setAgentTargets en swarm.ts).

export const SHAPE_HALF_EXTENT = 5.5;
// Punto de la escena donde se arman las figuras: lejos del núcleo
// (REACTOR_POSITION en reactor.ts) y dentro de kBounds=12 del core C++ aun
// sumando SHAPE_HALF_EXTENT.
export const FORMATION_CENTER: [number, number, number] = [4, 2, 4];
// Radio del cluster de reposo alrededor del núcleo.
export const IDLE_RADIUS = 2.5;

export const s = SHAPE_HALF_EXTENT;

export function randRange(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo);
}
