import React from "react";

type CardType = {
  id: number;
  title: string;
  content: string;
  image?: string;
};

type Props = {
  card: CardType;
  index: number;
  activeId: number | null;
  setActiveId: (id: number) => void;
  closeCard: () => void;
};

const transforms = [
  "translate(-200px, -150px) rotate(-6deg)",
  "translate(150px, -100px) rotate(5deg)",
  "translate(-100px, 120px) rotate(-3deg)",
  "translate(200px, 80px) rotate(6deg)",
  "translate(0px, 0px) rotate(0deg)",
];
function Card({ card, index, activeId, setActiveId, closeCard }: Props) {
  const isActive = activeId === card.id;

  return (
    <div
      onClick={() => !activeId && setActiveId(card.id)}
      className="card absolute w-[300px] h-[380px] rounded-3xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-500"
      style={{
        transform: isActive
          ? "translate(-50%, -50%) scale(1.2)"
          : transforms[index],
        top: "50%",
        left: "50%",
        zIndex: isActive ? 100 : index,
        opacity: activeId && !isActive ? 0.1 : 1,
      }}
    >
      {isActive && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeCard();
          }}
          className="absolute top-3 right-3 w-8 h-8 bg-black text-white text-xs rounded-md z-50"
        >
          ✕
        </button>
      )}

      <img src={card.image} className="w-full h-full object-cover" />
    </div>
  );
}
