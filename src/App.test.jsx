import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CaseStudyRoute from "./components/CaseStudyRoute";

beforeEach(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
});

describe("direct case-study load", () => {
  it("renders standalone with a back-to-all-work link", () => {
    render(
      <MemoryRouter initialEntries={["/work/zoom-metrics-pipeline"]}>
        <Routes>
          <Route path="/work/:slug" element={<CaseStudyRoute />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /Zoom Meeting Metrics Pipeline/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Back to all work/i }),
    ).toBeInTheDocument();
  });
});
