# Retro Components Documentation

This document outlines the custom retro-themed components available in the Scorpion UI library.

## Component Overview

The retro components are located in `src/components/retro/` and follow a pixel-perfect, retro-aesthetic design pattern.

### Display Components

#### PixelScorpion (`src/components/retro/display/PixelScorpion.tsx`)
A pixel art scorpion mascot component that serves as the project's visual identity.

**Usage:**
```tsx
import { PixelScorpion } from '@/components/retro/display/PixelScorpion'

<PixelScorpion />
```

#### RetroWordmark (`src/components/retro/RetroWordmark.tsx`)
A stylized wordmark component with retro typography and styling.

**Usage:**
```tsx
import { RetroWordmark } from '@/components/retro/RetroWordmark'

<RetroWordmark />
```

#### CircularProgress (`src/components/retro/display/CircularProgress.tsx`)
A retro-styled circular progress indicator with pixel-perfect animations.

**Usage:**
```tsx
import { CircularProgress } from '@/components/retro/display/CircularProgress'

<CircularProgress value={75} />
```

#### PixelSpinner (`src/components/retro/display/PixelSpinner.tsx`)
A pixel-art loading spinner with retro animation effects.

**Usage:**
```tsx
import { PixelSpinner } from '@/components/retro/display/PixelSpinner'

<PixelSpinner />
```

#### Tooltip (`src/components/retro/display/Tooltip.tsx`)
Custom tooltip component with retro styling that overrides or extends the base shadcn/ui tooltip.

**Usage:**
```tsx
import { Tooltip } from '@/components/retro/display/Tooltip'

<Tooltip content="Retro tooltip content">
  <button>Hover me</button>
</Tooltip>
```

### Form Components

#### ColorPicker (`src/components/retro/forms/ColorPicker.tsx`)
A retro-styled color picker with custom interface elements.

**Usage:**
```tsx
import { ColorPicker } from '@/components/retro/forms/ColorPicker'

<ColorPicker 
  value={color} 
  onChange={setColor}
  label="Choose Color"
/>
```

#### FileUpload (`src/components/retro/forms/FileUpload.tsx`)
A file upload component with retro drag-and-drop interface.

**Usage:**
```tsx
import { FileUpload } from '@/components/retro/forms/FileUpload'

<FileUpload
  onFileSelect={handleFileSelect}
  accept="image/*"
  multiple={false}
/>
```

#### MultiSelect (`src/components/retro/forms/MultiSelect.tsx`)
A multi-selection component with retro checkbox styling.

**Usage:**
```tsx
import { MultiSelect } from '@/components/retro/forms/MultiSelect'

<MultiSelect
  options={options}
  value={selectedValues}
  onChange={setSelectedValues}
/>
```

#### TimePicker (`src/components/retro/forms/TimePicker.tsx`)
A time picker component with retro digital clock aesthetics.

**Usage:**
```tsx
import { TimePicker } from '@/components/retro/forms/TimePicker'

<TimePicker
  value={time}
  onChange={setTime}
  format="24h"
/>
```

### Icon Components

#### PixelIcons (`src/components/retro/icons/PixelIcons.tsx`)
A collection of pixel-art style icons designed to complement the retro theme.

**Usage:**
```tsx
import { PixelIcons } from '@/components/retro/icons/PixelIcons'

<PixelIcons.Home />
<PixelIcons.Settings />
<PixelIcons.User />
```

### Utility Components

#### ComponentPreviewCard (`src/components/retro/ComponentPreviewCard.tsx`)
A wrapper component for displaying component previews in documentation pages.

**Usage:**
```tsx
import { ComponentPreviewCard } from '@/components/retro/ComponentPreviewCard'

<ComponentPreviewCard title="Button Example">
  <Button>Preview Button</Button>
</ComponentPreviewCard>
```

## Design Principles

### Retro Aesthetic
- Pixel-perfect rendering where applicable
- Limited color palette with high contrast
- Chunky, bold visual elements
- Nostalgic 8-bit/16-bit inspired styling

### Animation Guidelines
- Use CSS transforms for hardware acceleration
- Keep animations snappy and responsive
- Maintain 60fps performance
- Use easing functions that complement the retro theme

### Color Scheme
The retro components follow a specific color palette defined in the CSS custom properties. Key colors include:
- Primary retro colors for main elements
- Accent colors for interactive states
- Muted variants for secondary elements

## Implementation Notes

### CSS Classes
Retro components use a combination of:
- Tailwind utility classes for layout and spacing
- Custom CSS classes for retro-specific styling
- CSS custom properties for consistent theming

### Accessibility
All retro components maintain accessibility standards:
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader compatibility

### Browser Support
Components are designed to work across modern browsers with graceful degradation for older browsers.

## Contributing

When adding new retro components:
1. Follow the established file structure in `src/components/retro/`
2. Maintain the pixel-perfect aesthetic
3. Include proper TypeScript types
4. Add comprehensive documentation
5. Test across different screen sizes and browsers
6. Ensure accessibility compliance

---

*For more information about the overall component architecture, see `architecture/project-structure.md`*