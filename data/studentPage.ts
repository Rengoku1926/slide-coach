// Import your icons (adjust path if needed)
import {
  Target,
  BarChart3,
  Presentation,
  BookOpen,
  MessageSquare,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";

// Define types
interface BenefitItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface HowItWorksItem {
  step: string;
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// Typed arrays
export const benefits: BenefitItem[] = [
  {
    icon: Target,
    title: "Tailored for Students",
    description:
      "Designed specifically for academic presentations, thesis defenses, and student projects with AI-powered feedback.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics",
    description:
      "Get detailed insights on your presentation performance, pacing, and areas for improvement with advanced AI analysis.",
  },
  {
    icon: Presentation,
    title: "Career-Ready Skills",
    description:
      "Build professional presentation skills that give you a competitive edge in interviews and your future career.",
  },
];

export const howItWorks: HowItWorksItem[] = [
  {
    step: "1",
    title: "Verify Student Status",
    description:
      "Connect your GitHub account to verify your GitHub Student Developer Pack eligibility instantly.",
  },
  {
    step: "2",
    title: "Upload & Practice",
    description:
      "Upload your presentation and start practicing with our AI coach providing real-time feedback.",
  },
  {
    step: "3",
    title: "Improve & Excel",
    description:
      "Use detailed analytics and suggestions to refine your presentation skills and build confidence.",
  },
];

export const faq: FaqItem[] = [
  {
    question: "Who is eligible for the GitHub Student offer?",
    answer:
      "Any student with an active GitHub Student Developer Pack can access Slide Coach with $200 in credits and premium features.",
  },
  {
    question: "How does the AI feedback work?",
    answer:
      "Our AI analyzes your presentation delivery, slide content, pacing, and provides actionable feedback to improve your performance.",
  },
  {
    question: "Is there a limit on presentations?",
    answer:
      "With your GitHub Student benefits, you get unlimited presentation analysis and practice sessions.",
  },
  {
    question: "Can I collaborate with classmates?",
    answer:
      "Yes, Slide Coach supports team presentations and group feedback sessions for collaborative projects.",
  },
];

export const features: FeatureItem[] = [
  {
    icon: BookOpen,
    title: "Smart Upload",
    description:
      "Upload PPT, PDF, or Google Slides. Our AI automatically analyzes your content structure and timing.",
  },
  {
    icon: MessageSquare,
    title: "AI Mock Sessions",
    description:
      "Practice with realistic mock presentations that simulate real audience interactions and Q&A sessions.",
  },
  {
    icon: Clock,
    title: "Real-time Coaching",
    description:
      "Get live feedback on pacing, filler words, and delivery while you practice your presentation.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Detailed reports on your presentation metrics with actionable insights for improvement.",
  },
  {
    icon: CheckCircle,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with comprehensive progress tracking and skill development.",
  },
  {
    icon: Users,
    title: "Peer Collaboration",
    description:
      "Share presentations with classmates and get feedback from both AI and your peers.",
  },
];
