"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Book, Calendar, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";
import { Header2 } from "@/components/Sections/Header2";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Robotics Games Sale & Rent",
      icon: <ShoppingCart className="w-8 h-8 text-[#ff6101]" />,
      description:
        "Transform your events with cutting-edge interactive technology through our Robotics Games Sales & Rent Services.",
      details: [
        "Permanent tech solutions for venues and events",
        "Flexible rental options for short-term engagements",
        "Unique experiences that blend technology and entertainment",
      ],
      image: "/service1.png",
      benefits: [
        "Engaging Interactive Experiences",
        "Customizable Tech Solutions",
        "Memorable Event Activations",
      ],
    },
    {
      title: "Workshops and Training",
      icon: <Book className="w-8 h-8 text-[#ff6101]" />,
      description:
        "Unleash the potential of emerging technologies through our comprehensive Robotics and Technology Learning Programs.",
      details: [
        "Immersive hands-on workshops for all skill levels",
        "Customized training modules in robotics and programming",
        "Expert-led sessions bridging theory and practical application",
      ],
      image: "/workshop.jpg",
      benefits: [
        "Skill Development",
        "Industry-Relevant Expertise",
        "Future-Ready Learning",
      ],
    },
    {
      title: "Tech Event Planning",
      icon: <Calendar className="w-8 h-8 text-[#ff6101]" />,
      description:
        "Elevate your events with our innovative tech-powered experiences, tailored for diverse audiences and venues.",
      details: [
        "Cutting-edge tech showcases for corporate environments",
        "Interactive exhibits for educational institutions",
        "Customized tech zones for public spaces and private events",
      ],
      image: "/TechEventPlanning.jpeg",
      benefits: [
        "Unique Event Experiences",
        "Technology Engagement",
        "Memorable Interactions",
      ],
    },
    {
      title: "Robotics Competitions",
      icon: <Trophy className="w-8 h-8 text-[#ff6101]" />,
      description:
        "Cultivate innovation and competitive spirit through our inter-college, state-level, and national robotics competitions.",
      details: [
        "Platform for showcasing cutting-edge robotics projects",
        "Networking opportunities for aspiring technologists",
        "Encouraging collaborative learning and innovation",
      ],
      image: "/RoboticsCompetitions.jpeg",
      benefits: [
        "Innovation Showcase",
        "Skill Validation",
        "Community Building",
      ],
    },
  ];

  const upcomingEvents = [
    {
      name: "Techfest, IIT Bombay",
      date: "17 to 19 Dec 2024",
      image: "/techfest.jpg",
      description: "India's largest science and technology festival",
    },
    {
      name: "Technovanza – VJTI Mumbai",
      date: "21 to 23 Dec 2024",
      image: "/technovanza.jpg",
      description: "Annual technical extravaganza of VJTI",
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#050315]">
      <Header2 />
      <motion.header
        className="bg-[#ff6101] text-white py-20 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/logo-black.webp"
            alt="Header background"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 relative z-10 mt-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-2xl relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Transforming Ideas into Technological Realities
        </motion.p>
      </motion.header>

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn} className="group">
              <Card className="bg-[#f5f5f5] border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-4 text-[#ff6101]">
                    {/* {service.icon} */}
                    <span className="text-2xl">{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <motion.div
                    className="mt-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md w-full max-h-72 object-contain"
                    />
                  </motion.div>
                  <p className="text-lg mt-4 flgrowex-">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-[#ff6101]">
                        Key Details
                      </h4>
                      <ul className="list-disc list-inside text-sm space-y-1 text-justify">
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-[#ff6101]">
                        Benefits
                      </h4>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* <motion.section className="bg-[#fbdbcb] py-16" {...fadeIn}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Upcoming Tech Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-none shadow-lg overflow-hidden h-full">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold">{event.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#fbdbcb] text-[#ff6101]"
                      >
                        {event.date}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                    <motion.div
                      className="flex items-center text-[#ff6101] mt-4 hover:underline cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      <motion.section className="bg-[#f5f5f5] py-16" {...fadeIn}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Connect With Us</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your ideas into
            technological breakthrough. Connect with our team and explore the
            possibilities.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                className="bg-[#ff6101] text-white px-10 py-4 rounded-full text-lg font-semibold 
              hover:bg-[#ff6101]/90 transition-colors duration-300 flex items-center gap-3 mx-auto"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
