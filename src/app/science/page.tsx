"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import ScienceNav from "@/components/ScienceNav";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const NetworkGraph = dynamic(() => import("@/components/charts/NetworkGraph"), { ssr: false });
const SimulationMetrics = dynamic(() => import("@/components/charts/SimulationMetrics"), { ssr: false });
const WaveformChart = dynamic(() => import("@/components/charts/WaveformChart"), { ssr: false });
const MoleculeViewer = dynamic(() => import("@/components/charts/MoleculeViewer"), { ssr: false });
const DiscoveryTimeline = dynamic(() => import("@/components/charts/DiscoveryTimeline"), { ssr: false });
const HeatMap = dynamic(() => import("@/components/charts/HeatMap"), { ssr: false });
const GrowthChart = dynamic(() => import("@/components/charts/GrowthChart"), { ssr: false });
const EvolutionRadar = dynamic(() => import("@/components/charts/EvolutionRadar"), { ssr: false });

export default function SciencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <ScienceNav />

      <div className="relative h-[260px] w-full overflow-hidden lg:h-[620px]">
        <Image
          src="/solvay.webp"
          alt="Fifth Solvay Conference on Electrons and Photons, Brussels, 1927"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <span className="absolute bottom-2 left-3 text-[8px] text-white/60 lg:bottom-3 lg:left-4 lg:text-xs">
          Fifth Solvay Conference on Electrons and Photons, Brussels, 1927
        </span>
        <div className="absolute inset-0 flex items-center justify-center px-5">
          <h1 className="text-center text-3xl tracking-tight text-white drop-shadow-lg lg:text-7xl" style={{ fontWeight: 400 }}>
            Discover Our Science.
          </h1>
        </div>
      </div>

      <main className="flex-1">

        {/* Observe */}
        <section id="observe" className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-4 lg:gap-6">
            <FadeIn>
              <span className="text-xs tracking-widest text-gray-400 lg:text-sm" style={{ fontWeight: 500 }}>01</span>
              <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Observe
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Every solution begins with seeing what others miss. VARL is building the infrastructure to capture biological signals at the molecular level — gene expression patterns, protein folding behaviors, intercellular communication networks, metabolic flux rates — and transform them into structured, machine-readable data that traditional research methods would take years to compile.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                We don&apos;t wait for symptoms. We listen to what cells are already telling us. Every tissue, every organ, every microorganism emits signals — electrical, chemical, structural — that carry information about system health. Most of this data has been invisible to conventional science. Our early work is focused on making it visible, readable, and actionable.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                By mapping the language of living systems across genomic, proteomic, and metabolomic layers simultaneously, we are assembling comprehensive biological snapshots at a resolution that has not been achieved before. These observations become the raw material for computation, discovery, and ultimately, healing.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Our observation pipeline spans single-cell resolution imaging, high-throughput sequencing workflows, and continuous biosensor integration. Together, they are forming a living atlas of biological activity — one designed to update itself as organisms respond, adapt, and change.
              </p>
            </FadeIn>
          </div>

          <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 lg:mt-20 lg:grid-cols-3 lg:gap-8" stagger={0.1}>
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 lg:gap-3 lg:p-8 dark:bg-neutral-900">
              <h3 className="text-sm font-medium text-gray-900 lg:text-base dark:text-gray-100">Gene Expression Analysis</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Reading the transcriptional state of tissues at single-cell resolution to understand which biological programs are active, silent, or disrupted. Our models are being trained to profile millions of cells simultaneously, building expression atlases that reveal how disease begins at the genetic level — often decades before any clinical sign appears.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 lg:gap-3 lg:p-8 dark:bg-neutral-900">
              <h3 className="text-sm font-medium text-gray-900 lg:text-base dark:text-gray-100">Protein Interaction Mapping</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Charting how molecules communicate within and across cells to identify functional dependencies, signaling cascades, and failure points. We are developing interactome models that capture not just static connections, but dynamic relationships that shift under stress, treatment, or environmental change — building a living map of molecular behavior.</p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-6 lg:gap-3 lg:p-8 dark:bg-neutral-900">
              <h3 className="text-sm font-medium text-gray-900 lg:text-base dark:text-gray-100">Real-Time Biomarker Detection</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Continuous monitoring of biological indicators that signal the earliest stages of systemic change, long before clinical symptoms emerge. We are designing AI-powered biosensor arrays to track hundreds of molecular markers in parallel, detecting patterns that reveal disease trajectories, treatment responses, and recovery dynamics.</p>
            </div>
          </FadeInStagger>
        </section>

        {/* Compute */}
        <section id="compute" className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-4 lg:gap-6">
            <FadeIn>
              <span className="text-xs tracking-widest text-gray-400 lg:text-sm" style={{ fontWeight: 500 }}>02</span>
              <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Compute
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Observation without computation is just noise. VARL is building purpose-built AI architectures — deep learning models designed not for general tasks, but specifically for understanding the logic of living systems. The biological datasets we capture feed directly into these models, where patterns emerge that no human researcher could identify manually.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                At the core of our compute layer is the digital twin engine — a system designed to construct virtual representations of biological environments, from individual cells to entire organ systems. These simulations will run thousands of scenarios in parallel: how a tissue responds to a drug candidate, how a genetic mutation propagates through a signaling network, how a crop variety adapts under drought conditions.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                What would take traditional laboratories months or years to test, our computational platform is being engineered to resolve in hours. Early benchmarks are promising. Every simulation generates new hypotheses, refines existing models, and narrows the space of possibilities — turning biological complexity into tractable engineering problems.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                The compute layer is where intuition gives way to precision. We don&apos;t guess which pathways matter. We calculate it — with models being trained on billions of molecular interactions across species, conditions, and timescales.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} y={0}>
            <div className="mt-10 flex flex-col gap-0 overflow-hidden rounded-2xl lg:mt-24">
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                <div className="flex w-full flex-col justify-center gap-3 bg-white p-6 lg:w-1/2 lg:gap-4 lg:p-12 dark:bg-neutral-900">
                  <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Digital Twin Simulation</h3>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Constructing virtual biological environments designed to replicate real-world systems with molecular fidelity. Each twin will evolve dynamically — absorbing new data, adjusting parameters, and predicting outcomes across thousands of parallel scenarios that would be impossible to run in physical laboratories.</p>
                </div>
                <div className="h-[200px] w-full overflow-hidden bg-white lg:h-auto lg:w-1/2 dark:bg-neutral-800" style={{ minHeight: undefined }}>
                  <NetworkGraph />
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row lg:items-stretch">
                <div className="h-[200px] w-full overflow-hidden bg-white lg:h-auto lg:w-1/2 dark:bg-neutral-800" style={{ minHeight: undefined }}>
                  <SimulationMetrics />
                </div>
                <div className="flex w-full flex-col justify-center gap-3 bg-white p-6 lg:w-1/2 lg:gap-4 lg:p-12 dark:bg-neutral-900">
                  <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">AI-Driven Pathway Analysis</h3>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Deep learning models trained on molecular interaction data identify the signaling cascades, feedback loops, and regulatory circuits that drive disease and health. Rather than testing one hypothesis at a time, our models are designed to evaluate entire pathway networks simultaneously — revealing intervention points invisible to linear analysis.</p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                <div className="flex w-full flex-col justify-center gap-3 bg-white p-6 lg:w-1/2 lg:gap-4 lg:p-12 dark:bg-neutral-900">
                  <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Predictive Modeling at Scale</h3>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Running high-resolution simulations across molecular, cellular, and tissue scales to forecast how biological systems will respond to interventions before any physical experiment begins. Our models are being built to incorporate genetic variation, environmental factors, and temporal dynamics to produce predictions with clinical-grade confidence.</p>
                </div>
                <div className="h-[200px] w-full overflow-hidden bg-white lg:h-auto lg:w-1/2 dark:bg-neutral-800" style={{ minHeight: undefined }}>
                  <WaveformChart />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Discover */}
        <section id="discover" className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-4 lg:gap-6">
            <FadeIn>
              <span className="text-xs tracking-widest text-gray-400 lg:text-sm" style={{ fontWeight: 500 }}>03</span>
              <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Discover
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Computation narrows the space of possibilities. Discovery is what happens when AI finds the signal in that space — the unexpected pathway, the hidden interaction, the molecular lever that changes everything. This is where biology stops being a mystery and starts becoming an engineering discipline.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Our discovery engine is being designed to explore thousands of hypotheses simultaneously — testing, discarding, refining — until it converges on insights that would take human researchers decades to formulate. Each finding is cross-validated against our digital twin models, ensuring that what we find in silico has a clear path to real biological systems. Our early computational work has already surfaced promising molecular candidates that are now under active investigation.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                From identifying novel drug targets for autoimmune diseases to uncovering genetic circuits that govern crop resilience under climate stress — our research spans the full spectrum of biological complexity. We are mapping uncharted molecular territories the way cartographers once mapped continents: systematically, rigorously, and with the tools to go where no one has gone before.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="max-w-3xl text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Every finding feeds back into the system. Discoveries refine our models, improve our simulations, and sharpen our observation instruments — creating a compounding cycle of intelligence that accelerates with every iteration. What we discover today makes tomorrow&apos;s discoveries faster, deeper, and more precise.
              </p>
            </FadeIn>
          </div>

          {/* Full-width molecule viewer */}
          <FadeIn delay={0.1} y={0}>
            <div className="relative mt-10 overflow-hidden rounded-2xl bg-gray-100 lg:mt-20 dark:bg-neutral-800">
              <div className="flex flex-col lg:flex-row">
                <div className="flex w-full flex-col justify-center gap-3 p-6 lg:w-[340px] lg:shrink-0 lg:gap-5 lg:p-10">
                  <span className="text-[10px] tracking-widest text-blue-500/70 lg:text-xs dark:text-blue-400/70" style={{ fontWeight: 500 }}>STRUCTURAL BIOLOGY</span>
                  <h3 className="text-base text-gray-900 lg:text-xl dark:text-white" style={{ fontWeight: 500 }}>Hemoglobin (1A3N)</h3>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-white/50">
                    Understanding protein structure is foundational to everything we build. This is human hemoglobin — the molecule that carries oxygen to every cell in the body. Our platform analyzes structures like this at atomic resolution to identify binding sites, predict folding behavior, and design molecular interventions.
                  </p>
                  <div className="mt-1 flex flex-col gap-1.5 text-[10px] text-gray-400 lg:mt-2 lg:gap-2 lg:text-xs dark:text-white/30">
                    <div className="flex items-center justify-between">
                      <span>Chains</span>
                      <span className="text-gray-600 dark:text-white/50">4 (α₂β₂ tetramer)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Residues</span>
                      <span className="text-gray-600 dark:text-white/50">574</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Resolution</span>
                      <span className="text-gray-600 dark:text-white/50">1.80 Å</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Source</span>
                      <span className="text-gray-600 dark:text-white/50">RCSB PDB</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[250px] w-full bg-gray-950 lg:h-[400px] lg:flex-1 dark:bg-neutral-900">
                  <MoleculeViewer />
                  <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-white/10 px-2.5 py-1 backdrop-blur-sm lg:bottom-4 lg:right-4 lg:px-3 lg:py-1.5">
                    <span className="text-[10px] text-white/60 lg:text-xs">Interactive 3D — drag to rotate</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeInStagger className="mt-6 grid grid-cols-2 gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-6" stagger={0.08}>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 lg:p-6 dark:bg-neutral-900">
              <span className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Molecular</span>
              <span className="text-[10px] text-gray-500 lg:text-sm dark:text-gray-400">Resolution target for digital twins</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 lg:p-6 dark:bg-neutral-900">
              <span className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Early</span>
              <span className="text-[10px] text-gray-500 lg:text-sm dark:text-gray-400">Candidates under active investigation</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 lg:p-6 dark:bg-neutral-900">
              <span className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Multi-Scale</span>
              <span className="text-[10px] text-gray-500 lg:text-sm dark:text-gray-400">From proteins to organ systems</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-5 lg:p-6 dark:bg-neutral-900">
              <span className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Cross-Domain</span>
              <span className="text-[10px] text-gray-500 lg:text-sm dark:text-gray-400">Health and food from one platform</span>
            </div>
          </FadeInStagger>

          {/* Expression Profile + Discovery Timeline */}
          <FadeIn delay={0.1} y={0}>
            <div className="mt-6 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:gap-6">
              <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-gray-950 lg:w-3/5 dark:bg-neutral-800">
                <div className="px-5 pb-2 pt-4 lg:px-6 lg:pt-5">
                  <h3 className="text-xs text-white/80 lg:text-sm" style={{ fontWeight: 500 }}>Differential Expression Analysis</h3>
                  <p className="mt-1 text-[10px] leading-relaxed text-white/35 lg:text-xs">Gene expression profile across 20 patient samples — comparing healthy controls, tumor biopsies, and post-treatment remission.</p>
                </div>
                <div className="h-[200px] flex-1 lg:h-auto">
                  <HeatMap />
                </div>
              </div>
              <div className="h-[280px] w-full overflow-hidden rounded-2xl bg-white lg:h-auto lg:w-2/5 dark:bg-neutral-900">
                <DiscoveryTimeline />
              </div>
            </div>
          </FadeIn>

          {/* Deep dive cards */}
          <FadeInStagger className="mt-6 grid grid-cols-1 gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-6" stagger={0.1}>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 lg:gap-4 lg:p-10 dark:bg-neutral-900">
              <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Target Identification</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                Our AI is being trained to scan the entire known proteome and transcriptome to identify molecular targets with the highest therapeutic potential. By analyzing interaction networks, binding affinities, and downstream effects simultaneously, we aim to pinpoint targets that traditional screening methods would never surface. Initial results have already revealed candidates that are now in early-stage validation.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 lg:gap-4 lg:p-10 dark:bg-neutral-900">
              <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Mechanism Elucidation</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                Understanding what a molecule does is only the beginning. We are building models that map the complete causal chain — from initial molecular event through signaling cascades to tissue-level phenotype. Our goal is to reconstruct disease mechanisms with enough fidelity to predict not just what will happen, but why it happens, and where in the chain an intervention will be most effective.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 lg:gap-4 lg:p-10 dark:bg-neutral-900">
              <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Cross-Species Translation</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                Biology shares deep structural patterns across species. We are leveraging this by building cross-species computational models that translate findings between organisms — from model organisms to human systems, and from human health insights to agricultural applications. A discovery in plant immune response may illuminate human autoimmunity, and vice versa. Our platform is designed to make these connections visible and actionable.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-6 lg:gap-4 lg:p-10 dark:bg-neutral-900">
              <h3 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">Continuous Discovery Loop</h3>
              <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
                Discovery at VARL is not a one-time event — it is designed as a perpetual cycle. Every validated finding feeds back into our models, improving prediction accuracy, expanding our knowledge graph, and unlocking new research directions. As our dataset grows and our models evolve, the rate of discovery will accelerate exponentially. We are building a system that gets smarter with every experiment it runs.
              </p>
            </div>
          </FadeInStagger>
        </section>

        {/* Heal */}
        <section id="heal" className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-gray-400 lg:text-sm" style={{ fontWeight: 500 }}>04</span>
              <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:mt-4 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Heal
              </h2>
            </FadeIn>
          </div>

          <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-4 px-5 lg:mt-16 lg:flex-row lg:gap-16 lg:px-8">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                All of VARL&apos;s science converges on a single purpose: healing. Not healing as an abstract concept, but as a precise, engineered outcome — predictable, repeatable, and personalized to each patient&apos;s unique biology. Our platform is being designed to generate treatment candidates validated through millions of digital twin simulations before a single molecule enters a lab.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Drug targets will be selected with full knowledge of downstream effects. Dosage protocols optimized per-patient using AI models trained on population-scale genomic and metabolic data. This is what precision medicine was always meant to be — a fundamental shift from reactive to proactive healthcare. Our early computational models are already informing this direction.
              </p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-10 max-w-5xl px-5 lg:mt-24 lg:px-8">
            <FadeIn y={0}>
              <div className="flex flex-col overflow-hidden rounded-2xl lg:flex-row">
                <div className="flex w-full flex-col justify-between bg-gray-200 p-6 lg:w-1/2 lg:p-12 dark:bg-neutral-800">
                  <div>
                    <span className="text-[10px] tracking-widest text-gray-500 lg:text-xs dark:text-gray-400">THE CURRENT STATE</span>
                    <div className="mt-4 flex flex-col gap-4 lg:mt-6 lg:gap-6">
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-gray-400 lg:text-6xl dark:text-neutral-600">15</span>
                        <span className="ml-1 text-sm text-gray-400 lg:ml-2 lg:text-lg dark:text-neutral-500">years</span>
                      </div>
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-gray-400 lg:text-6xl dark:text-neutral-600">$2.6B</span>
                      </div>
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-gray-400 lg:text-6xl dark:text-neutral-600">4%</span>
                        <span className="ml-1 text-sm text-gray-400 lg:ml-2 lg:text-lg dark:text-neutral-500">success</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-between bg-gray-950 p-6 lg:w-1/2 lg:p-12 dark:bg-black">
                  <div>
                    <span className="text-[10px] tracking-widest text-blue-400 lg:text-xs">WHAT WE ARE BUILDING TOWARD</span>
                    <div className="mt-4 flex flex-col gap-4 lg:mt-6 lg:gap-6">
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-white lg:text-6xl">1–3</span>
                        <span className="ml-1 text-sm text-white/60 lg:ml-2 lg:text-lg">years</span>
                      </div>
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-white lg:text-6xl">&lt;$150M</span>
                      </div>
                      <div>
                        <span className="text-3xl font-semibold tracking-tight text-white lg:text-6xl">&gt;90%</span>
                        <span className="ml-1 text-sm text-white/60 lg:ml-2 lg:text-lg">target</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mx-auto mt-16 max-w-5xl px-5 lg:mt-32 lg:px-8">
            <FadeIn>
              <h3 className="text-xl tracking-tight text-gray-900 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Our Approach
              </h3>
            </FadeIn>

            <div className="mt-6 flex flex-col lg:mt-12">
              <FadeIn>
                <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                  <span className="text-xl font-medium text-gray-900 lg:w-48 lg:shrink-0 lg:text-2xl dark:text-gray-100">Personalized Drug Design</span>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Every patient is different at the molecular level. We are developing a platform to generate treatment candidates tailored to individual genetic profiles, metabolic states, and disease progression patterns. Our AI models will simulate how each candidate interacts with a patient&apos;s specific biology — optimizing for efficacy, minimizing side effects, and predicting long-term outcomes with unprecedented accuracy.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                  <span className="text-xl font-medium text-gray-900 lg:w-48 lg:shrink-0 lg:text-2xl dark:text-gray-100">Regenerative Therapies</span>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Beyond treating symptoms, we are working to design interventions that activate the body&apos;s own repair mechanisms. By identifying the molecular switches that control tissue regeneration, stem cell activation, and cellular reprogramming, our platform will create therapies that don&apos;t just slow disease — they reverse it. From neurodegeneration to organ failure, we are mapping the pathways back to health.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col gap-3 border-t border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                  <span className="text-xl font-medium text-gray-900 lg:w-48 lg:shrink-0 lg:text-2xl dark:text-gray-100">Preventive Intelligence</span>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    The greatest treatment is the one you never need. Our digital twin models are being designed to forecast disease trajectories years in advance — identifying risk factors, genetic predispositions, and environmental triggers before they converge into clinical disease. We are building the tools to turn prevention from a statistical exercise into a personalized, actionable protocol for every individual.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex flex-col gap-3 border-t border-b border-gray-200 py-6 lg:flex-row lg:gap-12 lg:py-10 dark:border-neutral-800">
                  <span className="text-xl font-medium text-gray-900 lg:w-48 lg:shrink-0 lg:text-2xl dark:text-gray-100">Agricultural Healing</span>
                  <p className="text-xs leading-relaxed text-gray-500 lg:text-base dark:text-gray-400">
                    Crops get sick too. We are applying the same precision framework to food systems — designing molecular interventions to repair damaged plant immune systems, restore soil microbiome balance, and create resilient varieties that can withstand climate stress. We treat the land the same way we treat the body: with intelligence, precision, and respect for the complexity of living systems.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Evolve */}
        <section id="evolve" className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <FadeIn>
            <span className="text-xs tracking-widest text-gray-400 lg:text-sm" style={{ fontWeight: 500 }}>05</span>
            <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:mt-4 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              Evolve
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-10 lg:text-xl dark:text-gray-400" style={{ fontWeight: 400 }}>
              Biology never stops changing. Diseases mutate, ecosystems shift, populations age, climates transform. A static system cannot keep pace with a living world. VARL is not a tool you use once — it is being built as a platform that learns, adapts, and accelerates with every cycle.
            </p>
          </FadeIn>

          {/* Growth Chart + Radar side by side */}
          <FadeIn delay={0.15} y={0}>
            <div className="mt-10 flex flex-col gap-4 lg:mt-20 lg:flex-row lg:gap-6">
              <div className="flex w-full flex-col gap-2 overflow-hidden rounded-2xl bg-white p-5 lg:w-3/5 lg:gap-3 lg:p-8 dark:bg-neutral-900">
                <span className="text-[10px] text-gray-400 lg:text-xs">Projected Discovery Velocity: VARL vs Traditional Research</span>
                <div className="h-[200px] lg:h-[300px]">
                  <GrowthChart />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 overflow-hidden rounded-2xl bg-white p-5 lg:w-2/5 lg:gap-3 lg:p-8 dark:bg-neutral-900">
                <span className="text-[10px] text-gray-400 lg:text-xs">Platform Design Targets</span>
                <div className="h-[200px] lg:h-[300px]">
                  <EvolutionRadar />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Two column text */}
          <div className="mt-10 flex flex-col gap-4 lg:mt-20 lg:flex-row lg:gap-16">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Every discovery VARL makes feeds back into the system. New data sharpens existing models. Validated hypotheses expand our knowledge graph. Failed experiments are just as valuable — they prune the solution space and prevent future researchers from walking the same dead ends. The platform is designed to remember everything, forever.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                As diseases evolve resistance to treatments, VARL is being built to evolve faster. Our models will anticipate mutation trajectories, pre-computing countermeasures for viral variants that don&apos;t yet exist. When a new pathogen emerges, the platform won&apos;t start from zero — it will draw on everything it has ever learned to generate response candidates within hours, not years.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                In agriculture, evolution means resilience. As climate patterns shift and new pests emerge, our platform will continuously update crop models, soil microbiome maps, and nutritional optimization protocols. Farmers won&apos;t just get a solution for today — they will get a system that stays ahead of tomorrow&apos;s challenges.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                This is the final piece: a compounding intelligence engine where the rate of progress is not linear but exponential. Every iteration makes the next one faster. Every answer opens better questions. The system won&apos;t just solve problems — it will become fundamentally better at solving them. That is what it means to evolve.
              </p>
            </FadeIn>
          </div>

          {/* Timeline: Past → Present → Future */}
          <FadeIn y={0}>
            <div className="mt-10 lg:mt-24">
              <div className="flex flex-col overflow-hidden rounded-2xl lg:flex-row">
                <div className="flex w-full flex-col gap-2 bg-gray-200 p-6 lg:w-1/3 lg:gap-3 lg:p-10 dark:bg-neutral-800">
                  <span className="text-[10px] tracking-widest text-gray-500 lg:text-xs dark:text-gray-400">YESTERDAY</span>
                  <span className="text-xl font-semibold text-gray-400 lg:text-3xl dark:text-neutral-500">Static Research</span>
                  <p className="text-xs leading-relaxed text-gray-400 lg:mt-2 lg:text-sm dark:text-neutral-500">Isolated experiments. Knowledge trapped in papers. Each project starts from scratch.</p>
                </div>
                <div className="flex w-full flex-col gap-2 bg-white p-6 lg:w-1/3 lg:gap-3 lg:p-10 dark:bg-neutral-900">
                  <span className="text-[10px] tracking-widest text-blue-500 lg:text-xs">TODAY</span>
                  <span className="text-xl font-semibold text-gray-900 lg:text-3xl dark:text-gray-100">Connected Intelligence</span>
                  <p className="text-xs leading-relaxed text-gray-500 lg:mt-2 lg:text-sm dark:text-gray-400">AI-integrated workflows. Shared models. Every experiment builds on the last.</p>
                </div>
                <div className="flex w-full flex-col gap-2 bg-gray-950 p-6 lg:w-1/3 lg:gap-3 lg:p-10 dark:bg-black">
                  <span className="text-[10px] tracking-widest text-green-400 lg:text-xs">TOMORROW</span>
                  <span className="text-xl font-semibold text-white lg:text-3xl">Autonomous Discovery</span>
                  <p className="text-xs leading-relaxed text-white/50 lg:mt-2 lg:text-sm">Self-improving systems. Predictive healing. Biology fully decoded and continuously optimized.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 text-center lg:mt-32">
              <p className="text-xl leading-snug tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 400 }}>
                Science that learns. Systems that heal.<br />A future that evolves with us.
              </p>
            </div>
          </FadeIn>
        </section>

      </main>

      {/* Cross Links */}
      <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-24">
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Link href="/health" className="group flex items-center justify-between rounded-2xl bg-gray-50 px-6 py-8 transition-colors hover:bg-gray-100 lg:px-10 lg:py-10 dark:bg-neutral-800 dark:hover:bg-neutral-700">
              <div>
                <span className="text-[10px] tracking-widest text-rose-600 lg:text-xs dark:text-rose-400" style={{ fontWeight: 500 }}>EXPLORE</span>
                <h3 className="mt-2 text-2xl tracking-tight lg:text-3xl" style={{ fontWeight: 500 }}>
                  <span className="bg-gradient-to-r from-rose-600 to-pink-400 bg-clip-text text-transparent">Health</span>
                </h3>
                <p className="mt-2 text-xs text-gray-500 lg:text-sm dark:text-gray-400">Digital twin medicine and early disease detection.</p>
              </div>
              <span className="text-2xl text-gray-300 transition-colors group-hover:text-rose-500 dark:text-gray-600 dark:group-hover:text-rose-400">&rarr;</span>
            </Link>
            <Link href="/food" className="group flex items-center justify-between rounded-2xl bg-gray-50 px-6 py-8 transition-colors hover:bg-gray-100 lg:px-10 lg:py-10 dark:bg-neutral-800 dark:hover:bg-neutral-700">
              <div>
                <span className="text-[10px] tracking-widest text-green-600 lg:text-xs dark:text-green-400" style={{ fontWeight: 500 }}>EXPLORE</span>
                <h3 className="mt-2 text-2xl tracking-tight lg:text-3xl" style={{ fontWeight: 500 }}>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">Food</span>
                </h3>
                <p className="mt-2 text-xs text-gray-500 lg:text-sm dark:text-gray-400">Computational agriculture and food system intelligence.</p>
              </div>
              <span className="text-2xl text-gray-300 transition-colors group-hover:text-green-500 dark:text-gray-600 dark:group-hover:text-green-400">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </section>

      <div className="relative h-[280px] w-full overflow-hidden lg:h-[600px]">
        <Image
          src="/science-hero.webp"
          alt="Close-up of blueberries representing VARL's connection to nature and biology"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <span className="absolute bottom-2 left-3 text-[8px] text-white/60 lg:bottom-3 lg:left-4 lg:text-xs">
          This image has no particular meaning. We just really love blueberries.
        </span>
      </div>

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
