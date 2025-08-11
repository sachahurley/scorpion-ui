# Retro Icons Documentation

A comprehensive collection of retro-styled PNG icons with automatic theme switching and type-safe React components.

## Overview

The retro icon system provides over 200 high-quality PNG icons organized into themed categories with automatic dark/light mode switching. All icons are available as React components with TypeScript support.

## Icon Categories

### User Applications (73 icons)
Popular third-party applications including:
- **Development**: Visual Studio Code, Figma, GitHub Desktop, Sublime Text
- **Adobe Creative Suite**: Photoshop, Illustrator, After Effects, Premiere Pro, XD
- **Browsers**: Chrome, Firefox, Safari, Brave
- **Communication**: Slack, Discord, Zoom, Teams, WhatsApp
- **Productivity**: Notion, Linear, Asana, Trello, Bear
- **Media**: Spotify, VLC, Steam, Twitch

### System Applications (43 icons)
macOS system applications including:
- **Utilities**: Calculator, Terminal, Activity Monitor, Disk Utility
- **Communication**: Mail, Messages, FaceTime, Safari
- **Media**: Music, Photos, QuickTime Player, Photo Booth
- **System**: Finder, System Preferences, App Store, Keychain Access

### System Folders (17 icons)
Common system and user folders:
- **User Folders**: Documents, Downloads, Desktop, Pictures, Movies
- **System Folders**: Applications, Library, System, Users, Utilities
- **Special**: Folder (generic), Home, Public, Servers

### File Extensions (23 icons)
Common file type indicators:
- **Archives**: zip, rar, 7z, tar, gz
- **Media**: jpg, png, gif, mp3, mp4, avi, mkv
- **Documents**: pdf, html
- **Applications**: exe, dmg, apk, appx

### Storage Drives (11 icons)
Various storage device types:
- **External**: External drive, USB flash, SD cards
- **Internal**: Internal drive, Server, Time Machine
- **Cloud**: iCloud storage

## Basic Usage

### Import Components

```tsx
import { 
  UserAppIcon, 
  SystemAppIcon, 
  FolderIcon, 
  FileExtensionIcon, 
  DriveIcon 
} from '@/components/retro/icons/PixelIcons'
```

### Simple Usage

```tsx
// User application icons
<UserAppIcon name="Figma" size="md" />
<UserAppIcon name="Visual Studio Code" size="lg" />

// System application icons  
<SystemAppIcon name="Terminal" size="md" />
<SystemAppIcon name="Calculator" size="sm" />

// Folder icons
<FolderIcon name="Documents" size="lg" />
<FolderIcon name="Downloads" size="md" />

// File extension icons
<FileExtensionIcon name="pdf" size="sm" />
<FileExtensionIcon name="zip" size="md" />

// Drive icons
<DriveIcon name="External" size="lg" />
<DriveIcon name="iCloud" size="md" />
```

## Component Props

### RetroIconProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | - | Icon name (without .png extension) |
| `category` | `IconCategory` | - | Icon category ('user-apps', 'system-apps', etc.) |
| `size` | `IconSize` | `'md'` | Icon size ('sm', 'md', 'lg', 'xl', '2xl') |
| `alt` | `string` | `name` | Alt text for accessibility |
| `className` | `string` | - | Additional CSS classes |
| `forceTheme` | `'light' \| 'dark'` | - | Override automatic theme detection |
| `onError` | `() => void` | - | Callback when image fails to load |
| `showLoading` | `boolean` | `true` | Show loading placeholder |

### Icon Sizes

| Size | Pixels | Tailwind Class | Use Case |
|------|--------|----------------|----------|
| `sm` | 16px | `w-4 h-4` | Small UI elements, inline text |
| `md` | 24px | `w-6 h-6` | Standard buttons, list items |
| `lg` | 32px | `w-8 h-8` | Cards, prominent UI elements |
| `xl` | 48px | `w-12 h-12` | Large buttons, showcases |
| `2xl` | 64px | `w-16 h-16` | Hero elements, feature displays |

## Advanced Usage

### Custom Styling

```tsx
<UserAppIcon 
  name="Figma" 
  size="lg"
  className="hover:scale-110 transition-transform duration-200 drop-shadow-lg"
  alt="Figma design tool"
/>
```

### In Interactive Elements

```tsx
// In buttons
<Button variant="outline" className="gap-2">
  <UserAppIcon name="Github Desktop" size="sm" />
  Open Repository
</Button>

// In navigation
<nav className="flex gap-4">
  <a href="/docs" className="flex items-center gap-2">
    <FolderIcon name="Documents" size="sm" />
    Documentation
  </a>
  <a href="/downloads" className="flex items-center gap-2">
    <FolderIcon name="Downloads" size="sm" />
    Downloads
  </a>
</nav>

// In cards
<Card>
  <CardHeader className="flex-row items-center gap-3">
    <UserAppIcon name="Visual Studio Code" size="md" />
    <CardTitle>VS Code Project</CardTitle>
  </CardHeader>
  <CardContent>
    Open your project in Visual Studio Code
  </CardContent>
</Card>
```

### Theme-Specific Icons

```tsx
// Force light theme variant
<UserAppIcon name="Figma" forceTheme="light" />

// Force dark theme variant  
<UserAppIcon name="Figma" forceTheme="dark" />

// Automatic theme switching (default)
<UserAppIcon name="Figma" />
```

### Error Handling

```tsx
<UserAppIcon 
  name="NonexistentApp"
  onError={() => console.log('Icon failed to load')}
  size="md"
/>
```

## Type Safety

### Using Icon Registry

```tsx
import { popularIcons, userAppIcons } from '@/components/retro/icons/IconRegistry'

// Type-safe icon names
<UserAppIcon name={popularIcons.vscode} size="md" />
<UserAppIcon name={popularIcons.figma} size="lg" />

// Iterate over available icons
{userAppIcons.map(iconName => (
  <UserAppIcon key={iconName} name={iconName} size="sm" />
))}
```

### Type Definitions

```tsx
import type { 
  UserAppIconName, 
  SystemAppIconName,
  IconCategory,
  IconSize 
} from '@/components/retro/icons/IconRegistry'

// Type-safe props
interface AppIconProps {
  app: UserAppIconName
  size: IconSize
}

function AppIcon({ app, size }: AppIconProps) {
  return <UserAppIcon name={app} size={size} />
}
```

## Popular Icons Quick Reference

### Development Tools
```tsx
<UserAppIcon name="Visual Studio Code" />  // VS Code
<UserAppIcon name="Figma" />               // Figma
<UserAppIcon name="Github Desktop" />      // GitHub
<SystemAppIcon name="Terminal" />          // Terminal
```

### Communication
```tsx
<UserAppIcon name="Slack" />          // Slack
<UserAppIcon name="Discord" />        // Discord  
<UserAppIcon name="zoom.us" />        // Zoom
<UserAppIcon name="Microsoft Teams" /> // Teams
```

### Browsers
```tsx
<UserAppIcon name="Google Chrome" />   // Chrome
<UserAppIcon name="Firefox" />        // Firefox
<SystemAppIcon name="Safari" />       // Safari
<UserAppIcon name="Brave" />          // Brave
```

### File Management
```tsx
<SystemAppIcon name="Finder" />       // Finder
<FolderIcon name="Documents" />       // Documents
<FolderIcon name="Downloads" />       // Downloads
<FileExtensionIcon name="pdf" />      // PDF files
```

## Performance Considerations

### Image Loading
- Icons include loading placeholders by default
- Failed loads show fallback placeholder
- Images are cached by the browser
- Consider preloading for critical icons

### Bundle Size
- Icons are loaded as needed (no bundle impact)
- PNG files are optimized for retro aesthetic
- Consider using `loading="lazy"` for off-screen icons

### Accessibility
- Always provide meaningful `alt` text
- Use proper ARIA labels in interactive contexts
- Ensure sufficient color contrast in themes

## Examples in Context

### File Browser Component
```tsx
function FileBrowser({ files }: { files: FileItem[] }) {
  return (
    <div className="space-y-2">
      {files.map(file => (
        <div key={file.id} className="flex items-center gap-3 p-2 hover:bg-accent rounded">
          {file.type === 'folder' ? (
            <FolderIcon name="Folder" size="md" />
          ) : (
            <FileExtensionIcon name={file.extension} size="md" />
          )}
          <span>{file.name}</span>
        </div>
      ))}
    </div>
  )
}
```

### Application Launcher
```tsx
function AppLauncher({ apps }: { apps: App[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {apps.map(app => (
        <button
          key={app.id}
          className="flex flex-col items-center gap-2 p-4 hover:bg-accent rounded-lg"
          onClick={() => launchApp(app)}
        >
          <UserAppIcon name={app.name} size="xl" />
          <span className="text-sm">{app.displayName}</span>
        </button>
      ))}
    </div>
  )
}
```

### Status Dashboard
```tsx
function StatusDashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <SystemAppIcon name="Activity Monitor" size="lg" />
          <div>
            <p className="font-medium">System Load</p>
            <p className="text-sm text-muted-foreground">45% CPU</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center gap-3 p-4">
          <DriveIcon name="External" size="lg" />
          <div>
            <p className="font-medium">Storage</p>
            <p className="text-sm text-muted-foreground">2.5 TB free</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

## Icon Showcase Component

For browsing all available icons, use the built-in showcase:

```tsx
import { IconShowcase } from '@/components/retro/icons/IconShowcase'

function IconsPage() {
  return <IconShowcase />
}
```

The showcase includes:
- Search functionality
- Category tabs
- Copy-to-clipboard for component code
- Size demonstrations
- Usage examples

---

*This comprehensive icon system provides everything you need to build retro-styled interfaces with consistent, theme-aware iconography.*