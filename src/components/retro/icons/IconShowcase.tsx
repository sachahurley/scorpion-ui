import { useState } from 'react'
import { RetroIcon, UserAppIcon, SystemAppIcon, FolderIcon, FileExtensionIcon, DriveIcon } from './RetroIcon'
import { iconRegistries, popularIcons, getIconCategory, type AllIconName } from './IconRegistry'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconItemProps {
  name: string
  category: 'user-apps' | 'system-apps' | 'system-folders' | 'extensions' | 'drives'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

function IconItem({ name, category, size = 'lg' }: IconItemProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    const componentMap = {
      'user-apps': 'UserAppIcon',
      'system-apps': 'SystemAppIcon', 
      'system-folders': 'FolderIcon',
      'extensions': 'FileExtensionIcon',
      'drives': 'DriveIcon',
    }
    
    const componentName = componentMap[category]
    const code = `<${componentName} name="${name}" size="${size}" alt="${name} icon" />`
    
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="group relative">
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <CardContent className="p-4 text-center">
          <div className="flex justify-center mb-3">
            <RetroIcon 
              name={name} 
              category={category} 
              size={size}
              alt={`${name} icon`}
              className="transition-transform group-hover:scale-110"
            />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium truncate" title={name}>
              {name}
            </p>
            <Badge variant="outline" className="text-xs">
              {category.replace('-', ' ')}
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      {/* Copy button on hover */}
      <Button
        variant="secondary"
        size="sm"
        className={cn(
          "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
          "h-6 w-6 p-0"
        )}
        onClick={copyToClipboard}
        title="Copy component code"
      >
        {copied ? '✓' : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  )
}

interface IconGridProps {
  icons: readonly string[]
  category: 'user-apps' | 'system-apps' | 'system-folders' | 'extensions' | 'drives'
  searchTerm: string
}

function IconGrid({ icons, category, searchTerm }: IconGridProps) {
  const filteredIcons = icons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (filteredIcons.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p>No icons found matching "{searchTerm}"</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
      {filteredIcons.map((icon) => (
        <IconItem
          key={icon}
          name={icon}
          category={category}
        />
      ))}
    </div>
  )
}

export function IconShowcase() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Retro Icon Library</h1>
        <p className="text-muted-foreground mt-2">
          Browse and copy code for all available retro-styled icons with automatic theme switching.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Popular Icons */}
      {!searchTerm && (
        <Card>
          <CardHeader>
            <CardTitle>Popular Icons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {Object.entries(popularIcons).map(([key, iconName]) => {
                const category = getIconCategory(iconName)
                if (!category) return null
                
                return (
                  <IconItem
                    key={key}
                    name={iconName}
                    category={category}
                  />
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Icon Categories */}
      <Tabs defaultValue="user-apps" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="user-apps">User Apps</TabsTrigger>
          <TabsTrigger value="system-apps">System Apps</TabsTrigger>
          <TabsTrigger value="system-folders">Folders</TabsTrigger>
          <TabsTrigger value="extensions">Extensions</TabsTrigger>
          <TabsTrigger value="drives">Drives</TabsTrigger>
        </TabsList>

        <TabsContent value="user-apps" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">User Applications</h3>
            <Badge variant="secondary">{iconRegistries.userApps.length} icons</Badge>
          </div>
          <IconGrid 
            icons={iconRegistries.userApps} 
            category="user-apps" 
            searchTerm={searchTerm}
          />
        </TabsContent>

        <TabsContent value="system-apps" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">System Applications</h3>
            <Badge variant="secondary">{iconRegistries.systemApps.length} icons</Badge>
          </div>
          <IconGrid 
            icons={iconRegistries.systemApps} 
            category="system-apps" 
            searchTerm={searchTerm}
          />
        </TabsContent>

        <TabsContent value="system-folders" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">System Folders</h3>
            <Badge variant="secondary">{iconRegistries.systemFolders.length} icons</Badge>
          </div>
          <IconGrid 
            icons={iconRegistries.systemFolders} 
            category="system-folders" 
            searchTerm={searchTerm}
          />
        </TabsContent>

        <TabsContent value="extensions" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">File Extensions</h3>
            <Badge variant="secondary">{iconRegistries.fileExtensions.length} icons</Badge>
          </div>
          <IconGrid 
            icons={iconRegistries.fileExtensions} 
            category="extensions" 
            searchTerm={searchTerm}
          />
        </TabsContent>

        <TabsContent value="drives" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Storage Drives</h3>
            <Badge variant="secondary">{iconRegistries.drives.length} icons</Badge>
          </div>
          <IconGrid 
            icons={iconRegistries.drives} 
            category="drives" 
            searchTerm={searchTerm}
          />
        </TabsContent>
      </Tabs>

      {/* Usage Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Import the components:</h4>
            <code className="block bg-muted p-2 rounded text-sm">
              {`import { UserAppIcon, SystemAppIcon, FolderIcon, FileExtensionIcon, DriveIcon } from '@/components/retro/icons/PixelIcons'`}
            </code>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Use the icons:</h4>
            <code className="block bg-muted p-2 rounded text-sm whitespace-pre-wrap">
              {`<UserAppIcon name="Figma" size="lg" alt="Figma icon" />
<SystemAppIcon name="Terminal" size="md" />
<FolderIcon name="Documents" size="sm" />`}
            </code>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Available sizes:</h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <UserAppIcon name="Figma" size="sm" />
                <code className="text-xs">sm (16px)</code>
              </div>
              <div className="flex items-center gap-2">
                <UserAppIcon name="Figma" size="md" />
                <code className="text-xs">md (24px)</code>
              </div>
              <div className="flex items-center gap-2">
                <UserAppIcon name="Figma" size="lg" />
                <code className="text-xs">lg (32px)</code>
              </div>
              <div className="flex items-center gap-2">
                <UserAppIcon name="Figma" size="xl" />
                <code className="text-xs">xl (48px)</code>
              </div>
              <div className="flex items-center gap-2">
                <UserAppIcon name="Figma" size="2xl" />
                <code className="text-xs">2xl (64px)</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}