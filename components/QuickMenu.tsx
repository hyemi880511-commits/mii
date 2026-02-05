"use client";

export default function QuickMenu() {
  return (
    <>
      {/* 우측 퀵 */}
      <div
        style={{
          position: "fixed",
          right: 18,
          top: "35%",
          zIndex: 60,
          display: "grid",
          gap: 10,
        }}
      >
        <a className="btn" href="#download">
          다운로드
        </a>
        <a className="btn primary" href="#consult">
          문의하기
        </a>
        <button
          className="btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TOP
        </button>
      </div>

      {/* 하단 고정 퀵 */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          padding: 12,
          pointerEvents: "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "flex-end",
            pointerEvents: "auto",
          }}
        >
          <a className="btn" href="/kakao">
            카톡상담
          </a>
          <a className="btn primary" href="/consult">
            상담접수
          </a>
        </div>
      </div>
    </>
  );
}
