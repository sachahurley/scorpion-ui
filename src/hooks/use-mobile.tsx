import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Performance monitoring
    const startTime = performance.now();
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const onChange = () => {
      const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(newIsMobile);
      
      // Performance logging in development
      if (process.env.NODE_ENV === 'development') {
        const duration = performance.now() - startTime;
        console.log(`Mobile breakpoint change: ${newIsMobile ? 'mobile' : 'desktop'} (${duration.toFixed(2)}ms)`);
      }
    }
    
    // Set initial value
    onChange();
    
    // Add event listener
    mql.addEventListener("change", onChange);
    
    // Cleanup
    return () => {
      mql.removeEventListener("change", onChange);
    }
  }, [])

  return !!isMobile
}
