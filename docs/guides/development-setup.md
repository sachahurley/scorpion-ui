# Development Setup Guide

This guide will help you set up your development environment for the Scorpion UI project.

## Prerequisites

### Required Software
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **bun** (recommended for faster builds)
- **Git** (for version control)
- **VS Code** or **Cursor** (recommended editors)

### Recommended VS Code Extensions
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- Auto Rename Tag
- Bracket Pair Colorizer
- GitLens

## Initial Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd scorpion-ui

# Install dependencies (choose one)
npm install
# OR
bun install
```

### 2. Start Development Server

```bash
# Start the development server
npm run dev
# OR
bun dev
```

The application will be available at `http://localhost:5173`

### 3. Verify Setup

Visit the development server and check that:
- The application loads without errors
- Hot reload works when you edit files
- The retro theme displays correctly
- Navigation between pages functions properly

## Development Workflow

### Running Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Run linting
npm run lint

# Preview production build
npm run preview
```

### Code Quality Tools

#### ESLint Configuration
The project uses ESLint with TypeScript support:

```javascript
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

#### TypeScript Configuration
Three TypeScript config files handle different aspects:

- `tsconfig.json` - Main configuration
- `tsconfig.app.json` - Application code
- `tsconfig.node.json` - Node.js/Vite configuration

### File Structure Guidelines

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── retro/             # Custom retro components
│   ├── layout/            # Layout components
│   └── docs/              # Documentation components
├── pages/                 # Route components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── theme/                 # Theme configuration
└── styles/                # CSS files
```

### Development Best Practices

#### Component Development
1. **Start with shadcn/ui**: Check if a base component exists before creating custom ones
2. **Follow naming conventions**: Use PascalCase for components, camelCase for functions
3. **Include TypeScript types**: All components should have proper type definitions
4. **Add documentation**: Include JSDoc comments for complex components
5. **Test accessibility**: Ensure components work with keyboard navigation and screen readers

#### Styling Guidelines
1. **Use Tailwind utilities**: Prefer utility classes over custom CSS when possible
2. **Follow the design system**: Use defined color variables and spacing tokens
3. **Maintain consistency**: Follow the retro theme aesthetic throughout
4. **Responsive design**: Test components across different screen sizes

#### State Management
1. **Local state first**: Use useState for component-specific state
2. **React Hook Form**: Use for form state management
3. **Context**: Use React Context for shared application state
4. **Custom hooks**: Extract reusable stateful logic into custom hooks

## Environment Configuration

### Environment Variables
Create a `.env.local` file for local development:

```bash
# .env.local
VITE_APP_TITLE="Scorpion UI"
VITE_API_URL="http://localhost:3001"
VITE_DEBUG_MODE="true"
```

### Path Aliases
The project uses path aliases configured in `vite.config.ts`:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

Use imports like:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

## Building and Deployment

### Production Build
```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Build Analysis
- Check the `dist/` folder for generated assets
- Verify that unused code is tree-shaken
- Ensure assets are properly optimized
- Check that source maps are generated correctly

### Performance Considerations
- Use lazy loading for heavy components
- Implement proper memoization where needed
- Optimize images and assets
- Monitor bundle size and loading times

## Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# If port 5173 is busy, specify a different port
npm run dev -- --port 5174
```

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
npm install
```

#### Build Failures
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Styling Issues
- Verify Tailwind CSS is properly configured
- Check that CSS imports are correct
- Ensure PostCSS is processing files
- Clear browser cache

### Performance Issues
- Use React DevTools Profiler
- Check for unnecessary re-renders
- Verify that images are optimized
- Monitor network tab for slow requests

### Debugging Tips
1. **Browser DevTools**: Use React DevTools for component debugging
2. **Console Logging**: Use structured logging with appropriate log levels
3. **TypeScript Strict Mode**: Enable strict mode to catch type issues early
4. **ESLint**: Address all linting warnings and errors
5. **Network Tab**: Monitor API calls and asset loading

## Contributing Guidelines

### Code Style
- Follow the existing code patterns and conventions
- Use meaningful variable and function names
- Keep components focused and single-purpose
- Write self-documenting code with clear intent

### Commit Messages
```bash
# Format: type(scope): description
feat(components): add new retro button variant
fix(forms): resolve validation error handling
docs(guides): update development setup instructions
refactor(utils): improve utility function performance
```

### Pull Request Process
1. Create a feature branch from main
2. Make changes following the coding standards
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit PR with clear description
6. Address any review feedback

## Getting Help

### Resources
- **shadcn/ui Documentation**: https://ui.shadcn.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **React Documentation**: https://react.dev/
- **Vite Guide**: https://vitejs.dev/guide/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

### Project-Specific Help
- Check the `docs/` folder for detailed documentation
- Review existing components in `src/components/`
- Look at page implementations in `src/pages/`
- Refer to the component patterns documentation

### Community
- Report issues in the project repository
- Ask questions in team discussions
- Share knowledge and improvements

---

*Happy coding! 🦂*