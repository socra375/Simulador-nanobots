import { defineConfig } from "vite";

// Configuración mínima de Vite. En desarrollo, las peticiones a /api se
// redirigen al backend Python (FastAPI) para poder probar guardar/cargar
// configuración sin tener que servir el build de producción.
//
// `base` distingue dos formas de servir el build de producción:
// - Backend propio (FastAPI sirviendo frontend/dist en la raíz): base "/".
// - GitHub Pages (repo project page, sin backend): base "/Simulador-nanobots/".
//   Se activa con la variable de entorno GITHUB_PAGES=true (ver
//   .github/workflows/deploy-pages.yml).
export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/Simulador-nanobots/" : "/",
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
