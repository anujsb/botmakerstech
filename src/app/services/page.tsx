"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Book, Calendar, Trophy } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";

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
      icon: <ShoppingCart className="w-6 h-6" />,
      description:
        "Explore the world of interactive technology with our Robotics Games Sales & Rent Services! Perfect for school events, corporate gatherings, or community celebrations.",
      details: [
        "For Sales: Add a permanent tech-savvy edge to your events or facilities.",
        "For Rent: Enjoy flexibility and variety for short-term events or specific activities.",
        "Turn your events into unforgettable experiences combining technology, engagement, and excitement.",
      ],
      image: "/favicon.ico?height=300&width=400",
    },
    {
      title: "Workshop and Training",
      icon: <Book className="w-6 h-6" />,
      description:
        "Unlock the power of innovation with our Robotics and Technology Workshop & Training programs! Designed for students, educators, and professionals.",
      details: [
        "Workshops: Hands-on sessions introducing robotics, coding, and emerging technologies.",
        "Training Programs: Tailored modules to build expertise in robotics, programming, and advanced technologies.",
        "Empower minds, ignite curiosity, and embrace innovation.",
      ],
      image: "/favicon.ico?height=300&width=400",
    },
    {
      title: "Tech Event Planner",
      icon: <Calendar className="w-6 h-6" />,
      description:
        "Transform your events into extraordinary tech-powered experiences! Suitable for corporate gatherings, school/college festivals, mall activations, or private celebrations.",
      details: [
        "Corporate Events: Impress with cutting-edge tech showcases and interactive displays.",
        "School & College Festivals: Inspire young minds with fun and educational tech exhibits.",
        "Malls & Public Spaces: Drive engagement with unique tech zones and immersive experiences.",
        "Private Events: Elevate celebrations with personalized tech-based entertainment.",
      ],
      image: "/favicon.ico?height=300&width=400",
    },
    {
      title: "Competitions",
      icon: <Trophy className="w-6 h-6" />,
      description:
        "We organize inter-college, state-level, and national robotics competitions.",
      details: [
        "Foster innovation and healthy competition among aspiring roboticists.",
        "Provide a platform for showcasing cutting-edge robotics projects.",
        "Encourage collaboration and knowledge sharing in the field of robotics.",
      ],
      image: "/favicon.ico?height=300&width=400",
    },
  ];

  const upcomingEvents = [
    {
      name: "Techfest, IIT Bombay",
      date: "17 to 19 Dec 2024",
      image: "/favicon.ico?height=200&width=300",
    },
    {
      name: "Technovanza – VJTI Mumbai",
      date: "21 to 23 Dec 2024",
      image: "/favicon.ico?height=200&width=300",
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#050315] text-justify">
      <Header />
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
            src="/favicon.ico?height=600&width=1600"
            alt="Services header background"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 relative z-10"
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
          Empowering Innovation Through Technology
        </motion.p>
      </motion.header>

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-[#f5f5f5] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-[#ff6101] text-3xl">
                    {service.icon}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <p className="mb-4 text-lg">{service.description}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <motion.div
                      className="md:w-1/2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-md w-full h-auto"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="bg-[#fbdbcb] py-16" {...fadeIn}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Upcoming Events and Workshops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-white border-none shadow-lg overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {event.name}
                    </h3>
                    <p className="text-[#ff6101] font-medium">{event.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-[#f5f5f5] py-16" {...fadeIn}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Innovate?</h2>
          <p className="text-xl mb-8">
            Explore our services and take the first step towards a tech-powered
            future.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#ff6101] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ff6101]/90 transition-colors duration-300">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
