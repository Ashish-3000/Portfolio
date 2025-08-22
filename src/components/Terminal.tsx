import { PROFILE, PROMPT } from "../config/constants";
import { Cmd } from "./Cmd";
import { welcomeBanner } from "./CommandOutputs";
import { Line } from "../types";

interface TerminalProps {
    theme: string;
    lines: Line[];
    input: string;
    suggestion: string;
    setInput: (val: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    inputRef: React.RefObject<HTMLInputElement>;
    iframeUrl: string | null;
    showCardOnClick: () => void;
    setTheme: (theme: any) => void;
}

export function Terminal({
    theme,
    lines,
    input,
    suggestion,
    setInput,
    onKeyDown,
    inputRef,
    iframeUrl,
    showCardOnClick,
    setTheme,
}: TerminalProps) {
    return (
        <div
            id="terminal-scroll"
            className={`h-screen overflow-y-auto p-4 md:p-8 font-mono transition-all duration-300 ${theme === "dark"
                ? "bg-zinc-950 text-zinc-100"
                : "bg-zinc-50 text-zinc-900"
                }`}
            onClick={() => inputRef.current?.focus()}
        >
            <div className="mx-auto max-w-3xl">
                {/* Header */}
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
                            title="🃏 Click to see developer card"
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
                                <span> {theme === "dark" ? "☀️" : "🌙"}</span>
                                <span> {theme === "dark" ? "Light" : "Dark"}</span>
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
                    <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400" />
                        <span className="ml-2">
                            Terminal — {PROFILE.website.replace(/^https?:\/\//, "")}
                        </span>
                    </div>

                    <div className="space-y-2 text-sm leading-relaxed">
                        <div>{welcomeBanner()}</div>
                        <div>
                            <span>
                                Type <Cmd>about</Cmd> to get started.
                            </span>
                        </div>

                        {lines.map((l) => (
                            <div key={l.id} className="whitespace-pre-wrap break-words">
                                {l.content}
                            </div>
                        ))}

                        {/* Prompt */}
                        <div className="flex items-start gap-2 relative">
                            <span className="text-teal-400 whitespace-nowrap">{PROMPT}</span>
                            <div className="flex-1 relative">
                                {/* Ghost suggestion */}
                                {suggestion && (
                                    <span className="absolute left-0 top-0 text-zinc-600 pointer-events-none">
                                        {input}
                                        <span className="opacity-50">{suggestion}</span>
                                    </span>
                                )}
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={onKeyDown}
                                    autoFocus
                                    className="w-full bg-transparent outline-none caret-teal-400 relative z-10"
                                    aria-label="Terminal input"
                                />
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
                    <kbd className="rounded border px-1">L</kbd> to clear.{" "}
                    {iframeUrl && (
                        <span className="ml-2 text-teal-400">
                            -- Press Ctrl+C to close split --
                        </span>
                    )}
                </footer>
            </div>
        </div>
    );
}