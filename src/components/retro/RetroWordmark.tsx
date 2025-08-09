import { memo } from "react";
import { cn } from "@/lib/utils";

// 5x7 pixel font maps for required letters
const LETTERS: Record<string, string[]> = {
  " ": [
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
    "00000",
  ],
  S: [
    "01110",
    "10000",
    "10000",
    "01110",
    "00001",
    "00001",
    "01110",
  ],
  C: [
    "01110",
    "10001",
    "10000",
    "10000",
    "10000",
    "10001",
    "01110",
  ],
  O: [
    "01110",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01110",
  ],
  R: [
    "11110",
    "10001",
    "10001",
    "11110",
    "10100",
    "10010",
    "10001",
  ],
  P: [
    "11110",
    "10001",
    "10001",
    "11110",
    "10000",
    "10000",
    "10000",
  ],
  I: [
    "11111",
    "00100",
    "00100",
    "00100",
    "00100",
    "00100",
    "11111",
  ],
  N: [
    "10001",
    "11001",
    "10101",
    "10011",
    "10001",
    "10001",
    "10001",
  ],
  U: [
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "10001",
    "01110",
  ],
};

function buildRects(text: string, pixel: number) {
  const chars = text.split("");
  const widthPerChar = 5;
  const height = 7;
  const gap = 1; // gap in pixels between characters (in grid units)

  const rects: JSX.Element[] = [];
  let xOffset = 0;

  chars.forEach((ch, index) => {
    const grid = LETTERS[ch.toUpperCase()] || LETTERS[" "];
    grid.forEach((row, y) => {
      row.split("").forEach((cell, x) => {
        if (cell === "1") {
          rects.push(
            <rect
              key={`${index}-${x}-${y}`}
              x={(xOffset + x) * pixel}
              y={y * pixel}
              width={pixel}
              height={pixel}
              rx={0}
              ry={0}
              className="fill-current"
            />
          );
        }
      });
    });
    xOffset += widthPerChar + gap;
  });

  const totalWidth = xOffset - gap; // remove trailing gap
  const totalHeight = height * pixel;

  return { rects, totalWidth: totalWidth * pixel, totalHeight };
}

export interface RetroWordmarkProps {
  text?: string;
  pixelSize?: number;
  className?: string;
}

const RetroWordmark = memo(({ text = "SCORPION UI", pixelSize = 8, className }: RetroWordmarkProps) => {
  const { rects, totalWidth, totalHeight } = buildRects(text, 1); // build at 1px then scale via viewBox

  return (
    <figure className={cn("inline-block", className)} aria-hidden>
      <svg
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        width="100%"
        height="auto"
        shapeRendering="crispEdges"
        className="text-primary"
        role="img"
      >
        <title>SCORPION UI</title>
        <g>{rects}</g>
      </svg>
      <figcaption className="sr-only">Scorpion UI</figcaption>
    </figure>
  );
});

export default RetroWordmark;
