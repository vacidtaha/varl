"use client";

import { useState } from "react";

const stories = [
  {
    img: "/food1.webp",
    name: "Carlos Medeiros",
    location: "Mato Grosso, Brazil",
    text: "Carlos runs 12,000 hectares of corn. Last year his soil tests came back worse than ever. He was spending more on chemicals and getting less back. What if he could see a simulation of his fields three seasons out, and redesign his input strategy before it was too late? That is the kind of tool we are building. Not more chemicals, but more understanding. Farmers like Carlos should not have to guess what their soil needs. The data is already in the ground. Someone just has to read it.",
  },
  {
    img: "/f1.webp",
    name: "James Odhiambo",
    location: "Nairobi, Kenya",
    text: "James grows peppers in a small polytunnel he built with savings from two years of work. One bad season could end everything. What if sensors in his irrigation line could listen to what his plants are saying, chemically, and catch blight days before he would ever see it? No pesticides. No lost harvest. For James, that is not a statistic. That is his daughter\u2019s school fees. We are developing molecular detection tools designed for exactly this kind of farmer, because the smallest farms carry the biggest risks.",
  },
  {
    img: "/food2.webp",
    name: "Margaret Beaulieu",
    location: "Saskatchewan, Canada",
    text: "Margaret\u2019s family has farmed this land for four generations. The wheat still grows, but the soil underneath is different now. Compacted, quiet, depleted. Somewhere beneath her fields, the fungal networks that once connected every root to every nutrient have been destroyed. We are building digital twins of soil microbiomes designed to map exactly what is missing and how to bring it back. Margaret\u2019s land has been feeding people for a century. It should not have to stop because no one understood what was happening underground.",
  },
  {
    img: "/f2.webp",
    name: "Wayan Suardana",
    location: "Bali, Indonesia",
    text: "Wayan plants rice the way his grandfather taught him. But the monsoons don\u2019t come when they used to. Last year he planted on time by the old calendar and lost nearly a quarter of his crop. What if a local climate model, built from satellite data, soil moisture readings, and decades of rain patterns, could tell him each week what the weather is actually going to do? His grandfather\u2019s knowledge would still guide him. The data would just fill in the gaps. That is the kind of agricultural intelligence we are developing.",
  },
  {
    img: "/food3.webp",
    name: "Elif Karaca",
    location: "Konya, T\u00fcrkiye",
    text: "Elif\u2019s well has dropped every year since she started farming. The basin that feeds her fields is running out of water, and everyone knows it. The answer is not to pump harder. It is to plant smarter. We are working on computational tools that model entire watersheds and design crop varieties that thrive on less water. Elif\u2019s basin still has time, but only if someone acts before the water is gone. That is why we are building what we are building.",
  },
  {
    img: "/f3.webp",
    name: "Sarah Hutchinson",
    location: "Iowa, United States",
    text: "Sarah runs 2,400 head of cattle. Last year a respiratory outbreak cost her $340,000 and twelve rounds of antibiotics across the entire herd. What if molecular analysis could flag the 14 animals carrying the pathogen nine days before any of them showed symptoms? Only those 14 would be treated. The outbreak would never happen. Antibiotic use could drop by over 90%. That is the kind of precision livestock intelligence we are developing. Because treating the whole herd when only a few are sick is not farming. It is guessing.",
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
