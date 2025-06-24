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

type Language = "de" | "en" | "fr" | "es";

const translations = {
  de: {
    hero: {
      subtitle: "Die nachhaltige Kinder-Jukebox",
      description: "Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.",
      imageAlt: "RadauApp auf einem iPhone",
      ctaLink: "Jetzt im App Store entdecken."
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
      ctaLink: "Discover it on the App Store now."
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
  },
  fr: {
    hero: {
      subtitle: "La Jukebox durable pour enfants",
      description: "Transformez votre vieil iPhone en un appareil musical intelligent pour les enfants – sans lecture requise, mais avec un contrôle total dans l'espace parents.",
      imageAlt: "RadauApp sur un iPhone",
      ctaLink: "Découvrez-la maintenant sur l'App Store."
    },
    services: {
      title: "Qu'est-ce que RadauApp ?",
      description1: "L'alternative durable à la TonieBox. Vous avez un vieil iPhone 6s ou plus récent à la maison ? Parfait ! Avec RadauApp, transformez-le en une boîte à musique ultra-simple pour vos petits.",
      features: [
        { title: "Apple Music & vos MP3", description: "Accédez à l'immense bibliothèque d'Apple Music ou lisez vos propres fichiers MP3." },
        { title: "Podcasts préférés", description: "Intégrez les livres audio et podcasts favoris de vos enfants directement dans l'application." },
        { title: "Webradio adaptée aux enfants", description: "Ajoutez des stations de webradio sûres et divertissantes pour les enfants." }
      ],
      description2: "L'utilisation est volontairement simple – sans nécessiter de savoir lire. De grandes tuiles, des icônes intuitives et aucune distraction. Touchez simplement – la musique joue !",
      ctaLink: "Découvrez toutes les fonctionnalités dans l'app – maintenant sur l'App Store."
    },
    work: {
      title: "Mode Parent inclus",
      description: "Dans l'espace parent protégé, vous pouvez tout gérer en toute sécurité derrière un simple code d'accès :",
      features: [
        { text: "Gérer les médias (playlists, podcasts, stations de radio)" },
        { text: "Modifier les images de couverture" },
        { text: "Ajouter ou supprimer du contenu" }
      ],
      imageAlt: "Mode parent dans la RadauApp"
    },
    benefits: {
        title: "Plus que de la musique",
        description: "RadauApp est le compagnon idéal pour le quotidien familial – conçu pour relever les petits et grands défis tout en étant durable et sûr.",
        benefits: [
            { title: "Trajets en voiture détendus", description: "Votre enfant choisit lui-même son divertissement. Moins de distraction pour vous et pas de pleurnicheries sur la banquette arrière.", icon: "Car" },
            { title: "Temps d'écran de qualité", description: "Pas de vidéos captivantes, juste un simple affichage. Cela ménage les yeux et stimule l'imagination par la seule écoute.", icon: "Eye" },
            { title: "Toujours et partout avec vous", description: "Un vieil iPhone et des écouteurs suffisent. Compacte et légère, RadauApp se glisse dans n'importe quel sac à dos – sans appareils supplémentaires encombrants.", icon: "Headphones" },
            { title: "Économiser de l'argent", description: "Épargnez-vous le matériel spécialisé coûteux comme la TonieBox & Co. et utilisez ce que vous avez déjà.", icon: "PiggyBank" },
            { title: "Durable", description: "Donnez une seconde vie à votre vieil iPhone au lieu de le laisser prendre la poussière dans un tiroir ou de le jeter.", icon: "Recycle" },
            { title: "Sûr & Privé", description: "Contrôle total sur le contenu et aucune dépendance au cloud. Vos données restent les vôtres.", icon: "ShieldCheck" }
        ],
        ctaLink: "Convaincu ? Obtenez l'application sur l'App Store."
    },
    cta: {
      title: "Questions fréquentes",
      faqs: [
        { question: "Comment verrouiller l'iPhone pour qu'une seule application soit utilisable ?", answer: <>Avec la fonction iOS « Accès guidé » (sous Réglages > Accessibilité). Elle permet de restreindre l'appareil à RadauApp. Apple propose un <a href="https://support.apple.com/fr-fr/111795" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">guide officiel</a> à ce sujet.</> },
        { question: "L'application fonctionne-t-elle aussi sur l'iPad ?", answer: "Une version pour iPad est prévue et sera bientôt disponible, afin que les appareils mis au rebut puissent également avoir une seconde vie !" },
        { question: "Quels appareils sont pris en charge ?", answer: "RadauApp fonctionne sur tous les iPhone à partir du modèle 6s avec iOS 15 ou plus récent. Vous pouvez ainsi donner une nouvelle vie utile même aux appareils plus anciens." },
        { question: "Comment gérer les playlists ?", answer: "Les playlists musicales sont gérées dans iTunes ou l'application Apple Music. Vous pouvez y abonner et gérer des chansons dans des playlists. RadauApp récupère ces playlists et les présente de manière adaptée aux enfants. En mode parent, vous pouvez modifier l'apparence des playlists." },
        { question: "Comment puis-je utiliser ma propre musique ?", answer: "Vous pouvez synchroniser vos propres fichiers MP3 sur votre téléphone via iTunes sur votre Mac ou ordinateur. Une fois les chansons ou livres audio disponibles, ils peuvent être contrôlés via RadauApp." },
        { question: "Est-ce que Spotify fonctionne ?", answer: "Malheureusement non pour le moment. RadauApp prend en charge Apple Music et les fichiers locaux, mais pas Spotify, car Spotify ne peut pas être contrôlé par une application externe." }
      ]
    },
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
    hero: {
      subtitle: "La Jukebox sostenible para niños",
      description: "Convierte tu viejo iPhone en un dispositivo de música inteligente para niños, sin necesidad de saber leer, pero con control total en el área para padres.",
      imageAlt: "RadauApp en un iPhone",
      ctaLink: "Descúbrela ahora en la App Store."
    },
    services: {
      title: "¿Qué es RadauApp?",
      description1: "La alternativa sostenible al TonieBox. ¿Tienes un iPhone 6s o más nuevo en casa? ¡Perfecto! Con RadauApp, lo conviertes en una caja de música súper fácil para tus pequeños.",
      features: [
        { title: "Apple Music y tus MP3", description: "Accede a la enorme biblioteca de Apple Music o reproduce tus propios archivos MP3." },
        { title: "Podcasts favoritos", description: "Integra los audiolibros y podcasts favoritos de tus hijos directamente en la aplicación." },
        { title: "Radio web segura para niños", description: "Añade estaciones de radio web seguras y entretenidas para niños." }
      ],
      description2: "El manejo es deliberadamente simple, sin necesidad de saber leer. Grandes mosaicos, iconos intuitivos y sin distracciones. ¡Solo toca y la música suena!",
      ctaLink: "Descubre todas las funciones en la app, ¡ya en la App Store!"
    },
    work: {
      title: "Modo para padres incluido",
      description: "En el área protegida para padres, puedes gestionarlo todo de forma segura detrás de un simple código de acceso:",
      features: [
        { text: "Gestionar medios (listas de reproducción, podcasts, emisoras de radio)" },
        { text: "Cambiar imágenes de portada" },
        { text: "Añadir o eliminar contenido" }
      ],
      imageAlt: "Modo para padres en la RadauApp"
    },
    benefits: {
        title: "Más que solo música",
        description: "RadauApp es el compañero perfecto para el día a día familiar, diseñado para superar los pequeños y grandes desafíos de forma sostenible y segura.",
        benefits: [
            { title: "Viajes en coche relajados", description: "Tu hijo elige su propio entretenimiento. Esto significa menos distracciones para ti y menos quejas desde el asiento trasero.", icon: "Car" },
            { title: "Tiempo de pantalla valioso", description: "Sin videos adictivos, solo una pantalla simple. Esto cuida los ojos y fomenta la imaginación a través de la escucha pura.", icon: "Eye" },
            { title: "Siempre y en todas partes", description: "Un viejo iPhone y unos auriculares es todo lo que necesitas. Compacta y ligera, RadauApp cabe en cualquier mochila, sin dispositivos adicionales voluminosos.", icon: "Headphones" },
            { title: "Ahorra dinero", description: "Ahórrate el costoso hardware especializado como TonieBox y compañía, y usa lo que ya tienes.", icon: "PiggyBank" },
            { title: "Sostenible", description: "Dale una segunda vida a tu viejo iPhone en lugar de dejar que acumule polvo en un cajón o tirarlo.", icon: "Recycle" },
            { title: "Seguro y Privado", description: "Control total sobre el contenido y sin dependencia de la nube. Tus datos se quedan contigo.", icon: "ShieldCheck" }
        ],
        ctaLink: "¿Convencido? Consigue la app en la App Store."
    },
    cta: {
      title: "Preguntas frecuentes",
      faqs: [
        { question: "¿Cómo bloqueo el iPhone para que solo se pueda usar una aplicación?", answer: <>Con la función de iOS 'Acceso Guiado' (en Ajustes > Accesibilidad). Esto permite restringir el dispositivo a la RadauApp. Apple ofrece una <a href="https://support.apple.com/es-es/111795" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">guía oficial</a> para ello.</> },
        { question: "¿La aplicación también funciona en el iPad?", answer: "¡Se está planeando una versión para iPad y estará disponible pronto, para que los dispositivos en desuso también puedan tener una segunda vida!" },
        { question: "¿Qué dispositivos son compatibles?", answer: "RadauApp funciona en cualquier iPhone a partir del modelo 6s con iOS 15 o posterior. Así puedes dar una nueva vida útil a dispositivos más antiguos." },
        { question: "¿Cómo gestiono las listas de reproducción?", answer: "Las listas de reproducción de música se gestionan en iTunes o en la aplicación Apple Music. Allí puedes suscribirte y gestionar canciones en listas de reproducción. RadauApp recupera estas listas y las presenta de forma adaptada para niños. En el modo para padres puedes editar la apariencia de las listas." },
        { question: "¿Cómo puedo usar mi propia música?", answer: "Puedes sincronizar tus propios archivos MP3 con tu teléfono a través de iTunes en tu Mac o PC. Una vez que las canciones o audiolibros estén disponibles, se pueden controlar a través de RadauApp." },
        { question: "¿Funciona con Spotify?", answer: "Lamentablemente, por el momento no. RadauApp es compatible con Apple Music y archivos locales, pero no con Spotify, ya que Spotify no se puede controlar desde una aplicación externa." }
      ]
    },
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

export default function HomeClient() {
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

  const getFaqLink = () => {
    switch (language) {
      case 'de': return "https://support.apple.com/de-de/111795";
      case 'fr': return "https://support.apple.com/fr-fr/111795";
      case 'es': return "https://support.apple.com/es-es/111795";
      default: return "https://support.apple.com/en-us/111795";
    }
  }
  
  const getFaqText = () => {
    switch(language) {
      case 'de': return {
        prefix: 'Mit der iOS-Funktion „Geführter Zugriff“ (unter Einstellungen > Bedienungshilfen). Damit kann das Gerät auf die RadauApp beschränkt werden. Apple bietet hierzu eine ',
        linkText: 'offizielle Anleitung'
      };
      case 'fr': return {
        prefix: "Avec la fonction iOS « Accès guidé » (sous Réglages > Accessibilité). Elle permet de restreindre l'appareil à RadauApp. Apple propose un ",
        linkText: 'guide officiel'
      };
      case 'es': return {
        prefix: "Con la función de iOS 'Acceso Guiado' (en Ajustes > Accesibilidad). Esto permite restringir el dispositivo a la RadauApp. Apple ofrece una ",
        linkText: 'guía oficial'
      };
      default: return {
        prefix: "With the iOS feature 'Guided Access' (under Settings > Accessibility). This allows you to restrict the device to the RadauApp. Apple provides an ",
        linkText: 'official guide'
      };
    }
  }

  const updatedFaqs = content.cta.faqs.map(faq => {
      if (faq.question.includes("sperre ich das iPhone") || faq.question.includes("lock the iPhone") || faq.question.includes("verrouiller l'iPhone") || faq.question.includes("bloqueo el iPhone")) {
          const faqContent = getFaqText();
          return {
              ...faq,
              answer: <>
                  {faqContent.prefix}
                  <a href={getFaqLink()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {faqContent.linkText}
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
