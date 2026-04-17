"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-5 pb-4 pt-16 lg:px-8 lg:pt-24">
          <h1
            className="text-3xl tracking-tight text-gray-900 lg:text-6xl dark:text-gray-100"
            style={{ fontWeight: 500 }}
          >
            Publications
          </h1>
          <p
            className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400"
            style={{ fontWeight: 400 }}
          >
            Peer-reviewed research, conference papers, and preprints from
            VARL&apos;s scientific team will be listed here as they are
            published.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <FadeIn>
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-gray-50 px-6 py-20 text-center lg:gap-8 lg:px-12 lg:py-32 dark:bg-neutral-800">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-700">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 dark:text-gray-500"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className="text-xl tracking-tight text-gray-900 lg:text-2xl dark:text-gray-100"
                  style={{ fontWeight: 500 }}
                >
                  Publications Coming Soon
                </h2>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Our research is currently underway. Peer-reviewed papers and
                  preprints will appear here as they are accepted for
                  publication.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <Link
              href="/white-papers"
              className="group flex items-center justify-between rounded-2xl bg-gray-50 px-6 py-6 transition-colors hover:bg-gray-100 lg:px-10 lg:py-8 dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <div>
                <span
                  className="text-[10px] tracking-widest text-gray-400 lg:text-xs"
                  style={{ fontWeight: 500 }}
                >
                  ALSO FROM VARL
                </span>
                <h3
                  className="mt-2 text-xl tracking-tight text-gray-900 lg:text-2xl dark:text-gray-100"
                  style={{ fontWeight: 500 }}
                >
                  White Papers
                </h3>
                <p className="mt-1 text-xs text-gray-500 lg:text-sm dark:text-gray-400">
                  In-depth technical reports, methodology documents, and
                  research frameworks.
                </p>
              </div>
              <span className="text-lg text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>
      </main>

      <MobileBottomNav />
      <Footer />
    </div>
  );
}
