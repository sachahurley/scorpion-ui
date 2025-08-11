# UI Components Documentation

This document covers the shadcn/ui components integrated into the Scorpion UI project.

## Overview

The project uses shadcn/ui as the foundation component library, located in `src/components/ui/`. These components provide a consistent, accessible, and customizable base for the application.

## Available Components

### Navigation Components

#### Accordion (`src/components/ui/accordion.tsx`)
Collapsible content sections with smooth animations.

#### Breadcrumb (`src/components/ui/breadcrumb.tsx`)
Navigation breadcrumb trail for hierarchical navigation.

#### Navigation Menu (`src/components/ui/navigation-menu.tsx`)
Accessible navigation menu with dropdown support.

#### Menubar (`src/components/ui/menubar.tsx`)
Horizontal menu bar with keyboard navigation.

#### Pagination (`src/components/ui/pagination.tsx`)
Page navigation controls for large data sets.

### Form Components

#### Button (`src/components/ui/button.tsx`)
Primary interactive element with multiple variants and sizes.

#### Input (`src/components/ui/input.tsx`)
Text input field with validation states.

#### Textarea (`src/components/ui/textarea.tsx`)
Multi-line text input component.

#### Label (`src/components/ui/label.tsx`)
Accessible form labels with proper associations.

#### Checkbox (`src/components/ui/checkbox.tsx`)
Binary selection input with custom styling.

#### Radio Group (`src/components/ui/radio-group.tsx`)
Mutually exclusive selection options.

#### Select (`src/components/ui/select.tsx`)
Dropdown selection component with search capabilities.

#### Switch (`src/components/ui/switch.tsx`)
Toggle switch for binary options.

#### Slider (`src/components/ui/slider.tsx`)
Range input component for numeric values.

#### Form (`src/components/ui/form.tsx`)
Form wrapper with validation and error handling.

#### Input OTP (`src/components/ui/input-otp.tsx`)
One-time password input with individual character fields.

### Display Components

#### Card (`src/components/ui/card.tsx`)
Container component with header, content, and footer sections.

#### Badge (`src/components/ui/badge.tsx`)
Small status indicators and labels.

#### Avatar (`src/components/ui/avatar.tsx`)
User profile image with fallback support.

#### Skeleton (`src/components/ui/skeleton.tsx`)
Loading placeholder component.

#### Progress (`src/components/ui/progress.tsx`)
Linear progress indicator.

#### Separator (`src/components/ui/separator.tsx`)
Visual divider between content sections.

#### Aspect Ratio (`src/components/ui/aspect-ratio.tsx`)
Container that maintains aspect ratio across screen sizes.

### Layout Components

#### Tabs (`src/components/ui/tabs.tsx`)
Tabbed interface for organizing content.

#### Collapsible (`src/components/ui/collapsible.tsx`)
Expandable/collapsible content container.

#### Resizable (`src/components/ui/resizable.tsx`)
Panels that can be resized by dragging.

#### Scroll Area (`src/components/ui/scroll-area.tsx`)
Custom scrollable container with styled scrollbars.

#### Sidebar (`src/components/ui/sidebar.tsx`)
Navigation sidebar with collapsible functionality.

### Overlay Components

#### Dialog (`src/components/ui/dialog.tsx`)
Modal dialog with backdrop and escape handling.

#### Alert Dialog (`src/components/ui/alert-dialog.tsx`)
Confirmation dialogs for destructive actions.

#### Sheet (`src/components/ui/sheet.tsx`)
Slide-out panel component.

#### Drawer (`src/components/ui/drawer.tsx`)
Bottom drawer component for mobile interfaces.

#### Popover (`src/components/ui/popover.tsx`)
Floating content container with positioning.

#### Tooltip (`src/components/ui/tooltip.tsx`)
Hover and focus information display.

#### Hover Card (`src/components/ui/hover-card.tsx`)
Rich content preview on hover.

### Interactive Components

#### Dropdown Menu (`src/components/ui/dropdown-menu.tsx`)
Context menus with nested submenus.

#### Context Menu (`src/components/ui/context-menu.tsx`)
Right-click context menus.

#### Command (`src/components/ui/command.tsx`)
Command palette with search and keyboard navigation.

#### Toggle (`src/components/ui/toggle.tsx`)
Binary state toggle button.

#### Toggle Group (`src/components/ui/toggle-group.tsx`)
Group of toggle buttons with single or multiple selection.

### Feedback Components

#### Alert (`src/components/ui/alert.tsx`)
Status messages and notifications.

#### Toast (`src/components/ui/toast.tsx`)
Temporary notification messages.

#### Toaster (`src/components/ui/toaster.tsx`)
Toast notification container and management.

### Data Display Components

#### Table (`src/components/ui/table.tsx`)
Data table with sorting and styling.

#### Calendar (`src/components/ui/calendar.tsx`)
Date selection calendar component.

#### Chart (`src/components/ui/chart.tsx`)
Data visualization components built with Recharts.

#### Carousel (`src/components/ui/carousel.tsx`)
Content carousel with navigation controls.

## Configuration

The components are configured through `components.json`:

```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## Customization

### Theming
Components use CSS custom properties for theming, defined in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... additional theme variables */
}
```

### Variants
Components support multiple variants through the `class-variance-authority` library:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // ... additional variants
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      }
    }
  }
)
```

## Usage Patterns

### Basic Component Usage
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="lg">
          Click Me
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Form Integration
```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2),
})

export function ExampleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Best Practices

### Component Composition
- Use compound components for related functionality
- Leverage the `asChild` prop for composition flexibility
- Prefer composition over inheritance

### Accessibility
- All components include proper ARIA attributes
- Keyboard navigation is supported by default
- Focus management is handled automatically

### Performance
- Components are tree-shakable
- Lazy loading is supported for heavy components
- CSS-in-JS is avoided in favor of utility classes

### Styling
- Use Tailwind utility classes for customization
- Leverage CSS custom properties for theme consistency
- Avoid overriding component internals

## Migration and Updates

When updating shadcn/ui components:
1. Review the changelog for breaking changes
2. Test all affected components
3. Update any custom overrides if necessary
4. Verify accessibility hasn't been compromised

---

*For component-specific examples and advanced usage patterns, refer to the implementation pages in `src/pages/components/`*