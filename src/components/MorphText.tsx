"use client";

const FONTS = [
  "Georgia, serif",
  "system-ui, sans-serif",
  "'Courier New', monospace",
  "Palatino, serif",
  "'Trebuchet MS', sans-serif",
  "'Courier New', monospace",
];

const COLORS = [
  "#d62828",
  "#e85d04",
  "#f48c06",
  "#f9c74f",
  "#90be6d",
  "#e76f51",
  "#ff9f1c",
  "#2d6a4f",
  "#f4a261",
  "#606c38",
];

const WEIGHTS = [300, 400, 500, 600, 700, 800, 900];

interface MorphTextProps {
  text: string;
  className?: string;
  color?: string;
}

export default function MorphText({ text, className = "", color = "#d62828" }: MorphTextProps) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            fontFamily: FONTS[i % FONTS.length],
            fontWeight: WEIGHTS[i % WEIGHTS.length],
            fontStyle: i % 4 === 2 ? "italic" : "normal",
            color,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
