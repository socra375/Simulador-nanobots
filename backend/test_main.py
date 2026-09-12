"""Tests de integración del endpoint /api/config (FastAPI TestClient).

No tocan el archivo real backend/config/swarm_config.json: el fixture
`isolated_config` redirige CONFIG_PATH a un archivo temporal por test.
"""

import json

import pytest
from fastapi.testclient import TestClient

import main


@pytest.fixture
def isolated_config(tmp_path, monkeypatch):
    """Aísla cada test de main.CONFIG_PATH real (evita pisar config del usuario)."""
    temp_config_path = tmp_path / "swarm_config.json"
    monkeypatch.setattr(main, "CONFIG_PATH", temp_config_path)
    return temp_config_path


@pytest.fixture
def client():
    return TestClient(main.app)


VALID_CONFIG = {
    "count": 120,
    "cohesion": 1.0,
    "separation": 2.0,
    "alignment": 0.9,
    "maxSpeed": 5.0,
}


def test_get_config_returns_default_when_no_file_exists(client, isolated_config):
    assert not isolated_config.exists()
    res = client.get("/api/config")
    assert res.status_code == 200
    assert res.json() == main.DEFAULT_CONFIG


def test_post_then_get_round_trip(client, isolated_config):
    post_res = client.post("/api/config", json=VALID_CONFIG)
    assert post_res.status_code == 200
    assert post_res.json() == VALID_CONFIG

    get_res = client.get("/api/config")
    assert get_res.status_code == 200
    assert get_res.json() == VALID_CONFIG


def test_post_persists_to_disk(client, isolated_config):
    client.post("/api/config", json=VALID_CONFIG)
    assert isolated_config.exists()
    assert json.loads(isolated_config.read_text()) == VALID_CONFIG


@pytest.mark.parametrize(
    "field,bad_value",
    [
        ("count", 5),  # por debajo del mínimo (20)
        ("count", 500),  # por encima del máximo (200)
        ("maxSpeed", 0.0),  # por debajo del mínimo (0.1)
        ("cohesion", -1.0),  # por debajo del mínimo (0)
    ],
)
def test_post_rejects_out_of_range_values(client, isolated_config, field, bad_value):
    payload = {**VALID_CONFIG, field: bad_value}
    res = client.post("/api/config", json=payload)
    assert res.status_code == 422
    # No debe haber persistido nada con un payload inválido.
    assert not isolated_config.exists()


def test_post_rejects_missing_field(client, isolated_config):
    payload = {k: v for k, v in VALID_CONFIG.items() if k != "maxSpeed"}
    res = client.post("/api/config", json=payload)
    assert res.status_code == 422
