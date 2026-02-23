"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  variant?: "filter" | "form";
}

export default function Dropdown({ label, options, value, onChange, variant = "filter" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(label);
  const ref = useRef<HTMLDivElement>(null);

  const selected = value ?? internal;
  const display = selected === "All" || selected === label ? label : selected;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    if (onChange) {
      onChange(option);
    } else {
      setInternal(option);
    }
    setOpen(false);
  };

  const isFilter = variant === "filter";

  return (
    <div ref={ref} className={`relative ${isFilter ? "flex-1" : "w-full"}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between text-sm ${
          isFilter
            ? `bg-white py-2 pl-4 pr-3 text-gray-700 dark:bg-neutral-700 dark:text-gray-300 ${open ? "rounded-t-lg" : "rounded-lg"}`
            : `bg-gray-50 px-4 py-3 dark:bg-neutral-800 ${open ? "rounded-t-lg" : "rounded-lg"} ${
                selected !== label ? "text-gray-900 dark:text-gray-100" : "text-gray-300 dark:text-neutral-600"
              }`
        }`}
      >
        <span>{display}</span>
        <ChevronDown
          size={14}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className={`absolute left-0 top-full z-50 mt-0 w-full overflow-hidden rounded-b-lg py-1 shadow-lg ${
          isFilter
            ? "bg-white dark:bg-neutral-700"
            : "bg-white dark:bg-neutral-800"
        }`}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`flex w-full px-4 py-2 text-left text-sm transition-colors ${
                selected === option
                  ? isFilter
                    ? "bg-gray-100 text-gray-900 dark:bg-neutral-600 dark:text-white"
                    : "bg-gray-100 text-gray-900 dark:bg-neutral-700 dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-neutral-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
