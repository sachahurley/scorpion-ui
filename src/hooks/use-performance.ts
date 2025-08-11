import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  componentMount: number;
  routeChange: number;
  renderTime: number;
}

interface UsePerformanceOptions {
  enabled?: boolean;
  logToConsole?: boolean;
  onMetrics?: (metrics: PerformanceMetrics) => void;
}

export function usePerformance(options: UsePerformanceOptions = {}) {
  const { enabled = process.env.NODE_ENV === 'development', logToConsole = true, onMetrics } = options;
  const mountTimeRef = useRef<number>(0);
  const renderStartRef = useRef<number>(0);

  // Track component mount time
  useEffect(() => {
    if (!enabled) return;
    
    mountTimeRef.current = performance.now();
    
    return () => {
      const unmountTime = performance.now();
      const totalTime = unmountTime - mountTimeRef.current;
      
      if (logToConsole) {
        console.log(`Component lifecycle: ${totalTime.toFixed(2)}ms`);
      }
    };
  }, [enabled, logToConsole]);

  // Track render performance
  const trackRender = useCallback(() => {
    if (!enabled) return;
    
    renderStartRef.current = performance.now();
    
    return () => {
      const renderTime = performance.now() - renderStartRef.current;
      
      if (logToConsole) {
        console.log(`Render time: ${renderTime.toFixed(2)}ms`);
      }
      
      const metrics: PerformanceMetrics = {
        componentMount: mountTimeRef.current,
        routeChange: Date.now(),
        renderTime
      };
      
      onMetrics?.(metrics);
    };
  }, [enabled, logToConsole, onMetrics]);

  // Track route changes
  const trackRouteChange = useCallback((pathname: string) => {
    if (!enabled) return;
    
    const routeChangeTime = performance.now();
    
    if (logToConsole) {
      console.log(`Route change to ${pathname}: ${routeChangeTime.toFixed(2)}ms`);
    }
    
    return routeChangeTime;
  }, [enabled, logToConsole]);

  return {
    trackRender,
    trackRouteChange,
    getMetrics: () => ({
      componentMount: mountTimeRef.current,
      currentTime: performance.now(),
      totalTime: performance.now() - mountTimeRef.current
    })
  };
}

// Hook specifically for tracking route performance
export function useRoutePerformance() {
  const routeStartRef = useRef<number>(0);
  
  const startRouteTimer = useCallback(() => {
    routeStartRef.current = performance.now();
  }, []);
  
  const endRouteTimer = useCallback((routeName: string) => {
    const duration = performance.now() - routeStartRef.current;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Route ${routeName} loaded in ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  }, []);
  
  return { startRouteTimer, endRouteTimer };
}
