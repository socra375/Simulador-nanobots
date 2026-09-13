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
| Nanobots | **Color** | Esfera sólida emissive (ligeramente más grande) | **75% FIJO del total** de Nanobots. Repartido en hasta **4 "olas" de color**, una por cada zona de color reconociblemente distinta de la foto (ver abajo) — cada ola es su propia capa, sale recién cuando termina la anterior. |

### Varias olas de color

Si la foto tiene varias zonas de color bien distintas (p.ej. una remera
roja y un pantalón azul), no sale un solo color promedio: `frontend/src/
image-color.ts` (`pickColorClusters`) arma un histograma de color y
agrupa los buckets por **proximidad** (tonos parecidos de una misma zona
—ruido de cuantización— se funden en una sola ola, no se separan en dos),
quedándose con hasta 4 clusters ordenados por peso (fracción de pixeles
válidos de la foto, ignorando fondo blanco/negro/transparente). Todo
100% en el navegador, sin IA/backend de visión.

Cada cluster es una ola de Color independiente, con su propio
`InstancedMesh`/color real (no un tinte compartido), cada una con una
cantidad de nanobots proporcional a su peso en la foto (una foto 70% roja
/ 30% azul da una ola roja bastante más grande que la azul). Cada ola cubre
una MUESTRA INDEPENDIENTE de toda la silueta (no una región geográfica de
la figura — no hay forma de saber qué parte de la foto corresponde a qué
parte de la figura 3D, ya que la forma sale del nombre escrito, no de la
imagen). Detalle y las olas de Color salen en **capas secuenciales**
(Detalle → ola 0 → ola 1 → ...): una capa entera tiene que terminar de
asentarse antes de que se abra la siguiente — dentro de cada capa, cada
nanobot vuela individualmente con su propio instante de salida (ver
"Notas de rendimiento"), así el efecto es una ola/flujo de nanopartículas
que recorre la figura, no un bloque sincronizado ni un revelado instantáneo.

Detalle **pierde su color de rol fijo y pasa a un gris apagado** apenas
arranca la primera ola de Color, así el color dominante real de la foto
(Color) es el que predomina visualmente en toda la figura una vez que
llega, con Detalle en gris apenas asomando entre las esferas.

Al formar una figura, la física boid (`swarm.step`, cohesión/separación/
alineación/seek) **no corre en absoluto** — los Nanobots se mueven 100%
por la animación scripted por capas (ver arriba), mucho más rápida que la
vieja convergencia física y sin el límite de vecinos-por-agente que antes
topaba la cantidad soportada. En reposo (sin figura activa) la física boid
sigue corriendo igual que siempre, con los pesos de cohesión/separación/
alineación que deja el usuario en el panel, para el movimiento orgánico
de enjambre.

El exoesqueleto de Microbots se revela con un tiempo fijo (lanzamiento en
vórtice de ~2.2s, sin física que "asentar"). Recién cuando termina, Nanobots
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
