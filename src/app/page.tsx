import type { Metadata } from 'next';
import HomeClient from './home-client';

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RadauApp",
    "operatingSystem": "iOS, iPadOS",
    "applicationCategory": "MusicApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "88"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Mach aus deinem alten iPhone ein smartes Musikgerät für Kinder – ganz ohne Lesen, aber mit voller Kontrolle im Elternbereich.",
    "url": "https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB",
    "author": {
      "@type": "Person",
      "name": "Jens Becker",
      "url": "https://radau.app/blog/unsere-geschichte"
    },
    "keywords": "Toniebox Alternative, Kinder Musikbox, altes iPhone, Apple Music Kinder, Yoto Alternative, Tigerbox Alternative",
    "inLanguage": ["de", "en", "fr", "es"],
    "isAccessibleForFree": true,
    "softwareVersion": "1.0",
    "screenshot": "https://radau.app/1_DE.webp"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RadauApp",
    "url": "https://radau.app",
    "logo": "https://radau.app/RadauAppLogo.png",
    "founder": {
      "@type": "Person",
      "name": "Jens Becker"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "radau.app@team-becker.net",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://apps.apple.com/de/app/radauapp/id6745492017"
    ]
  }
];

const siteUrl = "https://radau.app";

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': `${siteUrl}/`,
      'en-US': `${siteUrl}/`,
      'fr-FR': `${siteUrl}/`,
      'es-ES': `${siteUrl}/`,
      'x-default': `${siteUrl}/`,
    },
  },
  other: {
    'application/ld+json': JSON.stringify(structuredData[0]),
    'application/ld+json-org': JSON.stringify(structuredData[1]),
  },
};


export default function Home() {
  return <HomeClient />;
}
