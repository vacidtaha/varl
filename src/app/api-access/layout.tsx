import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "API Access Request",
  description:
    "Request access to the VARL API. Available to researchers, healthcare institutions, agricultural enterprises, and government agencies for computational biology integration.",
  alternates: { canonical: `${SITE_URL}/api-access` },
  openGraph: {
    title: "API Access Request | VARL",
    description: "Apply for access to VARL's computational biology API for research and enterprise use.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
