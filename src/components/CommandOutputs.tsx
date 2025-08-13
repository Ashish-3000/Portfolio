// components/CommandOutputs.tsx
import { PROFILE, PROJECTS, HELP_COMMANDS } from "../config/constants";
import { ThemeType } from "../types";
import { Cmd } from "./Cmd";
import { Mail, Github, Linkedin } from "lucide-react";

export function welcomeBanner() {
  const title = `${PROFILE.name.toUpperCase()} TERMINAL`;
  const pad = 2; // 1 space on each side
  const width = title.length + pad; // chars inside the box
  const bar = "═".repeat(width);

  return (
    <div>
      <pre className="text-teal-400 font-bold leading-tight whitespace-pre text-[clamp(10px,3.2vw,16px)]">
        {`╔${bar}╗
║ ${title} ║
╚${bar}╝`}
      </pre>
      <div className="mt-1">
        Welcome to <Cmd>{PROFILE.name}</Cmd>&apos;s terminal. {PROFILE.summary}
      </div>
    </div>
  );
}

export function help() {
  return (
    <div>
      <strong>Available commands</strong>
      <table className="mt-3 w-full text-left text-xs">
        <tbody>
          {HELP_COMMANDS.map(([c, d]) => (
            <tr key={c} className="align-top">
              <td className="pr-6 pb-2 text-teal-400">
                <Cmd>{c}</Cmd>
              </td>
              <td className="text-zinc-400 pb-2">{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function about() {
  return (
    <div>
      <p className="mb-1">
        Hey, I&apos;m {PROFILE.name.split(" ")[0]} — {PROFILE.title} from {PROFILE.location}.
      </p>
      <p className="mb-1">
        I build systems that scale and tools that remove friction for teams.
      </p>
      <p className="mb-1">
        At Project44, I built ingestion pipelines for 60k+ files/day and integrated 20+ APIs.
      </p>
      <p className="mb-1">
        At Amazon, I designed APIs and built data pipelines to improve reporting and internal tools.
      </p>
      <p>
        Strong in quick learning, problem-solving, and delivering impact fast.
      </p>
    </div>
  );
}


export function experience() {
  return (
    <div>
      <strong>Work Experience</strong>
      <div className="mt-2 space-y-3">
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 p-3">
          <div className="font-medium">Software Developer — Project44</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Nov 2023 – May 2025 | Bengaluru, Karnataka
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>
              Built scalable ingestion pipeline for POD files, handling 60,000+
              files/day
            </li>
            <li>
              Integrated 20+ APIs/SOAP/Webhooks for heterogeneous logistics data
              flow
            </li>
            <li>
              Automated recurring tasks, improving operational efficiency by 50%
            </li>
            <li>
              Built AI chatbot using Google Gemini for mapping-related queries
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 p-3">
          <div className="font-medium">Software Developer — Amazon</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            Jul 2022 – Mar 2023 | Bengaluru, Karnataka
          </div>
          <ul className="mt-2 list-disc pl-5 text-sm space-y-1">
            <li>
              Designed and developed RESTful GET/POST APIs for internal tools
            </li>
            <li>Built data ingestion pipeline for internal data warehouse</li>
            <li>Upgraded key microservices to latest Node.js versions</li>
            <li>Created service dashboard using SLIs for system monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function education() {
  return (
    <div>
      <strong>Education</strong>
      <div className="mt-2 rounded-xl border border-zinc-300 dark:border-zinc-800 p-3">
        <div className="font-medium">Bachelor of Engineering (B.E.)</div>
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          Army Institution of Technology, Pune
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          July 2022 • CGPA: 9.28
        </div>
      </div>
    </div>
  );
}

export function skills() {
  return (
    <div>
      <strong>Skills</strong>
      <ul className="mt-2 flex flex-wrap gap-2">
        {PROFILE.skills.map((s) => (
          <li
            key={s}
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-2 py-0.5 text-xs"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function projectList() {
  return (
    <div>
      <strong>Projects</strong>
      <div className="mt-2 space-y-2">
        {PROJECTS.map((p, i) => (
          <div
            key={p.slug}
            className="rounded-xl border border-zinc-300 dark:border-zinc-800 p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-medium">
                {i + 1}. {p.name}
              </div>
              <div className="flex items-center gap-2 text-xs">
                {p.repo && (
                  <a
                    className="inline-flex items-center gap-1 hover:underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>📁</span> repo
                  </a>
                )}
                {p.demo && (
                  <a
                    className="inline-flex items-center gap-1 hover:underline"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>🔗</span> live
                  </a>
                )}
              </div>
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {p.blurb}
            </div>
            {p.highlights && (
              <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                {p.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}
            <div className="mt-1 text-xs">
              Try <Cmd>project {p.slug}</Cmd> or <Cmd>project {i + 1}</Cmd>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function projectDetail(id?: string) {
  if (!id)
    return (
      <span>
        Usage: <Cmd>project &lt;slug|#&gt;</Cmd>
      </span>
    );
  const idx = /^\d+$/.test(id) ? Number(id) - 1 : -1;
  const byIdx = PROJECTS[idx];
  const proj = byIdx || PROJECTS.find((p) => p.slug === id);
  if (!proj)
    return (
      <span>
        Project not found: <Cmd>{id}</Cmd>
      </span>
    );
  return (
    <div>
      <div className="font-semibold">{proj.name}</div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">
        {proj.blurb}
      </div>
      {proj.highlights && (
        <ul className="mt-2 list-disc pl-5 text-sm">
          {proj.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
        {proj.repo && (
          <a
            className="inline-flex items-center gap-1 hover:underline"
            href={proj.repo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>📁</span> Source
          </a>
        )}
        {proj.demo && (
          <a
            className="inline-flex items-center gap-1 hover:underline"
            href={proj.demo}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>🔗</span> Live demo
          </a>
        )}
      </div>
    </div>
  );
}

export function resumeLine() {
  return (
    <div className="inline-flex items-center gap-2">
      <span>🌐</span>
      <span>Resume:</span>
      <a
        className="hover:underline"
        href={PROFILE.resumeUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        {PROFILE.resumeUrl}
      </a>
    </div>
  );
}

export function contacts() {
  const iconCls =
    "h-4 w-4 text-zinc-500 dark:text-zinc-400 transition-colors group-hover:text-teal-400";
  const linkCls = "hover:underline";

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 group">
        <Mail className={iconCls} aria-hidden="true" />
        <a className={linkCls} href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
      </div>
      <div className="flex items-center gap-3 group">
        <Github className={iconCls} aria-hidden="true" />
        <a
          className={linkCls}
          href={PROFILE.socials.github}
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center gap-3 group">
        <Linkedin className={iconCls} aria-hidden="true" />
        <a
          className={linkCls}
          href={PROFILE.socials.linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
