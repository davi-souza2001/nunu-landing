import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

// Export estático: gera o sitemap.xml no build.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, changeFrequency: 'monthly', priority: 1 }];
}
