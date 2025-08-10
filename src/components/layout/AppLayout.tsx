import { useEffect, useRef, useState, type ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTabletOrBelow } from "@/hooks/use-compact-nav";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";
import { useLocation } from "react-router-dom";
import PixelSpinner from "@/components/retro/display/PixelSpinner";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isMobile = useIsMobile();
  const isTabletOrBelow = useIsTabletOrBelow();
  const [open, setOpen] = useState(false);
  const { theme } = useAppTheme();
  const location = useLocation();

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  const compactNav = theme === "retro" ? isTabletOrBelow : isMobile;
  const [showLoader, setShowLoader] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  // Retro-only: Scroll reset + manual restoration
  useEffect(() => {
    if (theme !== "retro") return;
    if ("scrollRestoration" in window.history) {
      try { window.history.scrollRestoration = "manual"; } catch {}
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // Focus main for a11y
    mainRef.current?.focus();
  }, [location.pathname, theme]);

  // Retro-only: lazy loading overlay after 1s navigation delay
  useEffect(() => {
    if (theme !== "retro") return;
    const t = window.setTimeout(() => setShowLoader(true), 1000);
    return () => { window.clearTimeout(t); setShowLoader(false); };
  }, [location.pathname, theme]);

  return (
    <div className={cn("min-h-screen grid grid-rows-[auto_1fr]", theme === "retro" ? "lg:grid-cols-[16rem_1fr]" : "md:grid-cols-[16rem_1fr]")}>
      <AppHeader onToggleSidebar={toggle} className="col-span-full" />

      {/* Sidebar */}
      <AppSidebar open={compactNav ? open : true} onClose={close} />

      {/* Main content */}
      <main className="bg-background">
        <div
          ref={mainRef}
          tabIndex={-1}
          className={cn(theme === "retro" ? "px-4 pt-4 md:container md:px-0" : "container", "py-8")}
        >
          {children}
        </div>
      </main>

      {theme === "retro" && showLoader && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm" role="status" aria-live="polite">
          <div className="flex flex-col items-center gap-3">
            <PixelSpinner size={40} />
            <span className="text-sm">Loading…</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
