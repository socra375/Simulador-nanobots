#!/usr/bin/env bash
# Compila el núcleo de física (boids.cpp) a WebAssembly con Emscripten.
#
# Requiere tener `emcc` en el PATH (Emscripten SDK: https://emscripten.org/).
# En Debian/Ubuntu puede instalarse con: apt-get install emscripten
#
# Salida: frontend/public/wasm/boids.js + boids.wasm
#   - boids.js:  loader generado por Emscripten (MODULARIZE + EXPORT_ES6),
#                se importa desde frontend/src/swarm.ts.
#   - boids.wasm: el binario Wasm real con la física compilada.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT_DIR="$SCRIPT_DIR/../frontend/public/wasm"
mkdir -p "$OUT_DIR"

emcc "$SCRIPT_DIR/boids.cpp" \
  -O3 \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1 \
  -s EXPORT_NAME=createBoidsModule \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_FUNCTIONS='["_init","_getPositionsPtr","_getCount","_setTarget","_setParams","_step","_malloc","_free"]' \
  -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]' \
  -s ENVIRONMENT=web \
  -o "$OUT_DIR/boids.js"

echo "Build OK -> $OUT_DIR/boids.js + boids.wasm"
