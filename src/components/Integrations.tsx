"use client";
import {
  IconBrandSlack,
  IconDatabase,
  IconCloud,
  IconTerminal2,
} from "@tabler/icons-react";
import { DockNav, type DockNavItem } from "./ui/dock-nav";

export const Integrations = () => {
  const defaultItems: DockNavItem[] = [
    {
      label: "WhatsApp",
      iconSrc: "/whatsapp-icon.png",
      alt: "WhatsApp integration",
      href: "#",
    },
    {
      label: "Gmail",
      iconSrc: "/mail-icon.png",
      alt: "Gmail mail integration",
      href: "#",
    },
    {
      label: "Salesforce",
      icon: <IconCloud className="w-full h-full text-[#009EDB]" />,
      href: "#",
    },
    {
      label: "Calendar",
      iconSrc: "/calendar-icon.png",
      alt: "Calendar integration",
      href: "#",
    },
    {
      label: "Slack",
      icon: <IconBrandSlack className="w-full h-full text-[#4A154B]" />,
      href: "#",
    },
    {
      label: "Opera PMS / EHR",
      icon: <IconDatabase className="w-full h-full text-[#718096]" />,
      href: "#",
    },
    {
      label: "SMS Gateway",
      iconSrc: "/sms-icon.png",
      alt: "SMS Gateway integration",
      href: "#",
    },
    {
      label: "n8n Webhooks",
      icon: <IconTerminal2 className="w-full h-full text-[#E28743]" />,
      href: "#",
    },
  ];

  return (
    <div
      id="integrations"
      className="relative w-full bg-transparent overflow-hidden select-none py-16 sm:py-24"
    >
      <div className="w-full max-w-4xl mx-auto text-center px-4 sm:px-6 flex flex-col gap-6 items-center">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#A31D1D] uppercase block">
          ENTERPRISE INTEGRATIONS
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] leading-[1.05]">
          Connects with your <span className="text-[#A31D1D]">Tech Stack.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#6B7280] font-sans font-normal leading-relaxed max-w-xl text-balance">
          EEVE works alongside the software your teams already rely on. No manual workflows, no database migration, and no API friction.
        </p>

        {/* Dynamic Interactive MacOS-style Dock */}
        <div className="w-full mt-10 py-6 flex justify-center">
          <DockNav items={defaultItems} className="py-2" />
        </div>

        <span className="text-[10px] tracking-[0.2em] font-mono font-bold text-neutral-400 uppercase mt-4">
          Hover icons to see integrations expand
        </span>
      </div>
    </div>
  );
};

export default Integrations;
