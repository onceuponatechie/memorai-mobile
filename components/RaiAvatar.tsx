"use client";

import * as React from "react";

type Mood = "happy" | "thinking" | "excited" | "disappointed";
type Size = "small" | "medium" | "large" | "hero";

const sizeMap: Record<Size, number> = {
  small: 32,
  medium: 48,
  large: 80,
  hero: 160,
};

export default function RaiAvatar({
  mood = "happy",
  size = "medium",
  showLimbs = false,
  animate = false,
  className = "",
}: {
  mood?: Mood;
  size?: Size;
  showLimbs?: boolean;
  animate?: boolean;
  className?: string;
}) {
  const px = sizeMap[size];
  const anim = animate ? (mood === "excited" ? "animate-bounceSoft" : "animate-floaty") : "";

  // Eye + mouth variations per mood
  const LeftEye = () => {
    if (mood === "thinking") {
      return <rect x="36" y="52" width="10" height="3" rx="1.5" fill="#0f1a3d" />;
    }
    if (mood === "excited") {
      return (
        <path
          d="M34 56c2-4 10-4 12 0"
          stroke="#0f1a3d"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      );
    }
    return <circle cx="40" cy="55" r="3.2" fill="#0f1a3d" />;
  };
  const RightEye = () => {
    if (mood === "thinking") {
      return <circle cx="70" cy="55" r="3.2" fill="#0f1a3d" />;
    }
    if (mood === "excited") {
      return (
        <path
          d="M64 56c2-4 10-4 12 0"
          stroke="#0f1a3d"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      );
    }
    return <circle cx="70" cy="55" r="3.2" fill="#0f1a3d" />;
  };

  const Mouth = () => {
    if (mood === "disappointed") {
      return (
        <path
          d="M46 74c4-4 14-4 18 0"
          stroke="#0f1a3d"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      );
    }
    if (mood === "excited") {
      return (
        <path
          d="M42 68c4 8 22 8 26 0 -2 6 -10 10 -13 10s-11-4-13-10Z"
          fill="#0f1a3d"
        />
      );
    }
    if (mood === "thinking") {
      return (
        <path
          d="M48 72c4 2 10 2 14 0"
          stroke="#0f1a3d"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      );
    }
    // happy
    return (
      <path
        d="M44 68c4 6 18 6 22 0"
        stroke="#0f1a3d"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    );
  };

  return (
    <div
      className={`${anim} ${className}`}
      style={{ width: px, height: px, display: "inline-block" }}
      aria-label={`Rai ${mood}`}
    >
      <svg viewBox="0 0 120 120" width={px} height={px}>
        <defs>
          <radialGradient id="raiBody" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#a8dffc" />
            <stop offset="60%" stopColor="#7bc9f7" />
            <stop offset="100%" stopColor="#3d7de8" />
          </radialGradient>
          <radialGradient id="raiHighlight" cx="30%" cy="25%" r="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Limbs (behind body) */}
        {showLimbs && (
          <g>
            {/* Left arm */}
            <path
              d="M18 62 Q8 66 10 78"
              stroke="#3d7de8"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="10" cy="80" r="5" fill="#3d7de8" />
            {/* Right arm */}
            <path
              d="M102 62 Q112 66 110 78"
              stroke="#3d7de8"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="110" cy="80" r="5" fill="#3d7de8" />
            {/* Legs */}
            <path
              d="M48 100 Q46 112 42 116"
              stroke="#3d7de8"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M72 100 Q74 112 78 116"
              stroke="#3d7de8"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* Cloud body */}
        <path
          d="M30 68c-10 0-18-8-18-17 0-11 10-18 20-16 3-12 16-18 27-13 8-11 26-9 30 4 10-1 18 8 18 18 0 10-8 18-18 18H30Z"
          fill="url(#raiBody)"
        />
        {/* Bottom rounded edge */}
        <path
          d="M28 66h64c4 0 8 3 8 8 0 9-10 16-22 16H42c-12 0-22-7-22-16 0-5 4-8 8-8Z"
          fill="url(#raiBody)"
        />
        {/* Highlight */}
        <ellipse cx="44" cy="40" rx="18" ry="10" fill="url(#raiHighlight)" />

        {/* Cheeks */}
        <circle cx="30" cy="70" r="5" fill="#ff9ec7" opacity="0.55" />
        <circle cx="90" cy="70" r="5" fill="#ff9ec7" opacity="0.55" />

        {/* Eyes */}
        <LeftEye />
        <RightEye />
        {/* Mouth */}
        <Mouth />

        {/* Thinking eyebrow */}
        {mood === "thinking" && (
          <path
            d="M62 46l14 2"
            stroke="#0f1a3d"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
