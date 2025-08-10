import { useEffect, useRef, useState, type ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTabletOrBelow } from "@/hooks/use-compact-nav";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";
import { useLocation } from "react-router-dom";
import PixelScorpion from "@/components/retro/display/PixelScorpion";

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
  const [renderLoader, setRenderLoader] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const pendingRef = useRef(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  // Retro-only: Dynamic header height CSS var and scroll reset after layout
  useEffect(() => {
    if (theme !== "retro") return;
    const header = document.querySelector(
      'header[data-app-header]'
    ) as HTMLElement | null;
    if (!header) return;

    const setVar = () => {
      const h = Math.ceil(header.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--retro-header-h", `${h}px`);
    };

    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(header);
    window.addEventListener("resize", setVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, [theme]);

  // Retro-only: Scroll reset AFTER layout is calculated to avoid overlap
  useEffect(() => {
    if (theme !== "retro") return;
    if ("scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch {}
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        // Focus main for a11y
        mainRef.current?.focus();
      });
    });
  }, [location.pathname, theme]);

  // Retro-only: show loader only if navigation takes >1s and fade away automatically
  useEffect(() => {
    if (theme !== "retro") return;
    pendingRef.current = true;
    setRenderLoader(false);
    setLoaderVisible(false);

    const showTimer = window.setTimeout(() => {
      if (pendingRef.current) {
        setRenderLoader(true);
        requestAnimationFrame(() => setLoaderVisible(true));
      }
    }, 1000);

    // Mark as ready after next paint (approximate route ready)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pendingRef.current = false;
        // If loader is visible, fade it out and then unmount
        if (renderLoader) {
          setLoaderVisible(false);
          window.setTimeout(() => setRenderLoader(false), 300);
        }
      });
    });

    return () => {
      window.clearTimeout(showTimer);
      pendingRef.current = false;
      setLoaderVisible(false);
      setRenderLoader(false);
    };
  }, [location.pathname, theme]);

  return (
    <div className={cn("min-h-screen grid grid-rows-[auto_1fr]", theme === "retro" ? "lg:grid-cols-[16rem_1fr]" : "md:grid-cols-[16rem_1fr]")}>
      <AppHeader onToggleSidebar={toggle} className="col-span-full" />

      {/* Sidebar */}
      <AppSidebar open={compactNav ? open : true} onClose={close} />

      {/* Main content */}
      <main className={cn("bg-background", theme === "retro" && "retro-main")}>
        <div
          ref={mainRef}
          tabIndex={-1}
          aria-busy={renderLoader || undefined}
          className={cn(
            theme === "retro"
              ? "retro-main-content"
              : "m-4 lg:m-8 container"
          )}
        >
          {children}
        </div>
      </main>

      {theme === "retro" && renderLoader && (
        <div
          className={cn(
            "fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            loaderVisible ? "opacity-100" : "opacity-0"
          )}
          role="status"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="flex flex-col items-center gap-3">
            <PixelScorpion size={64} />
            <span className="text-sm">Loading…</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
