"use client";

import { useEffect, useState } from "react";

const treatments = [
  { name: "Traditional R&D", timeline: "10–15 years", cost: "$2.6B", success: "4%", bar: 15 },
  { name: "AI-Assisted", timeline: "5–8 years", cost: "$800M", success: "18%", bar: 45 },
  { name: "VARL Platform", timeline: "1–3 years", cost: "$120M", success: "67%", bar: 92 },
];

export default function TreatmentComparison() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 p-8">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Drug Development Comparison</span>
      {treatments.map((t, i) => (
        <div key={t.name} className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <span className={`text-sm font-medium ${i === 2 ? "text-blue-500" : "text-gray-700 dark:text-gray-300"}`}>
              {t.name}
            </span>
            <span className="text-xs text-gray-400">{t.success} success rate</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-700">
            <div
              className="h-full rounded-full transition-all duration-1500 ease-out"
              style={{
                width: visible ? `${t.bar}%` : "0%",
                backgroundColor: i === 0 ? "#E17055" : i === 1 ? "#FDCB6E" : "#4F8CF7",
                transitionDelay: `${i * 300}ms`,
                transitionDuration: "1.5s",
              }}
            />
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>{t.timeline}</span>
            <span>{t.cost}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
