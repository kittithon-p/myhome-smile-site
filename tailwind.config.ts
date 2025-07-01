
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'prompt': ['Prompt', 'sans-serif'],
        'sarabun': ['Sarabun', 'sans-serif'],
      },
      colors: {
        // Shadcn compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        
        // Medical Design System Colors
        'medical-primary': 'hsl(var(--medical-primary))',
        'medical-primary-hover': 'hsl(var(--medical-primary-hover))',
        'medical-primary-light': 'hsl(var(--medical-primary-light))',
        'medical-secondary': 'hsl(var(--medical-secondary))',
        'medical-secondary-hover': 'hsl(var(--medical-secondary-hover))',
        'medical-secondary-light': 'hsl(var(--medical-secondary-light))',
        'medical-accent': 'hsl(var(--medical-accent))',
        'medical-accent-light': 'hsl(var(--medical-accent-light))',
        'medical-bg': 'hsl(var(--medical-bg))',
        'medical-surface': 'hsl(var(--medical-surface))',
        'medical-border': 'hsl(var(--medical-border))',
        'medical-text': 'hsl(var(--medical-text))',
        'medical-text-light': 'hsl(var(--medical-text-light))',
        'medical-text-muted': 'hsl(var(--medical-text-muted))',
        'medical-success': 'hsl(var(--medical-success))',
        'medical-success-hover': 'hsl(var(--medical-success-hover))',
        'medical-success-light': 'hsl(var(--medical-success-light))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        // Medical shadows
        'medical-sm': '0 1px 3px 0 hsl(var(--medical-primary) / 0.1)',
        'medical': '0 4px 6px -1px hsl(var(--medical-primary) / 0.1)',
        'medical-lg': '0 10px 15px -3px hsl(var(--medical-primary) / 0.1)',
        'medical-xl': '0 20px 25px -5px hsl(var(--medical-primary) / 0.1)',
        
        // Professional shadows
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'strong': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glow': '0 8px 32px rgba(59, 130, 246, 0.15)',
        '3xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        
        // Medical animations
        'medical-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'medical-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'medical-slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'medical-scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'medical-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'medical-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        
        // Medical animations
        'medical-fade-in': 'medical-fade-in 0.6s ease-out',
        'medical-slide-up': 'medical-slide-up 0.6s ease-out',
        'medical-slide-down': 'medical-slide-down 0.6s ease-out',
        'medical-scale-in': 'medical-scale-in 0.4s ease-out',
        'medical-float': 'medical-float 3s ease-in-out infinite',
        'medical-pulse': 'medical-pulse 2s ease-in-out infinite',
        'medical-bounce': 'bounce 2s infinite'
      },
      aspectRatio: {
        'medical-hero': '16 / 9',
        'medical-card': '4 / 3',
        'medical-square': '1 / 1',
        'medical-portrait': '3 / 4'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
