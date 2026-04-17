import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Latest",
  description:
    "News, research updates, and announcements from VARL. Follow our progress in computational biology, drug discovery, precision agriculture, and platform development.",
  alternates: { canonical: `${SITE_URL}/latest` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Latest | VARL",
    description: "News, research updates, and announcements from Vacid Advanced Research Labs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
