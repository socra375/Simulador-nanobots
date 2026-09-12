// Puente TypeScript <-> Python (FastAPI).
//
// El backend Python no participa en la simulación en sí — solo persiste y
// devuelve la configuración del enjambre como JSON plano en disco. Toda la
// comunicación pasa por `fetch` contra los endpoints /api/config.
//
// Cuando la app se sirve sin ese backend (p.ej. GitHub Pages, un sitio
// estático), /api/config no existe y el fetch falla: en ese caso se usa
// localStorage como fallback para no perder la función de guardar/cargar.
export interface SwarmConfig {
  count: number;
  cohesion: number;
  separation: number;
  alignment: number;
  maxSpeed: number;
}

const LOCAL_STORAGE_KEY = "nanobot-swarm-config";

function loadFromLocalStorage(): SwarmConfig | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SwarmConfig) : null;
  } catch {
    return null;
  }
}

function saveToLocalStorage(config: SwarmConfig): boolean {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config));
    return true;
  } catch {
    return false;
  }
}

export async function loadConfig(): Promise<SwarmConfig | null> {
  try {
    const res = await fetch("/api/config");
    if (res.ok) return (await res.json()) as SwarmConfig;
  } catch {
    // sin backend disponible — se cae al fallback de abajo
  }
  return loadFromLocalStorage();
}

export async function saveConfig(config: SwarmConfig): Promise<boolean> {
  try {
    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    if (res.ok) return true;
  } catch {
    // sin backend disponible — se cae al fallback de abajo
  }
  return saveToLocalStorage(config);
}
