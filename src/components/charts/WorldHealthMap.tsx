"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/countries-110m.json";

const healthData: Record<string, { name: string; burden: number; label: string }> = {
  "840": { name: "United States", burden: 87, label: "$4.5T healthcare spending" },
  "156": { name: "China", burden: 72, label: "1.4B population under reform" },
  "356": { name: "India", burden: 65, label: "68% disease burden preventable" },
  "076": { name: "Brazil", burden: 58, label: "Tropical disease hotspot" },
  "566": { name: "Nigeria", burden: 45, label: "Highest child mortality rate" },
  "276": { name: "Germany", burden: 82, label: "Leading pharma R&D hub" },
  "826": { name: "United Kingdom", burden: 80, label: "NHS genomic medicine pioneer" },
  "392": { name: "Japan", burden: 90, label: "Aging population crisis" },
  "643": { name: "Russia", burden: 55, label: "Life expectancy gap: 12 years" },
  "710": { name: "South Africa", burden: 48, label: "HIV/TB dual epidemic" },
  "036": { name: "Australia", burden: 85, label: "Precision medicine leader" },
  "250": { name: "France", burden: 83, label: "€300B+ health system" },
  "360": { name: "Indonesia", burden: 50, label: "270M underserved population" },
  "792": { name: "Türkiye", burden: 62, label: "Biotech sector emerging" },
  "484": { name: "Mexico", burden: 52, label: "Chronic disease epidemic" },
  "410": { name: "South Korea", burden: 88, label: "AI diagnostics leader" },
  "124": { name: "Canada", burden: 78, label: "Universal healthcare model" },
  "032": { name: "Argentina", burden: 54, label: "Emerging biotech hub" },
  "818": { name: "Egypt", burden: 47, label: "Hepatitis C elimination program" },
  "682": { name: "Saudi Arabia", burden: 60, label: "Vision 2030 health investment" },
  "380": { name: "Italy", burden: 81, label: "Aging population challenge" },
  "724": { name: "Spain", burden: 79, label: "Public health innovation" },
  "170": { name: "Colombia", burden: 51, label: "Tropical medicine frontier" },
  "404": { name: "Kenya", burden: 43, label: "Mobile health pioneer" },
  "764": { name: "Thailand", burden: 56, label: "Universal coverage model" },
  "616": { name: "Poland", burden: 64, label: "Central European health hub" },
  "586": { name: "Pakistan", burden: 42, label: "220M underserved population" },
  "050": { name: "Bangladesh", burden: 40, label: "Community health innovation" },
  "231": { name: "Ethiopia", burden: 38, label: "Health extension program" },
  "608": { name: "Philippines", burden: 49, label: "Infectious disease burden" },
};

function getColor(burden: number) {
  if (burden >= 80) return "#dc2626";
  if (burden >= 60) return "#ef4444";
  if (burden >= 40) return "#f87171";
  return "#fca5a5";
}

function WorldHealthMap() {
  const [tooltip, setTooltip] = useState<{ name: string; label: string; x: number; y: number } | null>(null);
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const getRelativePos = useCallback((e: unknown) => {
    const evt = e as React.MouseEvent;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  }, []);

  const noDataFill = isDark ? "#2a2a2a" : "#e5e5e5";
  const noDataHover = isDark ? "#3a3a3a" : "#d4d4d4";
  const strokeColor = isDark ? "#404040" : "#fff";

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 120, center: [20, 20] }}
        width={900}
        height={440}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const id = geo.id || "";
              const data = healthData[id];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    if (data) {
                      const pos = getRelativePos(e);
                      setTooltip({ name: data.name, label: data.label, ...pos });
                    }
                  }}
                  onMouseMove={(e) => {
                    if (data) {
                      const pos = getRelativePos(e);
                      setTooltip((prev) => prev ? { ...prev, ...pos } : null);
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: data ? getColor(data.burden) : noDataFill,
                      stroke: strokeColor,
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: data ? "#991b1b" : noDataHover,
                      stroke: strokeColor,
                      strokeWidth: 0.4,
                      outline: "none",
                      cursor: data ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltip && (
        <div
          className="pointer-events-none absolute z-50 max-w-xs rounded-lg bg-gray-900 px-4 py-2.5 text-xs text-white shadow-xl"
          style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
        >
          <span style={{ fontWeight: 600 }}>{tooltip.name}</span>
          <br />
          <span className="text-white/70">{tooltip.label}</span>
        </div>
      )}
    </div>
  );
}

export default memo(WorldHealthMap);
