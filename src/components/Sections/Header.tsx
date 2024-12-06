"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Robo Playzone", link: "/" },
    { name: "InnoTech Academy", link: "/" },
    { name: "Services", link: "/" },
    
    {
      name: "Insights",
      link: "/",
    },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/about" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
