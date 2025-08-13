// components/PokemonCard.tsx
import { useRef } from "react";
import { PROFILE } from "../config/constants";
import { ThemeType } from "../types";

type Corner = "tl" | "tr" | "bl" | "br";

interface PokemonCardProps {
  theme: ThemeType;
  showCard: boolean;
  cardComplete: boolean;
  onCardClick: () => void;
}

export function PokemonCard({
  theme,
  showCard,
  cardComplete,
  onCardClick,
}: PokemonCardProps) {
  if (!showCard) return null;

  // pick one highlighted corner per show (stable)
  const cornerRef = useRef<Corner>(
    ["tl", "tr", "bl", "br"][Math.floor(Math.random() * 4)] as Corner
  );
  const corner = cornerRef.current;

  // corner positions for the glow (relative to the card wrapper)
  const pos: Record<Corner, React.CSSProperties> = {
    tl: { left: -36, top: -36 },
    tr: { right: -36, top: -36 },
    bl: { left: -36, bottom: -36 },
    br: { right: -36, bottom: -36 },
  };

  // glow color (behind the card)
  const glow =
    theme === "dark"
      ? "radial-gradient(closest-side, rgba(34,211,238,0.92) 0%, rgba(34,211,238,0.35) 45%, transparent 70%)"
      : "radial-gradient(closest-side, rgba(20,184,166,0.9) 0%, rgba(20,184,166,0.28) 45%, transparent 70%)";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ${cardComplete ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)",
      }}
    >
      <div className="relative">
        {/* wrapper sized like the card so the glow can sit BEHIND it */}
        <div className="relative w-72 h-96">
          {/* single highlighted corner GLOW — behind card */}
          <div
            className="pointer-events-none absolute rounded-full z-0"
            style={{
              width: 150,
              height: 150,
              filter: "blur(10px)",
              opacity: theme === "dark" ? 0.9 : 0.85,
              ...pos[corner],
              background: glow,
              transform: "translateZ(0)",
            }}
          />

          {/* CARD (z-10) with float + rotate animation */}
          <div
            className={`relative z-10 w-full h-full rounded-2xl border cursor-pointer transition-transform duration-200 hover:scale-[1.03] ${theme === "dark"
              ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-zinc-700 shadow-xl"
              : "bg-gradient-to-br from-zinc-100 via-white to-zinc-50 border-zinc-300 shadow-xl"
              }`}
            style={{
              transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
              animation:
                showCard && !cardComplete
                  ? "cardFloat 3s ease-in-out infinite, cardRotate 6s ease-in-out infinite"
                  : "none",
            }}
            onClick={onCardClick}
          >
            {/* header */}
            <div className="p-6 text-center border-b border-zinc-200 dark:border-zinc-700">
              <h1
                className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"
                  }`}
              >
                {PROFILE.name.toUpperCase()}
              </h1>
              <p
                className={`text-sm mt-1 ${theme === "dark" ? "text-teal-400" : "text-teal-600"
                  }`}
              >
                SOFTWARE ENGINEER
              </p>
            </div>

            {/* avatar */}
            <div className="flex justify-center mt-8 mb-6">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center border overflow-hidden relative ${theme === "dark"
                  ? "bg-black border-green-400 shadow-lg shadow-green-400/30"
                  : "bg-gray-900 border-green-500 shadow-lg shadow-green-500/40"
                  }`}
              >
                <div
                  className={`absolute inset-0 rounded-full ${theme === "dark"
                    ? "shadow-[0_8px_32px_-8px_rgba(34,197,94,0.4)]"
                    : "shadow-[0_8px_32px_-8px_rgba(34,197,94,0.5)]"
                    }`}
                ></div>
                <img
                  src="/Ash.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* stats */}
            <div className="px-6 space-y-3">
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                >
                  Experience
                </span>
                <span
                  className={`text-sm font-bold ${theme === "dark" ? "text-white" : "text-zinc-900"
                    }`}
                >
                  3+ Years
                </span>
              </div>
              <div className="flex justify-between items-start">
                <span
                  className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                    }`}
                >
                  Specialty
                </span>
                <span
                  className={`text-sm font-bold text-right max-w-[60%] ${theme === "dark" ? "text-teal-400" : "text-teal-600"
                    }`}
                >
                  Quick Learner, Curious, Adaptive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* hint */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
          <p
            className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"
              }`}
          >
            Click card or wait to continue...
          </p>
        </div>
      </div>
    </div>
  );
}
