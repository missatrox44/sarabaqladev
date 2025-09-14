"use client";

import { Palette, Globe, Monitor, Layout, Database, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';


const skills = [
  { name: 'Full Stack Development', icon: <Layout className="h-5 w-5" /> },
  { name: 'React & Next.js', icon: <Monitor className="h-5 w-5" /> },
  { name: 'React Native', icon: <Smartphone className="h-5 w-5" /> },
  { name: 'Node.js & APIs', icon: <Database className="h-5 w-5" /> },
  { name: 'Headless CMS Integration', icon: <Globe className="h-5 w-5" /> },
  { name: 'Tailwind & SCSS', icon: <Palette className="h-5 w-5" /> },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* <div className="inline-block">
              <Badge variant="outline" className="text-sm font-medium rounded-full px-4 py-1">
                About Me
              </Badge>
            </div> */}
            {/* <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
             Always Learning, <span className="text-gradient">Always Building</span>
            </h2> */}

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet <span className="text-gradient">Sara</span>
            </h2>


            <p className="text-lg text-muted-foreground">
              I&apos;m a full stack developer with 3+ years of professional experience building dynamic, modern, scalable applications.
            </p>
            <p className="text-lg text-muted-foreground">
              My background in ecology research and teaching sharpens my communication and analytical skills, making me as comfortable bridging teams as I am writing code.
            </p>

            <p className="text-lg text-muted-foreground">
              When I&apos;m not coding, you&apos;ll find me outdoors, reading, or playing trumpet. Always learning,
              always building.
            </p>
            <div className="pt-2">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-background border rounded-full px-4 py-2"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-3 p-2 md:p-3">
                {/* Tall left - hidden mobile */}
                <div className="hidden md:block md:col-span-4 row-span-2">
                  <img src="/sara-seattle.webp" alt="Sara hugging a tree at Mount Rainer National Park" className="h-full w-full object-cover rounded-xl aspect-[3/4]"   loading="lazy" />
                </div>

                {/* Wide top */}
                <div className="col-span-6 md:col-span-8">
                  <img src="/cactus-cats.webp" alt="Bagheera & Sylvester" className="h-full w-full object-cover rounded-xl aspect-[16/9]"  loading="lazy" />
                </div>

                {/* Two squares */}
                <div className="col-span-3 md:col-span-4">
                  <img src="/profile.webp" alt="Headshot of Sara Baqla" className="h-full w-full object-cover rounded-xl aspect-square"   loading="lazy" />
                </div>
                <div className="col-span-3 md:col-span-4">
                  <img src="/dogs.webp" alt="Archimedes & Artemis" className="h-full w-full object-cover rounded-xl aspect-square"   loading="lazy" />
                </div>

                {/* Wide bottom */}
                <div className="col-span-6 md:col-span-12">
                  <img src="clones.webp" alt="Sara with her mirror clones" className="h-full w-full object-cover rounded-xl aspect-[21/9]"   loading="lazy" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}