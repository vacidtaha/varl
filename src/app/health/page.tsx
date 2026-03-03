"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MorphText from "@/components/MorphText";
import HealthIcons from "@/components/HealthIcons";
import DrugGraveyard from "@/components/DrugGraveyard";
import HealthStories from "@/components/HealthStories";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import dynamic from "next/dynamic";

const WorldHealthMap = dynamic(() => import("@/components/charts/WorldHealthMap"), { ssr: false });

export default function HealthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <div className="relative flex w-full items-center justify-center bg-white py-48 dark:bg-black">
        <HealthIcons />
        <div className="relative z-10 flex items-center justify-center gap-4">
          <img
            src="/header-logo.png"
            alt="VARL Logo"
            className="h-[7.5rem] shrink-0 dark:invert"
          />
          <MorphText
            text="Health"
            className="text-7xl tracking-tight"
          />
        </div>
      </div>

      <main className="flex-1">

        {/* Opening Statement */}
        <div className="mx-auto max-w-4xl px-8 py-32 text-center">
          <FadeIn>
            <p className="text-2xl leading-relaxed tracking-tight text-gray-800 dark:text-gray-200" style={{ fontWeight: 400 }}>
              Medicine has spent the last century treating symptoms instead of systems. The pharmaceutical industry invests $2.6 billion and 15 years to bring a single drug to market — and 86% of them fail. Millions of patients wait for treatments that may never arrive. VARL exists to end that cycle.
            </p>
          </FadeIn>
        </div>

        {/* The Problem */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              The Problem
            </h2>
          </FadeIn>
          <div className="mt-10 flex gap-16">
            <FadeIn className="flex-1" delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Modern medicine operates on a model designed in the 20th century. Diseases are categorized by symptoms rather than molecular mechanisms. Drug development follows a linear pipeline — hypothesis, synthesis, animal testing, clinical trials — where each step takes years and most compounds fail at the last stage. The entire system is built on trial and error at the molecular level.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                For every successful drug, thousands are abandoned. For every patient who receives a working treatment, millions receive therapies that were never optimized for their specific biology. The gap between what science knows and what medicine delivers is measured in human lives.
              </p>
            </FadeIn>
            <FadeIn className="flex-1" delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                Chronic diseases now account for 74% of all deaths worldwide. Cancer, cardiovascular disease, diabetes, neurodegeneration — these are not unsolvable mysteries. They are complex systems problems that require computational approaches operating at a scale and speed that human cognition alone cannot achieve.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                The question is not whether biology can be decoded. It can. The question is whether we will continue to accept a system where 86% of drug candidates fail, where diagnosis comes too late, and where treatment is designed for the average patient rather than the actual one. VARL&apos;s answer is no.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Why Health Matters */}
        <section className="mx-auto max-w-3xl px-8 pb-20">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Why We Do This
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-10 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Somewhere right now, a mother is sitting in a hospital corridor waiting for a word that will change everything. A father is Googling symptoms at 3 a.m., hoping to find something, anything, that sounds like good news. A child is asking why the medicine makes them feel worse before it makes them feel better. And a doctor is standing in front of a scan, knowing that what they are seeing arrived too late to reverse.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              These are not numbers on a report. These are real people, in real rooms, waiting for real answers. Health is not something you measure in a chart. It is the moment a mother finally exhales. It is the year a child gets to grow up. It is the treatment that actually works because someone took the time to understand one person, not a crowd.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We started this company because we believe that losing someone to a disease we could have predicted is not a tragedy of nature. It is a failure of tools. The biology is there. The signals are there. What has been missing is a system capable of reading them fast enough, deeply enough, personally enough. That is what we are building.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Every technology we develop, every model we design, every simulation we architect comes back to a single question: will this give someone more time? Time measured in birthdays, in first steps, in one more conversation with the person they love. If the answer is yes, we build it. If it is not, we go back and make it better.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              The world does not need another pharmaceutical company that treats disease as a market. It needs one that treats every human body as the irreplaceable thing it is. That is why we exist.
            </p>
          </FadeIn>
        </section>

        {/* Health Stories */}
        <FadeIn>
          <section className="pb-32">
            <HealthStories />
          </section>
        </FadeIn>

        {/* Devastating Numbers */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn y={50}>
            <div className="flex overflow-hidden rounded-2xl">
              <div className="flex w-1/2 flex-col justify-between bg-gray-200 p-12 dark:bg-neutral-800">
                <div>
                  <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400">THE CURRENT STATE</span>
                  <div className="mt-8 flex flex-col gap-8">
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">86%</span>
                      <p className="mt-1 text-sm text-gray-400 dark:text-neutral-500">of drug candidates fail clinical trials</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">$2.6B</span>
                      <p className="mt-1 text-sm text-gray-400 dark:text-neutral-500">average cost to develop a single drug</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">15 yrs</span>
                      <p className="mt-1 text-sm text-gray-400 dark:text-neutral-500">from discovery to patient</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">74%</span>
                      <p className="mt-1 text-sm text-gray-400 dark:text-neutral-500">of global deaths from chronic disease</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-1/2 flex-col justify-between bg-gray-950 p-12 dark:bg-black">
                <div>
                  <span className="text-xs tracking-widest text-red-400">WHAT WE ARE BUILDING TOWARD</span>
                  <div className="mt-8 flex flex-col gap-8">
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-white">&gt;90%</span>
                      <p className="mt-1 text-sm text-white/50">target success rate through simulation-first validation</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-white">&lt;$150M</span>
                      <p className="mt-1 text-sm text-white/50">projected development cost with digital twin screening</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-white">1–3 yrs</span>
                      <p className="mt-1 text-sm text-white/50">targeted discovery-to-validation cycle</p>
                    </div>
                    <div>
                      <span className="text-6xl font-semibold tracking-tight text-white">100%</span>
                      <p className="mt-1 text-sm text-white/50">designed for individual biology, not population averages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* World Health Map */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Global Disease Burden
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Disease does not respect borders. From chronic conditions overwhelming developed healthcare systems to infectious diseases devastating underserved populations, the crisis is planetary. Every region faces unique challenges — and every challenge demands a precision response.
            </p>
          </FadeIn>
          <FadeIn delay={0.15} y={50}>
            <div className="mt-12 h-[480px] overflow-hidden rounded-2xl bg-gray-50 p-4 dark:bg-neutral-900">
              <WorldHealthMap />
            </div>
            <div className="mt-6 flex gap-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#dc2626]"></span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Critical burden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#ef4444]"></span>
                <span className="text-xs text-gray-500 dark:text-gray-400">High burden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#f87171]"></span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Moderate burden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-[#fca5a5]"></span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Emerging burden</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Drug Graveyard */}
        <FadeIn>
          <section className="pb-32">
            <DrugGraveyard />
          </section>
        </FadeIn>

        {/* VARL's Approach to Health */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Our Approach to Health
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We are not iterating on the existing system. We are designing its replacement. VARL&apos;s platform is being built to treat health not as the absence of disease, but as a continuously optimized state — monitored at the molecular level, predicted before disruption, and corrected with precision that the current pharmaceutical paradigm cannot achieve.
            </p>
          </FadeIn>

          <div className="mt-20 flex flex-col">
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Predictive<br />Diagnostics</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Disease begins at the molecular level years before symptoms appear. We are developing AI models that analyze genomic, proteomic, and metabolomic data to identify disease trajectories in their earliest stages — when intervention is most effective and least invasive. Our goal is to detect what traditional diagnostics miss: the silent molecular shifts that precede cancer, neurodegeneration, autoimmunity, and metabolic collapse.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Digital Twin<br />Medicine</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Every patient is unique at the molecular level. We are building a platform that constructs digital twins — computational replicas of individual biological systems — capable of simulating how each patient will respond to every possible treatment. Instead of prescribing based on population averages and hoping for the best, clinicians will be able to test thousands of therapeutic scenarios computationally before administering a single dose. This is not personalized medicine as a marketing term. It is medicine redesigned from first principles.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Accelerated<br />Drug Discovery</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The traditional drug pipeline wastes 86% of its candidates because it cannot predict failure until it is too late. We are engineering a simulation engine designed to screen millions of molecular candidates against digital twin models simultaneously — identifying toxicity risks, efficacy limits, and off-target effects before any compound enters a laboratory. Our target is to compress the discovery-to-validation cycle from 15 years to under 3, and to fundamentally change the economics of drug development.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Regenerative<br />Engineering</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Most treatments manage disease. We are working to design interventions that reverse it. By identifying the molecular switches that control tissue regeneration, stem cell activation, and cellular reprogramming, our platform will generate therapies that restore biological function rather than merely slowing its decline. From neuronal repair in Alzheimer&apos;s disease to cardiac tissue regeneration after myocardial infarction — we are mapping the pathways back to health.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-12 border-t border-b border-gray-200 py-10 dark:border-neutral-800">
                <span className="w-56 shrink-0 text-2xl font-medium text-gray-900 dark:text-gray-100">Continuous<br />Health Intelligence</span>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Health is not a binary state. It is a dynamic system that requires continuous monitoring and adaptive response. We are developing a biosensor-integrated platform designed to track hundreds of molecular biomarkers in real time, detecting deviations from healthy baselines before they cascade into clinical disease. Digital twins will update continuously as new data arrives, enabling a model of healthcare where treatment is proactive, not reactive — and where the concept of being &ldquo;too late&rdquo; ceases to exist.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Disease Focus Areas */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Focus Areas
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL is concentrating its health platform on disease categories where computational biology can deliver the greatest impact — where the gap between what is known and what is treated is widest, and where traditional approaches have systematically failed.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-16 grid grid-cols-3 gap-6" stagger={0.08}>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">01</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Oncology</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                10 million deaths per year. Our platform is being designed to model tumor microenvironments at single-cell resolution, identify novel drug targets within signaling cascades, and predict immunotherapy response on a per-patient basis. Every cancer is unique. Every treatment should be too.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">02</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Neurodegeneration</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                55 million people living with dementia. We are developing digital twin architectures that simulate neuronal network degradation, protein misfolding cascades, and blood-brain barrier dynamics to identify intervention points that arrest and reverse cognitive decline — modeling what MRIs cannot see.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">03</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Autoimmune Disease</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                300+ million affected globally. The immune system attacking itself is a systems failure, not a single-gene problem. Our approach maps the complete immune regulatory network to find the precise points where tolerance breaks down — enabling therapies designed to recalibrate rather than suppress.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">04</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Cardiovascular</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                The leading cause of death worldwide. We are building simulation frameworks that model cardiac tissue mechanics, arterial plaque formation, and hemodynamic stress at molecular resolution — designed to predict heart failure years before clinical onset and inform interventions that target vascular damage at its source.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">05</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Rare Diseases</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                7,000+ rare diseases, 95% have no approved treatment. Traditional pharma ignores them because the economics don&apos;t work. A computational approach can make rare disease research economically viable by eliminating the cost barriers of physical experimentation. Every patient deserves a treatment, regardless of the size of the population.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-8 dark:bg-neutral-900">
              <span className="text-3xl font-semibold text-red-500">06</span>
              <h4 className="text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Infectious Disease</h4>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                Pandemics will happen again. Our platform is being architected to anticipate pathogen mutation trajectories, pre-compute vaccine candidates for variants that don&apos;t yet exist, and model population-level transmission dynamics. When the next outbreak arrives, the goal is to respond in days, not months.
              </p>
            </div>
          </FadeInStagger>
        </section>

        {/* Big closing statement */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-8 pb-32 text-center">
            <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
              We are not building a better pharmaceutical company.<br />
              We are building a world where no one hears<br />
              &ldquo;there is nothing more we can do.&rdquo;
            </p>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
