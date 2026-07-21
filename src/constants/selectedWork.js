import { depthLogo, rallyboard, scopedinLogo, snapchat } from "../assets";
import { projects } from "./index";
import { snapWorkLog } from "./snapWorkLog";
import { workLog } from "./workLog";

const RALLYBOARD_BADGE = {
  badge: "RALLYBOARD",
  badgeColor: "#7fc4ef",
  badgeBorder: "#02518199",
  badgeBg: "#02518133",
  logo: rallyboard,
};

const SNAP_BADGE = {
  badge: "SNAP",
  badgeColor: "#c9c400",
  badgeBorder: "#fffc0099",
  badgeBg: "#fffc0033",
  logo: snapchat,
};

const PERSONAL_BADGE = {
  badge: "PERSONAL",
  badgeColor: "var(--ink-dim)",
  badgeBorder: "var(--line)",
  badgeBg: "transparent",
  logo: null,
};

const PERSONAL_PICKS = ["Replay Radar"];

const PERSONAL_EXTRAS = [
  {
    title: "ScopedIn",
    oneLiner:
      "An AI-assisted task manager that tracks estimation accuracy over time, using Google Gemini to surface hidden complexity you missed when scoping a task.",
    stack: ["Next.js", "Supabase", "Google Gemini"],
    demo: "https://scopedin.app",
    repo: "https://github.com/cwharris77/ScopedIn",
    logo: scopedinLogo,
  },
  {
    title: "Depth",
    oneLiner:
      "A mobile-first NFL depth chart viewer for all 32 teams — tap a player on the field to see live stats pulled from ESPN's API.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    demo: "https://depth-ashen.vercel.app",
    repo: "https://github.com/cwharris77/depth",
    logo: depthLogo,
  },
];

const rallyboardTiles = workLog.map((entry) => ({
  kind: "rallyboard",
  slug: entry.slug,
  title: entry.title,
  oneLiner: entry.oneLiner,
  stack: entry.stack.slice(0, 3).join(" · "),
  ...RALLYBOARD_BADGE,
}));

const snapTiles = snapWorkLog.map((entry) => ({
  kind: "snap",
  slug: entry.slug,
  title: entry.title,
  oneLiner: entry.oneLiner,
  stack: entry.stack.slice(0, 3).join(" · "),
  ...SNAP_BADGE,
}));

const personalPickTiles = PERSONAL_PICKS.map((name) => {
  const project = projects.find((p) => p.name === name);
  return {
    kind: "personal",
    title: project.name,
    oneLiner: project.description,
    stack: project.tags
      .map((t) => t.name)
      .slice(0, 3)
      .join(" · "),
    demo: project.demo || null,
    repo: project.repo || null,
    ...PERSONAL_BADGE,
    logo: project.logo || null,
  };
});

const personalExtraTiles = PERSONAL_EXTRAS.map((extra) => ({
  kind: "personal",
  title: extra.title,
  oneLiner: extra.oneLiner,
  stack: extra.stack.slice(0, 3).join(" · "),
  demo: extra.demo,
  repo: extra.repo,
  ...PERSONAL_BADGE,
  logo: extra.logo || null,
}));

const personalTiles = [...personalPickTiles, ...personalExtraTiles];

export const selectedWork = [
  ...rallyboardTiles,
  ...snapTiles,
  ...personalTiles,
];
