import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface JoinUsProps {
  title?: string;
  description?: string;
}

export default function JoinUs({
  title = "The Cure Won\u0027t Write Itself.",
  description = "We\u0027re building the team that will redefine what\u0027s possible in biology. Every breakthrough started with someone who refused to accept the limits of what was known.",
}: JoinUsProps) {
  return (
    <div className="mx-auto w-[1300px] max-w-full px-4 pb-16 pt-10 lg:px-8 lg:pb-32 lg:pt-16">
      {/* Mobile: whole card is a link, no button */}
      <Link href="/contact" className="relative block overflow-hidden rounded-2xl lg:hidden">
        <Image src="/joinus.webp" alt="VARL team collaboration" loading="lazy" fill className="object-cover object-bottom" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Arrow top-right */}
        <div className="absolute right-4 top-4">
          <ArrowUpRight size={20} strokeWidth={1.5} className="text-white/70" />
        </div>
        <div className="relative flex flex-col items-center gap-4 px-6 py-12 text-center">
          <h2 className="text-2xl tracking-tight text-white" style={{ fontWeight: 500 }}>
            {title}
          </h2>
          <p className="max-w-xl text-xs leading-relaxed text-white/70">
            {description}
          </p>
        </div>
      </Link>

      {/* Desktop: normal layout with button */}
      <div className="relative hidden overflow-hidden rounded-2xl lg:block">
        <Image src="/joinus.webp" alt="VARL team collaboration" loading="lazy" fill className="object-cover object-bottom" sizes="1300px" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col items-center gap-8 px-12 py-24 text-center">
          <h2 className="text-5xl tracking-tight text-white" style={{ fontWeight: 500 }}>
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white">
            {description}
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            style={{ fontWeight: 450 }}
          >
            <span style={{ color: "#ffffff" }}>Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
