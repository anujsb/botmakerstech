import Contact2 from "@/components/Contact2";
// import Contact from "@/components/Sections/Contact";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import { Header2 } from "@/components/Sections/Header2";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Header2 />
      <div className="mt-10">
        {/* <Contact /> */}
        <Contact2 />
        <Footer />
      </div>
    </div>
  );
};

export default page;
