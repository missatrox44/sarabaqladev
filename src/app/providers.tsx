'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={new QueryClient()}>
        {children}
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}