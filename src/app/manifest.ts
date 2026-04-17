import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VARL — Vacid Advanced Research Labs",
    short_name: "VARL",
    description:
      "AI-powered computational biology platform redefining health and food systems through digital twin simulations, molecular modeling, and precision medicine.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/og-image.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
