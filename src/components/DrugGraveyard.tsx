"use client";

import { useEffect, useState, useCallback } from "react";

const failedDrugs = [
  { name: "Aducanumab", target: "Alzheimer's", year: 2021, cost: "$2.1B" },
  { name: "Solanezumab", target: "Alzheimer's", year: 2016, cost: "$1.8B" },
  { name: "Bapineuzumab", target: "Alzheimer's", year: 2012, cost: "$1.5B" },
  { name: "Verubecestat", target: "Alzheimer's", year: 2018, cost: "$900M" },
  { name: "Semagacestat", target: "Alzheimer's", year: 2010, cost: "$1.2B" },
  { name: "Lanabecestat", target: "Alzheimer's", year: 2018, cost: "$700M" },
  { name: "Crenezumab", target: "Alzheimer's", year: 2022, cost: "$1.1B" },
  { name: "Gantenerumab", target: "Alzheimer's", year: 2022, cost: "$2.0B" },
  { name: "Atabecestat", target: "Alzheimer's", year: 2018, cost: "$500M" },
  { name: "Torcetrapib", target: "Cardiovascular", year: 2006, cost: "$800M" },
  { name: "Dalcetrapib", target: "Cardiovascular", year: 2012, cost: "$1.0B" },
  { name: "Evacetrapib", target: "Cardiovascular", year: 2015, cost: "$900M" },
  { name: "Anacetrapib", target: "Cardiovascular", year: 2017, cost: "$700M" },
  { name: "Rezpeg", target: "Oncology", year: 2023, cost: "$400M" },
  { name: "Sitravatinib", target: "Oncology", year: 2023, cost: "$600M" },
  { name: "Tarcocimab", target: "Oncology", year: 2023, cost: "$350M" },
  { name: "Izokibep", target: "Autoimmune", year: 2023, cost: "$280M" },
  { name: "Asundexian", target: "Cardiovascular", year: 2023, cost: "$500M" },
  { name: "Evobrutinib", target: "Multiple Sclerosis", year: 2023, cost: "$450M" },
  { name: "Fordadistrogene", target: "Duchenne MD", year: 2024, cost: "$1.3B" },
  { name: "Vibostolimab", target: "Oncology", year: 2024, cost: "$800M" },
  { name: "Emraclidine", target: "Schizophrenia", year: 2024, cost: "$9.0B" },
  { name: "Belvarafenib", target: "Oncology", year: 2024, cost: "$300M" },
  { name: "Mosliciguat", target: "Heart Failure", year: 2024, cost: "$400M" },
  { name: "Navtemadlin", target: "Oncology", year: 2024, cost: "$350M" },
  { name: "Taletrectinib", target: "Lung Cancer", year: 2024, cost: "$500M" },
  { name: "Lazertinib", target: "Lung Cancer", year: 2024, cost: "$600M" },
  { name: "Duvortuxizumab", target: "Lymphoma", year: 2018, cost: "$200M" },
  { name: "Tucidinostat", target: "Breast Cancer", year: 2023, cost: "$300M" },
  { name: "Samalizumab", target: "Oncology", year: 2019, cost: "$250M" },
  { name: "Rilzabrutinib", target: "Autoimmune", year: 2024, cost: "$400M" },
  { name: "Telisotuzumab", target: "Lung Cancer", year: 2024, cost: "$700M" },
  { name: "Zilovertamab", target: "Lymphoma", year: 2024, cost: "$300M" },
  { name: "Firsocostat", target: "NASH / Liver", year: 2021, cost: "$500M" },
  { name: "Cilofexor", target: "NASH / Liver", year: 2021, cost: "$450M" },
  { name: "Selonsertib", target: "NASH / Liver", year: 2019, cost: "$600M" },
  { name: "Tominersen", target: "Huntington's", year: 2021, cost: "$800M" },
  { name: "Pridopidine", target: "Huntington's", year: 2018, cost: "$300M" },
  { name: "Branaplam", target: "Huntington's", year: 2022, cost: "$250M" },
  { name: "Arimoclomol", target: "ALS", year: 2021, cost: "$200M" },
  { name: "Reldesemtiv", target: "ALS", year: 2022, cost: "$300M" },
  { name: "Masitinib", target: "ALS", year: 2023, cost: "$350M" },
  { name: "Verdiperstat", target: "ALS", year: 2023, cost: "$350M" },
  { name: "Narsoplimab", target: "Transplant", year: 2023, cost: "$400M" },
  { name: "Cenerimod", target: "Lupus", year: 2024, cost: "$350M" },
  { name: "Nemtabrutinib", target: "CLL", year: 2024, cost: "$400M" },
  { name: "Baricitinib", target: "SLE", year: 2022, cost: "$350M" },
  { name: "Bermekimab", target: "Atopic Dermatitis", year: 2022, cost: "$180M" },
];

export default function DrugGraveyard() {
  const [highlighted, setHighlighted] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pickRandom = useCallback(() => {
    const count = 4 + Math.floor(Math.random() * 4);
    const newSet = new Set<number>();
    while (newSet.size < count) {
      newSet.add(Math.floor(Math.random() * failedDrugs.length));
    }
    setHighlighted(newSet);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    pickRandom();
    const interval = setInterval(pickRandom, 3000);
    return () => clearInterval(interval);
  }, [mounted, pickRandom]);

  const totalCostM = failedDrugs.reduce((sum, d) => {
    const num = parseFloat(d.cost.replace("$", "").replace("B", "000").replace("M", ""));
    return sum + num;
  }, 0);

  if (!mounted) {
    return (
      <div className="mx-auto w-[1300px] max-w-full">
        <div className="h-[600px]" />
      </div>
    );
  }

  return (
    <div className="mx-auto w-[1300px] max-w-full">
      {/* Header */}
      <div className="mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>THE DRUG GRAVEYARD</span>
          <h3 className="mt-3 text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            {failedDrugs.length} Compounds. Zero Patients Helped.
          </h3>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-5xl font-semibold tracking-tight text-red-500">${(totalCostM / 1000).toFixed(1)}B</span>
          <p className="mt-1 text-sm text-gray-400">Total investment lost</p>
        </div>
      </div>

      {/* Wall */}
      <div className="flex flex-wrap gap-1">
        {failedDrugs.map((drug, i) => {
          const isActive = highlighted.has(i);
          return (
            <div
              key={i}
              className="group relative"
            >
              <span
                className="inline-block cursor-default whitespace-nowrap rounded px-2 py-1 font-mono text-[11px] transition-all duration-1000"
                style={{
                  color: isActive ? "#dc2626" : undefined,
                  opacity: isActive ? 1 : 0.25,
                  fontWeight: isActive ? 600 : 400,
                  background: isActive ? "rgba(220,38,38,0.06)" : "transparent",
                }}
              >
                {drug.name}
              </span>

              {/* Tooltip */}
              <div className="pointer-events-none absolute -top-14 left-1/2 z-50 -translate-x-1/2 scale-95 rounded-lg bg-gray-100 px-4 py-2.5 text-left opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-neutral-800">
                <span className="block whitespace-nowrap text-xs text-gray-900 dark:text-gray-100" style={{ fontWeight: 600 }}>{drug.name}</span>
                <span className="block whitespace-nowrap text-[10px] text-gray-500 dark:text-gray-400">{drug.target} · {drug.cost} · {drug.year}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="mt-10 flex items-center gap-3">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Names illuminate and fade — each one a compound that consumed years of research and never reached a patient. <span className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>This is what VARL was built to change.</span>
        </p>
      </div>
    </div>
  );
}
