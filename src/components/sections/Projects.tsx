"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { projects, Project } from '@/data/projects';

// List of all unique technologies across projects
const allTechnologies = Array.from(
  new Set(projects.flatMap(project => project.techStack))
).sort();

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on search query and selected technology
  const filteredProjects: Project[] = projects.filter(project => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.longDescription.toLowerCase().includes(q) ||
      project.problem.toLowerCase().includes(q) ||
      project.solution.toLowerCase().includes(q) ||
      project.impact.toLowerCase().includes(q) ||
      project.techStack.some(tech => tech.toLowerCase().includes(q) ||
        (project.attributions &&
          project.attributions.some(attr =>
            attr.org.toLowerCase().includes(q)
          )
        ));
    const matchesTech = selectedTech ? project.techStack.includes(selectedTech) : true;
    return matchesSearch && matchesTech;
  });

  const handleTechFilter = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search portfolio..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedTech && (
            <Badge
              variant="secondary"
              className="cursor-pointer"
              onClick={() => setSelectedTech(null)}
            >
              Clear filter
            </Badge>
          )}
        </div>
      </div>

      <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar">
        {allTechnologies.map((tech) => (
          <Badge
            key={tech}
            variant={selectedTech === tech ? "default" : "outline"}
            className="cursor-pointer whitespace-nowrap"
            onClick={() => handleTechFilter(tech)}
          >
            {tech}
          </Badge>
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
            onClick={() => setSelectedProject(project)}
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
                    <div className="flex gap-2 justify-end">
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
                    className="flex-1 text-xs"
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
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex justify-between items-center">
                      <DialogTitle className="text-2xl mb-2 text-gradient">
                        {selectedProject.title}
                      </DialogTitle>
                      {selectedProject.attributions?.length ? (
                        <div className="flex gap-2 mr-3">
                          {selectedProject.attributions.map((a, i) => (
                            <a
                              key={i}
                              href={a.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group relative inline-flex"
                              aria-label={`Open ${a.org} in a new tab`}
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
                    <DialogDescription className="text-base">
                      {selectedProject.longDescription}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Problem, Solution, Impact */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-destructive">Problem</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.solution}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent">Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.liveDemo && (
                    <Button
                      variant="hero"
                      onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProject.github ? (
                    <Button
                      variant="forest-outline"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  ) : (
                    <Button variant="ghost" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Private Repo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

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