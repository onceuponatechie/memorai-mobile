import * as React from "react";

export default function StatusBar({
  time = "9:41",
  tone = "dark",
}: {
  time?: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-white" : "text-ink-navy";
  return (
    <div className={`flex items-center justify-between px-7 pt-3 pb-1 text-[14px] font-semibold ${color}`}>
      <span className="tracking-tight">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="1" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="1" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
        </svg>
        {/* wifi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path
            d="M1 4C3 2 5 1 8 1s5 1 7 3M3 7c1.5-1.3 3-2 5-2s3.5.7 5 2M6 10a3 3 0 0 1 4 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
          <rect x="24" y="4" width="2" height="4" rx="0.8" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
