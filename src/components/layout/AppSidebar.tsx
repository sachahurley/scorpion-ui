import { Home, LayoutGrid, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

const AppSidebar = ({ open, onClose }: AppSidebarProps) => {
  const location = useLocation();
  const path = location.pathname;
  const initiallyOpen = useMemo(() => path.startsWith("/components"), [path]);
  const [groupOpen, setGroupOpen] = useState(initiallyOpen);

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
          "fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm transition-opacity md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        className={cn(
          "fixed z-40 inset-y-0 left-0 w-64 border-r bg-sidebar transition-transform md:translate-x-0 md:static md:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="p-4 pt-4 space-y-1">
          <NavLink to="/" end className={linkCls}>
            <Home />
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
                <LayoutGrid />
                Components
              </span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", groupOpen ? "rotate-180" : "rotate-0")} />
            </button>
            {groupOpen && (
              <div className="mt-1 space-y-1">
                <NavLink to="/components" end className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Overview</NavLink>
                <NavLink to="/components/navigation" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Navigation</NavLink>
                <NavLink to="/components/buttons" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Buttons</NavLink>
                <NavLink to="/components/forms" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Forms</NavLink>
                <NavLink to="/components/cards" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Cards</NavLink>
                <NavLink to="/components/modals" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Modals</NavLink>
                <NavLink to="/components/type" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Type</NavLink>
                <NavLink to="/components/pickers" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Pickers</NavLink>
                <NavLink to="/components/progress" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Progress</NavLink>
                <NavLink to="/components/tooltip" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Tooltip</NavLink>
                <NavLink to="/components/elevation" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Elevation</NavLink>
                <NavLink to="/components/spacing" className={({ isActive }) => cn(linkCls({ isActive }), "pl-8")}>Spacing</NavLink>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default AppSidebar;
