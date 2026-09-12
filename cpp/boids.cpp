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

#include <emscripten/emscripten.h>
#include <cmath>
#include <cstdlib>
#include <vector>

namespace {

struct Vec3 {
    float x = 0.f, y = 0.f, z = 0.f;
};

int g_count = 0;
std::vector<float> g_positions;   // [x0,y0,z0, x1,y1,z1, ...]
std::vector<float> g_velocities;  // misma forma que g_positions

Vec3 g_target{0.f, 0.f, 0.f};

// Parámetros de comportamiento, ajustables en tiempo real desde la UI.
float g_cohesionWeight = 0.8f;
float g_separationWeight = 1.5f;
float g_alignmentWeight = 0.6f;
float g_seekWeight = 1.2f;
float g_maxSpeed = 4.0f;

constexpr float kSeparationRadius = 1.2f;
constexpr float kNeighborRadius = 4.0f;
constexpr float kNeighborRadiusSq = kNeighborRadius * kNeighborRadius;
constexpr float kBounds = 12.0f;  // volumen cúbico donde se mantiene el enjambre

// Buffer de aceleración reutilizado entre llamadas a step(): evita un
// malloc/free por frame en el hot path (solo se redimensiona en init()).
std::vector<Vec3> g_acceleration;

float randRange(float lo, float hi) {
    return lo + (hi - lo) * (static_cast<float>(std::rand()) / static_cast<float>(RAND_MAX));
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
    g_acceleration.assign(static_cast<size_t>(count), Vec3{});

    for (int i = 0; i < count; ++i) {
        g_positions[i * 3 + 0] = randRange(-kBounds, kBounds);
        g_positions[i * 3 + 1] = randRange(-kBounds, kBounds);
        g_positions[i * 3 + 2] = randRange(-kBounds, kBounds);

        g_velocities[i * 3 + 0] = randRange(-1.f, 1.f);
        g_velocities[i * 3 + 1] = randRange(-1.f, 1.f);
        g_velocities[i * 3 + 2] = randRange(-1.f, 1.f);
    }
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

EMSCRIPTEN_KEEPALIVE
void setTarget(float x, float y, float z) {
    g_target = {x, y, z};
}

EMSCRIPTEN_KEEPALIVE
void setParams(float cohesion, float separation, float alignment, float maxSpeed) {
    g_cohesionWeight = cohesion;
    g_separationWeight = separation;
    g_alignmentWeight = alignment;
    g_maxSpeed = maxSpeed;
}

// Avanza la simulación `dt` segundos: calcula fuerzas de cohesión, separación,
// alineación (comportamiento boid clásico) más una fuerza de búsqueda ("seek")
// hacia el cursor, las combina con inercia, y suaviza/limita la velocidad
// resultante antes de integrar la posición.
EMSCRIPTEN_KEEPALIVE
void step(float dt) {
    if (g_count <= 0) return;

    Vec3* acceleration = g_acceleration.data();

    for (int i = 0; i < g_count; ++i) {
        Vec3 pos_i{g_positions[i * 3 + 0], g_positions[i * 3 + 1], g_positions[i * 3 + 2]};
        Vec3 vel_i{g_velocities[i * 3 + 0], g_velocities[i * 3 + 1], g_velocities[i * 3 + 2]};

        Vec3 cohesion{0, 0, 0};
        Vec3 separation{0, 0, 0};
        Vec3 alignment{0, 0, 0};
        int neighborCount = 0;

        for (int j = 0; j < g_count; ++j) {
            if (j == i) continue;
            Vec3 pos_j{g_positions[j * 3 + 0], g_positions[j * 3 + 1], g_positions[j * 3 + 2]};

            float dx = pos_j.x - pos_i.x;
            float dy = pos_j.y - pos_i.y;
            float dz = pos_j.z - pos_i.z;
            float distSq = dx * dx + dy * dy + dz * dz;
            // Descarta vecinos lejanos con la distancia al cuadrado (evita
            // sqrt en la mayoría de los pares, que caen fuera del radio).
            if (distSq > kNeighborRadiusSq || distSq < 1e-10f) continue;
            float dist = std::sqrt(distSq);

            neighborCount++;
            cohesion.x += pos_j.x;
            cohesion.y += pos_j.y;
            cohesion.z += pos_j.z;

            alignment.x += g_velocities[j * 3 + 0];
            alignment.y += g_velocities[j * 3 + 1];
            alignment.z += g_velocities[j * 3 + 2];

            if (dist < kSeparationRadius) {
                float push = (kSeparationRadius - dist) / kSeparationRadius;
                separation.x -= (dx / dist) * push;
                separation.y -= (dy / dist) * push;
                separation.z -= (dz / dist) * push;
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

        // Seek: atracción hacia el objetivo (posición del cursor en el mundo 3D).
        Vec3 toTarget{g_target.x - pos_i.x, g_target.y - pos_i.y, g_target.z - pos_i.z};
        force.x += toTarget.x * g_seekWeight;
        force.y += toTarget.y * g_seekWeight;
        force.z += toTarget.z * g_seekWeight;

        acceleration[i] = force;
    }

    for (int i = 0; i < g_count; ++i) {
        float* vel = &g_velocities[i * 3];
        float* pos = &g_positions[i * 3];

        // Inercia: la fuerza nueva se integra suavemente sobre la velocidad
        // existente en vez de reemplazarla, dando el efecto de "suavizado".
        vel[0] += acceleration[i].x * dt;
        vel[1] += acceleration[i].y * dt;
        vel[2] += acceleration[i].z * dt;

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
}

}  // extern "C"
