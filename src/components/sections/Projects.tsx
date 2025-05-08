"use client";
import { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { projectData } from '@/lib/data';

// List of all unique technologies across projects
const allTechnologies = Array.from(
  new Set(projectData.flatMap(project => project.technologies))
).sort();

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Filter projects based on search query and selected technology
  const filteredProjects = projectData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true;
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
            placeholder="Search projects..."
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
          <div 
            key={index} 
            className="group relative bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className={`rounded-full ${selectedTech === tech ? "bg-primary text-primary-foreground" : ""}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-bold">No projects found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}