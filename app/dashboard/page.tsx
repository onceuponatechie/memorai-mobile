"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import CourseCard from "@/components/CourseCard";
import AvatarCircle from "@/components/AvatarCircle";
import PillTabs from "@/components/PillTabs";
import ActionButton from "@/components/ActionButton";
import IconBy from "@/components/IconBy";
import {
  SearchIcon,
  BellIcon,
  Plus,
  UsersIcon,
  Flame,
  Trophy,
  Play,
  Sparkle,
  Target,
  Close,
} from "@/components/Icons";
import {
  currentUser,
  courses,
  recentQuizzes,
  activity,
  notifications,
} from "@/lib/data";

type Tab = "lesson" | "quiz" | "activity";

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>("lesson");
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <AppShell
      bottomNav="home"
      header={
        <header className="px-6 pt-2 pb-1 flex items-center justify-between">
          <Link href="/menu" className="flex items-center gap-3">
            <AvatarCircle name={currentUser.firstName} size="lg" ring ringColor="#ffffff" ringWidth={3} />
            <div className="leading-tight">
              <p className="text-[13px] text-ink-slate font-semibold">Hello,</p>
              <p className="text-h1 text-ink-navy -mt-0.5">{currentUser.firstName}</p>
              <p className="text-[11px] text-ink-slate mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {currentUser.room}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-11 h-11 rounded-2xl bg-white border border-ink-line shadow-soft flex items-center justify-center text-ink-navy">
              <SearchIcon />
            </button>
            <button
              onClick={() => setNotifOpen(true)}
              className="relative w-11 h-11 rounded-2xl bg-white border border-ink-line shadow-soft flex items-center justify-center text-ink-navy"
            >
              <BellIcon />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-accent-coral text-white text-[10px] font-extrabold flex items-center justify-center ring-2 ring-white">
                3
              </span>
            </button>
          </div>
        </header>
      }
    >
      {/* Featured card */}
      <section className="px-6 mt-4">
        <div className="relative rounded-[26px] p-5 overflow-hidden"
          style={{
            background: "#3d7de8",
            boxShadow:
              "0 26px 52px -24px rgba(61,125,232,0.65), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/10 blur-xl" />

          <div className="relative flex items-start justify-between gap-3 text-white">
            <div className="flex-1">
              <h2 className="text-[26px] leading-[1.05] font-extrabold tracking-tight">
                Learning today?
              </h2>
              <p className="text-[12px] text-white/80 mt-1.5 max-w-[200px] leading-snug">
                Pick up where you left off in Broadcast Production.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <ActionButton
                  size="sm"
                  variant="white"
                  fullWidth={false}
                  icon={<Plus size={14} />}
                >
                  Add
                </ActionButton>
                <button className="h-10 px-3.5 rounded-[16px] bg-white/20 backdrop-blur-sm text-white text-[13px] font-extrabold flex items-center gap-1.5 active:scale-[0.98] border border-white/15">
                  <UsersIcon size={14} />
                  Invite
                </button>
              </div>
            </div>

            <div className="relative -mt-2 -mr-1 shrink-0">
              <RaiAvatar mood="excited" size="large" showLimbs animate />
            </div>
          </div>

          <Link
            href="/course/mas-308"
            className="relative mt-5 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-pill pl-1.5 pr-3.5 py-1.5 border border-white/20 w-fit"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-blue">
              <Play size={11} />
            </div>
            <span className="text-white text-[11px] font-extrabold">
              Continue · MAS 308
            </span>
          </Link>
        </div>
      </section>

      {/* Pill tabs */}
      <div className="px-6 mt-7 flex items-center justify-between">
        <PillTabs<Tab>
          tabs={[
            { key: "lesson", label: "Lessons" },
            { key: "quiz", label: "Quizzes" },
            { key: "activity", label: "Activity" },
          ]}
          active={tab}
          onChange={setTab}
        />
      </div>

      <AnimatePresence mode="wait">
        {tab === "lesson" && (
          <motion.div
            key="lesson"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="px-6 mt-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-h2 text-ink-navy">My Courses</h3>
              <Link href="/dashboard" className="text-small font-extrabold text-brand-blue">
                See all
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </motion.div>
        )}

        {tab === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="px-6 mt-4 flex flex-col gap-3"
          >
            {recentQuizzes.map((q) => (
              <div
                key={q.id}
                className="flex items-center gap-3 p-3.5 bg-white border border-ink-line rounded-[20px] shadow-soft"
              >
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(145deg, ${q.accent}, ${q.accent}dd)`,
                    boxShadow: `0 10px 18px -10px ${q.accent}cc`,
                  }}
                >
                  <Target size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold tracking-wider text-ink-slate">
                    {q.course}
                  </p>
                  <p className="text-small font-extrabold text-ink-navy truncate">
                    {q.title}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[16px] font-extrabold text-ink-navy leading-none">
                    {q.score}/{q.total}
                  </span>
                  <button className="mt-1 text-[11px] font-extrabold text-brand-blue">
                    Retake →
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {tab === "activity" && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="px-6 mt-4 flex flex-col gap-2.5"
          >
            {activity.map((a) => (
              <div
                key={a.id}
                className="flex items-center gap-3 p-3 bg-white border border-ink-line rounded-[18px]"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{
                    background: `linear-gradient(145deg, ${a.color}, ${a.color}cc)`,
                    boxShadow: `0 8px 14px -8px ${a.color}bb`,
                  }}
                >
                  <IconBy name={a.icon} size={18} />
                </div>
                <p className="flex-1 text-[13px] text-ink-navy font-semibold leading-snug">
                  {a.text}
                </p>
                <span className="text-[11px] text-ink-muted font-bold shrink-0">
                  {a.time}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Streak strip */}
      <div className="px-6 mt-8 mb-4">
        <div className="relative overflow-hidden flex items-center gap-3 p-4 rounded-[22px]"
          style={{
            background: "linear-gradient(145deg, #ffe4a8 0%, #ffd166 100%)",
            boxShadow: "0 16px 28px -18px rgba(217,164,42,0.65), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <div className="relative w-11 h-11 rounded-xl bg-ink-navy text-accent-butter flex items-center justify-center shadow-soft">
            <Flame />
          </div>
          <div className="relative flex-1">
            <p className="text-small font-extrabold text-ink-navy">4-day streak</p>
            <p className="text-[11px] text-ink-navy/70 font-semibold">
              20 more minutes to keep it alive.
            </p>
          </div>
          <Link
            href="/stats"
            className="relative h-9 px-3.5 rounded-pill bg-ink-navy text-white text-[11px] font-extrabold flex items-center"
          >
            View
          </Link>
        </div>
      </div>

      {/* Notifications slide-up */}
      <AnimatePresence>
        {notifOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNotifOpen(false)}
              className="absolute inset-0 bg-black/40 z-40"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[32px] p-5 z-50 max-h-[80%] overflow-auto hide-scroll shadow-pop"
            >
              <div className="w-10 h-1 bg-ink-line rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-h1 text-ink-navy">Notifications</h3>
                  <p className="text-caption text-ink-slate">3 new this morning</p>
                </div>
                <button
                  onClick={() => setNotifOpen(false)}
                  className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
                >
                  <Close />
                </button>
              </div>
              <div className="flex flex-col gap-2.5">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="flex gap-3 p-3.5 bg-white rounded-[18px] border border-ink-line"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white"
                      style={{
                        background: `linear-gradient(145deg, ${n.iconColor}, ${n.iconColor}cc)`,
                        boxShadow: `0 10px 18px -10px ${n.iconColor}cc, inset 0 1px 0 rgba(255,255,255,0.3)`,
                      }}
                    >
                      <IconBy name={n.icon} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-small font-extrabold text-ink-navy">
                        {n.title}
                      </h4>
                      <p className="text-[12px] text-ink-slate leading-snug mt-0.5">
                        {n.body}
                      </p>
                    </div>
                    <span className="text-[11px] text-ink-muted font-bold shrink-0">
                      {n.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 p-4 rounded-[18px] bg-brand-blue text-white shadow-soft">
                <div className="w-10 h-10 rounded-xl bg-white text-brand-blue flex items-center justify-center">
                  <Trophy />
                </div>
                <p className="flex-1 text-[12px] font-bold leading-snug">
                  You&apos;re #3 in your room this week — keep climbing!
                </p>
                <Sparkle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AppShell>
  );
}
