"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0; // Fallback to 0 if undefined
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex justify-between sm:mx-5 md:mx-10 lg:mx-10 w-max-[1120px] fixed top-10 border border-transparent rounded-2xl bg-sec-col shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 py-2 items-center backdrop-blur-md backdrop-brightness-30",
            className
          )}
        >
          <div className="mr-3">
            <Image
              src="/logo-black.webp"
              width={100}
              height={70}
              alt="logo"
              className="rounded-lg"
            />
          </div>
          <div className="hidden sm:flex space-x-4 mx-20">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn("relative items-center flex space-x-4")}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <Link href="/createform">
            <Button className="mx-4 black-grad-radial shadow-inner border border-accent text-white font-semibold rounded-lg">
              Try For free
            </Button>
          </Link>
          <Button
            data-collapse-toggle="floating-navbar"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-sec-col hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="floating-navbar"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </Button>
        </motion.div>

        {/* Modal Drawer for Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-64 bg-white z-[6000] p-6 shadow-lg"
              >
                <button
                  onClick={closeMenu}
                  className="text-right text-gray-500 hover:text-gray-800 mb-6"
                >
                  Close
                </button>
                <div className="flex flex-col space-y-4">
                  {navItems.map((navItem, idx) => (
                    <Link
                      key={`mobile-link-${idx}`}
                      href={navItem.link}
                      className="text-gray-800 hover:text-black text-lg"
                      onClick={closeMenu}
                    >
                      {navItem.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-[5000]"
                onClick={closeMenu}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
};
