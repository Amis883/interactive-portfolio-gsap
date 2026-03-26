"use client";

import { useEffect } from "react";
import gsap from "gsap";
import AboutCard from "../AboutCard";
import ExperienceCard from "../ExperienceCard";
import ProjectsCard from "../ProjectsCard";
import SkillsCard from "../SkillsCard";
import ThoughtsCard from "../ThoughtsCard";
export default function Projects() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    let time = 0;

    const animate = () => {
      time += 0.015;

      cards.forEach((card: any, index) => {
        // حرکت افقی (چپ → راست)
        const x =
          ((time * 200 + index * 250) % (window.innerWidth + 400)) - 200;

        // حرکت سینوسی (بالا پایین)
        const y = Math.sin(time * 0.5 + index) * 80;

        // حرکت مورب (ترکیب x + y)
        gsap.set(card, {
          x: x,
          y: y,
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="h-screen w-screen overflow-hidden relative bg-black">
      {/* Container */}
      <div className="relative w-full h-full">
        <div className="card absolute top-[20%] left-[-200px]">
          <AboutCard />
        </div>

        <div className="card absolute top-[40%] left-[-200px]">
          <ExperienceCard />
        </div>

        <div className="card absolute top-[30%] left-[-200px]">
          <ProjectsCard />
        </div>

        <div className="card absolute top-[50%] left-[-200px]">
          <SkillsCard />
        </div>

        <div className="card absolute top-[35%] left-[-200px]">
          <ThoughtsCard />
        </div>
      </div>
    </section>
  );
}
