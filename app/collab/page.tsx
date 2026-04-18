"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import { ArrowLeft, Mic, Send, Sparkle, Paperclip } from "@/components/Icons";

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
    text: "Welcome to tonight's session on Media Planning! I'll listen in and chime in when asked. 🎧",
    time: "7:02",
  },
  {
    id: "2",
    from: "Amaka",
    avatar: "Amaka",
    text: "Hey team 👋 Started with Reach & Frequency. Anyone remember the formula for GRP?",
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
    text: "On it! 🎯 Q1: What's the difference between CPM and CPP?",
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
    <PhoneFrame background="#f6f3ff">
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        {/* Header */}
        <header className="px-5 pt-2 pb-3 flex items-center gap-3">
          <Link
            href="/course/mas-312"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink-navy shadow-soft"
          >
            <ArrowLeft />
          </Link>
          <div className="flex-1">
            <p className="text-caption font-bold text-accent-purple">LIVE SESSION</p>
            <p className="text-h2 text-ink-navy">Media Planning Study Jam</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-pill bg-accent-mint text-white text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            23:41
          </div>
        </header>

        {/* Participants strip */}
        <div className="px-5 py-3">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {/* Rai card */}
            <div className="shrink-0 flex flex-col items-center gap-1">
              <div className="relative w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center ring-2 ring-brand-blue/30 shadow-float">
                <RaiAvatar size="medium" mood="happy" />
                <span className="absolute -bottom-1 right-0 w-4 h-4 bg-accent-mint rounded-full ring-2 ring-white flex items-center justify-center">
                  <Mic size={10} />
                </span>
              </div>
              <span className="text-[11px] font-bold text-ink-navy">Rai</span>
              <span className="text-[9px] font-bold text-accent-mint">HOST</span>
            </div>

            {participants.map((p) => (
              <div key={p.name} className="shrink-0 flex flex-col items-center gap-1">
                <div className="relative">
                  <AvatarCircle
                    name={p.name}
                    size="lg"
                    ring
                    ringColor={p.speaking ? "#3d7de8" : "transparent"}
                  />
                  {p.speaking && (
                    <span className="absolute -bottom-1 right-0 w-5 h-5 bg-accent-mint rounded-full ring-2 ring-white flex items-center justify-center">
                      <Mic size={11} color="white" />
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-ink-navy">
                  {p.name}
                </span>
                <span
                  className={`text-[9px] font-bold ${
                    p.speaking ? "text-accent-mint" : "text-ink-muted"
                  }`}
                >
                  {p.speaking ? "speaking" : "muted"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 overflow-auto hide-scroll px-4">
          {messages.map((m) => (
            <GroupBubble key={m.id} msg={m} />
          ))}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-2">
          <div className="flex items-center gap-2 mb-2">
            <button className="h-8 px-3 rounded-pill bg-brand-blueSoft text-brand-blue text-[11px] font-bold flex items-center gap-1">
              <Sparkle size={11} /> Ask Rai
            </button>
            <button className="h-8 px-3 rounded-pill bg-accent-coral/15 text-accent-coral text-[11px] font-bold">
              Raise hand
            </button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 bg-white border border-ink-line rounded-[22px] p-1.5 pl-3 shadow-soft"
          >
            <button type="button" className="text-ink-slate">
              <Paperclip />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message the room…"
              className="flex-1 bg-transparent outline-none text-[14px] font-medium text-ink-navy placeholder:text-ink-muted py-2"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-float"
            >
              <Send />
            </button>
          </form>

          {/* Leave call pill */}
          <button className="mt-3 w-full h-12 rounded-[18px] bg-accent-coral text-white font-bold text-small shadow-float">
            Leave Session
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

function GroupBubble({ msg }: { msg: Msg }) {
  if (msg.isMe) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-3 flex justify-end"
      >
        <div className="max-w-[75%]">
          <p className="text-[10px] text-ink-muted text-right mb-1 font-semibold">
            {msg.time}
          </p>
          <div className="bg-brand-blue text-white px-4 py-2.5 rounded-[18px] rounded-br-[6px] shadow-float text-[14px] font-semibold">
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
        className="mb-3 flex items-start gap-2"
      >
        <RaiAvatar size="small" mood="happy" />
        <div className="max-w-[75%]">
          <p className="text-[11px] mb-1">
            <span className="font-extrabold text-brand-blue">Rai</span>{" "}
            <span className="text-ink-muted">· {msg.time}</span>
          </p>
          <div className="bg-brand-blueSoft border border-brand-blue/20 text-ink-navy px-4 py-2.5 rounded-[18px] rounded-bl-[6px] text-[14px] font-medium">
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
      className="mb-3 flex items-start gap-2"
    >
      <AvatarCircle name={msg.avatar} size="sm" />
      <div className="max-w-[75%]">
        <p className="text-[11px] mb-1">
          <span className="font-extrabold text-ink-navy">{msg.from}</span>{" "}
          <span className="text-ink-muted">· {msg.time}</span>
        </p>
        <div className="bg-white border border-ink-line text-ink-navy px-4 py-2.5 rounded-[18px] rounded-bl-[6px] text-[14px] font-medium">
          {msg.text}
        </div>
      </div>
    </motion.div>
  );
}
