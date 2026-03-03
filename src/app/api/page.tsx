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

            {/* Simulations */}
            <section id="simulations" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Simulations
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Simulations are computational experiments executed against digital twins. They allow you to introduce perturbations — drug candidates, genetic mutations, environmental changes, pathway disruptions — and observe how the biological system responds over time. Every simulation produces a high-resolution time-series of molecular, cellular, and system-level changes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Simulations run asynchronously on VARL&apos;s distributed compute infrastructure. A typical simulation completes in 30 seconds to 20 minutes depending on twin complexity, simulation type, and time horizon. Batch endpoints allow you to submit thousands of scenarios simultaneously — each executing in parallel and returning results independently.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every simulation is fully reproducible. Given the same twin state, parameters, and random seed, the system produces identical outputs. This is critical for regulatory compliance, peer review, and iterative research workflows where results must be independently verifiable.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Run a Simulation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Submit a simulation against an existing digital twin. The twin must be in <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">ready</code> state. The simulation object is returned immediately with status <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">queued</code>, then transitions through <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">running</code> and <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">completed</code>. Use webhooks or polling to track progress.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/simulations</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"type\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;drug_response&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"name\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Pembrolizumab response — Patient 0042&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"intervention\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"compound\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;pembrolizumab&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"target\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;PD-1&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"mechanism\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;checkpoint_inhibition&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"dosage_mg\""}</span><span className="text-white">:</span> <span className="text-blue-400">200</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"frequency\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;every_21d&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"duration\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;180d&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"time_steps\""}</span><span className="text-white">:</span> <span className="text-blue-400">1000</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"observe\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;PD-1&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;CD8_T_cells&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;tumor_burden&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;IFN_gamma&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"    \"snapshot_on_complete\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"seed\""}</span><span className="text-white">:</span> <span className="text-blue-400">42</span>{"\n"}
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
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin_id</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">ID of the digital twin to simulate against. Must be in <code className="text-gray-700 dark:text-gray-300">ready</code> state.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">type</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Simulation type: <code className="text-gray-700 dark:text-gray-300">drug_response</code>, <code className="text-gray-700 dark:text-gray-300">pathway_disruption</code>, <code className="text-gray-700 dark:text-gray-300">genetic_mutation</code>, <code className="text-gray-700 dark:text-gray-300">treatment_protocol</code>, <code className="text-gray-700 dark:text-gray-300">environmental_stress</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">intervention</td>
                      <td className="py-3 pr-4 font-mono text-xs">object</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Perturbation parameters. Structure depends on simulation type. See Simulation Types below.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.time_steps</td>
                      <td className="py-3 pr-4 font-mono text-xs">integer</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Number of discrete time steps in the output series. Default 500. Maximum 10,000. Higher values increase resolution and compute time.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.observe</td>
                      <td className="py-3 pr-4 font-mono text-xs">string[]</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">List of node IDs or system metrics to track. If omitted, all nodes in the perturbation neighborhood are observed.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.snapshot_on_complete</td>
                      <td className="py-3 pr-4 font-mono text-xs">boolean</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Automatically create a twin snapshot when the simulation completes. Default <code className="text-gray-700 dark:text-gray-300">true</code>.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.seed</td>
                      <td className="py-3 pr-4 font-mono text-xs">integer</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Random seed for reproducibility. Same seed + same twin state = identical results. If omitted, a random seed is generated.</td>
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
  "id": "sim_4k7m2n9f",
  "object": "simulation",
  "twin_id": "twn_8f3k2n9m",
  "type": "drug_response",
  "name": "Pembrolizumab response — Patient 0042",
  "status": "queued",
  "progress": 0,
  "intervention": {
    "compound": "pembrolizumab",
    "target": "PD-1",
    "mechanism": "checkpoint_inhibition",
    "dosage_mg": 200,
    "frequency": "every_21d",
    "duration": "180d"
  },
  "config": {
    "time_steps": 1000,
    "observe": ["PD-1", "CD8_T_cells", "tumor_burden", "IFN_gamma"],
    "snapshot_on_complete": true,
    "seed": 42
  },
  "compute": {
    "estimated_duration_ms": 187000,
    "gpu_allocation": "A100x4",
    "priority": "standard"
  },
  "created_at": "2026-02-14T10:15:33Z",
  "started_at": null,
  "completed_at": null,
  "request_id": "req_v4rl_9m2k7n"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Simulation Types
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Each simulation type accepts a different intervention schema optimized for its domain. The type determines which perturbation model is applied, how cascading effects are computed, and what output metrics are generated.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-green-600 dark:text-green-400">drug_response</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Drug Response</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Simulate how a compound interacts with its molecular target and propagates through downstream signaling pathways. Supports single compounds, combination therapies, and dose-response curves. Output includes binding kinetics, pathway activation changes, off-target effects, and predicted efficacy scores with confidence intervals.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400">pathway_disruption</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Pathway Disruption</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Knock out, overexpress, or modulate specific nodes in a signaling pathway and observe cascading effects across the biological network. Useful for identifying critical control points, validating therapeutic hypotheses, and understanding disease mechanisms at a systems level.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-purple-600 dark:text-purple-400">genetic_mutation</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Genetic Mutation</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Introduce point mutations, insertions, deletions, or copy number variations and simulate their phenotypic consequences over time. The engine models protein folding changes, expression level shifts, and downstream pathway rewiring. Critical for variant interpretation and gene therapy design.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400">treatment_protocol</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Treatment Protocol</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Simulate multi-step clinical protocols including sequential drug administration, dosage adjustments, and combination regimens. Models pharmacokinetics, drug-drug interactions, resistance development, and treatment scheduling optimization across the full protocol duration.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 dark:bg-neutral-900">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-orange-600 dark:text-orange-400">environmental_stress</span>
                  </div>
                  <h3 className="mt-2 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Environmental Stress</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Apply environmental perturbations — temperature, pH, oxidative stress, nutrient deprivation, toxin exposure — to observe biological system responses. Primarily used in agricultural and toxicology applications. Models stress response cascades, adaptive mechanisms, and system failure thresholds.
                  </p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Retrieve Simulation Results
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Once a simulation reaches <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">completed</code> status, retrieve its full results including time-series data, summary statistics, and system-level metrics. Results are cached for 90 days after completion.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/simulations/&#123;sim_id&#125;/results</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "simulation_id": "sim_4k7m2n9f",
  "status": "completed",
  "summary": {
    "efficacy_score": 0.847,
    "confidence": 0.93,
    "adverse_events_predicted": 2,
    "resistance_probability": 0.12,
    "optimal_dosage_mg": 185
  },
  "time_series": {
    "time_points": 1000,
    "duration": "180d",
    "channels": {
      "tumor_burden": {
        "initial": 1.0,
        "final": 0.23,
        "min": 0.19,
        "trend": "decreasing",
        "data": [1.0, 0.98, 0.95, "..."]
      },
      "CD8_T_cells": {
        "initial": 0.34,
        "final": 0.89,
        "max": 0.94,
        "trend": "increasing",
        "data": [0.34, 0.36, 0.41, "..."]
      },
      "IFN_gamma": {
        "initial": 0.12,
        "final": 0.67,
        "peak_at_step": 412,
        "trend": "increasing",
        "data": [0.12, 0.14, 0.18, "..."]
      }
    }
  },
  "adverse_events": [
    {
      "type": "hepatotoxicity",
      "probability": 0.08,
      "severity": "grade_1",
      "onset_day": 42
    },
    {
      "type": "dermatitis",
      "probability": 0.15,
      "severity": "grade_2",
      "onset_day": 28
    }
  ],
  "snapshot_id": "snap_9f2k4m",
  "compute_time_ms": 174200,
  "completed_at": "2026-02-14T10:18:27Z"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Batch Simulations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Submit multiple simulations in a single request. Batch operations execute in parallel across VARL&apos;s compute cluster. This is the recommended approach for drug screening, dose-response analysis, and combinatorial testing where hundreds or thousands of scenarios need to be evaluated simultaneously.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/simulations/batch</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"type\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;drug_response&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"variations\""}</span><span className="text-white">:</span> <span className="text-white">[</span>{"\n"}
                  <span className="text-white">{"    {"}</span> <span className="text-yellow-300">&quot;compound&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;pembrolizumab&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;dosage_mg&quot;</span><span className="text-white">:</span> <span className="text-blue-400">100</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-white">{"    {"}</span> <span className="text-yellow-300">&quot;compound&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;pembrolizumab&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;dosage_mg&quot;</span><span className="text-white">:</span> <span className="text-blue-400">200</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-white">{"    {"}</span> <span className="text-yellow-300">&quot;compound&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;pembrolizumab&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;dosage_mg&quot;</span><span className="text-white">:</span> <span className="text-blue-400">400</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-white">{"    {"}</span> <span className="text-yellow-300">&quot;compound&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;nivolumab&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;dosage_mg&quot;</span><span className="text-white">:</span> <span className="text-blue-400">240</span> <span className="text-white">{"}"}</span>{"\n"}
                  <span className="text-white">{"  ]"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;time_steps&quot;</span><span className="text-white">:</span> <span className="text-blue-400">500</span> <span className="text-white">{"}"}</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">201</span>
                  <span className="text-xs text-gray-400">Created</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "batch_7n3k9f2m",
  "object": "simulation_batch",
  "total": 4,
  "status": "running",
  "simulations": [
    { "id": "sim_a1b2c3", "variation_index": 0, "status": "running" },
    { "id": "sim_d4e5f6", "variation_index": 1, "status": "running" },
    { "id": "sim_g7h8i9", "variation_index": 2, "status": "queued" },
    { "id": "sim_j1k2l3", "variation_index": 3, "status": "queued" }
  ],
  "created_at": "2026-02-14T10:20:00Z"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Cancel a Simulation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Terminate a running or queued simulation. Cancelled simulations release their compute allocation immediately. Partial results from cancelled simulations are discarded and cannot be retrieved. Only simulations in <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">queued</code> or <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">running</code> state can be cancelled.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-red-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/simulations/&#123;sim_id&#125;/cancel</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "sim_4k7m2n9f",
  "object": "simulation",
  "status": "cancelled",
  "cancelled_at": "2026-02-14T10:16:45Z"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Simulation Lifecycle
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Simulations transition through a deterministic set of states. Use the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">status</code> field to track progress programmatically, or register webhooks for real-time notifications.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-gray-500">queued</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Simulation is accepted and waiting for compute resources. Queue time depends on cluster load and priority tier. Typical wait: under 5 seconds.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-blue-500">running</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Compute resources are allocated and the simulation is executing. The <code className="text-gray-700 dark:text-gray-300">progress</code> field updates every 5 seconds with a value between 0 and 100.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-green-500">completed</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Simulation finished successfully. Full results are available via the results endpoint. If snapshot_on_complete was enabled, a twin snapshot has been created.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">failed</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Simulation encountered an unrecoverable error. The <code className="text-gray-700 dark:text-gray-300">error</code> field contains a machine-readable error code and human-readable message. Common causes: twin degraded mid-simulation, invalid intervention parameters, compute timeout.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-orange-500">cancelled</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Simulation was manually cancelled via the cancel endpoint. No results are available. Compute resources have been released.</p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits &amp; Quotas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Simulation quotas are measured in compute units (CU). One CU equals one minute of single-GPU execution time. Complex simulations consume multiple CUs based on resolution, time steps, and twin size.
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
                      <td className="py-3 pr-4 text-xs">Compute units / month</td>
                      <td className="py-3 pr-4 font-mono text-xs">100 CU</td>
                      <td className="py-3 pr-4 font-mono text-xs">10,000 CU</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Concurrent simulations</td>
                      <td className="py-3 pr-4 font-mono text-xs">2</td>
                      <td className="py-3 pr-4 font-mono text-xs">50</td>
                      <td className="py-3 font-mono text-xs">500</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Max batch size</td>
                      <td className="py-3 pr-4 font-mono text-xs">10</td>
                      <td className="py-3 pr-4 font-mono text-xs">1,000</td>
                      <td className="py-3 font-mono text-xs">10,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Max time steps</td>
                      <td className="py-3 pr-4 font-mono text-xs">500</td>
                      <td className="py-3 pr-4 font-mono text-xs">5,000</td>
                      <td className="py-3 font-mono text-xs">10,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Result retention</td>
                      <td className="py-3 pr-4 font-mono text-xs">7 days</td>
                      <td className="py-3 pr-4 font-mono text-xs">90 days</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Biomarkers */}
            <section id="biomarkers" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Biomarkers
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The Biomarkers API detects, quantifies, and tracks molecular indicators of disease, treatment response, and biological system health. It operates on multi-omics data — genomic, proteomic, metabolomic, and transcriptomic — to identify statistically significant markers that correlate with clinical outcomes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Unlike traditional biomarker discovery pipelines that take months of manual analysis, the VARL engine screens thousands of candidate markers simultaneously, validates them against population-level reference data, and returns confidence-scored results ranked by clinical relevance. Every detected marker includes mechanistic context — not just what changed, but why it matters.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Biomarker endpoints integrate directly with Digital Twins and Simulations. You can detect markers from real patient data, track them across simulation time-series, or compare marker profiles between twin snapshots to measure intervention impact.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Detect Biomarkers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Submit multi-omics data and receive a ranked list of detected biomarkers with clinical significance scores, reference ranges, and mechanistic annotations. The detection engine applies ensemble machine learning models trained on VARL&apos;s proprietary biological knowledge graph spanning 2.4 million validated molecular interactions.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/biomarkers/detect</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"source\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;dataset&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"dataset_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;ds_pd_3m7k1x&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"omics_layers\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;proteomic&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;metabolomic&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"  \"condition\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;non_small_cell_lung_cancer&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"config\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"significance_threshold\""}</span><span className="text-white">:</span> <span className="text-blue-400">0.01</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"max_results\""}</span><span className="text-white">:</span> <span className="text-blue-400">50</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"include_mechanism\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
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
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">source</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Data source type: <code className="text-gray-700 dark:text-gray-300">dataset</code>, <code className="text-gray-700 dark:text-gray-300">twin</code>, or <code className="text-gray-700 dark:text-gray-300">simulation</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">dataset_id</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Conditional</td>
                      <td className="py-3 text-xs">Required when source is <code className="text-gray-700 dark:text-gray-300">dataset</code>. Reference to an uploaded omics dataset.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin_id</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Conditional</td>
                      <td className="py-3 text-xs">Required when source is <code className="text-gray-700 dark:text-gray-300">twin</code>. Extracts markers from current twin state.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">omics_layers</td>
                      <td className="py-3 pr-4 font-mono text-xs">string[]</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Which omics layers to analyze: <code className="text-gray-700 dark:text-gray-300">genomic</code>, <code className="text-gray-700 dark:text-gray-300">transcriptomic</code>, <code className="text-gray-700 dark:text-gray-300">proteomic</code>, <code className="text-gray-700 dark:text-gray-300">metabolomic</code>, <code className="text-gray-700 dark:text-gray-300">epigenomic</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">condition</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Disease or phenotype context for prioritizing markers. Uses VARL&apos;s disease ontology.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">config.significance_threshold</td>
                      <td className="py-3 pr-4 font-mono text-xs">float</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">P-value cutoff for statistical significance. Default <code className="text-gray-700 dark:text-gray-300">0.05</code>. Recommended <code className="text-gray-700 dark:text-gray-300">0.01</code> for clinical applications.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Response
              </h3>
              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "bm_det_7k2m9n",
  "object": "biomarker_detection",
  "condition": "non_small_cell_lung_cancer",
  "markers_detected": 23,
  "markers": [
    {
      "id": "bm_001",
      "name": "CEA",
      "full_name": "Carcinoembryonic Antigen",
      "type": "protein",
      "omics_layer": "proteomic",
      "value": 12.4,
      "unit": "ng/mL",
      "reference_range": { "low": 0, "high": 3.0 },
      "fold_change": 4.13,
      "p_value": 0.00012,
      "clinical_significance": 0.94,
      "direction": "elevated",
      "mechanism": {
        "pathway": "cell_adhesion_signaling",
        "role": "Overexpressed in adenocarcinoma; promotes metastatic potential via integrin-mediated adhesion",
        "downstream_effects": ["EMT_activation", "invasion_promotion"]
      }
    },
    {
      "id": "bm_002",
      "name": "CYFRA 21-1",
      "full_name": "Cytokeratin 19 Fragment",
      "type": "protein",
      "omics_layer": "proteomic",
      "value": 8.7,
      "unit": "ng/mL",
      "reference_range": { "low": 0, "high": 3.3 },
      "fold_change": 2.64,
      "p_value": 0.00034,
      "clinical_significance": 0.89,
      "direction": "elevated",
      "mechanism": {
        "pathway": "epithelial_integrity",
        "role": "Released during tumor cell apoptosis and necrosis; correlates with tumor volume",
        "downstream_effects": ["cell_death_marker"]
      }
    }
  ],
  "metadata": {
    "models_used": ["varl-biomarker-v4", "ensemble-omics-v2"],
    "compute_time_ms": 34200,
    "reference_cohort_size": 47000
  },
  "request_id": "req_v4rl_3n7k9f"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Track Biomarkers Over Time
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Monitor how biomarker levels evolve across longitudinal data points or simulation time-series. The tracking endpoint aligns measurements across time, normalizes for technical variation, and applies trend detection algorithms to identify clinically meaningful trajectories — early warning signals, treatment response patterns, and relapse indicators.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/biomarkers/track</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"markers\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;CEA&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;CYFRA_21_1&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;PD_L1&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"  \"time_range\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"from\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;2025-08-01&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"to\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;2026-02-14&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"alert_thresholds\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"CEA\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;warn&quot;</span><span className="text-white">:</span> <span className="text-blue-400">5.0</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;critical&quot;</span><span className="text-white">:</span> <span className="text-blue-400">10.0</span> <span className="text-white">{"}"}</span>{"\n"}
                  <span className="text-white">{"  }"}</span>{"\n"}
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
  "tracking_period": { "from": "2025-08-01", "to": "2026-02-14" },
  "markers": {
    "CEA": {
      "data_points": 12,
      "values": [3.1, 3.4, 4.2, 5.1, 6.8, 8.2, 9.7, 11.3, 12.4, 10.1, 7.2, 4.8],
      "trend": "rising_then_declining",
      "peak": { "value": 12.4, "date": "2025-12-15" },
      "current": 4.8,
      "alerts_triggered": 2,
      "status": "improving"
    },
    "CYFRA_21_1": {
      "data_points": 12,
      "values": [2.8, 3.1, 4.5, 5.9, 7.2, 8.7, 8.4, 6.1, 4.3, 3.5, 3.2, 3.0],
      "trend": "normalizing",
      "current": 3.0,
      "status": "within_reference"
    },
    "PD_L1": {
      "data_points": 12,
      "values": [0.45, 0.48, 0.52, 0.61, 0.58, 0.55, 0.72, 0.81, 0.85, 0.88, 0.91, 0.89],
      "trend": "increasing",
      "current": 0.89,
      "status": "elevated"
    }
  }
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Compare Marker Profiles
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Diff biomarker profiles between two snapshots, two patients, or pre/post intervention states. The comparison engine computes statistical significance for each marker shift and identifies coordinated changes across marker groups that indicate pathway-level effects.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/biomarkers/compare</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"profile_a\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;twin_id&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;snapshot&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;snap_2k4m8n&quot;</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"profile_b\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;twin_id&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;snapshot&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;snap_7j3p1x&quot;</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"omics_layers\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;proteomic&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;metabolomic&quot;</span><span className="text-white">]</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Reference Database
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Query VARL&apos;s curated biomarker reference database containing over 14,000 validated markers across 2,800 disease conditions. Each entry includes reference ranges stratified by age, sex, and ethnicity, validated assay methods, and clinical interpretation guidelines sourced from peer-reviewed literature.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/biomarkers/reference?name=CEA&amp;condition=nsclc</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "marker": "CEA",
  "full_name": "Carcinoembryonic Antigen",
  "gene": "CEACAM5",
  "type": "glycoprotein",
  "conditions": [
    {
      "name": "Non-Small Cell Lung Cancer",
      "icd10": "C34",
      "sensitivity": 0.68,
      "specificity": 0.87,
      "reference_ranges": {
        "healthy_nonsmoker": { "low": 0, "high": 3.0, "unit": "ng/mL" },
        "healthy_smoker": { "low": 0, "high": 5.0, "unit": "ng/mL" },
        "stage_I_II": { "typical": "3-10", "unit": "ng/mL" },
        "stage_III_IV": { "typical": "10-50+", "unit": "ng/mL" }
      }
    }
  ],
  "publications": 847,
  "last_updated": "2026-01-15"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits &amp; Quotas
              </h2>
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
                      <td className="py-3 pr-4 text-xs">Detection requests / month</td>
                      <td className="py-3 pr-4 font-mono text-xs">50</td>
                      <td className="py-3 pr-4 font-mono text-xs">5,000</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Omics layers per request</td>
                      <td className="py-3 pr-4 font-mono text-xs">2</td>
                      <td className="py-3 pr-4 font-mono text-xs">5</td>
                      <td className="py-3 font-mono text-xs">5</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Tracking history</td>
                      <td className="py-3 pr-4 font-mono text-xs">90 days</td>
                      <td className="py-3 pr-4 font-mono text-xs">2 years</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Reference DB access</td>
                      <td className="py-3 pr-4 font-mono text-xs">Read only</td>
                      <td className="py-3 pr-4 font-mono text-xs">Full + export</td>
                      <td className="py-3 font-mono text-xs">Full + bulk API</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Predictions */}
            <section id="predictions" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Predictions
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The Predictions API provides AI-powered forecasting built on VARL&apos;s proprietary biological language models. Submit patient profiles, molecular data, or digital twin snapshots and receive predictions about disease trajectories, treatment outcomes, adverse event risks, and optimal intervention strategies — each with confidence intervals, explainability metadata, and supporting evidence.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Predictions are not black-box outputs. Every forecast includes a full causal chain — the molecular features that drove the prediction, the pathways involved, the population-level evidence supporting it, and the conditions under which the prediction may not hold. This level of transparency is essential for clinical decision support, where physicians need to understand <em>why</em> an AI recommends something, not just <em>what</em> it recommends.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Prediction models are continuously retrained on VARL&apos;s growing dataset of validated outcomes. Model versions are tracked, and you can pin your integration to a specific model version for reproducibility or opt into automatic updates for maximum accuracy.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Disease Trajectory
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Predict how a disease will progress over a defined time horizon given the patient&apos;s current molecular state. The model projects biomarker evolution, symptom onset probability, stage transitions, and critical decision points where intervention would have maximum impact.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/predictions/trajectory</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"condition\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;type_2_diabetes&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"horizon\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;5y&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"include_interventions\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
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
  "id": "pred_9f2k4m7n",
  "object": "prediction",
  "type": "disease_trajectory",
  "condition": "type_2_diabetes",
  "horizon": "5y",
  "confidence": 0.91,
  "trajectory": {
    "current_stage": "prediabetes",
    "progression_risk": 0.73,
    "milestones": [
      {
        "event": "hba1c_exceeds_6.5",
        "probability": 0.68,
        "estimated_onset": "8-14 months",
        "confidence": 0.87
      },
      {
        "event": "insulin_resistance_severe",
        "probability": 0.52,
        "estimated_onset": "18-30 months",
        "confidence": 0.79
      },
      {
        "event": "retinopathy_onset",
        "probability": 0.23,
        "estimated_onset": "36-60 months",
        "confidence": 0.71
      }
    ]
  },
  "recommended_interventions": [
    {
      "type": "lifestyle",
      "description": "Caloric restriction + 150min/week moderate exercise",
      "impact": "Reduces progression risk by 58%",
      "confidence": 0.94
    },
    {
      "type": "pharmacological",
      "compound": "metformin",
      "dosage": "500mg BID",
      "impact": "Delays onset by 24-36 months",
      "confidence": 0.88
    }
  ],
  "key_drivers": [
    { "feature": "HOMA-IR score", "weight": 0.31, "direction": "risk_increasing" },
    { "feature": "visceral adiposity", "weight": 0.22, "direction": "risk_increasing" },
    { "feature": "GLP-1 sensitivity", "weight": 0.18, "direction": "protective" }
  ],
  "model": "varl-trajectory-v6.2",
  "request_id": "req_v4rl_4m7k2n"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Treatment Efficacy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Predict how effectively a specific treatment will work for a given patient based on their molecular profile. The model compares the patient&apos;s biology against a reference database of treatment outcomes, identifies pharmacogenomic factors that influence response, and returns a probability distribution of expected outcomes.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/predictions/efficacy</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"treatment\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"compound\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;trastuzumab&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"indication\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;HER2_positive_breast_cancer&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"regimen\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;standard_q3w&quot;</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"compare_alternatives\""}</span><span className="text-white">:</span> <span className="text-blue-400">true</span>{"\n"}
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
  "id": "pred_eff_3k7n9f",
  "object": "prediction",
  "type": "treatment_efficacy",
  "primary": {
    "compound": "trastuzumab",
    "efficacy_score": 0.82,
    "response_probability": 0.78,
    "partial_response": 0.15,
    "no_response": 0.07,
    "confidence": 0.90,
    "pharmacogenomic_factors": [
      { "gene": "HER2", "status": "amplified", "impact": "strong_positive" },
      { "gene": "PIK3CA", "status": "wild_type", "impact": "neutral" },
      { "gene": "FCGR3A", "status": "V158F_heterozygous", "impact": "moderate_positive" }
    ],
    "predicted_adverse_events": [
      { "event": "cardiotoxicity", "probability": 0.04, "severity": "grade_1" },
      { "event": "infusion_reaction", "probability": 0.12, "severity": "grade_1_2" }
    ]
  },
  "alternatives": [
    {
      "compound": "pertuzumab + trastuzumab",
      "efficacy_score": 0.91,
      "response_probability": 0.86,
      "confidence": 0.88,
      "advantage": "+9% efficacy, dual HER2 blockade"
    },
    {
      "compound": "T-DXd (trastuzumab deruxtecan)",
      "efficacy_score": 0.88,
      "response_probability": 0.83,
      "confidence": 0.85,
      "advantage": "Effective in trastuzumab-resistant cases"
    }
  ],
  "model": "varl-efficacy-v5.1",
  "reference_cohort": 12400,
  "request_id": "req_v4rl_7n3k9f"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Adverse Event Risk
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Predict the probability, severity, and timing of adverse events for a specific treatment-patient combination. The model evaluates pharmacogenomic markers, metabolic capacity, organ function baselines, and drug-drug interaction risks to produce a comprehensive safety profile before a single dose is administered.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/predictions/adverse-events</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"twin_id\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;twn_8f3k2n9m&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"compounds\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;doxorubicin&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;cyclophosphamide&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"  \"duration\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;120d&quot;</span>{"\n"}
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
  "id": "pred_ae_8k2n4m",
  "object": "prediction",
  "type": "adverse_events",
  "risk_summary": {
    "overall_risk_score": 0.34,
    "risk_level": "moderate"
  },
  "events": [
    {
      "event": "neutropenia",
      "probability": 0.72,
      "severity": "grade_3_4",
      "onset_window": "7-14 days post-cycle",
      "mechanism": "Myelosuppression via DNA intercalation",
      "mitigation": "G-CSF prophylaxis recommended"
    },
    {
      "event": "cardiotoxicity",
      "probability": 0.18,
      "severity": "grade_2",
      "onset_window": "cumulative, after cycle 4",
      "mechanism": "Doxorubicin-induced ROS damage to cardiomyocytes",
      "mitigation": "LVEF monitoring every 2 cycles, dexrazoxane if LVEF <50%",
      "pharmacogenomic_risk": {
        "gene": "RARG",
        "variant": "rs2229774",
        "patient_status": "carrier",
        "risk_increase": "3.2x"
      }
    },
    {
      "event": "nausea_vomiting",
      "probability": 0.85,
      "severity": "grade_2_3",
      "onset_window": "0-72 hours post-infusion",
      "mechanism": "5-HT3 receptor activation",
      "mitigation": "Ondansetron + dexamethasone pre-medication"
    }
  ],
  "drug_interactions": [
    {
      "compounds": ["doxorubicin", "cyclophosphamide"],
      "interaction": "synergistic_toxicity",
      "affected_system": "hematopoietic",
      "severity": "requires_monitoring"
    }
  ],
  "model": "varl-safety-v4.3",
  "request_id": "req_v4rl_2m7k9n"
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Prediction Models
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                List available prediction models, their versions, training data characteristics, and performance metrics. Use this endpoint to select the appropriate model for your use case or to audit which model version produced a specific prediction.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/predictions/models</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "models": [
    {
      "id": "varl-trajectory-v6.2",
      "type": "disease_trajectory",
      "conditions_supported": 847,
      "training_cohort": 2400000,
      "auroc": 0.94,
      "last_retrained": "2026-02-01",
      "status": "current"
    },
    {
      "id": "varl-efficacy-v5.1",
      "type": "treatment_efficacy",
      "compounds_supported": 3200,
      "training_cohort": 1800000,
      "auroc": 0.91,
      "last_retrained": "2026-01-15",
      "status": "current"
    },
    {
      "id": "varl-safety-v4.3",
      "type": "adverse_events",
      "compounds_supported": 4100,
      "training_cohort": 3100000,
      "auroc": 0.89,
      "last_retrained": "2026-02-01",
      "status": "current"
    }
  ]
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits &amp; Quotas
              </h2>
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
                      <td className="py-3 pr-4 text-xs">Predictions / month</td>
                      <td className="py-3 pr-4 font-mono text-xs">100</td>
                      <td className="py-3 pr-4 font-mono text-xs">25,000</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Max horizon (trajectory)</td>
                      <td className="py-3 pr-4 font-mono text-xs">1 year</td>
                      <td className="py-3 pr-4 font-mono text-xs">10 years</td>
                      <td className="py-3 font-mono text-xs">Lifetime</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Alternative comparisons</td>
                      <td className="py-3 pr-4 font-mono text-xs">3</td>
                      <td className="py-3 pr-4 font-mono text-xs">20</td>
                      <td className="py-3 font-mono text-xs">50</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Model version pinning</td>
                      <td className="py-3 pr-4 font-mono text-xs">No</td>
                      <td className="py-3 pr-4 font-mono text-xs">Yes</td>
                      <td className="py-3 font-mono text-xs">Yes + custom models</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Datasets */}
            <section id="datasets" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Datasets
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The Datasets API manages biological data throughout its lifecycle — upload, validation, versioning, querying, and secure sharing. Datasets are the raw material that feeds digital twins, trains prediction models, and validates simulation outputs. Every dataset is immutable once finalized, versioned for reproducibility, and encrypted at rest and in transit.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                VARL maintains a reference library of over 2.4 million annotated molecular interactions, curated from peer-reviewed literature, clinical trial registries, and validated experimental data. This library is accessible to all API users and serves as the foundation for cross-referencing proprietary uploads against the global body of biological knowledge.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Data sovereignty is absolute. Your datasets are isolated to your organization&apos;s tenant. They are never used to train shared models, never aggregated with other organizations&apos; data, and never accessible to anyone outside your permission structure. You retain the right to delete your data at any time with immediate, irrevocable effect.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Upload a Dataset
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Upload biological data for use across the platform. The upload process validates data integrity, infers schema where possible, runs quality checks, and indexes the dataset for fast querying. Large datasets support multipart uploads with resumable transfer for reliability over unstable connections.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/datasets</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"name\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Patient-0042 Proteomic Panel&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"type\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;proteomic&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"format\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;csv&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"organism\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;homo_sapiens&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"sample_count\""}</span><span className="text-white">:</span> <span className="text-blue-400">1</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"description\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Mass spectrometry proteomic panel, 4,200 proteins quantified&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"tags\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;oncology&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;nsclc&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;baseline&quot;</span><span className="text-white">]</span>{"\n"}
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
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">name</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Human-readable name. Maximum 256 characters.</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">type</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Data type: <code className="text-gray-700 dark:text-gray-300">genomic</code>, <code className="text-gray-700 dark:text-gray-300">transcriptomic</code>, <code className="text-gray-700 dark:text-gray-300">proteomic</code>, <code className="text-gray-700 dark:text-gray-300">metabolomic</code>, <code className="text-gray-700 dark:text-gray-300">epigenomic</code>, <code className="text-gray-700 dark:text-gray-300">clinical</code>, <code className="text-gray-700 dark:text-gray-300">imaging</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">format</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">File format: <code className="text-gray-700 dark:text-gray-300">csv</code>, <code className="text-gray-700 dark:text-gray-300">tsv</code>, <code className="text-gray-700 dark:text-gray-300">parquet</code>, <code className="text-gray-700 dark:text-gray-300">fastq</code>, <code className="text-gray-700 dark:text-gray-300">vcf</code>, <code className="text-gray-700 dark:text-gray-300">bam</code>, <code className="text-gray-700 dark:text-gray-300">h5ad</code>, <code className="text-gray-700 dark:text-gray-300">json</code></td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">organism</td>
                      <td className="py-3 pr-4 font-mono text-xs">string</td>
                      <td className="py-3 pr-4 text-xs">Yes</td>
                      <td className="py-3 text-xs">Source organism. Same values as Digital Twins organism parameter.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">tags</td>
                      <td className="py-3 pr-4 font-mono text-xs">string[]</td>
                      <td className="py-3 pr-4 text-xs">No</td>
                      <td className="py-3 text-xs">Freeform labels for organization and filtering. Maximum 20 tags per dataset.</td>
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
  "id": "ds_pd_3m7k1x",
  "object": "dataset",
  "name": "Patient-0042 Proteomic Panel",
  "type": "proteomic",
  "format": "csv",
  "status": "validating",
  "organism": "homo_sapiens",
  "sample_count": 1,
  "upload": {
    "method": "direct",
    "upload_url": "https://upload.varl.bio/ds_pd_3m7k1x?token=...",
    "expires_at": "2026-02-14T11:15:33Z",
    "max_size_mb": 5000
  },
  "version": 1,
  "created_at": "2026-02-14T10:15:33Z",
  "request_id": "req_v4rl_8n3k7m"
}`}
                </pre>
              </div>

              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                After receiving the response, upload the actual data file to the provided <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">upload_url</code> using a PUT request with the file as the body. The URL is pre-signed and expires after 1 hour.
              </p>

              <div className="mt-4 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">File Upload</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-green-400">curl</span> <span className="text-white">-X PUT</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}-H</span> <span className="text-green-300">&quot;Content-Type: text/csv&quot;</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}--data-binary @patient_0042_proteomics.csv</span> <span className="text-white">\</span>{"\n"}
                  <span className="text-white">{"  "}</span><span className="text-green-300">&quot;https://upload.varl.bio/ds_pd_3m7k1x?token=...&quot;</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Query a Dataset
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Run structured queries against uploaded datasets without downloading the full file. The query engine supports filtering, aggregation, statistical summaries, and cross-dataset joins. Results are streamed for large output sets.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/datasets/&#123;dataset_id&#125;/query</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"select\""}</span><span className="text-white">:</span> <span className="text-white">[</span><span className="text-green-300">&quot;protein_id&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;abundance&quot;</span><span className="text-white">,</span> <span className="text-green-300">&quot;p_value&quot;</span><span className="text-white">],</span>{"\n"}
                  <span className="text-yellow-300">{"  \"filter\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"    \"abundance\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;gt&quot;</span><span className="text-white">:</span> <span className="text-blue-400">2.0</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"    \"p_value\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;lt&quot;</span><span className="text-white">:</span> <span className="text-blue-400">0.01</span> <span className="text-white">{"}"}</span>{"\n"}
                  <span className="text-white">{"  }"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"sort\""}</span><span className="text-white">:</span> <span className="text-white">{"{"}</span> <span className="text-yellow-300">&quot;field&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;abundance&quot;</span><span className="text-white">,</span> <span className="text-yellow-300">&quot;order&quot;</span><span className="text-white">:</span> <span className="text-green-300">&quot;desc&quot;</span> <span className="text-white">{"}"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"limit\""}</span><span className="text-white">:</span> <span className="text-blue-400">100</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Reference Library
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Access VARL&apos;s curated reference library of molecular interactions, pathway annotations, and disease-gene associations. The library is continuously updated from peer-reviewed sources and validated by our scientific team.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/datasets/reference/interactions?gene=TP53&amp;type=protein_protein&amp;limit=20</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "gene": "TP53",
  "total_interactions": 1247,
  "results": [
    {
      "partner": "MDM2",
      "type": "protein_protein",
      "interaction": "ubiquitin_ligase_substrate",
      "confidence": 0.99,
      "sources": 342,
      "functional_impact": "Negative regulation of TP53 stability"
    },
    {
      "partner": "ATM",
      "type": "protein_protein",
      "interaction": "kinase_substrate",
      "confidence": 0.98,
      "sources": 287,
      "functional_impact": "Phosphorylation at S15 upon DNA damage"
    },
    {
      "partner": "CDKN1A",
      "type": "transcription_factor_target",
      "interaction": "transcriptional_activation",
      "confidence": 0.97,
      "sources": 412,
      "functional_impact": "Cell cycle arrest via p21 induction"
    }
  ]
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Versioning
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Datasets are versioned automatically. Each time you upload new data to an existing dataset, a new version is created. Previous versions are retained and remain accessible. Simulations and predictions always reference a specific version, ensuring full reproducibility even as datasets evolve.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400">GET</span>
                  <span className="font-mono text-xs text-gray-400">/datasets/&#123;dataset_id&#125;/versions</span>
                </div>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">200</span>
                  <span className="text-xs text-gray-400">OK</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "dataset_id": "ds_pd_3m7k1x",
  "versions": [
    { "version": 3, "created_at": "2026-02-10", "rows": 4200, "size_mb": 12.4, "status": "active" },
    { "version": 2, "created_at": "2026-01-15", "rows": 3800, "size_mb": 11.1, "status": "active" },
    { "version": 1, "created_at": "2025-12-01", "rows": 3200, "size_mb": 9.7, "status": "active" }
  ]
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Delete a Dataset
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Permanently delete a dataset and all its versions. This action is irreversible. Digital twins and simulations that reference this dataset will retain their computed states but will not be able to recalibrate or re-run. A 72-hour grace period allows you to cancel the deletion before data is physically purged.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-red-400">DELETE</span>
                  <span className="font-mono text-xs text-gray-400">/datasets/&#123;dataset_id&#125;</span>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Supported Formats
              </h2>
              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Format</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Extension</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Max Size</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">CSV / TSV</td>
                      <td className="py-3 pr-4 font-mono text-xs">.csv, .tsv</td>
                      <td className="py-3 pr-4 font-mono text-xs">5 GB</td>
                      <td className="py-3 text-xs">Tabular data, expression matrices, clinical records</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">Parquet</td>
                      <td className="py-3 pr-4 font-mono text-xs">.parquet</td>
                      <td className="py-3 pr-4 font-mono text-xs">50 GB</td>
                      <td className="py-3 text-xs">Large-scale columnar data, population cohorts</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">FASTQ</td>
                      <td className="py-3 pr-4 font-mono text-xs">.fastq, .fq.gz</td>
                      <td className="py-3 pr-4 font-mono text-xs">100 GB</td>
                      <td className="py-3 text-xs">Raw sequencing reads</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">VCF</td>
                      <td className="py-3 pr-4 font-mono text-xs">.vcf, .vcf.gz</td>
                      <td className="py-3 pr-4 font-mono text-xs">10 GB</td>
                      <td className="py-3 text-xs">Variant call files, genomic mutations</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">BAM</td>
                      <td className="py-3 pr-4 font-mono text-xs">.bam</td>
                      <td className="py-3 pr-4 font-mono text-xs">200 GB</td>
                      <td className="py-3 text-xs">Aligned sequencing reads</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">H5AD</td>
                      <td className="py-3 pr-4 font-mono text-xs">.h5ad</td>
                      <td className="py-3 pr-4 font-mono text-xs">50 GB</td>
                      <td className="py-3 text-xs">Single-cell data (AnnData format)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">JSON</td>
                      <td className="py-3 pr-4 font-mono text-xs">.json, .jsonl</td>
                      <td className="py-3 pr-4 font-mono text-xs">5 GB</td>
                      <td className="py-3 text-xs">Structured biological records, pathway definitions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits &amp; Quotas
              </h2>
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
                      <td className="py-3 pr-4 text-xs">Total storage</td>
                      <td className="py-3 pr-4 font-mono text-xs">10 GB</td>
                      <td className="py-3 pr-4 font-mono text-xs">1 TB</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Datasets</td>
                      <td className="py-3 pr-4 font-mono text-xs">20</td>
                      <td className="py-3 pr-4 font-mono text-xs">500</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Versions per dataset</td>
                      <td className="py-3 pr-4 font-mono text-xs">5</td>
                      <td className="py-3 pr-4 font-mono text-xs">50</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Query requests / day</td>
                      <td className="py-3 pr-4 font-mono text-xs">100</td>
                      <td className="py-3 pr-4 font-mono text-xs">10,000</td>
                      <td className="py-3 font-mono text-xs">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Webhooks */}
            <section id="webhooks" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Webhooks
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Webhooks deliver real-time notifications to your application when events occur in the VARL platform. Instead of polling endpoints for status changes, register a webhook URL and receive HTTP POST requests the moment a twin completes initialization, a simulation finishes, a biomarker alert triggers, or a dataset finishes validation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                All webhook payloads are signed with HMAC-SHA256 using your webhook secret, ensuring that your application can verify the authenticity of every incoming request. Failed deliveries are retried with exponential backoff for up to 72 hours. Every delivery attempt is logged and visible in your dashboard.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Register a Webhook
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Create a webhook endpoint that listens for specific event types. You can register multiple webhooks, each filtering for different events or delivering to different URLs. VARL sends a verification request to the URL upon creation — your server must respond with a 200 status code to confirm the endpoint is active.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-400">POST</span>
                  <span className="font-mono text-xs text-gray-400">/webhooks</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-white">{"{"}</span>{"\n"}
                  <span className="text-yellow-300">{"  \"url\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;https://api.yourapp.com/varl/webhooks&quot;</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"events\""}</span><span className="text-white">:</span> <span className="text-white">[</span>{"\n"}
                  <span className="text-green-300">{"    \"twin.ready\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"twin.degraded\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"simulation.completed\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"simulation.failed\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"biomarker.alert\""}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-green-300">{"    \"dataset.validated\""}</span>{"\n"}
                  <span className="text-white">{"  ]"}</span><span className="text-white">,</span>{"\n"}
                  <span className="text-yellow-300">{"  \"description\""}</span><span className="text-white">:</span> <span className="text-green-300">&quot;Production event handler&quot;</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-green-600 dark:text-green-400">201</span>
                  <span className="text-xs text-gray-400">Created</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "wh_4k7m2n",
  "object": "webhook",
  "url": "https://api.yourapp.com/varl/webhooks",
  "events": [
    "twin.ready", "twin.degraded",
    "simulation.completed", "simulation.failed",
    "biomarker.alert", "dataset.validated"
  ],
  "secret": "whsec_v4rl_8f3k2n9m7j3p1x...",
  "status": "active",
  "created_at": "2026-02-14T10:30:00Z"
}`}
                </pre>
              </div>

              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Store the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">secret</code> securely — it is only returned once at creation time. Use it to verify webhook signatures on incoming requests.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Event Types
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Subscribe to any combination of events. Each event type delivers a payload containing the full object state at the time the event occurred.
              </p>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Event</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin.ready</td>
                      <td className="py-3 text-xs">Digital twin initialization and calibration complete</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin.degraded</td>
                      <td className="py-3 text-xs">Twin drift score exceeds acceptable threshold</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin.recalibrated</td>
                      <td className="py-3 text-xs">Twin recalibration finished after new data integration</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">simulation.completed</td>
                      <td className="py-3 text-xs">Simulation finished successfully, results available</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">simulation.failed</td>
                      <td className="py-3 text-xs">Simulation encountered an error</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">batch.completed</td>
                      <td className="py-3 text-xs">All simulations in a batch have finished</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">biomarker.alert</td>
                      <td className="py-3 text-xs">Tracked biomarker crossed a defined threshold</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">dataset.validated</td>
                      <td className="py-3 text-xs">Uploaded dataset passed validation and is ready for use</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">dataset.failed</td>
                      <td className="py-3 text-xs">Dataset validation failed due to format or integrity errors</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Payload Format
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every webhook delivery is an HTTP POST request with a JSON body. The payload includes the event type, a timestamp, and the full object that triggered the event.
              </p>

              <div className="mt-6 bg-gray-50 p-6 dark:bg-neutral-900">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Example: simulation.completed</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "id": "evt_9f2k4m7n",
  "object": "event",
  "type": "simulation.completed",
  "created_at": "2026-02-14T10:18:27Z",
  "data": {
    "id": "sim_4k7m2n9f",
    "object": "simulation",
    "twin_id": "twn_8f3k2n9m",
    "type": "drug_response",
    "status": "completed",
    "summary": {
      "efficacy_score": 0.847,
      "confidence": 0.93
    },
    "compute_time_ms": 174200,
    "completed_at": "2026-02-14T10:18:27Z"
  }
}`}
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Signature Verification
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every webhook request includes a <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">VARL-Signature</code> header containing an HMAC-SHA256 hash of the request body, signed with your webhook secret. Always verify this signature before processing the payload.
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Header</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-yellow-300">VARL-Signature</span><span className="text-white">:</span> <span className="text-green-300">sha256=a1b2c3d4e5f6...</span>
                </pre>
              </div>

              <div className="mt-4 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Python Verification</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-blue-400">import</span> <span className="text-white">hmac, hashlib</span>{"\n\n"}
                  <span className="text-blue-400">def</span> <span className="text-white">verify_signature</span><span className="text-gray-400">(</span><span className="text-white">payload</span><span className="text-gray-400">,</span> <span className="text-white">signature</span><span className="text-gray-400">,</span> <span className="text-white">secret</span><span className="text-gray-400">):</span>{"\n"}
                  <span className="text-white">{"    "}expected</span> <span className="text-gray-400">=</span> <span className="text-white">hmac.new</span><span className="text-gray-400">(</span>{"\n"}
                  <span className="text-white">{"        "}secret.encode</span><span className="text-gray-400">(),</span> <span className="text-white">payload</span><span className="text-gray-400">,</span> <span className="text-white">hashlib.sha256</span>{"\n"}
                  <span className="text-gray-400">{"    "}).hexdigest</span><span className="text-gray-400">()</span>{"\n"}
                  <span className="text-blue-400">{"    "}return</span> <span className="text-white">hmac.compare_digest</span><span className="text-gray-400">(</span><span className="text-white">f</span><span className="text-green-300">&quot;sha256=&#123;expected&#125;&quot;</span><span className="text-gray-400">,</span> <span className="text-white">signature</span><span className="text-gray-400">)</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Retry Policy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                If your endpoint returns a non-2xx status code or fails to respond within 30 seconds, VARL retries the delivery with exponential backoff. The retry schedule is: 1 minute, 5 minutes, 30 minutes, 2 hours, 12 hours, 24 hours, 48 hours, 72 hours. After all retries are exhausted, the event is marked as failed and visible in your dashboard. You can manually replay failed events from the dashboard or via the API.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-green-500">delivered</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Endpoint returned 2xx. Delivery is confirmed and logged.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-yellow-500">retrying</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Delivery failed. Next retry scheduled according to backoff policy.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">failed</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">All retry attempts exhausted. Event can be replayed manually.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-orange-500">disabled</span>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">Webhook auto-disabled after 50 consecutive failures. Re-enable from dashboard.</p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Manage Webhooks
              </h2>

              <div className="mt-6 flex flex-col gap-4">
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-blue-400">GET</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">List all registered webhooks</p>
                </div>
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-blue-400">GET</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks/&#123;webhook_id&#125;</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Retrieve a specific webhook and its delivery history</p>
                </div>
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-yellow-400">PATCH</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks/&#123;webhook_id&#125;</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Update URL, events, or description. Secret cannot be changed — rotate by deleting and recreating.</p>
                </div>
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-red-400">DELETE</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks/&#123;webhook_id&#125;</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Remove a webhook. Pending deliveries are cancelled immediately.</p>
                </div>
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-green-400">POST</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks/&#123;webhook_id&#125;/test</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Send a test event to verify your endpoint is working correctly</p>
                </div>
                <div className="bg-gray-900 p-5 dark:bg-neutral-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-green-400">POST</span>
                    <span className="font-mono text-xs text-gray-400">/webhooks/&#123;webhook_id&#125;/replay/&#123;event_id&#125;</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Replay a failed event delivery</p>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Limits
              </h2>
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
                      <td className="py-3 pr-4 text-xs">Webhook endpoints</td>
                      <td className="py-3 pr-4 font-mono text-xs">3</td>
                      <td className="py-3 pr-4 font-mono text-xs">25</td>
                      <td className="py-3 font-mono text-xs">100</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Events per endpoint</td>
                      <td className="py-3 pr-4 font-mono text-xs">5</td>
                      <td className="py-3 pr-4 font-mono text-xs">All</td>
                      <td className="py-3 font-mono text-xs">All</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Delivery history retention</td>
                      <td className="py-3 pr-4 font-mono text-xs">7 days</td>
                      <td className="py-3 pr-4 font-mono text-xs">90 days</td>
                      <td className="py-3 font-mono text-xs">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Response timeout</td>
                      <td className="py-3 pr-4 font-mono text-xs">10s</td>
                      <td className="py-3 pr-4 font-mono text-xs">30s</td>
                      <td className="py-3 font-mono text-xs">60s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Rate Limits */}
            <section id="rate-limits" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Rate Limits
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Rate limits protect the stability of the VARL platform and ensure fair resource allocation across all users. Limits are applied per API key and vary by endpoint category and pricing tier. When a rate limit is exceeded, the API returns a <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">429 Too Many Requests</code> response with headers indicating when you can retry.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Default Limits
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Limits are measured in requests per minute (RPM) and requests per day (RPD). Compute-intensive endpoints (simulations, predictions) have separate limits measured in compute units.
              </p>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Endpoint Category</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Free Tier</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>Pro</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Read operations (GET)</td>
                      <td className="py-3 pr-4 font-mono text-xs">60 RPM</td>
                      <td className="py-3 pr-4 font-mono text-xs">600 RPM</td>
                      <td className="py-3 font-mono text-xs">6,000 RPM</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Write operations (POST/PATCH/DELETE)</td>
                      <td className="py-3 pr-4 font-mono text-xs">20 RPM</td>
                      <td className="py-3 pr-4 font-mono text-xs">200 RPM</td>
                      <td className="py-3 font-mono text-xs">2,000 RPM</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Simulations</td>
                      <td className="py-3 pr-4 font-mono text-xs">5 RPM</td>
                      <td className="py-3 pr-4 font-mono text-xs">50 RPM</td>
                      <td className="py-3 font-mono text-xs">500 RPM</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Predictions</td>
                      <td className="py-3 pr-4 font-mono text-xs">10 RPM</td>
                      <td className="py-3 pr-4 font-mono text-xs">100 RPM</td>
                      <td className="py-3 font-mono text-xs">1,000 RPM</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 text-xs">Dataset uploads</td>
                      <td className="py-3 pr-4 font-mono text-xs">5 RPD</td>
                      <td className="py-3 pr-4 font-mono text-xs">100 RPD</td>
                      <td className="py-3 font-mono text-xs">1,000 RPD</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-xs">Batch operations</td>
                      <td className="py-3 pr-4 font-mono text-xs">2 RPM</td>
                      <td className="py-3 pr-4 font-mono text-xs">20 RPM</td>
                      <td className="py-3 font-mono text-xs">200 RPM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Rate Limit Headers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Every API response includes headers that communicate your current rate limit status. Use these headers to implement client-side throttling and avoid hitting limits.
              </p>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Header</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">X-RateLimit-Limit</td>
                      <td className="py-3 text-xs">Maximum requests allowed in the current window</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">X-RateLimit-Remaining</td>
                      <td className="py-3 text-xs">Requests remaining in the current window</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">X-RateLimit-Reset</td>
                      <td className="py-3 text-xs">Unix timestamp when the current window resets</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">Retry-After</td>
                      <td className="py-3 text-xs">Seconds to wait before retrying (only present on 429 responses)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Response Headers Example</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-yellow-300">X-RateLimit-Limit</span><span className="text-white">:</span> <span className="text-green-300">600</span>{"\n"}
                  <span className="text-yellow-300">X-RateLimit-Remaining</span><span className="text-white">:</span> <span className="text-green-300">547</span>{"\n"}
                  <span className="text-yellow-300">X-RateLimit-Reset</span><span className="text-white">:</span> <span className="text-green-300">1708000000</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Handling 429 Responses
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                When you exceed a rate limit, implement exponential backoff with jitter. The official SDKs handle this automatically. If you are making direct HTTP requests, follow this pattern:
              </p>

              <div className="mt-6 bg-gray-900 p-6 dark:bg-neutral-950">
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-400">Python — Retry with Backoff</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <span className="text-blue-400">import</span> <span className="text-white">time, random</span>{"\n\n"}
                  <span className="text-blue-400">def</span> <span className="text-white">request_with_retry</span><span className="text-gray-400">(</span><span className="text-white">fn</span><span className="text-gray-400">,</span> <span className="text-white">max_retries</span><span className="text-gray-400">=</span><span className="text-blue-400">5</span><span className="text-gray-400">):</span>{"\n"}
                  <span className="text-white">{"    "}</span><span className="text-blue-400">for</span> <span className="text-white">attempt</span> <span className="text-blue-400">in</span> <span className="text-white">range</span><span className="text-gray-400">(</span><span className="text-white">max_retries</span><span className="text-gray-400">):</span>{"\n"}
                  <span className="text-white">{"        "}response</span> <span className="text-gray-400">=</span> <span className="text-white">fn</span><span className="text-gray-400">()</span>{"\n"}
                  <span className="text-white">{"        "}</span><span className="text-blue-400">if</span> <span className="text-white">response.status_code</span> <span className="text-gray-400">!=</span> <span className="text-blue-400">429</span><span className="text-gray-400">:</span>{"\n"}
                  <span className="text-white">{"            "}</span><span className="text-blue-400">return</span> <span className="text-white">response</span>{"\n"}
                  <span className="text-white">{"        "}wait</span> <span className="text-gray-400">=</span> <span className="text-white">min</span><span className="text-gray-400">(</span><span className="text-blue-400">2</span> <span className="text-gray-400">**</span> <span className="text-white">attempt</span> <span className="text-gray-400">+</span> <span className="text-white">random.uniform</span><span className="text-gray-400">(</span><span className="text-blue-400">0</span><span className="text-gray-400">,</span> <span className="text-blue-400">1</span><span className="text-gray-400">),</span> <span className="text-blue-400">60</span><span className="text-gray-400">)</span>{"\n"}
                  <span className="text-white">{"        "}time.sleep</span><span className="text-gray-400">(</span><span className="text-white">wait</span><span className="text-gray-400">)</span>{"\n"}
                  <span className="text-white">{"    "}</span><span className="text-blue-400">raise</span> <span className="text-white">Exception</span><span className="text-gray-400">(</span><span className="text-green-300">&quot;Rate limit exceeded after max retries&quot;</span><span className="text-gray-400">)</span>
                </pre>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Burst Allowance
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                Pro and Enterprise tiers include burst allowance — a short-term capacity buffer that allows brief spikes above your sustained rate limit. Bursts are permitted for up to 10 seconds and allow up to 3x your per-minute limit. This accommodates legitimate use patterns like page loads that trigger multiple parallel requests.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Requesting Higher Limits
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                If your workload consistently approaches rate limits, contact your account manager or submit a limit increase request through the dashboard. Include your current usage patterns, expected peak load, and the specific endpoints that need higher limits. Enterprise customers can negotiate custom rate limits as part of their service agreement.
              </p>
            </section>

            {/* Errors */}
            <section id="errors" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Errors
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                The VARL API uses conventional HTTP status codes to indicate success or failure. Every error response includes a structured JSON body with a machine-readable error code, a human-readable message, and where applicable, a pointer to the specific field or parameter that caused the error.
              </p>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Error Response Format
              </h2>

              <div className="mt-6 bg-gray-50 p-6 dark:bg-neutral-900">
                <pre className="font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300">
{`{
  "error": {
    "code": "invalid_parameter",
    "message": "The 'resolution' field must be one of: molecular, cellular, tissue, organ.",
    "param": "resolution",
    "type": "validation_error"
  },
  "request_id": "req_v4rl_7k2m9n"
}`}
                </pre>
              </div>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Field</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">error.code</td>
                      <td className="py-3 text-xs">Machine-readable error identifier for programmatic handling</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">error.message</td>
                      <td className="py-3 text-xs">Human-readable explanation of what went wrong</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">error.param</td>
                      <td className="py-3 text-xs">The specific parameter that caused the error (if applicable)</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">error.type</td>
                      <td className="py-3 text-xs">Error category: <code className="text-gray-700 dark:text-gray-300">validation_error</code>, <code className="text-gray-700 dark:text-gray-300">authentication_error</code>, <code className="text-gray-700 dark:text-gray-300">authorization_error</code>, <code className="text-gray-700 dark:text-gray-300">not_found</code>, <code className="text-gray-700 dark:text-gray-300">rate_limit</code>, <code className="text-gray-700 dark:text-gray-300">server_error</code></td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">request_id</td>
                      <td className="py-3 text-xs">Unique identifier for this request — include in support tickets for debugging</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                HTTP Status Codes
              </h2>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-green-500">200</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>OK</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">Request succeeded. Response body contains the requested resource.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-green-500">201</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Created</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">Resource successfully created. Response body contains the new resource.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">400</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Bad Request</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The request body is malformed, missing required fields, or contains invalid parameter values. Check the <code className="text-gray-700 dark:text-gray-300">error.param</code> field for the specific issue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">401</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Unauthorized</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">No API key provided, or the key is invalid, expired, or revoked. See the Authentication section for details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">403</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Forbidden</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The API key is valid but lacks the required permission scope, or the request originates from a blocked IP address.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">404</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Not Found</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The requested resource does not exist. Verify the ID is correct and the resource has not been deleted.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">409</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Conflict</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The request conflicts with the current state of the resource. Common causes: attempting to run a simulation on a twin that is still initializing, or uploading to a dataset that is currently being validated.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">422</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Unprocessable Entity</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The request is syntactically valid but semantically incorrect. Example: requesting molecular resolution for an organism that only supports cellular resolution, or specifying contradictory simulation parameters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-yellow-500">429</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Too Many Requests</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">Rate limit exceeded. Check the <code className="text-gray-700 dark:text-gray-300">Retry-After</code> header and implement exponential backoff. See the Rate Limits section.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">500</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Internal Server Error</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">An unexpected error occurred on our servers. These are automatically reported to our engineering team. If the error persists, contact support with the <code className="text-gray-700 dark:text-gray-300">request_id</code>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-5 dark:bg-neutral-900">
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-red-500">503</span>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Service Unavailable</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">The platform is temporarily unavailable due to maintenance or capacity constraints. Retry after the duration specified in the <code className="text-gray-700 dark:text-gray-300">Retry-After</code> header. Check <span className="font-mono text-gray-700 dark:text-gray-300">status.varl.bio</span> for incident updates.</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Common Error Codes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                These are the most frequently encountered error codes across all endpoints. Each code maps to a specific, actionable issue.
              </p>

              <div className="mt-6 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-neutral-800">
                      <th className="pb-3 pr-4 font-mono text-xs text-gray-400" style={{ fontWeight: 500 }}>Code</th>
                      <th className="pb-3 pr-4 text-xs text-gray-400" style={{ fontWeight: 500 }}>HTTP</th>
                      <th className="pb-3 text-xs text-gray-400" style={{ fontWeight: 500 }}>Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">invalid_parameter</td>
                      <td className="py-3 pr-4 font-mono text-xs">400</td>
                      <td className="py-3 text-xs">A parameter value is not valid for its expected type or range</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">missing_parameter</td>
                      <td className="py-3 pr-4 font-mono text-xs">400</td>
                      <td className="py-3 text-xs">A required parameter was not included in the request</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">authentication_required</td>
                      <td className="py-3 pr-4 font-mono text-xs">401</td>
                      <td className="py-3 text-xs">No Authorization header provided</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">invalid_api_key</td>
                      <td className="py-3 pr-4 font-mono text-xs">401</td>
                      <td className="py-3 text-xs">API key does not match any active key</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">insufficient_scope</td>
                      <td className="py-3 pr-4 font-mono text-xs">403</td>
                      <td className="py-3 text-xs">API key lacks the required permission scope</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">resource_not_found</td>
                      <td className="py-3 pr-4 font-mono text-xs">404</td>
                      <td className="py-3 text-xs">The specified twin, simulation, dataset, or webhook does not exist</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">twin_not_ready</td>
                      <td className="py-3 pr-4 font-mono text-xs">409</td>
                      <td className="py-3 text-xs">Operation requires the twin to be in &apos;ready&apos; state</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">simulation_already_complete</td>
                      <td className="py-3 pr-4 font-mono text-xs">409</td>
                      <td className="py-3 text-xs">Cannot cancel a simulation that has already finished</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">incompatible_resolution</td>
                      <td className="py-3 pr-4 font-mono text-xs">422</td>
                      <td className="py-3 text-xs">Requested resolution not available for this organism/system</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">quota_exceeded</td>
                      <td className="py-3 pr-4 font-mono text-xs">429</td>
                      <td className="py-3 text-xs">Monthly quota for this resource type has been exhausted</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs text-gray-700 dark:text-gray-300">dataset_validation_failed</td>
                      <td className="py-3 pr-4 font-mono text-xs">422</td>
                      <td className="py-3 text-xs">Uploaded data did not pass schema or integrity checks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-2xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Error Handling Best Practices
              </h2>
              <ul className="mt-6 flex flex-col gap-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Always check the HTTP status code before parsing the response body. 2xx means success; anything else is an error.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Use the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">error.code</code> field for programmatic error handling — not the message, which may change.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Retry 429 and 503 errors with exponential backoff. Do not retry 400, 401, 403, 404, or 422 errors — they require code changes.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Log the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-700 dark:bg-neutral-800 dark:text-gray-300">request_id</code> from every error response. Include it when contacting support for fastest resolution.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  Implement circuit breakers for 500 errors. If you receive 3 or more server errors within 60 seconds, back off for 5 minutes before retrying.
                </li>
              </ul>
            </section>

            {/* Changelog */}
            <section id="changelog" className="scroll-mt-16 pb-20">
              <h1 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
                Changelog
              </h1>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                A chronological record of changes to the VARL API. Breaking changes are announced at least 90 days in advance. Previous API versions remain available for 12 months after a new version is released.
              </p>

              <div className="mt-16 flex flex-col">

                <div className="border-t border-gray-200 py-10 dark:border-neutral-800">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2026-02-01</span>
                    <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" style={{ fontWeight: 500 }}>Current</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Predictions API</strong> — Disease trajectory, treatment efficacy, and adverse event risk prediction endpoints now generally available. Includes explainability metadata and model version pinning.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Batch Simulations</strong> — Submit up to 10,000 simulation variations in a single request. All variations execute in parallel with independent result retrieval.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">IMPROVED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Digital Twin calibration</strong> — Calibration time reduced by 60% through parallel graph construction. Average initialization for molecular-resolution twins: 4.2 minutes (down from 11 minutes).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">IMPROVED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Biomarker reference database</strong> — Expanded to 14,200 validated markers across 2,800 conditions. Added stratified reference ranges by age, sex, and ethnicity.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-yellow-100 px-1.5 py-0.5 font-mono text-[10px] text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">CHANGED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Webhook payload format</strong> — Event payloads now include the full object state instead of just the ID. This is a backward-compatible change; existing integrations will continue to work.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-10 dark:border-neutral-800">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2025-11-01</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Biomarker tracking</strong> — Track biomarker evolution over time with configurable alert thresholds. Supports longitudinal analysis across twin snapshots and simulation outputs.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Dataset query engine</strong> — Run structured queries against uploaded datasets without downloading the full file. Supports filtering, aggregation, and cross-dataset joins.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Snapshot comparison</strong> — Diff two twin snapshots to identify changes in node expression, edge weights, and pathway activity with statistical significance scoring.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">IMPROVED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Simulation performance</strong> — Drug response simulations now complete 3x faster through optimized pathway traversal algorithms. Average completion time: 45 seconds for cellular resolution.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-red-100 px-1.5 py-0.5 font-mono text-[10px] text-red-700 dark:bg-red-500/10 dark:text-red-400">FIXED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Twin state query depth</strong> — Fixed an issue where <code className="text-gray-700 dark:text-gray-300">include_neighbors</code> with <code className="text-gray-700 dark:text-gray-300">depth &gt; 3</code> could return incomplete subgraphs for twins with high node density.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-10 dark:border-neutral-800">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2025-08-01</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Webhooks API</strong> — Real-time event notifications for twin lifecycle, simulation completion, biomarker alerts, and dataset validation. HMAC-SHA256 signed payloads with exponential backoff retry.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Environmental stress simulations</strong> — New simulation type for modeling biological responses to temperature, pH, oxidative stress, nutrient deprivation, and toxin exposure.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">R SDK</strong> — Official R client library with full API coverage, tidyverse-compatible data structures, and Bioconductor integration.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">IMPROVED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Dataset versioning</strong> — Datasets now support automatic versioning with full history retention. Previous versions are accessible and can be referenced by simulations and twins.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-yellow-100 px-1.5 py-0.5 font-mono text-[10px] text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400">CHANGED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Rate limit structure</strong> — Limits are now applied per endpoint category instead of globally. This provides more predictable behavior for applications that use multiple API features.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-10 dark:border-neutral-800">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2025-05-01</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Biomarkers API</strong> — Detect, quantify, and compare molecular biomarkers from multi-omics data. Includes reference database with 12,000+ validated markers.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Stochastic noise modeling</strong> — Digital twins now support optional biological noise layers that incorporate molecular-level variability into simulations for more realistic phenotypic outputs.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">IMPROVED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">TypeScript SDK</strong> — Complete rewrite with full type safety, tree-shaking support, and automatic request/response validation. Breaking change from v1.x — see migration guide.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-red-100 px-1.5 py-0.5 font-mono text-[10px] text-red-700 dark:bg-red-500/10 dark:text-red-400">FIXED</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Cursor pagination</strong> — Resolved edge case where cursor tokens could become invalid when resources were deleted between page requests.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-b border-gray-200 py-10 dark:border-neutral-800">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2025-03-01</span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-500 dark:bg-neutral-800 dark:text-gray-400" style={{ fontWeight: 500 }}>Initial Release</span>
                  </div>
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">VARL API v1</strong> — Initial public release. Core endpoints for Digital Twins (create, retrieve, update, delete, query, snapshots), Simulations (drug response, pathway disruption, genetic mutation), and Datasets (upload, list, delete).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Python SDK</strong> — Official Python client library with async support, automatic retries, and streaming for large dataset operations.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 rounded bg-green-100 px-1.5 py-0.5 font-mono text-[10px] text-green-700 dark:bg-green-500/10 dark:text-green-400">NEW</span>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"><strong className="text-gray-900 dark:text-gray-100">Authentication system</strong> — API key management with permission scopes, IP allowlisting, key rotation, and organizational isolation.</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </main>
      </div>

      <Footer className="bg-white dark:bg-black" />
    </div>
  );
}
