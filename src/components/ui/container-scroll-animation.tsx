"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.92, 0.96] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[52rem] md:h-[68rem] flex items-center justify-center relative p-2 md:p-8"
      ref={containerRef}
    >
      <div
        className="py-4 md:py-10 w-full relative"
        style={{
          perspective: isMobile ? "none" : "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div w-full max-w-5xl mx-auto text-left px-6 sm:px-12"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        rotateX: isMobile ? 0 : rotate,
        scale,
        boxShadow:
          "0 0 #0000002d, 0 9px 20px #0000002a, 0 37px 37px #00000022, 0 84px 50px #00000016, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-7xl -mt-8 mx-auto h-[32rem] md:h-[41rem] w-full border border-neutral-200/50 p-1 sm:p-2 md:p-4 bg-white rounded-[24px] sm:rounded-[30px] shadow-2xl overflow-hidden"
    >
      <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-[#FAFAFA]">
        {children}
      </div>
    </motion.div>
  );
};
