"use client";

import Header, { MobileBottomNav } from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
const HeartParticles = dynamic(() => import("@/components/HeartParticles"), { ssr: false });
const ObserveAnimation = dynamic(() => import("@/components/animations/ObserveAnimation"), { ssr: false });
const ComputeAnimation  = dynamic(() => import("@/components/animations/ComputeAnimation"),  { ssr: false });
const DiscoverAnimation = dynamic(() => import("@/components/animations/DiscoverAnimation"), { ssr: false });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="relative h-[260px] w-full overflow-hidden sm:h-[400px] lg:h-[620px]">
        <Image
          src="/creation-of-adam.webp"
          alt="The Creation of Adam by Michelangelo, Sistine Chapel ceiling"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          style={{ objectPosition: "25% 20%" }}
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1400px"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-0">
          <h1 className="text-center text-2xl tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-7xl" style={{ fontWeight: 400 }}>
            All Diseases Can Be Solved.
          </h1>
        </div>
        <span className="absolute bottom-2 left-3 text-[9px] text-white/60 sm:bottom-3 sm:left-4 sm:text-[10px] lg:text-xs">
          The Creation of Adam — Michelangelo, Sistine Chapel, c. 1512
        </span>
      </div>

      <main className="flex-1">
        <Hero />
      </main>

      {/* Mission Statement */}
      <div className="mx-auto max-w-4xl px-6 py-12 text-center lg:px-8 lg:py-32">
        <p className="text-sm leading-relaxed tracking-tight text-gray-800 lg:text-2xl dark:text-gray-200" style={{ fontWeight: 400 }}>
          VARL was founded with the aim of redefining the boundaries of biological systems. By analyzing how cells, genes, and tissues communicate, it uses this data to design new healing, repair, and regeneration processes. At the intersection of science and intelligence, every biological loss becomes solvable.
        </p>
      </div>

      {/* Focus Areas — Health + Food */}
      <section className="w-full" style={{ padding: "0 13px" }}>
        <div className="flex flex-col gap-[13px] lg:flex-row">
          <Link href="/health" className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-black p-6 lg:w-1/2 lg:p-14">
            <HeartParticles />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <ArrowUpRight className="absolute right-5 top-5 z-10 text-white/70 transition-colors group-hover:text-white lg:right-8 lg:top-8" size={28} strokeWidth={1.5} />
            <div className="relative z-10 flex flex-col gap-2 lg:gap-5">
              <span className="text-[10px] tracking-widest text-red-400/70 lg:text-xs" style={{ fontWeight: 500 }}>HEALTH</span>
              <h2 className="text-2xl tracking-tight text-white lg:text-5xl" style={{ fontWeight: 500 }}>
                Detect Earlier.<br />Treat Smarter.
              </h2>
              <p className="text-xs leading-relaxed text-white/45 lg:max-w-md lg:text-base">
                We simulate the human body at the molecular level to find disease before symptoms appear and design treatments that are built for each patient, not for the crowd.
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-2 text-[11px] text-white/70 transition-colors group-hover:text-white lg:mt-4 lg:text-sm" style={{ fontWeight: 450 }}>
                Explore Health <ArrowUpRight size={12} strokeWidth={1.5} className="lg:h-3.5 lg:w-3.5" />
              </span>
            </div>
          </Link>

          <Link href="/food" className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl bg-green-950 p-6 lg:w-1/2 lg:p-14 dark:bg-green-950">
            <Image src="/foodd.webp" alt="Agricultural field representing VARL food systems research" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <ArrowUpRight className="absolute right-5 top-5 z-10 text-white/70 transition-colors group-hover:text-white lg:right-8 lg:top-8" size={28} strokeWidth={1.5} />
            <div className="relative z-10 flex flex-col gap-2 lg:gap-5">
              <span className="text-[10px] tracking-widest text-green-400/70 lg:text-xs" style={{ fontWeight: 500 }}>FOOD</span>
              <h2 className="text-2xl tracking-tight text-white lg:text-5xl" style={{ fontWeight: 500 }}>
                Feed the World.<br />Heal the Land.
              </h2>
              <p className="text-xs leading-relaxed text-white lg:max-w-md lg:text-base">
                295 million people go hungry while a third of all food is lost. We are designing molecular tools to grow smarter, waste less, and restore the soil that sustains us.
              </p>
              <span className="mt-1 inline-flex w-fit items-center gap-2 text-[11px] text-white/70 transition-colors group-hover:text-white lg:mt-4 lg:text-sm" style={{ fontWeight: 450 }}>
                Explore Food <ArrowUpRight size={12} strokeWidth={1.5} className="lg:h-3.5 lg:w-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="w-full" style={{ padding: "13px 13px 13px" }}>
        <div className="flex flex-col gap-16 rounded-2xl bg-gray-50 px-6 py-12 lg:gap-40 lg:py-32 dark:bg-neutral-900">
          <div className="mx-auto w-full max-w-[1300px]">
            <h2 className="text-2xl tracking-tight text-gray-900 lg:text-5xl dark:text-gray-100" style={{ fontWeight: 500 }}>
              How We Work
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 lg:mt-6 lg:text-lg dark:text-gray-400" style={{ fontWeight: 400 }}>
              From the first signal a cell sends to the treatment that actually works. This is the science behind everything we build.
            </p>
            <Link
              href="/science"
              className="mt-5 inline-flex items-center gap-2 text-xs text-gray-400 transition-colors hover:text-gray-900 lg:mt-8 lg:text-sm dark:hover:text-white"
              style={{ fontWeight: 450 }}
            >
              Explore Our Science <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
          {/* 01 — Observe */}
          {/* 01 — Observe: mobile=col (anim top), desktop=row (anim left) */}
          <div className="mx-auto flex w-full max-w-[1300px] flex-col overflow-hidden rounded-md bg-white lg:aspect-[3/2] lg:flex-row lg:rounded-lg dark:bg-neutral-800">
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:w-[66%]">
              <ObserveAnimation />
            </div>
            <div className="flex flex-col justify-center gap-4 px-5 py-6 lg:flex-1 lg:gap-5 lg:px-10 lg:py-0">
              <p className="text-sm leading-relaxed text-gray-600 lg:text-xl dark:text-gray-400" style={{ fontWeight: 400 }}>
                <span className="text-gray-900 dark:text-gray-100">We read biology.</span> Every database. Every published study. Every recorded interaction between molecules that science has ever captured. All of it cross-referenced into a single atlas of how life works. Before we can solve anything, we need to understand everything.
              </p>
              <Link href="/science#observe" className="inline-flex items-center gap-1.5 text-sm transition-colors lg:text-xl hover:![color:#1d4ed8]" style={{ fontWeight: 450, color: "#2563eb" }}>
                Gene Expression Analysis <ArrowUpRight size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* 02 — Compute: mobile=col (anim top), desktop=row (text left, anim right) */}
          <div className="mx-auto flex w-full max-w-[1300px] flex-col overflow-hidden rounded-md bg-white lg:aspect-[3/2] lg:flex-row lg:rounded-lg dark:bg-neutral-800">
            <div className="aspect-[4/3] w-full lg:hidden">
              <ComputeAnimation />
            </div>
            <div className="flex flex-col justify-center gap-4 px-5 py-6 lg:flex-1 lg:gap-5 lg:px-10 lg:py-0">
              <p className="text-sm leading-relaxed text-gray-600 lg:text-xl dark:text-gray-400" style={{ fontWeight: 400 }}>
                <span className="text-gray-900 dark:text-gray-100">Every disease gets its own map. Built for one person.</span> The points in that space are not just genes and proteins. They are metabolites, lipids, epigenetic marks, non-coding RNAs, chromatin states, signaling cascades, and hundreds of other molecular species we are still naming. All of it, mapped for that one biology. Not a map of cancer. Mateo&apos;s cancer. Not a map of Alzheimer&apos;s. Eleanor&apos;s Alzheimer&apos;s.
              </p>
              <Link href="/science#compute" className="inline-flex items-center gap-1.5 text-sm transition-colors lg:text-xl hover:![color:#1d4ed8]" style={{ fontWeight: 450, color: "#2563eb" }}>
                Digital Twin Simulation <ArrowUpRight size={20} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="hidden lg:block lg:w-[66%]">
              <ComputeAnimation />
            </div>
          </div>

          {/* 03 — Discover: mobile=col (anim top), desktop=row (anim left) */}
          <div className="mx-auto flex w-full max-w-[1300px] flex-col overflow-hidden rounded-md bg-white lg:aspect-[3/2] lg:flex-row lg:rounded-lg dark:bg-neutral-800">
            <div className="aspect-[4/3] w-full lg:aspect-auto lg:w-[66%]">
              <DiscoverAnimation />
            </div>
            <div className="flex flex-col justify-center gap-4 px-5 py-6 lg:flex-1 lg:gap-5 lg:px-10 lg:py-0">
              <p className="text-sm leading-relaxed text-gray-600 lg:text-xl dark:text-gray-400" style={{ fontWeight: 400 }}>
                <span className="text-gray-900 dark:text-gray-100">Then we find the answer.</span> Billions of simulations run against that map. Billions of combinations tested, scored, and discarded. Until the system finds the precise points in that molecular landscape where an intervention will actually work. The levers that, when moved in the right order, reverse the disease. Repair the damage. Start the recovery. For that map. For that person.
              </p>
              <Link href="/science#discover" className="inline-flex items-center gap-1.5 text-sm transition-colors lg:text-xl hover:![color:#1d4ed8]" style={{ fontWeight: 450, color: "#2563eb" }}>
                Target Identification <ArrowUpRight size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Historic Photo + Quote — desktop only */}
      <div className="hidden w-full lg:block" style={{ padding: "0 13px 13px" }}>
      <div className="relative w-full overflow-hidden rounded-2xl bg-black">
        {/* Desktop layout */}
        <div className="hidden h-[800px] w-full items-center justify-between px-20 lg:flex">
          <Image src="/historic.webp" alt="Vintage cigarette advertisement — More Doctors Smoke Camels, 1946" width={600} height={520} sizes="30vw" className="h-[65%] w-auto object-contain" style={{ width: "auto", height: "65%" }} />
          <Image src="/historic2.webp" alt="Historic tobacco industry medical endorsement" width={600} height={520} sizes="30vw" className="h-[65%] w-auto object-contain" style={{ width: "auto", height: "65%" }} />
        </div>
        <div className="flex flex-col items-center bg-black lg:hidden">
          <Image src="/historic.webp" alt="Vintage cigarette advertisement — More Doctors Smoke Camels, 1946" width={120} height={104} sizes="40vw" className="h-24 w-auto object-contain px-6 pt-6" style={{ height: "auto" }} />
          <div className="flex flex-col items-center gap-4 px-6 py-8">
            <p className="max-w-lg text-xs leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
              Not long ago, doctors recommended cigarettes. The science was confident. The advertisements were everywhere. Millions trusted the system. The system was wrong. We believe it still is.
            </p>
            <p className="max-w-lg text-xs leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
              A child is born with a disease that was visible in her DNA before she took her first breath. A farmer watches his soil die a little more each season and has no idea why. A doctor prescribes the same drug to two patients and watches it save one and fail the other.
            </p>
            <p className="max-w-lg text-xs leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
              None of this has to be this way. The signals are already there, in every cell, every root, every molecule. What has been missing is the ability to read them fast enough, deeply enough, and personally enough to act before it is too late.
            </p>
            <p className="max-w-lg text-xs leading-relaxed text-white/90" style={{ fontWeight: 400 }}>
              That is what VARL is building. Not another pharmaceutical company. Not another research lab. A system that finally listens to biology and translates what it hears into treatments that heal, food that sustains, and science that never stops learning.
            </p>
          </div>
          <Image src="/historic2.webp" alt="Historic tobacco industry medical endorsement" width={120} height={104} sizes="40vw" className="h-24 w-auto object-contain px-6 pb-4" style={{ height: "auto" }} />
          <span className="pb-3 text-[8px] text-white/30">
            &ldquo;More Doctors Smoke Camels&rdquo; — R.J. Reynolds Tobacco Company, c. 1946
          </span>
        </div>
        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden bg-black/50 lg:block"></div>
        <div className="absolute inset-0 hidden flex-col items-center justify-center gap-8 px-20 lg:flex">
          <p className="max-w-lg text-base leading-relaxed text-white/70" style={{ fontWeight: 400 }}>
            Not long ago, doctors recommended cigarettes. The science was confident. The advertisements were everywhere. Millions trusted the system. The system was wrong. We believe it still is.
          </p>
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
        <span className="absolute bottom-3 left-20 hidden text-xs text-white/30 lg:block">
          &ldquo;More Doctors Smoke Camels&rdquo; — R.J. Reynolds Tobacco Company, c. 1946
        </span>
      </div>
      </div>

      {/* Latest From */}
      <div className="flex w-full flex-col gap-5 py-12 lg:mx-auto lg:max-w-5xl lg:gap-8 lg:px-8 lg:py-20">
        <h2 className="px-4 text-xl tracking-tight text-gray-900 lg:px-0 lg:text-2xl dark:text-gray-100" style={{ fontWeight: 500 }}>
          Latest From
        </h2>

        {/* Mobile: horizontal scroll strip — all 8 cards side by side */}
        <div
          className="flex gap-3 overflow-x-auto pb-2 lg:hidden"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingLeft: "1rem", paddingRight: "1rem", scrollPaddingLeft: "1rem" }}
        >
          {[
            { href: "/latest/regenerative-agriculture-framework", img: "/latest-1.webp", alt: "VARL Publishes New Framework for Regenerative Agriculture", date: "February 10, 2026", title: "VARL Publishes New Framework for Regenerative Agriculture", desc: "A systems-level approach to soil biology and crop resilience, powered by molecular simulation." },
            { href: "/latest/biological-camouflage-drug-delivery", img: "/latest-2.webp", alt: "How Biological Camouflage Inspires New Drug Delivery Systems", date: "February 3, 2026", title: "How Biological Camouflage Inspires New Drug Delivery Systems", desc: "Nature's stealth mechanisms are guiding VARL's next-gen targeted therapies." },
            { href: "/latest/protein-engineering-lab", img: "/latest-3.webp", alt: "Precision at the Molecular Level: Inside VARL's Protein Engineering Lab", date: "January 28, 2026", title: "Precision at the Molecular Level: Inside VARL's Protein Engineering Lab", desc: "Where craftsmanship meets computation to redesign biological structures." },
            { href: "/latest/digital-twin-health-trajectories", img: "/latest-4.webp", alt: "Digital Twin Technology Maps Individual Health Trajectories", date: "January 15, 2026", title: "Digital Twin Technology Maps Individual Health Trajectories", desc: "Personalized simulations that predict disease before symptoms appear." },
            { href: "/latest/novel-biomarkers-early-detection", img: "/latest-5.webp", alt: "VARL Identifies Novel Biomarkers for Early Disease Detection", date: "January 6, 2026", title: "VARL Identifies Novel Biomarkers for Early Disease Detection", desc: "AI-driven analysis reveals signals invisible to traditional diagnostics." },
            { href: "/latest/ai-plant-stress-prediction", img: "/latest-6.webp", alt: "AI Models Predict Plant Stress Before It Happens", date: "December 20, 2025", title: "AI Models Predict Plant Stress Before It Happens", desc: "Lab-grown resilience testing for smarter crops." },
            { href: "/latest/tomato-genome-nutritional-potential", img: "/latest-7.webp", alt: "Decoding the Tomato Genome to Unlock Nutritional Potential", date: "December 11, 2025", title: "Decoding the Tomato Genome to Unlock Nutritional Potential", desc: "How AI maps flavor, nutrition, and yield at once." },
            { href: "/latest/lipid-nanoparticles-cellular-repair", img: "/latest-8.webp", alt: "Lipid Nanoparticles: VARL's Next-Gen Cellular Repair Mechanism", date: "November 29, 2025", title: "Lipid Nanoparticles: VARL's Next-Gen Cellular Repair Mechanism", desc: "Targeted delivery at the molecular frontier." },
          ].map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group flex-shrink-0 overflow-hidden rounded-2xl bg-white dark:bg-neutral-900"
              style={{ width: "72vw", scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image src={a.img} alt={a.alt} fill className="object-cover" sizes="72vw" />
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <span className="text-[10px] tracking-wide text-gray-400">{a.date}</span>
                <h3 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">{a.title}</h3>
                <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: original grid layout */}
        <Link href="/latest/regenerative-agriculture-framework" className="group hidden flex-col overflow-hidden rounded-2xl lg:flex lg:h-[360px] lg:flex-row">
          <div className="relative overflow-hidden lg:aspect-auto lg:h-full lg:w-[65%]">
            <Image src="/latest-1.webp" alt="VARL Publishes New Framework for Regenerative Agriculture" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="65vw" />
          </div>
          <div className="flex w-full flex-col justify-center gap-2 bg-white p-5 lg:h-full lg:w-[35%] lg:gap-3 lg:p-8 dark:bg-neutral-900">
            <span className="text-xs tracking-wide text-gray-400">February 10, 2026</span>
            <h3 className="text-xl font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Publishes New Framework for Regenerative Agriculture</h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">A systems-level approach to soil biology and crop resilience, powered by molecular simulation.</p>
          </div>
        </Link>

        <div className="hidden lg:flex lg:flex-row lg:gap-8">
          <Link href="/latest/biological-camouflage-drug-delivery" className="group overflow-hidden rounded-2xl lg:w-1/2">
            <div className="relative overflow-hidden lg:aspect-[1/0.6]">
              <Image src="/latest-2.webp" alt="How Biological Camouflage Inspires New Drug Delivery Systems" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">February 3, 2026</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">How Biological Camouflage Inspires New Drug Delivery Systems</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Nature&apos;s stealth mechanisms are guiding VARL&apos;s next-gen targeted therapies.</p>
            </div>
          </Link>
          <Link href="/latest/protein-engineering-lab" className="group overflow-hidden rounded-2xl lg:w-1/2">
            <div className="relative overflow-hidden lg:aspect-[1/0.6]">
              <Image src="/latest-3.webp" alt="Precision at the Molecular Level: Inside VARL's Protein Engineering Lab" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 28, 2026</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Precision at the Molecular Level: Inside VARL&apos;s Protein Engineering Lab</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Where craftsmanship meets computation to redesign biological structures.</p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-8">
          <Link href="/latest/digital-twin-health-trajectories" className="group overflow-hidden rounded-2xl lg:w-1/2">
            <div className="relative overflow-hidden lg:aspect-[1/0.6]">
              <Image src="/latest-4.webp" alt="Digital Twin Technology Maps Individual Health Trajectories" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 15, 2026</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Digital Twin Technology Maps Individual Health Trajectories</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Personalized simulations that predict disease before symptoms appear.</p>
            </div>
          </Link>
          <Link href="/latest/novel-biomarkers-early-detection" className="group overflow-hidden rounded-2xl lg:w-1/2">
            <div className="relative overflow-hidden lg:aspect-[1/0.6]">
              <Image src="/latest-5.webp" alt="VARL Identifies Novel Biomarkers for Early Disease Detection" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 6, 2026</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Identifies Novel Biomarkers for Early Disease Detection</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">AI-driven analysis reveals signals invisible to traditional diagnostics.</p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-8">
          <Link href="/latest/ai-plant-stress-prediction" className="group overflow-hidden rounded-2xl lg:w-1/3">
            <div className="relative overflow-hidden lg:aspect-[1/0.5]">
              <Image src="/latest-6.webp" alt="AI Models Predict Plant Stress Before It Happens" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 20, 2025</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">AI Models Predict Plant Stress Before It Happens</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Lab-grown resilience testing for smarter crops.</p>
            </div>
          </Link>
          <Link href="/latest/tomato-genome-nutritional-potential" className="group overflow-hidden rounded-2xl lg:w-1/3">
            <div className="relative overflow-hidden lg:aspect-[1/0.5]">
              <Image src="/latest-7.webp" alt="Decoding the Tomato Genome to Unlock Nutritional Potential" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 11, 2025</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Decoding the Tomato Genome to Unlock Nutritional Potential</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">How AI maps flavor, nutrition, and yield at once.</p>
            </div>
          </Link>
          <Link href="/latest/lipid-nanoparticles-cellular-repair" className="group overflow-hidden rounded-2xl lg:w-1/3">
            <div className="relative overflow-hidden lg:aspect-[1/0.5]">
              <Image src="/latest-8.webp" alt="Lipid Nanoparticles: VARL's Next-Gen Cellular Repair Mechanism" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">November 29, 2025</span>
              <h3 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Lipid Nanoparticles: VARL&apos;s Next-Gen Cellular Repair Mechanism</h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Targeted delivery at the molecular frontier.</p>
            </div>
          </Link>
        </div>

        <div className="flex justify-center px-4 pt-2 lg:px-0 lg:pt-4">
          <Link href="/latest" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm text-gray-700 transition-all hover:bg-gray-50 hover:text-black lg:px-8 lg:py-3 lg:text-base dark:bg-neutral-900 dark:text-gray-300 dark:hover:bg-neutral-800 dark:hover:text-white" style={{ fontWeight: 450 }}>
            Browse All
          </Link>
        </div>
      </div>

      <JoinUs
        title="Saving the World Is a Cliché. Guess We Love Clichés."
        description="We're looking for scientists, engineers, and thinkers who believe that every disease is solvable and every biological system can be understood. Join us in building the intelligence that heals."
      />

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
