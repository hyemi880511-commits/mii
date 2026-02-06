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
    // 탭(세션)에서 1번만 보여주고 싶으면 sessionStorage 사용
    const key = "intro_done";
    const done = sessionStorage.getItem(key);

    if (!done) {
      setShow(true);
      // 로더 떠있는 동안 스크롤 잠금
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
      {children}
      {show && (
        <IntroLoader
          text="성과중심 분양은만별."
          highlightWord="분양은만별."
          durationMs={1600}
          onDone={handleDone}
        />
      )}
    </>
  );
}
