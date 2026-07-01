import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CaseStudy from "./CaseStudy";

beforeEach(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
});

describe("CaseStudy", () => {
  it("renders the case study by slug", () => {
    render(
      <MemoryRouter>
        <CaseStudy slug="zoom-metrics-pipeline" />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: /Zoom Meeting Metrics Pipeline/i }),
    ).toBeInTheDocument();
  });

  it("calls onClose on Escape", () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <CaseStudy slug="zoom-metrics-pipeline" onClose={onClose} />
      </MemoryRouter>,
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });
});
