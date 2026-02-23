"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "authentication", label: "Authentication" },
  { id: "digital-twins", label: "Digital Twins" },
  { id: "simulations", label: "Simulations" },
  { id: "biomarkers", label: "Biomarkers" },
  { id: "predictions", label: "Predictions" },
  { id: "datasets", label: "Datasets" },
  { id: "webhooks", label: "Webhooks" },
  { id: "rate-limits", label: "Rate Limits" },
  { id: "errors", label: "Errors" },
  { id: "changelog", label: "Changelog" },
];

export default function ApiDocsPage() {
  const [active, setActive] = useState("overview");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${h}:${m}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(topMost.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Access Notice */}
      <div className="mx-auto w-[1300px] max-w-full px-8 pt-8">
        <div className="rounded-xl border border-gray-200 bg-gray-50 px-8 py-6 dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>API Access Requires Approval</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            The VARL API is not publicly available. Access is granted on a case-by-case basis following a review of your organization, intended use case, and compliance with our data governance policies. To request access, please complete the API Access Request Form. Our team reviews all submissions and responds within 5 business days.
          </p>
          <a
            href="/api-access"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-900 transition-colors hover:text-black dark:text-gray-200 dark:hover:text-white"
            style={{ fontWeight: 500 }}
          >
            Request Access &rarr;
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-[1300px] max-w-full flex-1 px-8">
        {/* Sidebar */}
        <aside className="sticky top-[45px] flex h-[calc(100vh-45px)] w-56 shrink-0 flex-col py-10 pr-8">
          <span className="mb-8 text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>
            API Reference
          </span>
          <nav className="flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActive(s.id);
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`py-1 text-left text-xl transition-colors ${
                  active === s.id
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-400 dark:text-gray-500"
                }`}
                style={{ fontWeight: active === s.id ? 500 : 400 }}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-2 pt-6">
            <div className="mb-1 flex items-baseline gap-2">
              <span className="text-xs tracking-widest text-gray-400" style={{ fontWeight: 500 }}>
                Status
              </span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500">
                Last update: Today {currentTime}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500 dark:text-gray-400">API</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Compute</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Simulations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Datasets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Webhooks</span>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 py-10 pl-12">
          <div>

            {/* Overview */}
            <section id="overview" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Overview
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The VARL API provides programmatic access to our biological intelligence platform. It enables developers, researchers, and institutions to integrate digital twin simulations, molecular pathway analysis, biomarker detection, and predictive modeling into their own workflows — all through a single, unified RESTful interface.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every endpoint follows a consistent design philosophy: submit biological context, receive structured intelligence. Whether you are building a clinical decision support tool, automating drug screening pipelines, or constructing real-time patient monitoring dashboards, the VARL API abstracts the complexity of computational biology into clean, composable operations.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Base URL
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                All API requests are made to the following base URL. All endpoints require HTTPS. HTTP requests will be rejected.
              </p>
              <div className="mt-4 bg-gray-900 px-6 py-4 dark:bg-neutral-950">
                <code className="font-mono text-sm text-green-400">https://api.varl.bio/v1</code>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Architecture
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The API is organized around five primary resource groups that mirror VARL&apos;s scientific workflow. Each group encapsulates a distinct phase of the biological intelligence pipeline, from data ingestion to actionable prediction.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="font-mono text-xs text-gray-400">01</span>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Digital Twins</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Virtual representations of biological systems — from individual cells and protein networks to complete organ models. Create twins from genomic profiles, configure environmental parameters, attach real-time patient data, and query system state at any resolution. Twins persist across sessions and evolve as new data is integrated.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="font-mono text-xs text-gray-400">02</span>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Simulations</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Run computational experiments on digital twins. Introduce drug candidates, model pathway disruptions, simulate genetic mutations, and observe cascading effects across biological subsystems. Simulations execute in parallel and return time-series data with configurable granularity. Batch operations support running thousands of scenarios simultaneously.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="font-mono text-xs text-gray-400">03</span>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Biomarkers</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Detect, track, and analyze molecular biomarkers across patient cohorts or simulation outputs. The biomarker engine identifies statistically significant markers from multi-omics data, correlates them with disease states, and provides confidence-scored recommendations for diagnostic and therapeutic targets.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="font-mono text-xs text-gray-400">04</span>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Predictions</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    AI-powered forecasting endpoints built on VARL&apos;s proprietary biological language models. Submit patient data, molecular profiles, or simulation snapshots and receive predictions about disease trajectories, treatment efficacy, adverse event probability, biomarker evolution, and system-level outcomes. Every prediction includes confidence intervals and explainability metadata.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <span className="font-mono text-xs text-gray-400">05</span>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Datasets</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Access curated biological datasets spanning genomics, proteomics, metabolomics, and clinical trial records. Upload proprietary data for secure analysis, or query VARL&apos;s reference library of over 2.4 million annotated molecular interactions. Datasets support streaming for large-scale operations and are versioned for reproducibility.
                  </p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Request Format
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The API accepts JSON-encoded request bodies and returns JSON-encoded responses. All timestamps are in ISO 8601 format. Pagination follows cursor-based patterns for consistent performance across large result sets. Every response includes a <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">request_id</code> field for debugging and audit purposes.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/twins</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-gray-500">{"// Create a digital twin from a genomic profile"}</span>{"\n"}
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"organism\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;homo_sapiens&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"system\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;cardiovascular&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"resolution\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;cellular&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"source_data\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"genomic_profile\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_gp_82kf9n&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"clinical_history\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_ch_4m2j7p&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"time_horizon\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;365d&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"update_frequency\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;real_time&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"fidelity\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;high&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">Response</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "twn_8f3k2n9m",
  "object": "digital_twin",
  "status": "initializing",
  "organism": "homo_sapiens",
  "system": "cardiovascular",
  "resolution": "cellular",
  "node_count": 847293,
  "edge_count": 2341876,
  "created_at": "2026-02-14T09:32:11Z",
  "ready_at": null,
  "request_id": "req_v4rl_7k2m9n"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                SDKs &amp; Libraries
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Official client libraries handle authentication, request signing, automatic retries, and response parsing. They are the recommended way to interact with the VARL API in production environments.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { lang: "Python", pkg: "varl-sdk", version: "2.4.1", install: "pip install varl-sdk" },
                  { lang: "TypeScript", pkg: "@varl/sdk", version: "2.4.0", install: "npm install @varl/sdk" },
                  { lang: "R", pkg: "varl", version: "1.8.3", install: "install.packages(\"varl\")" },
                ].map((sdk) => (
                  <div key={sdk.lang} className="bg-gray-50 p-5 dark:bg-neutral-900">
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>{sdk.lang}</span>
                    <p className="mt-1 font-mono text-xs text-gray-400">{sdk.pkg}</p>
                    <p className="mt-3 font-mono text-xs text-gray-500 dark:text-gray-500">{sdk.install}</p>
                    <span className="mt-2 inline-block font-mono text-xs text-gray-400">
                      v{sdk.version}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Versioning
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The API uses date-based versioning. The current version is <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">2026-02-01</code>. When breaking changes are introduced, a new version date is published and the previous version remains available for 12 months. You can pin your integration to a specific version by including the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">VARL-Version</code> header in your requests.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Status
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Current API uptime is 99.97%. System status, incident reports, and scheduled maintenance windows are published at <span className="font-mono text-sm text-gray-700 dark:text-gray-300">status.varl.bio</span>. Subscribe to receive real-time notifications via email or webhook.
              </p>
            </section>

            {/* Authentication */}
            <section id="authentication" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Authentication
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The VARL API uses API keys to authenticate requests. Every request must include a valid key in the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">Authorization</code> header. Keys are scoped to organizations and carry specific permissions that determine which resources and operations are accessible.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                API keys are sensitive credentials. Do not expose them in client-side code, public repositories, or log files. If a key is compromised, revoke it immediately from your dashboard and generate a new one. All key rotation events are logged and auditable.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Obtaining API Keys
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                API keys are generated from the VARL Dashboard under <span className="font-mono text-sm text-gray-700 dark:text-gray-300">Settings &rarr; API Keys</span>. Each organization can create up to 50 active keys. When creating a key, you must assign it a name, select its permission scope, and optionally restrict it to specific IP ranges or environments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Keys are displayed only once at the time of creation. Store them securely in environment variables or a secrets manager. VARL does not store plaintext keys — only a cryptographic hash is retained on our servers.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Making Authenticated Requests
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Include your API key in the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">Authorization</code> header using the Bearer scheme. This is the only supported authentication method. Query parameter authentication is not supported for security reasons.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Header</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-yellow-300">Authorization</span><span className="text-white">:</span> <span className="text-green-300">Bearer varl_sk_live_4f8k2m9n7j3p1x...</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">cURL Example</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-green-400">curl</span> <span className="text-white">-X GET https://api.varl.bio/v1/twins</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}-H</span> <span className="text-green-300">&quot;Authorization: Bearer varl_sk_live_4f8k2m9n7j3p1x&quot;</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}-H</span> <span className="text-green-300">&quot;Content-Type: application/json&quot;</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}-H</span> <span className="text-green-300">&quot;VARL-Version: 2026-02-01&quot;</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Python SDK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-blue-400">from</span> <span className="text-white">varl</span> <span className="text-blue-400">import</span> <span className="text-white">Client</span>{"\n\n"}
                  <span className="text-gray-500"># The SDK reads VARL_API_KEY from environment by default</span>{"\n"}
                  <span className="text-white">client</span> <span className="text-gray-400">=</span> <span className="text-white">Client</span><span className="text-gray-400">()</span>{"\n\n"}
                  <span className="text-gray-500"># Or pass it explicitly</span>{"\n"}
                  <span className="text-white">client</span> <span className="text-gray-400">=</span> <span className="text-white">Client</span><span className="text-gray-400">(</span><span className="text-yellow-300">api_key</span><span className="text-gray-400">=</span><span className="text-green-300">&quot;varl_sk_live_4f8k2m9n7j3p1x&quot;</span><span className="text-gray-400">)</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Key Types
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                VARL issues two types of API keys. Each serves a distinct purpose and carries different security implications. Using the wrong key type in production is a common source of integration issues.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-green-600 dark:text-green-400">varl_sk_live_*</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Live Keys</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Used in production environments. Live keys have access to real biological data, execute actual simulations on VARL&apos;s compute infrastructure, and consume your organization&apos;s quota. All operations performed with live keys are logged, billed, and subject to rate limits. Results from live key operations are persisted and available for downstream analysis.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400">varl_sk_test_*</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Test Keys</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Used in development and staging environments. Test keys operate against a sandboxed copy of the API that returns synthetic data. Simulations complete instantly with deterministic outputs. No quota is consumed and no data is persisted. Test keys are ideal for building integrations, running CI/CD pipelines, and validating request formats without incurring costs.
                  </p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Permission Scopes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Each API key is assigned one or more permission scopes that control which endpoints it can access. Scopes follow a resource-based model with granular read/write separation. Apply the principle of least privilege — assign only the scopes required for each key&apos;s intended use case.
              </p>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-6 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Scope</th>
                      <th className="pb-3 pr-6 text-xs text-gray-400" style={{ fontWeight: 500 }}>Access</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">twins:read</td>
                      <td className="py-3 pr-6 text-xs">Read</td>
                      <td className="py-3 text-xs">List and retrieve digital twins, query twin state and metadata</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">twins:write</td>
                      <td className="py-3 pr-6 text-xs">Write</td>
                      <td className="py-3 text-xs">Create, update, configure, and delete digital twins</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">simulations:run</td>
                      <td className="py-3 pr-6 text-xs">Execute</td>
                      <td className="py-3 text-xs">Start simulations, submit batch jobs, cancel running operations</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">simulations:read</td>
                      <td className="py-3 pr-6 text-xs">Read</td>
                      <td className="py-3 text-xs">Retrieve simulation results, status, and time-series outputs</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">biomarkers:read</td>
                      <td className="py-3 pr-6 text-xs">Read</td>
                      <td className="py-3 text-xs">Query biomarker databases, retrieve detection results</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">predictions:run</td>
                      <td className="py-3 pr-6 text-xs">Execute</td>
                      <td className="py-3 text-xs">Submit prediction requests, access forecasting models</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">datasets:read</td>
                      <td className="py-3 pr-6 text-xs">Read</td>
                      <td className="py-3 text-xs">Access curated datasets and reference libraries</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 font-mono text-xs text-gray-700 dark:text-gray-300">datasets:write</td>
                      <td className="py-3 pr-6 text-xs">Write</td>
                      <td className="py-3 text-xs">Upload proprietary data, create custom dataset versions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                IP Allowlisting
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                For enhanced security, API keys can be restricted to specific IP addresses or CIDR ranges. When IP allowlisting is enabled, requests originating from unlisted addresses will receive a <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">403 Forbidden</code> response regardless of key validity. Configure allowlists from the dashboard or via the management API.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">PATCH</span>
                  <span className="font-mono text-xs text-gray-400">/keys/&#123;key_id&#125;</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"ip_allowlist\""}</span><span className="text-white">:</span> <span className="text-white">[</span>{"\n"}
                  <span className="text-green-300">{"    \"203.0.113.0/24\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"198.51.100.42\""}</span>{"\n"}
                  <span className="text-white">{"  ]"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"enforce_allowlist\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Key Rotation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                VARL recommends rotating API keys every 90 days as a security best practice. The rotation process is designed for zero-downtime transitions: create a new key, update your application to use it, verify successful requests, then revoke the old key. During the transition period both keys remain active.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Automated rotation is available through the management API. You can also configure expiration dates at key creation time — expired keys are automatically disabled and cannot be reactivated. Rotation events, including the originating IP and user agent, are recorded in your organization&apos;s audit log.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Authentication Errors
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                When authentication fails, the API returns one of the following error responses. All error responses include a machine-readable <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">error.code</code> field for programmatic handling.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">401</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>authentication_required</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">No API key was provided. Include the Authorization header with a valid Bearer token.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">401</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>invalid_api_key</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The provided API key does not match any active key. Verify the key is correct and has not been revoked.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">403</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>insufficient_scope</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The API key is valid but lacks the required permission scope for this endpoint. Update the key&apos;s scopes from the dashboard.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">403</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>ip_not_allowed</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The request originates from an IP address not in the key&apos;s allowlist. Add the IP to the allowlist or disable IP restriction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-yellow-500">403</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>key_expired</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The API key has passed its expiration date. Generate a new key from the dashboard. Expired keys cannot be reactivated.</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Security Recommendations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Follow these practices to maintain the security of your VARL API integration:
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Store API keys in environment variables or a dedicated secrets manager — never hardcode them in source files.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Use separate keys for development, staging, and production environments with appropriately scoped permissions.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Enable IP allowlisting for production keys to restrict access to known infrastructure.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Rotate keys every 90 days. Set expiration dates on keys that are intended for temporary use.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Monitor the audit log for unexpected key usage patterns — geographic anomalies, unusual request volumes, or access outside business hours.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Revoke compromised keys immediately. VARL invalidates revoked keys within 30 seconds globally.
                </li>
              </ul>
            </section>

            {/* Digital Twins */}
            <section id="digital-twins" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Digital Twins
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Digital twins are the foundational abstraction in the VARL platform. A digital twin is a high-fidelity computational replica of a biological system — a cell, a tissue, an organ, or an entire organism — constructed from real-world data and maintained as a living, queryable object. Twins ingest genomic profiles, proteomic signatures, clinical histories, and environmental parameters to produce a model that behaves as its biological counterpart would under identical conditions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Unlike static snapshots, VARL digital twins are dynamic entities. They evolve over time as new data is fed into them, recalibrate their internal state in response to interventions, and maintain a full audit trail of every mutation. This makes them suitable for longitudinal patient monitoring, iterative drug design, and real-time clinical decision support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every twin is defined by three layers: a <strong className="text-gray-900 dark:text-gray-100">structural layer</strong> that maps the topology of biological components and their connections, a <strong className="text-gray-900 dark:text-gray-100">functional layer</strong> that encodes the kinetic and thermodynamic rules governing interactions, and a <strong className="text-gray-900 dark:text-gray-100">data layer</strong> that binds the model to patient-specific or population-level measurements. Together, these layers produce a system that can be interrogated, perturbed, and observed with the same rigor as a physical experiment.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Create a Digital Twin
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Creating a twin initializes a new biological model from source data. The creation process involves three phases: data validation, graph construction, and calibration. Depending on the resolution and system complexity, initialization can take between 2 seconds and 15 minutes. The twin object is returned immediately with a <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">status</code> field that transitions from <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">initializing</code> to <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">ready</code> when calibration completes.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/twins</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"organism\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;homo_sapiens&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"system\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;immune&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"resolution\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;molecular&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"name\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Patient-0042 Immune Model&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"source_data\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"genomic_profile\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_gp_82kf9n&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"proteomic_data\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_pd_3m7k1x&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"clinical_history\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_ch_4m2j7p&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"microbiome_snapshot\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_mb_9f2n4k&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"time_horizon\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;730d&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"update_frequency\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;real_time&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"fidelity\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;high&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"stochastic_noise\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"auto_calibrate\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
                  <span className="text-white">{"  }"}</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h3 className="mt-10 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Request Parameters
              </h3>
              <div className="mt-4 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Parameter</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Type</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Required</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">organism</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Target organism. Supported: <code className="text-gray-700 dark:text-gray-300">homo_sapiens</code>, <code className="text-gray-700 dark:text-gray-300">mus_musculus</code>, <code className="text-gray-700 dark:text-gray-300">rattus_norvegicus</code>, <code className="text-gray-700 dark:text-gray-300">danio_rerio</code>, <code className="text-gray-700 dark:text-gray-300">caenorhabditis_elegans</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">system</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Biological system to model. Options include <code className="text-gray-700 dark:text-gray-300">immune</code>, <code className="text-gray-700 dark:text-gray-300">cardiovascular</code>, <code className="text-gray-700 dark:text-gray-300">nervous</code>, <code className="text-gray-700 dark:text-gray-300">endocrine</code>, <code className="text-gray-700 dark:text-gray-300">respiratory</code>, <code className="text-gray-700 dark:text-gray-300">digestive</code>, <code className="text-gray-700 dark:text-gray-300">hepatic</code>, <code className="text-gray-700 dark:text-gray-300">renal</code>, <code className="text-gray-700 dark:text-gray-300">musculoskeletal</code>, or <code className="text-gray-700 dark:text-gray-300">whole_body</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">resolution</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Model granularity. <code className="text-gray-700 dark:text-gray-300">molecular</code> (atomic-level interactions), <code className="text-gray-700 dark:text-gray-300">cellular</code> (cell-level dynamics), <code className="text-gray-700 dark:text-gray-300">tissue</code> (tissue-level aggregation), <code className="text-gray-700 dark:text-gray-300">organ</code> (organ-level abstraction). Higher resolution increases compute cost and initialization time.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">name</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Human-readable label for this twin. Maximum 256 characters. Defaults to an auto-generated identifier.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">source_data</td>
                      <td className="py-3 pr-4 font-mono text-xs">object</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Dataset references to seed the twin. Accepts IDs from the Datasets API. If omitted, a generic population-average model is created.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.time_horizon</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Maximum simulation window. Format: <code className="text-gray-700 dark:text-gray-300">Nd</code> for days. Default <code className="text-gray-700 dark:text-gray-300">365d</code>. Maximum <code className="text-gray-700 dark:text-gray-300">3650d</code>.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.fidelity</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Computation precision. <code className="text-gray-700 dark:text-gray-300">low</code> (fast, approximate), <code className="text-gray-700 dark:text-gray-300">medium</code> (balanced), <code className="text-gray-700 dark:text-gray-300">high</code> (maximum accuracy, slower). Default <code className="text-gray-700 dark:text-gray-300">medium</code>.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.stochastic_noise</td>
                      <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Enable biological noise modeling. When true, simulations incorporate stochastic variation that mimics real-world biological variability. Default <code className="text-gray-700 dark:text-gray-300">false</code>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Response
              </h3>
              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">201</span>
                  <span className="text-xs text-gray-400">Created</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "twn_8f3k2n9m",
  "object": "digital_twin",
  "name": "Patient-0042 Immune Model",
  "status": "initializing",
  "organism": "homo_sapiens",
  "system": "immune",
  "resolution": "molecular",
  "node_count": 1247839,
  "edge_count": 4892156,
  "layers": {
    "structural": { "status": "complete", "nodes": 412893 },
    "functional": { "status": "calibrating", "rules": 89247 },
    "data": { "status": "binding", "sources": 4 }
  },
  "config": {
    "time_horizon": "730d",
    "update_frequency": "real_time",
    "fidelity": "high",
    "stochastic_noise": true,
    "auto_calibrate": true
  },
  "metadata": {
    "compute_estimate_ms": 47200,
    "memory_footprint_mb": 2340,
    "version": "2026-02-01"
  },
  "created_at": "2026-02-14T09:32:11Z",
  "ready_at": null,
  "request_id": "req_v4rl_7k2m9n"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Retrieve a Digital Twin
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Fetch the current state of a twin, including its calibration status, node/edge counts, layer health, and the most recent snapshot timestamp. This endpoint is idempotent and safe for polling during initialization.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "twn_8f3k2n9m",
  "object": "digital_twin",
  "name": "Patient-0042 Immune Model",
  "status": "ready",
  "organism": "homo_sapiens",
  "system": "immune",
  "resolution": "molecular",
  "node_count": 1247839,
  "edge_count": 4892156,
  "layers": {
    "structural": { "status": "complete", "nodes": 412893 },
    "functional": { "status": "complete", "rules": 89247 },
    "data": { "status": "complete", "sources": 4 }
  },
  "health": {
    "drift_score": 0.003,
    "last_calibration": "2026-02-14T09:34:42Z",
    "data_freshness": "2026-02-14T09:30:00Z"
  },
  "simulations_run": 0,
  "snapshots": 1,
  "created_at": "2026-02-14T09:32:11Z",
  "ready_at": "2026-02-14T09:34:42Z",
  "updated_at": "2026-02-14T09:34:42Z"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                List Digital Twins
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Returns a paginated list of all twins in your organization. Results are ordered by creation date (newest first). Use cursor-based pagination for consistent results across large collections. Supports filtering by organism, system, status, and creation date range.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/twins?organism=homo_sapiens&amp;status=ready&amp;limit=20</span>
                </div>
              </div>

              <h3 className="mt-10 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Query Parameters
              </h3>
              <div className="mt-4 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Parameter</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Type</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">organism</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 text-xs">Filter by organism type</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">system</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 text-xs">Filter by biological system</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">status</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 text-xs">Filter by status: <code className="text-gray-700 dark:text-gray-300">initializing</code>, <code className="text-gray-700 dark:text-gray-300">ready</code>, <code className="text-gray-700 dark:text-gray-300">degraded</code>, <code className="text-gray-700 dark:text-gray-300">archived</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">limit</td>
                      <td className="py-3 pr-4 font-mono text-xs">integer</td>
                      <td className="py-3 text-xs">Number of results per page. Default 20, maximum 100.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">cursor</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 text-xs">Pagination cursor from a previous response&apos;s <code className="text-gray-700 dark:text-gray-300">next_cursor</code> field</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Update a Digital Twin
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Modify a twin&apos;s configuration, attach new data sources, or rename it. Structural parameters (<code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">organism</code>, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">system</code>, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">resolution</code>) are immutable after creation — to change them, create a new twin. Updating data sources triggers an automatic recalibration cycle.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-yellow-400">PATCH</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"name\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Patient-0042 Immune Model v2&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"source_data\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"metabolomic_panel\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_mt_7n3k9f&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"fidelity\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;high&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"stochastic_noise\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
                  <span className="text-white">{"  }"}</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Delete a Digital Twin
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Permanently deletes a twin and all associated data, including snapshots, simulation history, and cached predictions. This action is irreversible. Active simulations running against this twin will be terminated. For non-destructive removal, use the archive endpoint instead.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-red-400">DELETE</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "twn_8f3k2n9m",
  "object": "digital_twin",
  "deleted": true
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Query Twin State
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Inspect the internal state of a twin at any point in its timeline. State queries allow you to examine specific nodes (genes, proteins, metabolites), edges (interactions, pathways), or subgraphs (functional modules) without running a full simulation. This is useful for debugging, data validation, and building monitoring dashboards.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;/query</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"query_type\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;node_state&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"targets\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;TP53&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;BRCA1&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;EGFR&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"  \"timestamp\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;2026-02-14T09:34:42Z&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"include_neighbors\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"depth\""}</span><span className="text-white">:</span> <span className="text-blue-400">2</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "twin_id": "twn_8f3k2n9m",
  "query_type": "node_state",
  "timestamp": "2026-02-14T09:34:42Z",
  "results": [
    {
      "node": "TP53",
      "type": "tumor_suppressor",
      "expression_level": 0.72,
      "activity_state": "active",
      "phosphorylation": { "S15": true, "S20": false },
      "neighbors": ["MDM2", "ATM", "CDKN1A", "BAX"]
    },
    {
      "node": "BRCA1",
      "type": "dna_repair",
      "expression_level": 0.89,
      "activity_state": "active",
      "complex_membership": ["BRCA1-BARD1", "BASC"],
      "neighbors": ["BARD1", "RAD51", "PALB2", "ATM"]
    },
    {
      "node": "EGFR",
      "type": "receptor_tyrosine_kinase",
      "expression_level": 0.34,
      "activity_state": "basal",
      "ligand_bound": false,
      "neighbors": ["GRB2", "SOS1", "ERBB2", "SHC1"]
    }
  ],
  "subgraph": {
    "total_nodes": 47,
    "total_edges": 128,
    "depth_explored": 2
  }
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Snapshots
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Snapshots capture the complete state of a digital twin at a specific moment. They serve as checkpoints that can be restored, compared, or used as starting points for simulations. VARL automatically creates snapshots after initialization and after each simulation. You can also create manual snapshots at any time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Snapshots are immutable once created. They include the full node/edge state, all configuration parameters, and references to the source data that was active at the time of capture. Comparing two snapshots reveals exactly what changed between them — useful for tracking disease progression or measuring intervention impact.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;/snapshots</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"label\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;pre-treatment-baseline&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"description\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Baseline state before chemotherapy simulation&quot;</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Compare Snapshots
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Diff two snapshots to identify changes in node expression, edge weights, pathway activity, and system-level metrics. The comparison engine uses a hierarchical diffing algorithm that reports changes at the level of individual molecules, functional modules, and whole-system behavior.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/twins/&#123;twin_id&#125;/snapshots/compare</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"snapshot_a\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;snap_2k4m8n&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"snapshot_b\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;snap_7j3p1x&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"granularity\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;pathway&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"significance_threshold\""}</span><span className="text-white">:</span> <span className="text-blue-400">0.05</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Twin Lifecycle
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                A digital twin passes through several states during its lifecycle. Understanding these states is important for building robust integrations that handle asynchronous operations correctly.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-yellow-500">initializing</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">The twin is being constructed. Source data is validated, the biological graph is assembled, and calibration is in progress. Queries and simulations are not available in this state.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-green-500">ready</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Calibration is complete and the twin is fully operational. All endpoints are available. The twin will remain in this state as long as it receives regular data updates and passes health checks.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-blue-500">recalibrating</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">New data has been attached and the twin is updating its internal state. Read queries remain available but may return stale data. New simulations are queued until recalibration completes.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-orange-500">degraded</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">The twin&apos;s drift score exceeds acceptable thresholds, indicating that its model has diverged significantly from observed biological reality. Simulations may return unreliable results. Supply fresh data or trigger a manual recalibration.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-gray-500">archived</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">The twin has been soft-deleted. It is excluded from list results and cannot run simulations, but its data and snapshots are retained for 90 days. Archived twins can be restored to active status.</p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Webhooks
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Register webhooks to receive real-time notifications about twin lifecycle events. Supported events include <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">twin.ready</code>, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">twin.degraded</code>, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">twin.recalibrating</code>, <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">snapshot.created</code>, and <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">twin.deleted</code>. Webhook payloads include the full twin object at the time of the event.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits &amp; Quotas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The following limits apply to digital twin operations. Contact your account manager to request increases for enterprise workloads.
              </p>
              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Resource</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Free Tier</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Pro</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Active twins</td>
                      <td className="py-3 pr-4 font-mono text-xs">5</td>
                      <td className="py-3 pr-4 font-mono text-xs">100</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Max resolution</td>
                      <td className="py-3 pr-4 font-mono text-xs">tissue</td>
                      <td className="py-3 pr-4 font-mono text-xs">cellular</td>
                      <td className="py-3 font-mono text-xs">molecular</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Snapshots per twin</td>
                      <td className="py-3 pr-4 font-mono text-xs">10</td>
                      <td className="py-3 pr-4 font-mono text-xs">500</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Data sources per twin</td>
                      <td className="py-3 pr-4 font-mono text-xs">2</td>
                      <td className="py-3 pr-4 font-mono text-xs">20</td>
                      <td className="py-3 font-mono text-xs">100</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Max time horizon</td>
                      <td className="py-3 pr-4 font-mono text-xs">90d</td>
                      <td className="py-3 pr-4 font-mono text-xs">730d</td>
                      <td className="py-3 font-mono text-xs">3650d</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </main>
      </div>

      <Footer className="bg-white dark:bg-black" />
    </div>
  );
}
