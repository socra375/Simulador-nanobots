import { defineConfig } from "vite";

// Configuración mínima de Vite. En desarrollo, las peticiones a /api se
// redirigen al backend Python (FastAPI) para poder probar guardar/cargar
// configuración sin tener que servir el build de producción.
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
