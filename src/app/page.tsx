import { Contact } from "@/components/Sections/Contact";
import { Faq } from "@/components/Sections/Faq";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import { Header2 } from "@/components/Sections/Header2";
import { Hero } from "@/components/Sections/Hero";
import OurAssociates from "@/components/Sections/OurAssociates";
import { QuickLinks } from "@/components/Sections/QuickLinks";
import { Services } from "@/components/Sections/Services";
import { SuccessStories } from "@/components/Sections/SuccessStories";
import { Testimonials } from "@/components/Sections/Testimonials";
import { WhyChooseUs } from "@/components/Sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="text-center">
      {/* <Header /> */}
      <Header2 />
      <Hero />
      <QuickLinks />
      {/* <Services /> */}
      <WhyChooseUs />
      <SuccessStories />
      <Testimonials />
      <OurAssociates />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
