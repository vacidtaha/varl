import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNavWrapper from "@/components/MobileNavWrapper";
import Link from "next/link";

const SITE_URL = "https://varl.net";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "VARL's cookie policy explains the cookies and tracking technologies we use, including analytics and functional cookies, and how to manage your preferences.",
  alternates: { canonical: `${SITE_URL}/cookies` },
  openGraph: {
    title: "Cookie Policy | VARL",
    description: "VARL's cookie policy explains the cookies and tracking technologies we use, including analytics and functional cookies, and how to manage your preferences.",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-5 py-12 lg:px-8 lg:py-24">

          <h1 className="text-3xl lg:text-5xl tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Effective Date: February 1, 2026 &nbsp;·&nbsp; Last Updated: February 14, 2026
          </p>

          <div className="mt-10 flex flex-col gap-10 text-sm leading-relaxed text-gray-600 dark:text-gray-400 lg:mt-16 lg:gap-16 lg:text-base">

            {/* 1 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>1. Introduction</h2>
              <p className="mt-4">
                This Cookie Policy explains how VARL Inc. (&ldquo;VARL,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar tracking technologies when you visit our website at varl.net, use our platform, or interact with our Services. This policy should be read in conjunction with our <Link href="/privacy" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Privacy Policy</Link> and <Link href="/terms" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Terms of Use</Link>.
              </p>
              <p className="mt-4">
                By continuing to use our website after being presented with the cookie notice, you consent to the use of cookies as described in this policy. You may withdraw your consent or modify your preferences at any time through the methods described in Section 7.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>2. What Are Cookies</h2>
              <p className="mt-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, to provide information to site owners, and to improve the user experience. Cookies may be set by the website you are visiting (&ldquo;first-party cookies&rdquo;) or by third parties whose services the website uses (&ldquo;third-party cookies&rdquo;).
              </p>
              <p className="mt-4">
                In addition to cookies, we may use similar technologies including web beacons (also known as pixel tags or clear GIFs), local storage objects, and device fingerprinting techniques. References to &ldquo;cookies&rdquo; in this policy include these similar technologies unless otherwise specified.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3. Types of Cookies We Use</h2>

              <h3 className="mt-6 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.1 Strictly Necessary Cookies</h3>
              <p className="mt-3">
                These cookies are essential for the operation of our website and Services. They enable core functionality such as page navigation, secure area access, authentication, session management, and load balancing. Without these cookies, the Services cannot function properly. These cookies do not collect personal information for marketing purposes and cannot be disabled through the consent banner. The following table lists cookies that are or will be deployed as platform features become available:
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
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
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">varl-cookie-consent</td>
                      <td className="px-4 py-3 text-xs">Stores your cookie consent preference (accepted/declined). Stored in browser localStorage rather than as a cookie</td>
                      <td className="px-4 py-3 text-xs">Persistent (until cleared)</td>
                      <td className="px-4 py-3 text-xs">First-party (localStorage)</td>
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

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.2 Analytics Cookies</h3>
              <p className="mt-3">
                We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 collects aggregated usage information including page views, session duration, navigation paths, and approximate geographic location (city/region level, derived from IP address). IP addresses are processed by Google for geolocation purposes but are not stored in their full form. Analytics cookies are active by default and are disabled if you decline cookies through the consent banner. We do not use analytics data for advertising, cross-site tracking, or behavioral profiling.
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
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
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">_ga</td>
                      <td className="px-4 py-3 text-xs">Distinguishes unique visitors by assigning a randomly generated identifier. Used to calculate visitor, session, and campaign data for analytics reports</td>
                      <td className="px-4 py-3 text-xs">2 years</td>
                      <td className="px-4 py-3 text-xs">Third-party (Google)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300">_ga_&lt;ID&gt;</td>
                      <td className="px-4 py-3 text-xs">Maintains session state for Google Analytics 4. The &lt;ID&gt; suffix corresponds to the GA4 measurement ID</td>
                      <td className="px-4 py-3 text-xs">2 years</td>
                      <td className="px-4 py-3 text-xs">Third-party (Google)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Google Analytics 4 is provided by Google LLC. Google processes analytics data in accordance with its own privacy policy. VARL has configured GA4 with IP anonymization enabled and has disabled data sharing with Google for advertising purposes. For more information on how Google processes data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Google&apos;s Privacy Policy</a>.
              </p>

              <h3 className="mt-8 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>3.3 Functional Cookies</h3>
              <p className="mt-3">
                These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have integrated into our pages. If you do not allow these cookies, some or all of these features may not function properly. The following table lists functional cookies that are or will be deployed as platform features become available:
              </p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
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
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>4. Cookies We Do Not Use</h2>
              <p className="mt-4">
                VARL is committed to respecting your privacy and maintaining a clean, transparent digital environment. We explicitly do not use the following types of cookies or tracking technologies:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Advertising Cookies:</strong> We do not serve advertisements on our website and do not use cookies to track you for advertising purposes across the internet.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Cross-Site Tracking:</strong> We do not participate in cross-site tracking for advertising purposes, real-time bidding, behavioral advertising networks, or data broker ecosystems. While we use Google Analytics 4 for site analytics, we have disabled Google&apos;s advertising features and data sharing for ads personalization.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Social Media Tracking Pixels:</strong> We do not embed tracking pixels from social media platforms (Facebook, Twitter/X, LinkedIn, etc.) on our website.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Third-Party Data Enrichment:</strong> We do not use cookies to enrich visitor profiles with data from external data providers or data management platforms.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Fingerprinting for Identification:</strong> We do not use browser or device fingerprinting techniques to uniquely identify individual visitors beyond what is necessary for security purposes.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>5. Cookie Duration</h2>
              <p className="mt-4">
                Cookies used on our website fall into two categories based on their duration:
              </p>
              <ul className="mt-4 flex flex-col gap-3 pl-6">
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Session Cookies:</strong> These are temporary cookies that exist only during your browsing session. They are automatically deleted when you close your browser. Session cookies are used for authentication, CSRF protection, and load balancing.</li>
                <li className="list-disc"><strong className="text-gray-900 dark:text-gray-100">Persistent Cookies:</strong> These cookies remain on your device for a specified period or until manually deleted. They are used to remember your preferences and maintain analytics data. Google Analytics cookies have a maximum duration of 2 years as set by Google. VARL&apos;s own persistent cookies (theme, language preferences) have a maximum duration of 365 days. Your cookie consent preference is stored in browser localStorage and persists until cleared.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>6. Legal Basis for Cookie Usage</h2>
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
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7. Managing Your Cookie Preferences</h2>
              <p className="mt-4">
                You have the right to control which cookies are placed on your device. You may manage your preferences through the following methods:
              </p>

              <h3 className="mt-6 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.1 Cookie Consent Banner</h3>
              <p className="mt-3">
                When you first visit our website, a cookie consent banner is displayed at the top of the page. Through this banner, you can accept or decline non-essential cookies. Your preference is stored in your browser&apos;s local storage and persists across sessions. If you decline, all analytics cookies (Google Analytics 4) are removed and will not be loaded on subsequent visits. If you wish to change your preference after dismissing the banner, you can clear the stored preference by deleting the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:bg-neutral-800">varl-cookie-consent</code> entry from your browser&apos;s local storage, or by clearing your browser&apos;s site data for varl.net, which will cause the consent banner to reappear on your next visit.
              </p>

              <h3 className="mt-6 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.2 Browser Settings</h3>
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

              <h3 className="mt-6 text-base lg:text-lg text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>7.3 Do Not Track</h3>
              <p className="mt-3">
                Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) signal. There is currently no universally accepted standard for how websites should respond to DNT signals. VARL does not currently alter its data collection or cookie behavior in response to DNT signals. Instead, we provide the cookie consent banner described in Section 7.1 as the primary mechanism for you to control non-essential cookies. If a uniform DNT standard is adopted in the future, we will update this policy and our practices accordingly.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>8. Data Collected Through Cookies</h2>
              <p className="mt-4">
                Information collected through cookies is processed in accordance with our <Link href="/privacy" className="underline underline-offset-2" style={{ color: "#06c", fontWeight: 500 }}>Privacy Policy</Link>. Specifically:
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
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>9. Cookie Data Retention</h2>
              <p className="mt-4">
                Cookie data is retained for the minimum period necessary to fulfill its purpose. Specific retention periods for each cookie and storage mechanism are listed in the tables in Section 3. Upon expiration, cookies are automatically deleted by the browser. Google Analytics retains aggregated analytics data in accordance with Google&apos;s data retention settings; VARL has configured a retention period of 14 months for user-level analytics data within Google Analytics 4, after which it is automatically deleted from Google&apos;s systems.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>10. Changes to This Cookie Policy</h2>
              <p className="mt-4">
                We may update this Cookie Policy from time to time to reflect changes in the cookies we use, changes in applicable law, or improvements to our practices. When we make material changes, we will reset the cookie consent banner so that you have the opportunity to review and update your preferences. The &ldquo;Last Updated&rdquo; date at the top of this page indicates when this policy was most recently revised.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl lg:text-2xl text-gray-900 dark:text-gray-100" style={{ fontWeight: 500 }}>11. Contact</h2>
              <p className="mt-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact:
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-5 dark:bg-neutral-800 lg:p-8">
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Data Protection Officer</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">VARL Inc. — Legal Department</p>
                  </div>
                  <div>
                    <span className="text-xs tracking-wide text-gray-400" style={{ fontWeight: 500 }}>Email</span>
                    <p className="mt-1 text-gray-900 dark:text-gray-100">privacy@varl.net</p>
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

      <MobileNavWrapper />
      <Footer />
    </div>
  );
}
