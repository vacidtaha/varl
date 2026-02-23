"use client";

import Header from "@/components/Header";
import ScienceNav from "@/components/ScienceNav";
import Footer from "@/components/Footer";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import dynamic from "next/dynamic";

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

      <div className="relative w-full overflow-hidden">
        <img
          src="/solvay.jpg"
          alt=""
          className="h-[620px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">
          Fifth Solvay Conference on Electrons and Photons, Brussels, 1927
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-7xl tracking-tight text-white drop-shadow-lg" style={{ fontWeight: 400 }}>
            Discover Our Science.
          </h2>
        </div>
      </div>

      <main className="flex-1">

        {/* Observe */}
        <section id="observe" className="mx-auto max-w-5xl px-8 py-32">
          <div className="flex items-start justify-between gap-20">
            <div className="flex flex-col gap-6">
              <FadeIn>
                <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>01</span>
                <h2 className="mt-2 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                  Observe
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Every solution begins with seeing what others miss. VARL captures biological signals at the molecular level — gene expression patterns, protein folding behaviors, intercellular communication networks, metabolic flux rates — and transforms them into structured, machine-readable data that traditional research methods would take years to compile.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We don&apos;t wait for symptoms. We listen to what cells are already telling us. Every tissue, every organ, every microorganism emits signals — electrical, chemical, structural — that carry information about system health. Most of this data has been invisible to conventional science. VARL makes it visible.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  By mapping the language of living systems in real time — across genomic, proteomic, and metabolomic layers simultaneously — we construct the most comprehensive biological snapshots ever assembled. These observations become the raw material for computation, discovery, and ultimately, healing.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Our observation infrastructure spans single-cell resolution imaging, high-throughput sequencing pipelines, and continuous biosensor networks. Together, they form a living atlas of biological activity — one that updates itself as organisms respond, adapt, and change.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} className="flex shrink-0 flex-col gap-4">
              <div className="h-64 w-80 rounded-2xl bg-gray-200 dark:bg-neutral-800"></div>
              <p className="text-xs text-gray-400">Molecular signal mapping at cellular resolution.</p>
            </FadeIn>
          </div>

          <FadeInStagger className="mt-20 grid grid-cols-3 gap-8" stagger={0.1}>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Gene Expression Analysis</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Reading the transcriptional state of tissues at single-cell resolution to understand which biological programs are active, silent, or disrupted. We profile millions of cells simultaneously, building expression atlases that reveal how disease begins at the genetic level — often decades before any clinical sign appears.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Protein Interaction Mapping</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Charting how molecules communicate within and across cells to identify functional dependencies, signaling cascades, and failure points. Our interactome models capture not just static connections, but dynamic relationships that shift under stress, treatment, or environmental change — giving us a living map of molecular behavior.</p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <h4 className="text-base font-medium text-gray-900 dark:text-gray-100">Real-Time Biomarker Detection</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Continuous monitoring of biological indicators that signal the earliest stages of systemic change, long before clinical symptoms emerge. Using AI-powered biosensor arrays, we track hundreds of molecular markers in parallel, detecting patterns that reveal disease trajectories, treatment responses, and recovery dynamics in real time.</p>
            </div>
          </FadeInStagger>
        </section>

        {/* Compute */}
        <section id="compute" className="mx-auto max-w-5xl px-8 py-32">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>02</span>
              <h2 className="mt-2 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Compute
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Observation without computation is just noise. VARL takes the vast biological datasets captured in the Observe phase and feeds them into purpose-built AI architectures — deep learning models designed not for general tasks, but specifically for understanding the logic of living systems.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Our digital twin engine constructs virtual representations of biological environments — from individual cells to entire organ systems. These simulations run thousands of scenarios in parallel: how a tissue responds to a drug candidate, how a genetic mutation propagates through a signaling network, how a crop variety adapts under drought conditions.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                What would take traditional laboratories months or years to test, our computational platform resolves in hours. Every simulation generates new hypotheses, refines existing models, and narrows the space of possibilities — turning biological complexity into tractable engineering problems.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                The compute layer is where intuition gives way to precision. We don&apos;t guess which pathways matter. We calculate it — with models trained on billions of molecular interactions across species, conditions, and timescales.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} y={50}>
            <div className="mt-24 flex flex-col gap-0 overflow-hidden rounded-2xl">
              <div className="flex items-stretch">
                <div className="flex w-1/2 flex-col justify-center gap-4 bg-white p-12 dark:bg-neutral-900">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Digital Twin Simulation</h4>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Constructing virtual biological environments that replicate real-world systems with molecular fidelity. Each twin evolves dynamically — absorbing new data, adjusting parameters, and predicting outcomes across thousands of parallel scenarios that would be impossible to run in physical laboratories.</p>
                </div>
                <div className="w-1/2 overflow-hidden bg-gray-950 dark:bg-neutral-800" style={{ minHeight: "280px" }}>
                  <NetworkGraph />
                </div>
              </div>
              <div className="flex items-stretch">
                <div className="w-1/2 overflow-hidden bg-white dark:bg-neutral-800" style={{ minHeight: "280px" }}>
                  <SimulationMetrics />
                </div>
                <div className="flex w-1/2 flex-col justify-center gap-4 bg-white p-12 dark:bg-neutral-900">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">AI-Driven Pathway Analysis</h4>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Deep learning models trained on billions of molecular interactions identify the signaling cascades, feedback loops, and regulatory circuits that drive disease and health. Rather than testing one hypothesis at a time, our models evaluate entire pathway networks simultaneously — revealing intervention points invisible to linear analysis.</p>
                </div>
              </div>
              <div className="flex items-stretch">
                <div className="flex w-1/2 flex-col justify-center gap-4 bg-white p-12 dark:bg-neutral-900">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Predictive Modeling at Scale</h4>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Running high-resolution simulations across molecular, cellular, and tissue scales to forecast how biological systems will respond to interventions before any physical experiment begins. Our models incorporate genetic variation, environmental factors, and temporal dynamics to produce predictions with clinical-grade confidence.</p>
                </div>
                <div className="w-1/2 overflow-hidden bg-gray-950 dark:bg-neutral-800" style={{ minHeight: "280px" }}>
                  <WaveformChart />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Discover */}
        <section id="discover" className="mx-auto max-w-5xl px-8 py-32">
          <div className="flex flex-col gap-6">
            <FadeIn>
              <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>03</span>
              <h2 className="mt-2 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Discover
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Computation narrows the space of possibilities. Discovery is what happens when AI finds the signal in that space — the unexpected pathway, the hidden interaction, the molecular lever that changes everything. This is where biology stops being a mystery and starts becoming an engineering discipline.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                VARL&apos;s discovery engine doesn&apos;t follow a single hypothesis. It explores thousands simultaneously — testing, discarding, refining — until it converges on insights that would take human researchers decades to formulate. Each discovery is cross-validated against our digital twin models, ensuring that what we find in silico translates to real biological systems.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                From identifying novel drug targets for autoimmune diseases to uncovering genetic circuits that govern crop resilience under climate stress — our discoveries span the full spectrum of biological complexity. We map uncharted molecular territories the way cartographers once mapped continents: systematically, rigorously, and with the tools to go where no one has gone before.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Every finding feeds back into the system. Discoveries refine our models, improve our simulations, and sharpen our observation instruments — creating a compounding cycle of intelligence that accelerates with every iteration. What we discover today makes tomorrow&apos;s discoveries faster, deeper, and more precise.
              </p>
            </FadeIn>
          </div>

          {/* Full-width molecule viewer */}
          <FadeIn delay={0.1} y={50}>
            <div className="relative mt-20 h-[400px] w-full overflow-hidden rounded-2xl bg-gray-950 dark:bg-neutral-800">
              <MoleculeViewer />
              <div className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-xs text-white/60">Interactive 3D</span>
              </div>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeInStagger className="mt-12 grid grid-cols-4 gap-6" stagger={0.08}>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-6 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">2,847</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Novel targets identified</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-6 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">97.3%</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Validation rate</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-6 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">14</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Active research pipelines</span>
            </div>
            <div className="flex flex-col gap-1 rounded-2xl bg-white p-6 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">6.2x</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Faster than traditional R&D</span>
            </div>
          </FadeInStagger>

          {/* Two-column: HeatMap + Discovery Timeline */}
          <FadeIn delay={0.1} y={40}>
            <div className="mt-12 flex gap-6">
              <div className="w-3/5 overflow-hidden rounded-2xl bg-gray-950 dark:bg-neutral-800">
                <HeatMap />
              </div>
              <div className="w-2/5 overflow-hidden rounded-2xl bg-white dark:bg-neutral-900">
                <DiscoveryTimeline />
              </div>
            </div>
          </FadeIn>

          {/* Deep dive cards */}
          <FadeInStagger className="mt-12 grid grid-cols-2 gap-6" stagger={0.1}>
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-10 dark:bg-neutral-900">
              <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Target Identification</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Our AI scans the entire known proteome and transcriptome to identify molecular targets with the highest therapeutic potential. By analyzing interaction networks, binding affinities, and downstream effects simultaneously, we pinpoint targets that traditional screening methods would never surface. Each candidate is ranked by druggability, specificity, and predicted clinical impact — reducing false leads by orders of magnitude.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-10 dark:bg-neutral-900">
              <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Mechanism Elucidation</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Understanding what a molecule does is only the beginning. We map the complete causal chain — from initial molecular event through signaling cascades to tissue-level phenotype. Our models reconstruct disease mechanisms with enough fidelity to predict not just what will happen, but why it happens, and where in the chain an intervention will be most effective. This transforms drug design from trial-and-error into precision engineering.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-10 dark:bg-neutral-900">
              <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Cross-Species Translation</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Biology shares deep structural patterns across species. VARL leverages this by building cross-species computational models that translate findings between organisms — from model organisms to human systems, and from human health insights to agricultural applications. A discovery in plant immune response may illuminate human autoimmunity, and vice versa. Our platform makes these connections visible and actionable.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-10 dark:bg-neutral-900">
              <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">Continuous Discovery Loop</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Discovery at VARL is not a one-time event — it&apos;s a perpetual cycle. Every validated finding is fed back into our models, improving prediction accuracy, expanding our knowledge graph, and unlocking new research directions. As our dataset grows and our models evolve, the rate of discovery accelerates exponentially. We are building a system that gets smarter with every experiment it runs.
              </p>
            </div>
          </FadeInStagger>
        </section>

        {/* Heal */}
        <section id="heal" className="py-32">
          {/* Big statement */}
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>04</span>
              <h2 className="mt-4 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Heal
              </h2>
            </FadeIn>
          </div>

          {/* Two-column text */}
          <div className="mx-auto mt-16 flex max-w-5xl gap-16 px-8">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                All of VARL&apos;s science converges on a single purpose: healing. Not healing as an abstract concept, but as a precise, engineered outcome — predictable, repeatable, and personalized to each patient&apos;s unique biology. Our platform generates treatment candidates that have already been validated through millions of digital twin simulations before a single molecule enters a lab.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Drug targets are selected with full knowledge of downstream effects. Dosage protocols are optimized per-patient using AI models trained on population-scale genomic and metabolic data. This is what precision medicine was always meant to be — a fundamental shift from reactive to proactive healthcare.
              </p>
            </FadeIn>
          </div>

          {/* Giant comparison: Before → After */}
          <div className="mx-auto mt-24 max-w-5xl px-8">
            <FadeIn y={50}>
              <div className="flex overflow-hidden rounded-2xl">
                <div className="flex w-1/2 flex-col justify-between bg-gray-200 p-12 dark:bg-neutral-800">
                  <div>
                    <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400">TRADITIONAL</span>
                    <div className="mt-6 flex flex-col gap-6">
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">15</span>
                        <span className="ml-2 text-lg text-gray-400 dark:text-neutral-500">years</span>
                      </div>
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">$2.6B</span>
                      </div>
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">4%</span>
                        <span className="ml-2 text-lg text-gray-400 dark:text-neutral-500">success</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/2 flex-col justify-between bg-gray-950 p-12 dark:bg-black">
                  <div>
                    <span className="text-xs tracking-widest text-blue-400">VARL PLATFORM</span>
                    <div className="mt-6 flex flex-col gap-6">
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-white">1–3</span>
                        <span className="ml-2 text-lg text-white/60">years</span>
                      </div>
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-white">$120M</span>
                      </div>
                      <div>
                        <span className="text-6xl font-semibold tracking-tight text-white">96%</span>
                        <span className="ml-2 text-lg text-white/60">success</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Approach — vertical list */}
          <div className="mx-auto mt-32 max-w-5xl px-8">
            <FadeIn>
              <h3 className="text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Our Approach
              </h3>
            </FadeIn>

            <div className="mt-12 flex flex-col">
              <FadeIn>
                <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                  <span className="w-48 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Personalized<br />Drug Design</span>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Every patient is different at the molecular level. VARL generates treatment candidates tailored to individual genetic profiles, metabolic states, and disease progression patterns. Our AI models simulate how each candidate will interact with a patient&apos;s specific biology — optimizing for efficacy, minimizing side effects, and predicting long-term outcomes with unprecedented accuracy.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                  <span className="w-48 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Regenerative<br />Therapies</span>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Beyond treating symptoms, VARL designs interventions that activate the body&apos;s own repair mechanisms. By identifying the molecular switches that control tissue regeneration, stem cell activation, and cellular reprogramming, we create therapies that don&apos;t just slow disease — they reverse it. From neurodegeneration to organ failure, our models map the pathways back to health.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                  <span className="w-48 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Preventive<br />Intelligence</span>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The greatest treatment is the one you never need. VARL&apos;s digital twin models can forecast disease trajectories years in advance — identifying risk factors, genetic predispositions, and environmental triggers before they converge into clinical disease. We turn prevention from a statistical exercise into a personalized, actionable protocol for every individual.
                  </p>
                </div>
              </FadeIn>
              <FadeIn>
                <div className="flex gap-12 border-t border-b border-gray-200 py-10 dark:border-neutral-800">
                  <span className="w-48 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Agricultural<br />Healing</span>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Crops get sick too. VARL applies the same precision healing framework to food systems — designing molecular interventions that repair damaged plant immune systems, restore soil microbiome balance, and create resilient varieties that can withstand climate stress. We treat the land the same way we treat the body: with intelligence, precision, and respect for the complexity of living systems.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Evolve */}
        <section id="evolve" className="mx-auto max-w-5xl px-8 py-32">
          <FadeIn>
            <span className="text-sm tracking-widest text-gray-400" style={{ fontWeight: 500 }}>05</span>
            <h2 className="mt-4 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Evolve
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Biology never stops changing. Diseases mutate, ecosystems shift, populations age, climates transform. A static system cannot keep pace with a living world. VARL is not a tool you use once — it is a platform that learns, adapts, and accelerates with every cycle.
            </p>
          </FadeIn>

          {/* Growth Chart + Radar side by side */}
          <FadeIn delay={0.15} y={40}>
            <div className="mt-20 flex gap-6">
              <div className="flex w-3/5 flex-col gap-3 overflow-hidden rounded-2xl bg-white p-8 dark:bg-neutral-900">
                <span className="text-xs text-gray-400">Discovery Velocity: VARL vs Traditional Research</span>
                <div className="h-[300px]">
                  <GrowthChart />
                </div>
              </div>
              <div className="flex w-2/5 flex-col gap-3 overflow-hidden rounded-2xl bg-white p-8 dark:bg-neutral-900">
                <span className="text-xs text-gray-400">Platform Capabilities</span>
                <div className="h-[300px]">
                  <EvolutionRadar />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Two column text */}
          <div className="mt-20 flex gap-16">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Every discovery VARL makes feeds back into the system. New data sharpens existing models. Validated hypotheses expand our knowledge graph. Failed experiments are just as valuable — they prune the solution space and prevent future researchers from walking the same dead ends. The platform remembers everything, forever.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                As diseases evolve resistance to treatments, VARL evolves faster. Our models anticipate mutation trajectories, pre-computing countermeasures for viral variants that don&apos;t yet exist. When a new pathogen emerges, the platform doesn&apos;t start from zero — it draws on everything it has ever learned to generate response candidates within hours, not years.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                In agriculture, evolution means resilience. As climate patterns shift and new pests emerge, VARL continuously updates crop models, soil microbiome maps, and nutritional optimization protocols. Farmers don&apos;t just get a solution for today — they get a system that stays ahead of tomorrow&apos;s challenges.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                This is the final piece: a compounding intelligence engine where the rate of progress is not linear but exponential. Every iteration makes the next one faster. Every answer opens better questions. The system doesn&apos;t just solve problems — it becomes fundamentally better at solving them. That is what it means to evolve.
              </p>
            </FadeIn>
          </div>

          {/* Timeline: Past → Present → Future */}
          <FadeIn y={50}>
            <div className="mt-24">
              <div className="flex overflow-hidden rounded-2xl">
                <div className="flex w-1/3 flex-col gap-3 bg-gray-200 p-10 dark:bg-neutral-800">
                  <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400">YESTERDAY</span>
                  <span className="text-3xl font-semibold text-gray-400 dark:text-neutral-500">Static Research</span>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400 dark:text-neutral-500">Isolated experiments. Knowledge trapped in papers. Each project starts from scratch.</p>
                </div>
                <div className="flex w-1/3 flex-col gap-3 bg-white p-10 dark:bg-neutral-900">
                  <span className="text-xs tracking-widest text-blue-500">TODAY</span>
                  <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Connected Intelligence</span>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">AI-integrated workflows. Shared models. Every experiment builds on the last.</p>
                </div>
                <div className="flex w-1/3 flex-col gap-3 bg-gray-950 p-10 dark:bg-black">
                  <span className="text-xs tracking-widest text-green-400">TOMORROW</span>
                  <span className="text-3xl font-semibold text-white">Autonomous Discovery</span>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">Self-improving systems. Predictive healing. Biology fully decoded and continuously optimized.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Closing statement */}
          <FadeIn>
            <div className="mt-32 text-center">
              <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
                Science that learns. Systems that heal.<br />A future that evolves with us.
              </p>
            </div>
          </FadeIn>
        </section>

      </main>

      <div className="relative w-full overflow-hidden">
        <img
          src="/science-hero.png"
          alt=""
          className="h-[600px] w-full object-cover"
        />
        <span className="absolute bottom-3 left-4 text-xs text-white/60">
          This image has no particular meaning. We just really love blueberries.
        </span>
      </div>

      <Footer />
    </div>
  );
}
