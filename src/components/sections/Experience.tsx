import { Book, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { experienceData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block">
            <Badge variant="outline" className="text-sm font-medium rounded-full px-4 py-1">
              My Journey
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A timeline of my professional career and educational background.
          </p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border md:before:ml-[9.5rem] md:space-y-0">
          {experienceData.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row">
              
              <div className="flex items-center mb-2 md:mb-0 md:w-40 md:text-right md:pr-8">
                <Calendar className="mr-2 h-4 w-4 md:hidden" />
                <time className="text-sm font-semibold text-muted-foreground">{item.period}</time>
              </div>
              
              <div className="flex-1 ml-12 md:ml-0 pb-8">
                <div className={cn(
                  "relative rounded-lg border p-5 shadow-sm",
                  item.type === 'education' ? 'bg-muted/50' : 'bg-card',
                )}>
                  <div className="flex items-center mb-2">
                    {item.type === 'education' ? (
                      <Book className="h-5 w-5 mr-2 text-primary" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-2">
                        <span className="font-bold text-sm">{item.company.charAt(0)}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {item.company} • {item.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                  {item.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="rounded-full">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}