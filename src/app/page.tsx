"use client";

import { useState, useEffect, useRef } from "react";
import { Line } from "../types";
import { useTheme } from "../hooks/useTheme";
import { PokemonCard } from "../components/PokemonCard";
import { mkLine, runCommand } from "../utils/commandHandler";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Terminal } from "../components/Terminal";
import { IframePanel } from "../components/IframePanel";
import { HELP_COMMANDS, PROJECTS } from "../config/constants";

const COMMANDS = [
  ...HELP_COMMANDS.map(([cmd]) => cmd.split(" ")[0]),
  ...PROJECTS.map((p) => `project ${p.slug}`),
];

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState<number>(-1);
  const [showCard, setShowCard] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Autocomplete cycling state
  const [autoMatches, setAutoMatches] = useState<string[]>([]);
  const [autoIndex, setAutoIndex] = useState<number>(0);

  useEffect(() => setMounted(true), []);

  // Ctrl+C closes iframe
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
        if (iframeUrl) {
          e.preventDefault();
          setIframeUrl(null);
          setLines((prev) => [
            ...prev,
            mkLine(<span>Closed split view. Back to full terminal.</span>),
          ]);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [iframeUrl]);

  const onSubmit = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear" || trimmed.toLowerCase() === "cls") {
      setLines([]);
      setHistIdx(-1);
      setInput("");
      setSuggestion("");
      setAutoMatches([]);
      setAutoIndex(0);
      return;
    }

    // ✅ Echo the command
    const echoLine = mkLine(
      <span>
        <span className="text-teal-400">ash@portfolio:~$</span> {trimmed}
      </span>
    );

    // Run the command
    const commandResults = runCommand(trimmed, theme, setTheme, setIframeUrl);

    // Append echo + results
    setLines((prev) => [...prev, echoLine, ...commandResults]);

    // Update history
    setHistory((h) => [trimmed, ...h]);
    setHistIdx(-1);
    setInput("");
    setSuggestion("");
    setAutoMatches([]);
    setAutoIndex(0);
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    setAutoMatches([]);
    setAutoIndex(0);

    if (!val) {
      setSuggestion("");
      return;
    }

    const matches = COMMANDS.filter((c) => c.startsWith(val));
    if (matches.length === 1) {
      // ✅ Only show the remaining part
      setSuggestion(matches[0].slice(val.length));
    } else {
      setSuggestion("");
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
      e.preventDefault();
      setLines([]);
    }
    if (e.key === "Tab") {
      e.preventDefault();

      // If we already have matches, cycle through them
      if (autoMatches.length > 0) {
        const nextIndex = (autoIndex + 1) % autoMatches.length;
        setAutoIndex(nextIndex);
        setInput(autoMatches[nextIndex]);
        setSuggestion("");
        return;
      }

      // Otherwise, find matches
      const matches = COMMANDS.filter((c) => c.startsWith(input));
      if (matches.length === 1) {
        // Single match → autocomplete
        setInput(matches[0]);
        setAutoMatches([]);
        setAutoIndex(0);
        setSuggestion("");
      } else if (matches.length > 1) {
        // Multiple matches → start cycling
        setAutoMatches(matches);
        setAutoIndex(0);
        setInput(matches[0]);
        setSuggestion("");
      }
    }
  };

  return (
    <>
      <PokemonCard
        theme={theme}
        showCard={showCard}
        cardComplete={cardComplete}
        onCardClick={() => {
          setCardComplete(true);
          setTimeout(() => setShowCard(false), 800);
        }}
      />

      {mounted && (
        <main className="h-screen overflow-hidden">
          {iframeUrl ? (
            <PanelGroup direction="horizontal">
              <Panel defaultSize={50} minSize={30}>
                <Terminal
                  theme={theme}
                  lines={lines}
                  input={input}
                  suggestion={suggestion}
                  setInput={handleInputChange}
                  onKeyDown={onKeyDown}
                  inputRef={inputRef}
                  iframeUrl={iframeUrl}
                  showCardOnClick={() => setShowCard(true)}
                  setTheme={setTheme}
                />
              </Panel>

              <PanelResizeHandle className="w-1 bg-zinc-700 hover:bg-teal-400 transition-colors cursor-col-resize" />

              <Panel defaultSize={50} minSize={30}>
                <IframePanel iframeUrl={iframeUrl} onClose={() => setIframeUrl(null)} />
              </Panel>
            </PanelGroup>
          ) : (
            <Terminal
              theme={theme}
              lines={lines}
              input={input}
              suggestion={suggestion}
              setInput={handleInputChange}
              onKeyDown={onKeyDown}
              inputRef={inputRef}
              iframeUrl={iframeUrl}
              showCardOnClick={() => setShowCard(true)}
              setTheme={setTheme}
            />
          )}
        </main>
      )}
    </>
  );
}