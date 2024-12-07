import Link from "next/link";
import { Rocket, Bot, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    title: "Robo Play Zone",
    description:
      "Hands-on robotics learning through interactive play and experimentation",
    icon: Bot,
    href: "#robo-play",
    image:"/logo.png",
  },
  {
    title: "InnoTech",
    description:
      "Explore cutting-edge technology and innovative solutions in robotics",
    icon: Rocket,
    href: "#innotech",
    image:"/favicon.ico",
  },
  // {
  //   title: "Competition",
  //   description:
  //     "Participate in exciting robotics competitions and showcase your skills",
  //   icon: Trophy,
  //   href: "#competition",
  // },
];

export const QuickLinks = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-orange-50 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* <h1 className="text-xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
            Play Learn & Innovate – with BotMakers
          </h1> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center justify-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-orange-50 rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div>
                    <div className="flex items-center  space-x-4 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg ">
                        <service.icon className="w-6 h-6 text-primary " />
                      </div>
                      <h3 className="text-xl font-bold ">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-justify">{service.description}</p>
                  </div>
                  <div>
                    <Image
                      src={service.image}
                      width={300}
                      height={300}
                      className=""
                      alt="linear board demo"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full text-white">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
