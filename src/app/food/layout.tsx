import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Food",
  description:
    "VARL Food builds predictive models for crop resilience, soil health monitoring, and food system optimization to combat hunger and restore degraded farmland.",
  alternates: { canonical: `${SITE_URL}/food` },
  openGraph: {
    title: "Food | VARL",
    description: "Predictive models for crop resilience, soil health, and food system optimization to end global hunger.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
