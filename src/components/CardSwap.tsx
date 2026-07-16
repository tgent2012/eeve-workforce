import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import "./CardSwap.css";

interface CardProps {
  children?: ReactNode;
  customClass?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()} />
));
Card.displayName = "Card";

interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  onSwap?: (idx: number) => void;
  activeIndexOverride?: number | null;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLDivElement | null, slot: ReturnType<typeof makeSlot>, skew: number) => {
  if (!el) return;
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true
  });
};

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  onSwap,
  activeIndexOverride = null,
  skewAmount = 6,
  easing = "elastic",
  children
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length]
  );

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const container = useRef<HTMLDivElement | null>(null);

  // Set initial placement on mount
  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));
  }, [cardDistance, verticalDistance, skewAmount, refs]);

  // Handle activeIndexOverride from parent (e.g. when user clicks tabs)
  useEffect(() => {
    if (activeIndexOverride === null || activeIndexOverride === undefined || order.current.length < 2) return;
    
    const targetOrderIndex = order.current.indexOf(activeIndexOverride);
    if (targetOrderIndex === -1 || targetOrderIndex === 0) return; // Already at front or not found

    // Rotate array so target index is first (front card)
    const front = order.current[0];
    const elFront = refs[front].current;
    const tl = gsap.timeline();
    tlRef.current = tl;

    // Drop the front card to the back
    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop * 0.4,
      ease: "power2.in"
    });

    const newOrder = [...order.current.slice(targetOrderIndex), ...order.current.slice(0, targetOrderIndex)];

    // Promote all other cards forward in the stack
    tl.addLabel("promote", `-=${config.durDrop * 0.2}`);
    newOrder.slice(0, -1).forEach((idx, i) => {
      const el = refs[idx].current;
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove * 0.6,
          ease: "power2.out"
        },
        "promote"
      );
    });

    // Return the old front card to the very back of the stack
    const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
    tl.addLabel("return", "promote+=0.1");
    tl.call(
      () => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      },
      [],
      "return"
    );
    tl.to(
      elFront,
      {
        x: backSlot.x,
        y: backSlot.y,
        z: backSlot.z,
        duration: config.durReturn * 0.6,
        ease: "power2.out"
      },
      "return"
    );

    tl.call(() => {
      order.current = newOrder;
      if (onSwap) {
        onSwap(activeIndexOverride);
      }
    });
  }, [activeIndexOverride, cardDistance, verticalDistance, refs, config.durDrop, config.durMove, config.durReturn, onSwap]);

  // Handle auto-scroll interval (only active if delay > 0 and activeIndexOverride is null)
  useEffect(() => {
    if (delay <= 0 || activeIndexOverride !== null) return;

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      if (onSwap) {
        onSwap(rest[0]);
      }

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          `promote+=${i * 0.15}`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        [],
        "return"
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        "return"
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      if (node) {
        const pause = () => {
          tlRef.current?.pause();
          clearInterval(intervalRef.current);
        };
        const resume = () => {
          tlRef.current?.play();
          intervalRef.current = window.setInterval(swap, delay);
        };
        node.addEventListener("mouseenter", pause);
        node.addEventListener("mouseleave", resume);
        return () => {
          node.removeEventListener("mouseenter", pause);
          node.removeEventListener("mouseleave", resume);
          clearInterval(intervalRef.current);
        };
      }
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, config.durDrop, config.durMove, config.durReturn, config.ease, config.promoteOverlap, config.returnDelay, refs, onSwap, activeIndexOverride]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement<any>, {
          key: i,
          ref: refs[i],
          style: { width, height, ...((child.props as any).style ?? {}) },
          onClick: (e: React.MouseEvent) => {
            (child.props as any).onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
