"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import RaiAvatar from "@/components/RaiAvatar";
import ActionButton from "@/components/ActionButton";
import { Sparkle } from "@/components/Icons";

export default function SplashPage() {
  return (
    <PhoneFrame background="#3d7de8">
      <div className="relative h-full w-full text-white bg-grain">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute top-1/3 -right-12 w-48 h-48 rounded-full bg-accent-orchid/30 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent-butter/20 blur-2xl" />

        <StatusBar time="9:41" tone="light" />

        <div className="relative flex flex-col items-center justify-between h-[calc(100%-40px)] pt-10 pb-10 px-8">
          {/* Top floating sparkles */}
          <div className="absolute top-24 left-10 text-white/60 animate-wiggle">
            <Sparkle size={22} />
          </div>
          <div className="absolute top-40 right-12 text-white/50 animate-wiggle" style={{ animationDelay: "1s" }}>
            <Sparkle size={14} />
          </div>
          <div className="absolute top-80 left-14 text-white/40 animate-wiggle" style={{ animationDelay: "2s" }}>
            <Sparkle size={18} />
          </div>

          {/* Speech bubble + Rai */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3 mt-6"
          >
            <div className="relative bg-white text-ink-navy px-4 py-2.5 rounded-[20px] rounded-bl-md shadow-float">
              <p className="text-[15px] font-bold">Hi! I&apos;m Rai!</p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45" />
            </div>
            <RaiAvatar mood="happy" size="hero" showLimbs animate />
          </motion.div>

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[52px] leading-none font-extrabold tracking-tight">
              MEMORAI
            </h1>
            <p className="mt-3 text-[15px] font-medium text-white/85 max-w-[280px]">
              Study together. Remember forever. Your AI study buddy, Rai, has your back.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full flex flex-col items-center gap-3"
          >
            <Link href="/signup" className="w-full">
              <ActionButton variant="white" size="lg">
                Get Started
              </ActionButton>
            </Link>
            <p className="text-[12px] text-white/50 font-semibold">
              Powered by Claude
            </p>
          </motion.div>
        </div>
      </div>
    </PhoneFrame>
  );
}
