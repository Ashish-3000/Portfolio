"use client";

import { useState, useEffect, useRef } from "react";
import { PROFILE, PROMPT } from "../config/constants";
import { Line } from "../types";
import { useTheme } from "../hooks/useTheme";
import { PokemonCard } from "../components/PokemonCard";
import { TerminalStyles } from "../components/TerminalStyles";
import { Cmd } from "../components/Cmd";
import { welcomeBanner } from "../components/CommandOutputs";
import { mkLine, runCommand } from "../utils/commandHandler";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [cardComplete, setCardComplete] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if this is first visit
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasVisited = localStorage.getItem("portfolio-visited");
      if (!hasVisited) {
        setShowCard(true);
        localStorage.setItem("portfolio-visited", "true");

        // Auto transition after 3 seconds
        const timer = setTimeout(() => {
          setCardComplete(true);
          setTimeout(() => setShowCard(false), 800); // Allow exit animation
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Function to show card on demand
  const showCardOnClick = () => {
    console.log("Card triggered!"); // Debug log
    setCardComplete(false);
    setShowCard(true);

    // Auto transition after 3 seconds
    setTimeout(() => {
      setCardComplete(true);
      setTimeout(() => setShowCard(false), 800);
    }, 3000);
  };

  // Focus the hidden input when the terminal is clicked
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/") {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keypress", onKey);
    return () => window.removeEventListener("keypress", onKey);
  }, []);

  useEffect(() => {
    // autoscroll to bottom when lines change
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [lines.length]);

  const onSubmit = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    // --- NEW: handle clear before printing, like Ctrl+L ---
    if (trimmed.toLowerCase() === "clear" || trimmed.toLowerCase() === "cls") {
      setLines([]); // wipe terminal output area
      setHistIdx(-1);
      setInput("");
      return; // do not print the command or results
    }
    // --- END NEW ---

    const printed = mkLine(
      <span>
        <span className="text-teal-400">{PROMPT}</span> {cmd}
      </span>
    );

    const commandResults = runCommand(cmd, theme, setTheme);
    setLines((prev) => [...prev, printed, ...commandResults]);
    setHistory((h) => [cmd, ...h]);
    setHistIdx(-1);
    setInput("");

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit(input);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistIdx((idx) => {
        const next = Math.min(idx + 1, history.length - 1);
        setInput(history[next] ?? input);
        return next;
      });
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistIdx((idx) => {
        const next = Math.max(idx - 1, -1);
        setInput(next === -1 ? "" : history[next] ?? "");
        return next;
      });
    }
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
      // Ctrl+L to clear
      e.preventDefault();
      setLines([]);
    }
  };

  const handleCardClick = () => {
    setCardComplete(true);
    setTimeout(() => setShowCard(false), 800);
  };

  return (
    <>
      {/* Pokemon Card Intro */}
      <PokemonCard
        theme={theme}
        showCard={showCard}
        cardComplete={cardComplete}
        onCardClick={handleCardClick}
      />

      {/* Main Terminal Interface */}
      <main
        className={`min-h-screen p-4 md:p-8 font-mono transition-all duration-300 ${theme === "dark"
            ? "bg-zinc-950 text-zinc-100"
            : "bg-zinc-50 text-zinc-900"
          } ${showCard ? "opacity-0" : "opacity-100"}`}
        onClick={() => inputRef.current?.focus()}
      >
        <TerminalStyles />

        <div className="mx-auto max-w-3xl">
          <header className="mb-4 flex items-center justify-between">
            <div>
              <h1
                className={`text-xl md:text-2xl font-semibold tracking-tight cursor-pointer select-none hover:text-teal-400 transition-all duration-200 ${theme === "dark"
                    ? "hover:drop-shadow-lg"
                    : "hover:drop-shadow-md"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  showCardOnClick();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.cursor = "pointer";
                }}
                title="🃏 Click to see developer card"
                style={{ userSelect: "none" }}
              >
                {PROFILE.name}
              </h1>
              <p
                className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"
                  }`}
              >
                {PROFILE.title}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`rounded-xl border px-3 py-1 text-sm transition-colors ${theme === "dark"
                    ? "border-zinc-700 hover:bg-zinc-800"
                    : "border-zinc-300 hover:bg-zinc-200"
                  }`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                title="Toggle theme"
              >
                <span className="inline-flex items-center gap-2">
                  {theme === "dark" ? "☀️" : "🌙"}
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>
            </div>
          </header>

          {/* Terminal output */}
          <div
            className={`rounded-2xl border p-4 md:p-6 shadow-sm backdrop-blur transition-colors ${theme === "dark"
                ? "border-zinc-800 bg-zinc-900/80"
                : "border-zinc-300 bg-white/70"
              }`}
          >
            <div
              className={`mb-3 flex items-center gap-2 text-xs ${theme === "dark" ? "text-zinc-500" : "text-zinc-500"
                }`}
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2">
                Terminal — {PROFILE.website.replace(/^https?:\/\//, "")}
              </span>
            </div>

            <div className="space-y-2 text-sm leading-relaxed">
              {/* Static Banner - Always displayed */}
              <div className="whitespace-pre-wrap break-words">
                <div
                  className="animate-fadeIn opacity-0"
                  style={{
                    animation: "fadeIn 0.3s ease-out forwards",
                  }}
                >
                  {welcomeBanner()}
                </div>
              </div>
              <div className="whitespace-pre-wrap break-words">
                <div
                  className="animate-fadeIn opacity-0"
                  style={{
                    animation: "fadeIn 0.3s ease-out forwards",
                  }}
                >
                  <span>
                    Type <Cmd>about</Cmd> to get started.
                  </span>
                </div>
              </div>

              {lines.map((l) => (
                <div key={l.id} className="whitespace-pre-wrap break-words">
                  {l.content}
                </div>
              ))}

              {/* Prompt */}
              <div className="flex items-start gap-2">
                <span className="text-teal-400 whitespace-nowrap">
                  {PROMPT}
                </span>
                <div className="flex-1">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={onKeyDown}
                      autoFocus
                      className="w-full bg-transparent outline-none caret-teal-400"
                      aria-label="Terminal input"
                    />
                    {/* Fake caret for empty input */}
                    {input.length === 0 && (
                      <span className="pointer-events-none absolute left-0 top-0 animate-pulse text-zinc-400">
                        ▍
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer
            className={`mt-6 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"
              }`}
          >
            Tip: Press <kbd className="rounded border px-1">/</kbd> to focus,{" "}
            <kbd className="rounded border px-1">↑</kbd>/
            <kbd className="rounded border px-1">↓</kbd> for history,{" "}
            <kbd className="rounded border px-1">Ctrl</kbd>+
            <kbd className="rounded border px-1">L</kbd> to clear.
          </footer>
        </div>
      </main>
    </>
  );
}
