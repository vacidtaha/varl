"use client";

import { useState, useCallback, useRef, useEffect, type FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

type Status = "idle" | "sending" | "sent" | "error";

const REQUIRED_FIELDS = [
  "firstName", "lastName", "email", "title",
  "applicantType", "country", "sector",
  "primaryUseCase", "environment", "preferredSdk",
  "patientData", "dpa",
  "projectDescription", "timeline",
] as const;

type FieldName = (typeof REQUIRED_FIELDS)[number];

export default function ApiAccessPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");

  const [applicantType, setApplicantType] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [website, setWebsite] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [country, setCountry] = useState("");
  const [sector, setSector] = useState("");

  const [primaryUseCase, setPrimaryUseCase] = useState("");
  const [environment, setEnvironment] = useState("");
  const [preferredSdk, setPreferredSdk] = useState("");
  const [estimatedCalls, setEstimatedCalls] = useState("");
  const [apiScopes, setApiScopes] = useState<string[]>([]);

  const [patientData, setPatientData] = useState("");
  const [regulations, setRegulations] = useState("");
  const [dataResidency, setDataResidency] = useState("");
  const [dpa, setDpa] = useState("");
  const [ipAllowlist, setIpAllowlist] = useState("");

  const [projectDescription, setProjectDescription] = useState("");
  const [timeline, setTimeline] = useState("");
  const [technicalLeadEmail, setTechnicalLeadEmail] = useState("");
  const [engineeringTeamSize, setEngineeringTeamSize] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Set<FieldName>>(new Set());
  const [honeypot, setHoneypot] = useState("");
  const mountedAt = useRef(0);
  useEffect(() => { mountedAt.current = Date.now(); }, []);

  const allAgreed = agree1 && agree2 && agree3 && agree4;

  const fieldValues: Record<FieldName, string> = {
    firstName, lastName, email, title,
    applicantType, country, sector,
    primaryUseCase, environment, preferredSdk,
    patientData, dpa,
    projectDescription, timeline,
  };

  const clearError = useCallback((field: FieldName) => {
    setErrors((prev) => {
      if (!prev.has(field)) return prev;
      const next = new Set(prev);
      next.delete(field);
      return next;
    });
  }, []);

  function toggleScope(scope: string) {
    setApiScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const emptyFields = REQUIRED_FIELDS.filter((f) => !fieldValues[f].trim());
    if (emptyFields.length > 0) {
      setErrors(new Set(emptyFields));
      const firstEl = document.getElementById(`field-${emptyFields[0]}`);
      if (firstEl) firstEl.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/api-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, email,
          phone: phone || undefined,
          title, department: department || undefined,
          applicantType, organizationName: organizationName || undefined,
          website: website || undefined, teamSize: teamSize || undefined,
          country, sector,
          primaryUseCase, environment, preferredSdk,
          estimatedCalls: estimatedCalls || undefined,
          apiScopes,
          patientData, regulations: regulations || undefined,
          dataResidency: dataResidency || undefined, dpa,
          ipAllowlist: ipAllowlist || undefined,
          projectDescription, timeline,
          technicalLeadEmail: technicalLeadEmail || undefined,
          engineeringTeamSize: engineeringTeamSize || undefined,
          additionalNotes: additionalNotes || undefined,
          _hp: honeypot,
          _t: mountedAt.current,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputBase = "bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800";
  const ringErr = "ring-2 ring-red-400 dark:ring-red-500";

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-8 py-24">

          <h1 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            API Access Request
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
            The VARL API is available to approved applicants — individuals, organizations, research groups, and government entities. Complete this form to initiate the review process. All fields marked with * are required. Incomplete submissions will not be processed.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-16">

            {/* Section 1: Contact Information */}
            <div className="border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Contact Information</h2>
              <p className="mt-2 text-sm text-gray-400">Primary point of contact for this request.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div id="field-firstName" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">First Name *</label>
                  <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value); clearError("firstName"); }} placeholder="John" className={`${inputBase} ${errors.has("firstName") ? ringErr : ""}`} />
                </div>
                <div id="field-lastName" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Last Name *</label>
                  <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); clearError("lastName"); }} placeholder="Doe" className={`${inputBase} ${errors.has("lastName") ? ringErr : ""}`} />
                </div>
                <div id="field-email" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Email *</label>
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); clearError("email"); }} placeholder="you@organization.com" className={`${inputBase} ${errors.has("email") ? ringErr : ""}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Phone</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" className={inputBase} />
                </div>
                <div id="field-title" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Title / Role *</label>
                  <input type="text" value={title} onChange={(e) => { setTitle(e.target.value); clearError("title"); }} placeholder="CTO, Lead Researcher, etc." className={`${inputBase} ${errors.has("title") ? ringErr : ""}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Department</label>
                  <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Engineering, Research, Clinical, etc." className={inputBase} />
                </div>
              </div>
            </div>

            {/* Section 2: Applicant */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Applicant</h2>
              <p className="mt-2 text-sm text-gray-400">Details about the individual, organization, or government entity requesting access.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div id="field-applicantType" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Applicant Type *</label>
                  <Dropdown label="Select" options={["Individual Researcher", "University / Research Institution", "Hospital / Health System", "Pharmaceutical Company", "Biotech Startup", "Agricultural Enterprise", "Government Agency / Ministry", "State / National Laboratory", "Non-Profit / NGO", "Independent Developer", "Other"]} variant="form" value={applicantType || undefined} onChange={(v) => { setApplicantType(v); clearError("applicantType"); }} error={errors.has("applicantType")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Organization / Affiliation Name</label>
                  <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Legal entity name or N/A for individuals" className={inputBase} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Website</label>
                  <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="yourwebsite.com" className={inputBase} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Team / Organization Size</label>
                  <Dropdown label="Select" options={["Just me", "2–10", "11–50", "51–200", "201–1,000", "1,001–10,000", "10,000+"]} variant="form" value={teamSize || undefined} onChange={setTeamSize} />
                </div>
                <div id="field-country" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Country *</label>
                  <input type="text" value={country} onChange={(e) => { setCountry(e.target.value); clearError("country"); }} placeholder="Country of residence or incorporation" className={`${inputBase} ${errors.has("country") ? ringErr : ""}`} />
                </div>
                <div id="field-sector" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Sector *</label>
                  <Dropdown label="Select" options={["Healthcare & Life Sciences", "Pharmaceuticals", "Biotechnology", "Agriculture & Food Systems", "Academic Research", "Clinical Diagnostics", "Government & Public Health", "Defense & National Security", "Technology / SaaS", "Independent Research", "Other"]} variant="form" value={sector || undefined} onChange={(v) => { setSector(v); clearError("sector"); }} error={errors.has("sector")} />
                </div>
              </div>
            </div>

            {/* Section 3: Technical Requirements */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Technical Requirements</h2>
              <p className="mt-2 text-sm text-gray-400">Help us understand the scope and nature of your intended API usage.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div id="field-primaryUseCase" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Primary Use Case *</label>
                  <Dropdown label="Select" options={["Digital Twin Simulation", "Drug Target Discovery", "Biomarker Analysis", "Predictive Modeling", "Dataset Access", "Clinical Decision Support", "Agricultural Optimization", "Platform Integration", "Research & Development", "Other"]} variant="form" value={primaryUseCase || undefined} onChange={(v) => { setPrimaryUseCase(v); clearError("primaryUseCase"); }} error={errors.has("primaryUseCase")} />
                </div>
                <div id="field-environment" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Environment *</label>
                  <Dropdown label="Select" options={["Production", "Staging / Pre-production", "Development / Testing", "Research / Exploration"]} variant="form" value={environment || undefined} onChange={(v) => { setEnvironment(v); clearError("environment"); }} error={errors.has("environment")} />
                </div>
                <div id="field-preferredSdk" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Preferred SDK *</label>
                  <Dropdown label="Select" options={["Python", "TypeScript / JavaScript", "R", "REST API (Direct)", "Multiple"]} variant="form" value={preferredSdk || undefined} onChange={(v) => { setPreferredSdk(v); clearError("preferredSdk"); }} error={errors.has("preferredSdk")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Estimated Monthly API Calls</label>
                  <Dropdown label="Select" options={["Under 1,000", "1,000 – 10,000", "10,000 – 100,000", "100,000 – 1,000,000", "1,000,000+", "Not sure yet"]} variant="form" value={estimatedCalls || undefined} onChange={setEstimatedCalls} />
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
                        <input type="checkbox" checked={apiScopes.includes(scope)} onChange={() => toggleScope(scope)} className="h-4 w-4 accent-green-500 dark:accent-green-400" />
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
                <div id="field-patientData" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Will you process patient data? *</label>
                  <Dropdown label="Select" options={["Yes – identifiable patient data", "Yes – de-identified / anonymized data", "No – synthetic or simulation data only", "Not applicable"]} variant="form" value={patientData || undefined} onChange={(v) => { setPatientData(v); clearError("patientData"); }} error={errors.has("patientData")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Applicable Regulations</label>
                  <Dropdown label="Select" options={["HIPAA", "GDPR", "FDA 21 CFR Part 11", "GxP / GLP / GMP", "SOC 2", "ISO 27001", "Multiple", "None / Not sure"]} variant="form" value={regulations || undefined} onChange={setRegulations} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Data Residency Requirements</label>
                  <Dropdown label="Select" options={["No specific requirements", "United States only", "European Union only", "Country-specific (specify below)", "On-premise deployment required"]} variant="form" value={dataResidency || undefined} onChange={setDataResidency} />
                </div>
                <div id="field-dpa" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Do you have an existing DPA or BAA? *</label>
                  <Dropdown label="Select" options={["Yes – we can provide our standard agreement", "No – we will use VARL's standard agreement", "We need to negotiate terms", "Not applicable"]} variant="form" value={dpa || undefined} onChange={(v) => { setDpa(v); clearError("dpa"); }} error={errors.has("dpa")} />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">IP Allowlist (if applicable)</label>
                  <input type="text" value={ipAllowlist} onChange={(e) => setIpAllowlist(e.target.value)} placeholder="e.g. 203.0.113.0/24, 198.51.100.42 (comma separated)" className={inputBase} />
                </div>
              </div>
            </div>

            {/* Section 5: Project Details */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Project Details</h2>
              <p className="mt-2 text-sm text-gray-400">Describe what you intend to build or research using the VARL API.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div id="field-projectDescription" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Project Description *</label>
                  <textarea rows={5} value={projectDescription} onChange={(e) => { setProjectDescription(e.target.value); clearError("projectDescription"); }} placeholder="Describe the project, its objectives, and how the VARL API will be integrated into your workflow..." className={`resize-none leading-relaxed ${inputBase} ${errors.has("projectDescription") ? ringErr : ""}`} />
                </div>
                <div id="field-timeline" className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Expected Timeline *</label>
                  <Dropdown label="Select" options={["Immediate (within 2 weeks)", "Short-term (1–3 months)", "Medium-term (3–6 months)", "Long-term (6+ months)", "Exploratory / No fixed timeline"]} variant="form" value={timeline || undefined} onChange={(v) => { setTimeline(v); clearError("timeline"); }} error={errors.has("timeline")} />
                </div>
                <div className="grid grid-cols-2 gap-x-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Technical Lead Email</label>
                    <input type="email" value={technicalLeadEmail} onChange={(e) => setTechnicalLeadEmail(e.target.value)} placeholder="lead@organization.com" className={inputBase} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Engineering Team Size</label>
                    <Dropdown label="Select" options={["1 developer", "2–5 developers", "6–15 developers", "16–50 developers", "50+ developers"]} variant="form" value={engineeringTeamSize || undefined} onChange={setEngineeringTeamSize} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Additional Notes</label>
                  <textarea rows={3} value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} placeholder="Any additional context, special requirements, or questions for the review team..." className={`resize-none leading-relaxed ${inputBase}`} />
                </div>
              </div>
            </div>

            <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true" tabIndex={-1}>
              <input type="text" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
            </div>

            {/* Section 6: Agreements */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Agreements</h2>

              <div className="mt-8 flex flex-col gap-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I confirm that the information provided above is accurate and that I am authorized to submit this request on behalf of my organization. *
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I have read and agree to VARL&apos;s <Link href="/terms" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 600 }}>Terms of Use</Link>, <Link href="/privacy" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 600 }}>Privacy Policy</Link>, and <Link href="/api-policy" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 600 }}>API Usage Policy</Link>. *
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" checked={agree3} onChange={(e) => setAgree3(e.target.checked)} className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I understand that API access is subject to VARL&apos;s approval process and that submission of this form does not guarantee access. *
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input type="checkbox" checked={agree4} onChange={(e) => setAgree4(e.target.checked)} className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I consent to VARL contacting me via the provided email and phone number regarding this request. *
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-10 dark:border-neutral-800">
              <div>
                {status === "sent" && (
                  <p className="text-sm text-green-600 dark:text-green-400">Your request has been submitted successfully. We&apos;ll review it and get back to you within 5 business days.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly at contact@varl.net</p>
                )}
                {(status === "idle" || status === "sending") && (
                  <p className="text-xs leading-relaxed text-gray-400">
                    All submissions are reviewed by our API governance team.<br />
                    You will receive a response within 5 business days.
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={!allAgreed || status === "sending"}
                className="rounded-full px-12 py-4 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-40 bg-gray-300 text-gray-600 hover:bg-gray-900 hover:text-white dark:bg-neutral-700 dark:text-gray-400 dark:hover:bg-white dark:hover:text-black"
                style={{ fontWeight: 500 }}
              >
                {status === "sending" ? "Submitting…" : "Submit Request"}
              </button>
            </div>

          </form>
        </div>
      </main>

      <Footer className="bg-white dark:bg-black" />
    </div>
  );
}
