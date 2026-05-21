import type { Metadata } from 'next';
import HomeClient from './home-client';

const structuredData = {
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
  "url": "https://apps.apple.com/de/app/radauapp/id6745492017?l=en-GB"
};

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
    'application/ld+json': JSON.stringify(structuredData),
  },
};


export default function Home() {
  return <HomeClient />;
}
