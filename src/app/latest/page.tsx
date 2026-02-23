"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

const articles = [
  { date: "February 10, 2026", month: "February 2026", year: "2026", category: "Food", topic: "Agriculture", type: "Article", title: "VARL Publishes New Framework for Regenerative Agriculture", desc: "A systems-level approach to soil biology and crop resilience, powered by molecular simulation.", img: "/latest-1.png" },
  { date: "February 3, 2026", month: "February 2026", year: "2026", category: "Health", topic: "Biology", type: "Article", title: "How Biological Camouflage Inspires New Drug Delivery Systems", desc: "Nature's stealth mechanisms are guiding VARL's next-gen targeted therapies.", img: "/latest-2.png" },
  { date: "January 28, 2026", month: "January 2026", year: "2026", category: "Research", topic: "Biology", type: "Report", title: "Precision at the Molecular Level: Inside VARL's Protein Engineering Lab", desc: "Where craftsmanship meets computation to redesign biological structures.", img: "/latest-3.jpg" },
  { date: "January 15, 2026", month: "January 2026", year: "2026", category: "Health", topic: "AI", type: "Case Study", title: "Digital Twin Technology Maps Individual Health Trajectories", desc: "Personalized simulations that predict disease before symptoms appear.", img: "/latest-4.png" },
  { date: "January 6, 2026", month: "January 2026", year: "2026", category: "Health", topic: "Biology", type: "Press Release", title: "VARL Identifies Novel Biomarkers for Early Disease Detection", desc: "AI-driven analysis reveals signals invisible to traditional diagnostics.", img: "/latest-5.jpg" },
  { date: "December 20, 2025", month: "December 2025", year: "2025", category: "Food", topic: "AI", type: "Article", title: "AI Models Predict Plant Stress Before It Happens", desc: "Lab-grown resilience testing for smarter crops.", img: "/latest-6.jpg" },
  { date: "December 11, 2025", month: "December 2025", year: "2025", category: "Food", topic: "Agriculture", type: "Report", title: "Decoding the Tomato Genome to Unlock Nutritional Potential", desc: "How AI maps flavor, nutrition, and yield at once.", img: "/latest-7.png" },
  { date: "November 29, 2025", month: "November 2025", year: "2025", category: "Health", topic: "Biology", type: "Article", title: "Lipid Nanoparticles: VARL's Next-Gen Cellular Repair Mechanism", desc: "Targeted delivery at the molecular frontier.", img: "/latest-8.jpg" },
];

export default function LatestPage() {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [topic, setTopic] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      if (category !== "All" && a.category !== category) return false;
      if (year !== "All" && a.year !== year) return false;
      if (topic !== "All" && a.topic !== topic) return false;
      if (type !== "All" && a.type !== type) return false;
      return true;
    });
  }, [category, year, topic, type]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof articles> = {};
    filtered.forEach((a) => {
      if (!groups[a.month]) groups[a.month] = [];
      groups[a.month].push(a);
    });
    return groups;
  }, [filtered]);

  const reset = () => {
    setCategory("All");
    setYear("All");
    setTopic("All");
    setType("All");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
      <Header />

      <div className="sticky top-0 z-40 flex w-full items-center justify-center bg-[#f5f5f5] dark:bg-neutral-800" style={{ height: "120px" }}>
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
          <div className="flex flex-1 items-center gap-4">
            <span className="shrink-0 text-sm text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Filter</span>

            <Dropdown
              label="Category"
              options={["All", "Health", "Food", "Research", "Science", "Platform", "Company"]}
              value={category}
              onChange={setCategory}
            />
            <Dropdown
              label="Date"
              options={["All", "2026", "2025", "2024", "2023"]}
              value={year}
              onChange={setYear}
            />
            <Dropdown
              label="Topic"
              options={["All", "AI", "Biology", "Agriculture", "Drug Discovery"]}
              value={topic}
              onChange={setTopic}
            />
            <Dropdown
              label="Type"
              options={["All", "Article", "Report", "Case Study", "Press Release"]}
              value={type}
              onChange={setType}
            />
          </div>
          <button
            onClick={reset}
            className="shrink-0 pl-4 text-sm text-blue-500 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Reset
          </button>
        </div>
      </div>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-8 py-16">
          {Object.keys(grouped).length === 0 && (
            <p className="py-20 text-center text-lg text-gray-400">No results found.</p>
          )}

          {Object.entries(grouped).map(([month, items], gi) => (
            <div key={month}>
              <div className={`mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 ${gi > 0 ? "mt-14" : ""}`}>
                {month}
              </div>
              <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />

              {items.map((article, i) => (
                <div key={article.date + article.title}>
                  <a href="#" className="group flex items-center gap-8 py-6">
                    <img src={article.img} alt="" className="h-36 w-56 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-400">{article.date}</span>
                      <h4 className="text-xl font-medium text-gray-900 dark:text-gray-100">{article.title}</h4>
                      <p className="text-base text-gray-500 dark:text-gray-400">{article.desc}</p>
                    </div>
                  </a>
                  {i < items.length - 1 && (
                    <div className="h-0.5 w-full bg-gray-200 dark:bg-neutral-800" />
                  )}
                </div>
              ))}

              <div className="h-0.5 w-full bg-gray-200 dark:bg-neutral-800" />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
