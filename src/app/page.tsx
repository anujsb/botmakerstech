import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { QuickLinks } from "@/components/Sections/QuickLinks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <QuickLinks />
    </div>
  );
}
