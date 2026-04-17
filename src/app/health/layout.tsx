import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Health",
  description:
    "VARL Health simulates the human body at molecular resolution to detect disease before symptoms appear, design personalized treatments, and accelerate discovery.",
  alternates: { canonical: `${SITE_URL}/health` },
  openGraph: {
    title: "Health | VARL",
    description: "Molecular simulation and digital twin technology for early disease detection and personalized treatment design.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
