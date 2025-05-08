"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/ModeToggle';
import { Github, Linkedin } from "lucide-react";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";


export const Footer: FunctionComponent = () => {
  return (
    <footer className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        {/* <div className="text-xs text-muted-foreground hidden lg:block">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          >
            Blog powered by wisp
          </Link>
        </div> */}
        <div>
          <Link href="/rss">
            <Button variant="ghost">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
          <ModeToggle />
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
        </div>
      </div>
      {/* <div className="text-xs text-muted-foreground lg:hidden">
        <Link
          href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`} target="_blank" rel="noreferrer">
          Blog powered by wisp
        </Link>
      </div> */}
    </footer>
  );
};
