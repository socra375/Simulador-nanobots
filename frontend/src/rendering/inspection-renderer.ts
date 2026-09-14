// Modelo 3D individual de un bot, para la vista de inspección (Fase 33).
//
// Acá SÍ vale un Mesh por objeto, y no contradice la regla de instanciar:
// la inspección muestra UN bot, no decenas de miles. La spec lo dice
// explícitamente y es la lectura correcta — instanciar existe para que no
// haya un objeto por agente en la simulación, no para prohibir un objeto
// cuando de verdad hay uno solo.
//
// Escena propia, cámara propia y luces propias: no se cuelga de la escena
// principal. Así el inspector se puede abrir, cerrar y redimensionar sin
// tocar nada del render del enjambre, y sobre todo sin que un error acá
// pueda romper la simulación.

import * as THREE from "three";
import { BOT_TYPE, botTypeInfo, type BotType } from "../swarm/bot-types";
import { botVisual } from "../swarm/bot-config";

export interface InspectionRenderer {
  readonly canvas: HTMLCanvasElement;
  /** Muestra el modelo del tipo pedido. */
  show(type: BotType): void;
  /** Un cuadro. Lo llama el loop principal sólo mientras el panel está abierto. */
  render(dt: number): void;
  setSize(width: number, height: number): void;
  /** Libera GPU: geometrías, materiales y contexto. */
  dispose(): void;
}

/** Prisma hexagonal acostado, la base de todos los modelos. */
function hexBody(radius: number, height: number, segments = 6): THREE.BufferGeometry {
  const g = new THREE.CylinderGeometry(radius, radius, height, segments, 1, false);
  g.rotateX(Math.PI / 2);
  return g;
}

/**
 * Construye el modelo detallado de un tipo.
 *
 * Cada tipo agrega piezas que se corresponden con su FUNCIÓN, no adornos
 * al azar: el Union Bot lleva acoples alrededor porque conecta, el Repair
 * lleva una cruz porque repara, el Transform lleva módulos articulados
 * porque se reconfigura. Así el modelo se lee sin leyenda.
 */
function buildModel(type: BotType): THREE.Group {
  const group = new THREE.Group();
  const visual = botVisual(type);

  const body = new THREE.MeshStandardMaterial({
    color: visual.identityColor,
    emissive: visual.identityEmissive,
    emissiveIntensity: 0.6,
    metalness: 0.65,
    roughness: 0.35,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: 0x1a1d22,
    metalness: 0.8,
    roughness: 0.45,
  });
  const glow = new THREE.MeshStandardMaterial({
    color: visual.identityColor,
    emissive: visual.identityColor,
    emissiveIntensity: 1.4,
    metalness: 0.2,
    roughness: 0.3,
  });

  // Cuerpo: carcasa oscura con el hexágono de identidad encima. El tamaño
  // sigue `relativeSize` del catálogo, así el inspector muestra las
  // proporciones reales entre tipos y no seis modelos del mismo porte.
  const scale = 0.55 + botTypeInfo(type).relativeSize * 0.12;
  const shell = new THREE.Mesh(hexBody(scale, scale * 0.52), dark);
  group.add(shell);
  const face = new THREE.Mesh(hexBody(scale * 0.78, scale * 0.62), body);
  group.add(face);

  switch (type) {
    case BOT_TYPE.MICROBOT: {
      // Estructura: refuerzos en las seis aristas. Es la unidad robusta.
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const rib = new THREE.Mesh(new THREE.BoxGeometry(scale * 0.16, scale * 0.16, scale * 0.66), dark);
        rib.position.set(Math.cos(a) * scale * 0.9, Math.sin(a) * scale * 0.9, 0);
        rib.rotation.z = a;
        group.add(rib);
      }
      break;
    }
    case BOT_TYPE.NANOBOT: {
      // Detalle: compacto y con una franja luminosa. Sin apéndices: su
      // gracia es entrar donde el Microbot no entra.
      const band = new THREE.Mesh(hexBody(scale * 0.84, scale * 0.16), glow);
      group.add(band);
      break;
    }
    case BOT_TYPE.UNION: {
      // Conector: seis acoples salientes. Tiene que verse que se ENCHUFA,
      // no ser un hexágono más.
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const clamp = new THREE.Mesh(new THREE.CylinderGeometry(scale * 0.17, scale * 0.11, scale * 0.5, 6), body);
        clamp.position.set(Math.cos(a) * scale * 1.08, Math.sin(a) * scale * 1.08, 0);
        clamp.rotation.z = -a + Math.PI / 2;
        group.add(clamp);
        const pin = new THREE.Mesh(new THREE.TorusGeometry(scale * 0.17, scale * 0.045, 6, 12), glow);
        pin.position.copy(clamp.position);
        pin.rotation.y = Math.PI / 2;
        pin.rotation.z = a;
        group.add(pin);
      }
      break;
    }
    case BOT_TYPE.REPAIR: {
      // Cruz de mantenimiento, legible de un vistazo.
      const arm = new THREE.BoxGeometry(scale * 0.95, scale * 0.26, scale * 0.2);
      const h = new THREE.Mesh(arm, glow);
      h.position.z = scale * 0.34;
      group.add(h);
      const v = new THREE.Mesh(arm, glow);
      v.position.z = scale * 0.34;
      v.rotation.z = Math.PI / 2;
      group.add(v);
      // Módulos de herramienta a los costados.
      for (const sx of [-1, 1]) {
        const tool = new THREE.Mesh(new THREE.BoxGeometry(scale * 0.2, scale * 0.42, scale * 0.3), dark);
        tool.position.set(sx * scale * 1.0, 0, 0);
        group.add(tool);
      }
      break;
    }
    case BOT_TYPE.TRANSFORM: {
      // Módulos articulados: tres anillos en planos distintos, para que se
      // lea "esto se reconfigura".
      for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(scale * (0.95 + i * 0.16), scale * 0.06, 6, 18), i % 2 ? glow : body);
        ring.rotation.x = (i * Math.PI) / 5;
        ring.rotation.y = (i * Math.PI) / 3;
        group.add(ring);
      }
      break;
    }
    case BOT_TYPE.MATERIAL: {
      // Boquillas de aplicación: lo que reparte el material.
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const nozzle = new THREE.Mesh(new THREE.ConeGeometry(scale * 0.13, scale * 0.34, 6), glow);
        nozzle.position.set(Math.cos(a) * scale * 0.72, Math.sin(a) * scale * 0.72, scale * 0.4);
        nozzle.rotation.x = Math.PI / 2;
        group.add(nozzle);
      }
      break;
    }
  }

  return group;
}

export function createInspectionRenderer(): InspectionRenderer {
  const canvas = document.createElement("canvas");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.set(0, 1.6, 4.4);
  camera.lookAt(0, 0, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.5);
  key.position.set(3, 4, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x88bbff, 0.8);
  rim.position.set(-4, -2, -3);
  scene.add(rim);

  const pivot = new THREE.Group();
  scene.add(pivot);

  let current: THREE.Group | null = null;

  /** Libera geometrías y materiales del modelo anterior. Sin esto, cada
   * cambio de tipo dejaría geometría huérfana en la GPU. */
  function clear(): void {
    if (!current) return;
    pivot.remove(current);
    current.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.geometry.dispose();
      const mat = mesh.material;
      if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
      else mat.dispose();
    });
    current = null;
  }

  return {
    canvas,
    show(type): void {
      clear();
      current = buildModel(type);
      pivot.add(current);
    },
    render(dt): void {
      pivot.rotation.y += dt * 0.6;
      renderer.render(scene, camera);
    },
    setSize(width, height): void {
      if (width <= 0 || height <= 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    },
    dispose(): void {
      clear();
      renderer.dispose();
    },
  };
}
