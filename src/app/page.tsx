// import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { LatestBlogs } from '@/components/sections/LatestBlogs';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <FeaturedProjects />
      <LatestBlogs />
      <Experience />
      <Contact /> 
    </>
  );
}