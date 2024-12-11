"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header2() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all md:px-10 px-2",
        isScrolled && "bg-background/50 backdrop-blur-md"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <span className="text-xl font-bold">BOTMAKERS</span> */}
          <Image
            src="/logo-black.webp"
            width={100}
            height={70}
            alt="logo"
            className="rounded-lg"
          />
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <NavLinks />
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="hidden bg-[#F26D3D] text-white hover:bg-[#E25D2D] md:inline-flex">
            Contact Us
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16">
              <nav className="flex flex-col space-y-4 justify-between h-full">
                <div className="flex flex-col space-y-4">
                  <NavLinks />
                  <Button className="bg-[#F26D3D] text-white hover:bg-[#E25D2D]">
                    Contact Us
                  </Button>
                </div>
                <div className="flex justify-end items-end">
                  <Image
                    src="/favicon.ico"
                    alt="logo"
                    width="100"
                    height="100"
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        href="/"
        className="font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <Link
        href="/robo-playzone"
        className="font-medium transition-colors hover:text-primary"
      >
        Robo Playzone
      </Link>
      <Link
        href="/innotech-academy"
        className="font-medium transition-colors hover:text-primary"
      >
        InnoTech Academy
      </Link>
      <Link
        href="/services"
        className="font-medium transition-colors hover:text-primary"
      >
        Services
      </Link>
      <Link
        href="/insights"
        className="font-medium transition-colors hover:text-primary"
      >
        Insights
      </Link>
      <Link
        href="/about"
        className="font-medium transition-colors hover:text-primary"
      >
        About Us
      </Link>
    </>
  );
}
