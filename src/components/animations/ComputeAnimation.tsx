"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT  = 350;
const RADIUS = 1.2;

const DISEASES = [
  { patient: "Mateo",   name: "Glioblastoma multiforme",        colors: ["#5b9bd5","#c45a7a","#8c5ac4","#c4855a","#52a872"] },
  { patient: "Eleanor", name: "Alzheimer's disease",            colors: ["#6ab5e0","#e08c6a","#9d6ae0","#5ab87a","#e0c06a"] },
  { patient: "Mr. Thanh",name:"Pancreatic adenocarcinoma",      colors: ["#d55a5a","#5a8fd5","#5abd8a","#d5a55a","#a55ad5"] },
  { patient: "James",   name: "Parkinson's disease",            colors: ["#70b8d4","#d47070","#70d4a0","#d4b070","#a070d4"] },
  { patient: "Sarah",   name: "Triple-negative breast cancer",  colors: ["#e07a9a","#7ab4e0","#7ae0aa","#e0b47a","#aa7ae0"] },
  { patient: "David",   name: "Amyotrophic lateral sclerosis",  colors: ["#64aed8","#d8946a","#6ad898","#d8c06a","#986ad8"] },
  { patient: "Wei",     name: "Colorectal carcinoma",           colors: ["#c46060","#60a0c4","#60c480","#c4a060","#8060c4"] },
  { patient: "Sofia",   name: "Huntington's disease",           colors: ["#78bce0","#e0a478","#78e0b4","#e0d078","#b478e0"] },
  { patient: "Kenji",   name: "Hepatocellular carcinoma",       colors: ["#d06868","#6898d0","#68d090","#d0b068","#9068d0"] },
  { patient: "Amara",   name: "Multiple sclerosis",             colors: ["#5ab0d8","#d89a5a","#5ad8a0","#d8cc5a","#a05ad8"] },
];

/* ------------------------------------------------------------------ */

function buildGeometry(colors: string[]) {
  const palette = colors.map((c) => new THREE.Color(c));

  const pos = new Float32Array(COUNT * 3);
  const col = new Float32Array(COUNT * 3);

  for (let i = 0; i < COUNT; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(Math.random() * 2 - 1);
    const r     = RADIUS * Math.pow(Math.random(), 2.2);
    pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.cos(phi);
    pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    const c = palette[Math.floor(Math.random() * palette.length)];
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }

  // Points geometry
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute("position", new THREE.BufferAttribute(pos.slice(), 3));
  pointsGeo.setAttribute("color",    new THREE.BufferAttribute(col.slice(), 3));

  // Build connections: each point connects to its 3 nearest neighbours
  const connections: [number, number][] = [];
  for (let i = 0; i < COUNT; i++) {
    const xi = pos[i*3], yi = pos[i*3+1], zi = pos[i*3+2];
    const dists: { j: number; d: number }[] = [];
    for (let j = 0; j < COUNT; j++) {
      if (i === j) continue;
      const dx = xi - pos[j*3], dy = yi - pos[j*3+1], dz = zi - pos[j*3+2];
      dists.push({ j, d: Math.sqrt(dx*dx + dy*dy + dz*dz) });
    }
    dists.sort((a, b) => a.d - b.d);
    dists.slice(0, 7).forEach(({ j }) => {
      if (j > i) connections.push([i, j]); // avoid duplicates
    });
  }

  const linePos = new Float32Array(connections.length * 6);
  const lineCol = new Float32Array(connections.length * 6);
  connections.forEach(([i, j], k) => {
    linePos[k*6]   = pos[i*3];   linePos[k*6+1] = pos[i*3+1]; linePos[k*6+2] = pos[i*3+2];
    linePos[k*6+3] = pos[j*3];   linePos[k*6+4] = pos[j*3+1]; linePos[k*6+5] = pos[j*3+2];
    lineCol[k*6]   = col[i*3];   lineCol[k*6+1] = col[i*3+1]; lineCol[k*6+2] = col[i*3+2];
    lineCol[k*6+3] = col[j*3];   lineCol[k*6+4] = col[j*3+1]; lineCol[k*6+5] = col[j*3+2];
  });

  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
  linesGeo.setAttribute("color",    new THREE.BufferAttribute(lineCol, 3));

  return { pointsGeo, linesGeo };
}

/* ------------------------------------------------------------------ */

function PointSphere({ pointsGeo, linesGeo }: { pointsGeo: THREE.BufferGeometry; linesGeo: THREE.BufferGeometry }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.10;
    groupRef.current.rotation.x += delta * 0.065;
    groupRef.current.rotation.z += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe boundary */}
      <mesh>
        <sphereGeometry args={[RADIUS, 36, 28]} />
        <meshBasicMaterial color="#888888" wireframe transparent opacity={0.05} />
      </mesh>

      {/* Network lines — gradient via vertex colours */}
      <lineSegments geometry={linesGeo}>
        <lineBasicMaterial vertexColors transparent opacity={0.28} />
      </lineSegments>

      {/* Points on top */}
      <points geometry={pointsGeo}>
        <pointsMaterial vertexColors size={0.032} sizeAttenuation transparent={false} />
      </points>
    </group>
  );
}

/* ------------------------------------------------------------------ */

export default function ComputeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [idx, setIdx]     = useState(0);
  const [visible, setVisible] = useState(true);

  const disease = DISEASES[idx];

  // Pre-build all 10 geometries once
  const geos = useMemo(() => DISEASES.map((d) => buildGeometry(d.colors)), []);
  const geo = geos[idx];

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade label out → change → fade in
      setVisible(false);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % DISEASES.length);
        setVisible(true);
      }, 500);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-md lg:rounded-lg"
      style={{ background: "#000000" }}
    >
      <Canvas
        frameloop={inView ? "always" : "never"}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        camera={{ position: [0, 0, 5], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ambientLight intensity={1} />
        <PointSphere pointsGeo={geo.pointsGeo} linesGeo={geo.linesGeo} />
      </Canvas>

      {/* Patient + Disease label */}
      <div
        className="pointer-events-none absolute left-0 right-0 flex items-center justify-center gap-2"
        style={{
          top: "6%",
          opacity: visible ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
      >
        <span
          className="text-[11px] tracking-tight text-white/90 lg:text-[15px]"
          style={{ fontWeight: 500 }}
        >
          {disease.patient}
        </span>
        <span className="text-white/25 text-[11px] lg:text-[15px]">·</span>
        <span
          className="text-[11px] tracking-tight text-white/40 lg:text-[15px]"
          style={{ fontWeight: 400 }}
        >
          {disease.name}
        </span>
      </div>

      {/* Prev / dots / Next */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
        <button
          onClick={() => { setVisible(false); setTimeout(() => { setIdx((p) => (p - 1 + DISEASES.length) % DISEASES.length); setVisible(true); }, 300); }}
          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {DISEASES.map((_, i) => (
            <button
              key={i}
              onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true); }, 300); }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? 20 : 6,
                background: i === idx ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => { setVisible(false); setTimeout(() => { setIdx((p) => (p + 1) % DISEASES.length); setVisible(true); }, 300); }}
          className="flex h-7 w-7 items-center justify-center rounded-full transition-colors"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
