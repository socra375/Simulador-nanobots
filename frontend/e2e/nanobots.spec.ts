import { test, expect, type Page } from "@playwright/test";
// El proyecto es ESM ("type": "module"), así que acá no hay `require`.
import { deflateSync } from "node:zlib";

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
  // Se elige por un atributo PROPIO, no por exclusión. La versión
  // anterior decía "el único sin data-scan-slot" y se rompió en cuanto el
  // panel Imagen → 3D agregó otro input sin ese atributo: el selector
  // pasó a matchear dos elementos y Playwright falla por modo estricto.
  const fileInput = page.locator('input[type="file"][data-command-slot]');
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

/**
 * Todo el texto de una carpeta, no sólo su último div.
 *
 * `readFolderText` alcanza para los paneles de una sola línea, pero el de
 * Imagen → 3D tiene varios bloques (aviso, datos del archivo, estado,
 * estadísticas) y el último está vacío hasta que se reconstruye.
 */
async function readFolderAllText(page: Page, title: string): Promise<string> {
  return page.evaluate((wanted) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const folder = guis.find((g) => g.querySelector(":scope > .title")?.textContent === wanted);
    if (!folder) return "(sin panel)";
    return Array.from(folder.children)
      .filter((c) => c.tagName === "DIV" && !c.classList.contains("children") && !c.classList.contains("title"))
      .map((d) => d.textContent ?? "")
      .join("\n");
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

  // Cumplido el exoesqueleto aparecen el relleno y las etapas de material.
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 60000 })
    .toMatch(/exoesqueleto: done\nuniones: done[\s\S]*relleno:/);

  // Y al final TODO queda cumplido, sin ninguna tarea colgada.
  // Fase 42: las etiquetas cambiaron. "color N" (una por ola) pasó a ser
  // "cobertura" (los Material Bots cubriendo la superficie) más
  // "material N" (una por tanda de activación de regiones).
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 180000 })
    .toMatch(/^(?:(?:exoesqueleto|uniones|relleno|cobertura|material \d+): done\n?)+$/);

  await clickCommandButton(page, "Volver al núcleo");
  await expect.poll(() => readTaskQueuePanel(page), { timeout: 60000 }).toMatch(/repliegue:/);
});

// Fase 41: la cadena completa imagen → 3D, desde la UI real.
//
// Es el único test que ejercita el pipeline entero de punta a punta:
// carga de imagen, segmentación, profundidad, reconstrucción,
// voxelización y construcción por el enjambre. Los unitarios cubren cada
// etapa por separado sobre TypedArrays; esto cubre que estén bien
// enchufadas y que el Worker (o su caída a ejecución en línea) funcione
// dentro del navegador.
test("Imagen → 3D: de una foto al objeto construido por el enjambre", async ({ page }) => {
  // El headless con SwiftShader estira mucho los tiempos de la animación
  // (documentado desde la Fase 20), y acá además hay un pipeline pesado.
  test.setTimeout(300_000);

  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  const panel = () => readFolderAllText(page, "Imagen → 3D");

  // Una imagen chica pero con un objeto reconocible sobre fondo liso:
  // un cuadrado oscuro centrado, que es el mismo fixture que usan los
  // tests de silueta.
  const png = makeSquarePng(48, 12);
  await page
    .locator('input[type="file"][data-image-slot]')
    .setInputFiles({ name: "objeto.png", mimeType: "image/png", buffer: png });

  await expect.poll(() => panel(), { timeout: 20000 }).toContain("Lista");

  await clickFolderButton(page, "Imagen → 3D", "Reconstruir y construir");
  await expect.poll(() => panel(), { timeout: 60000 }).toContain("vóxeles de superficie");

  // El aviso del spec §29 tiene que estar siempre, y el resultado tiene
  // que informar cuánta geometría se vio de verdad.
  const info = await readFolderAllText(page, "Imagen → 3D");
  expect(info).toContain("es una estimación");

  // Fase 44: NO hay un segundo clic. "Reconstruir y construir" deja al
  // enjambre formando — el usuario pidió que la forma la haga el enjambre
  // de verdad, no una vista previa que después haya que confirmar.
  //
  // El enjambre recorre su secuencia de siempre sobre la figura
  // reconstruida: si la forma no se hubiera registrado bien, la cola
  // nunca pasaría del exoesqueleto.
  await expect
    .poll(() => readTaskQueuePanel(page), { timeout: 180000 })
    .toMatch(/exoesqueleto: done[\s\S]*relleno:/);

  expect(errors).toEqual([]);
});

/** Hace clic en un botón de una carpeta cualquiera del panel. */
async function clickFolderButton(page: Page, folderTitle: string, buttonName: string): Promise<void> {
  await page.evaluate(
    ([title, name]) => {
      const guis = Array.from(document.querySelectorAll(".lil-gui"));
      const folder = guis.find((g) => g.querySelector(":scope > .title")?.textContent === title);
      const controllers = Array.from(folder?.querySelectorAll(".controller.function") ?? []);
      const controller = controllers.find((c) => c.querySelector(".name")?.textContent === name);
      controller?.querySelector("button")?.click();
    },
    [folderTitle, buttonName],
  );
}

/** PNG mínimo: fondo blanco con un cuadrado oscuro centrado. */
// ---------------------------------------------------------------------
// Fase 42 — el material sale de la POSICIÓN, no de la ola.
//
// La regresión que este test existe para atrapar: hasta la Fase 41 cada
// "ola" de color era un muestreo independiente de la figura entera, así
// que los colores quedaban intercalados agente por agente sobre todo el
// objeto. Acá se comprueba la secuencia que reemplazó a eso: los Material
// Bots cubren la superficie, se asientan, se activan y RECIÉN AHÍ aparece
// el material, región por región.
// ---------------------------------------------------------------------
test("el material aparece por regiones DESPUÉS de cubrir la superficie", async ({ page }) => {
  // Headless con SwiftShader estira mucho los tiempos: una formación de
  // ~12 s de reloj puede tardar un minuto de reloj de pared.
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachPhotoWithColors(page);
  await setObjectName(page, "carro");
  await clickCommandButton(page, "Formar objeto");

  const material = () => readFolderAllText(page, "Material y regiones");

  // 1. El mapa de material existe apenas arranca la capa de Nanobots, con
  //    regiones y tandas reales — no un panel vacío.
  await expect.poll(material, { timeout: 60_000 }).toMatch(/\d+ regiones? · \d+ tandas?/);
  // Una foto sin información de DÓNDE va cada color se declara aproximada
  // en vez de hacerse pasar por medida (spec §32).
  expect(await material()).toContain("aproximado");

  // 2. La superficie se cubre ANTES de que aparezca el material. Este
  //    fotograma —el objeto cubierto de bots, todavía sin material— es el
  //    que no existía antes de esta fase.
  await expect.poll(material, { timeout: 60_000 }).toContain("cubriendo superficie");
  expect(await readTaskQueuePanel(page)).toContain("cobertura");

  // 3. Y después, la transformación por tandas hasta terminar.
  await expect.poll(material, { timeout: 120_000 }).toContain("material completo");
  await expect
    .poll(() => readTaskQueuePanel(page))
    .toMatch(/^(?:(?:exoesqueleto|uniones|relleno|cobertura|material \d+): done\n?)+$/);

  expect(errors).toEqual([]);
});

test("el modo debug de regiones se enciende y se apaga sin tocar la simulación", async ({ page }) => {
  test.setTimeout(180_000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachPhotoWithColors(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");
  await expect
    .poll(() => readFolderAllText(page, "Material y regiones"), { timeout: 120_000 })
    .toContain("material completo");

  const antes = await readFolderAllText(page, "Material y regiones");
  await toggleRegionDebug(page, true);
  await page.waitForTimeout(400);
  await toggleRegionDebug(page, false);
  await page.waitForTimeout(400);

  // El interruptor es de PRESENTACIÓN: ni el mapa de material ni la fase
  // cambian. Si tocara la simulación, este panel lo diría.
  expect(await readFolderAllText(page, "Material y regiones")).toBe(antes);
  expect(await readCommandsStatus(page)).toBe("Formando: cubo");
  expect(errors).toEqual([]);
});

// ---------------------------------------------------------------------
// Fase 45 — de qué está hecho el objeto, y por qué el panel muestra otro
// número que el slider.
// ---------------------------------------------------------------------

test("elegir un material transforma la figura ya formada, sin volver a volar", async ({ page }) => {
  test.setTimeout(240_000);
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await attachPhotoWithColors(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");

  const material = () => readFolderAllText(page, "Material y regiones");
  await expect.poll(material, { timeout: 150_000 }).toContain("material completo");

  // Se elige "Hueso" del desplegable...
  await pickMaterial(page, "Hueso");
  // ...y la figura vuelve a transformarse: deja de estar completa.
  await expect.poll(material, { timeout: 15_000 }).not.toContain("material completo");
  // El panel dice cuál es el material y de dónde salió su color.
  expect(await material()).toContain("Hueso");
  expect(await material()).toContain("material elegido");
  // Y termina sola, sin que el enjambre se haya replegado en el medio.
  await expect.poll(material, { timeout: 120_000 }).toContain("material completo");
  expect(await readCommandsStatus(page)).toBe("Formando: cubo");

  expect(errors).toEqual([]);
});

test("un material inventado se acepta, y se declara que el color es derivado", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  // Sin goto: el beforeEach ya cargó la página. Volver a navegar acá
  // reiniciaba el arranque y el panel todavía no existía cuando el test
  // buscaba el campo.
  await waitForMaterialPanel(page);
  await writeMaterial(page, "flogisto");
  const texto = await readFolderAllText(page, "Material y regiones");
  expect(texto).toContain("flogisto");
  expect(texto).toContain("derivado del nombre");
  expect(errors).toEqual([]);
});

test("el panel explica por qué N Microbots se ven como dos tipos distintos", async ({ page }) => {
  test.setTimeout(180_000);
  await attachFakePhoto(page);
  await setObjectName(page, "cubo");
  await clickCommandButton(page, "Formar objeto");

  // Con la figura en pantalla, la cuenta del slider tiene que cerrar con
  // la suma de los tipos en que se reparte — que es lo que faltaba decir.
  await expect
    .poll(() => readFolderAllText(page, "Tipos de bot"), { timeout: 120_000 })
    .toMatch(/Microbots: [\d.]+ pedidos = [\d.]+ Microbot \+ [\d.]+ Union Bot/);
  expect(await readFolderAllText(page, "Tipos de bot")).toMatch(
    /Nanobots: [\d.]+ pedidos = [\d.]+ Nanobot \+ [\d.]+ Material Bot/,
  );
});

/** Espera a que el panel de material exista (la GUI se arma tras el wasm). */
async function waitForMaterialPanel(page: Page): Promise<void> {
  await page.waitForFunction(() =>
    Array.from(document.querySelectorAll(".lil-gui")).some(
      (g) => g.querySelector(":scope > .title")?.textContent === "Material y regiones",
    ),
  );
}

/** Elige un material del desplegable del panel. */
async function pickMaterial(page: Page, nombre: string) {
  await page.evaluate((valor) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const folder = guis.find(
      (g) => g.querySelector(":scope > .title")?.textContent === "Material y regiones",
    );
    const select = folder?.querySelector<HTMLSelectElement>(".controller.option select");
    if (!select) throw new Error("no se encontró el desplegable de material");
    select.value = valor;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }, nombre);
}

/** Escribe un material a mano en el campo de texto del panel. */
async function writeMaterial(page: Page, texto: string) {
  await page.evaluate((valor) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const folder = guis.find(
      (g) => g.querySelector(":scope > .title")?.textContent === "Material y regiones",
    );
    const input = folder?.querySelector<HTMLInputElement>(".controller.string input");
    if (!input) throw new Error("no se encontró el campo de material");
    // Enfocar ANTES de escribir: lil-gui dispara onFinishChange en el
    // evento `blur`, y blur() sobre un input que nunca tuvo foco no emite
    // nada. Sin esto el test "escribe" el material y no pasa nada.
    input.focus();
    input.value = valor;
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.blur();
  }, texto);
}

async function toggleRegionDebug(page: Page, on: boolean) {
  await page.evaluate((valor) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const folder = guis.find(
      (g) => g.querySelector(":scope > .title")?.textContent === "Material y regiones",
    );
    const input = folder?.querySelector<HTMLInputElement>(".controller.boolean input");
    if (!input) return;
    input.checked = valor;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, on);
}

/**
 * Foto con TRES colores bien distintos, para que la paleta tenga más de
 * un material y las regiones sean algo más que una sola mancha.
 */
async function attachPhotoWithColors(page: Page) {
  const size = 48;
  const raw: number[] = [];
  for (let y = 0; y < size; y++) {
    raw.push(0);
    for (let x = 0; x < size; x++) {
      const f = y / size;
      const [r, g, b] = f < 0.6 ? [208, 32, 32] : f < 0.9 ? [216, 176, 32] : [16, 16, 16];
      raw.push(r, g, b);
    }
  }
  await page
    .locator('input[type="file"][data-command-slot]')
    .setInputFiles({ name: "objeto.png", mimeType: "image/png", buffer: encodeRgbPng(size, raw) });
}

function makeSquarePng(size: number, margin: number): Buffer {
  const raw: number[] = [];
  for (let y = 0; y < size; y++) {
    raw.push(0); // filtro de fila
    for (let x = 0; x < size; x++) {
      const dentro = x >= margin && x < size - margin && y >= margin && y < size - margin;
      raw.push(dentro ? 30 : 245, dentro ? 40 : 245, dentro ? 200 : 248);
    }
  }
  return encodeRgbPng(size, raw);
}

/**
 * Codifica un PNG RGB sin comprimir por filtros. `raw` ya viene con el
 * byte de filtro (0) al principio de cada fila.
 */
function encodeRgbPng(size: number, raw: number[]): Buffer {
  const crcTable: number[] = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crcTable[n] = c >>> 0;
  }
  const crc = (buf: Buffer): number => {
    let c = 0xffffffff;
    for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
  const chunk = (type: string, data: Buffer): Buffer => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
    const c = Buffer.alloc(4);
    c.writeUInt32BE(crc(body));
    return Buffer.concat([len, body, c]);
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // profundidad de bit
  ihdr[9] = 2; // color verdadero (RGB)
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(Buffer.from(raw))),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}
