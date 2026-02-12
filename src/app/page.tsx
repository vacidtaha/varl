import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="relative w-full overflow-hidden">
        <img
          src="/creation-of-adam.jpg"
          alt=""
          className="h-[620px] w-full object-cover" style={{ objectPosition: "center 20%" }}
        />
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-7xl tracking-tight text-white drop-shadow-lg" style={{ fontWeight: 400 }}>
            All Diseases Can Be Solved.
          </h2>
        </div>
        <span className="absolute bottom-3 left-4 text-xs text-white/60">
          The Creation of Adam — Michelangelo, Sistine Chapel, c. 1512
        </span>
      </div>

      <main className="flex-1">
        <Hero />
      </main>

      <div className="h-[200vh]"></div>
    </div>
  );
}
