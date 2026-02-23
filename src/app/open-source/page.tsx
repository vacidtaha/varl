"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";

export default function OpenSourcePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/open.jpg"
          alt="Open Source"
          className="h-[620px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-7xl tracking-tight text-white drop-shadow-lg"
            style={{ fontWeight: 400 }}
          >
            Open Source at VARL
          </h1>
        </div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">Earth</span>
      </div>

      <main className="flex-1">

        {/* Philosophy */}
        <div className="mx-auto max-w-4xl px-8 py-32 text-center">
          <FadeIn>
            <p className="text-2xl leading-relaxed tracking-tight text-gray-800 dark:text-gray-200" style={{ fontWeight: 400 }}>
              We believe science advances fastest when knowledge flows freely. VARL is committed to sharing the tools, formats, and research outputs that can safely accelerate biological discovery across the global scientific community.
            </p>
          </FadeIn>
        </div>

        {/* What we're building */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              What We&apos;re Building
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              A selection of our foundational tools and libraries are being prepared for open-source release. These include biological data preprocessing pipelines, molecular visualization components, standardized dataset formats, and reference implementations of our simulation protocols.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Development is active. Some repositories are already in private beta with select research partners. Public releases will be announced through our Latest page and distributed via GitHub under permissive licenses where possible, and restricted licenses where necessary.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-16 grid grid-cols-3 gap-6" stagger={0.1}>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span className="text-xs text-gray-400" style={{ fontWeight: 500 }}>IN DEVELOPMENT</span>
              </div>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>varl-preprocess</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Standardized pipelines for multi-omics data cleaning, normalization, and feature extraction. Designed to transform raw biological data into simulation-ready formats.</p>
              <span className="mt-auto font-mono text-xs text-gray-300 dark:text-gray-600">Python · Apache 2.0</span>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span className="text-xs text-gray-400" style={{ fontWeight: 500 }}>IN DEVELOPMENT</span>
              </div>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>varl-viz</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Interactive molecular and network visualization components for web applications. Built on WebGL with React bindings for embedding biological data visualizations into any interface.</p>
              <span className="mt-auto font-mono text-xs text-gray-300 dark:text-gray-600">TypeScript · MIT</span>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-neutral-600"></span>
                <span className="text-xs text-gray-400" style={{ fontWeight: 500 }}>PLANNED</span>
              </div>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>varl-schemas</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Open data format specifications for digital twin models, simulation outputs, and biomarker datasets. Designed for interoperability across platforms and programming languages.</p>
              <span className="mt-auto font-mono text-xs text-gray-300 dark:text-gray-600">JSON Schema · CC BY 4.0</span>
            </div>
          </FadeInStagger>
        </section>

        {/* The Hard Truth */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Why Our Core Platform Is Not Open Source
            </h2>
          </FadeIn>

          <div className="mt-10 flex gap-16">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                We operate at the intersection of artificial intelligence and biological systems. This is not social media. This is not e-commerce. The tools we build can simulate disease mechanisms, design molecular interventions, and predict how living systems will respond to chemical compounds. In the wrong hands, these capabilities can be weaponized.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                A digital twin engine capable of modeling pathogen behavior can also be used to engineer more dangerous pathogens. A drug discovery platform can be repurposed to design toxins. A biomarker detection system can be turned into a surveillance tool. These are not hypothetical risks. They are documented concerns raised by biosecurity researchers, defense agencies, and the scientific community at large.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                We have an absolute responsibility to ensure that our most powerful technologies are not accessible without verification, oversight, and accountability. Open-sourcing the core VARL platform would be irresponsible. It would place capabilities of enormous consequence into an uncontrolled environment with no mechanism for preventing misuse.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Maintaining control over our most powerful tools is a prerequisite for deploying them responsibly. The open-source community will receive everything we can safely share. The rest stays behind access controls, audit logs, and institutional review.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* How to access */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn y={50}>
            <div className="rounded-2xl bg-gray-50 p-12 dark:bg-neutral-900">
              <h3 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Controlled Access via API
              </h3>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Researchers, institutions, and governments that require access to VARL&apos;s full capabilities can apply through our API Access Request process. Every application is reviewed individually by our governance team. We evaluate the applicant&apos;s identity, institutional affiliation, intended use case, data handling practices, and compliance posture before granting any level of access.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Approved applicants receive scoped API keys with permissions tailored to their specific needs. All usage is logged, auditable, and subject to rate limits. Access can be revoked at any time if our terms are violated or if we determine that continued access poses a risk.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                This process is intentionally rigorous. It is designed to ensure that access is granted only to those whose work serves the advancement of biological understanding.
              </p>
              <a
                href="/api-access"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-sm text-gray-700 transition-all hover:border-gray-500 hover:text-black dark:border-neutral-700 dark:text-gray-300 dark:hover:border-neutral-500 dark:hover:text-white"
                style={{ fontWeight: 450 }}
              >
                Request API Access &rarr;
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Our commitment */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Our Commitment
            </h2>
          </FadeIn>

          <div className="mt-16 flex flex-col">
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Publish<br />Research</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Every major scientific finding produced by VARL is published in peer-reviewed journals. Our methodologies, validation protocols, and benchmark results are made publicly available. We believe in open science even when we cannot offer open code. The knowledge we generate belongs to the scientific record.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Share<br />Tooling</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Every utility, library, and data format that can be safely open-sourced will be. We actively maintain open repositories and welcome community contributions. Our goal is to give the research community the best possible infrastructure for biological computation, within the boundaries of what is safe to release.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Protect<br />Responsibly</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We will never use &ldquo;safety&rdquo; as an excuse to hoard technology for competitive advantage. Every restriction we place on access is driven by genuine risk assessment, not market positioning. We submit our access policies to independent review and publish annual transparency reports documenting every access decision we make.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-b border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Expand<br />Access</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  As governance frameworks mature and international biosecurity standards evolve, we intend to progressively open more of our platform. The goal is not permanent restriction. It is responsible, phased release — expanding access as the world builds the institutional capacity to handle these tools safely. We are working toward a future where more is open, not less.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Closing */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-8 pb-32 text-center">
            <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
              The future of science depends on shared knowledge.<br />We intend to contribute to that future, carefully.
            </p>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
