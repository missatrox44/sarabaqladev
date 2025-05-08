import { Code, Palette, Globe, Monitor, Figma, Layout, Laptop, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  { name: 'Frontend Development', icon: <Layout className="h-5 w-5" /> },
  { name: 'Backend Development', icon: <Database className="h-5 w-5" /> },
  { name: 'UX/UI Design', icon: <Figma className="h-5 w-5" /> },
  { name: 'Responsive Design', icon: <Laptop className="h-5 w-5" /> },
  { name: 'JavaScript', icon: <Code className="h-5 w-5" /> },
  { name: 'React', icon: <Monitor className="h-5 w-5" /> },
  { name: 'CSS/SCSS', icon: <Palette className="h-5 w-5" /> },
  { name: 'Web Performance', icon: <Globe className="h-5 w-5" /> },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="text-sm font-medium rounded-full px-4 py-1">
                About Me
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Creative developer with a passion for building exceptional digital experiences
            </h2>
            <p className="text-lg text-muted-foreground">
            As a science-loving, code-wielding full-stack web developer, I create user-friendly apps with serious impact. My systematic problem-solving skills were fine-tuned at UT Austin&apos;s web development boot camp. I&apos;m resourceful and always staying up to date with the latest trends.
            </p>
            <p className="text-lg text-muted-foreground">
            But wait, there&apos;s more! I&apos;m not just a coding maestro; I also play the trumpet! For two decades, I&apos;ve performed with various groups across multiple genres, putting a smile on people&apos;s faces and a beat in their feet. Some of my heroes? Freddie Hubbard, Clifford Brown, Miles Davis, and Dizzy Gillespie. I&apos;ve even shared my wisdom as a trumpet tutor, shaping the next generation of brass warriors.
            </p>
            <p className="text-lg text-muted-foreground">
          When I&apos;m not jamming or coding, I&apos;m an outdoor enthusiast and bookworm
          extraordinaire. From hanging out in trees to diving into captivating
          reads, I seize every moment. My most epic adventures?{" "}
          <a
            href="https://www.fs.usda.gov/recarea/stnf/recarea/?recid=6521"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trinity Alps Wilderness
          </a>
          ,{" "}
          <a
            href="https://www.nps.gov/romo/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rocky Mountain National Park
          </a>
          , and{" "}
          <a
            href="https://www.nps.gov/arch/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arches National Park
          </a>{" "}
          --pure bliss!
        </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-background border rounded-full px-4 py-2"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-8 border-background shadow-xl">
              <img 
                src="/sara-seattle.jpeg" 
                alt="Professional working at desk" 
                className="h-full w-full object-cover"
              />
              
              <div className="absolute top-6 left-0 bg-background/95 backdrop-blur-sm rounded-r-lg shadow-lg p-4 border">
                <p className="text-sm font-medium text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold">4+ Years</p>
              </div>
              
              <div className="absolute bottom-6 right-0 bg-background/95 backdrop-blur-sm rounded-l-lg shadow-lg p-4 border">
                <p className="text-sm font-medium text-muted-foreground">Projects</p>
                <p className="text-2xl font-bold">50+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}