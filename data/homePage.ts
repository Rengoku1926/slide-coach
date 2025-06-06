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
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location.",
  },
  {
    id: 3,
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. All international orders may be subject to customs duties and taxes.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's tracking page.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay for your convenience.",
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