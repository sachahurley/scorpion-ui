import { Home, LayoutGrid, ChevronDown, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import { useAppTheme } from "@/theme/ThemeProvider";
import { PixelHome, PixelGrid, PixelChevronDown } from "@/components/retro/icons/PixelIcons";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AppSidebar = ({ open, onClose }: AppSidebarProps) => {
  const location = useLocation();
  const path = location.pathname;
  const initiallyOpen = useMemo(() => path.startsWith("/components"), [path]);
  const [groupOpen, setGroupOpen] = useState(initiallyOpen);
  const { theme, retroDark, setRetroDark, toggleTheme } = useAppTheme();

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
      isActive ? "bg-sidebar-accent text-foreground" : "hover:bg-accent hover:text-accent-foreground"
    );

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        aria-hidden
        onClick={onClose}
          className={cn(
            "fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm transition-opacity",
            theme === "retro" ? "lg:hidden" : "md:hidden",
            open ? "opacity-100" : "pointer-events-none opacity-0"
          )}
      />

      <aside
        className={cn(
          "fixed z-40 inset-y-0 left-0 w-64 border-r bg-sidebar transition-transform",
          theme === "retro" ? "lg:translate-x-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:z-auto" : "md:translate-x-0 md:static md:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className={cn("p-4 pt-4 space-y-1", theme === "retro" ? "pb-24 lg:pb-4" : undefined)}>
          <NavLink to="/" end className={linkCls} onClick={onClose}>
            {theme === "retro" ? <PixelHome /> : <Home />}
            <span>Home</span>
          </NavLink>

          {/* Components group */}
          <div>
            <button
              type="button"
              onClick={() => setGroupOpen((v) => !v)}
              className={cn(
                "w-full flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                path.startsWith("/components") && "bg-sidebar-accent text-foreground"
              )}
              aria-expanded={groupOpen}
            >
              <span className="flex items-center gap-3">
                {theme === "retro" ? <PixelGrid /> : <LayoutGrid />}
                Components
              </span>
{theme === "retro" ? (
                  <PixelChevronDown className={cn("components-chevron h-4 w-4", groupOpen && "active")} aria-hidden />
                ) : (
                  <ChevronDown className={cn("h-4 w-4 transition-transform", groupOpen ? "rotate-180" : "rotate-0")} aria-hidden />
                )}
            </button>
            {groupOpen && (
              <div className="mt-1 space-y-1">
                <NavLink to="/components" end className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Overview</NavLink>
                <NavLink to="/components/navigation" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Navigation</NavLink>
                <NavLink to="/components/buttons" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Buttons</NavLink>
                <NavLink to="/components/forms" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Forms</NavLink>
                <NavLink to="/components/cards" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Cards</NavLink>
                <NavLink to="/components/modals" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Modals</NavLink>
                <NavLink to="/components/type" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Type</NavLink>
                <NavLink to="/components/pickers" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Pickers</NavLink>
                <NavLink to="/components/progress" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>Progress</NavLink>
                <NavLink to="/components/tooltip" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>
                  Tooltip
                </NavLink>
                <NavLink to="/components/elevation" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>
                  Elevation
                </NavLink>
                <NavLink to="/components/spacing" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>
                  Spacing
                </NavLink>
                <NavLink to="/components/feedback" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>
                  Feedback
                </NavLink>
                <NavLink to="/components/loading" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")} onClick={onClose}>
                  Loading
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {theme === "retro" && (
          <div className={cn("absolute bottom-0 left-0 right-0 border-t p-4 bg-sidebar mobile-sidebar", theme === "retro" ? "lg:hidden" : "md:hidden")}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-start gap-2 theme-switch self-start" aria-label="Retro dark mode toggle">
                <Sun className={cn("h-4 w-4", retroDark ? "opacity-40" : "opacity-100")} />
                <Switch checked={retroDark} onCheckedChange={(v) => setRetroDark(v)} aria-label="Toggle dark mode" />
                <Moon className={cn("h-4 w-4", retroDark ? "opacity-100" : "opacity-40")} />
              </div>
              <Button onClick={toggleTheme} variant="outline" size="sm" className="w-full">
                Switch to Modern
              </Button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default AppSidebar;
