import { useEffect } from "react";
import clsx from "clsx";

/**
 * RotatingCardGrid — four cards that continuously rotate positions clockwise
 *
 * Usage: <RotatingCardGrid />
 */
export default function RotatingCardGrid() {
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
      href: "https://github.com/BitByBit-101/ByteFolio",
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
    <div className="relative aspect-square w-80 sm:w-96 mx-auto md:p-0 p-10">
      {cards.map((card, i) => (
        <a
          key={card.title}
          href={card.href}
          className={clsx(
            "absolute mx-auto md:ml-5 flex flex-col items-center justify-center h-28 w-28 md:h-40 md:w-40 sm:h-32 sm:w-32 rounded-[20px] border border-orange-100 hover:border-[#c53d3d] transition-all duration-300 ease-in-out hover:scale-105",
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
