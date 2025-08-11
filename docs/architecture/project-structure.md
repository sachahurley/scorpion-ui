# Project Structure

This document outlines the file organization and architecture of the Scorpion UI project.

## Overview

Scorpion UI follows a modular, component-driven architecture with clear separation of concerns. The project structure is designed to be scalable, maintainable, and easy to navigate.

## Root Directory Structure

```
scorpion-ui/
├── public/                     # Static assets
├── src/                       # Source code
├── docs/                      # Documentation
├── node_modules/              # Dependencies
├── dist/                      # Build output (generated)
├── .git/                      # Git repository
├── package.json               # Project configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── components.json           # shadcn/ui configuration
├── eslint.config.js          # ESLint configuration
├── postcss.config.js         # PostCSS configuration
├── index.html                # HTML entry point
└── README.md                 # Project readme
```

## Source Code Structure (`src/`)

```
src/
├── components/               # React components
│   ├── ui/                  # shadcn/ui base components
│   ├── retro/              # Custom retro-themed components
│   ├── layout/             # Layout components
│   └── docs/               # Documentation-specific components
├── pages/                  # Route components/pages
│   ├── components/         # Component showcase pages
│   ├── Components.tsx      # Main components page
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 page
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and libraries
├── theme/                  # Theme configuration and providers
├── styles/                 # CSS files
├── App.tsx                 # Main application component
├── App.css                 # Application-specific styles
├── main.tsx                # Application entry point
├── index.css               # Global styles and CSS variables
└── vite-env.d.ts           # Vite type definitions
```

## Component Organization

### UI Components (`src/components/ui/`)
Base components from shadcn/ui library:

```
ui/
├── accordion.tsx           # Collapsible content sections
├── alert-dialog.tsx        # Confirmation dialogs
├── alert.tsx              # Status messages
├── aspect-ratio.tsx       # Aspect ratio container
├── avatar.tsx             # User profile images
├── badge.tsx              # Status indicators
├── breadcrumb.tsx         # Navigation breadcrumbs
├── button.tsx             # Interactive buttons
├── calendar.tsx           # Date selection
├── card.tsx               # Content containers
├── carousel.tsx           # Content carousel
├── chart.tsx              # Data visualization
├── checkbox.tsx           # Binary selection
├── collapsible.tsx        # Expandable content
├── command.tsx            # Command palette
├── context-menu.tsx       # Right-click menus
├── dialog.tsx             # Modal dialogs
├── drawer.tsx             # Slide-out panels
├── dropdown-menu.tsx      # Dropdown menus
├── form.tsx               # Form handling
├── hover-card.tsx         # Hover previews
├── input.tsx              # Text inputs
├── input-otp.tsx          # OTP input fields
├── label.tsx              # Form labels
├── menubar.tsx            # Menu bars
├── navigation-menu.tsx    # Navigation menus
├── pagination.tsx         # Page navigation
├── popover.tsx            # Floating content
├── progress.tsx           # Progress indicators
├── radio-group.tsx        # Mutually exclusive options
├── resizable.tsx          # Resizable panels
├── scroll-area.tsx        # Custom scrollbars
├── select.tsx             # Selection dropdowns
├── separator.tsx          # Visual dividers
├── sheet.tsx              # Side panels
├── sidebar.tsx            # Navigation sidebars
├── skeleton.tsx           # Loading placeholders
├── slider.tsx             # Range inputs
├── sonner.tsx             # Toast notifications (Sonner)
├── switch.tsx             # Toggle switches
├── table.tsx              # Data tables
├── tabs.tsx               # Tabbed interfaces
├── textarea.tsx           # Multi-line text inputs
├── toast.tsx              # Toast notifications
├── toaster.tsx            # Toast container
├── toggle.tsx             # Toggle buttons
├── toggle-group.tsx       # Toggle button groups
├── tooltip.tsx            # Hover tooltips
└── use-toast.ts           # Toast hook
```

### Retro Components (`src/components/retro/`)
Custom retro-themed components:

```
retro/
├── display/               # Display-only components
│   ├── CircularProgress.tsx   # Retro progress rings
│   ├── PixelScorpion.tsx     # Pixel art mascot
│   ├── PixelSpinner.tsx      # Retro loading spinners
│   └── Tooltip.tsx           # Custom styled tooltips
├── forms/                 # Form input components
│   ├── ColorPicker.tsx       # Color selection
│   ├── FileUpload.tsx        # File upload interface
│   ├── MultiSelect.tsx       # Multi-selection
│   └── TimePicker.tsx        # Time selection
├── icons/                 # Icon components
│   └── PixelIcons.tsx        # Pixel-style icons
├── ComponentPreviewCard.tsx  # Preview wrapper
└── RetroWordmark.tsx         # Brand wordmark
```

### Layout Components (`src/components/layout/`)
Application layout and structural components:

```
layout/
├── AppHeader.tsx          # Main application header
├── AppLayout.tsx          # Overall layout wrapper
└── AppSidebar.tsx         # Navigation sidebar
```

## Pages Structure (`src/pages/`)

```
pages/
├── components/            # Component showcase pages
│   ├── Buttons.tsx           # Button examples
│   ├── Cards.tsx             # Card examples
│   ├── Elevation.tsx         # Elevation examples
│   ├── Feedback.tsx          # Feedback component examples
│   ├── Forms.tsx             # Form examples
│   ├── Loading.tsx           # Loading state examples
│   ├── Modals.tsx            # Modal examples
│   ├── Navigation.tsx        # Navigation examples
│   ├── Pickers.tsx           # Picker component examples
│   ├── ProgressExtra.tsx     # Progress component examples
│   ├── Spacing.tsx           # Spacing examples
│   ├── Tooltip.tsx           # Tooltip examples
│   └── Type.tsx              # Typography examples
├── Components.tsx         # Main components showcase
├── Index.tsx              # Landing page
└── NotFound.tsx           # 404 error page
```

## Supporting Directories

### Hooks (`src/hooks/`)
Custom React hooks for reusable logic:

```
hooks/
├── use-compact-nav.tsx    # Navigation state management
├── use-mobile.tsx         # Mobile detection
└── use-toast.ts           # Toast notification management
```

### Library (`src/lib/`)
Utility functions and shared logic:

```
lib/
└── utils.ts               # Common utilities (cn function, etc.)
```

### Theme (`src/theme/`)
Theme configuration and providers:

```
theme/
└── ThemeProvider.tsx      # Theme context and management
```

### Styles (`src/styles/`)
Additional CSS files:

```
styles/
└── retro-logo.css         # Retro logo animations
```

## Public Assets (`public/`)

```
public/
├── favicon.ico            # Website favicon
├── lovable-uploads/       # Uploaded assets
│   └── 83ca5650-368f-4328-afd6-b60a25cc0f91.png
├── placeholder.svg        # Placeholder image
└── robots.txt             # SEO robots file
```

## Documentation (`docs/`)

```
docs/
├── README.md              # Documentation overview
├── components/            # Component documentation
│   ├── retro-components.md   # Custom component docs
│   ├── ui-components.md      # shadcn/ui component docs
│   └── component-patterns.md # Patterns and conventions
├── guides/                # Development guides
│   ├── development-setup.md  # Setup instructions
│   ├── styling-guide.md      # Styling conventions
│   └── testing-guide.md      # Testing strategies
└── architecture/          # Architecture documentation
    ├── project-structure.md  # This file
    ├── state-management.md   # State patterns
    └── routing.md            # Navigation setup
```

## Configuration Files

### Build Configuration
- `vite.config.ts` - Vite bundler configuration
- `tsconfig.json` - TypeScript compiler options
- `tsconfig.app.json` - App-specific TypeScript config
- `tsconfig.node.json` - Node.js TypeScript config

### Styling Configuration  
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS processing
- `components.json` - shadcn/ui component configuration

### Code Quality
- `eslint.config.js` - ESLint linting rules
- Package.json scripts for development and build

## Naming Conventions

### Files and Directories
- **PascalCase**: React components (`Button.tsx`, `PixelScorpion.tsx`)
- **kebab-case**: Multi-word directories (`component-patterns.md`)
- **camelCase**: Utility files (`utils.ts`, `use-mobile.tsx`)
- **lowercase**: Configuration files (`package.json`, `vite.config.ts`)

### Component Organization
- One component per file
- Related components grouped in directories
- Test files alongside components (`__tests__/` or `.test.tsx`)
- Types defined in same file or separate `.types.ts`

## Import/Export Patterns

### Barrel Exports
```typescript
// src/components/ui/index.ts
export { Button } from './button'
export { Card, CardHeader, CardContent, CardFooter } from './card'
export { Input } from './input'
```

### Named Exports
```typescript
// Prefer named exports for components
export function Button({ children, ...props }) {
  // component implementation
}

// Default exports only when necessary
export default Button
```

### Path Aliases
```typescript
// Use @ alias for src directory
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from '@/theme/ThemeProvider'
```

## Scalability Considerations

### Component Scaling
- Atomic design principles (atoms, molecules, organisms)
- Composition over inheritance
- Props interface documentation
- Storybook integration (future consideration)

### Code Splitting
- Lazy loading for heavy components
- Route-based code splitting
- Dynamic imports for large dependencies

### Bundle Optimization
- Tree shaking friendly exports
- Minimal runtime dependencies
- Optimized CSS delivery
- Asset optimization

## Development Workflow

### File Creation Guidelines
1. **Components**: Create in appropriate subdirectory with proper naming
2. **Tests**: Co-locate with components or in `__tests__/` directory
3. **Types**: Define in same file or separate `.types.ts` file
4. **Styles**: Use Tailwind classes primarily, custom CSS when necessary
5. **Documentation**: Update relevant docs when adding new features

### Directory Guidelines
1. **Shallow hierarchies**: Avoid deeply nested directory structures  
2. **Clear purpose**: Each directory should have a single, clear purpose
3. **Consistent naming**: Follow established naming conventions
4. **Logical grouping**: Group related functionality together

## Migration Path

### Future Enhancements
- Potential Storybook integration
- Component library packaging
- Automated documentation generation
- Performance monitoring integration
- Advanced state management (if needed)

### Refactoring Considerations
- Component extraction patterns
- Hook extraction opportunities  
- Utility function consolidation
- Style system improvements

---

*This project structure provides a solid foundation for building and maintaining the Scorpion UI component library while remaining flexible for future growth.*