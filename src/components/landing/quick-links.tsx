// import Link from "next/link"

// const links = [
//   { name: "Programs", href: "/programs" },
//   { name: "Events", href: "/events" },
//   { name: "Volunteer", href: "/volunteer" },
//   { name: "Connect", href: "/connect" },
//   { name: "International MOUs", href: "/international-mous" },
// ]

// export function QuickLinks() {
//   return (
//     <div className="bg-white py-12">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-charcoal-gray mb-8 text-center">Quick Links</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="bg-electric-blue hover:bg-vibrant-orange text-white px-6 py-3 rounded-full transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function QuickLinks() {
  const links = [
    {
      title: "Programs",
      icon: <IconHome className="h-full w-full text-neutral-500 " />,
      href: "#",
    },

    {
      title: "Events",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 " />,
      href: "#",
    },
    {
      title: "Volunteer",
      icon: <IconNewSection className="h-full w-full text-neutral-500 " />,
      href: "#",
    },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <Image
    //       src="/favicon.ico"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: "#",
    // },
    {
      title: "Connect",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "International MOUs",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center my-20 w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
// Programs, Events, Volunteer, Connect, International MOUs