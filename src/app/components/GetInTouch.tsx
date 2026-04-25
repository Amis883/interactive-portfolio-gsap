"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Status = "idle" | "loading" | "success" | "error";

export default function GetInTouch() {
  const sectionRef  = useRef<HTMLElement>(null);
  const titleRef    = useRef<HTMLDivElement>(null);
  const formRef     = useRef<HTMLDivElement>(null);
  const btnRef      = useRef<HTMLButtonElement>(null);
  const successRef  = useRef<HTMLDivElement>(null);

  const [email,   setEmail]   = useState("");
  const [mobile,  setMobile]  = useState("");
  const [message, setMessage] = useState("");
  const [errors,  setErrors]  = useState<{ email?: string; message?: string }>({});
  const [status,  setStatus]  = useState<Status>("idle");

  /* ── entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        defaults: { ease: "power3.out" },
      });
      tl.from(titleRef.current, { y: 28, opacity: 0, duration: 0.7 });
      if (formRef.current) {
        tl.from(formRef.current.children, { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3");
      }
      gsap.to(btnRef.current, {
        boxShadow: "0 0 28px 6px rgba(74,190,34,0.45)",
        repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut", delay: 1.2,
      });
    });
    return () => ctx.revert();
  }, []);

  /* ── animate success card in ── */
  useEffect(() => {
    if (status === "success" && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { scale: 0.85, opacity: 0, y: 24 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" }
      );
    }
  }, [status]);

  /* ── validation ── */
  function validate() {
    const e: { email?: string; message?: string } = {};
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (!message.trim() || message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  /* ── submit via Formspree ── */
  async function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, mobile, message }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  /* ── shared styles ── */
  const labelStyle: React.CSSProperties = {
    display: "block", marginBottom: 7,
    fontSize: "clamp(12px,1.4vw,13px)", fontWeight: 700,
    fontFamily: "'JetBrains Mono',monospace",
    color: "#ffffff", letterSpacing: "0.03em",
  };

  function inputStyle(hasError?: boolean): React.CSSProperties {
    return {
      width: "100%", padding: "13px 15px",
      background: "#f9f9f9",
      border: `1px solid ${hasError ? "#ef4444" : "#e0e0e0"}`,
      borderRadius: 8,
      fontSize: "clamp(12px,1.5vw,13px)",
      fontFamily: "'JetBrains Mono',monospace",
      color: "#1a1a1a", outline: "none", boxSizing: "border-box",
      transition: "border-color 0.2s",
    };
  }

  /* ── SUCCESS STATE ── */
  if (status === "success") {
    return (
      <>
        <section id="get-in-touch" ref={sectionRef} className="contact-section">
          <div
            ref={successRef}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              gap: 24, textAlign: "center", maxWidth: 440, width: "100%",
            }}
          >
            {/* checkmark circle */}
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "rgba(34,197,94,0.12)",
              border: "2px solid #22c55e",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>

            <h2 style={{
              fontFamily: "sans-serif", fontWeight: 700,
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              color: "#ffffff", margin: 0,
            }}>
              Message Sent!
            </h2>

            <p style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(0.75rem,1.3vw,0.875rem)",
              color: "#9ca3af", lineHeight: 1.8, margin: 0,
            }}>
              Thank you for reaching out! 🙌<br />
              I&apos;ve received your message and will get back to you as soon as possible — usually within 24 hours.
            </p>

            <div style={{
              background: "rgba(34,197,94,0.07)",
              border: "1px solid rgba(34,197,94,0.25)",
              borderRadius: 10, padding: "14px 20px",
              width: "100%",
            }}>
              <p style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 12, color: "#6b7280", margin: "0 0 4px",
              }}>
                Message sent to
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 13, color: "#22c55e", margin: 0, fontWeight: 600,
              }}>
                {email}
              </p>
            </div>

            <button
              onClick={() => {
                setStatus("idle");
                setEmail(""); setMobile(""); setMessage("");
              }}
              style={{
                marginTop: 8, padding: "12px 32px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8, color: "#9ca3af",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 13, cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#22c55e";
                (e.currentTarget as HTMLButtonElement).style.color = "#22c55e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLButtonElement).style.color = "#9ca3af";
              }}
            >
              Send another message
            </button>
          </div>
        </section>

        <footer style={{ background: "#141414", borderTop: "1px solid #1f1f1f", padding: "18px 24px", textAlign: "center" }}>
          <p style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#6b7280" }}>
            Made with <span style={{ color: "#ef4444", fontSize: 15 }}>♥</span>
          </p>
        </footer>
      </>
    );
  }

  /* ── FORM STATE (idle | loading | error) ── */
  return (
    <>
      <section id="get-in-touch" ref={sectionRef} className="contact-section">

        {/* Heading */}
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{
            fontFamily: "sans-serif", fontWeight: 700,
            fontSize: "clamp(1.7rem,5vw,3rem)",
            color: "#fff", margin: "0 0 14px",
          }}>
            Get In Touch
          </h1>
          <p style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "clamp(0.7rem,1.3vw,0.8125rem)",
            color: "#6b7280", lineHeight: 1.8,
            maxWidth: "min(460px,90vw)", margin: "0 auto",
          }}>
            Have a project in mind or want to connect? Feel free to reach out —
            I&apos;m always open to new opportunities and conversations.
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className="contact-form">

          {/* Email */}
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="hodakakhki51@gmail.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
              style={inputStyle(!!errors.email)}
            />
            {errors.email && (
              <p style={{ margin: "5px 0 0", fontSize: 11, color: "#ef4444", fontFamily: "'JetBrains Mono',monospace" }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label style={labelStyle}>Mobile</label>
            <input
              type="tel"
              placeholder="+49 123 456 7890"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={inputStyle()}
            />
          </div>

          {/* Message */}
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Tell me about your project or just say hi..."
              value={message}
              onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
              rows={5}
              style={{ ...inputStyle(!!errors.message), resize: "none", lineHeight: 1.6 }}
            />
            {errors.message && (
              <p style={{ margin: "5px 0 0", fontSize: 11, color: "#ef4444", fontFamily: "'JetBrains Mono',monospace" }}>
                {errors.message}
              </p>
            )}
          </div>

          {/* Server error banner */}
          {status === "error" && (
            <div style={{
              padding: "12px 16px",
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.3)",
              borderRadius: 8,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12, color: "#fca5a5",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Something went wrong. Please try again or email me directly at hodakakhki51@gmail.com
            </div>
          )}

          {/* Submit button */}
          <button
            ref={btnRef}
            onClick={handleSubmit}
            disabled={status === "loading"}
            onMouseEnter={() => status !== "loading" && gsap.to(btnRef.current, { scale: 1.02, duration: 0.18 })}
            onMouseLeave={() => gsap.to(btnRef.current, { scale: 1, duration: 0.18 })}
            style={{
              width: "100%", padding: "16px",
              background: status === "loading" ? "#2d7010" : "#3a8a12",
              border: "none", borderRadius: 8,
              color: "#fff", fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(13px,1.5vw,14px)", fontWeight: 700,
              letterSpacing: "0.06em",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              transition: "background 0.2s",
              boxShadow: "0 0 16px 3px rgba(74,190,34,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}
          >
            {status === "loading" ? (
              <>
                {/* spinner */}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  style={{ animation: "spin 0.8s linear infinite" }}
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                Sending...
              </>
            ) : (
              "Submit >"
            )}
          </button>

          {/* spin keyframe */}
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      </section>

      <footer style={{ background: "#141414", borderTop: "1px solid #1f1f1f", padding: "18px 24px", textAlign: "center" }}>
        <p style={{ margin: 0, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: "#6b7280" }}>
          Made with <span style={{ color: "#ef4444", fontSize: 15 }}>♥</span>
        </p>
      </footer>
    </>
  );
}
