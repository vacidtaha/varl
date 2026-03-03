import type { Metadata } from "next";
import "./globals.css";
import MobileGate from "@/components/MobileGate";

export const metadata: Metadata = {
  title: {
    default: "Varl",
    template: "Varl | %s",
  },
  description: "VARL — Biological Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <MobileGate>{children}</MobileGate>
      </body>
    </html>
  );
}
