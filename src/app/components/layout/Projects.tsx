"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import CardModal from "../ui/CardModal";
import AboutCard from "../AboutCard";
import ExperienceCard from "../ExperienceCard";
import ProjectsCard from "../ProjectsCard";
import SkillsCard from "../SkillsCard";
import ThoughtsCard from "../ThoughtsCard";

// نوع کارت‌ها
type CardType = "about" | "experience" | "projects" | "skills" | "thoughts";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards =
      containerRef.current.querySelectorAll<HTMLDivElement>(".card");

    let time = 0;
    let animationId: number;

    const animate = () => {
      time += 0.015;

      cards.forEach((card, index) => {
        const x =
          ((time * 200 + index * 250) % (window.innerWidth + 400)) - 200;

        const y = Math.sin(time * 0.6 + index) * 90;

        gsap.set(card, {
          x,
          y,
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="h-screen w-screen overflow-hidden relative bg-black">
      <div ref={containerRef} className="relative w-full h-full">
        {/* About */}
        <div
          className="card absolute top-[20%] left-[-200px]"
          onClick={() => setActiveCard("about")}
        >
          <AboutCard />
        </div>

        {/* Experience */}
        <div
          className="card absolute top-[40%] left-[-200px]"
          onClick={() => setActiveCard("experience")}
        >
          <ExperienceCard />
        </div>

        {/* Projects */}
        <div
          className="card absolute top-[30%] left-[-200px]"
          onClick={() => setActiveCard("projects")}
        >
          <ProjectsCard />
        </div>

        {/* Skills */}
        <div
          className="card absolute top-[50%] left-[-200px]"
          onClick={() => setActiveCard("skills")}
        >
          <SkillsCard />
        </div>

        {/* Thoughts */}
        <div
          className="card absolute top-[35%] left-[-200px]"
          onClick={() => setActiveCard("thoughts")}
        >
          <ThoughtsCard />
        </div>
      </div>

      {/* Modal */}
      <CardModal activeCard={activeCard} onClose={() => setActiveCard(null)} />
    </section>
  );
}
