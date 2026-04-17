export default function TomatoGenomeNutritionalPotential() {
  return (
    <article className="mt-10 lg:mt-16">

      <p className="text-base leading-relaxed text-gray-700 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        The modern supermarket tomato is a paradox. It is perfectly round, uniformly red, and available year-round — yet it tastes nothing like the tomatoes our grandparents grew. Over decades of selective breeding, we optimized for size, firmness, and shelf life while inadvertently silencing the very genes that produce flavor. The result is a fruit that looks beautiful and tastes like water.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        But the genetic instructions for flavor, nutrition, and resilience are still there — dormant, but not lost. In 2012, the Tomato Genome Consortium decoded the full 760 million base-pair genome of <em>Solanum lycopersicum</em>, revealing 34,727 protein-coding genes distributed across 12 chromosomes. For the first time, we could read the complete blueprint of the world&apos;s most consumed vegetable.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-700 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-300">
        Now, using CRISPR gene editing and AI-driven genomic analysis, researchers are doing something that traditional breeding could never achieve: simultaneously optimizing for taste, nutrition, and yield. Not by adding foreign genes, but by reactivating the tomato&apos;s own silenced potential.
      </p>

      {/* Section 1 - Genome */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Tomato Genome: 760 Million Letters of Potential
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The Tomato Genome Consortium — a collaboration of over 300 scientists from 14 countries — published the reference genome in Nature in May 2012. They sequenced both the domesticated tomato (Heinz 1706 cultivar) and its wild ancestor <em>Solanum pimpinellifolium</em>, identifying 5.4 million single-nucleotide polymorphisms (SNPs) between the two species. These differences map the genetic changes that occurred over 7,000 years of human domestication.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The analysis also uncovered something unexpected: the tomato genome experienced two ancient whole-genome triplications. One is shared with all flowering plants; a more recent one occurred approximately 71 million years ago, specific to the Solanum lineage. These duplications created redundant gene copies — many of which were repurposed for fruit-specific functions including color, ripening, and sugar accumulation.
      </p>

      {/* Genome stats */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Tomato Genome at a Glance
        </h3>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {[
            { value: "760 Mb", label: "Genome size", sub: "12 chromosomes" },
            { value: "34,727", label: "Protein-coding genes", sub: "~83% annotated" },
            { value: "5.4M", label: "SNPs vs. wild ancestor", sub: "S. pimpinellifolium" },
            { value: "7,000+", label: "Years of domestication", sub: "Mesoamerican origin" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col rounded-2xl bg-gray-50 p-5 dark:bg-neutral-900">
              <span className="text-2xl tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 600 }}>{stat.value}</span>
              <span className="mt-1 text-xs text-gray-500 lg:text-sm dark:text-gray-400" style={{ fontWeight: 500 }}>{stat.label}</span>
              <span className="mt-0.5 text-[10px] text-gray-400 lg:text-xs">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 - Flavor */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Why Modern Tomatoes Lost Their Flavor
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Tomato flavor is an intricate interplay of sugars (glucose, fructose), acids (citric acid, malic acid), and volatile organic compounds — the aroma molecules that give tomatoes their distinctive scent. A 2012 study identified 28 key volatile compounds that humans associate with &quot;good tomato flavor.&quot; Of these, 13 are derived from essential nutrients (carotenoids, amino acids, fatty acids), meaning that flavor and nutrition are genetically linked.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The problem is that modern commercial breeding selected heavily for fruit size, uniformity, and disease resistance — traits controlled by genes that are often physically linked on chromosomes to flavor-related genes. When breeders selected for larger fruit, they inadvertently dragged along mutations that reduced sugar content by up to 30% and silenced key aroma volatile pathways. The most dramatic example is the uniform ripening mutation (<em>u</em>), found in virtually all modern cultivars, which produces evenly colored fruit but disables a transcription factor (SlGLK2) that normally boosts sugar and lycopene accumulation.
      </p>

      {/* Key flavor genes table */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Key Genes Linking Flavor, Nutrition, and Yield
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-gray-50 dark:bg-neutral-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-800">
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Gene</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Function</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Effect When Active</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Status in Modern Cultivars</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>SlGLK2</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Chloroplast development in fruit</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">+20-30% sugar &amp; lycopene</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] text-red-700 lg:text-xs dark:bg-red-500/10 dark:text-red-400" style={{ fontWeight: 500 }}>Silenced</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>TomLoxC</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Apocarotenoid volatile production</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Fruity/floral aroma compounds</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] text-red-700 lg:text-xs dark:bg-red-500/10 dark:text-red-400" style={{ fontWeight: 500 }}>Rare allele</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>SlSGR1</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Stay-green / chlorophyll retention</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">+40-60% lycopene &amp; carotenoids</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>Active</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>PSY1</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Phytoene synthase — carotenoid biosynthesis</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Primary lycopene production</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>Active</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>LIN5</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Cell-wall invertase — sugar accumulation</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Higher Brix (sweetness)</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] text-yellow-700 lg:text-xs dark:bg-yellow-500/10 dark:text-yellow-400" style={{ fontWeight: 500 }}>Reduced</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-mono text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>fw2.2</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Cell number regulation — fruit size</td>
                <td className="px-5 py-3.5 text-xs lg:px-6 lg:text-sm">Larger fruit (domestic allele)</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700 lg:text-xs dark:bg-green-500/10 dark:text-green-400" style={{ fontWeight: 500 }}>Selected</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3 - Lycopene */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        Lycopene: The Molecule That Makes Tomatoes Red — and Healthy
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Lycopene is a carotenoid pigment responsible for the red color of ripe tomatoes. It is also one of the most potent natural antioxidants, with a singlet oxygen quenching capacity roughly double that of beta-carotene. Epidemiological studies have consistently linked dietary lycopene intake to reduced risk of cardiovascular disease, prostate cancer, and UV-induced skin damage.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The lycopene biosynthetic pathway is well-characterized in tomato. Phytoene synthase (PSY1) catalyzes the first committed step, converting geranylgeranyl pyrophosphate (GGPP) to phytoene. Subsequent desaturation and isomerization steps, catalyzed by PDS, ZDS, and CRTISO, produce all-trans-lycopene. The entire pathway operates within plastids, and the amount of lycopene that accumulates depends on the balance between biosynthesis, degradation, and downstream conversion to beta-carotene.
      </p>

      {/* Lycopene comparison bar chart */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          Lycopene Content Across Tomato Varieties
        </h3>
        <div className="rounded-2xl bg-gray-50 p-5 lg:p-8 dark:bg-neutral-900">
          <div className="flex flex-col gap-4">
            {[
              { label: "Standard commercial (supermarket)", mg: 3.0, max: 18, color: "bg-gray-400" },
              { label: "Roma / plum varieties", mg: 5.5, max: 18, color: "bg-red-400" },
              { label: "Cherry tomatoes", mg: 7.2, max: 18, color: "bg-red-500" },
              { label: "Heirloom (e.g., San Marzano)", mg: 9.0, max: 18, color: "bg-red-600" },
              { label: "High-lycopene hybrid cultivars", mg: 12.0, max: 18, color: "bg-red-700" },
              { label: "CRISPR-edited SlSGR1 knockout", mg: 17.5, max: 18, color: "bg-gradient-to-r from-red-600 to-orange-500" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-gray-600 lg:text-sm dark:text-gray-400">{item.label}</span>
                  <span className="font-mono text-xs text-gray-900 lg:text-sm dark:text-gray-100" style={{ fontWeight: 500 }}>{item.mg} mg/100g</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 lg:h-4 dark:bg-neutral-800">
                  <div className={`h-full rounded-full ${item.color} transition-all duration-1000`} style={{ width: `${(item.mg / item.max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-gray-400 lg:text-xs">
            Values represent fresh weight lycopene content in mg per 100g. CRISPR-edited values adapted from Li et al. (2018) and Deng et al. (2023). Commercial values from USDA FoodData Central.
          </p>
        </div>
      </div>

      {/* Section 4 - CRISPR */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        CRISPR Editing: Rewriting the Tomato&apos;s Code
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        CRISPR-Cas9 gene editing has transformed tomato research from a decade-long breeding program into a precision engineering exercise. Unlike traditional breeding, which shuffles thousands of genes simultaneously and requires 8-12 generations to stabilize a new trait, CRISPR targets a single gene (or a small set of genes) with base-pair accuracy. The edit is complete in one generation, and because no foreign DNA is introduced, the resulting plant is not classified as a GMO under many regulatory frameworks.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        In 2018, researchers demonstrated that CRISPR-mediated multiplex editing of five carotenoid pathway genes could increase lycopene content by 5.1-fold compared to wild-type fruit. By knocking out SlSGR1 (stay-green gene 1), they produced tomatoes with significantly higher chlorophyll retention during ripening, which translated directly into elevated lycopene, beta-carotene, and lutein levels.
      </p>

      {/* CRISPR achievements cards */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          CRISPR Achievements in Tomato
        </h3>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          {[
            {
              target: "Lycopene +5.1x",
              genes: "SlSGR1, SlLCY-E, SlBCH, SlLCY-B1, SlLCY-B2",
              method: "Multiplex knockout of competing carotenoid branch pathways",
              year: "2018",
              color: "bg-red-500"
            },
            {
              target: "Vitamin D3 production",
              genes: "Sl7-DR2",
              method: "Knockout of 7-dehydrocholesterol reductase; provitamin D3 accumulates in fruit skin",
              year: "2022",
              color: "bg-amber-500"
            },
            {
              target: "GABA +7x enrichment",
              genes: "SlGAD2, SlGAD3",
              method: "Removal of autoinhibitory domain from glutamate decarboxylases",
              year: "2019",
              color: "bg-blue-500"
            },
            {
              target: "Salt tolerance",
              genes: "SlHAK20",
              method: "Enhanced potassium uptake under high-salinity conditions",
              year: "2023",
              color: "bg-green-500"
            },
            {
              target: "Parthenocarpy",
              genes: "SlIAA9",
              method: "Seedless fruit production without pollination; extends growing season",
              year: "2017",
              color: "bg-purple-500"
            },
            {
              target: "Genome-scale library",
              genes: "15,804 gRNAs / ~1,300 lines",
              method: "Multi-targeted CRISPR library overcoming gene family redundancy",
              year: "2025",
              color: "bg-teal-500"
            },
          ].map((item) => (
            <div key={item.target} className="flex flex-col rounded-2xl bg-gray-50 p-5 lg:p-6 dark:bg-neutral-900">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${item.color}`} />
                <span className="text-sm text-gray-900 lg:text-base dark:text-gray-100" style={{ fontWeight: 500 }}>{item.target}</span>
              </div>
              <div className="mt-3 flex flex-col gap-1.5">
                <div>
                  <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>TARGET GENES</span>
                  <p className="mt-0.5 font-mono text-[10px] text-gray-600 lg:text-xs dark:text-gray-400">{item.genes}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-wide text-gray-400 lg:text-xs" style={{ fontWeight: 500 }}>APPROACH</span>
                  <p className="mt-0.5 text-xs leading-relaxed text-gray-500 lg:text-sm dark:text-gray-400">{item.method}</p>
                </div>
              </div>
              <span className="mt-auto pt-3 font-mono text-[10px] text-gray-400 lg:text-xs">{item.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 - Pan-genome */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Pan-Genome: 4,873 Genes Hidden in Wild Relatives
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        A single reference genome does not capture the full genetic diversity of a species. In 2019, researchers sequenced 725 tomato accessions — spanning wild species, landraces, and modern cultivars — to construct the tomato pan-genome. They discovered 4,873 genes that were absent from the Heinz 1706 reference genome, including genes involved in flavor volatile production, disease resistance, and stress adaptation.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The most striking discovery was a rare allele of <strong className="text-gray-900 dark:text-gray-100">TomLoxC</strong>, a lipoxygenase gene that produces apocarotenoid volatiles — the compounds responsible for the fruity, floral notes that distinguish heirloom tomatoes from commercial varieties. The desirable TomLoxC allele was common in wild tomatoes but was inadvertently selected against during domestication. The pan-genome study showed that reintroducing this allele could restore flavor without compromising yield.
      </p>

      {/* Domestication tradeoffs visualization */}
      <div className="mt-8 lg:mt-12">
        <h3 className="mb-4 text-sm tracking-wide text-gray-400 lg:mb-6 lg:text-base" style={{ fontWeight: 500 }}>
          What Domestication Gained — and Lost
        </h3>
        <div className="overflow-x-auto rounded-2xl bg-gray-50 dark:bg-neutral-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-neutral-800">
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Trait</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Wild Ancestor</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Modern Cultivar</th>
                <th className="px-5 py-4 text-xs text-gray-400 lg:px-6 lg:text-sm" style={{ fontWeight: 500 }}>Direction</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Fruit weight</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">1-2 g</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">150-300 g</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-green-600 dark:text-green-400">&#9650; 100-300x</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Sugar content (Brix)</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">7-9%</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">4-5%</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-red-500 dark:text-red-400">&#9660; -40%</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Aroma volatiles</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">28+ compounds</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">12-15 compounds</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-red-500 dark:text-red-400">&#9660; -50%</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Disease resistance genes</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">Diverse R-genes</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">Narrow set</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-red-500 dark:text-red-400">&#9660; Reduced</span></td>
              </tr>
              <tr className="border-b border-gray-200/50 dark:border-neutral-800/50">
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Shelf life</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">2-5 days</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">14-21 days</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-green-600 dark:text-green-400">&#9650; 4-7x</span></td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 text-xs text-gray-900 lg:px-6 lg:text-sm dark:text-gray-200" style={{ fontWeight: 500 }}>Yield</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">~5 t/ha</td>
                <td className="px-5 py-3.5 font-mono text-xs lg:px-6 lg:text-sm">80-100 t/ha</td>
                <td className="px-5 py-3.5 lg:px-6"><span className="text-green-600 dark:text-green-400">&#9650; 16-20x</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 6 - AI integration */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        AI Meets Agriculture: Predicting Traits from Genomes
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The tomato genome contains over 34,000 genes, many working in interconnected networks. Editing one gene can have cascading effects on dozens of traits. Traditional genetics can model these interactions one gene at a time; AI can model them all at once.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        Machine learning models trained on multi-omics data (genomics, transcriptomics, metabolomics) can now predict how a specific genetic edit will affect not just the target trait, but the entire phenotypic landscape of the plant. Want to increase lycopene without reducing yield? The model can identify which combination of gene edits achieves this balance, accounting for epistatic interactions that no human researcher could track manually.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        At VARL, our computational biology platform is designed for exactly this kind of multi-dimensional optimization. By constructing digital twins of plant metabolic networks, we simulate the downstream consequences of genetic edits before they are performed in the greenhouse — reducing experimental cycles and accelerating the path from genomic insight to improved crop.
      </p>

      {/* Section 7 - Future */}
      <h2 className="mt-12 text-xl tracking-tight text-gray-900 lg:mt-20 lg:text-3xl dark:text-gray-100" style={{ fontWeight: 500 }}>
        The Tomato of Tomorrow
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The tools are converging. A decoded genome tells us what is possible. CRISPR tells us how to get there. AI tells us which combinations of edits will produce the best outcomes. Together, they point toward a future where tomatoes — and crops in general — are designed at the molecular level: flavor, nutrition, resilience, and yield optimized simultaneously, not traded against each other.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The 2025 publication of a genome-scale CRISPR library covering 15,804 guide RNAs across the entire tomato genome marks a turning point. For the first time, researchers can systematically edit every gene family in the tomato genome and observe the phenotypic consequences — creating a functional map of the entire organism.
      </p>
      <p className="mt-4 text-base leading-relaxed text-gray-600 lg:mt-6 lg:text-lg lg:leading-relaxed dark:text-gray-400">
        The irony of modern agriculture is that we spent a century making crops worse by accident. Now we have the technology to make them better on purpose. And it starts with the humble tomato.
      </p>

      <div className="mx-auto mt-12 h-px w-16 bg-gray-200 lg:mt-20 dark:bg-neutral-800" />

      {/* References */}
      <div className="mt-10 lg:mt-16">
        <h3 className="text-lg tracking-tight text-gray-900 lg:text-xl dark:text-gray-100" style={{ fontWeight: 500 }}>
          References
        </h3>
        <ol className="mt-4 flex flex-col gap-2 lg:mt-6 lg:gap-3">
          {[
            "The Tomato Genome Consortium. (2012). The tomato genome sequence provides insights into fleshy fruit evolution. Nature, 485(7400), 635–641.",
            "Tieman, D., Zhu, G., Resende, M. F. R., et al. (2017). A chemical genetic roadmap to improved tomato flavor. Science, 355(6323), 391–394.",
            "Gao, L., Gonda, I., Sun, H., et al. (2019). The tomato pan-genome uncovers new genes and a rare allele regulating fruit flavor. Nature Genetics, 51(6), 1044–1051.",
            "Li, X., Wang, Y., Chen, S., et al. (2018). Lycopene is enriched in tomato fruit by CRISPR/Cas9-mediated multiplex genome editing. Frontiers in Plant Science, 9, 559.",
            "Deng, L., Wang, H., Sun, C., et al. (2023). Creating high lycopene fruit using CRISPR/Cas9 technology in tomato. Acta Horticulturae Sinica, 50(5), 1059–1070.",
            "Li, J., Scarano, A., Gonzalez, N. M., et al. (2022). Biofortified tomatoes provide a new route to vitamin D sufficiency. Nature Plants, 8(6), 611–616.",
            "Nonaka, S., Arai, C., Takayama, M., et al. (2019). Efficient increase of gamma-aminobutyric acid (GABA) content in tomato fruits by targeted mutagenesis. Scientific Reports, 7, 7057.",
            "Powell, A. L., Nguyen, C. V., Hill, T., et al. (2012). Uniform ripening encodes a Golden 2-like transcription factor regulating tomato fruit chloroplast development. Science, 336(6089), 1711–1715.",
            "Tikunov, Y. M., Molthoff, J., de Vos, R. C. H., et al. (2013). NON-SMOKY GLYCOSYLTRANSFERASE1 prevents the release of smoky aroma from tomato fruit. The Plant Cell, 25(8), 3067–3078.",
            "Wang, Y., Liang, Z., Huang, J., et al. (2025). Construction of multi-targeted CRISPR libraries in tomato to overcome functional redundancy at genome-scale level. Nature Communications, 16, 4672.",
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
