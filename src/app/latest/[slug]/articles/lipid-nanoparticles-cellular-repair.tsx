export default function LipidNanoparticlesCellularRepair() {
  return (
    <article className="mt-10 lg:mt-16">

      <p className="text-base leading-relaxed text-gray-700 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        In August 2018, a quiet milestone reshaped the future of medicine. The FDA approved Onpattro (patisiran) — the first drug delivered by lipid nanoparticles — to treat a rare genetic disease by silencing a single gene inside the liver. Two years later, lipid nanoparticles carried mRNA into the arms of billions of people during the COVID-19 pandemic, becoming the most rapidly deployed pharmaceutical technology in human history.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        But vaccines were never the endgame. Lipid nanoparticles are programmable delivery vehicles — 50 to 120 nanometer capsules capable of carrying virtually any nucleic acid payload to specific cell types. Today, they are being engineered to deliver CRISPR gene-editing machinery directly into living patients, repair defective genes in lung tissue, reprogram immune cells to fight cancer, and restore function to damaged organs — all without a single surgical incision.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        At VARL, we see lipid nanoparticles not as drug containers, but as the molecular couriers of a new era in cellular repair.
      </p>

      {/* Section 1 - Anatomy */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Anatomy of a Lipid Nanoparticle
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        A lipid nanoparticle is a self-assembled structure built from four lipid components, each serving a distinct biophysical function. The ratio, chemistry, and architecture of these components determine everything — which cells the particle reaches, how efficiently it delivers its cargo, and whether it triggers an immune response.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-3 lg:mt-12 lg:grid-cols-2 lg:gap-4">
        {[
          {
            name: "Ionizable Lipid",
            pct: "~50%",
            color: "bg-blue-500",
            role: "The functional core. Neutral at physiological pH (7.4), positively charged in acidic endosomes (pH ~5.5). This charge switch drives endosomal escape — the critical step that releases cargo into the cytoplasm. The ionizable lipid determines delivery efficiency more than any other component.",
            examples: "DLin-MC3-DMA (Onpattro), SM-102 (Moderna), ALC-0315 (Pfizer/BioNTech)"
          },
          {
            name: "Cholesterol",
            pct: "~38%",
            color: "bg-amber-500",
            role: "Structural stabilizer. Fills gaps between lipid molecules, increases membrane rigidity, reduces drug leakage during circulation, and enhances particle stability in serum. Without cholesterol, LNPs disintegrate within hours of entering the bloodstream.",
            examples: "Unmodified cholesterol, 20\u03b1-hydroxycholesterol (organ-targeting variants)"
          },
          {
            name: "Helper Phospholipid",
            pct: "~10%",
            color: "bg-green-500",
            role: "Facilitates membrane fusion and enhances cellular uptake. DSPC (distearoylphosphatidylcholine) forms the outer bilayer shell, while DOPE (dioleoylphosphatidylethanolamine) promotes inverted hexagonal phase formation, aiding endosomal escape.",
            examples: "DSPC (standard), DOPE (enhanced endosomal escape)"
          },
          {
            name: "PEG-Lipid",
            pct: "~2%",
            color: "bg-purple-500",
            role: "Controls particle size during self-assembly and provides a hydrophilic surface layer that delays immune recognition. However, PEG-lipids also inhibit cellular uptake and can trigger anti-PEG antibodies on repeated dosing — a tradeoff that limits their proportion to 1-3 mol%.",
            examples: "DMG-PEG2000 (Moderna), ALC-0159 (Pfizer/BioNTech)"
          },
        ].map((lipid) => (
          <div key={lipid.name} className="flex flex-col rounded-2xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${lipid.color}`} />
              <span className="text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{lipid.name}</span>
              <span className="rounded-full bg-gray-200 px-2 py-0.5 font-mono text-[10px] text-gray-500 lg:text-xs dark:bg-neutral-800 dark:text-gray-400">{lipid.pct}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-gray-600 lg:text-sm dark:text-gray-400">{lipid.role}</p>
            <div className="mt-3">
              <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>EXAMPLES</span>
              <p className="mt-0.5 font-mono text-[10px] text-gray-500 lg:text-xs dark:text-gray-500">{lipid.examples}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2 - Endosomal Escape */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Endosomal Escape Problem
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The greatest engineering challenge in lipid nanoparticle design is not reaching the cell — it is escaping from within it. When an LNP is internalized via endocytosis, it enters an endosome: a membrane-bound compartment that progressively acidifies as it matures. If the cargo is not released before the endosome fuses with a lysosome, the payload — whether mRNA, siRNA, or CRISPR components — is enzymatically destroyed.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Current estimates suggest that fewer than 2-5% of internalized LNPs successfully escape the endosome. This means that for every 100 nanoparticles that enter a cell, 95-98 have their cargo degraded. The entire field of LNP engineering is, in many ways, an effort to improve this single number.
      </p>

      {/* Process visualization */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          LNP Intracellular Delivery Pathway
        </h3>
        <div className="flex flex-col overflow-hidden rounded-2xl lg:flex-row">
          {[
            { step: "01", title: "Adsorption", desc: "ApoE and other serum proteins adsorb onto the LNP surface, creating a protein corona that mediates receptor recognition on target hepatocytes via LDL receptor.", bg: "bg-gray-900 dark:bg-neutral-950" },
            { step: "02", title: "Endocytosis", desc: "Receptor-mediated endocytosis internalizes the LNP into an early endosome (pH ~6.5). The particle remains intact; cargo is still encapsulated.", bg: "bg-gray-800 dark:bg-neutral-900" },
            { step: "03", title: "Acidification", desc: "As the endosome matures (pH drops to ~5.5), ionizable lipids become protonated and positively charged. They interact electrostatically with the negatively charged endosomal membrane.", bg: "bg-gray-700 dark:bg-neutral-800" },
            { step: "04", title: "Escape", desc: "Protonated ionizable lipids disrupt the endosomal bilayer through wedge-shaped molecular geometry, releasing nucleic acid cargo into the cytoplasm before lysosomal degradation.", bg: "bg-blue-600 dark:bg-blue-700" },
          ].map((s) => (
            <div key={s.step} className={`flex flex-col gap-2 p-5 lg:w-1/4 lg:min-h-[220px] lg:p-6 ${s.bg}`}>
              <span className="font-mono text-xs text-gray-500">{s.step}</span>
              <h4 className="text-base text-white lg:text-lg" style={{ fontWeight: 500 }}>{s.title}</h4>
              <p className="text-xs leading-relaxed text-gray-300 lg:text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Beyond Vaccines */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Beyond Vaccines: The Therapeutic Frontier
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The COVID-19 vaccines proved that LNPs can safely deliver mRNA to human cells at population scale. But mRNA encoding the spike protein was just the simplest possible application — a single, transient protein expressed in muscle tissue. The real potential lies in delivering instructions for cellular repair: silencing disease-causing genes, editing genomic mutations, or restoring missing proteins in specific organs.
      </p>

      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          LNP Therapeutic Modalities
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-gray-50 dark:bg-neutral-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-800">
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Cargo Type</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Mechanism</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Duration</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Clinical Stage</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>siRNA</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Gene silencing via RNA interference</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Weeks to months</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>FDA Approved</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>mRNA</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Transient protein expression</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Days to weeks</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>FDA Approved</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>CRISPR-Cas9</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Permanent genome editing</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Permanent</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] text-blue-700 lg:text-xs dark:bg-blue-500/10 dark:text-blue-400" style={{ fontWeight: 500 }}>Phase 3</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Base Editing</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Single-nucleotide correction without DSBs</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Permanent</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] text-yellow-700 lg:text-xs dark:bg-yellow-500/10 dark:text-yellow-400" style={{ fontWeight: 500 }}>Phase 1</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Circular RNA</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Extended protein expression (RNase-resistant)</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Weeks to months</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 lg:text-xs dark:bg-neutral-800 dark:text-gray-400" style={{ fontWeight: 500 }}>Preclinical</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 4 - CRISPR In Vivo */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        CRISPR In Vivo: Editing Genes Inside the Body
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The most transformative application of lipid nanoparticles may be delivering CRISPR-Cas9 gene-editing machinery directly into patients — no cell extraction, no ex vivo manipulation, no viral vectors. A single intravenous infusion of LNPs carrying Cas9 mRNA and a guide RNA can permanently edit a target gene in the liver, potentially curing genetic diseases with one dose.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Intellia Therapeutics&apos; NTLA-2001 (nexiguran ziclumeran) demonstrated this in 2021, becoming the first in vivo CRISPR therapy to show efficacy in humans. Targeting the TTR gene in the liver, a single 55 mg dose achieved a median 90% reduction in serum transthyretin protein — the cause of hereditary ATTR amyloidosis. The treatment advanced to Phase 3 trials with over 650 patients enrolled.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The challenge now is going beyond the liver. The liver is the natural target for LNPs because intravenously administered particles accumulate there via ApoE-mediated uptake through LDL receptors. Reaching the lungs, brain, spleen, or muscle requires fundamentally different lipid chemistries and targeting strategies.
      </p>

      {/* Organ targeting breakthroughs */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Organ-Selective LNP Delivery: Recent Breakthroughs
        </h3>
        <div className="rounded-2xl bg-gray-50 p-5 lg:p-8 dark:bg-neutral-900">
          <div className="flex flex-col gap-4">
            {[
              { organ: "Liver", efficiency: 95, detail: "Default LNP target via ApoE/LDLR pathway. Gene-editing efficiency: 37% (NTLA-2001, Phase 1). Most clinically advanced.", color: "bg-red-500" },
              { organ: "Lung", efficiency: 90, detail: "LuT (lung-targeting) lipids achieve >90% lung selectivity with 9.2x editing efficiency improvement. Therapeutic IL-10 delivery demonstrated in acute lung injury models (2026).", color: "bg-blue-500" },
              { organ: "Spleen", efficiency: 72, detail: "Charge-modified LNPs redirect to splenic immune cells. Enables in vivo CAR-T programming — engineering immune cells inside the body without extraction.", color: "bg-purple-500" },
              { organ: "Brain", efficiency: 18, detail: "Blood-brain barrier remains the primary obstacle. Transferrin receptor-targeting LNPs and focused ultrasound-assisted delivery show emerging results in preclinical glioblastoma models.", color: "bg-teal-500" },
              { organ: "Muscle", efficiency: 12, detail: "Local intramuscular injection (COVID-19 vaccines). Systemic muscle targeting for diseases like Duchenne muscular dystrophy remains a major unmet challenge.", color: "bg-amber-500" },
            ].map((item) => (
              <div key={item.organ} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.color}`} />
                    <span className="text-xs text-gray-900 lg:text-sm dark:text-gray-100" style={{ fontWeight: 500 }}>{item.organ}</span>
                  </div>
                  <span className="font-mono text-xs text-gray-400 lg:text-sm">{item.efficiency}% selectivity</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 lg:h-3 dark:bg-neutral-800">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${item.efficiency}%` }} />
                </div>
                <p className="text-[10px] leading-relaxed text-gray-500 lg:text-xs dark:text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 - Clinical Pipeline */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        From Lab to Patient: The Clinical Pipeline
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The LNP clinical landscape has expanded dramatically since Onpattro&apos;s approval in 2018. What began as a single approved drug for a rare liver disease has grown into a diverse pipeline spanning gene silencing, protein replacement, gene editing, and cancer immunotherapy.
      </p>

      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          LNP Therapeutic Milestones
        </h3>
        <div className="rounded-2xl bg-gray-50 p-5 lg:p-8 dark:bg-neutral-900">
          <div className="relative flex flex-col gap-0">
            {[
              { year: "2018", event: "Onpattro (patisiran) FDA approval", detail: "First LNP-delivered siRNA drug. Treats hereditary ATTR amyloidosis by silencing TTR gene in liver. Validated the entire LNP platform for clinical use.", color: "bg-green-500" },
              { year: "2020", event: "COVID-19 mRNA vaccines authorized", detail: "Pfizer/BioNTech (BNT162b2) and Moderna (mRNA-1273). Billions of doses administered. Proved LNP safety at population scale and catalyzed massive R&D investment.", color: "bg-green-500" },
              { year: "2021", event: "First in vivo CRISPR editing in humans", detail: "Intellia's NTLA-2001 delivered CRISPR-Cas9 via LNP to edit TTR in liver. Single dose achieved 87% TTR reduction. Published in NEJM.", color: "bg-blue-500" },
              { year: "2023", event: "Alnylam's Amvuttra approved (EU)", detail: "Second-generation LNP-siRNA for ATTR amyloidosis with subcutaneous administration. Demonstrated that LNP design improvements enable less frequent dosing.", color: "bg-green-500" },
              { year: "2024", event: "NTLA-2002 enters Phase 3 for HAE", detail: "Single-dose CRISPR editing of KLKB1 gene for hereditary angioedema. HAELO trial: 60 patients, topline data expected mid-2026.", color: "bg-blue-500" },
              { year: "2025", event: "Organ-selective LNPs reach preclinical milestones", detail: "Lung-targeting (LuT) lipids, spleen-selective formulations, and siloxane-incorporated LNPs demonstrate tissue-specific delivery beyond liver in multiple disease models.", color: "bg-purple-500" },
            ].map((milestone, i) => (
              <div key={milestone.year} className="flex gap-4 lg:gap-6">
                <div className="flex flex-col items-center">
                  <span className={`h-3 w-3 shrink-0 rounded-full ${milestone.color}`} />
                  {i < 5 && <div className="w-px flex-1 bg-gray-200 dark:bg-neutral-700" />}
                </div>
                <div className={`${i < 5 ? "pb-6 lg:pb-8" : ""}`}>
                  <span className="font-mono text-xs text-gray-900 lg:text-sm dark:text-gray-100" style={{ fontWeight: 500 }}>{milestone.year}</span>
                  <p className="mt-0.5 text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{milestone.event}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">{milestone.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6 - Challenges */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Hard Problems
      </h2>

      <div className="mt-6 flex flex-col gap-3 lg:mt-8 lg:gap-4">
        {[
          { title: "Endosomal Escape Efficiency", desc: "Only 2-5% of internalized LNPs release their cargo into the cytoplasm. The remaining 95-98% are degraded in lysosomes. Even small improvements in this ratio translate to dramatically lower dosing requirements and reduced toxicity. New ionizable lipid architectures — branched, bicyclic, and siloxane-incorporated — are pushing this boundary." },
          { title: "Extrahepatic Delivery", desc: "The liver's natural affinity for lipid particles makes it the default destination. Reaching lungs, brain, heart, or muscle systemically requires lipid chemistries that alter the protein corona, redirect receptor engagement, or exploit organ-specific endothelial features. Each target organ demands a fundamentally different LNP formulation." },
          { title: "Immunogenicity on Repeat Dosing", desc: "PEG-lipids — essential for controlling particle size — can trigger anti-PEG antibodies, leading to accelerated clearance and infusion-related reactions on subsequent doses. For one-time gene-editing applications this is manageable; for chronic therapies requiring repeated dosing, PEG-free alternatives are urgently needed." },
          { title: "Manufacturing Complexity", desc: "LNP production uses rapid microfluidic mixing at precisely controlled ratios, flow rates, and temperatures. Scaling from lab-scale (milliliters) to clinical-scale (thousands of liters) while maintaining particle uniformity, encapsulation efficiency, and stability remains a significant engineering challenge. Cold-chain requirements add logistical cost." },
          { title: "Off-Target Editing", desc: "For CRISPR-carrying LNPs, editing the wrong gene — or the right gene in the wrong tissue — could have severe consequences. The NTLA-2001 clinical hold in late 2025 following Grade 4 liver enzyme elevations underscored that even well-designed therapies can encounter unexpected toxicity at scale. Rigorous safety monitoring and improved guide RNA specificity are non-negotiable." },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
            <h4 className="text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{item.title}</h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Section 7 - VARL */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        VARL&apos;s Approach: Simulation-Guided LNP Design
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Traditionally, LNP optimization is a brute-force process: synthesize hundreds of lipid variants, formulate them into particles, test them in cell cultures and animal models, and iterate. A single optimization cycle takes 3-6 months and costs hundreds of thousands of dollars. Most variants fail.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        VARL&apos;s computational biology platform inverts this workflow. Using molecular dynamics simulations and digital twin technology, we model lipid self-assembly, predict membrane fusion kinetics, simulate endosomal escape probability, and forecast organ biodistribution — all before a single particle is manufactured. Our models screen thousands of lipid architectures in silico, identifying the most promising candidates for synthesis and testing.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        This is not a replacement for wet-lab validation. It is an acceleration layer that reduces the experimental search space by orders of magnitude, focusing resources on formulations with the highest predicted probability of success.
      </p>

      {/* Section 8 - Future */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Next Decade
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Lipid nanoparticles have already proven their worth as vaccines and gene-silencing agents. The next decade will determine whether they can fulfill their larger promise: programmable cellular repair. The technical foundations are in place — ionizable lipids that escape endosomes, organ-targeting chemistries, CRISPR machinery that edits genomes with single-nucleotide precision.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        What remains is integration. Connecting the right lipid to the right cargo, the right targeting ligand, and the right disease — for the right patient. This is not a chemistry problem or a biology problem. It is a systems problem. And it is exactly the kind of problem that computational biology was built to solve.
      </p>

      <div className="mx-auto mt-12 h-px w-16 bg-gray-200 lg:mt-20 dark:bg-neutral-800" />

      {/* References */}
      <div className="mt-10 lg:mt-16">
        <h3 className="text-lg tracking-tight text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
          References
        </h3>
        <ol className="mt-4 flex flex-col gap-2 lg:mt-6 lg:gap-3">
          {[
            "Adams, D., Gonzalez-Duarte, A., O'Riordan, W. D., et al. (2018). Patisiran, an RNAi therapeutic, for hereditary transthyretin amyloidosis. New England Journal of Medicine, 379(1), 11–21.",
            "Polack, F. P., Thomas, S. J., Kitchin, N., et al. (2020). Safety and efficacy of the BNT162b2 mRNA Covid-19 vaccine. New England Journal of Medicine, 383(27), 2603–2615.",
            "Gillmore, J. D., Gane, E., Taubel, J., et al. (2021). CRISPR-Cas9 in vivo gene editing for transthyretin amyloidosis. New England Journal of Medicine, 385(6), 493–502.",
            "Qiu, M., Tang, Y., Chen, J., et al. (2022). Lung-selective mRNA delivery of synthetic lipid nanoparticles for the treatment of pulmonary lymphangioleiomyomatosis. PNAS, 119(8), e2116271119.",
            "Wei, T., Cheng, Q., Min, Y. L., et al. (2020). Systemic nanoparticle delivery of CRISPR-Cas9 ribonucleoproteins for effective tissue specific genome editing. Nature Communications, 11(1), 3232.",
            "Patel, S., Ashwanikumar, N., Robinson, E., et al. (2020). Naturally-occurring cholesterol analogues in lipid nanoparticles induce polymorphic shape and enhance intracellular delivery of mRNA. Nature Communications, 11(1), 983.",
            "Herrera-Barrera, M., Ryals, R. C., Gautam, M., et al. (2023). Peptide-guided lipid nanoparticles deliver mRNA to the neural retina of rodents and nonhuman primates. Science Advances, 9(2), eadd4623.",
            "Rurik, J. G., Tombácz, I., Yadegari, A., et al. (2022). CAR T cells produced in vivo to treat cardiac injury. Science, 375(6576), 91–96.",
            "Shi, D., Beasock, D., Fessler, A., et al. (2022). To PEGylate or not to PEGylate: immunological properties of nanomedicine's most popular component, polyethylene glycol and its alternatives. Advanced Drug Delivery Reviews, 180, 114079.",
            "Intellia Therapeutics. (2025). Third Quarter 2025 Financial Results and Clinical Updates. Press Release, October 29, 2025.",
          ].map((ref, i) => (
            <li key={i} className="flex gap-3 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">
              <span className="mt-0.5 shrink-0 font-mono text-xs text-gray-400 dark:text-gray-500" style={{ fontWeight: 500 }}>[{i + 1}]</span>
              <span>{ref}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
