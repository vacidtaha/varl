import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Science",
  description:
    "The science behind VARL: computational biology, molecular simulation, digital twin platforms, and AI-driven research that maps living systems from cells to ecosystems.",
  alternates: { canonical: `${SITE_URL}/science` },
  openGraph: {
    title: "Science | VARL",
    description: "Computational biology, molecular simulation, and digital twin platforms mapping living systems from cells to ecosystems.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
