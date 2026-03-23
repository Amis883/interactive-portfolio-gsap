import AboutCard from "../AboutCard";
import ExperienceCard from "../ExperienceCard";
import ProjectsCard from "../ProjectsCard";
import SkillsCard from "../SkillsCard";
import ThoughtsCard from "../ThoughtsCard";


export default function Projects() {
  return (
    <section className="h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="relative w-[1000px] h-[600px]">
        <div className="absolute top-[0%] left-[5%]">
          <AboutCard />
        </div>

        <div className="absolute top-[40%] left-[5%]">
          <ExperienceCard />
        </div>

        <div className="absolute top-[10%] left-[35%]">
          <ProjectsCard />
        </div>

        <div className="absolute top-[45%] left-[30%]">
          <SkillsCard />
        </div>

        <div className="absolute top-[10%] left-[65%]">
          <ThoughtsCard />
        </div>
      </div>
    </section>
  );
}
