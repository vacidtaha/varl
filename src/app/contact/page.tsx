"use client";

import { useState, useCallback, useRef, useEffect, type FormEvent } from "react";
import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

type Status = "idle" | "sending" | "sent" | "error";

const REQUIRED_FIELDS = ["firstName", "lastName", "email", "subject", "message"] as const;
type FieldName = (typeof REQUIRED_FIELDS)[number];

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [subject, setSubject] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Set<FieldName>>(new Set());
  const [honeypot, setHoneypot] = useState("");
  const mountedAt = useRef(0);
  useEffect(() => { mountedAt.current = Date.now(); }, []);

  const fieldValues: Record<FieldName, string> = { firstName, lastName, email, subject, message };

  const clearError = useCallback((field: FieldName) => {
    setErrors((prev) => {
      if (!prev.has(field)) return prev;
      const next = new Set(prev);
      next.delete(field);
      return next;
    });
  }, []);

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone: phone || undefined,
          organization: organization || undefined,
          role: role || undefined,
          subject,
          source: source || undefined,
          message,
          _hp: honeypot,
          _t: mountedAt.current,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus("sent");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setOrganization("");
      setRole("");
      setSubject("");
      setSource("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputBase = "rounded-lg bg-gray-50 px-4 py-3 text-base lg:text-sm text-gray-900 outline-none transition-all placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700";
  const ringErr = "ring-2 ring-red-400 dark:ring-red-500";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-32">
          <h1 className="text-3xl tracking-tight text-gray-900 lg:text-6xl dark:text-gray-100" style={{ fontWeight: 500 }}>
            Let&apos;s Talk.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 lg:mt-6 lg:text-lg dark:text-gray-400">
            We haven&apos;t met yet. But chances are, we&apos;re chasing the same thing.
          </p>

          <div className="mt-10 lg:mt-20">
            <p className="text-xs leading-relaxed text-gray-400 lg:text-sm dark:text-neutral-500">
              You can also reach our teams directly.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { label: "General", email: "contact@varl.net" },
                { label: "Investor Relations", email: "ir@varl.net" },
                { label: "API & Technical", email: "api@varl.net" },
                { label: "Privacy", email: "privacy@varl.net" },
                { label: "Security", email: "security@varl.net" },
                { label: "Legal", email: "legal@varl.net" },
              ].map(({ label, email }) => (
                <a key={email} href={`mailto:${email}`} className="hover:underline">
                  <span className="text-xs text-gray-400 dark:text-neutral-500">{label}: </span>
                  <span className="text-sm" style={{ color: "#06c" }}>{email}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-6 rounded-2xl bg-white p-5 lg:mt-8 lg:p-12 dark:bg-neutral-900">
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2 lg:gap-y-6">

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
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); clearError("email"); }} placeholder="you@company.com" className={`${inputBase} ${errors.has("email") ? ringErr : ""}`} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Phone</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" className={inputBase} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Organization</label>
                <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Company or institution" className={inputBase} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Role</label>
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Your title or role" className={inputBase} />
              </div>

              <div id="field-subject" className="col-span-1 flex flex-col gap-2 lg:col-span-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Subject *</label>
                <Dropdown
                  label="Select a topic"
                  options={["Research Collaboration", "Partnership Inquiry", "Investment", "Press & Media", "Technical Question", "General Inquiry", "Other"]}
                  variant="form"
                  value={subject || undefined}
                  onChange={(v) => { setSubject(v); clearError("subject"); }}
                  error={errors.has("subject")}
                />
              </div>

              <div className="col-span-1 flex flex-col gap-2 lg:col-span-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">How did you hear about VARL?</label>
                <Dropdown
                  label="Select"
                  options={["Search Engine", "Social Media", "Publication / Paper", "Conference / Event", "Referral", "Other"]}
                  variant="form"
                  value={source || undefined}
                  onChange={setSource}
                />
              </div>

              <div id="field-message" className="col-span-1 flex flex-col gap-2 lg:col-span-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Message *</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); clearError("message"); }}
                  placeholder="Tell us what's on your mind..."
                  className={`resize-none leading-relaxed ${inputBase} ${errors.has("message") ? ringErr : ""}`}
                />
              </div>

              <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true" tabIndex={-1}>
                <input type="text" name="website_url" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
              </div>

              <div className="col-span-1 mt-2 flex flex-col gap-4 lg:col-span-2 lg:mt-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  {status === "sent" && (
                    <p className="text-sm text-green-600 dark:text-green-400">Message sent successfully. We&apos;ll be in touch.</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly at contact@varl.net</p>
                  )}
                  {(status === "idle" || status === "sending") && (
                    <p className="text-[11px] text-gray-300 lg:text-xs dark:text-neutral-600">
                      We typically respond within 48 hours. Fields marked with * are required.
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-gray-200 px-10 py-3 text-sm text-gray-700 transition-colors hover:bg-gray-300 lg:w-auto lg:py-3.5 dark:bg-neutral-700 dark:text-gray-300 dark:hover:bg-neutral-600 disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ fontWeight: 450 }}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </div>

            </div>
          </form>
        </div>
      </main>

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
