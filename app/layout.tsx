import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueHaas = localFont({
  src: [
    {
      path: "../public/fonts/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayXXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayXThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayRoman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayRomanItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMediu.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayMediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vacid",
  description: "Vacid Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="overflow-hidden">
      <body className={`${neueHaas.variable} font-sans antialiased overflow-hidden fixed inset-0`}>
        {children}
      </body>
    </html>
  );
}
