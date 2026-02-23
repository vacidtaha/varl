"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-8 py-32">
          <h2 className="text-6xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Let&apos;s Talk.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            We haven&apos;t met yet. But chances are, we&apos;re chasing the same thing.
          </p>

          <div className="mt-20 rounded-2xl bg-white p-12 dark:bg-neutral-900">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">First Name *</label>
                <input
                  type="text"
                  placeholder="John"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Last Name *</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Email *</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Organization</label>
                <input
                  type="text"
                  placeholder="Company or institution"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Role</label>
                <input
                  type="text"
                  placeholder="Your title or role"
                  className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Subject *</label>
                <Dropdown
                  label="Select a topic"
                  options={["Research Collaboration", "Partnership Inquiry", "Investment", "Careers", "Press & Media", "Technical Question", "General Inquiry", "Other"]}
                  variant="form"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">How did you hear about VARL?</label>
                <Dropdown
                  label="Select"
                  options={["Search Engine", "Social Media", "Publication / Paper", "Conference / Event", "Referral", "Other"]}
                  variant="form"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs text-gray-500 dark:text-gray-400">Message *</label>
                <textarea
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  className="resize-none rounded-lg bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-700"
                />
              </div>

              <div className="col-span-2 mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-300 dark:text-neutral-600">
                  We typically respond within 48 hours. Fields marked with * are required.
                </p>
                <button
                  className="rounded-full bg-gray-200 px-10 py-3.5 text-sm text-gray-700 transition-colors hover:bg-gray-300 dark:bg-neutral-700 dark:text-gray-300 dark:hover:bg-neutral-600"
                  style={{ fontWeight: 450 }}
                >
                  Send Message
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
