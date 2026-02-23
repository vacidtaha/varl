"use client";

import { useState, useEffect, useRef, useCallback, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/countries-110m.json";

const foodData: Record<string, { name: string; severity: number; label: string }> = {
  "840": { name: "United States", severity: 60, label: "42M food insecure, 38M in food deserts, topsoil loss crisis" },
  "156": { name: "China", severity: 45, label: "1.4B population, 20% arable land lost since 1950" },
  "356": { name: "India", severity: 65, label: "189M undernourished, groundwater depletion crisis" },
  "076": { name: "Brazil", severity: 50, label: "Deforestation-agriculture conflict, soy monoculture" },
  "566": { name: "Nigeria", severity: 80, label: "32M facing acute hunger, Boko Haram displacement" },
  "276": { name: "Germany", severity: 40, label: "Nitrate pollution crisis, soil compaction in 40% of farmland" },
  "826": { name: "United Kingdom", severity: 45, label: "Post-Brexit supply disruption, 8.4M in food poverty" },
  "392": { name: "Japan", severity: 35, label: "37% food self-sufficiency, import dependent" },
  "643": { name: "Russia", severity: 40, label: "Major wheat exporter, soil degradation in south" },
  "710": { name: "South Africa", severity: 60, label: "Water scarcity, land reform challenges" },
  "036": { name: "Australia", severity: 50, label: "Extreme drought cycles, Murray-Darling Basin collapse" },
  "250": { name: "France", severity: 40, label: "Pesticide dependency, pollinator collapse accelerating" },
  "360": { name: "Indonesia", severity: 55, label: "Palm oil deforestation, rice paddy methane" },
  "792": { name: "Türkiye", severity: 45, label: "Breadbasket under climate stress" },
  "484": { name: "Mexico", severity: 50, label: "Corn diversity erosion, water crisis" },
  "410": { name: "South Korea", severity: 45, label: "80% food import dependent, aging farmer population" },
  "124": { name: "Canada", severity: 45, label: "Permafrost thaw destabilizing prairies, topsoil erosion" },
  "818": { name: "Egypt", severity: 70, label: "World's largest wheat importer, Nile dependency" },
  "682": { name: "Saudi Arabia", severity: 65, label: "Desert agriculture, aquifer depletion" },
  "380": { name: "Italy", severity: 50, label: "Po Valley drought, olive oil production -57% in 2 years" },
  "724": { name: "Spain", severity: 40, label: "Desertification advancing, olive oil crisis" },
  "170": { name: "Colombia", severity: 55, label: "Post-conflict land restitution, coca-to-food" },
  "404": { name: "Kenya", severity: 70, label: "Drought cycles, pastoralist displacement" },
  "764": { name: "Thailand", severity: 40, label: "Rice export leader, water management" },
  "586": { name: "Pakistan", severity: 75, label: "2022 floods destroyed 8M acres cropland" },
  "050": { name: "Bangladesh", severity: 65, label: "Sea level rise threatening delta agriculture" },
  "231": { name: "Ethiopia", severity: 85, label: "Worst drought in 40 years, 20M food insecure" },
  "608": { name: "Philippines", severity: 55, label: "Typhoon damage, rice import dependency" },
  "736": { name: "Sudan", severity: 90, label: "Conflict + climate = catastrophic food crisis" },
  "887": { name: "Yemen", severity: 90, label: "17M food insecure, near-famine conditions" },
  "180": { name: "DR Congo", severity: 85, label: "26M facing acute hunger, conflict displacement" },
  "004": { name: "Afghanistan", severity: 80, label: "Economic collapse, 15M food insecure" },
  "332": { name: "Haiti", severity: 75, label: "Gang violence disrupts food supply chains" },
  "646": { name: "Rwanda", severity: 50, label: "Green revolution model, land pressure" },
  "800": { name: "Uganda", severity: 55, label: "Refugee influx straining food systems" },
};

function getColor(severity: number) {
  if (severity >= 75) return "#c2410c";
  if (severity >= 55) return "#ea580c";
  if (severity >= 35) return "#fb923c";
  return "#fdba74";
}

function WorldFoodMap() {
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
              const data = foodData[id];
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
                      fill: data ? getColor(data.severity) : noDataFill,
                      stroke: strokeColor,
                      strokeWidth: 0.4,
                      outline: "none",
                    },
                    hover: {
                      fill: data ? "#9a3412" : noDataHover,
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

export default memo(WorldFoodMap);
