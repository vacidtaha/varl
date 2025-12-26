"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      {/* Logo - Ortada */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/vacid-2.png"
          alt="Vacid Logo"
          width={600}
          height={200}
          priority
        />
      </div>
    </header>
  );
}
