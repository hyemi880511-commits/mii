import type { Metadata } from "next";
import "./globals.css";

// ✅ 공통 컴포넌트/프로바이더들
import MegaMenuProvider from "@/components/MegaMenuProvider";
import IntroLoaderProvider from "@/components/IntroLoaderProvider";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickMenu from "@/components/QuickMenu";

// (선택) Pretendard를 globals.css에서 적용했다면 여기 추가 필요 없음
// import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "만별",
  description: "성과중심 분양은만별.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MegaMenuProvider>
          {/* ✅ 로딩 화면은 Provider가 관리 (세션 1회 / 스크롤락 / onDone 등) */}
          <IntroLoaderProvider>
            {/* 공통 UI */}
            <Cursor />
            <Header />
            <QuickMenu />

            {/* 페이지 */}
            <main className="page">{children}</main>

            <Footer />
          </IntroLoaderProvider>
        </MegaMenuProvider>
      </body>
    </html>
  );
}
