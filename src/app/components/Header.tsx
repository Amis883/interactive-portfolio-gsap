"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NAV = [
  "Home",
  "Case Studies",
  "Testimonials",
  "Recent work",
  "Get In Touch",
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      if (listRef.current) {
        gsap.from(listRef.current.children, {
          opacity: 0,
          y: -12,
          stagger: 0.08,
          duration: 0.5,
          delay: 0.35,
          ease: "power2.out",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      style={{
        width: "100%",
        backgroundColor: "#111111",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        boxSizing: "border-box",
      }}
    >
      <nav>
        <ul
          ref={listRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV.map((link, i) => (
            <li key={link}>
              <a
                href="#"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.875rem",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  color: i === 0 ? "#ffffff" : "#9ca3af",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    i === 0 ? "#fff" : "#9ca3af")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* LinkedIn */}
        <a
          href="#"
          style={{ color: "#9ca3af", display: "flex" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")
          }
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        {/* Behance */}
        <a
          href="#"
          style={{ color: "#9ca3af", display: "flex" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")
          }
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.717 1.83 1.895 1.83.87 0 1.434-.4 1.612-1h4.247zM15.998 13h4.251c-.147-1.336-.836-1.977-2.005-1.977-1.239 0-1.975.696-2.246 1.977zM5.452 8.196C7.29 8.196 9 8.97 9 11.091c0 1.186-.632 1.85-1.544 2.266 1.16.42 1.985 1.23 1.985 2.747 0 2.554-2.008 3.376-4.277 3.376H0V8.196h5.452zM3.512 13.24h1.73c.799 0 1.46-.407 1.46-1.246 0-.873-.66-1.213-1.46-1.213H3.512v2.459zm0 4.44h1.924c.873 0 1.618-.39 1.618-1.357 0-.98-.783-1.354-1.618-1.354H3.512v2.71z" />
          </svg>
        </a>
        {/* Twitter/X */}
        <a
          href="#"
          style={{ color: "#9ca3af", display: "flex" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")
          }
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
