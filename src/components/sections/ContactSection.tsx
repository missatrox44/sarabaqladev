"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Send, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mzzrdayr");
  const formRef = useRef<HTMLFormElement>(null);
  // Show success message when form is submitted
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      formRef.current?.reset();
    }
  }, [state.succeeded, toast]);

  useEffect(() => {
    if (state.errors && Array.isArray(state.errors) && state.errors.length > 0) {
      toast({
        title: "Submission Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  },
 [state.errors, toast]);
  
  const contactLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'missatrox44@gmail.com',
      href: 'mailto:missatrox44@gmail.com'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/missatrox44',
      href: 'https://github.com/missatrox44'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/sara-baqla',
      href: 'https://www.linkedin.com/in/sara-baqla/'
    }
  ];

  

  return (
    <section id="contact" className="py-20 scroll-mt-[80px]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s build something together. Whether it&apos;s a new project, collaboration, or just a chat about tech.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I&apos;m always interested in new opportunities, interesting projects, and great conversations. 
                Whether you&apos;re looking to collaborate or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 card-forest group cursor-pointer"
                >
                  <link.icon className="h-6 w-6 text-primary mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {link.value}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-forest">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* {state.succeeded ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-lg font-medium mb-2">
                      Thanks for your message!
                    </div>
                    <p className="text-muted-foreground">
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : ( */}
                  <form  ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        required
                        className="bg-background/50 resize-none"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={state.submitting}
                      className="w-full"
                    >
                      {state.submitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="mr-2 h-4 w-4" />
                      )}
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                {/* )} */}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}