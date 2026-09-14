import * as THREE from "three";
import { BOT_TYPE } from "./swarm/bot-types";
import { botVisual } from "./swarm/bot-config";
import { createBotGeometries, LOD_LEVEL } from "./rendering/bot-models";

// El núcleo/reactor: objeto fijo en una esquina superior de la escena donde
// "viven" los nanobots en reposo (ocultos — ver nanobot-mesh.ts setVisible),
// y desde donde salen al formar una figura (ver shapes.ts). Posicionado
// dentro del volumen físico del core C++ (kBounds=12 en boids.cpp).
export const REACTOR_POSITION = new THREE.Vector3(-8, 8, -8);

// Fase 36: el núcleo deja de ser un icosaedro amarillo sólido y pasa a ser
// lo que conceptualmente siempre fue: una BOLA DE MATERIAL BOTS.
//
// Tiene sentido más allá de lo estético. Los Material Bots son los que
// llevan el color y el material del objeto; que el núcleo esté hecho de
// ellos explica de dónde sale el color que después aparece sobre la
// figura. Y el parpadeo al desplegar cada ola hace visible ese traspaso,
// que antes no se veía en ningún lado.
//
// Se dibuja con UN InstancedMesh, igual que el resto del enjambre: un
// draw call, no cientos de objetos.

/** Cuántos Material Bots forman la bola. */
const CORE_BOT_COUNT = 260;
const CORE_RADIUS = 1.05;
const BOT_RADIUS = 0.11;

/** Duración del parpadeo al recibir un color nuevo, en segundos. */
const PULSE_DURATION = 0.9;
/** Cuántos destellos entran en ese tiempo. */
const PULSE_FLASHES = 3;
/** Intensidad emissive en reposo y en la cresta del destello. */
const EMISSIVE_BASE = 0.85;
const EMISSIVE_PEAK = 3.2;

/** Ángulo dorado: la misma distribución esférica que usa shapes.ts. */
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

export interface Reactor {
  group: THREE.Group;
  position: THREE.Vector3;
  update: (dt: number) => void;
  /**
   * Parpadea y adopta `color`. Lo llama la simulación cada vez que se
   * despliega una ola de color sobre la figura, así el núcleo "entrega"
   * visualmente el material que los Material Bots van a aplicar.
   */
  pulseColor: (color: number) => void;
  /** Vuelve al azul claro de identidad de los Material Bots. */
  resetColor: () => void;
}

export function createReactor(position: THREE.Vector3 = REACTOR_POSITION): Reactor {
  const group = new THREE.Group();
  group.position.copy(position);

  const identity = botVisual(BOT_TYPE.MATERIAL).identityColor;

  // Nivel MEDIO fijo: estos bots miden 0,11 de radio y viven dentro de una
  // bola de 1,05; el nivel detallado no se distinguiría ni pegando la
  // cámara, así que pagarlo sería gasto sin nada a cambio.
  const geometries = createBotGeometries(BOT_RADIUS, BOT_RADIUS * 0.8);
  const material = new THREE.MeshStandardMaterial({
    color: identity,
    emissive: identity,
    emissiveIntensity: EMISSIVE_BASE,
    roughness: 0.35,
    metalness: 0.5,
  });

  const bots = new THREE.InstancedMesh(geometries.byLevel[LOD_LEVEL.MID], material, CORE_BOT_COUNT);
  bots.instanceMatrix.setUsage(THREE.StaticDrawUsage);
  bots.castShadow = true;

  // Distribución por ángulo dorado: reparto parejo sobre la esfera sin
  // acumulación en los polos, que es lo que pasaría con lat/long.
  const dummy = new THREE.Object3D();
  for (let i = 0; i < CORE_BOT_COUNT; i++) {
    const y = 1 - (i / (CORE_BOT_COUNT - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * GOLDEN_ANGLE;
    dummy.position.set(Math.cos(theta) * r * CORE_RADIUS, y * CORE_RADIUS, Math.sin(theta) * r * CORE_RADIUS);
    // Cada bot mira hacia afuera: así se ve la cara hexagonal desde fuera
    // y la bola se lee como una cáscara de fichas, no como un punteado.
    dummy.lookAt(dummy.position.clone().multiplyScalar(2));
    dummy.updateMatrix();
    bots.setMatrixAt(i, dummy.matrix);
  }
  bots.instanceMatrix.needsUpdate = true;
  // Acá las instancias son ESTÁTICAS, así que en vez de apagar el culling
  // se calcula la esfera envolvente de verdad: computeBoundingSphere de
  // InstancedMesh sí recorre las instancias. Sin esto three creería que la
  // bola mide lo que un solo bot (0,11) y la descartaría al acercarse.
  bots.computeBoundingSphere();
  group.add(bots);

  // Carcasa de contención: wireframe semitransparente, mismo lenguaje
  // visual que el resto del enjambre.
  const shellMaterial = new THREE.MeshBasicMaterial({
    color: identity,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  });
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.9, 2), shellMaterial);
  group.add(shell);

  const glow = new THREE.PointLight(identity, 3, 14);
  group.add(glow);

  // Estado del parpadeo. `pulseElapsed` en -1 significa "sin parpadeo".
  let pulseElapsed = -1;
  const targetColor = new THREE.Color(identity);

  function applyColor(color: THREE.Color): void {
    material.color.copy(color);
    material.emissive.copy(color);
    shellMaterial.color.copy(color);
    glow.color.copy(color);
  }

  function update(dt: number): void {
    shell.rotateY(dt * 0.3);
    shell.rotateX(dt * 0.15);
    bots.rotateY(dt * 0.12);

    if (pulseElapsed < 0) return;
    pulseElapsed += dt;
    const t = Math.min(pulseElapsed / PULSE_DURATION, 1);
    // Destellos que se van apagando: seno rectificado por una envolvente
    // decreciente. Termina exactamente en la intensidad de reposo, así no
    // queda un escalón al cortar.
    const flash = Math.abs(Math.sin(t * Math.PI * PULSE_FLASHES)) * (1 - t);
    material.emissiveIntensity = EMISSIVE_BASE + (EMISSIVE_PEAK - EMISSIVE_BASE) * flash;
    glow.intensity = 3 + 5 * flash;
    if (t >= 1) {
      pulseElapsed = -1;
      material.emissiveIntensity = EMISSIVE_BASE;
      glow.intensity = 3;
    }
  }

  return {
    group,
    position: group.position,
    update,
    pulseColor(color): void {
      targetColor.setHex(color);
      applyColor(targetColor);
      pulseElapsed = 0;
    },
    resetColor(): void {
      targetColor.setHex(identity);
      applyColor(targetColor);
      pulseElapsed = -1;
      material.emissiveIntensity = EMISSIVE_BASE;
      glow.intensity = 3;
    },
  };
}
