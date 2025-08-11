import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface UseScrollResetOptions {
  /**
   * Whether to reset scroll position on route changes
   * @default true
   */
  enabled?: boolean;
  
  /**
   * Scroll behavior when resetting
   * @default "auto"
   */
  behavior?: ScrollBehavior;
  
  /**
   * Whether to respect hash navigation (don't reset if URL has hash)
   * @default true
   */
  respectHash?: boolean;
  
  /**
   * Custom selector for the scrollable container
   * @default "main" or document.documentElement
   */
  containerSelector?: string;
}

/**
 * Hook to automatically reset scroll position when navigating between pages
 * 
 * This hook ensures that users always start at the top of a page when navigating,
 * providing a consistent and expected user experience.
 * 
 * @param options Configuration options for scroll reset behavior
 * @returns Object with manual scroll reset function and current scroll state
 */
export function useScrollReset(options: UseScrollResetOptions = {}) {
  const {
    enabled = true,
    behavior = "auto",
    respectHash = true,
    containerSelector
  } = options;
  
  const location = useLocation();
  const previousPathRef = useRef<string>('');
  const scrollPositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Store current scroll position before navigation
  const storeScrollPosition = useCallback(() => {
    if (!enabled) return;
    
    const container = containerSelector 
      ? document.querySelector(containerSelector) as HTMLElement
      : document.documentElement;
      
    if (container) {
      scrollPositionRef.current = {
        x: container.scrollLeft || window.pageXOffset,
        y: container.scrollTop || window.pageYOffset
      };
    }
  }, [enabled, containerSelector]);
  
  // Reset scroll position to top
  const resetScroll = useCallback((target?: HTMLElement | null) => {
    if (!enabled) return;
    
    // Don't reset if we're navigating to a hash on the same page
    if (respectHash && window.location.hash && previousPathRef.current === location.pathname) {
      return;
    }
    
    const container = target || (containerSelector 
      ? document.querySelector(containerSelector) as HTMLElement
      : document.documentElement);
      
    if (!container) return;
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      try {
        // For document element, use window.scrollTo
        if (container === document.documentElement) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior
          });
        } else {
          // For other containers, set scrollTop/scrollLeft
          container.scrollTop = 0;
          container.scrollLeft = 0;
        }
      } catch (error) {
        // Fallback to instant scroll if smooth scrolling fails
        console.warn('Scroll reset failed, using fallback:', error);
        if (container === document.documentElement) {
          window.scrollTo(0, 0);
        } else {
          container.scrollTop = 0;
          container.scrollLeft = 0;
        }
      }
    });
  }, [enabled, respectHash, behavior, containerSelector, location.pathname]);
  
  // Enhanced scroll reset that handles both themes and edge cases
  const enhancedResetScroll = useCallback(() => {
    if (!enabled) return;
    
    // Don't reset for hash-only changes
    if (respectHash && window.location.hash && previousPathRef.current === location.pathname) {
      return;
    }
    
    // Store current position before resetting
    storeScrollPosition();
    
    // Reset scroll position
    resetScroll();
    
    // Update previous path reference
    previousPathRef.current = location.pathname;
  }, [enabled, respectHash, location.pathname, storeScrollPosition, resetScroll]);
  
  // Auto-reset scroll on route changes
  useEffect(() => {
    enhancedResetScroll();
  }, [location.pathname, enhancedResetScroll]);
  
  // Store scroll position on unmount (cleanup)
  useEffect(() => {
    return () => {
      storeScrollPosition();
    };
  }, [storeScrollPosition]);
  
  return {
    resetScroll,
    storeScrollPosition,
    currentScrollPosition: scrollPositionRef.current,
    isEnabled: enabled
  };
}

