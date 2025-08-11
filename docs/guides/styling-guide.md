# Styling Guide

This guide covers the styling conventions, design system, and best practices for the Scorpion UI project.

## Design System Overview

Scorpion UI combines modern web standards with a retro aesthetic, using Tailwind CSS as the foundation with custom design tokens and components.

### Core Principles
1. **Consistency**: Unified visual language across all components
2. **Accessibility**: WCAG 2.1 AA compliance for color contrast and interaction
3. **Responsiveness**: Mobile-first approach with graceful scaling
4. **Performance**: Optimized CSS delivery and minimal runtime styles
5. **Maintainability**: Scalable architecture with clear naming conventions

## Color System

### CSS Custom Properties
Colors are defined using CSS custom properties in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  --chart-3: 197 37% 24%;
  --chart-4: 43 74% 66%;
  --chart-5: 27 87% 67%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode values */
}
```

### Usage in Components
```css
/* Using HSL color space with CSS custom properties */
.component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

/* Tailwind classes map to these variables */
.bg-primary { background-color: hsl(var(--primary)); }
.text-primary-foreground { color: hsl(var(--primary-foreground)); }
```

### Retro Color Palette
Additional retro-specific colors for themed components:

```css
:root {
  --retro-green: 120 100% 40%;
  --retro-amber: 45 100% 50%;
  --retro-cyan: 180 100% 50%;
  --retro-magenta: 300 100% 50%;
  --pixel-shadow: 0 0% 20%;
  --scan-line: 120 100% 30%;
}
```

## Typography

### Font System
The project uses system fonts with web-safe fallbacks:

```css
/* Default font stack */
.font-sans {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", 
               Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

/* Monospace for code and retro elements */
.font-mono {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, 
               "Liberation Mono", Menlo, monospace;
}
```

### Type Scale
Responsive typography using Tailwind's built-in scale:

```css
/* Heading sizes */
.text-xs    { font-size: 0.75rem; }    /* 12px */
.text-sm    { font-size: 0.875rem; }   /* 14px */
.text-base  { font-size: 1rem; }       /* 16px */
.text-lg    { font-size: 1.125rem; }   /* 18px */
.text-xl    { font-size: 1.25rem; }    /* 20px */
.text-2xl   { font-size: 1.5rem; }     /* 24px */
.text-3xl   { font-size: 1.875rem; }   /* 30px */
.text-4xl   { font-size: 2.25rem; }    /* 36px */
.text-5xl   { font-size: 3rem; }       /* 48px */

/* Responsive text sizes */
.text-responsive {
  @apply text-sm sm:text-base lg:text-lg;
}
```

### Font Weights
```css
.font-thin       { font-weight: 100; }
.font-extralight { font-weight: 200; }
.font-light      { font-weight: 300; }
.font-normal     { font-weight: 400; }
.font-medium     { font-weight: 500; }
.font-semibold   { font-weight: 600; }
.font-bold       { font-weight: 700; }
.font-extrabold  { font-weight: 800; }
.font-black      { font-weight: 900; }
```

## Spacing System

### Spacing Scale
Consistent spacing using Tailwind's scale (based on 0.25rem = 4px):

```css
.p-0   { padding: 0; }           /* 0px */
.p-px  { padding: 1px; }         /* 1px */
.p-0.5 { padding: 0.125rem; }    /* 2px */
.p-1   { padding: 0.25rem; }     /* 4px */
.p-1.5 { padding: 0.375rem; }    /* 6px */
.p-2   { padding: 0.5rem; }      /* 8px */
.p-2.5 { padding: 0.625rem; }    /* 10px */
.p-3   { padding: 0.75rem; }     /* 12px */
.p-3.5 { padding: 0.875rem; }    /* 14px */
.p-4   { padding: 1rem; }        /* 16px */
.p-5   { padding: 1.25rem; }     /* 20px */
.p-6   { padding: 1.5rem; }      /* 24px */
.p-7   { padding: 1.75rem; }     /* 28px */
.p-8   { padding: 2rem; }        /* 32px */
/* ... continues with exponential scale */
```

### Component Spacing Patterns
```css
/* Card padding */
.card-padding {
  @apply p-4 sm:p-6 lg:p-8;
}

/* Button spacing */
.button-padding {
  @apply px-4 py-2;
}

/* Section spacing */
.section-spacing {
  @apply space-y-6 lg:space-y-8;
}
```

## Layout System

### Container Sizes
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;  /* 8px */
  padding-right: 0.5rem; /* 8px */
}

/* Breakpoint-specific max-widths */
@media (min-width: 640px) {  /* sm */
  .container { max-width: 640px; }
}
@media (min-width: 768px) {  /* md */
  .container { max-width: 768px; }
}
@media (min-width: 1024px) { /* lg */
  .container { max-width: 1024px; }
}
@media (min-width: 1280px) { /* xl */
  .container { max-width: 1280px; }
}
```

### Grid System
```css
/* CSS Grid utilities */
.grid-cols-responsive {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Flexbox utilities */
.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex items-center justify-between;
}
```

## Responsive Design

### Breakpoint System
```css
/* Default (mobile-first) */
.mobile-default { /* styles */ }

/* Small screens and up (640px+) */
@media (min-width: 640px) {
  .sm\:tablet-styles { /* styles */ }
}

/* Medium screens and up (768px+) */
@media (min-width: 768px) {
  .md\:desktop-styles { /* styles */ }
}

/* Large screens and up (1024px+) */
@media (min-width: 1024px) {
  .lg\:large-desktop { /* styles */ }
}
```

### Responsive Patterns
```jsx
// Responsive component example
function ResponsiveCard({ children }) {
  return (
    <div className="
      w-full 
      p-4 sm:p-6 lg:p-8
      text-sm sm:text-base lg:text-lg
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    ">
      {children}
    </div>
  )
}
```

## Component Styling Patterns

### Base Component Structure
```tsx
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  // Base classes (always applied)
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ComponentProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Additional props
}

export function Component({ 
  className, 
  variant, 
  size, 
  ...props 
}: ComponentProps) {
  return (
    <div 
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

### Retro Component Styling
```css
/* Retro-specific component styles */
.retro-button {
  @apply 
    bg-retro-green 
    text-black 
    font-mono 
    font-bold 
    border-2 
    border-retro-green 
    hover:bg-retro-green/80 
    active:translate-y-0.5
    transition-all;
  
  /* Pixel-perfect shadow */
  box-shadow: 
    2px 2px 0 hsl(var(--pixel-shadow)),
    4px 4px 0 hsl(var(--pixel-shadow)/0.5);
}

.retro-card {
  @apply 
    bg-black 
    border-2 
    border-retro-amber 
    rounded-none
    relative;
    
  /* Scan line effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      hsl(var(--scan-line)),
      transparent
    );
    animation: scan 2s linear infinite;
  }
}

@keyframes scan {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
```

## Animation System

### Transition Classes
```css
/* Standard transitions */
.transition-base {
  @apply transition-colors duration-200;
}

.transition-smooth {
  @apply transition-all duration-300 ease-in-out;
}

.transition-bounce {
  @apply transition-transform duration-200 ease-out;
}

/* Hover effects */
.hover-lift {
  @apply hover:-translate-y-1 hover:shadow-lg transition-all duration-200;
}

.hover-glow {
  @apply hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow duration-300;
}
```

### Retro Animations
```css
/* Pixel animations */
@keyframes pixel-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.pixel-pulse {
  animation: pixel-pulse 2s infinite;
}

/* Glitch effect */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.glitch:hover {
  animation: glitch 0.3s infinite;
}
```

## Theme Implementation

### Theme Provider Setup
```tsx
// src/theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'scorpion-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
```

### Dark Mode Utilities
```css
/* Dark mode color overrides */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 84% 4.9%;
  /* ... all dark variants */
}

/* Dark mode component styles */
.dark .retro-button {
  @apply 
    bg-retro-cyan 
    border-retro-cyan 
    text-black 
    hover:bg-retro-cyan/80;
}
```

## Performance Optimizations

### CSS Optimization
```javascript
// tailwind.config.ts
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Only include used extensions
    },
  },
  plugins: [
    // Only necessary plugins
  ],
}
```

### Critical CSS
```css
/* Inline critical styles for above-the-fold content */
.critical-layout {
  @apply container mx-auto px-4;
}

.critical-text {
  @apply text-base text-foreground;
}
```

## Accessibility Guidelines

### Focus Management
```css
/* Focus indicators */
.focus-ring {
  @apply 
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-ring 
    focus-visible:ring-offset-2;
}

/* Skip links */
.skip-link {
  @apply 
    absolute 
    -top-96 
    left-4 
    z-50 
    rounded 
    bg-primary 
    px-3 
    py-2 
    text-primary-foreground 
    focus:top-4;
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  .component {
    border-width: 2px;
    border-color: currentColor;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated {
    animation: none;
    transition: none;
  }
}
```

## Best Practices

### Do's
- Use semantic class names that describe purpose, not appearance
- Leverage CSS custom properties for consistent theming
- Implement responsive design mobile-first
- Test with keyboard navigation and screen readers
- Use Tailwind utilities for consistent spacing and sizing
- Implement proper focus management
- Optimize for performance with critical CSS

### Don'ts
- Don't hardcode colors or spacing values
- Avoid !important declarations
- Don't break responsive design patterns
- Avoid inaccessible color combinations
- Don't ignore browser compatibility requirements
- Avoid overly complex CSS selectors
- Don't forget to test dark mode variations

---

*This styling guide ensures consistency and maintainability across the Scorpion UI component library.*