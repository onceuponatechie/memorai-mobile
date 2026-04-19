"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChatIcon, ChartIcon, BookIcon } from "./Icons";

type Tab = {
  key: string;
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number; filled?: boolean }>;
};

const tabs: Tab[] = [
  { key: "home", href: "/dashboard", label: "Home", Icon: HomeIcon },
  { key: "chat", href: "/chat", label: "Rai", Icon: ChatIcon },
  { key: "stats", href: "/stats", label: "Stats", Icon: ChartIcon },
  { key: "library", href: "/library", label: "Library", Icon: BookIcon },
];

export default function BottomNav({ active }: { active?: string }) {
  const pathname = usePathname();
  return (
    <div className="shrink-0 relative z-30 bg-white">
      {/* soft top edge */}
      <div className="absolute -top-4 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      <nav className="relative mx-3 mb-3 bg-ink-navy rounded-[26px] flex items-center justify-between px-2 py-2 shadow-[0_16px_32px_-18px_rgba(15,26,61,0.45)]">
        {tabs.map(({ key, href, label, Icon }) => {
          const isActive =
            active === key || (!active && pathname?.startsWith(href));
          return (
            <Link
              key={key}
              href={href}
              className="relative flex-1 flex items-center justify-center"
            >
              {isActive ? (
                <div className="flex items-center gap-2 bg-white rounded-[20px] pl-3 pr-4 py-2 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.4)]">
                  <Icon size={20} filled className="text-brand-blue" />
                  <span className="text-[12px] font-extrabold text-ink-navy">
                    {label}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-0.5 py-1.5 text-white/70">
                  <Icon size={20} />
                  <span className="text-[9px] font-extrabold tracking-wider uppercase">
                    {label}
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
