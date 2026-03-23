import Image from "next/image";

type Props = {
  title: string;
  category: string;
  image: string;
};

export default function ProjectCard({ title, category, image }: Props) {
  return (
    <div className="relative w-[320px] h-[420px] overflow-hidden rounded-xl">
      {/* Image */}
      <Image src={image} alt={title} fill className="object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content */}
      <div className="absolute bottom-0 p-4 z-10">
        <p className="text-sm text-white/70">{category}</p>
        <h3 className="text-xl font-light">{title}</h3>
      </div>
    </div>
  );
}
