"use client";

import MegaMenu from "./MegaMenu";
import { useMegaMenu } from "./MegaMenuProvider";

export default function Header() {
  const { toggle } = useMegaMenu();

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,.06)",
        }}
      >
        <div
          className="container"
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <a href="/" style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>
            분양은<span style={{ color: "#ff6600" }}>만별</span>
          </a>

          <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a className="btn" href="/consult">
              상담
            </a>
            <button className="btn" onClick={toggle} aria-label="전체메뉴">
              ☰
            </button>
          </nav>
        </div>
      </header>

      <MegaMenu />
    </>
  );
}
