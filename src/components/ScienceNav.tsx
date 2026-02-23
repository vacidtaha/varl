"use client";

import { useEffect, useState } from "react";

const sections = ["observe", "compute", "discover", "heal", "evolve"];
const labels: Record<string, string> = {
  observe: "Observe",
  compute: "Compute",
  discover: "Discover",
  heal: "Heal",
  evolve: "Evolve",
};

export default function ScienceNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-40 flex w-full items-center bg-white/60 backdrop-blur-xl dark:bg-neutral-900/60" style={{ height: "70px" }}>
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
        <h3 className="text-lg tracking-tight text-gray-900 dark:text-gray-100" style={{ fontWeight: 600 }}>
          How It Works
        </h3>
        <div className="flex items-center gap-8">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-sm transition-colors duration-300 ${
                active === id
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              }`}
              style={{ fontWeight: active === id ? 500 : 400 }}
            >
              {labels[id]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
