import { Header } from "@/components/Sections/Header";
import { Hero } from "@/components/Sections/Hero";
import { QuickLinks } from "@/components/Sections/QuickLinks";
import { Services } from "@/components/Sections/Services";
import { SuccessStories } from "@/components/Sections/SuccessStories";
import { WhyChooseUs } from "@/components/Sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      {/* <QuickLinks /> */}
      <Services />
      <WhyChooseUs />
      <SuccessStories />
    </div>
  );
}
