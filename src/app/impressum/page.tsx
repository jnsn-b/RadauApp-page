import type { Metadata } from 'next';
import ImpressumClient from './impressum-client';

const siteUrl = "https://radau.app";

export const metadata: Metadata = {
  title: 'Impressum',
  alternates: {
    canonical: '/impressum',
    languages: {
      'de-DE': `${siteUrl}/impressum`,
      'en-US': `${siteUrl}/impressum`,
      'fr-FR': `${siteUrl}/impressum`,
      'es-ES': `${siteUrl}/impressum`,
      'x-default': `${siteUrl}/impressum`,
    },
  },
};

export default function ImpressumPage() {
  return <ImpressumClient />;
}
