// import Link from "next/link";
// import { Rocket, Bot, Trophy } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import Image from "next/image";

// const services = [
//   {
//     title: "Robo Play Zone",
//     description:
//       "Robotics Play Zone is designed to captivate and engage attendees of all ages, from grandchildren to grandparents, with offline, less screen-based entertainment. Our games are developed to be interactive, educational, and entertaining, embodying our tagline: Play, Learn, Innovate.",
//     // icon: Bot,
//     href: "#robo-play",
//     image:"/robo_logo.png",
//   },
//   {
//     title: "InnoTech",
//     description:
//       "workshops are designed to inspire, educate, and entertain. Whether you’re a student in school or college, our workshops provide an engaging and hands-on learning experience that blends fun with practical knowledge. Our tagline, “Play, Learn, Innovate,” captures the essence of what we aim to deliver.",
//     icon: Rocket,
//     href: "#innotech",
//     image:"/inno.jpeg",
//   },
//   // {
//   //   title: "Competition",
//   //   description:
//   //     "Participate in exciting robotics competitions and showcase your skills",
//   //   icon: Trophy,
//   //   href: "#competition",
//   // },
// ];

// export const QuickLinks = () => {
//   return (
//     <section className="w-full my-8  flex items-center justify-center">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           {/* <h1 className="text-xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
//             Play Learn & Innovate – with BotMakers
//           </h1> */}
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center justify-center">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-orange-50 rounded-2xl"
//             >
//               <CardContent className="p-6">
//                 <div className="flex gap-4">
//                   <div>
//                     <div className="flex items-center  space-x-4 mb-4">
//                       {/* <div className="p-2 bg-blue-100 rounded-lg ">
//                         <service.icon className="w-6 h-6 text-primary " />
//                       </div> */}
//                       <h3 className="text-3xl font-bold ">{service.title}</h3>
//                     </div>
//                     <p className="text-gray-600 text-justify">{service.description}</p>
//                   </div>
//                   <div className="">
//                     <Image
//                       src={service.image}
//                       width={300}
//                       height={300}
//                       className=""
//                       alt="linear board demo w-full"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter className="p-6 pt-0">
//                 <Button asChild className="w-full text-white">
//                   <Link href={service.href}>Learn More</Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import Link from "next/link";
import { Rocket } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const services = [
  {
    title: "Robo Play Zone",
    description:
      "Robotics Play Zone is designed to captivate and engage attendees of all ages, from grandchildren to grandparents, with offline, less screen-based entertainment. Our games are developed to be interactive, educational, and entertaining, embodying our tagline: Play, Learn, Innovate.",
    href: "/robo-playzone",
    image: "/robo_logo.png",
  },
  {
    title: "InnoTech",
    description:
      "Workshops are designed to inspire, educate, and entertain. Whether you're a student in school or college, our workshops provide an engaging and hands-on learning experience that blends fun with practical knowledge. Our tagline, 'Play, Learn, Innovate,' captures the essence of what we aim to deliver.",
    href: "/innotech-academy",
    image: "/inno.jpeg",
  },
];

export const QuickLinks = () => {
  return (
    <section className="w-full my-8 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center justify-center">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-orange-50 rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-grow">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-justify mb-4">{service.description}</p>
                  </div>
                  <div className="w-full md:w-1/2 flex-shrink-0">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={service.image}
                        alt={`${service.title} logo`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className=" text-white">
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