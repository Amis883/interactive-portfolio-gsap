import { ReactNode } from "react";

export function HeroText({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-hero font-light tracking-tight leading-[1.1]">
      {children}
    </h1>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-display font-light tracking-tight">{children}</h2>;
}

export function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-base text-white/70 leading-relaxed max-w-xl">
      {children}
    </p>
  );
}
