# Simulador de Nanobots 3D

🔗 **Demo en vivo:** https://socra375.github.io/Simulador-nanobots/
(solo frontend — sin backend Python; guardar/cargar configuración usa
`localStorage` del navegador en vez de un archivo en servidor).

Enjambre de nanobots en 3D con movimiento tipo "boid" (cohesión, separación,
alineación e inercia), construido combinando tres lenguajes, cada uno en el
rol donde mejor rinde. Por defecto el enjambre está **dentro** de un
núcleo/reactor en una esquina superior de la escena (los nanobots no se
dibujan mientras están en reposo); desde la sección "Comandos" del panel se
le puede pedir que forme un objeto (cubo, esfera, pirámide, estrella,
anillo, corazón, cruz, carro, teléfono, persona/personaje, o una parte del
cuerpo por separado — cabeza, torso, brazo, pierna, mano, pie — ver
`frontend/src/shapes.ts` para la lista completa de sinónimos aceptados)
— sale del núcleo, arma la figura, y puede volver a guardarse en el
núcleo cuando se quiera (con una animación de repliegue, ver abajo). La
cámara se puede rotar (arrastrar) y hacer zoom (rueda del mouse) para
mirar la figura desde cualquier ángulo.

Al formar una figura hay **dos poblaciones independientes** que trabajan en
secuencia, y ninguna de las dos usa física boid mientras se forma — la física
de `boids.cpp` corre **solo en reposo** (el enjambre orgánico alrededor del
núcleo); al formar, ambas poblaciones se mueven con animaciones 100%
scripted en TypeScript, mucho más rápidas y sin el límite de vecinos-por-
agente que antes topaba a Nanobots en 10.000 (ver "Notas de rendimiento"):

1. **Microbots** (panel "Microbots (exoesqueleto)", conteo propio hasta
   60.000) arman primero el exoesqueleto de la figura, lanzándose desde el
   núcleo en un remolino/vórtice propio que se repliega igual al pedir
   "Volver al núcleo". Para las formas humanoides (persona y las partes del
   cuerpo) el exoesqueleto es **literalmente el hueso** — cráneo,
   columna/costillas, y huesos largos con forma real (grueso en las
   puntas/epífisis, angosto en el medio/diáfisis, ver
   `sampleLongBoneSurface`) en vez de una red genérica de nodos y vigas.
   Las formas no-humanoides (cubo, carro, etc.) sí usan esa red genérica
   (nodos ancla por *farthest-point sampling* conectados por un árbol de
   expansión mínima + conexiones extra), ya que no tienen huesos reales.
   Microbots no tiene física boid propia ni "Comandos" propio — siempre
   sigue automáticamente la figura activa de Nanobots.
   En las formas con red genérica el exoesqueleto sale **en dos grupos, uno
   después del otro**: primero los nodos (Microbots) y después las vigas
   que los unen (Union Bots), con un solape chico entre las dos ventanas.
   Las humanoides no tienen vigas, así que salen en un solo grupo en vez
   de dejar medio lanzamiento esperando a un grupo vacío.
2. Recién cuando ese exoesqueleto termina de asentarse, **Nanobots** sale
   del núcleo con un **enjambre escalonado por capas**, al estilo del
   nanotech que se auto-ensambla partícula por partícula (referencia:
   la armadura de Iron Man): primero Detalle (la capa de tejido/relleno
   base) — cada nanobot vuela individualmente desde el núcleo hacia su
   punto final, con su PROPIO instante de salida (no todos a la vez, así
   se ve como una ola/flujo asentándose progresivamente, no un bloque
   sincronizado) y el mismo remolino orgánico que usan los Microbots.
   Recién cuando Detalle termina de asentarse por completo se abre la
   siguiente capa (cada ola de Color, una por una, ver abajo) — rodeando
   el hueso de Microbots sin tocarlo, con tanta densidad que se lee como
   un segundo exoesqueleto pero de piel.

**Color es un 75% FIJO e independiente del total** de Nanobots (no es "lo
que sobra" de un reparto entre roles): Detalle se lleva el 25% restante
entero.

| Población | Rol | Geometría | Función |
|---|---|---|---|
| Microbots | Nodo | Icosaedro chico celeste | Anclas del exoesqueleto (*farthest-point sampling*), acotadas a un máximo (`MICROBOT_ANCHOR_CAP`) para que el cálculo (~O(n²)) no se trabe con conteos altos. |
| Microbots | Viga | Cilindro chico celeste | Conecta cada ancla con su vecina (MST + vecinos cercanos) — la mayoría del budget de Microbots, ya que son baratas de generar a cualquier escala. |
| Nanobots | **Detalle** | Esfera sólida emissive verde (gris apagado apenas arranca Color) | 25% del total de Nanobots. Relleno de base — primera capa en salir, escalonada agente por agente. |
| Nanobots | **Color** (Material Bots) | Prisma sólido emissive (ligeramente más grande), con el color por INSTANCIA | **75% FIJO del total** de Nanobots. Salen TODOS en una sola capa y cubren la superficie entera; el material aparece después, región por región (ver abajo). |

### El material sale de la posición, no de la ola (Fase 42)

**El problema que esto arregla.** Hasta la Fase 41, la capa de Color se
generaba como N "olas", y cada ola era un **muestreo independiente de la
silueta completa** con un color plano propio. Con una foto roja y dorada,
la ola roja esparcía rojo por todo el objeto y la dorada esparcía dorado
por todo el objeto. En pantalla eso es un damero:

```
🔴 🟡 🔴 🟡 🔴
🟡 🔴 🟡 🔴 🟡
🔴 🟡 🔴 🟡 🔴
```

El color lo decidía la **ola**. Ahora lo decide la **posición**:

```
color / material  =  POSICIÓN + REGIÓN     (no: = OLA)
```

**El mapa de material** (`frontend/src/material/material-map.ts`) le
asigna a cada destino su color ANTES de que nadie se mueva, y agrupa los
destinos en **regiones contiguas** del mismo material — componentes
conexas por 6 vecinos sobre una grilla de vóxeles, con la condición extra
de que dos celdas vecinas sólo se unen si llevan el mismo material. Es el
mismo vecindario e indexado que ya usan `surfacePoints` y
`findComponents`, así que "contiguo" significa lo mismo en todo el
proyecto.

La resolución de esa grilla es **adaptativa**, y no por gusto: con una
resolución fija, a pocos agentes cada uno cae en su propia celda, ninguna
celda toca a otra y la superficie se parte en tantas regiones como
agentes. Medido con una nube de 1.728 puntos a res 32: daba 1.728
regiones de un agente cada una. La contigüidad no es propiedad de la
grilla sola, sino de la grilla **en relación a la densidad** de la nube.

**Dos procedencias, y la diferencia se dice:**

| Procedencia | Cuándo | Qué se sabe |
|---|---|---|
| `OBSERVED` | Escaneo desde imagen, o formas con partes de color propio (hoy "cabeza": piel, cabello, ojos, labios) | Cada punto lleva **su** color, con la fidelidad de la foto. Un rojo con sombras y reflejos conserva sus tonos: el material agrupa, no aplana. |
| `FALLBACK` | Las 17 figuras predefinidas | De la foto sólo se conoce la **paleta** y sus proporciones, no dónde va cada color. Se reparte en bandas espaciales contiguas a lo largo del eje más largo de la figura, y el panel lo declara: *"paleta repartida en bandas (aproximado)"*. |

"Cabeza" dejó de ser un caso especial: sus cuatro partes anatómicas son
generadores distintos, así que producen color por punto igual de real que
un escaneo.

### Cubrir, activar, transformar

La ola no desapareció — **cambió de trabajo**. Antes repartía color;
ahora activa una región. La secuencia es:

```
SPREAD      los Material Bots vuelan y cubren la superficie ENTERA,
            con su color de identidad. Todavía se ven bots.
SETTLE      pausa breve: el objeto cubierto de bots, sin material.
ACTIVATION  parpadeo, determinista por índice de agente (ángulo áureo),
            con envolvente creciente: arranca salpicado y termina con
            toda la red encendida.
FORMATION   cada tanda de regiones se transforma, y dentro de cada región
            el material avanza desde la semilla hacia afuera.
```

La **semilla** de cada región es su agente más cercano al núcleo, y las
regiones se encienden en orden de cercanía al núcleo: el material recorre
la superficie desde donde llegan los bots. El escalonado dentro de una
capa también dejó de ser el orden del array (`cursor / (n-1)`) y pasó a
ser la distancia normalizada al núcleo.

Las tandas están **acotadas** (`MAX_ACTIVATION_SLOTS = 6`) y se solapan un
25%. Las regiones conservan su identidad y su material; lo que se acota es
en cuántos momentos distintos se encienden, para que un objeto con muchas
manchas no tarde un minuto en formarse.

### Cómo llega el color a la GPU

Todo eso viaja en **un tint por instancia en floats** sobre un material
blanco, multiplicado por el parche de shader de
`rendering/instance-color.ts` tanto en el color difuso como en la
radiancia emissive. Que sean floats y puedan pasarse de 1 es lo que
permite el parpadeo y el destello de transformación **sin un shader
nuevo**: un tint de 2.0 es literalmente el doble de brillo, y el bloom lo
recoge.

Como el tint es una **función pura del reloj**, el repliegue sale gratis:
correr el reloj hacia atrás revierte la transformación (material →
agentes → vuelo) sin una sola línea de código de "deshacer". Y por eso el
repliegue empieza con el objeto quieto mientras el material se revierte,
y recién después arranca la espiral.

Esto además eliminó las cuatro mallas por ola: existían sólo para darle a
cada ola un color plano, y el tint por instancia las volvió innecesarias.
La población de Nanobots pasó de **5 InstancedMesh a 2**.

**Modo DEBUG de regiones** (panel "Material y regiones"): pinta cada
región de un color distinto. Es puramente de presentación — no toca el
mapa de material ni el estado de ningún agente, y se apaga del todo.

### De dónde sale la paleta

`frontend/src/image-color.ts` (`pickColorClusters`) arma un histograma de
color de la foto y agrupa los buckets por **proximidad** (tonos parecidos
de una misma zona —ruido de cuantización— se funden en un solo material),
quedándose con hasta 4 clusters ordenados por peso. Todo 100% en el
navegador, sin IA ni backend de visión.

Cuando la figura trae color por punto, la paleta sale de **la nube**, no
de la foto: `paletteFromPointColors` comparte el merge por proximidad
pero **no** los filtros de fondo. En una foto un negro casi puro suele ser
fondo; en una nube ya segmentada es la rueda del auto, y descartarlo
dejaría sin material justo a las partes más contrastadas.

Detalle **pierde su color de rol fijo y pasa a un gris apagado** apenas
sale la capa de material, así el color real del objeto es el que
predomina visualmente, con Detalle en gris apenas asomando entre los
prismas.

Al formar una figura, la física boid (`swarm.step`, cohesión/separación/
alineación/seek) **no corre en absoluto** — los Nanobots se mueven 100%
por la animación scripted por capas (ver arriba), mucho más rápida que la
vieja convergencia física y sin el límite de vecinos-por-agente que antes
topaba la cantidad soportada. En reposo (sin figura activa) la física boid
sigue corriendo igual que siempre, con los pesos de cohesión/separación/
alineación que deja el usuario en el panel, para el movimiento orgánico
de enjambre.

El exoesqueleto de Microbots se revela con un tiempo fijo (lanzamiento en
vórtice de ~3.4s, sin física que "asentar"), repartido entre sus dos grupos
—nodos y uniones— más una cola final en la que ya está todo puesto, para
que el relleno no salga pisando el último instante de vuelo de las vigas.
Recién cuando termina, Nanobots
arranca su propio revelado por capas: cada capa (Detalle, luego cada ola
de Color) dura un tiempo fijo — ~1s de vuelo por agente más ~1s de
"ventana" en la que se reparten los instantes de salida de todos los
agentes de esa capa — tampoco depende de ninguna física que "asentar".

Al pedir "Volver al núcleo" con una figura formada, el enjambre no salta
directo al reposo: Nanobots repliega las mismas capas pero en orden
inverso (la última ola de Color se repliega primero, Detalle al final),
cada agente volando de vuelta al núcleo igual de escalonado que a la
ida — igual que Microbots repliega su propio remolino — si se pide volver
a mitad de la salida, el repliegue arranca suave desde el progreso actual
en vez de saltar.

| Lenguaje | Rol | Carpeta |
|---|---|---|
| **C++ → WebAssembly** | Núcleo de física del enjambre (posiciones, velocidades, fuerzas boid) | `/cpp` |
| **TypeScript + Three.js** | Escena 3D, render loop, input del mouse, UI | `/frontend` |
| **Python (FastAPI)** | Sirve la app y persiste la configuración del enjambre en JSON | `/backend` |

## Cómo se comunican los tres lenguajes

```
┌─────────────┐   memoria compartida (HEAPF32,     ┌──────────────────┐
│   C++/Wasm   │   sin copias, vía punteros)        │   TypeScript      │
│  /cpp/boids  │ <---------------------------------> │  frontend/src/    │
│  .cpp        │   step(dt), setTarget(), setParams()│  swarm.ts         │
└─────────────┘                                      └──────────────────┘
                                                              │
                                                     fetch() JSON sobre HTTP
                                                     (/api/config GET/POST)
                                                              │
                                                              ▼
                                                      ┌──────────────────┐
                                                      │  Python/FastAPI   │
                                                      │  backend/main.py  │
                                                      └──────────────────┘
```

- **C++ ↔ TypeScript**: el módulo Wasm expone las posiciones (y los targets
  por-agente) de los nanobots como punteros a memoria lineal. `swarm.ts`
  construye `Float32Array` que apuntan directamente a esa memoria
  (`Module.HEAPF32.buffer`), así que cada `step()` en C++ deja los valores
  ya listos para leer/escribir, sin serialización ni copia por frame. Cada
  nanobot persigue su propio target — un punto cerca del núcleo en reposo,
  o un punto de la figura pedida al formar un objeto (ver `shapes.ts`).
- **TypeScript ↔ Python**: sin relación con la física. El frontend simplemente
  hace `fetch('/api/config')` (GET/POST) para guardar o recuperar la
  configuración del enjambre como JSON plano.

## Estructura

```
/cpp        Núcleo de física boid en C++ puro + build a Wasm (Emscripten)
/frontend   Vite + TypeScript + Three.js — escena 3D, UI, entry point index.html
/backend    FastAPI — sirve el frontend y expone /api/config
```

### Módulos del frontend

`main.ts` es **sólo cableado** (~150 líneas: escena, postprocesado,
reactor, métricas, panel, loop). Antes tenía 666 líneas con todo el estado
dentro de una única closure de 551, sin un solo export y por lo tanto sin
forma de testearlo.

```
core/
  simulation.ts   Máquina de estados del enjambre. Recibe swarm y mallas
                  inyectados, así que se puede correr entera contra mallas
                  falsas que registran cada llamada.
  loop.ts         Loop de cuadros con reloj y agendador inyectables.
  kinematics.ts   Matemática pura de las animaciones (sin three.js, sin DOM).
  metrics.ts      Frame time, FPS, draw calls, heap. Sin asignar en el
                  camino caliente.
shapes/           16 generadores de formas + huesos + registry + grafo
                  (MST/anclas) + pipeline de formación. Antes era un solo
                  archivo de 2097 líneas.
swarm/
  agent-store.ts  Estado por agente en Structure-of-Arrays (TypedArrays
                  paralelos, no un objeto por agente).
  director.ts     Cola de tareas. Las tareas NO tienen reloj propio:
                  ocupan ventanas [t0, t1] sobre la línea temporal única.
voxel/
  grid.ts         Grilla de ocupación + superficie + cobertura.
  correspondence.ts  Emparejamiento agente→destino para el morph directo.
```

### Qué muestra el panel en vivo

- **Estado de los agentes**: cuántos están en el núcleo, viajando,
  ensamblando, asentados, volviendo o en reposo.
- **Cola de tareas**: exoesqueleto → uniones → relleno → cobertura → una
  tarea por tanda de material, con su estado. Es la misma secuencia que se
  ve en pantalla: las ventanas salen de una sola fuente (`groupWindow` y
  `planMaterialTimeline`), así que la cola no puede describir un orden
  distinto del que se anima.
- **Material y regiones**: cuántas regiones espaciales encontró, en
  cuántas tandas se encienden, la paleta, la etapa actual, y —lo que
  ningún otro panel diría— si el reparto de color es **observado** o
  **aproximado**.
- **Cobertura de la figura**: qué fracción del volumen de la forma ocupan
  realmente los nanobots. Responde a "¿me alcanzan los agentes para esta
  figura?", que antes sólo se podía adivinar mirando.

### Tipos de bot

Seis tipos, con función, color de identidad y tamaño propios. Cuatro
mapean a agentes que **ya existían** — el sistema le puso nombre al eje
que el enjambre ya tenía, no agregó una capa paralela:

| Tipo | Color | Mapea a | ¿Existe hoy? |
|---|---|---|---|
| Microbot | azul | nodos del exoesqueleto | sí |
| Union Bot | dorado | vigas del exoesqueleto (unen nodos, MST) | sí* |
| Nanobot | verde | rol DETALLE | sí |
| Material Bot | turquesa | rol COLOR (lleva el material del objeto) | sí |
| Repair Bot | rojo | — | **no**: falta el despacho de agentes a los huecos |
| Transform Bot | morado | — | **no**: el morph lo hace el enjambre entero |

\* Sólo en formas con exoesqueleto de vigas (cubo, carro…). Las formas
humanoides usan hueso macizo y dan 0 Union Bots — el panel lo aclara para
que ese cero no se lea como un fallo.

Los dos tipos sin agentes se muestran igual, con el motivo escrito.
Ocultarlos haría creer que no están previstos; mostrarlos sin aclaración
haría creer que funcionan.

**Identidad ≠ material.** El color de identidad dice de qué TIPO es el
bot; el color del objeto dice de qué está hecho lo que se construye, y lo
reparten los Material Bots. La lógica nunca pregunta por el color para
decidir qué hace un agente: pregunta por su tipo. Un `if (esRojo)
reparar()` sería un bug esperando a que alguien cambie la paleta.

**Regla dura**: los Material Bots pintan todas las capas **menos** la
estructura. El Microbot conserva su azul, porque si la estructura base
pudiera repintarse se perdería la única referencia visual constante para
distinguir estructura de recubrimiento. Tiene bloque de tests propio.

La paleta vive en un solo archivo (`swarm/bot-config.ts`) y se puede
cambiar en caliente.

### Modo de inspección

- **Zoom especial**: baja el límite de acercamiento de 6 a 0,8 y achica el
  campo de visión. No es subir el zoom máximo: el zoom normal a propósito
  no alcanza para ver el detalle.
- **Inspección de bots**: modelo 3D grande de cada tipo, con su ficha. Los
  datos que todavía no existen (material aplicado, energía, conexiones) se
  muestran como *"no disponible en esta fase"*, nunca inventados.
- **Ver capas**: separa estructura / conexiones / detalle / material en
  vertical para entender cómo se apila el objeto. Sólo afecta cómo se
  dibuja — la simulación no cambia.

### Forma hexagonal y nivel de detalle

Los bots son prismas hexagonales. Medido contra la versión anterior de
esferas, en la misma escena y el mismo entorno:

| | triángulos |
|---|---:|
| esferas (16×12 segmentos) | 1.136.376 |
| hexágonos | 154.296 |

7,4× menos. La forma que pedía la especificación y el objetivo de
rendimiento apuntaban para el mismo lado.

El LOD tiene tres niveles y es **uno para toda la población**, no uno por
agente: si cada agente eligiera el suyo habría que partir la población en
tres mallas y reordenar instancias en cada movimiento de cámara, que es
justo el costo que el instanciado evita.

### Morph directo

Pedir otra figura sin volver al núcleo **no** manda los agentes de vuelta
al reactor: viajan desde donde están. El emparejamiento agente→destino se
hace por celda de vóxel (no húngaro, que es O(n³) e inviable a 60.000);
medido contra el orden crudo, la distancia total de viaje baja a menos de
la mitad.

## Requisitos

- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)
  (`emcc`) — solo necesario si vas a **recompilar** el núcleo C++. El
  binario ya compilado se incluye en `frontend/public/wasm/` para que la
  demo funcione sin instalar nada extra.
- Node.js 18+ y npm.
- Python 3.10+.

## 1. (Opcional) Recompilar el núcleo C++ a WebAssembly

```bash
cd cpp
./build.sh
# genera ../frontend/public/wasm/boids.js y boids.wasm
```

## 2. Compilar el frontend

```bash
cd frontend
npm install
npm run build       # genera frontend/dist (servido por el backend)
# o, para desarrollo con recarga en caliente:
npm run dev          # http://localhost:5173 (con proxy a /api hacia el backend)
```

## 3. Levantar el backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Abrí `http://127.0.0.1:8000` en el navegador. El núcleo se ve solo (los
nanobots están dentro, ocultos); el panel de control (arriba a la derecha)
permite ajustar la cantidad de nanobots (20–60.000), la velocidad máxima y
los pesos de cohesión/separación/alineación, guardar/cargar esa configuración
(persistida por el backend en `backend/config/swarm_config.json`), y en la
carpeta "Comandos": escribir el nombre de un objeto, adjuntar una foto de
confirmación y pedirle al enjambre que lo forme ("Volver al núcleo" para
deshacerlo y ocultarlo de nuevo). La foto NO se analiza con ningún modelo
de IA/visión (no hay backend de eso en producción) — la figura real (y el
reparto en Estructura/Relación/Detalle) sale de `frontend/src/shapes.ts` a
partir del nombre escrito, no de la imagen. Lo único que sí se calcula a
partir de la foto es su color RGB dominante (un histograma de color simple,
100% en el navegador — ver rol Color arriba y `frontend/src/image-color.ts`),
para pintar la figura con el color real del objeto fotografiado. Podés
rotar la cámara arrastrando y hacer zoom con la rueda del mouse.

## Despliegue en GitHub Pages (solo frontend)

El sitio se sirve desde la rama **`gh-pages`**, que contiene el build ya
compilado de `/frontend` (con `base: "/Simulador-nanobots/"`). No incluye el
backend Python — no hay endpoint `/api/config` en producción, así que
`frontend/src/config-client.ts` cae automáticamente a `localStorage` cuando
el `fetch` falla. La física boid corre igual (100% client-side vía Wasm).

Configuración del repo: **Settings → Pages → Source: "Deploy from a
branch"** → rama `gh-pages`, carpeta `/ (root)`.

Para publicar una actualización:

```bash
cd frontend
npm ci
GITHUB_PAGES=true npm run build   # usa base "/Simulador-nanobots/"
# copiar el contenido de frontend/dist/ (+ un archivo .nojekyll vacío)
# a la raíz de la rama gh-pages y pushearlo
```

(Se descartó automatizar esto con un workflow de GitHub Actions +
`actions/deploy-pages`: el ambiente `github-pages` que crea automáticamente
quedó con una regla de protección de rama corrupta que seguía rechazando
deploys desde `main` incluso configurada como "No restriction" en la UI —
un bug conocido de GitHub Environments. El deploy manual a `gh-pages` evita
ese problema por completo.)

## Testing

Cada lenguaje tiene su propia suite, sin frameworks pesados innecesarios:

**C++** — tests unitarios nativos (sin Emscripten ni Wasm, compilan con el
`g++` del sistema; `boids.cpp` guarda `EMSCRIPTEN_KEEPALIVE` detrás de
`#ifdef __EMSCRIPTEN__` para permitirlo):

```bash
cd cpp
./run_tests.sh
```

**Backend (Python)** — pytest + `TestClient` de FastAPI, sobre
`/api/config` (aislado del archivo real de config vía un fixture que
redirige `CONFIG_PATH` a un temporal):

```bash
cd backend
pip install -r requirements-dev.txt
pytest
```

**Frontend (TypeScript)** — Vitest, unitarios sobre la lógica pura de
`shapes.ts` (resolución de nombres/alias, generadores de figuras, cluster
de reposo) e `image-color.ts` (histograma de color dominante):

```bash
cd frontend
npm install
npm test
```

**E2E (Playwright)** — contra el build de producción servido por el
backend real: converge al núcleo, el flujo de "Comandos" completo (pide
foto, rechaza nombres no reconocidos, resuelve alias, forma la figura,
vuelve al núcleo), y que cambiar la cantidad de nanobots no rompe nada:

```bash
cd frontend
npm run build
cd ../backend && uvicorn main:app &   # necesita estar corriendo en :8000
cd ../frontend
npx playwright install chromium       # una sola vez
npm run test:e2e
```

## Notas de rendimiento

- La física corre en C++ compilado a Wasm (código nativo), no en JS
  interpretado.
- **Búsqueda de vecinos con grilla espacial**: comparar cada nanobot contra
  todos los demás (O(n²), como en Fase 1/2) deja de ser viable por encima de
  unos pocos cientos de agentes. `boids.cpp` particiona el volumen en una
  grilla uniforme (celdas de lado = radio de interacción) y reconstruye un
  bucket-sort por celda en cada `step()` — cada agente solo compara contra
  el bloque de 3×3×3 celdas vecinas, no contra todo el enjambre.
- **Radio de interacción escalado por densidad**: `kNeighborRadius`/
  `kSeparationRadius` se encogen con `count` (factor `cbrt(200/count)`,
  hasta 200 agentes es 1:1, igual que antes) para que el número de vecinos
  reales por agente —lo que efectivamente cuesta CPU— no crezca sin límite
  aunque miles de nanobots terminen apretados en un cluster chico (reposo
  junto al núcleo) o una figura.
- **Tamaño visual escalado por densidad**: cada nanobot se dibuja más chico
  a medida que `count` sube (factor `cbrt(80/count)`), para que más
  cantidad se traduzca en más detalle en el contorno de una figura en vez
  de una superposición sólida.
- En reposo (única situación en la que hoy corre la física, ver más abajo),
  10.000 nanobots corren a ~4ms/step en C++ nativo (muy por debajo del
  presupuesto de 16.6ms/frame a 60 FPS) — medido en `cpp/test_boids.cpp`.
  El renderizado usa `THREE.InstancedMesh` (una llamada de dibujo por
  variante de geometría, no una por nanobot).
- **Profundidad/definición visual** (`scene.ts`): sombras reales (una
  `DirectionalLight` con `castShadow`, recibidas por un piso invisible
  `ShadowMaterial` debajo del grid), `ACESFilmicToneMapping` +
  `SRGBColorSpace` para un contraste más cinematográfico, y postprocesado
  de **bloom/glow** (`EffectComposer` + `UnrealBloomPass`, ambos ya
  incluidos en `three/examples/jsm` — sin dependencias nuevas) sobre los
  materiales emissive del enjambre y el reactor. Las geometrías de los
  roles de nanobot (`nanobot-mesh.ts`) y del reactor (`reactor.ts`) también
  suben de segmentos/detalle para verse más redondeadas de cerca.
- **Nanobots a 60.000 (antes 10.000)**: la física boid pasó a correr **solo
  en reposo** — al formar una figura, `main.ts` ya no llama a
  `swarm.step(dt)` en absoluto (se mueve por la animación scripted por
  capas escalonadas), así que el límite de vecinos-por-agente de
  `boids.cpp` deja de ser el techo real de la cantidad soportada al formar.
  El otro costo — `nanobot-mesh.ts: updateFromPositions` armando cada
  matriz vía `THREE.Object3D`/`dummy.updateMatrix()` por instancia — se
  eliminó por completo: como los roles Estructura/Relación quedaron en 0
  puntos desde Fase 15 (solo quedan esferas de Detalle/Color, sin rotación
  por instancia), ahora escribe los 16 floats de cada matriz directo sobre
  `instanceMatrix.array`, mismo patrón que ya usaba `microbot-mesh.ts`. Con
  ambos costos fuera del camino, el techo de Nanobots se iguala al de
  Microbots (`MAX_NANOBOTS = MAX_MICROBOTS = 60.000`).
- **Microbots** (`microbot-mesh.ts`): sin física boid (Wasm) propia — se
  animan con un remolino/vórtice puro en TS, así su costo no compite con
  el de Nanobots. El loop de render tampoco usa `THREE.Object3D`/
  `dummy.updateMatrix()` por instancia: escribe directo los 16 floats de
  cada matriz sobre `instanceMatrix.array`, con una base ortonormal armada
  a mano (sin `Quaternion`) para orientar cada viga. No hay una medición de
  FPS real en navegador con GPU (solo headless/SwiftShader, que subestima
  mucho el rendimiento real); si hace falta, `MAX_NANOBOTS`/
  `MAX_MICROBOTS` son un solo número cada uno para ajustar en `main.ts`.

### Medido, no estimado

`frontend/bench/frame-bench.mjs` mide contra el build real (Playwright
headless) y `frontend/bench/BASELINE.md` guarda los números. Lo que se
aprendió midiendo, y que conviene no volver a adivinar:

| momento | heap | qué lo movió |
|---|---:|---|
| línea base | 61,0 MB | — |
| tras arreglar 6 bugs de estabilidad | 61,0 MB | nada: eran arreglos de corrección, no de memoria |
| tras borrar roles muertos | 54,2 MB | borrar código que no se ejecutaba |
| tras capacidad adaptativa de las mallas | 33,5 MB | dejar de reservar para agentes inexistentes |

Las dos mejoras reales de memoria vinieron de **sacar** cosas, no de
agregar optimizaciones. En cambio las "optimizaciones" intuitivas
(evitar un literal de array por cuadro, sacar closures de `forEach`,
saltear escrituras de matriz invisibles) no dieron **nada** medible: a
10.000 agentes en reposo el costo real es la física boid en Wasm (~6 ms)
contra ~0,3 ms de escritura de matrices.

**Advertencia sobre las mediciones headless**: SwiftShader (sin GPU) más
el tope de `dt` del loop hacen que una formación de ~12 s nominales tarde
bastante más en reloj de pared. Es un artefacto del entorno de medición,
no un problema del simulador.

## Imagen → 3D: de una foto al objeto construido (Fases 38-43)

El panel **"Imagen → 3D"** toma UNA sola imagen y la convierte en un
objeto que el enjambre construye, con los colores reales de la foto.

**La reconstrucción se ve EN LA ESCENA, no en el menú (Fase 43).** Al
terminar de reconstruir, la nube de puntos aparece donde se arma todo, en
el mismo lugar y a la misma escala en que la va a construir el enjambre,
y se la puede girar con los controles de cámara de siempre. Antes salía
proyectada en una miniatura de 240 px dentro de la carpeta del panel, que
es justamente donde no se puede hacer lo único que importa de una
reconstrucción 3D: mirarla desde otro ángulo y ver si el volumen cerró.
Las etapas 2D —imagen, máscara, profundidad, procedencia— sí se quedan en
el panel, porque son imágenes. La vista previa es sólo presentación: no
crea agentes, no toca la simulación, y se apaga sola en cuanto el enjambre
empieza a construir.

```
imagen -> máscara -> profundidad -> nube 3D con color
       -> vóxeles -> cáscara -> forma registrada -> enjambre
```

Cada etapa vive en `frontend/src/vision/` como funciones puras sobre
TypedArrays (vitest corre en node, sin DOM), y el orquestador es
`pipeline.ts`.

| Etapa | Cómo | Dónde |
|---|---|---|
| Separar objeto de fondo | Canal alpha si la imagen lo trae; si no, flood fill desde el borde con umbral LOCAL entre vecinos (tolera fondos en degradé) | `vision/segmentation.ts` |
| Estimar profundidad | Transformada de distancia (infla la silueta) + corrección por sombreado | `vision/depth-estimator.ts` |
| Reconstruir en 3D | Extrusión / profundidad / profundidad+simetría, con un color por punto | `vision/reconstruction.ts` |
| Voxelizar y validar | `VoxelGrid` con color y procedencia; componentes conexas | `voxel/grid.ts`, `voxel/validate.ts` |
| Construir | El mismo `SwarmDirector` de siempre: nodos → uniones → relleno → color | `swarm/director.ts` |

**No hay ninguna IA.** La profundidad es un proveedor intercambiable
(`vision/depth-provider.ts`) con dos implementaciones reales —inflado de
silueta y espesor constante—, cada una declarando su propio techo de
confianza. La interfaz está lista para enchufar un modelo; **no se
escribió un proveedor externo vacío**, porque un provider sin servicio
detrás devuelve lo mismo que el local.

### Geometría vista vs geometría inferida

Una foto muestra UNA cara. Cada punto lleva de dónde salió:

- **observada** — la cara que mira a la cámara, con el color de su píxel.
- **interpolada** — el relleno entre las dos caras; no se vio, pero está
  acotado por ellas.
- **inferida** — la cara de atrás y lo que completa la simetría. Es la
  parte que es una suposición.

El panel muestra la fracción observada y la confianza baja cuando la nube
es mayoría suposición. Mezclarlas en una nube indistinta sería presentar
como observado algo que se inventó.

### Resolución

La escalera es **48 / 64 / 96 / 128**, y se corta ahí por el **presupuesto
de agentes, no por memoria**: a 128³ la cáscara de un objeto que llena el
encuadre pasa los 60.000 vóxeles y el enjambre no podría construirla
entera. El panel muestra el conteo real y avisa antes de construir.

### Rendimiento

Lo pesado corre en un **Web Worker** (`vision/pipeline.worker.ts`) para no
trabar el render. Si el Worker no arranca, el pipeline **cae a ejecución
en línea** llamando a la misma función: se paga con un tirón de unos
cuadros, no con una función rota, y el panel dice en qué hilo corrió.

Medido con una foto de 192×192 a resolución 64³: segmentación 9 ms,
profundidad 27 ms, reconstrucción 13 ms, voxelización 30 ms, validación
64 ms.

## Limitaciones conocidas

Cosas que el proyecto **no** hace, dichas explícitamente para que nadie
las asuma:

- **La física no es nanométrica.** Es un modelo de boids (cohesión,
  separación, alineación) a escala visual. No hay fuerzas de van der
  Waals, ni movimiento browniano, ni química.
- **La forma no sale de la foto en "Comandos".** Ahí la foto sirve como
  confirmación de UX y para extraer la PALETA de material; la geometría
  viene de los generadores de `shapes/`. Para reconstruir geometría desde
  una imagen está el panel "Imagen → 3D" (ver arriba).
- **En las figuras predefinidas, DÓNDE va cada color es una
  aproximación.** La foto dice qué colores hay y en qué proporción, no en
  qué parte de la figura van (la forma sale del nombre escrito, no de la
  imagen). El reparto en bandas espaciales es una decisión de
  presentación, y el panel "Material y regiones" lo dice con todas las
  letras: *"paleta repartida en bandas (aproximado)"*. Con color por punto
  real —el escaneo desde imagen, o "cabeza"— pasa a decir *"color por
  posición"*.
- **Las regiones son contiguas en la medida en que la nube lo permite.**
  La grilla de regiones ajusta su resolución a la densidad de agentes,
  pero con conteos bajos las celdas son gruesas y dos manchas de colores
  distintos que se tocan pueden fundirse en el borde. Las esquirlas por
  debajo del 1% se absorben en la región grande más cercana del mismo
  material, así que no producen tandas de activación propias.
- **Una sola imagen no alcanza para una reconstrucción exacta.** No
  contiene información de profundidad: lo que se obtiene es una
  ESTIMACIÓN, y la UI lo dice siempre. El sistema informa qué fracción de
  la geometría se vio de verdad y cuánta infirió. Con confianza baja
  rotula el resultado como "Reconstrucción aproximada".
- **El escaneo por 4 fotos se retiró (Fase 43).** Era un visual hull, y
  pedía algo que en la práctica casi nadie lograba: cuatro tomas del mismo
  objeto con el MISMO encuadre, zoom y distancia, sobre fondo liso. Con
  cualquier desalineación la reconstrucción salía peor que la de una sola
  imagen, que ya cubre el caso. El tallado por siluetas sigue en
  `visual-hull.ts` y sus tests siguen corriendo: son la prueba de que la
  grilla de vóxeles generalizada (`voxel/grid.ts`) da exactamente los
  mismos vóxeles que la implementación a mano que reemplazó. Lo que se
  quitó es la carpeta de UI y la carga de las 4 fotos.
- **La física corre sólo en reposo.** Al formar una figura los agentes se
  mueven por animación scripted, no por convergencia física.
- **No hay medición de FPS real con GPU.** Los números de arriba son
  headless; subestiman el rendimiento real.
- **Sin WebGPU.** Se midió primero: con el objetivo de 3.000–10.000
  agentes el cuello no está en las llamadas de dibujo (hay ~20 por
  cuadro), así que migrar no se justifica todavía.

## Qué falta (siguiente ronda)

Ninguna de estas está empezada; se nombran para que quede claro el límite
entre lo que funciona y lo que no existe:

- Conexiones entre agentes y hashing espacial expuesto desde C++ (hoy la
  grilla existe en `boids.cpp` pero no exporta la lista de vecinos).
- Reparación de huecos. La grilla de vóxeles ya devuelve las celdas
  faltantes (`validateCoverage`), que es justo la entrada que necesita la
  reparación; falta el handler que las llene. (El material POR AGENTE sí
  existe desde la Fase 42: ver "El material sale de la posición".)
- Los tipos de tarea `REPAIR`, `TRANSFORM` y `DISASSEMBLE`. **No están
  declarados a propósito**: un tipo de tarea
  sin nada que lo ejecute es una lista de enums que finge un sistema.
  Entran cuando lleguen sus consumidores, sin reescribir el director. Los
  TIPOS DE BOT `REPAIR` y `TRANSFORM` sí están declarados (el store y el
  director tienen que reconocerlos), pero no se les inventan agentes: el
  conteo da 0 y el panel dice por qué.
- Selección de un agente individual con clic para ver su ficha, y lo
  mismo para un vóxel. Hoy la inspección es por TIPO, no por agente:
  elegir uno concreto requiere raycasting contra instancias, y el
  `instanceId` que devolvería es el índice local compactado del cuadro,
  no el agente — hace falta además un mapa inverso.
- Malla de triángulos y simplificador. La representación intermedia es
  una nube de puntos a propósito: el enjambre consume posiciones y la
  voxelización sale de la nube, así que una malla sería un subsistema que
  después nadie usa.
- Estimación de material (metal, plástico, vidrio…). Sin un modelo de
  visión sólo se podría devolver "desconocido" siempre, que es el módulo
  decorativo que el proyecto evita. Entra con el proveedor externo.
- Pausar el pipeline etapa por etapa.
- Bajar el material al interior del objeto. Hoy los Material Bots cubren
  la SUPERFICIE, que es lo que se ve; pintar vóxeles internos gastaría
  agentes en algo invisible, y si alguna vez hiciera falta tiene que ser
  una decisión explícita del plan de construcción, no un efecto lateral.
- Comandos en lenguaje natural.
