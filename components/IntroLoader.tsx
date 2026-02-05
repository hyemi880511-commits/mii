"use client";

import { useEffect, useMemo, useState } from "react";

const TEXT = "성과중심 분양은만별.";

export default function IntroLoader() {
  const [done, setDone] = useState(false);
  const [i, setI] = useState(0);

  const shown = useMemo(() => TEXT.slice(0, i), [i]);

  useEffect(() => {
    const t = setInterval(() => {
      setI((p) => {
        if (p >= TEXT.length) {
          clearInterval(t);
          setTimeout(() => setDone(true), 450);
          return p;
        }
        return p + 1;
      });
    }, 70);
    return () => clearInterval(t);
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        background: "#fff",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
          {shown}
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 22,
              background: "#ff6600",
              marginLeft: 6,
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
        <div style={{ marginTop: 10, fontSize: 13, opacity: 0.6 }}>
          Loading...
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
