// utils/commandHandler.ts
import { ReactElement } from "react";
import { Line, ThemeType } from "../types";
import { PROJECTS, PROFILE } from "../config/constants";
import { Cmd } from "../components/Cmd";
import {
  help,
  about,
  skills,
  experience,
  education,
  projectList,
  projectDetail,
  resumeLine,
  contacts,
} from "../components/CommandOutputs";

let idCounter = 0;

export function mkLine(content: ReactElement | string): Line {
  return {
    id: `line-${++idCounter}`,
    content: (
      <div className="animate-fadeIn opacity-0" style={{ animation: "fadeIn 0.3s ease-out forwards" }}>
        {content}
      </div>
    ),
  };
}

export function themeSwitcher(theme: ThemeType, setTheme: (theme: ThemeType) => void, next?: string) {
  if (!next) {
    return (
      <span>
        Current theme: <Cmd>{theme}</Cmd>. Use <Cmd>theme light</Cmd>, <Cmd>theme dark</Cmd> or <Cmd>theme auto</Cmd>.
      </span>
    );
  }
  const normalized = ["light", "dark", "auto"].includes(next) ? (next as ThemeType) : undefined;
  if (!normalized) {
    const sanitizedNext = next.replace(/[<>"'&]/g, "");
    return (
      <span>
        Unknown theme: <Cmd>{sanitizedNext}</Cmd>.
      </span>
    );
  }
  setTheme(normalized);
  return (
    <span>
      Switched theme to <Cmd>{normalized}</Cmd>.
    </span>
  );
}

export function openTarget(target?: string) {
  if (!target) {
    return (
      <span>
        Usage: <Cmd>open &lt;resume | project-number&gt;</Cmd>
      </span>
    );
  }

  const lower = target.trim().toLowerCase();

  if (lower === "resume" || lower === "cv") {
    const url = PROFILE?.resumeUrl;
    if (!url) return <span>No resume link found in profile.</span>;
    if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
    return (
      <span>
        Opening <Cmd>{url}</Cmd>…
      </span>
    );
  }

  if (/^\d+$/.test(lower)) {
    const idx = Number(lower) - 1;
    const p = PROJECTS[idx];
    if (!p) return <span>Project index out of range.</span>;
    const url = p.demo || p.repo;
    if (!url)
      return (
        <span>
          No link for <Cmd>{p.slug}</Cmd>.
        </span>
      );
    if (typeof window !== "undefined") window.open(url, "_blank", "noopener,noreferrer");
    return (
      <span>
        Opening <Cmd>{url}</Cmd>…
      </span>
    );
  }

  return (
    <span>
      We don&apos;t open every URL. Try <Cmd>open resume</Cmd> or a project number instead.
    </span>
  );
}

export function runCommand(raw: string, theme: ThemeType, setTheme: (theme: ThemeType) => void): Line[] {
  const parts = raw.trim().split(/\s+/);
  const cmd = (parts[0] || "").toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case "help":
      return [mkLine(help())];
    case "about":
      return [mkLine(about())];
    case "skills":
      return [mkLine(skills())];
    case "experience":
      return [mkLine(experience())];
    case "education":
      return [mkLine(education())];
    case "projects":
    case "ls":
      return [mkLine(projectList())];
    case "project":
      return [mkLine(projectDetail(args[0]))];
    case "resume":
      return [mkLine(resumeLine())];
    case "contact":
    case "social":
      return [mkLine(contacts())];
    case "theme":
      return [mkLine(themeSwitcher(theme, setTheme, args[0]))];
    case "clear":
      return [];
    case "open":
      return [mkLine(openTarget(args[0]))];
    case "":
      return [];
    default:
      const sanitizedCmd = cmd.replace(/[<>"'&]/g, "");
      return [mkLine(<span>Command not found: <Cmd>{sanitizedCmd}</Cmd>. Type <Cmd>help</Cmd>.</span>)];
  }
}
