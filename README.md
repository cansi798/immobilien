# Henrick Jung Immobilien – Website (Quellcode)

Neue Website für **Henrick Jung Immobilien**, Immobilienmakler in Hamburg.
Statisch gebaut mit [Astro](https://astro.build). Kein Tracking, keine Cookies, Schriften lokal.

- **Vorschau:** https://cansi798.github.io/immobilien/
- **Branches:** `quelle` = Quellcode (dieser Branch) · `main` = gebaute Seite (GitHub Pages, „Deploy from branch main /“)

## Seiten

| Pfad | Inhalt |
|---|---|
| `/` | Startseite: Hero, zwei Einstiege (Verkaufen / Kaufen), Objekte, Ablauf, Vorteile, Über mich, Bewertungen, Referenzen, Region, FAQ, Kontakt |
| `/leistungen/` + `/leistungen/{verkaufen,kaufen,vermieten,beraten}/` | Leistungen mit Umfang, Ablauf, FAQ |
| `/immobilien/` + `/immobilien/<objekt>/` | Angebote (11 Detailseiten mit Galerie) + Referenzen „Bereits vermittelt“ |
| `/henrick-jung/` | Über mich / Geschichte |
| `/kontakt/` | Kontaktdaten + Formular (öffnet E-Mail-Programm, kein Backend) |
| `/impressum/`, `/datenschutz/`, `404` | Rechtliches |

## Struktur

```
src/consts.ts             Firmendaten, Navigation, Bild-Helfer
src/data/leistungen.ts    Leistungen, Vorteile, Kundenstimmen, FAQ
src/data/objekte.json     Objekte (aus der alten Website übernommen)
src/data/bilder.json      Bildmanifest (Pfade + Maße)
src/components/           Header, Footer, StickyBar, Img, ObjektCard, Steps, Faq, RoofLine …
src/layouts/BaseLayout    SEO-Head, Schema.org RealEstateAgent, Scroll-Animationen
src/styles/global.css     Designsystem (Farben, Schrift, Buttons, Animationen)
public/img/               Optimierte WebP-Bilder (2 Breiten je Bild)
scripts/deploy.sh         Baut und veröffentlicht dist/ nach main
scripts/check-links.py    Prüft interne Links in dist/
```

## Bauen (auf dem Server, ohne lokales Node)

```bash
docker run --rm -u $(id -u):$(id -g) -e HOME=/tmp -e npm_config_cache=/tmp/npmc \
  -e ASTRO_TELEMETRY_DISABLED=1 -v "$PWD":/app -w /app node:22 \
  sh -c 'npm install --no-audit --no-fund && node node_modules/astro/bin/astro.mjs build'
python3 scripts/check-links.py dist
```

## Veröffentlichen

```bash
scripts/deploy.sh      # baut, prüft Links und pusht dist/ (+ .nojekyll) nach main
```

## Inhalte pflegen

- **Firmendaten:** `src/consts.ts`
- **Objekt hinzufügen/entfernen:** Eintrag in `src/data/objekte.json` (`angebote` oder `vermittelt`), Bilder als `<name>-800.webp` / `<name>-1600.webp` nach `public/img/objekte/<slug>/` und Maße in `src/data/bilder.json` eintragen.
- **Texte der Leistungen/FAQ:** `src/data/leistungen.ts`
- Offene Fragen an den Kunden: **`OFFENE-INFOS.md`**, Bildherkunft: **`BILDER.md`**

## Eigene Domain

In `astro.config.mjs` `site` auf die Domain und `base` auf `'/'` setzen, `public/robots.txt` + `public/llms.txt` anpassen und den Hosting-Abschnitt der Datenschutzerklärung aktualisieren.
