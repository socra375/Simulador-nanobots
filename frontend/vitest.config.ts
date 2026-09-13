import { defineConfig } from "vitest/config";

// Config separada de vite.config.ts a propósito: los tests E2E de
// Playwright (frontend/e2e/*.spec.ts) no deben correr bajo Vitest (usan su
// propio runner con ciclo de vida de navegador).
export default defineConfig({
  test: {
    exclude: ["**/node_modules/**", "e2e/**"],
  },
});
