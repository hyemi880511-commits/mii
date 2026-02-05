import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickMenu from "@/components/QuickMenu";
import MegaMenuProvider from "@/components/MegaMenuProvider";
import Cursor from "@/components/Cursor";
import IntroLoader from "@/components/IntroLoader";

export const metadata: Metadata = {
  title: "분양광고대행사 | 분양은만별",
  description: "성과 중심 분양광고대행사 분양은만별. 상담 예약 및 온라인 상담 접수.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 로드 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/static/pretendard.css"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Cursor />
        <MegaMenuProvider>
          <IntroLoader />
          <Header />
          <main className="pb-24">{children}</main>
          <Footer />
          <QuickMenu />
        </MegaMenuProvider>
      </body>
    </html>
  );
}
