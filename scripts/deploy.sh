#!/usr/bin/env bash
# Baut die Seite und veröffentlicht dist/ als Inhalt des Branches main (GitHub Pages).
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT=$PWD
MSG=${1:-"Gebaute Seite aktualisiert (Quelle: $(git rev-parse --short HEAD))"}

docker run --rm --cpus=2 -u "$(id -u):$(id -g)" -e HOME=/tmp -e npm_config_cache=/tmp/npmc \
  -e ASTRO_TELEMETRY_DISABLED=1 -v "$ROOT":/app -w /app node:22 \
  sh -c 'npm install --no-audit --no-fund && node node_modules/astro/bin/astro.mjs build'
python3 -I scripts/check-links.py dist

WT=$(mktemp -d)
trap 'git -C "$ROOT" worktree remove --force "$WT" 2>/dev/null || true' EXIT
git fetch origin main
git worktree add --force "$WT" origin/main --detach
find "$WT" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r dist/. "$WT"/
touch "$WT/.nojekyll"
printf '# Henrick Jung Immobilien – gebaute Seite\n\nGebaute Seite – Quellcode im Branch `quelle`.\n\nVorschau: https://cansi798.github.io/immobilien/\n' > "$WT/README.md"
cd "$WT"
git add -A
if git diff --cached --quiet; then echo "Keine Änderungen."; exit 0; fi
git commit -q -m "$MSG" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push origin HEAD:main
echo "Veröffentlicht: https://cansi798.github.io/immobilien/"
