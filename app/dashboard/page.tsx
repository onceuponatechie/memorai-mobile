"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import RaiAvatar from "@/components/RaiAvatar";
import CourseCard from "@/components/CourseCard";
import AvatarCircle from "@/components/AvatarCircle";
import PillTabs from "@/components/PillTabs";
import ActionButton from "@/components/ActionButton";
import NotificationCard from "@/components/NotificationCard";
import {
  SearchIcon,
  BellIcon,
  Plus,
  UsersIcon,
  Flame,
  Sparkle,
  Trophy,
  Play,
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
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        {/* Header */}
        <header className="px-6 pt-2 flex items-center justify-between">
          <Link href="/menu" className="flex items-center gap-3">
            <AvatarCircle name={currentUser.firstName} size="lg" ring ringColor="#eef1f7" />
            <div className="leading-tight">
              <p className="text-[13px] text-ink-slate font-semibold">Hello,</p>
              <p className="text-h1 text-ink-navy">{currentUser.firstName}</p>
              <p className="text-[11px] text-ink-slate mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                {currentUser.room}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy">
              <SearchIcon />
            </button>
            <button
              onClick={() => setNotifOpen(true)}
              className="relative w-10 h-10 rounded-full bg-ink-line flex items-center justify-center text-ink-navy"
            >
              <BellIcon />
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-accent-coral text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                3
              </span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto hide-scroll pb-28">
          {/* Featured card */}
          <div className="px-6 mt-5">
            <div className="relative bg-brand-blue rounded-card p-5 overflow-hidden shadow-float">
              <div className="absolute -right-6 -bottom-8 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -right-2 -top-4 w-20 h-20 rounded-full bg-accent-butter/30 blur-xl" />

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 text-white">
                  <h2 className="text-[22px] leading-tight font-extrabold">
                    Learning today?
                  </h2>
                  <p className="text-[13px] text-white/80 mt-1.5 max-w-[180px]">
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
                    <button className="h-10 px-3.5 rounded-[16px] bg-white/20 backdrop-blur text-white text-[13px] font-bold flex items-center gap-1.5 active:scale-[0.98]">
                      <UsersIcon size={14} />
                      Invite
                    </button>
                  </div>
                </div>

                <div className="relative -mt-6">
                  <RaiAvatar mood="happy" size="large" animate />
                  <div className="absolute -top-3 -left-16 bg-white text-ink-navy text-[11px] font-bold px-2.5 py-1.5 rounded-[14px] rounded-br-[4px] shadow-card whitespace-nowrap">
                    I&apos;m ready!
                  </div>
                </div>
              </div>

              {/* mini progress chip */}
              <div className="mt-4 flex items-center gap-2 bg-white/15 rounded-pill pl-2 pr-3 py-1.5 w-fit">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-brand-blue">
                  <Play size={11} />
                </div>
                <span className="text-white text-[11px] font-bold">
                  Continue · MAS 308 · 74%
                </span>
              </div>
            </div>
          </div>

          {/* Pill tabs */}
          <div className="px-6 mt-6">
            <PillTabs<Tab>
              tabs={[
                { key: "lesson", label: "Lesson" },
                { key: "quiz", label: "Quiz" },
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
                className="px-6 mt-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-h2 text-ink-navy">My Courses</h3>
                  <Link href="/dashboard" className="text-small font-bold text-brand-blue">
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
                className="px-6 mt-5 flex flex-col gap-3"
              >
                {recentQuizzes.map((q) => (
                  <div
                    key={q.id}
                    className="flex items-center gap-3 p-3.5 bg-white border border-ink-line rounded-[18px]"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ background: q.accent }}
                    >
                      <Sparkle size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-caption font-semibold text-ink-slate">
                        {q.course}
                      </p>
                      <p className="text-small font-bold text-ink-navy truncate">
                        {q.title}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[16px] font-extrabold text-ink-navy">
                        {q.score}/{q.total}
                      </span>
                      <button className="text-[11px] font-bold text-brand-blue">
                        Retake
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
                className="px-6 mt-5 flex flex-col gap-2.5"
              >
                {activity.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-3 p-3 bg-white border border-ink-line rounded-[16px]"
                  >
                    <div className="w-9 h-9 rounded-full bg-ink-line flex items-center justify-center text-base">
                      {a.icon}
                    </div>
                    <p className="flex-1 text-[13px] text-ink-navy font-medium leading-tight">
                      {a.text}
                    </p>
                    <span className="text-[11px] text-ink-muted font-semibold shrink-0">
                      {a.time}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Streak strip */}
          <div className="px-6 mt-6">
            <div className="flex items-center gap-3 p-4 rounded-[20px] bg-accent-butter/30 border border-accent-butter/60">
              <div className="w-11 h-11 rounded-xl bg-accent-butter text-ink-navy flex items-center justify-center">
                <Flame />
              </div>
              <div className="flex-1">
                <p className="text-small font-bold text-ink-navy">
                  4-day streak 🔥
                </p>
                <p className="text-[12px] text-ink-slate">
                  Study 20 more minutes to keep it alive.
                </p>
              </div>
              <Link
                href="/stats"
                className="text-[12px] font-bold text-ink-navy underline underline-offset-2"
              >
                View
              </Link>
            </div>
          </div>
        </div>

        <BottomNav active="home" />

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
                className="absolute left-0 right-0 bottom-0 bg-white rounded-t-[28px] p-5 z-50 max-h-[75%] overflow-auto hide-scroll"
              >
                <div className="w-10 h-1 bg-ink-line rounded-full mx-auto mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-h1 text-ink-navy">Notifications</h3>
                  <button
                    onClick={() => setNotifOpen(false)}
                    className="text-small font-bold text-brand-blue"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col gap-2.5">
                  {notifications.map((n) => (
                    <NotificationCard
                      key={n.id}
                      icon={<span className="text-base">{n.icon}</span>}
                      title={n.title}
                      body={n.body}
                      time={n.time}
                      accent={n.accent}
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 p-3 rounded-[16px] bg-brand-blueSoft">
                  <Trophy />
                  <p className="text-[12px] text-ink-navy font-semibold">
                    You&apos;re #3 this week — keep climbing!
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </PhoneFrame>
  );
}
