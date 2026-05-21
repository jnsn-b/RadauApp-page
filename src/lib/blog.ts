export type Language = "de" | "en" | "fr" | "es";

export interface BlogPost {
  slug: string;
  lang: Language;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  readingTime: number;
  faqSchema?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [

  // ─── TONIEBOX VERGLEICH ───────────────────────────────────────────────────
  {
    slug: "toniebox-alternative",
    lang: "de",
    title: "Toniebox Alternative: Warum ein altes iPhone die bessere Wahl ist",
    description: "Die Toniebox kostet über 100€ und braucht teure Tonies. Wir zeigen, warum die RadauApp mit einem alten iPhone die smartere, nachhaltigere und günstigere Alternative ist.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Toniebox Alternative", "Kinder Musikbox", "nachhaltig", "Vergleich"],
    readingTime: 6,
    faqSchema: [
      { question: "Was ist eine gute Alternative zur Toniebox?", answer: "Die RadauApp auf einem alten iPhone ist eine günstige, nachhaltige Toniebox-Alternative. Sie funktioniert ab iPhone 6s, unterstützt Apple Music, eigene MP3s, Podcasts und Webradio – kostenlos im App Store." },
      { question: "Was kostet die Toniebox im Vergleich zur RadauApp?", answer: "Die Toniebox kostet ca. 100€, jede Tonie-Figur 15–20€. Die RadauApp ist gratis. Ein gebrauchtes iPhone 6s kostet ca. 20–40€. Wer bereits ein altes iPhone hat, zahlt gar nichts." },
      { question: "Kann die RadauApp eigene Hörspiele abspielen?", answer: "Ja. In der RadauApp können eigene MP3-Dateien, Apple Music Playlists, Podcasts und Webradio-Sender eingebunden werden." },
    ],
    content: `
## Was ist eine gute Alternative zur Toniebox?

Die **RadauApp** ist eine kostenlose iOS-App, die ein altes iPhone in eine kindersichere Musikbox verwandelt. Sie ist die günstigste und nachhaltigste Alternative zur Toniebox – ohne Plastikfiguren und ohne laufende Extrakosten.

**Kurz zusammengefasst:**
- Kostenlos im App Store
- Läuft auf iPhone 6s oder neuer
- Unterstützt Apple Music, MP3s, Podcasts und Webradio
- Kindgerechte Bedienung ohne Lesekenntnisse
- Elternbereich mit Zugriffsschutz

---

## Was kostet die Toniebox wirklich?

| Produkt | Kosten |
|---|---|
| Toniebox | ~100€ |
| Pro Tonie-Figur | 15–20€ |
| 10 Figuren | ~150–200€ |
| **Gesamt** | **~250–300€** |

**Die RadauApp kostet 0€** – vorausgesetzt, ein altes iPhone ist vorhanden. Gebraucht gibt es ein iPhone 6s bereits ab 20–40€.

---

## Was kann die RadauApp, was die Toniebox nicht kann?

| Funktion | Toniebox | RadauApp |
|---|---|---|
| Kindgerechte Bedienung | ✅ | ✅ |
| Eigene MP3s abspielen | ❌ | ✅ |
| Apple Music (100 Mio. Songs) | ❌ | ✅ |
| Podcasts & Hörspiele | ❌ | ✅ |
| Kindgerechtes Webradio | ❌ | ✅ |
| Elternbereich | ✅ | ✅ |
| Inhalte ohne Nachkaufen | ❌ | ✅ |
| Nachhaltigkeit (Upcycling) | ❌ | ✅ |

---

## Warum ist die RadauApp nachhaltiger?

- Jede Tonie-Figur ist neu produziertes Plastik.
- Die RadauApp nutzt ein bereits vorhandenes Gerät.
- Altes iPhone = kein neuer Elektronikschrott.
- Kein Verlieren von Figuren, kein Nachkaufen.

---

## Für wen eignet sich die Toniebox – für wen die RadauApp?

**Toniebox ist besser, wenn:**
- Das Kind das haptische Bedienkonzept mit Figuren liebt.
- Kein altes iPhone verfügbar ist.
- Offline-Nutzung ohne WLAN wichtig ist.

**RadauApp ist besser, wenn:**
- Ein altes iPhone vorhanden ist.
- Niedrige Kosten wichtig sind.
- Viele verschiedene Inhalte gewünscht werden.
- Nachhaltigkeit eine Rolle spielt.

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── ALTES IPHONE ────────────────────────────────────────────────────────
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "de",
    title: "Altes iPhone sinnvoll nutzen: Die perfekte Musikbox für Kinder",
    description: "Du hast noch ein altes iPhone zuhause? Mit der RadauApp verwandelst du es in eine kindersichere Musikbox. So geht die Einrichtung in 10 Minuten.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["altes iPhone", "Upcycling", "Einrichtung", "Kinder"],
    readingTime: 5,
    faqSchema: [
      { question: "Welches alte iPhone eignet sich als Kindermusikbox?", answer: "Alle iPhones ab iPhone 6s mit iOS 16 oder neuer sind geeignet. Das sind Geräte ab 2015. Gebraucht sind diese für 20–40€ erhältlich." },
      { question: "Wie richte ich ein altes iPhone als Kindermusikbox ein?", answer: "1. RadauApp kostenlos im App Store installieren. 2. Elternbereich öffnen und Inhalte hinzufügen. 3. Optional: Geführten Zugriff aktivieren. Das dauert ca. 10 Minuten." },
    ],
    content: `
## Welches alte iPhone eignet sich als Kindermusikbox?

**Geeignet sind alle iPhones ab iPhone 6s** mit iOS 16 oder neuer. Das sind Geräte ab dem Jahr 2015.

**Geeignete Modelle im Überblick:**
- iPhone 6s / 6s Plus (ab ~20€ gebraucht)
- iPhone 7 / 7 Plus
- iPhone 8 / 8 Plus
- iPhone X, XS, XR
- iPhone 11 und neuer

Gebraucht sind diese Geräte für **20–60€** erhältlich – deutlich günstiger als jede Spielzeugmusikübox.

---

## Wie richte ich das iPhone als Kindermusikbox ein?

**In 4 Schritten zur fertigen Kindermusikbox:**

1. **iPhone zurücksetzen** (optional): Einstellungen → Allgemein → iPhone übertragen oder zurücksetzen → Alle Inhalte & Einstellungen löschen.
2. **RadauApp installieren**: Kostenlos im App Store herunterladen.
3. **Elternbereich einrichten**: Beim ersten Start Inhalte hinzufügen – Apple Music Playlists, Podcasts, MP3s oder Webradio.
4. **Geführten Zugriff aktivieren**: Einstellungen → Bedienungshilfen → Geführter Zugriff. So bleibt das Kind in der App.

**Gesamtdauer: ca. 10 Minuten.**

---

## Was kostet die Einrichtung?

- RadauApp: **kostenlos**
- iPhone 6s gebraucht: **~20–40€** (oder bereits vorhanden)
- Apple Music: optional, 5,99€/Monat für Einzelpersonen

Zum Vergleich: Eine neue Toniebox kostet ~100€, jede Figur 15–20€.

---

## Tipps für den Alltag mit der Kinder-Musikbox

- **Robuste Hülle** kaufen – Kinder lassen Dinge fallen.
- **Lautsprecher** anschließen für besseren Sound (Bluetooth oder Klinke).
- **Mobile Daten deaktivieren**: Einstellungen → Mobilfunk → alles ausschalten.
- **Bildschirmzeit einrichten**: Für zusätzliche Kindersicherung.

---

## Welche Inhalte kann ich in der RadauApp nutzen?

- Apple Music Playlists und Alben
- Eigene MP3-Dateien
- Podcast-Feeds (z.B. Kakadu, Checker Tobi, TKKG)
- Webradio-Sender für Kinder (z.B. Radio Teddy)

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── APPLE MUSIC KINDER ──────────────────────────────────────────────────
  {
    slug: "apple-music-kinder-einrichten",
    lang: "de",
    title: "Apple Music für Kinder einrichten: So geht's kindersicher",
    description: "Apple Music kindersicher machen: Familienfreigabe, Inhaltsfilter und die RadauApp als kindgerechte Oberfläche. Schritt für Schritt erklärt.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Apple Music Kinder", "Familienfreigabe", "kindersicher", "Einrichtung"],
    readingTime: 5,
    faqSchema: [
      { question: "Wie mache ich Apple Music kindersicher?", answer: "Apple Music wird kindersicher durch: 1. Familienfreigabe einrichten. 2. Kinderkonto erstellen. 3. Kommunikations- und Inhaltseinschränkungen aktivieren. 4. RadauApp als kindgerechte Oberfläche nutzen." },
      { question: "Kann ein Kind Apple Music alleine bedienen?", answer: "Mit der RadauApp ja. Die App zeigt große Kacheln mit Bildern statt Text. Kinder ab 2 Jahren können damit selbstständig Musik auswählen – ganz ohne Lesekenntnisse." },
      { question: "Was kostet Apple Music für Familien?", answer: "Apple Music Familienabo kostet 16,99€/Monat für bis zu 6 Personen. Das Einzelabo kostet 10,99€/Monat." },
    ],
    content: `
## Wie mache ich Apple Music kindersicher?

Apple Music allein ist nicht für Kinder optimiert – die Oberfläche ist zu komplex, und es gibt keine Kindersicherung direkt in der App. Mit der richtigen Einrichtung wird es aber zur perfekten Kinderunterhaltung.

**In 4 Schritten zu kinderfreundlichem Apple Music:**

1. **Familienfreigabe einrichten**: Einstellungen → [Dein Name] → Familienfreigabe → Mitglied hinzufügen.
2. **Kinderkonto erstellen**: Für Kinder unter 13 Jahren ein eigenes Apple-ID-Konto anlegen.
3. **Inhaltseinschränkungen aktivieren**: Einstellungen → Bildschirmzeit → Inhalts- & Datenschutzbeschränkungen → Musik → "Sauber" auswählen.
4. **RadauApp installieren**: Als kindgerechte Oberfläche für Apple Music – große Kacheln, keine Texte, intuitiv.

---

## Was kostet Apple Music für Familien?

| Abo | Preis | Personen |
|---|---|---|
| Einzelperson | 10,99€/Monat | 1 |
| Familie | 16,99€/Monat | bis zu 6 |
| Apple One Familie | 25,95€/Monat | bis zu 6 + TV, Arcade, iCloud |

---

## Warum reicht Apple Music allein nicht für Kinder?

- Die Suchfunktion setzt Lesekenntnisse voraus.
- Kein Schutz vor ungeeigneten Inhalten ohne Einschränkungen.
- Keine kindgerechte Kacheloberfläche.
- Kein Elternbereich zum Verwalten der Inhalte.

**Die RadauApp löst all diese Probleme:** Sie läuft auf Apple Music und bietet eine kindgerechte Oberfläche mit großen Bildkacheln, die ohne Lesen funktioniert.

---

## Welche Inhalte eignen sich für Kinder auf Apple Music?

- Kinderlieder-Playlists (z.B. "Kinderlieder", "Die Sendung mit der Maus")
- Hörspiele als Alben (Benjamin Blümchen, Bibi Blocksberg, TKKG)
- Entspannungsmusik für Kinder
- Klassik für Kinder

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── HOERSPIELE KOSTENLOS ────────────────────────────────────────────────
  {
    slug: "hoerspiele-kinder-kostenlos",
    lang: "de",
    title: "Hörspiele für Kinder kostenlos: Die besten Quellen im Überblick",
    description: "Wo gibt es kostenlose Hörspiele und Podcasts für Kinder? Wir listen die besten Quellen – von ARD bis Spotify – und zeigen, wie du sie in der RadauApp nutzt.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Hörspiele Kinder kostenlos", "Podcasts Kinder", "ARD", "Spotify"],
    readingTime: 4,
    faqSchema: [
      { question: "Wo gibt es kostenlose Hörspiele für Kinder?", answer: "Kostenlose Hörspiele für Kinder gibt es bei: ARD Audiothek (Kakadu, Checker Tobi), Spotify (kostenlos mit Werbung), Apple Podcasts, KIKA, SWR Kindernetz und YouTube Music." },
      { question: "Welche kostenlosen Kinder-Podcasts gibt es?", answer: "Empfehlenswerte kostenlose Kinder-Podcasts: Kakadu (Deutschlandfunk), Checker Tobi (BR), Die Sendung mit der Maus (WDR), Maus-Türöffner-Tag, Pur+ Kinderpodcast." },
    ],
    content: `
## Wo gibt es kostenlose Hörspiele für Kinder?

Es gibt viele gute und völlig kostenlose Quellen für Kinder-Hörspiele und Podcasts.

**Die besten kostenlosen Quellen im Überblick:**

- **ARD Audiothek**: Kakadu, Checker Tobi, Sendung mit der Maus – alles kostenlos, werbefrei.
- **Apple Podcasts**: Tausende Kinder-Podcasts, komplett kostenlos.
- **Spotify**: Kostenlos mit Werbung, viele Kinder-Inhalte.
- **KIKA (kika.de)**: Hörspiele zum Stream, kostenlos.
- **SWR Kindernetz**: Regionale Inhalte, kostenlos.
- **Deutschlandfunk Nova**: Wissenschaft für Kinder.

---

## Die besten kostenlosen Kinder-Podcasts

| Podcast | Sender | Altersgruppe |
|---|---|---|
| Kakadu | Deutschlandfunk | 6–12 Jahre |
| Checker Tobi | BR | 6–12 Jahre |
| Die Sendung mit der Maus | WDR | 4–8 Jahre |
| Pur+ | ZDF | 8–14 Jahre |
| Der Expodcast | NDR | 6–10 Jahre |
| Kinder-Uni | Verschiedene | 8–14 Jahre |

---

## Wie nutze ich diese Podcasts in der RadauApp?

**In 3 Schritten:**

1. **Feed-URL kopieren**: Beim gewünschten Podcast die RSS-Feed-URL suchen (meist als "RSS" oder "Podcast-Feed" gekennzeichnet).
2. **RadauApp öffnen**: Elternbereich aufrufen.
3. **Feed hinzufügen**: URL einfügen, Titelbild wählen – fertig.

Das Kind sieht danach nur das Kachelbild und kann den Podcast per Tipp starten – ohne Lesen, ohne Suchen.

---

## Sind Hörspiele gut für Kinder?

**Vorteile von Hörspielen für Kinder:**
- Fördern die Fantasie und Vorstellungskraft.
- Verbessern das Sprachverständnis und den Wortschatz.
- Keine Bildschirmzeit – schont die Augen.
- Beruhigen und helfen beim Einschlafen.
- Fördern die Konzentrationsfähigkeit.

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── NACHHALTIGKEIT ──────────────────────────────────────────────────────
  {
    slug: "nachhaltiges-kinderspielzeug-digitales",
    lang: "de",
    title: "Nachhaltiges digitales Kinderspielzeug: Upcycling statt Neukauf",
    description: "Digitales Spielzeug muss nicht immer neu sein. Wir zeigen, warum ein altes iPhone als Kindermusikbox nachhaltiger ist als Toniebox, Tigerbox und Co.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["nachhaltiges Spielzeug", "Upcycling", "Elektronikschrott", "Toniebox"],
    readingTime: 4,
    faqSchema: [
      { question: "Was ist nachhaltiges digitales Kinderspielzeug?", answer: "Nachhaltiges digitales Kinderspielzeug nutzt vorhandene Geräte statt neue zu kaufen. Ein altes iPhone mit der RadauApp ist nachhaltiger als eine neue Toniebox, weil kein neues Plastik produziert wird und Elektronikschrott vermieden wird." },
      { question: "Wie viel Elektronikschrott produziert eine Toniebox?", answer: "Eine Toniebox plus 10 Tonie-Figuren entspricht ca. 500–700g neuem Plastik und Elektronik. Dazu kommen neue Batterien. Ein altes iPhone erzeugt keinen neuen Elektronikschrott – es wird nur weitergenutzt." },
    ],
    content: `
## Was ist nachhaltiges digitales Kinderspielzeug?

Nachhaltiges digitales Spielzeug vermeidet die Produktion neuer Geräte und nutzt stattdessen vorhandene Hardware.

**Das Prinzip: Upcycling statt Neukauf**
- Altes iPhone → Kindermusikbox
- Kein neues Plastik produziert
- Kein neuer Elektronikschrott
- Ressourcen gespart

---

## Wie nachhaltig sind Toniebox, Tigerbox und Co.?

| Produkt | Neues Plastik | Batteriebetrieb | Figuren erforderlich |
|---|---|---|---|
| Toniebox | ~300g Box + Figuren | ✅ | ✅ Pflicht |
| Tigerbox | ~200g | ✅ | ❌ |
| Tonuino (DIY) | Niedrig | ✅ | ❌ |
| **RadauApp** | **0g** | ❌ Netzbetrieb | ❌ |

**Jede Tonie-Figur ist ca. 30–50g Plastik** – bei 10 Figuren sind das 300–500g reine Neuprodukition.

---

## Warum ist ein altes iPhone nachhaltiger?

- Das Gerät existiert bereits – kein neuer CO₂-Ausstoß durch Produktion.
- Kein neues Plastik für Gehäuse oder Figuren.
- Längere Nutzungsdauer des Geräts = weniger Elektronikschrott.
- Kein Batteriebetrieb nötig (Netzteil oder bereits vorhandenes Kabel).

**Laut Schätzungen verursacht die Produktion eines neuen Smartphones ca. 70 kg CO₂.** Wer ein altes iPhone weiternutzt statt ein neues Spielzeuggerät zu kaufen, spart diese Emissionen komplett.

---

## Was können Eltern tun?

**5 einfache Schritte für nachhaltigere Kinderunterhaltung:**

1. Altes iPhone aus der Schublade holen.
2. RadauApp kostenlos installieren.
3. Vorhandene Apple Music Inhalte nutzen.
4. Kostenlose Podcasts einbinden.
5. Kein neues Spielzeuggerät kaufen.

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── ENGLISH ─────────────────────────────────────────────────────────────
  {
    slug: "toniebox-alternative",
    lang: "en",
    title: "Toniebox Alternative: Why an Old iPhone is the Smarter Choice",
    description: "The Toniebox costs over €100 plus expensive Tonie figures. RadauApp on an old iPhone is the smarter, more sustainable and cheaper alternative.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Toniebox alternative", "kids music box", "sustainable", "comparison"],
    readingTime: 5,
    faqSchema: [
      { question: "What is a good alternative to the Toniebox?", answer: "RadauApp on an old iPhone is a free, sustainable Toniebox alternative. It works on iPhone 6s and above, supports Apple Music, MP3s, podcasts and web radio." },
      { question: "How much does RadauApp cost compared to Toniebox?", answer: "RadauApp is free. A used iPhone 6s costs around €20–40. The Toniebox costs ~€100, plus €15–20 per Tonie figure." },
    ],
    content: `
## What is a good alternative to the Toniebox?

**RadauApp** is a free iOS app that turns an old iPhone into a child-safe music box. It is the cheapest and most sustainable alternative to the Toniebox – no plastic figures, no ongoing extra costs.

**In short:**
- Free in the App Store
- Works on iPhone 6s or newer
- Supports Apple Music, MP3s, podcasts and web radio
- Child-friendly interface without reading skills required
- Parental controls included

---

## What does the Toniebox really cost?

| Product | Cost |
|---|---|
| Toniebox | ~€100 |
| Per Tonie figure | €15–20 |
| 10 figures | ~€150–200 |
| **Total** | **~€250–300** |

**RadauApp costs €0** – provided you have an old iPhone. A used iPhone 6s starts at €20–40.

---

## Feature comparison

| Feature | Toniebox | RadauApp |
|---|---|---|
| Child-friendly interface | ✅ | ✅ |
| Own MP3s | ❌ | ✅ |
| Apple Music (100M songs) | ❌ | ✅ |
| Podcasts & audiobooks | ❌ | ✅ |
| Web radio | ❌ | ✅ |
| Parental controls | ✅ | ✅ |
| Content without extra costs | ❌ | ✅ |
| Sustainability (upcycling) | ❌ | ✅ |

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── FRENCH ──────────────────────────────────────────────────────────────
  {
    slug: "toniebox-alternative",
    lang: "fr",
    title: "Alternative à la Toniebox : Pourquoi un ancien iPhone est le meilleur choix",
    description: "La Toniebox coûte plus de 100€. RadauApp sur un ancien iPhone est l'alternative plus intelligente, durable et économique.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["alternative Toniebox", "boîte à musique enfants", "durable"],
    readingTime: 5,
    faqSchema: [
      { question: "Quelle est la meilleure alternative à la Toniebox ?", answer: "RadauApp sur un ancien iPhone est une alternative gratuite et durable à la Toniebox. Elle fonctionne sur iPhone 6s et plus, avec Apple Music, MP3, podcasts et radio web." },
    ],
    content: `
## Quelle est la meilleure alternative à la Toniebox ?

**RadauApp** est une application iOS gratuite qui transforme un ancien iPhone en lecteur audio pour enfants.

**En bref :**
- Gratuit sur l'App Store
- Fonctionne sur iPhone 6s ou plus récent
- Apple Music, MP3, podcasts et radio web
- Interface simple sans besoin de lire
- Contrôle parental inclus

---

## Comparaison des coûts

| Produit | Coût |
|---|---|
| Toniebox | ~100€ |
| Par figurine Tonie | 15–20€ |
| 10 figurines | ~150–200€ |
| **Total** | **~250–300€** |

**RadauApp coûte 0€.** Un iPhone 6s d'occasion coûte ~20–40€.

---

## Comparaison des fonctionnalités

| Fonction | Toniebox | RadauApp |
|---|---|---|
| Interface enfant | ✅ | ✅ |
| MP3 personnels | ❌ | ✅ |
| Apple Music | ❌ | ✅ |
| Podcasts | ❌ | ✅ |
| Radio web | ❌ | ✅ |
| Contrôle parental | ✅ | ✅ |
| Durabilité | ❌ | ✅ |

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── SPANISH ─────────────────────────────────────────────────────────────
  {
    slug: "toniebox-alternative",
    lang: "es",
    title: "Alternativa a Toniebox: Por qué un iPhone antiguo es la mejor elección",
    description: "La Toniebox cuesta más de 100€. RadauApp en un iPhone antiguo es la alternativa más inteligente, sostenible y económica.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["alternativa Toniebox", "música niños", "sostenible"],
    readingTime: 5,
    faqSchema: [
      { question: "¿Cuál es la mejor alternativa a la Toniebox?", answer: "RadauApp en un iPhone antiguo es una alternativa gratuita y sostenible a la Toniebox. Funciona en iPhone 6s o más nuevo, con Apple Music, MP3, podcasts y radio web." },
    ],
    content: `
## ¿Cuál es la mejor alternativa a la Toniebox?

**RadauApp** es una app iOS gratuita que convierte un iPhone antiguo en un reproductor de audio para niños.

**En resumen:**
- Gratis en la App Store
- Funciona en iPhone 6s o más nuevo
- Apple Music, MP3, podcasts y radio web
- Interfaz simple sin necesidad de leer
- Control parental incluido

---

## Comparación de costes

| Producto | Coste |
|---|---|
| Toniebox | ~100€ |
| Por figura Tonie | 15–20€ |
| 10 figuras | ~150–200€ |
| **Total** | **~250–300€** |

**RadauApp cuesta 0€.** Un iPhone 6s de segunda mano cuesta ~20–40€.

---

## Comparación de funciones

| Función | Toniebox | RadauApp |
|---|---|---|
| Interfaz para niños | ✅ | ✅ |
| MP3 propios | ❌ | ✅ |
| Apple Music | ❌ | ✅ |
| Podcasts | ❌ | ✅ |
| Radio web | ❌ | ✅ |
| Control parental | ✅ | ✅ |
| Sostenibilidad | ❌ | ✅ |

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
];

export function getPostsByLang(lang: Language): BlogPost[] {
  return blogPosts.filter(post => post.lang === lang);
}

export function getPostBySlugAndLang(slug: string, lang: Language): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug && post.lang === lang);
}

export function getAllSlugs(): string[] {
  return [...new Set(blogPosts.map(post => post.slug))];
}

export const blogTranslations = {
  de: { title: "Blog", subtitle: "Tipps, Vergleiche und Wissenswertes rund um die RadauApp.", readMore: "Weiterlesen", readingTime: "Min. Lesezeit", backToBlog: "← Zurück zum Blog", by: "Von" },
  en: { title: "Blog", subtitle: "Tips, comparisons and insights about RadauApp.", readMore: "Read more", readingTime: "min read", backToBlog: "← Back to blog", by: "By" },
  fr: { title: "Blog", subtitle: "Conseils, comparaisons et informations sur RadauApp.", readMore: "Lire la suite", readingTime: "min de lecture", backToBlog: "← Retour au blog", by: "Par" },
  es: { title: "Blog", subtitle: "Consejos, comparaciones e información sobre RadauApp.", readMore: "Leer más", readingTime: "min de lectura", backToBlog: "← Volver al blog", by: "Por" },
};
