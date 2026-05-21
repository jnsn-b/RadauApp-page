import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllSlugs, getPostBySlugAndLang, type Language } from '@/lib/blog';
import BlogPostClient from './blog-post-client';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const langs: Language[] = ['de', 'en', 'fr', 'es'];
  return slugs.flatMap(slug => langs.map(lang => ({ slug, lang })));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { lang } = await searchParams;
  const language = (lang as Language) || 'de';
  const post = getPostBySlugAndLang(slug, language) || getPostBySlugAndLang(slug, 'de');
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    other: post.faqSchema ? {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      })
    } : {},
  };
}

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const language = (lang as Language) || 'de';
  const post = getPostBySlugAndLang(slug, language) || getPostBySlugAndLang(slug, 'de');
  if (!post) notFound();
  return <BlogPostClient post={post} initialLanguage={language} slug={slug} />;
}
