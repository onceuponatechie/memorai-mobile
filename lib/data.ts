import type { Course } from "@/components/CourseCard";

const p = (id: number) => `https://i.pravatar.cc/240?img=${id}`;

export const avatars: Record<string, string> = {
  Essy: p(47),
  Amaka: p(49),
  Tolu: p(13),
  Bolu: p(33),
  Chidi: p(60),
  Nnamdi: p(15),
  Zara: p(19),
  Rai: "",
  Trainer: p(5),
};

export const avatarFor = (name: string) => {
  const key = name.split(" ")[0];
  return avatars[key] ?? `https://i.pravatar.cc/240?u=${encodeURIComponent(name)}`;
};

export const currentUser = {
  firstName: "Essy",
  fullName: "Esther Udeme Okon",
  handle: "essy_reads",
  room: "Mass Communication Room",
  roomShort: "Mass Comm 300L",
  institution: "University of Lagos",
  friendsCount: 12,
  avatar: avatars.Essy,
};

export const courses: Course[] = [
  {
    id: "mas-312",
    code: "MAS 312",
    title: "Advertising Media Planning",
    participants: ["Essy", "Amaka", "Tolu"],
    accent: "#ff6f61",
    accentDeep: "#d94a3d",
    accentText: "#ffffff",
    icon: "megaphone",
    progress: 62,
    lessons: 22,
  },
  {
    id: "mas-314",
    code: "MAS 314",
    title: "Public Relations",
    participants: ["Essy"],
    accent: "#ffd166",
    accentDeep: "#d9a42a",
    accentText: "#0f1a3d",
    icon: "newspaper",
    progress: 38,
    lessons: 18,
  },
  {
    id: "mas-308",
    code: "MAS 308",
    title: "Broadcast Production",
    participants: ["Essy", "Bolu", "Rai"],
    accent: "#8b7cf6",
    accentDeep: "#6b57d9",
    accentText: "#ffffff",
    icon: "mic",
    progress: 74,
    lessons: 24,
  },
  {
    id: "mas-310",
    code: "MAS 310",
    title: "Media Law & Ethics",
    participants: ["Essy", "Rai"],
    accent: "#3dd598",
    accentDeep: "#17a878",
    accentText: "#0f1a3d",
    icon: "scales",
    progress: 21,
    lessons: 16,
  },
];

export const recentQuizzes = [
  { id: "q1", course: "MAS 312", title: "Media Planning Basics", score: 8, total: 10, accent: "#ff6f61" },
  { id: "q2", course: "MAS 308", title: "Studio Audio Techniques", score: 7, total: 10, accent: "#8b7cf6" },
  { id: "q3", course: "MAS 314", title: "Crisis Communication", score: 9, total: 10, accent: "#ffd166" },
  { id: "q4", course: "MAS 310", title: "Libel & Defamation", score: 5, total: 10, accent: "#3dd598" },
];

export type ActivityIcon = "upload" | "target" | "wave" | "sparkle" | "flame" | "folder";

export const activity: { id: string; icon: ActivityIcon; text: string; time: string; color: string }[] = [
  { id: "a1", icon: "upload", text: "Amaka uploaded 'Chapter 4 Notes' to MAS 312", time: "2h ago", color: "#8b7cf6" },
  { id: "a2", icon: "target", text: "You scored 8/10 on Media Planning quiz", time: "5h ago", color: "#ff6f61" },
  { id: "a3", icon: "wave", text: "Tolu invited you to a study session", time: "Yesterday", color: "#62c4ff" },
  { id: "a4", icon: "sparkle", text: "Rai generated flashcards for MAS 308", time: "Yesterday", color: "#3d7de8" },
  { id: "a5", icon: "flame", text: "You hit a 4-day study streak", time: "2 days ago", color: "#ff6f61" },
  { id: "a6", icon: "folder", text: "New resource: 'PR Case Studies' in MAS 314", time: "3 days ago", color: "#ffb066" },
];

export type NotifIcon = "flame" | "megaphone" | "target" | "sparkle";
export const notifications: {
  id: string;
  icon: NotifIcon;
  title: string;
  body: string;
  time: string;
  accent: string;
  iconColor: string;
}[] = [
  {
    id: "n1",
    icon: "flame",
    title: "Keep your streak alive",
    body: "You've studied 4 days in a row — 20 mins to keep it going.",
    time: "10m",
    accent: "#fff1db",
    iconColor: "#e08a00",
  },
  {
    id: "n2",
    icon: "megaphone",
    title: "Amaka mentioned you",
    body: "'@essy check this chapter 4 summary Rai made 🤯'",
    time: "1h",
    accent: "#ffe1dc",
    iconColor: "#d94a3d",
  },
  {
    id: "n3",
    icon: "target",
    title: "Quiz ready",
    body: "Rai prepared a 10-Q quiz on Broadcast Production.",
    time: "3h",
    accent: "#ede9ff",
    iconColor: "#6b57d9",
  },
];

export const courseResources: Record<string, { name: string; size: string }[]> = {
  "mas-312": [
    { name: "Ch.4 — Media Planning Frameworks.pdf", size: "2.1 MB" },
    { name: "Lecture 7 — Reach & Frequency.pdf", size: "1.4 MB" },
    { name: "Case Study — Coca-Cola 2023.pdf", size: "3.8 MB" },
  ],
  "mas-314": [
    { name: "Crisis Comm Playbook.pdf", size: "2.7 MB" },
    { name: "PR Tools Overview.pdf", size: "1.1 MB" },
  ],
  "mas-308": [
    { name: "Studio Audio Basics.pdf", size: "4.2 MB" },
    { name: "Camera Blocking Notes.pdf", size: "1.9 MB" },
  ],
  "mas-310": [
    { name: "Nigerian Media Act — Primer.pdf", size: "2.0 MB" },
  ],
};

export const friends = [
  { name: "Amaka Obi", handle: "amaka", status: "online", course: "MAS 312" },
  { name: "Tolu Adeyemi", handle: "tolu_a", status: "online", course: "MAS 308" },
  { name: "Bolu Kareem", handle: "bolu.k", status: "offline", course: "MAS 308" },
  { name: "Chidi Eze", handle: "chidi", status: "online", course: "MAS 310" },
  { name: "Nnamdi Oko", handle: "nnamdi", status: "offline", course: "MAS 314" },
  { name: "Zara Idris", handle: "zara", status: "online", course: "MAS 312" },
];

export const leaderboard = [
  { name: "Tolu", xp: 2410, rank: 1 },
  { name: "Amaka", xp: 2180, rank: 2 },
  { name: "Essy", xp: 1920, rank: 3, you: true },
  { name: "Bolu", xp: 1650, rank: 4 },
  { name: "Zara", xp: 1420, rank: 5 },
];

export type AchievementIcon = "medal" | "flame" | "handshake" | "brain";
export const achievements: {
  t: string;
  icon: AchievementIcon;
  earned: boolean;
  color: string;
}[] = [
  { t: "First Quiz", icon: "medal", earned: true, color: "#ffd166" },
  { t: "3-Day Streak", icon: "flame", earned: true, color: "#ff6f61" },
  { t: "Team Player", icon: "handshake", earned: true, color: "#8b7cf6" },
  { t: "Quiz Master", icon: "brain", earned: false, color: "#62c4ff" },
];
