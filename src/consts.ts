// Zentrale Firmendaten & Helfer – alle Angaben stammen von der bisherigen Website
// (www.henrickjung-immobilien.de, Stand Abruf 13.10.2026). Nichts ergänzt.

const RAW_BASE: string = import.meta.env.BASE_URL;
export const BASE: string = RAW_BASE.endsWith("/") ? RAW_BASE : RAW_BASE + "/";
/** base-Pfad-bewusste URL (Vorschau liegt unter /immobilien/). */
export const u = (p = ""): string => BASE + String(p).replace(/^\//, "");

export const SITE = {
  name: "Henrick Jung Immobilien",
  owner: "Henrick Jung",
  role: "Gründer und Geschäftsinhaber",
  zert: "Zertifizierter Immobilienmakler (IHK & EIA)",
  claim: "Immobilienmakler aus Leidenschaft",
  region: "Hamburg & Umland",
  phoneDisplay: "040 506 847 95",
  phoneTel: "+494050684795",
  mobileDisplay: "0176 8025 1738",
  mobileTel: "+4917680251738",
  email: "info@henrickjung-immobilien.de",
  street: "Mexikoring 27–29",
  zip: "22297",
  city: "Hamburg",
  hours: [
    { tag: "Montag bis Freitag", zeit: "09:00 – 18:00 Uhr" },
    { tag: "Samstag", zeit: "nach Absprache" },
    { tag: "Sonntag", zeit: "nach Absprache" },
  ],
  hoursShort: "Mo–Fr 9–18 Uhr, Wochenende nach Absprache",
  instagram: "https://www.instagram.com/henrick_jung_immobilien/",
  /** Karte nur als Link (kein Einbetten ohne Einwilligung). */
  mapUrl: "https://www.openstreetmap.org/search?query=Mexikoring%2027%2C%2022297%20Hamburg",
};

export type NavChild = { label: string; href: string; desc?: string; icon?: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  { label: "Immobilien", href: u("immobilien/") },
  {
    label: "Leistungen",
    children: [
      { label: "Verkaufen", href: u("leistungen/verkaufen/"), desc: "Für Privateigentümer & Unternehmen", icon: "key" },
      { label: "Kaufen", href: u("leistungen/kaufen/"), desc: "Ihr neues Zuhause finden", icon: "home" },
      { label: "Vermieten", href: u("leistungen/vermieten/"), desc: "Den passenden Mieter finden", icon: "doc" },
      { label: "Beraten", href: u("leistungen/beraten/"), desc: "Antworten rund um Ihre Immobilie", icon: "chat" },
      { label: "Alle Leistungen", href: u("leistungen/"), icon: "arrow" },
    ],
  },
  { label: "Über mich", href: u("henrick-jung/") },
  { label: "Kontakt", href: u("kontakt/") },
];

export const CTA = { label: "Gespräch vereinbaren", href: u("kontakt/") };

/** Bildmanifest: Breiten je Bildgruppe (siehe scripts/ + BILDER.md). */
export function widthsFor(src: string): [number, number] {
  if (src.startsWith("img/objekte/")) return [800, 1600];
  if (src.startsWith("img/vermittelt/")) return [640, 1200];
  if (src === "img/henrick-jung") return [500, 1000];
  if (src === "img/hero") return [900, 1800];
  if (src === "img/stimmung-garten") return [700, 1400];
  return [800, 1600];
}

import MANIFEST from "./data/bilder.json";
/** Maße eines Bildes aus dem Manifest (src ohne Breitenendung). */
export function bild(src: string): { src: string; w: number; h: number } {
  for (const list of Object.values(MANIFEST) as any[]) {
    for (const e of list) if (e.src === src) return e;
  }
  throw new Error("Bild fehlt im Manifest: " + src);
}
