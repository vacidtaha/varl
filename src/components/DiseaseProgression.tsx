"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const stages = [
  {
    id: 0,
    label: "Molecular Mutation",
    time: "Year 0",
    scale: 0.06,
    description: "A single base-pair error in a tumor suppressor gene. One cell, one mistake. No blood test, no scan, no symptom can find it. The body doesn't know yet. But the clock has started.",
    traditional: "Invisible. No diagnostic tool on earth can detect this.",
    varl: "Genomic digital twin flags the mutation within 72 hours of sequencing data upload. Pathway risk score: elevated.",
    color: "#fca5a5",
  },
  {
    id: 1,
    label: "Pathway Disruption",
    time: "Year 1–2",
    scale: 0.14,
    description: "The mutated cell disables its own growth brakes. 14 downstream signaling pathways begin to malfunction. Neighboring cells receive corrupted chemical signals. A micro-colony of 200 rogue cells forms.",
    traditional: "No clinical signs. Routine bloodwork: normal. Physical exam: normal.",
    varl: "AI pathway analysis detects cascade disruption across 3 molecular networks. Simulation predicts 87% probability of progression without intervention.",
    color: "#f87171",
  },
  {
    id: 2,
    label: "Microenvironment Takeover",
    time: "Year 2–4",
    scale: 0.28,
    description: "The tissue around the growing mass is reprogrammed. New blood vessels form to feed it. Immune cells are chemically blinded — they patrol the area but cannot see the threat. The tumor builds its own ecosystem.",
    traditional: "Annual checkup: clear. Patient feels healthy. Zero indication of disease.",
    varl: "Digital twin predicts angiogenic switch. 4 candidate interventions already validated in simulation. Optimal treatment window: now.",
    color: "#ef4444",
  },
  {
    id: 3,
    label: "Detectable Tumor",
    time: "Year 4–7",
    scale: 0.5,
    description: "A mass large enough to appear on imaging. The tumor has spent years building defenses, supply lines, and escape routes. It has already sent scout cells into the bloodstream. By the time it's found, it has been winning for half a decade.",
    traditional: "First possible detection — if a scan happens to be ordered. Biopsy confirms malignancy. Treatment begins. Late.",
    varl: "In the VARL timeline, this mass never formed. Intervention occurred at Stage 1. The patient never knew they were sick.",
    color: "#dc2626",
  },
  {
    id: 4,
    label: "Metastasis",
    time: "Year 7–10+",
    scale: 1.0,
    description: "Cancer cells colonize distant organs — liver, lungs, bones, brain. The disease is no longer local. It is systemic, adaptive, and evolving resistance to treatment in real time. The body is losing a war it didn't know it was fighting.",
    traditional: "Diagnosis at this stage. Chemotherapy, radiation, surgery. 5-year survival: below 20%. Average treatment cost: $150,000+/year.",
    varl: "This stage does not exist in the VARL paradigm. Molecular interception at Year 1 eliminates the possibility entirely.",
    color: "#991b1b",
  },
];

export default function DiseaseProgression() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="h-[800px]" />;

  const stage = stages[active];

  return (
    <div className="mx-auto w-[1300px] max-w-full">
      {/* Header */}
      <div className="mb-16">
        <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>DISEASE PROGRESSION</span>
        <h3 className="mt-3 text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Anatomy of a Cancer — From First Mutation to Last Resort
        </h3>
      </div>

      {/* Timeline bar */}
      <div className="relative mb-16">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gray-200 dark:bg-neutral-800" />
        <div className="relative flex justify-between">
          {stages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className="group flex flex-col items-center gap-3"
            >
              <motion.div
                animate={{
                  scale: i === active ? 1.2 : 1,
                  backgroundColor: i <= active ? stage.color : "rgb(229 229 229)",
                }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full"
              >
                <span className="text-sm text-white" style={{ fontWeight: 600 }}>{i + 1}</span>
                {i === active && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: `2px solid ${stage.color}` }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
              <span className={`text-xs transition-colors ${i === active ? "text-gray-900 dark:text-gray-100" : "text-gray-400"}`} style={{ fontWeight: i === active ? 500 : 400 }}>
                {s.time}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex gap-8"
        >
          {/* Left: Visual */}
          <div className="flex w-[380px] shrink-0 flex-col items-center justify-center rounded-2xl bg-white p-10 dark:bg-neutral-900">
            {/* Concentric rings showing spread */}
            <div className="relative flex h-[300px] w-[300px] items-center justify-center">
              {[1, 0.75, 0.5, 0.3, 0.15].map((ringScale, ri) => (
                <motion.div
                  key={ri}
                  className="absolute rounded-full"
                  style={{
                    border: `1px solid ${ri === 0 ? stage.color : "transparent"}`,
                    background: ri <= Math.floor(stage.scale * 5) ? `${stage.color}${ri === 0 ? "15" : "08"}` : "transparent",
                  }}
                  animate={{
                    width: `${ringScale * 100}%`,
                    height: `${ringScale * 100}%`,
                    opacity: ri <= Math.floor(stage.scale * 5) ? 1 : 0.1,
                  }}
                  transition={{ duration: 0.8, delay: ri * 0.08 }}
                />
              ))}
              {/* Center dot */}
              <motion.div
                className="absolute rounded-full"
                style={{ backgroundColor: stage.color }}
                animate={{ width: 8 + stage.scale * 40, height: 8 + stage.scale * 40 }}
                transition={{ duration: 0.6 }}
              />
              {/* Pulse */}
              <motion.div
                className="absolute rounded-full"
                style={{ border: `2px solid ${stage.color}` }}
                animate={{
                  width: [20 + stage.scale * 50, 40 + stage.scale * 80],
                  height: [20 + stage.scale * 50, 40 + stage.scale * 80],
                  opacity: [0.5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="mt-6 text-center text-sm text-gray-400" style={{ fontWeight: 500 }}>{stage.label}</span>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: stage.color }} />
              <span className="text-xs text-gray-400">Affected area: {Math.round(stage.scale * 100)}%</span>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full px-3 py-1 text-xs text-white" style={{ backgroundColor: stage.color, fontWeight: 600 }}>
                  Stage {active + 1}
                </span>
                <span className="text-sm text-gray-400">{stage.time}</span>
              </div>
              <h4 className="mt-4 text-3xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                {stage.label}
              </h4>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                {stage.description}
              </p>
            </div>

            {/* Comparison cards */}
            <div className="mt-8 flex gap-4">
              <div className="flex-1 rounded-xl bg-gray-100 p-6 dark:bg-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  <span className="text-[10px] tracking-widest text-gray-400" style={{ fontWeight: 500 }}>TRADITIONAL</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{stage.traditional}</p>
              </div>
              <div className="flex-1 rounded-xl p-6" style={{ backgroundColor: `${stage.color}08` }}>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: stage.color }} />
                  <span className="text-[10px] tracking-widest" style={{ color: stage.color, fontWeight: 500 }}>VARL</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{stage.varl}</p>
              </div>
            </div>

            {/* Progress bar showing detection gap */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Detection timeline</span>
                <span>{active <= 2 ? "VARL detects here" : active === 3 ? "Traditional detects here" : "Too late for most"}</span>
              </div>
              <div className="mt-2 flex h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-neutral-800">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: stage.color }}
                  animate={{ width: `${(active + 1) * 20}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-gray-300 dark:text-gray-600">
                <span>Year 0</span>
                <span>Year 2</span>
                <span>Year 4</span>
                <span>Year 7</span>
                <span>Year 10+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom: the verdict */}
      <div className="mt-16 overflow-hidden rounded-2xl">
        <div className="flex">
          <div className="flex w-1/2 flex-col justify-center bg-gray-200 p-10 dark:bg-neutral-800">
            <span className="text-xs tracking-widest text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>TRADITIONAL DETECTION</span>
            <span className="mt-4 text-5xl font-semibold tracking-tight text-gray-400 dark:text-neutral-600">Stage 4</span>
            <p className="mt-2 text-sm text-gray-400 dark:text-neutral-500">Average time to diagnosis: 4–7 years after first mutation</p>
          </div>
          <div className="flex w-1/2 flex-col justify-center bg-gray-950 p-10 dark:bg-black">
            <span className="text-xs tracking-widest text-red-400" style={{ fontWeight: 500 }}>VARL DETECTION</span>
            <span className="mt-4 text-5xl font-semibold tracking-tight text-white">Stage 1</span>
            <p className="mt-2 text-sm text-white/50">Within 72 hours of genomic data. Years before any symptom.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
