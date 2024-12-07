"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Robo Playzone", link: "/" },
    { name: "InnoTech Academy", link: "/" },
    { name: "Services", link: "/services" },
    
    {
      name: "Insights",
      link: "/insights",
    },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
