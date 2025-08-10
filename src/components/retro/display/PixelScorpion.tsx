import React from "react";
import { cn } from "@/lib/utils";

export interface PixelScorpionProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // px
}

/*
  PixelScorpion
  - 16x16 pixel grid SVG, crisp edges
  - Uses theme tokens: brand (body) and fire-yellow (highlight)
*/
const PixelScorpion = ({ size = 56, className, ...props }: PixelScorpionProps) => {
  const px = size / 16; // pixel size
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("inline-block animate-scorpion-bob", className)}
      style={{ width: size, height: size, imageRendering: "pixelated" as any }}
      {...props}
    >
      <svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {/* Body color */}
        <defs>
          <linearGradient id="scorpGrad" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor={`hsl(var(--brand))`} />
            <stop offset="100%" stopColor={`hsl(var(--brand-glow))`} />
          </linearGradient>
        </defs>
        {/* Draw pixels via rects (simple 8-bit scorpion silhouette) */}
        {[
          // head & claws
          [6,1],[7,1],[8,1],
          [5,2],[9,2],
          [4,3],[6,3],[7,3],[8,3],[10,3],
          [3,4],[11,4],
          // torso
          [6,4],[7,4],[8,4],
          [6,5],[7,5],[8,5],
          [6,6],[7,6],[8,6],
          // legs
          [4,6],[10,6],
          [3,7],[11,7],
          // tail base
          [7,7],
          [7,8],
          [7,9],
          [8,10],[7,10],
          [9,11],
          [10,12],
          [11,13],
          // stinger
          [12,12],[12,13]
        ].map(([x,y],i) => (
          <rect key={i} x={x} y={y} width="1" height="1" fill="url(#scorpGrad)" />
        ))}

        {/* highlights */}
        {[[6,2],[8,2],[6,5],[8,5],[10,12]].map(([x,y],i) => (
          <rect key={`h-${i}`} x={x} y={y} width="1" height="1" fill={`hsl(var(--fire-yellow))`} />
        ))}
      </svg>
      <span className="sr-only">Loading…</span>
    </div>
  );
};

export default PixelScorpion;
