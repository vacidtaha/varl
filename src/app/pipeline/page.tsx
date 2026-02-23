import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Pipeline" };
import JoinUs from "@/components/JoinUs";

const phases = ["Discovery", "Preclinical", "Phase I", "Phase II", "Phase III", "Approved"];

const programs = [
  { name: "Genome Repair Toolkit", area: "Health", indication: "Gene Therapy", phase: 6, status: "completed" },
  { name: "Pathway Alpha-7", area: "Health", indication: "Oncology", phase: 5, status: "completed" },
  { name: "Biomarker Detection Suite", area: "Health", indication: "Early Diagnostics", phase: 4, status: "active" },
  { name: "Protein Folding Engine v3", area: "Health", indication: "Rare Genetic Disorders", phase: 4, status: "active" },
  { name: "Neuro-Repair Cascade", area: "Health", indication: "Neurodegeneration", phase: 3, status: "active" },
  { name: "Metabolic Twin Engine", area: "Health", indication: "Diabetes & Metabolic Disorders", phase: 3, status: "active" },
  { name: "Hepatic Regeneration Protocol", area: "Health", indication: "Liver Disease", phase: 3, status: "active" },
  { name: "Immune Response Twin", area: "Health", indication: "Autoimmune Disease", phase: 2, status: "active" },
  { name: "Cardiac Regeneration Model", area: "Health", indication: "Cardiovascular Disease", phase: 2, status: "active" },
  { name: "Dermal Repair Accelerator", area: "Health", indication: "Wound Healing", phase: 2, status: "active" },
  { name: "Synaptic Plasticity Engine", area: "Health", indication: "Cognitive Decline", phase: 2, status: "active" },
  { name: "Lipid Nanoparticle Delivery", area: "Health", indication: "Targeted Therapy", phase: 1, status: "active" },
  { name: "Respiratory Pathway Mapper", area: "Health", indication: "Pulmonary Disease", phase: 1, status: "active" },
  { name: "Renal Function Twin", area: "Health", indication: "Kidney Disease", phase: 1, status: "active" },
  { name: "Microbiome Modulation Suite", area: "Health", indication: "Gut-Brain Axis", phase: 1, status: "active" },
  { name: "Bone Density Restoration", area: "Health", indication: "Osteoporosis", phase: 1, status: "active" },
  { name: "Retinal Repair Framework", area: "Health", indication: "Vision Loss", phase: 1, status: "active" },
  { name: "Endocrine Balance Model", area: "Health", indication: "Hormonal Disorders", phase: 1, status: "active" },
  { name: "Immune Checkpoint Navigator", area: "Health", indication: "Immuno-Oncology", phase: 2, status: "active" },
  { name: "Vascular Regeneration Twin", area: "Health", indication: "Peripheral Artery Disease", phase: 1, status: "active" },
];

export default function PipelinePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto w-[1300px] max-w-full px-8 py-20">
          <h2 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Pipeline
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
            Our active research programs across health systems, from early discovery through validation and deployment.
          </p>

          <p className="mt-16 mb-3 text-xs text-gray-400">Last updated: February 12, 2026 — 18:30 UTC</p>

          {/* Pipeline table */}
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900">
            {/* Header row */}
            <div className="grid border-b border-gray-100 dark:border-neutral-800" style={{ gridTemplateColumns: "280px repeat(6, 1fr)" }}>
              <div className="px-8 py-5">
                <span className="text-xs tracking-wide text-gray-400">Program</span>
              </div>
              {phases.map((phase) => (
                <div key={phase} className="flex items-center justify-center px-2 py-5">
                  <span className="text-xs tracking-wide text-gray-400">{phase}</span>
                </div>
              ))}
            </div>

            {/* Program rows */}
            {programs.map((program, i) => (
              <div
                key={program.name}
                className={`grid items-center ${i < programs.length - 1 ? "border-b border-gray-50 dark:border-neutral-800/50" : ""}`}
                style={{ gridTemplateColumns: "280px repeat(6, 1fr)" }}
              >
                <div className="flex flex-col gap-1 px-8 py-5">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{program.name}</span>
                  <span className="text-xs text-gray-400">{program.indication}</span>
                </div>
                {phases.map((_, pi) => (
                  <div key={pi} className="flex items-center justify-center px-2 py-5">
                    {pi < program.phase ? (
                      <div
                        className="h-2 w-full rounded-full"
                        style={{
                          backgroundColor: pi === program.phase - 1
                            ? program.area === "Health" ? "#16A34A" : "#059669"
                            : program.area === "Health" ? "rgba(22, 163, 74, 0.25)" : "rgba(5, 150, 105, 0.25)",
                        }}
                      />
                    ) : (
                      <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-neutral-800" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Legend + Disclaimer */}
          <div className="mt-8 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-2 w-6 rounded-full" style={{ backgroundColor: "#16A34A" }} />
              <span className="text-xs text-gray-400">Active Phase</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-6 rounded-full" style={{ backgroundColor: "rgba(22, 163, 74, 0.25)" }} />
              <span className="text-xs text-gray-400">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-6 rounded-full bg-gray-100 dark:bg-neutral-800" />
              <span className="text-xs text-gray-400">Pending</span>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-xs text-gray-400">
            Data reflects the latest internal review cycle. Pipeline status is subject to ongoing validation and regulatory assessment. Programs may advance, pause, or be discontinued based on emerging clinical and computational evidence.
          </p>

        </div>

        <JoinUs />
      </main>

      <Footer />
    </div>
  );
}
