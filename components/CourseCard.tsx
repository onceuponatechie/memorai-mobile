"use client";

import Link from "next/link";
import { AvatarCluster } from "./AvatarCircle";

export type Course = {
  id: string;
  code: string;
  title: string;
  participants: string[];
  accent: string;
  accentText?: string;
  emoji?: string;
  progress?: number;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/course/${course.id}`}
      className="group block rounded-card p-4 shadow-card transition-transform active:scale-[0.98]"
      style={{ background: course.accent, color: course.accentText || "#0f1a3d" }}
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-extrabold"
          style={{ background: "rgba(255,255,255,0.35)" }}
        >
          {course.emoji || "📘"}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
          {course.code}
        </span>
      </div>
      <div className="mt-6">
        <h3 className="text-[15px] font-extrabold leading-tight line-clamp-2">
          {course.title}
        </h3>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <AvatarCluster names={course.participants} size="xs" overlap={8} max={3} />
        {typeof course.progress === "number" && (
          <span className="text-[11px] font-bold opacity-80">
            {course.progress}%
          </span>
        )}
      </div>
    </Link>
  );
}
