import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import ErrorSuppressor from "@/components/ErrorSuppressor";
import "./globals.css";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VARL — Vacid Advanced Research Labs",
    template: "%s | VARL",
  },
  description:
    "VARL builds computational biology platforms that simulate living systems at molecular resolution — from early disease detection to regenerative agriculture.",
  keywords: [
    "VARL",
    "Vacid Advanced Research Labs",
    "computational biology",
    "digital twin",
    "biological simulation",
    "drug discovery",
    "personalized medicine",
    "precision agriculture",
    "molecular simulation",
    "AI healthcare",
    "biotech",
    "disease modeling",
    "food security",
    "regenerative agriculture",
  ],
  authors: [{ name: "VARL", url: SITE_URL }],
  creator: "VARL",
  publisher: "VARL",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/og-image.png" },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "VARL — Vacid Advanced Research Labs",
    description:
      "We simulate the human body and agricultural systems at molecular resolution to detect disease before symptoms appear and build food systems that can feed the planet.",
    url: SITE_URL,
    siteName: "VARL",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "VARL — Vacid Advanced Research Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VARL — Vacid Advanced Research Labs",
    description:
      "Computational biology platforms that simulate living systems. From early disease detection to regenerative agriculture.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VARL",
              legalName: "Vacid Advanced Research Labs",
              url: SITE_URL,
              logo: `${SITE_URL}/header-logo.png`,
              description:
                "VARL builds computational biology platforms that simulate living systems at molecular resolution to detect disease, design personalized treatments, and optimize global food systems.",
              foundingDate: "2024",
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Istanbul",
                addressCountry: "TR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@varl.net",
                contactType: "general",
              },
              knowsAbout: [
                "Computational Biology",
                "Digital Twin Technology",
                "Molecular Simulation",
                "Drug Discovery",
                "Precision Medicine",
                "Agricultural Technology",
                "Regenerative Agriculture",
                "AI in Healthcare",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VARL",
              alternateName: "Vacid Advanced Research Labs",
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ErrorSuppressor />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
