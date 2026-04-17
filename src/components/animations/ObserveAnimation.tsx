"use client";

import { useEffect, useRef, useState } from "react";

const LOOP = 12;

type Col  = { key: string; w: string };
type Card = { source: string; query: string; cols: Col[]; rows: string[][] };

const CARDS: Card[] = [
  {
    source: "UniProtKB",
    query: "tumor suppressor · Homo sapiens",
    cols: [
      { key: "Entry", w: "13%" }, { key: "Gene", w: "10%" },
      { key: "Protein name", w: "33%" }, { key: "Organism", w: "22%" },
      { key: "Len", w: "7%" }, { key: "Status", w: "15%" },
    ],
    rows: [
      ["P04637","TP53",  "Cellular tumor antigen p53",            "Homo sapiens","393","Reviewed"],
      ["P10276","RARA",  "Retinoic acid receptor alpha",          "Homo sapiens","462","Reviewed"],
      ["P35222","CTNNB1","Catenin beta-1",                        "Homo sapiens","781","Reviewed"],
      ["P15056","BRAF",  "Ser/Thr-protein kinase B-raf",          "Homo sapiens","766","Reviewed"],
      ["P42336","PIK3CA","PI 4,5-biphosphate 3-kinase",           "H. sapiens","1068","Reviewed"],
      ["P00533","EGFR",  "Epidermal growth factor receptor",      "Homo sapiens","1210","Reviewed"],
      ["Q9UER7","DAXX",  "Death domain-associated protein 6",     "Homo sapiens","740","Reviewed"],
      ["P38936","CDKN1A","CDK inhibitor 1A",                      "Homo sapiens","164","Reviewed"],
      ["O15151","MDM4",  "Protein Mdm4",                          "Homo sapiens","490","Reviewed"],
      ["Q00987","MDM2",  "E3 ubiquitin-protein ligase Mdm2",      "Homo sapiens","491","Reviewed"],
      ["P06400","RB1",   "Retinoblastoma-associated protein",     "Homo sapiens","928","Reviewed"],
      ["P38398","BRCA1", "Breast cancer type 1 susceptibility",   "Homo sapiens","1863","Reviewed"],
      ["P51587","BRCA2", "Breast cancer type 2 susceptibility",   "Homo sapiens","3418","Reviewed"],
      ["P49736","MCM2",  "DNA replication licensing factor",      "Homo sapiens","904","Reviewed"],
      ["P16220","CREB1", "cAMP response element-binding protein", "Homo sapiens","341","Reviewed"],
    ],
  },
  {
    source: "RCSB PDB",
    query: "human cancer protein · resolution < 2.5 Å",
    cols: [
      { key: "ID", w: "8%" }, { key: "Title", w: "36%" }, { key: "Method", w: "13%" },
      { key: "Res.", w: "8%" }, { key: "Chains", w: "7%" },
      { key: "Released", w: "13%" }, { key: "Org.", w: "15%" },
    ],
    rows: [
      ["1A3N","Deoxy human hemoglobin A",             "X-RAY","1.80","4","1998-03-11","H. sapiens"],
      ["2OCJ","Crystal structure of p53 core domain", "X-RAY","1.95","2","2007-01-14","H. sapiens"],
      ["1TUP","p53 core domain bound to DNA",         "X-RAY","2.20","4","1994-07-31","H. sapiens"],
      ["4OVP","MDM2 bound to p53 peptide",            "X-RAY","1.60","1","2014-05-07","H. sapiens"],
      ["1IYH","EGFR kinase domain",                   "X-RAY","2.40","1","2002-08-07","H. sapiens"],
      ["3GFT","BRAF kinase domain with inhibitor",    "X-RAY","2.18","1","2009-04-14","H. sapiens"],
      ["4ZWI","BRCA1 BRCT domain tandem",             "X-RAY","1.85","2","2015-08-19","H. sapiens"],
      ["1JNL","Retinoblastoma pocket domain",          "X-RAY","2.10","1","2001-09-05","H. sapiens"],
      ["5G01","PIK3CA helical + kinase domains",      "CRYO-EM","3.20","1","2016-11-09","H. sapiens"],
      ["6MNX","MDM2-MDM4 complex with p53",           "X-RAY","1.74","3","2019-02-20","H. sapiens"],
      ["3ZME","CTNNB1 armadillo repeat domain",       "X-RAY","1.90","1","2013-01-23","H. sapiens"],
      ["1H4F","CDKN1A bound to CDK2",                 "X-RAY","2.05","2","2001-08-01","H. sapiens"],
      ["4AYL","CREB1 KID phosphorylated",             "NMR",  "—",  "1","2012-10-17","H. sapiens"],
      ["2LOH","DAXX helical bundle",                  "NMR",  "—",  "1","2012-07-25","H. sapiens"],
      ["1O9F","MCM2 N-terminal domain",               "X-RAY","2.30","1","2003-04-16","H. sapiens"],
    ],
  },
  {
    source: "GenBank",
    query: "cancer gene mRNA · organism: 9606",
    cols: [
      { key: "Accession", w: "17%" }, { key: "Gene", w: "9%" },
      { key: "Definition", w: "38%" }, { key: "Length", w: "11%" },
      { key: "Type", w: "8%" }, { key: "Updated", w: "17%" },
    ],
    rows: [
      ["NM_007294","BRCA1","Homo sapiens BRCA1 DNA repair associated",   "5711 bp","mRNA","2025-10-04"],
      ["NM_000059","BRCA2","Homo sapiens BRCA2 DNA repair associated",   "10254 bp","mRNA","2025-09-18"],
      ["NM_000546","TP53", "Homo sapiens tumor protein p53 v1",          "2591 bp","mRNA","2025-11-01"],
      ["NM_005228","EGFR", "Homo sapiens epidermal growth factor receptor","5604 bp","mRNA","2025-08-22"],
      ["NM_004333","BRAF", "Homo sapiens B-Raf proto-oncogene",          "7457 bp","mRNA","2025-07-09"],
      ["NM_006218","PIK3CA","Homo sapiens PI3-kinase catalytic α",       "9195 bp","mRNA","2025-09-30"],
      ["NM_000321","RB1",  "Homo sapiens retinoblastoma 1 v1",           "4835 bp","mRNA","2025-06-14"],
      ["NM_002392","MDM2", "Homo sapiens MDM2 proto-oncogene v1",        "5052 bp","mRNA","2025-10-17"],
      ["NM_002393","MDM4", "Homo sapiens MDM4 regulator of p53",         "4199 bp","mRNA","2025-08-05"],
      ["NM_000077","CDKN2A","Homo sapiens CDK inhibitor 2A",             "4948 bp","mRNA","2025-05-28"],
      ["NM_004360","CDH1", "Homo sapiens cadherin 1 (E-cadherin) v1",    "4966 bp","mRNA","2025-07-31"],
      ["NM_170606","CTNNB1","Homo sapiens catenin beta-1 v2",            "3194 bp","mRNA","2025-09-03"],
      ["NM_002467","MYC",  "Homo sapiens MYC proto-oncogene BHLH TF",   "2670 bp","mRNA","2025-10-22"],
      ["NM_005157","ABL1", "Homo sapiens ABL proto-oncogene 1",          "8198 bp","mRNA","2025-06-07"],
      ["NM_000314","PTEN", "Homo sapiens phosphatase and tensin homolog","9219 bp","mRNA","2025-11-12"],
    ],
  },
  {
    source: "Ensembl",
    query: "cancer driver gene · protein_coding · chr 17",
    cols: [
      { key: "Gene ID", w: "24%" }, { key: "Symbol", w: "10%" },
      { key: "Name", w: "30%" }, { key: "Location", w: "22%" },
      { key: "TX", w: "7%" }, { key: "Ortho.", w: "7%" },
    ],
    rows: [
      ["ENSG00000141510","TP53", "tumor protein p53",                   "17:7.67–7.69 Mb",  "27","303"],
      ["ENSG00000012048","BRCA1","breast cancer type 1 susceptibility", "17:43.04–43.17 Mb","27","281"],
      ["ENSG00000139618","BRCA2","breast cancer type 2 susceptibility", "13:32.31–32.40 Mb","19","193"],
      ["ENSG00000146648","EGFR", "epidermal growth factor receptor",    "7:55.02–55.21 Mb", "12","116"],
      ["ENSG00000157764","BRAF", "B-Raf proto-oncogene",                "7:140.43–140.62 Mb","4","192"],
      ["ENSG00000121879","PIK3CA","PI3K catalytic subunit alpha",        "3:179.15–179.24 Mb","5","176"],
      ["ENSG00000149311","ATM",  "ATM serine/threonine kinase",         "11:108.22–108.37 Mb","12","108"],
      ["ENSG00000113916","BCL6", "BCL6 transcription repressor",        "3:187.44–187.46 Mb","9","121"],
      ["ENSG00000133703","KRAS", "KRAS proto-oncogene GTPase",          "12:25.20–25.25 Mb", "8","207"],
      ["ENSG00000174775","HRAS", "HRas proto-oncogene GTPase",          "11:524.11–524.13 Kb","5","190"],
      ["ENSG00000136997","MYC",  "MYC proto-oncogene BHLH TF",         "8:127.74–127.74 Mb","4","228"],
      ["ENSG00000171862","PTEN", "phosphatase and tensin homolog",      "10:89.62–89.73 Mb","10","215"],
      ["ENSG00000163513","TGFBR2","TGF-beta receptor type-2",           "3:30.60–30.69 Mb", "8","112"],
      ["ENSG00000105173","CCNE1","cyclin E1",                           "19:30.30–30.32 Mb", "5","140"],
      ["ENSG00000155657","TTN",  "titin",                               "2:178.52–178.83 Mb","39","31"],
    ],
  },
  {
    source: "KEGG Pathway",
    query: "cancer signaling pathways · organism: hsa",
    cols: [
      { key: "Pathway ID", w: "16%" }, { key: "Name", w: "38%" },
      { key: "Genes", w: "8%" }, { key: "Category", w: "22%" }, { key: "Updated", w: "16%" },
    ],
    rows: [
      ["hsa05200","Pathways in cancer",            "538","Disease: Cancer",        "2025-10"],
      ["hsa04110","Cell cycle",                    "124","Cellular Processes",     "2025-09"],
      ["hsa04115","p53 signaling pathway",         " 72","Cellular Processes",     "2025-11"],
      ["hsa04012","ErbB signaling pathway",        " 87","Signal Transduction",    "2025-08"],
      ["hsa04151","PI3K-Akt signaling pathway",    "354","Signal Transduction",    "2025-10"],
      ["hsa04310","Wnt signaling pathway",         "142","Signal Transduction",    "2025-07"],
      ["hsa04340","Hedgehog signaling pathway",    " 56","Signal Transduction",    "2025-06"],
      ["hsa04350","TGF-beta signaling pathway",    " 84","Signal Transduction",    "2025-09"],
      ["hsa04066","HIF-1 signaling pathway",       "100","Signal Transduction",    "2025-08"],
      ["hsa04010","MAPK signaling pathway",        "259","Signal Transduction",    "2025-10"],
      ["hsa04020","Calcium signaling pathway",     "183","Signal Transduction",    "2025-07"],
      ["hsa04630","JAK-STAT signaling pathway",    "162","Signal Transduction",    "2025-09"],
      ["hsa04210","Apoptosis",                     "135","Cellular Processes",     "2025-11"],
      ["hsa04218","Cellular senescence",           "157","Cellular Processes",     "2025-08"],
      ["hsa03030","DNA replication",               " 36","Genetic Info. Process.", "2025-04"],
    ],
  },
  {
    source: "GEO Datasets",
    query: "TP53 expression · cancer · RNA-seq",
    cols: [
      { key: "Accession", w: "14%" }, { key: "Title", w: "36%" }, { key: "Samples", w: "9%" },
      { key: "Platform", w: "14%" }, { key: "Organism", w: "14%" }, { key: "Date", w: "13%" },
    ],
    rows: [
      ["GSE68465","Lung cancer gene expression profiling",      "442","GPL570",    "H. sapiens","2015-06"],
      ["GSE42568","Breast cancer RNA-seq profiling",            "121","GPL11154",  "H. sapiens","2013-01"],
      ["GSE33126","Colorectal cancer transcriptomics",          " 98","GPL6244",   "H. sapiens","2012-09"],
      ["GSE87466","Pan-cancer TP53 mutation analysis",          "516","GPL20795",  "H. sapiens","2017-01"],
      ["GSE62254","Gastric cancer gene expression",             "300","GPL6244",   "H. sapiens","2015-02"],
      ["GSE75234","TCGA ovarian cancer RNA-seq",                "267","GPL16791",  "H. sapiens","2015-12"],
      ["GSE41258","Liver hepatocellular carcinoma",             "220","GPL570",    "H. sapiens","2013-05"],
      ["GSE36153","Pancreatic ductal adenocarcinoma",           " 96","GPL6244",   "H. sapiens","2012-08"],
      ["GSE59246","Glioblastoma multiforme RNA-seq",            "183","GPL11154",  "H. sapiens","2014-09"],
      ["GSE50161","Brain cancer multi-class expression",        "130","GPL570",    "H. sapiens","2013-11"],
      ["GSE20565","Prostate cancer progression",                "171","GPL570",    "H. sapiens","2010-09"],
      ["GSE25066","Breast cancer neoadjuvant therapy",          "508","GPL96",     "H. sapiens","2011-03"],
      ["GSE39582","Colon cancer MSI analysis",                  "566","GPL570",    "H. sapiens","2013-09"],
      ["GSE30219","Lung adenocarcinoma vs squamous cell",       "293","GPL570",    "H. sapiens","2012-02"],
      ["GSE72056","Single-cell melanoma RNA-seq",               "4645","GPL18573", "H. sapiens","2016-06"],
    ],
  },
  {
    source: "ClinVar",
    query: "TP53 pathogenic variants · condition: cancer",
    cols: [
      { key: "Var. ID", w: "10%" }, { key: "Name", w: "32%" }, { key: "Gene", w: "8%" },
      { key: "Significance", w: "18%" }, { key: "Condition", w: "24%" }, { key: "Rev.", w: "8%" },
    ],
    rows: [
      ["12375",  "NM_000546.6:c.817C>T (p.Arg273Cys)",  "TP53","Pathogenic",        "Li-Fraumeni syndrome",       "★★★"],
      ["12376",  "NM_000546.6:c.818G>A (p.Arg273His)",  "TP53","Pathogenic",        "Li-Fraumeni syndrome",       "★★★"],
      ["12373",  "NM_000546.6:c.743G>A (p.Arg248Gln)",  "TP53","Pathogenic",        "Colorectal cancer",          "★★★"],
      ["43587",  "NM_000546.6:c.524G>A (p.Arg175His)",  "TP53","Pathogenic",        "Lung adenocarcinoma",        "★★★"],
      ["68742",  "NM_007294.4:c.5266dup (p.Gln1756fs)", "BRCA1","Pathogenic",       "Breast-ovarian cancer",      "★★★"],
      ["68743",  "NM_007294.4:c.181T>G (p.Cys61Gly)",   "BRCA1","Pathogenic",       "Hereditary breast cancer",   "★★★"],
      ["125431", "NM_000059.4:c.6275_6276del",           "BRCA2","Pathogenic",       "Breast neoplasm",            "★★★"],
      ["125432", "NM_000059.4:c.771_775del",             "BRCA2","Pathogenic",       "Ovarian cancer",             "★★★"],
      ["198761", "NM_004333.6:c.1799T>A (p.Val600Glu)", "BRAF", "Pathogenic",       "Melanoma",                   "★★★"],
      ["198762", "NM_005228.4:c.2573T>G (p.Leu858Arg)", "EGFR", "Pathogenic",       "Non-small cell lung cancer", "★★★"],
      ["231045", "NM_033360.4:c.35G>T (p.Gly12Val)",    "KRAS", "Pathogenic",       "Pancreatic adenocarcinoma",  "★★★"],
      ["231046", "NM_033360.4:c.38G>A (p.Gly13Asp)",    "KRAS", "Pathogenic",       "Colorectal cancer",          "★★★"],
      ["43588",  "NM_000546.6:c.586C>T (p.Pro196Ser)",  "TP53","Likely pathogenic", "Pancreatic cancer",          "★★"],
      ["68741",  "NM_000546.6:c.395A>G (p.Tyr132Cys)",  "TP53","Pathogenic",        "Sarcoma",                    "★★"],
      ["12374",  "NM_000546.6:c.742C>T (p.Arg248Trp)",  "TP53","Pathogenic",        "Adrenocortical carcinoma",   "★★★"],
    ],
  },
  {
    source: "STRING DB",
    query: "TP53 interaction network · confidence > 0.7",
    cols: [
      { key: "Protein A", w: "12%" }, { key: "Protein B", w: "12%" }, { key: "Score", w: "8%" },
      { key: "Evidence", w: "24%" }, { key: "Function B", w: "34%" }, { key: "Org.", w: "10%" },
    ],
    rows: [
      ["TP53","MDM2",   "0.999","exp · database · coexp","E3 ubiquitin ligase, p53 regulator",     "H. sap."],
      ["TP53","MDM4",   "0.997","exp · database",        "MDM2 regulator, p53 binding",            "H. sap."],
      ["TP53","CDKN1A", "0.996","exp · database · text", "CDK inhibitor, p21 (cell cycle arrest)", "H. sap."],
      ["TP53","BAX",    "0.993","exp · text · coexp",    "Pro-apoptotic Bcl-2 family member",      "H. sap."],
      ["TP53","BCL2",   "0.989","exp · database",        "Anti-apoptotic, cancer survival factor", "H. sap."],
      ["TP53","PUMA",   "0.988","exp · text",            "Apoptosis regulator (p53 upregulated)",  "H. sap."],
      ["TP53","CHEK2",  "0.986","exp · database · text", "Checkpoint kinase 2, DNA damage",        "H. sap."],
      ["TP53","ATM",    "0.984","exp · database",        "Serine/threonine kinase, DSB repair",    "H. sap."],
      ["TP53","BRCA1",  "0.981","exp · coexp · database","DNA repair, tumor suppressor",           "H. sap."],
      ["TP53","RB1",    "0.979","exp · database",        "Retinoblastoma protein, cell cycle",     "H. sap."],
      ["TP53","E2F1",   "0.977","exp · text",            "Transcription factor, apoptosis/S-phase","H. sap."],
      ["TP53","PCNA",   "0.975","exp · database · text", "DNA clamp, replication / repair",       "H. sap."],
      ["TP53","HIPK2",  "0.972","exp · text",            "Kinase, phosphorylates p53-Ser46",       "H. sap."],
      ["TP53","PTEN",   "0.968","exp · database",        "Phosphatase, PI3K-Akt suppressor",       "H. sap."],
      ["TP53","MYC",    "0.965","exp · coexp",           "Transcription factor, oncogene",         "H. sap."],
    ],
  },
];

/* ------------------------------------------------------------------ */

const c01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const n01 = (v: number, a: number, b: number) => c01((v - a) / (b - a));
const ease = (t: number) => t * t * (3 - 2 * t);

const STAGGER = [0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.49];

// 8 cards overlapping, centred horizontally and vertically
// width 44%, step 7% → total span 44 + 7*7 = 93% → start at (100-93)/2 ≈ 3.5%
// height 58%, centred → top = (100-58)/2 ≈ 21%
const STACK = [
  { left: "3%",  top: "21%", width: "44%", height: "58%", z: 1 },
  { left: "10%", top: "21%", width: "44%", height: "58%", z: 2 },
  { left: "17%", top: "21%", width: "44%", height: "58%", z: 3 },
  { left: "24%", top: "21%", width: "44%", height: "58%", z: 4 },
  { left: "31%", top: "21%", width: "44%", height: "58%", z: 5 },
  { left: "38%", top: "21%", width: "44%", height: "58%", z: 6 },
  { left: "45%", top: "21%", width: "44%", height: "58%", z: 7 },
  { left: "52%", top: "21%", width: "44%", height: "58%", z: 8 },
];

function useLoop(sec: number, active: boolean) {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (!active) return;
    let id = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      setP((((now - t0) / 1000) % sec) / sec);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [sec, active]);
  return p;
}

export default function ObserveAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const p = useLoop(LOOP, visible);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-md lg:rounded-lg"
      style={{ background: "#e4e2dd" }}
    >
      {CARDS.map((card, i) => {
        const s = STACK[i];
        const scanStart = STAGGER[i] * 0.85;
        const scanEnd   = scanStart + 0.45;
        const scanT = n01(p, scanStart, scanEnd);

        return (
          <div
            key={card.source}
            className="absolute flex flex-col overflow-hidden"
            style={{
              top: s.top, left: s.left, width: s.width, height: s.height,
              zIndex: s.z,
              transform: `perspective(700px) rotateY(18deg)`,
              transformOrigin: "center center",
              background: "#ffffff",
              borderRadius: 5,
              boxShadow: "0 4px 16px rgba(0,0,0,0.16), 0 10px 36px rgba(0,0,0,0.10)",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            {/* Header */}
            <div
              className="flex shrink-0 items-center justify-between px-2.5 py-1.5"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", background: "#fafafa" }}
            >
              <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-neutral-700">
                {card.source}
              </span>
              <span className="truncate text-[6px] text-neutral-400" style={{ fontFamily: "ui-monospace, monospace" }}>
                {card.query}
              </span>
            </div>

            {/* Column headers */}
            <div
              className="flex shrink-0 items-center px-2"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.09)", background: "#f5f5f5", height: 15 }}
            >
              {card.cols.map((col) => (
                <span
                  key={col.key}
                  className="truncate text-[5px] uppercase tracking-[0.15em] text-neutral-400"
                  style={{ width: col.w, flexShrink: 0, fontWeight: 600 }}
                >
                  {col.key}
                </span>
              ))}
            </div>

            {/* Data rows */}
            <div className="relative flex-1 overflow-hidden">
              {card.rows.map((row, ri) => {
                const rowFrac = ri / (card.rows.length - 1);
                const atBeam  = scanT > 0 && scanT < 1 && Math.abs(rowFrac - ease(scanT)) < 0.06;
                const scanned = rowFrac < ease(scanT) && scanT > 0;

                return (
                  <div
                    key={ri}
                    className="flex items-center px-2"
                    style={{
                      height: `${100 / card.rows.length}%`,
                      borderBottom: ri < card.rows.length - 1 ? "1px solid rgba(0,0,0,0.04)" : "none",
                      background: atBeam
                        ? "rgba(0,0,0,0.03)"
                        : ri % 2 === 0 ? "transparent" : "rgba(0,0,0,0.01)",
                    }}
                  >
                    {card.cols.map((col, ci) => (
                      <span
                        key={ci}
                        className="truncate text-[6px]"
                        style={{
                          width: col.w, flexShrink: 0,
                          fontFamily: ci === 0 ? "ui-monospace, monospace" : "inherit",
                          color: atBeam ? "#000" : scanned ? "#333" : "#888",
                          fontWeight: atBeam ? 500 : ci === 0 ? 500 : 400,
                          transition: "color 80ms",
                        }}
                      >
                        {row[ci]}
                      </span>
                    ))}
                  </div>
                );
              })}

            </div>

            {/* Progress strip */}
            <div className="h-[2px] shrink-0" style={{ background: "rgba(0,0,0,0.05)" }}>
              <div style={{
                height: "100%",
                width: `${c01(scanT) * 100}%`,
                background: "#111",
                opacity: 0.3,
                transition: "width 60ms linear",
              }} />
            </div>
          </div>
        );
      })}

      {/* Label */}
      <div className="pointer-events-none absolute bottom-3 left-3">
        <span
          className="text-[7px] uppercase tracking-[0.25em] text-neutral-400"
          style={{ fontWeight: 500, opacity: ease(n01(p, 0, 0.04)) }}
        >
          Observing
        </span>
      </div>
    </div>
  );
}
