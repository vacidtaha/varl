"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { label: "Signaling Cascades Mapped", value: 1247, max: 2000, suffix: "", color: "#4F8CF7" },
  { label: "Feedback Loops Detected", value: 384, max: 500, suffix: "", color: "#6C5CE7" },
  { label: "Intervention Points Identified", value: 89, max: 120, suffix: "", color: "#00B894" },
  { label: "Cross-Pathway Interactions", value: 2631, max: 4000, suffix: "", color: "#FDCB6E" },
  { label: "Model Confidence", value: 91.2, max: 100, suffix: "%", color: "#E17055" },
];

export default function SimulationMetrics() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 1 : p + 0.015));
    }, 30);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div ref={containerRef} className="flex h-full w-full flex-col justify-center gap-4 p-8">
      <span className="mb-1 text-[10px] tracking-widest text-gray-400" style={{ fontWeight: 500 }}>PATHWAY ANALYSIS ENGINE</span>
      {metrics.map((m) => {
        const current = m.value * Math.min(progress, 1);
        const barWidth = (m.value / m.max) * Math.min(progress, 1);
        const display = m.value >= 100
          ? Math.round(current).toLocaleString()
          : current.toFixed(1);

        return (
          <div key={m.label} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[11px] text-gray-500 dark:text-gray-400">{m.label}</span>
              <span className="font-mono text-xs text-gray-700 dark:text-gray-200" style={{ fontWeight: 500 }}>
                {display}{m.suffix}
              </span>
            </div>
            <div className="h-[5px] w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-700">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${barWidth * 100}%`,
                  backgroundColor: m.color,
                  transition: "width 0.4s ease-out",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
