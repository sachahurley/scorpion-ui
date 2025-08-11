import React from 'react'
import { cn } from '@/lib/utils'

interface PixelChevronProps {
  className?: string
  size?: number
}

/**
 * 8-bit style chevron down arrow
 * Bottom half of a rotated square (diamond shape)
 */
export function PixelChevronDown({ className, size = 16 }: PixelChevronProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn('inline-block', className)}
      style={{ imageRendering: 'pixelated' }}
    >
      <g fill="currentColor">
        {/* Center row - single pixel */}
        <rect x="7" y="7" width="2" height="1" />
        {/* Second row - 3 pixels */}
        <rect x="6" y="8" width="1" height="1" />
        <rect x="7" y="8" width="2" height="1" />
        <rect x="9" y="8" width="1" height="1" />
        {/* Third row - 5 pixels */}
        <rect x="5" y="9" width="1" height="1" />
        <rect x="6" y="9" width="1" height="1" />
        <rect x="7" y="9" width="2" height="1" />
        <rect x="9" y="9" width="1" height="1" />
        <rect x="10" y="9" width="1" height="1" />
        {/* Fourth row - 7 pixels */}
        <rect x="4" y="10" width="1" height="1" />
        <rect x="5" y="10" width="1" height="1" />
        <rect x="6" y="10" width="1" height="1" />
        <rect x="7" y="10" width="2" height="1" />
        <rect x="9" y="10" width="1" height="1" />
        <rect x="10" y="10" width="1" height="1" />
        <rect x="11" y="10" width="1" height="1" />
        {/* Bottom row - 9 pixels (widest) */}
        <rect x="3" y="11" width="1" height="1" />
        <rect x="4" y="11" width="1" height="1" />
        <rect x="5" y="11" width="1" height="1" />
        <rect x="6" y="11" width="1" height="1" />
        <rect x="7" y="11" width="2" height="1" />
        <rect x="9" y="11" width="1" height="1" />
        <rect x="10" y="11" width="1" height="1" />
        <rect x="11" y="11" width="1" height="1" />
        <rect x="12" y="11" width="1" height="1" />
      </g>
    </svg>
  )
}

/**
 * 8-bit style chevron up arrow
 * Top half of a rotated square (diamond shape)
 */
export function PixelChevronUp({ className, size = 16 }: PixelChevronProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn('inline-block', className)}
      style={{ imageRendering: 'pixelated' }}
    >
      <g fill="currentColor">
        {/* Top row - 9 pixels (widest) */}
        <rect x="3" y="4" width="1" height="1" />
        <rect x="4" y="4" width="1" height="1" />
        <rect x="5" y="4" width="1" height="1" />
        <rect x="6" y="4" width="1" height="1" />
        <rect x="7" y="4" width="2" height="1" />
        <rect x="9" y="4" width="1" height="1" />
        <rect x="10" y="4" width="1" height="1" />
        <rect x="11" y="4" width="1" height="1" />
        <rect x="12" y="4" width="1" height="1" />
        {/* Second row - 7 pixels */}
        <rect x="4" y="5" width="1" height="1" />
        <rect x="5" y="5" width="1" height="1" />
        <rect x="6" y="5" width="1" height="1" />
        <rect x="7" y="5" width="2" height="1" />
        <rect x="9" y="5" width="1" height="1" />
        <rect x="10" y="5" width="1" height="1" />
        <rect x="11" y="5" width="1" height="1" />
        {/* Third row - 5 pixels */}
        <rect x="5" y="6" width="1" height="1" />
        <rect x="6" y="6" width="1" height="1" />
        <rect x="7" y="6" width="2" height="1" />
        <rect x="9" y="6" width="1" height="1" />
        <rect x="10" y="6" width="1" height="1" />
        {/* Fourth row - 3 pixels */}
        <rect x="6" y="7" width="1" height="1" />
        <rect x="7" y="7" width="2" height="1" />
        <rect x="9" y="7" width="1" height="1" />
        {/* Bottom row - single pixel */}
        <rect x="7" y="8" width="2" height="1" />
      </g>
    </svg>
  )
}