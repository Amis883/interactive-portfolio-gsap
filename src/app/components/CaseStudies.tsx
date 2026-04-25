"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    tag: "Frontend / UI",
    tagStyle: { background: "#ccfbf1", color: "#0f766e" },
    btnStyle: { background: "#14b8a6" },
    btnHover: "#0d9488",
    title: "Portfolio",
    description:
      "Built a modern, interactive portfolio using Next.js, Tailwind CSS, and GSAP. Fused on performance, smooth animations, and creating a clean, engaging user experience. Designed to showcase projects while reflecting strong attention to detail.",
    image: "/portfolio.png",
    imageAlt:
      "Interactive portfolio built with Next.js, Tailwind CSS, and GSAP",
    accentColor: "#14b8a6",
    shadowColor: "rgba(20,184,166,0.25)",
    link: "https://interactive-portfolio-gsap.vercel.app/",
    layout: "image-right" as const,
  },
  {
    id: 2,
    tag: "Dashboard / Data UI",
    tagStyle: { background: "#fef3c7", color: "#92400e" },
    btnStyle: { background: "#f59e0b" },
    btnHover: "#d97706",
    title: "Admin User Management Dashboard",
    description:
      "Built a responsive admin dashboard to manage large sets of user data efficiently. Designed filtering, pagination, and dynamic tables to make data easier to navigate and interact with. Focused on performance and usability to handle real-world data scenarios.",
    image: "/dashboard.png",
    imageAlt:
      "Admin dashboard with data tables, filtering, and user management",
    accentColor: "#f59e0b",
    shadowColor: "rgba(245,158,11,0.25)",
    link: "https://hoda-portfolio-ruby.vercel.app/admin/users",
    layout: "image-left" as const,
  },
  {
    id: 3,
    tag: "AI / Productivity",
    tagStyle: { background: "#dbeafe", color: "#1e40af" },
    btnStyle: { background: "#2563eb" },
    btnHover: "#1d4ed8",
    title: "AI Notes Application",
    description:
      "Built an AI-powered note-taking app that helps users generate and organize structured notes. Integrated AI features with a clean interface to simplify how users create and manage content. Focused on building a smooth, practical experience around AI-driven workflows.",
    image: "/ainotes.png",
    imageAlt: "AI-powered note taking app with structured content generation",
    accentColor: "#2563eb",
    shadowColor: "rgba(37,99,235,0.25)",
    link: "https://ai-notes-steel-zeta.vercel.app/",
    layout: "image-right" as const,
  },
];

/* ── Browser mockup frame around screenshot ── */
function BrowserMockup({
  image,
  alt,
  accent,
  shadow,
}: {
  image: string;
  alt: string;
  accent: string;
  shadow: string;
}) {
  return (
    <div
      style={{
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: `0 24px 64px ${shadow}, 0 4px 24px rgba(0,0,0,0.12)`,
        border: "1px solid #e5e7eb",
        background: "#fff",
        flex: "1 1 300px",
        minWidth: 0,
        maxWidth: 520,
      }}
    >
      {/* Browser chrome bar */}
      <div
        style={{
          background: "#f1f5f9",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#fc605b",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#fdbc40",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#34c749",
            }}
          />
        </div>
        {/* Fake URL bar */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #e2e8f0",
            borderRadius: 6,
            padding: "3px 10px",
            fontSize: 11,
            color: "#94a3b8",
            fontFamily: "monospace",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <span style={{ color: accent, marginRight: 4 }}>●</span>
          vercel.app
        </div>
      </div>

      {/* Screenshot */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/10",
          overflow: "hidden",
          background: "#f8fafc",
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        {/* Subtle gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(255,255,255,0.5), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ── Single case study row ── */
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
      tl.from(textRef.current, {
        x: fromText,
        opacity: 0,
        duration: 0.75,
      }).from(
        imgRef.current,
        { x: fromImg, opacity: 0, duration: 0.75 },
        "-=0.5",
      );
    });
    return () => ctx.revert();
  }, [study.layout]);

  const TextBlock = (
    <div
      ref={textRef}
      style={{
        flex: "1 1 280px",
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <span
        style={{
          ...study.tagStyle,
          display: "inline-block",
          width: "fit-content",
          padding: "5px 14px",
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
          lineHeight: 1.2,
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
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {study.description}
      </p>

      <button
        ref={btnRef}
        onClick={() => window.open(study.link, "_blank")}
        onMouseEnter={() => {
          if (btnRef.current) {
            btnRef.current.style.background = study.btnHover;
            gsap.to(btnRef.current, { scale: 1.03, duration: 0.18 });
          }
        }}
        onMouseLeave={() => {
          if (btnRef.current) {
            btnRef.current.style.background = study.btnStyle.background;
            gsap.to(btnRef.current, { scale: 1, duration: 0.18 });
          }
        }}
        style={{
          ...study.btnStyle,
          width: "fit-content",
          padding: "12px 26px",
          borderRadius: 8,
          border: "none",
          color: "#fff",
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "clamp(0.7rem,1.2vw,0.8125rem)",
          fontWeight: 700,
          letterSpacing: "0.04em",
          cursor: "pointer",
          transition: "background 0.2s",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        View case study
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );

  const ImageBlock = (
    <div ref={imgRef} style={{ flex: "1 1 300px", minWidth: 0, maxWidth: 520 }}>
      <BrowserMockup
        image={study.image}
        alt={study.imageAlt}
        accent={study.accentColor}
        shadow={study.shadowColor}
      />
    </div>
  );

  return (
    <div
      ref={cardRef}
      className="case-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(28px,5vw,56px)",
        flexWrap: "wrap",
      }}
    >
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

/* ── Section ── */
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
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          ref={headingRef}
          style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}
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
            A selection of real projects built from scratch — focused on
            performance, clean UI, and practical user experience.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(56px,8vw,100px)",
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
