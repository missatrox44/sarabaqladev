"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { projects, Project } from '@/data/projects';
import ProjectModal from '@/components/ProjectModal';

// List of all unique technologies across projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.techStack))
).sort();

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const handleTechFilter = (tech: string) => {
    setSelectedTechs(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };
  const filteredProjects: Project[] = projects.filter(project => {
    const q = searchQuery.trim().toLowerCase();

    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.longDescription.toLowerCase().includes(q) ||
      project.problem.toLowerCase().includes(q) ||
      project.solution.toLowerCase().includes(q) ||
      project.impact.toLowerCase().includes(q) ||
      project.techStack.some(
        tech =>
          tech.toLowerCase().includes(q) ||
          (project.attributions &&
            project.attributions.some(attr => attr.org.toLowerCase().includes(q)))
      );

    const matchesTech =
      selectedTechs.length === 0
        ? true
        : selectedTechs.every(t => project.techStack.includes(t));

    return matchesSearch && matchesTech;
  });


  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            aria-label="Search portfolio"
            placeholder="Search portfolio..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedTechs.length > 0 && (
            <>
              {selectedTechs.map(t => (
                <button
                  key={t}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer"
                  onClick={() => handleTechFilter(t)}
                  aria-label={`Remove ${t} filter`}
                >
                  {t} ✕
                </button>
              ))}
              <button
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer"
                onClick={() => setSelectedTechs([])}
              >
                Clear all
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar" role="group" aria-label="Filter by technology">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            aria-pressed={selectedTechs.includes(tech)}
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap",
              selectedTechs.includes(tech)
                ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                : "text-foreground border-border hover:bg-accent hover:text-accent-foreground"
            )}
            onClick={() => handleTechFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
          >
            <Card className="card-forest h-full group flex flex-col">
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>

                  {/* Right-aligned pills */}
                  {project.attributions?.length ? (
                    <div className="ml-2 flex gap-2 justify-end">
                      {project.attributions.map((a, i) => (
                        <a
                          key={i}
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-flex"
                          aria-label={`Open ${a.org} in a new tab`}
                          onClick={e => e.stopPropagation()}
                        >
                          <Badge
                            className="h-fit hover:bg-pink-600 focus:ring-pink-500" variant="highlight"
                          >
                            {a.org}
                          </Badge>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="forest-ghost"
                    size="sm"
                    className="flex-1 text-xs group-hover:bg-primary/10 group-hover:border-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {
        filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold">No projects found</h3>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )
      }
    </div >
  );
}