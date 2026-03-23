import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export function initAnimations(container: HTMLElement) {
  const cards = gsap.utils.toArray<HTMLElement>(".card");

  cards.forEach((card) => {
    card.onclick = () => {
      const state = Flip.getState(cards);

      card.classList.add("is-active");
      cards.forEach((c) => c !== card && c.classList.add("is-dimmed"));

      Flip.from(state, {
        duration: 0.7,
        ease: "power3.inOut",
        absolute: true,
        scale: true,
      });
    };
  });

  // cleanup (خیلی مهم)
  return () => {
    cards.forEach((card) => {
      card.onclick = null;
    });
  };
}
