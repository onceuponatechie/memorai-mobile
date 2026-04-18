import * as React from "react";
import {
  Megaphone,
  Newspaper,
  MicStudio,
  Scales,
  Target,
  Wave,
  Medal,
  Handshake,
  BrainBolt,
  Folder,
  Upload,
  Flame,
  Sparkle,
  BellIcon,
} from "./Icons";

export type IconKey =
  | "megaphone"
  | "newspaper"
  | "mic"
  | "scales"
  | "target"
  | "wave"
  | "medal"
  | "handshake"
  | "brain"
  | "folder"
  | "upload"
  | "flame"
  | "sparkle"
  | "bell";

export default function IconBy({
  name,
  size = 22,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const props = { size, className };
  switch (name) {
    case "megaphone":
      return <Megaphone {...props} />;
    case "newspaper":
      return <Newspaper {...props} />;
    case "mic":
      return <MicStudio {...props} />;
    case "scales":
      return <Scales {...props} />;
    case "target":
      return <Target {...props} />;
    case "wave":
      return <Wave {...props} />;
    case "medal":
      return <Medal {...props} />;
    case "handshake":
      return <Handshake {...props} />;
    case "brain":
      return <BrainBolt {...props} />;
    case "folder":
      return <Folder {...props} />;
    case "upload":
      return <Upload {...props} />;
    case "flame":
      return <Flame {...props} />;
    case "sparkle":
      return <Sparkle {...props} />;
    case "bell":
      return <BellIcon {...props} />;
    default:
      return <Sparkle {...props} />;
  }
}
