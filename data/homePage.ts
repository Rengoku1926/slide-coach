import {
  Upload,
  Video,
  MessageCircle,
  CheckCircle2,
  Clock,
  User,
} from "lucide-react";

export const faqData = [
  {
    id: 1,
    question: " What is Slide Coach ?",
    answer:
      "Slide Coach is an AI-powered presentation practice tool that allows students to rehearse presentations with virtual avatars of professors, receive feedback, and improve their presentation skills.",
  },
  {
    id: 2,
    question: "How does Slide Coach work ?",
    answer:
      "You upload your presentation (PDF or PPT), set your presentation time, select a virtual professor avatar, choose which slides to present, and then practice your presentation. After presenting, you'll enter a Q&A session with the AI avatar and finally receive detailed feedback.",
  },
  {
    id: 3,
    question: "What file formats does Slide Coach support ?",
    answer:
      "Slide Coach supports PDF and PowerPoint (PPT) presentation formats .",
  },
  {
    id: 4,
    question: "How do I begin using Slide Coach ?",
    answer:
      "Upload your presentation, enter your expected presentation time, select your preferred professor avatar, choose which slides you want to practice with, and click Start Presentation to begin.",
  },
  {
    id: 5,
    question: "Can I choose which slides to present ?",
    answer:
      "Yes, Slide Coach allows you to select specific slides from your uploaded presentation to practice with .",
  },
]

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Upload,
    title: "Slide Upload & Setup",
    description:
      "Easily upload your PPT or PDF and set your speaking duration so Slide-Coach knows how to simulate your real presentation.",
  },
  {
    icon: Video,
    title: "AI-Powered Mock Session",
    description:
      "Practice your presentation slide-by-slide. The AI times you, guides you, and creates a real-world mock environment.",
  },
  {
    icon: MessageCircle,
    title: "Interactive AI Q&A",
    description:
      "After presenting, engage in an AI-led Q&A based on your slides—get asked context-aware questions just like a live audience.",
  },
  {
    icon: Clock,
    title: "Real-Time Timing Feedback",
    description:
      "Receive live pacing data during practice. Know if you’re ahead, behind, or right on track to finish on time.",
  },
  {
    icon: CheckCircle2,
    title: "Comprehensive AI Feedback",
    description:
      "Get detailed insights on pronunciation, filler words, clarity, and slide engagement so you know exactly where to improve.",
  },
  {
    icon: User,
    title: "Ideal for Any Presenter",
    description:
      "Whether you’re a student defending a thesis, a job candidate in an interview, or a professional pitching a client, Slide-Coach has you covered.",
  },
];