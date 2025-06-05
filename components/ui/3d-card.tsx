"use client";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-demo";
import {
  Bot,
  Presentation,
  Mic,
  GraduationCap,
  Sparkles,
  Users,
  Clock,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function AICampusCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-white to-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#9081DC]/[0.2] border-[#9081DC]/20 w-auto sm:w-[38rem] h-auto rounded-xl p-8 border-2 overflow-hidden shadow-lg">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border border-[#9081DC] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-[#628AC8] rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-[#9081DC] rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Header with Company Logo */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <CardItem translateZ={50} className="flex items-center gap-3">
            <div className="relative p-2 bg-gradient-to-br from-[#9081DC] to-[#628AC8] rounded-lg">
              <Bot className="w-6 h-6 text-white" />
              <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
                CampusAI Pro
              </h2>
              <p className="text-[#628AC8] text-sm font-medium">
                Smart Learning Platform
              </p>
            </div>
          </CardItem>
          <CardItem translateZ={40}>
            <div className="p-2 bg-gradient-to-br from-[#628AC8] to-[#9081DC] rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </CardItem>
        </div>

        {/* Profile Section */}
        <CardItem
          translateZ={100}
          className="flex items-center gap-4 mb-6 relative z-10"
        >
          <div className="relative">
            <Image
              src="/testImg.png"
              height={80}
              width={80}
              className="rounded-full  group-hover/card:shadow-xl group-hover/card:shadow-[#9081DC]/20"
              alt="Student Avatar"
              style={{
                borderImage: "linear-gradient(45deg, #9081DC, #628AC8) 1",
              }}
              unoptimized
            />

            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[#9081DC] to-[#628AC8] w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <CardItem
              translateZ={60}
              className="text-2xl font-bold text-gray-800"
            >
              Alex Chen
            </CardItem>
            <CardItem translateZ={50} className="text-gray-600 text-sm">
              Computer Science • Junior
            </CardItem>
            <CardItem
              translateZ={40}
              className="text-[#628AC8] text-sm font-medium"
            >
              Stanford University
            </CardItem>
          </div>
        </CardItem>

        {/* AI Tools Section */}
        <CardItem
          translateZ={80}
          className="bg-gradient-to-r from-[#9081DC]/10 to-[#628AC8]/10 backdrop-blur-sm rounded-lg p-4 mb-6 relative z-10 border border-[#9081DC]/20"
        >
          <h3 className="text-gray-800 font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#9081DC]" />
            AI Assistant Tools
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Presentation className="w-4 h-4 text-[#628AC8]" />
              Smart Presentations
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Mic className="w-4 h-4 text-[#9081DC]" />
              Oral Exam Prep
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Bot className="w-4 h-4 text-[#628AC8]" />
              AI Tutor Chat
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Award className="w-4 h-4 text-[#9081DC]" />
              Performance Analytics
            </div>
          </div>
        </CardItem>

        {/* Usage Stats */}
        <CardItem
          translateZ={60}
          className="flex justify-between items-center mb-6 relative z-10"
        >
          <div className="text-center p-3 bg-gradient-to-br from-[#9081DC]/5 to-[#628AC8]/5 rounded-lg">
            <div className="text-2xl font-bold text-[#9081DC]">47</div>
            <div className="text-gray-600 text-xs flex items-center gap-1 justify-center">
              <Presentation className="w-3 h-3" />
              Presentations
            </div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-[#628AC8]/5 to-[#9081DC]/5 rounded-lg">
            <div className="text-2xl font-bold text-[#628AC8]">23</div>
            <div className="text-gray-600 text-xs flex items-center gap-1 justify-center">
              <Mic className="w-3 h-3" />
              Oral Exams
            </div>
          </div>
          <div className="text-center p-3 bg-gradient-to-br from-[#9081DC]/5 to-[#628AC8]/5 rounded-lg">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#9081DC] to-[#628AC8] bg-clip-text text-transparent">
              156
            </div>
            <div className="text-gray-600 text-xs flex items-center gap-1 justify-center">
              <Clock className="w-3 h-3" />
              Hours Saved
            </div>
          </div>
        </CardItem>

        {/* Subscription Status */}
        <CardItem
          translateZ={70}
          className="bg-gradient-to-r from-[#9081DC]/10 to-[#628AC8]/10 rounded-lg p-3 mb-6 relative z-10 border border-[#9081DC]/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-800 font-medium text-sm">
                Premium Student Plan
              </div>
              <div className="text-[#628AC8] text-xs">
                Active until Dec 2024
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-gradient-to-r from-[#9081DC] to-[#628AC8] rounded-full animate-pulse"></div>
              <span className="text-[#9081DC] text-xs font-medium">ACTIVE</span>
            </div>
          </div>
        </CardItem>

        {/* Footer Actions */}
        <div className="flex justify-between items-center relative z-10">
          <CardItem
            translateZ={20}
            
            className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#9081DC]/5 hover:to-[#628AC8]/5"
          >
            <Users className="w-4 h-4" />
            Study Groups →
          </CardItem>
          <CardItem
            translateZ={20}
            
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#9081DC] to-[#628AC8] hover:from-[#9081DC]/90 hover:to-[#628AC8]/90 text-white text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-[#9081DC]/25"
          >
            Launch AI Assistant
          </CardItem>
        </div>

        {/* Student ID */}
        <CardItem
          translateZ={30}
          className="absolute top-4 right-4 text-xs text-gray-500 font-mono"
        >
          ID: CAI-2024-SC-7829
        </CardItem>

        {/* Holographic AI effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9081DC]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#9081DC] rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#628AC8] rounded-full opacity-60 animate-ping delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#9081DC] rounded-full opacity-60 animate-ping delay-1000"></div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
