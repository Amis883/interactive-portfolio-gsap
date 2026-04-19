"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LOGOS = [
  {
    name: "ClickUp",
    icon: (
      <svg key="cu" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 10l6-6 6 6"
          stroke="#7B68EE"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 13l4-4 4 4"
          stroke="#00D1B2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    icon: (
      <svg key="db" width="16" height="16" viewBox="0 0 40 40" fill="#0061FF">
        <polygon points="10,4 20,11 10,18 0,11" />
        <polygon points="30,4 40,11 30,18 20,11" />
        <polygon points="0,22 10,29 20,22 10,15" />
        <polygon points="20,22 30,29 40,22 30,15" />
        <polygon points="10,31 20,24 30,31 20,38" />
      </svg>
    ),
  },
  { name: "PAYCHEX", icon: null, letterSpacing: "0.12em" },
  {
    name: "elastic",
    icon: (
      <svg key="el" width="16" height="16" viewBox="0 0 30 30">
        <circle cx="15" cy="8" r="7" fill="#FEC514" />
        <circle cx="15" cy="22" r="7" fill="#00BFB3" />
      </svg>
    ),
  },
  { name: "stripe", icon: null, letterSpacing: "0.05em" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
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
        delay: 0.4,
      });
      tl.from(
        headingRef.current,
        { y: 40, opacity: 0, duration: 0.7 },
        "-=0.6",
      );
      tl.from(introRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
      tl.from(btnRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
      tl.from(workedRef.current, { opacity: 0, duration: 0.4 }, "-=0.1");
      if (logosRef.current) {
        tl.from(
          logosRef.current.children,
          { opacity: 0, y: 16, stagger: 0.08, duration: 0.4 },
          "-=0.2",
        );
      }
      // Pulsing glow
      gsap.to(btnRef.current, {
        boxShadow: "0 0 36px 10px rgba(74,222,128,0.65)",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        delay: 1.8,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "calc(100vh - 65px)",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        padding: "64px 80px",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        boxSizing: "border-box",
      }}
    >
      {/* ── Main row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 1,
          gap: "40px",
        }}
      >
        {/* Left: copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "500px",
          }}
        >
          <h1
            ref={headingRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Your Name Here
          </h1>

          <p
            ref={introRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.875rem",
              color: "#9ca3af",
              lineHeight: 1.8,
              margin: 0,
              maxWidth: "400px",
            }}
          >
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button
            ref={btnRef}
            onMouseEnter={() =>
              gsap.to(btnRef.current, { scale: 1.04, duration: 0.2 })
            }
            onMouseLeave={() =>
              gsap.to(btnRef.current, { scale: 1.0, duration: 0.2 })
            }
            style={{
              marginTop: "8px",
              width: "fit-content",
              padding: "16px 44px",
              backgroundColor: "#22c55e",
              color: "#000000",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              boxShadow: "0 0 22px 5px rgba(74,222,128,0.45)",
              transition: "background-color 0.2s",
            }}
          >
            Let&apos;s get started &gt;
          </button>
        </div>

        {/* Right: avatar circle */}
        <div ref={avatarRef} style={{ position: "relative", flexShrink: 0 }}>
          <div
            style={{
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "#1e2a38",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 0 80px 20px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/*
              Replace with:
              <Image src="/your-photo.jpg" alt="Your Name" fill style={{ objectFit:"cover" }} />
            */}
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.75rem",
                color: "#4b5563",
              }}
            >
              Photo here
            </span>
          </div>
        </div>
      </div>

      {/* ── Logo bar ── */}
      <div style={{ marginTop: "60px" }}>
        <p
          ref={workedRef}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.875rem",
            color: "#6b7280",
            marginBottom: "16px",
            letterSpacing: "0.04em",
          }}
        >
          Worked with
        </p>

        <div
          ref={logosRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 24px",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "6px",
                color: "#d1d5db",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.875rem",
                fontWeight: 600,
                minWidth: "130px",
                letterSpacing: logo.letterSpacing ?? "normal",
                cursor: "default",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.color = "#d1d5db";
              }}
            >
              {logo.icon}
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
