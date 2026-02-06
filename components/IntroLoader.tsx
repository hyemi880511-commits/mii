"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

type IntroLoaderProps = {
  text: string;
  highlightWord?: string;
  durationMs?: number; // 전체 리빌 시간 (ms)
  onDone?: () => void; // 리빌 끝나고 닫힐 때 호출
};

export default function IntroLoader({
  text,
  highlightWord,
  durationMs = 1600,
  onDone,
}: IntroLoaderProps) {
  const durationSec = Math.max(0.1, durationMs / 1000);

  // highlightWord를 기준으로 문장을 3등분 (앞/강조/뒤)
  const parts = useMemo(() => {
    if (!highlightWord) return { before: text, hi: "", after: "" };
    const idx = text.indexOf(highlightWord);
    if (idx === -1) return { before: text, hi: "", after: "" };
    return {
      before: text.slice(0, idx),
      hi: text.slice(idx, idx + highlightWord.length),
      after: text.slice(idx + highlightWord.length),
    };
  }, [text, highlightWord]);

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
          <span className="introTitle">
            {/* 바탕(연한 텍스트) */}
            <span className="introTitleBase">
              {parts.before}
              {parts.hi ? <span className="orange">{parts.hi}</span> : null}
              {parts.after}
            </span>

            {/* 리빌(진한 텍스트) */}
            <motion.span
              className="introTitleReveal"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: durationSec, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => {
                // 리빌 끝난 뒤 약간 여운 주고 닫기
                window.setTimeout(() => {
                  onDone?.();
                }, 220);
              }}
            >
              {parts.before}
              {parts.hi ? <span className="orange">{parts.hi}</span> : null}
              {parts.after}
            </motion.span>

            {/* 커서(따라가는 막대) */}
            <motion.span
              aria-hidden
              className="introCursor"
              initial={{ left: 0, opacity: 1 }}
              animate={{ left: "100%", opacity: [1, 1, 0] }}
              transition={{
                duration: durationSec,
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
