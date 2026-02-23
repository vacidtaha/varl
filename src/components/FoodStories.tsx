"use client";

import { useState } from "react";

const stories = [
  {
    img: "/food1.webp",
    name: "Carlos Medeiros",
    location: "Mato Grosso, Brazil",
    text: "Carlos runs 12,000 hectares of corn. Last year his soil tests came back worse than ever. He was spending more on chemicals and getting less back. We showed him a simulation of his fields three seasons out. He didn\u2019t like what he saw. Together, we redesigned his input strategy from the ground up. Chemical use dropped 61%. His yield held. His soil started coming back to life.",
  },
  {
    img: "/f1.webp",
    name: "James Odhiambo",
    location: "Nairobi, Kenya",
    text: "James grows peppers in a small polytunnel he built with savings from two years of work. One bad season could end everything. We installed sensors in his irrigation line that listen to what his plants are saying \u2014 chemically. They caught blight 11 days before he would have seen it. He didn\u2019t lose a single plant. No pesticides. Yield up 38%. For James, that\u2019s not a statistic. That\u2019s his daughter\u2019s school fees.",
  },
  {
    img: "/food2.webp",
    name: "Margaret Beaulieu",
    location: "Saskatchewan, Canada",
    text: "Margaret\u2019s family has farmed this land for four generations. The wheat still grows, but the soil underneath is different now \u2014 compacted, quiet, depleted. We mapped what was missing: the fungal networks that once connected every root to every nutrient. We brought them back through a single seed treatment. One season later, her roots were three times deeper. She said the field felt different when she walked on it.",
  },
  {
    img: "/f2.webp",
    name: "Wayan Suardana",
    location: "Bali, Indonesia",
    text: "Wayan plants rice the way his grandfather taught him. But the monsoons don\u2019t come when they used to. Last year he planted on time by the old calendar and lost nearly a quarter of his crop. We built a local climate model for his valley \u2014 satellite data, soil moisture, 40 years of rain patterns. Now he gets a message each week telling him what the weather is actually going to do. His losses dropped to under 4%. His grandfather\u2019s knowledge still guides him. The data just fills in the gaps.",
  },
  {
    img: "/food3.webp",
    name: "Elif Karaca",
    location: "Konya, T\u00fcrkiye",
    text: "Elif\u2019s well has dropped every year since she started farming. The basin that feeds her fields is running out of water, and everyone knows it. We modeled the entire Konya Basin \u2014 2.6 million hectares, 847 wells, a decade of climate data. The answer wasn\u2019t to pump harder. It was to plant smarter. We designed wheat varieties that thrive on less water. Elif switched 30% of her crop. Water use dropped 42%. She still farms. The basin still has time.",
  },
  {
    img: "/f3.webp",
    name: "Sarah Hutchinson",
    location: "Iowa, United States",
    text: "Sarah runs 2,400 head of cattle. Last year a respiratory outbreak cost her $340,000 and twelve rounds of antibiotics across the entire herd. This year we gave her something different: weekly nasal swabs analyzed through our molecular platform. It flagged 14 animals nine days before any of them showed symptoms. Only those 14 were treated. The outbreak never happened. Antibiotic use dropped 94%. She didn\u2019t lose a single calf.",
  },
];

export default function FoodStories() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <div className="mx-auto w-[1500px] max-w-full">
      {/* Image with side buttons */}
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

      {/* Dots above text */}
      <div className="mt-6 flex justify-center gap-1.5">
        {stories.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-green-600" : "w-1.5 bg-gray-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>

      {/* Story text */}
      <div className="mx-auto mt-4 max-w-2xl text-center">
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {story.text}
        </p>
      </div>
    </div>
  );
}
