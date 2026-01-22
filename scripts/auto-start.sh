#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ ! -d "node_modules" ]; then
  echo "[auto-start] node_modules not found, installing dependencies..."
  npm install
fi

echo "[auto-start] starting dev server..."
exec npm run dev
