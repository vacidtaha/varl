"use client";

import { useState } from "react";

const stories = [
  {
    img: "/h1.webp",
    name: "Mateo",
    location: "Guatemala City",
    text: "Mateo is three years old. He was born with a congenital heart defect. His parents were told he would need open-heart surgery, but the waiting list was long and the risks were real. We studied Mateo\u2019s condition by creating a complete simulation of his heart, understanding exactly where and why the tissue wasn\u2019t developing correctly. Instead of surgery, we found a way to guide his body to correct the defect on its own, with a precisely timed, targeted intervention. No operating room. No scars. Today Mateo runs around the house chasing the family dog. He collects toy trucks. His heart works perfectly, and he has no idea it was ever broken.",
  },
  {
    img: "/h2.webp",
    name: "Mr. Thanh",
    location: "Ho Chi Minh City",
    text: "Mr. Thanh is a 58-year-old retired teacher. He was tired all the time. Losing weight without trying. He assumed it was age. It was pancreatic cancer, and by the time it was found, it had already spread. His story is the reason we built what we built. Our platform now reads the quiet signals the body sends long before any scan can see a tumor. We catch the earliest trace of disease while it is still small enough to stop. Mr. Thanh\u2019s diagnosis came too late. Because of him, someone else\u2019s won\u2019t. That is the promise we made, and we keep it every day.",
  },
  {
    img: "/h3.webp",
    name: "Ryan",
    location: "Portland, Oregon",
    text: "Ryan is 34, a software engineer. He went in for routine knee surgery and came out with an infection that wouldn\u2019t respond to treatment. Two different antibiotics failed. He spent eleven days in a hospital bed wondering if something simple had turned into something serious. We analyzed Ryan\u2019s biology individually rather than following a standard prescription. We identified which treatment his body would actually respond to, designed specifically for him. The infection cleared within days. Ryan is back at work, back on his bike, and back to complaining about Portland rain. He doesn\u2019t think about those eleven days anymore.",
  },
  {
    img: "/h4.webp",
    name: "Aylin",
    location: "Ankara",
    text: "Aylin is five. She loves drawing, hates broccoli, and carries a teddy bear to every doctor\u2019s visit. For two years she kept getting the same infections over and over. Every test came back normal. Every round of antibiotics worked for a while, then the infections returned. No one could explain why. We looked deeper than standard tests ever go and found a small, hidden gap in her immune system that was letting infections through again and again. One targeted treatment to close that gap. That was all it took. Aylin hasn\u2019t been sick in over a year. The teddy bear still comes to checkups, but now just for moral support.",
  },
  {
    img: "/h5.webp",
    name: "David",
    location: "Lagos",
    text: "David is 47, a project manager and a father of two. He collapsed at his desk on a Tuesday afternoon. No warning signs. No family history. A silent heart attack. He survived, but barely. The truth is, his body had been sending warning signals for months. They were just invisible to conventional medicine. Our system is built to read exactly those signals, continuously monitoring the body and catching the changes that come before a crisis. David didn\u2019t have access to that. Now he does. He wears a monitor, he gets regular updates, and his doctor sees what used to be invisible. David coaches his son\u2019s football team on weekends now. He plans to keep doing that for a very long time.",
  },
  {
    img: "/h6.webp",
    name: "Elena",
    location: "Milan",
    text: "Elena is 23, a midfielder for a Serie B club. She tore her ACL on a Sunday. Her surgeon said nine months minimum, possibly a year, and even then a high chance of tearing it again. We took a different path. Instead of just waiting for the knee to heal on its own, we studied how Elena\u2019s body repairs itself and designed a treatment that actively supported and accelerated that process. Not a generic recovery plan. One built entirely around her. Five months later she was back on the pitch. The knee is stronger than it was before the injury. She scored twice in her first match back. She doesn\u2019t think about the knee anymore. That\u2019s the whole point.",
  },
];

export default function HealthStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <div className="mx-auto w-[1500px] max-w-full">
      <div className="relative flex items-center gap-6 px-8">
        <button
          onClick={() => setActive(active === 0 ? stories.length - 1 : active - 1)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition-colors hover:bg-gray-300 hover:text-gray-700 dark:bg-neutral-800 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </button>

        <div className="relative flex-1 overflow-hidden rounded-2xl">
          <img
            src={story.img}
            alt={story.name}
            loading="lazy"
            className="h-[720px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-8">
            <span className="text-lg text-white" style={{ fontWeight: 500 }}>{story.name}</span>
            <span className="ml-3 text-sm text-white/60">{story.location}</span>
          </div>
        </div>

        <button
          onClick={() => setActive(active === stories.length - 1 ? 0 : active + 1)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition-colors hover:bg-gray-300 hover:text-gray-700 dark:bg-neutral-800 dark:text-gray-500 dark:hover:bg-neutral-700 dark:hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-1.5">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-red-500" : "w-1.5 bg-gray-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>

      <div className="mx-auto mt-4 max-w-2xl text-center">
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {story.text}
        </p>
      </div>
    </div>
  );
}
