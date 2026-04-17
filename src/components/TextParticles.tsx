"use client";

import { useEffect, useRef, useState } from "react";

function hsl(h: number, s: number, l: number): [number, number, number] {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return Math.round((l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255);
  };
  return [f(0), f(8), f(4)];
}

function getTextPoints(text: string, W: number, H: number, density: number): [number, number][] {
  const offscreen = document.createElement("canvas");
  offscreen.width = W;
  offscreen.height = H;
  const ctx = offscreen.getContext("2d");
  if (!ctx) return [];

  const maxWidthRatio = text.length > 4 ? 0.22 : 0.35;
  const fontSize = Math.min(W * maxWidthRatio, H * 0.5);
  ctx.fillStyle = "#fff";
  ctx.font = `700 ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, W / 2, H / 2);

  const imageData = ctx.getImageData(0, 0, W, H);
  const points: [number, number][] = [];
  const step = Math.max(1, Math.round(1 / density));

  for (let y = 0; y < H; y += step) {
    for (let x = 0; x < W; x += step) {
      const idx = (y * W + x) * 4;
      if (imageData.data[idx + 3] > 128) {
        points.push([x, y]);
      }
    }
  }

  return points;
}

export default function TextParticles({ text = "API" }: { text?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    const N = 3000;
    const px = new Float32Array(N);
    const py = new Float32Array(N);
    const vx = new Float32Array(N);
    const vy = new Float32Array(N);
    const tx = new Float32Array(N);
    const ty = new Float32Array(N);
    const sz = new Float32Array(N);
    const sp = new Float32Array(N);
    const dl = new Float32Array(N);
    const cr = new Uint8Array(N);
    const cg = new Uint8Array(N);
    const cb = new Uint8Array(N);
    let frame = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      W = Math.round(rect.width);
      H = Math.round(rect.height);
      canvas!.width = W;
      canvas!.height = H;
    }

    function calcTargets() {
      const points = getTextPoints(text, W, H, 0.4);
      if (points.length === 0) return;
      for (let i = 0; i < N; i++) {
        const p = points[Math.floor(Math.random() * points.length)];
        tx[i] = p[0] + (Math.random() - 0.5) * 2;
        ty[i] = p[1] + (Math.random() - 0.5) * 2;
      }
    }

    function init() {
      resize();
      calcTargets();
      const cx = W / 2;
      const cy = H / 2;

      for (let i = 0; i < N; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.max(W, H) * 0.6 + Math.random() * 200;
        px[i] = cx + Math.cos(ang) * dist;
        py[i] = cy + Math.sin(ang) * dist;
        vx[i] = 0;
        vy[i] = 0;
        sz[i] = 0.3 + Math.random() * 0.6;
        sp[i] = 0.003 + Math.random() * 0.005;

        const distFromCenter = Math.sqrt((tx[i] - cx) ** 2 + (ty[i] - cy) ** 2);
        dl[i] = distFromCenter * 0.15 + Math.random() * 15;

        const [r, g, b] = hsl(200 + Math.random() * 40, 60 + Math.random() * 30, 50 + Math.random() * 20);
        cr[i] = r; cg[i] = g; cb[i] = b;
      }
    }

    init();

    let prevW = W;
    let prevH = H;
    const handleResize = () => {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const newW = Math.round(rect.width);
      const newH = Math.round(rect.height);
      if (Math.abs(newW - prevW) < 10 && Math.abs(newH - prevH) < 10) return;
      prevW = newW;
      prevH = newH;
      resize();
      calcTargets();
    };
    window.addEventListener("resize", handleResize);

    const beatSpeed = 0.03;
    const beatAmount = 0.015;

    function animate() {
      if (W === 0 || H === 0) { animRef.current = requestAnimationFrame(animate); return; }
      frame++;
      const beatSin = Math.sin(frame * beatSpeed);
      const beat = 1 + Math.abs(beatSin) * beatAmount;
      const glow = Math.abs(beatSin);
      const fade = 0.08 + glow * 0.04;

      ctx!.fillStyle = `rgba(0,0,0,${fade})`;
      ctx!.fillRect(0, 0, W, H);

      const imgData = ctx!.getImageData(0, 0, W, H);
      const data = imgData.data;
      const cx = W / 2;
      const cy = H / 2;

      for (let i = 0; i < N; i++) {
        if (frame < dl[i]) continue;

        const targetX = cx + (tx[i] - cx) * beat;
        const targetY = cy + (ty[i] - cy) * beat;
        const ddx = targetX - px[i];
        const ddy = targetY - py[i];
        vx[i] += ddx * sp[i];
        vy[i] += ddy * sp[i];

        vx[i] *= 0.94;
        vy[i] *= 0.94;
        px[i] += vx[i];
        py[i] += vy[i];

        const xi = ~~px[i];
        const yi = ~~py[i];
        if (xi < 1 || xi >= W - 1 || yi < 1 || yi >= H - 1) continue;

        const s = sz[i];
        const r = cr[i], g = cg[i], b = cb[i];

        if (s < 0.6) {
          const idx = (yi * W + xi) * 4;
          data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = 255;
        } else {
          const ri = Math.ceil(s);
          for (let oy = -ri; oy <= ri; oy++) {
            for (let ox = -ri; ox <= ri; ox++) {
              if (ox * ox + oy * oy > s * s + 0.5) continue;
              const px2 = xi + ox, py2 = yi + oy;
              if (px2 < 0 || px2 >= W || py2 < 0 || py2 >= H) continue;
              const idx = (py2 * W + px2) * 4;
              data[idx] = r; data[idx + 1] = g; data[idx + 2] = b; data[idx + 3] = 255;
            }
          }
        }
      }

      ctx!.putImageData(imgData, 0, 0);
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [visible, text]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
