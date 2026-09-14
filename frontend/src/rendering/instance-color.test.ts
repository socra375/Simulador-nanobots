import { describe, expect, it } from "vitest";
import * as THREE from "three";
import {
  createInstanceColorBuffer,
  FRAGMENT_ANCHORS,
  injectInstanceColor,
  injectTintVertex,
  isPatchedForInstanceColor,
  patchMaterialForInstanceColor,
  TINT_VARYING,
  VERTEX_ANCHOR,
} from "./instance-color";

/** Los shaders REALES de MeshStandardMaterial, no imitaciones. */
const REAL_FRAGMENT = THREE.ShaderLib.physical.fragmentShader;
const REAL_VERTEX = THREE.ShaderLib.physical.vertexShader;

describe("injectInstanceColor contra el shader real de three", () => {
  // ESTE es el test que justifica el módulo: el parche depende de dos
  // anclas de los chunks de three. Si una actualización de three las
  // renombra, esto lo dice acá en vez de dejar una pantalla sin color que
  // cuesta horas de diagnosticar.
  it("las dos anclas existen en el shader que three publica hoy", () => {
    for (const anchor of FRAGMENT_ANCHORS) {
      expect(REAL_FRAGMENT).toContain(anchor);
    }
  });

  it("declara su propio varying en el fragment", () => {
    const out = injectInstanceColor(REAL_FRAGMENT);
    expect(out).toContain(`varying vec3 ${TINT_VARYING};`);
  });

  // EL BUG QUE COSTÓ UNA RONDA, fijado por escrito.
  //
  // El primer intento guardó las multiplicaciones del fragment con
  // `#ifdef USE_INSTANCING_COLOR`. Parecía correcto, y los tests pasaban.
  // Pero three define USE_INSTANCING_COLOR SÓLO en el prefijo del VERTEX
  // shader (WebGLProgram: prefixVertex vs prefixFragment), así que en el
  // fragment la guarda era siempre falsa: el parche no hacía nada y todo
  // salía blanco. Lo encontró una captura, no un test.
  //
  // Por eso el fragment no puede apoyarse en NINGÚN define: el varying
  // vale blanco cuando no hay instanceColor, y eso ya es el neutro.
  it("el fragment NO se apoya en un define que three no pone ahí", () => {
    const out = injectInstanceColor(REAL_FRAGMENT);
    for (const linea of [`diffuseColor.rgb *= ${TINT_VARYING};`, `totalEmissiveRadiance *= ${TINT_VARYING};`]) {
      const antes = out.slice(0, out.indexOf(linea));
      const guard = antes.lastIndexOf("#ifdef USE_INSTANCING_COLOR");
      const cierre = antes.lastIndexOf("#endif");
      // O no hay guarda, o la que hay ya está cerrada antes de la línea.
      expect(guard).toBeLessThan(cierre);
    }
  });

  it("multiplica el DIFUSO por el color de la instancia", () => {
    expect(injectInstanceColor(REAL_FRAGMENT)).toContain(`diffuseColor.rgb *= ${TINT_VARYING};`);
  });

  // La línea que el intento histórico no tenía. Sin emissive, el color no
  // dispara el bloom (threshold 0.35 sobre fondo 0x03050a) y se ve más
  // apagado que el sistema de olas que reemplaza.
  it("multiplica el EMISSIVE, que es lo que hace que el color brille", () => {
    expect(injectInstanceColor(REAL_FRAGMENT)).toContain(`totalEmissiveRadiance *= ${TINT_VARYING};`);
  });

  it("conserva el resto del shader: no reemplaza, agrega", () => {
    const out = injectInstanceColor(REAL_FRAGMENT);
    expect(out).toContain("#include <lights_fragment_begin>");
    expect(out).toContain("#include <tonemapping_fragment>");
    expect(out.length).toBeGreaterThan(REAL_FRAGMENT.length);
  });

  it("TIRA si el shader no tiene las anclas, en vez de compilar algo mudo", () => {
    expect(() => injectInstanceColor("void main() {}")).toThrow(/color_fragment/);
    expect(() => injectInstanceColor("#include <color_fragment>")).toThrow(/emissivemap_fragment/);
  });
});

describe("injectTintVertex", () => {
  it("el ancla del vertex existe en el shader que three publica hoy", () => {
    expect(REAL_VERTEX).toContain(VERTEX_ANCHOR);
  });

  it("llena el varying desde instanceColor, donde el define SÍ existe", () => {
    const out = injectTintVertex(REAL_VERTEX);
    expect(out).toContain(`varying vec3 ${TINT_VARYING};`);
    expect(out).toContain("#ifdef USE_INSTANCING_COLOR");
    expect(out).toContain(`${TINT_VARYING} = instanceColor;`);
  });

  // Sin instanceColor el material tiene que verse EXACTAMENTE como antes
  // de esta fase: blanco es el neutro del producto.
  it("sin instanceColor el varying vale blanco: no-op exacto", () => {
    const out = injectTintVertex(REAL_VERTEX);
    const asignacion = out.indexOf(`${TINT_VARYING} = vec3( 1.0 );`);
    const guard = out.indexOf("#ifdef USE_INSTANCING_COLOR");
    expect(asignacion).toBeGreaterThan(0);
    // El blanco se asigna ANTES de la guarda, así que siempre corre.
    expect(asignacion).toBeLessThan(guard);
  });

  it("TIRA si el vertex no tiene el ancla", () => {
    expect(() => injectTintVertex("void main() {}")).toThrow(/begin_vertex/);
  });
});

describe("patchMaterialForInstanceColor", () => {
  it("engancha el parche y lo marca", () => {
    const m = new THREE.MeshStandardMaterial();
    expect(isPatchedForInstanceColor(m)).toBe(false);
    patchMaterialForInstanceColor(m);
    expect(isPatchedForInstanceColor(m)).toBe(true);
  });

  it("es idempotente: parchar dos veces no inyecta dos veces", () => {
    const m = new THREE.MeshStandardMaterial();
    patchMaterialForInstanceColor(m);
    patchMaterialForInstanceColor(m);
    const shader = { fragmentShader: REAL_FRAGMENT, vertexShader: REAL_VERTEX, uniforms: {}, defines: {} };
    m.onBeforeCompile(shader as never, null as never);
    const ocurrencias = shader.fragmentShader.split(`totalEmissiveRadiance *= ${TINT_VARYING};`).length - 1;
    expect(ocurrencias).toBe(1);
  });

  it("aplica el parche de verdad cuando three compila", () => {
    const m = new THREE.MeshStandardMaterial();
    patchMaterialForInstanceColor(m);
    const shader = { fragmentShader: REAL_FRAGMENT, vertexShader: REAL_VERTEX, uniforms: {}, defines: {} };
    m.onBeforeCompile(shader as never, null as never);
    expect(shader.fragmentShader).toContain(`totalEmissiveRadiance *= ${TINT_VARYING};`);
    expect(shader.vertexShader).toContain(`${TINT_VARYING} = instanceColor;`);
  });

  // Sin una clave de caché propia, three puede reusar un programa ya
  // compilado de un material equivalente SIN parchar: el color se
  // aplicaría en unos draws sí y en otros no.
  it("declara una clave de caché de programa propia", () => {
    const m = new THREE.MeshStandardMaterial();
    patchMaterialForInstanceColor(m);
    expect(m.customProgramCacheKey()).toBe("instanceColor");
  });

  it("no pisa un onBeforeCompile que el material ya tuviera", () => {
    const m = new THREE.MeshStandardMaterial();
    let llamado = false;
    m.onBeforeCompile = () => { llamado = true; };
    patchMaterialForInstanceColor(m);
    const shader = { fragmentShader: REAL_FRAGMENT, vertexShader: REAL_VERTEX, uniforms: {}, defines: {} };
    m.onBeforeCompile(shader as never, null as never);
    expect(llamado).toBe(true);
    expect(shader.fragmentShader).toContain(`totalEmissiveRadiance *= ${TINT_VARYING};`);
  });
});

describe("createInstanceColorBuffer", () => {
  it("arranca en BLANCO: el neutro del producto", () => {
    const attr = createInstanceColorBuffer(4);
    expect(attr.itemSize).toBe(3);
    expect(attr.count).toBe(4);
    expect(Array.from(attr.array)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it("se marca como dinámico: se reescribe cuadro a cuadro", () => {
    expect(createInstanceColorBuffer(2).usage).toBe(THREE.DynamicDrawUsage);
  });
});
