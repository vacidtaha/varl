"use client";

import { useState, useEffect } from "react";
import {
  FaHeart,
  FaHeartPulse,
  FaSyringe,
  FaStethoscope,
  FaPills,
  FaNotesMedical,
  FaHospital,
  FaBriefcaseMedical,
  FaDna,
  FaLungs,
  FaBrain,
  FaTooth,
  FaHandHoldingHeart,
  FaHeartCircleCheck,
  FaVirusSlash,
  FaUserDoctor,
  FaKitMedical,
  FaCapsules,
  FaBandage,
  FaDroplet,
} from "react-icons/fa6";

const healthIcons = [
  FaHeart, FaHeart, FaHeart, FaHeart, FaHeart,
  FaHeart, FaHeart, FaHeart, FaHeart, FaHeart,
  FaHeartPulse, FaHeartPulse,
  FaSyringe,
  FaStethoscope,
  FaPills,
  FaNotesMedical,
  FaHospital,
  FaBriefcaseMedical,
  FaDna,
  FaLungs,
  FaBrain,
  FaTooth,
  FaHandHoldingHeart,
  FaHeartCircleCheck,
  FaVirusSlash,
  FaUserDoctor,
  FaKitMedical,
  FaCapsules,
  FaBandage,
  FaDroplet,
];

const colors = [
  "#d62828", "#e63946", "#ff006e", "#f72585", "#b5179e",
  "#e56b6f", "#ff8fa3", "#ff4d6d", "#c9184a", "#ff758f",
  "#e07a5f", "#ff9ebb", "#d81159", "#ff477e", "#f4978e",
];

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

interface IconItem {
  Icon: typeof FaHeart;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  color: string;
}

function generateIcons(): IconItem[] {
  const cols = 10;
  const rows = 6;
  const result: IconItem[] = [];
  let idx = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const r = (s: number) => seededRandom(idx * 7 + s);
      const cellW = 100 / cols;
      const cellH = 100 / rows;
      const offsetX = (r(2) - 0.5) * cellW * 0.6;
      const offsetY = (r(3) - 0.5) * cellH * 0.6;

      result.push({
        Icon: healthIcons[Math.floor(r(1) * healthIcons.length)],
        x: cellW * (col + 0.5) + offsetX,
        y: cellH * (row + 0.5) + offsetY,
        size: 18 + r(4) * 30,
        rotation: r(5) * 360,
        opacity: 0.15 + r(6) * 0.2,
        color: colors[Math.floor(r(7) * colors.length)],
      });
      idx++;
    }
  }
  return result;
}

export default function HealthIcons() {
  const [items, setItems] = useState<IconItem[]>([]);

  useEffect(() => {
    setItems(generateIcons());
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item, i) => {
        const IconComp = item.Icon;
        return (
          <IconComp
            key={i}
            size={Math.round(item.size)}
            className="absolute"
            style={{
              left: `${item.x.toFixed(1)}%`,
              top: `${item.y.toFixed(1)}%`,
              transform: `rotate(${Math.round(item.rotation)}deg) translate(-50%, -50%)`,
              opacity: Number(item.opacity.toFixed(2)),
              color: item.color,
            }}
          />
        );
      })}
    </div>
  );
}
