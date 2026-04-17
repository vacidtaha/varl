export default function BiologicalCamouflageDrugDelivery() {
  return (
    <article className="mt-10 lg:mt-16">

      {/* Lead paragraph */}
      <p className="text-base leading-relaxed text-gray-700 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        For decades, the greatest obstacle in drug delivery has not been the drugs themselves — it has been the human body. The immune system, finely tuned by millions of years of evolution, identifies and destroys foreign particles with remarkable efficiency. Synthetic nanoparticles, regardless of how carefully engineered, are flagged and cleared from the bloodstream within minutes. The drug never reaches its target.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        But nature has already solved this problem. Every cell in the human body carries a molecular identity card — a complex arrangement of surface proteins, glycans, and lipids that tells the immune system: <em>I belong here. Do not attack.</em> Red blood cells circulate for 120 days without immune interference. Platelets navigate toward wounds without being intercepted. Cancer cells hijack these same signals to evade detection.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        Now, researchers — including our team at VARL — are learning to speak this molecular language. By wrapping synthetic nanoparticles in real cell membranes, we create delivery vehicles that are effectively invisible to the immune system. This is biological camouflage: not a chemical trick, but a fundamental shift in how we think about drug delivery.
      </p>

      {/* Section 1 */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Problem with Synthetic Stealth
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The first-generation solution to immune clearance was PEGylation — coating nanoparticles with polyethylene glycol (PEG), a synthetic polymer that creates a hydrophilic shield around the particle surface. PEGylation became the gold standard after its introduction in the 1990s and is still used in products ranging from Doxil (PEGylated liposomal doxorubicin) to the Pfizer-BioNTech COVID-19 mRNA vaccine.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        But PEGylation has a critical weakness: the body learns to recognize it. After the first dose, the immune system generates anti-PEG antibodies. On subsequent administrations, a phenomenon called <strong className="text-gray-900 dark:text-gray-100">Accelerated Blood Clearance (ABC)</strong> occurs — PEGylated nanoparticles are rapidly eliminated before they can deliver their payload. Studies have shown that conventional linear PEGylated liposomes can lose over 90% of their circulation time after a second dose.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Even more concerning, epidemiological surveys indicate that up to 40% of the general population already carries pre-existing anti-PEG antibodies — likely from widespread exposure to PEG in consumer products like cosmetics, toothpaste, and laxatives. For these individuals, the first dose of a PEGylated nanomedicine may already trigger adverse reactions.
      </p>

      {/* Comparison Table: PEGylation vs Biomimetic */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          PEGylation vs. Cell Membrane Coating
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-gray-50 dark:bg-neutral-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-800">
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Parameter</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>PEGylation</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Cell Membrane Coating</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Mechanism</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Hydrophilic polymer shield</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Native surface protein mimicry</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Immune Evasion</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Passive steric repulsion</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Active &quot;don&apos;t eat me&quot; signaling via CD47</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Repeat Dosing</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Triggers anti-PEG antibodies (ABC effect)</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">No antibody response observed</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Targeting</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Passive (EPR effect only)</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Active + passive (native receptor-ligand pairs)</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Biocompatibility</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Synthetic — potential hypersensitivity</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Biological — inherently biocompatible</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Manufacturing</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Scalable, well-established</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Emerging — requires cell sourcing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2 */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Nature&apos;s Identity Cards: How Cells Avoid Immune Attack
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The human immune system distinguishes self from non-self through a sophisticated repertoire of surface markers. The most important of these for drug delivery is <strong className="text-gray-900 dark:text-gray-100">CD47</strong> — a transmembrane protein expressed on virtually every cell in the body. CD47 binds to Signal Regulatory Protein alpha (SIRP&#945;) on macrophages, transmitting a &quot;don&apos;t eat me&quot; signal that inhibits phagocytosis.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Red blood cells are the most striking example. With no nucleus, no organelles, and a lifespan of approximately 120 days, erythrocytes survive in the bloodstream longer than almost any other cell type. Their secret is a dense coating of CD47 and complement regulatory proteins (CD55, CD59) that continuously signals their identity to patrolling immune cells.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Platelets carry a different molecular toolkit. Their membranes are rich in P-selectin, GPIb&#945;, and integrin &#945;IIb&#946;3 — proteins that mediate adhesion to damaged endothelium and interaction with circulating tumor cells. Cancer cells, in turn, express homotypic adhesion molecules (EpCAM, N-cadherin, galectin-3) that enable them to recognize and bind to cells of the same lineage.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The insight behind biomimetic drug delivery is disarmingly simple: if you coat a nanoparticle with a real cell membrane, it inherits all of these surface markers — and with them, the cell&apos;s biological identity.
      </p>

      {/* Cell membrane sources visual */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Cell Membrane Sources and Their Therapeutic Advantages
        </h3>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {[
            {
              source: "Red Blood Cells",
              tag: "Erythrocytes",
              color: "bg-red-500",
              proteins: "CD47, CD55, CD59, Glycophorin A",
              advantage: "Longest circulation time (~120 days in vivo). Immune evasion via CD47-SIRP\u03b1 axis. Most extensively studied membrane source.",
              application: "Long-circulating chemotherapy carriers, detoxification agents"
            },
            {
              source: "Platelets",
              tag: "Thrombocytes",
              color: "bg-amber-500",
              proteins: "P-selectin, GPIb\u03b1, integrin \u03b1IIb\u03b23, CD47",
              advantage: "Natural affinity for damaged vasculature and circulating tumor cells. Dual immune evasion and active targeting.",
              application: "Atherosclerosis therapy, metastatic cancer targeting"
            },
            {
              source: "White Blood Cells",
              tag: "Leukocytes",
              color: "bg-blue-500",
              proteins: "LFA-1, Mac-1, CD45, CXCR4",
              advantage: "Ability to cross biological barriers (BBB, tumor endothelium). Natural inflammatory tropism — migrates toward disease sites.",
              application: "Brain tumor delivery, inflammatory disease targeting"
            },
            {
              source: "Cancer Cells",
              tag: "Homotypic",
              color: "bg-purple-500",
              proteins: "EpCAM, N-cadherin, Galectin-3, TF-antigen",
              advantage: "Homotypic targeting — preferentially binds to cancer cells of the same lineage. Carries tumor-specific antigens for immune activation.",
              application: "Personalized cancer vaccines, tumor-targeted chemotherapy"
            },
          ].map((cell) => (
            <div key={cell.source} className="flex flex-col rounded-2xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${cell.color}`} />
                <span className="text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{cell.source}</span>
                <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] text-gray-500 lg:text-xs dark:bg-neutral-800 dark:text-gray-400">{cell.tag}</span>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <div>
                  <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>KEY SURFACE PROTEINS</span>
                  <p className="mt-0.5 font-mono text-xs text-gray-600 lg:text-sm dark:text-gray-400">{cell.proteins}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>ADVANTAGE</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-600 lg:text-sm dark:text-gray-400">{cell.advantage}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>APPLICATION</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-600 lg:text-sm dark:text-gray-400">{cell.application}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        How It Works: From Cell to Carrier
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The fabrication of cell membrane-coated nanoparticles (CMNPs) follows a three-stage process: membrane extraction, nanoparticle synthesis, and membrane coating. Each stage must preserve the structural integrity and biological activity of the membrane proteins — if CD47 is denatured during extraction, the nanoparticle loses its stealth properties entirely.
      </p>

      {/* Process steps */}
      <div className="mt-8 lg:mt-12">
        <div className="flex flex-col overflow-hidden rounded-2xl lg:flex-row">
          {[
            {
              step: "01",
              title: "Cell Lysis & Extraction",
              desc: "Source cells are lysed using hypotonic buffer treatment, releasing intracellular contents while preserving the membrane. Differential centrifugation isolates the membrane fraction from cytoplasmic proteins and organelle debris.",
              bg: "bg-gray-900 dark:bg-neutral-950",
              text: "text-gray-300",
              title_text: "text-white",
            },
            {
              step: "02",
              title: "Nanoparticle Core",
              desc: "The inner core — typically PLGA, silica, or gold — is synthesized to desired specifications. Core material determines drug loading capacity, release kinetics, and imaging properties. PLGA remains the most common choice for its FDA-approved biodegradability.",
              bg: "bg-gray-800 dark:bg-neutral-900",
              text: "text-gray-400",
              title_text: "text-white",
            },
            {
              step: "03",
              title: "Membrane Coating",
              desc: "The membrane is fused onto the nanoparticle core through physical extrusion or sonication. Extrusion through polycarbonate membranes (200 nm pore size) produces uniform, right-side-out coatings that retain ~95% of native surface protein orientation.",
              bg: "bg-gray-700 dark:bg-neutral-800",
              text: "text-gray-300",
              title_text: "text-white",
            },
          ].map((s) => (
            <div key={s.step} className={`flex flex-col gap-2 p-5 lg:w-1/3 lg:min-h-[260px] lg:p-7 ${s.bg}`}>
              <span className="font-mono text-xs text-gray-500">{s.step}</span>
              <h4 className={`text-base lg:text-lg ${s.title_text}`} style={{ fontWeight: 500 }}>{s.title}</h4>
              <p className={`text-xs leading-relaxed lg:text-sm ${s.text}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-gray-600 lg:mt-8 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The result is a core-shell nanoparticle: a synthetic interior optimized for drug loading and controlled release, wrapped in a biological exterior that is indistinguishable from a natural cell to the immune system. Transmission electron microscopy confirms a characteristic &quot;core-shell&quot; morphology with a membrane thickness of approximately 7-8 nm — consistent with a natural lipid bilayer.
      </p>

      {/* Section 4 - RBC Deep Dive */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Red Blood Cell Camouflage: The Most Proven Approach
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Red blood cell membrane-coated nanoparticles (RBC-NPs) are the most extensively studied class of biomimetic carriers, and for good reason. Erythrocytes are the body&apos;s most abundant cell type (~70% of all cells), they lack a nucleus and organelles (eliminating DNA contamination concerns), and they can be obtained non-invasively from routine blood draws or blood banks.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The pioneering work was published by Liangfang Zhang&apos;s group at UC San Diego in 2011. They demonstrated that PLGA nanoparticles coated with human RBC membranes circulated in mice for over 72 hours — compared to just 15.8 hours for PEGylated equivalents. Critically, the RBC-NPs showed no accelerated clearance on repeat dosing, solving the ABC problem that plagues PEGylation.
      </p>

      {/* Circulation time chart */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          In Vivo Circulation Half-Life Comparison
        </h3>
        <div className="rounded-2xl bg-gray-50 p-5 lg:p-8 dark:bg-neutral-900">
          <div className="flex flex-col gap-4">
            {[
              { label: "Bare PLGA Nanoparticle", hours: 2.2, max: 40, color: "bg-gray-400" },
              { label: "PEGylated PLGA (1st dose)", hours: 15.8, max: 40, color: "bg-blue-400" },
              { label: "PEGylated PLGA (2nd dose)", hours: 4.1, max: 40, color: "bg-blue-300" },
              { label: "RBC Membrane-Coated PLGA (1st dose)", hours: 39.6, max: 40, color: "bg-red-500" },
              { label: "RBC Membrane-Coated PLGA (2nd dose)", hours: 38.2, max: 40, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-gray-600 lg:text-sm dark:text-gray-400">{item.label}</span>
                  <span className="font-mono text-xs text-gray-900 lg:text-sm dark:text-gray-100" style={{ fontWeight: 500 }}>{item.hours}h</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 lg:h-4 dark:bg-neutral-800">
                  <div
                    className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                    style={{ width: `${(item.hours / item.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-gray-400 lg:text-xs">
            Data adapted from Hu et al., PNAS (2011) and Fang et al., Nanoscale (2013). Values represent elimination half-life in murine models.
          </p>
        </div>
      </div>

      {/* Section 5 - Beyond RBCs */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Beyond Red Blood Cells: Specialized Camouflage
      </h2>

      <h3 className="mt-6 text-lg text-gray-900 lg:mt-10 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Platelet-Coated Nanoparticles: Targeting Where It Hurts
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600 lg:mt-4 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Platelet membranes offer a unique dual advantage: immune evasion (via CD47) and active targeting of damaged vasculature and tumor cells. P-selectin on the platelet surface specifically binds to CD44 receptors overexpressed on many cancer cell lines, creating a natural targeting mechanism that requires no additional engineering.
      </p>
      <p className="mt-3 text-base leading-relaxed text-gray-600 lg:mt-4 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        In preclinical models of metastatic breast cancer, platelet membrane-coated PLGA nanoparticles loaded with doxorubicin showed 3.2-fold higher tumor accumulation and 78% tumor growth inhibition compared to free drug — with significantly reduced cardiotoxicity. The particles preferentially accumulated at sites of tumor-associated vascular damage, exploiting the very process that tumors use to establish their blood supply.
      </p>

      <h3 className="mt-8 text-lg text-gray-900 lg:mt-12 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Cancer Cell Membranes: Fighting Fire with Fire
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600 lg:mt-4 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Perhaps the most counterintuitive application is coating nanoparticles with cancer cell membranes. Cancer cells express homotypic adhesion molecules — surface proteins that enable recognition and binding to cells of the same lineage. By extracting membranes from a patient&apos;s own tumor cells and coating drug-loaded nanoparticles, researchers create carriers that preferentially target tumor tissue through this &quot;like-seeks-like&quot; mechanism.
      </p>
      <p className="mt-3 text-base leading-relaxed text-gray-600 lg:mt-4 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Recent studies have shown that glioblastoma cell membrane-coated lipid nanoparticles achieved a 4.7-fold increase in cellular internalization compared to uncoated particles. Beyond drug delivery, cancer cell membrane nanoparticles are being developed as personalized cancer vaccines — the tumor-specific antigens on the membrane surface activate dendritic cells and prime T-cell responses against the patient&apos;s own tumor.
      </p>

      <h3 className="mt-8 text-lg text-gray-900 lg:mt-12 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Hybrid Membranes: The Best of Both Worlds
      </h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600 lg:mt-4 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The latest frontier involves fusing membranes from two or more cell types to create hybrid coatings. An RBC-platelet hybrid, for example, combines the extended circulation of erythrocytes with the vascular targeting of platelets. An RBC-cancer cell hybrid pairs immune evasion with homotypic tumor targeting. These hybrid membranes are fabricated by co-extruding membrane vesicles from different cell sources through polycarbonate filters, producing chimeric coatings that retain the functional proteins of both parent cell types.
      </p>

      {/* Comparison table for performance */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Preclinical Performance Across Membrane Types
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-gray-50 dark:bg-neutral-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-800">
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Membrane</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Circulation t&#189;</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Tumor Accumulation</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Phagocytosis Reduction</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gray-400" />Bare NP
                </td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~2 h</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">1.0x (baseline)</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">—</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500" />RBC
                </td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~40 h</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">2.1x</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">83%</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber-500" />Platelet
                </td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~30 h</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">3.2x</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">71%</td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-purple-500" />Cancer Cell
                </td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~18 h</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">4.7x</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">62%</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-amber-500" />RBC-Platelet Hybrid
                </td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~36 h</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">3.8x</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">79%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-gray-400 lg:text-xs">
          Values represent ranges from multiple preclinical studies in murine tumor models. Individual results vary by nanoparticle core, drug payload, and tumor type. See references for primary data sources.
        </p>
      </div>

      {/* Section 6 - Exosomes */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Exosomes: Nature&apos;s Own Delivery Vehicles
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        While cell membrane-coated nanoparticles borrow the disguise of natural cells, exosomes <em>are</em> natural delivery vehicles. These 30-150 nm extracellular vesicles are secreted by virtually every cell type and play critical roles in intercellular communication — transferring proteins, lipids, mRNA, and microRNA between cells.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Exosomes carry the full complement of their parent cell&apos;s surface markers, granting them inherent biocompatibility and immune evasion. More remarkably, certain exosomes possess the ability to cross the blood-brain barrier — one of the most impermeable biological barriers in the body, and a persistent obstacle in treating neurological diseases.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The field reached a significant milestone in 2025 with the iEXPLORE Phase I clinical trial, which tested engineered exosomes carrying KRAS<sup>G12D</sup>-specific siRNA (iExoKras<sup>G12D</sup>) in patients with advanced metastatic pancreatic cancer — a disease with a 5-year survival rate below 12%. The therapy showed no dose-limiting toxicity, achieved stable disease in patients who had failed multiple prior treatments, and demonstrated on-target engagement with measurable KRAS<sup>G12D</sup> downregulation and increased intratumoral CD8+ T cells.
      </p>

      {/* Clinical milestone timeline */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Key Milestones in Biomimetic Drug Delivery
        </h3>
        <div className="rounded-2xl bg-gray-50 p-5 lg:p-8 dark:bg-neutral-900">
          <div className="relative flex flex-col gap-0">
            {[
              { year: "2011", event: "First RBC membrane-coated nanoparticle demonstrated", detail: "Zhang lab, UC San Diego. PLGA core with human RBC membrane. Published in PNAS.", color: "bg-red-500" },
              { year: "2014", event: "Platelet membrane coating for tumor targeting", detail: "Platelet-mimicking nanoparticles shown to selectively adhere to damaged vasculature and circulating tumor cells.", color: "bg-amber-500" },
              { year: "2015", event: "Cancer cell membrane nanoparticles as vaccines", detail: "First demonstration that tumor cell membrane-coated NPs can activate dendritic cells and prime anti-tumor T-cell responses.", color: "bg-purple-500" },
              { year: "2017", event: "Hybrid membrane technology introduced", detail: "Fusion of RBC and platelet membranes creates dual-function coatings combining immune evasion with active targeting.", color: "bg-gradient-to-r from-red-500 to-amber-500" },
              { year: "2020", event: "White blood cell membranes cross the BBB", detail: "Leukocyte membrane-coated nanoparticles shown to penetrate the blood-brain barrier and deliver drugs to glioblastoma.", color: "bg-blue-500" },
              { year: "2023", event: "Scalable manufacturing platforms emerge", detail: "Microfluidic and continuous-flow extrusion systems enable GMP-compatible production at clinically relevant scales.", color: "bg-green-500" },
              { year: "2025", event: "First exosome-based therapy in clinical trial", detail: "iEXPLORE Phase I: engineered exosomes with KrasG12D siRNA in pancreatic cancer. No dose-limiting toxicity. Target engagement confirmed.", color: "bg-teal-500" },
            ].map((milestone, i) => (
              <div key={milestone.year} className="flex gap-4 lg:gap-6">
                <div className="flex flex-col items-center">
                  <span className={`h-3 w-3 shrink-0 rounded-full ${milestone.color}`} />
                  {i < 6 && <div className="w-px flex-1 bg-gray-200 dark:bg-neutral-700" />}
                </div>
                <div className={`pb-6 lg:pb-8 ${i === 6 ? "pb-0 lg:pb-0" : ""}`}>
                  <span className="font-mono text-xs text-gray-900 lg:text-sm dark:text-gray-100" style={{ fontWeight: 500 }}>{milestone.year}</span>
                  <p className="mt-0.5 text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{milestone.event}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">{milestone.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7 - Challenges */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Challenges on the Path to the Clinic
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Despite remarkable preclinical results, cell membrane-coated nanoparticles face significant hurdles before widespread clinical adoption. These challenges are not insurmountable, but they require honest acknowledgment and systematic engineering solutions.
      </p>

      <div className="mt-6 flex flex-col gap-3 lg:mt-8 lg:gap-4">
        {[
          {
            challenge: "Scalable Manufacturing",
            desc: "Current laboratory protocols produce micrograms of membrane-coated particles. Clinical applications require grams to kilograms. The extrusion process must be adapted for continuous-flow GMP environments without compromising protein orientation or coating uniformity. Microfluidic platforms show promise but remain largely pre-commercial."
          },
          {
            challenge: "Membrane Protein Integrity",
            desc: "The biological identity of CMNPs depends entirely on functional surface proteins. Harsh extraction conditions, prolonged storage, freeze-thaw cycles, and sterilization can denature CD47, P-selectin, and other critical markers. Quality control assays that verify protein conformation — not just presence — are essential but not yet standardized."
          },
          {
            challenge: "Source Cell Variability",
            desc: "Membranes derived from different donors or cell passages can exhibit significant variation in protein expression levels, lipid composition, and glycosylation patterns. For autologous applications (e.g., cancer cell membrane vaccines), each patient's cells yield unique membranes, making batch-to-batch consistency a fundamental regulatory challenge."
          },
          {
            challenge: "Regulatory Pathway",
            desc: "CMNPs blur the boundary between drug, device, and biological product. Existing regulatory frameworks are not designed for a synthetic nanoparticle wrapped in human-derived biological material. The FDA has not yet established a dedicated pathway, and each product may require case-by-case classification — adding years and cost to clinical development."
          },
          {
            challenge: "Long-Term Safety",
            desc: "While short-term biocompatibility has been demonstrated across dozens of preclinical studies, long-term effects of repeated administration remain unknown. Questions persist about potential autoimmune responses, membrane fragment accumulation in organs, and the immunological consequences of introducing foreign cell membranes (in allogeneic applications)."
          },
        ].map((item) => (
          <div key={item.challenge} className="rounded-2xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
            <h4 className="text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{item.challenge}</h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Section 8 - VARL Perspective */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Where VARL Fits: Computational Biology Meets Biomimetic Design
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        At VARL, we approach biological camouflage from the computational side. Rather than relying solely on empirical trial-and-error — coat a nanoparticle, test it in mice, observe what happens — we use digital twin technology and molecular simulation to predict how different membrane compositions will interact with the immune system before a single particle is synthesized.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Our platform models the CD47-SIRP&#945; interaction at atomic resolution, simulates opsonization kinetics in patient-specific serum profiles, and predicts membrane protein denaturation under different manufacturing conditions. This allows researchers to optimize membrane source selection, extraction protocols, and coating parameters <em>in silico</em> — reducing the experimental cycle from months to days.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        We believe the convergence of biomimetic nanotechnology and computational biology will define the next generation of targeted therapeutics. The immune system&apos;s recognition mechanisms, refined over hundreds of millions of years, are not obstacles to be overcome — they are design principles to be learned from.
      </p>

      {/* Section 9 - Conclusion */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Future Is Biomimetic
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The trajectory is clear. First-generation nanomedicine relied on synthetic stealth (PEGylation) — effective but limited by the immune system&apos;s ability to learn and adapt. Second-generation approaches borrow the immune system&apos;s own language through cell membrane coatings, achieving a level of biological integration that synthetic materials cannot replicate. Third-generation systems — exosome-based carriers, hybrid membranes, computationally optimized coatings — are beginning to enter the clinic.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Nature spent 3.8 billion years perfecting the art of biological camouflage. From the immune-evading strategies of red blood cells to the homotypic recognition signals of cancer cells, the solutions we need already exist in biology. The challenge — and the opportunity — is translating that molecular wisdom into medicines that reach the right cells, at the right time, in the right dose.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        We are not designing around the immune system anymore. We are designing with it.
      </p>

      {/* Divider */}
      <div className="mx-auto mt-12 h-px w-16 bg-gray-200 lg:mt-20 dark:bg-neutral-800" />

      {/* References */}
      <div className="mt-10 lg:mt-16">
        <h3 className="text-lg tracking-tight text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
          References
        </h3>
        <ol className="mt-4 flex flex-col gap-2 lg:mt-6 lg:gap-3">
          {[
            "Hu, C. M. J., Zhang, L., Aryal, S., Cheung, C., Fang, R. H., & Zhang, L. (2011). Erythrocyte membrane-camouflaged polymeric nanoparticles as a biomimetic delivery platform. Proceedings of the National Academy of Sciences, 108(27), 10980–10985.",
            "Fang, R. H., Hu, C. M. J., Luk, B. T., Gao, W., Copp, J. A., Tai, Y., ... & Zhang, L. (2014). Cancer cell membrane-coated nanoparticles for anticancer vaccination and drug delivery. Nano Letters, 14(4), 2181–2188.",
            "Hu, Q., Sun, W., Qian, C., Wang, C., Bomba, H. N., & Gu, Z. (2015). Anticancer platelet-mimicking nanovehicles. Advanced Materials, 27(44), 7043–7050.",
            "Dehaini, D., Wei, X., Fang, R. H., Maez, S., Gianneschi, N., & Zhang, L. (2017). Erythrocyte-platelet hybrid membrane coating for enhanced nanoparticle functionalization. Advanced Materials, 29(16), 1606209.",
            "Chen, Z., Zhao, P., Luo, Z., Zheng, M., Tian, H., Gong, P., ... & Cai, L. (2016). Cancer cell membrane–biomimetic nanoparticles for homologous-targeting dual-modal imaging and photothermal therapy. ACS Nano, 10(11), 10049–10057.",
            "Luk, B. T., Hu, C. M. J., Fang, R. H., Dehaini, D., Carpenter, C., Gao, W., & Zhang, L. (2014). Interfacial interactions between natural RBC membranes and synthetic polymeric nanoparticles. Nanoscale, 6(5), 2730–2737.",
            "Mendt, M., Kamerkar, S., Sugimoto, H., McAndrews, K. M., Wu, C. C., Gagea, M., ... & Kalluri, R. (2025). Engineered exosomes with KrasG12D specific siRNA in pancreatic cancer: a phase I study with immunological correlates. Nature Communications, 16, 5163.",
            "Chen, Y., Qin, D., Zou, J., Li, X., & Guo, X. D. (2024). Advances in biomimetic nanomaterial delivery systems: harnessing nature's inspiration for targeted drug delivery. Journal of Materials Chemistry B, 12, 7633–7657.",
            "Yang, Q., & Bhatt, P. (2025). PEG immunogenicity in nanomedicine. Nature Reviews Bioengineering, 3, 420–437.",
            "Zhai, Y., Su, J., Ran, W., Zhang, P., Yin, Q., Zhang, Z., ... & Li, Y. (2024). Cell membrane-coated nanoparticles as a biomimetic drug delivery platform for enhancing cancer immunotherapy. Nanoscale, 16, 7567–7582.",
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
