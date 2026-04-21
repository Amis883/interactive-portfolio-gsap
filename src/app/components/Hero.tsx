"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const LOGOS = [
  {
    name: "Next.js",
    icon: <SiNextdotjs size={18} color="#ffffff" />,
  },
  {
    name: "React",
    icon: <SiReact size={18} color="#61DAFB" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={18} color="#3178C6" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={18} color="#38BDF8" />,
  },
  {
    name: "SQL",
    icon: <SiMysql size={18} color="#00758F" />, // بهترین نزدیک‌ترین برای SQL
  },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const workedRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(avatarRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
      });
      tl.from(
        headingRef.current,
        { y: 36, opacity: 0, duration: 0.7 },
        "-=0.65",
      );
      tl.from(roleRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.45");
      tl.from(introRef.current, { y: 20, opacity: 0, duration: 0.55 }, "-=0.4");
      tl.from(btnRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.35");
      tl.from(workedRef.current, { opacity: 0, duration: 0.4 }, "-=0.1");
      if (logosRef.current) {
        tl.from(
          logosRef.current.children,
          { opacity: 0, y: 14, stagger: 0.08, duration: 0.4 },
          "-=0.2",
        );
      }
      // Continuous green glow on button
      gsap.to(btnRef.current, {
        boxShadow: "0 0 40px 12px rgba(74,222,128,0.7)",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        delay: 2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* ── Main row: text left, avatar right ── */}
      <div className="hero-row">
        {/* Left: copy */}
        <div className="hero-text">
          <h1
            ref={headingRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Hoda Kakhki
          </h1>

          <p
            ref={roleRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.8rem, 1.4vw, 1rem)",
              color: "#22c55e",
              margin: 0,
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            Frontend Developer
          </p>

          <p
            ref={introRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)",
              color: "#9ca3af",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: 420,
            }}
          >
            Frontend Developer building reliable web applications, with a focus
            on dashboards and data-heavy systems. I work on making complex data
            easier to understand, improving performance, and keeping the
            frontend maintainable. Based in Germany and open to working student
            and full-time roles.
          </p>

          {/* CTA button — matches screenshot: wide, big, glowing green */}
          <button
            ref={btnRef}
            onMouseEnter={() =>
              gsap.to(btnRef.current, { scale: 1.03, duration: 0.18 })
            }
            onMouseLeave={() =>
              gsap.to(btnRef.current, { scale: 1, duration: 0.18 })
            }
            onClick={() =>
              document
                .querySelector("#get-in-touch")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              marginTop: 12,
              width: "100%",
              maxWidth: 320,
              padding: "18px 0",
              backgroundColor: "#22c55e",
              color: "#000000",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.8rem, 1.3vw, 0.95rem)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              boxShadow: "0 0 24px 6px rgba(74,222,128,0.5)",
              transition: "background-color 0.2s",
            }}
          >
            Let&apos;s get started &gt;
          </button>
        </div>

        {/* Right: circular avatar — position relative for Next.js Image fill */}
        <div
          ref={avatarRef}
          className="hero-avatar"
          style={{ position: "relative" }}
        >
          <Image
            src="/hero.jpg"
            alt="Hoda Kakhki"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* ── "Worked with" logo bar ── */}
      <div style={{ marginTop: "clamp(32px, 5vw, 56px)" }}>
        <p
          ref={workedRef}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
            color: "#6b7280",
            marginBottom: 16,
            letterSpacing: "0.04em",
          }}
        >
          Worked with
        </p>

        <div ref={logosRef} className="hero-logos">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="hero-logo-pill"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLDivElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLDivElement).style.color = "#9ca3af";
              }}
            >
              {logo.icon}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
