import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "VARL investor relations: explore our financial position, growth strategy, R&D reinvestment, and the expanding market opportunity in computational biology.",
  alternates: { canonical: `${SITE_URL}/investors` },
  openGraph: {
    title: "Investors | VARL",
    description: "Investor relations, financial strategy, and growth outlook for Vacid Advanced Research Labs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
