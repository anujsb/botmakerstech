"use client";

import React from "react";
import { InfiniteMovingCardsImage } from "../ui/InfiniteMovingCardsImage";

export function SuccessStories() {
  return (
    <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden pt-20">
      <div className="px-10  container mx-auto">
        <h2 className="text-3xl text-gray-900 sm:text-4xl text-center mb-4 font-bold">
          Success Stories
        </h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-600 "></p>
      </div>
      <InfiniteMovingCardsImage
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "/stories1.jpg", // Replace with actual image URLs
    title: "Expand",
    description: "Sharing Knowledge.",
  },
  {
    image: "/stories2.jpg",
    title: "Workshops",
    description: "Learn and grow",
  },
  {
    image: "/stories3.jpg",
    title: "Expos",
    description: "Explore New Tech",
  },
  {
    image: "/stories4.jpg",
    title: "Moving Together",
    description: "Team Collabration.",
  },
  {
    image: "/stories5.jpeg",
    title: "MoU - xmind China",
    description: "Learn and grow",
  },
  {
    image: "/stories6.jpeg",
    title: "Taiwan robotic community",
    description: "",
  },
  {
    image: "/stories7.jpeg",
    title: "Xmind China",
    description: "",
  },
  {
    image: "/stories8.jpeg",
    title: "PromBot Russia",
    description: "",
  },
  {
    image: "/stories9.jpeg",
    title: "Russian Minister",
    description: "",
  },
];
