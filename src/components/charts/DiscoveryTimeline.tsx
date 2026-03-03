"use client";

import { useEffect, useState } from "react";

const discoveries = [
  { year: "2026", title: "Immune Pathway Mapping", status: "Active Research", confidence: 72, category: "Health" },
  { year: "2026", title: "Crop Stress Response Model", status: "Early Signal", confidence: 58, category: "Food" },
  { year: "2026", title: "Protein Folding Engine v1", status: "In Development", confidence: 81, category: "Health" },
  { year: "2026", title: "Soil Microbiome Atlas", status: "Data Collection", confidence: 45, category: "Food" },
  { year: "2026", title: "Biomarker Detection Pipeline", status: "Preliminary Results", confidence: 67, category: "Health" },
  { year: "2026", title: "Nutritional Profiling Framework", status: "Architecture Phase", confidence: 38, category: "Food" },
  { year: "2026", title: "Digital Twin Core Engine", status: "Active Development", confidence: 74, category: "Health" },
];

export default function DiscoveryTimeline() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => (v < discoveries.length ? v + 1 : v));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-3 overflow-hidden p-6">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Research Pipeline</span>
        <span className="text-xs text-gray-400">{discoveries.length} workstreams</span>
      </div>
      {discoveries.map((d, i) => (
        <div
          key={d.title}
          className="flex items-center gap-4 transition-all duration-500"
          style={{
            opacity: i < visible ? 1 : 0,
            transform: i < visible ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span className="w-10 shrink-0 text-xs text-gray-400">{d.year}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{d.title}</span>
              <span className={`text-xs ${
                d.status === "Preliminary Results" ? "text-green-500" :
                d.status === "Active Research" || d.status === "Active Development" ? "text-blue-500" :
                d.status === "Early Signal" ? "text-purple-500" :
                "text-gray-400"
              }`}>{d.status}</span>
            </div>
            <div className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-700">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: i < visible ? `${d.confidence}%` : "0%",
                  backgroundColor: d.category === "Health" ? "#4F8CF7" : "#00B894",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
