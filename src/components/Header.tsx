import Image from "next/image";
import Link from "next/link";

export default function Header({ forceDark = false }: { forceDark?: boolean }) {
  const bg = forceDark ? "bg-black" : "bg-white dark:bg-black";
  const navText = forceDark ? "text-gray-400" : "text-gray-600 dark:text-gray-400";
  const navHover = forceDark ? "hover:text-white" : "hover:text-black dark:hover:text-white";
  const logoClass = forceDark ? "invert" : "dark:invert";

  return (
    <header className={`w-full ${bg}`}>
      <div className="flex items-center justify-between py-1 pl-[20%] pr-[20%]">
        <Link href="/">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={75}
            height={25}
            className={logoClass}
            priority
          />
        </Link>
        <nav className={`flex gap-6 text-base ${navText}`} style={{ fontWeight: 410 }}>
          <Link href="/health" className={`transition-colors ${navHover}`}>
            Health
          </Link>
          <Link href="/food" className={`transition-colors ${navHover}`}>
            Food
          </Link>
          <Link href="/science" className={`transition-colors ${navHover}`}>
            Science
          </Link>
          <Link href="/publications" className={`transition-colors ${navHover}`}>
            Publications
          </Link>
          <Link href="/pipeline" className={`transition-colors ${navHover}`}>
            Pipeline
          </Link>
          <Link href="/contact" className={`transition-colors ${navHover}`}>
            Contact
          </Link>
          <Link href="/about" className={`transition-colors ${navHover}`}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
