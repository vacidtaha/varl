"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { quarter: "Q1 '24", traditional: 12, varl: 15 },
  { quarter: "Q2 '24", traditional: 14, varl: 28 },
  { quarter: "Q3 '24", traditional: 15, varl: 52 },
  { quarter: "Q4 '24", traditional: 17, varl: 89 },
  { quarter: "Q1 '25", traditional: 18, varl: 145 },
  { quarter: "Q2 '25", traditional: 20, varl: 234 },
  { quarter: "Q3 '25", traditional: 21, varl: 378 },
  { quarter: "Q4 '25", traditional: 23, varl: 590 },
  { quarter: "Q1 '26", traditional: 24, varl: 847 },
];

export default function GrowthChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="varlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4F8CF7" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#4F8CF7" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="tradGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9CA3AF" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#9CA3AF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(150,150,150,0.08)" />
        <XAxis
          dataKey="quarter"
          tick={{ fontSize: 11, fill: "#9CA3AF" }}
          axisLine={{ stroke: "rgba(150,150,150,0.1)" }}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#9CA3AF" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          contentStyle={{
            background: "rgba(255,255,255,0.95)",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            fontSize: "12px",
          }}
        />
        <Area
          type="monotone"
          dataKey="traditional"
          stroke="#9CA3AF"
          strokeWidth={1.5}
          fill="url(#tradGrad)"
          name="Traditional"
        />
        <Area
          type="monotone"
          dataKey="varl"
          stroke="#4F8CF7"
          strokeWidth={2}
          fill="url(#varlGrad)"
          name="VARL Platform"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
