
import gsap from "gsap";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="relative w-full h-[915px]">
        {/* LEFT SIDE */}
        <div className="absolute top-[0%] left-[10%]">
          {/* <div className="absolute top-[20%] left-[35%] rotate-[-5deg] scale-90"> */}
          <ProjectCard title="Project 1" category="Design" image="/p1.png" />
        </div>

        <div className="absolute top-[40%] left-[5%]">
          <ProjectCard title="Project 2" category="UI" image="/p2.png" />
        </div>

        {/* CENTER */}
        <div className="absolute top-[20%] left-[35%]">
          <ProjectCard title="Project 3" category="Branding" image="/p3.png" />
        </div>

        <div className="absolute top-[60%] left-[30%]">
          <ProjectCard title="Project 4" category="Motion" image="/p1.png" />
        </div>

        {/* RIGHT SIDE */}
        <div className="absolute top-[10%] left-[65%]">
          <ProjectCard title="Project 5" category="Web" image="/p2.png" />
        </div>

        <div className="absolute top-[50%] left-[70%]">
          <ProjectCard title="Project 6" category="Creative" image="/p3.png" />
        </div>
      </div>
    </section>
  );
}
