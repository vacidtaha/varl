"use client";

import { useEffect, useRef, useState } from "react";

export default function MoleculeViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || viewerRef.current) return;

    let cancelled = false;

    const load3Dmol = async () => {
      try {
        const $3Dmol = await import("3dmol");

        if (cancelled || !containerRef.current) return;

        // Patch createImageBitmap to prevent null bitmap errors
        const origCreateImageBitmap = window.createImageBitmap;
        if (origCreateImageBitmap) {
          window.createImageBitmap = async function (...args: any[]) {
            try {
              const bitmap = await origCreateImageBitmap.apply(window, args as any);
              return bitmap;
            } catch {
              return null as any;
            }
          };
        }

        const viewer = $3Dmol.createViewer(containerRef.current, {
          backgroundColor: "0x1a1a1a",
          antialias: true,
          disableFog: true,
        });

        if (cancelled) {
          viewer.clear();
          return;
        }

        viewerRef.current = viewer;

        const response = await fetch(
          "https://files.rcsb.org/download/1A3N.pdb"
        );

        if (cancelled) return;

        const pdbData = await response.text();

        if (cancelled) return;

        viewer.addModel(pdbData, "pdb");

        viewer.setStyle({}, {
          cartoon: {
            color: "spectrum",
            opacity: 1.0,
            thickness: 1.2,
          },
        });

        viewer.addSurface(
          $3Dmol.SurfaceType.VDW,
          {
            opacity: 0.08,
            color: "white",
          },
          {}
        );

        // Safe render with retries
        const safeRender = (attempts = 0) => {
          if (cancelled || !viewerRef.current) return;
          try {
            viewer.zoomTo();
            viewer.zoom(1.2);
            viewer.render();
          } catch {
            if (attempts < 3) {
              setTimeout(() => safeRender(attempts + 1), 500 * (attempts + 1));
            }
          }
        };

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            safeRender();
          });
        });

        // Restore original createImageBitmap
        if (origCreateImageBitmap) {
          window.createImageBitmap = origCreateImageBitmap;
        }
      } catch {
        if (!cancelled) setError(true);
      }
    };

    load3Dmol();

    const container = containerRef.current;
    const preventZoom = (e: WheelEvent) => e.preventDefault();
    container?.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      cancelled = true;
      container?.removeEventListener("wheel", preventZoom);
      if (viewerRef.current) {
        try {
          viewerRef.current.clear();
        } catch {
          // ignore cleanup errors
        }
        viewerRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-sm text-gray-400">3D viewer unavailable</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      style={{ position: "relative", width: "100%", height: "100%" }}
    />
  );
}
