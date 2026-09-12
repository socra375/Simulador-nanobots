import { defineConfig, devices } from "@playwright/test";

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

export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  use: {
    baseURL: process.env.BASE_URL ?? "http://127.0.0.1:8000",
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
