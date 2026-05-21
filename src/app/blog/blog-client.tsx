'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Volume2, Clock, ArrowRight } from 'lucide-react';
import { getPostsByLang, blogTranslations, type Language } from '@/lib/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';

const footerTranslations = {
  de: { tagline: "Die nachhaltige Kinder-Jukebox", contact: "Kontakt", location: "Standort", imprint: "Impressum", privacy: "Datenschutz", copy: "Alle Rechte vorbehalten." },
  en: { tagline: "The sustainable kids jukebox", contact: "Contact", location: "Location", imprint: "Imprint", privacy: "Privacy", copy: "All rights reserved." },
  fr: { tagline: "Le jukebox durable pour enfants", contact: "Contact", location: "Localisation", imprint: "Mentions légales", privacy: "Confidentialité", copy: "Tous droits réservés." },
  es: { tagline: "La jukebox sostenible para niños", contact: "Contacto", location: "Ubicación", imprint: "Aviso legal", privacy: "Privacidad", copy: "Todos los derechos reservados." },
};

export default function BlogClient() {
  const [language, setLanguage] = useState<Language>('de');
  const posts = getPostsByLang(language);
  const t = blogTranslations[language];
  const f = footerTranslations[language];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1 max-w-4xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-headline text-primary mb-4">{t.title}</h1>
          <p className="text-lg text-muted-foreground">{t.subtitle}</p>
        </div>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all group">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(language === 'de' ? 'de-DE' : language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime} {t.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold font-headline text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}?lang=${language}`} className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                {t.readMore} <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer content={f} />
    </div>
  );
}
