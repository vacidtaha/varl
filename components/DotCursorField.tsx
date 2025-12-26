"use client";

import { useEffect, useRef, useCallback } from "react";

// Perlin Noise implementasyonu
class PerlinNoise {
  private permutation: number[];

  constructor() {
    const p = [];
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
    this.permutation = [...p, ...p];
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(a: number, b: number, t: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = this.fade(x);
    const v = this.fade(y);
    const A = this.permutation[X] + Y;
    const B = this.permutation[X + 1] + Y;
    return this.lerp(
      this.lerp(this.grad(this.permutation[A], x, y), this.grad(this.permutation[B], x - 1, y), u),
      this.lerp(this.grad(this.permutation[A + 1], x, y - 1), this.grad(this.permutation[B + 1], x - 1, y - 1), u),
      v
    );
  }
}

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
  currentX: number;
  currentY: number;
  opacity: number;
  targetOpacity: number;
  size: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
}

export default function DotCursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const perlinRef = useRef<PerlinNoise | null>(null);

  const initDots = useCallback((width: number, height: number) => {
    const dots: Dot[] = [];
    const spacing = 14;
    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing;
        const y = j * spacing;
        dots.push({
          x,
          y,
          originX: x,
          originY: y,
          currentX: x,
          currentY: y,
          opacity: 0.06,
          targetOpacity: 0.06,
          size: 1,
          noiseOffsetX: i * 0.1,
          noiseOffsetY: j * 0.1,
        });
      }
    }
    return dots;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Perlin noise oluştur
    perlinRef.current = new PerlinNoise();

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      dotsRef.current = initDots(rect.width, rect.height);
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const dots = dotsRef.current;
      const perlin = perlinRef.current;
      
      // Zaman güncelle
      timeRef.current += 0.003;
      const time = timeRef.current;

      // Parametreler
      const baseOpacity = 0.06;
      const smoothing = 0.06;
      const flowStrength = 6;

      dots.forEach((dot) => {
        // Perlin noise bazlı organik hareket
        let flowX = 0;
        let flowY = 0;
        let flowOpacity = 0;
        
        if (perlin) {
          const noiseX = perlin.noise(
            dot.noiseOffsetX + time,
            dot.noiseOffsetY
          );
          const noiseY = perlin.noise(
            dot.noiseOffsetX,
            dot.noiseOffsetY + time
          );
          const noiseOpacity = perlin.noise(
            dot.noiseOffsetX + time * 0.5,
            dot.noiseOffsetY + time * 0.5
          );
          
          flowX = noiseX * flowStrength;
          flowY = noiseY * flowStrength;
          flowOpacity = (noiseOpacity + 1) * 0.5 * 0.08;
        }

        dot.targetOpacity = baseOpacity + flowOpacity;
        dot.x = dot.originX + flowX;
        dot.y = dot.originY + flowY;

        // Smooth interpolation
        dot.currentX += (dot.x - dot.currentX) * smoothing;
        dot.currentY += (dot.y - dot.currentY) * smoothing;
        dot.opacity += (dot.targetOpacity - dot.opacity) * smoothing;

        // Dot çizimi
        ctx.beginPath();
        ctx.arc(dot.currentX, dot.currentY, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setupCanvas();
    };

    setupCanvas();
    window.addEventListener("resize", handleResize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initDots]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
