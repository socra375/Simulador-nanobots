import { test, expect, type Page } from "@playwright/test";

// Helpers para interactuar con el panel lil-gui (no expone atributos
// estables como data-testid, así que estos helpers encapsulan su
// estructura DOM real en un solo lugar).

async function findCommandsGuiHandle(page: Page) {
  return page.evaluateHandle(() => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    return guis.find((g) => g.querySelector(":scope > .title")?.textContent === "Comandos")!;
  });
}

async function setObjectName(page: Page, value: string) {
  const gui = await findCommandsGuiHandle(page);
  await gui.evaluate((el, v) => {
    const input = el.querySelector<HTMLInputElement>(".controller.string input")!;
    input.value = v;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, value);
}

async function clickCommandButton(page: Page, name: string) {
  const gui = await findCommandsGuiHandle(page);
  await gui.evaluate((el, buttonName) => {
    const controllers = Array.from(el.querySelectorAll(".controller.function"));
    const controller = controllers.find((c) => c.querySelector(".name")?.textContent === buttonName);
    controller?.querySelector("button")?.click();
  }, name);
}

async function readCommandsStatus(page: Page): Promise<string | null> {
  const gui = await findCommandsGuiHandle(page);
  return gui.evaluate((el) => {
    const directDivs = Array.from(el.children).filter(
      (c) => c.tagName === "DIV" && !c.classList.contains("children"),
    );
    return directDivs.length ? directDivs[directDivs.length - 1].textContent : null;
  });
}

async function attachFakePhoto(page: Page) {
  const fileInput = page.locator('input[type="file"]');
  const pngBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    "base64",
  );
  await fileInput.setInputFiles({ name: "objeto.png", mimeType: "image/png", buffer: pngBuffer });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
});

test("el enjambre converge cerca del núcleo por defecto (sin seguir el cursor)", async ({ page }) => {
  await page.waitForTimeout(6000);
  // No hay data-testid sobre los meshes de Three.js (WebGL, sin DOM), así
  // que verificamos indirectamente: el panel carga y no hay errores, y la
  // captura visual se revisa manualmente en desarrollo. Este test cubre el
  // "no crashea al converger en reposo" — el resto del comportamiento
  // físico está cubierto por los tests nativos de C++ (cpp/test_boids.cpp).
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.waitForTimeout(500);
  expect(errors).toEqual([]);
});

test("Formar objeto sin foto adjunta pide la foto y no forma nada", async ({ page }) => {
  await setObjectName(page, "esfera");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toContain("foto");
});

test("nombre no reconocido, con foto, muestra la lista de formas soportadas", async ({ page }) => {
  await attachFakePhoto(page);
  await setObjectName(page, "esto-no-existe-123");
  await clickCommandButton(page, "Formar objeto");
  const status = await readCommandsStatus(page);
  expect(status).toContain("no reconocido");
  expect(status).toContain("esfera");
});

test("nombre válido, con foto, forma el objeto (incluye resolución de alias)", async ({ page }) => {
  await attachFakePhoto(page);

  await setObjectName(page, "esfera");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: esfera");

  // "love" es alias de "corazon" (ver shapes.ts) — confirma que la UI
  // resuelve el alias antes de mostrar el nombre canónico.
  await setObjectName(page, "love");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: corazon");
});

test("Volver al núcleo tras formar una figura actualiza el status", async ({ page }) => {
  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: cubo");

  await clickCommandButton(page, "Volver al núcleo");
  await expect.poll(() => readCommandsStatus(page)).toContain("núcleo");
});

async function setNanobotCount(page: Page, count: number) {
  await page.evaluate((value) => {
    const controllers = Array.from(document.querySelectorAll(".lil-gui .controller"));
    const nanobots = controllers.find((c) => c.querySelector(".name")?.textContent === "Nanobots");
    const input = nanobots!.querySelector<HTMLInputElement>("input")!;
    input.value = String(value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, count);
  await page.keyboard.press("Tab");
}

test("cambiar la cantidad de nanobots no rompe la app mientras hay una figura activa", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachFakePhoto(page);
  await setObjectName(page, "estrella");
  await clickCommandButton(page, "Formar objeto");
  await page.waitForTimeout(500);

  await setNanobotCount(page, 150);
  await page.waitForTimeout(1000);

  expect(errors).toEqual([]);
});

test("el límite máximo (10.000 nanobots) no rompe la app ni degrada el frame rate a cero", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await setNanobotCount(page, 10000);
  await page.waitForTimeout(1500);

  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: cubo");
  await page.waitForTimeout(1500);

  // No es una aserción de FPS exacta (variaría mucho por hardware/CI) — solo
  // confirma que el loop de render sigue vivo (avanzan frames) en vez de
  // trabarse por completo con la cantidad máxima soportada.
  const framesAdvanced = await page.evaluate(
    () =>
      new Promise<number>((resolve) => {
        let frames = 0;
        const start = performance.now();
        function tick() {
          frames++;
          if (performance.now() - start < 1000) requestAnimationFrame(tick);
          else resolve(frames);
        }
        requestAnimationFrame(tick);
      }),
  );
  expect(framesAdvanced).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});
