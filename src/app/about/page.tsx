"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Users,
  Shield,
  Star,
  Lightbulb,
  Globe,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "@/components/Sections/Header";
import { Footer } from "@/components/Sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header2 } from "@/components/Sections/Header2";

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

export default function AboutPage() {
  const values = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description:
        "Constantly developing engaging, hands-on experiences that ignite creativity and curiosity.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusion",
      description:
        "Making technology education accessible across India, from cities to rural areas.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description:
        "Maintaining transparency, accountability, and trust in all our endeavors.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Excellence",
      description:
        "Delivering the highest quality labs, curriculums, and products that inspire and educate.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Curiosity",
      description:
        "Encouraging a mindset of exploration, problem-solving, and lifelong learning.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Vision",
      description:
        "Advancing India's role as a global leader in robotics and technology innovation.",
    },
  ];

  const leaders = [
    {
      name: "Akshay Joshi",
      role: "CEO",
      bio: "Akshay Joshi, a visionary entrepreneur dedicated to advancing robotics through innovation and education. As the founder of BOTMAKERS, Tiltas Systems, and Technobotix, he has over 12 years of expertise in robotics, UAVs, and technology. Akshay also leads Blanka Botz, a nonprofit robotics club inspiring creativity and collaboration among aspiring minds. His journey is a testament to his passion for shaping the future of robotics.",
      image: "/akshay.jpeg",
      linkedin: "https://www.linkedin.com/in/akshay-joshi-1946a171",
    },
    {
      name: "Mohit Chaudhari",
      role: "CFO",
      bio: "Mohit Chaudhari is a dynamic professional with a Bachelor's in Mechanical Engineering and 8+ years of expertise in design engineering, robotics, manufacturing, finance, and international trade. Since starting his robotics journey in 2014, he has excelled, winning national and international championships like FMB and COB. As Director, CFO, and CEO at Botmakers, Technobotix, and Tiltas Systems, he drives innovation and strategic growth. A proud Blanka Botz member, he inspires future roboticists.",
      image: "/mohit.png",
      linkedin: "https://www.linkedin.com/in/mohit-chaudhari-7599a414b",
    },
    {
      name: "Rahul Ishi",
      role: "COO",
      bio: "Rahul, a robotics enthusiast, is passionate about advancing education in robotics, UAVs, embedded systems, and AI through hands-on learning. He empowers students from kindergarten to postgraduates by bridging theory and industry needs. Committed to inclusivity, he ensures access to quality tech education, nurturing future innovators. With 10 years in India’s robotics community, starting in college, he led a robotics club for 4 years, fostering collaboration and inspiring young engineers.",
      image: "/rahulishi.png",
      linkedin: "https://www.linkedin.com/in/rahul-ishi/",
    },
    {
      name: "Piyush N Jha",
      role: "CBO",
      bio: "Piyush N Jha, a passionate leader with 15 years of experience in driving business growth, enhancing operations, and mitigating risks. With a proven track record of leading companies to success, Piyush's last role as VP showcased his ability to align teams with company goals and lead by example. A tech and robotics enthusiast who returned from Europe with deep committed to making a positive impact on his motherland, India.",
      image: "/piyush.jpeg",
      linkedin: "https://www.linkedin.com/in/piyushnjha/?originalSubdomain=in",
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#050315] text-justify">
      <Header2 />
      <motion.header
        className="bg-primary text-white py-20 text-center relative overflow-hidden"
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
          {/* <Image
            src="/logo-black.webp?height=600&width=1600"
            alt="Header background"
            layout="fill"
            objectFit="cover"
          /> */}
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 relative z-10 mt-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          About Us.
        </motion.h1>
        <motion.p
          className="text-2xl relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Making Tomorrow's Innovators
        </motion.p>
      </motion.header>

      <motion.section className="container mx-auto px-4 py-16" {...fadeIn}>
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
        <Card className="bg-[#f5f5f5] border-none shadow-lg overflow-hidden">
          <CardContent className="p-8 flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-6 md:mb-0 md:mr-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/mission.jpg?height=400&width=600"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </motion.div>
            <p className="text-lg leading-relaxed md:w-1/2">
              At Botmakers Pvt. Ltd., we're redefining how people engage with
              technology. Through our Robo Playzone, where fun meets learning,
              and InnoTech Academy's hands-on education, we bring robotics,
              drones, and innovations to life. Our mission is simple: make tech
              accessible, spark curiosity, and empower the next generation of
              leaders in India.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section className="bg-[#fbdbcb] py-16" {...fadeIn}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Purpose</h2>
          <Card className="bg-white border-none shadow-lg overflow-hidden">
            <CardContent className="p-8 flex flex-col md:flex-row-reverse items-center">
              <motion.div
                className="md:w-1/2 mb-6 md:mb-0 md:ml-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/purpose.jpg?height=400&width=600"
                  alt="Our Purpose"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </motion.div>
              <p className="text-lg leading-relaxed md:w-1/2">
                At Botmakers Pvt. Ltd., we spark a passion for technology by
                blending learning with innovation. Our Robo Playzone offer fun,
                hands-on experiences with robotics and drones, while InnoTech
                Academy integrates emerging tech into education, reaching
                learners from KG to PG across urban and rural areas. Committed
                to inclusivity, we empower every student with the tools to shape
                a tech-driven future and thrive in a world where innovation
                knows no bounds.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="bg-[#f5f5f5] border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-[#ff6101]">
                    {value.icon}
                    <span>{value.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-[#f5f5f5] py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="bg-white border-none shadow-lg overflow-hidden h-full pb-4">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 relative">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        // width={300}
                        // height={700}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 rounded-xl border m-2"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">
                          {leader.name}
                        </h3>
                        <div className="flex gap-4">
                          {leader.linkedin && (
                            <Link
                              href={leader.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0077B5] hover:opacity-80 transition-opacity"
                            >
                              <Linkedin className="w-6 h-6" />
                            </Link>
                          )}
                          <Badge
                            variant="secondary"
                            className="mb-4 bg-[#fbdbcb] text-[#ff6101]"
                          >
                            {leader.role}
                          </Badge>
                        </div>
                        <p className="text-sm">{leader.bio}</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
