"use client";

import { useEffect, useRef } from "react";

export default function HeatMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 500;
    const h = 300;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cols = 25;
    const rows = 15;
    const cellW = w / cols;
    const cellH = h / rows;

    const data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random())
    );

    let t = 0;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const getColor = (val: number) => {
      if (val < 0.25) return { r: 15, g: 20, b: 60 };
      if (val < 0.5) return { r: 20, g: 80, b: 180 };
      if (val < 0.75) return { r: 0, g: 184, b: 148 };
      return { r: 253, g: 203, b: 110 };
    };

    const animate = () => {
      t += 0.003;
      ctx.clearRect(0, 0, w, h);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const wave = Math.sin(t * 2 + c * 0.3 + r * 0.2) * 0.15;
          const val = Math.max(0, Math.min(1, data[r][c] + wave));
          const color = getColor(val);
          const opacity = 0.5 + val * 0.5;

          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
          ctx.fillRect(c * cellW + 0.5, r * cellH + 0.5, cellW - 1, cellH - 1);
        }
      }

      // Labels
      ctx.font = "8px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(200, 200, 200, 0.4)";
      const genes = ["TP53", "BRCA1", "EGFR", "KRAS", "MYC", "AKT1", "PTEN", "JAK2", "RAF1", "STAT3", "BCL2", "VEGF", "HER2", "PIK3", "BRAF"];
      genes.forEach((g, i) => {
        if (i < rows) ctx.fillText(g, 4, i * cellH + cellH / 2 + 3);
      });

      // Highlight cell on hover simulation
      const hc = Math.floor((Math.sin(t) + 1) / 2 * cols);
      const hr = Math.floor((Math.cos(t * 0.7) + 1) / 2 * rows);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(hc * cellW, hr * cellH, cellW, cellH);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
