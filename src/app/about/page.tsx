import Image from 'next/image';
import { experienceData, type Experience } from '@/data/experience';
import { BAQLA_ExperienceList } from '@/components/sections/BAQLA_ExperienceList';
import { BAQLA_ContactForm } from '@/components/sections/BAQLA_ContactForm';
import { EMAIL, HEADING_CLASS } from '@/lib/constants';

export const metadata = { title: 'About', description: 'About Sara Baqla, full stack developer.' };

const skills = ['AI-native development', 'React & Next.js', 'TypeScript', 'Python', 'SQL & NoSQL Databases', 'Shopify & Headless CMS', 'Accessibility (WCAG 2.1)'];
const photos = [
  { src: '/sara-seattle.webp', alt: 'Sara hugging a tree at Mount Rainer National Park' },
  { src: '/cactus-cats.webp', alt: 'Bagheera & Sylvester' },
  { src: '/dogs.webp', alt: 'Archimedes & Artemis' },
  { src: '/clones.webp', alt: 'Sara with her mirror clones' },
];

function CollapsibleList({ title, type }: { title: string; type: Experience['type'] }) {
  return (
    <details className="baqla-collapsible group relative bg-baqla-paper px-6 pb-16 tablet:px-12">
      <summary className="flex cursor-pointer list-none items-center gap-3 text-baqla-ink [&::-webkit-details-marker]:hidden">
        <h2 className={HEADING_CLASS}>{title}</h2>
        <span aria-hidden="true" className="text-2xl text-baqla-olive transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-90">›</span>
      </summary>
      <div className="pt-6"><BAQLA_ExperienceList entries={experienceData.filter((e) => e.type === type)} tone="paper" /></div>
    </details>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="sticky top-0 aspect-[16/9] w-full bg-baqla-card">
        <Image src="/about-hero.webp" alt="Sara Baqla standing by a pond with a backpack, looking over her shoulder" fill priority sizes="(min-width: 1280px) 66vw, 100vw" className="object-cover" />
      </div>
      <section className="baqla-band relative bg-baqla-olive px-6 pt-16 pb-16 text-baqla-lime tablet:px-12">
        <p className="font-hand text-[26px]">hi, I&apos;m Sara</p>
        <h1 className={HEADING_CLASS}>About</h1>
        <div className="mt-6 max-w-prose space-y-4 text-lg">
          <p>I&apos;m a full stack developer based in Texas with 4+ years of professional experience building dynamic, modern, scalable applications.</p>
          <p>My background in ecology research and teaching sharpens my communication and analytical skills, making me as comfortable bridging teams as I am writing code.</p>
          <p>When I&apos;m not coding, you&apos;ll find me outdoors, reading, or playing trumpet. Always learning, always building.</p>
        </div>
        <h2 className="mt-10 text-lg font-semibold">Core skills</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-baqla-lime/40 px-3 py-1.5 text-sm">{s}</li>
          ))}
        </ul>
      </section>

      <section className="relative bg-baqla-paper px-6 py-16 tablet:px-12" aria-label="Photos">
        <ul className="grid grid-cols-2 gap-3 tablet:grid-cols-4">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 800px) 16vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative bg-baqla-paper px-6 pb-16 tablet:px-12">
        <h2 className={`${HEADING_CLASS} text-baqla-ink`}>Experience</h2>
        <div className="mt-6"><BAQLA_ExperienceList entries={experienceData.filter((e) => e.type === 'work')} tone="paper" /></div>
      </section>

      <CollapsibleList title="The Before Times" type="prior" />
      <CollapsibleList title="Education" type="education" />

      <section id="contact" className="baqla-band relative scroll-mt-20 desktop:scroll-mt-0 bg-baqla-olive px-6 pt-16 pb-32 text-baqla-lime tablet:px-12">
        <h2 className={HEADING_CLASS}>Get in touch</h2>
        <p className="mt-3 max-w-prose">Always up for new projects and good conversations. Found a bug on the site? Tell me.</p>
        <div className="mt-8 max-w-xl"><BAQLA_ContactForm /></div>
        <p className="mt-6">Or email me at <a href={`mailto:${EMAIL}`} className="font-semibold underline underline-offset-4 hover:text-baqla-card">{EMAIL}</a>.</p>
      </section>
    </>
  );
}
