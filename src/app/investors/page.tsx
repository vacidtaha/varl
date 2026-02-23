"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";

const filings = [
  { date: "February 12, 2026", quarter: "Q1 2026", year: "2026", type: "Financial Report", title: "Q4 2025 Earnings Report", desc: "Full financial results for the fourth quarter and fiscal year 2025, including revenue, operating expenses, and R&D investment breakdown." },
  { date: "February 1, 2026", quarter: "Q1 2026", year: "2026", type: "SEC Filing", title: "Annual Report (10-K) — Fiscal Year 2025", desc: "Comprehensive annual disclosure including audited financial statements, risk factors, business overview, and management discussion." },
  { date: "January 20, 2026", quarter: "Q1 2026", year: "2026", type: "Investor Letter", title: "Letter to Shareholders — January 2026", desc: "Founders' perspective on VARL's strategic direction, pipeline milestones, and long-term capital allocation priorities." },
  { date: "January 8, 2026", quarter: "Q1 2026", year: "2026", type: "Presentation", title: "J.P. Morgan Healthcare Conference Deck", desc: "Investor presentation delivered at the 44th Annual J.P. Morgan Healthcare Conference, covering platform capabilities and market opportunity." },
  { date: "November 14, 2025", quarter: "Q4 2025", year: "2025", type: "Financial Report", title: "Q3 2025 Earnings Report", desc: "Third quarter financial results including partnership revenue, compute infrastructure costs, and updated full-year guidance." },
  { date: "November 1, 2025", quarter: "Q4 2025", year: "2025", type: "SEC Filing", title: "Quarterly Report (10-Q) — Q3 2025", desc: "Unaudited financial statements and management discussion for the quarter ended September 30, 2025." },
  { date: "October 5, 2025", quarter: "Q4 2025", year: "2025", type: "Investor Letter", title: "Letter to Shareholders — October 2025", desc: "Update on clinical validation milestones, new partnership agreements, and infrastructure scaling progress." },
  { date: "August 12, 2025", quarter: "Q3 2025", year: "2025", type: "Financial Report", title: "Q2 2025 Earnings Report", desc: "Second quarter results highlighting 340% year-over-year growth in API revenue and expansion into agricultural markets." },
  { date: "August 1, 2025", quarter: "Q3 2025", year: "2025", type: "SEC Filing", title: "Quarterly Report (10-Q) — Q2 2025", desc: "Unaudited financial statements and management discussion for the quarter ended June 30, 2025." },
  { date: "July 15, 2025", quarter: "Q3 2025", year: "2025", type: "Presentation", title: "Goldman Sachs Global Healthcare Conference", desc: "Platform overview and competitive positioning presented to institutional investors at the annual Goldman Sachs conference." },
  { date: "May 10, 2025", quarter: "Q2 2025", year: "2025", type: "Financial Report", title: "Q1 2025 Earnings Report", desc: "First quarter financial results including initial partnership revenue recognition and digital twin deployment metrics." },
  { date: "May 1, 2025", quarter: "Q2 2025", year: "2025", type: "SEC Filing", title: "Quarterly Report (10-Q) — Q1 2025", desc: "Unaudited financial statements and management discussion for the quarter ended March 31, 2025." },
  { date: "April 20, 2025", quarter: "Q2 2025", year: "2025", type: "Governance", title: "2025 Proxy Statement & Annual Meeting Notice", desc: "Board composition, executive compensation, governance proposals, and voting instructions for the 2025 annual shareholder meeting." },
  { date: "March 1, 2025", quarter: "Q1 2025", year: "2025", type: "Investor Letter", title: "Founding Letter to Investors", desc: "Taha Vacid and Haktan Köksal outline the thesis behind VARL, the role of VacidKöksal Investment Group, and the principles that will govern capital deployment." },
];

export default function InvestorsPage() {
  const [year, setYear] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return filings.filter((f) => {
      if (year !== "All" && f.year !== year) return false;
      if (type !== "All" && f.type !== type) return false;
      return true;
    });
  }, [year, type]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filings> = {};
    filtered.forEach((f) => {
      if (!groups[f.quarter]) groups[f.quarter] = [];
      groups[f.quarter].push(f);
    });
    return groups;
  }, [filtered]);

  const reset = () => {
    setYear("All");
    setType("All");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">

        {/* Hero / Intro */}
        <div className="mx-auto max-w-5xl px-8 pb-16 pt-24">
          <FadeIn>
            <h1 className="text-6xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
              Investors
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL is primarily financed by VacidKöksal Investment Group, the private investment vehicle of co-founders Taha Vacid and Haktan Köksal. The company is open to external investment but maintains strict criteria for alignment with its scientific mission, operational independence, and long-term vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We do not seek capital for growth at any cost. We seek partners who understand that the value VARL creates is measured in decades, not quarters, and that the integrity of our science is not negotiable under any financial pressure.
            </p>
          </FadeIn>
        </div>

        {/* Key Financials */}
        <div className="mx-auto max-w-5xl px-8 pb-20">
          <FadeInStagger className="grid grid-cols-4 gap-4" stagger={0.08}>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>FISCAL YEAR 2025</span>
              <div className="mt-4 text-4xl font-semibold text-gray-900 dark:text-gray-100">$900M</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>R&amp;D INVESTMENT</span>
              <div className="mt-4 text-4xl font-semibold text-gray-900 dark:text-gray-100">68%</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Of revenue reinvested</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>PARTNERSHIPS</span>
              <div className="mt-4 text-4xl font-semibold text-gray-900 dark:text-gray-100">4</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Active collaborations</span>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-neutral-800">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>PIPELINE</span>
              <div className="mt-4 text-4xl font-semibold text-gray-900 dark:text-gray-100">23</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Active programs</span>
            </div>
          </FadeInStagger>
        </div>

        {/* Governance */}
        <div className="mx-auto max-w-5xl px-8 pb-20">
          <FadeIn y={50}>
            <div className="flex gap-12 rounded-2xl bg-gray-50 p-12 dark:bg-neutral-800">
              <div className="flex-1">
                <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>OWNERSHIP</span>
                <h3 className="mt-4 text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>VacidKöksal Investment Group</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Majority ownership and primary capital provider since inception. The investment group is structured to ensure that VARL&apos;s scientific mission remains insulated from short-term market pressures. All strategic decisions are made jointly by the co-founders with full board visibility.
                </p>
              </div>
              <div className="flex-1">
                <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>INVESTMENT CRITERIA</span>
                <h3 className="mt-4 text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>What We Expect</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  External investors must demonstrate alignment with VARL&apos;s long-term thesis. We require minimum 5-year commitment horizons, no interference with scientific operations, and full acceptance of our governance structure. Capital that comes with conditions that compromise our mission is capital we do not need.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Separator line */}
        <div className="mx-auto max-w-5xl px-8">
          <div className="h-px w-full bg-gray-200 dark:bg-neutral-800" />
        </div>

        {/* SEC Filings & Reports heading */}
        <div className="mx-auto max-w-5xl px-8 pb-4 pt-20">
          <h2 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            SEC Filings &amp; Reports
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Financial disclosures, regulatory filings, investor presentations, and shareholder communications.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-40 mt-8 flex w-full items-center justify-center bg-[#f5f5f5] dark:bg-neutral-800" style={{ height: "80px" }}>
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
            <div className="flex flex-1 items-center gap-4">
              <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Filter</span>
              <Dropdown
                label="Year"
                options={["All", "2026", "2025", "2024"]}
                value={year}
                onChange={setYear}
              />
              <Dropdown
                label="Type"
                options={["All", "Financial Report", "SEC Filing", "Investor Letter", "Presentation", "Governance"]}
                value={type}
                onChange={setType}
              />
            </div>
            <button
              onClick={reset}
              className="shrink-0 pl-4 text-sm text-blue-500 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Filing List */}
        <div className="mx-auto w-full max-w-5xl px-8 py-16">
          {Object.keys(grouped).length === 0 && (
            <p className="py-20 text-center text-lg text-gray-400">No results found.</p>
          )}

          {Object.entries(grouped).map(([quarter, items], gi) => (
            <div key={quarter}>
              <FadeIn>
                <div className={`mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${gi > 0 ? "mt-14" : ""}`}>
                  {quarter}
                </div>
                <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />
              </FadeIn>

              {items.map((filing, i) => (
                <FadeIn key={filing.date + filing.title}>
                  <a href="#" className="group flex items-start gap-8 py-8">
                    <div className="flex w-32 shrink-0 flex-col gap-1">
                      <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>{filing.type}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{filing.date}</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <h4 className="text-xl text-gray-900 transition-colors group-hover:text-black dark:text-gray-100 dark:group-hover:text-white" style={{ fontWeight: 500 }}>
                        {filing.title}
                      </h4>
                      <p className="text-base leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-200">{filing.desc}</p>
                    </div>
                    <div className="mt-1 flex shrink-0 items-center gap-2 text-sm text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white">
                      <span>PDF</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </div>
                  </a>
                  {i < items.length - 1 && (
                    <div className="h-px w-full bg-gray-100 dark:bg-neutral-800" />
                  )}
                </FadeIn>
              ))}

              <div className="h-0.5 w-full bg-gray-200 dark:bg-neutral-800" />
            </div>
          ))}
        </div>

        {/* Contact IR */}
        <div className="mx-auto max-w-5xl px-8 pb-32">
          <FadeIn>
            <div className="rounded-2xl bg-gray-50 p-12 dark:bg-neutral-800">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Investor Relations</h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    For inquiries regarding financial performance, investment opportunities, or shareholder matters, contact our investor relations team directly.
                  </p>
                </div>
                <a
                  href="mailto:ir@varl.com"
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-sm text-gray-700 transition-all hover:border-gray-500 hover:text-black dark:border-neutral-600 dark:text-gray-300 dark:hover:border-neutral-400 dark:hover:text-white"
                  style={{ fontWeight: 450 }}
                >
                  ir@varl.com
                </a>
              </div>
              <div className="mt-8 flex gap-12 text-sm text-gray-400">
                <div>
                  <span className="text-xs tracking-wide" style={{ fontWeight: 500 }}>Email</span>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">ir@varl.com</p>
                </div>
                <div>
                  <span className="text-xs tracking-wide" style={{ fontWeight: 500 }}>Annual Meeting</span>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">April 2026, Istanbul</p>
                </div>
                <div>
                  <span className="text-xs tracking-wide" style={{ fontWeight: 500 }}>Transfer Agent</span>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Computershare Trust Company</p>
                </div>
                <div>
                  <span className="text-xs tracking-wide" style={{ fontWeight: 500 }}>Auditor</span>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Deloitte &amp; Touche LLP</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
