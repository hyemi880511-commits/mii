"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 새로고침마다 로딩 안 나오게 하려면 유지
    const done = sessionStorage.getItem("introDone");
    if (done) setShow(false);
  }, []);

  const DURATION = 1.0; // 애니 속도(느리면 0.8~0.9로)

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <div className="introWrap">
          {/* 텍스트(바탕: 연하게, 위: 와이프로 리빌) */}
          <span className="introTitle">
            {/* 바탕(연한 텍스트) */}
            <span className="introTitleBase">
              성과중심 <span className="orange">분양은만별.</span>
            </span>

            {/* 리빌(진한 텍스트) */}
            <motion.span
              className="introTitleReveal"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: DURATION, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => {
                // 리빌 끝나고 사라짐
                setTimeout(() => {
                  sessionStorage.setItem("introDone", "1");
                  setShow(false);
                }, 220);
              }}
            >
              성과중심 <span className="orange">분양은만별.</span>
            </motion.span>

            {/* 커서(따라가는 막대) */}
            <motion.span
              aria-hidden
              className="introCursor"
              initial={{ left: 0, opacity: 1 }}
              animate={{ left: "100%", opacity: [1, 1, 0] }}
              transition={{
                duration: DURATION,
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.85, 1],
              }}
            />
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
