"use client";

import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import ActionButton from "@/components/ActionButton";
import { Flame, Trophy, Sparkle, Check } from "@/components/Icons";
import { leaderboard } from "@/lib/data";

const days = [
  { d: "M", done: true },
  { d: "T", done: true },
  { d: "W", done: true },
  { d: "T", done: true },
  { d: "F", done: false, today: true },
  { d: "S", done: false },
  { d: "S", done: false },
];

const achievements = [
  { t: "First Quiz", icon: "🥇", earned: true, color: "#ffd166" },
  { t: "3-Day Streak", icon: "🔥", earned: true, color: "#ff6f61" },
  { t: "Team Player", icon: "🤝", earned: true, color: "#8b7cf6" },
  { t: "Quiz Master", icon: "🧠", earned: false, color: "#62c4ff" },
];

export default function StatsPage() {
  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-28 pt-2">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-display text-ink-navy">Your Stats</h1>
              <p className="text-small text-ink-slate">
                This Week · Apr 14 – 20
              </p>
            </div>
            <div className="w-16 h-16 rounded-[20px] bg-accent-butter flex flex-col items-center justify-center shadow-card">
              <span className="text-[10px] font-bold text-[#7d5600]">GRADE</span>
              <span className="text-[28px] font-extrabold text-ink-navy leading-none">
                C+
              </span>
            </div>
          </div>

          {/* Streak */}
          <section className="mt-6 p-5 rounded-card bg-brand-blue text-white shadow-float relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="relative flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white text-brand-blue flex items-center justify-center">
                <Flame />
              </div>
              <div>
                <p className="text-caption font-bold text-white/80">STUDY STREAK</p>
                <p className="text-h1">4 of 7 days</p>
              </div>
            </div>
            <div className="relative mt-4 flex items-center justify-between">
              {days.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      d.done
                        ? "bg-white text-brand-blue"
                        : d.today
                        ? "bg-white/30 text-white ring-2 ring-white"
                        : "bg-white/15 text-white/60"
                    }`}
                  >
                    {d.done ? <Check size={14} /> : <span className="text-[11px] font-bold">{d.d}</span>}
                  </div>
                  {d.done && <span className="w-1 h-1 bg-accent-butter rounded-full" />}
                </div>
              ))}
            </div>
            <p className="relative text-[11px] font-semibold text-white/80 mt-3">
              Your longest streak: 11 days
            </p>
          </section>

          {/* Rai's assessment */}
          <section className="mt-5 p-5 rounded-card bg-white border border-ink-line">
            <div className="flex items-start gap-3">
              <RaiAvatar mood="thinking" size="medium" />
              <div className="flex-1">
                <p className="text-caption font-bold text-ink-slate">
                  RAI&apos;S WEEKLY TAKE
                </p>
                <p className="text-small text-ink-navy mt-1 leading-relaxed">
                  You&apos;re{" "}
                  <span className="bg-accent-butter/60 px-1 rounded font-bold">
                    crushing Broadcast Production
                  </span>
                  , but{" "}
                  <span className="bg-accent-coral/30 px-1 rounded font-bold">
                    Media Law needs love
                  </span>
                  . Try 20 minutes tomorrow morning — you&apos;re sharper before
                  noon 👀
                </p>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <MetricCard label="Study time" value="6h 42m" sub="+1h vs last week" color="#8b7cf6" />
            <MetricCard label="Quizzes taken" value="12" sub="Avg 78%" color="#ff6f61" />
            <MetricCard label="Flashcards" value="142" sub="38 mastered" color="#62c4ff" />
            <MetricCard label="Rai sessions" value="18" sub="Top 12%" color="#ffd166" />
          </div>

          {/* Achievements */}
          <section className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-h2 text-ink-navy">Achievements</h3>
              <span className="text-small font-bold text-brand-blue">3 / 12</span>
            </div>
            <div className="mt-3 flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {achievements.map((a) => (
                <div
                  key={a.t}
                  className={`shrink-0 w-24 p-3 rounded-[18px] border flex flex-col items-center gap-1.5 ${
                    a.earned
                      ? "border-ink-line bg-white"
                      : "border-dashed border-ink-line bg-ink-line/30 opacity-60"
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: a.earned ? `${a.color}33` : "#e8e8ef" }}
                  >
                    {a.icon}
                  </div>
                  <p className="text-[11px] font-bold text-center text-ink-navy leading-tight">
                    {a.t}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Leaderboard */}
          <section className="mt-6 p-5 rounded-card bg-white border border-ink-line">
            <div className="flex items-center gap-2">
              <Trophy />
              <h3 className="text-h2 text-ink-navy">Room Leaderboard</h3>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {leaderboard.map((r) => (
                <div
                  key={r.name}
                  className={`flex items-center gap-3 p-2.5 rounded-[14px] ${
                    r.you ? "bg-brand-blueSoft" : ""
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-extrabold ${
                      r.rank === 1
                        ? "bg-accent-butter text-ink-navy"
                        : r.rank === 2
                        ? "bg-ink-line text-ink-navy"
                        : r.rank === 3
                        ? "bg-accent-coral/30 text-accent-coral"
                        : "bg-ink-line text-ink-slate"
                    }`}
                  >
                    {r.rank}
                  </span>
                  <AvatarCircle name={r.name} size="sm" />
                  <p className="flex-1 text-small font-bold text-ink-navy">
                    {r.name}{" "}
                    {r.you && (
                      <span className="text-[10px] font-bold text-brand-blue ml-1">
                        (you)
                      </span>
                    )}
                  </p>
                  <span className="text-small font-extrabold text-ink-navy">
                    {r.xp.toLocaleString()} XP
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Next week goals */}
          <section className="mt-6 p-5 rounded-card bg-accent-purple text-white shadow-float">
            <div className="flex items-start gap-3">
              <RaiAvatar mood="excited" size="medium" />
              <div className="flex-1">
                <p className="text-caption font-bold text-white/80">NEXT WEEK</p>
                <p className="text-h2">Let&apos;s aim for a 6-day streak</p>
                <ul className="mt-2 space-y-1.5 text-[12px] text-white/90">
                  <li className="flex items-center gap-2">
                    <Sparkle size={12} /> Finish MAS 310 flashcards
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkle size={12} /> 3 quizzes in Broadcast Prod
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkle size={12} /> 1 study session with Amaka
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <ActionButton variant="white">Plan with Rai</ActionButton>
            </div>
          </section>
        </div>

        <BottomNav active="stats" />
      </div>
    </PhoneFrame>
  );
}

function MetricCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="p-4 rounded-[20px] bg-white border border-ink-line">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        <p className="text-[11px] font-bold uppercase text-ink-slate">{label}</p>
      </div>
      <p className="mt-2 text-[22px] font-extrabold text-ink-navy leading-none">
        {value}
      </p>
      <p className="text-[11px] text-ink-slate mt-1">{sub}</p>
    </div>
  );
}
