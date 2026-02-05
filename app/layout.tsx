import type { Metadata } from "next";
import "./globals.css";

import IntroLoader from "@/components/IntroLoader";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickMenu from "@/components/QuickMenu";
import MegaMenuProvider from "@/components/MegaMenuProvider";

export const metadata: Metadata = {
  title: "성과중심 분양은만별",
  description: "분양광고대행사 | 성과중심 분양 마케팅, 만별",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <MegaMenuProvider>
          <IntroLoader />

          {/* 커서(PC에서만 표시) */}
          <Cursor />

          <Header />
          <QuickMenu />

          <main className="page">{children}</main>

          <Footer />
        </MegaMenuProvider>
      </body>
    </html>
  );
}
