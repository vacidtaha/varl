import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-8 py-24">

          <h1 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Effective Date: February 1, 2026 &nbsp;·&nbsp; Last Updated: February 14, 2026
          </p>

          <div className="mt-16 flex flex-col gap-16 text-base leading-relaxed text-gray-600 dark:text-gray-400">

            {/* 1 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>1. Introduction</h2>
              <p className="mt-4">
                VARL Inc. (&ldquo;VARL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy and security of all individuals and entities that interact with our platform, website, API, services, and related products (collectively, the &ldquo;Services&rdquo;). This Privacy Policy describes how we collect, use, store, disclose, and protect your personal information when you access or use our Services, visit our website at varl.com, or otherwise engage with us.
              </p>
              <p className="mt-4">
                By accessing or using any part of our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with any provision of this policy, you must discontinue use of the Services immediately. This policy applies to all users, including but not limited to individual researchers, institutional partners, API consumers, investors, job applicants, and casual visitors.
              </p>
              <p className="mt-4">
                This Privacy Policy is governed by and shall be construed in accordance with the laws of the State of Delaware, United States, and, where applicable, the General Data Protection Regulation (EU) 2016/679 (&ldquo;GDPR&rdquo;), the California Consumer Privacy Act (&ldquo;CCPA&rdquo;), the Health Insurance Portability and Accountability Act (&ldquo;HIPAA&rdquo;), and other applicable data protection legislation in jurisdictions where we operate.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2. Information We Collect</h2>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2.1 Information You Provide Directly</h3>
              <p className="mt-3">
                When you create an account, submit a form, request API access, apply for a position, or otherwise communicate with us, you may provide us with the following categories of personal information:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Full legal name, title, and professional affiliation</li>
                <li className="list-disc">Email address, phone number, and mailing address</li>
                <li className="list-disc">Employer or institutional name, department, and role</li>
                <li className="list-disc">Payment and billing information (processed through PCI DSS-compliant third-party processors)</li>
                <li className="list-disc">Government-issued identification numbers where required by law or regulation</li>
                <li className="list-disc">Research proposals, project descriptions, and technical specifications submitted through our partnership or API access request forms</li>
                <li className="list-disc">Correspondence, feedback, support tickets, and any other information you voluntarily transmit to us</li>
              </ul>

              <h3 className="mt-8 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2.2 Information Collected Automatically</h3>
              <p className="mt-3">
                When you interact with our Services, we automatically collect certain technical and usage information through cookies, server logs, and similar technologies, including but not limited to:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">IP address, browser type and version, operating system, and device identifiers</li>
                <li className="list-disc">Pages visited, time spent on each page, click patterns, and navigation paths</li>
                <li className="list-disc">Referring URL, search terms used to reach our website, and exit pages</li>
                <li className="list-disc">API call metadata, including endpoints accessed, request timestamps, response codes, and usage volume</li>
                <li className="list-disc">Geolocation data derived from IP address (city/region level, not precise)</li>
                <li className="list-disc">Session identifiers and authentication tokens (encrypted)</li>
              </ul>

              <h3 className="mt-8 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2.3 Information from Third Parties</h3>
              <p className="mt-3">
                We may receive personal information about you from third parties, including identity verification services, institutional partners who refer you to our platform, background check providers (for employment purposes only), and publicly available databases such as academic publication records and professional profiles.
              </p>

              <h3 className="mt-8 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2.4 Sensitive and Regulated Data</h3>
              <p className="mt-3">
                In the course of providing our Services, particularly through our API and digital twin platform, users may upload or transmit data that includes protected health information (&ldquo;PHI&rdquo;), genomic data, or other sensitive biological data. Such data is subject to additional protections as described in Section 7 of this policy and is processed exclusively in accordance with applicable regulatory frameworks, including HIPAA, GDPR Article 9, and relevant national biosecurity regulations.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3. How We Use Your Information</h2>
              <p className="mt-4">
                We process your personal information for the following purposes, each of which constitutes a legitimate interest, contractual necessity, or is performed with your explicit consent:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Service Delivery:</strong> To provide, maintain, and improve our platform, process API requests, run simulations, deliver results, and fulfill our contractual obligations to you or your organization.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Account Management:</strong> To create and manage your account, authenticate your identity, process access requests, and maintain records of your service usage.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Communication:</strong> To respond to your inquiries, send service-related notices, provide technical support, and deliver updates about changes to our Services or policies.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Security and Compliance:</strong> To detect, prevent, and investigate fraud, unauthorized access, security breaches, and other potentially illegal or prohibited activities. To comply with applicable laws, regulations, legal processes, and enforceable governmental requests.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Research and Development:</strong> To conduct internal research, analyze usage patterns, improve our algorithms, and develop new features and services. Aggregated and de-identified data may be used for these purposes.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Legal Obligations:</strong> To comply with tax, accounting, reporting, and audit requirements, and to establish, exercise, or defend legal claims.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Employment:</strong> To evaluate job applications, conduct background checks (with consent), and manage the recruitment process.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>4. Legal Basis for Processing (GDPR)</h2>
              <p className="mt-4">
                For individuals in the European Economic Area, the United Kingdom, and Switzerland, our legal bases for processing personal data are:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Contractual Necessity (Article 6(1)(b)):</strong> Processing necessary to perform our contract with you or to take steps at your request before entering into a contract.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Legitimate Interest (Article 6(1)(f)):</strong> Processing necessary for our legitimate interests, including platform security, fraud prevention, service improvement, and direct marketing, provided such interests are not overridden by your fundamental rights.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Consent (Article 6(1)(a)):</strong> Where you have given clear, affirmative consent to the processing of your personal data for specific purposes. You may withdraw consent at any time.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Legal Obligation (Article 6(1)(c)):</strong> Processing necessary to comply with a legal obligation to which we are subject.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Vital Interests (Article 6(1)(d)):</strong> In rare circumstances, processing necessary to protect the vital interests of you or another natural person.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5. Information Sharing and Disclosure</h2>
              <p className="mt-4">
                VARL does not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following limited circumstances:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Service Providers:</strong> We engage vetted third-party service providers to perform functions on our behalf, including cloud infrastructure (data hosting and computation), payment processing, email delivery, analytics, and customer support. These providers are contractually bound to process your data only as instructed by us and to maintain appropriate security measures.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Legal Requirements:</strong> We may disclose your information if required to do so by law, regulation, legal process, or governmental request, or if we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or other similar event, your personal information may be transferred as part of the transaction. We will notify you via prominent notice on our website of any change in ownership or uses of your personal information.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so for a specific purpose.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Aggregated Data:</strong> We may share aggregated, de-identified, or anonymized data that cannot reasonably be used to identify you. Such data is not subject to this Privacy Policy.</li>
              </ul>
              <p className="mt-4">
                Under no circumstances will VARL share, disclose, or provide access to partner-specific proprietary data, biological datasets, simulation results, or research outputs to any third party without the express written authorization of the data owner. This includes affiliated entities, investors, and governmental bodies unless compelled by valid legal process.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>6. Data Retention</h2>
              <p className="mt-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements. Specific retention periods are as follows:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Account Data:</strong> Retained for the duration of your active account plus 3 years following account closure or last activity, whichever is later.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">API Usage Logs:</strong> Retained for 24 months from the date of the request, unless a longer retention period is required by law or regulation.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Financial Records:</strong> Retained for 7 years in accordance with applicable tax and accounting regulations.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Employment Applications:</strong> Retained for 2 years following the conclusion of the recruitment process, or longer if required by applicable employment law.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Research and Biological Data:</strong> Retained in accordance with the terms of the applicable Data Processing Agreement (DPA) or Business Associate Agreement (BAA). In the absence of such agreement, data is retained for the duration of the research engagement plus 5 years.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Cookie and Analytics Data:</strong> Retained for a maximum of 13 months from collection.</li>
              </ul>
              <p className="mt-4">
                Upon expiration of the applicable retention period, personal information is securely deleted or irreversibly anonymized. You may request earlier deletion subject to the provisions of Section 8.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7. Security of Biological and Health Data</h2>
              <p className="mt-4">
                VARL processes certain categories of data that are subject to heightened regulatory protection, including protected health information (PHI) under HIPAA, special categories of personal data under GDPR Article 9, and genomic data subject to the Genetic Information Nondiscrimination Act (GINA) and equivalent international legislation. The following additional safeguards apply to such data:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">All biological and health data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3.</li>
                <li className="list-disc">Access to sensitive data is governed by role-based access controls (RBAC) with mandatory multi-factor authentication.</li>
                <li className="list-disc">All access events are logged in immutable audit trails that are retained for a minimum of 6 years.</li>
                <li className="list-disc">Biological data is processed in isolated compute environments that are logically and, where required, physically separated from other workloads.</li>
                <li className="list-disc">De-identification and pseudonymization techniques are applied wherever possible to minimize re-identification risk.</li>
                <li className="list-disc">VARL maintains a comprehensive incident response plan specifically designed for biological data breaches, with notification timelines that meet or exceed regulatory requirements (72 hours under GDPR, 60 days under HIPAA).</li>
                <li className="list-disc">Partners processing PHI through our platform are required to execute a HIPAA-compliant Business Associate Agreement prior to data transmission.</li>
              </ul>
              <p className="mt-4">
                VARL undergoes annual SOC 2 Type II audits and maintains ISO 27001 certification for its information security management system. Audit reports are available to partners and regulators upon request under NDA.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>8. Your Rights</h2>
              <p className="mt-4">
                Depending on your jurisdiction, you may have the following rights with respect to your personal information:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right of Access:</strong> You may request a copy of the personal data we hold about you, including the purposes of processing and the categories of recipients.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Rectification:</strong> You may request correction of inaccurate or incomplete personal data.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Erasure:</strong> You may request deletion of your personal data, subject to our legal obligations and legitimate interests. Certain data cannot be deleted where retention is required by law.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Restriction:</strong> You may request that we restrict the processing of your personal data in certain circumstances.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Data Portability:</strong> You may request to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Object:</strong> You may object to processing based on legitimate interests, including profiling and direct marketing.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of processing conducted prior to withdrawal.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority in your jurisdiction.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <span className="text-gray-900 dark:text-gray-100">privacy@varl.com</span>. We will respond to all legitimate requests within 30 days. We may request verification of your identity before processing your request.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9. International Data Transfers</h2>
              <p className="mt-4">
                VARL operates globally and may transfer your personal information to countries other than the one in which you reside. When we transfer personal data from the European Economic Area, United Kingdom, or Switzerland to countries that have not received an adequacy decision from the European Commission, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission, supplementary measures where required, and, where applicable, binding corporate rules.
              </p>
              <p className="mt-4">
                For transfers to the United States, VARL relies on the EU-U.S. Data Privacy Framework and, where that framework does not apply, SCCs with additional technical and organizational safeguards. You may request a copy of the applicable transfer mechanism by contacting privacy@varl.com.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>10. Cookies and Tracking Technologies</h2>
              <p className="mt-4">
                Our website uses cookies and similar technologies to enhance your experience, analyze usage patterns, and deliver relevant content. We use the following categories of cookies:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Strictly Necessary:</strong> Required for the website to function. These cannot be disabled. They include session management, authentication, and security cookies.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Analytics:</strong> Help us understand how visitors interact with our website by collecting and reporting aggregated information. We use these to improve site performance and content.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Functional:</strong> Enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
              </ul>
              <p className="mt-4">
                We do not use advertising or marketing cookies. We do not participate in cross-site tracking, real-time bidding, or behavioral advertising networks. You may manage your cookie preferences through your browser settings or through the cookie preference center accessible from any page of our website. For more details, please see our <a href="/cookies" className="underline text-gray-900 dark:text-gray-100">Cookie Policy</a>.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11. Children&apos;s Privacy</h2>
              <p className="mt-4">
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18 without verification of parental consent, we will take steps to delete that information immediately. If you believe we have inadvertently collected such information, please contact us at privacy@varl.com.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12. California Privacy Rights (CCPA/CPRA)</h2>
              <p className="mt-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA):
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">The right to know what personal information we collect, use, disclose, and sell.</li>
                <li className="list-disc">The right to delete personal information we have collected from you, subject to certain exceptions.</li>
                <li className="list-disc">The right to opt out of the sale or sharing of personal information. VARL does not sell personal information.</li>
                <li className="list-disc">The right to correct inaccurate personal information.</li>
                <li className="list-disc">The right to limit the use and disclosure of sensitive personal information.</li>
                <li className="list-disc">The right to non-discrimination for exercising your privacy rights.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@varl.com or submit a request through our website. We will verify your identity before processing your request and respond within 45 days.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>13. Third-Party Links</h2>
              <p className="mt-4">
                Our Services may contain links to third-party websites, services, or applications that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We strongly advise you to review the privacy policy of every site you visit. The inclusion of a link does not imply endorsement.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>14. Changes to This Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you by posting a prominent notice on our website and updating the &ldquo;Last Updated&rdquo; date at the top of this page. For material changes that significantly affect your rights, we will provide additional notice via email to the address associated with your account. Your continued use of the Services after the effective date of any updated Privacy Policy constitutes your acceptance of the revised terms.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>15. Limitation of Liability</h2>
              <p className="mt-4">
                To the maximum extent permitted by applicable law, VARL shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services, any data breach caused by circumstances beyond our reasonable control, or any unauthorized access to your data resulting from your failure to maintain the confidentiality of your account credentials. Our total liability for any claim arising under this Privacy Policy shall not exceed the amount you have paid to VARL in the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>16. Governing Law and Dispute Resolution</h2>
              <p className="mt-4">
                This Privacy Policy shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising out of or in connection with this Privacy Policy shall be submitted to binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Wilmington, Delaware, and the language of the arbitration shall be English. The arbitrator&apos;s decision shall be final and binding, and judgment may be entered thereon in any court of competent jurisdiction.
              </p>
              <p className="mt-4">
                Nothing in this section shall prevent either party from seeking injunctive or other equitable relief from a court of competent jurisdiction where necessary to protect its rights or property pending the outcome of arbitration.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>17. Contact Information</h2>
              <p className="mt-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Data Protection Officer</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc. — Legal Department</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Email</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">privacy@varl.com</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Mailing Address</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc., 1209 Orange Street, Wilmington, DE 19801, United States</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>EU Representative</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL EU Representative, to be appointed pursuant to GDPR Article 27</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-gray-200 pt-8 dark:border-neutral-800">
              <p className="text-sm text-gray-400">
                This Privacy Policy constitutes the entire agreement between you and VARL with respect to the subject matter hereof and supersedes all prior or contemporaneous communications, representations, or agreements, whether oral or written, with respect to such subject matter.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
