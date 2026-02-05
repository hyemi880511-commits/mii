export default function Home() {
  return (
    <>
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="h1">
            성과중심 <span style={{ color: "#ff6600" }}>분양은만별</span>.
          </div>
          <p className="p" style={{ marginTop: 14, maxWidth: 720 }}>
            지금은 “공통 뼈대(로딩/헤더/푸터/퀵/햄버거/커서/폰트/반응형)”만 먼저
            깔아두는 단계야. 메인 11섹션은 다음 스텝에서 그대로 얹어줄게.
          </p>

          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            <a className="btn primary" href="#consult">
              상담 접수
            </a>
            <a className="btn" href="#download">
              다운로드
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#000", color: "#fff" }}>
        <div className="container">
          <div className="h2">왜 분양은 만별일까요?</div>
          <p className="p" style={{ marginTop: 12, maxWidth: 720 }}>
            (여기에 5장 스와이프 카드 / dot / 무한루프 들어갈 예정)
          </p>
        </div>
      </section>

      <section className="section" id="consult" style={{ background: "#fff" }}>
        <div className="container">
          <div className="h2">상담 접수</div>
          <p className="p" style={{ marginTop: 12, maxWidth: 720 }}>
            (여기에 폼 + 카톡상담 연결 들어갈 예정)
          </p>
        </div>
      </section>

      <section className="section" id="download" style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div className="h2">다운로드</div>
          <p className="p" style={{ marginTop: 12, maxWidth: 720 }}>
            (지명원/상품소개서 링크 영역)
          </p>
        </div>
      </section>
    </>
  );
}
