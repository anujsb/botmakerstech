import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/button";
import Video from "./Video";
import Link from "next/link";

export const Hero = () => {
  return (
    <div>
      <LampContainer className="">
      <Video />
        <h1
          // initial={{ opacity: 0.5, y: 100 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{
          //   delay: 0.3,
          //   duration: 0.8,
          //   ease: "easeInOut",
          // }}
          className="mt-2 bg-gradient-to-br from-slate-500 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {/* Build lamps <br /> the right way */}
          Building India’s Future <br /> with Robotics
        </h1>
        <p className="text-center mt-6">
          Join us in shaping the future of technology through education, <br />
          innovation, and collaboration.
        </p>
        <div className="flex mt-6 gap-4 items-center justify-center">
          <Link href="/contact">
          <Button variant="default" className="text-white font-semibold">
            Know More
          </Button>
          </Link>
          {/* <p>Explore Programs</p> */}
        </div>
      </LampContainer>
      

    </div>
  );
};
