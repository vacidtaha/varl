"use client";

import { useEffect, useRef, useState } from "react";

const W = 540;
const H = 340;

const genes = [
  "TP53", "EGFR", "BRCA1", "KRAS", "MYC",
  "AKT1", "PTEN", "BRAF", "CDK4", "HER2",
  "RB1", "JAK2", "VEGF", "PIK3CA", "MDM2",
  "STAT3", "RAF1", "BCL2", "CASP3", "ATM",
];

const samples = [
  "C-01", "C-02", "C-03", "C-04", "C-05",
  "T-01", "T-02", "T-03", "T-04", "T-05",
  "T-06", "T-07", "T-08", "T-09", "T-10",
  "R-01", "R-02", "R-03", "R-04", "R-05",
];

function noise(seed: number) {
  const x = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return (x - Math.floor(x)) * 0.12 - 0.06;
}

const tsg = new Set(["TP53", "BRCA1", "PTEN", "RB1", "ATM", "CASP3", "BCL2"]);
const onco = new Set(["EGFR", "KRAS", "MYC", "AKT1", "BRAF", "CDK4", "HER2", "JAK2", "VEGF", "PIK3CA", "STAT3", "MDM2", "RAF1"]);

const data: number[][] = genes.map((g, gi) => {
  return samples.map((s, si) => {
    const n = noise(gi * 31 + si * 17);
    const isC = s.startsWith("C");
    const isT = s.startsWith("T");

    if (tsg.has(g)) {
      if (isC) return 0.75 + n;
      if (isT) return 0.18 + Math.abs(n);
      return 0.55 + n;
    }
    if (onco.has(g)) {
      if (isC) return 0.18 + Math.abs(n);
      if (isT) return 0.78 + n;
      return 0.32 + Math.abs(n);
    }
    return 0.4 + n * 2;
  });
});

function valToRGB(v: number): [number, number, number] {
  v = Math.max(0, Math.min(1, v));
  if (v < 0.5) {
    const f = v / 0.5;
    return [
      Math.round(20 + f * 15),
      Math.round(50 + f * 80),
      Math.round(180 + f * 20),
    ];
  }
  const f = (v - 0.5) / 0.5;
  return [
    Math.round(35 + f * 220),
    Math.round(130 - f * 90),
    Math.round(200 - f * 160),
  ];
}

export default function HeatMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.15 });
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
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const padL = 50;
    const padT = 28;
    const padR = 44;
    const padB = 8;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;
    const cellW = plotW / samples.length;
    const cellH = plotH / genes.length;

    let start = 0;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const reveal = Math.min(elapsed * 0.7, 1);
      ctx.clearRect(0, 0, W, H);

      // Gene labels
      ctx.font = "7px SF Pro Mono, Menlo, monospace";
      ctx.textAlign = "right";
      genes.forEach((g, i) => {
        const on = i < Math.ceil(reveal * genes.length);
        ctx.fillStyle = on ? "rgba(180,185,195,0.7)" : "rgba(180,185,195,0)";
        ctx.fillText(g, padL - 4, padT + i * cellH + cellH / 2 + 2.5);
      });

      // Sample IDs rotated
      ctx.font = "5.5px SF Pro Mono, Menlo, monospace";
      ctx.textAlign = "right";
      samples.forEach((s, i) => {
        ctx.fillStyle = "rgba(180,185,195,0.4)";
        ctx.save();
        ctx.translate(padL + i * cellW + cellW / 2 + 1, padT - 3);
        ctx.rotate(-Math.PI / 3);
        ctx.fillText(s, 0, 0);
        ctx.restore();
      });

      // Group brackets
      const bracketY = padT - 18;
      const groups = [
        { start: 0, end: 5, label: "Control", color: [0, 184, 148] },
        { start: 5, end: 15, label: "Tumor", color: [220, 75, 57] },
        { start: 15, end: 20, label: "Remission", color: [79, 140, 247] },
      ];
      groups.forEach((grp) => {
        const x1 = padL + grp.start * cellW;
        const x2 = padL + grp.end * cellW;
        const mid = (x1 + x2) / 2;

        ctx.strokeStyle = `rgba(${grp.color.join(",")}, 0.3)`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(x1 + 2, bracketY + 6);
        ctx.lineTo(x1 + 2, bracketY + 2);
        ctx.lineTo(x2 - 2, bracketY + 2);
        ctx.lineTo(x2 - 2, bracketY + 6);
        ctx.stroke();

        ctx.font = "7px SF Pro Display, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = `rgba(${grp.color.join(",")}, 0.65)`;
        ctx.fillText(grp.label, mid, bracketY - 1);
      });

      // Separator lines between groups
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      [5, 15].forEach((ci) => {
        const sx = padL + ci * cellW;
        ctx.beginPath();
        ctx.moveTo(sx, padT);
        ctx.lineTo(sx, padT + plotH);
        ctx.stroke();
      });

      // Cells
      const revCols = Math.ceil(reveal * samples.length);
      for (let r = 0; r < genes.length; r++) {
        for (let c = 0; c < revCols; c++) {
          const v = data[r][c];
          const [cr, cg, cb] = valToRGB(v);
          const fadeIn = c === revCols - 1 ? Math.min(((reveal * samples.length) % 1) * 4, 1) : 1;

          ctx.fillStyle = `rgba(${cr},${cg},${cb},${fadeIn * 0.92})`;
          const x = padL + c * cellW + 0.5;
          const y = padT + r * cellH + 0.5;
          const w = cellW - 1;
          const h = cellH - 1;
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, 1);
          ctx.fill();
        }
      }

      // Color scale
      const lx = W - padR + 12;
      const lh = plotH * 0.55;
      const ly = padT + (plotH - lh) / 2;

      for (let i = 0; i < lh; i++) {
        const v = 1 - i / lh;
        const [cr, cg, cb] = valToRGB(v);
        ctx.fillStyle = `rgb(${cr},${cg},${cb})`;
        ctx.fillRect(lx, ly + i, 7, 1.2);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 0.5;
      ctx.strokeRect(lx, ly, 7, lh);

      ctx.font = "6px SF Pro Display, system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.fillStyle = "rgba(180,185,195,0.5)";
      ctx.fillText("High", lx + 10, ly + 4);
      ctx.fillText("Low", lx + 10, ly + lh);

      ctx.save();
      ctx.translate(lx + 9, ly + lh / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(180,185,195,0.3)";
      ctx.font = "5.5px SF Pro Display, system-ui, sans-serif";
      ctx.fillText("log₂FC", 0, 14);
      ctx.restore();

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
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
