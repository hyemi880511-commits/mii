"use client";

import { useMegaMenu } from "./MegaMenuProvider";

export default function MegaMenu() {
  const { open, setOpen } = useMegaMenu();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        pointerEvents: open ? "auto" : "none",
        opacity: open ? 1 : 0,
        transition: "opacity .18s ease",
      }}
      aria-hidden={!open}
    >
      {/* dim */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,.55)",
        }}
      />

      {/* panel */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          width: "min(520px, 92vw)",
          background: "#fff",
          padding: 18,
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <strong>전체메뉴</strong>
          <button className="btn" onClick={() => setOpen(false)}>
            닫기
          </button>
        </div>

        <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
          <MenuBlock
            title="분양은만별"
            items={[
              ["만별마케팅소개", "/about"],
              ["운영프로세스", "/process"],
              ["만별채널(외부)", "https://instagram.com"],
            ]}
          />
          <MenuBlock
            title="분양광고대행"
            items={[
              ["미디어믹스", "/media-mix"],
              ["퍼포먼스마케팅", "/performance"],
              ["바이럴마케팅", "/viral"],
              ["브랜드마케팅", "/brand"],
            ]}
          />
          <MenuBlock title="광고사례" items={[["광고사례", "/cases"]]} />
          <MenuBlock
            title="광고상담"
            items={[
              ["상담접수", "/consult"],
              ["카톡상담", "/kakao"],
              ["다운로드", "/download"],
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function MenuBlock({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div style={{ border: "1px solid rgba(0,0,0,.1)", borderRadius: 14, padding: 14 }}>
      <div style={{ fontWeight: 800, marginBottom: 10 }}>{title}</div>
      <div style={{ display: "grid", gap: 8 }}>
        {items.map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              background: "rgba(0,0,0,.04)",
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
