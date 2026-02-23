import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Compliance" };

export default function CompliancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      {/* Hero */}
      <div className="relative w-full overflow-hidden">
        <img
          src="/uyum.webp"
          alt="Compliance"
          className="h-[520px] w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-7xl tracking-tight text-white drop-shadow-lg"
            style={{ fontWeight: 400 }}
          >
            Compliance
          </h1>
        </div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">Wheat</span>
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-8 py-24">

          {/* VARL's Position on Compliance */}
          <h2 className="text-4xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Our Position
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Compliance is not a checkbox for us. It is the foundation on which trust is built. When researchers submit genomic data to our platform, when clinicians use our predictions to inform treatment decisions, when governments grant us access to national health datasets, they are placing an extraordinary level of confidence in our systems, our processes, and our people. That confidence must be earned every day, through verifiable action, not through promises.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              We operate in a domain where a single failure in data handling can compromise patient privacy, where a misconfigured access control can expose proprietary research, and where the misuse of our technology could have consequences measured not in dollars but in human lives. We take this responsibility with the gravity it demands.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              VARL does not treat regulatory requirements as constraints to be minimized. We treat them as the minimum acceptable standard, and then we go further. Our internal policies exceed regulatory requirements in nearly every category. Where regulations have not yet caught up with the capabilities of biological AI, we impose our own standards based on what we believe is right, not just what is legally required.
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400" style={{ fontWeight: 400 }}>
              Every system we deploy, every API we expose, every dataset we handle is subject to the same question: if this were made public tomorrow, would we be proud of how it was handled? If the answer is anything less than an unequivocal yes, it does not ship.
            </p>
          </div>

          <p className="mt-16 text-sm text-gray-400">
            Last Updated: February 14, 2026
          </p>

          <div className="mt-16 flex flex-col gap-16 text-base leading-relaxed text-gray-600 dark:text-gray-400">

            {/* 1 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Regulatory Frameworks</h2>
              <p className="mt-4">
                VARL maintains compliance with the following regulatory frameworks across all jurisdictions in which we operate. Our legal and compliance teams continuously monitor regulatory developments and update internal policies accordingly.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-blue-50 px-2 py-1 font-mono text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">HIPAA</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Health Insurance Portability and Accountability Act</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    VARL implements administrative, physical, and technical safeguards as required by the HIPAA Privacy Rule, Security Rule, and Breach Notification Rule. All partners processing protected health information (PHI) through our platform are required to execute a Business Associate Agreement (BAA) prior to data transmission. Our infrastructure supports HIPAA-compliant data handling, including encryption at rest and in transit, access controls, audit logging, and workforce training.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-green-50 px-2 py-1 font-mono text-xs text-green-600 dark:bg-green-900/30 dark:text-green-400">GDPR</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>General Data Protection Regulation (EU) 2016/679</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    VARL processes personal data of EU/EEA residents in full compliance with the GDPR. We maintain lawful bases for all processing activities, conduct Data Protection Impact Assessments (DPIAs) for high-risk processing, honor data subject rights within statutory timelines, and implement data protection by design and by default across our platform. International data transfers are secured through Standard Contractual Clauses (SCCs) and supplementary technical measures.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-purple-50 px-2 py-1 font-mono text-xs text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">CCPA/CPRA</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>California Consumer Privacy Act &amp; California Privacy Rights Act</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    California residents are afforded enhanced privacy rights under the CCPA as amended by the CPRA. VARL does not sell personal information. We provide California consumers with the right to know, delete, correct, and opt out of the sharing of their personal information. We maintain a dedicated process for handling consumer rights requests within the 45-day statutory response period.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-yellow-50 px-2 py-1 font-mono text-xs text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">FDA</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>U.S. Food and Drug Administration Regulations</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    VARL&apos;s platform is currently designated for research use only (RUO) and has not been submitted for FDA clearance or approval as a medical device. Where applicable, our quality management processes align with 21 CFR Part 11 (Electronic Records; Electronic Signatures) and we maintain documentation practices consistent with FDA guidance on software as a medical device (SaMD) in anticipation of future regulatory submissions.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-red-50 px-2 py-1 font-mono text-xs text-red-600 dark:bg-red-900/30 dark:text-red-400">GxP</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Good Practice Regulations (GLP, GCP, GMP)</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    For partnerships involving preclinical research (GLP), clinical trials (GCP), or manufacturing processes (GMP), VARL adapts its platform operations to meet the applicable Good Practice requirements. This includes validated systems, complete audit trails, controlled document management, and personnel qualification records. Specific GxP compliance measures are documented in the applicable Quality Agreement executed with each partner.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-orange-50 px-2 py-1 font-mono text-xs text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">EAR/ITAR</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Export Administration Regulations &amp; International Traffic in Arms Regulations</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    VARL screens all users, partners, and transactions against relevant export control lists, including the U.S. Commerce Department&apos;s Entity List, the Treasury Department&apos;s SDN List, and applicable EU and UK sanctions lists. Our platform is not available to individuals, organizations, or governments located in or subject to comprehensive U.S. sanctions. Dual-use technology assessments are conducted for all API access grants.
                  </p>
                </div>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Certifications &amp; Audits</h2>
              <p className="mt-4">
                VARL subjects its infrastructure, processes, and controls to independent third-party audits on a regular basis. The following certifications and attestations are maintained:
              </p>

              <div className="mt-8 flex flex-col">
                <div className="flex gap-8 border-t border-gray-200 py-8 dark:border-neutral-800">
                  <span className="w-40 shrink-0 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>SOC 2 Type II</span>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Annual audit covering security, availability, processing integrity, confidentiality, and privacy trust service criteria. Our SOC 2 Type II report is issued by an independent CPA firm and covers a 12-month observation period. The report is available to customers and partners under NDA upon request.
                    </p>
                    <span className="mt-2 inline-block text-xs text-gray-400">Last audit: December 2025 · Auditor: Deloitte &amp; Touche LLP</span>
                  </div>
                </div>
                <div className="flex gap-8 border-t border-gray-200 py-8 dark:border-neutral-800">
                  <span className="w-40 shrink-0 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>ISO 27001</span>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Certification for our Information Security Management System (ISMS), covering risk assessment, access control, incident management, business continuity, and supplier relationship security. The certification scope includes all production infrastructure, API services, and internal systems handling sensitive data.
                    </p>
                    <span className="mt-2 inline-block text-xs text-gray-400">Certified since: March 2025 · Certifying body: BSI Group</span>
                  </div>
                </div>
                <div className="flex gap-8 border-t border-gray-200 py-8 dark:border-neutral-800">
                  <span className="w-40 shrink-0 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>ISO 27701</span>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Extension to ISO 27001 covering privacy information management. This certification demonstrates our commitment to managing personal data in accordance with international privacy standards, including GDPR alignment. It covers our roles as both data controller and data processor.
                    </p>
                    <span className="mt-2 inline-block text-xs text-gray-400">Certified since: June 2025 · Certifying body: BSI Group</span>
                  </div>
                </div>
                <div className="flex gap-8 border-t border-b border-gray-200 py-8 dark:border-neutral-800">
                  <span className="w-40 shrink-0 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>CSA STAR</span>
                  <div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Cloud Security Alliance STAR Level 2 attestation, demonstrating that our cloud infrastructure meets rigorous security and privacy controls as defined by the Cloud Controls Matrix (CCM). This certification is particularly relevant for enterprise and government partners evaluating our cloud security posture.
                    </p>
                    <span className="mt-2 inline-block text-xs text-gray-400">Attested since: September 2025</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Data Security</h2>
              <p className="mt-4">
                Security is foundational to everything we build. The following measures are implemented across our entire infrastructure:
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Encryption</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">AES-256 encryption at rest. TLS 1.3 encryption in transit. All API keys and authentication tokens are encrypted using industry-standard cryptographic algorithms and stored in hardware security modules (HSMs).</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Access Control</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Role-based access control (RBAC) with principle of least privilege. Mandatory multi-factor authentication for all internal systems and administrative access. Privileged access management with just-in-time provisioning.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Audit Logging</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Immutable audit trails for all data access events, API calls, configuration changes, and administrative actions. Logs are retained for a minimum of 6 years and are protected against tampering through cryptographic chaining.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Network Security</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Network segmentation with micro-segmented security zones. Web application firewall (WAF), DDoS protection, and intrusion detection/prevention systems (IDS/IPS). Continuous vulnerability scanning and penetration testing.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Incident Response</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Documented incident response plan with defined severity levels, escalation procedures, and communication protocols. Breach notification within 72 hours (GDPR) and 60 days (HIPAA). Annual tabletop exercises and post-incident reviews.</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-6 dark:bg-neutral-800">
                  <h4 className="text-sm text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Business Continuity</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">Multi-region infrastructure with automated failover. Recovery Point Objective (RPO) of 1 hour and Recovery Time Objective (RTO) of 4 hours for critical systems. Annual disaster recovery testing with documented results.</p>
                </div>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Biosecurity &amp; Ethical Oversight</h2>
              <p className="mt-4">
                Given the dual-use potential of biological intelligence technologies, VARL maintains a dedicated Biosecurity and Ethics Board that reviews all new capabilities, partnership applications, and API access requests for potential misuse risk. The board comprises internal scientists, external advisors, and independent bioethics experts.
              </p>
              <p className="mt-4">
                Key measures include:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">Pre-deployment risk assessment for all new platform features with dual-use potential</li>
                <li className="list-disc">Institutional review of all API access applications involving pathogen modeling, toxicology simulation, or genetic manipulation workflows</li>
                <li className="list-disc">Real-time usage monitoring with automated anomaly detection for patterns consistent with misuse</li>
                <li className="list-disc">Cooperation with national and international biosecurity agencies, including voluntary reporting of potential threats</li>
                <li className="list-disc">Annual publication of a Transparency Report documenting access decisions, denied applications, and revoked credentials</li>
                <li className="list-disc">Adherence to the Biological Weapons Convention (BWC) and relevant national implementing legislation</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Vendor &amp; Supply Chain Management</h2>
              <p className="mt-4">
                VARL evaluates the security and compliance posture of all third-party vendors and subprocessors before engagement. Our vendor management program includes:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">Security questionnaires and due diligence assessments prior to onboarding</li>
                <li className="list-disc">Contractual data processing agreements with all subprocessors that handle personal or sensitive data</li>
                <li className="list-disc">Annual reassessment of vendor security posture with documented findings</li>
                <li className="list-disc">Right to audit clauses in all critical vendor agreements</li>
                <li className="list-disc">Immediate vendor review and potential termination in the event of a security incident</li>
              </ul>
              <p className="mt-4">
                A list of our subprocessors is available upon request and is updated whenever a new subprocessor is engaged. Partners with contractual notification requirements are informed at least 30 days before any subprocessor change takes effect.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Employee Training &amp; Awareness</h2>
              <p className="mt-4">
                All VARL employees and contractors are required to complete the following training programs:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">Security awareness training upon hire and annually thereafter</li>
                <li className="list-disc">HIPAA privacy and security training for all personnel with access to PHI</li>
                <li className="list-disc">GDPR data protection training for all personnel processing EU personal data</li>
                <li className="list-disc">Biosecurity awareness training covering dual-use research concerns and responsible technology development</li>
                <li className="list-disc">Insider threat awareness and social engineering prevention</li>
                <li className="list-disc">Incident reporting procedures and whistleblower protection policies</li>
              </ul>
              <p className="mt-4">
                Training completion is tracked and documented. Personnel who fail to complete mandatory training within the required timeframe are subject to access restrictions until compliance is achieved.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>Requesting Compliance Documentation</h2>
              <p className="mt-4">
                Partners, regulators, and prospective customers may request copies of the following documents:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">SOC 2 Type II Report (under NDA)</li>
                <li className="list-disc">ISO 27001 and ISO 27701 certificates</li>
                <li className="list-disc">Data Processing Agreement (DPA) template</li>
                <li className="list-disc">Business Associate Agreement (BAA) template</li>
                <li className="list-disc">Subprocessor list</li>
                <li className="list-disc">Penetration test executive summary (under NDA)</li>
                <li className="list-disc">Annual Transparency Report</li>
              </ul>
              <p className="mt-4">
                To request any of the above, please contact our compliance team:
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Compliance Team</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc. — Legal &amp; Compliance</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Email</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">compliance@varl.com</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Mailing Address</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc., 1209 Orange Street, Wilmington, DE 19801, United States</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Response Time</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">Within 5 business days for standard requests. Expedited review available for active partners and regulatory inquiries.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
