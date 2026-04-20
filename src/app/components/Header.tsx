"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "My Skills", href: "#my-skills" },
  { label: "Experience", href: "#experience" },
  { label: "Get In Touch", href: "#get-in-touch" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  document
    .querySelector(href)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const SocialLinks = () => (
  <>
    <a
      href="https://linkedin.com/in/hoda-kakhki"
      target="_blank"
      rel="noreferrer"
      style={{ color: "#9ca3af", display: "flex", transition: "color 0.2s" }}
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
    <a
      href="https://github.com/Amis883"
      target="_blank"
      rel="noreferrer"
      style={{ color: "#9ca3af", display: "flex", transition: "color 0.2s" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af")
      }
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.511.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
      </svg>
    </a>
  </>
);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      if (navRef.current) {
        gsap.from(navRef.current.children, {
          opacity: 0,
          y: -10,
          stagger: 0.07,
          duration: 0.45,
          delay: 0.3,
          ease: "power2.out",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const handleLink =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      scrollTo(e, href);
    };

  const hamBar = (rotate: string, opacity: number) => (
    <span
      style={{
        display: "block",
        width: 22,
        height: 2,
        background: open ? "#22c55e" : "#fff",
        borderRadius: 2,
        transition: "transform 0.25s, opacity 0.25s",
        transform: rotate,
        opacity,
      }}
    />
  );

  return (
    <div className="header-wrap">
      <header ref={headerRef} className="header-inner">
        <span
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            fontFamily: "'JetBrains Mono',monospace",
          }}
        >
          Hoda Kakhki
        </span>

        {/* Desktop nav */}
        <nav>
          <ul ref={navRef} className="header-nav">
            {NAV.map(({ label, href }, i) => (
              <li key={label} style={{ listStyle: "none" }}>
                <a
                  href={href}
                  onClick={handleLink(href)}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    color: i === 0 ? "#fff" : "#9ca3af",
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
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop social */}
        <div className="header-icons">
          <SocialLinks />
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {hamBar(open ? "rotate(45deg) translate(5px,5px)" : "none", 1)}
          {hamBar("none", open ? 0 : 1)}
          {hamBar(open ? "rotate(-45deg) translate(5px,-5px)" : "none", 1)}
        </button>

        {/* Mobile dropdown */}
        {open && (
          <div className="mobile-menu">
            {NAV.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                onClick={handleLink(href)}
                style={{ color: i === 0 ? "#fff" : "#9ca3af" }}
              >
                {label}
              </a>
            ))}
            <div className="mobile-menu-icons">
              <SocialLinks />
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
