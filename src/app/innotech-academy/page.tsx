"use client";
import Footer from "@/components/Sections/Footer";
import { Header2 } from "@/components/Sections/Header2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workshop } from "@/components/workshop";
import { motion } from "framer-motion";

interface WorkshopFeature {
  title: string;
  description: string;
}

const gradeLevels = [
  {
    title: "1st to 4th Grade",
    content:
      "Students start with basic concepts of robotics and STEAM exploration. They engage in interactive lessons and projects that build foundational skills.",
  },
  {
    title: "5th to 7th Grade",
    content:
      "The curriculum advances to more complex robotics concepts and STEAM integration, introducing principles of automation and control.",
  },
  {
    title: "8th and Above",
    content:
      "Students explore advanced robotics engineering principles, including robot design and control systems. They also choose specialized STEAM electives based on their interests.",
  },
];

const benefits = [
  {
    title: "Enhanced Learning Experience",
    description:
      "The lab provides a dynamic learning environment where students can engage with technology in meaningful ways.",
  },
  {
    title: "Competitive Edge",
    description:
      "Schools with a dedicated STEM lab can participate in various competitions and represent their institutions, showcasing their students' talents and innovations.",
  },
  {
    title: "Teacher Training",
    description:
      "We offer training for educators to effectively utilize the lab's resources and integrate them into their teaching practices.",
  },
  {
    title: "Future-Ready Students",
    description:
      "By participating in our STEM programs, students develop skills that are highly valued in the modern job market, preparing them for future opportunities.",
  },
];

const page = () => {
  const workshops = [
    {
      title: "Drone Workshop",
      description:
        "Dive into the exciting world of drones! Our Drone Workshop covers the fundamentals of drone technology, including how drones work, their applications, and hands-on flying experience.",
      imageSrc: "/inno1.jpg",
    },
    {
      title: "Robotics Workshop",
      description:
        "Explore the fascinating realm of robotics! Learn about robot design, programming, and control systems through hands-on projects and experiments.",
      imageSrc: "/workshop.jpg",
    },
    {
      title: "3D Printing Workshop",
      description:
        "Discover the world of additive manufacturing! Learn about 3D printing technologies, design principles, and create your own 3D printed objects.",
      imageSrc: "/inno2.png",
    },
    {
      title: "Electronics Workshop",
      description:
        "Uncover the mysteries of electronic circuits! Learn about components, circuit design, and build your own electronic projects.",
      imageSrc: "/inno3.png",
    },
    {
      title: "IOT Workshop",
      description:
        "Step into the future with the Internet of Things! Learn how to connect devices, collect data, and create smart systems.",
      imageSrc: "/inno4.jpg",
    },
    {
      title: "Arduino Workshop",
      description:
        "Get hands-on with Arduino! Learn programming, electronics, and create interactive projects using this versatile microcontroller platform.",
      imageSrc: "/inno5.png",
    },
  ];
  const features: WorkshopFeature[] = [
    {
      title: "Engaging and Interactive",
      description:
        "Each workshop is designed to be both entertaining and informative, making learning fun and effective.",
    },
    {
      title: "Hands-On Experience",
      description:
        "Students get to work with real equipment and materials, fostering a deeper understanding of the concepts.",
    },
    {
      title: "Skills Development",
      description:
        "Our workshops enhance practical skills, creativity, and problem-solving abilities.",
    },
    {
      title: "Innovative Learning",
      description:
        "We use the latest technology and methods to provide cutting-edge education.",
    },
  ];

  return (
    <div className="text-justify">
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
          {/* <Image
            src="/logo-black.webp"
            alt="Header background"
            layout="fill"
            objectFit="cover"
          /> */}
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-4 relative z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Workshops{" "}
        </motion.h1>
        <motion.p
          className="text-2xl relative z-10 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Unlocking Creativity through Hands-on Learning
        </motion.p>
      </motion.header>
      <div className="container mx-auto px-4 py-8">
        <p className="text-center mb-12 max-w-2xl mx-auto">
          At Botmakers Pvt. Ltd., our workshops are designed to inspire,
          educate, and entertain. Whether you're a student in school or college,
          our workshops provide an engaging and hands-on learning experience
          that blends fun with practical knowledge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <Workshop key={index} {...workshop} />
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose Us?
          </h2>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-accent">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardContent className="prose dark:prose-invert max-w-none">
                <p className="mt-4">
                  Our workshops are ideal for schools and colleges looking to
                  enhance their STEM curriculum. They offer students the
                  opportunity to explore new technologies, develop valuable
                  skills, and gain practical experience that will benefit them
                  in their academic and professional futures.
                </p>
                <p className="mt-4 font-semibold text-center">
                  Join us and experience how learning can be exciting,
                  interactive, and innovative!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-background mt-10">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Transforming Education with RoboSTEAM Innovation Labs
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            At Botmakers Pvt. Ltd., we are dedicated to revolutionizing
            education through our RoboSTEAM Innovation Labs. Our labs are
            designed to make learning more engaging and prepare students for the
            future with hands-on STEAM (Science, Technology, Engineering, Arts,
            and Mathematics) exploration.
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our STEM Lab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Inspiration and Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our labs foster creativity, critical thinking, and
                  problem-solving skills through interactive and hands-on
                  activities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Empowering Future Innovators</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Students gain practical experience and learn to apply their
                  knowledge in real-world scenarios, building a strong
                  foundation for their future careers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Interdisciplinary Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The lab integrates multiple STEAM disciplines, encouraging a
                  holistic approach to education.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Real-World Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Students work on projects that are relevant to current
                  technological advancements, making their learning experience
                  more applicable and exciting.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Curriculum Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                In alignment with the National Education Policy (NEP) 2021, our
                STEM Lab emphasizes the importance of robotics in school
                curriculums. This integration ensures that students are
                well-versed in emerging technologies and equipped with the
                skills needed for the future.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-8 text-center">
            Grade Level Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {gradeLevels.map((level, index) => (
              <Card key={index} className="bg-accent text-primary-foreground">
                <CardHeader>
                  <CardTitle>{level.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{level.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Benefits for Schools and Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mb-4">
                Join Us in Shaping the Future
              </h3>
              <p>
                Our RoboSTEAM Innovation Labs are not just classrooms; they are
                gateways to a world of exploration and discovery. Equip your
                school with cutting-edge technology and inspire your students to
                reach their full potential.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
