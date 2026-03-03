import Link from "next/link";
import Image from "next/image";

export default function Footer({ className, forceDark = false }: { className?: string; forceDark?: boolean }) {
  const logoClass = forceDark ? "invert" : "dark:invert";
  const sigClass = forceDark ? "contrast-200 brightness-0 invert" : "contrast-200 brightness-0 dark:invert";
  const sectionTitle = forceDark ? "text-gray-200" : "text-gray-900 dark:text-gray-200";
  const navText = forceDark ? "text-gray-400" : "text-gray-500 dark:text-gray-400";
  const navHover = forceDark ? "hover:text-white" : "hover:text-gray-900 dark:hover:text-white";
  const divider = forceDark ? "bg-neutral-800" : "bg-gray-200 dark:bg-neutral-800";
  const copyText = forceDark ? "text-neutral-600" : "text-gray-400 dark:text-neutral-600";
  const copyHover = forceDark ? "hover:text-neutral-400" : "hover:text-gray-600 dark:hover:text-neutral-400";

  return (
    <footer className={`w-full ${className || ""}`}>
      <div className="mx-auto max-w-5xl px-8 pb-10 pt-20">
        <div className="flex justify-between">
          {/* Sol: Logo + tagline + imza */}
          <div className="relative flex flex-col gap-4">
            <Image
              src="/header-logo.png"
              alt="VARL Logo"
              width={70}
              height={24}
              className={logoClass}
            />
            <p className="max-w-xs text-sm italic leading-relaxed text-gray-400">
              Aut viam inveniam aut faciam.
            </p>
            <div className="absolute -ml-4 top-16 flex items-center gap-0">
              <Image
                src="/imza.png"
                alt="Signature"
                width={320}
                height={120}
                className={sigClass}
              />
              <Image
                src="/haktan.png"
                alt="Haktan Signature"
                width={320}
                height={120}
                className={`-ml-16 ${sigClass}`}
              />
            </div>
          </div>

          {/* Sağ: Linkler */}
          <div className="flex gap-14">
            <div className="flex flex-col gap-3">
              <span className={`text-xs tracking-wide ${sectionTitle}`}>Platform</span>
              <nav className={`flex flex-col gap-2 text-sm ${navText}`}>
                <Link href="/health" className={`transition-colors ${navHover}`}>Health</Link>
                <Link href="/food" className={`transition-colors ${navHover}`}>Food</Link>
                <Link href="/api" className={`transition-colors ${navHover}`}>API</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <span className={`text-xs tracking-wide ${sectionTitle}`}>Science</span>
              <nav className={`flex flex-col gap-2 text-sm ${navText}`}>
                <Link href="/publications" className={`transition-colors ${navHover}`}>Publications</Link>
                <Link href="/science" className={`transition-colors ${navHover}`}>Science</Link>
                <Link href="/white-papers" className={`transition-colors ${navHover}`}>White Papers</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <span className={`text-xs tracking-wide ${sectionTitle}`}>Company</span>
              <nav className={`flex flex-col gap-2 text-sm ${navText}`}>
                <Link href="/about" className={`transition-colors ${navHover}`}>About</Link>
                <Link href="/latest" className={`transition-colors ${navHover}`}>Latest</Link>
                <Link href="/partnerships" className={`transition-colors ${navHover}`}>Partnerships</Link>
                <Link href="/investors" className={`transition-colors ${navHover}`}>Investors</Link>
                <Link href="/contact" className={`transition-colors ${navHover}`}>Contact</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <span className={`text-xs tracking-wide ${sectionTitle}`}>Legal</span>
              <nav className={`flex flex-col gap-2 text-sm ${navText}`}>
                <Link href="/privacy" className={`transition-colors ${navHover}`}>Privacy Policy</Link>
                <Link href="/terms" className={`transition-colors ${navHover}`}>Terms of Use</Link>
                <Link href="/cookies" className={`transition-colors ${navHover}`}>Cookie Policy</Link>
                <Link href="/compliance" className={`transition-colors ${navHover}`}>Compliance</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Alt çizgi + Copyright + Legal linkler */}
        <div className={`mt-16 h-px w-full ${divider}`} />
        <div className={`flex items-center justify-between pt-6 text-xs ${copyText}`}>
          <span>&copy; {new Date().getFullYear()} VARL. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className={`transition-colors ${copyHover}`}>Privacy Policy</Link>
            <Link href="/terms" className={`transition-colors ${copyHover}`}>Terms of Use</Link>
            <Link href="/cookies" className={`transition-colors ${copyHover}`}>Cookie Policy</Link>
            <Link href="/disclaimer" className={`transition-colors ${copyHover}`}>Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
