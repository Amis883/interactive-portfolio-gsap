"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ORANGE = {
  bg: "#FDDCB5",
  date: "#7C3A00",
  title: "#5C2A00",
  desc: "#7C3A00",
  dot: "#F4A050",
};
const SLATE = {
  bg: "#D0D8E8",
  date: "#1E2D4A",
  title: "#0F1C32",
  desc: "#1E2D4A",
  dot: "#4A6080",
};
const MINT = {
  bg: "#B8EDD8",
  date: "#0B4D32",
  title: "#063320",
  desc: "#0B4D32",
  dot: "#3BB882",
};

const experiences = [
  {
    date: "Jan 2023 – Jan 2025",
    title: "Frontend Developer — BehineSazanToos (BSTC)",
    desc: "Modularized Vue 3 components, improved large-scale analytics dashboard performance, streamlined frontend data handling.",
    color: ORANGE,
  },
  {
    date: "Sep 2022 – Dec 2022",
    title: "Frontend Developer — SinanSoft",
    desc: "Built Next.js & TypeScript features, refined user flows with designers, resolved API data inconsistencies.",
    color: SLATE,
  },
  {
    date: "May 2020 – Aug 2022",
    title: "Frontend Developer — Samatoos",
    desc: "Built real-time crypto dashboard features with React, created interactive visualization components with Material UI.",
    color: MINT,
  },
];

const educations = [
  {
    date: "Oct 2024 – Present",
    title: "Master's in Computer Science",
    desc: "University of Passau, Germany (currently enrolled)",
    color: MINT,
  },
  {
    date: "Oct 2012 – Mar 2014",
    title: "Master's in Artificial Intelligence",
    desc: "Imam Reza International University, Mashhad, Iran",
    color: SLATE,
  },
  {
    date: "Sep 2006 – Sep 2010",
    title: "Bachelor of Technology, CSE",
    desc: "Salman Institute, Mashhad, Iran",
    color: ORANGE,
  },
];

type Item = { date: string; title: string; desc: string; color: typeof ORANGE };

function TimelineCard({ item }: { item: Item }) {
  return (
    <div
      style={{
        borderRadius: 10,
        padding: "13px 15px",
        background: item.color.bg,
      }}
    >
      <p
        style={{
          margin: "0 0 3px",
          fontSize: "clamp(10px,1.5vw,11px)",
          fontWeight: 600,
          letterSpacing: "0.04em",
          color: item.color.date,
        }}
      >
        {item.date}
      </p>
      <p
        style={{
          margin: "0 0 4px",
          fontSize: "clamp(11px,1.6vw,13px)",
          fontWeight: 600,
          color: item.color.title,
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: "clamp(10px,1.4vw,12px)",
          lineHeight: 1.55,
          color: item.color.desc,
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

const sectionLabel: React.CSSProperties = {
  margin: "0 0 10px",
  fontSize: 11,
  fontWeight: 700,
  color: "#9ca3af",
  fontFamily: "'JetBrains Mono',monospace",
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
};

export default function EducationExperience() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 22,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
      });
      if (leftRef.current)
        gsap.from(leftRef.current.children, {
          x: -32,
          opacity: 0,
          stagger: 0.13,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 86%" },
        });
      if (rightRef.current)
        gsap.from(rightRef.current.children, {
          x: 32,
          opacity: 0,
          stagger: 0.13,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 86%" },
        });
    });
    return () => ctx.revert();
  }, []);

  const dots = [
    ORANGE.dot,
    MINT.dot,
    SLATE.dot,
    SLATE.dot,
    MINT.dot,
    ORANGE.dot,
  ];

  return (
    <section id="experience" className="tl-section">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1
          ref={titleRef}
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem,4vw,2.6rem)",
            color: "#111827",
            marginBottom: "clamp(28px,5vw,52px)",
          }}
        >
          Experience And Education
        </h1>

        <div className="tl-row">
          {/* LEFT */}
          <div
            ref={leftRef}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={sectionLabel}>Experience</p>
            {experiences.map((exp) => (
              <TimelineCard key={exp.date} item={exp} />
            ))}
          </div>

          {/* SPINE */}
          <div className="tl-spine">
            <div style={{ width: 2, height: 28, background: "#e5e7eb" }} />
            {dots.map((dotColor, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: i < dots.length - 1 ? 1 : 0,
                }}
              >
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    border: `2px solid ${dotColor}`,
                    background: "#fff",
                    flexShrink: 0,
                  }}
                />
                {i < dots.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      background: "#e5e7eb",
                      minHeight: 8,
                    }}
                  />
                )}
              </div>
            ))}
            <div style={{ width: 2, height: 28, background: "#e5e7eb" }} />
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <p style={sectionLabel}>Education</p>
            {educations.map((edu) => (
              <TimelineCard key={edu.date} item={edu} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
