"use client";

import * as React from "react";

export default function PillTabs<T extends string>({
  tabs,
  active,
  onChange,
  className = "",
  fullWidth = false,
}: {
  tabs: { key: T; label: string }[];
  active: T;
  onChange: (k: T) => void;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`${
        fullWidth ? "flex w-full" : "inline-flex"
      } items-center gap-1.5 bg-ink-line/70 p-1 rounded-pill ${className}`}
    >
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`${
              fullWidth ? "flex-1" : ""
            } h-9 px-4 rounded-pill text-[13px] font-bold transition-all ${
              isActive
                ? "bg-brand-blue text-white shadow-float"
                : "text-ink-slate"
            }`}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
