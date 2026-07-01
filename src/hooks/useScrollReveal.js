import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function useScrollReveal() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.classList.remove("pre-in");
      el.classList.add("revealed");
      return;
    }
    el.classList.add("pre-in");
    const reveal = () => {
      el.classList.remove("pre-in");
      el.classList.add("revealed");
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    const failsafe = setTimeout(reveal, 2200); // never stay hidden
    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, [reduce]);

  return ref;
}
