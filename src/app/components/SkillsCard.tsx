import GlassCard from "./GlassCard";

export default function SkillsCard() {
  return (
    <GlassCard>
      <div className="w-[260px] h-[340px] bg-[#111] text-white rounded-xl p-6">
        <p className="text-sm text-white/60">Skills</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span>React</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>GSAP</span>
          <span>UI/UX</span>
        </div>
      </div>
    </GlassCard>
  );
}
