export default function Home() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          성과중심{" "}
          <span className="text-[var(--brand)]">분양광고대행사</span>
          <br />
          분양은만별
        </h1>

        <p className="mt-6 max-w-2xl text-white/70">
          공통(로딩/헤더/푸터/퀵/전체메뉴) 뼈대 적용 완료.
          다음은 메인 11섹션 디자인/CMS/SEO로 진행합니다.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a className="btn btn-brand" href="/consult">상담접수</a>
          <a className="btn" href="https://pf.kakao.com" target="_blank" rel="noreferrer">
            카톡상담
          </a>
          <a className="btn" href="tel:8218661123">전화</a>
        </div>
      </section>

      <section className="section border-t border-white/10">
        <div className="text-white/70">
          ✅ Pretendard / 반응형 / 최대1600 / 가로스크롤 방지 / 커서링 적용됨
        </div>
      </section>
    </div>
  );
}
