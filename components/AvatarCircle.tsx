"use client";

import * as React from "react";
import { avatarFor } from "@/lib/data";

type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
const sizes: Record<Size, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64, "2xl": 84 };

export default function AvatarCircle({
  name = "User",
  size = "md",
  src,
  ring = false,
  ringColor = "white",
  ringWidth = 3,
  className = "",
}: {
  name?: string;
  size?: Size;
  src?: string;
  ring?: boolean;
  ringColor?: string;
  ringWidth?: number;
  className?: string;
}) {
  const px = sizes[size];
  const resolved = src ?? avatarFor(name);

  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full select-none ${className}`}
      style={{
        width: px,
        height: px,
        boxShadow: ring ? `0 0 0 ${ringWidth}px ${ringColor}` : undefined,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={resolved}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function AvatarCluster({
  names,
  size = "sm",
  max = 4,
  overlap = 10,
  ringColor = "#ffffff",
}: {
  names: string[];
  size?: Size;
  max?: number;
  overlap?: number;
  ringColor?: string;
}) {
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <div className="flex items-center">
      {shown.map((n, i) => (
        <div key={n + i} style={{ marginLeft: i === 0 ? 0 : -overlap, zIndex: shown.length - i }}>
          <AvatarCircle name={n} size={size} ring ringColor={ringColor} />
        </div>
      ))}
      {extra > 0 && (
        <div
          className="flex items-center justify-center rounded-full bg-ink-navy text-white text-[11px] font-extrabold"
          style={{
            width: sizes[size],
            height: sizes[size],
            marginLeft: -overlap,
            boxShadow: `0 0 0 3px ${ringColor}`,
          }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}
