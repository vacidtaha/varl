"use client";

import { useEffect, useRef } from "react";

export default function HealingProgress() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 500;
    const h = 350;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;

    const phases = [
      { label: "Diagnosis", x: 60, color: "#E17055" },
      { label: "Target Lock", x: 150, color: "#FDCB6E" },
      { label: "Treatment Design", x: 260, color: "#4F8CF7" },
      { label: "Recovery", x: 380, color: "#00B894" },
    ];

    const animate = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);

      const baseY = 175;

      // Timeline line
      ctx.beginPath();
      ctx.moveTo(40, baseY);
      ctx.lineTo(460, baseY);
      ctx.strokeStyle = "rgba(150, 150, 150, 0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Progress fill
      const progress = Math.min((Math.sin(t * 0.3) + 1) / 2 * 460, 460);
      const grad = ctx.createLinearGradient(40, 0, 460, 0);
      grad.addColorStop(0, "rgba(225, 112, 85, 0.8)");
      grad.addColorStop(0.33, "rgba(253, 203, 110, 0.8)");
      grad.addColorStop(0.66, "rgba(79, 140, 247, 0.8)");
      grad.addColorStop(1, "rgba(0, 184, 148, 0.8)");
      ctx.beginPath();
      ctx.moveTo(40, baseY);
      ctx.lineTo(40 + progress, baseY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Phases
      phases.forEach((phase, i) => {
        const active = progress + 40 >= phase.x;
        const pulse = Math.sin(t * 3 + i) * 0.3 + 0.7;

        // Vertical line
        ctx.beginPath();
        ctx.moveTo(phase.x, baseY - 30);
        ctx.lineTo(phase.x, baseY + 30);
        ctx.strokeStyle = active ? `rgba(255,255,255,0.15)` : "rgba(255,255,255,0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node
        ctx.beginPath();
        ctx.arc(phase.x, baseY, active ? 8 : 5, 0, Math.PI * 2);
        ctx.fillStyle = active ? phase.color : "rgba(100,100,100,0.3)";
        ctx.fill();

        if (active) {
          ctx.beginPath();
          ctx.arc(phase.x, baseY, 14 * pulse, 0, Math.PI * 2);
          ctx.strokeStyle = phase.color + "40";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Label
        ctx.font = "10px SF Pro Display, system-ui, sans-serif";
        ctx.fillStyle = active ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)";
        ctx.textAlign = "center";
        ctx.fillText(phase.label, phase.x, baseY + 50);
      });

      // Moving particle
      const particleX = 40 + progress;
      ctx.beginPath();
      ctx.arc(particleX, baseY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(particleX, baseY, 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Top stats
      ctx.textAlign = "left";
      ctx.font = "9px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillText("Patient Response Timeline", 40, 40);

      ctx.font = "22px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillText(`${Math.round(progress / 460 * 100)}%`, 40, 70);

      ctx.font = "9px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillText("Treatment Efficacy", 40, 85);

      // Bottom DNA-like decoration
      for (let x = 40; x < 460; x += 3) {
        const y1 = 260 + Math.sin(x * 0.05 + t * 2) * 15;
        const y2 = 260 + Math.sin(x * 0.05 + t * 2 + Math.PI) * 15;
        const opacity = 0.05 + Math.sin(x * 0.02 + t) * 0.03;
        ctx.fillStyle = `rgba(79, 140, 247, ${opacity})`;
        ctx.fillRect(x, y1, 2, 1);
        ctx.fillStyle = `rgba(0, 184, 148, ${opacity})`;
        ctx.fillRect(x, y2, 2, 1);
        if (x % 15 === 0) {
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          ctx.strokeStyle = `rgba(150,150,200,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Bottom text
      ctx.textAlign = "right";
      ctx.font = "8px SF Pro Display, system-ui, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillText("Hemoglobin A1C — Digital Twin Projection", 460, 310);

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
