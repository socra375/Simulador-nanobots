# Simulador de Nanobots 3D — Fase 1

🔗 **Demo en vivo:** https://socra375.github.io/Simulador-nanobots/
(solo frontend — sin backend Python; guardar/cargar configuración usa
`localStorage` del navegador en vez de un archivo en servidor).

Demo de un enjambre de nanobots en 3D que sigue el cursor del mouse con
movimiento tipo "boid" (cohesión, separación, alineación e inercia),
construida combinando tres lenguajes, cada uno en el rol donde mejor rinde:

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

- **C++ ↔ TypeScript**: el módulo Wasm expone las posiciones de los nanobots
  como un puntero a memoria lineal. `swarm.ts` construye un `Float32Array`
  que apunta directamente a esa memoria (`Module.HEAPF32.buffer`), así que
  cada `step()` en C++ deja los valores ya listos para leer, sin
  serialización ni copia por frame.
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

Abrí `http://127.0.0.1:8000` en el navegador. Vas a ver el enjambre de
nanobots siguiendo el cursor; el panel de control (arriba a la derecha)
permite ajustar la cantidad de nanobots (20–200), la velocidad máxima y los
pesos de cohesión/separación/alineación, además de botones para guardar y
cargar la configuración (persistida por el backend en
`backend/config/swarm_config.json`).

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

## Notas de rendimiento

- La física corre en C++ compilado a Wasm (código nativo), no en JS
  interpretado, lo que permite simular hasta 200 nanobots con fuerzas boid
  O(n²) sin caída de FPS perceptible.
- El renderizado usa `THREE.InstancedMesh` (una llamada de dibujo por
  variante de geometría, no una por nanobot), así el costo de render se
  mantiene bajo incluso con 200 agentes en pantalla.
