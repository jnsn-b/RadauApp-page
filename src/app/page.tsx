'use client';

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WorkSection from "@/components/work-section";
import BenefitsSection from "@/components/benefits-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import CookieBanner from "@/components/cookie-banner";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

type Language = "de" | "en";

const translations = {
  de: {
    hero: {
      subtitle: "Die nachhaltige Kinder-Jukebox",
      description: "Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.",
      imageAlt: "RadauApp auf einem iPhone",
    },
    services: {
      title: "Was ist die RadauApp?",
      description1: "Die nachhaltige Alternative zur TonieBox. Du hast noch ein altes iPhone 6s oder neuer zuhause? Perfekt! Mit RadauApp machst du daraus eine kinderleichte Musikbox für deine Kleinen.",
      features: [
        { title: "Apple Music & eigene MP3s", description: "Greife auf die riesige Mediathek von Apple Music zu oder spiele deine eigenen MP3-Dateien ab." },
        { title: "Lieblings-Podcasts", description: "Binde die Lieblings-Hörspiele und Podcasts deiner Kinder direkt in die App ein." },
        { title: "Kindgerechtes Webradio", description: "Füge sichere und unterhaltsame Webradio-Sender für Kinder hinzu." }
      ],
      description2: "Die Bedienung ist bewusst einfach gehalten – ganz ohne Lesekenntnisse. Große Kacheln, intuitive Icons und keine Ablenkung. Einfach tippen – Musik läuft!",
      ctaLink: "Jetzt im App Store entdecken."
    },
    work: {
      title: "Elternmodus inklusive",
      description: "Im geschützten Elternbereich kannst du alles kindersicher hinter einem einfachen Zugangsschutz verwalten:",
      features: [
        { text: "Medien verwalten (Playlists, Podcasts, Radiosender)" },
        { text: "Coverbilder ändern" },
        { text: "Inhalte hinzufügen oder löschen" }
      ],
      imageAlt: "Elternmodus in der RadauApp"
    },
    benefits: {
        title: "Mehr als nur Musik",
        description: "Die RadauApp ist der perfekte Begleiter für den Familienalltag – entwickelt, um die kleinen und großen Herausforderungen zu meistern und dabei nachhaltig und sicher zu sein.",
        benefits: [
            { title: "Entspannte Autofahrten", description: "Ihr Kind wählt selbstständig seine Unterhaltung aus. Das bedeutet weniger Ablenkung für Sie und kein Gequengel von der Rückbank.", icon: "Car" },
            { title: "Wertvolle Bildschirmzeit", description: "Keine fesselnden Videos, nur eine simple Anzeige. Das schont die Augen und fördert die Fantasie durch reines Zuhören.", icon: "Eye" },
            { title: "Immer & überall dabei", description: "Ein altes iPhone und Kopfhörer genügen. Kompakt und leicht passt die RadauApp in jeden Rucksack – ohne sperrige Zusatzgeräte.", icon: "Headphones" },
            { title: "Kosten sparen", description: "Spare dir teure Spezial-Hardware wie TonieBox & Co. und nutze, was du schon hast.", icon: "PiggyBank" },
            { title: "Nachhaltig", description: "Gib deinem alten iPhone ein zweites Leben, statt es in der Schublade verstauben zu lassen oder wegzuwerfen.", icon: "Recycle" },
            { title: "Sicher & Privat", description: "Volle Kontrolle über die Inhalte und keine Cloudbindung. Deine Daten bleiben bei dir.", icon: "ShieldCheck" }
        ],
        ctaLink: "Überzeugt? Hol dir die App im App Store."
    },
    cta: {
      title: "Häufige Fragen",
      faqs: [
        { question: "Wie sperre ich das iPhone, dass nur noch eine App verwendbar ist?", answer: <>Mit der iOS-Funktion „Geführter Zugriff“ (unter Einstellungen &gt; Bedienungshilfen). Damit kann das Gerät auf die RadauApp beschränkt werden. Apple bietet hierzu eine <a href="https://support.apple.com/de-de/111795" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">offizielle Anleitung</a>.</> },
        { question: "Funktioniert die App auch auf dem iPad?", answer: "Eine iPad Version ist in Planung und wird zeitnah zur Verfügung stehen, damit auch hier ausgemusterte Geräte ein zweites Leben erhalten können!" },
        { question: "Welche Geräte werden unterstützt?", answer: "RadauApp läuft auf jedem iPhone ab dem Modell 6s mit iOS 15 oder neuer. So kannst du auch älteren Geräten ein sinnvolles, neues Leben schenken." },
        { question: "Wie verwalte ich die Playlisten?", answer: "Die Musikplaylists werden in iTunes bzw. der Apple Music App verwaltet. Dort können Lieder in Playlisten abonniert und verwaltet werden. Die RadauApp ruft diese Playlisten ab und stellt diese kindgerecht dar. Im Elternmodus kannst du die Erscheinungsbilder der Playlisten bearbeiten." },
        { question: "Wie kann ich eigene Musik nutzen?", answer: "Du kannst eigene MP3-Dateien über iTunes auf deinem Mac oder Computer mit deinem Handy synchronisieren. Sobald die Songs oder Hörspiele verfügbar sind, können sie über die RadauApp gesteuert werden." },
        { question: "Geht auch Spotify?", answer: "Derzeit leider nicht. RadauApp unterstützt Apple Music und lokale Dateien, nicht aber Spotify, da sich Spotify nicht über eine externe App steuern lässt." }
      ]
    },
    footer: {
      tagline: "Die nachhaltige Kinder-Jukebox.",
      contact: "Kontakt",
      location: "Standort",
      imprint: "Impressum",
      privacy: "Datenschutz",
      copy: "Alle Rechte vorbehalten."
    },
    cookieBanner: {
      message: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Mit der weiteren Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      privacyPolicy: "Unsere Datenschutzrichtlinie."
    }
  },
  en: {
    hero: {
      subtitle: "The Sustainable Kids' Jukebox",
      description: "Turn your old iPhone into a smart music device for kids - without any reading required, but with full control in the parent area.",
      imageAlt: "RadauApp on an iPhone",
    },
    services: {
      title: "What is RadauApp?",
      description1: "The sustainable alternative to the Toniebox. Do you have an old iPhone 6s or newer at home? Perfect! With RadauApp, you can turn it into a child-friendly music box for your little ones.",
      features: [
        { title: "Apple Music & Your MP3s", description: "Access the vast library of Apple Music or play your own MP3 files." },
        { title: "Favorite Podcasts", description: "Integrate your children's favorite audiobooks and podcasts directly into the app." },
        { title: "Kid-Safe Web Radio", description: "Add safe and entertaining web radio stations for children." }
      ],
      description2: "The controls are intentionally simple - no reading skills required. Large tiles, intuitive icons, and no distractions. Just tap - the music plays!",
      ctaLink: "Discover all features in the app – now on the App Store."
    },
    work: {
      title: "Parent Mode Included",
      description: "In the protected parent area, you can manage everything securely behind a simple access code:",
      features: [
        { text: "Manage media (playlists, podcasts, radio stations)" },
        { text: "Change cover images" },
        { text: "Add or delete content" }
      ],
      imageAlt: "Parent mode in the RadauApp"
    },
    benefits: {
        title: "More Than Just Music",
        description: "RadauApp is the perfect companion for family life – designed to master the small and large challenges while being sustainable and safe.",
        benefits: [
            { title: "Relaxed Car Rides", description: "Your child independently selects their entertainment. This means less distraction for you and no whining from the back seat.", icon: "Car" },
            { title: "Valuable Screen Time", description: "No captivating videos, just a simple display. This is easy on the eyes and promotes imagination through pure listening.", icon: "Eye" },
            { title: "Always & Everywhere", description: "An old iPhone and headphones are all you need. Compact and lightweight, RadauApp fits into any backpack – without bulky extra devices.", icon: "Headphones" },
            { title: "Save Money", description: "Save on expensive special hardware like TonieBox & Co. and use what you already have.", icon: "PiggyBank" },
            { title: "Sustainable", description: "Give your old iPhone a second life instead of letting it gather dust in a drawer or throwing it away.", icon: "Recycle" },
            { title: "Secure & Private", description: "Full control over content and no cloud dependency. Your data stays with you.", icon: "ShieldCheck" }
        ],
        ctaLink: "Convinced? Get the app on the App Store."
    },
    cta: {
      title: "Frequently Asked Questions",
      faqs: [
        { question: "How do I lock the iPhone so that only one app can be used?", answer: <>With the iOS feature 'Guided Access' (under Settings &gt; Accessibility). This allows you to restrict the device to the RadauApp. Apple provides an <a href="https://support.apple.com/en-us/111795" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">official guide</a> for this.</> },
        { question: "Does the app also work on the iPad?", answer: "An iPad version is planned and will be available soon, so that discarded devices can also be given a second life here!" },
        { question: "Which devices are supported?", answer: "RadauApp runs on any iPhone from the 6s model with iOS 15 or newer. This way, you can give older devices a meaningful new life." },
        { question: "How do I manage the playlists?", answer: "Music playlists are managed in iTunes or the Apple Music app. There, you can subscribe to and manage songs in playlists. The RadauApp retrieves these playlists and displays them in a child-friendly way. In parent mode, you can edit the playlists' appearance." },
        { question: "How can I use my own music?", answer: "You can sync your own MP3 files to your phone via iTunes on your Mac or computer. Once the songs or audiobooks are available, they can be controlled via the RadauApp." },
        { question: "Does it work with Spotify?", answer: "Unfortunately not at the moment. RadauApp supports Apple Music and local files, but not Spotify, as Spotify cannot be controlled by an external app." }
      ]
    },
    footer: {
      tagline: "The sustainable kids' jukebox.",
      contact: "Contact",
      location: "Location",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      copy: "All rights reserved."
    },
    cookieBanner: {
      message: "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
      privacyPolicy: "Our Privacy Policy."
    }
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "RadauApp",
  "operatingSystem": "iOS",
  "applicationCategory": "MusicApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8", // Example value
    "ratingCount": "88" // Example value
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.",
  "url": "https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB"
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const content = useMemo(() => translations[language], [language]);
  const { shouldShowBanner, giveConsent } = useCookieConsent();

  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang.startsWith('de')) {
      setLanguage('de');
    } else {
      setLanguage('en');
    }
  }, []);

  const faqLink = language === 'de' ? "https://support.apple.com/de-de/111795" : "https://support.apple.com/en-us/111795";
  const updatedFaqs = content.cta.faqs.map(faq => {
      if (faq.question.includes("sperre ich das iPhone") || faq.question.includes("lock the iPhone")) {
          return {
              ...faq,
              answer: <>
                  {language === 'de' ? 'Mit der iOS-Funktion „Geführter Zugriff“ (unter Einstellungen > Bedienungshilfen). Damit kann das Gerät auf die RadauApp beschränkt werden. Apple bietet hierzu eine ' : 'With the iOS feature \'Guided Access\' (under Settings > Accessibility). This allows you to restrict the device to the RadauApp. Apple provides an '}
                  <a href={faqLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {language === 'de' ? 'offizielle Anleitung' : 'official guide'}
                  </a>
                  .
              </>
          };
      }
      return faq;
  });

  const updatedCtaContent = { ...content.cta, faqs: updatedFaqs };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <HeroSection content={content.hero} language={language} />
        <ServicesSection content={content.services} />
        <WorkSection content={content.work} />
        <BenefitsSection content={content.benefits} />
        <CtaSection content={updatedCtaContent} />
      </main>
      <Footer content={content.footer} />
      {shouldShowBanner && (
        <CookieBanner
          content={content.cookieBanner}
          onDismiss={giveConsent}
        />
      )}
    </div>
  );
}
