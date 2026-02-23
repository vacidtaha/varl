"use client";

import { useState } from "react";

type Perk = {
  title: string;
  text: string;
};

type JobDetail = {
  intro: string;
  expectations: string[];
  perks: Perk[];
};

type Job = {
  title: string;
  desc: string;
  team: string;
  location: string;
  type: string;
  salary?: string;
  equity?: string;
  pto?: string;
  detail?: JobDetail;
};

export default function JobList({ jobs }: { jobs: Job[] }) {
  const [showAll, setShowAll] = useState(false);
  const [openJob, setOpenJob] = useState<string | null>(null);

  const visible = showAll ? jobs : jobs.slice(0, 5);

  const toggle = (title: string) => {
    setOpenJob(openJob === title ? null : title);
  };

  return (
    <>
      <div className="border-t border-gray-200 dark:border-neutral-800">
        {visible.map((job) => {
          const isOpen = openJob === job.title;
          const hasDetail = !!job.detail;

          return (
            <div
              key={job.title}
              className="group border-b border-gray-200 transition-colors hover:bg-gray-50 dark:border-neutral-800 dark:hover:bg-neutral-900/60"
            >
              {/* Row */}
              <button
                onClick={() => hasDetail && toggle(job.title)}
                className={`flex w-full items-start justify-between px-6 py-8 text-left ${
                  hasDetail ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="flex-1 pr-12">
                  <h3
                    className="text-xl text-gray-900 transition-colors group-hover:text-black dark:text-gray-100 dark:group-hover:text-white"
                    style={{ fontWeight: 500 }}
                  >
                    {job.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {job.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-400 dark:text-gray-500">
                    <span>{job.team}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                {hasDetail && (
                  <span
                    className="mt-1 flex shrink-0 items-center gap-1.5 text-sm text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-600 dark:group-hover:text-white"
                    style={{ fontWeight: 450 }}
                  >
                    {isOpen ? "Kapat" : "Detay Gör"}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}

                {!hasDetail && (
                  <a
                    href={`mailto:careers@varl.com?subject=Application: ${job.title}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 shrink-0 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-600 dark:hover:text-white"
                    style={{ fontWeight: 450 }}
                  >
                    Başvur &rarr;
                  </a>
                )}
              </button>

              {/* Expandable Detail Panel */}
              {hasDetail && isOpen && job.detail && (
                <div className="rounded-2xl bg-gray-50 px-8 pb-10 pt-2 dark:bg-neutral-900/50">

                  {/* Stats */}
                  <div className="mt-8 flex flex-wrap items-baseline gap-x-12 gap-y-4">
                    <div>
                      <span className="text-sm text-gray-400 dark:text-gray-500">Compensation</span>
                      <p className="text-2xl tracking-tight text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                        {job.salary}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400 dark:text-gray-500">Equity</span>
                      <p className="text-2xl tracking-tight text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                        {job.equity}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400 dark:text-gray-500">Paid Time Off</span>
                      <p className="text-2xl tracking-tight text-emerald-600 dark:text-emerald-400" style={{ fontWeight: 600 }}>
                        {job.pto}
                      </p>
                    </div>
                  </div>

                  {/* Intro */}
                  <p className="mt-10 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {job.detail.intro}
                  </p>

                  {/* What we expect */}
                  <div className="mt-10">
                    <h4
                      className="text-lg text-gray-900 dark:text-gray-100"
                      style={{ fontWeight: 600 }}
                    >
                      What We Expect
                    </h4>
                    <ul className="mt-5 space-y-3">
                      {job.detail.expectations.map((r, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perks grid */}
                  <div className="mt-12">
                    <h4
                      className="text-lg text-gray-900 dark:text-gray-100"
                      style={{ fontWeight: 600 }}
                    >
                      What You Get
                    </h4>
                    <div className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-gray-200 dark:bg-neutral-800 md:grid-cols-2">
                      {job.detail.perks.map((perk, i) => (
                        <div
                          key={i}
                          className="bg-white px-7 py-6 dark:bg-neutral-950"
                        >
                          <h5
                            className="text-base text-emerald-600 dark:text-emerald-400"
                            style={{ fontWeight: 550 }}
                          >
                            {perk.title}
                          </h5>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                            {perk.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply */}
                  <div className="mt-10">
                    <div className="flex items-center gap-5">
                      <a
                        href={`/apply?position=${encodeURIComponent(job.title)}`}
                        className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-8 py-4 text-sm text-white transition-colors hover:bg-emerald-500"
                        style={{ fontWeight: 500 }}
                      >
                        Bu pozisyona başvur
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        careers@varl.com
                      </span>
                    </div>
                    <p className="mt-3 text-[11px] leading-relaxed text-gray-400 dark:text-gray-600">
                      Legal support does not apply to criminal offenses. Any conviction for a dishonourable crime results in immediate termination of employment and all associated benefits.
                    </p>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show more / collapse */}
      {!showAll && jobs.length > 5 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 py-4 text-sm text-emerald-600 transition-colors hover:border-emerald-500 hover:bg-emerald-50 dark:border-emerald-800/50 dark:text-emerald-400 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/30"
          style={{ fontWeight: 450 }}
        >
          Tüm pozisyonları göster ({jobs.length - 5} daha)
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-px">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {showAll && jobs.length > 5 && (
        <button
          onClick={() => { setShowAll(false); setOpenJob(null); }}
          className="mt-8 flex w-full items-center justify-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          style={{ fontWeight: 400 }}
        >
          Daralt
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-px">
            <path d="M2.5 8L6 4.5L9.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );
}
