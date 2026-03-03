"use client";

import { useEffect, useRef, useState } from "react";

function heartBoundary(t: number): [number, number] {
  const s = Math.sin(t), c = Math.cos(t);
  return [
    16 * s * s * s,
    13.5 * c - 4 * Math.cos(2 * t) - 1.5 * Math.cos(3 * t) - 0.8 * Math.cos(4 * t),
  ];
}

function isInsideHeart(x: number, y: number): boolean {
  const steps = 64;
  let inside = false;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const [bx, by] = heartBoundary(t);
    const [bx2, by2] = heartBoundary(((i + 1) / steps) * Math.PI * 2);
    if (((by > y) !== (by2 > y)) && (x < (bx2 - bx) * (y - by) / (by2 - by) + bx)) {
      inside = !inside;
    }
  }
  return inside;
}

function randomHeartPoint(): [number, number] {
  let x: number, y: number;
  do {
    x = Math.random() * 34 - 17;
    y = Math.random() * 34 - 18;
  } while (!isInsideHeart(x, y));
  return [x, y];
}

function hsl(h: number, s: number, l: number): [number, number, number] {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return Math.round((l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255);
  };
  return [f(0), f(8), f(4)];
}

export default function HeartParticles() {
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
    const N = 4000;
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
    let mouseX = -9999, mouseY = -9999;

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
      const s = Math.min(W, H) * 0.022;
      const cx = W / 2;
      const cy = H * 0.4;
      for (let i = 0; i < N; i++) {
        const [ptx, pty] = randomHeartPoint();
        tx[i] = cx + ptx * s;
        ty[i] = cy - pty * s;
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
        dl[i] = distFromCenter * 0.25 + Math.random() * 20;

        const [r, g, b] = hsl(346 + Math.random() * 20, 80 + Math.random() * 20, 45 + Math.random() * 20);
        cr[i] = r; cg[i] = g; cb[i] = b;
      }
    }

    init();

    const handleResize = () => { init(); };
    window.addEventListener("resize", handleResize);

    const container = canvas.parentElement;
    const handleMouse = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleLeave = () => { mouseX = -9999; mouseY = -9999; };
    const handleTouch = (e: TouchEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const t = e.touches[0];
      if (t) { mouseX = t.clientX - rect.left; mouseY = t.clientY - rect.top; }
    };
    const handleTouchEnd = () => { mouseX = -9999; mouseY = -9999; };
    container?.addEventListener("mousemove", handleMouse);
    container?.addEventListener("mouseleave", handleLeave);
    container?.addEventListener("touchstart", handleTouch, { passive: true });
    container?.addEventListener("touchmove", handleTouch, { passive: true });
    container?.addEventListener("touchend", handleTouchEnd);
    container?.addEventListener("touchcancel", handleTouchEnd);

    const beatSpeed = 0.04;
    const beatAmount = 0.03;

    function animate() {
      if (W === 0 || H === 0) { animRef.current = requestAnimationFrame(animate); return; }
      frame++;
      const beatSin = Math.sin(frame * beatSpeed);
      const beat = 1 + Math.abs(beatSin) * beatAmount;
      const glow = Math.abs(beatSin);
      const fade = 0.1 + glow * 0.06;

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

        const mdx = px[i] - mouseX;
        const mdy = py[i] - mouseY;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 10000 && md2 > 0) {
          const md = Math.sqrt(md2);
          const f = (100 - md) / 100 * 1.2;
          vx[i] += (mdx / md) * f;
          vy[i] += (mdy / md) * f;
        }

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
      container?.removeEventListener("mousemove", handleMouse);
      container?.removeEventListener("mouseleave", handleLeave);
      container?.removeEventListener("touchstart", handleTouch);
      container?.removeEventListener("touchmove", handleTouch);
      container?.removeEventListener("touchend", handleTouchEnd);
      container?.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
