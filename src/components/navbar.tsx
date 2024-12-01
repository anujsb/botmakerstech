// import Link from "next/link"
// import { useState } from "react"
// import { Menu } from "lucide-react"
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"

// export function Navbar() {
//   const navItems = [
//     { name: "Home", href: "/" },
//     { name: "Robo Play Zone", href: "/robo-play-zone" },
//     { name: "Education", href: "/education" },
//     { name: "Insights", href: "/insights" },
//     { name: "About Us", href: "/about" },
//     { name: "Contact Us", href: "/contact" },
//   ]

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-gray">
//       <div className="container mx-auto px-4">
//         <div className="flex h-20 items-center justify-between">
//           <Link href="/" className="text-2xl font-bold text-white">
//             BOTMAKERS
//           </Link>
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-white hover:text-electric-blue transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" className="md:hidden text-white">
//                 <Menu className="h-6 w-6" />
//                 <span className="sr-only">Open menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-charcoal-gray">
//               <nav className="flex flex-col space-y-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className="text-white hover:text-electric-blue transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function Navbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Robo Play Zone", link: "/robo-play-zone" },
    { name: "Education", link: "/education" },
    { name: "Insights", link: "/insights" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
