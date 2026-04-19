"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────────── */
/* Pastel palette from screenshot: warm orange · slate blue · soft mint */
const ORANGE = { bg: "#FDDCB5", date: "#7C3A00", title: "#5C2A00", desc: "#7C3A00", dot: "#F4A050" };
const SLATE  = { bg: "#D0D8E8", date: "#1E2D4A", title: "#0F1C32", desc: "#1E2D4A", dot: "#4A6080" };
const MINT   = { bg: "#B8EDD8", date: "#0B4D32", title: "#063320", desc: "#0B4D32", dot: "#3BB882" };

const experiences = [
  {
    date: "Jan 2023 – Jan 2025",
    title: "Frontend Developer — BehineSazanToos (BSTC)",
    desc: "Modularized Vue 3 components, improved large-scale analytics dashboard performance, streamlined frontend data handling with backend engineers.",
    color: ORANGE,
  },
  {
    date: "Sep 2022 – Dec 2022",
    title: "Frontend Developer — SinanSoft",
    desc: "Built Next.js & TypeScript features across client modules, refined user flows with designers, resolved API data inconsistencies.",
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
    title: "Bachelor of Technology, Computer Software Engineering",
    desc: "Salman Institute, Mashhad, Iran",
    color: ORANGE,
  },
];

/* ─── Card ──────────────────────────────────────────────────── */
function TimelineCard({
  item,
}: {
  item: { date: string; title: string; desc: string; color: { bg: string; date: string; title: string; desc: string; dot: string } };
}) {
  return (
    <div style={{ borderRadius: 10, padding: "14px 16px", background: item.color.bg, flex: 1 }}>
      <p style={{ margin: "0 0 5px", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: item.color.date }}>
        {item.date}
      </p>
      <p style={{ margin: "0 0 4px", fontSize: 13, fontWeight: 600, color: item.color.title }}>
        {item.title}
      </p>
      <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: item.color.desc }}>
        {item.desc}
      </p>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function EducationExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 24, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
      });
      if (leftRef.current) {
        gsap.from(leftRef.current.children, {
          x: -40, opacity: 0, stagger: 0.15, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
        });
      }
      if (rightRef.current) {
        gsap.from(rightRef.current.children, {
          x: 40, opacity: 0, stagger: 0.15, duration: 0.65, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 85%" },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const dots = [
    experiences[0].color.dot,
    educations[0].color.dot,
    experiences[1].color.dot,
    educations[1].color.dot,
    experiences[2].color.dot,
    educations[2].color.dot,
  ];

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "80px 32px 96px" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1
          ref={titleRef}
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            color: "#111827",
            marginBottom: 56,
          }}
        >
          Education And Experience
        </h1>

        <div style={{ display: "flex", gap: 0, alignItems: "stretch" }}>

          {/* LEFT: Experience */}
          <div ref={leftRef} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {experiences.map((exp) => (
              <TimelineCard key={exp.date} item={exp} />
            ))}
          </div>

          {/* CENTER spine */}
          <div style={{ width: 48, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 2, height: 30, background: "#e5e7eb" }} />
            {dots.map((dotColor, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: i < dots.length - 1 ? 1 : 0 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", border: `2px solid ${dotColor}`, background: "#fff", flexShrink: 0 }} />
                {i < dots.length - 1 && <div style={{ width: 2, flex: 1, background: "#e5e7eb", minHeight: 10 }} />}
              </div>
            ))}
            <div style={{ width: 2, height: 30, background: "#e5e7eb" }} />
          </div>

          {/* RIGHT: Education */}
          <div ref={rightRef} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            {educations.map((edu) => (
              <TimelineCard key={edu.date} item={edu} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
