"use client";

import * as React from "react";

type PhoneFrameProps = {
  children: React.ReactNode;
  background?: string;
};

export default function PhoneFrame({ children, background = "#ffffff" }: PhoneFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-start sm:items-center justify-center py-0 sm:py-10 px-0 sm:px-6">
      <div
        className="relative w-full sm:w-[390px] h-[100dvh] sm:h-[844px] sm:rounded-[44px] sm:border-[10px] sm:border-black overflow-hidden sm:shadow-[0_30px_80px_-30px_rgba(15,26,61,0.4)]"
        style={{ background }}
      >
        <div className="relative w-full h-full overflow-hidden">{children}</div>
        {/* Home indicator */}
        <div className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-black/80" />
      </div>
    </div>
  );
}
