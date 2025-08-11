import { LayoutGrid, ChevronDown, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useAppTheme } from "@/theme/ThemeProvider";
import { FolderIcon, SystemAppIcon } from "@/components/retro/icons/RetroIcon";
import { PixelChevronDown, PixelChevronUp } from "@/components/retro/icons/PixelChevrons";
import { PixelTreeConnector } from "@/components/retro/icons/PixelTreeConnector";
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
  const initiallyFoundationsOpen = useMemo(() => path.startsWith("/foundations"), [path]);
  const [groupOpen, setGroupOpen] = useState(initiallyOpen);
  const [foundationsOpen, setFoundationsOpen] = useState(initiallyFoundationsOpen);
  const [hasRendered, setHasRendered] = useState(false);
  const { theme, retroDark, setRetroDark, toggleTheme } = useAppTheme();

  // Track initial render to prevent transition flash
  useEffect(() => {
    // Small delay to ensure initial render is complete
    const timer = setTimeout(() => setHasRendered(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (open && (theme === "retro" ? window.innerWidth < 1024 : window.innerWidth < 768)) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open, theme]);

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
          "fixed z-40 inset-y-0 left-0 w-64 border-r bg-sidebar flex flex-col",
          // Only add transition after initial render to prevent flash
          hasRendered && "transition-all duration-200 ease-in-out",
          theme === "retro" ? "lg:translate-x-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto lg:z-auto" : "md:translate-x-0 md:static md:z-auto",
          // Hide completely when closed to prevent any flickering
          open ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible",
          // Force hidden state on mobile until hasRendered
          !hasRendered && theme === "retro" ? "max-lg:invisible max-lg:opacity-0" : "",
          !hasRendered && theme !== "retro" ? "max-md:invisible max-md:opacity-0" : ""
        )}
      >
        <nav className={cn(
          "p-4 pt-4 space-y-1 flex-1 overflow-y-auto",
          theme === "retro" ? "lg:pb-4" : undefined,
          // Add bottom padding for mobile to account for fixed footer
          theme === "retro" ? "pb-4" : "pb-4"
        )}>
          <NavLink to="/" end className={linkCls} onClick={onClose}>
            <SystemAppIcon name="Home" size="lg" />
            <span>Home</span>
          </NavLink>

          {/* Foundations group */}
          <div>
            <button
              type="button"
              onClick={() => setFoundationsOpen((v) => !v)}
              className={cn(
                "w-full flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                path.startsWith("/foundations") && (theme === "retro" && retroDark ? "bg-yellow-500/30 text-foreground" : "bg-sidebar-accent/70 text-foreground")
              )}
              aria-expanded={foundationsOpen}
            >
              <span className="flex items-center gap-3">
                <SystemAppIcon name="Dictionary" size="lg" />
                Foundations
              </span>
              {foundationsOpen ? (
                <PixelChevronDown className="h-4 w-4" aria-hidden />
              ) : (
                <PixelChevronUp className="h-4 w-4" aria-hidden />
              )}
            </button>
            {foundationsOpen && (
              <div className="mt-1 space-y-1">
                <NavLink to="/foundations/border-radius" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Border radius</span>
                </NavLink>
                <NavLink to="/foundations/color-base" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Color - Base</span>
                </NavLink>
                <NavLink to="/foundations/color-semantics" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Color - Semantics</span>
                </NavLink>
                <NavLink to="/foundations/elevation" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Elevation</span>
                </NavLink>
                <NavLink to="/foundations/icons" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Icons</span>
                </NavLink>
                <NavLink to="/foundations/spacing" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Spacing</span>
                </NavLink>
                <NavLink to="/foundations/type" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Type</span>
                </NavLink>
              </div>
            )}
          </div>

          {/* Components group */}
          <div>
            <button
              type="button"
              onClick={() => setGroupOpen((v) => !v)}
              className={cn(
                "w-full flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                path.startsWith("/components") && (theme === "retro" && retroDark ? "bg-yellow-500/30 text-foreground" : "bg-sidebar-accent/70 text-foreground")
              )}
              aria-expanded={groupOpen}
            >
              <span className="flex items-center gap-3">
                <SystemAppIcon name="Launchpad" size="lg" />
                Components
              </span>
{groupOpen ? (
                  <PixelChevronDown className="h-4 w-4" aria-hidden />
                ) : (
                  <PixelChevronUp className="h-4 w-4" aria-hidden />
                )}
            </button>
            {groupOpen && (
              <div className="mt-1 space-y-1">
                <NavLink to="/components" end className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Overview</span>
                </NavLink>
                <NavLink to="/components/avatar" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Avatar</span>
                </NavLink>
                <NavLink to="/components/badges" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Badges</span>
                </NavLink>
                <NavLink to="/components/buttons" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Buttons</span>
                </NavLink>
                <NavLink to="/components/cards" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Cards</span>
                </NavLink>
                <NavLink to="/components/feedback" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Feedback</span>
                </NavLink>
                <NavLink to="/components/forms" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Forms</span>
                </NavLink>
                <NavLink to="/components/loading" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Loading</span>
                </NavLink>
                <NavLink to="/components/modals" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Modals</span>
                </NavLink>
                <NavLink to="/components/navigation" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Navigation</span>
                </NavLink>
                <NavLink to="/components/pickers" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Pickers</span>
                </NavLink>
                <NavLink to="/components/progress" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Progress</span>
                </NavLink>
                <NavLink to="/components/tooltip" className={linkCls} onClick={onClose}>
                  <PixelTreeConnector className="opacity-60" />
                  <span className="pl-px">Tooltip</span>
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        {theme === "retro" && (
          <div className={cn(
            "border-t p-4 bg-sidebar mobile-sidebar flex-shrink-0",
            theme === "retro" ? "lg:hidden" : "md:hidden"
          )}>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-start gap-2 theme-switch self-start" aria-label="Retro dark mode toggle">
                <Sun className={cn("h-4 w-4", retroDark ? "opacity-40" : "opacity-100")} />
                <Switch checked={retroDark} onCheckedChange={(v) => setRetroDark(v)} aria-label="Toggle dark mode" />
                <Moon className={cn("h-4 w-4", retroDark ? "opacity-100" : "opacity-40")} />
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default AppSidebar;
