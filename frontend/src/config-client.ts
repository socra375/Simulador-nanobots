// Puente TypeScript <-> Python (FastAPI).
//
// El backend Python no participa en la simulación en sí — solo persiste y
// devuelve la configuración del enjambre como JSON plano en disco. Toda la
// comunicación pasa por `fetch` contra los endpoints /api/config.
export interface SwarmConfig {
  count: number;
  cohesion: number;
  separation: number;
  alignment: number;
  maxSpeed: number;
}

export async function loadConfig(): Promise<SwarmConfig | null> {
  try {
    const res = await fetch("/api/config");
    if (!res.ok) return null;
    return (await res.json()) as SwarmConfig;
  } catch {
    return null;
  }
}

export async function saveConfig(config: SwarmConfig): Promise<boolean> {
  try {
    const res = await fetch("/api/config", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    });
    return res.ok;
  } catch {
    return false;
  }
}
