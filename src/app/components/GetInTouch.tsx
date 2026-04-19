"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        defaults: { ease: "power3.out" },
      });
      tl.from(titleRef.current, { y: 30, opacity: 0, duration: 0.7 });
      if (formRef.current) {
        tl.from(formRef.current.children, { y: 24, opacity: 0, stagger: 0.12, duration: 0.55 }, "-=0.3");
      }

      /* green glow pulse on button */
      gsap.to(btnRef.current, {
        boxShadow: "0 0 28px 6px rgba(74,190,34,0.45)",
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
        delay: 1.2,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => gsap.to(btnRef.current, { scale: 1.02, duration: 0.18 });
  const handleMouseLeave = () => gsap.to(btnRef.current, { scale: 1, duration: 0.18 });

  /* shared input style */
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    fontSize: 13,
    fontFamily: "'JetBrains Mono', monospace",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 8,
    fontSize: 13,
    fontWeight: 700,
    fontFamily: "'JetBrains Mono', monospace",
    color: "#ffffff",
    letterSpacing: "0.03em",
  };

  return (
    <>
      {/* ── Contact Section ─────────────────────────────────── */}
      <section
        ref={sectionRef}
        style={{
          background: "#0a0a0a",
          padding: "96px 32px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#ffffff",
              margin: "0 0 16px",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: "#6b7280",
              lineHeight: 1.8,
              maxWidth: 480,
              margin: 0,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Form */}
        <div
          ref={formRef}
          style={{
            width: "100%",
            maxWidth: 380,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Email */}
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Mobile */}
          <div>
            <label style={labelStyle}>Mobile</label>
            <input
              type="tel"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              style={{
                ...inputStyle,
                resize: "none",
                lineHeight: 1.6,
              }}
            />
          </div>

          {/* Submit */}
          <button
            ref={btnRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: "100%",
              padding: "16px",
              background: "#3a8a12",
              border: "none",
              borderRadius: 8,
              color: "#ffffff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.06em",
              cursor: "pointer",
              transition: "background 0.2s",
              boxShadow: "0 0 16px 3px rgba(74,190,34,0.3)",
            }}
          >
            Submit &gt;
          </button>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        style={{
          background: "#141414",
          borderTop: "1px solid #222",
          padding: "20px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: "#6b7280",
            letterSpacing: "0.04em",
          }}
        >
          Made with{" "}
          <span style={{ color: "#ef4444", fontSize: 15 }}>♥</span>
        </p>
      </footer>
    </>
  );
}
