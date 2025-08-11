import { useEffect, useRef, useState, useCallback, useMemo, type ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsTabletOrBelow } from "@/hooks/use-compact-nav";
import { useRoutePerformance } from "@/hooks/use-performance";
import { useScrollReset } from "@/hooks/use-scroll-reset";
import { cn } from "@/lib/utils";
import { useAppTheme } from "@/theme/ThemeProvider";
import { useLocation } from "react-router-dom";
import RetroScorpion from "@/components/retro/display/RetroScorpion";

interface AppLayoutProps {
  children: ReactNode;
}

// Consolidated loading state interface
interface LoadingState {
  isLoading: boolean;
  isVisible: boolean;
  shouldRender: boolean;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { theme } = useAppTheme();
  const isMobile = useIsMobile();
  const isTabletOrBelow = useIsTabletOrBelow();
  
  // Initialize sidebar closed state based on theme and screen size
  const [open, setOpen] = useState(() => {
    // On initial render, assume mobile/tablet should be closed
    // This prevents the flash of open sidebar before hooks determine screen size
    return false;
  });
  
  const location = useLocation();
  const { startRouteTimer, endRouteTimer } = useRoutePerformance();

  // Consolidated loading state
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    isVisible: false,
    shouldRender: false
  });

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  const compactNav = useMemo(() => 
    theme === "retro" ? isTabletOrBelow : isMobile, 
    [theme, isTabletOrBelow, isMobile]
  );

  const pendingRef = useRef(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  // Optimized header height management with useCallback
  const setHeaderHeight = useCallback(() => {
    if (theme !== "retro") return;
    const header = document.querySelector('header[data-app-header]') as HTMLElement | null;
    if (!header) return;

    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--retro-header-h", `${height}px`);
  }, [theme]);

  // Retro-only: Dynamic header height CSS var and scroll reset after layout
  useEffect(() => {
    if (theme !== "retro") return;
    
    setHeaderHeight();
    const ro = new ResizeObserver(setHeaderHeight);
    const header = document.querySelector('header[data-app-header]');
    if (header) ro.observe(header);
    
    window.addEventListener("resize", setHeaderHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeaderHeight);
    };
  }, [theme, setHeaderHeight]);

  // Enhanced scroll reset using custom hook
  const { resetScroll } = useScrollReset({
    enabled: true,
    behavior: "auto",
    respectHash: true,
    containerSelector: theme === "retro" ? ".retro-main-content" : undefined
  });

  // Enhanced scroll reset without focus interference
  useEffect(() => {
    // Longer delay to ensure layout is fully settled before scroll reset
    const scrollTimer = setTimeout(() => {
      // Ensure we scroll to top
      if (theme === "retro") {
        const container = document.querySelector('.retro-main-content');
        if (container) {
          container.scrollTop = 0;
        }
      } else {
        window.scrollTo(0, 0);
      }
      
      // Force another scroll reset as backup
      resetScroll();
    }, 150);
    
    return () => {
      clearTimeout(scrollTimer);
    };
  }, [location.pathname, theme, resetScroll]);

  // Force scroll reset on initial app load/reload
  useEffect(() => {
    // Run on mount to handle page reloads
    const handleInitialLoad = () => {
      if (theme === "retro") {
        const container = document.querySelector('.retro-main-content');
        if (container) {
          container.scrollTop = 0;
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Run immediately and after a short delay for layout settling
    handleInitialLoad();
    const timer = setTimeout(handleInitialLoad, 100);
    
    return () => clearTimeout(timer);
  }, []); // Empty dependency array - run only on mount

  // Optimized loading state management
  const updateLoadingState = useCallback((updates: Partial<LoadingState>) => {
    setLoadingState(prev => ({ ...prev, ...updates }));
  }, []);

  // Retro-only: show loader only if navigation takes >1s and fade away automatically
  useEffect(() => {
    if (theme !== "retro") return;
    
    pendingRef.current = true;
    updateLoadingState({ shouldRender: false, isVisible: false });

    const showTimer = window.setTimeout(() => {
      if (pendingRef.current) {
        updateLoadingState({ shouldRender: true });
        requestAnimationFrame(() => updateLoadingState({ isVisible: true }));
      }
    }, 1000);

    // Mark as ready after next paint (approximate route ready)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pendingRef.current = false;
        // If loader is visible, fade it out and then unmount
        if (loadingState.shouldRender) {
          updateLoadingState({ isVisible: false });
          window.setTimeout(() => updateLoadingState({ shouldRender: false }), 300);
        }
      });
    });

    return () => {
      window.clearTimeout(showTimer);
      pendingRef.current = false;
      updateLoadingState({ isVisible: false, shouldRender: false });
    };
  }, [location.pathname, theme, updateLoadingState, loadingState.shouldRender]);

  // Track route changes for performance monitoring
  useEffect(() => {
    startRouteTimer();
    
    // End timer after a short delay to allow content to render
    const timer = setTimeout(() => {
      endRouteTimer(location.pathname);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname, startRouteTimer, endRouteTimer]);

  return (
    <div className={cn("min-h-screen grid grid-rows-[auto_1fr] min-w-[320px]", theme === "retro" ? "lg:grid-cols-[16rem_1fr]" : "md:grid-cols-[16rem_1fr]")}>
      <AppHeader onToggleSidebar={toggle} className="col-span-full" />

      {/* Sidebar */}
      <AppSidebar open={compactNav ? open : true} onClose={close} />

      {/* Main content */}
      <main className={cn("bg-background min-w-0", theme === "retro" && "retro-main")}>
        <div
          ref={mainRef}
          aria-busy={loadingState.shouldRender || undefined}
          className={cn(
            theme === "retro"
              ? "retro-main-content min-w-0"
              : "m-4 lg:m-8 container min-w-0"
          )}
        >
          {children}
        </div>
      </main>

      {theme === "retro" && loadingState.shouldRender && (
        <div
          className={cn(
            "fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            loadingState.isVisible ? "opacity-100" : "opacity-0"
          )}
          role="status"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="flex flex-col items-center gap-3">
            <RetroScorpion size={64} />
            <span className="text-sm">Loading…</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
