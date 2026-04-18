"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import ActionButton from "@/components/ActionButton";
import {
  ArrowLeft,
  Gear,
  FileText,
  Brain,
  Cards,
  ChatIcon,
  Sparkle,
  Check,
  UsersIcon,
} from "@/components/Icons";
import { courses, courseResources } from "@/lib/data";

type Tool = "summary" | "quiz" | "flashcards" | null;

export default function CoursePage() {
  const params = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === params.id);
  const [open, setOpen] = useState<Tool>(null);

  if (!course) return notFound();
  const resources = courseResources[course.id] || [];

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        <header className="px-6 pt-2 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
          <h1 className="text-h1 text-ink-navy">{course.code}</h1>
          <button className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy">
            <Gear />
          </button>
        </header>

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-28 pt-4">
          {/* Course info card */}
          <div
            className="relative rounded-card p-5 overflow-hidden shadow-float"
            style={{ background: course.accent, color: course.accentText }}
          >
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/15" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider opacity-70">
                  {course.code}
                </p>
                <h2 className="text-[22px] font-extrabold leading-tight mt-1">
                  {course.title}
                </h2>
                <p className="text-[12px] font-semibold opacity-80 mt-2">
                  {course.participants.length + 1} members · {resources.length}{" "}
                  resources
                </p>
              </div>
              <div className="text-5xl">{course.emoji}</div>
            </div>

            <div className="relative mt-5 flex items-center gap-2">
              {course.participants.map((p) => (
                <div key={p} className="flex flex-col items-center gap-1">
                  <AvatarCircle name={p} size="sm" ring ringColor={String(course.accent)} />
                  <span className="text-[10px] font-bold opacity-80">{p}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center ring-[3px]" style={{ boxShadow: `0 0 0 3px ${course.accent}` }}>
                  <RaiAvatar size="small" mood="happy" />
                </div>
                <span className="text-[10px] font-bold opacity-80">Rai</span>
              </div>
            </div>
          </div>

          {/* Tools grid */}
          <h3 className="text-h2 text-ink-navy mt-6">Study with Rai</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <ToolCard
              title="Generate Summary"
              subtitle="Key ideas, fast"
              icon={<FileText />}
              accent="#ede9ff"
              iconBg="#8b7cf6"
              onClick={() => setOpen("summary")}
            />
            <ToolCard
              title="Generate Quiz"
              subtitle="10 smart questions"
              icon={<Brain />}
              accent="#fff1db"
              iconBg="#ffb066"
              onClick={() => setOpen("quiz")}
            />
            <ToolCard
              title="Generate Flashcards"
              subtitle="Spaced repetition"
              icon={<Cards />}
              accent="#ffe4e0"
              iconBg="#ff6f61"
              onClick={() => setOpen("flashcards")}
            />
            <Link href="/chat" className="block">
              <ToolCard
                title="Chat with Rai"
                subtitle="Ask anything"
                icon={<ChatIcon />}
                accent="#e8f0ff"
                iconBg="#3d7de8"
              />
            </Link>
          </div>

          {/* Resources */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-h2 text-ink-navy">Resources</h3>
              <button className="text-small font-bold text-brand-blue">
                Upload
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {resources.length === 0 && (
                <div className="text-caption text-ink-slate p-4 rounded-[16px] bg-ink-line/50">
                  No resources yet.
                </div>
              )}
              {resources.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 p-3 bg-white rounded-[16px] border border-ink-line"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blueSoft text-brand-blue flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-small font-bold text-ink-navy truncate">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-ink-slate">{r.size}</p>
                  </div>
                  <span className="text-[11px] font-bold text-brand-blue">
                    View
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Study Together CTA */}
          <Link href="/collab">
            <div className="mt-6 flex items-center gap-3 p-4 rounded-[20px] bg-accent-purple text-white shadow-float active:scale-[0.99] transition">
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">
                <UsersIcon />
              </div>
              <div className="flex-1">
                <p className="text-small font-bold">Study Together</p>
                <p className="text-[11px] text-white/80">
                  Jump into a live session with your room
                </p>
              </div>
              <span className="text-[12px] font-bold">Join →</span>
            </div>
          </Link>
        </div>

        <BottomNav active="home" />

        {/* Tool modal */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(null)}
                className="absolute inset-0 bg-black/50 z-40"
              />
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[28px] p-5 z-50 max-h-[88%] overflow-auto hide-scroll"
              >
                <div className="w-10 h-1 bg-ink-line rounded-full mx-auto mb-4" />
                {open === "summary" && <SummaryExample />}
                {open === "quiz" && <QuizExample />}
                {open === "flashcards" && <FlashcardsExample />}

                <div className="mt-5">
                  <ActionButton onClick={() => setOpen(null)}>Done</ActionButton>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PhoneFrame>
  );
}

function ToolCard({
  title,
  subtitle,
  icon,
  accent,
  iconBg,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: string;
  iconBg: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="text-left p-4 rounded-[20px] bg-white border border-ink-line shadow-soft active:scale-[0.98] transition"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <p className="mt-3 text-small font-extrabold text-ink-navy">{title}</p>
      <p className="text-[11px] text-ink-slate">{subtitle}</p>
      <div
        className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-pill"
        style={{ background: accent, color: "#0f1a3d" }}
      >
        <Sparkle size={10} /> AI
      </div>
    </button>
  );
}

function SummaryExample() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <RaiAvatar mood="happy" size="medium" />
        <div>
          <p className="text-h2 text-ink-navy">Chapter 4 Summary</p>
          <p className="text-caption text-ink-slate">Media Planning Frameworks</p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        {[
          {
            t: "Reach vs. Frequency",
            b: "Reach = % of target audience exposed at least once. Frequency = average times each person is exposed. Balance both based on campaign goal.",
          },
          {
            t: "Media Mix",
            b: "Combine channels (TV, digital, OOH) to reinforce message. No single channel wins — diminishing returns after saturation.",
          },
          {
            t: "CPM & CPP",
            b: "CPM = cost per 1,000 impressions. CPP = cost per rating point. Use CPP for TV, CPM for digital and print.",
          },
        ].map((s) => (
          <div key={s.t} className="p-3.5 rounded-[16px] bg-brand-blueSoft">
            <p className="text-small font-bold text-ink-navy">{s.t}</p>
            <p className="text-[12px] text-ink-slate mt-1 leading-relaxed">
              {s.b}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuizExample() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <RaiAvatar mood="thinking" size="medium" />
        <div>
          <p className="text-h2 text-ink-navy">Quick Quiz</p>
          <p className="text-caption text-ink-slate">Question 1 of 10</p>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-[18px] bg-ink-line/60">
        <p className="text-body font-semibold text-ink-navy">
          Which metric measures the % of your target audience reached at least once?
        </p>
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {[
          { t: "CPM", correct: false },
          { t: "Reach", correct: true },
          { t: "Frequency", correct: false },
          { t: "GRP", correct: false },
        ].map((o, i) => (
          <div
            key={o.t}
            className={`flex items-center gap-3 p-3.5 rounded-[16px] border-2 ${
              o.correct
                ? "border-accent-mint bg-accent-mint/10"
                : "border-ink-line bg-white"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-caption font-bold ${
                o.correct ? "bg-accent-mint text-white" : "bg-ink-line text-ink-slate"
              }`}
            >
              {o.correct ? <Check size={14} /> : String.fromCharCode(65 + i)}
            </div>
            <span className="text-small font-bold text-ink-navy">{o.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlashcardsExample() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <RaiAvatar mood="excited" size="medium" />
        <div>
          <p className="text-h2 text-ink-navy">Flashcards</p>
          <p className="text-caption text-ink-slate">Card 3 of 18</p>
        </div>
      </div>
      <div className="relative mt-4 h-56 rounded-[22px] bg-brand-blue text-white p-5 flex flex-col justify-between shadow-float">
        <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">
          Term
        </span>
        <p className="text-[26px] font-extrabold leading-tight text-center">
          GRP
        </p>
        <p className="text-[12px] text-white/80 text-center">
          Tap to flip · Gross Rating Points
        </p>
        <div className="absolute -bottom-1.5 left-4 right-4 h-3 bg-brand-blueDark rounded-b-[18px] -z-10" />
      </div>
      <div className="mt-4 flex items-center justify-around">
        <button className="h-12 w-24 rounded-[16px] bg-accent-coral/10 text-accent-coral font-bold text-small">
          Hard
        </button>
        <button className="h-12 w-24 rounded-[16px] bg-accent-butter/20 text-[#b47d00] font-bold text-small">
          Good
        </button>
        <button className="h-12 w-24 rounded-[16px] bg-accent-mint/20 text-[#2b8a4a] font-bold text-small">
          Easy
        </button>
      </div>
    </div>
  );
}
