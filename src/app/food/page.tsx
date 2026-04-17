"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import MorphText from "@/components/MorphText";
import FoodIcons from "@/components/FoodIcons";
import FoodStories from "@/components/FoodStories";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const WorldFoodMap = dynamic(() => import("@/components/charts/WorldFoodMap"), { ssr: false });

export default function FoodPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Hero */}
      <div className="relative flex w-full items-center justify-center bg-white py-24 lg:py-48 dark:bg-black">
        <FoodIcons />
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-4">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={120}
            height={120}
            className="hidden shrink-0 lg:block lg:h-[7.5rem] w-auto dark:invert"
          />
          <h1 className="sr-only">VARL Food — Predictive Models for Crop Resilience and Global Food Security</h1>
          <MorphText
            text="Food"
            className="text-4xl tracking-tight lg:text-7xl"
            color="#16a34a"
          />
        </div>
      </div>

      <main className="flex-1">

        {/* Opening */}
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-32">
          <FadeIn>
            <p className="text-xl leading-relaxed tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 400 }}>
              The world produces enough food to feed 10 billion people.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-3 text-xl leading-relaxed tracking-tight text-gray-400 lg:mt-4 lg:text-3xl dark:text-gray-500" style={{ fontWeight: 400 }}>
              Yet 295 million go hungry. A third of every harvest is lost before it reaches anyone. The soil that sustains us is eroding faster than it regenerates. This is not a production failure. It is a failure of understanding — and that is exactly where we come in.
            </p>
          </FadeIn>
        </div>

        {/* Three columns — core problems */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeInStagger className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl lg:grid-cols-3" stagger={0.12}>
            <div className="flex flex-col gap-3 bg-green-950 p-6 lg:gap-4 lg:p-10 dark:bg-green-950">
              <span className="text-3xl font-semibold text-green-400 lg:text-5xl">33%</span>
              <span className="text-xs text-green-300/70 lg:text-sm">of all food produced is lost or wasted before it reaches a mouth</span>
              <p className="mt-2 text-[11px] leading-relaxed text-green-300/50 lg:mt-4 lg:text-xs">That&apos;s 1.3 billion tonnes per year — enough to feed every hungry person on Earth four times over.</p>
            </div>
            <div className="flex flex-col gap-3 bg-green-900 p-6 lg:gap-4 lg:p-10 dark:bg-green-900">
              <span className="text-3xl font-semibold text-green-300 lg:text-5xl">1.7B</span>
              <span className="text-xs text-green-200/70 lg:text-sm">hectares of soil degraded — larger than the Amazon</span>
              <p className="mt-2 text-[11px] leading-relaxed text-green-200/50 lg:mt-4 lg:text-xs">Annual cost: $6–11 trillion. And we keep farming it anyway, adding more chemicals to land that has less to give.</p>
            </div>
            <div className="flex flex-col gap-3 bg-green-800 p-6 lg:gap-4 lg:p-10 dark:bg-green-800">
              <span className="text-3xl font-semibold text-green-100 lg:text-5xl">72%</span>
              <span className="text-xs text-green-100/70 lg:text-sm">of global freshwater consumed by agriculture</span>
              <p className="mt-2 text-[11px] leading-relaxed text-green-100/50 lg:mt-4 lg:text-xs">Aquifers are depleting faster than they recharge. When the water runs out, the food runs out.</p>
            </div>
          </FadeInStagger>
        </section>

        {/* Field Stories */}
        <FadeIn>
          <section className="pb-16 lg:pb-32">
            <FoodStories />
          </section>
        </FadeIn>

        {/* World Food Map */}
        <section className="pb-16 lg:pb-32">
          <FadeIn>
            <div className="mx-auto max-w-5xl px-5 lg:px-8">
              <span className="text-[10px] tracking-widest text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>WHERE IT HURTS MOST</span>
              <h2 className="mt-2 text-2xl tracking-tight text-gray-900 lg:mt-3 lg:text-4xl dark:text-gray-100" style={{ fontWeight: 500 }}>
                Global Food Insecurity
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mx-auto mt-6 max-w-6xl px-5 lg:mt-10 lg:px-8">
              <div className="h-[280px] overflow-hidden rounded-2xl bg-gray-50 p-4 lg:h-[520px] lg:p-6 dark:bg-neutral-900">
                <WorldFoodMap />
              </div>
              <div className="mt-4 flex flex-wrap gap-4 lg:mt-6 lg:gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#c2410c]"></span>
                  <span className="text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">Critical</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#ea580c]"></span>
                  <span className="text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">Severe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#fb923c]"></span>
                  <span className="text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm bg-[#fdba74]"></span>
                  <span className="text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">Innovation hub</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* What went wrong */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              What Went Wrong
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={0}>
            <div className="mt-8 flex flex-col gap-0 overflow-hidden rounded-2xl lg:mt-16">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full bg-gray-100 p-6 lg:w-1/3 lg:p-10 dark:bg-neutral-800">
                  <span className="text-4xl font-semibold text-gray-300 lg:text-7xl dark:text-neutral-700">75%</span>
                </div>
                <div className="flex w-full flex-col justify-center bg-white p-6 lg:w-2/3 lg:p-10 dark:bg-neutral-900">
                  <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Genetic Diversity Collapse</h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 lg:mt-3 lg:text-sm dark:text-gray-400">
                    Three-quarters of crop genetic diversity has been erased in the last century. We grow the same handful of varieties across entire continents — optimized for yield in perfect conditions, catastrophically vulnerable to change. When a new pathogen arrives, it doesn&apos;t face diversity. It faces a monoculture. And monocultures fall.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row">
                <div className="flex w-full flex-col justify-center bg-white p-6 lg:w-2/3 lg:p-10 dark:bg-neutral-900">
                  <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>The Chemical Treadmill</h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 lg:mt-3 lg:text-sm dark:text-gray-400">
                    Fertilizer use per hectare has quadrupled since 1964. Pesticide resistance is accelerating. Each year we need more chemicals to achieve the same result — while the soil biology that once provided natural fertility is systematically destroyed. We are running on a treadmill that speeds up every season.
                  </p>
                </div>
                <div className="w-full bg-gray-100 p-6 lg:w-1/3 lg:p-10 dark:bg-neutral-800">
                  <span className="text-4xl font-semibold text-gray-300 lg:text-7xl dark:text-neutral-700">4x</span>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="w-full bg-gray-100 p-6 lg:w-1/3 lg:p-10 dark:bg-neutral-800">
                  <span className="text-4xl font-semibold text-gray-300 lg:text-7xl dark:text-neutral-700">26%</span>
                </div>
                <div className="flex w-full flex-col justify-center bg-white p-6 lg:w-2/3 lg:p-10 dark:bg-neutral-900">
                  <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Climate Feedback Loop</h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 lg:mt-3 lg:text-sm dark:text-gray-400">
                    Agriculture produces 26% of global greenhouse emissions — then suffers the consequences of the climate change it helped create. Droughts destroy harvests. Floods wash away topsoil. Rising temperatures shift growing zones faster than farmers can adapt. The system is consuming itself.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* WATER TECHNOLOGY */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-blue-500 lg:text-xs" style={{ fontWeight: 500 }}>WATER TECHNOLOGY</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Every Drop Computed</span>
              </h2>
            </FadeIn>
            <div className="mt-6 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Agriculture consumes 72% of global freshwater. Aquifers that took millennia to fill are being drained in decades. The Ogallala Aquifer under the American Great Plains — the source of 30% of U.S. irrigation water — is depleting 12 times faster than it recharges. In India, 54% of groundwater wells are declining. When the water runs out, the food runs out.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We are developing models of plant-water relationships at the cellular level — simulating stomatal conductance, root hydraulic architecture, and soil moisture dynamics to design irrigation protocols that deliver precisely the amount of water each plant needs, and nothing more. Our approach includes building digital twins of watershed systems to predict drought impact years in advance, enabling preemptive strategy shifts instead of reactive crisis management.
                </p>
              </FadeIn>
              <FadeIn className="flex-1" delay={0.2}>
                <FadeInStagger className="grid grid-cols-2 gap-3 lg:gap-4" stagger={0.08}>
                  <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                    <span className="text-2xl font-semibold text-blue-500 lg:text-3xl">72%</span>
                    <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">of freshwater consumed by agriculture</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                    <span className="text-2xl font-semibold text-blue-500 lg:text-3xl">40%</span>
                    <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">targeted water reduction</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                    <span className="text-2xl font-semibold text-blue-500 lg:text-3xl">12x</span>
                    <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">Ogallala depletion vs recharge rate</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                    <span className="text-2xl font-semibold text-blue-500 lg:text-3xl">54%</span>
                    <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">India&apos;s groundwater wells declining</p>
                  </div>
                </FadeInStagger>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PRECISION AGRICULTURE */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-green-600 lg:text-xs dark:text-green-400" style={{ fontWeight: 500 }}>PRECISION AGRICULTURE</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">Farming Redesigned from DNA Up</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-10 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                75% of crop genetic diversity has been erased in a century. The same handful of varieties are grown across entire continents — optimized for yield in perfect conditions, catastrophically vulnerable to change. Our approach scans the full genomic landscape of crop species — including wild relatives and ancient cultivars industrial agriculture forgot — to design varieties computationally in months instead of the decades traditional breeding requires.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} y={0}>
              <div className="mt-8 flex flex-col gap-0 overflow-hidden rounded-2xl lg:mt-16">
                <div className="flex flex-col lg:flex-row">
                  <div className="flex w-full flex-col justify-center gap-3 bg-green-50 p-6 lg:w-1/2 lg:gap-4 lg:p-10 dark:bg-green-950/30">
                    <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Molecular Crop Design</h4>
                    <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Our AI is being trained to identify traits for drought tolerance, pest resistance, and nutrient density across the complete proteome. A variety that takes 15 years to breed conventionally — our target is to design, simulate, and validate it in under 6 months.</p>
                  </div>
                  <div className="flex w-full flex-col justify-center gap-3 bg-green-100 p-6 lg:w-1/2 lg:gap-4 lg:p-10 dark:bg-green-900/30">
                    <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Predictive Field Intelligence</h4>
                    <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">We are building models designed to simulate crop performance under dozens of climate scenarios simultaneously. Temperature, precipitation, pest migration, soil moisture — modeled at field resolution. The goal: prescriptive intelligence delivered before the season begins.</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex w-full flex-col justify-center gap-3 bg-green-100 p-6 lg:w-1/2 lg:gap-4 lg:p-10 dark:bg-green-900/30">
                    <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Pest &amp; Disease Interception</h4>
                    <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">We are developing molecular detection systems designed to identify plant stress signals weeks before visible damage. Our models will predict outbreak trajectories and inform biological countermeasures that can eliminate the need for broad-spectrum pesticides.</p>
                  </div>
                  <div className="flex w-full flex-col justify-center gap-3 bg-green-50 p-6 lg:w-1/2 lg:gap-4 lg:p-10 dark:bg-green-950/30">
                    <h4 className="text-base text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>Nutritional Optimization</h4>
                    <p className="text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">Food is molecular information. Our platform is being designed to map complete nutritional profiles at the metabolomic level — thousands of bioactive compounds beyond macronutrients. Tomatoes optimized for lycopene. Wheat with enhanced iron bioavailability. Food engineered to heal.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* GLOBAL DISTRIBUTION */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-amber-600 lg:text-xs dark:text-amber-400" style={{ fontWeight: 500 }}>GLOBAL DISTRIBUTION</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">From Farm to Fork — Without the Loss</span>
              </h2>
            </FadeIn>
            <div className="mt-6 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  1.3 billion tonnes of food are lost or wasted every year — enough to feed every hungry person on Earth four times over. The problem is not production. It is the chain between harvest and consumption: inadequate cold storage, inefficient logistics, packaging that cannot communicate spoilage, and varieties bred for appearance rather than resilience.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We are applying molecular analysis to post-harvest biology — developing tools to predict spoilage timelines for individual shipments, optimize cold chain routing, design packaging materials that respond to decomposition signals, and engineer crop varieties with naturally extended shelf life. Our approach treats entire supply chains as biological systems, identifying the exact points where food is lost and designing molecular-level interventions to prevent it.
                </p>
              </FadeIn>
              <FadeInStagger className="flex flex-1 flex-col gap-3 lg:gap-4" stagger={0.12}>
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 lg:gap-6 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-amber-500 lg:text-4xl">1.3B</span>
                  <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">tonnes of food wasted annually</span>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 lg:gap-6 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-amber-500 lg:text-4xl">$1T</span>
                  <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">economic value lost in the supply chain</span>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-5 lg:gap-6 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-amber-500 lg:text-4xl">8%</span>
                  <span className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">of global emissions from food waste alone</span>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* SOIL RESTORATION */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-yellow-700 lg:text-xs dark:text-yellow-400" style={{ fontWeight: 500 }}>SOIL RESTORATION</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-yellow-700 to-lime-400 bg-clip-text text-transparent">Rebuilding the Foundation of Life</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-10 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                A single gram of healthy soil contains up to 10 billion microorganisms across thousands of species. This invisible ecosystem makes agriculture possible — cycling nutrients, suppressing pathogens, retaining water, sequestering carbon. Industrial farming has systematically destroyed it. 1.7 billion hectares of land are now degraded. The annual economic cost: $6–11 trillion.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                We are building digital twins of soil microbiomes — modeling the relationships between bacteria, fungi, plant roots, and mineral cycles at molecular resolution. Our computationally optimized restoration protocols will use microbial consortia, biochar formulations, and cover crop sequences designed to recover degraded land to productive capacity within a single growing season.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} y={0}>
              <div className="mt-8 flex flex-col overflow-hidden rounded-2xl lg:mt-16 lg:flex-row">
                <div className="flex w-full flex-col gap-2 bg-yellow-100 p-6 lg:w-1/3 lg:gap-3 lg:p-8 dark:bg-yellow-900/20">
                  <span className="text-[10px] tracking-widest text-yellow-700 lg:text-xs dark:text-yellow-400" style={{ fontWeight: 500 }}>CURRENT STATE</span>
                  <span className="text-2xl font-semibold text-yellow-700 lg:text-4xl dark:text-yellow-500">Degraded</span>
                  <p className="text-xs text-yellow-600/70 lg:text-sm dark:text-yellow-400/50">Compacted, depleted, chemically dependent. Less than 2% organic matter. Zero biological activity.</p>
                </div>
                <div className="flex w-full flex-col gap-2 bg-yellow-50 p-6 lg:w-1/3 lg:gap-3 lg:p-8 dark:bg-yellow-950/20">
                  <span className="text-[10px] tracking-widest text-yellow-600 lg:text-xs dark:text-yellow-400" style={{ fontWeight: 500 }}>TARGET: 1 SEASON</span>
                  <span className="text-2xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-300">&gt;75%</span>
                  <p className="text-xs text-gray-500 lg:text-sm dark:text-gray-400">Recovery to reference ecosystem levels. Microbial diversity restored. Root network depth tripled.</p>
                </div>
                <div className="flex w-full flex-col gap-2 bg-green-50 p-6 lg:w-1/3 lg:gap-3 lg:p-8 dark:bg-green-950/20">
                  <span className="text-[10px] tracking-widest text-green-600 lg:text-xs dark:text-green-400" style={{ fontWeight: 500 }}>TARGET: 3 SEASONS</span>
                  <span className="text-2xl font-semibold text-green-700 lg:text-4xl dark:text-green-400">Regenerated</span>
                  <p className="text-xs text-green-600/70 lg:text-sm dark:text-green-400/50">Self-sustaining fertility. Carbon-negative. Chemical inputs eliminated. Yield exceeding pre-degradation levels.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* LIVESTOCK INTELLIGENCE */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-orange-600 lg:text-xs dark:text-orange-400" style={{ fontWeight: 500 }}>LIVESTOCK INTELLIGENCE</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent">Healthier Animals. Smarter Systems.</span>
              </h2>
            </FadeIn>
            <div className="mt-6 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:gap-16">
              <FadeIn className="flex-1" delay={0.1}>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  Livestock produces 14.5% of global greenhouse emissions and consumes one-third of all grain. Antibiotic resistance from industrial animal farming kills 1.27 million people per year. The current model is unsustainable — but the world&apos;s demand for animal protein continues to grow.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                  We are developing genomic-level models of animal health — designed to predict disease outbreaks before they spread through herds, optimize feed conversion efficiency to reduce waste, eliminate antibiotic dependence through molecular-level immune support, and inform breeding programs that produce resilient animals with lower environmental footprint. Every intervention will be validated computationally before it reaches the farm.
                </p>
              </FadeIn>
              <FadeInStagger className="flex flex-1 flex-col gap-3 lg:gap-4" stagger={0.12}>
                <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-orange-500 lg:text-3xl">14.5%</span>
                  <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">of global emissions from livestock</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-orange-500 lg:text-3xl">1.27M</span>
                  <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">deaths per year from antibiotic resistance</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
                  <span className="text-2xl font-semibold text-orange-500 lg:text-3xl">33%</span>
                  <p className="mt-1 text-[10px] text-gray-500 lg:text-xs dark:text-gray-400">of global grain fed to animals, not humans</p>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </section>

        {/* FOOD SAFETY */}
        <section className="py-16 lg:py-32">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <FadeIn>
              <span className="text-[10px] tracking-widest text-rose-600 lg:text-xs dark:text-rose-400" style={{ fontWeight: 500 }}>FOOD SAFETY</span>
              <h2 className="mt-2 text-2xl tracking-tight lg:mt-3 lg:text-5xl" style={{ fontWeight: 500 }}>
                <span className="bg-gradient-to-r from-rose-600 to-pink-400 bg-clip-text text-transparent">Contamination Detected Before It Kills</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-10 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                600 million people fall ill from contaminated food every year. 420,000 die. Current testing catches contamination after it enters the supply chain — sometimes after it reaches the consumer. We are engineering molecular detection systems designed to identify pathogens, mycotoxins, pesticide residues, heavy metals, and allergens at concentrations invisible to conventional testing — in real time, at the source.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
                Detection alone is not enough. Our AI is being trained to model pathogen evolution — anticipating which food safety risks will emerge next, where they will appear, and how they will spread. The goal is prevention designed at the molecular level, deployed before the first case is reported.
              </p>
            </FadeIn>

            <FadeInStagger className="mt-8 grid grid-cols-1 gap-3 lg:mt-16 lg:grid-cols-3 lg:gap-6" stagger={0.1}>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-900">
                <span className="text-2xl font-semibold text-rose-500 lg:text-4xl">600M</span>
                <p className="mt-1 text-xs text-gray-500 lg:mt-2 lg:text-sm dark:text-gray-400">people sickened annually by contaminated food</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-900">
                <span className="text-2xl font-semibold text-rose-500 lg:text-4xl">420K</span>
                <p className="mt-1 text-xs text-gray-500 lg:mt-2 lg:text-sm dark:text-gray-400">deaths per year from foodborne illness</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6 lg:p-8 dark:bg-neutral-900">
                <span className="text-2xl font-semibold text-rose-500 lg:text-4xl">&gt;10x</span>
                <p className="mt-1 text-xs text-gray-500 lg:mt-2 lg:text-sm dark:text-gray-400">targeted detection sensitivity vs conventional testing</p>
              </div>
            </FadeInStagger>
          </div>
        </section>

        {/* From Soil to System */}
        <section className="mx-auto max-w-5xl px-5 pb-16 lg:px-8 lg:pb-32">
          <FadeIn>
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              From Soil to System
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              We are building across the entire food chain — not just one link.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} y={0}>
            <div className="mt-8 flex flex-col overflow-hidden rounded-2xl lg:mt-16 lg:flex-row">
              <div className="flex w-full flex-col gap-2 bg-green-950 p-5 lg:w-1/5 lg:p-6 dark:bg-green-950">
                <span className="text-[10px] tracking-widest text-green-400 lg:text-xs" style={{ fontWeight: 500 }}>SEED</span>
                <span className="mt-1 text-xs leading-relaxed text-green-300/70 lg:mt-2 lg:text-sm">Genomic design, trait optimization, variety simulation</span>
              </div>
              <div className="flex w-full flex-col gap-2 bg-green-900 p-5 lg:w-1/5 lg:p-6 dark:bg-green-900">
                <span className="text-[10px] tracking-widest text-green-300 lg:text-xs" style={{ fontWeight: 500 }}>SOIL</span>
                <span className="mt-1 text-xs leading-relaxed text-green-200/70 lg:mt-2 lg:text-sm">Microbiome analysis, restoration protocols, fertility modeling</span>
              </div>
              <div className="flex w-full flex-col gap-2 bg-green-800 p-5 lg:w-1/5 lg:p-6 dark:bg-green-800">
                <span className="text-[10px] tracking-widest text-green-200 lg:text-xs" style={{ fontWeight: 500 }}>GROWTH</span>
                <span className="mt-1 text-xs leading-relaxed text-green-100/70 lg:mt-2 lg:text-sm">Stress prediction, pest interception, irrigation optimization</span>
              </div>
              <div className="flex w-full flex-col gap-2 bg-green-700 p-5 lg:w-1/5 lg:p-6 dark:bg-green-700">
                <span className="text-[10px] tracking-widest text-green-100 lg:text-xs" style={{ fontWeight: 500 }}>HARVEST</span>
                <span className="mt-1 text-xs leading-relaxed text-white/60 lg:mt-2 lg:text-sm">Timing optimization, quality assessment, yield maximization</span>
              </div>
              <div className="flex w-full flex-col gap-2 bg-green-600 p-5 lg:w-1/5 lg:p-6 dark:bg-green-600">
                <span className="text-[10px] tracking-widest text-white lg:text-xs" style={{ fontWeight: 500 }}>TABLE</span>
                <span className="mt-1 text-xs leading-relaxed text-white/60 lg:mt-2 lg:text-sm">Shelf life prediction, nutrient preservation, waste elimination</span>
              </div>
            </div>
          </FadeIn>
        </section>

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
              <Link href="/science" className="group flex items-center justify-between rounded-2xl bg-gray-50 px-6 py-8 transition-colors hover:bg-gray-100 lg:px-10 lg:py-10 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                <div>
                  <span className="text-[10px] tracking-widest text-blue-500 lg:text-xs dark:text-blue-400" style={{ fontWeight: 500 }}>EXPLORE</span>
                  <h3 className="mt-2 text-2xl tracking-tight lg:text-3xl" style={{ fontWeight: 500 }}>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">Science</span>
                  </h3>
                  <p className="mt-2 text-xs text-gray-500 lg:text-sm dark:text-gray-400">The computational biology platform behind our work.</p>
                </div>
                <span className="text-2xl text-gray-300 transition-colors group-hover:text-blue-500 dark:text-gray-600 dark:group-hover:text-blue-400">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* Closing */}
        <FadeIn>
          <div className="mx-auto max-w-4xl px-5 pb-16 text-center lg:px-8 lg:pb-32">
            <p className="text-xl leading-snug tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 400 }}>
              A planet with limits demands a food system with intelligence.<br />
              Not more land. Not more chemicals.<br />
              More understanding.
            </p>
          </div>
        </FadeIn>

        {/* Sources */}
        <section className="mx-auto max-w-4xl px-5 pb-16 lg:px-8 lg:pb-24">
          <div className="border-t border-gray-200 pt-8 dark:border-neutral-800">
            <h3 className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>SOURCES</h3>
            <ol className="mt-4 flex flex-col gap-2 text-[11px] leading-relaxed text-gray-400 lg:text-xs dark:text-gray-500">
              <li>295 million facing acute food insecurity — WFP, Global Report on Food Crises, 2023.</li>
              <li>33% of food lost or wasted, 1.3 billion tonnes — FAO, The State of Food and Agriculture, 2019.</li>
              <li>1.7 billion hectares of degraded land — UNCCD, Global Land Outlook, 2nd Edition, 2022.</li>
              <li>$6–11 trillion annual cost of land degradation — ELD Initiative / UNCCD, 2015.</li>
              <li>72% of freshwater used by agriculture — FAO, AQUASTAT, 2022.</li>
              <li>75% crop genetic diversity lost — FAO, The State of the World&apos;s Biodiversity for Food and Agriculture, 2019.</li>
              <li>Fertilizer use quadrupled since 1964 — Our World in Data, based on FAO and IFA data, 2023.</li>
              <li>26% of global greenhouse emissions from food systems — Poore &amp; Nemecek, Science, 2018.</li>
              <li>Ogallala Aquifer depletion 12x recharge rate — USGS, High Plains Aquifer Studies, 2020.</li>
              <li>54% of India&apos;s groundwater wells declining — Central Ground Water Board, India, 2022.</li>
              <li>14.5% of global emissions from livestock — FAO, &ldquo;Tackling Climate Change Through Livestock,&rdquo; 2013.</li>
              <li>1.27 million deaths from antimicrobial resistance — Murray et al., The Lancet, 2022.</li>
              <li>600 million ill, 420,000 deaths from foodborne illness — WHO, Food Safety Fact Sheet, 2022.</li>
              <li>$1 trillion supply chain food loss — FAO, 2019.</li>
              <li>8% of emissions from food waste — UNEP, Food Waste Index Report, 2021.</li>
            </ol>
          </div>
        </section>

      </main>

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
