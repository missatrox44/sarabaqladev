import { Projects } from '@/components/sections/Projects';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'SB | Portfolio',
  description: 'A showcase of full stack web applications along with freelance apps and prototypes.'
};

export default function PortfolioPage() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="space-y-2 text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
           <span className="text-gradient">Portfolio</span>
          </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my complete portfolio of work, from web applications to design projects
        </p>
      </div>
      <Separator className="my-8" />
      <Projects />
    </div>
  );
}