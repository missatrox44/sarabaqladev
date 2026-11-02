import { projects } from '@/data/projects';
import { BAQLA_ProjectCard } from '@/components/sections/BAQLA_ProjectCard';
import { BAQLA_Reveal } from '@/components/sections/BAQLA_Reveal';
import { HEADING_CLASS } from '@/lib/constants';

export const metadata = {
  title: 'Portfolio',
  description: 'A showcase of full stack web applications along with freelance apps and prototypes.',
};

export default function PortfolioPage() {
  return (
    <section className="px-6 pt-20 pb-32 tablet:px-12 desktop:pt-16">
      <p className="font-hand text-[26px] text-baqla-olive">things I&apos;ve built</p>
      <h1 className={`${HEADING_CLASS} text-baqla-ink`}>Portfolio</h1>
      <ul className="mt-10 grid gap-6 tablet:grid-cols-2">
        {projects.map((p) => (
          <li key={p.id}><BAQLA_Reveal className="h-full"><BAQLA_ProjectCard project={p} headingLevel="h2" /></BAQLA_Reveal></li>
        ))}
      </ul>
    </section>
  );
}
