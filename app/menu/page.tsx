"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AppShell from "@/components/AppShell";
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
  Rocket,
  Star,
} from "@/components/Icons";
import { currentUser, friends } from "@/lib/data";

const rooms = [
  { name: "Mass Comm 300L", members: 4, accent: "#44A5FF" },
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
      color: "#44A5FF",
    },
    {
      key: "rooms",
      label: "Rooms",
      desc: `${rooms.length} rooms`,
      icon: <UsersIcon />,
      color: "#8b7cf6",
    },
    {
      key: "friends",
      label: "Friends",
      desc: `${currentUser.friendsCount} friends on Memorai`,
      icon: <Heart />,
      color: "#ff6f61",
      href: "/collab",
    },
    {
      key: "guide",
      label: "Guide",
      desc: "How to use Memorai",
      icon: <BookIcon />,
      color: "#ffb066",
    },
  ];

  return (
    <AppShell
      bottomNav={false}
      background="#f5f3ff"
      header={
        <header className="px-6 pt-2 pb-2 flex items-center justify-between">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-ink-navy shadow-soft"
          >
            <ArrowLeft />
          </button>
          <h1 className="text-h1 text-ink-navy">Menu</h1>
          <div className="w-11" />
        </header>
      }
    >
      <div className="px-6 pt-2 pb-8">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden p-5 rounded-[26px]"
          style={{
            background: "linear-gradient(145deg, #7bc1ff 0%, #44A5FF 60%, #1f7acf 100%)",
            boxShadow:
              "0 30px 60px -28px rgba(61,125,232,0.65), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <span className="absolute -top-14 -right-12 w-52 h-52 rounded-full bg-white/15 blur-xl" />
          <div className="relative flex items-center gap-4 text-white">
            <AvatarCircle
              name={currentUser.firstName}
              size="2xl"
              ring
              ringColor="rgba(255,255,255,0.7)"
              ringWidth={4}
            />
            <div className="flex-1 min-w-0">
              <p className="text-h1 leading-tight">{currentUser.fullName}</p>
              <p className="text-[13px] text-white/85 font-extrabold">
                @{currentUser.handle}
              </p>
              <p className="text-[11px] text-white/70 mt-0.5 font-semibold">
                {currentUser.room}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { k: "18", l: "Sessions", i: <Rocket size={14} /> },
            { k: "142", l: "Cards", i: <Sparkle size={14} /> },
            { k: "#3", l: "Rank", i: <Trophy size={14} /> },
          ].map((s) => (
            <div
              key={s.l}
              className="p-3 rounded-[18px] bg-white border border-ink-line text-center shadow-soft"
            >
              <p className="text-h1 text-ink-navy leading-none tracking-tight">
                {s.k}
              </p>
              <p className="text-[11px] text-ink-slate font-extrabold mt-1 flex items-center justify-center gap-1">
                {s.i}
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
              color={it.color}
              label={it.label}
              desc={it.desc}
              href={it.href}
            />
          ))}
        </div>

        {/* Rooms preview */}
        <div className="mt-6 p-4 rounded-[22px] bg-white border border-ink-line shadow-soft">
          <div className="flex items-center justify-between">
            <h3 className="text-h2 text-ink-navy">Your rooms</h3>
            <span className="text-small font-extrabold text-brand-blue">
              Manage
            </span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {rooms.map((r) => (
              <div
                key={r.name}
                className="flex items-center gap-3 p-2.5 rounded-[14px] bg-ink-line/50"
              >
                <div
                  className="w-10 h-10 rounded-lg text-white flex items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${r.accent}, ${r.accent}cc)`,
                    boxShadow: `0 10px 18px -10px ${r.accent}cc`,
                  }}
                >
                  <UsersIcon size={16} />
                </div>
                <div className="flex-1">
                  <p className="text-small font-extrabold text-ink-navy">
                    {r.name}
                  </p>
                  <p className="text-[11px] text-ink-slate font-semibold">
                    {r.members} members
                  </p>
                </div>
                <ChevronRight />
              </div>
            ))}
          </div>
        </div>

        {/* Start session CTA */}
        <Link
          href="/collab"
          className="relative overflow-hidden mt-4 block p-4 rounded-[22px] text-white"
          style={{
            background: "linear-gradient(145deg, #a596ff 0%, #8b7cf6 60%, #6b57d9 100%)",
            boxShadow:
              "0 22px 40px -22px rgba(107,87,217,0.7), inset 0 1px 0 rgba(255,255,255,0.35)",
          }}
        >
          <span className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/15 blur-xl" />
          <div className="relative flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center">
              <Sparkle />
            </div>
            <div className="flex-1">
              <p className="text-small font-extrabold">Start a session</p>
              <p className="text-[11px] text-white/85 font-semibold">
                Pick friends and study together
              </p>
            </div>
            <div className="flex -space-x-2">
              {friends.slice(0, 3).map((f) => (
                <AvatarCircle
                  key={f.handle}
                  name={f.name}
                  size="sm"
                  ring
                  ringColor="#6b57d9"
                />
              ))}
            </div>
          </div>
        </Link>

        <div className="my-5 h-px bg-ink-line" />

        <MenuRow
          label="Invite a Friend"
          desc="Share your room code"
          color="#ffb066"
          icon={<Sparkle />}
        />

        <div className="my-3" />

        <MenuRow
          label="Rate Us"
          desc="Tell us what you think"
          color="#44A5FF"
          icon={<Star />}
        />

        <button className="w-full mt-5 h-12 rounded-[18px] bg-ink-navy text-white text-small font-extrabold shadow-soft">
          Sign Out
        </button>

        <p className="text-center text-[11px] text-ink-muted font-semibold mt-6 tracking-wide">
          memorai · v0.1 · Powered by Claude
        </p>
      </div>
    </AppShell>
  );
}

function MenuRow({
  icon,
  label,
  desc,
  color,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
  color: string;
  href?: string;
}) {
  const Body = (
    <div className="flex items-center gap-3 p-3.5 bg-white rounded-[18px] border border-ink-line">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(145deg, ${color}, ${color}cc)`,
          boxShadow: `0 10px 18px -10px ${color}cc, inset 0 1px 0 rgba(255,255,255,0.3)`,
        }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-small font-extrabold text-ink-navy">{label}</p>
        <p className="text-[11px] text-ink-slate font-semibold">{desc}</p>
      </div>
      <ChevronRight />
    </div>
  );
  if (href) return <Link href={href}>{Body}</Link>;
  return <button className="w-full text-left">{Body}</button>;
}
