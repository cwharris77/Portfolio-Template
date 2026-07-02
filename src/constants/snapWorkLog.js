export const snapWorkLog = [
  {
    slug: "dpa-refactor",
    title: "Dynamic Product Ads Refactor",
    oneLiner:
      "A ground-up rebuild of Snap's largest Monetization surface — migrating off a bloated Redux architecture to React Hook Form + Jotai, saving the team an estimated ~20 hours a week.",
    timeline: "2025 Q2–Q3",
    role: "Co-lead engineer — redesign and rebuild with one other engineer",
    stack: [
      "TypeScript",
      "React",
      "React Hook Form",
      "Jotai",
      "GraphQL",
      "gRPC",
    ],
    metrics: [
      { label: "Team hours saved/week (est.)", value: "~20h" },
      { label: "App speed improvement (est.)", value: "~1%" },
      { label: "Engineers on rebuild", value: "2" },
      { label: "Timeline", value: "2 quarters" },
    ],
    sections: {
      problem:
        "Dynamic Product Ads — the system that auto-generates ads from an advertiser's product catalog — was the largest surface in Snap's Monetization org, and it showed: files did too much, Redux-heavy state management made the codebase difficult to extend, and every change carried a high cognitive tax for the team.",
      build:
        "Redesigned and rebuilt DPA from scratch with one other engineer over two quarters, migrating state management from Redux to React Hook Form + Jotai for cleaner, page-scoped composition. Ownership was split by page — each engineer refactored and owned form validation for an assigned set of pages within the existing BFF-over-gRPC architecture.",
      challenges:
        "DPA was too large and too load-bearing for advertisers to rewrite in one pass. Untangling years of centralized Redux state without breaking existing advertiser-facing behavior meant migrating page by page rather than attempting a big-bang rewrite, while keeping both architectures working side by side during the transition.",
      decisions: [
        {
          decision:
            "Migrate from Redux to React Hook Form + Jotai instead of incrementally patching the existing Redux architecture.",
          rationale:
            "Redux's centralized store made per-page ownership and testing difficult; hooks-based, page-scoped state let each page own its logic independently and let two engineers work in parallel without stepping on each other.",
        },
        {
          decision:
            "Split the rebuild by page ownership between two engineers rather than one engineer working through the codebase file by file.",
          rationale:
            "Page-level ownership matched the new page-scoped state model, so each engineer could design and validate their pages independently instead of coordinating changes to a single shared store.",
        },
      ],
      results:
        "The rebuilt architecture cut day-to-day cognitive overhead enough that the team estimated it back roughly 20 hours a week, with a modest improvement in app speed as a secondary win. The bigger result was a codebase the team could actually extend without every change touching a shared, tangled state tree.",
    },
    bullets: [
      "Co-led a ground-up rebuild of Snap's Dynamic Product Ads system — the Monetization org's largest surface — migrating state management from Redux to React Hook Form + Jotai.",
      "Split page-level ownership with one other engineer across a two-quarter migration, moving advertiser-facing surfaces to the new architecture without a big-bang rewrite.",
      "Reduced team-wide cognitive overhead enough to save an estimated ~20 hours per week, alongside a modest app-speed improvement.",
    ],
  },
  {
    slug: "snap-promote-web",
    title: "Snap Promote for Web",
    oneLiner:
      "Rebuilt an existing multi-step ad campaign flow into a genuine one-click self-serve promotion for advertisers on the web.",
    timeline: "Snap Inc. tenure (2024–2025)",
    role: "Contributor on a larger team effort",
    stack: ["TypeScript", "React", "GraphQL"],
    metrics: [
      { label: "Flow", value: "Multi-step → 1-click" },
      { label: "Team", value: "Cross-functional" },
      { label: "Scope", value: "Existing feature rebuild" },
      { label: "Outcome", value: "Shipped & live" },
    ],
    sections: {
      problem:
        "Promoting content on Snapchat required advertisers to step through an existing multi-step campaign creation flow, even for the simplest, most common promotions — friction that didn't match how self-serve advertisers actually wanted to spend money.",
      build:
        "As part of a larger team effort, rebuilt Snap Promote for Web to collapse that multi-step flow into a single one-click action, inferring sensible campaign defaults so advertisers with common promotion goals could skip manual configuration entirely.",
      challenges:
        "The hard part wasn't the UI — it was deciding what to infer. Every field removed from the advertiser had to be replaced with a default that was right often enough not to erode trust in a flow that hands over spend with a single click.",
      decisions: [
        {
          decision:
            "Infer campaign defaults instead of exposing a shortened configuration form.",
          rationale:
            "A shorter form still asks the advertiser to make decisions; inferring defaults removes the decision entirely for the common case, which is what a genuine one-click flow requires.",
        },
      ],
      results:
        "Snap Promote for Web shipped and is live, giving advertisers a real one-click path to promote content instead of working through a multi-step campaign flow.",
    },
    bullets: [
      "Contributed to a team-wide rebuild of Snap Promote for Web, collapsing an existing multi-step ad campaign flow into a one-click self-serve promotion.",
      "Focused on inference logic for campaign defaults, balancing simplicity against advertiser trust in an automated flow.",
    ],
  },
];
