"use client";

import * as React from "react";
import PhoneFrame from "./PhoneFrame";
import StatusBar from "./StatusBar";
import BottomNav from "./BottomNav";

export default function AppShell({
  children,
  header,
  bottomNav,
  background = "#ffffff",
  statusTone = "dark",
  padScroll = true,
  footer,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  bottomNav?: string | false;
  background?: string;
  statusTone?: "dark" | "light";
  padScroll?: boolean;
  footer?: React.ReactNode;
}) {
  return (
    <PhoneFrame background={background}>
      <div className="relative h-full w-full flex flex-col">
        <div className="shrink-0">
          <StatusBar tone={statusTone} />
          {header}
        </div>
        <main
          className={`flex-1 min-h-0 overflow-y-auto hide-scroll ${padScroll ? "px-0 pb-4" : ""}`}
        >
          {children}
        </main>
        {footer}
        {bottomNav !== false && <BottomNav active={bottomNav || undefined} />}
      </div>
    </PhoneFrame>
  );
}
