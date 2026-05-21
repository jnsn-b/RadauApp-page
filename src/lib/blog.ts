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
}

export const blogPosts: BlogPost[] = [
  {
    slug: "toniebox-alternative",
    lang: "de",
    title: "Toniebox Alternative: Warum ein altes iPhone die bessere Wahl ist",
    description: "Die Toniebox kostet über 100€ und braucht teure Tonies. Wir zeigen, warum die RadauApp mit einem alten iPhone die smartere, nachhaltigere und günstigere Alternative ist.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Toniebox Alternative", "Kinder Musikbox", "nachhaltig", "Vergleich"],
    readingTime: 6,
    content: `
Die **Toniebox** ist aus vielen Kinderzimmern nicht mehr wegzudenken. Doch der Einstiegspreis von über 100€ für die Box – plus 15–20€ pro Tonie-Figur – macht das schnell teuer. Wir stellen eine smarte Alternative vor: die **RadauApp** auf einem alten iPhone.

## Was kostet die Toniebox wirklich?

| Produkt | Kosten |
|---|---|
| Toniebox | ~100€ |
| Pro Tonie-Figur | 15–20€ |
| 10 Figuren | ~150–200€ |
| **Gesamt** | **~250–300€** |

Dazu kommt: Tonies können verloren gehen, kaputt gehen oder einfach irgendwann nicht mehr interessieren.

## Die RadauApp: Was brauchst du?

- Ein altes iPhone (ab iPhone 6s, iOS 16+) – oft noch zuhause oder für ~50€ gebraucht
- Die RadauApp (kostenlos im App Store)
- Optional: Apple Music Abo (bereits vorhanden?)

Das war's. Kein Plastikfiguren-Chaos, kein Nachkaufen, kein Verlieren.

## Funktionsvergleich

| Funktion | Toniebox | RadauApp |
|---|---|---|
| Kindgerechte Bedienung | ✅ | ✅ |
| Eigene MP3s | ❌ | ✅ |
| Apple Music (Millionen Songs) | ❌ | ✅ |
| Podcasts & Hörspiele | ❌ | ✅ |
| Webradio | ❌ | ✅ |
| Elternbereich | ✅ | ✅ |
| Inhalte ohne Zusatzkosten | ❌ | ✅ |
| Nachhaltigkeit | ❌ Plastik | ✅ Upcycling |

## Nachhaltigkeit: Ein echter Unterschied

Jede Tonie-Figur ist aus Plastik und wird speziell für die Box hergestellt. Die RadauApp hingegen haucht einem alten iPhone, das sonst in der Schublade verstaubt, neues Leben ein. Das spart Ressourcen und Elektronikschrott.

## Fazit

Wenn du bereits ein altes iPhone hast, ist die Entscheidung einfach: Die RadauApp ist kostenlos, bietet mehr Inhalte und ist nachhaltiger. Die Toniebox punktet mit der haptischen Figur als Bedienkonzept – aber für den Preis gibt es heute bessere Alternativen.

**[Jetzt RadauApp kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "de",
    title: "Altes iPhone sinnvoll nutzen: Die perfekte Musikbox für Kinder",
    description: "Du hast noch ein altes iPhone zuhause? Mit der RadauApp verwandelst du es in eine kindersichere Musikbox. So geht die Einrichtung in 10 Minuten.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["altes iPhone", "Upcycling", "Einrichtung", "Kinder"],
    readingTime: 5,
    content: `
Irgendwo in der Schublade liegt es: das alte iPhone. Zu schade zum Wegwerfen, zu alt für den Alltag. Mit der **RadauApp** bekommt es einen neuen Job – als kindersichere Musikbox für deine Kleinen.

## Welches iPhone ist geeignet?

Die RadauApp läuft auf **iPhone 6s oder neuer** mit iOS 16+. Das bedeutet: Geräte ab 2015 sind dabei. Fast jede Familie hat noch so ein Gerät.

Gebraucht ist ein iPhone 6s bereits für **20–40€** zu bekommen – ein unschlagbares Preis-Leistungs-Verhältnis im Vergleich zu jeder Spielzeugmusikübox.

## Einrichtung in 10 Minuten

### 1. iPhone zurücksetzen (optional)
Für maximale Performance: Einstellungen → Allgemein → iPhone übertragen oder zurücksetzen → Alle Inhalte & Einstellungen löschen.

### 2. RadauApp installieren
[RadauApp im App Store](https://apps.apple.com/de/app/radauapp/id6745492017) herunterladen – kostenlos.

### 3. Elternbereich einrichten
Beim ersten Start den Elternbereich aufrufen und Inhalte hinzufügen:
- Apple Music Playlists
- Lieblings-Podcasts (z.B. Kakadu, Kinder-Radio)
- MP3-Dateien

### 4. Geführten Zugriff aktivieren (optional)
Einstellungen → Bedienungshilfen → Geführter Zugriff → aktivieren. So bleibt das Kind in der App und kann nichts anderes aufrufen.

## Tipps für den Alltag

- **Robuste Hülle** kaufen – Kinder lassen Dinge fallen
- **Lautsprecher** anschließen für besseren Sound (Bluetooth oder Klinke)
- **WLAN-only** Modus: Mobile Daten in den Einstellungen deaktivieren

## Fazit

10 Minuten Einrichtung, null Euro Extrakosten (wenn du das iPhone bereits hast) – und dein Kind hat eine Musikbox, die mit dem Alter mitwächst. Keine Figuren, die verloren gehen. Keine Inhalte, die ausverkauft sind.

**[Jetzt kostenlos herunterladen →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
  {
    slug: "toniebox-alternative",
    lang: "en",
    title: "Toniebox Alternative: Why an Old iPhone is the Smarter Choice",
    description: "The Toniebox costs over €100 plus expensive Tonie figures. We show why RadauApp on an old iPhone is the smarter, more sustainable and cheaper alternative.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["Toniebox alternative", "kids music box", "sustainable", "comparison"],
    readingTime: 6,
    content: `
The **Toniebox** has become a staple in many children's rooms. But the entry price of over €100 for the box – plus €15–20 per Tonie figure – adds up quickly. We present a smart alternative: **RadauApp** on an old iPhone.

## What Does the Toniebox Really Cost?

| Product | Cost |
|---|---|
| Toniebox | ~€100 |
| Per Tonie figure | €15–20 |
| 10 figures | ~€150–200 |
| **Total** | **~€250–300** |

On top of that: Tonies can get lost, break, or simply lose their appeal over time.

## RadauApp: What Do You Need?

- An old iPhone (iPhone 6s or newer, iOS 16+) – often already at home or ~€50 used
- The RadauApp (free in the App Store)
- Optional: Apple Music subscription (already have one?)

That's it. No plastic figure chaos, no repurchasing, no losing pieces.

## Feature Comparison

| Feature | Toniebox | RadauApp |
|---|---|---|
| Kid-friendly interface | ✅ | ✅ |
| Own MP3s | ❌ | ✅ |
| Apple Music (millions of songs) | ❌ | ✅ |
| Podcasts & audiobooks | ❌ | ✅ |
| Web radio | ❌ | ✅ |
| Parental controls | ✅ | ✅ |
| Content without extra costs | ❌ | ✅ |
| Sustainability | ❌ Plastic | ✅ Upcycling |

## Sustainability: A Real Difference

Every Tonie figure is made of plastic produced specifically for the box. RadauApp breathes new life into an old iPhone that would otherwise collect dust. This saves resources and reduces e-waste.

## Conclusion

If you already have an old iPhone, the decision is simple: RadauApp is free, offers more content, and is more sustainable. The Toniebox scores with its tactile figure concept – but for the price, there are better alternatives today.

**[Download RadauApp free now →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
  {
    slug: "toniebox-alternative",
    lang: "fr",
    title: "Alternative à la Toniebox : Pourquoi un ancien iPhone est le meilleur choix",
    description: "La Toniebox coûte plus de 100€ et nécessite des figurines coûteuses. Nous montrons pourquoi RadauApp sur un ancien iPhone est l'alternative plus intelligente, durable et économique.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["alternative Toniebox", "boîte à musique enfants", "durable", "comparaison"],
    readingTime: 6,
    content: `
La **Toniebox** est devenue incontournable dans de nombreuses chambres d'enfants. Mais le prix d'entrée de plus de 100€ pour la box – plus 15–20€ par figurine Tonie – s'accumule vite. Nous présentons une alternative intelligente : **RadauApp** sur un ancien iPhone.

## Ce que coûte vraiment la Toniebox

| Produit | Coût |
|---|---|
| Toniebox | ~100€ |
| Par figurine Tonie | 15–20€ |
| 10 figurines | ~150–200€ |
| **Total** | **~250–300€** |

En plus : les Tonies peuvent se perdre, se casser ou simplement ne plus intéresser avec le temps.

## RadauApp : De quoi avez-vous besoin ?

- Un ancien iPhone (iPhone 6s ou plus récent, iOS 16+) – souvent déjà à la maison ou ~50€ d'occasion
- RadauApp (gratuit sur l'App Store)
- Optionnel : abonnement Apple Music (vous en avez déjà un ?)

C'est tout. Pas de chaos de figurines en plastique, pas de rachats, pas de pertes.

## Comparaison des fonctionnalités

| Fonction | Toniebox | RadauApp |
|---|---|---|
| Interface adaptée aux enfants | ✅ | ✅ |
| Propres MP3 | ❌ | ✅ |
| Apple Music (millions de chansons) | ❌ | ✅ |
| Podcasts & livres audio | ❌ | ✅ |
| Radio web | ❌ | ✅ |
| Contrôle parental | ✅ | ✅ |
| Contenu sans frais supplémentaires | ❌ | ✅ |
| Durabilité | ❌ Plastique | ✅ Upcycling |

## Conclusion

Si vous avez déjà un ancien iPhone, la décision est simple : RadauApp est gratuit, offre plus de contenu et est plus durable.

**[Télécharger RadauApp gratuitement →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
  {
    slug: "toniebox-alternative",
    lang: "es",
    title: "Alternativa a Toniebox: Por qué un iPhone antiguo es la mejor elección",
    description: "La Toniebox cuesta más de 100€ y requiere figuras costosas. Mostramos por qué RadauApp en un iPhone antiguo es la alternativa más inteligente, sostenible y económica.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["alternativa Toniebox", "caja de música niños", "sostenible", "comparación"],
    readingTime: 6,
    content: `
La **Toniebox** se ha convertido en un elemento imprescindible en muchas habitaciones infantiles. Pero el precio de entrada de más de 100€ por la caja – más 15–20€ por cada figura Tonie – se acumula rápidamente. Presentamos una alternativa inteligente: **RadauApp** en un iPhone antiguo.

## ¿Cuánto cuesta realmente la Toniebox?

| Producto | Coste |
|---|---|
| Toniebox | ~100€ |
| Por figura Tonie | 15–20€ |
| 10 figuras | ~150–200€ |
| **Total** | **~250–300€** |

Además: las figuras Tonie pueden perderse, romperse o simplemente dejar de interesar con el tiempo.

## RadauApp: ¿Qué necesitas?

- Un iPhone antiguo (iPhone 6s o más nuevo, iOS 16+) – a menudo ya en casa o ~50€ de segunda mano
- RadauApp (gratis en la App Store)
- Opcional: suscripción a Apple Music (¿ya tienes una?)

Eso es todo. Sin caos de figuras de plástico, sin recompras, sin pérdidas.

## Conclusión

Si ya tienes un iPhone antiguo, la decisión es sencilla: RadauApp es gratuito, ofrece más contenido y es más sostenible.

**[Descargar RadauApp gratis →](https://apps.apple.com/de/app/radauapp/id6745492017)**
    `
  },
  {
    slug: "altes-iphone-kindermusikbox",
    lang: "en",
    title: "Repurpose an Old iPhone: The Perfect Music Box for Kids",
    description: "Got an old iPhone lying around? With RadauApp you turn it into a child-safe music box. Here's how to set it up in 10 minutes.",
    date: "2026-05-21",
    author: "RadauApp Team",
    tags: ["old iPhone", "upcycling", "setup", "kids"],
    readingTime: 5,
    content: `
Somewhere in a drawer it sits: the old iPhone. Too good to throw away, too old for everyday use. With **RadauApp**, it gets a new job – as a child-safe music box for your little ones.

## Which iPhone Is Compatible?

RadauApp runs on **iPhone 6s or newer** with iOS 16+. That means devices from 2015 onwards qualify. Almost every family still has one of these.

A used iPhone 6s can be found for **€20–40** – an unbeatable value compared to any toy music box.

## Setup in 10 Minutes

### 1. Reset iPhone (optional)
For maximum performance: Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.

### 2. Install RadauApp
Download [RadauApp from the App Store](https://apps.apple.com/de/app/radauapp/id6745492017) – free.

### 3. Set up parental area
On first launch, open the parental area and add content:
- Apple Music playlists
- Favorite podcasts
- MP3 files

### 4. Enable Guided Access (optional)
Settings → Accessibility → Guided Access → enable. This keeps children in the app and prevents them from accessing anything else.

## Conclusion

10 minutes of setup, zero extra costs (if you already have the iPhone) – and your child has a music box that grows with them.

**[Download free now →](https://apps.apple.com/de/app/radauapp/id6745492017)**
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
  de: {
    title: "Blog",
    subtitle: "Tipps, Vergleiche und Wissenswertes rund um die RadauApp und nachhaltige Kinderunterhaltung.",
    readMore: "Weiterlesen",
    readingTime: "Min. Lesezeit",
    backToBlog: "← Zurück zum Blog",
    by: "Von",
  },
  en: {
    title: "Blog",
    subtitle: "Tips, comparisons and insights about RadauApp and sustainable kids entertainment.",
    readMore: "Read more",
    readingTime: "min read",
    backToBlog: "← Back to blog",
    by: "By",
  },
  fr: {
    title: "Blog",
    subtitle: "Conseils, comparaisons et informations sur RadauApp et le divertissement durable pour enfants.",
    readMore: "Lire la suite",
    readingTime: "min de lecture",
    backToBlog: "← Retour au blog",
    by: "Par",
  },
  es: {
    title: "Blog",
    subtitle: "Consejos, comparaciones e información sobre RadauApp y el entretenimiento sostenible para niños.",
    readMore: "Leer más",
    readingTime: "min de lectura",
    backToBlog: "← Volver al blog",
    by: "Por",
  },
};
