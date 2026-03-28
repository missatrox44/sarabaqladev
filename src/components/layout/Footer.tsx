"use client";
import { config } from "@/config";
import { Rss, Github, Linkedin } from "lucide-react";
import { FunctionComponent } from "react";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, BLUESKY_URL } from "@/lib/constants";
import { RiBlueskyLine, RiTwitterXFill } from "react-icons/ri";


export const Footer: FunctionComponent = () => {
  return (
    <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <nav aria-label="Social links" className="flex items-center">
          <a href="/rss" aria-label="RSS Feed" className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
            <Rss className="w-4 h-4" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={BLUESKY_URL} target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
            <RiBlueskyLine className="w-4 h-4" />
          </a>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="inline-flex items-center justify-center h-10 w-10 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors">
            <RiTwitterXFill className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
};
