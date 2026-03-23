import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="relative w-full h-[900px]">
        {/* Card 1 */}
        <div className="absolute top-[0%] left-[10%]">
          <ProjectCard
            title="Modern Interior"
            category="Design"
            image="/p1.png"
          />
        </div>

        {/* Card 2 */}
        <div className="absolute top-[15%] left-[40%]">
          <ProjectCard
            title="Fashion Campaign"
            category="Photography"
            image="/p2.png"
          />
        </div>

        {/* Card 3 */}
        <div className="absolute top-[35%] left-[65%]">
          <ProjectCard
            title="Brand Identity"
            category="Branding"
            image="/p3.png"
          />
        </div>
      </div>
    </section>
  );
}
