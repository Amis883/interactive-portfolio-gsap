import GlassCard from "./GlassCard";

export default function ExperienceCard() {
  return (
    <GlassCard>
      <div className="w-[260px] h-[340px] bg-[#0a0a0a] text-white rounded-xl p-6">
        <p className="text-sm text-white/60">Experience</p>

        <div className="mt-4 space-y-3 text-sm">
          <p>Frontend Developer — Startup</p>
          <p>UI Engineer — Freelance</p>
          <p>Web Developer — Internship</p>
        </div>
      </div>
    </GlassCard>
  );
}
