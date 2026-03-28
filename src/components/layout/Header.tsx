'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/enhanced-button';
import {
  Menu, X, GithubIcon, LinkedinIcon
} from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape and trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    // Focus first menu link when menu opens
    firstMenuLinkRef.current?.focus();

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-sm",
        scrolled
          ? "bg-background/95 border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:font-medium"
      >
        Skip to content
      </a>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-1 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient">
              sarabaqla.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 pl-8">
            <div className="flex items-center space-x-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <Button asChild variant="hero">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              ref={menuButtonRef}
              variant="ghostIcon"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6 z-[999]" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background z-[100] backdrop-blur-md flex flex-col justify-start pt-16 px-6 transition-transform duration-300 ease-in-out h-[100dvh]",
          isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col space-y-6 text-center pt-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              ref={index === 0 ? firstMenuLinkRef : undefined}
              onClick={closeMenu}
              className={cn(
                "text-xl font-medium py-2 border-b border-border",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-4" variant="hero" onClick={closeMenu} >
            <Link href="/#contact">Contact</Link>
          </Button>
          <div className="flex justify-center space-x-6 pt-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}