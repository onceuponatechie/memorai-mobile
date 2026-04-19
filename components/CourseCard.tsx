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
  const text = course.accentText || "#0f1a3d";
  const deep = course.accentDeep || course.accent;
  return (
    <Link
      href={`/course/${course.id}`}
      className="group relative block aspect-square rounded-[22px] p-3.5 overflow-hidden transition-transform active:scale-[0.98] flex flex-col"
      style={{
        background: `linear-gradient(145deg, ${course.accent} 0%, ${deep} 100%)`,
        color: text,
        boxShadow: `0 16px 28px -16px ${deep}88, inset 0 1px 0 rgba(255,255,255,0.35)`,
      }}
    >
      {/* Glossy highlight */}
      <span
        className="absolute -top-10 -left-8 w-28 h-28 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 60%)" }}
      />
      <span
        className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.18)" }}
      />

      <div className="relative flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-[12px] flex items-center justify-center backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.25)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
            color: text,
          }}
        >
          <IconBy name={course.icon} size={20} />
        </div>
        <span className="text-[11px] font-extrabold opacity-80">
          {course.code}
        </span>
      </div>

      <div className="relative mt-auto">
        <h3 className="text-[15px] font-extrabold leading-[1.15] tracking-tight line-clamp-2">
          {course.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <AvatarCluster
            names={course.participants}
            size="xs"
            overlap={8}
            max={3}
            ringColor={deep}
          />
          {typeof course.progress === "number" && (
            <span className="text-[11px] font-extrabold opacity-90">
              {course.progress}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
