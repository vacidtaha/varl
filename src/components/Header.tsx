"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const desktopLinks = [
  { href: "/health", label: "Health" },
  { href: "/food", label: "Food" },
  { href: "/science", label: "Science" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Header({ forceDark = false }: { forceDark?: boolean }) {
  const pathname = usePathname();
  const bg = forceDark ? "bg-black" : "bg-white dark:bg-black";
  const navText = forceDark ? "text-gray-400" : "text-gray-600 dark:text-gray-400";
  const navHover = forceDark ? "hover:text-white" : "hover:text-black dark:hover:text-white";
  const activeText = forceDark ? "text-white" : "text-black dark:text-white";
  const logoClass = forceDark ? "invert" : "dark:invert";

  return (
    <header className={`w-full ${bg}`}>
      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between py-1 pl-[20%] pr-[20%]">
        <Link href="/">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={75}
            height={25}
            className={logoClass}
            priority
            loading="eager"
            style={{ height: "auto" }}
          />
        </Link>
        <nav className={`flex gap-6 text-base ${navText}`} style={{ fontWeight: 410 }}>
          {desktopLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isActive ? activeText : navHover}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile - Top bar with logo only */}
      <div className="flex items-center justify-center py-3 lg:hidden">
        <Link href="/">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={65}
            height={22}
            className={logoClass}
            priority
            loading="eager"
            style={{ height: "auto" }}
          />
        </Link>
      </div>
    </header>
  );
}

const mobileLinks = [
  { href: "/health", label: "Health" },
  { href: "/food", label: "Food" },
  { href: "/science", label: "Science" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function MobileBottomNav({ forceDark = false }: { forceDark?: boolean }) {
  const pathname = usePathname();

  return (
    <div className="sticky bottom-0 z-50 flex justify-center pb-3 lg:hidden">
      <div
        className="mx-3 flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-2xl px-5 py-3 text-sm bg-white/70 text-gray-500 dark:bg-black/40 dark:text-white/60 backdrop-blur-2xl"
        style={{ fontWeight: 410 }}
      >
        {mobileLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-black dark:hover:text-white"
              style={isActive ? { color: "var(--nav-active)", fontWeight: 500 } : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <style>{`
        :root { --nav-active: #000000; }
        @media (prefers-color-scheme: dark) { :root { --nav-active: #ffffff; } }
      `}</style>
    </div>
  );
}
