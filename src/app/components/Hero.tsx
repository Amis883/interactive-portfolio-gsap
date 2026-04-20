"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const LOGOS = [
  {
    name: "ClickUp",
    icon: (
      <svg key="cu" width="14" height="14" viewBox="0 0 16 16" fill="none">
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
      <svg key="db" width="14" height="14" viewBox="0 0 40 40" fill="#0061FF">
        <polygon points="10,4 20,11 10,18 0,11" />
        <polygon points="30,4 40,11 30,18 20,11" />
        <polygon points="0,22 10,29 20,22 10,15" />
        <polygon points="20,22 30,29 40,22 30,15" />
        <polygon points="10,31 20,24 30,31 20,38" />
      </svg>
    ),
  },
  { name: "PAYCHEX", icon: null },
  {
    name: "elastic",
    icon: (
      <svg key="el" width="14" height="14" viewBox="0 0 30 30">
        <circle cx="15" cy="8" r="7" fill="#FEC514" />
        <circle cx="15" cy="22" r="7" fill="#00BFB3" />
      </svg>
    ),
  },
  { name: "stripe", icon: null },
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
        x: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.4,
      });
      tl.from(
        headingRef.current,
        { y: 32, opacity: 0, duration: 0.7 },
        "-=0.6",
      );
      tl.from(introRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
      tl.from(btnRef.current, { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
      tl.from(workedRef.current, { opacity: 0, duration: 0.4 }, "-=0.1");
      if (logosRef.current) {
        tl.from(
          logosRef.current.children,
          { opacity: 0, y: 12, stagger: 0.07, duration: 0.35 },
          "-=0.2",
        );
      }
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
    <section id="home" className="hero-section">
      <div className="hero-row">
        {/* Text */}
        <div className="hero-text">
          <h1
            ref={headingRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1.75rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Hoda Kakhki
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
              color: "#22c55e",
              margin: 0,
              letterSpacing: "0.08em",
              fontWeight: 600,
            }}
          >
            Frontend Developer
          </p>
          <p
            ref={introRef}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.72rem, 1.5vw, 0.875rem)",
              color: "#9ca3af",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Frontend Developer with 4+ years of experience building dashboards
            and data-heavy web applications using React, Next.js, and Vue.
          </p>
          <button
            ref={btnRef}
            onMouseEnter={() =>
              gsap.to(btnRef.current, { scale: 1.04, duration: 0.18 })
            }
            onMouseLeave={() =>
              gsap.to(btnRef.current, { scale: 1, duration: 0.18 })
            }
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#get-in-touch")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              width: "fit-content",
              padding: "clamp(11px,2vw,15px) clamp(20px,4vw,40px)",
              backgroundColor: "#22c55e",
              color: "#000",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.72rem, 1.3vw, 0.875rem)",
              fontWeight: 700,
              letterSpacing: "0.1em",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              boxShadow: "0 0 22px 5px rgba(74,222,128,0.45)",
              transition: "background-color 0.2s",
              position: "relative",
              marginTop: "80px",
            }}
          >
            Let&apos;s get started &gt;
          </button>
        </div>

        {/* Avatar */}
        <div ref={avatarRef} className="hero-avatar">
          <Image
            src="/hero.jpg"
            alt="Hoda Kakhki"
            fill
            style={{ objectFit: "cover" }}
          />
                 </div>
      </div>

      {/* Logos */}
      <div style={{ marginTop: "clamp(28px, 5vw, 48px)" }}>
        <p
          ref={workedRef}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(0.7rem, 1.2vw, 0.875rem)",
            color: "#6b7280",
            marginBottom: 12,
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
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
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
