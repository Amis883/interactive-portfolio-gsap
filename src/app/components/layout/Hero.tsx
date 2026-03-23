import Image from "next/image";
import { HeroText } from "../ui/Typography";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay (dark subtle) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="px-6 md:px-12 max-w-4xl">
          <HeroText>
            Shaping digital experiences through design & motion
          </HeroText>
        </div>
      </div>
    </section>
  );
}
