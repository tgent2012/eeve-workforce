import { motion } from "motion/react";
import React, { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from: any, steps: any[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: any = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

export interface BlurTextToken {
  text: string;
  highlight?: boolean;
  lineBreakBefore?: boolean;
}

interface BlurTextProps {
  text?: string;
  tokens?: BlurTextToken[];
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: any;
  animationTo?: any[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
  highlightClassName?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  tokens,
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35,
  highlightClassName = ""
}) => {
  const elements = useMemo<BlurTextToken[]>(() => {
    if (tokens && tokens.length > 0) {
      return tokens;
    }
    const split = animateBy === "words" ? text.split(" ") : text.split("");
    return split.map(item => ({ text: item }));
  }, [tokens, text, animateBy]);

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5
      },
      { filter: "blur(0px)", opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots]
  );

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = useMemo(
    () => Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1))),
    [stepCount]
  );

  return (
    <p ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap" }}>
      {elements.map((segment, index) => {
        const spanTransition: any = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <React.Fragment key={index}>
            {segment.lineBreakBefore && <span className="w-full block h-0" aria-hidden="true" />}
            <motion.span
              className={`inline-block will-change-[transform,filter,opacity] ${
                segment.highlight ? highlightClassName : ""
              }`}
              initial={fromSnapshot}
              animate={inView ? animateKeyframes : fromSnapshot}
              transition={spanTransition}
              onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            >
              {segment.text === " " ? "\u00A0" : segment.text}
              {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
            </motion.span>
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default BlurText;
