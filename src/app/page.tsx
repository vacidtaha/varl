import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import JoinUs from "@/components/JoinUs";

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

      <div className="mx-auto max-w-4xl px-8 py-32 text-center">
        <p className="text-2xl leading-relaxed tracking-tight text-gray-800 dark:text-gray-200" style={{ fontWeight: 400 }}>
          VARL was founded with the aim of redefining the boundaries of biological systems. By analyzing how cells, genes, and tissues communicate, it uses this data to design new healing, repair, and regeneration processes. At the intersection of science and intelligence, every biological loss becomes solvable.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 py-20">
        <h3 className="text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Latest From
        </h3>
        {/* Tek kutu */}
        <a href="#" className="group flex h-[360px] w-full overflow-hidden rounded-2xl">
          <img src="/latest-1.webp" alt="" loading="lazy" className="h-full w-[65%] object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="flex h-full w-[35%] flex-col justify-center gap-3 bg-white p-8 dark:bg-neutral-900">
            <span className="text-xs tracking-wide text-gray-400">February 10, 2026</span>
            <h4 className="text-xl font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Publishes New Framework for Regenerative Agriculture</h4>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">A systems-level approach to soil biology and crop resilience, powered by molecular simulation.</p>
          </div>
        </a>

        {/* İkili kutular */}
        <div className="flex w-full gap-8">
          <a href="#" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-2.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">February 3, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">How Biological Camouflage Inspires New Drug Delivery Systems</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Nature&#39;s stealth mechanisms are guiding VARL&#39;s next-gen targeted therapies.</p>
            </div>
          </a>
          <a href="#" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-3.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 28, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Precision at the Molecular Level: Inside VARL&#39;s Protein Engineering Lab</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Where craftsmanship meets computation to redesign biological structures.</p>
            </div>
          </a>
        </div>
        <div className="flex w-full gap-8">
          <a href="#" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-4.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 15, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">Digital Twin Technology Maps Individual Health Trajectories</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Personalized simulations that predict disease before symptoms appear.</p>
            </div>
          </a>
          <a href="#" className="group w-1/2 overflow-hidden rounded-2xl">
            <img src="/latest-5.webp" alt="" loading="lazy" className="aspect-[1/0.6] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.4] w-full flex-col justify-center gap-2 bg-white p-6 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">January 6, 2026</span>
              <h4 className="text-base font-medium leading-snug text-gray-900 dark:text-gray-100">VARL Identifies Novel Biomarkers for Early Disease Detection</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">AI-driven analysis reveals signals invisible to traditional diagnostics.</p>
            </div>
          </a>
        </div>

        {/* Üçlü kutular */}
        <div className="flex w-full gap-8">
          <a href="#" className="group w-1/3 overflow-hidden rounded-2xl">
            <img src="/latest-6.webp" alt="" loading="lazy" className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.5] w-full flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 20, 2025</span>
              <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">AI Models Predict Plant Stress Before It Happens</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">Lab-grown resilience testing for smarter crops.</p>
            </div>
          </a>
          <a href="#" className="group w-1/3 overflow-hidden rounded-2xl">
            <img src="/latest-7.webp" alt="" loading="lazy" className="aspect-[1/0.5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="flex aspect-[1/0.5] w-full flex-col justify-center gap-2 bg-white p-5 dark:bg-neutral-900">
              <span className="text-xs tracking-wide text-gray-400">December 11, 2025</span>
              <h4 className="text-sm font-medium leading-snug text-gray-900 dark:text-gray-100">Decoding the Tomato Genome to Unlock Nutritional Potential</h4>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">How AI maps flavor, nutrition, and yield at once.</p>
            </div>
          </a>
          <a href="#" className="group w-1/3 overflow-hidden rounded-2xl">
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
