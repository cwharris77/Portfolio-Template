import PropTypes from "prop-types";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useCountUp } from "./useCountUp";

function Probe({ value }) {
  const { ref, display } = useCountUp(value, { durationMs: 0 });
  return (
    <span ref={ref} data-testid="v">
      {display}
    </span>
  );
}

Probe.propTypes = { value: PropTypes.string.isRequired };

describe("useCountUp", () => {
  it("returns non-numeric values unchanged", () => {
    render(<Probe value="~1h → 3min" />);
    expect(screen.getByTestId("v").textContent).toBe("~1h → 3min");
  });

  it("renders the final formatted value for numeric input at duration 0", () => {
    render(<Probe value="100%" />);
    expect(screen.getByTestId("v").textContent).toBe("100%");
  });
});
