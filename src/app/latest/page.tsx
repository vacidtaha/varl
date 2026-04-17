"use client";

import { useState, useMemo } from "react";
import Header, { MobileBottomNav } from "@/components/Header";
import Footer from "@/components/Footer";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import Image from "next/image";

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
      <h1 className="sr-only">Latest News and Research Updates from VARL</h1>

      {/* Desktop filter bar */}
      <div className="sticky top-0 z-40 hidden w-full items-center justify-center bg-[#f5f5f5] lg:flex dark:bg-neutral-800" style={{ height: "120px" }}>
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

      {/* Mobile filter bar */}
      <div className="sticky top-0 z-40 w-full bg-[#f5f5f5] px-4 py-4 lg:hidden dark:bg-neutral-800">
        <div className="flex items-center justify-between pb-3">
          <span className="text-xs text-gray-500 dark:text-gray-400" style={{ fontWeight: 500 }}>Filter</span>
          <button
            onClick={reset}
            className="text-xs text-blue-500 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
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
      </div>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 lg:px-8 lg:py-16">
          {Object.keys(grouped).length === 0 && (
            <p className="py-20 text-center text-sm text-gray-400 lg:text-lg">No results found.</p>
          )}

          {Object.entries(grouped).map(([month, items], gi) => (
            <div key={month}>
              <div className={`mb-3 text-2xl font-semibold tracking-tight text-gray-900 lg:text-3xl dark:text-gray-100 ${gi > 0 ? "mt-10 lg:mt-14" : ""}`}>
                {month}
              </div>
              <div className="h-0.5 w-full bg-gray-300 dark:bg-neutral-700" />

              {items.map((article, i) => (
                <div key={article.date + article.title}>
                  <Link href={`/latest/${article.slug}`} className="group flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:gap-8 lg:py-6">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-36 lg:w-56 lg:shrink-0">
                      <Image src={article.img} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 224px" />
                    </div>
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                      <span className="text-xs text-gray-400 lg:text-sm">{article.date}</span>
                      <h4 className="text-base font-medium text-gray-900 lg:text-xl dark:text-gray-100">{article.title}</h4>
                      <p className="text-sm text-gray-500 lg:text-base dark:text-gray-400">{article.desc}</p>
                    </div>
                  </Link>
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

      <MobileBottomNav />

      <Footer />
    </div>
  );
}
