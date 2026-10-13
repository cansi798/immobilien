#!/usr/bin/env python3
"""Prüft alle internen Links/Bilder in dist/ (base /immobilien) auf Existenz."""
import os, re, sys, html, urllib.parse
DIST = sys.argv[1] if len(sys.argv) > 1 else "dist"
BASE = "/immobilien/"
bad = set(); n = 0
for root, _, files in os.walk(DIST):
    for f in files:
        if not f.endswith(".html"): continue
        p = os.path.join(root, f); s = open(p, encoding="utf-8").read()
        refs = re.findall(r'(?:href|src)="([^"]+)"', s) + [x.split()[0] for ss in re.findall(r'srcset="([^"]+)"', s) for x in ss.split(",")]
        for r in refs:
            r = html.unescape(r).strip()
            if not r.startswith(BASE): continue
            n += 1
            path = urllib.parse.unquote(r.split("#")[0].split("?")[0])[len(BASE):]
            t = os.path.join(DIST, path)
            if path == "" or path.endswith("/"): t = os.path.join(t, "index.html")
            if not os.path.exists(t): bad.add((r, os.path.relpath(p, DIST)))
        for r in re.findall(r'href="(?!https?:|mailto:|tel:|#|/)([^"]+)"', s):
            bad.add(("RELATIV: " + r, os.path.relpath(p, DIST)))
print(f"{n} interne Verweise geprüft, {len(bad)} Fehler")
for b in sorted(bad): print("  ", b)
sys.exit(1 if bad else 0)
