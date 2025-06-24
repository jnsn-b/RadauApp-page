import type { Metadata } from 'next';
import DatenschutzClient from './datenschutz-client';

const siteUrl = "https://radau.app";

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  alternates: {
    canonical: '/datenschutz',
    languages: {
      'de-DE': `${siteUrl}/datenschutz`,
      'en-US': `${siteUrl}/datenschutz`,
      'fr-FR': `${siteUrl}/datenschutz`,
      'es-ES': `${siteUrl}/datenschutz`,
      'x-default': `${siteUrl}/datenschutz`,
    },
  },
};

export default function DatenschutzPage() {
  return <DatenschutzClient />;
}
