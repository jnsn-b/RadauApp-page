import { MetadataRoute } from 'next';

// IMPORTANT: Please replace this with your actual domain.
const siteUrl = "https://radau.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/impressum', '/datenschutz'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.5,
  }));

  return routes;
}
