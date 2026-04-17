"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WhitePapersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <div className="relative h-[280px] w-full overflow-hidden lg:h-[620px]">
        <Image
          src="/white-hero.webp"
          alt="Polar bear in snow — VARL White Papers"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <span className="absolute bottom-2 left-3 text-[8px] text-white/60 lg:bottom-3 lg:left-4 lg:text-xs">
          Yes, we&apos;re aware we put a white bear on the White Papers page.
        </span>
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h1
            className="text-3xl tracking-tight text-white drop-shadow-lg lg:text-7xl"
            style={{ fontWeight: 400 }}
          >
            White Papers
          </h1>
        </div>
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-24">
          <FadeIn>
            <p className="max-w-2xl text-sm text-gray-500 lg:text-lg dark:text-gray-400">
              In-depth technical reports covering our methodology, architecture
              decisions, and research frameworks.
            </p>
          </FadeIn>

          <div className="mt-12 lg:mt-20">
            <FadeIn>
              <div className="flex flex-col items-center gap-6 rounded-2xl bg-gray-100 px-6 py-20 text-center lg:gap-8 lg:px-12 lg:py-32 dark:bg-neutral-800">
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h2
                    className="text-xl tracking-tight text-gray-900 lg:text-2xl dark:text-gray-100"
                    style={{ fontWeight: 500 }}
                  >
                    White Papers Coming Soon
                  </h2>
                  <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Our technical reports are currently being prepared. They will
                    be published here as they are finalized.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <Link
              href="/publications"
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
                  Publications
                </h3>
                <p className="mt-1 text-xs text-gray-500 lg:text-sm dark:text-gray-400">
                  Peer-reviewed research papers and preprints from our
                  scientific team.
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
