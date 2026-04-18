import * as React from "react";

type Size = "xs" | "sm" | "md" | "lg" | "xl";
const sizes: Record<Size, number> = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };

const palette = [
  "#ffd166",
  "#ff9ec7",
  "#8b7cf6",
  "#62c4ff",
  "#7bd389",
  "#ff6f61",
  "#c77dff",
  "#ffb066",
];

function hashPick(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h << 5) - h + name.charCodeAt(i);
  return palette[Math.abs(h) % palette.length];
}

export default function AvatarCircle({
  name = "User",
  size = "md",
  src,
  ring = false,
  ringColor = "white",
  className = "",
}: {
  name?: string;
  size?: Size;
  src?: string;
  ring?: boolean;
  ringColor?: string;
  className?: string;
}) {
  const px = sizes[size];
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const bg = hashPick(name);

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold text-white select-none ${
        ring ? "ring-[3px]" : ""
      } ${className}`}
      style={{
        width: px,
        height: px,
        background: bg,
        fontSize: px * 0.38,
        boxShadow: ring ? `0 0 0 3px ${ringColor}` : undefined,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export function AvatarCluster({
  names,
  size = "sm",
  max = 4,
  overlap = 10,
}: {
  names: string[];
  size?: Size;
  max?: number;
  overlap?: number;
}) {
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <div className="flex items-center">
      {shown.map((n, i) => (
        <div key={n + i} style={{ marginLeft: i === 0 ? 0 : -overlap }}>
          <AvatarCircle name={n} size={size} ring ringColor="#ffffff" />
        </div>
      ))}
      {extra > 0 && (
        <div
          className="flex items-center justify-center rounded-full bg-brand-blue text-white text-[11px] font-bold ring-[3px] ring-white"
          style={{
            width: sizes[size],
            height: sizes[size],
            marginLeft: -overlap,
          }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}
