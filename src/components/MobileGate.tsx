"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeartParticles = dynamic(() => import("@/components/HeartParticles"), { ssr: false });

export default function MobileGate({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1024);
      setChecked(true);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!checked) return null;

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col bg-black">
        <div className="absolute inset-0">
          <HeartParticles />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

        {/* Logo — kalbin üstünde */}
        <div className="relative z-10 flex justify-center pt-16">
          <img
            src="/header-logo.png"
            alt="VARL"
            className="h-8 invert"
          />
        </div>

        {/* Spacer — kalp animasyonu ortada görünsün */}
        <div className="flex-1" />

        {/* Alt kısım — yazılar */}
        <div className="relative z-10 flex flex-col gap-5 px-8 pb-16">
          <h1 className="text-4xl leading-tight tracking-tight" style={{ fontWeight: 700, letterSpacing: "-0.025em" }}>
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-400 bg-clip-text text-transparent">
              Coming soon<br />to mobile.
            </span>
          </h1>

          <p className="max-w-sm text-sm leading-relaxed text-white/40">
            The full VARL experience, including our scientific platform, interactive simulations, and research tools, is being optimized for mobile. Until then, everything we have built lives on the big screen.
          </p>

          <p className="text-xs text-white/25">
            Please visit varl.net on a desktop computer.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
