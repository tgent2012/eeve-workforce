"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "motion/react";
import { type ComponentPropsWithoutRef, type ReactNode, useState, useEffect } from "react";

// Inline definition of cn utility to ensure instant compilation without alias config
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

const DOCK_EASE = [0.16, 1, 0.3, 1] as const;
const DOCK_DURATION = 0.5;

const dockNavVariants = cva("w-full flex justify-center", {
  variants: {
    align: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

const dockNavListVariants = cva(
  "mb-0 flex list-none flex-row items-end justify-center text-[clamp(0.875rem,1.4vw,1.125rem)]",
  {
    variants: {
      align: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
      },
    },
    defaultVariants: {
      align: "center",
    },
  }
);

export interface DockNavItem {
  /** Accessible label for the icon image. */
  alt?: string;
  /** Link destination. */
  href?: string;
  /** Custom icon node. Used when `iconSrc` is not provided. */
  icon?: ReactNode;
  /** Remote or local image URL for the dock icon. */
  iconSrc?: string;
  /** Visible tooltip label. */
  label: string;
}

export interface DockNavProps
  extends Omit<ComponentPropsWithoutRef<"nav">, "children">,
    VariantProps<typeof dockNavVariants> {
  /** Animation duration in seconds. */
  duration?: number;
  /** Dock entries rendered left to right. */
  items: DockNavItem[];
}

function DockNavItemIcon({
  alt,
  icon,
  iconSrc,
  label,
}: Pick<DockNavItem, "alt" | "icon" | "iconSrc" | "label">) {
  if (icon) {
    return <span className="flex items-center justify-center w-full h-full p-1.5 sm:p-2.5">{icon}</span>;
  }

  if (iconSrc) {
    return (
      <img
        alt={alt ?? label}
        className="h-full w-full object-contain p-1.5 sm:p-2.5"
        height={64}
        src={iconSrc}
        width={64}
      />
    );
  }

  return null;
}

function DockNav({
  align = "center",
  className,
  duration = DOCK_DURATION,
  items,
  ...props
}: DockNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getWidths = () => {
    return isMobile ? {
      base: "2.8rem",
      far: "3.2rem",
      close: "3.6rem",
      active: "4.2rem",
    } : {
      base: "4.5rem",
      far: "5.2rem",
      close: "6.0rem",
      active: "6.8rem",
    };
  };

  const getItemWidth = (index: number) => {
    const widths = getWidths();
    if (hoveredIndex === null) {
      return widths.base;
    }
    const distance = Math.abs(index - hoveredIndex);
    if (distance === 0) return widths.active;
    if (distance === 1) return widths.close;
    if (distance === 2) return widths.far;
    return widths.base;
  };

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration,
        ease: DOCK_EASE,
      };

  return (
    <nav className={cn(dockNavVariants({ align, className }))} {...props}>
      <ul 
        className={cn(
          dockNavListVariants({ align }), 
          "bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 shadow-2xl flex items-end gap-1.5 sm:gap-3 max-w-max mx-auto"
        )}
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const itemKey = `${item.label}-${item.href ?? index}`;

          return (
            <motion.li
              animate={{ 
                width: getItemWidth(index),
                height: getItemWidth(index), // Keeps the icon square
              }}
              className="relative flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 shadow-sm cursor-pointer overflow-visible"
              initial={false}
              key={itemKey}
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
              }}
              transition={transition}
            >
              <a
                className="relative z-10 flex h-full w-full items-center justify-center"
                href={item.href ?? "#"}
                onClick={(event) => {
                  if (!item.href) {
                    event.preventDefault();
                  }
                }}
              >
                <DockNavItemIcon
                  alt={item.alt}
                  icon={item.icon}
                  iconSrc={item.iconSrc}
                  label={item.label}
                />
              </a>
              <motion.div
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? (isMobile ? "-125%" : "-135%") : "-80%",
                  scale: isHovered ? 1 : 0.8,
                }}
                className="pointer-events-none absolute top-0 z-25 whitespace-nowrap rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-2 py-1 text-[10px] sm:text-xs font-semibold shadow-md border border-neutral-800 dark:border-neutral-200"
                initial={false}
                transition={transition}
              >
                <div>{item.label}</div>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export {
  DockNav,
};
export default DockNav;
