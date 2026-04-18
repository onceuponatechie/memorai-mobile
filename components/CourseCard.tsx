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
      className="group relative block rounded-[22px] p-4 overflow-hidden transition-transform active:scale-[0.98]"
      style={{
        background: `linear-gradient(145deg, ${course.accent} 0%, ${deep} 100%)`,
        color: text,
        boxShadow: `0 16px 28px -16px ${deep}88, inset 0 1px 0 rgba(255,255,255,0.35)`,
      }}
    >
      {/* Glossy highlight */}
      <span
        className="absolute -top-10 -left-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 60%)" }}
      />
      {/* Grain */}
      <span className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />
      {/* Decorative blob */}
      <span
        className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.18)" }}
      />

      <div className="relative flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-[14px] flex items-center justify-center backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.25)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
            color: text,
          }}
        >
          <IconBy name={course.icon} size={22} />
        </div>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.08em] opacity-75">
          {course.code}
        </span>
      </div>

      <div className="relative mt-7">
        <h3 className="text-[17px] font-extrabold leading-[1.15] tracking-tight line-clamp-2">
          {course.title}
        </h3>
        {typeof course.lessons === "number" && (
          <p className="text-[11px] font-semibold opacity-75 mt-1">
            {course.lessons} lessons
          </p>
        )}
      </div>

      <div className="relative mt-4 flex items-center justify-between">
        <AvatarCluster
          names={course.participants}
          size="xs"
          overlap={8}
          max={3}
          ringColor={deep}
        />
        {typeof course.progress === "number" && (
          <div
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: text }}
            />
            <span className="text-[11px] font-extrabold">{course.progress}%</span>
          </div>
        )}
      </div>
    </Link>
  );
}
