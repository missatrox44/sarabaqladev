"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/enhanced-button';
import { Download, ArrowRight } from 'lucide-react';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function HeroSection() {
  // const handleDownloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/baqla_resume_2025.pdf';
  //   link.download = 'baqla_resume_2025.pdf';
  //   link.click();
  // };

  // const scrollToProjects = () => {
  //   document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  // };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-abstract.webp')` }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-forest blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-fern blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <span className="text-foreground">Sara</span>{' '}
              <span className="text-gradient">Baqla</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer —{' '}
              <span className="text-accent font-medium">React, React Native, Next.js </span>
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting exceptional digital experiences with modern technologies.
              Passionate about creating scalable applications that make a difference.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="min-w-[200px] group"
            >
              Featured Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('blog')}
              className="min-w-[200px] group"
            >
              Latest Blogs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* <Button
              variant="forest-outline"
              size="xl"
              onClick={() => window.open('/baqla_resume_2025.pdf', '_blank')}
              className="min-w-[200px] group"
            >
              View Resume
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button> */}


            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild> */}
            {/* <Button
                    variant="forest-outline"
                    size="xl"
                    onClick={handleDownloadResume}
                    className="min-w-[200px] group"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button> */}
            {/* </TooltipTrigger> */}
            {/* <TooltipContent>
                  <p>Add your resume to /public and try again if file is missing</p>
                </TooltipContent> */}
            {/* </Tooltip>
            </TooltipProvider> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              {/* <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="h-4 w-4" /> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}