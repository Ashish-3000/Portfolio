// config/constants.ts
export const PROFILE = {
  name: "Ashish Singh",
  handle: "ash",
  title: "Software Engineer — Backend, AI tooling, Full‑stack",
  location: "India (IST)",
  email: "ashish02singh03@gmail.com",
  resumeUrl: "https://dub.sh/kLZsGnJ",
  website: "https://portfolio-alpha-eight-17.vercel.app/",
  socials: {
    github: "https://github.com/ashish02singh03",
    linkedin: "https://www.linkedin.com/in/ashish-02/",
    twitter: "",
  },
  summary:
    "Curious problem-solver interested in building reliable backends, smooth integrations, and AI-powered dev tools — ~3 years in Java, React/Node, infra, and tooling.",
  skills: [
    "Java", "JavaScript", "Node.js", "React", "NextJs", "ExpressJS",
    "PostgreSQL", "MongoDB", "Redis", "AWS Lambda", "CloudWatch", "SQS", "S3", "SNS", "Docker",
    "Tailwind CSS", "Material UI", "Postman", "Figma", "LLM integrations"
  ]
} as const;

export const PROJECTS: Array<{
  slug: string;
  name: string;
  blurb: string;
  highlights?: string[];
  demo?: string;
  repo?: string;
}> = [
    {
      slug: "pixable",
      name: "Pixable – AI Website Generator",
      blurb:
        "AI-powered website generator that lets users create and deploy websites from a single prompt with automated code execution and dynamic UI components.",
      highlights: [
        "Built with Next.js, Inngest, and Prisma",
        "Generates and deploys websites from a single prompt",
        "Automated code execution with dynamic UI components",
      ],
      demo: "https://pixable.vercel.app/",
    },
    {
      slug: "true-watch-time",
      name: "True Watch Time",
      blurb:
        "Chrome extension that shows the real remaining watch time for YouTube videos at any playback speed.",
      highlights: [
        "Instant recalculation of watch time",
        "Works with any playback speed",
        "One-click install from Chrome Web Store",
      ],
      demo: "https://chromewebstore.google.com/detail/ipilpgmkckmlbkecadjdbdhlhkipdnip",
    },
    {
      slug: "json-formatter",
      name: "JSON Formatter",
      blurb:
        "Lightweight web app to format, prettify, and convert JSON data with CSV/TXT export.",
      highlights: [
        "Instant JSON beautify/minify",
        "Export to CSV or TXT",
        "Responsive and fast",
      ],
      demo: "https://json-parser-livid.vercel.app/",
    },
    {
      slug: "meta",
      name: "Meta",
      blurb:
        "Visually rich landing page built with Next.js, Framer Motion, and TailwindCSS.",
      highlights: [
        "Smooth animations with Framer Motion",
        "Fully responsive design",
        "Optimized for performance",
      ],
      demo: "https://meta-verse-framer-next.vercel.app/",
    },
    {
      slug: "unweave",
      name: "Unweave",
      blurb:
        "Blogging platform inspired by Medium, featuring Editor.js integration and secure authentication.",
      highlights: [
        "Medium-like writing experience",
        "Firebase authentication",
        "MongoDB for storage",
      ],
      demo: "https://unweave-henna.vercel.app/",
    },
    {
      slug: "tab-awesome",
      name: "Tab Awesome",
      blurb:
        "Customizable Firefox new tab extension with dynamic Unsplash backgrounds and to-do list.",
      highlights: [
        "Dynamic background images",
        "To-do list with local storage",
        "Minimalist design",
      ],
      demo: "https://addons.mozilla.org/en-US/firefox/addon/tab-awesome/",
    },
    {
      slug: "ip-address-tracker",
      name: "IP Address Tracker",
      blurb:
        "Tracks and visualizes IP address locations using MapboxGL API.",
      highlights: [
        "IP geolocation lookup",
        "Interactive map",
        "Clean UI",
      ],
      demo: "https://ip-address-tracker-gules-nine.vercel.app/",
    },
  ];


export const PROMPT = `${PROFILE.handle}@portfolio:~$`;

export const HELP_COMMANDS = [
  ["help", "Show available commands"],
  ["about", "About me"],
  ["skills", "Key technologies"],
  ["experience", "Work experience"],
  ["education", "Educational background"],
  ["projects | ls", "List projects"],
  ["project <slug|#>", "Project details"],
  ["open <resume | project-number>", "Open url or project"],
  ["resume", "Resume link"],
  ["contact | social", "Ways to reach me"],
  ["theme [light|dark|auto]", "Switch theme"],
  ["clear", "Clear the terminal"],
] as const;