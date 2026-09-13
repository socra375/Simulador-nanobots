# Simulador de Nanobots 3D

🔗 **Demo en vivo:** https://socra375.github.io/Simulador-nanobots/
(solo frontend — sin backend Python; guardar/cargar configuración usa
`localStorage` del navegador en vez de un archivo en servidor).

Enjambre de nanobots en 3D con movimiento tipo "boid" (cohesión, separación,
alineación e inercia), construido combinando tres lenguajes, cada uno en el
rol donde mejor rinde. Por defecto el enjambre vive agrupado alrededor de un
núcleo/reactor en una esquina de la escena; desde la sección "Comandos" del
panel se le puede pedir que forme un objeto (cubo, esfera, pirámide,
estrella, anillo, corazón o cruz) — sale del núcleo, arma la figura, y puede
volver a agruparse en el núcleo cuando se quiera.

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

Abrí `http://127.0.0.1:8000` en el navegador. Vas a ver el enjambre
agrupado alrededor del núcleo; el panel de control (arriba a la derecha)
permite ajustar la cantidad de nanobots (20–10.000), la velocidad máxima y
los pesos de cohesión/separación/alineación, guardar/cargar esa configuración
(persistida por el backend en `backend/config/swarm_config.json`), y en la
carpeta "Comandos": escribir el nombre de un objeto, adjuntar una foto de
confirmación y pedirle al enjambre que lo forme ("Volver al núcleo" para
deshacerlo). La foto no se analiza — no hay backend/IA de visión en
producción — es solo un paso de confirmación de UX; la figura real sale de
la biblioteca procedural de `frontend/src/shapes.ts`.

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
de reposo):

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
- Con estos cambios, 10.000 nanobots corren a ~4ms/step en C++ nativo (muy
  por debajo del presupuesto de 16.6ms/frame a 60 FPS) — medido en
  `cpp/test_boids.cpp`. El renderizado usa `THREE.InstancedMesh` (una
  llamada de dibujo por variante de geometría, no una por nanobot).
