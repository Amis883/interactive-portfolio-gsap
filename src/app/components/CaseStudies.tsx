"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    imageBg: "linear-gradient(150deg,#FDDBA0,#F9A84D)",
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
    imageBg: "linear-gradient(150deg,#2D3A4F,#1A2535)",
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
    imageBg: "linear-gradient(150deg,#7EEFC4,#34C98A)",
    layout: "image-right" as const,
  },
];

function CaseStudyCard({ study }: { study: (typeof caseStudies)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fromText = study.layout === "image-right" ? -36 : 36;
      const fromImg = study.layout === "image-right" ? 36 : -36;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });
      tl.from(textRef.current, { x: fromText, opacity: 0, duration: 0.7 }).from(
        imgRef.current,
        { x: fromImg, opacity: 0, duration: 0.7 },
        "-=0.5",
      );
    });
    return () => ctx.revert();
  }, [study.layout]);

  const TextBlock = (
    <div ref={textRef} className="case-text">
      <span
        style={{
          ...study.tagStyle,
          display: "inline-block",
          width: "fit-content",
          padding: "4px 14px",
          borderRadius: 999,
          fontSize: "clamp(11px,1.5vw,12px)",
          fontFamily: "'JetBrains Mono',monospace",
          fontWeight: 600,
        }}
      >
        {study.tag}
      </span>
      <h2
        style={{
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.3rem,3.5vw,2rem)",
          color: "#111827",
          lineHeight: 1.25,
          margin: 0,
        }}
      >
        {study.title}
      </h2>
      <p
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "clamp(0.7rem,1.3vw,0.8125rem)",
          color: "#6b7280",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {study.description}
      </p>
      <button
        ref={btnRef}
        onMouseEnter={() => {
          if (btnRef.current) btnRef.current.style.background = study.btnHover;
        }}
        onMouseLeave={() => {
          if (btnRef.current)
            btnRef.current.style.background = study.btnStyle.background;
        }}
        style={{
          ...study.btnStyle,
          width: "fit-content",
          padding: "11px 22px",
          borderRadius: 6,
          border: "none",
          color: "#fff",
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "clamp(0.7rem,1.2vw,0.8125rem)",
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
      className="case-image"
      style={{
        background: study.imageBg,
        display: "flex",
        alignItems: "flex-end",
        padding: 14,
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11,
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {study.imageAlt}
      </span>
    </div>
  );

  return (
    <div ref={cardRef} className="case-row">
      {study.layout === "image-right" ? (
        <>
          {TextBlock}
          {ImageBlock}
        </>
      ) : (
        <>
          {ImageBlock}
          {TextBlock}
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
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="case-studies" className="case-section">
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div
          ref={headingRef}
          style={{ textAlign: "center", marginBottom: "clamp(36px,6vw,72px)" }}
        >
          <h1
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.7rem,5vw,3rem)",
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Case Studies
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(0.7rem,1.3vw,0.8125rem)",
              color: "#6b7280",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Solving user &amp; business problems since last 15+ years.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(40px,7vw,88px)",
          }}
        >
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.id} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
