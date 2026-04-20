"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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
      tl.from(titleRef.current, { y: 28, opacity: 0, duration: 0.7 });
      if (formRef.current)
        tl.from(
          formRef.current.children,
          { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 },
          "-=0.3",
        );
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    background: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    fontSize: "clamp(12px,1.5vw,13px)",
    fontFamily: "'JetBrains Mono',monospace",
    color: "#1a1a1a",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 7,
    fontSize: "clamp(12px,1.4vw,13px)",
    fontWeight: 700,
    fontFamily: "'JetBrains Mono',monospace",
    color: "#ffffff",
    letterSpacing: "0.03em",
  };

  return (
    <>
      <section id="get-in-touch" ref={sectionRef} className="contact-section">
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.7rem,5vw,3rem)",
              color: "#fff",
              margin: "0 0 14px",
            }}
          >
            Get In Touch
          </h1>
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(0.7rem,1.3vw,0.8125rem)",
              color: "#6b7280",
              lineHeight: 1.8,
              maxWidth: "min(460px,90vw)",
              margin: "0 auto",
            }}
          >
            Have a project in mind or want to connect? Feel free to reach out —
            I&apos;m always open to new opportunities and conversations.
          </p>
        </div>

        <div ref={formRef} className="contact-form">
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
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
            />
          </div>
          <button
            ref={btnRef}
            onMouseEnter={() =>
              gsap.to(btnRef.current, { scale: 1.02, duration: 0.18 })
            }
            onMouseLeave={() =>
              gsap.to(btnRef.current, { scale: 1, duration: 0.18 })
            }
            style={{
              width: "100%",
              padding: "15px",
              background: "#3a8a12",
              border: "none",
              borderRadius: 8,
              color: "#fff",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(13px,1.5vw,14px)",
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

      <footer
        style={{
          background: "#141414",
          borderTop: "1px solid #1f1f1f",
          padding: "18px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 13,
            color: "#6b7280",
          }}
        >
          Made with <span style={{ color: "#ef4444", fontSize: 15 }}>♥</span>
        </p>
      </footer>
    </>
  );
}
