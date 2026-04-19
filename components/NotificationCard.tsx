import * as React from "react";

export default function NotificationCard({
  icon,
  title,
  body,
  time,
  accent = "#e0f2f9",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  time: string;
  accent?: string;
}) {
  return (
    <div className="flex gap-3 p-3.5 bg-white rounded-[18px] border border-ink-line">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-brand-blue"
        style={{ background: accent }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-small font-bold text-ink-navy">{title}</h4>
        <p className="text-[12px] text-ink-slate leading-snug mt-0.5 line-clamp-2">
          {body}
        </p>
      </div>
      <span className="text-[11px] text-ink-muted font-semibold shrink-0">
        {time}
      </span>
    </div>
  );
}
