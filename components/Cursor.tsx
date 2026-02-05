"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };

    // 모바일/터치 디바이스는 숨김
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      el.style.display = "none";
      return;
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: "999px",
        border: "1px solid #ff6600",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-100px,-100px)",
      }}
    />
  );
}
