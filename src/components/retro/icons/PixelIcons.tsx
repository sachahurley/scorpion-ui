import React from "react";
import { cn } from "@/lib/utils";

export interface PixelIconProps {
  size?: number; // 16 | 24 | 32 etc
  className?: string;
}

// Helper function to build pixel rectangles for 8-bit icons
function buildPixels(pixelCoords: [number, number][], pixel: number) {
  return pixelCoords.map(([x, y], i) => (
    <rect
      key={i}
      x={x * pixel}
      y={y * pixel}
      width={pixel}
      height={pixel}
      fill="currentColor"
    />
  ));
}

// 8-bit Clipboard icon (16x16 grid)
export const PixelClipboard = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Top border
    [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1], [11,1], [12,1], [13,1],
    // Left border
    [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11], [2,12], [2,13], [2,14],
    // Right border
    [13,2], [13,3], [13,4], [13,5], [13,6], [13,7], [13,8], [13,9], [13,10], [13,11], [13,12], [13,13], [13,14],
    // Bottom border
    [3,14], [4,14], [5,14], [6,14], [7,14], [8,14], [9,14], [10,14], [11,14], [12,14],
    // Clipboard handle
    [6,0], [7,0], [8,0], [9,0],
    [5,1], [10,1],
    // Content lines
    [4,4], [5,4], [6,4], [7,4], [8,4], [9,4], [10,4], [11,4],
    [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6],
    [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8],
    [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10],
    [4,12], [5,12], [6,12], [7,12], [8,12], [9,12], [10,12], [11,12],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Checkmark icon (16x16 grid)
export const PixelCheck = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Checkmark shape
    [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8],
    [5,9], [6,9], [7,9], [8,9], [9,9], [10,9],
    [6,10], [7,10], [8,10], [9,10],
    [7,11], [8,11],
    [8,12],
    [7,13], [8,13],
    [6,14], [7,14], [8,14], [9,14],
    [5,15], [6,15], [7,15], [8,15], [9,15], [10,15],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Home icon (16x16 grid)
export const PixelHome = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Roof
    [7,1], [8,1],
    [6,2], [7,2], [8,2], [9,2],
    [5,3], [6,3], [7,3], [8,3], [9,3], [10,3],
    [4,4], [5,4], [6,4], [7,4], [8,4], [9,4], [10,4], [11,4],
    // House body
    [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5], [10,5], [11,5], [12,5],
    [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6],
    [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7],
    [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8], [12,8],
    [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9], [12,9],
    [3,10], [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10],
    [3,11], [4,11], [5,11], [6,11], [7,11], [8,11], [9,11], [10,11], [11,11], [12,11],
    [3,12], [4,12], [5,12], [6,12], [7,12], [8,12], [9,12], [10,12], [11,12], [12,12],
    [3,13], [4,13], [5,13], [6,13], [7,13], [8,13], [9,13], [10,13], [11,13], [12,13],
    [3,14], [4,14], [5,14], [6,14], [7,14], [8,14], [9,14], [10,14], [11,14], [12,14],
    // Door
    [6,10], [7,10], [8,10], [9,10],
    [6,11], [7,11], [8,11], [9,11],
    [6,12], [7,12], [8,12], [9,12],
    [6,13], [7,13], [8,13], [9,13],
    [6,14], [7,14], [8,14], [9,14],
    // Windows
    [4,6], [5,6], [10,6], [11,6],
    [4,7], [5,7], [10,7], [11,7],
    [4,8], [5,8], [10,8], [11,8],
    // Chimney
    [9,3], [10,3],
    [9,4], [10,4],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Grid icon (16x16 grid)
export const PixelGrid = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Grid lines
    [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2], [9,2], [10,2], [11,2], [12,2], [13,2],
    [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6], [13,6],
    [2,10], [3,10], [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10], [13,10],
    [2,14], [3,14], [4,14], [5,14], [6,14], [7,14], [8,14], [9,14], [10,14], [11,14], [12,14], [13,14],
    // Vertical lines
    [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11], [2,12], [2,13], [2,14],
    [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9], [6,10], [6,11], [6,12], [6,13], [6,14],
    [10,2], [10,3], [10,4], [10,5], [10,6], [10,7], [10,8], [10,9], [10,10], [10,11], [10,12], [10,13], [10,14],
    [14,2], [14,3], [14,4], [14,5], [14,6], [14,7], [14,8], [14,9], [14,10], [14,11], [14,12], [14,13], [14,14],
    // Grid squares (filled)
    [3,3], [4,3], [5,3], [7,3], [8,3], [9,3], [11,3], [12,3], [13,3],
    [3,4], [4,4], [5,4], [7,4], [8,4], [9,4], [11,4], [12,4], [13,4],
    [3,5], [4,5], [5,5], [7,5], [8,5], [9,5], [11,5], [12,5], [13,5],
    [3,7], [4,7], [5,7], [7,7], [8,7], [9,7], [11,7], [12,7], [13,7],
    [3,8], [4,8], [5,8], [7,8], [8,8], [9,8], [11,8], [12,8], [13,8],
    [3,9], [4,9], [5,9], [7,9], [8,9], [9,9], [11,9], [12,9], [13,9],
    [3,11], [4,11], [5,11], [7,11], [8,11], [9,11], [11,11], [12,11], [13,11],
    [3,12], [4,12], [5,12], [7,12], [8,12], [9,12], [11,12], [12,12], [13,12],
    [3,13], [4,13], [5,13], [7,13], [8,13], [9,13], [11,13], [12,13], [13,13],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Chevron Down icon (16x16 grid)
export const PixelChevronDown = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Chevron down arrow
    [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6],
    [5,7], [6,7], [7,7], [8,7], [9,7], [10,7],
    [6,8], [7,8], [8,8], [9,8],
    [7,9], [8,9],
    [8,10],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Chevron Up icon (16x16 grid)
export const PixelChevronUp = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Chevron up arrow
    [8,6],
    [7,7], [8,7], [9,7],
    [6,8], [7,8], [8,8], [9,8], [10,8],
    [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9],
    [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Lightning icon (16x16 grid)
export const PixelLightning = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Lightning bolt
    [8,2],
    [7,3], [8,3], [9,3],
    [6,4], [7,4], [8,4], [9,4], [10,4],
    [5,5], [6,5], [7,5], [8,5], [9,5], [10,5], [11,5],
    [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6],
    [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7], [13,7],
    [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8], [12,8], [13,8], [14,8],
    [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9], [12,9], [13,9],
    [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10],
    [5,11], [6,11], [7,11], [8,11], [9,11], [10,11], [11,11],
    [6,12], [7,12], [8,12], [9,12], [10,12],
    [7,13], [8,13], [9,13],
    [8,14],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Sparkles icon (16x16 grid)
export const PixelSparkles = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Center sparkle
    [7,7], [8,7],
    [7,8], [8,8],
    // Top sparkle
    [7,2], [8,2],
    [7,3], [8,3],
    // Bottom sparkle
    [7,12], [8,12],
    [7,13], [8,13],
    // Left sparkle
    [2,7], [3,7],
    [2,8], [3,8],
    // Right sparkle
    [12,7], [13,7],
    [12,8], [13,8],
    // Diagonal sparkles
    [4,4], [5,4], [4,5], [5,5],
    [10,4], [11,4], [10,5], [11,5],
    [4,10], [5,10], [4,11], [5,11],
    [10,10], [11,10], [10,11], [11,11],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Accessibility icon (16x16 grid)
export const PixelAccessibility = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Person silhouette
    [8,2],
    [7,3], [8,3], [9,3],
    [6,4], [7,4], [8,4], [9,4], [10,4],
    [5,5], [6,5], [7,5], [8,5], [9,5], [10,5], [11,5],
    [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6],
    [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7], [13,7],
    [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8], [12,8], [13,8], [14,8],
    [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9], [12,9], [13,9],
    [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10],
    [5,11], [6,11], [7,11], [8,11], [9,11], [10,11], [11,11],
    [6,12], [7,12], [8,12], [9,12], [10,12],
    [7,13], [8,13], [9,13],
    [8,14],
    // Arms
    [2,9], [3,9], [4,9],
    [12,9], [13,9], [14,9],
    // Legs
    [6,15], [7,15], [8,15], [9,15], [10,15],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Wind Lines icon (16x16 grid) - for "Fast"
export const PixelWindLines = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Top wind line
    [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4], [9,4], [10,4], [11,4], [12,4], [13,4], [14,4],
    // Middle wind line (longer)
    [1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7], [13,7], [14,7],
    // Bottom wind line
    [2,10], [3,10], [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10], [13,10], [14,10],
    // Wind trail dots for motion effect
    [0,8], [15,3], [15,8], [15,11],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Toy Robot Head icon (16x16 grid) - for "Retro"
export const PixelRobotHead = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Robot antennas
    [5,1], [10,1],
    [5,2], [10,2],
    // Robot head outline
    [4,3], [5,3], [6,3], [7,3], [8,3], [9,3], [10,3], [11,3],
    [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11],
    [12,4], [12,5], [12,6], [12,7], [12,8], [12,9], [12,10], [12,11],
    [4,12], [5,12], [6,12], [7,12], [8,12], [9,12], [10,12], [11,12],
    // Robot eyes
    [5,5], [6,5], [9,5], [10,5],
    [5,6], [6,6], [9,6], [10,6],
    // Robot mouth/speaker grille
    [5,9], [6,9], [7,9], [8,9], [9,9], [10,9],
    [6,10], [7,10], [8,10], [9,10],
    // Robot ear/side details
    [2,6], [2,7], [2,8],
    [13,6], [13,7], [13,8],
    // Top detail/panel
    [6,4], [7,4], [8,4], [9,4],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Person Standing Wide icon (16x16 grid) - for "Accessible"
export const PixelPersonWide = ({ size = 32, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Head
    [7,2], [8,2],
    [7,3], [8,3],
    // Body/torso
    [6,4], [7,4], [8,4], [9,4],
    [6,5], [7,5], [8,5], [9,5],
    [6,6], [7,6], [8,6], [9,6],
    [6,7], [7,7], [8,7], [9,7],
    [6,8], [7,8], [8,8], [9,8],
    // Arms spread wide
    [3,5], [4,5], [5,5], [10,5], [11,5], [12,5],
    [2,6], [3,6], [12,6], [13,6],
    [1,7], [2,7], [13,7], [14,7],
    // Legs spread wide
    [4,9], [5,9], [6,9], [9,9], [10,9], [11,9],
    [3,10], [4,10], [5,10], [10,10], [11,10], [12,10],
    [2,11], [3,11], [4,11], [11,11], [12,11], [13,11],
    [2,12], [3,12], [12,12], [13,12],
    [2,13], [3,13], [12,13], [13,13],
    [2,14], [3,14], [12,14], [13,14],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};

// 8-bit Info icon (16x16 grid)
export const PixelInfo = ({ size = 24, className, ...props }: PixelIconProps) => {
  const pixel = size / 16;
  const pixels: [number, number][] = [
    // Info circle
    [4,2], [5,2], [6,2], [7,2], [8,2], [9,2], [10,2], [11,2],
    [3,3], [4,3], [5,3], [6,3], [7,3], [8,3], [9,3], [10,3], [11,3], [12,3],
    [3,4], [4,4], [5,4], [6,4], [7,4], [8,4], [9,4], [10,4], [11,4], [12,4],
    [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5], [10,5], [11,5], [12,5],
    [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6], [10,6], [11,6], [12,6],
    [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7], [10,7], [11,7], [12,7],
    [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8], [12,8],
    [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9], [10,9], [11,9], [12,9],
    [3,10], [4,10], [5,10], [6,10], [7,10], [8,10], [9,10], [10,10], [11,10], [12,10],
    [3,11], [4,11], [5,11], [6,11], [7,11], [8,11], [9,11], [10,11], [11,11], [12,11],
    [3,12], [4,12], [5,12], [6,12], [7,12], [8,12], [9,12], [10,12], [11,12], [12,12],
    [3,13], [4,13], [5,13], [6,13], [7,13], [8,13], [9,13], [10,13], [11,13], [12,13],
    [4,14], [5,14], [6,14], [7,14], [8,14], [9,14], [10,14], [11,14],
    // Info dot
    [7,5], [8,5],
    [7,6], [8,6],
    // Info line
    [7,9], [8,9],
    [7,10], [8,10],
    [7,11], [8,11],
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("text-foreground", className)}
      {...props}
    >
      {buildPixels(pixels, pixel)}
    </svg>
  );
};
