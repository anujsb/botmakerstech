import CoreValue from "@/components/landing/core-values";
import { Hero } from "@/components/landing/Hero";
import { Highlights } from "@/components/landing/highlights";
import { QuickLinks } from "@/components/landing/quick-links";
import { SocialSidebar } from "@/components/landing/social-sidebar";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <SocialSidebar /> */}
      <QuickLinks />
      <Highlights />
      <CoreValue />
    </main>
  );
}
