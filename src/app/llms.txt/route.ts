import urlJoin from 'url-join';
import { config } from '@/config';
import { projects } from '@/data/projects';
import { allSkills } from '@/lib/skills';

export const dynamic = 'force-static';

export function GET() {
  const url = (path: string) => urlJoin(config.baseUrl, path);
  const body = [
    '# Sara Baqla',
    '',
    '> Full stack developer. AI-native, focused on React, Next.js, TypeScript, Shopify, and headless CMS builds. Background in ecology research and teaching.',
    '',
    '## Pages',
    `- [Home](${url('/')})`,
    `- [About](${url('/about')})`,
    `- [Portfolio](${url('/portfolio')})`,
    `- [Blog](${url('/blog')})`,
    '',
    '## Skills',
    allSkills.join(', '),
    '',
    '## Projects',
    ...projects.map((p) => `- [${p.title}](${url(`/portfolio/${p.id}`)}): ${p.shortDescription} (${p.techStack.join(', ')})`),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
