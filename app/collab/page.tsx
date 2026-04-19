"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import {
  ArrowLeft,
  Mic,
  Send,
  Sparkle,
  Paperclip,
  Hand,
  PhoneOff,
} from "@/components/Icons";

type Msg = {
  id: string;
  from: string;
  avatar: string;
  text: string;
  time: string;
  isMe?: boolean;
  isRai?: boolean;
};

const participants = [
  { name: "Essy", role: "host", speaking: false },
  { name: "Amaka", role: "member", speaking: true },
  { name: "Tolu", role: "member", speaking: false },
  { name: "Bolu", role: "member", speaking: false },
];

const initial: Msg[] = [
  {
    id: "1",
    from: "Rai",
    avatar: "Rai",
    isRai: true,
    text: "Welcome to tonight's session on Media Planning. I'll listen in and chime in when asked.",
    time: "7:02",
  },
  {
    id: "2",
    from: "Amaka",
    avatar: "Amaka",
    text: "Hey team. Started with Reach & Frequency — anyone remember the formula for GRP?",
    time: "7:03",
  },
  {
    id: "3",
    from: "Tolu",
    avatar: "Tolu",
    text: "Reach × Frequency right?",
    time: "7:04",
  },
  {
    id: "4",
    from: "Essy",
    avatar: "Essy",
    isMe: true,
    text: "Yes! And higher GRP = more exposure but diminishing returns.",
    time: "7:04",
  },
  {
    id: "5",
    from: "Bolu",
    avatar: "Bolu",
    text: "@Rai can you quiz us quickly?",
    time: "7:05",
  },
  {
    id: "6",
    from: "Rai",
    avatar: "Rai",
    isRai: true,
    text: "On it. Q1: What's the difference between CPM and CPP?",
    time: "7:05",
  },
];

export default function CollabPage() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      {
        id: String(Date.now()),
        from: "Essy",
        avatar: "Essy",
        isMe: true,
        text: input,
        time: "now",
      },
    ]);
    setInput("");
  };

  return (
    <AppShell
      bottomNav={false}
      background="#f5f3ff"
      header={
        <header className="px-5 pt-2 pb-3 flex items-center gap-3">
          <Link
            href="/course/mas-312"
            className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-ink-navy shadow-soft"
          >
            <ArrowLeft />
          </Link>
          <div className="flex-1">
            <p className="text-[10px] font-extrabold text-accent-purple tracking-[0.14em]">
              LIVE SESSION
            </p>
            <p className="text-h2 text-ink-navy leading-tight">
              Media Planning Jam
            </p>
          </div>
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-white text-[11px] font-extrabold"
            style={{
              background: "linear-gradient(145deg, #7bd389, #4fae66)",
              boxShadow: "0 10px 20px -12px rgba(75,171,100,0.7)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            23:41
          </div>
        </header>
      }
      footer={
        <div className="shrink-0 px-4 pt-2 pb-3 bg-white border-t border-ink-line">
          <div className="flex items-center gap-2 mb-2">
            <button className="h-9 px-3.5 rounded-pill bg-brand-blue text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-soft">
              <Sparkle size={12} /> Ask Rai
            </button>
            <button className="h-9 px-3.5 rounded-pill bg-accent-coral text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-soft">
              <Hand size={12} /> Raise hand
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 bg-ink-line/60 rounded-[22px] p-1.5 pl-3"
          >
            <button type="button" className="text-ink-slate">
              <Paperclip />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message the room…"
              className="flex-1 bg-transparent outline-none text-[14px] font-semibold text-ink-navy placeholder:text-ink-muted py-2 tracking-tight"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-float"
            >
              <Send />
            </button>
          </form>

          <button
            className="mt-2 w-full h-12 rounded-[18px] text-white font-extrabold text-small flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(145deg, #ff8a7e, #ff6f61, #d94a3d)",
              boxShadow: "0 18px 32px -16px rgba(217,74,61,0.7)",
            }}
          >
            <PhoneOff size={16} />
            Leave Session
          </button>
        </div>
      }
    >
      {/* Participants strip */}
      <div className="px-5 py-3">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <div className="shrink-0 flex flex-col items-center gap-1.5">
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(145deg, #5fc4dc, #2596be 60%, #1a7795)",
                boxShadow:
                  "0 14px 24px -14px rgba(61,125,232,0.7), inset 0 1px 0 rgba(255,255,255,0.35)",
              }}
            >
              <RaiAvatar size="medium" mood="happy" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent-mint rounded-full ring-2 ring-white flex items-center justify-center">
                <Mic size={10} />
              </span>
            </div>
            <span className="text-[11px] font-extrabold text-ink-navy">Rai</span>
            <span className="text-[9px] font-extrabold text-accent-mint tracking-wider">
              HOST
            </span>
          </div>

          {participants.map((p) => (
            <div
              key={p.name}
              className="shrink-0 flex flex-col items-center gap-1.5"
            >
              <div className="relative">
                <AvatarCircle
                  name={p.name}
                  size="lg"
                  ring
                  ringColor={p.speaking ? "#2596be" : "#ffffff"}
                  ringWidth={p.speaking ? 3 : 2}
                />
                {p.speaking && (
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent-mint rounded-full ring-2 ring-white flex items-center justify-center">
                    <Mic size={10} color="white" />
                  </span>
                )}
              </div>
              <span className="text-[11px] font-extrabold text-ink-navy">
                {p.name}
              </span>
              <span
                className={`text-[9px] font-extrabold tracking-wider ${
                  p.speaking ? "text-accent-mint" : "text-ink-muted"
                }`}
              >
                {p.speaking ? "SPEAKING" : "MUTED"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="px-4 pb-3 flex flex-col gap-3">
        {messages.map((m) => (
          <GroupBubble key={m.id} msg={m} />
        ))}
        <div ref={endRef} />
      </div>
    </AppShell>
  );
}

function GroupBubble({ msg }: { msg: Msg }) {
  if (msg.isMe) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-end"
      >
        <div className="max-w-[78%]">
          <p className="text-[10px] text-ink-muted text-right mb-1 font-extrabold">
            {msg.time}
          </p>
          <div className="bg-brand-blue text-white px-4 py-3 rounded-[20px] rounded-br-[6px] shadow-float text-[14px] font-bold tracking-tight leading-snug">
            {msg.text}
          </div>
        </div>
      </motion.div>
    );
  }
  if (msg.isRai) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <RaiAvatar size="small" mood="happy" />
        <div className="max-w-[78%]">
          <p className="text-[11px] mb-1 font-extrabold">
            <span className="text-brand-blue">Rai</span>{" "}
            <span className="text-ink-muted">· {msg.time}</span>
          </p>
          <div className="bg-brand-blueSoft text-ink-navy px-4 py-3 rounded-[20px] rounded-bl-[6px] text-[14px] font-semibold leading-snug shadow-soft">
            {msg.text}
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start gap-2"
    >
      <AvatarCircle name={msg.avatar} size="sm" />
      <div className="max-w-[78%]">
        <p className="text-[11px] mb-1 font-extrabold">
          <span className="text-ink-navy">{msg.from}</span>{" "}
          <span className="text-ink-muted">· {msg.time}</span>
        </p>
        <div className="bg-white border border-ink-line text-ink-navy px-4 py-3 rounded-[20px] rounded-bl-[6px] text-[14px] font-semibold leading-snug shadow-soft">
          {msg.text}
        </div>
      </div>
    </motion.div>
  );
}
