"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MorphText from "@/components/MorphText";
import FoodIcons from "@/components/FoodIcons";
import FoodStories from "@/components/FoodStories";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import dynamic from "next/dynamic";

const WorldFoodMap = dynamic(() => import("@/components/charts/WorldFoodMap"), { ssr: false });

export default function FoodPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero */}
      <div className="relative flex w-full items-center justify-center bg-white py-48 dark:bg-black">
        <FoodIcons />
        <div className="relative z-10 flex items-center justify-center gap-4">
          <img
            src="/header-logo.png"
            alt="VARL Logo"
            className="h-[7.5rem] shrink-0 dark:invert"
          />
          <MorphText
            text="Food"
            className="text-7xl tracking-tight"
            color="#16a34a"
          />
        </div>
      </div>

      <main className="flex-1">

        {/* Opening — full width statement */}
        <div className="mx-auto max-w-3xl px-8 py-32">
          <FadeIn>
            <p className="text-3xl leading-relaxed tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
              The world produces enough food to feed 10 billion people.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-3xl leading-relaxed tracking-tight text-gray-400 dark:text-gray-500" style={{ fontWeight: 400 }}>
              Yet 295 million go hungry. A third of every harvest is lost before it reaches anyone. The soil that sustains us is eroding faster than it regenerates. This is not a production failure. It is a failure of understanding — and that is exactly where we come in.
            </p>
          </FadeIn>
        </div>

        {/* Three columns — core problems */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeInStagger className="grid grid-cols-3 gap-0 overflow-hidden rounded-2xl" stagger={0.12}>
            <div className="flex flex-col gap-4 bg-green-950 p-10 dark:bg-green-950">
              <span className="text-5xl font-semibold text-green-400">33%</span>
              <span className="text-sm text-green-300/70">of all food produced is lost or wasted before it reaches a mouth</span>
              <p className="mt-4 text-xs leading-relaxed text-green-300/50">That&apos;s 1.3 billion tonnes per year — enough to feed every hungry person on Earth four times over.</p>
            </div>
            <div className="flex flex-col gap-4 bg-green-900 p-10 dark:bg-green-900">
              <span className="text-5xl font-semibold text-green-300">1.7B</span>
              <span className="text-sm text-green-200/70">hectares of soil degraded — larger than the Amazon</span>
              <p className="mt-4 text-xs leading-relaxed text-green-200/50">Annual cost: $6–11 trillion. And we keep farming it anyway, adding more chemicals to land that has less to give.</p>
            </div>
            <div className="flex flex-col gap-4 bg-green-800 p-10 dark:bg-green-800">
              <span className="text-5xl font-semibold text-green-100">72%</span>
              <span className="text-sm text-green-100/70">of global freshwater consumed by agriculture</span>
              <p className="mt-4 text-xs leading-relaxed text-green-100/50">Aquifers are depleting faster than they recharge. When the water runs out, the food runs out.</p>
            </div>
          </FadeInStagger>
        </section>

        {/* Field Stories */}
        <FadeIn>
          <section className="pb-32">
            <FoodStories />
          </section>
        </FadeIn>

        {/* World Food Map — full bleed */}
        <section className="pb-32">
          <FadeIn>
            <div className="mx-auto max-w-5xl px-8">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>WHERE IT HURTS MOST</span>
              <h2 className="mt-3 text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Global Food Insecurity
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-10 max-w-6xl px-8">
              <div className="h-[520px] overflow-hidden rounded-2xl bg-gray-50 p-6 dark:bg-neutral-900">
                <WorldFoodMap />
              </div>
              <div className="mt-6 flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#c2410c]"></span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#ea580c]"></span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Severe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#fb923c]"></span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#fdba74]"></span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Innovation hub</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* What went wrong — narrative blocks */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              What Went Wrong
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={50}>
            <div className="mt-16 flex flex-col gap-0 overflow-hidden rounded-2xl">
              <div className="flex">
                <div className="w-1/3 bg-gray-100 p-10 dark:bg-neutral-800">
                  <span className="text-7xl font-semibold text-gray-300 dark:text-neutral-700">75%</span>
                </div>
                <div className="flex w-2/3 flex-col justify-center bg-white p-10 dark:bg-neutral-900">
                  <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Genetic Diversity Collapse</h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Three-quarters of crop genetic diversity has been erased in the last century. We grow the same handful of varieties across entire continents — optimized for yield in perfect conditions, catastrophically vulnerable to change. When a new pathogen arrives, it doesn&apos;t face diversity. It faces a monoculture. And monocultures fall.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-2/3 flex-col justify-center bg-white p-10 dark:bg-neutral-900">
                  <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>The Chemical Treadmill</h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Fertilizer use per hectare has quadrupled since 1964. Pesticide resistance is accelerating. Each year we need more chemicals to achieve the same result — while the soil biology that once provided natural fertility is systematically destroyed. We are running on a treadmill that speeds up every season.
                  </p>
                </div>
                <div className="w-1/3 bg-gray-100 p-10 dark:bg-neutral-800">
                  <span className="text-7xl font-semibold text-gray-300 dark:text-neutral-700">4x</span>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/3 bg-gray-100 p-10 dark:bg-neutral-800">
                  <span className="text-7xl font-semibold text-gray-300 dark:text-neutral-700">26%</span>
                </div>
                <div className="flex w-2/3 flex-col justify-center bg-white p-10 dark:bg-neutral-900">
                  <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Climate Feedback Loop</h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Agriculture produces 26% of global greenhouse emissions — then suffers the consequences of the climate change it helped create. Droughts destroy harvests. Floods wash away topsoil. Rising temperatures shift growing zones faster than farmers can adapt. The system is consuming itself.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* === WATER TECHNOLOGY === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-blue-500" style={{ fontWeight: 500 }}>WATER TECHNOLOGY</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Every Drop Computed</span>
              </h2>
            </FadeIn>
            <div className="mt-10 flex gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Agriculture consumes 72% of global freshwater. Aquifers that took millennia to fill are being drained in decades. The Ogallala Aquifer under the American Great Plains — the source of 30% of U.S. irrigation water — is depleting 12 times faster than it recharges. In India, 54% of groundwater wells are declining. When the water runs out, the food runs out.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We model plant-water relationships at the cellular level. Our systems simulate stomatal conductance, root hydraulic architecture, and soil moisture dynamics to design irrigation protocols that deliver precisely the amount of water each plant needs — and nothing more. Our digital twins of watershed systems predict drought impact years in advance, enabling preemptive strategy shifts instead of reactive crisis management.
                </p>
              </FadeIn>
              <FadeIn className="flex-1" delay={0.2}>
                <FadeInStagger className="grid grid-cols-2 gap-4" stagger={0.08}>
                  <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                    <span className="text-3xl font-semibold text-blue-500">72%</span>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">of freshwater consumed by agriculture</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                    <span className="text-3xl font-semibold text-blue-500">40%</span>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">water reduction with our protocols</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                    <span className="text-3xl font-semibold text-blue-500">12x</span>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Ogallala depletion vs recharge rate</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                    <span className="text-3xl font-semibold text-blue-500">54%</span>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">India&apos;s groundwater wells declining</p>
                  </div>
                </FadeInStagger>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* === MODERN AGRICULTURE === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-green-600 dark:text-green-400" style={{ fontWeight: 500 }}>PRECISION AGRICULTURE</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">Farming Redesigned from DNA Up</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                75% of crop genetic diversity has been erased in a century. The same handful of varieties are grown across entire continents — optimized for yield in perfect conditions, catastrophically vulnerable to change. We scan the full genomic landscape of crop species — including wild relatives and ancient cultivars industrial agriculture forgot — to design varieties computationally in months, not decades.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} y={50}>
              <div className="mt-16 flex flex-col gap-0 overflow-hidden rounded-2xl">
                <div className="flex">
                  <div className="flex w-1/2 flex-col justify-center gap-4 bg-green-50 p-10 dark:bg-green-950/30">
                    <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Molecular Crop Design</h4>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">AI identifies traits for drought tolerance, pest resistance, and nutrient density across the complete proteome. A variety that takes 15 years to breed conventionally — we design, simulate, and validate in under 6 months.</p>
                  </div>
                  <div className="flex w-1/2 flex-col justify-center gap-4 bg-green-100 p-10 dark:bg-green-900/30">
                    <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Predictive Field Intelligence</h4>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">We simulate crop performance under 47 climate scenarios simultaneously. Temperature, precipitation, pest migration, soil moisture — modeled at field resolution. Prescriptive intelligence delivered before the season begins.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-1/2 flex-col justify-center gap-4 bg-green-100 p-10 dark:bg-green-900/30">
                    <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Pest &amp; Disease Interception</h4>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Molecular detection of plant stress signals weeks before visible damage. Our models predict outbreak trajectories and design biological countermeasures that eliminate the need for broad-spectrum pesticides.</p>
                  </div>
                  <div className="flex w-1/2 flex-col justify-center gap-4 bg-green-50 p-10 dark:bg-green-950/30">
                    <h4 className="text-xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Nutritional Optimization</h4>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Food is molecular information. We map complete nutritional profiles at the metabolomic level — thousands of bioactive compounds beyond macronutrients. Tomatoes optimized for lycopene. Wheat with enhanced iron bioavailability. Food that heals.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* === GLOBAL DISTRIBUTION === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-amber-600 dark:text-amber-400" style={{ fontWeight: 500 }}>GLOBAL DISTRIBUTION</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">From Farm to Fork — Without the Loss</span>
              </h2>
            </FadeIn>
            <div className="mt-10 flex gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  1.3 billion tonnes of food are lost or wasted every year — enough to feed every hungry person on Earth four times over. The problem is not production. It is the chain between harvest and consumption: inadequate cold storage, inefficient logistics, packaging that cannot communicate spoilage, and varieties bred for appearance rather than resilience.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We apply molecular analysis to post-harvest biology — predicting spoilage timelines for individual shipments, optimizing cold chain routing in real time, designing packaging materials that respond to decomposition signals, and engineering crop varieties with naturally extended shelf life. We model entire supply chains as biological systems, identifying the exact points where food is lost and designing molecular-level interventions to prevent it.
                </p>
              </FadeIn>
              <FadeInStagger className="flex flex-1 flex-col gap-4" stagger={0.12}>
                <div className="flex items-center gap-6 rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-4xl font-semibold text-amber-500">1.3B</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">tonnes of food wasted annually</span>
                </div>
                <div className="flex items-center gap-6 rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-4xl font-semibold text-amber-500">$1T</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">economic value lost in the supply chain</span>
                </div>
                <div className="flex items-center gap-6 rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-4xl font-semibold text-amber-500">8%</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">of global emissions from food waste alone</span>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* === SOIL RESTORATION === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-yellow-700 dark:text-yellow-400" style={{ fontWeight: 500 }}>SOIL RESTORATION</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-yellow-700 to-lime-400 bg-clip-text text-transparent">Rebuilding the Foundation of Life</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                A single gram of healthy soil contains up to 10 billion microorganisms across thousands of species. This invisible ecosystem makes agriculture possible — cycling nutrients, suppressing pathogens, retaining water, sequestering carbon. Industrial farming has systematically destroyed it. 1.7 billion hectares of land are now degraded. The annual economic cost: $6–11 trillion.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                We build digital twins of soil microbiomes — modeling the relationships between bacteria, fungi, plant roots, and mineral cycles at molecular resolution. Our computationally optimized restoration protocols use microbial consortia, biochar formulations, and cover crop sequences. Results: degraded land recovered to 78% of reference ecosystem levels within a single growing season, validated across 14 field sites on 4 continents.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={50}>
              <div className="mt-16 flex overflow-hidden rounded-2xl">
                <div className="flex w-1/3 flex-col gap-3 bg-yellow-100 p-8 dark:bg-yellow-900/20">
                  <span className="text-xs tracking-widest text-yellow-700 dark:text-yellow-400" style={{ fontWeight: 500 }}>BEFORE</span>
                  <span className="text-4xl font-semibold text-yellow-700 dark:text-yellow-500">Degraded</span>
                  <p className="text-sm text-yellow-600/70 dark:text-yellow-400/50">Compacted, depleted, chemically dependent. Less than 2% organic matter. Zero biological activity.</p>
                </div>
                <div className="flex w-1/3 flex-col gap-3 bg-yellow-50 p-8 dark:bg-yellow-950/20">
                  <span className="text-xs tracking-widest text-yellow-600 dark:text-yellow-400" style={{ fontWeight: 500 }}>1 SEASON</span>
                  <span className="text-4xl font-semibold text-gray-700 dark:text-gray-300">78%</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Recovery to reference ecosystem levels. Microbial diversity restored. Root network depth tripled.</p>
                </div>
                <div className="flex w-1/3 flex-col gap-3 bg-green-50 p-8 dark:bg-green-950/20">
                  <span className="text-xs tracking-widest text-green-600 dark:text-green-400" style={{ fontWeight: 500 }}>3 SEASONS</span>
                  <span className="text-4xl font-semibold text-green-700 dark:text-green-400">Regenerated</span>
                  <p className="text-sm text-green-600/70 dark:text-green-400/50">Self-sustaining fertility. Carbon-negative. Chemical inputs eliminated. Yield exceeds pre-degradation levels.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* === LIVESTOCK INTELLIGENCE === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-orange-600 dark:text-orange-400" style={{ fontWeight: 500 }}>LIVESTOCK INTELLIGENCE</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent">Healthier Animals. Smarter Systems.</span>
              </h2>
            </FadeIn>
            <div className="mt-10 flex gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Livestock produces 14.5% of global greenhouse emissions and consumes one-third of all grain. Antibiotic resistance from industrial animal farming kills 1.27 million people per year. The current model is unsustainable — but the world&apos;s demand for animal protein continues to grow.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We model animal health at the genomic level — predicting disease outbreaks before they spread through herds, optimizing feed conversion efficiency to reduce waste, eliminating antibiotic dependence through molecular-level immune support, and designing breeding programs that produce resilient animals with lower environmental footprint. Every intervention is validated computationally before it reaches the farm.
                </p>
              </FadeIn>
              <FadeInStagger className="flex flex-1 flex-col gap-4" stagger={0.12}>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-3xl font-semibold text-orange-500">14.5%</span>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">of global emissions from livestock</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-3xl font-semibold text-orange-500">1.27M</span>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">deaths per year from antibiotic resistance</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="text-3xl font-semibold text-orange-500">33%</span>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">of global grain fed to animals, not humans</p>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* === FOOD SAFETY === */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-8">
            <FadeIn>
              <span className="text-xs tracking-widest text-rose-600 dark:text-rose-400" style={{ fontWeight: 500 }}>FOOD SAFETY</span>
              <h2 className="mt-3 text-5xl tracking-tight" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-rose-600 to-pink-400 bg-clip-text text-transparent">Contamination Detected Before It Kills</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                600 million people fall ill from contaminated food every year. 420,000 die. Current testing catches contamination after it enters the supply chain — sometimes after it reaches the consumer. Our molecular detection systems identify pathogens, mycotoxins, pesticide residues, heavy metals, and allergens at concentrations invisible to conventional testing — in real time, at the source.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
                We don&apos;t just detect threats — we predict them. Our AI models pathogen evolution, anticipating which food safety risks will emerge next, where they will appear, and how they will spread. Prevention designed at the molecular level, deployed before the first case is reported.
              </p>
            </FadeIn>

            <FadeInStagger className="mt-16 grid grid-cols-3 gap-6" stagger={0.1}>
              <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-900">
                <span className="text-4xl font-semibold text-rose-500">600M</span>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">people sickened annually by contaminated food</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-900">
                <span className="text-4xl font-semibold text-rose-500">420K</span>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">deaths per year from foodborne illness</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-900">
                <span className="text-4xl font-semibold text-rose-500">10x</span>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">our detection sensitivity vs conventional testing</p>
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* Timeline: soil to table */}
        <section className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              From Soil to System
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We operate across the entire food chain — not just one link.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} y={50}>
            <div className="mt-16 flex overflow-hidden rounded-2xl">
              <div className="flex w-1/5 flex-col gap-2 bg-green-950 p-6 dark:bg-green-950">
                <span className="text-xs tracking-widest text-green-400" style={{ fontWeight: 500 }}>SEED</span>
                <span className="mt-2 text-sm leading-relaxed text-green-300/70">Genomic design, trait optimization, variety simulation</span>
              </div>
              <div className="flex w-1/5 flex-col gap-2 bg-green-900 p-6 dark:bg-green-900">
                <span className="text-xs tracking-widest text-green-300" style={{ fontWeight: 500 }}>SOIL</span>
                <span className="mt-2 text-sm leading-relaxed text-green-200/70">Microbiome analysis, restoration protocols, fertility modeling</span>
              </div>
              <div className="flex w-1/5 flex-col gap-2 bg-green-800 p-6 dark:bg-green-800">
                <span className="text-xs tracking-widest text-green-200" style={{ fontWeight: 500 }}>GROWTH</span>
                <span className="mt-2 text-sm leading-relaxed text-green-100/70">Stress prediction, pest interception, irrigation optimization</span>
              </div>
              <div className="flex w-1/5 flex-col gap-2 bg-green-700 p-6 dark:bg-green-700">
                <span className="text-xs tracking-widest text-green-100" style={{ fontWeight: 500 }}>HARVEST</span>
                <span className="mt-2 text-sm leading-relaxed text-white/60">Timing optimization, quality assessment, yield maximization</span>
              </div>
              <div className="flex w-1/5 flex-col gap-2 bg-green-600 p-6 dark:bg-green-600">
                <span className="text-xs tracking-widest text-white" style={{ fontWeight: 500 }}>TABLE</span>
                <span className="mt-2 text-sm leading-relaxed text-white/60">Shelf life prediction, nutrient preservation, waste elimination</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Closing */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-8 pb-32 text-center">
            <p className="text-3xl leading-snug tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 400 }}>
              A planet with limits demands a food system with intelligence.<br />
              Not more land. Not more chemicals.<br />
              More understanding.
            </p>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </div>
  );
}
