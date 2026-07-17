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

const dockNavVariants = cva("w-full", {
  variants: {
    align: {
      center: "",
      start: "",
      end: "",
    },
  },
  defaultVariants: {
    align: "center",
  },
});

const dockNavListVariants = cva(
  "mb-0 flex list-none flex-row items-end justify-center p-0 text-[clamp(0.875rem,1.4vw,1.125rem)]",
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

const dockNavItemVariants = cva("relative flex items-center justify-center");

const dockNavLinkVariants = cva(
  "relative z-[1] flex h-full w-full items-center justify-center px-[0.5em] py-0"
);

const dockNavIconVariants = cva("h-full w-full object-contain");

const dockNavTooltipVariants = cva(
  "pointer-events-none absolute top-0 z-10 whitespace-nowrap font-sans font-bold text-xs text-neutral-900 dark:text-neutral-100"
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
    return <span className={dockNavIconVariants()}>{icon}</span>;
  }

  if (iconSrc) {
    return (
      <img
        alt={alt ?? label}
        className={dockNavIconVariants()}
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
      base: "2.4rem",
      far: "2.8rem",
      close: "3.2rem",
      active: "3.6rem",
    } : {
      base: "5rem",
      far: "6rem",
      close: "7rem",
      active: "8rem",
    };
  };

  const getItemWidth = (index: number) => {
    const widths = getWidths();
    if (hoveredIndex === null) {
      return widths.base;
    }

    const distance = Math.abs(index - hoveredIndex);

    if (distance === 0) {
      return widths.active;
    }

    if (distance === 1) {
      return widths.close;
    }

    if (distance === 2) {
      return widths.far;
    }

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
      <ul className={dockNavListVariants({ align })}>
        {items.map((item, index) => {
          const itemKey = `${item.label}-${item.href ?? index}`;

          return (
            <motion.li
              animate={{ width: getItemWidth(index) }}
              className={dockNavItemVariants()}
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
                className={dockNavLinkVariants()}
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
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}

export {
  DockNav,
  dockNavIconVariants,
  dockNavItemVariants,
  dockNavLinkVariants,
  dockNavListVariants,
  dockNavTooltipVariants,
  dockNavVariants,
};

export default DockNav;
