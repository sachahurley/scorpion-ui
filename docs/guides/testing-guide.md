# Testing Guide

This guide covers testing strategies, patterns, and best practices for the Scorpion UI project.

## Testing Philosophy

The Scorpion UI project follows these testing principles:
- **User-centric**: Test behavior users actually experience
- **Accessibility-first**: Ensure components work for all users
- **Component-focused**: Test components in isolation and integration
- **Maintainable**: Write tests that are easy to understand and maintain
- **Fast feedback**: Prioritize tests that catch issues early

## Testing Stack

### Core Testing Libraries
```json
{
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.4.3",
    "vitest": "^1.0.0",
    "jsdom": "^23.0.0",
    "@vitest/ui": "^1.0.0",
    "happy-dom": "^12.0.0"
  }
}
```

### Setup Configuration
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() { return null }
  disconnect() { return null }
  unobserve() { return null }
}

// Mock ResizeObserver  
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() { return null }
  disconnect() { return null }
  unobserve() { return null }
}

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

## Component Testing

### Basic Component Tests
```tsx
// src/components/ui/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from '../Button'

describe('Button', () => {
  it('renders with correct text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole('button')
    
    expect(button).toHaveClass('bg-destructive')
    expect(button).toHaveClass('text-destructive-foreground')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Button</Button>)
    
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })

  it('supports asChild prop', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/test')
    expect(link).toHaveClass('inline-flex') // Button classes applied to child
  })
})
```

### Form Component Testing
```tsx
// src/components/retro/forms/__tests__/ColorPicker.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ColorPicker } from '../ColorPicker'

describe('ColorPicker', () => {
  it('displays current color value', () => {
    render(<ColorPicker value="#ff0000" onChange={vi.fn()} />)
    
    const input = screen.getByDisplayValue('#ff0000')
    expect(input).toBeInTheDocument()
  })

  it('calls onChange when color is selected', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    
    render(<ColorPicker value="#000000" onChange={handleChange} />)
    
    const colorInput = screen.getByLabelText(/color/i)
    await user.click(colorInput)
    
    // Simulate color selection (this depends on implementation)
    await user.type(colorInput, '#ff0000')
    
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith('#ff0000')
    })
  })

  it('supports disabled state', () => {
    render(<ColorPicker value="#000000" onChange={vi.fn()} disabled />)
    
    const input = screen.getByDisplayValue('#000000')
    expect(input).toBeDisabled()
  })

  it('has accessible label', () => {
    render(
      <ColorPicker 
        value="#000000" 
        onChange={vi.fn()} 
        label="Background Color"
        aria-describedby="color-help"
      />
    )
    
    const input = screen.getByLabelText('Background Color')
    expect(input).toHaveAttribute('aria-describedby', 'color-help')
  })
})
```

### Complex Component Testing
```tsx
// src/components/retro/__tests__/PixelScorpion.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PixelScorpion } from '../display/PixelScorpion'

describe('PixelScorpion', () => {
  it('renders pixel art SVG', () => {
    render(<PixelScorpion />)
    
    const svg = screen.getByRole('img', { hidden: true }) // SVGs are hidden by default
    expect(svg).toBeInTheDocument()
    expect(svg.tagName).toBe('svg')
  })

  it('supports animation prop', () => {
    render(<PixelScorpion animated />)
    
    const container = screen.getByTestId('pixel-scorpion')
    expect(container).toHaveClass('animate-pulse')
  })

  it('applies custom size', () => {
    render(<PixelScorpion size="large" />)
    
    const container = screen.getByTestId('pixel-scorpion')
    expect(container).toHaveClass('w-32', 'h-32')
  })

  it('has proper accessibility attributes', () => {
    render(<PixelScorpion alt="Scorpion mascot" />)
    
    const svg = screen.getByLabelText('Scorpion mascot')
    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).toHaveAttribute('aria-label', 'Scorpion mascot')
  })
})
```

## Integration Testing

### Page Testing
```tsx
// src/pages/__tests__/Components.test.tsx
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Components } from '../Components'

const ComponentsWithRouter = () => (
  <BrowserRouter>
    <Components />
  </BrowserRouter>
)

describe('Components Page', () => {
  it('displays component categories', () => {
    render(<ComponentsWithRouter />)
    
    expect(screen.getByText(/buttons/i)).toBeInTheDocument()
    expect(screen.getByText(/forms/i)).toBeInTheDocument()
    expect(screen.getByText(/feedback/i)).toBeInTheDocument()
  })

  it('navigates between component sections', async () => {
    const user = userEvent.setup()
    render(<ComponentsWithRouter />)
    
    const buttonsLink = screen.getByRole('link', { name: /buttons/i })
    await user.click(buttonsLink)
    
    expect(screen.getByRole('heading', { name: /button components/i }))
      .toBeInTheDocument()
  })

  it('shows component previews', () => {
    render(<ComponentsWithRouter />)
    
    const previewSection = screen.getByTestId('component-previews')
    const buttons = within(previewSection).getAllByRole('button')
    
    expect(buttons.length).toBeGreaterThan(0)
  })
})
```

### Theme Testing
```tsx
// src/theme/__tests__/ThemeProvider.test.tsx
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { ThemeProvider, useTheme } from '../ThemeProvider'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  )
}

const TestApp = () => (
  <ThemeProvider>
    <ThemeToggle />
  </ThemeProvider>
)

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
  })

  it('provides default theme', () => {
    render(<TestApp />)
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('system')
  })

  it('changes theme when setTheme is called', async () => {
    const user = userEvent.setup()
    render(<TestApp />)
    
    await user.click(screen.getByText('Dark'))
    
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('persists theme to localStorage', async () => {
    const user = userEvent.setup()
    render(<TestApp />)
    
    await user.click(screen.getByText('Light'))
    
    expect(localStorage.getItem('scorpion-ui-theme')).toBe('light')
  })
})
```

## Accessibility Testing

### Screen Reader Testing
```tsx
// src/components/ui/__tests__/Dialog.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from '../Dialog'

describe('Dialog Accessibility', () => {
  it('has proper ARIA attributes', async () => {
    const user = userEvent.setup()
    
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <p>Dialog content</p>
        </DialogContent>
      </Dialog>
    )
    
    await user.click(screen.getByRole('button', { name: /open dialog/i }))
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-labelledby')
    expect(dialog).toHaveAttribute('aria-describedby')
  })

  it('traps focus within dialog', async () => {
    const user = userEvent.setup()
    
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <button>First</button>
          <button>Second</button>
          <button>Close</button>
        </DialogContent>
      </Dialog>
    )
    
    await user.click(screen.getByText('Open'))
    
    // First focusable element should be focused
    expect(screen.getByText('First')).toHaveFocus()
    
    // Tab should cycle through dialog elements only
    await user.tab()
    expect(screen.getByText('Second')).toHaveFocus()
    
    await user.tab()
    expect(screen.getByText('Close')).toHaveFocus()
  })

  it('closes on escape key', async () => {
    const user = userEvent.setup()
    
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <p>Content</p>
        </DialogContent>
      </Dialog>
    )
    
    await user.click(screen.getByText('Open'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
```

### Keyboard Navigation Testing
```tsx
// src/components/ui/__tests__/DropdownMenu.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../DropdownMenu'

describe('DropdownMenu Keyboard Navigation', () => {
  it('supports arrow key navigation', async () => {
    const user = userEvent.setup()
    
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
    
    // Open menu with Enter key
    const trigger = screen.getByRole('button')
    trigger.focus()
    await user.keyboard('{Enter}')
    
    // First item should be focused
    expect(screen.getByText('Item 1')).toHaveFocus()
    
    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}')
    expect(screen.getByText('Item 2')).toHaveFocus()
    
    await user.keyboard('{ArrowUp}')
    expect(screen.getByText('Item 1')).toHaveFocus()
  })
})
```

## Visual Testing

### Snapshot Testing
```tsx
// src/components/retro/__tests__/RetroWordmark.test.tsx
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RetroWordmark } from '../RetroWordmark'

describe('RetroWordmark Snapshots', () => {
  it('matches default snapshot', () => {
    const { container } = render(<RetroWordmark />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches large size snapshot', () => {
    const { container } = render(<RetroWordmark size="large" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('matches animated snapshot', () => {
    const { container } = render(<RetroWordmark animated />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
```

### CSS-in-JS Testing
```tsx
// src/components/ui/__tests__/Button.styles.test.tsx
import { describe, it, expect } from 'vitest'
import { buttonVariants } from '../Button'

describe('Button Styles', () => {
  it('generates correct default classes', () => {
    const classes = buttonVariants()
    
    expect(classes).toContain('inline-flex')
    expect(classes).toContain('items-center')
    expect(classes).toContain('bg-primary')
    expect(classes).toContain('h-10')
  })

  it('generates correct variant classes', () => {
    const destructive = buttonVariants({ variant: 'destructive' })
    expect(destructive).toContain('bg-destructive')
    
    const outline = buttonVariants({ variant: 'outline' })
    expect(outline).toContain('border')
  })

  it('combines variant and size correctly', () => {
    const classes = buttonVariants({ variant: 'outline', size: 'sm' })
    
    expect(classes).toContain('border')
    expect(classes).toContain('h-9')
  })
})
```

## Performance Testing

### Render Performance
```tsx
// src/components/__tests__/performance.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ComponentPreviewCard } from '../retro/ComponentPreviewCard'

describe('Performance Tests', () => {
  it('renders large lists efficiently', () => {
    const startTime = performance.now()
    
    const items = Array.from({ length: 1000 }, (_, i) => (
      <ComponentPreviewCard key={i} title={`Component ${i}`}>
        Content {i}
      </ComponentPreviewCard>
    ))
    
    render(<div>{items}</div>)
    
    const endTime = performance.now()
    const renderTime = endTime - startTime
    
    // Should render 1000 components in under 100ms
    expect(renderTime).toBeLessThan(100)
  })

  it('handles frequent re-renders', () => {
    const { rerender } = render(<ComponentPreviewCard title="Test">Content</ComponentPreviewCard>)
    
    const startTime = performance.now()
    
    for (let i = 0; i < 100; i++) {
      rerender(<ComponentPreviewCard title={`Test ${i}`}>Content {i}</ComponentPreviewCard>)
    }
    
    const endTime = performance.now()
    const rerenderTime = endTime - startTime
    
    // 100 re-renders should complete quickly
    expect(rerenderTime).toBeLessThan(50)
  })
})
```

## Testing Utilities

### Custom Render Function
```tsx
// src/test/utils.tsx
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/theme/ThemeProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

### Mock Factories
```tsx
// src/test/factories.ts
import { vi } from 'vitest'

export const createMockComponent = (name: string) => {
  return vi.fn(({ children, ...props }) => 
    <div data-testid={`mock-${name.toLowerCase()}`} {...props}>
      {children}
    </div>
  )
}

export const createMockHandler = () => vi.fn()

export const createMockUser = () => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
})
```

## Test Organization

### File Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── __tests__/
│   │       ├── Button.test.tsx
│   │       └── Button.styles.test.tsx
│   └── retro/
│       ├── display/
│       │   ├── PixelScorpion.tsx
│       │   └── __tests__/
│       │       └── PixelScorpion.test.tsx
├── pages/
│   ├── Components.tsx
│   └── __tests__/
│       └── Components.test.tsx
└── test/
    ├── setup.ts
    ├── utils.tsx
    └── factories.ts
```

### Test Categories
- **Unit Tests**: Individual component behavior
- **Integration Tests**: Component interaction and page-level functionality  
- **Accessibility Tests**: Screen reader and keyboard navigation
- **Performance Tests**: Render speed and memory usage
- **Visual Tests**: Snapshot comparisons and style validation

## CI/CD Integration

### GitHub Actions Configuration
```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm run test:coverage
        
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
```

### Package.json Scripts
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest --watch"
  }
}
```

## Best Practices

### Do's
- Test user behavior, not implementation details
- Use semantic queries (getByRole, getByLabelText)
- Test accessibility requirements
- Mock external dependencies appropriately
- Keep tests focused and isolated
- Use descriptive test names
- Test error states and edge cases

### Don'ts
- Don't test internal component state directly
- Avoid testing CSS class names unless necessary
- Don't write tests that are too brittle
- Avoid mocking React hooks unnecessarily
- Don't skip accessibility testing
- Avoid complex test setups
- Don't ignore test warnings

---

*This testing guide ensures reliable, maintainable tests that provide confidence in the Scorpion UI component library.*