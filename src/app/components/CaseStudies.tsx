"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────────── */
const caseStudies = [
  {
    id: 1,
    tag: "Fintech",
    tagStyle: { background: "#fef3c7", color: "#92400e" },
    btnStyle: { background: "#f59e0b" },
    btnHover: "#fbbf24",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "Fintech case study",
    imageBg: "linear-gradient(135deg,#fed7aa,#fb923c)",
    layout: "image-right" as const,
  },
  {
    id: 2,
    tag: "EdTech",
    tagStyle: { background: "#dbeafe", color: "#1e40af" },
    btnStyle: { background: "#2563eb" },
    btnHover: "#3b82f6",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "EdTech case study",
    imageBg: "linear-gradient(135deg,#334155,#0f172a)",
    layout: "image-left" as const,
  },
  {
    id: 3,
    tag: "Pharma",
    tagStyle: { background: "#ccfbf1", color: "#0f766e" },
    btnStyle: { background: "#14b8a6" },
    btnHover: "#2dd4bf",
    title: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    imageAlt: "Pharma case study",
    imageBg: "linear-gradient(135deg,#a7f3d0,#10b981)",
    layout: "image-right" as const,
  },
];

/* ─── Card ──────────────────────────────────────────────────── */
function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fromText = study.layout === "image-right" ? -40 : 40;
      const fromImg = study.layout === "image-right" ? 40 : -40;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });
      tl.from(textRef.current, { x: fromText, opacity: 0, duration: 0.75 }).from(
        imgRef.current,
        { x: fromImg, opacity: 0, duration: 0.75 },
        "-=0.5"
      );
    });
    return () => ctx.revert();
  }, [study.layout]);

  const handleEnter = () => {
    if (btnRef.current) btnRef.current.style.background = study.btnHover;
  };
  const handleLeave = () => {
    if (btnRef.current) btnRef.current.style.background = study.btnStyle.background;
  };

  const TextBlock = (
    <div
      ref={textRef}
      style={{ flex: "1 1 0", minWidth: 0, maxWidth: 480, display: "flex", flexDirection: "column", gap: 16 }}
    >
      <span
        style={{
          ...study.tagStyle,
          display: "inline-block",
          width: "fit-content",
          padding: "4px 14px",
          borderRadius: 999,
          fontSize: 12,
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
        }}
      >
        {study.tag}
      </span>
      <h2
        style={{
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem,3vw,2rem)",
          color: "#111827",
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {study.title}
      </h2>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: "#6b7280",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {study.description}
      </p>
      <button
        ref={btnRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{
          ...study.btnStyle,
          marginTop: 8,
          width: "fit-content",
          padding: "12px 24px",
          borderRadius: 6,
          border: "none",
          color: "#fff",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.04em",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        View case study &gt;
      </button>
    </div>
  );

  const ImageBlock = (
    <div
      ref={imgRef}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        maxWidth: 480,
        borderRadius: 12,
        overflow: "hidden",
        aspectRatio: "4/3",
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        background: study.imageBg,
        display: "flex",
        alignItems: "flex-end",
        padding: 16,
      }}
    >
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
        {study.imageAlt}
      </span>
    </div>
  );

  return (
    <div
      ref={cardRef}
      style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 48, flexWrap: "wrap" }}
    >
      {study.layout === "image-right" ? <>{TextBlock}{ImageBlock}</> : <>{ImageBlock}{TextBlock}</>}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function CaseStudies() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 32, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ background: "#ffffff", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div ref={headingRef} style={{ textAlign: "center", marginBottom: 80 }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5vw,3.2rem)",
              color: "#111827",
              marginBottom: 20,
            }}
          >
            Case Studies
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: "#6b7280",
              lineHeight: 1.8,
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Solving user &amp; business problems since last 15+ years.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {caseStudies.map((s) => <CaseStudyCard key={s.id} study={s} />)}
        </div>
      </div>
    </section>
  );
}
