"use client";
import {
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
      iconSrc: "/slack-icon.png",
      alt: "Slack integration",
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
      className="relative w-full bg-transparent overflow-hidden select-none py-16 sm:py-24 px-5 sm:px-10"
    >
      <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="section-label mb-3 sm:mb-4 block">
          ENTERPRISE INTEGRATIONS
        </span>
        <h2 className="section-heading text-balance mb-6 sm:mb-8">
          Connects with your <span className="text-[#A31D1D] dark:text-[#FBBF24] font-extrabold">Tech Stack.</span>
        </h2>
        <p className="body-copy max-w-xl text-balance">
          EEVE works alongside the software your teams already rely on. No manual workflows, no database migration, and no API friction.
        </p>

        {/* Dynamic Interactive MacOS-style Dock */}
        <div className="w-full mt-8 sm:mt-10 py-4 sm:py-6 flex justify-center overflow-x-auto">
          <DockNav items={defaultItems} className="py-2" />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
