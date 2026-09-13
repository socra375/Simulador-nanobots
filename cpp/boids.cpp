// Núcleo de física del enjambre (boids) — compilado a WebAssembly con Emscripten.
//
// Comunicación C++ <-> TypeScript:
//   Este módulo mantiene los arrays de posición/velocidad en la memoria lineal
//   del propio Wasm (heap de C++), y expone punteros crudos (getPositionsPtr).
//   El lado TypeScript construye un `Float32Array` que apunta directamente a
//   ese buffer (`Module.HEAPF32.buffer`), así que cada llamada a `step()` deja
//   los nuevos valores listos para leer sin ninguna copia ni serialización.
// Comunicación C++ <-> Python:
//   Ninguna — el backend Python nunca ve este código, solo sirve los archivos
//   estáticos (boids.js/boids.wasm) generados por el build de Emscripten.

#ifdef __EMSCRIPTEN__
#include <emscripten/emscripten.h>
#else
// Permite compilar boids.cpp nativamente (g++) para test_boids.cpp, sin
// necesitar el SDK de Emscripten solo para correr los tests unitarios.
#define EMSCRIPTEN_KEEPALIVE
#endif
#include <algorithm>
#include <cmath>
#include <cstdlib>
#include <vector>

namespace {

struct Vec3 {
    float x = 0.f, y = 0.f, z = 0.f;
};

int g_count = 0;
std::vector<float> g_positions;       // [x0,y0,z0, x1,y1,z1, ...]
std::vector<float> g_velocities;      // misma forma que g_positions
std::vector<float> g_targetPositions; // target propio de cada agente (misma forma)

// Parámetros de comportamiento, ajustables en tiempo real desde la UI.
float g_cohesionWeight = 0.8f;
float g_separationWeight = 1.5f;
float g_alignmentWeight = 0.6f;
float g_seekWeight = 1.2f;
float g_maxSpeed = 4.0f;

constexpr float kBaseSeparationRadius = 1.2f;
constexpr float kBaseNeighborRadius = 4.0f;
constexpr int kBaselineCount = 200;  // cantidad para la que se afinaron los radios base
constexpr float kBounds = 12.0f;     // volumen cúbico donde se mantiene el enjambre

// Radios efectivos de esta simulación (dependen de `count`, ver init()).
float g_neighborRadius = kBaseNeighborRadius;
float g_neighborRadiusSq = kBaseNeighborRadius * kBaseNeighborRadius;
float g_separationRadius = kBaseSeparationRadius;

// --- Grilla espacial (uniform grid) para acotar la búsqueda de vecinos ---
//
// Con miles de agentes, comparar cada agente contra todos los demás (O(n²))
// deja de ser viable. En vez de eso, se particiona el volumen [-kBounds,
// kBounds]^3 en celdas cúbicas de lado == g_neighborRadius: dos agentes a
// menos de g_neighborRadius siempre caen en la misma celda o en una celda
// vecina directa (radio de Chebyshev 1), así que alcanza con revisar el
// bloque de 3x3x3 celdas alrededor de cada agente en vez de la grilla
// entera. Se reconstruye (bucket sort por celda) al principio de cada
// step(), en O(count).
//
// Además, g_neighborRadius y g_separationRadius se encogen con la densidad
// (ver init()): así el costo por agente —proporcional a cuántos vecinos
// reales caen dentro del radio— se mantiene acotado sin importar cuántos
// nanobots haya en total, incluso si están todos apretados en un cluster
// chico (reposo alrededor del núcleo) o formando una figura.
float g_cellSize = kBaseNeighborRadius;
int g_gridDim = 1;
std::vector<int> g_cellCount;
std::vector<int> g_cellStart;
std::vector<int> g_cellCursor;
std::vector<int> g_sortedAgents;
std::vector<int> g_agentCell;

// Buffer de aceleración reutilizado entre llamadas a step(): se calcula la
// fuerza de TODOS los agentes primero (usando las posiciones del frame
// anterior, sin que nadie se haya movido todavía) y recién después se
// integran todas las posiciones — así el orden en que se procesan los
// agentes no sesga el resultado (actualización simultánea, no en cascada).
std::vector<Vec3> g_acceleration;

float randRange(float lo, float hi) {
    return lo + (hi - lo) * (static_cast<float>(std::rand()) / static_cast<float>(RAND_MAX));
}

inline int cellCoord1D(float v) {
    int c = static_cast<int>((v + kBounds) / g_cellSize);
    if (c < 0) c = 0;
    if (c >= g_gridDim) c = g_gridDim - 1;
    return c;
}

inline int cellIndexOf(float x, float y, float z) {
    int cx = cellCoord1D(x);
    int cy = cellCoord1D(y);
    int cz = cellCoord1D(z);
    return (cx * g_gridDim + cy) * g_gridDim + cz;
}

// Reconstruye la grilla espacial a partir de g_positions actuales.
void rebuildGrid() {
    std::fill(g_cellCount.begin(), g_cellCount.end(), 0);
    for (int i = 0; i < g_count; ++i) {
        int c = cellIndexOf(g_positions[i * 3 + 0], g_positions[i * 3 + 1], g_positions[i * 3 + 2]);
        g_agentCell[i] = c;
        g_cellCount[c]++;
    }
    g_cellStart[0] = 0;
    for (int c = 0; c < g_gridDim * g_gridDim * g_gridDim; ++c) {
        g_cellStart[c + 1] = g_cellStart[c] + g_cellCount[c];
    }
    std::copy(g_cellStart.begin(), g_cellStart.end() - 1, g_cellCursor.begin());
    for (int i = 0; i < g_count; ++i) {
        int c = g_agentCell[i];
        g_sortedAgents[g_cellCursor[c]++] = i;
    }
}

// Calcula la fuerza total sobre el agente `i` (cohesión + separación +
// alineación con vecinos dentro de g_neighborRadius, hallados vía la
// grilla espacial, más el seek hacia su target propio). Solo lee estado
// global, no lo modifica — así se puede llamar para todos los agentes
// usando las mismas posiciones "congeladas" del frame anterior.
Vec3 computeForce(int i) {
    Vec3 pos_i{g_positions[i * 3 + 0], g_positions[i * 3 + 1], g_positions[i * 3 + 2]};
    Vec3 vel_i{g_velocities[i * 3 + 0], g_velocities[i * 3 + 1], g_velocities[i * 3 + 2]};

    Vec3 cohesion{0, 0, 0};
    Vec3 separation{0, 0, 0};
    Vec3 alignment{0, 0, 0};
    int neighborCount = 0;

    int cx = g_agentCell[i] / (g_gridDim * g_gridDim);
    int cy = (g_agentCell[i] / g_gridDim) % g_gridDim;
    int cz = g_agentCell[i] % g_gridDim;

    for (int ox = -1; ox <= 1; ++ox) {
        int nx = cx + ox;
        if (nx < 0 || nx >= g_gridDim) continue;
        for (int oy = -1; oy <= 1; ++oy) {
            int ny = cy + oy;
            if (ny < 0 || ny >= g_gridDim) continue;
            for (int oz = -1; oz <= 1; ++oz) {
                int nz = cz + oz;
                if (nz < 0 || nz >= g_gridDim) continue;

                int neighborCell = (nx * g_gridDim + ny) * g_gridDim + nz;
                for (int idx = g_cellStart[neighborCell]; idx < g_cellStart[neighborCell + 1]; ++idx) {
                    int j = g_sortedAgents[idx];
                    if (j == i) continue;
                    Vec3 pos_j{g_positions[j * 3 + 0], g_positions[j * 3 + 1], g_positions[j * 3 + 2]};

                    float dx = pos_j.x - pos_i.x;
                    float dy = pos_j.y - pos_i.y;
                    float dz = pos_j.z - pos_i.z;
                    float distSq = dx * dx + dy * dy + dz * dz;
                    // Descarta vecinos lejanos con la distancia al cuadrado
                    // (evita sqrt en la mayoría de los pares).
                    if (distSq > g_neighborRadiusSq || distSq < 1e-10f) continue;
                    float dist = std::sqrt(distSq);

                    neighborCount++;
                    cohesion.x += pos_j.x;
                    cohesion.y += pos_j.y;
                    cohesion.z += pos_j.z;

                    alignment.x += g_velocities[j * 3 + 0];
                    alignment.y += g_velocities[j * 3 + 1];
                    alignment.z += g_velocities[j * 3 + 2];

                    if (dist < g_separationRadius) {
                        float push = (g_separationRadius - dist) / g_separationRadius;
                        separation.x -= (dx / dist) * push;
                        separation.y -= (dy / dist) * push;
                        separation.z -= (dz / dist) * push;
                    }
                }
            }
        }
    }

    Vec3 force{0, 0, 0};

    if (neighborCount > 0) {
        // Cohesión: dirigirse hacia el centro de masa de los vecinos.
        cohesion.x = (cohesion.x / neighborCount) - pos_i.x;
        cohesion.y = (cohesion.y / neighborCount) - pos_i.y;
        cohesion.z = (cohesion.z / neighborCount) - pos_i.z;

        // Alineación: adoptar la velocidad promedio de los vecinos.
        alignment.x = (alignment.x / neighborCount) - vel_i.x;
        alignment.y = (alignment.y / neighborCount) - vel_i.y;
        alignment.z = (alignment.z / neighborCount) - vel_i.z;

        force.x += cohesion.x * g_cohesionWeight + separation.x * g_separationWeight +
                   alignment.x * g_alignmentWeight;
        force.y += cohesion.y * g_cohesionWeight + separation.y * g_separationWeight +
                   alignment.y * g_alignmentWeight;
        force.z += cohesion.z * g_cohesionWeight + separation.z * g_separationWeight +
                   alignment.z * g_alignmentWeight;
    }

    // Seek: atracción hacia el target propio de este agente (cluster de
    // reposo alrededor del núcleo, o punto de la figura que se está formando).
    force.x += (g_targetPositions[i * 3 + 0] - pos_i.x) * g_seekWeight;
    force.y += (g_targetPositions[i * 3 + 1] - pos_i.y) * g_seekWeight;
    force.z += (g_targetPositions[i * 3 + 2] - pos_i.z) * g_seekWeight;

    return force;
}

// Integra velocidad/posición del agente `i` a partir de la fuerza ya
// calculada en g_acceleration[i], con inercia, clamp de velocidad máxima,
// y rebote suave en los bordes del volumen.
void integrateAgent(int i, float dt) {
    float* vel = &g_velocities[i * 3];
    float* pos = &g_positions[i * 3];

    // Inercia: la fuerza nueva se integra suavemente sobre la velocidad
    // existente en vez de reemplazarla, dando el efecto de "suavizado".
    vel[0] += g_acceleration[i].x * dt;
    vel[1] += g_acceleration[i].y * dt;
    vel[2] += g_acceleration[i].z * dt;

    float speed = std::sqrt(vel[0] * vel[0] + vel[1] * vel[1] + vel[2] * vel[2]);
    if (speed > g_maxSpeed) {
        float scale = g_maxSpeed / speed;
        vel[0] *= scale;
        vel[1] *= scale;
        vel[2] *= scale;
    }

    pos[0] += vel[0] * dt;
    pos[1] += vel[1] * dt;
    pos[2] += vel[2] * dt;

    // Mantener el enjambre dentro de un volumen acotado (rebote suave).
    for (int axis = 0; axis < 3; ++axis) {
        if (pos[axis] > kBounds) {
            pos[axis] = kBounds;
            vel[axis] *= -0.5f;
        } else if (pos[axis] < -kBounds) {
            pos[axis] = -kBounds;
            vel[axis] *= -0.5f;
        }
    }
}

}  // namespace

extern "C" {

// Reserva e inicializa `count` nanobots en posiciones/velocidades aleatorias.
// Puede llamarse de nuevo (p.ej. al cambiar la cantidad desde la UI) para
// re-crear el enjambre con un tamaño distinto.
EMSCRIPTEN_KEEPALIVE
void init(int count) {
    g_count = count;
    g_positions.assign(static_cast<size_t>(count) * 3, 0.f);
    g_velocities.assign(static_cast<size_t>(count) * 3, 0.f);
    g_targetPositions.assign(static_cast<size_t>(count) * 3, 0.f);

    for (int i = 0; i < count; ++i) {
        g_positions[i * 3 + 0] = randRange(-kBounds, kBounds);
        g_positions[i * 3 + 1] = randRange(-kBounds, kBounds);
        g_positions[i * 3 + 2] = randRange(-kBounds, kBounds);

        // El target arranca igual a la posición inicial: sin tirón de seek
        // en el primer frame, hasta que TS escriba targets reales.
        g_targetPositions[i * 3 + 0] = g_positions[i * 3 + 0];
        g_targetPositions[i * 3 + 1] = g_positions[i * 3 + 1];
        g_targetPositions[i * 3 + 2] = g_positions[i * 3 + 2];

        g_velocities[i * 3 + 0] = randRange(-1.f, 1.f);
        g_velocities[i * 3 + 1] = randRange(-1.f, 1.f);
        g_velocities[i * 3 + 2] = randRange(-1.f, 1.f);
    }

    // Encoge el radio de interacción con la densidad (más agentes -> "espacio
    // personal" más chico), para que el número esperado de vecinos reales por
    // agente —lo que realmente cuesta CPU— no crezca sin límite. Hasta
    // kBaselineCount (200, la cantidad para la que se afinó el comportamiento
    // original) el factor es 1 y el comportamiento es idéntico al de antes.
    float scale = count > 0 ? std::min(1.0f, std::cbrt(static_cast<float>(kBaselineCount) / count)) : 1.0f;
    g_neighborRadius = kBaseNeighborRadius * scale;
    g_neighborRadiusSq = g_neighborRadius * g_neighborRadius;
    g_separationRadius = kBaseSeparationRadius * scale;

    g_cellSize = g_neighborRadius;
    g_gridDim = std::max(1, static_cast<int>(std::ceil((2.f * kBounds) / g_cellSize)));
    int cellCount = g_gridDim * g_gridDim * g_gridDim;
    g_cellCount.assign(cellCount, 0);
    g_cellStart.assign(cellCount + 1, 0);
    g_cellCursor.assign(cellCount, 0);
    g_sortedAgents.assign(count, 0);
    g_agentCell.assign(count, 0);
    g_acceleration.assign(count, Vec3{});
}

// Puntero al inicio del buffer de posiciones, para que TS lo mapee a HEAPF32.
EMSCRIPTEN_KEEPALIVE
float* getPositionsPtr() {
    return g_positions.data();
}

EMSCRIPTEN_KEEPALIVE
int getCount() {
    return g_count;
}

// Puntero al buffer de targets por-agente, para que TS escriba ahí
// directamente (idle: cluster alrededor del núcleo; forming: nube de
// puntos de la figura pedida) sin pasar por ccall en cada transición.
EMSCRIPTEN_KEEPALIVE
float* getTargetPositionsPtr() {
    return g_targetPositions.data();
}

EMSCRIPTEN_KEEPALIVE
void setParams(float cohesion, float separation, float alignment, float maxSpeed, float seekWeight) {
    g_cohesionWeight = cohesion;
    g_separationWeight = separation;
    g_alignmentWeight = alignment;
    g_maxSpeed = maxSpeed;
    g_seekWeight = seekWeight;
}

// Avanza la simulación `dt` segundos: calcula la fuerza de cohesión,
// separación, alineación (comportamiento boid clásico, usando la grilla
// espacial para encontrar vecinos sin comparar contra todos los agentes) y
// seek de TODOS los agentes primero (computeForce, sobre posiciones sin
// modificar), y recién después integra TODAS las posiciones
// (integrateAgent) — actualización simultánea, no en cascada.
EMSCRIPTEN_KEEPALIVE
void step(float dt) {
    if (g_count <= 0) return;

    rebuildGrid();

    for (int i = 0; i < g_count; ++i) {
        g_acceleration[i] = computeForce(i);
    }

    for (int i = 0; i < g_count; ++i) {
        integrateAgent(i, dt);
    }
}

}  // extern "C"
