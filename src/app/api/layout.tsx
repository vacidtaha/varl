import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "VARL API documentation: integrate digital twin simulations, biomarker analysis, drug target predictions, and agricultural models into your applications.",
  alternates: { canonical: `${SITE_URL}/api` },
  openGraph: {
    title: "API Documentation | VARL",
    description: "Developer documentation for VARL's computational biology and digital twin API.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
