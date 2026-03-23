export default function AboutCard() {
  return (
    <div className="w-[260px] h-[340px] bg-white text-black rounded-xl p-6 flex flex-col justify-between">
      <div>
        <p className="text-sm opacity-60">About</p>
        <h2 className="text-xl font-medium mt-2">Hoda</h2>
      </div>

      <p className="text-sm leading-relaxed opacity-80">
        I build interactive digital experiences with focus on design, motion and
        human-centered systems.
      </p>
    </div>
  );
}
