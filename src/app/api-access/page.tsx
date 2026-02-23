"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

export default function ApiAccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-8 py-24">

          {/* Header */}
          <h1 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            API Access Request
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
            The VARL API is available to approved applicants — individuals, organizations, research groups, and government entities. Complete this form to initiate the review process. All fields marked with * are required. Incomplete submissions will not be processed.
          </p>

          {/* Form */}
          <div className="mt-16">

            {/* Section 1: Contact Information */}
            <div className="border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Contact Information</h2>
              <p className="mt-2 text-sm text-gray-400">Primary point of contact for this request.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">First Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Email *</label>
                  <input
                    type="email"
                    placeholder="you@organization.com"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Title / Role *</label>
                  <input
                    type="text"
                    placeholder="CTO, Lead Researcher, etc."
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Department</label>
                  <input
                    type="text"
                    placeholder="Engineering, Research, Clinical, etc."
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Organization */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Applicant</h2>
              <p className="mt-2 text-sm text-gray-400">Details about the individual, organization, or government entity requesting access.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Applicant Type *</label>
                  <Dropdown
                    label="Select"
                    options={["Individual Researcher", "University / Research Institution", "Hospital / Health System", "Pharmaceutical Company", "Biotech Startup", "Agricultural Enterprise", "Government Agency / Ministry", "State / National Laboratory", "Non-Profit / NGO", "Independent Developer", "Other"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Organization / Affiliation Name</label>
                  <input
                    type="text"
                    placeholder="Legal entity name or N/A for individuals"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Website</label>
                  <input
                    type="url"
                    placeholder="https://"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Team / Organization Size</label>
                  <Dropdown
                    label="Select"
                    options={["Just me", "2–10", "11–50", "51–200", "201–1,000", "1,001–10,000", "10,000+"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Country *</label>
                  <input
                    type="text"
                    placeholder="Country of residence or incorporation"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Sector *</label>
                  <Dropdown
                    label="Select"
                    options={["Healthcare & Life Sciences", "Pharmaceuticals", "Biotechnology", "Agriculture & Food Systems", "Academic Research", "Clinical Diagnostics", "Government & Public Health", "Defense & National Security", "Technology / SaaS", "Independent Research", "Other"]}
                    variant="form"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Technical Requirements */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Technical Requirements</h2>
              <p className="mt-2 text-sm text-gray-400">Help us understand the scope and nature of your intended API usage.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Primary Use Case *</label>
                  <Dropdown
                    label="Select"
                    options={["Digital Twin Simulation", "Drug Target Discovery", "Biomarker Analysis", "Predictive Modeling", "Dataset Access", "Clinical Decision Support", "Agricultural Optimization", "Platform Integration", "Research & Development", "Other"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Environment *</label>
                  <Dropdown
                    label="Select"
                    options={["Production", "Staging / Pre-production", "Development / Testing", "Research / Exploration"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Preferred SDK *</label>
                  <Dropdown
                    label="Select"
                    options={["Python", "TypeScript / JavaScript", "R", "REST API (Direct)", "Multiple"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Estimated Monthly API Calls</label>
                  <Dropdown
                    label="Select"
                    options={["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000 – 1,000,000", "1,000,000+", "Not sure yet"]}
                    variant="form"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Required API Scopes *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      "twins:read", "twins:write", "simulations:run",
                      "simulations:read", "biomarkers:read", "predictions:run",
                      "datasets:read", "datasets:write", "webhooks:manage"
                    ].map((scope) => (
                      <label key={scope} className="flex items-center gap-3 bg-gray-50 px-4 py-3 text-sm text-gray-700 dark:bg-neutral-900 dark:text-gray-300">
                        <input type="checkbox" className="h-4 w-4 accent-green-500 dark:accent-green-400" />
                        <span className="font-mono text-xs">{scope}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Data & Compliance */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Data &amp; Compliance</h2>
              <p className="mt-2 text-sm text-gray-400">We take data governance seriously. Help us assess compliance requirements.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Will you process patient data? *</label>
                  <Dropdown
                    label="Select"
                    options={["Yes – identifiable patient data", "Yes – de-identified / anonymized data", "No – synthetic or simulation data only", "Not applicable"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Applicable Regulations</label>
                  <Dropdown
                    label="Select"
                    options={["HIPAA", "GDPR", "FDA 21 CFR Part 11", "GxP / GLP / GMP", "SOC 2", "ISO 27001", "Multiple", "None / Not sure"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Data Residency Requirements</label>
                  <Dropdown
                    label="Select"
                    options={["No specific requirements", "United States only", "European Union only", "Country-specific (specify below)", "On-premise deployment required"]}
                    variant="form"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Do you have an existing DPA or BAA? *</label>
                  <Dropdown
                    label="Select"
                    options={["Yes – we can provide our standard agreement", "No – we will use VARL's standard agreement", "We need to negotiate terms", "Not applicable"]}
                    variant="form"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">IP Allowlist (if applicable)</label>
                  <input
                    type="text"
                    placeholder="e.g. 203.0.113.0/24, 198.51.100.42 (comma separated)"
                    className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Project Details */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Project Details</h2>
              <p className="mt-2 text-sm text-gray-400">Describe what you intend to build or research using the VARL API.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Project Description *</label>
                  <textarea
                    rows={5}
                    placeholder="Describe the project, its objectives, and how the VARL API will be integrated into your workflow..."
                    className="resize-none bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Expected Timeline *</label>
                  <Dropdown
                    label="Select"
                    options={["Immediate (within 2 weeks)", "Short-term (1–3 months)", "Medium-term (3–6 months)", "Long-term (6+ months)", "Exploratory / No fixed timeline"]}
                    variant="form"
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Technical Lead Email</label>
                    <input
                      type="email"
                      placeholder="lead@organization.com"
                      className="bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Engineering Team Size</label>
                    <Dropdown
                      label="Select"
                      options={["1 developer", "2–5 developers", "6–15 developers", "16–50 developers", "50+ developers"]}
                      variant="form"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Additional Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Any additional context, special requirements, or questions for the review team..."
                    className="resize-none bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800"
                  />
                </div>
              </div>
            </div>

            {/* Section 6: Agreements */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Agreements</h2>

              <div className="mt-8 flex flex-col gap-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I confirm that the information provided above is accurate and that I am authorized to submit this request on behalf of my organization. *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I have read and agree to VARL&apos;s <a href="/terms" className="underline">Terms of Use</a>, <a href="/privacy" className="underline">Privacy Policy</a>, and <a href="/terms" className="underline">API Usage Agreement</a>. *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I understand that API access is subject to VARL&apos;s approval process and that submission of this form does not guarantee access. *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I consent to VARL contacting me via the provided email and phone number regarding this request.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-10 dark:border-neutral-800">
              <p className="text-xs leading-relaxed text-gray-400">
                All submissions are reviewed by our API governance team.<br />
                You will receive a response within 5 business days.
              </p>
              <button
                className="rounded-full bg-gray-300 px-12 py-4 text-sm text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:bg-neutral-700 dark:text-gray-400 dark:hover:bg-white dark:hover:text-black"
                style={{ fontWeight: 500 }}
              >
                Submit Request
              </button>
            </div>

          </div>
        </div>
      </main>

      <Footer className="bg-white dark:bg-black" />
    </div>
  );
}
