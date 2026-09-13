// Tests unitarios nativos del núcleo de física (sin Emscripten): compila
// boids.cpp con g++ normal (ver EMSCRIPTEN_KEEPALIVE guardado en boids.cpp)
// para poder probar la lógica de step()/init() rápido, sin pasar por Wasm.
//
// Sin framework externo (gtest, etc.) a propósito, para no sumar
// dependencias de build solo por los tests: son asserts simples con un
// contador de fallos, ejecutados por cpp/run_tests.sh.

#include <chrono>
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

    // La amortiguación de integrateAgent (derivada de g_seekWeight, ver ahí)
    // hace que el agente converja sin pasarse de largo — medimos tanto la
    // distancia mínima alcanzada como la distancia FINAL, que ahora debería
    // quedar igual de cerca (el agente se asienta, no sigue oscilando).
    float initialDist = distance(positions[0], positions[1], positions[2], targets[0], targets[1], targets[2]);
    float minDist = initialDist;
    float finalDist = initialDist;
    for (int i = 0; i < 60; ++i) {
        step(0.05f);
        finalDist = distance(positions[0], positions[1], positions[2], targets[0], targets[1], targets[2]);
        if (finalDist < minDist) minDist = finalDist;
    }

    check(minDist < initialDist * 0.2f, "el agente pasa muy cerca del target (fuerza de seek funciona)");
    check(finalDist < initialDist * 0.2f,
          "el agente se queda asentado cerca del target en vez de oscilar para siempre (amortiguación)");
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

// Con cientos de agentes, la búsqueda de vecinos usa la grilla espacial
// (uniform grid) en vez de fuerza bruta. Este test coloca dos agentes
// superpuestos entre cientos de "ruido" repartido por todo el volumen, y
// verifica que igual se separen: si la partición en celdas estuviera mal
// (p.ej. no revisar las celdas vecinas correctas), este par podría no
// encontrarse a sí mismo como vecino y el test fallaría.
void test_grid_neighbor_search_finds_correct_neighbors_among_many_agents() {
    const int kTotal = 500;
    init(kTotal);
    setParams(/*cohesion=*/0.f, /*separation=*/2.f, /*alignment=*/0.f, /*maxSpeed=*/5.f, /*seekWeight=*/0.f);

    float* positions = getPositionsPtr();
    float* velocities = g_velocities.data();
    float* targets = getTargetPositionsPtr();

    positions[0] = 5.f; positions[1] = 5.f; positions[2] = 5.f;
    positions[3] = 5.2f; positions[4] = 5.f; positions[5] = 5.f;
    for (int a = 0; a < 6; ++a) velocities[a] = 0.f;
    // Todos los targets = su propia posición inicial: sin seek de por
    // medio, así el único movimiento posible es el de separación.
    for (int i = 0; i < kTotal; ++i) {
        targets[i * 3 + 0] = positions[i * 3 + 0];
        targets[i * 3 + 1] = positions[i * 3 + 1];
        targets[i * 3 + 2] = positions[i * 3 + 2];
    }

    float initialDist = distance(positions[0], positions[1], positions[2], positions[3], positions[4], positions[5]);
    for (int s = 0; s < 20; ++s) step(0.05f);
    float finalDist = distance(positions[0], positions[1], positions[2], positions[3], positions[4], positions[5]);

    check(finalDist > initialDist,
          "la grilla espacial encuentra vecinos correctos con cientos de agentes de por medio");
}

// No es un benchmark estricto (el tiempo real depende del hardware) — es
// una alarma temprana: si la grilla espacial se rompiera y step() volviera
// a comparar cada agente contra todos los demás (O(n²)), 10.000 agentes
// tardarían muchísimo más que el umbral generoso de acá.
void test_step_scales_to_thousands_of_agents() {
    const int kTotal = 10000;
    init(kTotal);
    setParams(/*cohesion=*/0.8f, /*separation=*/1.5f, /*alignment=*/0.6f, /*maxSpeed=*/4.f, /*seekWeight=*/1.2f);

    const int kSteps = 30;
    auto start = std::chrono::steady_clock::now();
    for (int s = 0; s < kSteps; ++s) step(0.016f);
    auto end = std::chrono::steady_clock::now();

    double totalMs = std::chrono::duration<double, std::milli>(end - start).count();
    double perStepMs = totalMs / kSteps;
    std::printf("INFO: step() con %d agentes: %.2f ms/step (%d steps en %.1f ms)\n", kTotal, perStepMs, kSteps,
                totalMs);

    check(perStepMs < 100.0, "step() con 10.000 agentes corre muy por debajo de 100ms/step (grilla espacial activa)");
}

}  // namespace

int main() {
    test_init_produces_valid_state();
    test_seek_moves_agent_toward_target();
    test_separation_pushes_overlapping_agents_apart();
    test_bounds_clamp_keeps_agent_inside_volume();
    test_step_with_zero_agents_does_not_crash();
    test_grid_neighbor_search_finds_correct_neighbors_among_many_agents();
    test_step_scales_to_thousands_of_agents();

    if (g_failures > 0) {
        std::fprintf(stderr, "\n%d test(s) fallaron.\n", g_failures);
        return 1;
    }
    std::printf("\nTodos los tests de boids.cpp pasaron.\n");
    return 0;
}
