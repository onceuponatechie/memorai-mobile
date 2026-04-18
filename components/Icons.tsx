import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
});

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const SearchIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="7" {...stroke} />
    <path d="M20 20l-3.2-3.2" {...stroke} />
  </svg>
);

export const BellIcon = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M6 9a6 6 0 1 1 12 0c0 3.2.8 5.2 2 6.5H4c1.2-1.3 2-3.3 2-6.5Z"
      {...stroke}
    />
    <path d="M10 19a2 2 0 0 0 4 0" {...stroke} />
  </svg>
);

export const ArrowLeft = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M15 5l-7 7 7 7" {...stroke} />
  </svg>
);

export const Plus = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M5 12h14" {...stroke} />
  </svg>
);

export const UsersIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="9" cy="9" r="3.2" {...stroke} />
    <path d="M3.5 19c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5" {...stroke} />
    <circle cx="17" cy="8" r="2.6" {...stroke} />
    <path d="M15.5 14.2c2.3.1 4 1.5 4.6 3.8" {...stroke} />
  </svg>
);

export const HomeIcon = ({ size = 24, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} {...p}>
    <path
      d="M4 11.5 12 5l8 6.5V19a2 2 0 0 1-2 2h-3v-5h-6v5H6a2 2 0 0 1-2-2v-7.5Z"
      fill={filled ? "currentColor" : "none"}
      {...stroke}
    />
  </svg>
);

export const ChatIcon = ({ size = 24, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} {...p}>
    <path
      d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4l-4 4v-4H7a3 3 0 0 1-3-3V6Z"
      fill={filled ? "currentColor" : "none"}
      {...stroke}
    />
  </svg>
);

export const ChartIcon = ({ size = 24, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} {...p}>
    <path
      d="M4 20V10M10 20V4M16 20v-7M22 20H2"
      fill={filled ? "currentColor" : "none"}
      {...stroke}
    />
  </svg>
);

export const BookIcon = ({ size = 24, filled = false, ...p }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} {...p}>
    <path
      d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5a1.5 1.5 0 0 0-1.5 1.5V4.5ZM5 19.5A1.5 1.5 0 0 0 6.5 21H19"
      fill={filled ? "currentColor" : "none"}
      {...stroke}
    />
  </svg>
);

export const MailIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" {...stroke} />
    <path d="M4 7l8 6 8-6" {...stroke} />
  </svg>
);

export const LockIcon = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="10" width="16" height="10" rx="2.5" {...stroke} />
    <path d="M8 10V8a4 4 0 0 1 8 0v2" {...stroke} />
    <circle cx="12" cy="15" r="1.2" fill="currentColor" />
  </svg>
);

export const EyeIcon = ({ size = 18, off = false, ...p }: IconProps & { off?: boolean }) => (
  <svg {...base(size)} {...p}>
    <path
      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
      {...stroke}
    />
    <circle cx="12" cy="12" r="3" {...stroke} />
    {off && <path d="M4 4l16 16" {...stroke} />}
  </svg>
);

export const ChevronDown = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 9l6 6 6-6" {...stroke} />
  </svg>
);

export const ChevronRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 6l6 6-6 6" {...stroke} />
  </svg>
);

export const Sliders = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" {...stroke} />
    <circle cx="16" cy="6" r="1.8" {...stroke} />
    <circle cx="10" cy="12" r="1.8" {...stroke} />
    <circle cx="18" cy="18" r="1.8" {...stroke} />
  </svg>
);

export const Gear = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="3" {...stroke} />
    <path
      d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
      {...stroke}
    />
  </svg>
);

export const Sparkle = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M12 3l1.8 4.8L18 9.5l-4.2 1.7L12 16l-1.8-4.8L6 9.5l4.2-1.7L12 3Z"
      fill="currentColor"
    />
    <path d="M19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14Z" fill="currentColor" opacity="0.8" />
  </svg>
);

export const Flame = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.8 1-3.5.3 1 .8 1.6 1.5 2-.5-2 .8-4.3 1.5-6.5Z"
      fill="currentColor"
    />
    <path d="M12 21a6 6 0 0 1-6-6c0-1 .2-2 .5-3 .5 2 2 3 3 3-.5-2 .5-4.2 2.5-6 0 2 1.5 3 2.5 3 2 0 3 2 3 3.5a5.5 5.5 0 0 1-5.5 5.5Z" {...stroke} />
  </svg>
);

export const Trophy = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" {...stroke} />
    <path d="M17 6h3v2a3 3 0 0 1-3 3M7 6H4v2a3 3 0 0 0 3 3" {...stroke} />
    <path d="M9 14h6v3H9zM8 20h8" {...stroke} />
  </svg>
);

export const Mic = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" {...stroke} />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" {...stroke} />
  </svg>
);

export const Send = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12 20 4l-6 16-3-7-7-1Z" {...stroke} />
  </svg>
);

export const Paperclip = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M20 12l-8 8a5 5 0 0 1-7-7l9-9a3.5 3.5 0 1 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" {...stroke} />
  </svg>
);

export const FileText = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 3h8l4 4v14H6z" {...stroke} />
    <path d="M14 3v4h4M8 12h8M8 16h6" {...stroke} />
  </svg>
);

export const Brain = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5c0 1 .5 2 1.5 2.5 0 2 1.5 3.5 3.5 3.5h2V4Z" {...stroke} />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5c0 1-.5 2-1.5 2.5 0 2-1.5 3.5-3.5 3.5h-2V4Z" {...stroke} />
  </svg>
);

export const Cards = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="7" width="13" height="13" rx="2.5" {...stroke} />
    <path d="M7 5h13a1 1 0 0 1 1 1v11" {...stroke} />
  </svg>
);

export const Google = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.4Z" fill="#4285F4" />
    <path d="M12 22c2.7 0 5-1 6.6-2.4l-3.3-2.5a6 6 0 0 1-9-3.1H2.9v2.5A10 10 0 0 0 12 22Z" fill="#34A853" />
    <path d="M6.3 14a6 6 0 0 1 0-4V7.5H2.9a10 10 0 0 0 0 9L6.3 14Z" fill="#FBBC04" />
    <path d="M12 6a5.4 5.4 0 0 1 3.8 1.5l2.8-2.8A10 10 0 0 0 2.9 7.5L6.3 10a6 6 0 0 1 5.7-4Z" fill="#EA4335" />
  </svg>
);

export const Check = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12l4 4 10-10" {...stroke} />
  </svg>
);

export const Play = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 4v16l13-8L7 4Z" fill="currentColor" />
  </svg>
);

export const Heart = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"
      {...stroke}
    />
  </svg>
);

/* Bespoke content icons — replace all emojis with these */

export const Megaphone = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 10v4a2 2 0 0 0 2 2h3l7 4V4l-7 4H6a2 2 0 0 0-2 2Z" {...stroke} />
    <path d="M18 8a5 5 0 0 1 0 8M9 16v3a2 2 0 0 0 4 0v-2" {...stroke} />
  </svg>
);

export const Newspaper = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="4" width="15" height="16" rx="2" {...stroke} />
    <path d="M18 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4" {...stroke} />
  </svg>
);

export const MicStudio = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="9" y="3" width="6" height="10" rx="3" {...stroke} />
    <path d="M6 10a6 6 0 0 0 12 0M12 16v4M9 21h6" {...stroke} />
    <path d="M11 6h2M11 8.5h2" {...stroke} />
  </svg>
);

export const Scales = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 4v16M6 20h12M4 8l-2 5a3 3 0 0 0 6 0L6 8 4 8Zm16 0-2 5a3 3 0 0 0 6 0l-2-5h-2Z" {...stroke} />
    <path d="M6 8l6-2 6 2" {...stroke} />
  </svg>
);

export const Target = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} />
    <circle cx="12" cy="12" r="5.5" {...stroke} />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const Wave = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M10 3a1.5 1.5 0 0 1 3 0v6M13 9V5a1.5 1.5 0 0 1 3 0v7" {...stroke} />
    <path d="M16 10a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-14 0V9a1.5 1.5 0 0 1 3 0v4" {...stroke} />
  </svg>
);

export const Medal = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M8 3h8l-2 6h-4L8 3Z" {...stroke} />
    <circle cx="12" cy="15" r="6" {...stroke} />
    <path d="M12 12v6M9 15h6" {...stroke} />
  </svg>
);

export const Handshake = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 11l4-4 3 2 5-2 6 4v3l-3 3-3-2-2 2-3-1-3 2-4-4v-3Z" {...stroke} />
    <path d="M10 9l3 3M14 10l2 2" {...stroke} />
  </svg>
);

export const BrainBolt = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5c0 1 .5 2 1.5 2.5 0 2 1.5 3.5 3.5 3.5h2V4Z" {...stroke} />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5c0 1-.5 2-1.5 2.5 0 2-1.5 3.5-3.5 3.5h-2V4Z" {...stroke} />
    <path d="M12 8l-2 4h3l-2 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);

export const Folder = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" {...stroke} />
  </svg>
);

export const Upload = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" {...stroke} />
  </svg>
);

export const Lightning = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" fill="currentColor" />
  </svg>
);

export const Hand = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 11V5a1.5 1.5 0 0 1 3 0v6M10 11V3.5a1.5 1.5 0 0 1 3 0V11M13 11V4.5a1.5 1.5 0 0 1 3 0V12M16 11V6.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-14 0v-2a1.5 1.5 0 0 1 3 0v2" {...stroke} />
  </svg>
);

export const Rocket = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 15c0-6 5-12 11-12 1 0 2 0 2 0s0 1 0 2c0 6-6 11-12 11l-1-1Z" {...stroke} />
    <path d="M5 15l-2 2 2 4 4-2M15 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" {...stroke} />
  </svg>
);

export const Calendar = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" {...stroke} />
    <path d="M3 10h18M8 3v4M16 3v4" {...stroke} />
  </svg>
);

export const Globe = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} />
    <path d="M3 12h18M12 3a12 12 0 0 1 0 18M12 3a12 12 0 0 0 0 18" {...stroke} />
  </svg>
);

export const Star = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.5 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" fill="currentColor" />
  </svg>
);

export const Video = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="6" width="14" height="12" rx="2.5" {...stroke} />
    <path d="M17 10l4-2v8l-4-2" {...stroke} />
  </svg>
);

export const Image = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="3" {...stroke} />
    <circle cx="9" cy="10" r="1.8" {...stroke} />
    <path d="M3 18l5-5 4 3 3-2 6 5" {...stroke} />
  </svg>
);

export const Close = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6l-12 12" {...stroke} />
  </svg>
);

export const PhoneOff = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M2 14l4-4a2 2 0 0 1 2-.5l2 .5 1 3 3 1 .5 2A2 2 0 0 1 14 18l-4 4a10 10 0 0 1-8-8Z" {...stroke} />
    <path d="M15 9l6-6M21 9l-6-6" {...stroke} />
  </svg>
);
