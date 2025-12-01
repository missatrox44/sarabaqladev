import { About } from '@/components/sections/About';
import { LatestBlogs } from '@/components/sections/LatestBlogs';
import { Experience } from '@/components/sections/Experience';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <FeaturedProjectsSection />
      <LatestBlogs />
      <Experience />
      <ContactSection /> 
    </>
  );
}