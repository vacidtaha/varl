"use client";

import { useEffect, useRef } from "react";

export default function WaveformChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = 360 * dpr;
    canvas.height = 280 * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;

    const drawWave = (yOffset: number, color: string, amplitude: number, freq: number, phase: number) => {
      ctx.beginPath();
      for (let x = 0; x < 360; x++) {
        const y = yOffset + Math.sin((x * freq) / 50 + t + phase) * amplitude +
          Math.sin((x * freq * 1.5) / 50 + t * 1.3 + phase) * (amplitude * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    };

    const animate = () => {
      t += 0.02;
      ctx.clearRect(0, 0, 360, 280);

      // Grid
      ctx.strokeStyle = "rgba(150, 150, 150, 0.06)";
      ctx.lineWidth = 0.5;
      for (let y = 40; y < 280; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(360, y);
        ctx.stroke();
      }

      // Waves
      drawWave(70, "rgba(79, 140, 247, 0.6)", 20, 1.2, 0);
      drawWave(120, "rgba(108, 92, 231, 0.5)", 15, 1.5, 1);
      drawWave(170, "rgba(0, 184, 148, 0.5)", 18, 0.9, 2);
      drawWave(220, "rgba(253, 203, 110, 0.4)", 12, 1.8, 3);

      // Labels
      ctx.font = "9px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(79, 140, 247, 0.7)";
      ctx.fillText("Gene Expression", 10, 55);
      ctx.fillStyle = "rgba(108, 92, 231, 0.6)";
      ctx.fillText("Protein Activity", 10, 105);
      ctx.fillStyle = "rgba(0, 184, 148, 0.6)";
      ctx.fillText("Metabolic Flux", 10, 155);
      ctx.fillStyle = "rgba(253, 203, 110, 0.5)";
      ctx.fillText("Signal Response", 10, 205);

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
