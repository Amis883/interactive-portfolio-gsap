export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      relative
      w-[260px] h-[340px]
      overflow-hidden
      rounded-[18px]
      backdrop-blur-xl
      border border-white/20
      shadow-[0_10px_40px_rgba(0,0,0,0.4)]
      p-6
      transition-all duration-500
      hover:scale-105
      hover:rotate-0
      rotate-[-2deg]
    "
    >
      {/* light */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

      {children}
    </div>
  );
}
