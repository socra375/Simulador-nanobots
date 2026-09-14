import { FORMATION_CENTER, IDLE_RADIUS } from "./constants";
import { splitCounts } from "./sampling";
import { NANOBOT_ROLE, ROLE_RATIO_COLOR } from "./types";
import { assignRelationEdges, buildRelationEdges, buildStructureAnchors } from "./graph";
import { getShape, resolveShapeName } from "./registry";
import type { ColorClusterInput, NanobotRole, ShapeFormation } from "./types";


// --- Exoesqueleto de Microbots (Fase 15) ---
//
// Población aparte de Nanobots: arma un esqueleto/exoesqueleto SOLO de
// nodos (anclas, farthest-point) + vigas (MST + vecinos cercanos) a MUCHA
// más resolución que el (ex) esqueleto de Nanobots, ya que Nanobots ahora
// solo rellena/pinta encima (ver comentario sobre SKELETON arriba). No
// tiene roles COLOR/DETALLE ni olas — es un único cuerpo sólido.
//
// El número de anclas (nodos) se limita a MICROBOT_ANCHOR_CAP: tanto
// farthestPointSample como el MST son ~O(anchorCount²) — con
// microbotCount en las decenas de miles haría falta acotar las anclas
// (que solo necesitan ser suficientes para una malla bien repartida, no
// una por microbot) para que "Formar objeto" no se trabe. El resto del
// budget (la gran mayoría) va a vigas, que son O(outCount) — baratas a
// cualquier escala.
export const MICROBOT_ANCHOR_RATIO = 0.12;
export const MICROBOT_ANCHOR_CAP = 2000;

export interface Exoskeleton {
  points: Float32Array; // count*3 floats, ya trasladados a `center`
  isBeam: Uint8Array; // largo count: 1 = viga (usar relationSpans), 0 = nodo/ancla
  relationSpans: Float32Array; // count*6 floats, solo válido para vigas
}

export function buildExoskeleton(
  name: string,
  count: number,
  center: [number, number, number] = FORMATION_CENTER,
): Exoskeleton | null {
  const canonical = resolveShapeName(name);
  if (!canonical) return null;

  const def = getShape(canonical)!;

  // Las formas humanoides declaran huesos reales; el resto (cubo, carro,
  // escaneo) cae en la rama genérica de abajo (anclas + MST) sin ningún
  // caso especial acá.
  if (def.bones) {
    const pts = def.bones(count);
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      points[i * 3 + 0] = pts[i * 3 + 0] + center[0];
      points[i * 3 + 1] = pts[i * 3 + 1] + center[1];
      points[i * 3 + 2] = pts[i * 3 + 2] + center[2];
    }
    return { points, isBeam: new Uint8Array(count), relationSpans: new Float32Array(count * 6) };
  }

  const generator = def.generate;

  const anchorCount =
    count > 0 ? Math.min(count, MICROBOT_ANCHOR_CAP, Math.max(4, Math.round(count * MICROBOT_ANCHOR_RATIO))) : 0;
  const beamCount = Math.max(0, count - anchorCount);

  const anchors = buildStructureAnchors(generator, anchorCount);
  const edges = buildRelationEdges(anchors, anchorCount);
  const { points: beamPts, spans: beamSpansLocal } = assignRelationEdges(anchors, edges, beamCount);

  const points = new Float32Array(count * 3);
  const isBeam = new Uint8Array(count);
  const relationSpans = new Float32Array(count * 6);
  let cursor = 0;

  for (let i = 0; i < anchorCount; i++) {
    points[cursor * 3 + 0] = anchors[i * 3 + 0] + center[0];
    points[cursor * 3 + 1] = anchors[i * 3 + 1] + center[1];
    points[cursor * 3 + 2] = anchors[i * 3 + 2] + center[2];
    cursor++;
  }
  for (let i = 0; i < beamCount; i++) {
    points[cursor * 3 + 0] = beamPts[i * 3 + 0] + center[0];
    points[cursor * 3 + 1] = beamPts[i * 3 + 1] + center[1];
    points[cursor * 3 + 2] = beamPts[i * 3 + 2] + center[2];
    isBeam[cursor] = 1;
    relationSpans[cursor * 6 + 0] = beamSpansLocal[i * 6 + 0] + center[0];
    relationSpans[cursor * 6 + 1] = beamSpansLocal[i * 6 + 1] + center[1];
    relationSpans[cursor * 6 + 2] = beamSpansLocal[i * 6 + 2] + center[2];
    relationSpans[cursor * 6 + 3] = beamSpansLocal[i * 6 + 3] + center[0];
    relationSpans[cursor * 6 + 4] = beamSpansLocal[i * 6 + 4] + center[1];
    relationSpans[cursor * 6 + 5] = beamSpansLocal[i * 6 + 5] + center[2];
    cursor++;
  }

  return { points, isBeam, relationSpans };
}

// Genera la nube de puntos de la figura (repartida en los 3 roles) y la
// traslada a `center`. Devuelve null si `name` no matchea ninguna forma
// conocida.
export const DEFAULT_COLOR_CLUSTERS: ColorClusterInput[] = [{ color: 0, weight: 1 }];

export function formShapeWithRoles(
  name: string,
  count: number,
  center: [number, number, number] = FORMATION_CENTER,
  colorClusters: ColorClusterInput[] = DEFAULT_COLOR_CLUSTERS,
): ShapeFormation | null {
  const canonical = resolveShapeName(name);
  if (!canonical) return null;
  const def = getShape(canonical)!;
  const generator = def.generate;
  // Una forma puede traer sus propias olas de color con tonos fijos por
  // parte (hoy solo "cabeza": piel/cabello/ojos/labios, ver CABEZA_PARTS).
  // Si no las declara, las olas salen del histograma de la foto adjuntada,
  // que es el comportamiento de todas las demás.
  const colorParts = def.colorParts;
  const clusters = colorParts
    ? colorParts.map((p) => ({ color: p.color, weight: p.weight }))
    : colorClusters.length > 0
      ? colorClusters
      : DEFAULT_COLOR_CLUSTERS;

  // COLOR se calcula PRIMERO y de forma independiente (75% fijo del
  // total) — ESTRUCTURA/RELACION/DETALLE (el "esqueleto") se reparten
  // recién lo que sobra, no al revés, para que el 75% de COLOR nunca
  // dependa de cuánto terminen usando las otras 3.
  const colorCount = count > 0 ? Math.round(count * ROLE_RATIO_COLOR) : 0;
  // ESTRUCTURA/RELACION quedan en 0 (ver comentario arriba) — todo el
  // budget restante va a DETALLE.
  const detailCount = Math.max(0, count - colorCount);
  const detailPts = generator(detailCount);
  // Cada ola de color es una MUESTRA INDEPENDIENTE de la silueta completa
  // (mismo generador que DETALLE, no un subconjunto de colorPts) — así cada
  // una por sí sola ya cubre parejo toda la figura, en vez de quedar
  // agrupada en una sola zona. Para "cabeza", en cambio, cada ola es la
  // parte anatómica correspondiente (CABEZA_PARTS[wave].generator) — no un
  // resample de la silueta completa.
  const colorWaveCounts = splitCounts(colorCount, clusters.map((c) => c.weight));
  const colorWavePts = colorParts
    ? colorWaveCounts.map((n, wave) => colorParts[wave].generator(n))
    : colorWaveCounts.map((n) => generator(n));

  const points = new Float32Array(count * 3);
  const roles = new Uint8Array(count);
  const relationSpans = new Float32Array(count * 6);
  const colorWave = new Uint8Array(count);
  let cursor = 0;

  const write = (src: Float32Array, n: number, role: NanobotRole) => {
    for (let i = 0; i < n; i++) {
      points[cursor * 3 + 0] = src[i * 3 + 0] + center[0];
      points[cursor * 3 + 1] = src[i * 3 + 1] + center[1];
      points[cursor * 3 + 2] = src[i * 3 + 2] + center[2];
      roles[cursor] = role;
      cursor++;
    }
  };

  write(detailPts, detailCount, NANOBOT_ROLE.DETAIL);
  for (let wave = 0; wave < colorWavePts.length; wave++) {
    const src = colorWavePts[wave];
    const n = colorWaveCounts[wave];
    for (let i = 0; i < n; i++) {
      points[cursor * 3 + 0] = src[i * 3 + 0] + center[0];
      points[cursor * 3 + 1] = src[i * 3 + 1] + center[1];
      points[cursor * 3 + 2] = src[i * 3 + 2] + center[2];
      roles[cursor] = NANOBOT_ROLE.COLOR;
      colorWave[cursor] = wave;
      cursor++;
    }
  }

  return { points, roles, relationSpans, colorWave, colorWaveCount: clusters.length, colorClusters: clusters };
}

// Cluster de reposo: cáscara esférica aleatoria alrededor del núcleo.
export function idleCluster(count: number, center: [number, number, number]): Float32Array {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = IDLE_RADIUS * (0.5 + 0.5 * Math.random());
    pts[i * 3] = center[0] + r * Math.sin(phi) * Math.cos(theta);
    pts[i * 3 + 1] = center[1] + r * Math.sin(phi) * Math.sin(theta);
    pts[i * 3 + 2] = center[2] + r * Math.cos(phi);
  }
  return pts;
}
