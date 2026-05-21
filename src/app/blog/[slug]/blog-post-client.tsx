'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import { getPostBySlugAndLang, blogTranslations, type BlogPost, type Language } from '@/lib/blog';
import Header from '@/components/header';
import Footer from '@/components/footer';

const footerTranslations = {
  de: { tagline: "Die nachhaltige Kinder-Jukebox", contact: "Kontakt", location: "Standort", imprint: "Impressum", privacy: "Datenschutz", copy: "Alle Rechte vorbehalten." },
  en: { tagline: "The sustainable kids jukebox", contact: "Contact", location: "Location", imprint: "Imprint", privacy: "Privacy", copy: "All rights reserved." },
  fr: { tagline: "Le jukebox durable pour enfants", contact: "Contact", location: "Localisation", imprint: "Mentions légales", privacy: "Confidentialité", copy: "Tous droits réservés." },
  es: { tagline: "La jukebox sostenible para niños", contact: "Contacto", location: "Ubicación", imprint: "Aviso legal", privacy: "Privacidad", copy: "Todos los derechos reservados." },
};

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold font-headline mt-8 mb-3 text-foreground">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold font-headline mt-10 mb-4 text-foreground">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold font-headline mt-10 mb-4 text-foreground">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline hover:opacity-80" target="_blank" rel="noopener">$1</a>')
    .replace(/^\| (.+) \|$/gm, (match) => match)
    .replace(/((\|.+\|\n)+)/g, (table) => {
      const rows = table.trim().split('\n');
      const header = rows[0];
      const body = rows.slice(2);
      const thCells = header.split('|').filter(c => c.trim()).map(c => `<th class="px-4 py-2 text-left font-semibold border-b border-border">${c.trim()}</th>`).join('');
      const bodyRows = body.map(row => {
        const cells = row.split('|').filter(c => c.trim()).map(c => `<td class="px-4 py-2 border-b border-border/50">${c.trim()}</td>`).join('');
        return `<tr class="hover:bg-muted/30">${cells}</tr>`;
      }).join('');
      return `<div class="overflow-x-auto my-6"><table class="w-full text-sm border border-border rounded-lg overflow-hidden"><thead class="bg-muted"><tr>${thCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
    })
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/(<li.+<\/li>\n?)+/g, (list) => `<ul class="my-4 space-y-1">${list}</ul>`)
    .replace(/\n\n/g, '</p><p class="my-4 text-muted-foreground leading-relaxed">')
    .replace(/^(?!<)(.+)$/gm, (line) => line.startsWith('<') ? line : line);
}

interface Props {
  post: BlogPost;
  initialLanguage: Language;
  slug: string;
}

export default function BlogPostClient({ post: initialPost, initialLanguage, slug }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const post = getPostBySlugAndLang(slug, language) || initialPost;
  const t = blogTranslations[language];
  const f = footerTranslations[language];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header language={language} setLanguage={setLanguage} />
      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-8 py-12 w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {t.backToBlog}
        </Link>
        <article>
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{t.by} {post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(language === 'de' ? 'de-DE' : language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime} {t.readingTime}</span>
            </div>
          </header>
          <div
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: `<p class="my-4 text-muted-foreground leading-relaxed">${renderMarkdown(post.content.trim())}</p>` }}
          />
        </article>
      </main>
      <Footer content={f} />
    </div>
  );
}
