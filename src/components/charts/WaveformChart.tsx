"use client";

import { useEffect, useRef, useState } from "react";

export default function WaveformChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = 460;
    const H = 280;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const padL = 46;
    const padR = 16;
    const padT = 28;
    const padB = 32;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    const interventionX = 0.22;

    const biomarkers = [
      {
        name: "Tumor Burden",
        color: [220, 60, 60],
        points: [1.0, 1.0, 1.02, 0.96, 0.82, 0.65, 0.48, 0.35, 0.26, 0.21, 0.18, 0.16, 0.15],
        confidence: [0.04, 0.04, 0.05, 0.08, 0.12, 0.14, 0.12, 0.10, 0.08, 0.06, 0.05, 0.04, 0.03],
      },
      {
        name: "CD8⁺ T-Cell Activity",
        color: [79, 140, 247],
        points: [0.22, 0.22, 0.23, 0.28, 0.42, 0.58, 0.71, 0.79, 0.83, 0.85, 0.84, 0.82, 0.80],
        confidence: [0.03, 0.03, 0.04, 0.06, 0.10, 0.12, 0.10, 0.08, 0.06, 0.05, 0.04, 0.03, 0.03],
      },
      {
        name: "IFN-γ Signaling",
        color: [0, 184, 148],
        points: [0.15, 0.15, 0.16, 0.24, 0.48, 0.62, 0.68, 0.65, 0.58, 0.52, 0.48, 0.45, 0.44],
        confidence: [0.02, 0.02, 0.03, 0.05, 0.09, 0.11, 0.09, 0.07, 0.06, 0.04, 0.03, 0.03, 0.02],
      },
    ];

    let t = 0;

    const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

    const getY = (val: number) => padT + (1 - val) * plotH;
    const getX = (i: number, total: number) => padL + (i / (total - 1)) * plotW;

    const drawSmoothLine = (points: { x: number; y: number }[], color: string, width: number) => {
      if (points.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length - 1; i++) {
        const cx = (points[i].x + points[i + 1].x) / 2;
        const cy = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, cx, cy);
      }
      const last = points[points.length - 1];
      ctx.lineTo(last.x, last.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
    };

    const animate = () => {
      t += 0.003;
      const reveal = Math.min(t * 1.2, 1);
      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = "rgba(150, 150, 150, 0.06)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= 5; i++) {
        const y = padT + (plotH / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padL, y);
        ctx.lineTo(W - padR, y);
        ctx.stroke();
      }

      // Y-axis ticks
      ctx.font = "8px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(120, 120, 130, 0.5)";
      ctx.textAlign = "right";
      for (let i = 0; i <= 5; i++) {
        const val = 1 - i * 0.2;
        ctx.fillText(val.toFixed(1), padL - 6, padT + (plotH / 5) * i + 3);
      }

      // X-axis labels
      ctx.textAlign = "center";
      const phases = [
        { x: interventionX * 0.5, label: "Baseline" },
        { x: interventionX + (1 - interventionX) * 0.15, label: "Early" },
        { x: interventionX + (1 - interventionX) * 0.45, label: "Response" },
        { x: interventionX + (1 - interventionX) * 0.85, label: "Outcome" },
      ];
      phases.forEach((p) => {
        ctx.fillText(p.label, padL + p.x * plotW, H - padB + 14);
      });

      // Intervention line
      const intX = padL + interventionX * plotW;
      ctx.beginPath();
      ctx.setLineDash([3, 3]);
      ctx.moveTo(intX, padT);
      ctx.lineTo(intX, H - padB);
      ctx.strokeStyle = "rgba(253, 203, 110, 0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      // Intervention label
      ctx.save();
      ctx.font = "7px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(200, 160, 60, 0.7)";
      ctx.textAlign = "left";
      ctx.fillText("Intervention", intX + 4, padT + 10);
      ctx.restore();

      // Draw biomarkers
      biomarkers.forEach((bm) => {
        const total = bm.points.length;
        const visibleCount = Math.floor(reveal * total) + 1;
        const pts: { x: number; y: number }[] = [];
        const upperPts: { x: number; y: number }[] = [];
        const lowerPts: { x: number; y: number }[] = [];

        for (let i = 0; i < Math.min(visibleCount, total); i++) {
          const x = getX(i, total);
          const baseY = bm.points[i];
          const noise = Math.sin(t * 2 + i * 1.3 + bm.color[0] * 0.01) * 0.008;
          const y = getY(baseY + noise);
          pts.push({ x, y });

          const conf = bm.confidence[i];
          upperPts.push({ x, y: getY(baseY + conf + noise) });
          lowerPts.push({ x, y: getY(baseY - conf + noise) });
        }

        // Confidence band
        if (pts.length >= 2) {
          ctx.beginPath();
          upperPts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
          for (let i = lowerPts.length - 1; i >= 0; i--) ctx.lineTo(lowerPts[i].x, lowerPts[i].y);
          ctx.closePath();
          ctx.fillStyle = `rgba(${bm.color.join(",")}, 0.06)`;
          ctx.fill();
        }

        // Main line
        if (pts.length >= 2) {
          drawSmoothLine(pts, `rgba(${bm.color.join(",")}, 0.8)`, 1.8);
        }

        // Current point
        if (pts.length > 0) {
          const last = pts[pts.length - 1];
          ctx.beginPath();
          ctx.arc(last.x, last.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${bm.color.join(",")}, 0.9)`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(last.x, last.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${bm.color.join(",")}, 0.15)`;
          ctx.fill();
        }
      });

      // Legend
      ctx.font = "8px SF Pro Display, system-ui, sans-serif";
      ctx.textAlign = "left";
      biomarkers.forEach((bm, i) => {
        const lx = padL + 4 + i * 120;
        const ly = padT - 12;
        ctx.beginPath();
        ctx.arc(lx, ly, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bm.color.join(",")}, 0.8)`;
        ctx.fill();
        ctx.fillStyle = `rgba(${bm.color.join(",")}, 0.6)`;
        ctx.fillText(bm.name, lx + 7, ly + 3);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
