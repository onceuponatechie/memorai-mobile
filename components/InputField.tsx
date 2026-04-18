"use client";

import * as React from "react";

export default function InputField({
  label,
  icon,
  trailing,
  prefix,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}: {
  label?: string;
  icon?: React.ReactNode;
  trailing?: React.ReactNode;
  prefix?: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-small font-semibold text-ink-navy px-1">
          {label}
        </label>
      )}
      <div className="flex items-center h-14 px-4 bg-ink-line/60 rounded-[18px] border border-transparent focus-within:border-brand-blue focus-within:bg-white transition">
        {icon && <span className="text-ink-slate mr-3">{icon}</span>}
        {prefix && (
          <span className="text-ink-slate font-semibold mr-1">{prefix}</span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="flex-1 bg-transparent outline-none text-[15px] font-medium text-ink-navy placeholder:text-ink-muted"
        />
        {trailing && <span className="ml-2 text-ink-slate">{trailing}</span>}
      </div>
    </div>
  );
}
