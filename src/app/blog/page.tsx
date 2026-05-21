import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Blog – Tipps & Vergleiche | RadauApp',
  description: 'Tipps, Vergleiche und Wissenswertes rund um die RadauApp und nachhaltige Kinderunterhaltung. Toniebox Alternative, iPhone Upcycling und mehr.',
  alternates: {
    canonical: '/blog',
    languages: {
      'de-DE': 'https://radau.app/blog',
      'en-GB': 'https://radau.app/blog',
      'fr-FR': 'https://radau.app/blog',
      'es-ES': 'https://radau.app/blog',
    },
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
