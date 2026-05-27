# RadauApp – Landing Page

> Die offizielle Landing Page für die [RadauApp](https://apps.apple.com/de/app/radauapp/id6745492017) – die nachhaltige Kinder-Jukebox für iOS.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jnsn-b/RadauApp-page)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![Vercel](https://img.shields.io/badge/Hosted-Vercel-black)
![License](https://img.shields.io/badge/License-Private-red)

---

## 📱 Über die RadauApp

Die RadauApp verwandelt ein altes iPhone in eine kindersichere Musikbox – als nachhaltige Alternative zur Toniebox. Entwickelt von Jens Becker, Vater von zwei kleinen Jungs und DJ, ursprünglich als Tonuino-Hardwareprojekt gestartet und dann als iOS-App umgesetzt.

**Unterstützte Inhalte:**
- Apple Music Playlists & Alben
- Eigene MP3-Dateien
- Podcast-Feeds (RSS)
- Webradio-Sender

**Download:** [App Store](https://apps.apple.com/de/app/radauapp/id6745492017)

---

## 🏗️ Tech Stack

| Technologie | Version | Zweck |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.3 | React Framework |
| [React](https://react.dev) | 18.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Typsicherheit |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Styling |
| [shadcn/ui](https://ui.shadcn.com) | latest | UI Komponenten |
| [Lucide React](https://lucide.dev) | 0.475 | Icons |
| [Vercel Analytics](https://vercel.com/analytics) | 1.3 | Besucher-Tracking |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | 1.0 | Performance-Monitoring |

**Hosting:** [Vercel](https://vercel.com) (Hobby Plan)  
**Domain:** [radau.app](https://radau.app) via IONOS  
**Repository:** [github.com/jnsn-b/RadauApp-page](https://github.com/jnsn-b/RadauApp-page)

---

## 📁 Projektstruktur

```
RadauApp-page/
├── public/                          # Statische Assets
│   ├── og-image.png                 # Social Media / AI Overview Bild (1200×630px)
│   ├── RadauAppLogo.png             # App-Logo
│   ├── AppStoreButton.svg           # App Store Badge
│   ├── kid.webp                     # Hero-Bild
│   ├── usage.webp                   # Nutzungs-Bild
│   ├── 1_DE.webp – 6_FR.webp       # App-Screenshots (DE/EN/FR/ES × 6)
│   └── robots.txt                   # SEO: Crawler-Anweisungen
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Root Layout (Metadata, Analytics, Fonts)
│   │   ├── page.tsx                 # Startseite (Schema.org: SoftwareApplication + Organization)
│   │   ├── home-client.tsx          # Client-Komponente der Startseite
│   │   ├── sitemap.ts               # Dynamische Sitemap (inkl. alle Blog-Routen)
│   │   ├── blog/
│   │   │   ├── page.tsx             # Blog-Übersicht (SSG)
│   │   │   ├── blog-client.tsx      # Blog-Übersicht Client-Komponente
│   │   │   └── [slug]/
│   │   │       ├── page.tsx         # Blog-Artikel (SSG, generateStaticParams)
│   │   │       └── blog-post-client.tsx  # Artikel-Renderer mit Markdown-Parser
│   │   ├── impressum/               # Impressum
│   │   └── datenschutz/             # Datenschutzerklärung
│   │
│   ├── components/                  # Wiederverwendbare Komponenten
│   │   ├── header.tsx               # Navigation (Logo, Blog-Link, Sprach-Switcher, App Store Button)
│   │   ├── footer.tsx               # Footer (mehrsprachig)
│   │   ├── hero-section.tsx         # Hero-Bereich der Startseite
│   │   ├── benefits-section.tsx     # Vorteile-Sektion
│   │   ├── services-section.tsx     # Features-Sektion
│   │   ├── work-section.tsx         # Anwendungsbeispiele
│   │   ├── cta-section.tsx          # Call-to-Action
│   │   ├── app-store-cta-button.tsx # App Store Button Komponente
│   │   ├── cookie-banner.tsx        # DSGVO Cookie-Banner
│   │   └── ui/                      # shadcn/ui Komponenten
│   │
│   └── lib/
│       └── blog.ts                  # Blog-Datenbibliothek (alle Artikel, Übersetzungen, Typen)
│
├── .github/                         # (leer – Firebase Workflows entfernt)
├── firebase.json                    # Firebase-Konfiguration (veraltet, nicht aktiv)
├── .firebaserc                      # Firebase Projekt-Referenz (veraltet)
├── vercel.json                      # Vercel-Konfiguration
├── next.config.ts                   # Next.js Konfiguration
├── tailwind.config.ts               # Tailwind Konfiguration
├── tsconfig.json                    # TypeScript Konfiguration
└── package.json                     # Dependencies
```

---

## 🌍 Mehrsprachigkeit

Die Seite ist vollständig in 4 Sprachen verfügbar:

| Sprache | Code | Status |
|---|---|---|
| Deutsch | `de` | ✅ Vollständig |
| Englisch | `en` | ✅ Vollständig |
| Französisch | `fr` | ✅ Vollständig |
| Spanisch | `es` | ✅ Vollständig |

Die Sprache wird clientseitig per Dropdown umgeschaltet (kein URL-Routing). Der gewählte Sprachzustand wird per React State verwaltet und an alle Komponenten weitergegeben.

---

## 📝 Blog-System

Der Blog ist vollständig in `src/lib/blog.ts` als TypeScript-Datei implementiert – kein CMS, kein Markdown-Parser als Dependency, kein Headless CMS. Alle Artikel sind direkt im Code als strukturierte Objekte gespeichert.

### Artikel-Struktur

```typescript
interface BlogPost {
  slug: string;           // URL-Slug
  lang: Language;         // "de" | "en" | "fr" | "es"
  title: string;          // SEO-Titel
  description: string;    // Meta Description
  date: string;           // ISO 8601
  author: string;         // Autor
  tags: string[];         // Keywords für SEO
  content: string;        // Markdown-ähnlicher Inhalt
  readingTime: number;    // Lesezeit in Minuten
  faqSchema?: {           // FAQ Schema.org für Google AI Overviews
    question: string;
    answer: string;
  }[];
}
```

### Vorhandene Artikel

| Slug | DE | EN | FR | ES | Thema |
|---|---|---|---|---|---|
| `toniebox-alternative` | ✅ | ✅ | ✅ | ✅ | Vergleich mit Toniebox |
| `altes-iphone-kindermusikbox` | ✅ | ✅ | – | – | Setup-Guide |
| `apple-music-kinder-einrichten` | ✅ | – | – | – | Apple Music kindersicher |
| `hoerspiele-kinder-kostenlos` | ✅ | – | – | – | Kostenlose Hörspiele |
| `nachhaltiges-kinderspielzeug-digitales` | ✅ | – | – | – | Nachhaltigkeit |
| `unsere-geschichte` | ✅ | ✅ | ✅ | ✅ | Gründergeschichte |
| `yoto-player-alternative` | ✅ | ✅ | ✅ | ✅ | Vergleich mit Yoto Player |
| `tigerbox-alternative` | ✅ | ✅ | ✅ | ✅ | Vergleich mit Tigerbox |
| `iphone-kinder-ohne-apple-id` | ✅ | ✅ | ✅ | ✅ | iPhone ohne Apple ID |
| `beste-kindermusik-geraete` | ✅ | ✅ | ✅ | ✅ | Top-5-Vergleich |
| `gefuehrter-zugriff-kinder-iphone` | ✅ | ✅ | ✅ | ✅ | Guided Access |
| `ipad-kindermusikbox` | ✅ | ✅ | – | – | iPad als Musikbox |

### Neuen Artikel hinzufügen

```typescript
// In src/lib/blog.ts, innerhalb des blogPosts-Arrays:
{
  slug: "mein-neuer-artikel",
  lang: "de",
  title: "Titel des Artikels",
  description: "Meta Description (max. 160 Zeichen)",
  date: "2026-06-01",
  author: "Jens Becker",
  tags: ["keyword1", "keyword2"],
  readingTime: 5,
  faqSchema: [
    {
      question: "Häufige Frage?",
      answer: "Kurze, präzise Antwort für Google AI Overviews."
    }
  ],
  content: `
## H2-Überschrift als Frage formulieren

Kurze Antwort direkt im ersten Absatz – für Featured Snippets.

**Aufzählung:**
- Punkt 1
- Punkt 2

| Spalte 1 | Spalte 2 |
|---|---|
| Wert | Wert |
  `
}
```

### Markdown-Rendering

Der Blog-Post-Client enthält einen eigenen minimalen Markdown-Renderer (`renderMarkdown`) der folgende Syntax unterstützt:

- `## Überschrift` → `<h2>`
- `### Überschrift` → `<h3>`
- `**fett**` → `<strong>`
- `[Link](url)` → `<a>`
- `- Listenpunkt` → `<ul><li>`
- `| Tabelle |` → `<table>` mit Tailwind-Styling

---

## 🔍 SEO-Strategie

### Technisches SEO

| Maßnahme | Status | Details |
|---|---|---|
| Meta Tags | ✅ | Title, Description, Keywords auf allen Seiten |
| Open Graph | ✅ | og:title, og:description, og:image (1200×630px) |
| Twitter Cards | ✅ | summary_large_image |
| Canonical Tags | ✅ | Auf allen Seiten gesetzt |
| robots.txt | ✅ | `public/robots.txt` mit Sitemap-Verweis |
| Sitemap | ✅ | Dynamisch generiert via `src/app/sitemap.ts` |
| Schema.org | ✅ | SoftwareApplication, Organization, BlogPosting, FAQPage |
| hreflang | ✅ | DE/EN/FR/ES auf Blog-Seiten |
| Core Web Vitals | ✅ | Vercel Speed Insights aktiv |

### Schema.org Markup

**Startseite (`page.tsx`):**
- `SoftwareApplication` – App-Details, Rating, Preis, Author
- `Organization` – Firmeninfo, Founder, Kontakt

**Blog-Artikel (`blog/[slug]/page.tsx`):**
- `BlogPosting` – Titel, Beschreibung, Datum, Author, Publisher
- `FAQPage` – Fragen & Antworten für Google AI Overviews (wo vorhanden)

### Content-SEO

Die Blog-Artikel sind nach dem **Featured Snippet / AI Overview Prinzip** strukturiert:

1. **H2-Überschriften als Fragen** – z.B. „Was ist eine gute Alternative zur Toniebox?"
2. **Direkte Antwort im ersten Absatz** – ohne Einleitung
3. **Aufzählungslisten** statt langer Fließtexte
4. **Vergleichstabellen** für strukturierte Daten
5. **FAQ-Schema** auf jedem Artikel für AI Overviews

### Ziel-Keywords

| Keyword | Monatl. Volumen | Wettbewerb | Artikel |
|---|---|---|---|
| Toniebox Alternative | Hoch | Mittel | `toniebox-alternative` |
| Yoto Player Alternative | Mittel | Niedrig | `yoto-player-alternative` |
| Tigerbox Alternative | Mittel | Niedrig | `tigerbox-alternative` |
| Altes iPhone Kinder | Mittel | Niedrig | `altes-iphone-kindermusikbox` |
| Hörspiele Kinder kostenlos | Hoch | Hoch | `hoerspiele-kinder-kostenlos` |
| iPhone Kinder ohne Apple ID | Mittel | Niedrig | `iphone-kinder-ohne-apple-id` |
| beste Kindermusik Gerät | Mittel | Mittel | `beste-kindermusik-geraete` |

---

## 🚀 Deployment

### Workflow

```
Push to main → Vercel CI → npm run build → Deploy → radau.app
```

### Vercel-Konfiguration

```json
// vercel.json
{
  "framework": "nextjs"
}
```

### Umgebung

| Variable | Wert | Zweck |
|---|---|---|
| Node.js | 20.x | Runtime |
| Region | `iad1` (Washington D.C.) | Vercel Edge |
| Build Command | `npm run build` | Standard Next.js Build |
| Output | `.next/` | Server-Side Rendering |

### DNS (IONOS)

| Typ | Hostname | Wert | Zweck |
|---|---|---|---|
| A | `@` | `76.76.21.21` | Vercel IPv4 |
| CNAME | `www` | `cname.vercel-dns.com` | Vercel www-Redirect |
| TXT | `@` | `google-site-verification=...` | Search Console |

---

## 🛠️ Lokale Entwicklung

### Voraussetzungen

- Node.js 20+
- npm

### Setup

```bash
# Repository klonen
git clone https://github.com/jnsn-b/RadauApp-page.git
cd RadauApp-page

# Dependencies installieren
npm install

# Entwicklungsserver starten (Port 9002)
npm run dev
```

Die Seite läuft dann unter [http://localhost:9002](http://localhost:9002).

### Verfügbare Scripts

```bash
npm run dev      # Entwicklungsserver mit Turbopack
npm run build    # Produktions-Build
npm run start    # Produktionsserver starten
npm run lint     # ESLint ausführen
```

---

## 📊 Analytics

**Vercel Analytics** ist aktiv und trackt:
- Pageviews und Unique Visitors
- Top Seiten (inkl. Blog-Artikel)
- Referrer und Traffic-Quellen
- Core Web Vitals (LCP, FID, CLS)
- Bounce Rate

**Kein Cookie-Banner nötig** – Vercel Analytics ist DSGVO-konform und datenschutzfreundlich by design (kein Fingerprinting, keine personenbezogenen Daten).

Dashboard: [vercel.com/jnsn-b/radau-app-page/analytics](https://vercel.com/jnsn-b/radau-app-page/analytics)

---

## 📜 Migrations-Geschichte

| Datum | Aktion |
|---|---|
| 2024–2026 | Entwicklung und Hosting in Firebase Studio |
| Mai 2026 | Firebase Studio Sunset angekündigt (März 2027) |
| Mai 2026 | Code-Export aus Firebase Studio nach GitHub (`firebase-export` Branch) |
| Mai 2026 | Richtiger Code-Stand aus zweitem Firebase-Account exportiert |
| Mai 2026 | Migration zu Vercel Hosting |
| Mai 2026 | DNS-Umstellung bei IONOS auf Vercel |
| Mai 2026 | Blog-System mit SEO-Artikeln implementiert |
| Mai 2026 | Vercel Analytics integriert |

---

## 🔗 Links

| Resource | URL |
|---|---|
| Live-Seite | [radau.app](https://radau.app) |
| App Store | [RadauApp im App Store](https://apps.apple.com/de/app/radauapp/id6745492017) |
| Vercel Dashboard | [vercel.com/jnsn-b/radau-app-page](https://vercel.com/jnsn-b/radau-app-page) |
| GitHub Repo | [github.com/jnsn-b/RadauApp-page](https://github.com/jnsn-b/RadauApp-page) |
| Google Search Console | [search.google.com/search-console](https://search.google.com/search-console) |

---

## 👨‍💻 Autor

**Jens Becker**  
IT Project Leader @ Roche Diagnostics | CIO @ Mitbringsel aus Heidelberg | DJ | Papa  
[radau.app/blog/unsere-geschichte](https://radau.app/blog/unsere-geschichte)

---

*Entwickelt mit ❤️ für zwei kleine Jungs, die ihre Musik selbst auswählen wollen.*
