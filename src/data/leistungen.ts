// Leistungen – Grundlage sind die vier Leistungen der bisherigen Website
// (Kaufen, Verkaufen, Vermieten, Beraten). Texte sprachlich modernisiert,
// Inhalte nicht erweitert: Abläufe sind aus den Original-Beschreibungen abgeleitet.

export type Leistung = {
  slug: string;
  titel: string;
  icon: string;
  kurz: string;           // Karte / Menü
  claim: string;          // Unterzeile der alten Seite, modernisiert
  h1: string;
  lead: string;
  bild: string;           // Bildquelle (Objekt aus eigener Vermittlung)
  bildAlt: string;
  zielgruppen?: { titel: string; text: string }[];
  umfang: string[];
  ablauf: { titel: string; text: string }[];
  faq: { q: string; a: string }[];
  description: string;
};

export const LEISTUNGEN: Leistung[] = [
  {
    slug: "verkaufen",
    titel: "Verkaufen",
    icon: "key",
    kurz: "Sie möchten Ihre Immobilie verkaufen? Ich begleite Sie von der Einwertung bis zum Notartermin.",
    claim: "Sie können sich zurücklehnen.",
    h1: "Ihre Immobilie verkaufen – mit dem bestmöglichen Ergebnis",
    lead:
      "Ein Immobilienverkauf ist selten nur ein Geschäft. Oft hängen Erinnerungen, Pläne und viel Kapital daran. Ich führe Sie durch den gesamten Verkaufsprozess – von der Einwertung Ihrer Immobilie über die Präsentation in meinem Kundennetzwerk und auf allen großen Portalen bis hin zu Besichtigungen und Notartermin. Mein Anspruch: ein reibungsloser Ablauf und das bestmögliche Ergebnis für Sie.",
    bild: "img/objekte/lemsahl-mellingstedt-doppelhaushaelfte/01",
    bildAlt: "Gepflegte Doppelhaushälfte mit Garten in Hamburg-Lemsahl-Mellingstedt – von Henrick Jung vermarktet",
    zielgruppen: [
      {
        titel: "Für Privateigentümer",
        text: "Ob Einfamilienhaus, Doppelhaushälfte, Wohnung oder Grundstück: Sie erhalten einen festen Ansprechpartner, der Sie ehrlich berät, Interessenten sorgfältig auswählt und Sie bis zur Schlüsselübergabe begleitet.",
      },
      {
        titel: "Für Unternehmen & Investoren",
        text: "Auch Anlage- und Gewerbeimmobilien gehören zu meinen Vermarktungen – etwa Mehrfamilienhäuser, Wohn- und Geschäftshäuser oder Gewerbeflächen. Mit Kennzahlen wie Mietrendite und Faktor sachlich aufbereitet.",
      },
    ],
    umfang: [
      "Einwertung Ihrer Immobilie und realistische Preisfindung",
      "Aufbereitung der Unterlagen und hochwertige Präsentation",
      "Vorstellung in meinem Kundennetzwerk",
      "Veröffentlichung auf allen großen Immobilienportalen",
      "Organisation und Durchführung der Besichtigungen",
      "Verhandlung mit Kaufinteressenten",
      "Vorbereitung und Begleitung des Notartermins",
      "Begleitung bis zur Schlüsselübergabe",
    ],
    ablauf: [
      { titel: "Kennenlernen", text: "Im ersten Gespräch lerne ich Sie, Ihre Immobilie und Ihre Ziele kennen – persönlich und auf Augenhöhe." },
      { titel: "Einwertung", text: "Auf Basis meiner regionalen Marktkenntnis ermittle ich einen realistischen Angebotspreis." },
      { titel: "Präsentation", text: "Ihre Immobilie wird ansprechend aufbereitet und in meinem Netzwerk sowie auf den großen Portalen präsentiert." },
      { titel: "Besichtigungen", text: "Ich organisiere die Termine, führe Interessenten durch Ihr Objekt und prüfe die Ernsthaftigkeit." },
      { titel: "Verhandlung & Notar", text: "Ich verhandle für Sie und bereite den Notartermin gemeinsam mit allen Beteiligten vor." },
      { titel: "Übergabe", text: "Bis zur Schlüsselübergabe bleibe ich Ihr Ansprechpartner – erst dann ist der Verkauf für mich abgeschlossen." },
    ],
    faq: [
      { q: "Was ist meine Immobilie wert?", a: "Die Einwertung ist der erste Schritt jedes Verkaufs. Ich berücksichtige Lage, Zustand, Ausstattung und die aktuelle Marktsituation in Ihrer Region. Sprechen Sie mich gern an – ich nehme mir Zeit für Ihre Immobilie." },
      { q: "Welche Unterlagen brauche ich für den Verkauf?", a: "In der Regel werden unter anderem ein aktueller Grundbuchauszug, der Energieausweis, Grundrisse und eine Wohnflächenberechnung benötigt, bei Eigentumswohnungen zusätzlich Teilungserklärung und Protokolle der Eigentümerversammlungen. Fehlende Unterlagen beschaffen wir gemeinsam." },
      { q: "Vermarkten Sie auch Gewerbe- und Anlageimmobilien?", a: "Ja. Neben Häusern und Wohnungen habe ich bereits Mehrfamilienhäuser, Wohn- und Geschäftshäuser, Gewerbeobjekte und Büroflächen vermarktet. Beispiele finden Sie unter „Immobilien“." },
    ],
    description: "Immobilie verkaufen in Hamburg und Umland: Einwertung, Vermarktung, Besichtigungen und Notartermin – persönlich begleitet von Henrick Jung, zertifizierter Immobilienmakler (IHK & EIA).",
  },
  {
    slug: "kaufen",
    titel: "Kaufen",
    icon: "home",
    kurz: "Sie suchen ein neues Zuhause für Ihre Familie? Ich finde genau das Richtige für Sie.",
    claim: "Ihr Traumhaus wartet auf Sie.",
    h1: "Ein Zuhause finden, in dem Sie ankommen",
    lead:
      "Für jedes Budget finde ich das richtige Zuhause. Teilen Sie mir Ihre Eckdaten mit – innerhalb von 24 Stunden präsentiere ich Ihnen passende Objekte. Ich begleite Sie zu den Besichtigungen, prüfe den Zustand der Immobilie und führe Sie durch die Verhandlungen. Als Partner an Ihrer Seite können Sie sich auf mich verlassen.",
    bild: "img/objekte/poppenbuettel/02",
    bildAlt: "Heller Wohn- und Essbereich mit Kamin in einem Bungalow in Hamburg-Poppenbüttel",
    umfang: [
      "Gemeinsame Klärung Ihrer Wünsche, Ihres Budgets und Ihrer Wunschlage",
      "Passende Objektvorschläge innerhalb von 24 Stunden",
      "Begleitung zu den Besichtigungen",
      "Prüfung des Zustands der Immobilie",
      "Führung durch den Verhandlungsprozess",
      "Begleitung bis zum Notartermin und zur Schlüsselübergabe",
    ],
    ablauf: [
      { titel: "Wünsche klären", text: "Sie nennen mir Ihre Eckdaten: Lage, Größe, Budget und was Ihnen wirklich wichtig ist." },
      { titel: "Objekte erhalten", text: "Innerhalb von 24 Stunden präsentiere ich Ihnen passende Immobilien." },
      { titel: "Besichtigen", text: "Ich begleite Sie zu den Terminen und schaue mit Ihnen genau hin – auch auf den Zustand." },
      { titel: "Verhandeln & kaufen", text: "Ich führe Sie durch die Verhandlung bis zum Notartermin und zur Schlüsselübergabe." },
    ],
    faq: [
      { q: "Wie schnell erhalte ich passende Angebote?", a: "Sobald ich Ihre Eckdaten kenne, präsentiere ich Ihnen innerhalb von 24 Stunden passende Objekte." },
      { q: "Was kostet mich der Kauf über einen Makler?", a: "Die Käuferprovision hängt vom jeweiligen Objekt ab und steht transparent im Exposé bzw. in der Objektbeschreibung. Bei Einfamilienhäusern und Wohnungen wird die Provision nach den gesetzlichen Vorgaben (§ 656c BGB) zwischen Käufer und Verkäufer geteilt." },
      { q: "Ich habe noch keine Finanzierung – ist das ein Problem?", a: "Nein. Sprechen Sie mich frühzeitig an. Ein klarer Finanzierungsrahmen hilft, gezielt zu suchen und im richtigen Moment schnell zu entscheiden." },
    ],
    description: "Haus oder Wohnung kaufen in Hamburg und Umland: passende Objekte innerhalb von 24 Stunden, Begleitung bei Besichtigung, Prüfung und Verhandlung – Henrick Jung Immobilien.",
  },
  {
    slug: "vermieten",
    titel: "Vermieten",
    icon: "doc",
    kurz: "Sie möchten Ihr Haus oder Ihre Wohnung vermieten? Ich finde den passenden Mieter für Sie.",
    claim: "Ganz gleich, ob Wohnung oder Haus.",
    h1: "Den passenden Mieter finden – zeitnah und sorgfältig",
    lead:
      "Mein Netzwerk und fundierte Marktkenntnisse ermöglichen es mir, zeitnah einen passenden Mieter für Ihr Objekt zu finden. Von der Aufbereitung der Immobilie über Besichtigungstermine bis zur Prüfung der Unterlagen und der Vertragsabwicklung unterstütze ich Sie als kompetenter Partner.",
    bild: "img/objekte/city-nord-buero/02",
    bildAlt: "Lichtdurchflutete, leere Bürofläche in der Hamburger City Nord",
    umfang: [
      "Aufbereitung und Präsentation Ihrer Immobilie",
      "Vermarktung über mein Netzwerk und die großen Portale",
      "Organisation der Besichtigungstermine",
      "Prüfung der Mieterunterlagen",
      "Unterstützung bei der Vertragsabwicklung",
    ],
    ablauf: [
      { titel: "Aufbereiten", text: "Wir besprechen Ihr Objekt und bereiten es für die Vermarktung vor." },
      { titel: "Vermarkten", text: "Ich präsentiere Ihre Immobilie in meinem Netzwerk und auf den großen Portalen." },
      { titel: "Besichtigen & prüfen", text: "Ich führe die Besichtigungen durch und prüfe die Unterlagen der Interessenten." },
      { titel: "Vertrag", text: "Ich unterstütze Sie bei der Vertragsabwicklung bis zur Übergabe." },
    ],
    faq: [
      { q: "Vermitteln Sie Wohn- und Gewerbeflächen?", a: "Ja – sowohl Wohnungen und Häuser als auch Gewerbeflächen wie Büroetagen." },
      { q: "Wer zahlt die Provision bei einer Vermietung?", a: "Bei Wohnraum gilt das Bestellerprinzip: Wer den Makler beauftragt, zahlt ihn. Die konkreten Konditionen bespreche ich vorab transparent mit Ihnen." },
    ],
    description: "Wohnung, Haus oder Gewerbefläche vermieten in Hamburg: Aufbereitung, Besichtigungen, Prüfung der Mieterunterlagen und Vertragsabwicklung – Henrick Jung Immobilien.",
  },
  {
    slug: "beraten",
    titel: "Beraten",
    icon: "chat",
    kurz: "Sie haben Fragen rund um das Thema Immobilien? Bei mir gibt es Antworten.",
    claim: "Keine Frage bleibt ungeklärt.",
    h1: "Ehrliche Antworten auf Ihre Immobilienfragen",
    lead:
      "Was ist meine Immobilie wert? Was kommt im Zuge der Energiewende auf mich zu? Wie ist die aktuelle Zinslage? Ganz gleich, welche Fragen Sie rund um das Thema Immobilien haben – rufen Sie mich an.",
    bild: "img/objekte/langenhorn-wohnung/01",
    bildAlt: "Wohnbereich mit Galerie und Kamin in einer Dachgeschosswohnung in Hamburg-Langenhorn",
    umfang: [
      "Was ist meine Immobilie wert?",
      "Was kommt im Zuge der Energiewende auf mich zu?",
      "Wie ist die aktuelle Zinslage?",
      "Kaufen, verkaufen oder vermieten – was passt zu meiner Situation?",
    ],
    ablauf: [
      { titel: "Anrufen", text: "Schildern Sie mir Ihr Anliegen – telefonisch oder per E-Mail." },
      { titel: "Einordnen", text: "Ich ordne Ihre Situation ein und beantworte Ihre Fragen ehrlich und verständlich." },
      { titel: "Entscheiden", text: "Sie entscheiden in Ruhe, wie es weitergeht – ohne Druck." },
    ],
    faq: [
      { q: "Zu welchen Themen kann ich mich beraten lassen?", a: "Zu allen Fragen rund um Kauf, Verkauf und Vermietung – zum Beispiel zum Wert Ihrer Immobilie, zu energetischen Anforderungen oder zur Marktsituation." },
    ],
    description: "Beratung rund um Immobilien in Hamburg: Immobilienwert, Energiewende, Zinslage, Kauf, Verkauf und Vermietung – persönlich mit Henrick Jung.",
  },
];

/** Die drei Vorteile der bisherigen Website. */
export const VORTEILE = [
  { icon: "user", titel: "Persönliche Beratung", text: "Als Partner meiner Kunden lege ich besonderen Wert auf eine individuelle und persönliche Beratung auf Augenhöhe." },
  { icon: "shield", titel: "Zuverlässigkeit", text: "Ehrliches Engagement und Einsatzbereitschaft für meine Kunden zeichnen meine Arbeit aus." },
  { icon: "pin", titel: "Expertise", text: "Neben fachlichem Wissen profitieren Sie vor allem von meinen fundierten, regionalen Marktkenntnissen." },
];

/** Echte Kundenstimmen von der bisherigen Website (wörtlich, nur Rechtschreibung minimal geglättet). */
export const STIMMEN = [
  { text: "Bissiger, guter Makler, vollste Zufriedenheit, immer erreichbar!", name: "Martin C." },
  { text: "Alles hat schnell und reibungslos geklappt, nicht zuletzt dank des professionellen und diplomatischen Verhandlungsgeschicks von Herrn Jung. Vielen Dank.", name: "Marco Z." },
  { text: "Herr Jung war jederzeit ein kompetenter und zuverlässiger Ansprechpartner. Wir sind mit dem Gesamtablauf sehr zufrieden und würden ihn jederzeit weiterempfehlen.", name: "Ehepaar B." },
];

export const FAQ_START = [
  { q: "In welcher Region sind Sie tätig?", a: "Mein Schwerpunkt liegt in Hamburg und im Hamburger Umland. Bisher habe ich Immobilien unter anderem in Hamburg, Norderstedt, Geesthacht, Rellingen und Schwarzenbek sowie in Mecklenburg-Vorpommern vermittelt." },
  { q: "Wie läuft ein Verkauf mit Ihnen ab?", a: "Nach einem persönlichen Kennenlernen folgen Einwertung, Aufbereitung und Präsentation Ihrer Immobilie, Besichtigungen, Verhandlung und Notartermin – ich begleite Sie bis zur Schlüsselübergabe." },
  { q: "Sind die Angebote auf der Website noch verfügbar?", a: "Immobilienangebote ändern sich laufend. Bitte fragen Sie die Verfügbarkeit kurz telefonisch oder per E-Mail an – ich sende Ihnen gern das aktuelle Exposé." },
  { q: "Wie erreiche ich Sie am besten?", a: "Telefonisch unter 040 506 847 95, mobil unter 0176 8025 1738 oder per E-Mail an info@henrickjung-immobilien.de – montags bis freitags von 9 bis 18 Uhr, am Wochenende nach Absprache." },
  { q: "Welche Qualifikation haben Sie?", a: "Ich bin zertifizierter Immobilienmakler (IHK & EIA), gelernter Bankkaufmann und studierter Wirtschaftspsychologe." },
];
