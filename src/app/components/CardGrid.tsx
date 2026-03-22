"use client";

import { useState } from "react";
import { items } from "@/app/lib/data";
import Card from "./Card";
import ExpandedCard from "./ExpandedCard";


export default function CardGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <div className="grid grid-cols-3 gap-6 p-10">
        {items.map((item) => (
          <Card key={item.id} item={item} onClick={() => setActive(item.id)} />
        ))}
      </div>

      {active && (
        <ExpandedCard
          item={items.find((i) => i.id === active)!}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
