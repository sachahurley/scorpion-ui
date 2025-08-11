# State Management

This document outlines the state management patterns and strategies used in the Scorpion UI project.

## State Management Philosophy

The Scorpion UI project follows a pragmatic approach to state management:

1. **Start Simple**: Use built-in React state management first
2. **Lift When Needed**: Move state up the component tree when sharing is required
3. **Context for Global**: Use React Context for truly global state
4. **External Libraries**: Only when complexity demands it

## State Categories

### Local Component State
State that belongs to a single component and its children.

**When to Use:**
- Form input values
- Toggle states (open/closed, expanded/collapsed)
- Loading states for individual components
- Temporary UI state

**Implementation:**
```tsx
// Basic state
function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// Complex local state with useReducer
interface ModalState {
  isOpen: boolean
  content: React.ReactNode | null
  title: string
}

type ModalAction = 
  | { type: 'OPEN'; payload: { content: React.ReactNode; title: string } }
  | { type: 'CLOSE' }
  | { type: 'SET_CONTENT'; payload: React.ReactNode }

function modalReducer(state: ModalState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'OPEN':
      return {
        isOpen: true,
        content: action.payload.content,
        title: action.payload.title,
      }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'SET_CONTENT':
      return { ...state, content: action.payload }
    default:
      return state
  }
}

function Modal() {
  const [state, dispatch] = useReducer(modalReducer, {
    isOpen: false,
    content: null,
    title: '',
  })
  
  // Modal implementation using state and dispatch
}
```

### Lifted State
State shared between sibling components by lifting it to their common parent.

**When to Use:**
- Parent-child communication
- Sibling component coordination
- Form data across multiple steps
- Shared loading/error states

**Implementation:**
```tsx
// Parent manages shared state
function ComponentShowcase() {
  const [selectedComponent, setSelectedComponent] = useState<string>('button')
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <ComponentList 
        selected={selectedComponent}
        onSelect={setSelectedComponent}
      />
      <ComponentPreview 
        component={selectedComponent}
        darkMode={darkMode}
        onToggleDarkMode={setDarkMode}
      />
    </div>
  )
}

// Children receive state as props
function ComponentList({ selected, onSelect }) {
  const components = ['button', 'card', 'input']
  
  return (
    <ul>
      {components.map(component => (
        <li key={component}>
          <button
            onClick={() => onSelect(component)}
            className={selected === component ? 'selected' : ''}
          >
            {component}
          </button>
        </li>
      ))}
    </ul>
  )
}
```

### Context State
Global application state accessible from any component.

**When to Use:**
- Theme preferences
- User authentication status
- Language/localization settings
- Application-wide configuration

## Theme Context Implementation

The project uses React Context for theme management:

```tsx
// src/theme/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'scorpion-ui-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
```

## Form State Management

The project uses React Hook Form for complex form state:

```tsx
// src/components/forms/ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Handle form submission
      console.log('Form data:', data)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}
```

## Custom Hooks for State Logic

Extract reusable state logic into custom hooks:

### Local Storage Hook
```tsx
// src/hooks/use-local-storage.ts
import { useState, useEffect } from 'react'

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
```

### Toggle Hook
```tsx
// src/hooks/use-toggle.ts
import { useState, useCallback } from 'react'

export function useToggle(
  initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue(prev => !prev)
  }, [])

  const setToggle = useCallback((newValue: boolean) => {
    setValue(newValue)
  }, [])

  return [value, toggle, setToggle]
}
```

### Async State Hook
```tsx
// src/hooks/use-async.ts
import { useState, useEffect, useCallback } from 'react'

interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  dependencies: React.DependencyList = []
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null })

    try {
      const data = await asyncFunction()
      setState({ data, loading: false, error: null })
    } catch (error) {
      setState({ data: null, loading: false, error: error as Error })
    }
  }, dependencies)

  useEffect(() => {
    execute()
  }, [execute])

  const retry = useCallback(() => {
    execute()
  }, [execute])

  return { ...state, retry }
}
```

## State Composition Patterns

### Compound Component State
```tsx
// src/components/ui/Tabs.tsx - State managed by parent, shared with children
const TabsContext = createContext<{
  value: string
  onValueChange: (value: string) => void
} | null>(null)

export function Tabs({ value, onValueChange, children }) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>
}

export function TabsTrigger({ value, children }) {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsTrigger must be used within Tabs')

  return (
    <button
      className={context.value === value ? 'active' : ''}
      onClick={() => context.onValueChange(value)}
    >
      {children}
    </button>
  )
}
```

### Higher-Order Component State
```tsx
// src/components/hocs/withToggle.tsx
import { ComponentType, useState } from 'react'

interface WithToggleProps {
  isToggled: boolean
  toggle: () => void
  setToggle: (value: boolean) => void
}

export function withToggle<T extends object>(
  Component: ComponentType<T & WithToggleProps>
) {
  return function ToggleComponent(props: T) {
    const [isToggled, setIsToggled] = useState(false)
    
    const toggle = () => setIsToggled(prev => !prev)
    const setToggle = (value: boolean) => setIsToggled(value)

    return (
      <Component
        {...props}
        isToggled={isToggled}
        toggle={toggle}
        setToggle={setToggle}
      />
    )
  }
}

// Usage
const ToggleableCard = withToggle(({ isToggled, toggle, title, children }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <Button onClick={toggle}>
        {isToggled ? 'Hide' : 'Show'} Details
      </Button>
    </CardHeader>
    {isToggled && <CardContent>{children}</CardContent>}
  </Card>
))
```

## Performance Considerations

### Memoization Patterns
```tsx
// Expensive computation memoization
function ComponentList({ items, filter }) {
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [items, filter])

  return (
    <ul>
      {filteredItems.map(item => (
        <ComponentItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

// Callback memoization to prevent child re-renders
function Parent() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const handleNameChange = useCallback((newName: string) => {
    setName(newName)
  }, [])

  return (
    <div>
      <Counter count={count} onIncrement={handleIncrement} />
      <NameInput name={name} onChange={handleNameChange} />
    </div>
  )
}
```

### Context Optimization
```tsx
// Split contexts to minimize re-renders
const ThemeContext = createContext()
const UserContext = createContext()

// Instead of one large context
const AppContext = createContext()

// Provide contexts at different levels
function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router />
      </UserProvider>
    </ThemeProvider>
  )
}
```

## Error State Management

### Error Boundaries
```tsx
// src/components/ErrorBoundary.tsx
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error?.message}
            <br />
            {this.state.error?.stack}
          </details>
          <Button onClick={() => this.setState({ hasError: false, error: null })}>
            Try Again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
```

### Global Error State
```tsx
// src/hooks/use-error.ts
const ErrorContext = createContext<{
  error: string | null
  setError: (error: string | null) => void
  clearError: () => void
} | null>(null)

export function ErrorProvider({ children }) {
  const [error, setError] = useState<string | null>(null)

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  )
}

export function useError() {
  const context = useContext(ErrorContext)
  if (!context) {
    throw new Error('useError must be used within ErrorProvider')
  }
  return context
}
```

## Testing State Management

### Testing Context Providers
```tsx
// src/test/test-utils.tsx
import { render } from '@testing-library/react'
import { ThemeProvider } from '@/theme/ThemeProvider'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export function renderWithProviders(ui: React.ReactElement) {
  return render(ui, { wrapper: Providers })
}
```

### Testing Custom Hooks
```tsx
// src/hooks/__tests__/use-toggle.test.ts
import { renderHook, act } from '@testing-library/react'
import { useToggle } from '../use-toggle'

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)
  })

  it('should toggle value when toggle function is called', () => {
    const { result } = renderHook(() => useToggle())
    
    act(() => {
      result.current[1]() // toggle function
    })
    
    expect(result.current[0]).toBe(true)
  })
})
```

## Best Practices

### State Management Guidelines

**Do:**
- Start with local state and lift when necessary
- Use custom hooks for reusable state logic
- Implement proper error boundaries
- Memoize expensive computations and callbacks
- Split contexts to minimize re-renders
- Validate state updates with proper typing

**Don't:**
- Overuse global state for local concerns
- Ignore performance implications of context updates
- Mutate state directly
- Create deeply nested state structures
- Skip error handling in async state operations

### Performance Best Practices
- Use `useCallback` for event handlers passed to children
- Use `useMemo` for expensive calculations
- Split large contexts into smaller, focused ones
- Implement proper loading and error states
- Consider virtualization for large lists

### Testing Best Practices
- Test state behavior, not implementation details
- Use proper test utilities for context providers
- Mock external dependencies appropriately
- Test error states and edge cases

---

*This state management architecture provides a solid foundation for building scalable and maintainable React applications while keeping complexity manageable.*