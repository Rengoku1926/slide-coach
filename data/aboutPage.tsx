import { GraduationCap, Award, Handshake, Clock, ShieldCheck, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

interface ValueItem {
  title: string;
  description: string;
  icon: ReactNode;
  textColor: string;
}

export const items: ValueItem[] = [
  {
    title: "Student-Centric Focus",
    description:
      "We put students at the heart of every decision. By listening to their needs and feedback, we design tools that support learning styles, adapt to individual pacing, and make studying more engaging and effective.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <GraduationCap className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
  {
    title: "Uncompromising Quality",
    description:
      "Our products meet the highest standards of reliability, security, and user experience. From rigorous testing to continuous improvement, we ensure every feature works flawlessly and delivers real value to learners and educators alike.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <Award className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
  {
    title: "Ownership & Accountability",
    description:
      "Each team member takes full responsibility for their work. When we commit to a deadline or promise a feature, we follow through—communicating clearly and solving challenges proactively to earn trust.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <Handshake className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
  {
    title: "Punctuality & Reliability",
    description:
      "Timely updates and smooth operations are non-negotiable. We maintain a stable platform, release improvements on schedule, and provide consistent support so users can rely on us at every step of their learning journey.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <Clock className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
  {
    title: "Integrity Above All",
    description:
      "Honest, ethical behavior guides everything we do. We protect academic integrity by securing assessments, safeguarding user data, and ensuring fairness in all our AI-driven evaluations.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <ShieldCheck className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
  {
    title: "Innovation for Impact",
    description:
      "We embrace cutting-edge technology to create smarter, more efficient learning experiences. By continuously researching and integrating new AI methods, we empower students to think critically, not just memorize facts.",
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
        <Lightbulb className="h-8 w-8" />
      </div>
    ),
    textColor: "bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] bg-clip-text text-transparent",
  },
];
