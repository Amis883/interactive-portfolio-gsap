"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────────── */
const categories = [
  {
    id: "languages",
    title: "Languages & Core",
    subtitle: "Foundation technologies",
    iconBg: "#fce7f3",
    iconColor: "#ec4899",
    barColor: "#ec4899",
    elevated: false,
    icon: (
      <svg
        width="20"
        height="20"
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
    elevated: true,
    icon: (
      <svg
        width="20"
        height="20"
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
      { name: "Tailwind CSS / Bootstrap", pct: 90 },
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
    elevated: false,
    icon: (
      <svg
        width="20"
        height="20"
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

/* ─── Progress Bar ─────────────────────────────────────────── */
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
        scrollTrigger: { trigger: barRef.current, start: "top 90%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ marginBottom: 14 }}>
      <p
        style={{
          margin: "0 0 5px",
          fontSize: 13,
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

/* ─── Section ──────────────────────────────────────────────── */
export default function MySkills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        defaults: { ease: "power3.out" },
      });
      tl.from(headerRef.current, { y: 24, opacity: 0, duration: 0.7 });
      if (cardsRef.current) {
        tl.from(
          cardsRef.current.children,
          { y: 32, opacity: 0, stagger: 0.12, duration: 0.65 },
          "-=0.3",
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "80px 32px 100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Outer layout: side cards + big center panel */}
      <div
        ref={cardsRef}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          width: "100%",
          maxWidth: 900,
          position: "relative",
        }}
      >
        {/* LEFT card — sits behind/beside the big panel */}
        {(() => {
          const cat = categories[0];
          return (
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "24px 20px",
                width: 260,
                flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                zIndex: 1,
                marginRight: -20,
                alignSelf: "center",
                marginTop: 60,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
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
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#111827",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      margin: "2px 0 0",
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
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  color={cat.barColor}
                />
              ))}
            </div>
          );
        })()}

        {/* BIG CENTER PANEL — white rounded container */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: "28px 28px 24px",
            flex: "1 1 0",
            minWidth: 280,
            maxWidth: 360,
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            zIndex: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Header inside panel */}
          <div
            ref={headerRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#a78bfa,#7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 18,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              Y
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 18,
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
                Here&apos;s my main skill, pick card to reveal
              </p>
            </div>
          </div>

          {/* Middle skill card inside panel */}
          {(() => {
            const cat = categories[1];
            return (
              <div
                style={{
                  width: "100%",
                  borderRadius: 16,
                  border: "1px solid #f3f4f6",
                  padding: "20px 16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
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
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#111827",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {cat.title}
                    </h3>
                    <p
                      style={{
                        margin: "2px 0 0",
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
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    pct={s.pct}
                    color={cat.barColor}
                  />
                ))}
              </div>
            );
          })()}

          {/* Footer text */}
          <p
            style={{
              marginTop: 20,
              fontSize: 12,
              color: "#9ca3af",
              fontFamily: "'JetBrains Mono',monospace",
              textAlign: "center",
            }}
          >
            See my complete skills on my resume
          </p>
        </div>

        {/* RIGHT card */}
        {(() => {
          const cat = categories[2];
          return (
            <div
              style={{
                background: "#ffffff",
                borderRadius: 20,
                padding: "24px 20px",
                width: 260,
                flexShrink: 0,
                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                zIndex: 1,
                marginLeft: -20,
                alignSelf: "center",
                marginTop: 60,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
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
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#111827",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      margin: "2px 0 0",
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
                <SkillBar
                  key={s.name}
                  name={s.name}
                  pct={s.pct}
                  color={cat.barColor}
                />
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
}
