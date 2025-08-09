import React from "react";
import { cn } from "@/lib/utils";

export interface PixelIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number; // 16 | 24 | 32 etc
  className?: string;
}

function renderGrid(pattern: string[], size = 24, className?: string, title?: string) {
  const rows = pattern.length;
  const cols = pattern[0]?.length || 0;
  const pixel = Math.floor(size / Math.max(rows, cols));
  const width = cols * pixel;
  const height = rows * pixel;
  const rects: JSX.Element[] = [];
  pattern.forEach((row, y) => {
    row.split("").forEach((c, x) => {
      if (c !== "0") {
        rects.push(
          <rect key={`${x}-${y}`} x={x * pixel} y={y * pixel} width={pixel} height={pixel} />
        );
      }
    });
  });
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={cn("fill-current", className)}
      role="img"
      aria-hidden={!title}
    >
      {title ? <title>{title}</title> : null}
      {rects}
    </svg>
  );
}

export const PixelClipboard = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0011110000",
    "0111111000",
    "1101101100",
    "1111111110",
    "1111111110",
    "1111111110",
    "1111111110",
    "1111111110",
    "1111111110",
    "1111111110",
    "0111111100",
    "0011111000",
  ], size, className, undefined);

export const PixelCheck = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "000000010000",
    "000000111000",
    "000001111000",
    "000011011000",
    "000110011000",
    "001100011000",
    "011000011000",
    "110000011000",
    "100000110000",
    "000001100000",
  ], size, className, undefined);

export const PixelHome = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0000010000",
    "0000111000",
    "0001111100",
    "0011111110",
    "0111111111",
    "0000111000",
    "0000111000",
    "0000111000",
    "0000111000",
  ], size, className);

export const PixelGrid = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "110110",
    "110110",
    "000000",
    "110110",
    "110110",
  ], size, className);

export const PixelChevronDown = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0000000",
    "0011100",
    "0111110",
    "1111111",
  ], size, className);

export const PixelLightning = ({ size = 32, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0000110",
    "0001110",
    "0011100",
    "0111000",
    "1110000",
    "0111000",
    "0011100",
    "0001110",
  ], size, className);

export const PixelSparkles = ({ size = 32, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0001000",
    "0011100",
    "0111110",
    "0011100",
    "0001000",
    "0011100",
  ], size, className);

export const PixelAccessibility = ({ size = 32, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0001000",
    "0001000",
    "1111111",
    "0001000",
    "0001000",
    "0011100",
    "0010100",
    "0100010",
  ], size, className);

export const PixelInfo = ({ size = 24, className, ...props }: PixelIconProps) =>
  renderGrid([
    "0011100",
    "0010100",
    "0011100",
    "0001000",
    "0001000",
    "0001000",
  ], size, className);
