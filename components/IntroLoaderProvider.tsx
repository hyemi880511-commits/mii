"use client";

import { useEffect, useState } from "react";
import IntroLoader from "./IntroLoader";

export default function IntroLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const key = "intro_done";
    const done = sessionStorage.getItem(key);

    if (!done) {
      setShow(true);
      // 로더 동안 스크롤 잠금
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleDone = () => {
    sessionStorage.setItem("intro_done", "1");
    setShow(false);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* 로더가 위에 떠야 하니까 children보다 아래에 있어도 z-index로 덮지만,
          렌더 순서도 직관적으로 하려면 로더를 먼저 두는 편이 좋아 */}
      {show && (
        <IntroLoader
          text="성과중심 분양은만별."
          highlightWord="분양은만별."
          durationMs={1600}
          onDone={handleDone}
        />
      )}
      {children}
    </>
  );
}
