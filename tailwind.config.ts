import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: '800px',
        desktop: '1280px',
      },
      colors: {
        baqla: {
          sky: 'rgb(var(--baqla-sky) / <alpha-value>)',
          blue: 'rgb(var(--baqla-blue) / <alpha-value>)',
          lime: 'rgb(var(--baqla-lime) / <alpha-value>)',
          olive: 'rgb(var(--baqla-olive) / <alpha-value>)',
          paper: 'rgb(var(--baqla-paper) / <alpha-value>)',
          card: 'rgb(var(--baqla-card) / <alpha-value>)',
          ink: 'rgb(var(--baqla-ink) / <alpha-value>)',
          muted: 'rgb(var(--baqla-muted) / <alpha-value>)',
          line: 'rgb(var(--baqla-line) / <alpha-value>)',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      borderRadius: {
        md: 'calc(var(--radius) - 2px)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
