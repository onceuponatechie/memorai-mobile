"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PhoneFrame from "@/components/PhoneFrame";
import StatusBar from "@/components/StatusBar";
import AvatarCircle from "@/components/AvatarCircle";
import {
  ArrowLeft,
  UsersIcon,
  BookIcon,
  Heart,
  Gear,
  ChevronRight,
  Sparkle,
  Trophy,
} from "@/components/Icons";
import { currentUser, friends } from "@/lib/data";

const rooms = [
  { name: "Mass Comm 300L", members: 4, accent: "#3d7de8" },
  { name: "Ad Agency Club", members: 9, accent: "#8b7cf6" },
];

export default function MenuPage() {
  const router = useRouter();

  const items = [
    {
      key: "profile",
      label: "Profile",
      desc: "Edit photo, handle, bio",
      icon: <Gear />,
      tint: "#e8f0ff",
      color: "#3d7de8",
    },
    {
      key: "rooms",
      label: "Rooms",
      desc: `${rooms.length} rooms`,
      icon: <UsersIcon />,
      tint: "#ede9ff",
      color: "#8b7cf6",
    },
    {
      key: "friends",
      label: "Friends",
      desc: `${currentUser.friendsCount} friends on Memorai`,
      icon: <Heart />,
      tint: "#ffe4e0",
      color: "#ff6f61",
      href: "/collab",
    },
    {
      key: "guide",
      label: "Guide",
      desc: "How to use Memorai",
      icon: <BookIcon />,
      tint: "#fff1db",
      color: "#ffb066",
    },
  ];

  return (
    <PhoneFrame>
      <div className="relative h-full w-full flex flex-col bg-gradient-to-b from-brand-blueSoft to-white">
        <StatusBar />

        <header className="px-6 pt-2 flex items-center justify-between">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink-navy shadow-soft"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-h1 text-ink-navy">Menu</h1>
          <div className="w-10" />
        </header>

        <div className="flex-1 overflow-auto hide-scroll px-6 pb-8 pt-4">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-card bg-white border border-ink-line shadow-card flex items-center gap-4"
          >
            <AvatarCircle name={currentUser.firstName} size="xl" ring ringColor="#e8f0ff" />
            <div className="flex-1 min-w-0">
              <p className="text-h1 text-ink-navy leading-tight">
                {currentUser.fullName}
              </p>
              <p className="text-body text-brand-blue font-bold">
                @{currentUser.handle}
              </p>
              <p className="text-small text-ink-slate mt-0.5">
                {currentUser.room}
              </p>
            </div>
          </motion.div>

          {/* Mini stats */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { k: "18", l: "Sessions" },
              { k: "142", l: "Cards" },
              { k: "#3", l: "Rank", icon: <Trophy size={14} /> },
            ].map((s) => (
              <div
                key={s.l}
                className="p-3 rounded-[16px] bg-white border border-ink-line text-center"
              >
                <p className="text-h1 text-ink-navy leading-none">{s.k}</p>
                <p className="text-[11px] text-ink-slate font-semibold mt-1 flex items-center justify-center gap-1">
                  {s.icon}
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          {/* Menu list */}
          <div className="mt-6 flex flex-col gap-2">
            {items.map((it) => (
              <MenuRow
                key={it.key}
                icon={it.icon}
                tint={it.tint}
                color={it.color}
                label={it.label}
                desc={it.desc}
                href={it.href}
              />
            ))}
          </div>

          {/* Rooms preview */}
          <div className="mt-6 p-4 rounded-[20px] bg-white border border-ink-line">
            <div className="flex items-center justify-between">
              <h3 className="text-h2 text-ink-navy">Your rooms</h3>
              <span className="text-small font-bold text-brand-blue">Manage</span>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {rooms.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 p-2.5 rounded-[14px] bg-ink-line/50"
                >
                  <div
                    className="w-9 h-9 rounded-lg text-white flex items-center justify-center"
                    style={{ background: r.accent }}
                  >
                    <UsersIcon size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-small font-bold text-ink-navy">
                      {r.name}
                    </p>
                    <p className="text-[11px] text-ink-slate">
                      {r.members} members
                    </p>
                  </div>
                  <ChevronRight />
                </div>
              ))}
            </div>
          </div>

          {/* Session with friends CTA */}
          <Link
            href="/collab"
            className="mt-4 block p-4 rounded-[20px] bg-accent-purple text-white shadow-float"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center">
                <Sparkle />
              </div>
              <div className="flex-1">
                <p className="text-small font-bold">Start a session</p>
                <p className="text-[11px] text-white/80">
                  Pick friends and study together
                </p>
              </div>
              <div className="flex -space-x-2">
                {friends.slice(0, 3).map((f) => (
                  <AvatarCircle key={f.handle} name={f.name} size="sm" ring ringColor="#8b7cf6" />
                ))}
              </div>
            </div>
          </Link>

          <div className="my-5 h-px bg-ink-line" />

          <MenuRow
            label="Invite a Friend"
            desc="Share your room code"
            tint="#fff1db"
            color="#ffb066"
            icon={<Sparkle />}
          />

          <div className="my-5 h-px bg-ink-line" />

          <MenuRow
            label="Rate Us"
            desc="Tell us what you think"
            tint="#e8f0ff"
            color="#3d7de8"
            icon={<Heart />}
          />

          <button className="w-full mt-3 h-12 rounded-[18px] bg-accent-coral/15 text-accent-coral text-small font-bold">
            Sign Out
          </button>

          <p className="text-center text-[11px] text-ink-muted font-semibold mt-6">
            Memorai · v0.1 · Powered by Claude
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MenuRow({
  icon,
  label,
  desc,
  tint,
  color,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  tint: string;
  color: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-center gap-3 p-3.5 bg-white rounded-[18px] border border-ink-line">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: tint, color }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-small font-extrabold text-ink-navy">{label}</p>
        <p className="text-[11px] text-ink-slate">{desc}</p>
      </div>
      <ChevronRight />
    </div>
  );
  if (href) return <Link href={href}>{Body}</Link>;
  return <button className="w-full text-left">{Body}</button>;
}
