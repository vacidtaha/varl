interface JoinUsProps {
  title?: string;
  description?: string;
}

export default function JoinUs({
  title = "The Cure Won\u0027t Write Itself.",
  description = "We\u0027re building the team that will redefine what\u0027s possible in biology. Every breakthrough on this pipeline started with someone who refused to accept the limits of what was known.",
}: JoinUsProps) {
  return (
    <div className="mx-auto w-[1300px] max-w-full px-8 pb-32 pt-16">
      <div className="relative overflow-hidden rounded-2xl">
        <img src="/joinus.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative flex flex-col items-center gap-8 px-12 py-24 text-center">
          <h2 className="text-5xl tracking-tight text-white" style={{ fontWeight: 500 }}>
            {title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white">
            {description}
          </p>
          <a
            href="/careers"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
            style={{ fontWeight: 450 }}
          >
            <span style={{ color: "#ffffff" }}>Careers</span>
          </a>
        </div>
      </div>
    </div>
  );
}
