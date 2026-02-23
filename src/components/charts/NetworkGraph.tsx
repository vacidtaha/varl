"use client";

import { useEffect, useRef } from "react";

const nodes = [
  { x: 140, y: 80, r: 6, label: "TP53" },
  { x: 80, y: 140, r: 5, label: "BRCA1" },
  { x: 200, y: 130, r: 7, label: "EGFR" },
  { x: 120, y: 200, r: 4, label: "VEGF" },
  { x: 240, y: 70, r: 5, label: "KRAS" },
  { x: 60, y: 60, r: 4, label: "MYC" },
  { x: 280, y: 160, r: 6, label: "AKT1" },
  { x: 180, y: 220, r: 5, label: "PTEN" },
  { x: 300, y: 90, r: 4, label: "RAF1" },
  { x: 40, y: 180, r: 3, label: "BCL2" },
  { x: 260, y: 230, r: 4, label: "JAK2" },
  { x: 160, y: 40, r: 3, label: "STAT3" },
];

const edges = [
  [0, 1], [0, 2], [0, 5], [1, 3], [2, 4], [2, 6], [3, 7], [4, 8],
  [5, 9], [6, 7], [6, 10], [1, 9], [4, 11], [0, 11], [7, 10], [3, 10],
];

export default function NetworkGraph() {
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
    const animate = () => {
      t += 0.005;
      ctx.clearRect(0, 0, 360, 280);

      // Edges
      edges.forEach(([a, b]) => {
        const pulse = Math.sin(t * 3 + a + b) * 0.3 + 0.5;
        ctx.beginPath();
        ctx.moveTo(nodes[a].x, nodes[a].y);
        ctx.lineTo(nodes[b].x, nodes[b].y);
        ctx.strokeStyle = `rgba(100, 140, 200, ${pulse * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Signal dot
        const progress = (Math.sin(t * 2 + a * 0.7) + 1) / 2;
        const dx = nodes[b].x - nodes[a].x;
        const dy = nodes[b].y - nodes[a].y;
        ctx.beginPath();
        ctx.arc(nodes[a].x + dx * progress, nodes[a].y + dy * progress, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 180, 255, ${pulse})`;
        ctx.fill();
      });

      // Nodes
      nodes.forEach((node) => {
        const glow = Math.sin(t * 2 + node.x * 0.02) * 0.3 + 0.7;

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 160, 240, ${glow * 0.1})`;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(60, 130, 220, ${glow})`;
        ctx.fill();

        // Label
        ctx.font = "9px SF Pro Display, system-ui, sans-serif";
        ctx.fillStyle = `rgba(120, 140, 170, ${glow * 0.8})`;
        ctx.fillText(node.label, node.x + node.r + 4, node.y + 3);
      });

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
