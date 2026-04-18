"use client";

import Link from "next/link";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import RaiAvatar from "@/components/RaiAvatar";
import { FileText, Cards, Brain } from "@/components/Icons";
import { courses, courseResources } from "@/lib/data";

export default function LibraryPage() {
  const allResources = Object.entries(courseResources).flatMap(([courseId, rs]) =>
    rs.map((r) => ({ ...r, courseId }))
  );

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col">
        <StatusBar />
        <div className="px-6 pt-2">
          <h1 className="text-display text-ink-navy">Library</h1>
          <p className="text-small text-ink-slate">
            Everything Rai has helped you make.
          </p>
        </div>

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-28 pt-4">
          <div className="grid grid-cols-3 gap-3">
            <StatTile count={12} label="Summaries" color="#8b7cf6" icon={<FileText size={18} />} />
            <StatTile count={38} label="Flashcards" color="#ff6f61" icon={<Cards size={18} />} />
            <StatTile count={14} label="Quizzes" color="#ffb066" icon={<Brain size={18} />} />
          </div>

          <h3 className="text-h2 text-ink-navy mt-6">By course</h3>
          <div className="mt-3 flex flex-col gap-2">
            {courses.map((c) => (
              <Link
                key={c.id}
                href={`/course/${c.id}`}
                className="flex items-center gap-3 p-3.5 bg-white rounded-[18px] border border-ink-line"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: c.accent, color: c.accentText }}
                >
                  {c.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-small font-bold text-ink-navy truncate">
                    {c.title}
                  </p>
                  <p className="text-[11px] text-ink-slate">
                    {(courseResources[c.id] || []).length} resources
                  </p>
                </div>
                <span className="text-[11px] font-bold text-brand-blue">
                  Open
                </span>
              </Link>
            ))}
          </div>

          <h3 className="text-h2 text-ink-navy mt-6">Recent uploads</h3>
          <div className="mt-3 flex flex-col gap-2">
            {allResources.slice(0, 5).map((r) => (
              <div
                key={r.name}
                className="flex items-center gap-3 p-3 bg-white rounded-[16px] border border-ink-line"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blueSoft text-brand-blue flex items-center justify-center">
                  <FileText size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-small font-bold text-ink-navy truncate">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-ink-slate">
                    {r.size} · {r.courseId.toUpperCase().replace("-", " ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-[20px] bg-brand-blue text-white flex items-center gap-3 shadow-float">
            <RaiAvatar size="medium" mood="happy" />
            <div className="flex-1">
              <p className="text-small font-bold">Need a fresh summary?</p>
              <p className="text-[11px] text-white/80">
                Drop a PDF and I&apos;ll break it down in 10 seconds.
              </p>
            </div>
            <Link
              href="/chat"
              className="h-9 px-3 rounded-pill bg-white text-brand-blue text-[12px] font-bold flex items-center"
            >
              Ask Rai
            </Link>
          </div>
        </div>

        <BottomNav active="library" />
      </div>
    </PhoneFrame>
  );
}

function StatTile({
  count,
  label,
  color,
  icon,
}: {
  count: number;
  label: string;
  color: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="p-3 rounded-[18px] text-white shadow-soft"
      style={{ background: color }}
    >
      <div className="w-8 h-8 rounded-lg bg-white/25 flex items-center justify-center">
        {icon}
      </div>
      <p className="mt-2 text-h1 leading-none">{count}</p>
      <p className="text-[11px] font-bold opacity-90">{label}</p>
    </div>
  );
}
