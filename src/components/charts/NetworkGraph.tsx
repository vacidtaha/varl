"use client";

import { useEffect, useRef, useState } from "react";

const W = 460;
const H = 280;

interface Node { x: number; y: number; r: number; label: string; color: number[]; }

const nodes: Node[] = [
  // Central hub
  { x: 230, y: 140, r: 9, label: "TP53", color: [79, 140, 247] },

  // Inner ring — direct interactors
  { x: 150, y: 80,  r: 7, label: "MDM2",  color: [79, 140, 247] },
  { x: 310, y: 80,  r: 7, label: "EGFR",  color: [108, 92, 231] },
  { x: 330, y: 170, r: 7, label: "AKT1",  color: [108, 92, 231] },
  { x: 270, y: 230, r: 7, label: "BRCA1", color: [0, 184, 148] },
  { x: 150, y: 220, r: 6, label: "ATM",   color: [0, 184, 148] },
  { x: 110, y: 150, r: 6, label: "BAX",   color: [220, 100, 60] },

  // Outer ring — secondary
  { x: 80,  y: 42,  r: 5, label: "MYC",   color: [79, 140, 247] },
  { x: 195, y: 32,  r: 4, label: "STAT3", color: [79, 140, 247] },
  { x: 275, y: 32,  r: 4, label: "GRB2",  color: [108, 92, 231] },
  { x: 380, y: 52,  r: 5, label: "KRAS",  color: [108, 92, 231] },
  { x: 400, y: 130, r: 4, label: "BRAF",  color: [108, 92, 231] },
  { x: 395, y: 210, r: 4, label: "PI3K",  color: [108, 92, 231] },
  { x: 340, y: 248, r: 4, label: "PTEN",  color: [0, 184, 148] },
  { x: 230, y: 260, r: 5, label: "RAD51", color: [0, 184, 148] },
  { x: 100, y: 250, r: 4, label: "CHK2",  color: [0, 184, 148] },
  { x: 50,  y: 200, r: 4, label: "BCL2",  color: [220, 100, 60] },
  { x: 42,  y: 120, r: 4, label: "CASP3", color: [220, 100, 60] },
  { x: 60,  y: 70,  r: 3, label: "CASP9", color: [220, 100, 60] },

  // Tertiary
  { x: 430, y: 80,  r: 3, label: "MEK1",  color: [108, 92, 231] },
  { x: 440, y: 170, r: 3, label: "mTOR",  color: [108, 92, 231] },
  { x: 160, y: 265, r: 3, label: "H2AX",  color: [0, 184, 148] },
];

const edges: [number, number][] = [
  // TP53 hub connections
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  // MDM2 branch
  [1, 7], [1, 8],
  // EGFR branch
  [2, 9], [2, 10],
  // AKT1 branch
  [3, 11], [3, 12], [3, 13],
  // BRCA1 branch
  [4, 13], [4, 14],
  // ATM branch
  [5, 15], [5, 14], [5, 21],
  // BAX branch
  [6, 16], [6, 17], [17, 18],
  // Outer extensions
  [10, 19], [10, 11], [12, 20],
  // Cross-cluster links
  [7, 18], [8, 9], [3, 2], [13, 3], [15, 5],
];

export default function NetworkGraph() {
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
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;

    const animate = () => {
      t += 0.004;
      ctx.clearRect(0, 0, W, H);

      // Edges
      edges.forEach(([a, b]) => {
        const na = nodes[a];
        const nb = nodes[b];
        const pulse = Math.sin(t * 2 + a * 0.5 + b * 0.3) * 0.15 + 0.35;

        // Edge line
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = `rgba(${na.color.join(",")}, ${pulse * 0.25})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Signal particle
        const speed = 1.2;
        const progress = ((t * speed + a * 0.29 + b * 0.47) % 1);
        const px = na.x + (nb.x - na.x) * progress;
        const py = na.y + (nb.y - na.y) * progress;
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${na.color.join(",")}, ${pulse * 0.6})`;
        ctx.fill();
      });

      // Nodes
      nodes.forEach((node) => {
        const glow = Math.sin(t * 1.5 + node.x * 0.02 + node.y * 0.015) * 0.2 + 0.8;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color.join(",")}, ${glow * 0.06})`;
        ctx.fill();

        // Node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(
          node.x - node.r * 0.3, node.y - node.r * 0.3, 0,
          node.x, node.y, node.r
        );
        grad.addColorStop(0, `rgba(${node.color.map(c => Math.min(255, c + 60)).join(",")}, ${glow})`);
        grad.addColorStop(1, `rgba(${node.color.join(",")}, ${glow * 0.8})`);
        ctx.fillStyle = grad;
        ctx.fill();

        // Label
        if (node.r >= 4) {
          ctx.font = `${node.r >= 7 ? 9 : 8}px SF Pro Display, system-ui, sans-serif`;
          ctx.textAlign = "left";
          ctx.fillStyle = `rgba(80, 90, 110, ${glow * 0.7})`;
          ctx.fillText(node.label, node.x + node.r + 4, node.y + 3);
        }
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
