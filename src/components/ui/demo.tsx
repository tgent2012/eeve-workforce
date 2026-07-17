"use client";

import {
  IconBrandSlack,
  IconBrandGithub,
  IconBrandNotion,
} from "@tabler/icons-react";
import { DockNav, type DockNavItem } from "./dock-nav";

const DEFAULT_DOCK_ITEMS: DockNavItem[] = [
  {
    label: "Mail",
    iconSrc: "/mail-icon.png",
    alt: "Gmail mail app icon",
    href: "#",
  },
  {
    label: "Calendar",
    iconSrc: "/calendar-icon.png",
    alt: "Calendar app icon",
    href: "#",
  },
  {
    label: "WhatsApp",
    iconSrc: "/whatsapp-icon.png",
    alt: "WhatsApp app icon",
    href: "#",
  },
  {
    label: "Slack",
    icon: <IconBrandSlack className="w-8 h-8 text-[#4A154B]" />,
    href: "#",
  },
  {
    label: "SMS Gateway",
    iconSrc: "/sms-icon.png",
    alt: "SMS Gateway app icon",
    href: "#",
  },
  {
    label: "Notion",
    icon: <IconBrandNotion className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />,
    href: "#",
  },
  {
    label: "GitHub",
    icon: <IconBrandGithub className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />,
    href: "#",
  },
];

export function DockNavDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 w-full max-w-2xl mx-auto shadow-sm">
      <h3 className="text-sm font-semibold text-neutral-500 mb-6 uppercase tracking-wider">
        Interactive Navigation Dock
      </h3>
      <DockNav items={DEFAULT_DOCK_ITEMS} align="center" className="py-2" />
    </div>
  );
}

export default DockNavDemo;
