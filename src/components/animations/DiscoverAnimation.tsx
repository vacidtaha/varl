"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Discover — 44s loop
 *
 * 0–5s    Sphere rotates
 * 5–9s    Slows to stop
 * 9–32s   3 wrong paths drawn node-by-node (orange → red → fade)
 * 29–36s  Correct path drawn node-by-node (green)
 * 36–43s  Camera fly-through
 * 43–44s  Fade → loop
 */

const LOOP    = 44;
const COUNT   = 180;
const RADIUS  = 1.7;
const PATH_N  = 13;
const SEGS    = 100; // curve segments per path

const PALETTE = [
  new THREE.Color("#5b9bd5"),
  new THREE.Color("#c4855a"),
  new THREE.Color("#8c5ac4"),
  new THREE.Color("#52a872"),
  new THREE.Color("#c45a7a"),
];

const ORANGE = new THREE.Color("#f97316");
const RED    = new THREE.Color("#ef4444");
const GREEN  = new THREE.Color("#22c55e");

/* ------------------------------------------------------------------ */

function makePRNG(seed: number) {
  let s = seed | 0;
  return () => {
    s = Math.imul(s ^ (s >>> 15), s | 1);
    s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
    return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
  };
}

const c01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const n01 = (v: number, a: number, b: number) => c01((v - a) / (b - a));
const ease = (t: number) => t * t * (3 - 2 * t);
const easeOut = (t: number) => 1 - (1 - t) * (1 - t);

/* ------------------------------------------------------------------ */
/*  Build                                                               */
/* ------------------------------------------------------------------ */

type PathData = { idxs: number[]; geo: THREE.BufferGeometry; curve: THREE.CatmullRomCurve3 };
type SceneData = { pts: THREE.Vector3[]; ptGeo: THREE.BufferGeometry; netGeo: THREE.BufferGeometry; wrong: PathData[]; good: PathData };

function buildPath(wps: THREE.Vector3[], pts: THREE.Vector3[], used: Set<number>): PathData {
  const idxs: number[] = [];
  for (const wp of wps) {
    let best = -1, bestD = Infinity;
    pts.forEach((p, i) => {
      if (used.has(i)) return;
      const d = p.distanceTo(wp);
      if (d < bestD) { bestD = d; best = i; }
    });
    if (best !== -1) { idxs.push(best); used.add(best); }
  }
  const curve = new THREE.CatmullRomCurve3(idxs.map((i) => pts[i].clone()), false, "catmullrom", 0.5);
  const geo   = new THREE.BufferGeometry().setFromPoints(curve.getPoints(SEGS));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (geo as any)._maxPts = SEGS + 1; // store for drawRange
  geo.setDrawRange(0, 0); // start hidden
  return { idxs, geo, curve };
}

function helix(start: number, turns: number, yT: number, yB: number, rng: () => number): THREE.Vector3[] {
  return Array.from({ length: PATH_N }, (_, i) => {
    const t = i / (PATH_N - 1);
    const a = start + t * Math.PI * 2 * turns;
    const y = yT + (yB - yT) * t;
    const xr = Math.sqrt(Math.max(0, RADIUS * RADIUS * 0.65 - y * y));
    return new THREE.Vector3(xr * Math.cos(a) + (rng() - 0.5) * 0.25, y + (rng() - 0.5) * 0.12, xr * Math.sin(a) + (rng() - 0.5) * 0.25);
  });
}

function build(): SceneData {
  const rng = makePRNG(42);
  const pts: THREE.Vector3[] = [];
  const ptCols: THREE.Color[] = [];
  for (let i = 0; i < COUNT; i++) {
    const theta = 2 * Math.PI * rng(), phi = Math.acos(2 * rng() - 1);
    const r = RADIUS * Math.pow(rng(), 2.2);
    pts.push(new THREE.Vector3(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)));
    ptCols.push(PALETTE[Math.floor(rng() * PALETTE.length)].clone());
  }

  const col = new Float32Array(COUNT * 3);
  const pos = new Float32Array(COUNT * 3);
  pts.forEach((p, i) => {
    pos[i*3] = p.x; pos[i*3+1] = p.y; pos[i*3+2] = p.z;
    col[i*3] = ptCols[i].r; col[i*3+1] = ptCols[i].g; col[i*3+2] = ptCols[i].b;
  });
  const ptGeo = new THREE.BufferGeometry();
  ptGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  ptGeo.setAttribute("color",    new THREE.BufferAttribute(col.slice(), 3));

  const edges: [number, number][] = [];
  for (let i = 0; i < COUNT; i++) {
    pts.map((_, j) => ({ j, d: pts[i].distanceTo(pts[j]) })).filter((x) => x.j !== i)
       .sort((a, b) => a.d - b.d).slice(0, 4).forEach(({ j }) => { if (j > i) edges.push([i, j]); });
  }
  const lp = new Float32Array(edges.length * 6), lc = new Float32Array(edges.length * 6);
  edges.forEach(([a, b], k) => {
    lp.set([pts[a].x, pts[a].y, pts[a].z, pts[b].x, pts[b].y, pts[b].z], k * 6);
    lc.set([col[a*3], col[a*3+1], col[a*3+2], col[b*3], col[b*3+1], col[b*3+2]], k * 6);
  });
  const netGeo = new THREE.BufferGeometry();
  netGeo.setAttribute("position", new THREE.BufferAttribute(lp, 3));
  netGeo.setAttribute("color",    new THREE.BufferAttribute(lc, 3));

  const used = new Set<number>();
  const wrong = [
    buildPath(helix(0.3,  1.8,  RADIUS * 0.7,  -RADIUS * 0.5, rng), pts, used),
    buildPath(helix(2.1,  2.2,  RADIUS * 0.5,  -RADIUS * 0.8, rng), pts, used),
    buildPath(helix(4.5,  1.5,  RADIUS * 0.6,  -RADIUS * 0.6, rng), pts, used),
  ];
  const good = buildPath(helix(0, 2.5, RADIUS * 0.8, -RADIUS * 0.8, rng), pts, used);

  return { pts, ptGeo, netGeo, wrong, good };
}

/* ------------------------------------------------------------------ */
/*  Wrong path phase timings: [drawStart, drawEnd, turnRed, fadeEnd]   */
/* ------------------------------------------------------------------ */
const WRONG_T: [number, number, number, number][] = [
  [9,  14,  15,  18],
  [16, 21,  22,  25],
  [23, 28,  29,  32],
];

/* ------------------------------------------------------------------ */
/*  Scene                                                               */
/* ------------------------------------------------------------------ */

function Scene({ data, startRef }: { data: SceneData; startRef: React.RefObject<number> }) {
  const { pts, ptGeo, netGeo, wrong, good } = data;
  const { camera } = useThree();

  const groupRef   = useRef<THREE.Group>(null);
  // Use shared startRef so Scene and root are always in sync
  const elapsed    = useRef(0); // kept for wireframe opacity access in JSX
  const camDefault = useMemo(() => new THREE.Vector3(0, 0, 5.2), []);

  // refs per wrong path
  const wLineRefs  = useRef<(THREE.Line | null)[]>([null, null, null]);
  const wLineMatRefs = useRef<(THREE.LineBasicMaterial | null)[]>([null, null, null]);
  const wNodeRefs  = useRef<(THREE.Mesh | null)[][]>([[], [], []]);
  const wNodeMats  = useRef<(THREE.MeshBasicMaterial | null)[][]>([[], [], []]);

  // refs for good path
  const gLineRef   = useRef<THREE.Line>(null);
  const gLineMatRef = useRef<THREE.LineBasicMaterial>(null);
  const gNodeRefs  = useRef<(THREE.Mesh | null)[]>([]);
  const gNodeMats  = useRef<(THREE.MeshBasicMaterial | null)[]>([]);

  const circleTex = useMemo(() => {
    if (typeof window === "undefined") return new THREE.Texture();
    const sz = 64, c = document.createElement("canvas");
    c.width = c.height = sz;
    const ctx = c.getContext("2d")!;
    ctx.beginPath(); ctx.arc(sz/2, sz/2, sz/2 - 1, 0, Math.PI * 2);
    ctx.fillStyle = "#fff"; ctx.fill();
    return new THREE.CanvasTexture(c);
  }, []);

  useFrame((_, delta) => {
    // Single shared clock — same as root's sec, no desync on scroll
    const s = ((performance.now() - (startRef.current ?? performance.now())) / 1000) % LOOP;
    elapsed.current = s; // keep in sync for JSX opacity reads

    // Rotation
    if (groupRef.current) {
      const rs = s < 3 ? 1 : s < 5.5 ? 1 - ease(n01(s, 3, 5.5)) : 0;
      groupRef.current.rotation.y += delta * 0.08 * rs;
      groupRef.current.rotation.x += delta * 0.025 * rs;
    }

    // Wrong paths
    WRONG_T.forEach(([drawS, drawE, redS, fadeE], wi) => {
      const path   = wrong[wi];
      const lineMat = wLineMatRefs.current[wi];
      const lineObj = wLineRefs.current[wi];
      const visible = s >= drawS && s < fadeE;

      if (lineObj) lineObj.visible = visible;

      if (visible && lineMat) {
        const drawT  = ease(n01(s, drawS, drawE));          // 0→1 draw progress
        const redT   = ease(n01(s, redS, redS + 0.8));      // 0→1 red transition
        const fadeT  = ease(n01(s, fadeE - 1.2, fadeE));    // 0→1 fade out
        const col    = ORANGE.clone().lerp(RED, redT);

        // Update drawRange — SEGS+1 total points
        path.geo.setDrawRange(0, Math.floor(drawT * (SEGS + 1)));

        lineMat.color.copy(col);
        lineMat.opacity = (1 - fadeT);
      } else if (!visible) {
        path.geo.setDrawRange(0, 0);
      }

      // Wrong nodes: appear as line passes, red on turnRed, fade on fadeE
      wNodeMats.current[wi].forEach((mat, ni) => {
        if (!mat) return;
        const threshold = (ni / (PATH_N - 1)) * 0.96; // max 0.96 so last node has room
        const drawT     = ease(n01(s, drawS, drawE));
        const appeared  = drawT >= threshold;
        const redT      = ease(n01(s, redS, redS + 0.8));
        const fadeT     = ease(n01(s, fadeE - 1.2, fadeE));

        mat.visible = visible && appeared;
        if (mat.visible) {
          const pop = ease(n01(drawT, threshold, threshold + 0.04));
          wNodeRefs.current[wi][ni]?.scale.setScalar(1 + pop * 0.55);
          mat.color.copy(ORANGE).lerp(RED, redT);
          mat.opacity = 1 - fadeT;
        }
      });
    });

    // Good path — identical behaviour to wrong paths, but green at end instead of red
    const gDrawStart = 29, gDrawEnd = 34, gTurnGreen = 35, gPulseEnd = 43;
    const gDrawT  = ease(n01(s, gDrawStart, gDrawEnd));
    const gGreenT = ease(n01(s, gTurnGreen, gTurnGreen + 1.0));
    const gFadeIn = ease(n01(s, gDrawStart, gDrawStart + 1.5));
    const pulse   = 0.55 + Math.sin(s * Math.PI * 3.5) * 0.45;

    good.geo.setDrawRange(0, Math.floor(gDrawT * (SEGS + 1)));

    const gLineColor = ORANGE.clone().lerp(GREEN, gGreenT);

    if (gLineRef.current)  gLineRef.current.visible = s >= gDrawStart;
    if (gLineMatRef.current) {
      gLineMatRef.current.color.copy(gLineColor);
      gLineMatRef.current.opacity = gFadeIn * (s >= gTurnGreen + 1 ? pulse : 1);
    }

    gNodeMats.current.forEach((mat, ni) => {
      if (!mat) return;
      // scale threshold so max is 0.96 — last node appears when line is 96% drawn
      // leaving a 4% window for the pop animation before drawT hits 1.0
      const threshold = (ni / (PATH_N - 1)) * 0.96;
      const lit = gDrawT >= threshold;
      mat.visible = lit && s >= gDrawStart;
      if (mat.visible) {
        // pop window: threshold → threshold + 0.04 (always has room since max threshold = 0.96)
        const pop = ease(n01(gDrawT, threshold, threshold + 0.04));
        gNodeRefs.current[ni]?.scale.setScalar(1 + pop * 0.6);
        mat.color.copy(ORANGE).lerp(GREEN, gGreenT);
        mat.opacity = gFadeIn;
      }
    });

    // Camera stays fixed
    camera.position.lerp(camDefault, 0.05);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return (
    <group ref={groupRef}>
      {/* Boundary — fades out as sphere stops */}
      <mesh>
        <sphereGeometry args={[RADIUS, 36, 28]} />
        <meshBasicMaterial
          color="#999"
          wireframe
          transparent
          opacity={Math.max(0, 0.12 * (1 - ease(n01(elapsed.current, 5, 6.2))))}
        />
      </mesh>

      {/* Network */}
      <lineSegments geometry={netGeo}>
        <lineBasicMaterial vertexColors transparent opacity={0.35} />
      </lineSegments>

      {/* Points */}
      <points geometry={ptGeo}>
        <pointsMaterial vertexColors size={0.055} sizeAttenuation map={circleTex} alphaTest={0.4} transparent opacity={0.9} />
      </points>

      {/* Wrong paths */}
      {wrong.map((path, wi) => (
        <group key={wi}>
          {/* @ts-expect-error R3F line element conflicts with SVG line in TS */}
          <line ref={(el: unknown) => { wLineRefs.current[wi] = el as THREE.Line; }} visible={false}>
            <primitive object={path.geo} attach="geometry" />
            <lineBasicMaterial ref={(el) => { wLineMatRefs.current[wi] = el; }} color={ORANGE} transparent opacity={0} linewidth={1} />
          </line>
          {path.idxs.map((pi, ni) => (
            <mesh key={ni} position={pts[pi]}
              ref={(el) => { if (!wNodeRefs.current[wi]) wNodeRefs.current[wi] = []; wNodeRefs.current[wi][ni] = el; }}
            >
              <sphereGeometry args={[0.055, 10, 10]} />
              <meshBasicMaterial
                ref={(el) => { if (!wNodeMats.current[wi]) wNodeMats.current[wi] = []; wNodeMats.current[wi][ni] = el; }}
                color={ORANGE} transparent opacity={0} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Correct path */}
      {/* @ts-expect-error R3F line element conflicts with SVG line in TS */}
      <line ref={gLineRef as React.Ref<unknown>} visible={false}>
        <primitive object={good.geo} attach="geometry" />
        <lineBasicMaterial ref={gLineMatRef} color={GREEN} transparent opacity={0} />
      </line>
      {good.idxs.map((pi, i) => (
        <mesh key={i} position={pts[pi]} ref={(el) => { gNodeRefs.current[i] = el; }}>
          <sphereGeometry args={[0.058, 10, 10]} />
          <meshBasicMaterial ref={(el) => { gNodeMats.current[i] = el; }} color={GREEN} transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */

export default function DiscoverAnimation() {
  const data = useMemo(() => build(), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [sec, setSec] = useState(0);

  // startRef set ONCE on mount — never resets on scroll
  const startRef = useRef<number>(performance.now());
  const rafRef   = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) { cancelAnimationFrame(rafRef.current); return; }
    const tick = () => {
      setSec(((performance.now() - startRef.current) / 1000) % LOOP);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [inView]);

  // Grid fades out 5→7s, black overlay fades in 6→8s (each loop)
  const gridOpacity   = Math.max(0, 1 - ease(n01(sec, 5, 6.2)));
  const blackOverlay  = Math.min(1, ease(n01(sec, 5.5, 7)));

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-md lg:rounded-lg"
      style={{ background: "#1a1a1a" }}
    >
      {/* Grid layer — fades out when sphere stops */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity: gridOpacity,
        }}
      />

      {/* Black overlay — fades in after grid disappears */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "#000000", opacity: blackOverlay }}
      />

      <Canvas
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 0, 5.2], fov: 52 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0, background: "transparent" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[0, 0, 0]} intensity={0.4} color="#22c55e" />
        <Scene data={data} startRef={startRef} />
      </Canvas>
    </div>
  );
}
