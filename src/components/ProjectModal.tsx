import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/enhanced-button';
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/data/projects"

type ProjectDialogProps = {
  project: Project | null
  onClose: () => void
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-10">
        {project && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <DialogHeader>
              <div className="flex items-start w-full">
                <DialogTitle className="text-2xl mb-2 text-gradient">
                  {project.title}
                </DialogTitle>

                {project.attributions?.length ? (
                  <div className="flex gap-2 items-center ml-auto">
                    {project.attributions.map((a, i) => (
                      <a
                        key={i}
                        href={a.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex"
                        aria-label={`Open ${a.org} in a new tab`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Badge
                          className="h-fit hover:bg-pink-600 focus:ring-pink-500"
                          variant="highlight"
                        >
                          {a.org}
                        </Badge>
                      </a>
                    ))}
                  </div>
                ) : null}

              </div>
              {/* <DialogDescription className="text-base">
                {project.longDescription}
              </DialogDescription> */}
            </DialogHeader>

            <div className="mt-6 space-y-6">
              {/* Project Image */}
              <div className="rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="md:px-12 rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* Problem, Solution, Impact */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-destructive">Problem</h4>
                  <p className="text-sm text-muted-foreground">{project.problem}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Solution</h4>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Impact</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                {project.liveDemo && (
                  <Button variant="hero" onClick={() => window.open(project.liveDemo, "_blank")}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.attributions?.some((a) => ["Reach", "Freelance"].includes(a.org))
                      ? "Visit Site"
                      : "Live Demo"}
                  </Button>
                )}

                {project.github ? (
                  <Button variant="forest-outline" onClick={() => window.open(project.github, "_blank")}>
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
  )
}