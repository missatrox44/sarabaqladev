"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from '@/components/ui/button';
// import { ModeToggle } from '@/components/theme/ModeToggle';
import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL, BLUESKY_URL } from "@/lib/constants";
import { RiBlueskyLine, RiTwitterXFill } from "react-icons/ri";


export const Footer: FunctionComponent = () => {
  return (
    <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div>
          <Link href="/rss">
            <Button variant="ghost">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
          {/* <ModeToggle /> */}
          <Link href={GITHUB_URL} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <Linkedin className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={BLUESKY_URL} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <RiBlueskyLine className="w-4 h-4" />
            </Button>
          </Link>
          <Link href={TWITTER_URL} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <RiTwitterXFill className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
