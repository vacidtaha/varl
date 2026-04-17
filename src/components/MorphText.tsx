"use client";

const FONTS = [
  "Georgia, serif",
  "system-ui, sans-serif",
  "'Courier New', monospace",
  "Palatino, serif",
  "'Trebuchet MS', sans-serif",
  "'Courier New', monospace",
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
