"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { articles } from "@/data/articles";

const HeartParticles = dynamic(() => import("@/components/HeartParticles"), { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="relative w-full overflow-hidden">
        <img
          src="/creation-of-adam.webp"
          alt=""
          className="h-[620px] w-full object-cover" style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-7xl tracking-tight text-white drop-shadow-lg" style={{ fontWeight: 400 }}>
            All Diseases Can Be Solved.
          </h2>
        </div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">
          The Creation of Adam — Michelangelo, Sistine Chapel, c. 1512
        </span>
      </div>

      <main className="flex-1">
        <Hero />
      </main>

      {/* Mission Statement */}
      <div className="mx-auto max-w-4xl px-8 py-32 text-center">
        <p className="text-2xl leading-relaxed tracking-tight text-gray-800 dark:text-gray-200" style={{ fontWeight: 400 }}>
          VARL was founded with the aim of redefining the boundaries of biological systems. By analyzing how cells, genes, and tissues communicate, it uses this data to design new healing, repair, and regeneration processes. At the intersection of science and intelligence, every biological loss becomes solvable.
        </p>
      </div>

      {/* Focus Areas — Health + Food */}
      <section className="w-full" style={{ padding: "0 13px" }}>
        <div className="flex" style={{ gap: "13px" }}>
          <Link href="/health" className="group relative flex aspect-square w-1/2 flex-col justify-end overflow-hidden rounded-2xl bg-black p-14">
            <HeartParticles />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="relative z-10 flex flex-col gap-5">
              <span className="text-xs tracking-widest text-red-400/70" style={{ fontWeight: 500 }}>HEALTH</span>
              <h3 className="text-5xl tracking-tight text-white" style={{ fontWeight: 500 }}>
                Detect Earlier.<br />Treat Smarter.
              </h3>
              <p className="max-w-md text-base leading-relaxed text-white/45">
                We simulate the human body at the molecular level to find disease before symptoms appear and design treatments that are built for each patient, not for the crowd.
              </p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/70 transition-all group-hover:border-white/50 group-hover:text-white" style={{ fontWeight: 450 }}>
                Explore Health <ArrowUpRight size={14} strokeWidth={1.5} />
              </span>
            </div>
          </Link>

          <Link href="/food" className="group relative flex aspect-square w-1/2 flex-col justify-end overflow-hidden rounded-2xl bg-green-950 p-14 dark:bg-green-950">
            <img src="/foodd.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="relative z-10 flex flex-col gap-5">
              <span className="text-xs tracking-widest text-green-400/70" style={{ fontWeight: 500 }}>FOOD</span>
              <h3 className="text-5xl tracking-tight text-white" style={{ fontWeight: 500 }}>
                Feed the World.<br />Heal the Land.
              </h3>
              <p className="max-w-md text-base leading-relaxed text-white">
                295 million people go hungry while a third of all food is lost. We are designing molecular tools to grow smarter, waste less, and restore the soil that sustains us.
              </p>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/70 transition-all group-hover:border-white/50 group-hover:text-white" style={{ fontWeight: 450 }}>
                Explore Food <ArrowUpRight size={14} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="w-full" style={{ padding: "13px 13px 0" }}>
        <div className="rounded-2xl bg-gray-50 py-20 dark:bg-neutral-900">
          <div className="mx-auto max-w-5xl px-12">
            <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>THE SCALE OF THE PROBLEM</span>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
              These are not our numbers. These are the world&apos;s. The systems we depend on for health and food are failing at a scale that demands a fundamentally different approach.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-4 gap-12 px-12">
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">74%</span>
              <span className="text-sm leading-snug text-gray-500 dark:text-gray-400">of all deaths worldwide are caused by chronic diseases that current medicine manages but rarely cures.</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">295M</span>
              <span className="text-sm leading-snug text-gray-500 dark:text-gray-400">people face acute food insecurity today. The planet produces enough food, but the system that delivers it is broken.</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">86%</span>
              <span className="text-sm leading-snug text-gray-500 dark:text-gray-400">of drug candidates fail in clinical trials after billions of dollars and years of development. Most failures are preventable.</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">$6T</span>
              <span className="text-sm leading-snug text-gray-500 dark:text-gray-400">lost every year to soil degradation alone. 1.7 billion hectares of farmland are depleted and still being farmed.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Photo + Quote */}
      <div className="relative w-full overflow-hidden">
        <div className="flex h-[800px] w-full items-center justify-between bg-black px-20">
          <img src="/historic.webp" alt="" className="h-[65%] object-contain" />
          <img src="/historic2.webp" alt="" className="h-[65%] object-contain" />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-20">
          <p className="max-w-2xl text-4xl leading-snug tracking-tight text-white" style={{ fontWeight: 400 }}>
            Biology has always been readable.<br />
            We are finally building the language.
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-white/50" style={{ fontWeight: 400 }}>
            Not long ago, doctors recommended cigarettes. The science was confident. The advertisements were everywhere. Millions trusted the system. The system was wrong.
          </p>
          <div className="h-px w-16 bg-white/15"></div>
          <p className="max-w-lg text-base leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
            A child is born with a disease that was visible in her DNA before she took her first breath. A farmer watches his soil die a little more each season and has no idea why. A doctor prescribes the same drug to two patients and watches it save one and fail the other.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
            None of this has to be this way. The signals are already there, in every cell, every root, every molecule. What has been missing is the ability to read them fast enough, deeply enough, and personally enough to act before it is too late.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-white/90" style={{ fontWeight: 400 }}>
            That is what VARL is building. Not another pharmaceutical company. Not another research lab. A system that finally listens to biology and translates what it hears into treatments that heal, food that sustains, and science that never stops learning.
          </p>
        </div>
        <span className="absolute bottom-3 left-20 text-xs text-white/30">
          &ldquo;More Doctors Smoke Camels&rdquo; — R.J. Reynolds Tobacco Company, c. 1946
        </span>
      </div>

      {/* Our Science — 5-step strip */}
      <section className="w-full" style={{ padding: "80px 13px" }}>
        <div className="mx-auto max-w-5xl px-8 pb-16">
          <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>OUR APPROACH</span>
          <h2 className="mt-3 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Five Steps to Discovery
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400" style={{ fontWeight: 400 }}>
            A unified scientific framework that takes biology from raw observation to actionable healing. Each step builds on the last, creating a compounding cycle of intelligence.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-8">
          <div className="flex overflow-hidden rounded-2xl">
            <Link href="/science#observe" className="group flex w-1/5 flex-col gap-3 bg-gray-950 p-7 transition-colors hover:bg-gray-900 dark:bg-gray-950" style={{ minHeight: "220px" }}>
              <span className="text-xs tracking-widest text-white/30" style={{ fontWeight: 500 }}>01</span>
              <span className="text-lg text-white" style={{ fontWeight: 500 }}>Observe</span>
              <span className="mt-auto text-xs leading-relaxed text-white/35">Capture biological signals at molecular resolution.</span>
            </Link>
            <Link href="/science#compute" className="group flex w-1/5 flex-col gap-3 bg-gray-900 p-7 transition-colors hover:bg-gray-800 dark:bg-gray-900" style={{ minHeight: "220px" }}>
              <span className="text-xs tracking-widest text-white/30" style={{ fontWeight: 500 }}>02</span>
              <span className="text-lg text-white" style={{ fontWeight: 500 }}>Compute</span>
              <span className="mt-auto text-xs leading-relaxed text-white/35">Build digital twins. Run thousands of simulations in parallel.</span>
            </Link>
            <Link href="/science#discover" className="group flex w-1/5 flex-col gap-3 bg-gray-800 p-7 transition-colors hover:bg-gray-700 dark:bg-gray-800" style={{ minHeight: "220px" }}>
              <span className="text-xs tracking-widest text-white/30" style={{ fontWeight: 500 }}>03</span>
              <span className="text-lg text-white" style={{ fontWeight: 500 }}>Discover</span>
              <span className="mt-auto text-xs leading-relaxed text-white/35">Find the hidden pathways and molecular levers that matter.</span>
            </Link>
            <Link href="/science#heal" className="group flex w-1/5 flex-col gap-3 bg-gray-700 p-7 transition-colors hover:bg-gray-600 dark:bg-gray-700" style={{ minHeight: "220px" }}>
              <span className="text-xs tracking-widest text-white/30" style={{ fontWeight: 500 }}>04</span>
              <span className="text-lg text-white" style={{ fontWeight: 500 }}>Heal</span>
              <span className="mt-auto text-xs leading-relaxed text-white/35">Design precise interventions validated computationally.</span>
            </Link>
            <Link href="/science#evolve" className="group flex w-1/5 flex-col gap-3 bg-gray-600 p-7 transition-colors hover:bg-gray-500 dark:bg-gray-600" style={{ minHeight: "220px" }}>
              <span className="text-xs tracking-widest text-white/30" style={{ fontWeight: 500 }}>05</span>
              <span className="text-lg text-white" style={{ fontWeight: 500 }}>Evolve</span>
              <span className="mt-auto text-xs leading-relaxed text-white/35">Every discovery feeds back. The platform learns with every cycle.</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl justify-end px-8">
          <Link
            href="/science"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
            style={{ fontWeight: 450 }}
          >
            Explore Our Science <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Latest From */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 py-20">
        <h3 className="text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Latest From
        </h3>

        <a href="/latest/regenerative-agriculture-framework" className="group flex h-[360px] w-full overflow-hidden rounded-2xl">
          <img src="/latest-1.webp" alt="" loading="lazy" className="h-full w-[65%] object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="flex h-full w-[35%] flex-col justify-center gap-3 bg-white p-8 dark:bg-neutral-900">
            <span className="text-xs tracking-wide text-gray-400">February 10, 2026</span>
            <h4 className="text-xl font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Publishes New Framework for Regenerative Agriculture</h4>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">A systems-level approach to soil biology and crop resilience, powered by molecular simulation.</p>
          </div>
        </a>

        <div className="flex w-full gap-8">
          <a href="/latest/biological-camouflage-drug-delivery" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-2.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">February 3, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">How Biological Camouflage Inspires New Drug Delivery Systems</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Nature&#39;s stealth mechanisms are guiding VARL&#39;s next-gen targeted therapies.</p>
            </div>
          </a>
          <a href="/latest/protein-engineering-lab" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-3.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 28, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Precision at the Molecular Level: Inside VARL&#39;s Protein Engineering Lab</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Where craftsmanship meets computation to redesign biological structures.</p>
            </div>
          </a>
        </div>
        <div className="flex w-full gap-8">
          <a href="/latest/digital-twin-health-trajectories" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-4.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 15, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Digital Twin Technology Maps Individual Health Trajectories</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Personalized simulations that predict disease before symptoms appear.</p>
            </div>
          </a>
          <a href="/latest/novel-biomarkers-early-detection" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-5.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 6, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Identifies Novel Biomarkers for Early Disease Detection</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">AI-driven analysis reveals signals invisible to traditional diagnostics.</p>
            </div>
          </a>
        </div>

        <div className="flex w-full gap-8">
          <a href="/latest/ai-plant-stress-prediction" className="group w-1/3 overflow-hidden rounded-2xl">
            <img src="/latest-6.webp" alt="" loading="lazy" className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.5] w-full flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 20, 2025</span>
              <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">AI Models Predict Plant Stress Before It Happens</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Lab-grown resilience testing for smarter crops.</p>
            </div>
          </a>
          <a href="/latest/tomato-genome-nutritional-potential" className="group w-1/3 overflow-hidden rounded-2xl">
            <img src="/latest-7.webp" alt="" loading="lazy" className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.5] w-full flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 11, 2025</span>
              <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">Decoding the Tomato Genome to Unlock Nutritional Potential</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">How AI maps flavor, nutrition, and yield at once.</p>
            </div>
          </a>
          <a href="/latest/lipid-nanoparticles-cellular-repair" className="group w-1/3 overflow-hidden rounded-2xl">
            <img src="/latest-8.webp" alt="" loading="lazy" className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.5] w-full flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">November 29, 2025</span>
              <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">Lipid Nanoparticles: VARL&#39;s Next-Gen Cellular Repair Mechanism</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Targeted delivery at the molecular frontier.</p>
            </div>
          </a>
        </div>

        <div className="flex justify-center pt-4">
          <a href="/latest" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base text-gray-700 transition-all hover:bg-gray-50 hover:text-black dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-white" style={{ fontWeight: 450 }}>
            Browse All
          </a>
        </div>
      </div>

      <JoinUs
        title="Saving the World Is a Cliché. Guess We Love Clichés."
        description="We're looking for scientists, engineers, and thinkers who believe that every disease is solvable and every biological system can be understood. Join us in building the intelligence that heals."
      />

      <Footer />
    </div>
  );
}
