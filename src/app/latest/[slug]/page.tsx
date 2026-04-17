import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavWrapper from "@/components/MobileNavWrapper";
import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import BiologicalCamouflageDrugDelivery from "./articles/biological-camouflage-drug-delivery";
import LipidNanoparticlesCellularRepair from "./articles/lipid-nanoparticles-cellular-repair";
import TomatoGenomeNutritionalPotential from "./articles/tomato-genome-nutritional-potential";

const articleContent: Record<string, React.ComponentType> = {
  "biological-camouflage-drug-delivery": BiologicalCamouflageDrugDelivery,
  "lipid-nanoparticles-cellular-repair": LipidNanoparticlesCellularRepair,
  "tomato-genome-nutritional-potential": TomatoGenomeNutritionalPotential,
};

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.desc,
    alternates: { canonical: `https://varl.net/latest/${slug}` },
    openGraph: {
      title: `${article.title} | VARL`,
      description: article.desc,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: `https://varl.net${article.img}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.desc,
      images: [`https://varl.net${article.img}`],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  const ContentComponent = articleContent[slug] || null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.desc,
    image: `https://varl.net${article.img}`,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "VARL",
      url: "https://varl.net",
    },
    publisher: {
      "@type": "Organization",
      name: "VARL",
      logo: { "@type": "ImageObject", url: "https://varl.net/header-logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://varl.net/latest/${slug}`,
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <div className="relative h-[260px] w-full overflow-hidden lg:h-[480px]">
        <Image
          src={article.img}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-black dark:via-black/20"></div>
      </div>

      <main className="flex-1">
        <div className={`mx-auto px-5 pb-16 lg:px-8 lg:pb-32 ${ContentComponent ? "max-w-4xl" : "max-w-3xl"}`}>
          <div className="-mt-14 relative z-10 flex flex-col gap-4 lg:-mt-20 lg:gap-6">
            <div className="flex flex-wrap items-center gap-2 lg:gap-3">
              <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>{article.category}</span>
              <span className="text-[10px] text-gray-300 lg:text-xs dark:text-gray-600">&middot;</span>
              <span className="text-[10px] text-gray-400 lg:text-xs">{article.type}</span>
              <span className="text-[10px] text-gray-300 lg:text-xs dark:text-gray-600">&middot;</span>
              <span className="text-[10px] text-gray-400 lg:text-xs">{article.date}</span>
            </div>

            <h1 className="text-2xl leading-tight tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              {article.title}
            </h1>

            <p className="text-sm leading-relaxed text-gray-500 lg:text-xl dark:text-gray-400" style={{ fontWeight: 400 }}>
              {article.desc}
            </p>

            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-6 py-12 lg:mt-16 lg:gap-6 lg:px-0 lg:py-20 dark:bg-neutral-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 lg:h-14 lg:w-14 dark:bg-neutral-800">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h2 className="text-xl tracking-tight text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                  Full article coming soon
                </h2>
                <p className="max-w-md text-center text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                  We are preparing the full content for this article. Our team is finalizing the research details, data visualizations, and supporting materials to ensure the quality this topic deserves.
                </p>
              </div>
            )}

            <div className="mt-6 lg:mt-10">
              <Link
                href="/latest"
                className="inline-flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-900 lg:text-sm dark:hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12 7H2M2 7l4-4M2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Latest
              </Link>
            </div>
          </div>
        </div>
      </main>

      <MobileNavWrapper />

      <Footer />
    </div>
  );
}
