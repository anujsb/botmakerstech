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
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-600 ">
        </p>
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
    title: "Literary Classic",
    description:
      "A sweeping narrative of two cities during the French Revolution, exploring themes of sacrifice, redemption, and social injustice.",
  },
  {
    image: "/stories2.jpg",
    title: "Shakespearean Tragedy",
    description:
      "A profound exploration of existential crisis, mental anguish, and the human condition through the lens of a Danish prince's inner turmoil.",
  },
  {
    image: "/stories3.jpg",
    title: "Poetic Reflection",
    description:
      "A mesmerizing poem that delves into the ephemeral nature of reality, blurring the lines between perception and illusion.",
  },
  {
    image: "/stories4.jpg",
    title: "Romantic Social Commentary",
    description:
      "A witty and insightful novel that critiques the marriage customs and social expectations of early 19th-century English society.",
  },
  {
    image: "/stories2.jpg",
    title: "Epic of the Sea",
    description:
      "A groundbreaking novel that follows the obsessive quest of Captain Ahab, revealing the depths of human ambition and the raw power of nature.",
  },
];
