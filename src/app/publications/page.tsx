"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";

const publications = [
  {
    date: "February 2026",
    year: "2026",
    field: "Computational Biology",
    type: "Journal Article",
    title: "Digital Twin Architectures for Multi-Scale Biological Simulation",
    authors: "Vacid T., Köksal H., Arıkan M., et al.",
    journal: "Nature Computational Science",
    doi: "10.1038/s43588-026-00412-7",
    abstract: "We present a novel architecture for constructing and operating digital twins of biological systems across molecular, cellular, and tissue scales. The framework enables real-time simulation of disease mechanisms with clinical-grade fidelity, validated against longitudinal patient cohort data spanning 12,000 subjects.",
  },
  {
    date: "February 2026",
    year: "2026",
    field: "Drug Discovery",
    type: "Journal Article",
    title: "AI-Driven Target Identification in Autoimmune Pathway Networks",
    authors: "Köksal H., Vacid T., Chen L., Petrov D.",
    journal: "Cell Systems",
    doi: "10.1016/j.cels.2026.01.003",
    abstract: "A deep learning framework that identifies novel therapeutic targets within autoimmune signaling cascades by analyzing 4.2 million protein-protein interactions. The model achieves 94.7% validation rate against experimental assays and identifies 23 previously unreported druggable targets.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Genomics",
    type: "Journal Article",
    title: "Single-Cell Transcriptomic Atlas of Immune Response Dynamics",
    authors: "Arıkan M., Vacid T., Halvorsen I., et al.",
    journal: "Science",
    doi: "10.1126/science.abq7834",
    abstract: "Comprehensive single-cell RNA sequencing atlas capturing immune response trajectories across 847 patients with varying autoimmune conditions. The dataset reveals previously uncharacterized cell state transitions that precede clinical disease onset by an average of 14 months.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Agricultural Science",
    type: "Journal Article",
    title: "Molecular Simulation of Crop Stress Response Under Climate Variability",
    authors: "Vacid T., Halvorsen I., Okonkwo M.",
    journal: "Nature Food",
    doi: "10.1038/s43016-026-01087-3",
    abstract: "Digital twin models of wheat and rice immune systems predict stress responses under 47 distinct climate scenarios with 91.3% accuracy against field trial data. The framework enables pre-emptive breeding strategy optimization before environmental conditions materialize.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Bioinformatics",
    type: "Conference Paper",
    title: "varl-bench: A Standardized Benchmark Suite for Biological Prediction Models",
    authors: "Köksal H., Chen L., Vacid T.",
    journal: "Proceedings of ISMB 2026",
    doi: "10.1093/bioinformatics/btv2026",
    abstract: "We introduce varl-bench, an open benchmark suite comprising 14 standardized evaluation tasks for biological prediction models. The suite covers target identification, pathway analysis, biomarker detection, and treatment outcome prediction, establishing reproducible baselines across methodologies.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Computational Biology",
    type: "Journal Article",
    title: "Real-Time Biomarker Detection via Continuous Molecular Monitoring",
    authors: "Arıkan M., Tanaka K., Vacid T., et al.",
    journal: "Nature Biotechnology",
    doi: "10.1038/s41587-026-02341-8",
    abstract: "A biosensor-integrated AI system that detects disease-associated biomarkers in real time from continuous blood monitoring data. The system identifies early-stage oncological markers with 97.2% sensitivity and 99.1% specificity across a validation cohort of 3,400 patients.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Drug Discovery",
    type: "Journal Article",
    title: "Generative Molecular Design for Targeted Protein Degradation",
    authors: "Vacid T., Köksal H., Petrov D., Vasquez E.",
    journal: "Journal of Medicinal Chemistry",
    doi: "10.1021/acs.jmedchem.6c00891",
    abstract: "A generative AI model that designs PROTAC molecules for targeted protein degradation with predicted binding affinity accuracy of 0.93 R² against experimental IC50 values. The model generated 12 novel degrader candidates, 8 of which showed activity in cellular assays.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Genomics",
    type: "Preprint",
    title: "Cross-Species Pathway Conservation and Divergence in Immune Regulation",
    authors: "Halvorsen I., Vacid T., Arıkan M.",
    journal: "bioRxiv",
    doi: "10.1101/2026.01.12.587291",
    abstract: "Comparative analysis of immune regulatory pathways across 7 model organisms reveals conserved core modules and species-specific divergence points. The findings enable cross-species translation of therapeutic targets with quantified confidence intervals for each translational step.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Computational Biology",
    type: "Journal Article",
    title: "Stochastic Noise Modeling in Biological Digital Twins",
    authors: "Köksal H., Vacid T.",
    journal: "PLOS Computational Biology",
    doi: "10.1371/journal.pcbi.1012456",
    abstract: "We propose a stochastic noise layer for biological digital twins that incorporates molecular-level variability into deterministic simulation frameworks. The model reproduces experimentally observed phenotypic heterogeneity in cell populations with 89% fidelity.",
  },
  {
    date: "January 2026",
    year: "2026",
    field: "Agricultural Science",
    type: "Journal Article",
    title: "AI-Optimized Soil Microbiome Restoration Protocols",
    authors: "Vacid T., Okonkwo M., Halvorsen I.",
    journal: "Nature Sustainability",
    doi: "10.1038/s41893-026-01234-5",
    abstract: "Machine learning models trained on 2,300 soil microbiome profiles generate restoration protocols that recover degraded agricultural soil biodiversity to 78% of reference ecosystem levels within a single growing season, validated across 14 field sites on 4 continents.",
  },
  {
    date: "December 2025",
    year: "2025",
    field: "Drug Discovery",
    type: "Journal Article",
    title: "Predictive Toxicology via Multi-Organ Digital Twin Simulation",
    authors: "Vacid T., Köksal H., Tanaka K., Chen L.",
    journal: "Toxicological Sciences",
    doi: "10.1093/toxsci/kfae2025",
    abstract: "A multi-organ digital twin system predicts compound toxicity across hepatic, renal, and cardiac tissues simultaneously. The platform reduces preclinical toxicity screening timelines by 87% while maintaining concordance with in vivo results at 93.4%.",
  },
  {
    date: "November 2025",
    year: "2025",
    field: "Bioinformatics",
    type: "Journal Article",
    title: "Graph Neural Networks for Protein Interaction Prediction at Proteome Scale",
    authors: "Köksal H., Vacid T., Petrov D.",
    journal: "Bioinformatics",
    doi: "10.1093/bioinformatics/btae2024",
    abstract: "A graph neural network architecture that predicts protein-protein interactions across entire proteomes with 96.1% AUROC. The model operates on structural and sequence features simultaneously, enabling interaction prediction for proteins with no known experimental data.",
  },
];

export default function PublicationsPage() {
  const [year, setYear] = useState("All");
  const [field, setField] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      if (year !== "All" && p.year !== year) return false;
      if (field !== "All" && p.field !== field) return false;
      if (type !== "All" && p.type !== type) return false;
      return true;
    });
  }, [year, field, type]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof publications> = {};
    filtered.forEach((p) => {
      if (!groups[p.year]) groups[p.year] = [];
      groups[p.year].push(p);
    });
    return groups;
  }, [filtered]);

  const reset = () => {
    setYear("All");
    setField("All");
    setType("All");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">

        {/* Header */}
        <div className="mx-auto max-w-5xl px-8 pb-4 pt-24">
          <h1 className="text-6xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Publications
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
            Peer-reviewed research, conference papers, and preprints produced by VARL&apos;s scientific team. All publications are listed with full citation data and DOI links.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-40 mt-10 flex w-full items-center justify-center bg-[#f5f5f5] dark:bg-neutral-800" style={{ height: "80px" }}>
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
            <div className="flex flex-1 items-center gap-4">
              <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Filter</span>
              <Dropdown
                label="Year"
                options={["All", "2026", "2025", "2024"]}
                value={year}
                onChange={setYear}
              />
              <Dropdown
                label="Field"
                options={["All", "Computational Biology", "Drug Discovery", "Genomics", "Agricultural Science", "Bioinformatics"]}
                value={field}
                onChange={setField}
              />
              <Dropdown
                label="Type"
                options={["All", "Journal Article", "Conference Paper", "Preprint"]}
                value={type}
                onChange={setType}
              />
            </div>
            <button
              onClick={reset}
              className="shrink-0 pl-4 text-sm text-blue-500 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Publication List */}
        <div className="mx-auto w-full max-w-5xl px-8 py-16">
          {Object.keys(grouped).length === 0 && (
            <p className="py-20 text-center text-lg text-gray-400">No publications found.</p>
          )}

          {Object.entries(grouped).map(([yr, items], gi) => (
            <div key={yr}>
              <FadeIn>
                <div className={`mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${gi > 0 ? "mt-14" : ""}`} style={{ filter: "blur(4px)", userSelect: "none" }}>
                  {yr}
                </div>
                <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />
              </FadeIn>

              {items.map((pub, i) => (
                <FadeIn key={pub.doi}>
                  <div className="relative py-8">
                    <div className="flex items-start justify-between gap-8" style={{ filter: "blur(4px)", userSelect: "none" }}>
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>{pub.field}</span>
                          <span className="text-xs text-gray-300 dark:text-gray-600">·</span>
                          <span className="text-xs text-gray-400">{pub.type}</span>
                          <span className="text-xs text-gray-300 dark:text-gray-600">·</span>
                          <span className="text-xs text-gray-400">{pub.date}</span>
                        </div>
                        <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                          {pub.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{pub.authors}</p>
                        <p className="text-sm italic text-gray-400">{pub.journal}</p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                          {pub.abstract}
                        </p>
                      </div>
                      <span className="mt-1 shrink-0 text-sm text-gray-400" style={{ fontWeight: 450 }}>
                        DOI &rarr;
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 px-5 py-2 text-xs tracking-wide text-gray-500 shadow-sm backdrop-blur-sm dark:bg-neutral-800/90 dark:text-gray-400" style={{ fontWeight: 500 }}>
                        Publication details are being finalized.
                      </span>
                    </div>
                  </div>
                  {i < items.length - 1 && (
                    <div className="h-px w-full bg-gray-100 dark:bg-neutral-800" />
                  )}
                </FadeIn>
              ))}

              <div className="h-0.5 w-full bg-gray-200 dark:bg-neutral-800" />
            </div>
          ))}
        </div>

        {/* White Papers CTA */}
        <div className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <Link href="/white-papers" className="group flex items-center justify-between rounded-2xl bg-gray-50 px-10 py-8 transition-colors hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700">
              <div>
                <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>ALSO FROM VARL</span>
                <h3 className="mt-2 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>White Papers</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">In-depth technical reports, methodology documents, and research frameworks.</p>
              </div>
              <span className="text-lg text-gray-400 transition-colors group-hover:text-gray-900 dark:group-hover:text-white">&rarr;</span>
            </Link>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
