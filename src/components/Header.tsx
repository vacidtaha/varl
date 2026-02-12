import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="relative flex items-center py-1 pl-[20%]">
        <Link href="/">
          <Image
            src="/header-logo.png"
            alt="VARL Logo"
            width={75}
            height={25}
            className="dark:invert"
            priority
          />
        </Link>
        <nav className="absolute left-1/2 flex -translate-x-1/2 gap-6 text-base text-gray-600 dark:text-gray-400" style={{ fontWeight: 410 }}>
          <Link href="/health" className="transition-colors hover:text-black dark:hover:text-white">
            Health
          </Link>
          <Link href="/food" className="transition-colors hover:text-black dark:hover:text-white">
            Food
          </Link>
          <Link href="/research" className="transition-colors hover:text-black dark:hover:text-white">
            Research
          </Link>
          <Link href="/science" className="transition-colors hover:text-black dark:hover:text-white">
            Science
          </Link>
          <Link href="/about" className="transition-colors hover:text-black dark:hover:text-white">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
