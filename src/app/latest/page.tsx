"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";

import { articles } from "@/data/articles";

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
                  <a href={`/latest/${article.slug}`} className="group flex items-center gap-8 py-6">
                    <img src={article.img} alt="" loading="lazy" className="h-36 w-56 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" />
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
