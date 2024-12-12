import Image from "next/image";
import React from "react";

const associates = [
  { image: "/ass1.jpeg", text: "" },
  { image: "/ass2.jpeg", text: "" },
  { image: "/ass3.jpeg", text: "" },
  { image: "/ass4.jpeg", text: "" },
  { image: "/Technovanza VJTI.jpg", text: "" },
  {
    image: "/D.Y. Patil Education Society.jpg",
    text: "",
  },
];

const OurAssociates = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 font-sans">
        Our Association{" "}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center my-8">
        {associates.map((associate, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-2"
          >
            <div className="w-full max-w-[150px]">
              <Image
                src={associate.image}
                alt={associate.text}
                width={150}
                height={100}
                className="object-contain aspect-square"
                layout="responsive"
              />
            </div>
            <p className="text-sm font-medium">{associate.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAssociates;
