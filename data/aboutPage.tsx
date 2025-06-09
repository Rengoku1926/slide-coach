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
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <GraduationCap className="h-8 w-8" />
      </div>
    ),
    textColor: "text-blue-400",
  },
  {
    title: "Uncompromising Quality",
    description:
      "Our products meet the highest standards of reliability, security, and user experience. From rigorous testing to continuous improvement, we ensure every feature works flawlessly and delivers real value to learners and educators alike.",
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
        <Award className="h-8 w-8" />
      </div>
    ),
    textColor: "text-green-400",
  },
  {
    title: "Ownership & Accountability",
    description:
      "Each team member takes full responsibility for their work. When we commit to a deadline or promise a feature, we follow through—communicating clearly and solving challenges proactively to earn trust.",
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
        <Handshake className="h-8 w-8" />
      </div>
    ),
    textColor: "text-purple-400",
  },
  {
    title: "Punctuality & Reliability",
    description:
      "Timely updates and smooth operations are non-negotiable. We maintain a stable platform, release improvements on schedule, and provide consistent support so users can rely on us at every step of their learning journey.",
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
        <Clock className="h-8 w-8" />
      </div>
    ),
    textColor: "text-yellow-400",
  },
  {
    title: "Integrity Above All",
    description:
      "Honest, ethical behavior guides everything we do. We protect academic integrity by securing assessments, safeguarding user data, and ensuring fairness in all our AI-driven evaluations.",
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
        <ShieldCheck className="h-8 w-8" />
      </div>
    ),
    textColor: "text-red-400",
  },
  {
    title: "Innovation for Impact",
    description:
      "We embrace cutting-edge technology to create smarter, more efficient learning experiences. By continuously researching and integrating new AI methods, we empower students to think critically, not just memorize facts.",
    icon: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
        <Lightbulb className="h-8 w-8" />
      </div>
    ),
    textColor: "text-teal-400",
  },
];
