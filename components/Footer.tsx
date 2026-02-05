export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(0,0,0,.08)", background: "#fff" }}>
      <div className="container" style={{ padding: "28px 20px" }}>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          <strong>
            성과중심 <span style={{ color: "#ff6600" }}>분양은만별</span>
          </strong>
          <span style={{ opacity: 0.7 }}>© {new Date().getFullYear()} Manbyeol</span>
        </div>

        <div style={{ marginTop: 10, fontSize: 14, opacity: 0.75, lineHeight: 1.7 }}>
          <div>분양광고대행사 · 퍼포먼스/바이럴/브랜드 마케팅</div>
          <div>상담: 전화/온라인 접수 · (카톡/문자 알림은 다음 단계에서 연결)</div>
        </div>
      </div>
    </footer>
  );
}
