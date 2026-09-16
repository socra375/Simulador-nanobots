// Color RGB por instancia, con emissive (Fase 40).
//
// EL PROBLEMA, Y POR QUÉ EL INTENTO ANTERIOR FALLÓ.
//
// nanobot-mesh.ts documenta desde la Fase 14 que ya se probó color por
// instancia y "sólo teñía el canal difuso — sin emissive propio quedaba
// visualmente apagada/invisible contra el fondo oscuro". Eso es exacto, y
// la causa está en los chunks de shader de three:
//
//   color_pars_vertex:   declara `varying vec3 vColor` bajo USE_COLOR,
//                        USE_COLOR_ALPHA **o USE_INSTANCING_COLOR**
//   color_vertex:        `vColor = vec3(1.0); vColor.xyz *= instanceColor.xyz;`
//   color_pars_fragment: declara `varying vec3 vColor` bajo USE_COLOR o
//                        USE_COLOR_ALPHA — **NO bajo USE_INSTANCING_COLOR**
//   color_fragment:      multiplica `diffuseColor` bajo esas mismas dos
//
// O sea: con `instanceColor` solo, el vertex CALCULA vColor y el fragment
// ni lo declara. La salida obvia es prender `vertexColors: true`, que
// define USE_COLOR... y con eso three espera un atributo `color` POR
// VÉRTICE en la geometría. Estas geometrías no lo tienen, así que el
// atributo queda sin enlazar y vColor sale negro o basura. De ahí lo
// "apagado". Y aunque anduviera, `color_fragment` toca `diffuseColor` y
// nunca `totalEmissiveRadiance`, que es lo que el bloom de la escena
// necesita (UnrealBloomPass con threshold 0.35 sobre fondo 0x03050a: sin
// emissive, un color no florece y se pierde).
//
// LA SOLUCIÓN, Y LA TRAMPA QUE TIENE.
//
// Usar `instanceColor` (que activa USE_INSTANCING_COLOR sin pedir ningún
// atributo por vértice) y parchar el shader para llevar ese color hasta
// el difuso Y el emissive.
//
// El primer intento de esta fase apoyó el parche en
// `#ifdef USE_INSTANCING_COLOR` dentro del FRAGMENT, y no funcionó: todo
// salía blanco. La causa, verificada en el código de three (WebGLProgram,
// `prefixVertex` vs `prefixFragment`): **USE_INSTANCING_COLOR se define
// SÓLO en el prefijo del VERTEX shader**. En el fragment nunca está
// definido, así que la guarda era siempre falsa y el parche era un no-op
// silencioso. Lo encontró la verificación visual, no los tests: un parche
// de shader sólo se puede comprobar de verdad renderizando.
//
// Por eso ahora el parche es AUTOCONTENIDO: declara su propio varying
// (`vTint`), lo llena en el vertex —donde el define sí existe— y lo
// multiplica en el fragment sin depender de ningún define. Si un mesh no
// tiene instanceColor, `vTint` queda en blanco y el resultado es
// exactamente el de antes: el neutro del producto.
//
// La cirugía de strings vive en funciones PURAS testeadas contra el
// código real de three: si una actualización renombra un chunk, se entera
// un test, no una pantalla sin color.

import * as THREE from "three";

/** Marca para no parchar dos veces el mismo material. */
const PATCHED = Symbol("instanceColorPatched");

/** Anclas que el parche necesita encontrar en el shader de three. */
export const FRAGMENT_ANCHORS = ["#include <color_fragment>", "#include <emissivemap_fragment>"] as const;
export const VERTEX_ANCHOR = "#include <begin_vertex>";
/** Nombre del varying propio. No usa `vColor` para no chocar con el de three. */
export const TINT_VARYING = "vTint";

/**
 * Lleva `instanceColor` a un varying propio.
 *
 * La asignación va bajo `#ifdef USE_INSTANCING_COLOR` porque ese define SÍ
 * existe en el prefijo del vertex, y porque es lo que declara el atributo
 * `instanceColor`. Sin instanceColor el varying queda en blanco: el
 * neutro, y el material se ve igual que antes de esta fase.
 */
export function injectTintVertex(vertexShader: string): string {
  if (!vertexShader.includes(VERTEX_ANCHOR)) {
    throw new Error(`instance-color: el vertex de three no tiene "${VERTEX_ANCHOR}" (¿cambió de versión?)`);
  }
  return `varying vec3 ${TINT_VARYING};\n` + vertexShader.replace(
    VERTEX_ANCHOR,
    [
      VERTEX_ANCHOR,
      `\t${TINT_VARYING} = vec3( 1.0 );`,
      "#ifdef USE_INSTANCING_COLOR",
      `\t${TINT_VARYING} = instanceColor;`,
      "#endif",
    ].join("\n"),
  );
}

/**
 * Inserta en el fragment shader la declaración del varying y las dos
 * multiplicaciones. Pura: se puede testear sin WebGL.
 *
 * TIRA si no encuentra alguna de las anclas. Fallar ruidosamente acá es
 * mucho mejor que compilar un shader que silenciosamente no aplica el
 * color: el síntoma de eso es "se ve raro", que cuesta horas de encontrar.
 */
export function injectInstanceColor(fragmentShader: string): string {
  for (const anchor of FRAGMENT_ANCHORS) {
    if (!fragmentShader.includes(anchor)) {
      throw new Error(`instance-color: el shader de three no tiene "${anchor}" (¿cambió de versión?)`);
    }
  }

  // SIN guarda de preprocesador: USE_INSTANCING_COLOR no existe en el
  // prefijo del fragment (sólo en el del vertex), así que un #ifdef acá
  // sería siempre falso y el parche, un no-op silencioso. El varying se
  // encarga de que sin instanceColor valga blanco.
  return `varying vec3 ${TINT_VARYING};\n` + fragmentShader
    .replace(
      FRAGMENT_ANCHORS[0],
      `${FRAGMENT_ANCHORS[0]}\n\tdiffuseColor.rgb *= ${TINT_VARYING};`,
    )
    .replace(
      FRAGMENT_ANCHORS[1],
      // ESTA es la línea que el intento histórico no tenía. Sin ella el
      // color existe pero no brilla, y contra el fondo oscuro con bloom
      // eso se ve peor que el sistema de olas que reemplaza.
      `${FRAGMENT_ANCHORS[1]}\n\ttotalEmissiveRadiance *= ${TINT_VARYING};`,
    );
}

/**
 * Deja un material listo para recibir color por instancia. Idempotente.
 *
 * No toca nada del material mientras el mesh no tenga `instanceColor`:
 * todo el código inyectado está bajo `#ifdef USE_INSTANCING_COLOR`, que
 * three sólo define cuando `mesh.instanceColor !== null`. O sea que
 * parchar un material y no usarlo es un no-op exacto.
 */
export function patchMaterialForInstanceColor(material: THREE.Material): void {
  const marked = material as THREE.Material & { [PATCHED]?: boolean };
  if (marked[PATCHED]) return;
  marked[PATCHED] = true;

  const previous = material.onBeforeCompile.bind(material);
  material.onBeforeCompile = (shader, renderer) => {
    previous(shader, renderer);
    shader.vertexShader = injectTintVertex(shader.vertexShader);
    shader.fragmentShader = injectInstanceColor(shader.fragmentShader);
  };
  // Sin esto, three puede reusar un programa ya compilado de un material
  // equivalente SIN el parche: el color se aplicaría en unos draws y en
  // otros no, según el orden en que se compilaron.
  material.customProgramCacheKey = () => "instanceColor";
}

export function isPatchedForInstanceColor(material: THREE.Material): boolean {
  return (material as THREE.Material & { [PATCHED]?: boolean })[PATCHED] === true;
}

/**
 * Buffer de color por instancia para un InstancedMesh. Se asigna a
 * `mesh.instanceColor`, que es lo que hace que three defina
 * USE_INSTANCING_COLOR.
 *
 * Arranca en BLANCO, que es el neutro del producto: un mesh con el buffer
 * puesto pero sin colores escritos se ve exactamente igual que antes de
 * esta fase.
 */
export function createInstanceColorBuffer(capacity: number): THREE.InstancedBufferAttribute {
  const data = new Float32Array(capacity * 3).fill(1);
  const attr = new THREE.InstancedBufferAttribute(data, 3);
  attr.setUsage(THREE.DynamicDrawUsage);
  return attr;
}
