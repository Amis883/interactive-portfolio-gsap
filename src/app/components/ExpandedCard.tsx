"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PortfolioItem } from "@/app/lib/data";

type ExpandedCardProps = {
  item: PortfolioItem;
  onClose: () => void;
};

export default function ExpandedCard({ item, onClose }: ExpandedCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Smooth entrance animation for expanded view
    gsap.fromTo(
      ref.current,
      { scale: 0.5, opacity: 0, y: 100 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div ref={ref} className="bg-white text-black p-10 rounded-2xl w-[600px]">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="mt-4">{item.description}</p>

        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-black text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
