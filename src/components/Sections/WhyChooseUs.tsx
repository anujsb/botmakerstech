import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Users,
  BotIcon as Robot,
  Globe,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const reasons = [
  { icon: Users, text: "Trusted by 50+ institutions" },
  { icon: Robot, text: "10+ years of expertise in robotics" },
  { icon: Globe, text: "Global collaborations" },
  { icon: BookOpen, text: "Holistic learning approach" },
];
export const WhyChooseUs = () => {
  return (
    <div className="bg-orange-50">
      <div className="px-10 py-10 container mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
      Why Choose Us</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
          At BotMakers, we blend fun, learning, and cutting-edge technology to
          inspire young minds and drive innovation.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index}>
              <div className="h-full hover:shadow-lg transition-shadow duration-300 rounded-xl border">
                <div className="flex flex-col items-center p-6 ">
                  <reason.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <p className="text-center font-semibold">{reason.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div key={index}>
              <div className="h-full hover:shadow-lg transition-shadow duration-300 rounded-xl border">
                <div className="flex flex-col items-center p-6">
                  <reason.icon className="w-12 h-12 text-orange-500 mb-4" />
                  <p className="text-center font-semibold">{reason.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
