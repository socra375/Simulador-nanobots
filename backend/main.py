"""Servidor ligero en Python (FastAPI) — Fase 1 del simulador de nanobots.

Este backend NO participa en la simulación física (eso vive enteramente en
C++/WebAssembly, ver /cpp/boids.cpp). Su único trabajo es:

  1. Servir el build de producción del frontend (frontend/dist), que incluye
     el HTML/JS/CSS generados por Vite y el módulo Wasm compilado.
  2. Exponer un endpoint REST para guardar/cargar la configuración del
     enjambre (cantidad de nanobots, pesos de comportamiento) como JSON en
     disco, para que el usuario pueda persistir y restaurar sus ajustes.

Comunicación Python <-> TypeScript: JSON plano vía HTTP (fetch en
frontend/src/config-client.ts), sin ningún acoplamiento con el motor de
física en C++.
"""

import json
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

BASE_DIR = Path(__file__).resolve().parent
CONFIG_PATH = BASE_DIR / "config" / "swarm_config.json"
FRONTEND_DIST = BASE_DIR.parent / "frontend" / "dist"

DEFAULT_CONFIG = {
    "count": 3000,
    "cohesion": 0.8,
    "separation": 1.5,
    "alignment": 0.6,
    "maxSpeed": 4.0,
}


class SwarmConfig(BaseModel):
    count: int = Field(ge=20, le=60000)
    cohesion: float = Field(ge=0, le=10)
    separation: float = Field(ge=0, le=10)
    alignment: float = Field(ge=0, le=10)
    maxSpeed: float = Field(ge=0.1, le=20)


app = FastAPI(title="Simulador de Nanobots — Backend")

# CORS habilitado para desarrollo, cuando el frontend corre en el puerto de
# Vite (5173) y el backend en el 8000.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/api/config")
def get_config() -> dict:
    if CONFIG_PATH.exists():
        return json.loads(CONFIG_PATH.read_text())
    return DEFAULT_CONFIG


@app.post("/api/config")
def save_config(config: SwarmConfig) -> dict:
    CONFIG_PATH.parent.mkdir(parents=True, exist_ok=True)
    CONFIG_PATH.write_text(json.dumps(config.model_dump(), indent=2))
    return config.model_dump()


# Sirve el build de producción del frontend (frontend/dist) en la raíz.
# Debe montarse después de las rutas /api/* para no interceptarlas.
if FRONTEND_DIST.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIST), html=True), name="frontend")
