"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { projects, Project } from '@/data/projects';
import Link from 'next/link';
import ProjectModal from '@/components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 md:py-24 scroll-mt-[80px]">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I&apos;ve built. The portfolio reflects both freelance ventures and select professional projects from my career journey.
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
              <Card className="card-forest h-full group flex flex-col">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
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

        <div className="mt-10 text-center">
          <Link href="/portfolio">
            <Button variant="hero">View Portfolio</Button>
          </Link>
        </div>

        {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      </div>
    </section >
  );
}