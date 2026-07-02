import { describe, it, expect } from "vitest";
import { workLog } from "./workLog";

const REQUIRED_SLUGS = [
  "zoom-metrics-pipeline",
  "self-service-rescheduling",
  "llm-eval-framework",
];

describe("workLog", () => {
  it("has exactly the required case studies in order", () => {
    expect(workLog.map((w) => w.slug)).toEqual(REQUIRED_SLUGS);
  });

  it("every entry is fully populated", () => {
    for (const w of workLog) {
      expect(w.title, `${w.slug} title`).toBeTruthy();
      expect(w.oneLiner, `${w.slug} oneLiner`).toBeTruthy();
      expect(w.timeline, `${w.slug} timeline`).toBeTruthy();
      expect(w.role, `${w.slug} role`).toBeTruthy();
      expect(w.stack.length, `${w.slug} stack`).toBeGreaterThan(0);
      expect(w.metrics.length, `${w.slug} metrics`).toBe(4);
      for (const m of w.metrics) {
        expect(m.label && m.value, `${w.slug} metric fields`).toBeTruthy();
      }
      const s = w.sections;
      expect(
        s.problem && s.build && s.challenges && s.results,
        `${w.slug} sections`,
      ).toBeTruthy();
      expect(s.decisions.length, `${w.slug} decisions`).toBeGreaterThan(0);
      for (const d of s.decisions) {
        expect(
          d.decision && d.rationale,
          `${w.slug} decision fields`,
        ).toBeTruthy();
      }
      expect(w.bullets.length, `${w.slug} bullets`).toBeGreaterThan(0);
    }
  });

  it("slugs are unique and url-safe", () => {
    const slugs = workLog.map((w) => w.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9-]+$/);
  });
});
