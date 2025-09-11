"use client";

import { Calendar, Book } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const cardHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.01, transition: { type: "spring", stiffness: 260, damping: 18 } }
};

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* soft background flourish */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/.25), transparent 70%)" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matches your contact section timing (0.8s) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Education &amp; <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A timeline of my professional career and educational background.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical timeline line */}
          <motion.span
            aria-hidden
            className="absolute left-[1.375rem] top-0 bottom-0 w-0.5 bg-border md:left-[9.5rem]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.45 }} // triggers per-card as you scroll
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col md:flex-row"
              >
                {/* removed the green circle/dot */}

                {/* period */}
                <div className="flex items-center mb-3 md:mb-0 md:w-40 md:text-right md:pr-8">
                  <Calendar className="mr-2 h-4 w-4 md:hidden" />
                  <time className="text-sm font-semibold text-muted-foreground">
                    {item.period}
                  </time>
                </div>

                {/* card */}
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="flex-1 ml-12 md:ml-0"
                >
                  <div
                    className={cn(
                      "relative rounded-xl border p-5 shadow-sm card-forest",
                      item.type === "education" ? "bg-muted/40" : "bg-card"
                    )}
                  >
                    <div className="flex items-center mb-2">
                      {item.type === "education" ? (
                        <Book className="h-5 w-5 mr-2 text-primary" />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center mr-2">
                          <span className="font-bold text-sm">
                            {item.company?.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-bold leading-tight">{item.title}</h3>
                        <div className="text-sm text-muted-foreground truncate">
                          {item.company} • {item.location}
                        </div>
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}

                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <motion.span
                            key={`${skill}-${i}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.25, delay: i * 0.04 }}
                          >
                            <Badge variant="outline" className="rounded-full">
                              {skill}
                            </Badge>
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}