// Graba el fixture de caracterización de la cinemática de Nanobots DESDE
// LA APP EN EJECUCIÓN. Se corrió una vez, en la Fase 27a, contra el
// código anterior a la extracción.
//
// NO FUNCIONA TAL CUAL HOY: depende de un hook `window.__captureGolden`
// que existió solo mientras duró la captura y se borró junto con la
// extracción. Se conserva como documentación de cómo se generó el
// fixture. Para regenerarlo hay que volver a exponer, al final de
// `main()`, un objeto con `formation()` (los arrays de la formación
// activa + reactorCenter + ejes del remolino) y `frameAt(elapsed)`
// (llamar a renderNanobotsAt y devolver nanobotRenderPositions).
//
// Ojo: regenerar el fixture contra el código NUEVO lo vuelve
// autorreferencial y le saca todo el valor — deja de probar "sigue
// haciendo lo mismo que antes" y pasa a probar "hace lo que hace".
// Solo tiene sentido si la animación se cambia a propósito.
//
// Por qué desde la app y no escribiendo el test después de extraer: un
// test escrito sobre la función YA extraída solo prueba que la función
// hace lo que hace, no que hace lo mismo que hacía antes. Grabando las
// salidas reales del código viejo, el test posterior sí prueba que la
// extracción fue fiel (y detecta, por ejemplo, un eje intercambiado al
// parametrizar).
//
// Uso: node bench/capture-golden.mjs > src/core/__fixtures__/nanobot-frames.json

import { chromium } from "@playwright/test";

const URL = process.env.BENCH_URL ?? "http://127.0.0.1:4300";
const COUNT = 200; // chico a propósito: el fixture se commitea
const ELAPSED = [0, 0.37, 1.0, 1.55, 2.2, 2.9, 3.7, 4.4];

const TINY_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
  "base64",
);

const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_PATH ??
    "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell",
});
const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
page.on("pageerror", (e) => console.error("[pageerror]", e.message));
await page.goto(URL);
await page.waitForLoadState("networkidle");
await page.waitForFunction(() => Boolean(window.__captureGolden));

async function gui(title) {
  for (const g of await page.locator(".lil-gui").all()) {
    if ((await g.locator(":scope > .title").first().textContent()) === title) return g;
  }
  throw new Error("no gui " + title);
}

const controller = page
  .locator(".lil-gui .controller")
  .filter({ has: page.locator(".name", { hasText: "Nanobots" }) });
const countInput = controller.locator("input");
await countInput.click();
await countInput.press("Control+A");
await countInput.type(String(COUNT));
await countInput.press("Tab");
await page.waitForTimeout(1500);

await page
  .locator('input[type="file"]:not([data-scan-slot])')
  .setInputFiles({ name: "g.png", mimeType: "image/png", buffer: TINY_PNG });
const g = await gui("Comandos");
const nameInput = g.locator(".controller.string input");
await nameInput.click();
await nameInput.fill("cubo");
for (const c of await g.locator(".controller.function").all()) {
  if ((await c.locator(".name").textContent()) === "Formar objeto") {
    await c.locator("button").click();
    break;
  }
}

// Hay que esperar a que el exoesqueleto de Microbots termine su
// lanzamiento: recién ahí startFormation() corre y currentFormation deja
// de ser null (ver pendingFormation en main.ts).
await page.waitForFunction(() => window.__captureGolden.formation() !== null, null, { timeout: 120000 });

const formation = await page.evaluate(() => window.__captureGolden.formation());
const frames = {};
for (const elapsed of ELAPSED) {
  frames[String(elapsed)] = await page.evaluate((t) => window.__captureGolden.frameAt(t), elapsed);
}

console.log(
  JSON.stringify(
    {
      _comment:
        "Fixture de caracterización generado con bench/capture-golden.mjs contra el código PREVIO a la extracción de la cinemática (Fase 27a). No editar a mano.",
      shape: "cubo",
      formation,
      frames,
    },
    null,
    1,
  ),
);

await browser.close();
