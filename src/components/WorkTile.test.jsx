import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import WorkTile from "./WorkTile";

const entry = {
  slug: "zoom-metrics-pipeline",
  title: "Zoom Meeting Metrics Pipeline",
  oneLiner: "Durable workflow for attendance + AI recaps.",
  timeline: "2026 Q1",
};

beforeEach(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
});

describe("WorkTile", () => {
  it("renders the title and links to the case study", () => {
    render(
      <MemoryRouter>
        <WorkTile entry={entry} />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", {
      name: /Zoom Meeting Metrics Pipeline/i,
    });
    expect(link).toHaveAttribute("href", "/work/zoom-metrics-pipeline");
  });
});
