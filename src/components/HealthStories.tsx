"use client";

import { useState } from "react";

const stories = [
  {
    img: "/h1.webp",
    name: "Mateo",
    location: "Guatemala City",
    text: "Mateo is three years old. He was born with a congenital heart defect. His parents were told he would need open-heart surgery, but the waiting list was long and the risks were real. What if there was a way to simulate his heart completely, understand exactly where and why the tissue wasn\u2019t developing correctly, and find a path that guides his body to correct the defect on its own? No operating room. No scars. That is the kind of medicine we are building toward. Not because it sounds futuristic, but because children like Mateo deserve better than a waiting list.",
  },
  {
    img: "/h2.webp",
    name: "Mr. Thanh",
    location: "Ho Chi Minh City",
    text: "Mr. Thanh is a 58-year-old retired teacher. He was tired all the time. Losing weight without trying. He assumed it was age. It was pancreatic cancer, and by the time it was found, it had already spread. His body had been sending signals for months. They were just invisible to conventional medicine. Mr. Thanh\u2019s story is the reason we started building what we are building. A system that reads those quiet signals long before any scan can see a tumor. His diagnosis came too late. We are working to make sure that someone else\u2019s doesn\u2019t.",
  },
  {
    img: "/h3.webp",
    name: "Ryan",
    location: "Portland, Oregon",
    text: "Ryan is 34, a software engineer. He went in for routine knee surgery and came out with an infection that wouldn\u2019t respond to treatment. Two different antibiotics failed. He spent eleven days in a hospital bed wondering if something simple had turned into something serious. The problem is that every patient\u2019s biology is different, but prescriptions are still written for the average. We are developing tools that analyze individual biology and identify which treatment a specific body will actually respond to. Ryan eventually recovered, but it took too long and cost too much. That is exactly the gap we are working to close.",
  },
  {
    img: "/h4.webp",
    name: "Aylin",
    location: "Ankara",
    text: "Aylin is five. She loves drawing, hates broccoli, and carries a teddy bear to every doctor\u2019s visit. For two years she kept getting the same infections over and over. Every test came back normal. Every round of antibiotics worked for a while, then the infections returned. No one could explain why. Somewhere in her immune system there is a small, hidden gap that standard diagnostics cannot see. That is the kind of problem our platform is being designed to find. Not by guessing, but by modeling her biology at a depth that reveals what conventional tests miss. Children like Aylin should not have to wait years for an answer that already exists in their own biology.",
  },
  {
    img: "/h5.webp",
    name: "David",
    location: "Lagos",
    text: "David is 47, a project manager and a father of two. He collapsed at his desk on a Tuesday afternoon. No warning signs. No family history. A silent heart attack. He survived, but barely. The truth is, his body had been sending warning signals for months. They were invisible to conventional medicine because no one was looking at the right level. We are building a system designed to read exactly those signals, continuously monitoring the body and catching the molecular changes that come before a crisis. David didn\u2019t have access to that kind of technology. We are working to make sure the next person does.",
  },
  {
    img: "/h6.webp",
    name: "Elena",
    location: "Milan",
    text: "Elena is 23, a midfielder for a Serie B club. She tore her ACL on a Sunday. Her surgeon said nine months minimum, possibly a year, and even then a high chance of tearing it again. What if instead of waiting for the knee to heal on its own, you could study how her body repairs itself and design a treatment that actively supports and accelerates that specific process? Not a generic recovery plan, but one built entirely around her biology. That is what regenerative engineering means to us. Not replacing the body\u2019s healing, but understanding it deeply enough to make it faster, stronger, and more precise.",
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
