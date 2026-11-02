import type { MetadataRoute } from 'next';
import urlJoin from 'url-join';
import { config } from '@/config';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: config.baseUrl, lastModified: now, priority: 1 },
    { url: urlJoin(config.baseUrl, 'about'), lastModified: now, priority: 0.8 },
    { url: urlJoin(config.baseUrl, 'portfolio'), lastModified: now, priority: 0.8 },
    ...projects.map((p) => ({ url: urlJoin(config.baseUrl, 'portfolio', p.id), lastModified: now, priority: 0.6 })),
  ];
}
