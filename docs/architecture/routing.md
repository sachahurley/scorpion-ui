# Routing and Navigation

This document outlines the routing architecture and navigation patterns used in the Scorpion UI project.

## Routing Overview

The Scorpion UI project uses React Router v6 for client-side routing, providing a single-page application (SPA) experience with proper URL management and navigation.

## Router Configuration

### Basic Setup
The router is configured in the main application component:

```tsx
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/components/layout/AppLayout'
import { Index } from '@/pages/Index'
import { Components } from '@/pages/Components'
import { NotFound } from '@/pages/NotFound'

// Component showcase pages
import { Buttons } from '@/pages/components/Buttons'
import { Cards } from '@/pages/components/Cards'
import { Forms } from '@/pages/components/Forms'
// ... other component pages

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<Components />} />
          
          {/* Component showcase routes */}
          <Route path="/components/buttons" element={<Buttons />} />
          <Route path="/components/cards" element={<Cards />} />
          <Route path="/components/forms" element={<Forms />} />
          <Route path="/components/feedback" element={<Feedback />} />
          <Route path="/components/loading" element={<Loading />} />
          <Route path="/components/modals" element={<Modals />} />
          <Route path="/components/navigation" element={<Navigation />} />
          <Route path="/components/pickers" element={<Pickers />} />
          <Route path="/components/progress" element={<ProgressExtra />} />
          <Route path="/components/spacing" element={<Spacing />} />
          <Route path="/components/tooltips" element={<Tooltip />} />
          <Route path="/components/typography" element={<Type />} />
          <Route path="/components/elevation" element={<Elevation />} />
          
          {/* 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  )
}
```

## Route Structure

### URL Hierarchy
```
/                           # Home page
/components                 # Component showcase overview
/components/buttons         # Button components
/components/cards           # Card components  
/components/forms           # Form components
/components/feedback        # Feedback components
/components/loading         # Loading components
/components/modals          # Modal components
/components/navigation      # Navigation components
/components/pickers         # Picker components
/components/progress        # Progress components
/components/spacing         # Spacing examples
/components/tooltips        # Tooltip components
/components/typography      # Typography examples
/components/elevation       # Elevation examples
/*                          # 404 Not Found page
```

### Route Categories
- **Root Routes**: Main application pages (`/`, `/components`)
- **Component Routes**: Individual component showcases (`/components/*`)
- **Error Routes**: Error handling (`*` catch-all)

## Navigation Components

### App Layout with Navigation
```tsx
// src/components/layout/AppLayout.tsx
import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

### Navigation Menu
```tsx
// src/components/layout/AppSidebar.tsx
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    title: 'Overview',
    href: '/components',
  },
  {
    title: 'Components',
    items: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Forms', href: '/components/forms' },
      { title: 'Feedback', href: '/components/feedback' },
      { title: 'Loading', href: '/components/loading' },
      { title: 'Modals', href: '/components/modals' },
      { title: 'Navigation', href: '/components/navigation' },
      { title: 'Pickers', href: '/components/pickers' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Spacing', href: '/components/spacing' },
      { title: 'Tooltips', href: '/components/tooltips' },
      { title: 'Typography', href: '/components/typography' },
      { title: 'Elevation', href: '/components/elevation' },
    ],
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-card border-r border-border p-6">
      <nav className="space-y-2">
        {navigationItems.map((section) => (
          <div key={section.title}>
            {section.href ? (
              <Link
                to={section.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-sm font-medium',
                  location.pathname === section.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                {section.title}
              </Link>
            ) : (
              <>
                <h3 className="px-3 py-2 text-sm font-semibold text-foreground">
                  {section.title}
                </h3>
                {section.items && (
                  <ul className="ml-4 space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className={cn(
                            'block px-3 py-2 rounded-md text-sm',
                            location.pathname === item.href
                              ? 'bg-primary text-primary-foreground'
                              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
```

### Breadcrumb Navigation
```tsx
// src/components/navigation/Breadcrumb.tsx
import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const displayName = pathname.charAt(0).toUpperCase() + pathname.slice(1)

          return (
            <li key={routeTo} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
              {isLast ? (
                <span className="text-foreground font-medium">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {displayName}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
```

## Navigation Hooks

### Custom Navigation Hooks
```tsx
// src/hooks/use-navigation.ts
import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

export function useAppNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToComponent = useCallback((componentName: string) => {
    navigate(`/components/${componentName}`)
  }, [navigate])

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const goHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  const isCurrentPath = useCallback((path: string) => {
    return location.pathname === path
  }, [location.pathname])

  const isComponentPath = useCallback(() => {
    return location.pathname.startsWith('/components/')
  }, [location.pathname])

  return {
    navigate,
    navigateToComponent,
    goBack,
    goHome,
    isCurrentPath,
    isComponentPath,
    currentPath: location.pathname,
  }
}
```

### Mobile Navigation Hook
```tsx
// src/hooks/use-mobile-nav.ts
import { useState, useEffect } from 'react'

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const toggleNav = () => setIsOpen(!isOpen)
  const closeNav = () => setIsOpen(false)

  // Close nav on route change (mobile)
  useEffect(() => {
    if (isMobile) {
      closeNav()
    }
  }, [location.pathname, isMobile])

  return {
    isOpen,
    isMobile,
    toggleNav,
    closeNav,
  }
}
```

## Page Components

### Base Page Structure
```tsx
// src/pages/components/Buttons.tsx
import { ComponentPreviewCard } from '@/components/retro/ComponentPreviewCard'
import { Button } from '@/components/ui/button'
import { Breadcrumb } from '@/components/navigation/Breadcrumb'

export function Buttons() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumb />
      
      <div className="mt-6">
        <h1 className="text-3xl font-bold">Button Components</h1>
        <p className="text-muted-foreground mt-2">
          Interactive button components with various styles and states.
        </p>
      </div>

      <div className="grid gap-6 mt-8">
        <ComponentPreviewCard title="Basic Buttons">
          <div className="flex gap-4 flex-wrap">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentPreviewCard>

        <ComponentPreviewCard title="Button Sizes">
          <div className="flex gap-4 items-center flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <span>🎯</span>
            </Button>
          </div>
        </ComponentPreviewCard>
      </div>
    </div>
  )
}
```

### 404 Page
```tsx
// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
```

## Route Guards and Protection

### Authentication Check (Future Enhancement)
```tsx
// src/components/routing/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, isAuthenticated, hasRole } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (requiredRole && !hasRole(requiredRole)) {
    // Redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />
  }

  return <>{children}</>
}

// Usage in App.tsx
<Route 
  path="/admin/*" 
  element={
    <ProtectedRoute requiredRole="admin">
      <AdminRoutes />
    </ProtectedRoute>
  } 
/>
```

## Route-Based Code Splitting

### Lazy Loading Pages
```tsx
// src/App.tsx - with lazy loading
import { lazy, Suspense } from 'react'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

// Lazy load component showcase pages
const Buttons = lazy(() => import('@/pages/components/Buttons').then(m => ({ default: m.Buttons })))
const Cards = lazy(() => import('@/pages/components/Cards').then(m => ({ default: m.Cards })))
const Forms = lazy(() => import('@/pages/components/Forms').then(m => ({ default: m.Forms })))

function App() {
  return (
    <Router>
      <AppLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<Components />} />
            
            {/* Lazy loaded routes */}
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/components/forms" element={<Forms />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </Router>
  )
}
```

## SEO and Meta Tags

### Dynamic Page Titles
```tsx
// src/hooks/use-page-title.ts
import { useEffect } from 'react'

export function usePageTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} - Scorpion UI`
    
    return () => {
      document.title = previousTitle
    }
  }, [title])
}

// Usage in page components
export function Buttons() {
  usePageTitle('Button Components')
  
  return (
    // Component content
  )
}
```

### Meta Tags Component
```tsx
// src/components/seo/Head.tsx
import { Helmet } from 'react-helmet-async'

interface HeadProps {
  title: string
  description?: string
  keywords?: string[]
  canonical?: string
}

export function Head({ title, description, keywords, canonical }: HeadProps) {
  const fullTitle = `${title} - Scorpion UI`
  const defaultDescription = 'Retro-themed React component library with pixel-perfect design'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  )
}
```

## Testing Routing

### Route Testing
```tsx
// src/pages/__tests__/Components.test.tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Components } from '../Components'

function renderWithRouter(component: React.ReactElement, initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      {component}
    </MemoryRouter>
  )
}

describe('Components Page', () => {
  it('renders component overview', () => {
    renderWithRouter(<Components />)
    
    expect(screen.getByText(/component library/i)).toBeInTheDocument()
  })

  it('displays navigation links', () => {
    renderWithRouter(<Components />)
    
    expect(screen.getByRole('link', { name: /buttons/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /forms/i })).toBeInTheDocument()
  })
})
```

### Navigation Testing
```tsx
// src/components/layout/__tests__/AppSidebar.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { AppSidebar } from '../AppSidebar'

describe('AppSidebar', () => {
  it('highlights current route', () => {
    render(
      <MemoryRouter initialEntries={['/components/buttons']}>
        <AppSidebar />
      </MemoryRouter>
    )

    const buttonsLink = screen.getByRole('link', { name: /buttons/i })
    expect(buttonsLink).toHaveClass('bg-primary')
  })

  it('navigates to component pages', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppSidebar />
      </MemoryRouter>
    )

    await user.click(screen.getByRole('link', { name: /forms/i }))
    
    // Would need to test actual navigation in integration test
    expect(screen.getByRole('link', { name: /forms/i })).toHaveAttribute('href', '/components/forms')
  })
})
```

## Performance Optimizations

### Route Preloading
```tsx
// src/utils/route-preloader.ts
export function preloadRoute(routeComponent: () => Promise<any>) {
  // Preload the route component on hover or focus
  return {
    onMouseEnter: () => routeComponent(),
    onFocus: () => routeComponent(),
  }
}

// Usage in navigation links
<Link 
  to="/components/buttons" 
  {...preloadRoute(() => import('@/pages/components/Buttons'))}
>
  Buttons
</Link>
```

### Route-Based Analytics
```tsx
// src/hooks/use-analytics.ts
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    // Track page views
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_TRACKING_ID', {
        page_path: location.pathname,
      })
    }
  }, [location])
}
```

## Best Practices

### Routing Guidelines
- Use meaningful, descriptive URLs
- Implement proper 404 handling
- Consider SEO implications for route structure
- Use nested routes for hierarchical content
- Implement loading states for lazy-loaded routes

### Navigation UX
- Provide clear visual feedback for current location
- Implement breadcrumbs for deep navigation
- Ensure keyboard navigation support
- Use consistent navigation patterns
- Test navigation on mobile devices

### Performance
- Lazy load non-critical routes
- Preload routes on hover/focus
- Use proper loading indicators
- Minimize bundle size with code splitting
- Cache route data appropriately

---

*This routing architecture provides a scalable foundation for navigation while maintaining good user experience and performance.*