import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Custom SVG Icon based on the EEVE AI Design Bible */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 flex-shrink-0"
      >
        {/* Top bar */}
        <rect
          x="20"
          y="30"
          width="40"
          height="14"
          rx="7"
          fill="currentColor"
        />
        {/* Red Dot next to top bar */}
        <circle
          cx="74"
          cy="37"
          r="7"
          fill="#E53935"
        />
        {/* Middle bar */}
        <rect
          x="20"
          y="50"
          width="60"
          height="14"
          rx="7"
          fill="currentColor"
        />
        {/* Bottom bar */}
        <rect
          x="20"
          y="70"
          width="30"
          height="14"
          rx="7"
          fill="currentColor"
        />
      </svg>
      
      {!iconOnly && (
        <span className="font-sans font-black tracking-tight text-xl text-current">
          eeve<span className="text-[#E53935]">ai</span>
        </span>
      )}
    </div>
  );
};
