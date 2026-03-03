import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />

      <div className="relative w-full overflow-hidden">
        <img
          src={article.img}
          alt=""
          className="h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-black dark:via-black/20"></div>
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-8 pb-32">
          <div className="-mt-20 relative z-10 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>{article.category}</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">&middot;</span>
              <span className="text-xs text-gray-400">{article.type}</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">&middot;</span>
              <span className="text-xs text-gray-400">{article.date}</span>
            </div>

            <h1 className="text-5xl leading-tight tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              {article.title}
            </h1>

            <p className="text-xl leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
              {article.desc}
            </p>

            <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl bg-gray-50 py-20 dark:bg-neutral-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Full article coming soon
              </h3>
              <p className="max-w-md text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                We are preparing the full content for this article. Our team is finalizing the research details, data visualizations, and supporting materials to ensure the quality this topic deserves.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/latest"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
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

      <Footer />
    </div>
  );
}
