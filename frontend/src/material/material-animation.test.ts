import { describe, expect, it } from "vitest";
import {
  ACTIVATION_DURATION,
  activationFlash,
  agentMaterialProgress,
  materialPhaseAt,
  MATERIAL_PHASE,
  planMaterialTimeline,
  REGION_DEBUG_COLORS,
  SETTLE_DURATION,
  slotProgress,
  transitionFlash,
  writeMaterialTint,
  INERT_DIM,
} from "./material-animation";
import { buildMaterialMap, NO_REGION, type MaterialMap } from "./material-map";

const CENTER: [number, number, number] = [0, 0, 0];
const CORE: [number, number, number] = [-8, 8, -8];
const IDENTITY: [number, number, number] = [0.12, 0.72, 0.69];
const ROJO = 0xd02020;
const DORADO = 0xd8b020;

function cloudMap(n = 12, dosColores = true): { map: MaterialMap; count: number } {
  const count = n * n * n;
  const points = new Float32Array(count * 3);
  const colors = new Uint8Array(count * 3);
  const isMaterial = new Uint8Array(count).fill(1);
  let i = 0;
  for (let ix = 0; ix < n; ix++) {
    for (let iy = 0; iy < n; iy++) {
      for (let iz = 0; iz < n; iz++) {
        const y = (iy / (n - 1) - 0.5) * 8;
        points[i * 3 + 0] = (ix / (n - 1) - 0.5) * 8;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = (iz / (n - 1) - 0.5) * 8;
        const hex = dosColores && y > 0 ? DORADO : ROJO;
        colors[i * 3 + 0] = (hex >> 16) & 0xff;
        colors[i * 3 + 1] = (hex >> 8) & 0xff;
        colors[i * 3 + 2] = hex & 0xff;
        i++;
      }
    }
  }
  const map = buildMaterialMap({
    points, count, isMaterial, pointColors: colors, clusters: [],
    center: CENTER, propagationOrigin: CORE,
  });
  return { map, count };
}

const TRAVEL = 4;

describe("línea de tiempo del material", () => {
  const t = planMaterialTimeline(TRAVEL, 3);

  it("las etapas van en orden y cubren todo el recorrido sin huecos", () => {
    expect(materialPhaseAt(TRAVEL - 0.01, t)).toBe(MATERIAL_PHASE.SPREAD);
    expect(materialPhaseAt(TRAVEL, t)).toBe(MATERIAL_PHASE.SETTLE);
    expect(materialPhaseAt(TRAVEL + SETTLE_DURATION, t)).toBe(MATERIAL_PHASE.ACTIVATION);
    expect(materialPhaseAt(TRAVEL + SETTLE_DURATION + ACTIVATION_DURATION, t)).toBe(MATERIAL_PHASE.FORMATION);
    expect(materialPhaseAt(t.end, t)).toBe(MATERIAL_PHASE.COMPLETE);
    expect(materialPhaseAt(t.end + 100, t)).toBe(MATERIAL_PHASE.COMPLETE);
  });

  it("hay una PAUSA real entre que los bots llegan y que aparece el material (spec §8)", () => {
    // Éste es el fotograma que antes no existía: el objeto cubierto de
    // bots, todavía sin material. Si el asentamiento durara cero, el
    // material empezaría a aparecer en el mismo instante en que el último
    // bot se posa.
    expect(t.settleEnd).toBeGreaterThan(t.travelEnd);
    expect(t.activationEnd).toBeGreaterThan(t.settleEnd);
    for (let e = t.travelEnd; e < t.activationEnd; e += 0.05) {
      expect(slotProgress(e, t, 0)).toBe(0);
    }
  });

  it("más tandas alargan el total, pero MENOS que sumarlas enteras (se solapan)", () => {
    const una = planMaterialTimeline(TRAVEL, 1);
    const seis = planMaterialTimeline(TRAVEL, 6);
    expect(seis.end).toBeGreaterThan(una.end);
    expect(seis.end - una.end).toBeLessThan(5 * una.slotDuration);
  });
});

describe("progreso del material por agente", () => {
  const t = planMaterialTimeline(TRAVEL, 2);

  it("dentro de una tanda, el agente de la semilla se transforma antes que el más lejano", () => {
    const enMedio = t.activationEnd + t.slotDuration * 0.5;
    expect(agentMaterialProgress(enMedio, t, 0, 0)).toBeGreaterThan(
      agentMaterialProgress(enMedio, t, 0, 1),
    );
  });

  it("es monótono: el material nunca retrocede mientras el reloj avanza", () => {
    for (const spread of [0, 0.3, 0.7, 1]) {
      let prev = -1;
      for (let e = 0; e <= t.end + 0.2; e += 0.02) {
        const p = agentMaterialProgress(e, t, 1, spread);
        expect(p).toBeGreaterThanOrEqual(prev - 1e-6);
        prev = p;
      }
    }
  });

  it("al terminar su tanda TODOS los agentes están al 100%, sin importar su spread", () => {
    // Si el escalonado se pasara del largo de la tanda, los agentes más
    // lejanos se quedarían a medio transformar para siempre.
    const fin = t.activationEnd + t.slotDuration;
    for (const spread of [0, 0.25, 0.5, 0.75, 1]) {
      expect(agentMaterialProgress(fin, t, 0, spread)).toBe(1);
    }
  });

  it("una tanda posterior no empieza antes que la anterior", () => {
    const e = t.activationEnd + t.slotDuration * 0.4;
    expect(slotProgress(e, t, 0)).toBeGreaterThan(slotProgress(e, t, 1));
  });
});

describe("parpadeo de activación (spec §10)", () => {
  const t = planMaterialTimeline(TRAVEL, 2);

  it("sólo ocurre durante la activación: antes y después es exactamente 1", () => {
    expect(activationFlash(t.travelEnd, t, 7)).toBe(1);
    expect(activationFlash(t.settleEnd - 0.01, t, 7)).toBe(1);
    expect(activationFlash(t.activationEnd, t, 7)).toBe(1);
    expect(activationFlash(t.end, t, 7)).toBe(1);
  });

  it("es DETERMINISTA: el mismo agente en el mismo instante da siempre lo mismo", () => {
    // La spec §10 lo pide explícitamente: un random por cuadro da ruido de
    // televisión, no una red encendiéndose.
    const e = t.settleEnd + 0.3;
    const a = activationFlash(e, t, 1234);
    for (let k = 0; k < 20; k++) expect(activationFlash(e, t, 1234)).toBe(a);
  });

  it("los agentes NO parpadean todos juntos", () => {
    const e = t.settleEnd + ACTIVATION_DURATION * 0.4;
    const valores = new Set<number>();
    for (let i = 0; i < 50; i++) valores.add(Math.round(activationFlash(e, t, i) * 100));
    expect(valores.size).toBeGreaterThan(5);
  });

  it("arranca APAGADO y va subiendo: hay una envolvente, no un parpadeo plano", () => {
    // Sin la envolvente (el `* u`), el parpadeo tendría la misma
    // intensidad media desde el primer cuadro: los bots pasarían de
    // quietos a destellando a full de golpe, en vez de encenderse como una
    // red. Comparar promedios en dos instantes NO alcanza para notarlo
    // (la media de un seno rectificado sobre fases parejas es constante);
    // lo que lo distingue es que al ARRANCAR el brillo tiene que ser
    // exactamente 1 para todos.
    const prom = (e: number) => {
      let s = 0;
      for (let i = 0; i < 400; i++) s += activationFlash(e, t, i);
      return s / 400;
    };
    expect(prom(t.settleEnd + 0.001)).toBeCloseTo(1, 2);
    expect(prom(t.settleEnd + ACTIVATION_DURATION * 0.95)).toBeGreaterThan(1.15);
  });

  it("nunca apaga a un agente: el multiplicador es siempre >= 1", () => {
    for (let e = t.settleEnd; e < t.activationEnd; e += 0.01) {
      for (let i = 0; i < 30; i++) expect(activationFlash(e, t, i)).toBeGreaterThanOrEqual(1);
    }
  });

  it("el destello de transformación es cero en los extremos y máximo a mitad", () => {
    expect(transitionFlash(0)).toBe(1);
    expect(transitionFlash(1)).toBe(1);
    expect(transitionFlash(0.5)).toBeGreaterThan(transitionFlash(0.2));
    expect(transitionFlash(0.5)).toBeGreaterThan(transitionFlash(0.8));
  });
});

describe("tint por instancia", () => {
  it("al llegar a la superficie los Material Bots llevan SU color de identidad, ATENUADO", () => {
    // Spec §8: primero se ve el objeto CUBIERTO DE BOTS. Si el tint ya
    // trajera el material, volveríamos a "el color aparece mientras
    // vuelan", que es lo que esta fase vino a arreglar.
    //
    // Fase 44: y atenuado. El tint multiplica también la radiancia
    // emissive, así que a brillo pleno el 75% del enjambre florecía con
    // el bloom y el conjunto se veía GRUESO. Inerte se lee como metal
    // apagado, que además es lo que un bot sin activar es.
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    writeMaterialTint(out, map, t, t.travelEnd, IDENTITY);
    for (let i = 0; i < count; i++) {
      if (map.region[i] === NO_REGION) continue;
      expect(out[i * 3 + 0]).toBeCloseTo(IDENTITY[0] * INERT_DIM, 5);
      expect(out[i * 3 + 1]).toBeCloseTo(IDENTITY[1] * INERT_DIM, 5);
      expect(out[i * 3 + 2]).toBeCloseTo(IDENTITY[2] * INERT_DIM, 5);
    }
  });

  it("ningún agente llega a brillar mucho más que su propio material", () => {
    // EL TEST DEL GROSOR. El tint multiplica también la radiancia
    // emissive, y el bloom de la escena tiene el umbral en 0,35: si un
    // agente brilla bastante por encima de su color, florece y el
    // enjambre se ve GRUESO. Eso es lo que pasó en la Fase 42, con el
    // destello llegando a 2,4x sobre bots que además estaban a brillo
    // pleno desde el despegue.
    //
    // El margen no es arbitrario: es el destello de transformación, que
    // TIENE que notarse. Lo que no puede es duplicar el brillo.
    const MARGEN = 1.15;
    const { map, count } = cloudMap(10, false);
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);

    let techo = 0;
    for (let i = 0; i < count * 3; i++) techo = Math.max(techo, map.color[i] / 255);
    techo *= MARGEN;

    for (let e = 0; e <= t.end; e += 0.05) {
      writeMaterialTint(out, map, t, e, IDENTITY);
      for (let i = 0; i < count; i++) {
        if (map.region[i] === NO_REGION) continue;
        for (let k = 0; k < 3; k++) expect(out[i * 3 + k]).toBeLessThanOrEqual(techo);
      }
    }
  });

  it("el bot inerte brilla MENOS que el material terminado", () => {
    const { map, count } = cloudMap(10, false);
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    const brilloMedio = (elapsed: number): number => {
      writeMaterialTint(out, map, t, elapsed, IDENTITY);
      let suma = 0;
      let n = 0;
      for (let i = 0; i < count; i++) {
        if (map.region[i] === NO_REGION) continue;
        suma += Math.max(out[i * 3], out[i * 3 + 1], out[i * 3 + 2]);
        n++;
      }
      return suma / n;
    };
    expect(brilloMedio(t.travelEnd)).toBeLessThan(brilloMedio(t.end));
  });

  it("al final, cada agente lleva EXACTAMENTE el color de su posición", () => {
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    expect(writeMaterialTint(out, map, t, t.end, IDENTITY)).toBe(false);
    for (let i = 0; i < count; i++) {
      if (map.region[i] === NO_REGION) continue;
      expect(out[i * 3 + 0]).toBeCloseTo(map.color[i * 3 + 0] / 255, 5);
      expect(out[i * 3 + 1]).toBeCloseTo(map.color[i * 3 + 1] / 255, 5);
      expect(out[i * 3 + 2]).toBeCloseTo(map.color[i * 3 + 2] / 255, 5);
    }
  });

  it("los agentes sin material quedan en blanco (el neutro del producto)", () => {
    const count = 30;
    const points = new Float32Array(count * 3);
    const isMaterial = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      points[i * 3 + 1] = (i / count - 0.5) * 6;
      isMaterial[i] = i % 2;
    }
    const map = buildMaterialMap({
      points, count, isMaterial, pointColors: null,
      clusters: [{ color: ROJO, weight: 1 }],
      center: CENTER, propagationOrigin: CORE,
    });
    const out = new Float32Array(count * 3).fill(0);
    writeMaterialTint(out, map, planMaterialTimeline(TRAVEL, map.slots), TRAVEL, IDENTITY);
    for (let i = 0; i < count; i++) {
      if (isMaterial[i]) continue;
      expect([out[i * 3], out[i * 3 + 1], out[i * 3 + 2]]).toEqual([1, 1, 1]);
    }
  });

  it("es una FUNCIÓN PURA del reloj: ir y volver deja el mismo tint (spec §21/§22)", () => {
    // De acá sale gratis el repliegue: como el tint no guarda estado entre
    // cuadros, correr el reloj hacia atrás revierte la transformación sin
    // una sola línea de código de "deshacer".
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const medio = t.activationEnd + t.slotDuration * 0.3;
    const ida = new Float32Array(count * 3);
    const vuelta = new Float32Array(count * 3);
    writeMaterialTint(ida, map, t, medio, IDENTITY);
    writeMaterialTint(vuelta, map, t, t.end, IDENTITY);
    writeMaterialTint(vuelta, map, t, medio, IDENTITY);
    expect([...vuelta]).toEqual([...ida]);
  });

  it("el repliegue conserva las asignaciones: nadie cambia de color al volver", () => {
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const antes = Uint8Array.from(map.color);
    const region = Int16Array.from(map.region);
    const out = new Float32Array(count * 3);
    for (let e = t.end; e >= 0; e -= 0.1) writeMaterialTint(out, map, t, e, IDENTITY);
    expect([...map.color]).toEqual([...antes]);
    expect([...map.region]).toEqual([...region]);
  });

  it("avisa cuándo dejar de escribirlo: false sólo cuando ya no puede cambiar", () => {
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    expect(writeMaterialTint(out, map, t, t.travelEnd, IDENTITY)).toBe(true);
    expect(writeMaterialTint(out, map, t, t.activationEnd, IDENTITY)).toBe(true);
    expect(writeMaterialTint(out, map, t, t.end, IDENTITY)).toBe(false);
  });

  it("el modo DEBUG pinta por región y NO toca el material real", () => {
    const { map, count } = cloudMap();
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    const antes = Uint8Array.from(map.color);
    writeMaterialTint(out, map, t, t.end, IDENTITY, true);
    expect([...map.color]).toEqual([...antes]);
    for (let i = 0; i < count; i++) {
      const r = map.region[i];
      if (r === NO_REGION) continue;
      const hex = REGION_DEBUG_COLORS[r % REGION_DEBUG_COLORS.length];
      expect(out[i * 3 + 0]).toBeCloseTo(((hex >> 16) & 0xff) / 255, 5);
    }
  });

  it("escribe en el buffer del llamador: no asigna uno nuevo por cuadro", () => {
    const { map, count } = cloudMap(8);
    const t = planMaterialTimeline(TRAVEL, map.slots);
    const out = new Float32Array(count * 3);
    const ref = out;
    writeMaterialTint(out, map, t, t.end, IDENTITY);
    expect(out).toBe(ref);
    expect(out.length).toBe(count * 3);
  });
});
