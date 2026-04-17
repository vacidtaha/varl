import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partner with VARL: collaborate on computational biology research, clinical validation, agricultural deployment, and technology licensing across global markets.",
  alternates: { canonical: `${SITE_URL}/partnerships` },
  openGraph: {
    title: "Partnerships | VARL",
    description: "Strategic partnership opportunities in computational biology, clinical research, and agricultural technology.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
