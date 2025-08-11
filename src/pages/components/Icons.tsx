import ComponentPreviewCard from '@/components/retro/ComponentPreviewCard'
import { IconShowcase } from '@/components/retro/icons/IconShowcase'
import { UserAppIcon, SystemAppIcon, FolderIcon, FileExtensionIcon, DriveIcon } from '@/components/retro/icons/RetroIcon'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Icons() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Icon Components</h1>
        <p className="text-muted-foreground mt-2">
          Comprehensive retro icon library with automatic theme switching and type-safe component API.
        </p>
      </div>

      {/* Quick Examples */}
      <div className="grid gap-6">
        <ComponentPreviewCard title="Icon Sizes">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <UserAppIcon name="Figma" size="sm" />
              <code className="text-sm">size="sm"</code>
            </div>
            <div className="flex items-center gap-2">
              <UserAppIcon name="Figma" size="md" />
              <code className="text-sm">size="md"</code>
            </div>
            <div className="flex items-center gap-2">
              <UserAppIcon name="Figma" size="lg" />
              <code className="text-sm">size="lg"</code>
            </div>
            <div className="flex items-center gap-2">
              <UserAppIcon name="Figma" size="xl" />
              <code className="text-sm">size="xl"</code>
            </div>
            <div className="flex items-center gap-2">
              <UserAppIcon name="Figma" size="2xl" />
              <code className="text-sm">size="2xl"</code>
            </div>
          </div>
        </ComponentPreviewCard>

        <ComponentPreviewCard title="Icon Categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <UserAppIcon name="Visual Studio Code" size="sm" />
                  User Apps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <UserAppIcon name="Figma" size="md" />
                  <UserAppIcon name="Visual Studio Code" size="md" />
                  <UserAppIcon name="Adobe Photoshop 2022" size="md" />
                  <UserAppIcon name="Discord" size="md" />
                </div>
                <Badge variant="outline" className="text-xs">73 icons</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <SystemAppIcon name="Calculator" size="sm" />
                  System Apps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <SystemAppIcon name="Calculator" size="md" />
                  <SystemAppIcon name="Terminal" size="md" />
                  <SystemAppIcon name="Safari" size="md" />
                  <SystemAppIcon name="Finder" size="md" />
                </div>
                <Badge variant="outline" className="text-xs">43 icons</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <FolderIcon name="Folder" size="sm" />
                  Folders & Files
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <FolderIcon name="Documents" size="md" />
                  <FileExtensionIcon name="pdf" size="md" />
                  <FileExtensionIcon name="zip" size="md" />
                  <DriveIcon name="External" size="md" />
                </div>
                <Badge variant="outline" className="text-xs">52 icons</Badge>
              </CardContent>
            </Card>
          </div>
        </ComponentPreviewCard>

        <ComponentPreviewCard title="Theme Switching">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Icons automatically switch between light and dark variants based on your current theme.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="bg-white p-3 rounded border mb-2">
                  <UserAppIcon name="Figma" size="lg" forceTheme="light" />
                </div>
                <code className="text-xs">Light Theme</code>
              </div>
              <div className="text-center">
                <div className="bg-slate-900 p-3 rounded border mb-2">
                  <UserAppIcon name="Figma" size="lg" forceTheme="dark" />
                </div>
                <code className="text-xs">Dark Theme</code>
              </div>
            </div>
          </div>
        </ComponentPreviewCard>

        <ComponentPreviewCard title="Usage Examples">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Basic Usage</h4>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                {`<UserAppIcon name="Figma" size="md" alt="Figma icon" />
<SystemAppIcon name="Terminal" />
<FolderIcon name="Documents" size="lg" />`}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">With Custom Styling</h4>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                {`<UserAppIcon 
  name="Visual Studio Code" 
  size="xl"
  className="hover:scale-110 transition-transform"
  alt="VS Code editor"
/>`}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">In Buttons and Lists</h4>
              <div className="space-y-3">
                <Button variant="outline" className="gap-2">
                  <UserAppIcon name="Github Desktop" size="sm" />
                  Open GitHub
                </Button>
                
                <div className="flex items-center gap-3 p-3 border rounded">
                  <FolderIcon name="Documents" size="md" />
                  <div>
                    <p className="font-medium">My Documents</p>
                    <p className="text-sm text-muted-foreground">Contains 24 files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ComponentPreviewCard>

        <ComponentPreviewCard title="Popular Development Icons">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4">
            {[
              { name: 'Visual Studio Code', category: 'user-apps' as const },
              { name: 'Figma', category: 'user-apps' as const },
              { name: 'Github Desktop', category: 'user-apps' as const },
              { name: 'Adobe Photoshop 2022', category: 'user-apps' as const },
              { name: 'Terminal', category: 'system-apps' as const },
              { name: 'Safari', category: 'system-apps' as const },
              { name: 'Calculator', category: 'system-apps' as const },
              { name: 'Finder', category: 'system-apps' as const },
              { name: 'Documents', category: 'system-folders' as const },
              { name: 'Downloads', category: 'system-folders' as const },
              { name: 'zip', category: 'extensions' as const },
              { name: 'External', category: 'drives' as const },
            ].map(({ name, category }) => {
              const IconComponent = {
                'user-apps': UserAppIcon,
                'system-apps': SystemAppIcon,
                'system-folders': FolderIcon,
                'extensions': FileExtensionIcon,
                'drives': DriveIcon,
              }[category];

              return (
                <div key={name} className="text-center">
                  <div className="p-2 hover:bg-accent rounded transition-colors">
                    <IconComponent name={name} size="lg" />
                  </div>
                  <p className="text-xs mt-1 truncate" title={name}>
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </ComponentPreviewCard>
      </div>

      {/* Full Icon Showcase */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Complete Icon Library</h2>
        <IconShowcase />
      </div>
    </div>
  )
}