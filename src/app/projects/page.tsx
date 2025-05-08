import { Projects } from '@/components/sections/Projects';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'All Projects | My Portfolio',
  description: 'Explore my complete portfolio of projects and case studies'
};

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore my complete portfolio of work, from web applications to design projects
        </p>
      </div>
      <Separator className="my-8" />
      <Projects />
    </div>
  );
}