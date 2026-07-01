import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Only animate "simple" numeric values; leave ranges/labels static.
const SIMPLE = /^(~)?([\d,]+(?:\.\d+)?)([%x+km]?)$/i;

export function useCountUp(value, { durationMs = 1200 } = {}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const match = String(value).match(SIMPLE);
  const [display, setDisplay] = useState(match ? formatPart(match, 0) : value);

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[2].replace(/,/g, ""));
    if (reduce || durationMs === 0) {
      setDisplay(formatPart(match, target));
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let start = 0;
    const tick = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / durationMs);
      setDisplay(formatPart(match, target * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, reduce, durationMs, match]);

  return { ref, display };
}

function formatPart(match, n) {
  const prefix = match[1] || "";
  const suffix = match[3] || "";
  const decimals = match[2].includes(".") ? 1 : 0;
  const num = Number(n)
    .toFixed(decimals)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${prefix}${num}${suffix}`;
}
