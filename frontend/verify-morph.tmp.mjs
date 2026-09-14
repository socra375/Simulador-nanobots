import { chromium } from "@playwright/test";

const CHROMIUM = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const browser = await chromium.launch({
  executablePath: CHROMIUM,
  args: ["--headless=new", "--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1000, height: 750 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto("http://127.0.0.1:8000/", { waitUntil: "load" });
await page.waitForFunction(() => !!window.__nanobotMetrics, null, { timeout: 30000 });

const gui = () => page.evaluateHandle(() => {
  const guis = Array.from(document.querySelectorAll(".lil-gui"));
  return guis.find((g) => g.querySelector(":scope > .title")?.textContent === "Comandos");
});
async function setName(v) {
  const h = await gui();
  await h.evaluate((el, val) => {
    const i = el.querySelector(".controller.string input");
    i.value = val;
    i.dispatchEvent(new Event("input", { bubbles: true }));
    i.dispatchEvent(new Event("change", { bubbles: true }));
  }, v);
}
async function click(name) {
  const h = await gui();
  await h.evaluate((el, n) => {
    const cs = Array.from(el.querySelectorAll(".controller.function"));
    cs.find((c) => c.querySelector(".name")?.textContent === n)?.querySelector("button")?.click();
  }, name);
}
async function panel(title) {
  return page.evaluate((w) => {
    const guis = Array.from(document.querySelectorAll(".lil-gui"));
    const f = guis.find((g) => g.querySelector(":scope > .title")?.textContent === w);
    if (!f) return "(no)";
    const ds = Array.from(f.children).filter((c) => c.tagName === "DIV" && !c.classList.contains("children") && !c.classList.contains("title"));
    return ds.length ? ds[ds.length - 1].textContent : "(vacio)";
  }, title);
}

const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", "base64");
await page.locator('input[type="file"]:not([data-scan-slot])').setInputFiles({ name: "o.png", mimeType: "image/png", buffer: png });

await setName("cabeza");
await click("Formar objeto");
console.log("-> formando cabeza; esperando a que se asiente...");
for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(3000);
  const c = await panel("Cola de tareas");
  if (/^(?:(?:exoesqueleto|relleno|color \d+): done\n?)+$/.test(c.trim())) break;
}
await page.screenshot({ path: "/tmp/morph-1-cabeza.png" });
console.log("cobertura cabeza:", JSON.stringify(await panel("Cobertura de la figura")));
console.log("estados:", JSON.stringify(await panel("Estado de los agentes")));

// AHORA: pedir otra figura SIN volver al núcleo
await setName("carro");
await click("Formar objeto");
console.log("-> pedido carro SIN volver al núcleo");
await page.waitForTimeout(1200);
await page.screenshot({ path: "/tmp/morph-2-justo-despues.png" });
console.log("estados justo después:", JSON.stringify(await panel("Estado de los agentes")));
await page.waitForTimeout(4000);
await page.screenshot({ path: "/tmp/morph-3-en-transito.png" });
console.log("estados en tránsito:", JSON.stringify(await panel("Estado de los agentes")));

for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(3000);
  const c = await panel("Cola de tareas");
  if (/^(?:(?:exoesqueleto|relleno|color \d+): done\n?)+$/.test(c.trim())) break;
}
await page.screenshot({ path: "/tmp/morph-4-carro.png" });
console.log("cobertura carro:", JSON.stringify(await panel("Cobertura de la figura")));
console.log("ERRORES:", errors.length ? errors : "ninguno");
await browser.close();
