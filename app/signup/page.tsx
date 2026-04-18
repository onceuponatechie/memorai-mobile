"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import RaiAvatar from "@/components/RaiAvatar";
import ActionButton from "@/components/ActionButton";
import InputField from "@/components/InputField";
import {
  ArrowLeft,
  MailIcon,
  LockIcon,
  EyeIcon,
  Google,
} from "@/components/Icons";

export default function SignUpPage() {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />
        <div className="px-6 pt-2 flex items-center">
          <Link
            href="/"
            className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
        </div>

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mt-2"
          >
            <div className="relative flex flex-col items-center">
              <div className="relative bg-brand-blue text-white px-3.5 py-2 rounded-[16px] rounded-br-md mb-2 shadow-float">
                <p className="text-[13px] font-bold">
                  Let&apos;s get you set up! 📚
                </p>
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-brand-blue rotate-45" />
              </div>
              <RaiAvatar mood="happy" size="large" animate />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6"
          >
            <h1 className="text-display text-ink-navy">Create Account</h1>
            <p className="text-body text-ink-slate mt-1">
              Join thousands of students learning smarter.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push("/setup");
              }}
              className="mt-7 flex flex-col gap-4"
            >
              <InputField
                label="Email"
                placeholder="you@school.edu"
                type="email"
                icon={<MailIcon />}
                value={email}
                onChange={setEmail}
              />
              <InputField
                label="Password"
                placeholder="At least 8 characters"
                type={showPw ? "text" : "password"}
                icon={<LockIcon />}
                value={pw}
                onChange={setPw}
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    className="p-1"
                  >
                    <EyeIcon off={!showPw} />
                  </button>
                }
              />

              <div className="mt-2">
                <ActionButton type="submit" size="lg">
                  Sign Up
                </ActionButton>
              </div>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-ink-line" />
              <span className="text-[12px] text-ink-muted font-semibold">
                or continue with
              </span>
              <div className="flex-1 h-px bg-ink-line" />
            </div>

            <button
              onClick={() => router.push("/setup")}
              className="w-full h-14 rounded-[20px] bg-white border border-ink-line flex items-center justify-center gap-3 font-bold text-ink-navy active:scale-[0.98] transition"
            >
              <Google size={20} />
              Continue with Google
            </button>

            <p className="text-center text-small text-ink-slate mt-6">
              Already have an account?{" "}
              <Link href="/" className="text-brand-blue font-bold">
                Log in
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </PhoneFrame>
  );
}
