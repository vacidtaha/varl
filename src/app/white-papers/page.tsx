"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";

const papers = [
  { id: 1, title: "Digital Twin Architectures for Biological Systems", abstract: "A comprehensive framework for constructing high-fidelity virtual representations of cellular and organ-level biological environments using AI-driven simulation engines.", date: "January 2026", pages: 42, journal: "Nature Computational Science" },
  { id: 2, title: "AI-Integrated Drug Discovery: From Molecule to Treatment in Under 3 Years", abstract: "How VARL's computational pipeline compresses traditional drug development timelines by replacing sequential laboratory testing with parallel digital twin simulations.", date: "December 2025", pages: 38, journal: "Cell Reports Methods" },
  { id: 3, title: "Protein Interaction Networks as Computational Graphs", abstract: "Mapping the human interactome as a dynamic graph structure enables real-time pathway analysis and reveals intervention points invisible to traditional methods.", date: "November 2025", pages: 31, journal: "Science Advances" },
  { id: 4, title: "Precision Agriculture Through Molecular Simulation", abstract: "Applying digital twin technology to crop systems: predicting stress responses, optimizing nutrient uptake, and designing climate-resilient varieties at the molecular level.", date: "October 2025", pages: 36, journal: "Nature Food" },
  { id: 5, title: "Continuous Biomarker Monitoring with AI-Powered Sensor Arrays", abstract: "A new paradigm for early disease detection: tracking hundreds of molecular markers simultaneously to identify disease trajectories before clinical symptoms emerge.", date: "September 2025", pages: 29, journal: "The Lancet Digital Health" },
  { id: 6, title: "The Compounding Intelligence Model: Why Discovery Accelerates Exponentially", abstract: "Every experiment VARL runs makes the next one faster. This paper formalizes the feedback architecture that turns biological research into a self-improving system.", date: "August 2025", pages: 24, journal: "Nature Machine Intelligence" },
  { id: 7, title: "Lipid Nanoparticle Optimization via Reinforcement Learning", abstract: "Training RL agents to design lipid nanoparticle formulations that maximize cellular uptake while minimizing off-target effects, achieving 4x improvement over conventional screening.", date: "July 2025", pages: 33, journal: "ACS Nano" },
  { id: 8, title: "Cross-Species Immune Response Modeling", abstract: "Building transferable immune system models across mammals to accelerate vaccine development and predict autoimmune cascade failures before they manifest clinically.", date: "June 2025", pages: 41, journal: "Nature Immunology" },
  { id: 9, title: "Soil Microbiome Digital Twins for Regenerative Agriculture", abstract: "Simulating the complex microbial ecosystems beneath our feet to predict soil health trajectories and design targeted interventions for degraded farmland.", date: "May 2025", pages: 37, journal: "Nature Sustainability" },
  { id: 10, title: "Gene Regulatory Network Inference at Single-Cell Resolution", abstract: "Reconstructing the complete regulatory wiring of individual cells using sparse transcriptomic data and graph neural networks, enabling unprecedented precision in gene therapy design.", date: "April 2025", pages: 45, journal: "Cell Systems" },
  { id: 11, title: "Predictive Toxicology Without Animal Testing", abstract: "Replacing in-vivo toxicity studies with digital twin simulations that predict adverse effects across organ systems with 96% concordance to clinical outcomes.", date: "March 2025", pages: 28, journal: "Nature Methods" },
  { id: 12, title: "Metabolic Flux Analysis in Real-Time Using Biosensor Networks", abstract: "Continuous monitoring of metabolic pathways through implantable biosensor arrays connected to cloud-based AI models for instant metabolic state classification.", date: "February 2025", pages: 35, journal: "Nature Biotechnology" },
  { id: 13, title: "Autonomous Hypothesis Generation in Biological Research", abstract: "How VARL's discovery engine formulates, tests, and ranks novel biological hypotheses without human input, achieving a 12x increase in validated discoveries per quarter.", date: "January 2025", pages: 30, journal: "Science" },
  { id: 14, title: "Epigenetic Clock Calibration for Personalized Health Forecasting", abstract: "Using methylation patterns as biological timekeepers to predict individual disease risk decades in advance, enabling truly preventive medicine at population scale.", date: "December 2024", pages: 39, journal: "Cell" },
];

const PER_PAGE = 8;

export default function WhitePapersPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(papers.length / PER_PAGE);
  const visible = papers.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const changePage = (p: number) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setPage(p);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <div className="relative w-full overflow-hidden">
        <img
          src="/white-hero.webp"
          alt=""
          className="h-[620px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">
          Yes, we&apos;re aware we put a white bear on the White Papers page.
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-7xl tracking-tight text-white drop-shadow-lg" style={{ fontWeight: 400 }}>
            White Papers
          </h2>
        </div>
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-8 py-24">
          <FadeIn>
            <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              Our published research and technical documentation.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-2 gap-8">
            {visible.map((paper) => (
              <div
                key={paper.id}
                className="relative flex aspect-[1/1.414] flex-col overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-800"
              >
                <div className="flex flex-1 items-start p-10" style={{ filter: "blur(4px)", userSelect: "none" }}>
                  <h3 className="max-w-sm text-4xl leading-snug tracking-tight text-gray-700 dark:text-gray-200" style={{ fontWeight: 600 }}>
                    {paper.title}
                  </h3>
                </div>

                <div className="flex h-[180px] flex-col gap-3 bg-gray-50 px-10 py-6 dark:bg-neutral-900" style={{ filter: "blur(4px)", userSelect: "none" }}>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {paper.abstract}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-gray-400 dark:text-neutral-500">
                    <span className="italic">{paper.journal}</span>
                    <div className="flex items-center gap-3">
                      <span>VARL</span>
                      <span>·</span>
                      <span>{paper.date}</span>
                      <span>·</span>
                      <span>{paper.pages} pages</span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-full bg-white/90 px-5 py-2 text-xs tracking-wide text-gray-500 shadow-sm backdrop-blur-sm dark:bg-neutral-800/90 dark:text-gray-400" style={{ fontWeight: 500 }}>
                    Finalizing for publication.
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <FadeIn>
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                onClick={() => changePage(Math.max(1, page - 1))}
                disabled={page === 1}
                className="rounded-full bg-gray-100 px-5 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => changePage(p)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors ${
                    page === p
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => changePage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                className="rounded-full bg-gray-100 px-5 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-gray-100 dark:bg-neutral-800 dark:text-gray-400 dark:hover:bg-neutral-700"
              >
                Next
              </button>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
