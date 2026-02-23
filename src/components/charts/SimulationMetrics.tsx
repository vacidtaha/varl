"use client";

import { useEffect, useState } from "react";

const metrics = [
  { label: "Simulations / hr", value: 12480, suffix: "", color: "#4F8CF7" },
  { label: "Pathways Analyzed", value: 3847, suffix: "", color: "#6C5CE7" },
  { label: "Prediction Accuracy", value: 97.3, suffix: "%", color: "#00B894" },
  { label: "Avg. Resolution", value: 0.12, suffix: "nm", color: "#FDCB6E" },
];

export default function SimulationMetrics() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 1 ? 1 : p + 0.02));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-5 p-8">
      {metrics.map((m) => {
        const current = m.value * Math.min(progress, 1);
        const display = m.value >= 100 ? Math.round(current).toLocaleString() : current.toFixed(m.value < 1 ? 2 : 1);
        return (
          <div key={m.label} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">{m.label}</span>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {display}{m.suffix}
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-700">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(progress * 100, (m.value / (m.value >= 100 ? 15000 : 100)) * 100)}%`,
                  backgroundColor: m.color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
