"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import ActionButton from "@/components/ActionButton";
import IconBy from "@/components/IconBy";
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
  Upload,
  Play,
  Close,
} from "@/components/Icons";
import { courses, courseResources } from "@/lib/data";

type Tool = "summary" | "quiz" | "flashcards" | null;

export default function CoursePage() {
  const params = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === params.id);
  const [open, setOpen] = useState<Tool>(null);

  if (!course) return notFound();
  const resources = courseResources[course.id] || [];
  const accentDeep = course.accentDeep || course.accent;

  return (
    <AppShell
      bottomNav="home"
      header={
        <header className="px-6 pt-2 pb-2 flex items-center justify-between">
          <Link
            href="/dashboard"
            className="w-11 h-11 rounded-2xl bg-ink-line flex items-center justify-center text-ink-navy"
          >
            <ArrowLeft />
          </Link>
          <div className="text-center leading-tight">
            <p className="text-[12px] font-semibold text-ink-slate tracking-normal">
              Course
            </p>
            <p className="text-h2 text-ink-navy">{course.code}</p>
          </div>
          <button className="w-11 h-11 rounded-2xl bg-ink-line flex items-center justify-center text-ink-navy">
            <Gear />
          </button>
        </header>
      }
    >
      <div className="px-6 pt-4 pb-6">
        {/* Hero card */}
        <div
          className="relative rounded-[28px] p-5 overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${course.accent} 0%, ${accentDeep} 100%)`,
            color: course.accentText,
            boxShadow: `0 30px 60px -30px ${accentDeep}99, inset 0 1px 0 rgba(255,255,255,0.35)`,
          }}
        >
          <span className="absolute -top-14 -right-12 w-56 h-56 rounded-full bg-white/20 blur-xl" />
          <span className="absolute -bottom-16 -left-12 w-48 h-48 rounded-full bg-black/10 blur-xl" />

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex-1">
              <p className="text-[12px] font-bold tracking-normal opacity-80">
                {course.code}
              </p>
              <h2 className="text-[24px] font-extrabold leading-[1.1] tracking-tight mt-1">
                {course.title}
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-black/15 px-2.5 py-1">
                  <Play size={10} />
                  <span className="text-[11px] font-extrabold">
                    {course.lessons} lessons
                  </span>
                </div>
              </div>
            </div>
            <div
              className="w-16 h-16 rounded-[18px] flex items-center justify-center shrink-0"
              style={{
                background: "rgba(255,255,255,0.25)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
              }}
            >
              <IconBy name={course.icon} size={32} />
            </div>
          </div>

          <div className="relative mt-5 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {course.participants.map((p) => (
                <AvatarCircle
                  key={p}
                  name={p}
                  size="sm"
                  ring
                  ringColor={accentDeep}
                />
              ))}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  boxShadow: `0 0 0 3px ${accentDeep}`,
                  background: "#ffffff",
                }}
              >
                <RaiAvatar size="small" mood="happy" />
              </div>
            </div>
            <p className="text-[12px] font-extrabold opacity-85">
              {course.participants.length + 1} members · {resources.length} resources
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5 p-4 rounded-[22px] bg-white border border-ink-line shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-caption font-bold text-ink-slate">Progress</p>
              <p className="text-h1 text-ink-navy leading-none mt-1">
                {course.progress}%
              </p>
            </div>
            <button className="h-10 px-4 rounded-[14px] bg-brand-blue text-white text-[12px] font-extrabold shadow-float">
              Resume
            </button>
          </div>
          <div className="mt-3 h-2 bg-ink-line rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${course.progress}%`,
                background: `linear-gradient(90deg, ${course.accent}, ${accentDeep})`,
              }}
            />
          </div>
        </div>

        {/* Tools */}
        <h3 className="text-h2 text-ink-navy mt-6">Study with Rai</h3>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <ToolCard
            title="Summary"
            subtitle="Key ideas, fast"
            icon={<FileText />}
            fill="#8b7cf6"
            fillDeep="#6b57d9"
            onClick={() => setOpen("summary")}
          />
          <ToolCard
            title="Quiz"
            subtitle="10 smart Qs"
            icon={<Brain />}
            fill="#ffb066"
            fillDeep="#e08a00"
            onClick={() => setOpen("quiz")}
          />
          <ToolCard
            title="Flashcards"
            subtitle="Spaced repetition"
            icon={<Cards />}
            fill="#ff6f61"
            fillDeep="#d94a3d"
            onClick={() => setOpen("flashcards")}
          />
          <Link href="/chat" className="block">
            <ToolCard
              title="Chat with Rai"
              subtitle="Ask anything"
              icon={<ChatIcon />}
              fill="#3d7de8"
              fillDeep="#2a5fbe"
            />
          </Link>
        </div>

        {/* Resources */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <h3 className="text-h2 text-ink-navy">Resources</h3>
            <button className="h-9 px-3 rounded-pill bg-ink-line text-[11px] font-extrabold text-ink-navy flex items-center gap-1.5">
              <Upload size={14} /> Upload
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
                className="flex items-center gap-3 p-3 bg-white rounded-[18px] border border-ink-line"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-soft">
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-small font-extrabold text-ink-navy truncate">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-ink-slate font-semibold">
                    PDF · {r.size}
                  </p>
                </div>
                <span className="text-[11px] font-extrabold text-brand-blue">
                  View
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Study Together CTA */}
        <Link href="/collab">
          <div
            className="relative overflow-hidden mt-6 flex items-center gap-3 p-4 rounded-[22px] text-white active:scale-[0.99] transition"
            style={{
              background: "linear-gradient(145deg, #a596ff 0%, #8b7cf6 60%, #6b57d9 100%)",
              boxShadow: "0 22px 40px -22px rgba(107,87,217,0.7), inset 0 1px 0 rgba(255,255,255,0.35)",
            }}
          >
            <span className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/15 blur-xl" />
            <div className="relative w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center">
              <UsersIcon />
            </div>
            <div className="relative flex-1">
              <p className="text-small font-extrabold">Study Together</p>
              <p className="text-[11px] text-white/85 font-semibold">
                Jump into a live session with your room
              </p>
            </div>
            <span className="relative text-[12px] font-extrabold">Join →</span>
          </div>
        </Link>
      </div>

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
              className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[32px] p-5 z-50 max-h-[88%] overflow-auto hide-scroll shadow-pop"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-1 bg-ink-line rounded-full" />
                <button
                  onClick={() => setOpen(null)}
                  className="w-9 h-9 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
                >
                  <Close />
                </button>
              </div>
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
    </AppShell>
  );
}

function ToolCard({
  title,
  subtitle,
  icon,
  fill,
  fillDeep,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  fill: string;
  fillDeep: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full h-full overflow-hidden text-left p-4 rounded-[22px] text-white active:scale-[0.98] transition"
      style={{
        background: `linear-gradient(145deg, ${fill} 0%, ${fillDeep} 100%)`,
        boxShadow: `0 18px 30px -18px ${fillDeep}aa, inset 0 1px 0 rgba(255,255,255,0.3)`,
      }}
    >
      <span className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-white/15 blur-lg" />
      <div
        className="relative w-11 h-11 rounded-[14px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.25)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)" }}
      >
        {icon}
      </div>
      <p className="relative mt-3 text-[15px] font-extrabold tracking-tight">{title}</p>
      <p className="relative text-[11px] opacity-85 font-semibold">{subtitle}</p>
      <div className="relative mt-2 inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-1 rounded-pill bg-white/20 border border-white/25">
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
            c: "#8b7cf6",
          },
          {
            t: "Media Mix",
            b: "Combine channels (TV, digital, OOH) to reinforce message. No single channel wins — diminishing returns after saturation.",
            c: "#ff6f61",
          },
          {
            t: "CPM & CPP",
            b: "CPM = cost per 1,000 impressions. CPP = cost per rating point. Use CPP for TV, CPM for digital and print.",
            c: "#ffb066",
          },
        ].map((s) => (
          <div
            key={s.t}
            className="relative overflow-hidden p-4 rounded-[18px] border border-ink-line bg-white"
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full"
              style={{ background: s.c }}
            />
            <p className="text-small font-extrabold text-ink-navy">{s.t}</p>
            <p className="text-[12px] text-ink-slate mt-1 leading-[1.5] font-medium">
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
      <div className="mt-4 p-4 rounded-[18px] bg-ink-navy text-white">
        <p className="text-body font-extrabold leading-snug">
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
              className={`w-7 h-7 rounded-full flex items-center justify-center text-caption font-extrabold ${
                o.correct ? "bg-accent-mint text-white" : "bg-ink-line text-ink-slate"
              }`}
            >
              {o.correct ? <Check size={14} /> : String.fromCharCode(65 + i)}
            </div>
            <span className="text-small font-extrabold text-ink-navy">{o.t}</span>
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
      <div
        className="relative mt-4 h-56 rounded-[24px] text-white p-5 flex flex-col justify-between overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #7ba9f0, #3d7de8 60%, #2a5fbe)",
          boxShadow: "0 30px 60px -26px rgba(61,125,232,0.75), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <span className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/15 blur-xl" />
        <span className="relative text-[12px] font-bold tracking-normal opacity-80">
          Term
        </span>
        <p className="relative text-[28px] font-extrabold leading-tight text-center tracking-tight">
          GRP
        </p>
        <p className="relative text-[12px] text-white/85 text-center font-semibold">
          Tap to flip · Gross Rating Points
        </p>
      </div>
      <div className="mt-4 flex items-center justify-around gap-2">
        <button className="h-12 flex-1 rounded-[16px] bg-accent-coral text-white font-extrabold text-small shadow-soft">
          Hard
        </button>
        <button className="h-12 flex-1 rounded-[16px] bg-accent-butter text-ink-navy font-extrabold text-small shadow-soft">
          Good
        </button>
        <button className="h-12 flex-1 rounded-[16px] bg-accent-mint text-ink-navy font-extrabold text-small shadow-soft">
          Easy
        </button>
      </div>
    </div>
  );
}
