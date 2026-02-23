"use client";

import { useState, useEffect } from "react";
import {
  FaWheatAwn,
  FaSeedling,
  FaLeaf,
  FaAppleWhole,
  FaCarrot,
  FaLemon,
  FaPepperHot,
  FaPlateWheat,
  FaMugHot,
  FaWineBottle,
  FaBowlRice,
  FaCow,
  FaFish,
  FaEgg,
  FaDroplet,
  FaSun,
  FaCloudRain,
  FaBug,
  FaFlask,
  FaTractor,
} from "react-icons/fa6";

const foodIcons = [
  FaWheatAwn, FaWheatAwn, FaWheatAwn, FaWheatAwn, FaWheatAwn,
  FaSeedling, FaSeedling, FaSeedling,
  FaLeaf, FaLeaf, FaLeaf,
  FaAppleWhole, FaAppleWhole,
  FaCarrot, FaLemon, FaPepperHot,
  FaPlateWheat, FaBowlRice,
  FaCow, FaFish, FaEgg,
  FaDroplet, FaSun, FaCloudRain,
  FaBug, FaFlask, FaTractor,
  FaMugHot, FaWineBottle,
  FaSeedling,
];

const colors = [
  "#16a34a", "#22c55e", "#4ade80", "#86efac",
  "#15803d", "#059669", "#10b981", "#34d399",
  "#a3e635", "#84cc16", "#65a30d", "#d9f99d",
  "#eab308", "#ca8a04", "#a16207",
];

interface IconItem {
  Icon: typeof FaWheatAwn;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  color: string;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
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
        Icon: foodIcons[Math.floor(r(1) * foodIcons.length)],
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

export default function FoodIcons() {
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
