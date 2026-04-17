"use client";

import { MobileBottomNav } from "@/components/Header";

export default function MobileNavWrapper({ forceDark = false }: { forceDark?: boolean }) {
  return <MobileBottomNav forceDark={forceDark} />;
}
