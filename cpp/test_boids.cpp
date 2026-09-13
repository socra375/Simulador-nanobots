// Tests unitarios nativos del núcleo de física (sin Emscripten): compila
// boids.cpp con g++ normal (ver EMSCRIPTEN_KEEPALIVE guardado en boids.cpp)
// para poder probar la lógica de step()/init() rápido, sin pasar por Wasm.
//
// Sin framework externo (gtest, etc.) a propósito, para no sumar
// dependencias de build solo por los tests: son asserts simples con un
// contador de fallos, ejecutados por cpp/run_tests.sh.

#include <cmath>
#include <cstdio>
#include <cstdlib>

#include "boids.cpp"

namespace {

int g_failures = 0;

void check(bool condition, const char* description) {
    if (!condition) {
        std::fprintf(stderr, "FALLO: %s\n", description);
        g_failures++;
    } else {
        std::printf("OK: %s\n", description);
    }
}

float distance(float x1, float y1, float z1, float x2, float y2, float z2) {
    float dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
    return std::sqrt(dx * dx + dy * dy + dz * dz);
}

void test_init_produces_valid_state() {
    init(10);
    check(getCount() == 10, "init(10) -> getCount() == 10");

    float* positions = getPositionsPtr();
    float* targets = getTargetPositionsPtr();
    bool allWithinBounds = true;
    bool targetsMatchPositions = true;
    for (int i = 0; i < 10 * 3; ++i) {
        if (positions[i] > kBounds || positions[i] < -kBounds) allWithinBounds = false;
        if (positions[i] != targets[i]) targetsMatchPositions = false;
    }
    check(allWithinBounds, "init() coloca todas las posiciones dentro de kBounds");
    check(targetsMatchPositions, "init() arranca los targets iguales a las posiciones (sin tirón inicial)");
}

void test_seek_moves_agent_toward_target() {
    init(1);
    setParams(/*cohesion=*/0.f, /*separation=*/0.f, /*alignment=*/0.f, /*maxSpeed=*/5.f, /*seekWeight=*/2.f);

    float* positions = getPositionsPtr();
    float* velocities = g_velocities.data();
    float* targets = getTargetPositionsPtr();

    positions[0] = 0.f; positions[1] = 0.f; positions[2] = 0.f;
    velocities[0] = 0.f; velocities[1] = 0.f; velocities[2] = 0.f;
    targets[0] = 5.f; targets[1] = 0.f; targets[2] = 0.f;

    // Un agente aislado bajo solo fuerza de seek (sin cohesión/alineación de
    // vecinos, que en el enjambre real aportan amortiguación) es un
    // oscilador sin amortiguar: no se "asienta" en el target, pasa cerca y
    // sigue de largo. Por eso medimos la distancia MÍNIMA alcanzada en la
    // simulación, no la distancia final.
    float initialDist = distance(positions[0], positions[1], positions[2], targets[0], targets[1], targets[2]);
    float minDist = initialDist;
    for (int i = 0; i < 60; ++i) {
        step(0.05f);
        float d = distance(positions[0], positions[1], positions[2], targets[0], targets[1], targets[2]);
        if (d < minDist) minDist = d;
    }

    check(minDist < initialDist * 0.2f, "el agente pasa muy cerca del target (fuerza de seek funciona)");
}

void test_separation_pushes_overlapping_agents_apart() {
    init(2);
    // Cohesión y alineación en 0, solo separación, para aislar su efecto.
    setParams(/*cohesion=*/0.f, /*separation=*/2.f, /*alignment=*/0.f, /*maxSpeed=*/5.f, /*seekWeight=*/0.f);

    float* positions = getPositionsPtr();
    float* velocities = g_velocities.data();
    float* targets = getTargetPositionsPtr();

    // Dos agentes casi superpuestos (bien dentro de kSeparationRadius).
    positions[0] = 0.f; positions[1] = 0.f; positions[2] = 0.f;
    positions[3] = 0.2f; positions[4] = 0.f; positions[5] = 0.f;
    for (int i = 0; i < 6; ++i) velocities[i] = 0.f;
    // Targets = posición inicial propia: sin seek, solo separación empuja.
    for (int i = 0; i < 6; ++i) targets[i] = positions[i];

    float initialDist = distance(positions[0], positions[1], positions[2], positions[3], positions[4], positions[5]);
    for (int i = 0; i < 20; ++i) step(0.05f);
    float finalDist = distance(positions[0], positions[1], positions[2], positions[3], positions[4], positions[5]);

    check(finalDist > initialDist, "separation aleja a dos agentes que arrancan superpuestos");
}

void test_bounds_clamp_keeps_agent_inside_volume() {
    init(1);
    setParams(/*cohesion=*/0.f, /*separation=*/0.f, /*alignment=*/0.f, /*maxSpeed=*/50.f, /*seekWeight=*/5.f);

    float* positions = getPositionsPtr();
    float* velocities = g_velocities.data();
    float* targets = getTargetPositionsPtr();

    // Target mucho más allá del límite del volumen: el seek empuja afuera,
    // pero step() debe recortar la posición resultante a kBounds.
    positions[0] = kBounds - 0.1f; positions[1] = 0.f; positions[2] = 0.f;
    velocities[0] = 0.f; velocities[1] = 0.f; velocities[2] = 0.f;
    targets[0] = kBounds * 10.f; targets[1] = 0.f; targets[2] = 0.f;

    for (int i = 0; i < 10; ++i) step(0.05f);

    check(positions[0] <= kBounds + 1e-3f, "step() nunca deja la posición X por encima de kBounds");
    check(positions[0] >= -kBounds - 1e-3f, "step() nunca deja la posición X por debajo de -kBounds");
}

void test_step_with_zero_agents_does_not_crash() {
    init(0);
    step(0.05f);  // no debe crashear ni leer fuera de rango con count=0
    check(getCount() == 0, "init(0) + step() no crashea y mantiene count en 0");
}

}  // namespace

int main() {
    test_init_produces_valid_state();
    test_seek_moves_agent_toward_target();
    test_separation_pushes_overlapping_agents_apart();
    test_bounds_clamp_keeps_agent_inside_volume();
    test_step_with_zero_agents_does_not_crash();

    if (g_failures > 0) {
        std::fprintf(stderr, "\n%d test(s) fallaron.\n", g_failures);
        return 1;
    }
    std::printf("\nTodos los tests de boids.cpp pasaron.\n");
    return 0;
}
