"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: "languages",
    title: "Languages & Core",
    subtitle: "Foundation technologies",
    iconBg: "#fce7f3",
    iconColor: "#ec4899",
    barColor: "#ec4899",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "JavaScript", pct: 92 },
      { name: "TypeScript", pct: 88 },
      { name: "HTML / CSS / SASS", pct: 95 },
      { name: "MySQL / Node.js", pct: 75 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & UI",
    subtitle: "Frontend ecosystem",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    barColor: "#7c3aed",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    skills: [
      { name: "React / Next.js", pct: 93 },
      { name: "Vue 3 / Quasar", pct: 85 },
      { name: "Tailwind / Bootstrap", pct: 90 },
      { name: "Material UI", pct: 82 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Methods",
    subtitle: "Workflow & collaboration",
    iconBg: "#dbeafe",
    iconColor: "#3b82f6",
    barColor: "#3b82f6",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Git / Figma / Shopify", pct: 90 },
      { name: "REST API / AJAX", pct: 88 },
      { name: "Responsive Design / UI-UX", pct: 92 },
      { name: "Scrum", pct: 80 },
    ],
  },
];

function SkillBar({
  name,
  pct,
  color,
}: {
  name: string;
  pct: number;
  color: string;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(barRef.current, {
        width: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: barRef.current, start: "top 92%" },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div style={{ marginBottom: 12 }}>
      <p
        style={{
          margin: "0 0 4px",
          fontSize: 12,
          fontWeight: 600,
          color: "#1f2937",
          fontFamily: "sans-serif",
        }}
      >
        {name}
      </p>
      <div
        style={{
          height: 5,
          background: "#f3f4f6",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          ref={barRef}
          style={{
            height: "100%",
            borderRadius: 99,
            background: color,
            width: `${pct}%`,
          }}
        />
      </div>
    </div>
  );
}

function CardContent({ cat }: { cat: (typeof categories)[0] }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 9,
            background: cat.iconBg,
            color: cat.iconColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {cat.icon}
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: "#111827",
              fontFamily: "sans-serif",
            }}
          >
            {cat.title}
          </h3>
          <p
            style={{
              margin: "1px 0 0",
              fontSize: 10,
              color: "#9ca3af",
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            {cat.subtitle}
          </p>
        </div>
      </div>
      {cat.skills.map((s) => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} color={cat.barColor} />
      ))}
    </>
  );
}

export default function MySkills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        defaults: { ease: "power3.out" },
      });
      tl.from(headerRef.current, { y: 24, opacity: 0, duration: 0.7 });
      if (desktopRef.current)
        tl.from(
          desktopRef.current.children,
          { y: 28, opacity: 0, stagger: 0.1, duration: 0.6 },
          "-=0.3",
        );
      if (mobileRef.current)
        tl.from(
          mobileRef.current.children,
          { y: 28, opacity: 0, stagger: 0.1, duration: 0.6 },
          "-=0.3",
        );
    });
    return () => ctx.revert();
  }, []);

  const sideCard = (side: "left" | "right") =>
    ({
      background: "#fff",
      borderRadius: 18,
      padding: "28px 24px",
      width: 260,
      flexShrink: 0,
      boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
      zIndex: 1,
      alignSelf: "center",
      marginTop: 56,
      ...(side === "left" ? { marginRight: -18 } : { marginLeft: -18 }),
    }) as React.CSSProperties;

  return (
    <section id="my-skills" className="skills-section">
      {/* ── Desktop overlapping layout ── */}
      <div
        ref={desktopRef}
        className="skills-desktop"
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          width: "100%",
          maxWidth: 880,
        }}
      >
        <div style={sideCard("left")}>
          <CardContent cat={categories[0]} />
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: 22,
            padding: "26px 26px 22px",
            flex: "1 1 0",
            minWidth: 260,
            maxWidth: 340,
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            ref={headerRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#a78bfa,#7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                className="hero-avatar"
                src="/hero.jpg"
                alt="Hoda Kakhki"
                style={{ objectFit: "cover" }}
                fill
              />
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#111827",
                  fontFamily: "sans-serif",
                }}
              >
                My Skills
              </h2>
              <p
                style={{
                  margin: "2px 0 0",
                  fontSize: 10,
                  color: "#9ca3af",
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                Here&apos;s my main skill
              </p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: 14,
              border: "1px solid #f3f4f6",
              padding: "18px 14px",
            }}
          >
            <CardContent cat={categories[1]} />
          </div>
          <p
            style={{
              marginTop: 16,
              fontSize: 11,
              color: "#9ca3af",
              fontFamily: "'JetBrains Mono',monospace",
              textAlign: "center",
            }}
          >
            See my complete skills on my resume
          </p>
        </div>

        <div style={sideCard("right")}>
          <CardContent cat={categories[2]} />
        </div>
      </div>

      {/* ── Mobile stacked layout ── */}
      <div ref={mobileRef} className="skills-mobile">
        {/* Header pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#fff",
            borderRadius: 14,
            padding: "16px 18px",
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg,#a78bfa,#7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            HK
          </div>
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                color: "#111827",
                fontFamily: "sans-serif",
              }}
            >
              My Skills
            </h2>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 11,
                color: "#9ca3af",
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              Frontend Developer
            </p>
          </div>
        </div>
        {/* All 3 cards */}
        {categories.map((cat) => (
          <div
            key={cat.id}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "18px 16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <CardContent cat={cat} />
          </div>
        ))}
        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "#6b7280",
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          See my complete skills on my resume
        </p>
      </div>
    </section>
  );
}
