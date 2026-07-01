import { rallyboard } from "../assets";
import { projects } from "./index";
import { workLog } from "./workLog";

const RALLYBOARD_BADGE = {
  badge: "RALLYBOARD",
  badgeColor: "#7fc4ef",
  badgeBorder: "#02518199",
  badgeBg: "#02518133",
  logo: rallyboard,
};

const PERSONAL_BADGE = {
  badge: "PERSONAL",
  badgeColor: "var(--ink-dim)",
  badgeBorder: "var(--line)",
  badgeBg: "transparent",
  logo: null,
};

const PERSONAL_PICKS = ["Replay Radar", "DiffDragon", "NextView"];

const rallyboardTiles = workLog.map((entry) => ({
  kind: "rallyboard",
  slug: entry.slug,
  title: entry.title,
  oneLiner: entry.oneLiner,
  stack: entry.stack.slice(0, 3).join(" · "),
  ...RALLYBOARD_BADGE,
}));

const personalTiles = PERSONAL_PICKS.map((name) => {
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
  };
});

export const selectedWork = [...rallyboardTiles, ...personalTiles];
