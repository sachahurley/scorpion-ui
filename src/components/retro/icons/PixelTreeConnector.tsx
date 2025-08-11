import React from 'react'
import { cn } from '@/lib/utils'

interface PixelTreeConnectorProps {
  className?: string
  size?: number
}

/**
 * 8-bit style "L" shaped tree connector icon with arrowhead
 * Used for showing hierarchy in navigation trees
 */
export function PixelTreeConnector({ className, size = 32 }: PixelTreeConnectorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn('inline-block', className)}
      style={{ imageRendering: 'pixelated' }}
    >
      <g fill="currentColor">
        {/* Vertical line - left side */}
        <rect x="6" y="4" width="2" height="16" />
        
        {/* Horizontal line - bottom part */}
        <rect x="6" y="18" width="16" height="2" />
        
        {/* Arrowhead at bottom right */}
        {/* Arrow point */}
        <rect x="22" y="18" width="2" height="2" />
        {/* Arrow top diagonal */}
        <rect x="20" y="16" width="2" height="2" />
        {/* Arrow bottom diagonal */}
        <rect x="20" y="20" width="2" height="2" />
      </g>
    </svg>
  )
}