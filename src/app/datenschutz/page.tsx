'use client';

import { useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Language = "de" | "en";

const translations = {
  de: {
    title: "Datenschutzerklärung",
    back_to_home: "Zurück zur Startseite",
    sections: [
        { title: "1. Datenschutz auf einen Blick", content: "Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können." },
        { title: "2. Allgemeine Hinweise und Pflichtinformationen", content: "Datenschutz: Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung." },
        { title: "3. Datenerfassung auf dieser Website", content: "Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen." }
    ],
    warning: "WICHTIG: Dies ist nur eine Vorlage. Bitte ersetzen Sie die Platzhaltertexte durch Ihre eigenen, korrekten rechtlichen Informationen. Wir übernehmen keine Haftung für die Richtigkeit und Vollständigkeit dieser Vorlage.",
    footer: {
      tagline: "Die nachhaltige Kinder-Jukebox.",
      contact: "Kontakt",
      location: "Standort",
      imprint: "Impressum",
      privacy: "Datenschutz",
      copy: "Alle Rechte vorbehalten."
    }
  },
  en: {
    title: "Privacy Policy",
    back_to_home: "Back to Home",
    sections: [
        { title: "1. Data Protection at a Glance", content: "General information: The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified." },
        { title: "2. General Information and Mandatory Information", content: "Data protection: The operators of these pages take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy." },
        { title: "3. Data Collection on this Website", content: "Who is responsible for data collection on this website? The data processing on this website is carried out by the website operator. The operator's contact details can be found in the imprint of this website." }
    ],
    warning: "IMPORTANT: This is a template. Please replace the placeholder texts with your own correct legal information. We assume no liability for the accuracy and completeness of this template.",
    footer: {
      tagline: "The sustainable kids' jukebox.",
      contact: "Contact",
      location: "Location",
      imprint: "Imprint",
      privacy: "Privacy Policy",
      copy: "All rights reserved."
    }
  }
};

export default function DatenschutzPage() {
  const [language, setLanguage] = useState<Language>("de");
  const content = useMemo(() => translations[language], [language]);

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
          
          <div className="p-4 border-l-4 border-destructive bg-destructive/10 text-destructive mb-8 rounded-r-lg">
            <p className="font-bold">{content.warning}</p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            {content.sections.map(section => (
                <div key={section.title}>
                    <h2 className="text-2xl font-semibold font-headline text-foreground mb-2">{section.title}</h2>
                    <p className="leading-relaxed">{section.content}</p>
                </div>
            ))}
          </div>
        </div>
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
