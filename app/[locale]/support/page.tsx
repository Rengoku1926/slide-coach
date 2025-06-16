"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
} from "lucide-react";
import { DotBackground } from "@/components/ui/dot-background";
import SupportComponent from "@/components/ui/support-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    profileLink: "",
    email: "",
    phone: "",
    query: "",
    agreeToPrivacy: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white ">
      <SupportComponent/>
      
      <DotBackground
        className="h-auto bg-gradient-to-br from-purple-50 via-white to-blue-50"
        dotColor="#d4d4d4"
        dotColorDark="#374151"
        dotSize="24px"
        maskIntensity="15%"
      >
        

        {/* Header Section */}
        <motion.div
          className="text-center py-16 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -3 }}
            animate={{ scale: 1, rotate: 2 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              rotate: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              },
            }}
            className="inline-block"
          >
            <Badge className="mb-4 bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact us
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get in touch with our team
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <p className="text-gray-600 text-lg mb-8">
                  Our team is highly dedicated to help you revolutionize
                  education with AI-powered tools.
                </p>
                <p className="text-gray-600 mb-8">
                  Just drop a &quot;hi&quot; through the form & our team will be
                  in touch with you within the same day to discuss how
                  CampusReady can transform your educational experience.
                </p>
              </div>

              {/* Contact Information */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#9081DC] to-[#628AC8] p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+49 15901366303</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#628AC8] to-[#9081DC] p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      HNU Founders Space, John-F.-Kennedy-Straße 7,
                      <br />
                      89231 Neu-Ulm, Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@campus-ready.com</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          placeholder="Full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className="border-gray-200 focus:border-[#9081DC] focus:ring-[#9081DC]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Institution/Organization
                        </label>
                        <Input
                          placeholder="Your university or organization"
                          value={formData.profileLink}
                          onChange={(e) =>
                            handleInputChange("profileLink", e.target.value)
                          }
                          className="border-gray-200 focus:border-[#9081DC] focus:ring-[#9081DC]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="border-gray-200 focus:border-[#9081DC] focus:ring-[#9081DC]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number (with country code)
                      </label>
                      <Input
                        placeholder="+1 (000) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="border-gray-200 focus:border-[#9081DC] focus:ring-[#9081DC]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How can we help you?
                      </label>
                      <Textarea
                        placeholder="Tell us about your educational needs, exam creation requirements, or how you'd like to implement AI in your institution..."
                        rows={4}
                        value={formData.query}
                        onChange={(e) =>
                          handleInputChange("query", e.target.value)
                        }
                        className="border-gray-200 focus:border-[#9081DC] focus:ring-[#9081DC] resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked) =>
                          handleInputChange(
                            "agreeToPrivacy",
                            checked as boolean
                          )
                        }
                      />
                      <label
                        htmlFor="privacy"
                        className="text-sm text-gray-600"
                      >
                        By reaching out to us, you agree to our{" "}
                        <span className="text-[#9081DC] hover:underline cursor-pointer">
                          Privacy Policy
                        </span>
                        .
                      </label>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] hover:shadow-lg text-white py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Additional Support Section */}
        <motion.div
          className="bg-transparent py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center text-gray-900 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              for other dedicated support
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="relative p-8 h-full border-0 shadow-lg overflow-hidden cursor-pointer">
                  {/* No expanding circle */}
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Partnership Inquiry
                      </h3>
                      <p className="text-gray-600 mb-4">
                        For institutional partnerships, bulk licensing, or
                        custom AI solutions for your educational organization.
                      </p>
                      <p className="font-semibold text-gray-900">
                        info@campus-ready.com
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                
              >
                <Card className="relative p-8 h-full border-0 shadow-lg overflow-hidden cursor-pointer">
                  {/* No expanding circle */}
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Product Demo
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Schedule a personalized demo to see how CampusReady can
                        transform your educational workflow.
                      </p>
                      <Button className="bg-gradient-to-r from-[#9081DC] via-[#628AC8] to-[#9081DC] text-white">
                        Schedule a Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </DotBackground>
    </div>
  );
}
