import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-8 py-24">

          <h1 className="text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Effective Date: February 1, 2026 &nbsp;·&nbsp; Last Updated: February 14, 2026
          </p>

          <div className="mt-16 flex flex-col gap-16 text-base leading-relaxed text-gray-600 dark:text-gray-400">

            {/* 1 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>1. Introduction</h2>
              <p className="mt-4">
                This Cookie Policy explains how VARL Inc. (&ldquo;VARL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies when you visit our website at varl.com, use our platform, or interact with our Services. This policy should be read in conjunction with our <a href="/privacy" className="underline text-gray-900 dark:text-gray-100">Privacy Policy</a> and <a href="/terms" className="underline text-gray-900 dark:text-gray-100">Terms of Use</a>.
              </p>
              <p className="mt-4">
                By continuing to use our website after being presented with the cookie notice, you consent to the use of cookies as described in this policy. You may withdraw your consent or modify your preferences at any time through the methods described in Section 7.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2. What Are Cookies</h2>
              <p className="mt-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, to provide information to site owners, and to improve the user experience. Cookies may be set by the website you are visiting (&ldquo;first-party cookies&rdquo;) or by third parties whose services the website uses (&ldquo;third-party cookies&rdquo;).
              </p>
              <p className="mt-4">
                In addition to cookies, we may use similar technologies including web beacons (also known as pixel tags or clear GIFs), local storage objects, and device fingerprinting techniques. References to &ldquo;cookies&rdquo; in this policy include these similar technologies unless otherwise specified.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3. Types of Cookies We Use</h2>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.1 Strictly Necessary Cookies</h3>
              <p className="mt-3">
                These cookies are essential for the operation of our website and Services. They enable core functionality such as page navigation, secure area access, authentication, session management, and load balancing. Without these cookies, the Services cannot function properly. These cookies do not collect personal information for marketing purposes and cannot be disabled through our cookie preference center.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-800">
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Cookie</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Purpose</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Duration</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_session</td>
                      <td className="px-4 py-3 text-xs">Maintains your authenticated session state across page requests</td>
                      <td className="px-4 py-3 text-xs">Session</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_csrf</td>
                      <td className="px-4 py-3 text-xs">Prevents cross-site request forgery attacks on form submissions</td>
                      <td className="px-4 py-3 text-xs">Session</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_auth</td>
                      <td className="px-4 py-3 text-xs">Stores encrypted authentication token for API dashboard access</td>
                      <td className="px-4 py-3 text-xs">14 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_cc</td>
                      <td className="px-4 py-3 text-xs">Stores your cookie consent preferences</td>
                      <td className="px-4 py-3 text-xs">365 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_lb</td>
                      <td className="px-4 py-3 text-xs">Distributes traffic across servers for optimal performance</td>
                      <td className="px-4 py-3 text-xs">Session</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.2 Analytics Cookies</h3>
              <p className="mt-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting aggregated, anonymized information. They allow us to measure traffic, identify popular pages, track navigation patterns, and detect technical issues. No personally identifiable information is collected through analytics cookies.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-800">
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Cookie</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Purpose</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Duration</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">_varl_analytics</td>
                      <td className="px-4 py-3 text-xs">Tracks anonymized page views and session duration</td>
                      <td className="px-4 py-3 text-xs">13 months</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">_varl_perf</td>
                      <td className="px-4 py-3 text-xs">Measures page load times and rendering performance</td>
                      <td className="px-4 py-3 text-xs">30 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">_varl_ref</td>
                      <td className="px-4 py-3 text-xs">Records the referring source that brought you to our website</td>
                      <td className="px-4 py-3 text-xs">30 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.3 Functional Cookies</h3>
              <p className="mt-3">
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have integrated into our pages. If you do not allow these cookies, some or all of these features may not function properly.
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:border-neutral-800 dark:bg-neutral-800">
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Cookie</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Purpose</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Duration</th>
                      <th className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-400">
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_theme</td>
                      <td className="px-4 py-3 text-xs">Remembers your light/dark mode preference</td>
                      <td className="px-4 py-3 text-xs">365 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-neutral-800/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_lang</td>
                      <td className="px-4 py-3 text-xs">Stores your preferred language setting</td>
                      <td className="px-4 py-3 text-xs">365 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl_api_prefs</td>
                      <td className="px-4 py-3 text-xs">Saves API documentation preferences (code language, sidebar state)</td>
                      <td className="px-4 py-3 text-xs">90 days</td>
                      <td className="px-4 py-3 text-xs">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>4. Cookies We Do Not Use</h2>
              <p className="mt-4">
                VARL is committed to respecting your privacy and maintaining a clean, transparent digital environment. We explicitly do not use the following types of cookies or tracking technologies:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Advertising Cookies:</strong> We do not serve advertisements on our website and do not use cookies to track you for advertising purposes across the internet.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Cross-Site Tracking:</strong> We do not participate in cross-site tracking, real-time bidding, behavioral advertising networks, or data broker ecosystems.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Social Media Tracking Pixels:</strong> We do not embed tracking pixels from social media platforms (Facebook, Twitter/X, LinkedIn, etc.) on our website.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Third-Party Data Enrichment:</strong> We do not use cookies to enrich visitor profiles with data from external data providers or data management platforms.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Fingerprinting for Identification:</strong> We do not use browser or device fingerprinting techniques to uniquely identify individual visitors beyond what is necessary for security purposes.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5. Cookie Duration</h2>
              <p className="mt-4">
                Cookies used on our website fall into two categories based on their duration:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Session Cookies:</strong> These are temporary cookies that exist only during your browsing session. They are automatically deleted when you close your browser. Session cookies are used for authentication, CSRF protection, and load balancing.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Persistent Cookies:</strong> These cookies remain on your device for a specified period or until manually deleted. They are used to remember your preferences, maintain analytics data, and store your cookie consent choice. The maximum retention period for any persistent cookie used by VARL is 13 months, in compliance with GDPR guidance from European data protection authorities.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>6. Legal Basis for Cookie Usage</h2>
              <p className="mt-4">
                Our use of cookies is governed by the following legal bases:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Strictly Necessary Cookies:</strong> Deployed under the &ldquo;legitimate interest&rdquo; exemption provided by Article 5(3) of the ePrivacy Directive (2002/58/EC) and its national implementations. These cookies do not require consent as they are essential for the provision of the service you have explicitly requested.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Analytics and Functional Cookies:</strong> Deployed only after obtaining your explicit, informed, freely given, and unambiguous consent, in accordance with Article 5(3) of the ePrivacy Directive, Article 7 of the GDPR, and applicable national legislation. Consent is obtained through our cookie banner presented upon your first visit.</li>
              </ul>
              <p className="mt-4">
                For users in jurisdictions where the CCPA/CPRA applies, the use of analytics cookies may constitute a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information under certain interpretations. VARL provides California residents with the ability to opt out of such processing through the cookie preference center.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7. Managing Your Cookie Preferences</h2>
              <p className="mt-4">
                You have the right to control which cookies are placed on your device. You may manage your preferences through the following methods:
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.1 Cookie Preference Center</h3>
              <p className="mt-3">
                Our website includes a cookie preference center accessible from the footer of every page. Through this tool, you can review the categories of cookies in use, enable or disable non-essential cookie categories, and update your consent at any time. Changes take effect immediately.
              </p>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.2 Browser Settings</h3>
              <p className="mt-3">
                Most web browsers allow you to control cookies through their settings. You can configure your browser to block all cookies, accept only first-party cookies, delete cookies when you close your browser, or be notified when a cookie is being set. Please note that disabling cookies may affect the functionality of our website and Services.
              </p>
              <p className="mt-3">
                Instructions for managing cookies in common browsers:
              </p>
              <ul className="mt-3 flex flex-col gap-2 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Chrome:</strong> Settings &rarr; Privacy and Security &rarr; Cookies and other site data</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Edge:</strong> Settings &rarr; Cookies and site permissions &rarr; Manage and delete cookies</li>
              </ul>

              <h3 className="mt-6 text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.3 Do Not Track</h3>
              <p className="mt-3">
                Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. VARL currently honors DNT signals by disabling all non-essential cookies when a DNT signal is detected. This behavior may change in the future, and any changes will be reflected in this policy.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>8. Data Collected Through Cookies</h2>
              <p className="mt-4">
                Information collected through cookies is processed in accordance with our <a href="/privacy" className="underline text-gray-900 dark:text-gray-100">Privacy Policy</a>. Specifically:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc">Analytics data is aggregated and anonymized before storage. Individual user behavior cannot be reconstructed from analytics data.</li>
                <li className="list-disc">Session and authentication cookies contain encrypted tokens that cannot be used to identify you outside the context of our Services.</li>
                <li className="list-disc">No cookie used by VARL stores plaintext personal information such as your name, email address, or phone number.</li>
                <li className="list-disc">Cookie data is stored on servers located in the United States and the European Union, in accordance with our data residency commitments.</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9. Cookie Data Retention</h2>
              <p className="mt-4">
                Cookie data is retained for the minimum period necessary to fulfill its purpose. Specific retention periods for each cookie are listed in the tables in Section 3. Upon expiration, cookie data is automatically deleted from our servers. Analytics data derived from cookies is retained in aggregated, anonymized form for a maximum of 26 months, after which it is permanently deleted.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>10. Changes to This Cookie Policy</h2>
              <p className="mt-4">
                We may update this Cookie Policy from time to time to reflect changes in the cookies we use, changes in applicable law, or improvements to our practices. When we make material changes, we will reset the cookie consent banner so that you have the opportunity to review and update your preferences. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when this policy was most recently revised.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11. Contact</h2>
              <p className="mt-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact:
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
                </div>
              </div>
            </section>

            {/* Closing */}
            <section className="border-t border-gray-200 pt-8 dark:border-neutral-800">
              <p className="text-sm text-gray-400">
                This Cookie Policy is supplementary to and should be read together with our Privacy Policy and Terms of Use. In the event of conflict between this Cookie Policy and the Privacy Policy with respect to cookie-related matters, this Cookie Policy shall prevail.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
