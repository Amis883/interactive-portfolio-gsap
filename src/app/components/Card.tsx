"use client";

import { PortfolioItem } from "@/app//lib/data";

type CardProps = {
  item: PortfolioItem;
  onClick: () => void;
};

export default function Card({ item, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-6 border border-white/20 rounded-xl hover:bg-white/10 transition"
    >
      <p className="text-sm opacity-60">{item.category}</p>
      <h2 className="text-xl mt-2">{item.title}</h2>
    </div>
  );
}
