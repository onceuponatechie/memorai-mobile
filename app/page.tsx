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
    <PhoneFrame background="#2c5fc7">
      <div
        className="relative h-full w-full text-white flex flex-col"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #5a95ee 0%, #3d7de8 45%, #2c5fc7 100%)",
        }}
      >
        <span className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />
        <div className="absolute -top-20 -left-16 w-64 h-64 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute top-1/3 -right-12 w-56 h-56 rounded-full bg-accent-orchid/40 blur-2xl" />
        <div className="absolute bottom-10 left-10 w-44 h-44 rounded-full bg-accent-butter/25 blur-2xl" />

        <StatusBar time="9:41" tone="light" />

        <div className="relative flex-1 flex flex-col items-center justify-between pt-8 pb-8 px-8">
          <div className="absolute top-20 left-8 text-white/70 animate-wiggle">
            <Sparkle size={22} />
          </div>
          <div
            className="absolute top-36 right-10 text-white/60 animate-wiggle"
            style={{ animationDelay: "1s" }}
          >
            <Sparkle size={14} />
          </div>
          <div
            className="absolute top-80 left-12 text-white/50 animate-wiggle"
            style={{ animationDelay: "2s" }}
          >
            <Sparkle size={18} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3 mt-4"
          >
            <div className="relative bg-white text-ink-navy px-4 py-2.5 rounded-[20px] rounded-bl-md shadow-pop">
              <p className="text-[15px] font-extrabold tracking-tight">
                Hi! I&apos;m Rai.
              </p>
              <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white rotate-45" />
            </div>
            <RaiAvatar mood="excited" size="hero" showLimbs animate />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[56px] leading-none font-extrabold tracking-tight">
              MEMORAI
            </h1>
            <p className="mt-3 text-[15px] font-semibold text-white/85 max-w-[280px] leading-snug">
              Study together. Remember forever.
              <br />
              Your AI study buddy has your back.
            </p>
          </motion.div>

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
            <p className="text-[11px] text-white/60 font-extrabold tracking-wider uppercase">
              Powered by Claude
            </p>
          </motion.div>
        </div>
      </div>
    </PhoneFrame>
  );
}
