"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const show = () => node.classList.add("is-in");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      show();
      return undefined;
    }

    let frame = 0;
    const check = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 24) show();
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    const failsafe = window.setTimeout(show, 1800);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
