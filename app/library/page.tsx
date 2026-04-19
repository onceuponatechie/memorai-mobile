"use client";

import Link from "next/link";
import AppShell from "@/components/AppShell";
import RaiAvatar from "@/components/RaiAvatar";
import IconBy from "@/components/IconBy";
import { FileText, Cards, Brain, ChevronRight, SearchIcon } from "@/components/Icons";
import { courses, courseResources } from "@/lib/data";

export default function LibraryPage() {
  const allResources = Object.entries(courseResources).flatMap(([courseId, rs]) =>
    rs.map((r) => ({ ...r, courseId }))
  );

  return (
    <AppShell
      bottomNav="library"
      header={
        <div className="px-6 pt-2 pb-3">
          <p className="text-[11px] font-semibold tracking-[0.08em] text-ink-slate">
            Your workspace
          </p>
          <h1 className="text-display text-ink-navy">Library</h1>
          <p className="text-small text-ink-slate font-medium">
            All resources in one place.
          </p>
          <div className="mt-3 flex items-center gap-2 bg-ink-line/60 rounded-[16px] px-3.5 h-11">
            <SearchIcon size={18} />
            <input
              type="search"
              placeholder="Search files & notes"
              className="flex-1 bg-transparent outline-none text-[12px] font-normal text-ink-navy placeholder:text-ink-slate"
            />
          </div>
        </div>
      }
    >
      <div className="px-6 pt-4 pb-6">
        <div className="grid grid-cols-3 gap-3">
          <StatTile count={12} label="Summaries" color="#8b7cf6" colorDeep="#6b57d9" icon={<FileText size={18} />} />
          <StatTile count={38} label="Flashcards" color="#ff6f61" colorDeep="#d94a3d" icon={<Cards size={18} />} />
          <StatTile count={14} label="Quizzes" color="#ffb066" colorDeep="#e08a00" icon={<Brain size={18} />} />
        </div>

        <h3 className="text-h2 text-ink-navy mt-6">By course</h3>
        <div className="mt-3 flex flex-col gap-2">
          {courses.map((c) => {
            const deep = c.accentDeep || c.accent;
            return (
              <Link
                key={c.id}
                href={`/course/${c.id}`}
                className="flex items-center gap-3 p-3.5 bg-white rounded-[20px] border border-ink-line shadow-soft"
              >
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white"
                  style={{
                    background: `linear-gradient(145deg, ${c.accent}, ${deep})`,
                    boxShadow: `0 12px 20px -12px ${deep}aa, inset 0 1px 0 rgba(255,255,255,0.35)`,
                    color: c.accentText,
                  }}
                >
                  <IconBy name={c.icon} size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold tracking-wide text-ink-slate">
                    {c.code}
                  </p>
                  <p className="text-small font-extrabold text-ink-navy truncate">
                    {c.title}
                  </p>
                  <p className="text-[11px] text-ink-slate font-semibold">
                    {(courseResources[c.id] || []).length} resources
                  </p>
                </div>
                <ChevronRight />
              </Link>
            );
          })}
        </div>

        <h3 className="text-h2 text-ink-navy mt-6">Recent uploads</h3>
        <div className="mt-3 flex flex-col gap-2">
          {allResources.slice(0, 5).map((r) => (
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
                  PDF · {r.size} · {r.courseId.toUpperCase().replace("-", " ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="relative overflow-hidden mt-6 p-4 rounded-[22px] text-white"
          style={{
            background: "linear-gradient(145deg, #7bc1ff 0%, #44A5FF 60%, #1f7acf 100%)",
            boxShadow:
              "0 26px 50px -24px rgba(61,125,232,0.65), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <span className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/15 blur-xl" />
          <div className="relative flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <RaiAvatar size="medium" mood="happy" />
            </div>
            <div className="flex-1">
              <p className="text-small font-extrabold">Need a fresh summary?</p>
              <p className="text-[11px] text-white/85 font-semibold">
                Drop a PDF and I&apos;ll break it down in 10 seconds.
              </p>
            </div>
            <Link
              href="/chat"
              className="h-9 px-3.5 rounded-pill bg-white text-brand-blue text-[12px] font-extrabold flex items-center"
            >
              Ask Rai
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function StatTile({
  count,
  label,
  color,
  colorDeep,
  icon,
}: {
  count: number;
  label: string;
  color: string;
  colorDeep: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden p-3 rounded-[20px] text-white"
      style={{
        background: `linear-gradient(145deg, ${color}, ${colorDeep})`,
        boxShadow: `0 16px 28px -16px ${colorDeep}cc, inset 0 1px 0 rgba(255,255,255,0.3)`,
      }}
    >
      <span className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/15 blur-md" />
      <div className="relative w-9 h-9 rounded-lg bg-white/25 flex items-center justify-center">
        {icon}
      </div>
      <p className="relative mt-2 text-[24px] font-extrabold leading-none tracking-tight">
        {count}
      </p>
      <p className="relative text-[11px] font-extrabold opacity-90">{label}</p>
    </div>
  );
}
