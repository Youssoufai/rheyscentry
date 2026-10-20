"use client";

import { useEffect, useRef } from "react";

export default function CinematicFrame({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    let frame = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const progress = (window.innerHeight - rect.top) / total;
      const offset = Math.max(-18, Math.min(18, (progress - 0.5) * 32));
      node.style.setProperty("--shift", `${offset.toFixed(2)}px`);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`cinematic overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
