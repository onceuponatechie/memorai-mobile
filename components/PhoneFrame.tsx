"use client";

import * as React from "react";

type PhoneFrameProps = {
  children: React.ReactNode;
  background?: string;
};

export default function PhoneFrame({ children, background = "#ffffff" }: PhoneFrameProps) {
  return (
    <div className="min-h-[100dvh] w-full flex items-start sm:items-center justify-center py-0 sm:py-8 px-0 sm:px-6 bg-[#eae6f7]">
      <div
        className="relative w-full sm:w-[390px] h-[100dvh] sm:h-[844px] sm:rounded-[48px] sm:border-[12px] sm:border-black overflow-hidden sm:shadow-[0_40px_100px_-30px_rgba(15,26,61,0.55)]"
        style={{ background }}
      >
        <div className="relative w-full h-full flex flex-col overflow-hidden">
          {children}
        </div>
        {/* Home indicator */}
        <div className="pointer-events-none hidden sm:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-black/80" />
      </div>
    </div>
  );
}
