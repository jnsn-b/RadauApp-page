'use client';

import { useState, useMemo } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CookieBanner from "@/components/cookie-banner";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import Head from "next/head";

type Language = "de" | "en";

const translations = {
  de: {
    title: "Datenschutzerklärung",
    back_to_home: "Zurück zur Startseite",
    sections: [
        { title: "1. Datenschutz auf einen Blick", content: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung." },
        { title: "2. Verantwortliche Stelle", content: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\n\nJens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen\n\nE-Mail: radau.app@team-becker.net\n\nVerantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet." },
        { title: "3. Ihre Rechte als betroffene Person", content: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden." },
        { title: "4. Datenerfassung auf unserer Website", content: "Cookies: Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.\n\nServer-Log-Dateien: Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO." },
        { title: "5. Kontaktaufnahme", content: "Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist." }
    ],
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
    title: "Privacy Policy",
    back_to_home: "Back to Home",
    sections: [
        { title: "1. Data Protection at a Glance", content: "The following notes provide a simple overview of what happens to your personal data when you visit our website. Personal data is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text." },
        { title: "2. Data Controller", content: "The data controller for this website is:\n\nJens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen, Germany\n\nEmail: radau.app@team-becker.net\n\nThe controller is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, email addresses, or the like)." },
        { title: "3. Your Rights as a Data Subject", content: "Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of the data processing, and, if applicable, a right to correction, blocking, or deletion of this data. For this purpose, as well as for further questions on the subject of personal data, you can contact us at any time." },
        { title: "4. Data Collection on our Website", content: "Cookies: Our internet pages use so-called 'cookies'. Cookies are small text files and do not cause any damage to your end device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted at the end of your visit. Permanent cookies remain stored on your end device until you delete them yourself or an automatic deletion is carried out by your web browser.\n\nServer Log Files: The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are: browser type and browser version, operating system used, referrer URL, host name of the accessing computer, time of the server request, IP address. This data is not merged with other data sources. The collection of this data is based on Art. 6(1)(f) GDPR." },
        { title: "5. Contact", content: "If you contact us by e-mail, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent. The processing of this data is based on Art. 6(1)(b) GDPR, provided that your inquiry is related to the fulfillment of a contract or is necessary for the performance of pre-contractual measures." }
    ],
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

export default function DatenschutzPage() {
  const [language, setLanguage] = useState<Language>("de");
  const content = useMemo(() => translations[language], [language]);
  const { shouldShowBanner, giveConsent } = useCookieConsent();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Head>
        <title>{content.title} | RadauApp</title>
      </Head>
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-grow py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            {content.back_to_home}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">{content.title}</h1>

          <div className="space-y-8 text-muted-foreground">
            {content.sections.map(section => (
                <div key={section.title}>
                    <h2 className="text-2xl font-semibold font-headline text-foreground mb-2">{section.title}</h2>
                    <p className="leading-relaxed whitespace-pre-wrap">{section.content}</p>
                </div>
            ))}
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
