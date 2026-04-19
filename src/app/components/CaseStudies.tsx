"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  id: number;
  tag: string;
  tagColor: string;
  tagBg: string;
  btnColor: string;
  title: string;
  description: string;
  imageAlt: string;
  imagePlaceholder: string; // gradient for placeholder
  layout: "image-right" | "image-left";
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    tag: "Fintech",
    tagColor: "text-amber-700",
    tagBg: "bg-amber-100",
    btnColor: "bg-amber-500 hover:bg-amber-400",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "Fintech case study",
    imagePlaceholder: "from-orange-200 to-orange-400",
    layout: "image-right",
  },
  {
    id: 2,
    tag: "EdTech",
    tagColor: "text-blue-700",
    tagBg: "bg-blue-100",
    btnColor: "bg-blue-600 hover:bg-blue-500",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "EdTech case study",
    imagePlaceholder: "from-slate-700 to-slate-900",
    layout: "image-left",
  },
  {
    id: 3,
    tag: "Pharma",
    tagColor: "text-teal-700",
    tagBg: "bg-teal-100",
    btnColor: "bg-teal-500 hover:bg-teal-400",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "Pharma case study",
    imagePlaceholder: "from-green-200 to-green-500",
    layout: "image-right",
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      const fromX = study.layout === "image-right" ? -40 : 40;
      const imgFromX = study.layout === "image-right" ? 40 : -40;

      tl.from(textRef.current, { x: fromX, opacity: 0, duration: 0.75 }).from(
        imgRef.current,
        { x: imgFromX, opacity: 0, duration: 0.75 },
        "-=0.55"
      );
    });

    return () => ctx.revert();
  }, [study.layout]);

  const textBlock = (
    <div ref={textRef} className="flex flex-col justify-center gap-4 max-w-lg">
      <span
        className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-mono font-semibold ${study.tagBg} ${study.tagColor}`}
      >
        {study.tag}
      </span>
      <h2 className="font-sans font-bold text-gray-900 text-3xl leading-tight">
        {study.title}
      </h2>
      <p className="font-mono text-gray-500 text-sm leading-relaxed">
        {study.description}
      </p>
      <button
        className={`mt-2 w-fit px-6 py-3 rounded text-white font-mono text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${study.btnColor}`}
      >
        View case study &gt;
      </button>
    </div>
  );

  const imageBlock = (
    <div
      ref={imgRef}
      className="w-full max-w-[480px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
    >
      <div
        className={`w-full h-full bg-gradient-to-br ${study.imagePlaceholder} flex items-end p-4`}
      >
        <span className="font-mono text-white/60 text-xs">
          {study.imageAlt}
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        study.layout === "image-left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {study.layout === "image-right" ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}

export default function CaseStudies() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-20">
          <h1 className="font-sans font-bold text-gray-900 text-5xl mb-5">
            Case Studies
          </h1>
          <p className="font-mono text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
            Solving user &amp; business problems since last 15+ years.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Case study rows */}
        <div className="flex flex-col gap-24">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
