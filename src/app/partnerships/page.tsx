"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Sticky Nav Strip */}
      <div className="sticky top-0 z-40 flex w-full items-center bg-white/60 backdrop-blur-xl dark:bg-neutral-900/60" style={{ height: "70px" }}>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 lg:px-8">
          <span className="text-base tracking-tight text-gray-900 lg:text-lg dark:text-gray-100" style={{ fontWeight: 600 }}>
            Partnerships
          </span>
          <div className="flex items-center gap-5 lg:gap-8">
            <Link href="/about" className="text-xs text-gray-400 transition-colors hover:text-gray-900 lg:text-sm dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              About
            </Link>
            <Link href="/investors" className="text-xs text-gray-400 transition-colors hover:text-gray-900 lg:text-sm dark:text-gray-500 dark:hover:text-white" style={{ fontWeight: 400 }}>
              Investors
            </Link>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden lg:h-screen">
        <Image
          src="/partnership.webp"
          alt="Partnership"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-5 lg:flex-row lg:gap-3 lg:px-0">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={112}
            height={112}
            className="h-14 w-auto brightness-0 invert drop-shadow-lg lg:h-28"
          />
          <h1
            className="text-center text-3xl tracking-tight text-white drop-shadow-lg lg:text-7xl"
            style={{ fontWeight: 400 }}
          >
            Partnership Program
          </h1>
        </div>
      </div>

      <main className="flex-1">

        {/* Intro */}
        <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-8 lg:py-32">
          <FadeIn>
            <p className="text-base leading-relaxed tracking-tight text-gray-800 lg:text-2xl dark:text-gray-200" style={{ fontWeight: 400 }}>
              Biology is too complex and too important for any one organization to decode alone. But not every organization deserves a seat at this table. VARL partners exclusively with institutions whose mission, ethics, and scientific rigor are fully aligned with ours. We do not compromise on who we work with — because compromising on partners means compromising on outcomes.
            </p>
          </FadeIn>
        </div>

        {/* Founder quote */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-5 pb-16 text-center lg:px-8 lg:pb-32">
            <p className="text-xl leading-snug tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 400 }}>
              &ldquo;Saving the World Is a Cliché.<br />Guess We Love Clichés.&rdquo;
            </p>
            <span className="mt-4 inline-block text-xs text-gray-400 lg:mt-6 lg:text-sm">— Taha Vacid, Co-Founder</span>
          </div>
        </FadeIn>

        {/* Selection Philosophy */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              Who We Work With
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL conducts a rigorous evaluation process for every potential partnership. Each collaboration is assessed against our core mission, our scientific standards, and our long-term strategic vision. Organizations that do not meet these criteria at every level of review are respectfully declined, regardless of the scale of the opportunity presented.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-4 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              We seek partners who recognize that biological systems demand the highest standard of care, integrity, and intellectual commitment. Institutions whose primary motivation is short-term financial return do not belong in this program. Those whose work is driven by measurable impact on human health, disease resolution, and the advancement of biological understanding are encouraged to apply.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-4 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              Our selectivity is not a limitation. It is what ensures that every partnership VARL enters produces science of the highest caliber, maintains the trust of patients and communities, and contributes to a body of work that will stand the test of time. We will not dilute this standard for any reason.
            </p>
          </FadeIn>
        </section>

        {/* Partnership Types */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              How We Partner
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              Every partnership is structured around a shared objective and a shared standard. We don&apos;t offer one-size-fits-all programs — we build collaborations tailored to the problem, the timeline, and the capabilities each side brings. But we never bend the mission to fit the deal.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-col lg:mt-20">
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Research Institutions</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Universities, national labs, and independent research centers that demonstrate rigorous methodology and genuine commitment to advancing biological knowledge. We co-develop research programs, co-author publications, and jointly pursue funding. Your researchers bring domain expertise; our platform accelerates discovery from years to months. All intellectual property is jointly owned — but only when the science is conducted to our shared standard.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Clinical Partners</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Hospitals and healthcare systems that place patient outcomes above institutional politics. We integrate VARL&apos;s predictive models into care pathways — from personalized treatment design to real-time biomarker monitoring. We handle the computational complexity; clinicians focus on patients. Partners who see patients as data sources rather than people are not welcome in this program.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Industry Collaborations</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  Pharmaceutical companies, biotech firms, and agricultural enterprises that share our belief in transparent, responsible science. We compress R&amp;D timelines and reduce failure rates through digital twin simulation and AI-driven target discovery. We work under flexible models — but every model includes non-negotiable clauses on data ethics, publication rights, and patient safety. Commercial pressure never overrides scientific process.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-3 border-t border-b border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                <span className="text-xl font-medium text-gray-900 lg:w-56 lg:shrink-0 lg:text-2xl dark:text-gray-100">Government &amp; Policy</span>
                <p className="text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                  National health agencies, agricultural departments, and science ministries committed to sovereign biological intelligence. We deploy on-premise infrastructure, train local teams, and adapt models to regional needs. Data sovereignty is absolute — government data stays where governments decide. We do not partner with regimes that weaponize biological data or suppress scientific findings.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Partnership Principles */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              Our Principles
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              These are not aspirations. They are the non-negotiable foundations of every partnership we enter. Violate any one of them, and the partnership ends. No exceptions.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-col gap-10 lg:mt-20 lg:gap-20">
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">01</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Science First, Always</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Commercial interest never overrides scientific integrity. If the data says a hypothesis is wrong, we say it&apos;s wrong — regardless of how much is invested. We publish negative results. We share failures openly. Science that hides inconvenient truths is not science at all. Partners who pressure us to bury findings will find themselves without a partner.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">02</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Radical Transparency</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Partners see everything. Every model parameter, every simulation log, every decision point. There are no black boxes. Our AI systems are interpretable by design, and every prediction comes with full explainability metadata. Trust is not built on promises — it is built on access. We expect the same openness in return.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">03</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Data Sovereignty</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Your data is yours. Period. We do not aggregate partner data across collaborations without explicit consent. We do not train general-purpose models on proprietary datasets. Every data access agreement is written in plain language, and partners retain the right to delete their data from our systems at any time with immediate effect.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">04</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Mission Alignment</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Every partner must share our fundamental belief: that biological systems can be understood, that disease is solvable, and that this work must serve humanity — not exploit it. If your goals diverge from ours at any point during the collaboration, we will end it. We would rather lose a deal than lose our direction.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">05</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Speed Without Shortcuts</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    We move fast because our tools allow it, not because we skip steps. Every simulation is validated. Every prediction is cross-checked. Every result is reproducible. Speed is the natural consequence of better infrastructure — not the product of compromised methodology. We will never rush a result to meet a deadline at the expense of accuracy. Neither should you.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-5 lg:gap-20">
                <span className="shrink-0 text-5xl font-semibold text-gray-200 lg:text-8xl dark:text-neutral-800">06</span>
                <div className="flex flex-col gap-2 pt-1 lg:gap-4 lg:pt-4">
                  <h4 className="text-xl text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>Long-Term Commitment</h4>
                  <p className="max-w-2xl text-sm leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    We don&apos;t do one-off projects. Every partnership is designed with the intention to grow — from a pilot into a program, from a program into a strategic alliance. We invest in relationships because biology is a long game, and the most important discoveries come from sustained, deep collaboration over years, not months. If you&apos;re looking for a quick win, look elsewhere.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="mx-auto max-w-5xl px-5 pb-16 text-center lg:px-8 lg:pb-32">
            <div className="rounded-2xl bg-gray-50 px-6 py-12 lg:px-12 lg:py-16 dark:bg-neutral-800">
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-[10px] tracking-widest text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>
                OPEN
              </span>
              <h2 className="mt-4 text-2xl tracking-tight text-gray-900 lg:text-4xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Partner Applications Open
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                We are currently accepting partnership applications from research institutions, clinical partners, and industry collaborators whose mission aligns with ours.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-sm text-gray-700 transition-all hover:border-gray-500 hover:text-black lg:mt-10 lg:px-8 lg:py-3 lg:text-base dark:border-neutral-700 dark:text-gray-300 dark:hover:border-neutral-500 dark:hover:text-white"
                style={{ fontWeight: 450 }}
              >
                Start a Conversation
              </Link>
            </div>
          </section>
        </FadeIn>

      </main>

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
