import Image from "next/image";
import GlassCard from "./GlassCard";

export default function ProjectsCard() {
  return (
    <GlassCard>
      <div className="w-[260px] h-[340px] bg-white rounded-xl p-3 grid grid-cols-2 gap-2">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
            alt=""
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
            alt=""
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
            alt=""
            fill
            className="object-cover rounded"
          />
        </div>
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
            alt=""
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </GlassCard>
  );
}
