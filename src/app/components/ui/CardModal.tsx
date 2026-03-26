type Props = {
  activeCard: string | null;
  onClose: () => void;
};

export default function CardModal({ activeCard, onClose }: Props) {
  if (!activeCard) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[400px] h-[500px] bg-white text-black rounded-[32px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          ✕
        </button>

        {/* dynamic content */}
        {activeCard === "about" && <p>About content...</p>}
        {activeCard === "experience" && <p>Experience...</p>}
        {activeCard === "projects" && <p>Projects...</p>}
      </div>
    </div>
  );
}
