// Barril público del módulo de formas (Fase 27d).
//
// Antes esto era un único `shapes.ts` de 2097 líneas donde convivían los
// generadores de figuras, los primitivos de muestreo, el registro de
// nombres/alias, el grafo de anclas (MST) y el pipeline de formación.
// Agregar una forma obligaba a tocar ese archivo gigante en tres lugares
// distintos.
//
// El corte respeta el grafo de dependencias real, que resultó acíclico:
//
//   constants ── sampling ─┬─ composites ─┐
//              └─ primitives ─┐          ├─ bones ─┐
//                             ├─ anatomy ┘         │
//                             └──────────── registry ─┐
//   types ─┐                                          │
//   graph ─┴──────────────────────────────── formation ┘
//
// Este archivo re-exporta exactamente la misma API pública que antes, así
// que `import { ... } from "./shapes"` sigue resolviendo igual y ni los
// importadores (main.ts, ui.ts, nanobot-mesh.ts, visual-hull.ts) ni
// shapes.test.ts necesitaron cambiar una línea.

export { SHAPE_HALF_EXTENT, FORMATION_CENTER, IDLE_RADIUS } from "./constants";
export { CABEZA_PARTS } from "./anatomy";
export { resolveShapeName, listSupportedNames, registerCustomScan } from "./registry";
export { NANOBOT_ROLE, type NanobotRole, type ColorClusterInput, type ShapeFormation } from "./types";
export { buildExoskeleton, formShapeWithRoles, idleCluster, type Exoskeleton } from "./formation";
