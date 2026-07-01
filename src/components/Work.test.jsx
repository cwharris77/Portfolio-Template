import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Work from "./Work";

beforeEach(() => {
  globalThis.IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
});

describe("Work", () => {
  it("renders a tile per case study", () => {
    render(
      <MemoryRouter>
        <Work />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { level: 2, name: /work/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(5);
  });
});
