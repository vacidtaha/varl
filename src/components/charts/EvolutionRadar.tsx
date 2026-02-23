"use client";

import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [
  { axis: "Speed", current: 92, baseline: 35 },
  { axis: "Accuracy", current: 96, baseline: 45 },
  { axis: "Scalability", current: 88, baseline: 20 },
  { axis: "Adaptability", current: 94, baseline: 15 },
  { axis: "Cost Efficiency", current: 85, baseline: 30 },
  { axis: "Knowledge Retention", current: 99, baseline: 40 },
];

export default function EvolutionRadar() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="rgba(150,150,150,0.1)" />
        <PolarAngleAxis
          dataKey="axis"
          tick={{ fontSize: 11, fill: "#9CA3AF" }}
        />
        <Radar
          name="Baseline"
          dataKey="baseline"
          stroke="#9CA3AF"
          strokeWidth={1}
          fill="#9CA3AF"
          fillOpacity={0.08}
        />
        <Radar
          name="VARL"
          dataKey="current"
          stroke="#4F8CF7"
          strokeWidth={2}
          fill="#4F8CF7"
          fillOpacity={0.15}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
