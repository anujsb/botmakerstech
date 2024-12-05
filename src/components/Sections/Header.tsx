"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Robo Playzone", link: "/#about" },
    { name: "InnoTech Academy", link: "/#features" },
    { name: "Services", link: "https://21bubbles.com/" },
    
    {
      name: "Insights",
      link: "https://cal.com/anuj-bhuyar-gj0xf3/21bubbles-contact?date=2024-10-30&month=2024-10",
    },
    { name: "About Us", link: "https://21bubbles.com/" },
    { name: "Contact Us", link: "https://21bubbles.com/" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
