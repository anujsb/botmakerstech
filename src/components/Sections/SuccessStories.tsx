// "use client";

// import React from "react";
// import { InfiniteMovingCardsImage } from "../ui/InfiniteMovingCardsImage";

// export function SuccessStories() {
//   return (
//     <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden pt-20">
//       <div className="px-10  container mx-auto">
//         <h2 className="text-3xl text-gray-900 sm:text-4xl text-center mb-4 font-bold">
//           Success Stories
//         </h2>
//         <p className="text-center text-lg mb-8 max-w-2xl mx-auto text-gray-600 "></p>
//       </div>
//       <InfiniteMovingCardsImage
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     image: "/stories1.jpg", // Replace with actual image URLs
//     title: "Expand",
//     description: "Sharing Knowledge.",
//   },
//   {
//     image: "/stories2.jpg",
//     title: "Workshops",
//     description: "Learn and grow",
//   },
//   {
//     image: "/stories3.jpg",
//     title: "Expos",
//     description: "Explore New Tech",
//   },
//   {
//     image: "/stories4.jpg",
//     title: "Moving Together",
//     description: "Team Collabration.",
//   },
//   {
//     image: "/stories5.jpeg",
//     title: "MoU - xmind China",
//     description: "Learn and grow",
//   },
//   {
//     image: "/stories6.jpeg",
//     title: "Taiwan robotic community",
//     description: "",
//   },
//   {
//     image: "/stories7.jpeg",
//     title: "Xmind China",
//     description: "",
//   },
//   {
//     image: "/stories8.jpeg",
//     title: "PromBot Russia",
//     description: "",
//   },
//   {
//     image: "/stories9.jpeg",
//     title: "Russian Minister",
//     description: "",
//   },
// ];


"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function SuccessStories() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Success Stories
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
          </div>
        );
      })}
    </>
  );
};

const data = [
  // {
  //   category: "Extra china.",
  //   title: "",
  //   src: "/Extra china.jpg",
  //   content: <DummyContent />,
  // },
  {
    category: "MoU Signed with PromBot, Russia.",
    title: "",
    src: "/success1.jpeg",
    content: <DummyContent />,
  },
  {
    category: "IT Indore Demo for Indian Armed Forces.",
    title: "",
    src: "/stories3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Team Orby, South Korea",
    title: "",
    src: "/stories4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Tech Event at VJTI Mumbai Campus",
    title: "",
    src: "/stories1.jpg",
    content: <DummyContent />,
  },
  {
    category: "Workshop at Sinhgad College,  Pune",
    title: "",
    src: "/stories2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Xmind MOU signed in China.",
    title: "",
    src: "/XMIND MOU.jpg",
    content: <DummyContent />,
  },
  {
    category: "Hangzhou Asian Games Techsport",
    title: "",
    src: "/Asian Games hangzou.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Russia's Digital Minister, Shadaev",
    title: "",
    src: "/successlast.jpeg",
    content: <DummyContent />,
  },
];
