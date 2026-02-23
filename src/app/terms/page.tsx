import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-8 py-24">

          <h1 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Effective Date: February 1, 2026 &nbsp;·&nbsp; Last Updated: February 14, 2026
          </p>

          <div className="mt-16 flex flex-col gap-16 text-base leading-relaxed text-gray-600 dark:text-gray-400">

            {/* 1 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>1. Acceptance of Terms</h2>
              <p className="mt-4">
                These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and VARL Inc., a Delaware corporation (&ldquo;VARL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), governing your access to and use of our website at varl.com, application programming interface (&ldquo;API&rdquo;), digital twin platform, simulation engine, data services, and all related tools, documentation, and content (collectively, the &ldquo;Services&rdquo;).
              </p>
              <p className="mt-4">
                By accessing or using any part of the Services, you represent and warrant that you are at least 18 years of age, have the legal capacity to enter into this agreement, and agree to be bound by these Terms in their entirety. If you are accessing the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms, and references to &ldquo;you&rdquo; shall include both you individually and the organization you represent.
              </p>
              <p className="mt-4">
                If you do not agree to these Terms, you must immediately discontinue use of the Services. Your continued use of the Services following any modification to these Terms constitutes your acceptance of such modifications.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2. Description of Services</h2>
              <p className="mt-4">
                VARL provides an artificial intelligence platform for biological systems analysis, including but not limited to digital twin construction and simulation, molecular pathway analysis, biomarker detection and monitoring, drug target identification, predictive disease modeling, agricultural system optimization, and associated data services.
              </p>
              <p className="mt-4">
                The Services are provided in multiple tiers, including free evaluation access, paid subscription plans, enterprise licensing, and custom partnership arrangements. The specific features, capabilities, limitations, and pricing applicable to your use are determined by the service tier and any supplemental agreements executed between you and VARL.
              </p>
              <p className="mt-4">
                VARL reserves the right to modify, update, expand, or discontinue any aspect of the Services at any time, with or without notice, and without liability to you. We will make commercially reasonable efforts to provide advance notice of material changes to the Services.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3. Account Registration and Security</h2>
              <p className="mt-4">
                Certain features of the Services require you to create an account. When registering, you agree to provide accurate, current, and complete information and to update such information promptly as necessary. You are solely responsible for maintaining the confidentiality of your account credentials, including your API keys, and for all activities that occur under your account.
              </p>
              <p className="mt-4">
                You agree to notify VARL immediately upon becoming aware of any unauthorized use of your account or any other breach of security. VARL shall not be liable for any loss or damage arising from your failure to maintain the security of your account credentials.
              </p>
              <p className="mt-4">
                VARL reserves the right to suspend or terminate any account at any time if we reasonably believe that the account has been compromised, is being used in violation of these Terms, or poses a risk to the security or integrity of the Services or other users.
              </p>
              <p className="mt-4">
                You may not create multiple accounts for the purpose of circumventing usage limits, access restrictions, or other controls implemented by VARL. You may not share, transfer, or assign your account credentials to any other individual or entity without VARL&apos;s prior written consent.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>4. API Access and Usage</h2>
              <p className="mt-4">
                Access to the VARL API is granted on a case-by-case basis following approval of an API Access Request. API keys are confidential credentials that must be stored securely and must not be embedded in client-side code, shared publicly, or transmitted through insecure channels.
              </p>
              <p className="mt-4">
                You agree to comply with all rate limits, usage quotas, and technical restrictions applicable to your API access tier. Exceeding these limits may result in throttling, temporary suspension, or permanent revocation of your API access.
              </p>
              <p className="mt-4">
                You may not use the API to:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Build competing products or services that substantially replicate VARL&apos;s core functionality</li>
                <li className="list-disc">Reverse-engineer, decompile, or attempt to extract the source code, algorithms, or model weights underlying the API</li>
                <li className="list-disc">Scrape, harvest, or systematically download data from the API beyond what is necessary for your approved use case</li>
                <li className="list-disc">Redistribute, sublicense, or resell API access or outputs to third parties without VARL&apos;s prior written authorization</li>
                <li className="list-disc">Circumvent or attempt to circumvent authentication mechanisms, rate limits, or access controls</li>
                <li className="list-disc">Use the API in any manner that could damage, disable, overburden, or impair the Services</li>
              </ul>
              <p className="mt-4">
                VARL monitors API usage for compliance, security, and performance purposes. All API calls are logged and subject to audit. VARL reserves the right to revoke API access immediately and without prior notice if a violation of these Terms is detected or reasonably suspected.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5. Permitted Use</h2>
              <p className="mt-4">
                Subject to these Terms, VARL grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal research, development, and operational purposes, or as otherwise specified in a separate written agreement between you and VARL.
              </p>
              <p className="mt-4">
                You may use outputs generated by the Services (including simulation results, predictions, and analyses) in your own research, publications, and internal reports, provided that you:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc">Attribute VARL as the computational platform used to generate the outputs, where appropriate</li>
                <li className="list-disc">Do not misrepresent outputs as independently generated or experimentally validated findings unless such validation has been independently performed</li>
                <li className="list-disc">Comply with all applicable laws, regulations, and institutional review requirements</li>
                <li className="list-disc">Do not use outputs in any manner that could cause harm to individuals, populations, ecosystems, or public safety</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>6. Prohibited Conduct</h2>
              <p className="mt-4">
                You agree not to engage in any of the following activities in connection with the Services:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Biosecurity Violations:</strong> Using the Services to design, simulate, or facilitate the development of biological agents, toxins, pathogens, or any substance intended to cause harm to human, animal, or plant health.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Weapons Development:</strong> Using the Services in connection with the development, production, or deployment of chemical, biological, radiological, or nuclear weapons, or any delivery systems therefor.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Surveillance and Profiling:</strong> Using biomarker data, genomic profiles, or predictive outputs to conduct unauthorized surveillance, discriminatory profiling, or invasive monitoring of individuals or populations.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Unauthorized Clinical Use:</strong> Deploying outputs of the Services as the sole basis for clinical diagnosis, treatment decisions, or patient care without appropriate regulatory clearance and professional medical oversight.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Data Misuse:</strong> Uploading, processing, or transmitting data through the Services that you do not have the legal right to use, or processing personal data in violation of applicable data protection laws.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Interference:</strong> Attempting to gain unauthorized access to any portion of the Services, other user accounts, or computer systems or networks connected to the Services through hacking, password mining, or any other means.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Fraud:</strong> Providing false or misleading information in your account registration, API access request, or any other communication with VARL.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Circumvention:</strong> Attempting to bypass, disable, or interfere with any security feature, access control, or usage limitation of the Services.</li>
              </ul>
              <p className="mt-4">
                Violation of any of the foregoing may result in immediate termination of your access to the Services, legal action, and referral to appropriate law enforcement or regulatory authorities.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7. Intellectual Property Rights</h2>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.1 VARL&apos;s Intellectual Property</h3>
              <p className="mt-3">
                The Services, including all software, algorithms, machine learning models, data structures, APIs, documentation, user interface designs, trademarks, logos, and all other materials (collectively, &ldquo;VARL IP&rdquo;), are and shall remain the exclusive property of VARL Inc. and its licensors. Nothing in these Terms grants you any right, title, or interest in or to the VARL IP, except for the limited license expressly granted in Section 5.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.2 Your Data</h3>
              <p className="mt-3">
                You retain all ownership rights in any data you upload, transmit, or input into the Services (&ldquo;User Data&rdquo;). By using the Services, you grant VARL a limited, non-exclusive, royalty-free license to process, store, and analyze User Data solely for the purpose of providing the Services to you. This license terminates upon deletion of your User Data or termination of your account, subject to our data retention obligations.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.3 Output Ownership</h3>
              <p className="mt-3">
                Outputs generated by the Services using your User Data (such as simulation results, predictions, and analyses) are considered derivative works. Subject to VARL&apos;s underlying intellectual property rights in the algorithms and models that generated such outputs, you may use these outputs in accordance with Section 5. VARL retains all rights in the methodologies, models, and systems used to produce the outputs.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.4 Feedback</h3>
              <p className="mt-3">
                If you provide VARL with any feedback, suggestions, ideas, or improvements relating to the Services (&ldquo;Feedback&rdquo;), you hereby assign to VARL all right, title, and interest in and to such Feedback and agree that VARL may use and incorporate such Feedback into the Services without restriction, compensation, or obligation to you.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>8. Payment and Billing</h2>
              <p className="mt-4">
                If your use of the Services requires payment, you agree to pay all applicable fees in accordance with the pricing terms presented to you at the time of purchase or as set forth in a separate order form or subscription agreement. All fees are quoted in United States dollars unless otherwise specified.
              </p>
              <p className="mt-4">
                Fees are non-refundable except as expressly stated in a written agreement between you and VARL or as required by applicable law. VARL reserves the right to change its pricing at any time, provided that changes to subscription fees will not take effect until the next billing cycle following notice of the change.
              </p>
              <p className="mt-4">
                Failure to pay any amount when due may result in suspension or termination of your access to the Services. You are responsible for all taxes applicable to your purchase of the Services, excluding taxes based on VARL&apos;s net income.
              </p>
              <p className="mt-4">
                For enterprise and custom pricing arrangements, the terms specified in the applicable order form or master service agreement shall control to the extent they conflict with these Terms.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9. Confidentiality</h2>
              <p className="mt-4">
                Each party acknowledges that in the course of the relationship governed by these Terms, it may receive confidential information from the other party (&ldquo;Confidential Information&rdquo;). Confidential Information includes, without limitation, business plans, technical data, product roadmaps, pricing information, customer lists, research data, trade secrets, and any information designated as confidential.
              </p>
              <p className="mt-4">
                The receiving party agrees to: (a) hold the disclosing party&apos;s Confidential Information in strict confidence; (b) not disclose such Confidential Information to any third party without the prior written consent of the disclosing party; (c) use such Confidential Information solely for the purposes contemplated by these Terms; and (d) protect such Confidential Information with at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.
              </p>
              <p className="mt-4">
                Confidential Information does not include information that: (a) is or becomes publicly available through no fault of the receiving party; (b) was known to the receiving party prior to disclosure; (c) is independently developed by the receiving party without use of or reference to the disclosing party&apos;s Confidential Information; or (d) is disclosed pursuant to a valid order of a court or governmental authority, provided that the receiving party gives the disclosing party prompt written notice of such order and cooperates in any effort to obtain a protective order.
              </p>
              <p className="mt-4">
                The obligations of confidentiality set forth in this section shall survive for a period of five (5) years following the termination of your access to the Services, or for so long as the Confidential Information remains a trade secret under applicable law, whichever is longer.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>10. Data Processing and Privacy</h2>
              <p className="mt-4">
                Your use of the Services is subject to VARL&apos;s <a href="/privacy" className="underline text-gray-900 dark:text-gray-100">Privacy Policy</a>, which is incorporated into these Terms by reference. By using the Services, you consent to the collection, processing, and storage of your information as described in the Privacy Policy.
              </p>
              <p className="mt-4">
                If your use of the Services involves the processing of personal data on behalf of third parties, you and VARL shall execute a Data Processing Agreement (&ldquo;DPA&rdquo;) that complies with applicable data protection laws, including the GDPR and CCPA. The DPA shall be supplementary to these Terms and shall prevail in the event of conflict with respect to data processing matters.
              </p>
              <p className="mt-4">
                If your use involves protected health information as defined under HIPAA, a Business Associate Agreement (&ldquo;BAA&rdquo;) must be executed prior to any transmission of PHI through the Services. Use of the Services for PHI processing without an executed BAA is strictly prohibited.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11. Term and Termination</h2>
              <p className="mt-4">
                These Terms are effective upon your first access to the Services and remain in effect until terminated by either party. You may terminate your use of the Services at any time by closing your account and ceasing all use of the Services.
              </p>
              <p className="mt-4">
                VARL may terminate or suspend your access to the Services at any time, with or without cause, and with or without notice. Grounds for termination include, without limitation: violation of these Terms, non-payment of fees, inactivity exceeding 12 months, suspected fraudulent or harmful activity, or circumstances where continued access poses a risk to VARL, other users, or the public.
              </p>
              <p className="mt-4">
                Upon termination: (a) your license to access and use the Services shall immediately cease; (b) you must promptly delete all copies of VARL&apos;s Confidential Information in your possession; (c) any outstanding payment obligations shall become immediately due; and (d) VARL shall retain your User Data for the period specified in our Privacy Policy, after which it will be deleted or anonymized.
              </p>
              <p className="mt-4">
                The following sections shall survive termination: Sections 6 (Prohibited Conduct), 7 (Intellectual Property Rights), 8 (Payment, to the extent of outstanding obligations), 9 (Confidentiality), 12 (Disclaimer of Warranties), 13 (Limitation of Liability), 14 (Indemnification), 16 (Governing Law), and 17 (Dispute Resolution).
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>12. Disclaimer of Warranties</h2>
              <p className="mt-4">
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. VARL SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                VARL DOES NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, THAT THE RESULTS OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE, OR THAT ANY ERRORS IN THE SERVICES WILL BE CORRECTED.
              </p>
              <p className="mt-4">
                NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM VARL OR THROUGH THE SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THESE TERMS.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>13. Limitation of Liability</h2>
              <p className="mt-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VARL, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, SUCCESSORS, OR ASSIGNS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, DATA, USE, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF OR INABILITY TO USE THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY AND WHETHER OR NOT VARL HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-4">
                VARL&apos;S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO VARL DURING THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED UNITED STATES DOLLARS ($100.00).
              </p>
              <p className="mt-4">
                THE LIMITATIONS IN THIS SECTION SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY AND TO THE FULLEST EXTENT PERMITTED BY LAW.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>14. Indemnification</h2>
              <p className="mt-4">
                You agree to indemnify, defend, and hold harmless VARL and its officers, directors, employees, agents, affiliates, successors, and assigns from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees and expert witness fees) arising out of or in connection with: (a) your use of the Services; (b) your User Data or any data you process through the Services; (c) your violation of these Terms or any applicable law, regulation, or third-party right; (d) any claim that your use of the Services caused damage to a third party; or (e) any unauthorized use of the Services through your account.
              </p>
              <p className="mt-4">
                VARL reserves the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification by you, and you agree to cooperate with our defense of such claims. You agree not to settle any such claim without VARL&apos;s prior written consent.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>15. Export Compliance</h2>
              <p className="mt-4">
                You agree to comply with all applicable export and re-export control laws and regulations, including the Export Administration Regulations (EAR) maintained by the U.S. Department of Commerce, trade and economic sanctions maintained by the Treasury Department&apos;s Office of Foreign Assets Control (OFAC), and the International Traffic in Arms Regulations (ITAR) maintained by the Department of State.
              </p>
              <p className="mt-4">
                You represent and warrant that you are not located in, or a national or resident of, any country that is subject to a U.S. government embargo, and that you are not listed on any U.S. government list of prohibited or restricted parties. You agree not to export, re-export, or transfer any VARL technology or technical data to any prohibited country, entity, or person.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>16. Governing Law</h2>
              <p className="mt-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply to these Terms.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>17. Dispute Resolution</h2>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>17.1 Mandatory Arbitration</h3>
              <p className="mt-3">
                Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved exclusively through final and binding arbitration administered by the American Arbitration Association (&ldquo;AAA&rdquo;) in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted in Wilmington, Delaware, in the English language, by a single arbitrator with expertise in technology and intellectual property law.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>17.2 Class Action Waiver</h3>
              <p className="mt-3">
                YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION AGAINST VARL.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>17.3 Equitable Relief</h3>
              <p className="mt-3">
                Notwithstanding the foregoing, either party may seek injunctive or other equitable relief from any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights, confidentiality obligations, or data security requirements.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>18. Modifications to Terms</h2>
              <p className="mt-4">
                VARL reserves the right to modify these Terms at any time. We will notify you of material changes by posting a notice on our website, updating the &ldquo;Last Updated&rdquo; date, and, for material changes affecting paid services, by sending notice to the email address associated with your account at least thirty (30) days before the changes take effect.
              </p>
              <p className="mt-4">
                Your continued use of the Services after the effective date of any modified Terms constitutes your acceptance of the modified Terms. If you do not agree to the modified Terms, you must discontinue use of the Services before the changes take effect.
              </p>
            </section>

            {/* 19 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19. General Provisions</h2>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.1 Entire Agreement</h3>
              <p className="mt-3">
                These Terms, together with the Privacy Policy, Cookie Policy, Disclaimer, and any applicable order forms, DPAs, BAAs, or supplemental agreements, constitute the entire agreement between you and VARL with respect to the subject matter hereof and supersede all prior or contemporaneous communications, whether oral or written.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.2 Severability</h3>
              <p className="mt-3">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable while preserving its original intent.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.3 Waiver</h3>
              <p className="mt-3">
                The failure of VARL to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by VARL.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.4 Assignment</h3>
              <p className="mt-3">
                You may not assign or transfer these Terms or any rights or obligations hereunder without VARL&apos;s prior written consent. VARL may assign these Terms without restriction. Any attempted assignment in violation of this section shall be null and void.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.5 Force Majeure</h3>
              <p className="mt-3">
                VARL shall not be liable for any failure or delay in performance of its obligations under these Terms caused by circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemic, epidemic, war, terrorism, civil unrest, government action, labor disputes, power failures, internet or telecommunications failures, or cyberattacks.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>19.6 Notices</h3>
              <p className="mt-3">
                All notices required or permitted under these Terms shall be in writing and shall be deemed given when delivered personally, sent by certified mail (return receipt requested), or sent by email to: (a) for notices to VARL, legal@varl.com; (b) for notices to you, the email address associated with your account.
              </p>
            </section>

            {/* 20 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>20. Contact Information</h2>
              <p className="mt-4">
                For questions regarding these Terms of Use, please contact:
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-8 dark:bg-neutral-800">
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Legal Department</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc.</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Email</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">legal@varl.com</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Mailing Address</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc., 1209 Orange Street, Wilmington, DE 19801, United States</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-gray-200 pt-8 dark:border-neutral-800">
              <p className="text-sm text-gray-400">
                By using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use in their entirety. These Terms were last reviewed and approved by VARL&apos;s legal counsel on February 14, 2026.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
