import type { Metadata } from "next";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with VARL. Contact our teams for research partnerships, investor relations, career opportunities, media inquiries, and general questions.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | VARL",
    description: "Get in touch with VARL. Contact our teams for research partnerships, investor relations, career opportunities, media inquiries, and general questions.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
