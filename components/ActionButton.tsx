"use client";

import * as React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";

export default function ActionButton({
  children,
  variant = "primary",
  icon,
  fullWidth = true,
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-[20px] transition-all active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100";
  const sizes = {
    sm: "h-10 px-4 text-[13px]",
    md: "h-12 px-5 text-[15px]",
    lg: "h-14 px-6 text-[16px]",
  }[size];
  const variants: Record<Variant, string> = {
    primary: "bg-brand-blue text-white shadow-float hover:bg-brand-blueDark",
    secondary: "bg-ink-navy text-white",
    outline: "bg-white text-ink-navy border border-ink-line",
    ghost: "bg-transparent text-ink-navy",
    white: "bg-white text-brand-blue shadow-soft",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
