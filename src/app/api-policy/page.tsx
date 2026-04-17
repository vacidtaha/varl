import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavWrapper from "@/components/MobileNavWrapper";
import Link from "next/link";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "API Usage Policy",
  description: "Comprehensive policy governing the use of the VARL API, including biosecurity obligations, prohibited activities, dual-use research controls, and data handling requirements.",
  alternates: { canonical: `${SITE_URL}/api-policy` },
  openGraph: {
    title: "API Usage Policy | VARL",
    description: "Comprehensive policy governing the use of the VARL API, including biosecurity obligations, prohibited activities, dual-use research controls, and data handling requirements.",
  },
};

export default function ApiPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-24">

          <h1 className="text-3xl lg:text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            API Usage Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Effective Date: March 1, 2026 &nbsp;·&nbsp; Last Updated: March 24, 2026
          </p>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400 lg:mt-16 lg:gap-16 lg:text-base">

            {/* 1 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>1. Scope and Applicability</h2>
              <p className="mt-4">
                This API Usage Policy (&ldquo;Policy&rdquo;) governs all access to and use of the VARL Application Programming Interface (&ldquo;API&rdquo;), including all endpoints, SDKs, client libraries, documentation, and any data transmitted to or from the API. This Policy applies to every individual, organization, research institution, government entity, and automated system that interacts with the VARL API, regardless of the method of access.
              </p>
              <p className="mt-4">
                This Policy supplements and is incorporated by reference into the VARL <Link href="/terms" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Terms of Use</Link> and <Link href="/privacy" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Privacy Policy</Link>. In the event of a conflict between this Policy and the Terms of Use with respect to API-specific matters, this Policy shall control.
              </p>
              <p className="mt-4">
                VARL operates at the intersection of artificial intelligence and biological systems — constructing digital twins of living organisms, simulating molecular pathway interactions, detecting biomarkers, predicting disease trajectories, and modeling therapeutic interventions. The extraordinary power of these capabilities demands an equally extraordinary standard of responsible use. This Policy exists to ensure that the VARL API is used exclusively for lawful, ethical, and scientifically responsible purposes.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2. API Access and Authentication</h2>
              <p className="mt-4">
                Access to the VARL API is granted on a case-by-case basis following approval of an <Link href="/api-access" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>API Access Request</Link>. Each approved applicant receives unique API credentials that serve as the sole means of authentication. These credentials are confidential and non-transferable.
              </p>
              <p className="mt-4">
                You are responsible for:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Storing API keys securely using environment variables, secrets management systems, or hardware security modules — never in client-side code, version control repositories, or public-facing configurations</li>
                <li className="list-disc">Immediately revoking and rotating any key that has been or may have been exposed, compromised, or accessed by unauthorized parties</li>
                <li className="list-disc">Ensuring that all personnel who use your API credentials are authorized, trained, and bound by obligations consistent with this Policy</li>
                <li className="list-disc">Maintaining a current and accurate record of all systems, services, and individuals with access to your API credentials</li>
              </ul>
              <p className="mt-4">
                You agree to comply with all rate limits, usage quotas, and technical restrictions applicable to your API access. Exceeding these limits may result in throttling, temporary suspension, or permanent revocation of your access. VARL monitors API usage for compliance, security, and performance purposes. All API calls are logged, timestamped, and subject to audit.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2.1 Technical Standards and Operational Requirements</h3>
              <p className="mt-3">
                In addition to the general authentication obligations above, all API users must adhere to the following technical standards:
              </p>
              <ul className="mt-3 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Authentication Method:</strong> All API requests must be authenticated using bearer tokens transmitted in the HTTP Authorization header. Alternative authentication methods (e.g., query parameter tokens, basic authentication) are not supported and will be rejected.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Key Rotation:</strong> API keys must be rotated at least every 90 days, or immediately upon discovery of a suspected compromise. VARL may enforce mandatory rotation at any time by invalidating existing keys with at least 7 days&apos; advance notice (except in emergency situations under Section 11.1).</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">IP Allowlisting:</strong> Enterprise and institutional accounts may restrict API access to a defined set of IP addresses. VARL recommends configuring IP allowlists for production environments to reduce credential abuse risk.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Transport Security:</strong> All API communications must occur over HTTPS (TLS 1.2 or higher). Plaintext HTTP connections are not accepted. Clients must validate TLS certificates and must not disable certificate verification.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Test and Production Separation:</strong> Users are strongly encouraged to maintain separate API credentials for test/development and production environments. VARL may issue dedicated sandbox credentials for testing purposes. Test environment usage does not count toward production rate limits.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Rate Limits and Throttling:</strong> Specific rate limits are communicated at the time of API access approval and may vary based on the nature of the approved use case. Users approaching their rate limits will receive HTTP 429 (Too Many Requests) responses with a Retry-After header. Sustained abuse of rate limits may trigger graduated enforcement under Section 11.2.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">API Versioning and Deprecation:</strong> VARL follows semantic versioning for API endpoints. When an API version is scheduled for deprecation, users will receive at least 90 days&apos; advance written notice via email and API response headers. Users are responsible for migrating to supported versions before the deprecation date.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Webhook Security:</strong> If you configure webhooks to receive API callbacks, you must verify webhook signatures using the shared secret provided at configuration time. You must serve webhook endpoints over HTTPS and respond within 30 seconds to avoid timeout retries.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Key Compromise Response:</strong> If you suspect or confirm that your API credentials have been compromised, you must (1) immediately revoke the compromised credentials through the VARL dashboard or by contacting <a href="mailto:api@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>api@varl.net</a>, (2) generate new credentials, (3) review access logs for unauthorized activity, and (4) notify VARL within 24 hours with details of the suspected compromise.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Incident Response:</strong> For API-related security incidents, availability issues, or suspected unauthorized access, contact <a href="mailto:security@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>security@varl.net</a>. VARL aims to acknowledge all incident reports within 4 business hours and provide initial assessment within 24 hours.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3. Permitted Use</h2>
              <p className="mt-4">
                The VARL API may be used for the following purposes, provided that all use complies with applicable law, this Policy, and any supplemental agreements between you and VARL:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Internal research and development in the fields of computational biology, bioinformatics, drug discovery, agricultural science, and related disciplines</li>
                <li className="list-disc">Academic research conducted under the oversight of an institutional review board (IRB) or equivalent ethics committee</li>
                <li className="list-disc">Clinical decision support that operates under appropriate regulatory clearance (e.g., FDA, EMA, MHRA) and is used only as a supplemental tool by qualified healthcare professionals — never as a sole basis for diagnosis or treatment</li>
                <li className="list-disc">Integration into internal platforms, dashboards, or analytical pipelines within your organization, provided that API outputs are not redistributed to third parties without VARL&apos;s prior written authorization</li>
                <li className="list-disc">Publication of results derived from API outputs in peer-reviewed journals, preprints, and conference proceedings, with appropriate attribution to VARL as the computational platform</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>4. Prohibited Use — General</h2>
              <p className="mt-4">
                The following activities are strictly prohibited in connection with the VARL API:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Reverse Engineering:</strong> Decompiling, disassembling, or attempting to extract the source code, algorithms, model architectures, training data, or model weights underlying the API or any of its components.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Scraping and Harvesting:</strong> Systematically downloading, extracting, or caching data from the API beyond what is necessary and proportionate for your approved use case.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Redistribution:</strong> Sublicensing, reselling, white-labeling, or otherwise making API access or outputs available to third parties without VARL&apos;s prior written authorization.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Circumvention:</strong> Attempting to bypass, disable, or interfere with any authentication mechanism, rate limit, access control, security feature, or usage restriction of the API.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Competing Product Development:</strong> Using the API to build, train, fine-tune, or validate products or services that substantially replicate VARL&apos;s core functionality or compete directly with VARL&apos;s commercial offerings.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Service Impairment:</strong> Using the API in any manner that could damage, disable, overburden, or impair the stability, availability, or performance of the Services for other users.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Fraud and Misrepresentation:</strong> Providing false or misleading information in your API access request, account registration, or any communication with VARL regarding your intended use of the API.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5. Prohibited Use — Biosecurity and Human Safety</h2>
              <p className="mt-4">
                VARL&apos;s platform enables capabilities that, if misused, could pose serious risks to human health, public safety, national security, and global biosecurity. The following activities are absolutely and unconditionally prohibited. Violation of any provision in this section will result in immediate and permanent revocation of API access, referral to law enforcement and relevant national and international authorities, and pursuit of all available legal remedies.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.1 Pathogen Enhancement and Gain-of-Function</h3>
              <p className="mt-3">
                You shall not use the VARL API — including but not limited to the digital twin engine, molecular pathway simulator, or predictive modeling endpoints — to design, simulate, optimize, or inform the enhancement of any pathogen&apos;s virulence, transmissibility, host range, immune evasion capability, or resistance to antimicrobial agents. This prohibition extends to any computational workflow that could contribute to gain-of-function research conducted outside the scope of authorized national oversight frameworks (e.g., the U.S. P3CO framework, or equivalent regulatory bodies in other jurisdictions).
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.2 Biological Weapons and Toxic Agents</h3>
              <p className="mt-3">
                You shall not use the API to design, model, simulate, synthesize, produce, or optimize any biological weapon, toxin, chemical weapon, radiological agent, or delivery system for any such weapon. This prohibition encompasses all activities governed by the Biological Weapons Convention (BWC), the Chemical Weapons Convention (CWC), UN Security Council Resolution 1540, and all applicable national implementing legislation. Specifically, you shall not use VARL&apos;s biomarker detection, digital twin construction, or simulation capabilities to identify molecular targets for the purpose of creating agents intended to cause harm to human, animal, or plant populations.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.3 Unauthorized Human Experimentation</h3>
              <p className="mt-3">
                You shall not use outputs from the VARL API — including digital twin simulations, predictive disease trajectories, biomarker analyses, or therapeutic intervention models — to design, justify, or conduct human experimentation without prior approval from an accredited institutional review board (IRB) or independent ethics committee (IEC). You shall not use API outputs to develop genetic modification protocols, gene therapy vectors, or cellular reprogramming procedures intended for human application without full regulatory authorization from the relevant authorities (FDA, EMA, or equivalent). The use of VARL simulations as a substitute for required in vivo or in vitro safety testing is strictly prohibited.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.4 Genetic Targeting of Populations</h3>
              <p className="mt-3">
                You shall not use the API&apos;s biomarker detection, genomic analysis, or predictive modeling capabilities to design, develop, or optimize biological agents, therapies, or interventions that selectively target individuals or populations based on genetic ancestry, ethnicity, race, sex, or any heritable biological characteristic. This includes, without limitation, using VARL&apos;s molecular pathway analysis to identify population-specific vulnerabilities for the purpose of differential harm.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.5 Unregulated Therapeutic Deployment</h3>
              <p className="mt-3">
                You shall not use API outputs — including drug target predictions, compound interaction simulations, dosage modeling results, or treatment efficacy forecasts — as the basis for administering therapeutic interventions to humans or animals without appropriate regulatory clearance (e.g., FDA approval, EMA authorization, Investigational New Drug exemption, or equivalent). API outputs are computational predictions generated from models; they are not clinically validated endpoints. Presenting API outputs as validated therapeutic guidance, marketing them as medical products, or deploying them in direct patient care without regulatory oversight constitutes a violation of this Policy and potentially applicable law.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.6 Toxin Synthesis and Optimization</h3>
              <p className="mt-3">
                You shall not use the API to model, simulate, or optimize the synthesis pathways, potency, stability, delivery mechanisms, or environmental persistence of any toxin, venom, or poisonous substance for purposes other than legitimate pharmaceutical research (e.g., antivenom development, toxin-based cancer therapeutics) conducted under institutional oversight. VARL&apos;s molecular simulation and pathway analysis tools must not be used to increase the lethality or reduce the detectability of any toxic substance.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.7 Agricultural Bioweapons</h3>
              <p className="mt-3">
                You shall not use the API to develop, simulate, or optimize biological agents intended to damage or destroy agricultural crops, livestock, fisheries, or ecosystems. This includes using VARL&apos;s agricultural optimization endpoints or digital twin capabilities to model plant pathogens, animal diseases, or ecological disruptions for the purpose of causing economic harm, food supply disruption, or environmental destruction.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5.8 Surveillance via Biological Data</h3>
              <p className="mt-3">
                You shall not use biomarker data, genomic profiles, proteomic signatures, metabolomic patterns, or any other biological data processed through the VARL API to conduct unauthorized surveillance, discriminatory profiling, identification, tracking, or monitoring of individuals or populations. This includes using VARL&apos;s prediction engine to infer health conditions, genetic predispositions, or behavioral characteristics for the purpose of discrimination in employment, insurance, law enforcement, immigration, or any context prohibited by applicable anti-discrimination and data protection laws (including but not limited to GINA, GDPR Article 9, and the Universal Declaration on the Human Genome and Human Rights).
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>6. Dual-Use Research of Concern</h2>
              <p className="mt-4">
                VARL recognizes that legitimate scientific research may involve computational work that has dual-use potential — research that could be directly misapplied to pose a threat to public health, agriculture, the environment, or national security. Such research is not automatically prohibited, but it is subject to heightened scrutiny and additional controls.
              </p>
              <p className="mt-4">
                The following categories of API usage are automatically flagged for manual review by VARL&apos;s Biosecurity and Ethics Board before processing is permitted:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Simulations involving Select Agents and Toxins as defined by the U.S. Federal Select Agent Program, or equivalent lists maintained by other national authorities</li>
                <li className="list-disc">Digital twin construction or molecular pathway analysis involving pathogens classified at Biosafety Level 3 (BSL-3) or higher</li>
                <li className="list-disc">Gain-of-function modeling for any respiratory pathogen, regardless of stated research purpose</li>
                <li className="list-disc">Toxicology simulations involving Schedule 1, 2, or 3 chemicals under the Chemical Weapons Convention</li>
                <li className="list-disc">Genetic modification workflows targeting germline cells or heritable genetic changes in any organism</li>
                <li className="list-disc">Population-level biomarker screening or genomic analysis that could enable selective biological targeting</li>
                <li className="list-disc">Any simulation or analysis request that VARL&apos;s automated risk-scoring system flags as exceeding normal research parameters</li>
              </ul>
              <p className="mt-4">
                Users conducting dual-use research of concern must provide documented institutional approval (IRB, IBC, or equivalent), evidence of compliance with applicable national oversight frameworks (e.g., U.S. P3CO, EU Dual-Use Regulation 2021/821), and a risk-benefit analysis prior to API access being granted for the specific workflow in question.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7. Monitoring, Detection, and Enforcement</h2>
              <p className="mt-4">
                VARL employs multi-layered monitoring systems to detect and prevent misuse of the API. These systems operate continuously and are designed to identify patterns of use that are inconsistent with declared research purposes, indicative of prohibited activities, or suggestive of biosecurity risk.
              </p>
              <p className="mt-4">
                Monitoring capabilities include:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Automated anomaly detection using machine learning models trained to identify usage patterns associated with dual-use risk, including unusual query sequences involving pathogen genomics, toxin structure databases, or antimicrobial resistance markers</li>
                <li className="list-disc">Real-time risk scoring of all API requests, with requests exceeding configurable risk thresholds automatically queued for human review before execution</li>
                <li className="list-disc">Structured audit logging of all API interactions, including request metadata (endpoint, method, timestamp, response code, latency, authenticated user identifier, originating IP address) — retained for a minimum of seven years. Request payload contents are not stored in standard audit logs. For flagged requests under dual-use review, payload summaries (not raw data) are retained in access-restricted investigation logs accessible only to the Biosecurity and Ethics Board (see Section 9.2)</li>
                <li className="list-disc">Periodic review of aggregate usage patterns by VARL&apos;s internal security team and, where applicable, by independent third-party auditors</li>
                <li className="list-disc">Automated suspension of API access when high-confidence misuse indicators are detected, pending investigation</li>
              </ul>
              <p className="mt-4">
                Enforcement actions are graduated and may include: warning notifications, temporary suspension of access, permanent revocation of API credentials, notification of the user&apos;s institutional compliance office, referral to national law enforcement agencies, and referral to international bodies including the Organisation for the Prohibition of Chemical Weapons (OPCW) and the Biological Weapons Convention Implementation Support Unit.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.1 False Positive Resolution and Appeal Process</h3>
              <p className="mt-3">
                VARL acknowledges that automated monitoring systems may, in rare cases, produce false positive results — flagging or suspending legitimate research activity. The following safeguards are in place to protect users conducting lawful research:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Notification:</strong> If your API access is suspended due to automated risk detection, VARL will notify you at the email address associated with your account within 48 hours of the suspension, stating the general nature of the concern. The notification will not disclose specific details that could compromise ongoing security investigations or monitoring methodologies.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Written Appeal:</strong> You may submit a written appeal to <a href="mailto:api@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>api@varl.net</a> within 14 calendar days of receiving the suspension notification. Appeals should include any relevant documentation supporting the legitimacy of the flagged activity (e.g., IRB approvals, institutional authorization letters, research protocols).</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Review Timeline:</strong> Appeals are reviewed by VARL&apos;s Biosecurity and Ethics Board within 30 business days of receipt. Complex cases involving multi-jurisdictional regulatory considerations may require additional time; in such cases, VARL will provide a status update at the 30-day mark.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Reinstatement:</strong> If the suspension is determined to be a false positive, API access will be reinstated promptly and VARL will issue written confirmation of reinstatement. No record of the false positive will be used as a negative factor in future access evaluations.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Exclusions:</strong> Suspensions involving suspected violations of Section 5 (Biosecurity and Human Safety) that have been referred to law enforcement or national security authorities are excluded from this appeal process. In such cases, resolution is subject to the outcome of the external investigation.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>8. Reporting Obligations</h2>
              <p className="mt-4">
                If you become aware of or reasonably suspect any use of the VARL API that violates this Policy — including use by persons within your organization, your collaborators, or any third party who may have obtained access through your credentials — you are obligated to report such use to VARL immediately at <a href="mailto:security@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>security@varl.net</a>.
              </p>
              <p className="mt-4">
                VARL, in turn, maintains the following reporting obligations:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Suspected violations involving biological weapons, chemical weapons, or threats to national security are reported to relevant national authorities without prior notice to the user, as required or permitted by applicable law</li>
                <li className="list-disc">Suspected violations involving unauthorized human experimentation are reported to the appropriate institutional review board, national regulatory authority, and law enforcement</li>
                <li className="list-disc">VARL publishes an annual Transparency Report documenting the number of API access requests denied, credentials revoked, investigations initiated, and referrals made to external authorities, in aggregate and without identifying specific users except where legally required</li>
                <li className="list-disc">VARL cooperates fully with investigations conducted by law enforcement, regulatory agencies, and international treaty organizations, including providing relevant API logs and usage data pursuant to valid legal process</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9. Data Handling via API</h2>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9.1 Encryption and Isolation</h3>
              <p className="mt-3">
                All data transmitted to and from the VARL API is encrypted in transit using TLS 1.3 (or the highest protocol version supported by the connecting client) and encrypted at rest using AES-256. API request payloads containing biological data, genomic sequences, proteomic profiles, or patient-derived information are processed in logically isolated compute environments designed to prevent cross-tenant data access under normal operating conditions.
              </p>
              <p className="mt-4">
                These security measures apply to production systems. The following operational contexts operate under equivalent or substantially similar controls:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Encrypted backup replicas and disaster recovery environments, which are subject to the same encryption standards and access controls as production systems</li>
                <li className="list-disc">Authorized sub-processors engaged by VARL to provide infrastructure or ancillary services, which are contractually bound to maintain security measures no less protective than those described herein</li>
                <li className="list-disc">Temporary diagnostic copies created during incident investigation or support operations, which are subject to production-grade encryption, accessible only to authorized personnel under role-based access controls, and deleted within 48 hours of resolution</li>
                <li className="list-disc">Authorized VARL personnel with support, debugging, or operational access, who operate under strict role-based access controls, mandatory multi-factor authentication, and are bound by confidentiality obligations</li>
              </ul>
              <p className="mt-4">
                VARL implements commercially reasonable measures to maintain these security standards. No system can guarantee absolute security, and VARL does not warrant that its security measures will prevent every unauthorized access, disclosure, or breach. In the event of a security incident affecting API-transmitted data, VARL will follow its incident response procedures as described in the <Link href="/compliance" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Compliance</Link> page.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9.2 Data Categories and Retention</h3>
              <p className="mt-3">
                VARL classifies API-transmitted data into the following categories, each subject to distinct retention schedules:
              </p>
              <ul className="mt-3 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Raw Input Data:</strong> User-submitted biological data, genomic sequences, molecular structures, and other research inputs transmitted through API request payloads. Processed transiently and deleted from active production systems within 72 hours of processing completion, unless the user explicitly opts into extended retention for reproducibility purposes.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Derived Outputs:</strong> Simulation results, prediction outputs, digital twin models, and other computational products generated from Raw Input Data. Retained in association with the user&apos;s account for the duration of the account&apos;s active status. Deleted within 90 days of account closure or upon user request, subject to legal hold obligations.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Request Metadata:</strong> Structured operational data including endpoint, HTTP method, timestamp, response code, latency, authenticated user identifier, and originating IP address. Does not include request payload contents. Retained for 7 years for audit, compliance, and security investigation purposes.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Cached and Intermediate Data:</strong> Temporary computational artifacts, intermediate processing results, and session-scoped cache. Automatically purged upon processing completion or session expiration; not retained beyond the active computation lifecycle.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Backup Copies:</strong> Encrypted replicas of production data maintained for disaster recovery and business continuity purposes. Subject to the same retention schedules and access controls as the corresponding production data category. Backups are encrypted at rest and access-restricted to authorized infrastructure personnel.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Support and Debug Artifacts:</strong> Temporary diagnostic data created during incident investigation, troubleshooting, or authorized support operations. Deleted within 48 hours of resolution. Not used for any purpose other than resolving the specific incident.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Investigation Logs:</strong> For API requests flagged under the dual-use review process (Section 6), payload summaries — not raw payload data — are retained in access-restricted investigation logs, accessible only to the Biosecurity and Ethics Board, and deleted within 12 months of case closure.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Legal Hold Data:</strong> Data subject to a legal hold, active investigation, regulatory inquiry, or litigation preservation notice is retained until the hold is formally released, regardless of standard retention schedules.</li>
              </ul>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9.3 Regulatory Compliance and Data Processing Roles</h3>
              <p className="mt-3">
                For users processing protected health information (PHI) through the API, a HIPAA-compliant Business Associate Agreement (BAA) must be executed prior to data transmission. For users processing personal data subject to the GDPR, a Data Processing Agreement (DPA) must be in place. VARL will not process PHI or GDPR-regulated personal data through the API absent the appropriate agreement.
              </p>
              <p className="mt-4">
                In the context of API data processing:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Data Controller / Data Processor Roles:</strong> The user (or the user&apos;s organization) acts as the data controller for all personal data submitted through the API. VARL acts as a data processor, processing personal data solely on the controller&apos;s documented instructions and for the purposes specified in the applicable DPA or BAA.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">International Data Transfers:</strong> Where API data is transferred across national borders, VARL relies on Standard Contractual Clauses (SCCs) approved by the European Commission, the UK International Data Transfer Agreement (IDTA), or other legally recognized transfer mechanisms appropriate to the jurisdictions involved. Users may request a copy of the applicable transfer mechanism by contacting <a href="mailto:privacy@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>privacy@varl.net</a>.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Sub-Processors:</strong> VARL engages a limited number of sub-processors for infrastructure and ancillary services. A current list of sub-processors is available upon request. VARL provides at least 30 days&apos; advance notice before engaging a new sub-processor that will handle API-transmitted data, allowing users to object if the change is incompatible with their data protection obligations.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Breach Notification:</strong> In the event of a confirmed personal data breach involving API-transmitted data, VARL will notify the affected data controller without undue delay and in any event within 72 hours of becoming aware of the breach (in compliance with GDPR Article 33), or within 60 days (in compliance with the HIPAA Breach Notification Rule), whichever is applicable. Notification will include the nature of the breach, the categories of data affected, and the measures taken or proposed to address the breach.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Data Subject Rights:</strong> Where VARL receives a request from a data subject (e.g., access, rectification, erasure, portability) relating to personal data processed through the API, VARL will forward the request to the relevant data controller within 48 hours and provide reasonable technical assistance to enable the controller to fulfill the request within statutory timelines.</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>10. Liability and Indemnification</h2>
              <p className="mt-4">
                You are solely responsible for all activities conducted through the API using your credentials, whether or not such activities are authorized by you. VARL provides the API on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. API outputs — including simulation results, predictions, biomarker analyses, and digital twin models — are computational approximations derived from statistical models and should not be treated as experimentally validated findings, clinical endpoints, or regulatory-grade data without independent verification.
              </p>
              <p className="mt-4">
                You agree to indemnify, defend, and hold harmless VARL and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with: (a) your use of the API; (b) any data you transmit through the API; (c) any violation of this Policy, the Terms of Use, or any applicable law; (d) any allegation that your use of the API caused harm to a third party, including but not limited to harm resulting from biosecurity violations, unauthorized clinical use, or data misuse; or (e) any unauthorized use of the API through your credentials.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11. Termination and Revocation</h2>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11.1 Emergency Suspension</h3>
              <p className="mt-3">
                VARL may immediately suspend API access without prior notice in the following circumstances where delay would pose an unacceptable risk:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Detection of usage patterns that present an imminent biosecurity threat, active danger to human safety, or strong indicators of prohibited activity under Sections 4 and 5</li>
                <li className="list-disc">Confirmed or reasonably suspected compromise of API credentials, where continued access could enable unauthorized use</li>
                <li className="list-disc">A legally binding directive from a law enforcement, national security, or regulatory authority requiring immediate suspension of the account</li>
                <li className="list-disc">Circumstances in which continued access poses an immediate, demonstrable risk to VARL infrastructure, other users, or the public</li>
              </ul>
              <p className="mt-4">
                In the case of an emergency suspension, VARL will notify the account holder at the registered email address within 48 hours of the suspension, unless prohibited by law. The notice will describe the general nature of the concern. Users may exercise appeal rights under Section 7.1 where applicable.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11.2 Standard Termination for Cause</h3>
              <p className="mt-3">
                For violations that do not constitute an emergency under Section 11.1, VARL will follow a graduated process:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Written Notice:</strong> VARL will provide written notice to the account holder specifying the nature of the violation and the corrective action required.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Cure Period:</strong> The user has 30 calendar days from receipt of notice to cure the violation or provide a satisfactory remediation plan. VARL may extend this period at its reasonable discretion for complex compliance matters.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Termination:</strong> If the violation is not cured within the cure period, VARL may revoke API access by providing 14 calendar days&apos; advance written notice.</li>
              </ul>
              <p className="mt-4">
                Non-exhaustive grounds for standard termination include:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Violation of any provision of this Policy, particularly Sections 4, 5, and 6</li>
                <li className="list-disc">Failure to provide requested documentation regarding institutional oversight, regulatory compliance, or research authorization within a reasonable timeframe</li>
                <li className="list-disc">Non-payment of applicable fees or material breach of any supplemental agreement</li>
                <li className="list-disc">Persistent or repeated violations of technical usage standards (Section 2.1) after receiving written notice</li>
              </ul>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11.3 Voluntary Termination</h3>
              <p className="mt-3">
                You may terminate your API access at any time by providing written notice to <a href="mailto:api@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>api@varl.net</a>. Upon voluntary termination, data retention and deletion will proceed in accordance with Section 9.2.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11.4 Post-Termination Obligations</h3>
              <p className="mt-3">
                Upon termination or revocation (whether emergency, standard, or voluntary), you must immediately cease all use of the API, delete all API credentials in your possession, and certify in writing that you have done so within 14 calendar days. Termination does not release you from any obligations under this Policy that, by their nature, survive termination, including indemnification obligations, confidentiality requirements, data handling obligations, and liability for prior use.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12. Governing Law and Geographic Scope</h2>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12.1 Governing Law</h3>
              <p className="mt-3">
                This Policy shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12.2 Dispute Resolution</h3>
              <p className="mt-3">
                Any dispute arising out of or relating to this Policy that is not resolved through the dispute resolution procedures set forth in the <Link href="/terms" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Terms of Use</Link> shall be submitted to binding arbitration administered by the American Arbitration Association (AAA) in Wilmington, Delaware. Notwithstanding the foregoing, VARL retains the right to seek injunctive or equitable relief in any court of competent jurisdiction for violations involving biosecurity, intellectual property, or threats to public safety.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12.3 Geographic Scope and User Obligations</h3>
              <p className="mt-3">
                The VARL API is available to users worldwide, subject to applicable export controls and sanctions. This Policy references specific regulatory frameworks — including U.S. federal regulations (FDA, P3CO, GINA, HIPAA, export controls), European Union regulations (GDPR, EMA), and United Kingdom regulations (MHRA, IDTA) — as primary compliance baselines.
              </p>
              <p className="mt-4">
                Users accessing the API from jurisdictions outside the United States, European Union, and United Kingdom are responsible for identifying and complying with all local and national laws, regulations, and ethical standards applicable to their use of the API, including but not limited to:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Local biosafety and biosecurity regulations, including institutional and national biosafety committee approvals where required</li>
                <li className="list-disc">National data protection and privacy laws that may impose obligations different from or additional to those described in Section 9.3</li>
                <li className="list-disc">Export control and trade sanction regimes applicable to the user&apos;s jurisdiction, particularly regarding dual-use biological materials and technologies</li>
                <li className="list-disc">Local requirements for ethical review, informed consent, and institutional oversight of research involving human-derived biological data</li>
                <li className="list-disc">National and regional regulations governing artificial intelligence, algorithmic decision-making, and clinical decision support systems where the API is used in connection with healthcare applications</li>
              </ul>
              <p className="mt-4">
                Where a local law imposes a higher standard of protection than this Policy, the higher standard prevails for users in that jurisdiction. Where a conflict exists between this Policy and mandatory local law, the user must notify VARL at <a href="mailto:compliance@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>compliance@varl.net</a> before commencing or continuing use of the API. VARL may, at its discretion, establish jurisdiction-specific addenda to this Policy to address material regulatory differences.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>13. Contact</h2>
              <p className="mt-4">
                For questions, concerns, or reports related to this API Usage Policy:
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <p><strong className="text-gray-900 dark:text-gray-100">VARL — API Governance</strong></p>
                <p>Email: <a href="mailto:api@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>api@varl.net</a></p>
                <p>Security Reports: <a href="mailto:security@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>security@varl.net</a></p>
                <p>General Legal: <a href="mailto:legal@varl.net" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>legal@varl.net</a></p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-gray-200 pt-8 dark:border-neutral-700">
              <p>
                By accessing or using the VARL API, you acknowledge that you have read, understood, and agree to be bound by this API Usage Policy. If you do not agree to this Policy, you must not access or use the API. If you are accessing the API on behalf of an organization, you represent and warrant that you have the authority to bind that organization to this Policy.
              </p>
            </section>

          </div>
        </div>
      </main>

      <MobileNavWrapper />
      <Footer />
    </div>
  );
}
