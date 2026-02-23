"use client";

import { useState, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";

const POSITIONS = [
  "Senior Research Scientist",
  "Machine Learning Engineer",
  "Computational Biologist",
  "Agricultural Data Scientist",
  "Product Designer",
  "Other",
];

const EXPERIENCE_LEVELS = [
  "0 – 2 years",
  "3 – 5 years",
  "6 – 10 years",
  "11 – 15 years",
  "16+ years",
];

const DEGREE_TYPES = [
  "High School",
  "Associate",
  "Bachelor's",
  "Master's",
  "Ph.D.",
  "M.D.",
  "MBA",
  "Other",
];

const HEARD_FROM = [
  "LinkedIn",
  "Twitter / X",
  "GitHub",
  "Referral from employee",
  "Conference / Event",
  "News article",
  "Academic publication",
  "University career services",
  "Search engine",
  "Other",
];

const RELOCATE_OPTIONS = [
  "Yes, immediately",
  "Yes, within 3–6 months",
  "I prefer remote but open to relocation",
  "No, remote only",
];

const WORK_AUTH_OPTIONS = [
  "Turkish citizen",
  "EU/EEA citizen",
  "I have a valid work permit",
  "I need visa sponsorship",
  "Other",
];

const inputClass =
  "bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800";

const textareaClass =
  "resize-none bg-gray-50 px-4 py-3 text-sm leading-relaxed text-gray-900 outline-none transition-colors placeholder:text-gray-300 focus:bg-gray-100 dark:bg-neutral-900 dark:text-gray-100 dark:placeholder:text-neutral-600 dark:focus:bg-neutral-800";

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyForm />
    </Suspense>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const initialPosition = searchParams.get("position") || "";

  const [position, setPosition] = useState(initialPosition);
  const [otherPosition, setOtherPosition] = useState("");

  // Personal
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [nationality, setNationality] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");

  // Professional
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [experience, setExperience] = useState("");
  const [summary, setSummary] = useState("");

  // Education
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [field, setField] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [gpa, setGpa] = useState("");
  const [degree2, setDegree2] = useState("");
  const [institution2, setInstitution2] = useState("");
  const [field2, setField2] = useState("");
  const [gradYear2, setGradYear2] = useState("");
  const [showSecondEdu, setShowSecondEdu] = useState(false);

  // Skills
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [languages, setLanguages] = useState("");
  const [certifications, setCertifications] = useState("");

  // CV
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvDragging, setCvDragging] = useState(false);
  const cvRef = useRef<HTMLInputElement>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const portfolioRef = useRef<HTMLInputElement>(null);

  // Motivation
  const [whyVarl, setWhyVarl] = useState("");
  const [whatDifferent, setWhatDifferent] = useState("");
  const [hardestProblem, setHardestProblem] = useState("");

  // Preferences
  const [expectedSalary, setExpectedSalary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [relocate, setRelocate] = useState("");
  const [workAuth, setWorkAuth] = useState("");
  const [heardFrom, setHeardFrom] = useState("");

  // References
  const [ref1Name, setRef1Name] = useState("");
  const [ref1Title, setRef1Title] = useState("");
  const [ref1Company, setRef1Company] = useState("");
  const [ref1Email, setRef1Email] = useState("");
  const [ref1Rel, setRef1Rel] = useState("");

  // Additional
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Submit
  const [submitted, setSubmitted] = useState(false);

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setSkillInput("");
    }
  };

  const handleCvDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setCvDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === "application/pdf" || file.name.endsWith(".doc") || file.name.endsWith(".docx"))) {
      setCvFile(file);
    }
  }, []);

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-8 dark:bg-black">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 dark:bg-green-500/10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-3xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Application Received
        </h2>
        <p className="mt-4 max-w-md text-center text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Thank you, {firstName}. We have received your application for{" "}
          <span className="text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            {position === "Other" ? otherPosition : position}
          </span>.
          Our team will carefully review your application. Due to the volume of applications we receive, the review process may take several weeks. We appreciate your patience.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          A confirmation has been sent to {email}
        </p>
        <Link
          href="/careers"
          className="mt-10 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M2 7l4-4M2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-5xl px-8 py-16">

        {/* Back to Careers */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M2 7l4-4M2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Careers
        </Link>

        {/* Header */}
        <h1 className="mt-12 text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
          Join VARL
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
          This is not a standard application form. We want to understand who you are, how you think, and what drives you. Take your time — every answer matters. All fields marked with * are required.
        </p>

          <div className="mt-16">

            {/* Section 1: Position */}
            <div className="border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Position</h2>
              <p className="mt-2 text-sm text-gray-400">Which role are you applying for?</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Position *</label>
                  <Dropdown
                    label={position || "Select a position"}
                    options={POSITIONS}
                    value={position}
                    onChange={setPosition}
                    variant="form"
                  />
                </div>
                {position === "Other" && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Specify Role *</label>
                    <input
                      type="text"
                      value={otherPosition}
                      onChange={(e) => setOtherPosition(e.target.value)}
                      placeholder="e.g., Biostatistician, DevOps Engineer"
                      className={inputClass}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Section 2: Personal Information */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Personal Information</h2>
              <p className="mt-2 text-sm text-gray-400">Tell us about yourself.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">First Name *</label>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Last Name *</label>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Email *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Phone *</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+90 555 123 4567" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Date of Birth</label>
                  <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Nationality *</label>
                  <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Turkish" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Current City *</label>
                  <input type="text" value={currentCity} onChange={(e) => setCurrentCity(e.target.value)} placeholder="Istanbul" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Current Country *</label>
                  <input type="text" value={currentCountry} onChange={(e) => setCurrentCountry(e.target.value)} placeholder="Turkey" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">LinkedIn Profile</label>
                  <input type="url" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/johndoe" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">GitHub Profile</label>
                  <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} placeholder="github.com/johndoe" className={inputClass} />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Personal Website</label>
                  <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://johndoe.com" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Section 3: Professional Background */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Professional Background</h2>
              <p className="mt-2 text-sm text-gray-400">Your current role and experience.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Current Job Title</label>
                  <input type="text" value={currentTitle} onChange={(e) => setCurrentTitle(e.target.value)} placeholder="Senior Software Engineer" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Current Company</label>
                  <input type="text" value={currentCompany} onChange={(e) => setCurrentCompany(e.target.value)} placeholder="Acme Inc." className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Total Experience *</label>
                  <Dropdown label="Select" options={EXPERIENCE_LEVELS} value={experience} onChange={setExperience} variant="form" />
                </div>
                <div className="flex flex-col gap-2" />
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Professional Summary *</label>
                  <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    rows={5}
                    placeholder="A brief overview of your career, key achievements, and areas of expertise."
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Education */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Education</h2>
              <p className="mt-2 text-sm text-gray-400">Your academic background.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Degree *</label>
                  <Dropdown label="Select" options={DEGREE_TYPES} value={degree} onChange={setDegree} variant="form" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">University / Institution *</label>
                  <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="MIT, Stanford, Bogazici..." className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Field of Study *</label>
                  <input type="text" value={field} onChange={(e) => setField(e.target.value)} placeholder="Computer Science, Biology..." className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Graduation Year</label>
                  <input type="text" value={gradYear} onChange={(e) => setGradYear(e.target.value)} placeholder="2024" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">GPA (optional)</label>
                  <input type="text" value={gpa} onChange={(e) => setGpa(e.target.value)} placeholder="3.85 / 4.00" className={inputClass} />
                </div>
              </div>

              {!showSecondEdu ? (
                <button
                  type="button"
                  onClick={() => setShowSecondEdu(true)}
                  className="mt-6 text-sm text-gray-400 underline transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  + Add another degree
                </button>
              ) : (
                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-100 pt-8 dark:border-neutral-800/50">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Degree</label>
                    <Dropdown label="Select" options={DEGREE_TYPES} value={degree2} onChange={setDegree2} variant="form" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">University / Institution</label>
                    <input type="text" value={institution2} onChange={(e) => setInstitution2(e.target.value)} placeholder="University name" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Field of Study</label>
                    <input type="text" value={field2} onChange={(e) => setField2(e.target.value)} placeholder="Field of study" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Graduation Year</label>
                    <input type="text" value={gradYear2} onChange={(e) => setGradYear2(e.target.value)} placeholder="Year" className={inputClass} />
                  </div>
                </div>
              )}
            </div>

            {/* Section 5: Skills & Languages */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Skills &amp; Languages</h2>
              <p className="mt-2 text-sm text-gray-400">Technical skills, tools, frameworks, and spoken languages.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Technical Skills *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }}
                      placeholder="Type a skill and press Enter"
                      className={`flex-1 ${inputClass}`}
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="bg-gray-100 px-5 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700"
                      style={{ fontWeight: 500 }}
                    >
                      Add
                    </button>
                  </div>
                  {skills.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skills.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 text-xs text-gray-700 dark:bg-neutral-800 dark:text-gray-300"
                        >
                          {s}
                          <button
                            type="button"
                            onClick={() => setSkills(skills.filter((sk) => sk !== s))}
                            className="text-gray-400 transition-colors hover:text-red-500"
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Languages Spoken *</label>
                    <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="English (Native), Turkish (Fluent)" className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 dark:text-gray-400">Certifications &amp; Awards</label>
                    <input type="text" value={certifications} onChange={(e) => setCertifications(e.target.value)} placeholder="AWS Certified ML, Google Cloud Professional..." className={inputClass} />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Resume / CV */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Resume / CV</h2>
              <p className="mt-2 text-sm text-gray-400">Upload your resume. PDF or Word documents accepted.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Resume / CV *</label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setCvDragging(true); }}
                    onDragLeave={() => setCvDragging(false)}
                    onDrop={handleCvDrop}
                    onClick={() => cvRef.current?.click()}
                    className={`flex cursor-pointer flex-col items-center justify-center py-14 transition-colors ${
                      cvDragging
                        ? "bg-green-50 dark:bg-green-500/5"
                        : cvFile
                          ? "bg-green-50 dark:bg-green-500/5"
                          : "bg-gray-50 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <input
                      ref={cvRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => { if (e.target.files?.[0]) setCvFile(e.target.files[0]); }}
                    />
                    {cvFile ? (
                      <>
                        <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>{cvFile.name}</p>
                        <p className="mt-1 text-xs text-gray-400">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setCvFile(null); }}
                          className="mt-2 text-xs text-gray-400 underline transition-colors hover:text-red-500"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Drag &amp; drop your resume here, or <span className="text-gray-900 underline dark:text-gray-100">browse</span>
                        </p>
                        <p className="mt-1 text-xs text-gray-300 dark:text-neutral-600">PDF, DOC, or DOCX — Max 10 MB</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Portfolio / Work Samples</label>
                  <div
                    onClick={() => portfolioRef.current?.click()}
                    className="flex cursor-pointer flex-col items-center justify-center bg-gray-50 py-10 transition-colors hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  >
                    <input
                      ref={portfolioRef}
                      type="file"
                      accept=".pdf,.zip,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => { if (e.target.files?.[0]) setPortfolioFile(e.target.files[0]); }}
                    />
                    {portfolioFile ? (
                      <>
                        <p className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>{portfolioFile.name}</p>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setPortfolioFile(null); }}
                          className="mt-2 text-xs text-gray-400 underline transition-colors hover:text-red-500"
                        >
                          Remove
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <span className="text-gray-900 underline dark:text-gray-100">Browse</span> or drag &amp; drop
                        </p>
                        <p className="mt-1 text-xs text-gray-300 dark:text-neutral-600">PDF, ZIP, PNG, JPG — Max 25 MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Motivation */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Motivation</h2>
              <p className="mt-2 text-sm text-gray-400">Help us understand why you want to be here.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Why VARL? *</label>
                  <textarea
                    value={whyVarl}
                    onChange={(e) => setWhyVarl(e.target.value)}
                    rows={5}
                    placeholder="What about VARL made you want to apply? Be specific."
                    className={textareaClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">What makes you different? *</label>
                  <textarea
                    value={whatDifferent}
                    onChange={(e) => setWhatDifferent(e.target.value)}
                    rows={5}
                    placeholder="Not your resume — something a resume can't show."
                    className={textareaClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Hardest problem you have ever solved</label>
                  <textarea
                    value={hardestProblem}
                    onChange={(e) => setHardestProblem(e.target.value)}
                    rows={5}
                    placeholder="Describe the problem, what made it hard, and how you approached it."
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 8: Work Preferences */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Work Preferences</h2>
              <p className="mt-2 text-sm text-gray-400">Logistics and availability.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Expected Annual Salary (USD)</label>
                  <input type="text" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} placeholder="$300,000" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Earliest Start Date *</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Willing to Relocate to Istanbul? *</label>
                  <Dropdown label="Select" options={RELOCATE_OPTIONS} value={relocate} onChange={setRelocate} variant="form" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Work Authorization *</label>
                  <Dropdown label="Select" options={WORK_AUTH_OPTIONS} value={workAuth} onChange={setWorkAuth} variant="form" />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">How did you hear about VARL?</label>
                  <Dropdown label="Select" options={HEARD_FROM} value={heardFrom} onChange={setHeardFrom} variant="form" />
                </div>
              </div>
            </div>

            {/* Section 9: References */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>References</h2>
              <p className="mt-2 text-sm text-gray-400">A professional reference who can speak to your work. Optional but recommended.</p>

              <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Full Name</label>
                  <input type="text" value={ref1Name} onChange={(e) => setRef1Name(e.target.value)} placeholder="Jane Smith" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Job Title</label>
                  <input type="text" value={ref1Title} onChange={(e) => setRef1Title(e.target.value)} placeholder="VP of Engineering" className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Company</label>
                  <input type="text" value={ref1Company} onChange={(e) => setRef1Company(e.target.value)} placeholder="Acme Inc." className={inputClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Email</label>
                  <input type="email" value={ref1Email} onChange={(e) => setRef1Email(e.target.value)} placeholder="jane@acme.com" className={inputClass} />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Relationship</label>
                  <input type="text" value={ref1Rel} onChange={(e) => setRef1Rel(e.target.value)} placeholder="Direct manager for 3 years" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Section 10: Additional */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Additional</h2>
              <p className="mt-2 text-sm text-gray-400">Anything else you want us to know.</p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-gray-500 dark:text-gray-400">Additional Notes</label>
                  <textarea
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    rows={4}
                    placeholder="Visa timeline, special accommodations, links to talks or publications..."
                    className={textareaClass}
                  />
                </div>
              </div>
            </div>

            {/* Section 11: Agreements */}
            <div className="mt-16 border-t border-gray-200 pt-10 dark:border-neutral-800">
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Agreements</h2>

              <div className="mt-8 flex flex-col gap-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I have read and agree to VARL&apos;s <a href="/privacy" className="underline">Privacy Policy</a> and consent to the collection and processing of my personal data for recruitment purposes. *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I confirm that all information provided is accurate and complete. I understand that providing false information may result in the withdrawal of any offer of employment. *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-green-500 dark:accent-green-400" />
                  <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    I understand that submission of this application does not guarantee employment and that all applications are subject to VARL&apos;s review process. *
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-16 flex items-center justify-between border-t border-gray-200 pt-10 dark:border-neutral-800">
              <p className="text-xs leading-relaxed text-gray-400">
                All applications are reviewed by our hiring team.<br />
                Due to the volume of applications, the review process may take several weeks.
              </p>
              <button
                onClick={() => setSubmitted(true)}
                className="rounded-full bg-gray-300 px-12 py-4 text-sm text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:bg-neutral-700 dark:text-gray-400 dark:hover:bg-white dark:hover:text-black"
                style={{ fontWeight: 500 }}
              >
                Submit Application
              </button>
            </div>

            <p className="mt-8 text-[11px] leading-relaxed text-gray-300 dark:text-neutral-700">
              VARL is an equal opportunity employer. We do not discriminate based on race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.
            </p>

          </div>
        </div>
    </div>
  );
}
