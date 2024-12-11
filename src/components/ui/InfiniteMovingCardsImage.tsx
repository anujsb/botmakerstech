"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCardsImage = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    alt?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          // <li
          //   className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 overflow-hidden md:w-[450px] h-[400px]"
          //   key={item.title}
          // >
          //   <div
          //     className="absolute inset-0 z-0 bg-cover bg-center h-full"
          //     style={{
          //       backgroundImage: `url(${item.image})`,
          //       // filter: 'brightness()'
          //     }}
          //   />
          //   <div className="z-10 p-6 bg-background/50 backdrop-blur-sm">
          //     <h3 className="text-xl text-gray-900 text-center mb-4 font-semibold">
          //       {item.title}
          //     </h3>
          //     <p className="text-center text-gray-800">{item.description}</p>
          //   </div>
          // </li>

          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 overflow-hidden md:w-[450px] h-[400px]"
            key={item.title}
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center h-full"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-background/50 backdrop-blur-sm">
              <h3 className="text-xl text-black text-center mb-2 font-semibold">
                {item.title}
              </h3>
              <p className="text-center text-black/90">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
