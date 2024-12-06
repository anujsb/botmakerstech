import { Contact } from "@/components/Sections/Contact";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import React from "react";

const page = () => {
  return (
    <div className="bg-orange-50">
      <Header />
      <div className="mt-10">
      <Contact />
      <Footer/>
      </div>
     
    </div>
  );
};

export default page;
