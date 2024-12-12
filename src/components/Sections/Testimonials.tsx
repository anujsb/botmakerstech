// "use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// export function Testimonials() {
//   return (
//     <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden my-10">
//       <div className="px-10  container mx-auto">
//         <h2 className="text-3xl text-gray-900 sm:text-4xl text-center mb-4 font-bold">
//           Success Stories
//         </h2>
//         {/* <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-600 ">
//           At BotMakers, we blend fun, learning, and cutting-edge technology to
//           inspire young minds and drive innovation.
//         </p> */}
//       </div>
//       <InfiniteMovingCards
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden pt-20">
      <div className="px-10  container mx-auto">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans">
          Testimonials{" "}
        </h2>
        <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-600 "></p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "BotMakers Pvt. Ltd. excels in making tech education engaging and accessible. Their innovative approach and passionate team create exceptional learning experiences. Collaborating with them has been rewarding, as they continue shaping future tech leaders with expertise and dedication",
    name: "RAHUL PATIL",
    title: "Founder & CEO of Sarus Aerospace PVT. LTD",
    href: "https://www.linkedin.com/in/rahulae8/",
    imageSrc: "/Rahul Patil.jpg",
  },
  {
    quote:
      "BotMakers Pvt. Ltd. and Robo PlayZone have an exceptional team driven by innovation and passion. Their ability to create immersive tech experiences through robotics and STEM education is truly commendable. Collaborating with such a talented team has been inspiring, as they consistently raise the bar in tech-driven learning and interactive entertainment.",
    name: "Jayesh Sonawane",
    title: "Founder Incquet Solutions",
    href: "https://www.linkedin.com/in/jayesh-sonawane-329762a2/",
    imageSrc: "/Jayesh Sonawane.png",
  },
  {
    quote:
      "As a parent, I see immense value in what BotMakers offer. Their hands-on robotics and tech-based learning programs go beyond traditional education, sparking creativity, problem-solving, and curiosity in young minds. It’s the perfect platform for future-ready learning, where kids can explore technology while having fun. Such initiatives are essential in shaping tomorrow’s innovators.",
    name: "Himanshu Maloo",
    title: "VP, Supply Chain Planning & Logistics",
    href: "https://www.linkedin.com/in/himanshu-maloo/",
    imageSrc: "/test1.jpeg",
  },
];

export default Testimonials;
