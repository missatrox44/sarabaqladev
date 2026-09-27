import Image from 'next/image';
import { experienceData } from '@/data/experience';
import { BAQLA_ExperienceList } from '@/components/sections/BAQLA_ExperienceList';
import { BAQLA_ContactForm } from '@/components/sections/BAQLA_ContactForm';

export const metadata = { title: 'About', description: 'About Sara Baqla, full stack developer.' };

const skills = ['React & Next.js', 'TypeScript', 'Python', 'REST & GraphQL APIs', 'SQL & NoSQL Databases', 'Shopify & Headless CMS', 'Accessibility (WCAG 2.1)', 'Modern Dev Tooling', 'Tailwind & SCSS'];

const photos = [
  { src: '/sara-seattle.webp', alt: 'Sara hugging a tree at Mount Rainer National Park' },
  { src: '/cactus-cats.webp', alt: 'Bagheera & Sylvester' },
  { src: '/dogs.webp', alt: 'Archimedes & Artemis' },
  { src: '/clones.webp', alt: 'Sara with her mirror clones' },
];

const heading = 'text-[26px] tablet:text-[30px] desktop:text-[34px] font-semibold';

export default function AboutPage() {
  return (
    <>
      <section className="baqla-band bg-baqla-olive px-6 pt-24 pb-16 text-baqla-lime tablet:px-12 desktop:pt-16">
        <Image src="/profile.webp" alt="Headshot of Sara Baqla" width={160} height={160} priority className="h-32 w-32 rounded-full object-cover ring-4 ring-baqla-lime tablet:h-40 tablet:w-40" />
        <p className="mt-6 font-hand text-[26px]">hi, I&apos;m Sara</p>
        <h1 className={heading}>About</h1>
        <div className="mt-6 max-w-prose space-y-4 text-lg">
          <p>I&apos;m a full stack developer with 3+ years of professional experience building dynamic, modern, scalable applications.</p>
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

      <section className="px-6 py-16 tablet:px-12" aria-label="Photos">
        <ul className="grid grid-cols-2 gap-3 tablet:grid-cols-4">
          {photos.map((p) => (
            <li key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 800px) 16vw, 50vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 pb-16 tablet:px-12">
        <h2 className={`${heading} text-baqla-ink`}>Experience</h2>
        <div className="mt-6"><BAQLA_ExperienceList entries={experienceData} tone="paper" /></div>
      </section>

      <section id="contact" className="baqla-band scroll-mt-20 desktop:scroll-mt-0 bg-baqla-olive px-6 pt-16 pb-32 text-baqla-lime tablet:px-12">
        <h2 className={heading}>Get in touch</h2>
        <p className="mt-3 max-w-prose">Always up for new projects and good conversations. Found a bug on the site? Tell me.</p>
        <div className="mt-8 max-w-xl"><BAQLA_ContactForm /></div>
        <a href="/baqla_resume_2025.pdf" download className="mt-10 inline-block font-semibold underline underline-offset-4">Download my résumé (PDF)</a>
      </section>
    </>
  );
}
