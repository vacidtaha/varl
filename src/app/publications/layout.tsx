import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Peer-reviewed research publications from VARL: molecular simulation, digital twin validation, biomarker discovery, precision agriculture, and computational drug design.",
  alternates: { canonical: `${SITE_URL}/publications` },
  openGraph: {
    title: "Publications | VARL",
    description: "Peer-reviewed research in molecular simulation, biomarker discovery, and computational drug design.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
