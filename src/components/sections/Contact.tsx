'use client';

import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send,
  Github, Linkedin, Twitter
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("mzzrdayr");

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <div className="inline-block">
            <Badge variant="outline" className="text-sm font-medium rounded-full px-4 py-1">
              Get In Touch
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let&apos;s talk about your project</h3>
              <p className="text-muted-foreground">
                I&apos;m interested in freelance opportunities – especially ambitious or large projects. 
                However, if you have any other requests or questions, don&apos;t hesitate to use the form.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:missatrox44@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    missatrox44@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+14323634743" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (432) 363-4743
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Texas, USA</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href={GITHUB_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors border"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a 
                  href={LINKEDIN_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors border"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                {/* <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-background transition-colors border"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
            {state.succeeded ? (
              <p className="text-green-600 text-center">Thanks for your message!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" name="name" required placeholder="Your name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" name="email" required placeholder="Your email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" name="subject" required placeholder="Subject of your message" />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={4} required placeholder="Your message..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <Button 
                  type="submit"
                  disabled={state.submitting}
                  className={cn("w-full", state.submitting && "opacity-70")}
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}