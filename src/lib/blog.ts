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

  // ─── ALTES IPHONE EN ─────────────────────────────────────────────────────
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "en",
    title: "Repurpose an Old iPhone: The Perfect Music Box for Kids",
    description: "Got an old iPhone lying around? With RadauApp you turn it into a child-safe music box. Here's how to set it up in 10 minutes.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["old iPhone", "upcycling", "setup", "kids"],
    readingTime: 5,
    faqSchema: [
      { question: "Which old iPhone works as a kids music box?", answer: "Any iPhone 6s or newer with iOS 16+ works. These are devices from 2015 onwards, available used for €20–40." },
      { question: "How do I set up an old iPhone as a kids music box?", answer: "1. Install RadauApp free from the App Store. 2. Open parental area and add content. 3. Optionally enable Guided Access. Total setup time: about 10 minutes." },
    ],
    content: `
## Which old iPhone works as a kids music box?

**Any iPhone 6s or newer** with iOS 16+ is compatible. That covers devices from 2015 onwards.

**Compatible models:**
- iPhone 6s / 6s Plus (from ~€20 used)
- iPhone 7 / 7 Plus
- iPhone 8 / 8 Plus
- iPhone X, XS, XR
- iPhone 11 and newer

Used devices are available for **€20–60** – far cheaper than any toy music box.

---

## How do I set up the iPhone as a kids music box?

**4 steps to a finished kids music box:**

1. **Reset iPhone** (optional): Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.
2. **Install RadauApp**: Download free from the App Store.
3. **Set up parental area**: On first launch add content – Apple Music playlists, podcasts, MP3s or web radio.
4. **Enable Guided Access**: Settings → Accessibility → Guided Access. This locks the child into the app.

**Total time: about 10 minutes.**

---

## What does the setup cost?

- RadauApp: **free**
- iPhone 6s used: **~€20–40** (or already at home)
- Apple Music: optional, €10.99/month

Compare: a new Toniebox costs ~€100, each figure €15–20.

---

## Tips for everyday use

- **Get a rugged case** – kids drop things.
- **Connect a speaker** for better sound (Bluetooth or 3.5mm).
- **Disable mobile data**: Settings → Cellular → turn everything off.
- **Set up Screen Time** for additional parental controls.

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── ALTES IPHONE FR ─────────────────────────────────────────────────────
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "fr",
    title: "Réutiliser un ancien iPhone : La parfaite boîte à musique pour enfants",
    description: "Vous avez un ancien iPhone ? Avec RadauApp, transformez-le en lecteur audio sécurisé pour enfants en 10 minutes.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["ancien iPhone", "upcycling", "enfants", "installation"],
    readingTime: 5,
    faqSchema: [
      { question: "Quel ancien iPhone peut servir de lecteur audio pour enfants ?", answer: "Tout iPhone 6s ou plus récent avec iOS 16+ convient. Ces appareils datent de 2015 et sont disponibles d'occasion pour 20–40€." },
      { question: "Comment configurer un ancien iPhone comme lecteur pour enfants ?", answer: "1. Installez RadauApp gratuitement. 2. Ouvrez la zone parentale et ajoutez du contenu. 3. Activez l'accès guidé. Durée totale : environ 10 minutes." },
    ],
    content: `
## Quel ancien iPhone convient comme lecteur audio pour enfants ?

**Tout iPhone 6s ou plus récent** avec iOS 16+ est compatible. Ce sont des appareils à partir de 2015.

**Modèles compatibles :**
- iPhone 6s / 6s Plus (à partir de ~20€ d'occasion)
- iPhone 7 / 7 Plus
- iPhone 8 / 8 Plus
- iPhone X, XS, XR
- iPhone 11 et plus récent

D'occasion, ces appareils coûtent **20–60€** – bien moins cher que n'importe quelle boîte à musique jouet.

---

## Configuration en 4 étapes

1. **Réinitialiser l'iPhone** (optionnel) : Réglages → Général → Transférer ou réinitialiser l'iPhone → Effacer le contenu et les réglages.
2. **Installer RadauApp** : Télécharger gratuitement sur l'App Store.
3. **Configurer l'espace parental** : Ajouter du contenu – playlists Apple Music, podcasts, MP3 ou radio web.
4. **Activer l'accès guidé** : Réglages → Accessibilité → Accès guidé. L'enfant reste dans l'app.

**Durée totale : environ 10 minutes.**

---

## Conseils pour le quotidien

- **Acheter une coque solide** – les enfants font tomber les appareils.
- **Connecter un haut-parleur** pour un meilleur son (Bluetooth ou jack).
- **Désactiver les données mobiles** : Réglages → Données mobiles.
- **Configurer Temps d'écran** pour un contrôle parental supplémentaire.

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── ALTES IPHONE ES ─────────────────────────────────────────────────────
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "es",
    title: "Reutilizar un iPhone antiguo: La caja de música perfecta para niños",
    description: "¿Tienes un iPhone antiguo en casa? Con RadauApp conviértelo en un reproductor de audio seguro para niños en 10 minutos.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["iPhone antiguo", "upcycling", "niños", "configuración"],
    readingTime: 5,
    faqSchema: [
      { question: "¿Qué iPhone antiguo sirve como reproductor de música para niños?", answer: "Cualquier iPhone 6s o más nuevo con iOS 16+ funciona. Son dispositivos desde 2015, disponibles de segunda mano por 20–40€." },
      { question: "¿Cómo configuro un iPhone antiguo como reproductor para niños?", answer: "1. Instala RadauApp gratis. 2. Abre el área parental y añade contenido. 3. Activa el acceso guiado. Tiempo total: unos 10 minutos." },
    ],
    content: `
## ¿Qué iPhone antiguo sirve como reproductor para niños?

**Cualquier iPhone 6s o más nuevo** con iOS 16+ es compatible. Son dispositivos desde 2015.

**Modelos compatibles:**
- iPhone 6s / 6s Plus (desde ~20€ de segunda mano)
- iPhone 7 / 7 Plus
- iPhone 8 / 8 Plus
- iPhone X, XS, XR
- iPhone 11 y más nuevo

De segunda mano cuestan **20–60€** – mucho más barato que cualquier caja de música de juguete.

---

## Configuración en 4 pasos

1. **Restablecer iPhone** (opcional): Ajustes → General → Transferir o restablecer iPhone → Borrar contenido y ajustes.
2. **Instalar RadauApp**: Descargar gratis en la App Store.
3. **Configurar área parental**: Añadir contenido – listas de Apple Music, podcasts, MP3 o radio web.
4. **Activar acceso guiado**: Ajustes → Accesibilidad → Acceso guiado. El niño se queda en la app.

**Tiempo total: unos 10 minutos.**

---

## Consejos para el día a día

- **Comprar una funda resistente** – los niños dejan caer los dispositivos.
- **Conectar un altavoz** para mejor sonido (Bluetooth o jack).
- **Desactivar datos móviles**: Ajustes → Datos móviles.
- **Configurar Tiempo de uso** para control parental adicional.

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── APPLE MUSIC EN ──────────────────────────────────────────────────────
  {
    slug: "apple-music-kinder-einrichten",
    lang: "en",
    title: "Set Up Apple Music for Kids: The Safe Way",
    description: "How to make Apple Music child-safe: Family Sharing, content restrictions and RadauApp as a kid-friendly interface. Step by step.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Apple Music kids", "Family Sharing", "child-safe", "setup"],
    readingTime: 5,
    faqSchema: [
      { question: "How do I make Apple Music child-safe?", answer: "1. Set up Family Sharing. 2. Create a child account. 3. Enable content restrictions. 4. Use RadauApp as a kid-friendly interface with large tiles instead of text." },
      { question: "Can a child use Apple Music independently?", answer: "With RadauApp yes. The app shows large picture tiles instead of text. Children from age 2 can independently select music – no reading skills required." },
    ],
    content: `
## How do I make Apple Music child-safe?

Apple Music alone is not optimised for children – the interface is too complex and there are no built-in parental controls. With the right setup it becomes perfect for kids.

**4 steps to child-friendly Apple Music:**

1. **Set up Family Sharing**: Settings → [Your Name] → Family Sharing → Add Member.
2. **Create child account**: For children under 13, create a separate Apple ID.
3. **Enable content restrictions**: Settings → Screen Time → Content & Privacy Restrictions → Music → select "Clean".
4. **Install RadauApp**: As a child-friendly interface – large tiles, no text, intuitive.

---

## Apple Music pricing

| Plan | Price | People |
|---|---|---|
| Individual | €10.99/month | 1 |
| Family | €16.99/month | up to 6 |
| Apple One Family | €25.95/month | up to 6 + TV, Arcade, iCloud |

---

## Best kids content on Apple Music

- Children's song playlists
- Audiobooks and stories as albums
- Relaxation music for kids
- Classical music for children

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── APPLE MUSIC FR ──────────────────────────────────────────────────────
  {
    slug: "apple-music-kinder-einrichten",
    lang: "fr",
    title: "Configurer Apple Music pour les enfants : La méthode sécurisée",
    description: "Comment sécuriser Apple Music pour les enfants : partage familial, restrictions de contenu et RadauApp comme interface adaptée aux enfants.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Apple Music enfants", "partage familial", "sécurité enfants"],
    readingTime: 5,
    faqSchema: [
      { question: "Comment sécuriser Apple Music pour les enfants ?", answer: "1. Configurer le partage familial. 2. Créer un compte enfant. 3. Activer les restrictions de contenu. 4. Utiliser RadauApp comme interface avec de grandes tuiles au lieu de texte." },
    ],
    content: `
## Comment sécuriser Apple Music pour les enfants ?

**En 4 étapes :**

1. **Configurer le partage familial** : Réglages → [Votre nom] → Partage familial → Ajouter un membre.
2. **Créer un compte enfant** : Pour les moins de 13 ans, créer un identifiant Apple séparé.
3. **Activer les restrictions de contenu** : Réglages → Temps d'écran → Restrictions de contenu et de confidentialité → Musique → sélectionner "Propre".
4. **Installer RadauApp** : Interface adaptée aux enfants avec grandes tuiles, sans texte.

---

## Tarifs Apple Music

| Formule | Prix | Personnes |
|---|---|---|
| Individuel | 10,99€/mois | 1 |
| Famille | 16,99€/mois | jusqu'à 6 |
| Apple One Famille | 25,95€/mois | jusqu'à 6 + TV, Arcade, iCloud |

---

## Meilleurs contenus enfants sur Apple Music

- Playlists de chansons pour enfants
- Livres audio et histoires
- Musique de relaxation pour enfants
- Musique classique pour enfants

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── APPLE MUSIC ES ──────────────────────────────────────────────────────
  {
    slug: "apple-music-kinder-einrichten",
    lang: "es",
    title: "Configurar Apple Music para niños: La forma segura",
    description: "Cómo hacer Apple Music seguro para niños: compartir en familia, restricciones de contenido y RadauApp como interfaz infantil.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Apple Music niños", "compartir en familia", "seguridad niños"],
    readingTime: 5,
    faqSchema: [
      { question: "¿Cómo hago Apple Music seguro para niños?", answer: "1. Configurar compartir en familia. 2. Crear cuenta infantil. 3. Activar restricciones de contenido. 4. Usar RadauApp como interfaz con mosaicos grandes en lugar de texto." },
    ],
    content: `
## ¿Cómo hago Apple Music seguro para niños?

**En 4 pasos:**

1. **Configurar compartir en familia**: Ajustes → [Tu nombre] → Compartir en familia → Añadir miembro.
2. **Crear cuenta infantil**: Para menores de 13 años, crear un Apple ID separado.
3. **Activar restricciones de contenido**: Ajustes → Tiempo de uso → Restricciones de contenido y privacidad → Música → seleccionar "Limpio".
4. **Instalar RadauApp**: Interfaz adaptada con mosaicos grandes, sin texto.

---

## Precios de Apple Music

| Plan | Precio | Personas |
|---|---|---|
| Individual | 10,99€/mes | 1 |
| Familia | 16,99€/mes | hasta 6 |
| Apple One Familia | 25,95€/mes | hasta 6 + TV, Arcade, iCloud |

---

## Mejores contenidos para niños en Apple Music

- Listas de canciones infantiles
- Audiolibros e historias
- Música de relajación para niños
- Música clásica para niños

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── HOERSPIELE EN ───────────────────────────────────────────────────────
  {
    slug: "hoerspiele-kinder-kostenlos",
    lang: "en",
    title: "Free Audiobooks and Podcasts for Kids: The Best Sources",
    description: "Where to find free kids' audiobooks and podcasts? We list the best sources and show how to use them in RadauApp.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["free kids podcasts", "audiobooks kids", "children radio"],
    readingTime: 4,
    faqSchema: [
      { question: "Where can I find free audiobooks for kids?", answer: "Free kids' audiobooks and podcasts are available at: Apple Podcasts, Spotify (free with ads), BBC Sounds, LibriVox (public domain), and many public radio stations." },
      { question: "Are audiobooks good for children?", answer: "Yes. Audiobooks improve language comprehension and vocabulary, stimulate imagination, require no screen time, help children relax, and improve concentration." },
    ],
    content: `
## Where can I find free audiobooks and podcasts for kids?

There are many excellent and completely free sources for children's audio content.

**Best free sources:**

- **Apple Podcasts**: Thousands of kids' podcasts, completely free.
- **Spotify**: Free with ads, many children's shows.
- **BBC Sounds**: High-quality children's content, free.
- **LibriVox**: Public domain audiobooks, completely free.
- **Public radio stations**: Many offer free kids' content streams.

---

## Best free kids' podcasts (English)

| Podcast | Provider | Age group |
|---|---|---|
| Story Pirates | Spotify/Apple | 4–10 years |
| Brains On! | APM | 6–12 years |
| But Why: A Podcast for Curious Kids | VPR | 4–10 years |
| Circle Round | WBUR | 4–10 years |
| Wow in the World | NPR | 5–12 years |

---

## How do I use these podcasts in RadauApp?

**3 steps:**

1. **Copy the feed URL**: Find the RSS feed URL for the desired podcast.
2. **Open RadauApp**: Go to the parental area.
3. **Add the feed**: Paste the URL, choose a cover image – done.

The child then only sees the tile image and can start the podcast with a tap – no reading, no searching.

---

## Why are audiobooks good for children?

- Improve language comprehension and vocabulary.
- Stimulate imagination and creativity.
- No screen time – good for eyes.
- Help children relax and fall asleep.
- Improve concentration and attention span.

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── HOERSPIELE FR ───────────────────────────────────────────────────────
  {
    slug: "hoerspiele-kinder-kostenlos",
    lang: "fr",
    title: "Livres audio et podcasts gratuits pour enfants : Les meilleures sources",
    description: "Où trouver des livres audio et podcasts gratuits pour enfants ? Nous listons les meilleures sources et montrons comment les utiliser dans RadauApp.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["podcasts enfants gratuits", "livres audio enfants"],
    readingTime: 4,
    faqSchema: [
      { question: "Où trouver des livres audio gratuits pour enfants ?", answer: "Des livres audio et podcasts gratuits pour enfants sont disponibles sur : Apple Podcasts, Spotify (gratuit avec pub), Radio France, France Inter, LibriVox." },
    ],
    content: `
## Où trouver des livres audio et podcasts gratuits pour enfants ?

**Meilleures sources gratuites :**

- **Apple Podcasts** : Des milliers de podcasts enfants, totalement gratuits.
- **Spotify** : Gratuit avec publicité, nombreux contenus enfants.
- **Radio France / France Inter** : Contenus de qualité, gratuits.
- **LibriVox** : Livres audio du domaine public, totalement gratuits.
- **ARTE** : Contenus culturels pour enfants, gratuits.

---

## Meilleurs podcasts enfants gratuits (français)

| Podcast | Fournisseur | Âge |
|---|---|---|
| Les P'tits Bateaux | France Inter | 5–10 ans |
| Méli-Mélo | France Info | 4–8 ans |
| L'Heure des histoires | Radio France | 3–8 ans |
| Karambolage | ARTE | 6–12 ans |

---

## Pourquoi les livres audio sont-ils bons pour les enfants ?

- Améliorent la compréhension du langage et le vocabulaire.
- Stimulent l'imagination et la créativité.
- Pas de temps d'écran – bon pour les yeux.
- Aident les enfants à se détendre et à s'endormir.
- Améliorent la concentration.

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── HOERSPIELE ES ───────────────────────────────────────────────────────
  {
    slug: "hoerspiele-kinder-kostenlos",
    lang: "es",
    title: "Audiolibros y podcasts gratuitos para niños: Las mejores fuentes",
    description: "¿Dónde encontrar audiolibros y podcasts gratuitos para niños? Listamos las mejores fuentes y mostramos cómo usarlos en RadauApp.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["podcasts niños gratis", "audiolibros niños"],
    readingTime: 4,
    faqSchema: [
      { question: "¿Dónde encontrar audiolibros gratuitos para niños?", answer: "Audiolibros y podcasts gratuitos para niños en: Apple Podcasts, Spotify (gratis con anuncios), RTVE, Radio Nacional, LibriVox." },
    ],
    content: `
## ¿Dónde encontrar audiolibros y podcasts gratuitos para niños?

**Mejores fuentes gratuitas:**

- **Apple Podcasts**: Miles de podcasts infantiles, completamente gratis.
- **Spotify**: Gratis con anuncios, muchos contenidos para niños.
- **RTVE / Radio Nacional**: Contenidos de calidad, gratis.
- **LibriVox**: Audiolibros de dominio público, totalmente gratis.
- **iVoox**: Gran catálogo de podcasts en español, gratis.

---

## Mejores podcasts infantiles gratuitos (español)

| Podcast | Proveedor | Edad |
|---|---|---|
| Cuentos en familia | RTVE | 3–8 años |
| El Condensador de Flux | iVoox | 6–12 años |
| Radio Patio | Independiente | 4–10 años |

---

## ¿Por qué son buenos los audiolibros para niños?

- Mejoran la comprensión del lenguaje y el vocabulario.
- Estimulan la imaginación y la creatividad.
- Sin tiempo de pantalla – bueno para los ojos.
- Ayudan a los niños a relajarse y dormirse.
- Mejoran la concentración.

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── NACHHALTIGKEIT EN ───────────────────────────────────────────────────
  {
    slug: "nachhaltiges-kinderspielzeug-digitales",
    lang: "en",
    title: "Sustainable Digital Kids' Toys: Upcycling Instead of Buying New",
    description: "Digital toys don't always have to be new. We show why an old iPhone as a kids' music box is more sustainable than Toniebox and similar products.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["sustainable toys", "upcycling", "e-waste", "Toniebox"],
    readingTime: 4,
    faqSchema: [
      { question: "What is sustainable digital kids' entertainment?", answer: "Sustainable digital entertainment uses existing devices instead of buying new ones. An old iPhone with RadauApp is more sustainable than a new Toniebox because no new plastic is produced and e-waste is avoided." },
    ],
    content: `
## What is sustainable digital kids' entertainment?

Sustainable digital entertainment avoids producing new devices and instead uses existing hardware.

**The principle: upcycling instead of buying new**
- Old iPhone → kids' music box
- No new plastic produced
- No new e-waste created
- Resources saved

---

## How sustainable are Toniebox and similar products?

| Product | New plastic | Battery required | Figures needed |
|---|---|---|---|
| Toniebox | ~300g box + figures | ✅ | ✅ Required |
| Tigerbox | ~200g | ✅ | ❌ |
| **RadauApp** | **0g** | ❌ Mains powered | ❌ |

**Every Tonie figure is about 30–50g of plastic** – 10 figures means 300–500g of new production.

---

## Why is an old iPhone more sustainable?

- The device already exists – no new CO₂ from production.
- No new plastic for casing or figures.
- Longer device lifespan = less e-waste.
- No batteries required (mains or existing cable).

**5 simple steps for more sustainable kids' entertainment:**

1. Find the old iPhone in the drawer.
2. Install RadauApp for free.
3. Use existing Apple Music content.
4. Add free podcasts.
5. Don't buy a new toy device.

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── NACHHALTIGKEIT FR ───────────────────────────────────────────────────
  {
    slug: "nachhaltiges-kinderspielzeug-digitales",
    lang: "fr",
    title: "Jouets numériques durables pour enfants : Upcycling plutôt qu'achat neuf",
    description: "Les jouets numériques ne doivent pas toujours être neufs. Nous montrons pourquoi un ancien iPhone est plus durable que la Toniebox.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["jouets durables", "upcycling", "déchets électroniques"],
    readingTime: 4,
    faqSchema: [
      { question: "Qu'est-ce que le divertissement numérique durable pour enfants ?", answer: "Le divertissement numérique durable utilise des appareils existants au lieu d'en acheter de nouveaux. Un ancien iPhone avec RadauApp est plus durable car aucun nouveau plastique n'est produit." },
    ],
    content: `
## Qu'est-ce que le divertissement numérique durable pour enfants ?

Le divertissement numérique durable évite de produire de nouveaux appareils et utilise le matériel existant.

**Le principe : upcycling plutôt qu'achat neuf**
- Ancien iPhone → lecteur audio pour enfants
- Aucun nouveau plastique produit
- Aucun nouveau déchet électronique
- Ressources économisées

---

## Comparaison de durabilité

| Produit | Nouveau plastique | Piles nécessaires | Figurines requises |
|---|---|---|---|
| Toniebox | ~300g boîte + figurines | ✅ | ✅ Obligatoires |
| Tigerbox | ~200g | ✅ | ❌ |
| **RadauApp** | **0g** | ❌ Alimentation secteur | ❌ |

---

## 5 étapes simples pour un divertissement plus durable

1. Retrouver l'ancien iPhone dans le tiroir.
2. Installer RadauApp gratuitement.
3. Utiliser le contenu Apple Music existant.
4. Ajouter des podcasts gratuits.
5. Ne pas acheter de nouvel appareil jouet.

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── NACHHALTIGKEIT ES ───────────────────────────────────────────────────
  {
    slug: "nachhaltiges-kinderspielzeug-digitales",
    lang: "es",
    title: "Juguetes digitales sostenibles: Upcycling en lugar de comprar nuevo",
    description: "Los juguetes digitales no siempre tienen que ser nuevos. Mostramos por qué un iPhone antiguo es más sostenible que la Toniebox.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["juguetes sostenibles", "upcycling", "residuos electrónicos"],
    readingTime: 4,
    faqSchema: [
      { question: "¿Qué es el entretenimiento digital sostenible para niños?", answer: "El entretenimiento digital sostenible usa dispositivos existentes en lugar de comprar nuevos. Un iPhone antiguo con RadauApp es más sostenible porque no se produce nuevo plástico." },
    ],
    content: `
## ¿Qué es el entretenimiento digital sostenible para niños?

El entretenimiento digital sostenible evita producir nuevos dispositivos y usa el hardware existente.

**El principio: upcycling en lugar de comprar nuevo**
- iPhone antiguo → reproductor de audio para niños
- No se produce nuevo plástico
- No se generan nuevos residuos electrónicos
- Recursos ahorrados

---

## Comparación de sostenibilidad

| Producto | Plástico nuevo | Pilas necesarias | Figuras requeridas |
|---|---|---|---|
| Toniebox | ~300g caja + figuras | ✅ | ✅ Obligatorias |
| Tigerbox | ~200g | ✅ | ❌ |
| **RadauApp** | **0g** | ❌ Alimentación red | ❌ |

---

## 5 pasos simples para un entretenimiento más sostenible

1. Encontrar el iPhone antiguo en el cajón.
2. Instalar RadauApp gratis.
3. Usar el contenido de Apple Music existente.
4. Añadir podcasts gratuitos.
5. No comprar un nuevo dispositivo de juguete.

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── GEFÜHRTER ZUGRIFF DE ────────────────────────────────────────────────
  {
    slug: "gefuehrter-zugriff-kinder-iphone",
    lang: "de",
    title: "Geführter Zugriff iPhone: So sperrt du dein Kind sicher in einer App",
    description: "Der geführte Zugriff auf dem iPhone ist die wichtigste Kindersicherung für die RadauApp. So richtest du ihn ein – und warum er unverzichtbar ist.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["geführter Zugriff", "iPhone Kindersicherung", "Bildschirmzeit", "Kinder"],
    readingTime: 5,
    faqSchema: [
      { question: "Was ist der geführte Zugriff beim iPhone?", answer: "Der geführte Zugriff (Guided Access) ist eine iOS-Funktion, die das iPhone auf eine einzige App beschränkt. Das Kind kann nicht zur Startseite wechseln, keine anderen Apps öffnen und keine Einstellungen ändern." },
      { question: "Wie aktiviere ich den geführten Zugriff auf dem iPhone?", answer: "1. Einstellungen → Bedienungshilfen → Geführter Zugriff → aktivieren. 2. Code festlegen. 3. Gewünschte App öffnen. 4. Dreimal auf den Seitenknopf (oder Home-Taste) drücken. 5. 'Starten' tippen." },
      { question: "Wie beende ich den geführten Zugriff?", answer: "Dreimal auf den Seitenknopf (oder Home-Taste) drücken, den Code eingeben und 'Beenden' tippen. Face ID oder Touch ID können ebenfalls zum Beenden genutzt werden." },
      { question: "Kann der geführte Zugriff einzelne Bildschirmbereiche sperren?", answer: "Ja. Beim Starten des geführten Zugriffs können Bereiche des Bildschirms mit dem Finger umkreist und damit deaktiviert werden. So können bestimmte Buttons oder Bereiche für das Kind gesperrt werden." },
    ],
    content: `
## Was ist der geführte Zugriff beim iPhone?

Der **geführte Zugriff** (englisch: Guided Access) ist eine eingebaute iOS-Funktion, die das iPhone vollständig auf eine einzige App beschränkt.

**Was der geführte Zugriff verhindert:**
- Wechsel zur Startseite
- Öffnen anderer Apps
- Ändern von Einstellungen
- Aufrufen des Kontrollzentrums
- Nutzung der Suchfunktion

**Warum das für Kinder essentiell ist:**
- Das Kind bleibt in der RadauApp – ohne Ablenkung.
- Keine unbeabsichtigten Käufe oder Einstellungsänderungen.
- Kein Zugriff auf Social Media, Browser oder andere Inhalte.
- Eltern können das Gerät entspannt aus der Hand geben.

---

## Wie aktiviere ich den geführten Zugriff?

**Einmalige Einrichtung (2 Minuten):**

1. Einstellungen öffnen.
2. Bedienungshilfen antippen.
3. Geführter Zugriff antippen.
4. Geführter Zugriff einschalten.
5. Code-Einstellungen antippen und einen 6-stelligen Code festlegen.
6. Optional: Face ID oder Touch ID zum Beenden aktivieren.

**Geführten Zugriff für eine Session starten:**

1. RadauApp öffnen.
2. Dreimal schnell auf den Seitenknopf drücken (iPhone ohne Home-Taste) oder dreimal auf die Home-Taste drücken (ältere iPhones).
3. Unten "Starten" antippen.
4. Das iPhone ist jetzt auf die RadauApp beschränkt.

---

## Wie beende ich den geführten Zugriff?

**3 Möglichkeiten:**

- Dreimal auf Seitenknopf / Home-Taste drücken → Code eingeben → "Beenden" antippen.
- Face ID (wenn aktiviert): Dreimal auf Seitenknopf drücken → Face ID scannen.
- Touch ID (wenn aktiviert): Dreimal auf Home-Taste drücken → Finger auflegen.

---

## Kann ich bestimmte Bereiche des Bildschirms sperren?

**Ja – das ist besonders nützlich für Kinder.**

Beim Starten des geführten Zugriffs:

1. Mit dem Finger einen Bereich auf dem Bildschirm umkreisen, der deaktiviert werden soll.
2. Der umkreiste Bereich wird gesperrt – Tippen hat dort keine Wirkung.

**Anwendungsbeispiel in der RadauApp:**
- Den Elternbereich-Button umkreisen und sperren.
- Das Kind sieht den Button, kann ihn aber nicht antippen.

---

## Geführter Zugriff vs. Bildschirmzeit: Was ist der Unterschied?

| Funktion | Geführter Zugriff | Bildschirmzeit |
|---|---|---|
| Beschränkt auf eine App | ✅ | ❌ |
| Zeitlimits pro App | ❌ | ✅ |
| Bestimmte Apps sperren | ❌ | ✅ |
| Bildschirmbereiche sperren | ✅ | ❌ |
| Sofortige Aktivierung | ✅ | ❌ |
| Für einzelne Sessions | ✅ | ❌ |

**Empfehlung:** Beide Funktionen kombinieren – Bildschirmzeit für allgemeine Limits, geführter Zugriff für die RadauApp-Session.

---

## Tipps für den Alltag

- **Code nicht vergessen**: Notiere ihn sicher – ohne Code ist das iPhone im geführten Zugriff gesperrt.
- **Automatisches Beenden**: Unter "Zeitlimit" kann eine maximale Nutzungszeit festgelegt werden.
- **Kurzbefehl deaktivieren**: Wenn der Dreifach-Klick für andere Funktionen genutzt wird, kann der geführte Zugriff auch über die Bedienungshilfen gestartet werden.

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── GEFÜHRTER ZUGRIFF EN ────────────────────────────────────────────────
  {
    slug: "gefuehrter-zugriff-kinder-iphone",
    lang: "en",
    title: "iPhone Guided Access for Kids: How to Lock Your Child in One App",
    description: "Guided Access on iPhone is the most important parental control for RadauApp. Here's how to set it up – and why it's essential.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Guided Access", "iPhone parental control", "Screen Time", "kids"],
    readingTime: 5,
    faqSchema: [
      { question: "What is Guided Access on iPhone?", answer: "Guided Access is a built-in iOS feature that restricts the iPhone to a single app. The child cannot go to the home screen, open other apps or change settings." },
      { question: "How do I enable Guided Access on iPhone?", answer: "1. Settings → Accessibility → Guided Access → enable. 2. Set a passcode. 3. Open the desired app. 4. Triple-click the side button (or Home button). 5. Tap 'Start'." },
      { question: "How do I end Guided Access?", answer: "Triple-click the side button (or Home button), enter the passcode and tap 'End'. Face ID or Touch ID can also be used to end a session." },
      { question: "Can Guided Access disable parts of the screen?", answer: "Yes. When starting Guided Access, circle areas of the screen with your finger to disable them. This prevents tapping specific buttons or areas." },
    ],
    content: `
## What is Guided Access on iPhone?

**Guided Access** is a built-in iOS feature that fully restricts the iPhone to a single app.

**What Guided Access prevents:**
- Switching to the home screen
- Opening other apps
- Changing settings
- Accessing Control Centre
- Using the search function

**Why this is essential for kids:**
- The child stays in RadauApp – without distraction.
- No accidental purchases or settings changes.
- No access to social media, browsers or other content.
- Parents can confidently hand over the device.

---

## How do I enable Guided Access?

**One-time setup (2 minutes):**

1. Open Settings.
2. Tap Accessibility.
3. Tap Guided Access.
4. Turn on Guided Access.
5. Tap Passcode Settings and set a 6-digit passcode.
6. Optional: enable Face ID or Touch ID to end sessions.

**Starting a Guided Access session:**

1. Open RadauApp.
2. Triple-click the side button quickly (iPhone without Home button) or triple-click the Home button (older iPhones).
3. Tap "Start" at the bottom.
4. The iPhone is now restricted to RadauApp.

---

## How do I end Guided Access?

**3 options:**

- Triple-click side button / Home button → enter passcode → tap "End".
- Face ID (if enabled): Triple-click side button → scan Face ID.
- Touch ID (if enabled): Triple-click Home button → place finger.

---

## Can I disable parts of the screen?

**Yes – especially useful for children.**

When starting Guided Access:

1. Circle an area on the screen that should be disabled.
2. The circled area is locked – tapping has no effect there.

**Example in RadauApp:**
- Circle and lock the parental area button.
- The child can see the button but cannot tap it.

---

## Guided Access vs. Screen Time: What's the difference?

| Feature | Guided Access | Screen Time |
|---|---|---|
| Restrict to one app | ✅ | ❌ |
| Time limits per app | ❌ | ✅ |
| Block specific apps | ❌ | ✅ |
| Lock screen areas | ✅ | ❌ |
| Instant activation | ✅ | ❌ |
| For single sessions | ✅ | ❌ |

**Recommendation:** Combine both – Screen Time for general limits, Guided Access for RadauApp sessions.

**[Download RadauApp free →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── GEFÜHRTER ZUGRIFF FR ────────────────────────────────────────────────
  {
    slug: "gefuehrter-zugriff-kinder-iphone",
    lang: "fr",
    title: "Accès guidé iPhone pour enfants : Comment bloquer votre enfant dans une app",
    description: "L'accès guidé sur iPhone est le contrôle parental le plus important pour RadauApp. Voici comment le configurer – et pourquoi c'est indispensable.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["accès guidé", "contrôle parental iPhone", "Temps d'écran", "enfants"],
    readingTime: 5,
    faqSchema: [
      { question: "Qu'est-ce que l'accès guidé sur iPhone ?", answer: "L'accès guidé est une fonction iOS intégrée qui restreint l'iPhone à une seule application. L'enfant ne peut pas aller à l'écran d'accueil, ouvrir d'autres apps ou modifier les réglages." },
      { question: "Comment activer l'accès guidé sur iPhone ?", answer: "1. Réglages → Accessibilité → Accès guidé → activer. 2. Définir un code. 3. Ouvrir l'app souhaitée. 4. Appuyer trois fois sur le bouton latéral. 5. Appuyer sur 'Démarrer'." },
      { question: "Comment terminer l'accès guidé ?", answer: "Appuyer trois fois sur le bouton latéral, saisir le code et appuyer sur 'Terminer'. Face ID ou Touch ID peuvent également être utilisés." },
    ],
    content: `
## Qu'est-ce que l'accès guidé sur iPhone ?

**L'accès guidé** est une fonction iOS intégrée qui restreint complètement l'iPhone à une seule application.

**Ce que l'accès guidé empêche :**
- Retour à l'écran d'accueil
- Ouverture d'autres applications
- Modification des réglages
- Accès au Centre de contrôle
- Utilisation de la recherche

**Pourquoi c'est essentiel pour les enfants :**
- L'enfant reste dans RadauApp – sans distraction.
- Pas d'achats accidentels ni de modifications de réglages.
- Pas d'accès aux réseaux sociaux, navigateurs ou autres contenus.

---

## Comment activer l'accès guidé ?

**Configuration unique (2 minutes) :**

1. Ouvrir Réglages.
2. Appuyer sur Accessibilité.
3. Appuyer sur Accès guidé.
4. Activer l'accès guidé.
5. Appuyer sur Réglages du code et définir un code à 6 chiffres.
6. Optionnel : activer Face ID ou Touch ID pour terminer les sessions.

**Démarrer une session d'accès guidé :**

1. Ouvrir RadauApp.
2. Appuyer trois fois rapidement sur le bouton latéral.
3. Appuyer sur "Démarrer" en bas.
4. L'iPhone est maintenant limité à RadauApp.

---

## Accès guidé vs. Temps d'écran : Quelle différence ?

| Fonction | Accès guidé | Temps d'écran |
|---|---|---|
| Limiter à une app | ✅ | ❌ |
| Limites de temps par app | ❌ | ✅ |
| Bloquer des apps spécifiques | ❌ | ✅ |
| Bloquer des zones d'écran | ✅ | ❌ |
| Activation instantanée | ✅ | ❌ |

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },

  // ─── GEFÜHRTER ZUGRIFF ES ────────────────────────────────────────────────
  {
    slug: "gefuehrter-zugriff-kinder-iphone",
    lang: "es",
    title: "Acceso guiado iPhone para niños: Cómo bloquear a tu hijo en una app",
    description: "El acceso guiado en iPhone es el control parental más importante para RadauApp. Cómo configurarlo – y por qué es indispensable.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["acceso guiado", "control parental iPhone", "Tiempo de uso", "niños"],
    readingTime: 5,
    faqSchema: [
      { question: "¿Qué es el acceso guiado en iPhone?", answer: "El acceso guiado es una función iOS integrada que restringe el iPhone a una sola aplicación. El niño no puede ir a la pantalla de inicio, abrir otras apps ni cambiar ajustes." },
      { question: "¿Cómo activo el acceso guiado en iPhone?", answer: "1. Ajustes → Accesibilidad → Acceso guiado → activar. 2. Establecer un código. 3. Abrir la app deseada. 4. Pulsar tres veces el botón lateral. 5. Pulsar 'Iniciar'." },
      { question: "¿Cómo termino el acceso guiado?", answer: "Pulsar tres veces el botón lateral, introducir el código y pulsar 'Finalizar'. Face ID o Touch ID también pueden usarse para terminar la sesión." },
    ],
    content: `
## ¿Qué es el acceso guiado en iPhone?

**El acceso guiado** es una función iOS integrada que restringe completamente el iPhone a una sola aplicación.

**Lo que el acceso guiado evita:**
- Volver a la pantalla de inicio
- Abrir otras aplicaciones
- Cambiar ajustes
- Acceder al Centro de control
- Usar la búsqueda

**Por qué es esencial para niños:**
- El niño permanece en RadauApp – sin distracciones.
- Sin compras accidentales ni cambios de ajustes.
- Sin acceso a redes sociales, navegadores u otros contenidos.

---

## ¿Cómo activo el acceso guiado?

**Configuración única (2 minutos):**

1. Abrir Ajustes.
2. Pulsar Accesibilidad.
3. Pulsar Acceso guiado.
4. Activar el acceso guiado.
5. Pulsar Ajustes del código y establecer un código de 6 dígitos.
6. Opcional: activar Face ID o Touch ID para terminar sesiones.

**Iniciar una sesión de acceso guiado:**

1. Abrir RadauApp.
2. Pulsar tres veces rápidamente el botón lateral.
3. Pulsar "Iniciar" en la parte inferior.
4. El iPhone ahora está limitado a RadauApp.

---

## Acceso guiado vs. Tiempo de uso: ¿Cuál es la diferencia?

| Función | Acceso guiado | Tiempo de uso |
|---|---|---|
| Limitar a una app | ✅ | ❌ |
| Límites de tiempo por app | ❌ | ✅ |
| Bloquear apps específicas | ❌ | ✅ |
| Bloquear zonas de pantalla | ✅ | ❌ |
| Activación instantánea | ✅ | ❌ |

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
