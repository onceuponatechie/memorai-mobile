"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import ActionButton from "@/components/ActionButton";
import InputField from "@/components/InputField";
import { ArrowLeft, Check, UsersIcon, Plus } from "@/components/Icons";

type Mode = "create" | "join" | null;

export default function SetupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [mode, setMode] = useState<Mode>("create");
  const [roomName, setRoomName] = useState("");
  const [institution, setInstitution] = useState("");
  const [code, setCode] = useState("");

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        <div className="px-6 pt-2 flex items-center justify-between">
          <Link
            href="/signup"
            className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
          <span className="text-caption font-bold text-ink-slate">
            Step 2 of 2
          </span>
        </div>

        <div className="px-6 mt-3">
          <div className="h-1.5 w-full bg-ink-line rounded-full overflow-hidden">
            <div className="h-full w-full bg-brand-blue rounded-full" />
          </div>
        </div>

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-8 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-display text-ink-navy">Almost there!</h1>
            <p className="text-body text-ink-slate mt-1">
              Pick a username and set up your first study room.
            </p>

            <div className="mt-6">
              <InputField
                label="Username"
                placeholder="essy_reads"
                prefix="@"
                value={username}
                onChange={setUsername}
              />
            </div>

            <div className="my-6 h-px bg-ink-line" />

            <h2 className="text-h2 text-ink-navy">What would you like to do?</h2>

            <div className="mt-4 flex flex-col gap-3">
              <OptionCard
                active={mode === "create"}
                title="Create a Room"
                subtitle="Start a new study group for your course"
                icon={<Plus />}
                accent="#3d7de8"
                onClick={() => setMode("create")}
              />
              <OptionCard
                active={mode === "join"}
                title="Join a Room"
                subtitle="Enter a 6-digit code from a classmate"
                icon={<UsersIcon />}
                accent="#8b7cf6"
                onClick={() => setMode("join")}
              />
            </div>

            <AnimatePresence mode="wait">
              {mode === "create" && (
                <motion.div
                  key="create"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5 flex flex-col gap-3"
                >
                  <InputField
                    label="Room name"
                    placeholder="e.g. Mass Comm 300L"
                    value={roomName}
                    onChange={setRoomName}
                  />
                  <InputField
                    label="Institution"
                    placeholder="University of Lagos"
                    value={institution}
                    onChange={setInstitution}
                  />
                </motion.div>
              )}
              {mode === "join" && (
                <motion.div
                  key="join"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-5"
                >
                  <InputField
                    label="Room code"
                    placeholder="Enter 6-digit room code"
                    value={code}
                    onChange={setCode}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="px-6 pb-6">
          <ActionButton size="lg" onClick={() => router.push("/dashboard")}>
            Let&apos;s Go
          </ActionButton>
        </div>
      </div>
    </PhoneFrame>
  );
}

function OptionCard({
  active,
  title,
  subtitle,
  icon,
  accent,
  onClick,
}: {
  active: boolean;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 rounded-[20px] border-2 transition-all text-left ${
        active
          ? "border-brand-blue bg-brand-blueSoft"
          : "border-ink-line bg-white"
      }`}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
        style={{ background: accent }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[15px] font-bold text-ink-navy">{title}</p>
        <p className="text-[12px] text-ink-slate">{subtitle}</p>
      </div>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
          active
            ? "bg-brand-blue text-white"
            : "border-2 border-ink-line bg-white"
        }`}
      >
        {active && <Check size={14} />}
      </div>
    </button>
  );
}
