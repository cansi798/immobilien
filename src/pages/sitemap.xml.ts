import type { APIRoute } from "astro";
import { BASE } from "../consts";
import { LEISTUNGEN } from "../data/leistungen";
import daten from "../data/objekte.json";

// Eigene Sitemap (ohne Impressum/Datenschutz/404).
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? "https://cansi798.github.io";
  const paths = ["", "immobilien/", "leistungen/", "henrick-jung/", "kontakt/",
    ...LEISTUNGEN.map((l) => `leistungen/${l.slug}/`),
    ...daten.angebote.map((o) => `immobilien/${o.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${origin}${BASE}${p}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
