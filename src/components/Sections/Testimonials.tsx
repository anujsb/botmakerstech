import React from "react";
import Image from "next/image";
import Link from "next/link";

const testimonials1 = [
  {
    heading: "A Game Changer for Code Quality",
    content:
      "eacc.dev has transformed our code review process, catching errors we missed and speeding up our workflow.",
    name: "Jane Smith",
    role: "Software Engineer at TechCorp",
    href: "https://x.com/",
  },
  {
    heading: "Saves Time and Boosts Productivity",
    content:
      "With eacc.dev, our team spends less time on manual reviews and more time on innovative development.",
    name: "John Doe",
    role: "Lead Developer at Innovate",
    href: "https://x.com/",
  },
  {
    heading: "Effortless Integration & Results",
    content:
      "Integrating eacc.dev with our GitHub was seamless, and the immediate improvement in code quality was remarkable.",
    name: "John Doe",
    role: "CTO at FutureTech",
    href: "https://x.com/",
  },
];
const testimonials2 = [
  {
    heading: "A Game Changer for Code Quality",
    content:
      "eacc.dev has transformed our code review process, catching errors we missed and speeding up our workflow.",
    name: "Jane Smith",
    role: "Software Engineer at TechCorp",
    href: "https://x.com/",
  },
  {
    heading: "Saves Time and Boosts Productivity",
    content:
      "With eacc.dev, our team spends less time on manual reviews and more time on innovative development.",
    name: "John Doe",
    role: "Lead Developer at Innovate",
    href: "https://x.com/",
  },
  {
    heading: "Effortless Integration & Results",
    content:
      "Integrating eacc.dev with our GitHub was seamless, and the immediate improvement in code quality was remarkable.",
    name: "John Doe",
    role: "CTO at FutureTech",
    href: "https://x.com/",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div
      id="Testimonials"
      className="h-auto mx-4 lg:mx-40 my-16 lg:my-32 flex flex-col items-center justify-center"
    >
      <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Testimonials
        </h2>
        {/* <div> */}
        <div className="mt-10">
          <div className="relative m-auto w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider-forward slide-forward flex w-[calc(384px*10)]">
              {testimonials1.map((testimonial, index) => (
                <Link href={testimonial.href} key={`testimonial-${index}`}>
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {testimonials1.map((testimonial, index) => (
                <Link
                  href={testimonial.href}
                  key={`testimonial-duplicate-${index}`}
                >
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className=" mt-5 relative m-auto w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider-reverse slide-reverse flex w-[calc(384px*10)]">
              {testimonials2.map((testimonial, index) => (
                <Link href={testimonial.href} key={`testimonial-${index}`}>
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {testimonials2.map((testimonial, index) => (
                <Link
                  href={testimonial.href}
                  key={`testimonial-duplicate-${index}`}
                >
                  <div className="border rounded-2xl text-start w-96 mx-2">
                    <div className="bg-sec-col p-6 m-2 rounded-xl">
                      <Image
                        src="/testsvg.svg"
                        width={35}
                        height={35}
                        alt="learn more icon"
                        className="mr-1"
                      />
                      <h1 className="mt-4">{testimonial.heading}</h1>
                      <p className="text-dark-grey font-light mt-2">
                        {testimonial.content}
                      </p>
                      <div className="flex justify-between mt-4">
                        <div className="flex flex-col">
                          <h1>{testimonial.name}</h1>
                          <p className="text-dark-grey font-light">
                            {testimonial.role}
                          </p>
                        </div>
                        <Image
                          src="/x2.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="mx-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
