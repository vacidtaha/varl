import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "White Papers",
  description:
    "In-depth technical white papers from VARL covering digital twin architecture, molecular simulation methodology, precision medicine frameworks, and agricultural AI systems.",
  alternates: { canonical: `${SITE_URL}/white-papers` },
  robots: { index: false, follow: true },
  openGraph: {
    title: "White Papers | VARL",
    description: "Technical white papers on digital twins, molecular simulation, and precision medicine from VARL.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
