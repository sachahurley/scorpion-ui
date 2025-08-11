# Scorpion UI Documentation

This documentation folder contains comprehensive information about the Scorpion UI project for Cursor, AI agents, and developers working on this codebase.

## Project Overview

Scorpion UI is a React-based component library and design system featuring a retro-themed UI with pixel-perfect components and modern web technologies.

**Technology Stack:**
- React 18.3.1 with TypeScript
- Vite build system
- Tailwind CSS for styling
- shadcn/ui component library
- Radix UI primitives
- React Router for navigation
- React Hook Form for form handling
- Next Themes for theme management

## Documentation Structure

```
docs/
├── README.md                    # This file - documentation overview
├── components/                  # Component-specific documentation
│   ├── retro-components.md     # Custom retro-themed components
│   ├── ui-components.md        # shadcn/ui components usage
│   └── component-patterns.md   # Common patterns and conventions
├── guides/                      # Development guides
│   ├── development-setup.md    # Getting started with development
│   ├── styling-guide.md        # CSS and styling conventions
│   └── testing-guide.md        # Testing strategies and examples
└── architecture/               # System architecture
    ├── project-structure.md    # File organization and structure
    ├── state-management.md     # State management patterns
    └── routing.md              # Navigation and routing setup
```

## Quick Reference

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Key Directories
- `src/components/ui/` - shadcn/ui components
- `src/components/retro/` - Custom retro-themed components
- `src/pages/` - Route components and page layouts
- `src/hooks/` - Custom React hooks
- `src/theme/` - Theme provider and configuration

### Important Files
- `tailwind.config.ts` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `src/lib/utils.ts` - Utility functions
- `src/index.css` - Global styles and CSS variables

## For AI Agents and Cursor

This project follows these conventions:
- Use existing components before creating new ones
- Follow the established folder structure
- Maintain TypeScript strict mode compliance
- Use Tailwind CSS classes for styling
- Follow the retro design theme with pixel-perfect aesthetics
- Implement responsive design patterns
- Use proper semantic HTML and accessibility attributes

## Getting Help

- Check component examples in `src/pages/components/`
- Refer to shadcn/ui docs: https://ui.shadcn.com/
- Review Tailwind CSS docs: https://tailwindcss.com/
- See Radix UI docs: https://www.radix-ui.com/

---

*This documentation is maintained for the Scorpion UI project to ensure consistency and provide reference for all contributors.*