import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to join VARL. Submit your application for open positions in computational biology, machine learning, agricultural science, and product design.",
  alternates: { canonical: `${SITE_URL}/apply` },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Apply | VARL",
    description: "Apply to join VARL. Submit your application for open positions in computational biology, machine learning, agricultural science, and product design.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
