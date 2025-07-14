import { useEffect } from "react";
import clsx from "clsx";

/**
 * RotatingCardGrid — four cards that continuously rotate positions clockwise
 *
 * Usage: <RotatingCardGrid />
 */
export default function RotatingCardGrid() {
  // We rely entirely on CSS animation, so no JS logic needed beyond inject style once.
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes rotate-cards {
        0%   { transform: translate(0, 0); }
        25%  { transform: translate(calc(100% + 1.25rem), 0); }
        50%  { transform: translate(calc(100% + 1.25rem), calc(100% + 1.25rem)); }
        75%  { transform: translate(0, calc(100% + 1.25rem)); }
        100% { transform: translate(0, 0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const cards = [
    {
      href: "https://github.com/BitByBit-101/Weebify",
      title: "Weebify",
      bg: "bg-[#ffe7d6]",
      icon: "src/assets/icons/clown-fish (1).png",
    },
    {
      href: "",
      title: "Bytefolio",
      bg: "bg-[#ffddb6]",
      icon: "src/assets/icons/flower (2).png",
    },
    {
      href: "https://github.com/BitByBit-101/Garud-User-Panel",
      title: "Garud",
      bg: "bg-[#ffe7d6]",
      icon: "src/assets/icons/bird.png",
    },
    {
      href: "https://github.com/BitByBit-101/CodeCraft",
      title: "CodeCraft",
      bg: "bg-[#ffddb6]",
      icon: "src/assets/icons/cat.png",
    },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {cards.map((card, i) => (
        <a
          key={card.title}
          href={card.href}
          className={clsx(
            "absolute ml-10 -mr-10 flex flex-col items-center justify-center h-28 w-28 sm:h-[11vw] sm:w-[11vw] rounded-[20px] border border-orange-100 hover:border-[#c53d3d] transition-all duration-300 ease-in-out hover:scale-105",
            card.bg,
            "text-xl md:text-2xl text-[#915931]"
          )}
          style={{
            animation: `rotate-cards 8s cubic-bezier(0.45,0,0.55,1) infinite`,
            animationDelay: `${i * 2}s`, // stagger so each starts quarter cycle apart
          }}
        >
          <h1>{card.title}</h1>
          <img src={card.icon} alt={card.title} className="mt-2 w-10 h-10" />
        </a>
      ))}
    </div>
  );
}
