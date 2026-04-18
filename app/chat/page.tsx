"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import RaiAvatar from "@/components/RaiAvatar";
import { ArrowLeft, Mic, Send, Paperclip, Sparkle } from "@/components/Icons";

type Msg = {
  id: string;
  from: "rai" | "me";
  text: string;
  chips?: string[];
};

const initial: Msg[] = [
  {
    id: "1",
    from: "rai",
    text: "Hey Essy! 👋 Ready to dig into MAS 312? I can summarize Chapter 4, quiz you on media planning, or just chat.",
  },
  {
    id: "2",
    from: "me",
    text: "Can you summarize Chapter 4 for me?",
  },
  {
    id: "3",
    from: "rai",
    text: "Here are the 3 big ideas from Chapter 4:\n\n1. Reach vs. Frequency — pick your goal first.\n2. Media mix creates message reinforcement.\n3. CPM and CPP help compare channel cost.\n\nWant me to break any of these down further?",
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
    const next: Msg = { id: String(Date.now()), from: "me", text };
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
          text: pickReply(text),
        },
      ]);
    }, 1100);
  };

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        <header className="px-5 pt-2 pb-3 flex items-center gap-3 border-b border-ink-line">
          <Link
            href="/dashboard"
            className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
          <div className="flex items-center gap-2 flex-1">
            <div className="relative">
              <RaiAvatar mood="happy" size="medium" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-mint ring-2 ring-white" />
            </div>
            <div>
              <p className="text-small font-extrabold text-ink-navy">Rai</p>
              <p className="text-[11px] text-ink-slate">AI study buddy · online</p>
            </div>
          </div>
          <button className="text-[11px] font-bold text-brand-blue px-3 py-1.5 rounded-pill bg-brand-blueSoft">
            MAS 312
          </button>
        </header>

        <div className="flex-1 overflow-auto hide-scroll px-4 py-4">
          {messages.map((m) => (
            <Bubble key={m.id} msg={m} />
          ))}
          {typing && <TypingBubble />}
          <div ref={endRef} />
        </div>

        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="shrink-0 flex items-center gap-1.5 h-9 px-3.5 rounded-pill bg-brand-blueSoft text-brand-blue text-[12px] font-bold"
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
              className="flex-1 bg-transparent outline-none text-[14px] font-medium text-ink-navy placeholder:text-ink-muted py-2"
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

        <BottomNav active="chat" />
      </div>
    </PhoneFrame>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isMe = msg.from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-3 flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
    >
      {!isMe && <RaiAvatar size="small" mood="happy" />}
      <div
        className={`max-w-[75%] px-4 py-2.5 text-[14px] leading-snug whitespace-pre-wrap ${
          isMe
            ? "bg-brand-blue text-white rounded-[20px] rounded-br-[6px] shadow-float font-semibold"
            : "bg-white text-ink-navy rounded-[20px] rounded-bl-[6px] border border-ink-line font-medium"
        }`}
      >
        {msg.text}
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="mb-3 flex items-end gap-2">
      <RaiAvatar size="small" mood="thinking" />
      <div className="bg-white rounded-[20px] rounded-bl-[6px] border border-ink-line px-4 py-3 flex items-center gap-1">
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
    return "Cool — I've lined up 10 questions on Chapter 4. Tap to start when you're ready!";
  }
  if (t.includes("cpm") || t.includes("cpp")) {
    return "CPM = cost per 1,000 impressions (digital/print). CPP = cost per rating point (TV/radio). Use whichever matches the channel you're comparing.";
  }
  if (t.includes("flashcard")) {
    return "Generating 18 flashcards from your MAS 312 notes now. I'll space them out over the week — sound good?";
  }
  return "Got it. Let me pull that together — one sec…";
}
