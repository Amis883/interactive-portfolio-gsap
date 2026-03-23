type Props = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};

export function SectionCard({ title, className = "", children }: Props) {
  return (
    <div
      className={`absolute w-[260px] min-h-[160px] bg-white text-black rounded-2xl shadow-xl p-4 ${className}`}
    >
      <h2 className="font-semibold text-lg mb-2">{title}</h2>

      <div className="text-sm text-gray-700 space-y-2">{children}</div>
    </div>
  );
}
