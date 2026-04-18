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
    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2 pointer-events-none">
      <nav className="pointer-events-auto mx-auto bg-white rounded-[28px] shadow-card border border-ink-line flex items-center justify-between px-4 py-3">
        {tabs.map(({ key, href, label, Icon }) => {
          const isActive =
            active === key || (!active && pathname?.startsWith(href));
          return (
            <Link
              key={key}
              href={href}
              className="relative flex-1 flex flex-col items-center justify-center gap-0.5"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-brand-blue text-white shadow-float"
                    : "text-ink-slate"
                }`}
              >
                <Icon size={22} filled={isActive} />
              </div>
              <span
                className={`text-[10px] font-semibold ${
                  isActive ? "text-brand-blue" : "text-ink-muted"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
