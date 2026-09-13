#!/usr/bin/env bash
# Compila y corre los tests unitarios nativos de boids.cpp (sin Emscripten,
# sin Wasm) con el compilador de C++ del sistema. Rápido, sin dependencias
# extra: ver test_boids.cpp.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$SCRIPT_DIR/test_boids_bin"

g++ -std=c++17 -O1 -Wall -Wextra "$SCRIPT_DIR/test_boids.cpp" -o "$OUT"

set +e
"$OUT"
status=$?
set -e

rm -f "$OUT"
exit $status
