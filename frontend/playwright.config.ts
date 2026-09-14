import { defineConfig, devices } from "@playwright/test";
import { existsSync, readFileSync } from "node:fs";

// E2E contra el build de producción servido por el backend FastAPI (misma
// forma en que se sirve en GitHub Pages/local real, no el dev server de
// Vite). Antes de correr `npm run test:e2e` hay que tener:
//   1. frontend/dist compilado (`npm run build`)
//   2. el backend corriendo en BASE_URL (por defecto http://127.0.0.1:8000)
//
// PLAYWRIGHT_CHROMIUM_PATH es opcional: en entornos sin acceso a internet
// para `npx playwright install`, apunta a un binario de Chromium ya
// presente en el sistema.
const chromiumPath = process.env.PLAYWRIGHT_CHROMIUM_PATH;
const baseURL = process.env.BASE_URL ?? "http://127.0.0.1:8000";

// GUARDA CONTRA UN ERROR QUE YA PASÓ DOS VECES.
//
// El build de GitHub Pages (GITHUB_PAGES=true) mete el prefijo
// /Simulador-nanobots/ en las rutas de los assets. Si ese build se sirve
// desde la raíz (el backend local), el JS da 404, la app NUNCA arranca...
// y los tests fallan con mensajes que no tienen nada que ver: "no existe
// el panel", "no aparece el status". Se pierde un rato largo buscando una
// regresión inexistente.
//
// Es mucho mejor fallar acá, antes del primer test, diciendo exactamente
// qué pasa y cómo arreglarlo.
function assertBuildMatchesBaseUrl(): void {
  const indexPath = new URL("./dist/index.html", import.meta.url);
  if (!existsSync(indexPath)) return; // sin build todavía: no es asunto de esta guarda

  const html = readFileSync(indexPath, "utf8");
  const buildIsForPages = /(?:src|href)="\/Simulador-nanobots\//.test(html);
  const servingFromSubpath = baseURL.includes("/Simulador-nanobots");

  if (buildIsForPages && !servingFromSubpath) {
    throw new Error(
      [
        "frontend/dist está compilado para GitHub Pages (assets bajo /Simulador-nanobots/)",
        `pero los tests apuntan a ${baseURL}, que sirve desde la raíz.`,
        "El JS daría 404 y la app no arrancaría: los fallos NO serían regresiones reales.",
        "Arreglo: volvé a compilar con `npm run build` (sin GITHUB_PAGES=true).",
      ].join("\n"),
    );
  }
}

assertBuildMatchesBaseUrl();

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  use: {
    baseURL,
    launchOptions: {
      ...(chromiumPath ? { executablePath: chromiumPath } : {}),
      // Necesario en runners sin GPU real: fuerza WebGL por software y el
      // modo headless nuevo (algunos builds recientes de Chromium quitaron
      // el headless "old", que Playwright sigue usando por defecto).
      args: ["--headless=new", "--use-gl=swiftshader", "--enable-webgl", "--ignore-gpu-blocklist"],
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
