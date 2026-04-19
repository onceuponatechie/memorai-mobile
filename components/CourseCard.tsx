"use client";

import Link from "next/link";
import { AvatarCluster } from "./AvatarCircle";
import IconBy from "./IconBy";

export type Course = {
  id: string;
  code: string;
  title: string;
  participants: string[];
  accent: string;
  accentDeep?: string;
  accentText?: string;
  icon: string;
  progress?: number;
  lessons?: number;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/course/${course.id}`}
      className="group relative block aspect-square rounded-[22px] p-3.5 overflow-hidden transition-transform active:scale-[0.98] flex flex-col text-white"
      style={{
        background: course.accent,
        boxShadow: `0 16px 28px -16px ${course.accent}88`,
      }}
    >
      <div className="relative flex items-start justify-between">
        <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center text-white">
          <IconBy name={course.icon} size={20} />
        </div>
        <span className="text-[11px] font-semibold tracking-[0.04em] opacity-90">
          {course.code}
        </span>
      </div>

      <div className="relative mt-auto">
        <h3
          className="text-[15px] font-semibold leading-[1.15] tracking-tight line-clamp-2 whitespace-pre-line"
          style={{ minHeight: "2.3em" }}
        >
          {course.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <AvatarCluster
            names={course.participants}
            size="xs"
            overlap={8}
            max={3}
            ringColor={course.accent}
          />
          {typeof course.progress === "number" && (
            <span className="text-[11px] font-semibold opacity-95">
              {course.progress}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
