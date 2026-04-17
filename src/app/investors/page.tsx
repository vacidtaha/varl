"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function InvestorsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      {/* Sticky Nav Strip */}
      <div className="sticky top-0 z-40 flex w-full items-center bg-white/60 backdrop-blur-xl dark:bg-neutral-900/60" style={{ height: "70px" }}>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 lg:px-8">
          <span className="text-base tracking-tight text-gray-900 lg:text-lg dark:text-gray-100" style={{ fontWeight: 600 }}>
            Investors
          </span>
          <div className="flex items-center gap-5 lg:gap-8">
            <Link href="/about" className="text-xs text-gray-400 transition-colors hover:text-gray-900 lg:text-sm dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              About
            </Link>
            <Link href="/partnerships" className="text-xs text-gray-400 transition-colors hover:text-gray-900 lg:text-sm dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              Partnerships
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1">

        {/* Intro */}
        <div className="mx-auto max-w-5xl px-5 pb-20 pt-20 lg:px-8 lg:pb-16 lg:pt-24">
          <FadeIn>
            <h1 className="text-3xl tracking-tight text-gray-900 lg:text-6xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              Investors
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-8 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL is financed by VacidKöksal Investment Group, the private investment vehicle of co-founders Taha Vacid and Haktan Köksal. The company maintains strict criteria for alignment with its scientific mission, operational independence, and long-term vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-4 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              We do not seek capital for growth at any cost. We seek partners who understand that the value VARL creates is measured in decades, not quarters, and that the integrity of our science is not negotiable under any financial pressure.
            </p>
          </FadeIn>
        </div>

        {/* Key Info */}
        <div className="mx-auto max-w-5xl px-5 pb-8 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
            <FadeIn delay={0}>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-800">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>HEADQUARTERS</span>
                <div className="mt-3 text-2xl font-semibold text-gray-900 lg:mt-4 lg:text-3xl dark:text-gray-100">Istanbul</div>
                <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">Türkiye</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-800">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>CAPITAL STRUCTURE</span>
                <div className="mt-3 text-2xl font-semibold text-gray-900 lg:mt-4 lg:text-3xl dark:text-gray-100">Private</div>
                <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">Founder-backed</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-800">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>ALLOCATION</span>
                <div className="mt-3 text-2xl font-semibold text-gray-900 lg:mt-4 lg:text-3xl dark:text-gray-100">R&amp;D</div>
                <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">Science-first deployment</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-800">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>DOMAINS</span>
                <div className="mt-3 text-2xl font-semibold text-gray-900 lg:mt-4 lg:text-3xl dark:text-gray-100">Health &amp; Food</div>
                <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">Computational biology</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Governance */}
        <div className="mx-auto max-w-5xl px-5 pt-6 pb-14 lg:px-8 lg:pt-0 lg:pb-20">
          <FadeIn y={0}>
            <div className="flex flex-col gap-8 rounded-2xl bg-gray-50 p-6 lg:flex-row lg:gap-12 lg:p-12 dark:bg-neutral-800">
              <div className="flex-1">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>OWNERSHIP</span>
                <h2 className="mt-3 text-xl text-gray-900 lg:mt-4 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>VacidKöksal Investment Group</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 lg:mt-4 lg:text-base dark:text-gray-400">
                  Majority ownership and primary capital provider. The investment group is structured to ensure that VARL&apos;s scientific mission remains insulated from short-term market pressures. All strategic decisions are made jointly by the co-founders with full board visibility.
                </p>
              </div>
              <div className="flex-1">
                <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>INVESTMENT CRITERIA</span>
                <h2 className="mt-3 text-xl text-gray-900 lg:mt-4 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>What We Expect</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 lg:mt-4 lg:text-base dark:text-gray-400">
                  External investors must demonstrate alignment with VARL&apos;s long-term thesis. We require minimum 5-year commitment horizons, no interference with scientific operations, and full acceptance of our governance structure. Capital that comes with conditions that compromise our mission is capital we do not need.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Separator */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800" />
        </div>

        {/* How We Create Value */}
        <div className="mx-auto max-w-5xl px-5 pb-8 pt-12 lg:px-8 lg:pb-20 lg:pt-20">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-4xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              How We Create Value
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL is a pharmaceutical company built on computational biology. Our platform exists to develop drugs, not to sell software. The API, the digital twins, the simulation engine: these are not products for the market. They are the tools we use to discover, validate, and bring treatments to patients faster and at a fraction of the cost that the current industry requires.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-col lg:mt-16">
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Drug Development</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Our primary revenue source is pharmaceutical development. VARL&apos;s platform is designed to compress the drug discovery pipeline from 15 years to under 3, and reduce development costs from $2.6 billion to under $150 million per compound. We develop treatments internally, from computational discovery through preclinical validation, and bring them to market through strategic agreements with national health systems and international health organizations.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Accessible Pricing</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  We do not believe in extractive pharmaceutical pricing. Our cost structure, built on computational validation rather than decades of physical experimentation, allows us to price treatments at levels that governments and health systems can afford. We negotiate directly with countries and public health institutions to ensure that every treatment we develop reaches every patient who needs it, not just those who can pay premium prices. Affordable access is not a charitable afterthought. It is built into the economics of our model from the beginning.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Platform API</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Our API is not a SaaS product open to anyone with a credit card. It is a controlled research infrastructure licensed exclusively to qualified institutions: research hospitals, pharmaceutical companies, agricultural organizations, and government agencies, under strict access agreements. API access enables partners to run their own simulations on our digital twin engine in parallel with our internal programs, accelerating discovery across the entire field. Licensing revenue from the API supports our R&amp;D operations while expanding the reach of computational biology beyond what any single organization could achieve alone.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-b border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Agricultural Solutions</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  The same computational platform that discovers drugs also designs crop varieties, soil restoration protocols, and food safety systems. We develop agricultural solutions and license them to farming cooperatives, national agriculture ministries, and food system operators, again at pricing structured for broad access. Revenue from agricultural applications creates a diversified funding base that reduces our dependence on any single therapeutic program and ensures the platform continues to grow across domains.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-10 rounded-2xl bg-gray-50 p-6 lg:mt-16 lg:p-10 dark:bg-neutral-800">
              <p className="text-sm leading-relaxed text-gray-600 lg:text-base dark:text-gray-400" style={{ fontWeight: 400 }}>
                The pharmaceutical industry generates over $1.4 trillion annually by charging the highest prices the market will bear. We believe there is a better model: develop treatments at a fundamentally lower cost, price them for universal access, and let volume and velocity replace margin and monopoly. When you can develop a drug in 3 years instead of 15 and validate it computationally instead of through a decade of physical trials, the economics change. Our investors are not betting on price power. They are betting on the compounding value of a platform that gets faster, smarter, and more capable with every treatment it develops.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Separator */}
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800" />
        </div>

        {/* Reports & Letters */}
        <div className="mx-auto max-w-5xl px-5 pb-4 pt-12 lg:px-8 lg:pt-20">
          <h2 className="text-2xl tracking-tight text-gray-900 lg:text-4xl dark:text-gray-100" style={{ fontWeight: 500 }}>
            Reports &amp; Letters
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 lg:mt-4 lg:text-base dark:text-gray-400">
            Investor communications and strategic updates.
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl px-5 py-10 lg:px-8 lg:py-16">
          <FadeIn>
            <div className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100">
              2026
            </div>
            <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />
          </FadeIn>

          <FadeIn>
            <a href="/founding-letter.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 py-6 lg:flex-row lg:items-start lg:gap-8 lg:py-8">
              <div className="flex flex-row gap-3 lg:w-32 lg:shrink-0 lg:flex-col lg:gap-1">
                <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Investor Letter</span>
                <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">February 2026</span>
              </div>
              <div className="flex flex-1 flex-col gap-1.5 lg:gap-2">
                <h3 className="text-base text-gray-900 transition-colors group-hover:text-black lg:text-xl dark:text-gray-100 dark:group-hover:text-white" style={{ fontWeight: 500 }}>
                  Founding Letter to Investors
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700 lg:text-base dark:text-gray-400 dark:group-hover:text-gray-200">
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
        <div className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <div className="rounded-2xl bg-gray-50 p-6 lg:p-12 dark:bg-neutral-800">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
                <div>
                  <h3 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Investor Relations</h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500 lg:mt-4 lg:text-base dark:text-gray-400">
                    For inquiries regarding investment opportunities or shareholder matters, contact our investor relations team directly.
                  </p>
                </div>
                <a
                  href="mailto:ir@varl.net"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-xs text-gray-700 transition-all hover:border-gray-500 hover:text-black lg:mt-2 lg:px-6 lg:py-2.5 lg:text-sm dark:border-neutral-600 dark:text-gray-300 dark:hover:border-neutral-400 dark:hover:text-white"
                  style={{ fontWeight: 450 }}
                >
                  ir@varl.net
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

      </main>

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
