import Link from 'next/link';
import { ArrowDownIcon, ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-primary/10 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">Hello, I&apos;m Sara Baqla</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
              {/* <span className="block">Creative Designer</span> */}
              <span className="block text-primary">Full Stack Developer</span>
            </h1>
            <p className="max-w-lg text-xl text-muted-foreground">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#about">
                Learn More <ArrowDownIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-background shadow-2xl">
              <img 
                src="/pixar-sara.webp" 
                alt="Professional portrait" 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-primary/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link href="#about" className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 backdrop-blur-sm">
          <ArrowDownIcon className="h-6 w-6 text-primary" />
        </Link>
      </div>
    </section>
  );
}