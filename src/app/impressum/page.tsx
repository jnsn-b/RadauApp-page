'use client';

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CookieBanner from "@/components/cookie-banner";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

type Language = "de" | "en";

const translations = {
  de: {
    title: "Impressum",
    back_to_home: "Zurück zur Startseite",
    heading: "Angaben gemäß § 5 TMG",
    operator: "Jens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen",
    contact: {
      title: "Kontakt",
    },
    responsibility: {
        title: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
        person: "Jens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen"
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
    title: "Imprint",
    back_to_home: "Back to Home",
    heading: "Information according to § 5 TMG",
    operator: "Jens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen, Germany",
    contact: {
      title: "Contact",
    },
    responsibility: {
        title: "Responsible for the content according to § 55 para. 2 RStV",
        person: "Jens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen, Germany"
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

export default function ImpressumPage() {
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

  useEffect(() => {
    document.title = `${content.title} | RadauApp`;
  }, [content.title]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            {content.back_to_home}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{content.title}</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-semibold font-headline text-foreground pt-4">{content.heading}</h2>
            <p className="whitespace-pre-wrap">{content.operator}</p>

            <h2 className="text-2xl font-semibold font-headline text-foreground">{content.contact.title}</h2>
            <a href="mailto:radau.app@team-becker.net" className="text-primary hover:underline">
              radau.app@team-becker.net
            </a>

            <h2 className="text-2xl font-semibold font-headline text-foreground">{content.responsibility.title}</h2>
            <p className="whitespace-pre-wrap">{content.responsibility.person}</p>
          </div>
        </div>
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
