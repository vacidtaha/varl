"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">

        {/* Intro */}
        <div className="mx-auto max-w-5xl px-8 pb-16 pt-24">
          <FadeIn>
            <h1 className="text-6xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Investors
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL is financed by VacidKöksal Investment Group, the private investment vehicle of co-founders Taha Vacid and Haktan Köksal. The company maintains strict criteria for alignment with its scientific mission, operational independence, and long-term vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We do not seek capital for growth at any cost. We seek partners who understand that the value VARL creates is measured in decades, not quarters, and that the integrity of our science is not negotiable under any financial pressure.
            </p>
          </FadeIn>
        </div>

        {/* Key Info */}
        <div className="mx-auto max-w-5xl px-8 pb-20">
          <FadeInStagger className="grid grid-cols-4 gap-4" stagger={0.08}>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>HEADQUARTERS</span>
              <div className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">Istanbul</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Türkiye</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>CAPITAL STRUCTURE</span>
              <div className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">Private</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Founder-backed</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>ALLOCATION</span>
              <div className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">R&amp;D</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Science-first deployment</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>DOMAINS</span>
              <div className="mt-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">Health &amp; Food</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Computational biology</span>
            </div>
          </FadeInStagger>
        </div>

        {/* Governance */}
        <div className="mx-auto max-w-5xl px-8 pb-20">
          <FadeIn y={50}>
            <div className="flex gap-12 rounded-2xl bg-gray-50 p-12 dark:bg-neutral-800">
              <div className="flex-1">
                <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>OWNERSHIP</span>
                <h3 className="mt-4 text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>VacidKöksal Investment Group</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Majority ownership and primary capital provider. The investment group is structured to ensure that VARL&apos;s scientific mission remains insulated from short-term market pressures. All strategic decisions are made jointly by the co-founders with full board visibility.
                </p>
              </div>
              <div className="flex-1">
                <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>INVESTMENT CRITERIA</span>
                <h3 className="mt-4 text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>What We Expect</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  External investors must demonstrate alignment with VARL&apos;s long-term thesis. We require minimum 5-year commitment horizons, no interference with scientific operations, and full acceptance of our governance structure. Capital that comes with conditions that compromise our mission is capital we do not need.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Separator */}
        <div className="mx-auto max-w-5xl px-8">
          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800" />
        </div>

        {/* SEC Filings */}
        <div className="mx-auto max-w-5xl px-8 pb-4 pt-20">
          <h2 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            SEC Filings &amp; Reports
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Investor communications and regulatory disclosures.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl px-8 py-16">
          <FadeIn>
            <div className="mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              2026
            </div>
            <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />
          </FadeIn>

          <FadeIn>
            <a href="#" className="group flex items-start gap-8 py-8">
              <div className="flex w-32 shrink-0 flex-col gap-1">
                <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Investor Letter</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">February 2026</span>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <h4 className="text-xl text-gray-900 transition-colors group-hover:text-black dark:text-gray-100 dark:group-hover:text-white" style={{ fontWeight: 500 }}>
                  Founding Letter to Investors
                </h4>
                <p className="text-base leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200">
                  Taha Vacid and Haktan Köksal outline the thesis behind VARL, the role of VacidKöksal Investment Group, and the principles that will govern capital deployment.
                </p>
              </div>
              <div className="mt-1 flex shrink-0 items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white">
                <span>PDF</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
            </a>
          </FadeIn>

          <div className="h-0.5 w-full bg-gray-200 dark:bg-neutral-800" />
        </div>

        {/* Contact */}
        <div className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <div className="rounded-2xl bg-gray-50 p-12 dark:bg-neutral-800">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Investor Relations</h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    For inquiries regarding investment opportunities or shareholder matters, contact our investor relations team directly.
                  </p>
                </div>
                <a
                  href="mailto:ir@varl.net"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-sm text-gray-700 transition-all hover:border-gray-500 hover:text-black dark:border-neutral-600 dark:text-gray-300 dark:hover:border-neutral-400 dark:hover:text-white"
                  style={{ fontWeight: 450 }}
                >
                  ir@varl.net
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
