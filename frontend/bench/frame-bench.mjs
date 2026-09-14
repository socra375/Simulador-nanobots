// Benchmark de rendimiento headless (Fase 26a).
//
// El brief pide "primero medir" antes de optimizar o migrar a WebGPU, y el
// informe final necesita un "antes/después" comparable. Este script maneja
// la app real en Chromium y lee `window.__nanobotMetrics` (ver
// src/core/metrics.ts) en tres estados distintos por cada cantidad de
// agentes, porque cada uno ejercita un camino de código diferente:
//
//   reposo   -> física boid en Wasm + escritura de matrices (enjambre oculto)
//   formando -> animación scripted por capas (sin física)
//   asentado -> el loop no recalcula nada; mide el piso de la escena
//
// Uso:
//   node bench/frame-bench.mjs [--url http://127.0.0.1:4300] [--counts 1000,3000]
//
// Requiere que la app ya esté servida en esa URL (vite preview, o el
// backend FastAPI sirviendo frontend/dist).

import { chromium } from "@playwright/test";

const CHROMIUM_PATH =
  process.env.PLAYWRIGHT_CHROMIUM_PATH ??
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell";

function parseArgs(argv) {
  const args = { url: "http://127.0.0.1:4300", counts: [1000, 3000, 10000, 60000] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--url") args.url = argv[++i];
    else if (argv[i] === "--counts") args.counts = argv[++i].split(",").map((n) => parseInt(n, 10));
  }
  return args;
}

const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
  "base64",
);

async function findGui(page, title) {
  const guis = await page.locator(".lil-gui").all();
  for (const gui of guis) {
    const text = await gui.locator(":scope > .title").first().textContent().catch(() => null);
    if (text === title) return gui;
  }
  throw new Error(`No se encontró la carpeta "${title}" del panel`);
}

// Fijar `input.value` a mano no dispara de forma confiable el
// onFinishChange de lil-gui (mismo hallazgo que en e2e/nanobots.spec.ts):
// hace falta una interacción realista terminada en Tab (blur).
async function setNanobotCount(page, count) {
  const controller = page
    .locator(".lil-gui .controller")
    .filter({ has: page.locator(".name", { hasText: "Nanobots" }) });
  const input = controller.locator("input");
  await input.click();
  await input.press("Control+A");
  await input.type(String(count));
  await input.press("Tab");
}

async function clickCommand(page, name) {
  const gui = await findGui(page, "Comandos");
  const controllers = await gui.locator(".controller.function").all();
  for (const controller of controllers) {
    if ((await controller.locator(".name").textContent()) === name) {
      await controller.locator("button").click();
      return;
    }
  }
  throw new Error(`No se encontró el botón "${name}"`);
}

/** Reinicia la ventana de muestras, deja correr, y devuelve el snapshot. */
async function measure(page, seconds) {
  await page.evaluate(() => window.__nanobotMetrics.reset());
  await page.waitForTimeout(seconds * 1000);
  return page.evaluate(() => window.__nanobotMetrics.snapshot());
}

async function main() {
  const { url, counts } = parseArgs(process.argv.slice(2));
  const browser = await chromium.launch({ executablePath: CHROMIUM_PATH });
  const rows = [];

  try {
    for (const count of counts) {
      const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));

      await page.goto(url);
      await page.waitForLoadState("networkidle");
      await page.waitForFunction(() => Boolean(window.__nanobotMetrics), null, { timeout: 30000 });

      await setNanobotCount(page, count);
      await page.waitForTimeout(2000);
      const idle = await measure(page, 3);

      await page
        .locator('input[type="file"]:not([data-scan-slot])')
        .setInputFiles({ name: "bench.png", mimeType: "image/png", buffer: TINY_PNG });
      const gui = await findGui(page, "Comandos");
      const nameInput = gui.locator(".controller.string input");
      await nameInput.click();
      await nameInput.fill("cubo");

      await clickCommand(page, "Formar objeto");
      const forming = await measure(page, 4);

      // El tiempo de construcción lo marca la app misma al pasar a
      // "settled" (ver metrics.mark("formacionMs") en main.ts): medirlo
      // acá con el reloj de pared solo mediría nuestros propios waits.
      // Hay que leerlo ANTES del reset de la medición siguiente, porque
      // reset() también limpia las duraciones con nombre.
      // Timeout generoso a propósito: en headless (SwiftShader, software)
      // los FPS bajan lo suficiente como para que el tope de `dt` (50ms en
      // main.ts) haga que la animación avance más lento que el tiempo real
      // — una formación nominal de ~12s puede tardar ~50s de reloj. Es un
      // artefacto del entorno, no del código: el tiempo de cuadro medido
      // más arriba sí es comparable, este número solo sirve como relativo
      // antes/después en la MISMA máquina.
      await page
        .waitForFunction(() => window.__nanobotMetrics.snapshot().timings.formacionMs !== undefined, null, {
          timeout: 120000,
        })
        .catch(() => {});
      const formMs = await page.evaluate(
        () => window.__nanobotMetrics.snapshot().timings.formacionMs ?? null,
      );
      const settled = await measure(page, 3);

      rows.push({ count, idle, forming, settled, formMs, errors: errors.length });
      await context.close();
    }
  } finally {
    await browser.close();
  }

  const fmt = (n) => n.toFixed(2).padStart(8);
  console.log("");
  console.log("| nanobots |  estado  | frame avg | frame p95 |    fps | draws | heap MB |");
  console.log("|---------:|----------|----------:|----------:|-------:|------:|--------:|");
  for (const row of rows) {
    for (const [label, snap] of [["reposo", row.idle], ["formando", row.forming], ["asentado", row.settled]]) {
      console.log(
        `| ${String(row.count).padStart(8)} | ${label.padEnd(8)} |${fmt(snap.frameMsAvg)}  |` +
          `${fmt(snap.frameMsP95)}  |${fmt(snap.fps)} |` +
          `${String(snap.drawCalls).padStart(6)} |` +
          `${snap.heapUsedMB === null ? "     n/d" : fmt(snap.heapUsedMB)} |`,
      );
    }
  }
  console.log("");
  for (const row of rows) {
    const formLabel = row.formMs === null ? "no llegó a asentarse" : `${(row.formMs / 1000).toFixed(2)}s`;
    console.log(
      `${row.count} nanobots: formación completa ${formLabel}` +
        `${row.errors ? `  (!! ${row.errors} errores de página)` : ""}`,
    );
  }
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
