"use client";

import Image from "next/image";
import { LightBoard } from "./LightBoard";

export default function Header() {
  return (
    <header className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      {/* Logo - Ortada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/varlogo.png"
          alt="Vacid Logo"
          width={600}
          height={200}
          priority
        />
      </div>
      
      {/* LightBoard - Alt kısımda tam genişlik (sadece masaüstü) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[100vw] pointer-events-auto">
        <LightBoard
          text="AUT VIAM INVENIAM AUT FACIAM"
          rows={20}
          lightSize={4}
          gap={2}
          updateInterval={150}
          disableDrawing={true}
        />
      </div>
    </header>
  );
}
