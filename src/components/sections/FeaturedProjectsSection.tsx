"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects, Project } from '@/data/projects';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I&apos;ve built, from concept to deployment. Each project tells a story of problem-solving and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="card-forest h-full group">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                  <div className="flex gap-3">
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
                      <DialogTitle className="text-2xl mb-2">
                        {selectedProject.title}
                      </DialogTitle>
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
                      className="w-full h-full object-cover"
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
                    {/* <Button
                      variant="ghost"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}