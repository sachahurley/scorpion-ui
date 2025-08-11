import { useState } from 'react'
import { useAppTheme } from '@/theme/ThemeProvider'
import { cn } from '@/lib/utils'

// Icon categories and types
export type IconCategory = 'user-apps' | 'system-apps' | 'system-folders' | 'extensions' | 'drives'

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface RetroIconProps {
  /**
   * The name of the icon file (without .png extension)
   * Examples: 'Figma', 'Visual Studio Code', 'Finder'
   */
  name: string
  
  /**
   * Category of the icon - determines which folder to look in
   */
  category: IconCategory
  
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: IconSize
  
  /**
   * Alternative text for accessibility
   */
  alt?: string
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Force a specific theme (overrides automatic theme detection)
   */
  forceTheme?: 'light' | 'dark'
  
  /**
   * Callback when image fails to load
   */
  onError?: () => void
  
  /**
   * Show loading state
   * @default true
   */
  showLoading?: boolean
}

const sizeMap: Record<IconSize, string> = {
  sm: 'w-4 h-4',    // 16px
  md: 'w-6 h-6',    // 24px  
  lg: 'w-8 h-8',    // 32px
  xl: 'w-12 h-12',  // 48px
  '2xl': 'w-16 h-16', // 64px
}

const categoryMap: Record<IconCategory, string> = {
  'user-apps': '1. User apps',
  'system-apps': '2. System apps', 
  'system-folders': '3. System folders',
  'extensions': '4. Extensions',
  'drives': '5. Drives',
}

/**
 * RetroIcon component that automatically selects the appropriate theme variant
 * based on the current theme context.
 */
export function RetroIcon({
  name,
  category,
  size = 'md',
  alt,
  className,
  forceTheme,
  onError,
  showLoading = true,
}: RetroIconProps) {
  const { theme, retroDark } = useAppTheme()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Determine which theme variant to use
  const getThemeFolder = () => {
    if (forceTheme) return forceTheme === 'dark' ? 'Dark theme' : 'Light theme'
    
    // Use retroDark for retro theme, default to light for modern theme
    if (theme === 'retro') {
      return retroDark ? 'Dark theme' : 'Light theme'
    }
    
    // For modern theme, default to light
    return 'Light theme'
  }

  const themeFolder = getThemeFolder()
  const categoryFolder = categoryMap[category]
  const imagePath = `/Icons/${themeFolder}/${categoryFolder}/${name}.png`
  
  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    onError?.()
  }

  // Fallback icon when image fails to load
  if (imageError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-muted rounded',
          sizeMap[size],
          className
        )}
        title={alt || name}
      >
        <span className="text-xs text-muted-foreground">?</span>
      </div>
    )
  }

  return (
    <div className={cn('relative inline-block', className)}>
      {/* Loading placeholder */}
      {showLoading && !imageLoaded && (
        <div 
          className={cn(
            'absolute inset-0 bg-muted animate-pulse rounded',
            sizeMap[size]
          )}
        />
      )}
      
      {/* Actual icon image */}
      <img
        src={imagePath}
        alt={alt || name}
        className={cn(
          'transition-opacity duration-200 select-none',
          sizeMap[size],
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={handleImageLoad}
        onError={handleImageError}
        draggable={false}
      />
    </div>
  )
}

// Convenience components for common icon categories
export const UserAppIcon = (props: Omit<RetroIconProps, 'category'>) => (
  <RetroIcon {...props} category="user-apps" />
)

export const SystemAppIcon = (props: Omit<RetroIconProps, 'category'>) => (
  <RetroIcon {...props} category="system-apps" />
)

export const FolderIcon = (props: Omit<RetroIconProps, 'category'>) => (
  <RetroIcon {...props} category="system-folders" />
)

export const FileExtensionIcon = (props: Omit<RetroIconProps, 'category'>) => (
  <RetroIcon {...props} category="extensions" />
)

export const DriveIcon = (props: Omit<RetroIconProps, 'category'>) => (
  <RetroIcon {...props} category="drives" />
)