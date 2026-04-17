import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "About",
  description:
    "VARL — Vacid Advanced Research Labs — is an idea, not just a company. Founded in Istanbul to create revolutionary impact across health, food, and technology.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About | VARL",
    description: "The story, mission, and people behind Vacid Advanced Research Labs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
