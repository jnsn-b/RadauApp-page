import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';

const siteUrl = "https://radau.app";
const langs = ['de', 'en', 'fr', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/impressum', '/datenschutz', '/blog'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : route === '/blog' ? 0.8 : 0.5,
  }));

  const blogRoutes = getAllSlugs().flatMap(slug =>
    langs.map(lang => ({
      url: `${siteUrl}/blog/${slug}?lang=${lang}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticRoutes, ...blogRoutes];
}
