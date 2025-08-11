import React from 'react';
import { useScrollReset } from '@/hooks/use-scroll-reset';

interface WithScrollResetOptions {
  /**
   * Whether to enable scroll reset
   * @default true
   */
  enabled?: boolean;
  
  /**
   * Scroll behavior when resetting
   * @default "auto"
   */
  behavior?: ScrollBehavior;
  
  /**
   * Whether to respect hash navigation
   * @default true
   */
  respectHash?: boolean;
  
  /**
   * Custom selector for the scrollable container
   */
  containerSelector?: string;
}

/**
 * Higher-Order Component that automatically adds scroll reset functionality
 * to any page component.
 * 
 * This ensures that users always start at the top of a page when navigating,
 * providing a consistent user experience across the application.
 * 
 * @param Component The component to wrap
 * @param options Configuration options for scroll reset behavior
 * @returns Wrapped component with scroll reset functionality
 * 
 * @example
 * ```tsx
 * // Basic usage
 * const MyPage = withScrollReset(() => <div>My Page Content</div>);
 * 
 * // With custom options
 * const MyPage = withScrollReset(() => <div>My Page Content</div>, {
 *   behavior: "smooth",
 *   respectHash: false
 * });
 * ```
 */
export function withScrollReset<P extends object>(
  Component: React.ComponentType<P>,
  options: WithScrollResetOptions = {}
) {
  const WrappedComponent = (props: P) => {
    // Apply scroll reset with the provided options
    useScrollReset(options);
    
    // Render the original component with all its props
    return <Component {...props} />;
  };
  
  // Preserve the original component's display name for debugging
  const displayName = Component.displayName || Component.name || 'Component';
  WrappedComponent.displayName = `withScrollReset(${displayName})`;
  
  return WrappedComponent;
}

/**
 * Hook version of withScrollReset for functional components
 * 
 * @param options Configuration options for scroll reset behavior
 * @returns void (hook effect)
 * 
 * @example
 * ```tsx
 * const MyPage = () => {
 *   useScrollResetOnMount();
 *   
 *   return <div>My Page Content</div>;
 * };
 * ```
 */
export function useScrollResetOnMount(options: WithScrollResetOptions = {}) {
  useScrollReset({
    enabled: true,
    behavior: "auto",
    respectHash: true,
    ...options
  });
}

