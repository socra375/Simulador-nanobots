# Línea base de rendimiento — antes de la Fase 26

Generado con `node bench/frame-bench.mjs --counts 1000,3000,10000` contra
el build de producción servido por `vite preview`, en el commit `6d19f3d`
(estado previo a cualquier cambio de la Fase 26).

## Cómo leer estos números

**Chromium headless usa SwiftShader (OpenGL por software), no una GPU
real.** Eso tiene dos consecuencias que hay que tener presentes:

- Los tiempos de cuadro son **mucho peores** que en una máquina con GPU;
  sirven para comparar *antes contra después en la misma máquina*, no
  como una predicción de los FPS reales del usuario.
- Como los FPS bajan, y `dt` está topado a 50 ms en `main.ts`, la
  animación avanza **más lento que el tiempo real**: una formación
  nominal de ~12 s tarda ~47-95 s de reloj. El tiempo de formación de
  abajo mide eso, así que también es solo un relativo.

`frame avg`/`p95` miden el **trabajo del cuadro** (JS + envío de
dibujado), no el intervalo entre cuadros: el intervalo lo fija el vsync y
taparía cualquier mejora mientras sobre presupuesto.

## Resultados

| nanobots |  estado  | frame avg | frame p95 |    fps | draws | heap MB |
|---------:|----------|----------:|----------:|-------:|------:|--------:|
|     1000 | reposo   |    1.16  |    1.80  |  864.86 |    19 |   61.04 |
|     1000 | formando |    4.09  |    6.50  |  244.33 |    21 |   61.04 |
|     1000 | asentado |    1.07  |    3.60  |  933.33 |    23 |   61.04 |
|     3000 | reposo   |    2.35  |    3.10  |  426.14 |    19 |   61.04 |
|     3000 | formando |    8.71  |   12.30  |  114.85 |    21 |   61.04 |
|     3000 | asentado |    0.76  |    1.00  | 1315.79 |    23 |   61.04 |
|    10000 | reposo   |    6.29  |    7.30  |  159.07 |    19 |   61.04 |
|    10000 | formando |   25.06  |   31.50  |   39.91 |    21 |   61.04 |
|    10000 | asentado |    1.43  |    2.60  |  697.67 |    23 |   61.04 |

Formación completa (reloj de pared, ver caveat arriba):
1.000 → 47,12 s · 3.000 → 58,21 s · 10.000 → 94,92 s

## Qué muestra la línea base

1. **"Reposo" no es gratis: cuesta más que "asentado".** En reposo el
   enjambre de Nanobots está **oculto** (`group.visible = false`, ver
   `setVisible` en `nanobot-mesh.ts`), pero igual se corre la física boid
   en Wasm **y** se escriben y suben al GPU hasta `count × 16` floats de
   matrices de instancia por cuadro. A 10.000 agentes son 6,29 ms por
   cuadro dedicados a un objeto que no se dibuja.

2. **"Asentado" es casi gratis (0,76-1,43 ms)** — confirma que el diseño
   de la Fase 19 funciona: una vez que la figura terminó de formarse el
   loop no recalcula nada.

3. **El heap no depende de la cantidad de agentes (61,04 MB siempre).**
   Es la consecuencia directa de reservar los 7 `InstancedMesh` de
   Nanobots + 2 de Microbots a `MAX = 60.000` sin importar el conteo real
   (~27 MB solo de `instanceMatrix` de Nanobots). Con el objetivo de
   3.000-10.000 agentes acordado, eso es memoria reservada al pedo.

4. **El costo real está en "formando"**, que es el único estado donde se
   recalculan posiciones por agente y por cuadro: 25 ms a 10.000.

---

# Después de la Fase 26

Mismo comando, misma máquina, tras los arreglos de estabilidad.

| nanobots |  estado  | frame avg | frame p95 |    fps | draws | heap MB |
|---------:|----------|----------:|----------:|-------:|------:|--------:|
|     1000 | reposo   |    1.27  |    2.50  |  788.18 |    19 |   61.04 |
|     1000 | formando |    4.26  |    7.70  |  234.74 |    21 |   61.04 |
|     1000 | asentado |    0.71  |    0.90  | 1400.00 |    23 |   61.04 |
|     3000 | reposo   |    2.39  |    4.90  |  418.85 |    19 |   61.04 |
|     3000 | formando |    9.29  |   12.10  |  107.60 |    21 |   61.04 |
|    10000 | reposo   |    6.27  |   10.30  |  159.57 |    19 |   61.04 |
|    10000 | formando |   24.87  |   32.30  |   40.21 |    21 |   61.04 |
|    10000 | asentado |    0.57  |    0.60  | 1764.71 |    23 |   61.04 |

## Conclusión honesta: la Fase 26 NO mejoró el rendimiento

Todas las diferencias contra la línea base están dentro del ruido de
medición (±10% entre corridas de la misma build). Conviene decirlo
explícitamente porque contradice dos hipótesis razonables que teníamos
antes de medir:

- **Saltar la escritura de matrices con el enjambre oculto** (el corte por
  `group.visible` en `nanobot-mesh.ts`) bajó "reposo" a 10.000 de 6,29 ms
  a ~6,0-6,3 ms. O sea: escribir y subir 10.000×16 floats costaba ~0,3 ms,
  no los 6 ms que se veían. **El costo de reposo es casi íntegramente la
  física boid en Wasm** (`swarm.step`), no el render. El corte igual se
  deja porque es trabajo que por definición no cambia nada de lo que se
  ve, pero no es la palanca que parecía.
- **Sacar las asignaciones por cuadro** (el literal de `visibleRoles` y las
  dos closures de `forEach`) no movió la aguja: los motores de JS manejan
  ese patrón bien. Son arreglos de corrección y de higiene del camino
  caliente, no optimizaciones.

Lo que sí entrega la Fase 26: los 6 bugs de estabilidad corregidos, el
arnés de medición que produjo estos números, y el dato de dónde está
realmente el costo — **la física en reposo a conteos altos**, que es la
candidata concreta a optimizar si alguna vez hace falta (y la única razón
que justificaría recompilar `boids.cpp`).

El heap sigue clavado en 61,04 MB sin importar el conteo: es la reserva
fija de `instanceMatrix` a `MAX = 60.000`. La capacidad adaptativa que
ataca eso se movió a la Fase 27, donde el arnés de caracterización la
protege.
