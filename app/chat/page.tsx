"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import { ArrowLeft, Mic, Send, Paperclip, Sparkle } from "@/components/Icons";

type MsgPart =
  | { type: "text"; text: string }
  | { type: "list"; title: string; items: string[]; tail?: string };

type Msg = {
  id: string;
  from: "rai" | "me";
  parts: MsgPart[];
};

const initial: Msg[] = [
  {
    id: "1",
    from: "rai",
    parts: [
      {
        type: "text",
        text: "Hey Essy 👋 Ready to dig into MAS 312? I can summarize Chapter 4, quiz you on media planning, or just chat.",
      },
    ],
  },
  {
    id: "2",
    from: "me",
    parts: [{ type: "text", text: "Can you summarize Chapter 4 for me?" }],
  },
  {
    id: "3",
    from: "rai",
    parts: [
      {
        type: "list",
        title: "Here are the 3 big ideas from Chapter 4:",
        items: [
          "Reach vs. Frequency — pick your goal first.",
          "Media mix creates message reinforcement.",
          "CPM and CPP help compare channel cost.",
        ],
        tail: "Want me to break any of these down further?",
      },
    ],
  },
];

const suggestions = [
  "Quiz me on Chapter 4",
  "What is CPM vs CPP?",
  "Make flashcards",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const next: Msg = {
      id: String(Date.now()),
      from: "me",
      parts: [{ type: "text", text }],
    };
    setMessages((m) => [...m, next]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: String(Date.now() + 1),
          from: "rai",
          parts: [{ type: "text", text: pickReply(text) }],
        },
      ]);
    }, 1100);
  };

  return (
    <AppShell
      bottomNav="chat"
      header={
        <header className="px-5 pt-2 pb-3 flex items-center gap-3 border-b border-ink-line">
          <Link
            href="/dashboard"
            className="w-10 h-10 rounded-2xl bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
          <div className="flex items-center gap-2.5 flex-1">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-brand-blueSoft flex items-center justify-center">
                <RaiAvatar mood="happy" size="medium" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent-mint ring-2 ring-white" />
            </div>
            <div>
              <p className="text-small font-extrabold text-ink-navy leading-tight">Rai</p>
              <p className="text-[11px] text-accent-mint font-bold">● online</p>
            </div>
          </div>
          <span className="text-[11px] font-extrabold text-white px-3 py-1.5 rounded-pill bg-brand-blue shadow-soft">
            MAS 312
          </span>
        </header>
      }
      footer={
        <div className="shrink-0 px-4 pt-2 pb-2 bg-white border-t border-ink-line">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="shrink-0 flex items-center gap-1.5 h-9 px-3.5 rounded-pill bg-ink-navy text-white text-[12px] font-extrabold shadow-soft"
              >
                <Sparkle size={12} />
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 bg-ink-line/60 rounded-[22px] p-1.5 pl-3"
          >
            <button type="button" className="text-ink-slate">
              <Paperclip />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Rai anything…"
              className="flex-1 bg-transparent outline-none text-[14px] font-semibold text-ink-navy placeholder:text-ink-muted py-2 tracking-tight"
            />
            {input.trim() ? (
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-float"
              >
                <Send />
              </button>
            ) : (
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-float"
              >
                <Mic />
              </button>
            )}
          </form>
        </div>
      }
    >
      <div className="px-4 py-4 flex flex-col gap-3">
        {messages.map((m) => (
          <Bubble key={m.id} msg={m} />
        ))}
        {typing && <TypingBubble />}
        <div ref={endRef} />
      </div>
    </AppShell>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isMe = msg.from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
    >
      {!isMe && <RaiAvatar size="small" mood="happy" />}
      <div
        className={`max-w-[78%] px-4 py-3 ${
          isMe
            ? "bg-brand-blue text-white rounded-[22px] rounded-br-[6px] shadow-float"
            : "bg-white text-ink-navy rounded-[22px] rounded-bl-[6px] border border-ink-line shadow-soft"
        }`}
      >
        {msg.parts.map((p, i) => (
          <PartView key={i} part={p} isMe={isMe} />
        ))}
      </div>
    </motion.div>
  );
}

function PartView({ part, isMe }: { part: MsgPart; isMe: boolean }) {
  if (part.type === "text") {
    return (
      <p
        className={`text-[14px] leading-[1.45] tracking-[-0.01em] ${
          isMe ? "font-bold" : "font-semibold"
        }`}
      >
        {part.text}
      </p>
    );
  }
  // list
  return (
    <div className="flex flex-col gap-2">
      <p
        className={`text-[14px] leading-[1.4] font-extrabold tracking-tight ${
          isMe ? "text-white" : "text-ink-navy"
        }`}
      >
        {part.title}
      </p>
      <ol className="flex flex-col gap-1.5 mt-0.5">
        {part.items.map((it, i) => (
          <li
            key={i}
            className={`flex gap-2 text-[13px] leading-[1.45] ${
              isMe ? "text-white/95" : "text-ink-navy"
            }`}
          >
            <span
              className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold ${
                isMe ? "bg-white/25 text-white" : "bg-brand-blue text-white"
              }`}
            >
              {i + 1}
            </span>
            <span className="font-semibold">{it}</span>
          </li>
        ))}
      </ol>
      {part.tail && (
        <p
          className={`mt-1 text-[13px] leading-[1.45] font-semibold ${
            isMe ? "text-white/90" : "text-ink-slate"
          }`}
        >
          {part.tail}
        </p>
      )}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <RaiAvatar size="small" mood="thinking" />
      <div className="bg-white rounded-[22px] rounded-bl-[6px] border border-ink-line px-4 py-3 flex items-center gap-1">
        <Dot delay={0} />
        <Dot delay={0.15} />
        <Dot delay={0.3} />
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="w-1.5 h-1.5 rounded-full bg-ink-slate"
      animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 0.9, repeat: Infinity, delay }}
    />
  );
}

function pickReply(input: string) {
  const t = input.toLowerCase();
  if (t.includes("quiz")) {
    return "Cool — I've lined up 10 questions on Chapter 4. Tap to start when you're ready.";
  }
  if (t.includes("cpm") || t.includes("cpp")) {
    return "CPM = cost per 1,000 impressions (digital/print). CPP = cost per rating point (TV/radio). Use whichever matches the channel you're comparing.";
  }
  if (t.includes("flashcard")) {
    return "Generating 18 flashcards from your MAS 312 notes now. I'll space them out over the week — sound good?";
  }
  return "Got it — let me pull that together. One sec.";
}
