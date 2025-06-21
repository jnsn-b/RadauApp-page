'use client';

import { useState, useMemo } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WorkSection from "@/components/work-section";
import JournalSection from "@/components/journal-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

type Language = "de" | "en";

const translations = {
  de: {
    hero: {
      subtitle: "Die nachhaltige Kinder-Jukebox",
      description: "Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.",
      imageAlt: "RadauApp auf einem iPhone"
    },
    services: {
      title: "Was ist die RadauApp?",
      description1: "Die nachhaltige Alternative zur ToniBox. Du hast noch ein altes iPhone 6s oder neuer zuhause? Perfekt! Mit RadauApp machst du daraus eine kinderleichte Musikbox für deine Kleinen.",
      features: [
        { title: "Apple Music & eigene MP3s", description: "Greife auf die riesige Mediathek von Apple Music zu oder spiele deine eigenen MP3-Dateien ab." },
        { title: "Lieblings-Podcasts", description: "Binde die Lieblings-Hörspiele und Podcasts deiner Kinder direkt in die App ein." },
        { title: "Kindgerechtes Webradio", description: "Füge sichere und unterhaltsame Webradio-Sender für Kinder hinzu." }
      ],
      description2: "Die Bedienung ist bewusst einfach gehalten – ganz ohne Lesekenntnisse. Große Kacheln, intuitive Icons und keine Ablenkung. Einfach tippen – Musik läuft!"
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
    journal: {
      title: "Warum RadauApp?",
      benefits: [
        { title: "Kosten sparen", description: "Spare dir teure Spezial-Hardware wie TonieBox & Co. und nutze, was du schon hast." },
        { title: "Nachhaltig", description: "Gib deinem alten iPhone ein zweites Leben, statt es in der Schublade verstauben zu lassen oder wegzuwerfen." },
        { title: "Sicher & Privat", description: "Volle Kontrolle über die Inhalte und keine Cloudbindung. Deine Daten bleiben bei dir." }
      ],
      outro: "RadauApp – weil gute Musik nachhaltiger sein kann."
    },
    cta: {
      title: "Häufige Fragen",
      faqs: [
        { question: "Wie sperre ich das iPhone, dass nur noch eine App verwendbar ist?", answer: "Mit der iOS-Funktion „Geführter Zugriff“ (unter Einstellungen > Bedienungshilfen). Damit kann das Gerät auf die RadauApp beschränkt werden. Apple bietet hierzu eine offizielle Anleitung." },
        { question: "Wie verwalte ich die Playlisten?", answer: "Die Musikplaylists werden in iTunes bzw. der Apple Music App verwaltet. Dort können Lieder in Playlisten abonniert und verwaltet werden. Die RadauApp ruft diese Playlisten ab und stellt diese kindgerecht dar. Im Elternmodus kannst du die Erscheinungsbilder der Playlisten bearbeiten." },
        { question: "Wie kann ich eigene Musik nutzen?", answer: "Du kannst eigene MP3-Dateien über iTunes auf deinem Mac oder Computer mit deinem Handy synchronisieren. Sobald die Songs oder Hörspiele verfügbar sind, können sie über die RadauApp gesteuert werden." },
        { question: "Geht auch Spotify?", answer: "Derzeit leider nicht. RadauApp unterstützt Apple Music und lokale Dateien, nicht aber Spotify, da sich Spotify nicht über eine externe App steuern lässt." }
      ]
    },
    footer: {
      tagline: "Die nachhaltige Kinder-Jukebox.",
      contact: "Kontakt",
      location: "Standort",
      copy: "Alle Rechte vorbehalten."
    }
  },
  en: {
    hero: {
      subtitle: "The Sustainable Kids' Jukebox",
      description: "Turn your old iPhone into a smart music device for kids - without any reading required, but with full control in the parent area.",
      imageAlt: "RadauApp on an iPhone"
    },
    services: {
      title: "What is RadauApp?",
      description1: "The sustainable alternative to the Toniebox. Do you have an old iPhone 6s or newer at home? Perfect! With RadauApp, you can turn it into a child-friendly music box for your little ones.",
      features: [
        { title: "Apple Music & Your MP3s", description: "Access the vast library of Apple Music or play your own MP3 files." },
        { title: "Favorite Podcasts", description: "Integrate your children's favorite audiobooks and podcasts directly into the app." },
        { title: "Kid-Safe Web Radio", description: "Add safe and entertaining web radio stations for children." }
      ],
      description2: "The controls are intentionally simple - no reading skills required. Large tiles, intuitive icons, and no distractions. Just tap - the music plays!"
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
    journal: {
      title: "Why RadauApp?",
      benefits: [
        { title: "Save Money", description: "Save on expensive special hardware like TonieBox & Co. and use what you already have." },
        { title: "Sustainable", description: "Give your old iPhone a second life instead of letting it gather dust in a drawer or throwing it away." },
        { title: "Secure & Private", description: "Full control over content and no cloud dependency. Your data stays with you." }
      ],
      outro: "RadauApp – because good music can be more sustainable."
    },
    cta: {
      title: "Frequently Asked Questions",
      faqs: [
        { question: "How do I lock the iPhone so that only one app can be used?", answer: "With the iOS feature 'Guided Access' (under Settings > Accessibility). This allows you to restrict the device to the RadauApp. Apple provides an official guide for this." },
        { question: "How do I manage the playlists?", answer: "Music playlists are managed in iTunes or the Apple Music app. There, you can subscribe to and manage songs in playlists. The RadauApp retrieves these playlists and displays them in a child-friendly way. In parent mode, you can edit the playlists' appearance." },
        { question: "How can I use my own music?", answer: "You can sync your own MP3 files to your phone via iTunes on your Mac or computer. Once the songs or audiobooks are available, they can be controlled via the RadauApp." },
        { question: "Does it work with Spotify?", answer: "Unfortunately not at the moment. RadauApp supports Apple Music and local files, but not Spotify, as Spotify cannot be controlled by an external app." }
      ]
    },
    footer: {
      tagline: "The sustainable kids' jukebox.",
      contact: "Contact",
      location: "Location",
      copy: "All rights reserved."
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const content = useMemo(() => translations[language], [language]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow">
        <HeroSection content={content.hero} />
        <ServicesSection content={content.services} />
        <WorkSection content={content.work} />
        <JournalSection content={content.journal} />
        <CtaSection content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
