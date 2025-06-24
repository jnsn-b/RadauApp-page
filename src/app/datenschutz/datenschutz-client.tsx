'use client';

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CookieBanner from "@/components/cookie-banner";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

type Language = "de" | "en" | "fr" | "es";

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
  },
  fr: {
    title: "Politique de confidentialité",
    back_to_home: "Retour à l'accueil",
    sections: [
        { title: "1. La protection des données en un coup d'œil", content: "Les remarques suivantes donnent un aperçu simple de ce qu'il advient de vos données personnelles lorsque vous visitez notre site web. Les données personnelles sont toutes les données avec lesquelles vous pouvez être personnellement identifié. Vous trouverez des informations détaillées sur le thème de la protection des données dans notre politique de confidentialité listée sous ce texte." },
        { title: "2. Organisme responsable", content: "L'organisme responsable du traitement des données sur ce site web est :\n\nJens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen, Allemagne\n\nE-mail : radau.app@team-becker.net\n\nL'organisme responsable est la personne physique ou morale qui, seule ou conjointement avec d'autres, détermine les finalités et les moyens du traitement des données à caractère personnel (par exemple, noms, adresses e-mail, etc.)." },
        { title: "3. Vos droits en tant que personne concernée", content: "Dans le cadre des dispositions légales en vigueur, vous avez à tout moment le droit d'obtenir gratuitement des informations sur vos données personnelles stockées, leur origine et leurs destinataires, ainsi que sur la finalité du traitement des données et, le cas échéant, un droit de rectification, de blocage ou de suppression de ces données. Pour cela, ainsi que pour d'autres questions sur le sujet des données personnelles, vous pouvez nous contacter à tout moment." },
        { title: "4. Collecte de données sur notre site web", content: "Cookies : Nos pages Internet utilisent des « cookies ». Les cookies sont de petits fichiers texte qui ne causent aucun dommage à votre appareil. Ils sont stockés soit temporairement pour la durée d'une session (cookies de session), soit de manière permanente (cookies permanents) sur votre appareil. Les cookies de session sont automatiquement supprimés à la fin de votre visite. Les cookies permanents restent stockés sur votre appareil jusqu'à ce que vous les supprimiez vous-même ou qu'une suppression automatique soit effectuée par votre navigateur web.\n\nFichiers journaux du serveur : Le fournisseur des pages collecte et stocke automatiquement des informations dans des fichiers journaux de serveur, que votre navigateur nous transmet automatiquement. Il s'agit de : type et version du navigateur, système d'exploitation utilisé, URL de référence, nom d'hôte de l'ordinateur accédant, heure de la requête du serveur, adresse IP. Ces données ne sont pas fusionnées avec d'autres sources de données. La collecte de ces données est basée sur l'art. 6, par. 1, let. f du RGPD." },
        { title: "5. Prise de contact", content: "Si vous nous contactez par e-mail, votre demande, y compris toutes les données personnelles qui en découlent (nom, demande), sera stockée et traitée par nos soins aux fins du traitement de votre requête. Nous ne transmettons pas ces données sans votre consentement. Le traitement de ces données est basé sur l'art. 6, par. 1, let. b du RGPD, dans la mesure où votre demande est liée à l'exécution d'un contrat ou est nécessaire à la mise en œuvre de mesures précontractuelles." }
    ],
    footer: {
      tagline: "La Jukebox durable pour enfants.",
      contact: "Contact",
      location: "Lieu",
      imprint: "Mentions légales",
      privacy: "Confidentialité",
      copy: "Tous droits réservés."
    },
    cookieBanner: {
      message: "Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.",
      accept: "Accepter",
      decline: "Refuser",
      privacyPolicy: "Notre politique de confidentialité."
    }
  },
  es: {
    title: "Política de privacidad",
    back_to_home: "Volver al inicio",
    sections: [
        { title: "1. Protección de datos de un vistazo", content: "Las siguientes notas ofrecen una visión general sencilla de lo que sucede con sus datos personales cuando visita nuestro sitio web. Los datos personales son cualquier dato con el que se le pueda identificar personalmente. Encontrará información detallada sobre el tema de la protección de datos en nuestra política de privacidad que figura debajo de este texto." },
        { title: "2. Entidad responsable", content: "La entidad responsable del tratamiento de datos en este sitio web es:\n\nJens Becker\nAlbert-Schweitzer-Str. 3\n68799 Reilingen, Alemania\n\nCorreo electrónico: radau.app@team-becker.net\n\nEl responsable es la persona física o jurídica que, sola o junto con otras, determina los fines y medios del tratamiento de datos personales (por ejemplo, nombres, direcciones de correo electrónico, etc.)." },
        { title: "3. Sus derechos como interesado", content: "En el marco de las disposiciones legales aplicables, usted tiene derecho en todo momento a obtener información gratuita sobre sus datos personales almacenados, su origen y destinatarios, y la finalidad del tratamiento de los datos y, en su caso, derecho a la rectificación, bloqueo o supresión de estos datos. Para ello, así como para otras cuestiones sobre el tema de los datos personales, puede ponerse en contacto con nosotros en cualquier momento." },
        { title: "4. Recopilación de datos en nuestro sitio web", content: "Cookies: Nuestras páginas de Internet utilizan las llamadas 'cookies'. Las cookies son pequeños archivos de texto y no causan ningún daño en su dispositivo. Se almacenan temporalmente durante la duración de una sesión (cookies de sesión) o permanentemente (cookies permanentes) en su dispositivo. Las cookies de sesión se eliminan automáticamente al final de su visita. Las cookies permanentes permanecen almacenadas en su dispositivo hasta que usted mismo las elimine o se lleve a cabo una eliminación automática por parte de su navegador web.\n\nArchivos de registro del servidor: El proveedor de las páginas recopila y almacena automáticamente información en los llamados archivos de registro del servidor, que su navegador nos transmite automáticamente. Estos son: tipo y versión del navegador, sistema operativo utilizado, URL de referencia, nombre de host del ordenador que accede, hora de la solicitud del servidor, dirección IP. No se realiza una fusión de estos datos con otras fuentes de datos. La recopilación de estos datos se basa en el Art. 6, apdo. 1, letra f del RGPD." },
        { title: "5. Contacto", content: "Si se pone en contacto con nosotros por correo electrónico, su consulta, incluidos todos los datos personales resultantes (nombre, consulta), será almacenada y procesada por nosotros con el fin de tramitar su solicitud. No transmitimos estos datos sin su consentimiento. El tratamiento de estos datos se basa en el Art. 6, apdo. 1, letra b del RGPD, siempre que su consulta esté relacionada con el cumplimiento de un contrato o sea necesaria para la ejecución de medidas precontractuales." }
    ],
    footer: {
      tagline: "La Jukebox sostenible para niños.",
      contact: "Contacto",
      location: "Ubicación",
      imprint: "Aviso legal",
      privacy: "Privacidad",
      copy: "Todos los derechos reservados."
    },
    cookieBanner: {
      message: "Utilizamos cookies para mejorar su experiencia. Al continuar visitando este sitio, acepta nuestro uso de cookies.",
      accept: "Aceptar",
      decline: "Rechazar",
      privacyPolicy: "Nuestra política de privacidad."
    }
  }
};

export default function DatenschutzClient() {
  const [language, setLanguage] = useState<Language>("de");
  const content = useMemo(() => translations[language], [language]);
  const { shouldShowBanner, giveConsent } = useCookieConsent();

  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage;
    if (userLang.startsWith('de')) {
      setLanguage('de');
    } else if (userLang.startsWith('fr')) {
      setLanguage('fr');
    } else if (userLang.startsWith('es')) {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }, []);

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
