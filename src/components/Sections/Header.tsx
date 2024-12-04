"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Features", link: "/#features" },
    { name: "About Us", link: "https://21bubbles.com/" },
    {
      name: "Contact Us",
      link: "https://cal.com/anuj-bhuyar-gj0xf3/21bubbles-contact?date=2024-10-30&month=2024-10",
    },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
