"use client";

import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import AvatarCircle from "@/components/AvatarCircle";
import ActionButton from "@/components/ActionButton";
import IconBy from "@/components/IconBy";
import {
  Flame,
  Trophy,
  Sparkle,
  Check,
  Target,
  Lightning,
} from "@/components/Icons";
import { leaderboard, achievements } from "@/lib/data";

const days = [
  { d: "M", done: true },
  { d: "T", done: true },
  { d: "W", done: true },
  { d: "T", done: true },
  { d: "F", done: false, today: true },
  { d: "S", done: false },
  { d: "S", done: false },
];

export default function StatsPage() {
  return (
    <AppShell
      bottomNav="stats"
      header={
        <div className="px-6 pt-2 pb-2 flex items-start justify-between">
          <div>
            <h1 className="text-display text-ink-navy">Your Stats</h1>
            <p className="text-[12px] font-medium tracking-normal text-ink-slate mt-1">
              Apr 14 – 20 · This week
            </p>
          </div>
          <div
            className="w-16 h-16 rounded-[20px] flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #ffe4a8, #ffd166)",
              boxShadow:
                "0 16px 28px -16px rgba(217,164,42,0.7), inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <span className="text-[10px] font-bold text-[#7d5600] tracking-wide">
              Grade
            </span>
            <span className="text-[26px] font-extrabold text-ink-navy leading-none">
              C+
            </span>
          </div>
        </div>
      }
    >
      <div className="px-6 pb-6">
        {/* Streak */}
        <section
          className="relative overflow-hidden p-5 rounded-[26px] text-white"
          style={{
            background:
              "linear-gradient(145deg, #7bc1ff 0%, #44A5FF 55%, #1f7acf 100%)",
            boxShadow:
              "0 30px 60px -28px rgba(61,125,232,0.7), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <span className="absolute -top-14 -right-12 w-56 h-56 rounded-full bg-white/15 blur-xl" />

          <div className="relative flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl bg-white text-brand-blue flex items-center justify-center"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
            >
              <Flame />
            </div>
            <div>
              <p className="text-caption font-bold text-white/85 tracking-wide">
                Study streak
              </p>
              <p className="text-h1">4 of 7 days</p>
            </div>
          </div>
          <div className="relative mt-4 flex items-center justify-between">
            {days.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    d.done
                      ? "bg-white text-brand-blue"
                      : d.today
                      ? "bg-white/25 text-white ring-2 ring-white"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {d.done ? (
                    <Check size={14} />
                  ) : (
                    <span className="text-[11px] font-extrabold">{d.d}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="relative text-[11px] font-bold text-white/80 mt-3">
            Your longest streak: 11 days
          </p>
        </section>

        {/* Rai's assessment */}
        <section className="mt-5 p-5 rounded-[22px] bg-white border border-ink-line shadow-soft">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center shadow-soft">
              <RaiAvatar mood="thinking" size="medium" />
            </div>
            <div className="flex-1">
              <p className="text-[12px] font-bold tracking-normal text-ink-slate">
                Rai&apos;s weekly take
              </p>
              <p className="text-[14px] text-ink-navy mt-1.5 leading-[1.55] font-semibold">
                You&apos;re{" "}
                <span className="bg-accent-butter/70 px-1.5 rounded font-extrabold">
                  crushing Broadcast Production
                </span>
                , but{" "}
                <span className="bg-accent-coral/30 px-1.5 rounded font-extrabold">
                  Media Law needs love
                </span>
                . Try 20 minutes tomorrow morning — you&apos;re sharper before noon.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <MetricCard label="Study time" value="6h 42m" sub="+1h vs last week" color="#8b7cf6" />
          <MetricCard label="Quizzes" value="12" sub="Avg 78%" color="#ff6f61" />
          <MetricCard label="Flashcards" value="142" sub="38 mastered" color="#62c4ff" />
          <MetricCard label="Rai sessions" value="18" sub="Top 12%" color="#ffb066" />
        </div>

        {/* Achievements */}
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-h2 text-ink-navy">Achievements</h3>
            <span className="text-small font-extrabold text-brand-blue">3 / 12</span>
          </div>
          <div className="mt-3 flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {achievements.map((a) => (
              <div
                key={a.t}
                className={`shrink-0 w-28 p-3 rounded-[20px] flex flex-col items-center gap-2 ${
                  a.earned
                    ? "bg-white border border-ink-line shadow-soft"
                    : "bg-ink-line/40 border border-dashed border-ink-muted/40 opacity-80"
                }`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                  style={{
                    background: a.earned
                      ? `linear-gradient(145deg, ${a.color}, ${a.color}cc)`
                      : "#d0d5e0",
                    boxShadow: a.earned ? `0 10px 18px -10px ${a.color}` : undefined,
                  }}
                >
                  <IconBy name={a.icon} size={24} />
                </div>
                <p className="text-[11px] font-extrabold text-center text-ink-navy leading-tight">
                  {a.t}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="mt-6 p-5 rounded-[22px] bg-white border border-ink-line shadow-soft">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-accent-butter text-ink-navy flex items-center justify-center shadow-soft">
              <Trophy />
            </div>
            <h3 className="text-h2 text-ink-navy">Room Leaderboard</h3>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {leaderboard.map((r) => (
              <div
                key={r.name}
                className={`flex items-center gap-3 p-2.5 rounded-[14px] ${
                  r.you ? "bg-brand-blue text-white" : ""
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold ${
                    r.rank === 1
                      ? "bg-accent-butter text-ink-navy"
                      : r.rank === 2
                      ? "bg-ink-line text-ink-navy"
                      : r.rank === 3
                      ? "bg-accent-coral text-white"
                      : "bg-ink-line text-ink-slate"
                  }`}
                >
                  {r.rank}
                </span>
                <AvatarCircle name={r.name} size="sm" />
                <p className={`flex-1 text-small font-extrabold ${r.you ? "text-white" : "text-ink-navy"}`}>
                  {r.name}{" "}
                  {r.you && (
                    <span className="text-[10px] font-extrabold text-white/85 ml-1">
                      (you)
                    </span>
                  )}
                </p>
                <span className={`text-small font-extrabold ${r.you ? "text-white" : "text-ink-navy"}`}>
                  {r.xp.toLocaleString()} XP
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Next week goals */}
        <section
          className="relative overflow-hidden mt-6 p-5 rounded-[24px] text-white"
          style={{
            background: "linear-gradient(145deg, #a596ff 0%, #8b7cf6 55%, #6b57d9 100%)",
            boxShadow:
              "0 30px 60px -28px rgba(107,87,217,0.7), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <span className="absolute -top-14 -right-12 w-56 h-56 rounded-full bg-white/15 blur-xl" />
          <div className="relative flex items-start gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <RaiAvatar mood="excited" size="medium" />
            </div>
            <div className="flex-1">
              <p className="text-caption font-bold text-white/85 tracking-wide">
                Next week
              </p>
              <p className="text-h2 leading-tight">
                Let&apos;s aim for a 6-day streak
              </p>
              <ul className="mt-2 space-y-1.5 text-[12px] text-white/90 font-semibold">
                <GoalItem>Finish MAS 310 flashcards</GoalItem>
                <GoalItem>3 quizzes in Broadcast Prod</GoalItem>
                <GoalItem>1 study session with Amaka</GoalItem>
              </ul>
            </div>
          </div>
          <div className="relative mt-4">
            <ActionButton variant="white">Plan with Rai</ActionButton>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function GoalItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2">
      <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
        <Sparkle size={10} />
      </span>
      {children}
    </li>
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
    <div className="relative overflow-hidden p-4 rounded-[20px] bg-white border border-ink-line shadow-soft">
      <div className="flex items-center gap-2">
        <span
          className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
          style={{ background: color }}
        >
          <Lightning size={12} />
        </span>
        <p className="text-[11px] font-bold tracking-normal text-ink-slate">
          {label}
        </p>
      </div>
      <p className="mt-2 text-[22px] font-extrabold text-ink-navy leading-none tracking-tight">
        {value}
      </p>
      <p className="text-[11px] text-ink-slate mt-1 font-semibold">{sub}</p>
    </div>
  );
}
