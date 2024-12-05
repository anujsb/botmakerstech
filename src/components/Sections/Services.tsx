"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Robo Play Zone",
    description: "Hands-on robotics learning through interactive play and experimentation",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    href: "#robo-play",
  },
  {
    title: "InnoTech",
    description: "Explore cutting-edge technology and innovative solutions in robotics",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/favicon.ico"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    href: "#robo-play",
  },
  {
    title: "Competition",
    description: "Participate in exciting robotics competitions and showcase your skills",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    href: "#robo-play",
  },
];
export function Services() {
  return (
    <div className="p-10 py-10 bg-gradient-to-b from-background to-orange-50">
      <StickyScroll content={content} />
    </div>
  );
}
