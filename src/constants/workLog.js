export const workLog = [
  {
    slug: "zoom-metrics-pipeline",
    title: "Zoom Meeting Metrics Pipeline",
    oneLiner:
      "An 8-step durable workflow that turns every meeting into attendance data and an AI summary — cutting ~1 hour of manual work per meeting to about 3 minutes.",
    timeline: "2026 Q1",
    role: "Lead engineer — design, build, ship",
    stack: ["Inngest", "TypeScript", "Next.js", "Postgres", "LLM eval gate"],
    metrics: [
      { label: "Per-meeting work", value: "~1h → 3min" },
      { label: "Pipeline steps", value: "8" },
      { label: "Eval gate touchpoints", value: "4" },
      { label: "Manual entry removed", value: "100%" },
    ],
    sections: {
      problem:
        "Meeting attendance and recaps were assembled by hand — slow, inconsistent, and easy to skip. Each meeting cost roughly an hour of someone reconciling who showed up and writing a summary.",
      build:
        "A durable Inngest workflow polls for the transcript, merges straggler occurrences, derives attendance, runs an LLM summary behind an eval gate, and stamps a status on each meeting record. Each step is independently retryable so a transient failure never loses the run.",
      challenges:
        "Meetings don't end cleanly: late-joining occurrences, ghost meetings with only AI notetakers, recordings disabled mid-call. Each needed an explicit branch with a sensible fallback rather than a hard failure.",
      decisions: [
        {
          decision:
            "Model the whole flow as a durable step function rather than one long job.",
          rationale:
            "Per-step retries and visibility — a transcript that isn't ready yet retries that step instead of failing the meeting.",
        },
        {
          decision:
            "Gate the AI summary behind an eval check before it can be used.",
          rationale:
            "Bad summaries are worse than none; the gate fails closed and falls back rather than shipping a wrong recap.",
        },
      ],
      results:
        "Meeting attendance and recaps are now fully automated and consistent, eliminating the manual reconciliation step this pipeline replaced.",
    },
    bullets: [
      "Designed and shipped an 8-step durable workflow (Inngest) that automated meeting attendance and AI recaps, cutting ~1h of manual work per meeting to ~3min.",
      "Built explicit branching for edge cases (ghost meetings, disabled recordings) with fail-closed fallbacks gated by an LLM eval check.",
    ],
  },
  {
    slug: "self-service-rescheduling",
    title: "Self-Service Rescheduling & Schedule Management",
    oneLiner:
      "A full scheduling system that replaced manual calendar coordination with in-app recurring schedules, self-service reschedules, and an availability heatmap.",
    timeline: "2026 Q1–Q2",
    role: "Lead frontend engineer — design, build, ship",
    stack: [
      "Next.js (App Router)",
      "Postgres",
      "Inngest",
      "RRULE",
      "Timezone-aware scheduling",
      "Radix UI",
    ],
    metrics: [
      { label: "Scheduling workflow", value: "Manual → self-service" },
      { label: "Reschedule paths shipped", value: "2" },
      { label: "Inheritance model", value: "2-tier" },
      { label: "Core components built", value: "4" },
    ],
    sections: {
      problem:
        "Rescheduling a cohort meeting meant filling out a limited form or emailing staff, who then manually picked a new time and updated the calendar by hand. Scheduling itself lived outside the app entirely, with no visibility into upcoming meetings and no data to inform when to meet.",
      build:
        "A scheduling hub page for staff to create recurring or one-off schedules, a mode-switching schedule editor with a debounced server-side recurrence preview, single-instance and full-series reschedule flows, and an availability heatmap that visualizes member availability by day and hour and can pre-fill a time with one click.",
      challenges:
        "The hardest part was the UI itself: a two-panel layout with a collapsible heatmap, live server-side previews, and contextual warnings (rescheduling within 24 hours, past dates, cancelled instances) all had to feel cohesive. Underneath that, every date has to survive daylight-saving transitions correctly, and calendar clients need explicit update signals or they show duplicate events instead of a modified one.",
      decisions: [
        {
          decision:
            "Expand recurrence rules server-side with a debounced live preview instead of computing dates in the browser.",
          rationale:
            "Client-side date math drifts from what the server will actually generate around DST boundaries; making the server the single source of truth removes that class of bug.",
        },
        {
          decision:
            "Reschedule a recurring series by cancelling the old instances and creating a new schedule, rather than editing the recurrence rule in place.",
          rationale:
            "Each schedule maps 1:1 to a calendar meeting; changing the pattern in place would silently change everyone's join link. Cancel-and-replace keeps the meeting identity and the participant notifications correct.",
        },
        {
          decision:
            "Bump a sequence number on every reschedule to signal calendar clients that this is an update, not a new event.",
          rationale:
            "Without it, participants see duplicate entries on their calendars instead of one updated meeting.",
        },
      ],
      results:
        "Staff now manage a cohort's entire meeting schedule directly within the app, eliminating external coordination. Members and staff can reschedule individual meetings or full recurring series based on real availability data rather than manual guesswork, with calendar behavior verified correct across all major calendar clients.",
    },
    bullets: [
      "Built a full-stack scheduling and rescheduling system that replaced manual calendar coordination, letting staff create recurring or one-off schedules and reschedule single meetings or entire series with automated calendar updates.",
      "Designed a cancel-and-replace architecture for recurring series reschedules, with sequence-number management so calendar clients treat changes as updates rather than duplicate events.",
      "Built an interactive availability heatmap that aggregates member schedule data into a color-coded weekday/hour grid, with click-to-select time pre-filling into the scheduling form.",
      "Implemented server-side recurrence expansion with a debounced live preview and per-date timezone-aware conversion, eliminating a class of client-side daylight-saving bugs.",
    ],
  },
  {
    slug: "llm-eval-framework",
    title: "LLM Eval Framework",
    oneLiner:
      "A reusable evaluation framework that replaced manual human review of three LLM features with production-parity automated grading, confidence-gated auto-correction, and full replay/drift tooling.",
    timeline: "2026 Q2",
    role: "Sole architect and lead engineer",
    stack: [
      "LLM evaluation tooling",
      "Groq",
      "Claude API",
      "Postgres",
      "Inngest",
      "Next.js",
    ],
    metrics: [
      { label: "LLM workflows automated", value: "3" },
      { label: "Baseline accuracy (auto-correction)", value: "100%" },
      { label: "Summary quality touchpoints", value: "4" },
      { label: "Cost vs. baseline model", value: "~10x cheaper" },
    ],
    sections: {
      problem:
        "Three separate LLM features required a human to check every output before it reached members: matching meeting participants to roster profiles, reviewing every AI-generated meeting summary for hallucinated or leaked content, and hand-composing per-meeting digest emails. The pattern was the same each time — an error rate that's tolerable at low volume becomes a full-time job at scale, and the goal was to remove the manual review without losing the quality signal.",
      build:
        "An evaluation framework built as reusable primitives rather than a one-off solution for a single feature: a custom evaluation provider that delegates to the same production LLM service code path, so there's no drift between what passes offline evaluation and what actually runs. Every production judge call logs its input, output, confidence, and cost to a dedicated table, which unlocks replaying past decisions against a new model, tracking confidence drift over time, and building a labeled corpus from real production traffic. A cheapest-viable-model strategy starts with an inexpensive open-source model and only promotes to a more expensive model per-domain if accuracy misses a threshold.",
      challenges:
        "The natural first instinct is to write a separate evaluation harness that calls the LLM directly — but that creates exactly the kind of drift this framework was meant to eliminate, since the eval suite and production would then be testing different code paths. Large transcripts also don't fit cleanly in a logging table, so inputs needed a small/large split with a pointer-and-resolver pattern for anything oversized. And because this framework enables auto-correction in production, every auto-applied decision needed to be safely reversible, not just logged.",
      decisions: [
        {
          decision:
            "Build a custom evaluation provider that wraps the existing production LLM service instead of a standalone eval harness.",
          rationale:
            "One code path, two entry points — this eliminates the most common failure mode in LLM evaluation, where the eval suite quietly diverges from what production actually runs.",
        },
        {
          decision:
            "Log every production judge call (input, output, confidence, cost) to a dedicated table.",
          rationale:
            "This single table unlocks replay-against-new-models, weekly drift detection, and corpus bootstrapping for future fine-tuning — without it, every capability would need its own bespoke logging.",
        },
        {
          decision:
            "Capture pre-correction state on every auto-applied decision so it can be reverted with a single update.",
          rationale:
            "Auto-correction in production is inherently risky; a reversible audit trail is what makes trusting the model to act automatically safe enough to ship.",
        },
        {
          decision:
            "Let each domain (attendance matching, summary grading, digests) adopt increasing rigor independently rather than in lockstep.",
          rationale:
            "Different domains have different false-positive costs — attendance matching can tolerate more risk than a public-facing summary, so gating them at the same rigor level would either over- or under-protect one of them.",
        },
      ],
      results:
        "Participant-matching auto-correction achieved full accuracy on its baseline validation set and now operates with automated, confidence-gated correction, falling back to human review only when needed. Meeting summaries pass through a four-point automated quality gate — transcript grounding, name anonymization, roster-match accuracy, and pre-meeting content leakage — before insertion, flagging rather than blocking on failure to preserve visibility without stalling delivery. The framework was designed to extend beyond the three LLM features it initially launched with.",
    },
    bullets: [
      "Designed and shipped an LLM evaluation framework that automated three manual quality-check workflows, replacing full human-in-the-loop review with automated grading and confidence-gated auto-correction.",
      "Architected a production-parity evaluation pattern using a custom provider that delegates to the existing production LLM service, eliminating drift between the offline eval suite and what actually runs in production.",
      "Built a production judge-call logging system capturing input, output, confidence, and cost on every call — enabling replay against new models, drift detection, and automatic training-corpus bootstrapping.",
      "Shipped automated participant-matching correction reaching full accuracy on its baseline validation corpus, using a cheapest-viable-model strategy with a promotion path to stronger models if per-domain accuracy slips.",
      "Built a four-touchpoint automated meeting-summary quality gate (grounding, anonymization, roster match, content-leakage check) sitting between generation and delivery, flagging failures for review without blocking delivery.",
      "Designed a reversibility-first auto-correction pattern with a full audit trail, making automated LLM decisions safe to trust in production because every one is reviewable and revertible.",
    ],
  },
];
