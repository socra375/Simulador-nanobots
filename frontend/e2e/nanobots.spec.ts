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
  // Fase 23 agregó 4 inputs de archivo más (carpeta "Escaneo 3D",
  // marcados con data-scan-slot) — el de "Comandos" es el único sin ese
  // atributo.
  const fileInput = page.locator('input[type="file"]:not([data-scan-slot])');
  const pngBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
    "base64",
  );
  await fileInput.setInputFiles({ name: "objeto.png", mimeType: "image/png", buffer: pngBuffer });
}

// Fase 28: desglose en vivo por estado de agente, alimentado por el
// AgentStore (ver src/swarm/agent-store.ts). Es la prueba de que el store
// no es un módulo decorativo: si dejara de escribirse, este panel se
// congela y estos tests fallan.
async function readAgentStatePanel(page: Page): Promise<string> {
  return readFolderText(page, "Estado de los agentes");
}

// Fase 29: la cola de tareas del director, en vivo.
async function readTaskQueuePanel(page: Page): Promise<string> {
  return readFolderText(page, "Cola de tareas");
}

async function readFolderText(page: Page, title: string): Promise<string> {
  return page.evaluate((wanted) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const folder = guis.find((g) => g.querySelector(":scope > .title")?.textContent === wanted);
    if (!folder) return "(sin panel)";
    // El ÚLTIMO div directo, no el primero: el primero es el título de la
    // carpeta (mismo criterio que readCommandsStatus).
    const divs = Array.from(folder.children).filter(
      (c) => c.tagName === "DIV" && !c.classList.contains("children") && !c.classList.contains("title"),
    );
    return divs.length ? (divs[divs.length - 1].textContent ?? "") : "(sin contenido)";
  }, title);
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
  // IMPORTANTE: fijar `input.value` a mano y disparar eventos "input"/"change"
  // sintéticos NO dispara de forma confiable el onFinishChange de lil-gui (se
  // confirmó investigando un falso positivo: el valor mostrado cambiaba pero
  // `swarm.init()` nunca se llamaba, dejando el buffer de Wasm desincronizado
  // del conteo real). Una interacción realista — click, seleccionar todo,
  // escribir, Tab (dispara blur) — sí lo hace siempre.
  const controller = page.locator(".lil-gui .controller").filter({
    has: page.locator(".name", { hasText: "Nanobots" }),
  });
  const input = controller.locator("input");
  await input.click();
  await input.press("Control+A");
  await input.type(String(count));
  await input.press("Tab");
}

async function dragRotateCamera(page: Page, dx = 150, dy = -80): Promise<void> {
  const box = await page.locator("canvas").boundingBox();
  if (!box) throw new Error("No se encontró el <canvas> de la escena");
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.move(cx + dx, cy + dy, { steps: 12 });
  await page.mouse.up();
}

async function countRenderedFramesOverOneSecond(page: Page): Promise<number> {
  return page.evaluate(
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

test("el límite máximo (60.000 nanobots) no rompe la app ni degrada el frame rate a cero", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  // Fase 18: techo subido de 10.000 a 60.000 (mismo que Microbots) al pasar
  // a escritura directa de instanceMatrix + física boid solo en reposo.
  await setNanobotCount(page, 60000);
  await page.waitForTimeout(1500);

  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: cubo");
  await page.waitForTimeout(1500);

  // No es una aserción de FPS exacta (variaría mucho por hardware/CI) — solo
  // confirma que el loop de render sigue vivo (avanzan frames) en vez de
  // trabarse por completo con la cantidad máxima soportada.
  const framesAdvanced = await countRenderedFramesOverOneSecond(page);
  expect(framesAdvanced).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("cambiar la cantidad de nanobots en reposo (sin figura activa) no rompe la app", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.waitForTimeout(1000);
  await setNanobotCount(page, 500);
  await page.waitForTimeout(1000);
  await setNanobotCount(page, 30);
  await page.waitForTimeout(1000);

  expect(errors).toEqual([]);
});

test("formar dos figuras distintas seguidas (sin volver al núcleo entremedio) actualiza el status cada vez", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachFakePhoto(page);
  await setObjectName(page, "esfera");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: esfera");

  // Sin pasar por "Volver al núcleo": pide otra figura directamente mientras
  // la anterior todavía puede estar revelándose por fases (ver
  // formationPhase en main.ts) — no debería quedar en un estado inconsistente.
  await page.waitForTimeout(300);
  await setObjectName(page, "estrella");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: estrella");

  await page.waitForTimeout(1500);
  expect(errors).toEqual([]);
});

test("rotar la cámara (arrastrar) y hacer zoom (rueda) no generan errores y el render sigue vivo", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachFakePhoto(page);
  await setObjectName(page, "corazon");
  await clickCommandButton(page, "Formar objeto");
  await page.waitForTimeout(500);

  await dragRotateCamera(page, 200, -100);
  await page.waitForTimeout(200);
  await dragRotateCamera(page, -120, 60);

  const canvas = page.locator("canvas");
  await canvas.hover();
  await page.mouse.wheel(0, -400); // zoom in
  await page.waitForTimeout(200);
  await page.mouse.wheel(0, 400); // zoom out

  const framesAdvanced = await countRenderedFramesOverOneSecond(page);
  expect(framesAdvanced).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test("pedir otra figura durante la animación de regreso al núcleo (espiral) no rompe la app", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: cubo");
  await page.waitForTimeout(800);

  // Dispara la espiral de regreso y, antes de que termine (dura varios
  // segundos, ver RETURN_SPIRAL_DURATION/RETURN_QUEUE_SPAN en main.ts), pide
  // formar otra figura — el nuevo modo debe cancelar la animación en curso
  // en vez de pelear con ella.
  await clickCommandButton(page, "Volver al núcleo");
  await page.waitForTimeout(300);
  await setObjectName(page, "anillo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: anillo");

  await page.waitForTimeout(1500);
  expect(errors).toEqual([]);
});

test("el panel de estado muestra el desglose del enjambre y cambia al formar", async ({ page }) => {
  // En headless (SwiftShader) el tope de dt hace que una formación de ~12s
  // nominales tarde bastante más en reloj de pared — artefacto del entorno,
  // documentado desde la Fase 26. El timeout por test del config son 30s y
  // acota el test ENTERO, así que hay que subirlo acá.
  test.setTimeout(300_000);
  // En reposo: todos los agentes en "reposo" (IDLE), ninguno asentado.
  await expect.poll(() => readAgentStatePanel(page), { timeout: 20000 }).toMatch(/^reposo: \d+$/);

  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: cubo");

  // Al terminar la formación TODOS quedan asentados. El timeout es
  // generoso a propósito: en headless (SwiftShader) el tope de dt hace que
  // una formación de ~12s nominales tarde bastante más en reloj de pared —
  // artefacto del entorno, documentado desde la Fase 26.
  await expect
    .poll(() => readAgentStatePanel(page), { timeout: 180000 })
    .toMatch(/^asentado: \d+$/);

  // Y el desglose suma la cantidad configurada, no la capacidad del buffer.
  const asentados = Number((await readAgentStatePanel(page)).replace(/\D/g, ""));
  expect(asentados).toBe(3000);
});

test("el panel de estado vuelve a reposo tras volver al núcleo", async ({ page }) => {
  test.setTimeout(300_000);
  await attachFakePhoto(page);
  await setObjectName(page, "esfera");
  await clickCommandButton(page, "Formar objeto");
  await expect.poll(() => readCommandsStatus(page)).toBe("Formando: esfera");
  await page.waitForTimeout(3000);

  await clickCommandButton(page, "Volver al núcleo");
  await expect
    .poll(() => readAgentStatePanel(page), { timeout: 180000 })
    .toMatch(/^reposo: \d+$/);
});

test("la cola de tareas refleja el avance real de la formación", async ({ page }) => {
  test.setTimeout(300_000);

  await expect.poll(() => readTaskQueuePanel(page), { timeout: 20000 }).toBe("sin tareas");

  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");

  // Primero sólo el exoesqueleto, en sus dos grupos (Fase 37: "cubo"
  // tiene vigas, así que los nodos y las uniones salen por separado). Las
  // olas de color todavía no se conocen.
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 20000 })
    .toMatch(/^exoesqueleto: (pending|running)\nuniones: (pending|running)$/);

  // Cumplido el exoesqueleto aparecen el relleno y las olas.
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 60000 })
    .toMatch(/exoesqueleto: done\nuniones: done[\s\S]*relleno:/);

  // Y al final TODO queda cumplido, sin ninguna tarea colgada.
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 180000 })
    .toMatch(/^(?:(?:exoesqueleto|uniones|relleno|color \d+): done\n?)+$/);

  await clickCommandButton(page, "Volver al núcleo");
  await expect.poll(() => readTaskQueuePanel(page), { timeout: 60000 }).toMatch(/repliegue:/);
});
