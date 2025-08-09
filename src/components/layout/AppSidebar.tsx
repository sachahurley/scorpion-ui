import { Home, LayoutGrid, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Dashboard", href: "/", icon: Home, active: true },
  { label: "Projects", href: "#", icon: LayoutGrid },
  { label: "Settings", href: "#", icon: Settings },
];

const AppSidebar = ({ open, onClose }: AppSidebarProps) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed z-40 inset-y-0 left-0 w-64 border-r bg-background transition-transform md:translate-x-0 md:static md:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center px-4 border-b">
          <span className="font-semibold">Navigation</span>
        </div>
        <nav className="p-3 space-y-1">
          {navItems.map(({ label, href, icon: Icon, active }) => (
            <a
              key={label}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
                active ? "bg-sidebar-accent text-foreground" : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="text-muted-foreground" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto p-3 border-t hidden md:block">
          <Button variant="outline" className="w-full">Upgrade</Button>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
