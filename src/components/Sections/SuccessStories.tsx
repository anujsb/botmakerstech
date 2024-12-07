// import React from 'react'

// export const SuccessStories = () => {
//   return (
//     <div>

//     </div>
//   )
// }

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function SuccessStories() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="bg-background">
      <div className="w-full h-full py-20 container mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Success Stories
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="p-8 md:p-14 rounded-3xl mb-4 bg-red-300"
//           >
//             <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 ">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             {/* <Image
//               src="/favicon.ico"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             /> */}
//           </div>
//         );
//       })}
//     </>
//   );
// };

const data = [
  {
    category: "National Robotics Championship",
    title: "Our team won first place in the advanced category",
    src: "/stories1.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "International AI Conference",
    title: "BotMakers presented innovative ML algorithms",
    src: "/stories2.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "STEM Education Expo",
    title: "Showcased our comprehensive learning programs",
    src: "/stories3.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "National Robotics Championship",
    title: "Our team won first place in the advanced category",
    src: "/stories4.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "National Robotics Championship",
    title: "Our team won first place in the advanced category",
    src: "/stories1.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "International AI Conference",
    title: "BotMakers presented innovative ML algorithms",
    src: "/stories2.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "STEM Education Expo",
    title: "Showcased our comprehensive learning programs",
    src: "/stories3.jpg",
    content: <div>more descriptions</div>,
  },
  {
    category: "National Robotics Championship",
    title: "Our team won first place in the advanced category",
    src: "/stories4.jpg",
    content: <div>more descriptions</div>,
  },
];
