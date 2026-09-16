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
  // Las vigas de Microbots SÍ se escriben y se dibujan (a diferencia de
  // las que tenían los Nanobots, eliminadas en la Fase 27).
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

// Genera la nube de puntos de la figura (repartida en sus dos roles) y la
// traslada a `center`. Devuelve null si `name` no matchea ninguna forma
// conocida.
export const DEFAULT_COLOR_CLUSTERS: ColorClusterInput[] = [{ color: 0, weight: 1 }];

/**
 * FASE 42 — EL CAMBIO CENTRAL DE ESTE ARCHIVO.
 *
 * Antes, la capa de material se generaba como N "olas", y cada ola era un
 * MUESTREO INDEPENDIENTE DE LA SILUETA COMPLETA con un color plano propio.
 * Eso ponía rojo por todo el objeto, dorado por todo el objeto, y en
 * pantalla daba el damero: 🔴🟡🔴🟡. El color lo decidía la ola, no la
 * posición.
 *
 * Ahora la capa de material es UNA SOLA muestra de la figura, y cada punto
 * lleva SU color cuando la forma sabe cuál es:
 *
 *   - escaneo desde imagen -> `generateWithColor` devuelve posiciones y
 *     colores del MISMO muestreo (cada punto trae el píxel del que salió);
 *   - formas con partes propias (hoy "cabeza") -> cada parte es su propio
 *     generador, así que un punto de "cabello" sabe que es cabello. Esto
 *     dejó de ser un caso especial de olas y pasó a ser el caso normal de
 *     color por punto;
 *   - el resto -> sin color por punto. El mapa de material reparte la
 *     paleta de la foto en bandas espaciales y lo declara aproximado (ver
 *     material/material-map.ts, MATERIAL_SOURCE.FALLBACK).
 *
 * Qué región es cada mancha y cuándo se enciende NO se decide acá: este
 * archivo produce geometría y color por punto, nada de tiempo.
 */
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
  const colorParts = def.colorParts;
  const clusters = colorParts
    ? colorParts.map((p) => ({ color: p.color, weight: p.weight }))
    : colorClusters.length > 0
      ? colorClusters
      : DEFAULT_COLOR_CLUSTERS;

  // COLOR se calcula PRIMERO y de forma independiente (75% fijo del
  // total) — DETALLE se queda con lo que sobra, no al revés, para que el
  // 75% de material nunca dependa de cuánto use el relleno.
  const colorCount = count > 0 ? Math.round(count * ROLE_RATIO_COLOR) : 0;
  const detailCount = Math.max(0, count - colorCount);
  const detailPts = generator(detailCount);

  const { points: materialPts, colors: materialColors } = sampleMaterialLayer(
    colorCount,
    generator,
    def.generateWithColor,
    colorParts,
  );

  const points = new Float32Array(count * 3);
  const roles = new Uint8Array(count);
  const pointColors = materialColors ? new Uint8Array(count * 3) : null;
  let cursor = 0;

  const write = (src: Float32Array, n: number, role: NanobotRole, colors: Uint8Array | null) => {
    for (let i = 0; i < n; i++) {
      points[cursor * 3 + 0] = src[i * 3 + 0] + center[0];
      points[cursor * 3 + 1] = src[i * 3 + 1] + center[1];
      points[cursor * 3 + 2] = src[i * 3 + 2] + center[2];
      roles[cursor] = role;
      if (pointColors && colors) {
        pointColors[cursor * 3 + 0] = colors[i * 3 + 0];
        pointColors[cursor * 3 + 1] = colors[i * 3 + 1];
        pointColors[cursor * 3 + 2] = colors[i * 3 + 2];
      }
      cursor++;
    }
  };

  write(detailPts, detailCount, NANOBOT_ROLE.DETAIL, null);
  write(materialPts, colorCount, NANOBOT_ROLE.COLOR, materialColors);

  return { points, roles, colorClusters: clusters, pointColors };
}

/**
 * La capa de material: posiciones y, cuando la forma lo permite, un color
 * por punto.
 *
 * Con `colorParts` cada parte se muestrea por separado y SUS puntos quedan
 * pintados con SU color — la información espacial del color es real, no
 * inventada: un punto de "cabello" está donde está el cabello.
 */
function sampleMaterialLayer(
  count: number,
  generator: (n: number) => Float32Array,
  colored: ((n: number) => { points: Float32Array; colors: Uint8Array }) | undefined,
  colorParts: readonly { color: number; weight: number; generator: (n: number) => Float32Array }[] | undefined,
): { points: Float32Array; colors: Uint8Array | null } {
  if (count === 0) return { points: new Float32Array(0), colors: colored || colorParts ? new Uint8Array(0) : null };

  if (colorParts && colorParts.length > 0) {
    const partCounts = splitCounts(count, colorParts.map((p) => p.weight));
    const points = new Float32Array(count * 3);
    const colors = new Uint8Array(count * 3);
    let cursor = 0;
    for (let part = 0; part < colorParts.length; part++) {
      const n = partCounts[part];
      const src = colorParts[part].generator(n);
      const hex = colorParts[part].color;
      const r = (hex >> 16) & 0xff;
      const g = (hex >> 8) & 0xff;
      const b = hex & 0xff;
      for (let i = 0; i < n; i++) {
        points[cursor * 3 + 0] = src[i * 3 + 0];
        points[cursor * 3 + 1] = src[i * 3 + 1];
        points[cursor * 3 + 2] = src[i * 3 + 2];
        colors[cursor * 3 + 0] = r;
        colors[cursor * 3 + 1] = g;
        colors[cursor * 3 + 2] = b;
        cursor++;
      }
    }
    return { points, colors };
  }

  if (colored) return colored(count);
  return { points: generator(count), colors: null };
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
