"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, FileText, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/Sections/Header";
import Footer from "@/components/Sections/Footer";
import { Header2 } from "@/components/Sections/Header2";

// Define the type for blogs
type Blog = {
  title: string;
  excerpt: string;
  content: JSX.Element;
  date: string;
  image: string;
  category: string;
};

// Define the type for case studies
type CaseStudy = {
  title: string;
  excerpt: string;
  content: JSX.Element;
  results: string[];
  image: string;
};

// Define the type for events
type Event = {
  name: string;
  date: string;
  image: string;
  description: string;
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function InsightsPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(
    null
  );

  const blogs = [
    {
      title: "Why Learning Robotics and AI is Critical for Young Indian Youth",
      excerpt:
        "The rapid advancements in technology have revolutionized how we work, communicate, and live. For Indian youth, especially, the integration of Robotics and Artificial Intelligence (AI). This blog explores why embracing Robotics and AI is essential for India's young generation and how it can empower them for a brighter future.",
      content: (
        <div className="text-justify">
          <p className="text-gray-700 mb-4">
            The rapid advancements in technology have revolutionized how we
            work, communicate, and live. For Indian youth, especially, the
            integration of Robotics and Artificial Intelligence (AI) into
            education offers transformative potential to prepare them for a
            tech-driven future. These fields are no longer futuristic—they are
            reshaping industries and creating opportunities worldwide. This blog
            explores why embracing Robotics and AI is essential for India's
            young generation and how it can empower them for a brighter future.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Understanding the Global Shift
          </h2>
          <p className="text-gray-700 mb-4">
            Robotics and AI are among the fastest-growing domains globally. From
            automating mundane tasks to solving complex problems in medicine,
            finance, and space exploration, these technologies are pivotal in
            creating innovative solutions. According to the U.S. Department of
            Education, AI in education enhances teaching and learning by
            offering personalized experiences, fostering inclusivity, and
            ensuring equitable access to knowledge for all learners. For India,
            leveraging these technologies can help bridge gaps in education and
            skill development, addressing challenges in its vast, diverse
            population.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. India's Unique Opportunity in Robotics and AI
          </h2>
          <p className="text-gray-700 mb-4">
            India's demographic advantage, with its large youth population,
            positions it as a potential global leader in tech innovation. By
            integrating Robotics and AI into education, the country can harness
            this potential to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Create a future-ready workforce:</strong> According to a
              study by the World Economic Forum, 85 million jobs may be
              displaced by automation by 2025, but 97 million new roles will
              emerge, emphasizing the need for skills in AI and robotics.
            </li>
            <li>
              <strong>Foster innovation:</strong> Platforms like Botmakers Pvt.
              Ltd. empower youth to explore cutting-edge technologies like
              drones, IoT, and robotics through hands-on learning. This
              practical approach not only nurtures curiosity but also encourages
              problem-solving and creativity.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Transforming Education through STEM
          </h2>
          <p className="text-gray-700 mb-4">
            STEM (Science, Technology, Engineering, and Mathematics) education,
            integrated with Robotics and AI, promotes critical thinking and
            collaboration. For young students, engaging in projects like
            building robots or programming AI systems shifts learning from rote
            memorization to application-based understanding. This method equips
            students with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Analytical skills:</strong> Solving real-world problems
              using AI fosters analytical thinking.
            </li>
            <li>
              <strong>Collaboration:</strong> Teamwork on robotics projects
              simulates workplace dynamics, preparing students for future roles.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Key Applications of Robotics and AI in India
          </h2>
          <p className="text-gray-700 mb-4">
            Indian youth can explore numerous opportunities by mastering
            Robotics and AI:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Healthcare:</strong> AI-driven diagnostics and
              robotics-assisted surgeries are transforming medical care.
            </li>
            <li>
              <strong>Agriculture:</strong> AI models are enhancing crop yields
              and sustainability.
            </li>
            <li>
              <strong>Education:</strong> AI tools provide adaptive learning
              experiences tailored to individual needs.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Bridging the Urban-Rural Divide
          </h2>
          <p className="text-gray-700 mb-4">
            In India, the urban-rural education divide remains a significant
            challenge. Robotics and AI can democratize education by offering
            scalable, tech-enabled solutions. Initiatives such as AI-driven
            virtual tutors and affordable robotics kits bring quality learning
            resources to underprivileged areas, ensuring inclusivity and equal
            opportunities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Fostering Creativity and Entrepreneurship
          </h2>
          <p className="text-gray-700 mb-4">
            Beyond technical skills, Robotics and AI ignite creativity. Young
            learners can develop innovations like drones for disaster management
            or AI tools for climate monitoring. These projects often inspire
            entrepreneurial ventures, contributing to India's growing startup
            ecosystem.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Challenges and the Way Forward
          </h2>
          <p className="text-gray-700 mb-4">
            While the potential is immense, challenges such as limited
            resources, lack of skilled educators, and regional disparities in
            access to technology remain significant. To overcome these, India
            must:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Invest in teacher training for Robotics and AI.</li>
            <li>
              Promote public-private partnerships to fund tech-based education
              initiatives.
            </li>
            <li>
              Encourage policy reforms for integrating emerging technologies
              into the national curriculum.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Conclusion: Empowering the Next Generation
          </h2>
          <p className="text-gray-700 mb-4">
            Learning Robotics and AI is not just about adapting to technology
            but shaping the future. For Indian youth, this knowledge serves as a
            gateway to global opportunities, fostering innovation, economic
            growth, and societal transformation. Platforms like Botmakers Pvt.
            Ltd. play a pivotal role in making this vision a reality by offering
            engaging, hands-on learning experiences that inspire creativity and
            innovation.
          </p>
          <p className="text-gray-700">
            The time to act is now. By prioritizing Robotics and AI education,
            India can empower its youth to lead in the age of automation,
            ensuring a brighter and more inclusive future.
          </p>
        </div>
      ),
      date: "2024-12-01",
      image: "/blog1.webp",
      category: "Education",
    },
    {
      title: "Bringing Tech Games and Experiences to All",
      excerpt:
        "In an era where technology shapes nearly every aspect of our lives, fostering interest and skills in robotics, AI, and other emerging technologies has never been more crucial. Botmakers Pvt. Ltd. aims to bridge the gap between complex technological concepts and accessible, interactive learning experiences through its unique offerings of tech-based games and educational workshops.",
      content: (
        <div className="text-justify">
          <p className="text-gray-700 text-lg mb-6">
            In an era where technology shapes nearly every aspect of our lives,
            fostering interest and skills in robotics, AI, and other emerging
            technologies has never been more crucial. Botmakers Pvt. Ltd. aims
            to bridge the gap between complex technological concepts and
            accessible, interactive learning experiences through its unique
            offerings of tech-based games and educational workshops. This
            mission resonates deeply with India’s growing need for tech
            education, innovation, and hands-on skill-building.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Engaging and Interactive Learning: A New Frontier
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At the heart of Botmakers’ approach lies a commitment to engagement
            and interactivity. Educational experts have highlighted the
            importance of active learning in increasing student motivation and
            understanding. Studies suggest that integrating gamification into
            education enhances retention and fosters a more profound connection
            with the material. Gamified learning experiences, like those offered
            at Botmakers, can help students tackle real-world challenges in a
            simulated, enjoyable environment, ensuring knowledge is not just
            theoretical but actionable.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Research from education studies underscores that interactive tools
            like robotics, virtual reality, and gamification make complex
            subjects approachable and exciting, particularly for young learners.
            These methodologies create a classroom experience where curiosity
            drives participation, leading to better outcomes compared to passive
            instruction methods.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hands-On Experience: Building Skills for the Future
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Botmakers’ workshops emphasize learning by doing—a method proven to
            deepen understanding and skill mastery. Students engage with real
            equipment, constructing and programming robots, flying drones, or
            creating IoT devices. Such activities move beyond rote memorization,
            enabling participants to visualize and solve practical problems. The
            hands-on approach aligns with global education trends that focus on
            preparing students for the technological demands of future
            workplaces.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Practical, experiential learning has been linked to greater
            engagement and better retention rates. Students not only grasp
            theoretical concepts but also acquire problem-solving and critical
            thinking skills that are essential for innovation. Research from
            education journals highlights that such practices empower learners,
            fostering confidence in tackling TECH challenges.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            A Vision for Inclusion and Innovation
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Botmakers aims to democratize access to advanced technology
            education in India, ensuring learners from diverse backgrounds can
            participate in and benefit from this revolution. Collaborations with
            schools, colleges, and technical fests expand the reach of these
            opportunities, bringing robotics and tech concepts to a broad
            audience. The initiative also helps cultivate a generation of
            thinkers and creators equipped to contribute meaningfully to India’s
            digital transformation.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Tech experience zones and robotic play spaces, such as those hosted
            by Botmakers, provide a unique blend of entertainment and education.
            These platforms are not just about skill-building; they are about
            inspiring a lifelong curiosity for technology. Research on
            game-based learning reveals that when learners perceive education as
            enjoyable, they are more likely to pursue advanced studies and
            careers in related fields.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Global and National Impact
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            By focusing on robotics and tech games, Botmakers aligns with
            international trends emphasizing the integration of digital tools
            into education. Initiatives like adaptive learning and game-based
            approaches are gaining momentum in higher education, driven by their
            proven impact on learning outcomes. For India, where the digital
            divide remains a challenge, Botmakers’ inclusive workshops and
            innovative tools offer a pathway to equip young minds with
            cutting-edge skills.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Studies from government and academic sources also emphasize the need
            to address skill gaps in AI and robotics for national development.
            Platforms like Botmakers are pivotal in equipping India’s youth with
            the knowledge and capabilities to thrive in the Fourth Industrial
            Revolution.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Conclusion: Empowering Through Innovation
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Botmakers Pvt. Ltd. is more than an education provider; it is a
            movement toward creating an engaged, skilled, and innovative
            society. By blending fun with knowledge, hands-on experience with
            conceptual clarity, and inclusivity with innovation, Botmakers is
            charting a path for India’s youth to excel in technology. As the
            demand for tech-savvy professionals rises, initiatives like these
            will play a key role in shaping a future where learning is
            accessible, engaging, and transformative for all.
          </p>
        </div>
      ),
      date: "2024-11-15",
      image: "/blog2.webp",
      category: "Technology",
    },
  ];

  const caseStudies = [
    {
      title: "The Future of Edutainment Why Robo Playzone Are Here to Stay",
      excerpt:
        "India’s march toward becoming a global technology powerhouse faces a critical challenge—a widening skills gap in STEM fields. The solution lies in early and interactive learning environments like Robo Playzone, where young minds can explore robotics, AI, and IoT through hands-on experiences. This approach not only fosters creativity but also equips students with essential skills for the tech-driven future of the Fourth Industrial Revolution. Global examples from Japan, South Korea, the USA, and China reveal how integrating robotics into education has transformed young learners into innovators. Inspired by these success stories, Botmakers Pvt. Ltd. is on a mission to revolutionize STEM learning in India by making robotics education accessible, interactive, and fun. Discover how Robo Playzone is already making an impact, reaching 500+ schools, training 1,000+ teachers, and inspiring 50,000+ students. Read the full case study to learn how India can lead the future of technology through engaging STEM education.",
      content: (
        <div className="text-justify">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 text-justify mt-4">
              The Need of the Hour for India
            </h2>
            <ul className="list-inside list-disc space-y-2 mt-4 text-justify">
              <li>
                <strong>Bridging the Skills Gap:</strong> India faces a
                significant skills gap in STEM fields. Robo Playzone can help
                bridge this gap by providing practical, hands-on exposure to
                advanced technologies like robotics, AI, and IoT.
              </li>
              <li>
                <strong>Inspiring Innovation from a Young Age:</strong> Robotics
                play zones encourage creativity and problem-solving, which are
                vital for a tech-driven future.
              </li>
              <li>
                <strong>Preparing for the Fourth Industrial Revolution:</strong>{" "}
                Introducing young Indians to emerging technologies ensures they
                are ready for automation and AI-powered industries.
              </li>
              <li>
                <strong>Inclusivity in Education:</strong> Robo Playzone can
                democratize access to STEM learning by bringing interactive,
                technology-driven experiences to schools and communities
                nationwide.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 text-justify mt-4">
              Global Success Stories and Lessons for India
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Robo Playzone have already proven successful in countries like
              Japan, South Korea, the USA, and China. Here are some lessons
              India can learn from these global examples:
            </p>
            <ul className="list-inside list-disc space-y-2 mt-4 text-justify">
              <li>
                <strong>Japan:</strong> Integrating robotics into daily life,
                Japan offers Robo Playzone in museums and public spaces to
                introduce people to cutting-edge technology.
              </li>
              <li>
                <strong>South Korea:</strong> South Korea’s government has made
                Robo Playzone a part of their education policies, ensuring that
                STEM education reaches all sectors of society.
              </li>
              <li>
                <strong>The USA:</strong> Science museums and robotics
                initiatives, often supported by government funding, showcase the
                role of institutions in fostering STEM education.
              </li>
              <li>
                <strong>China:</strong> With Robo Playzone in schools and public
                spaces, China has successfully made STEM accessible to millions
                of students across the country.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 text-justify mt-4">
              Botmakers Pvt. Ltd. and Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              At Botmakers Pvt. Ltd., we are committed to revolutionizing
              education in India by blending learning with fun and innovation.
              Our initiatives are designed to inspire curiosity, foster
              creativity, and equip the youth with the skills needed for
              tomorrow's technological world.
            </p>
            <ul className="list-inside list-disc space-y-2 mt-4 text-justify">
              <li>
                <strong>Engaging and Interactive Workshops:</strong> We offer
                activities like drone racing and robot soccer that make learning
                STEM both fun and effective.
              </li>
              <li>
                <strong>Hands-On Learning:</strong> Students get practical
                exposure to real equipment, including robotics kits and IoT
                devices, ensuring they apply their knowledge in real-world
                settings.
              </li>
              <li>
                <strong>Accessibility and Inclusion:</strong> Our mission is to
                make robotics education accessible to all, regardless of
                background, by collaborating with schools and communities across
                India.
              </li>
              <li>
                <strong>Fostering Innovation:</strong> We continuously develop
                new educational kits and robotics games to empower students to
                think creatively and solve real-world challenges.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 text-justify mt-4">
              The Way Forward
            </h2>
            <p className="mt-4 text-lg text-gray-600 text-justify">
              India’s journey toward becoming a global technology leader
              requires a focus on STEM education. Robo Playzone provide an
              engaging, scalable solution to equip the next generation with the
              necessary skills for the future. By making learning fun and
              interactive, these play zones are shaping a generation of
              innovators and creators.
            </p>
          </section>

          <footer className="mt-8 text-gray-600 text-justify">
            <p>
              For more insights into robotics in education, refer to resources
              from the National Science Foundation and case studies on global
              robotics education models.
            </p>
          </footer>
        </div>
      ),
      results: [
        "Reached 500+ schools",
        "Trained 1000+ teachers",
        "Impacted 50,000+ students",
      ],
      image: "/case_study.jpeg",
    },
  ];

  const upcomingEvents = [
    {
      name: "Techfest, IIT Bombay",
      date: "17 to 19 Dec 2024",
      image: "/tf.webp",
      description:
        "Join us at India's largest science and technology festival, featuring cutting-edge robotics demonstrations and competitions.",
    },
    {
      name: "Technovanza – VJTI Mumbai",
      date: "21 to 23 Dec 2024",
      image: "/tn.jpeg",
      description:
        "Experience the future of technology at this premier tech symposium, showcasing the latest in robotics and AI.",
    },
  ];

  return (
    <div className="bg-[#ffffff] text-[#050315] text-justify">
      {/* <Header /> */}
      <Header2 />
      <motion.header
        className="bg-primary text-white py-8 text-center relative overflow-hidden"
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
            alt="Insights header background"
            layout="fill"
            objectFit="cover"
          /> */}
        </motion.div>
        <motion.h1
          className="text-6xl font-bold mb-4 relative z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Insights
        </motion.h1>
        <motion.p
          className="text-2xl relative z-10 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Explore Our Latest Thoughts, Case Studies, and Events in the World of
          Robotics and Technology
        </motion.p>
      </motion.header>

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <Badge className="mb-2" variant="secondary">
                    {blog.category}
                  </Badge>
                  <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {new Date(blog.date).toLocaleDateString()}
                    </p>
                    <Button
                      variant="outline"
                      className="group"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="bg-[#fbdbcb] py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Case Studies</h2>
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="w-full lg:w-1/3 h-64 lg:h-auto object-cover"
                    />
                    <CardContent className="p-6 lg:w-2/3">
                      <h3 className="text-2xl font-semibold mb-2">
                        {study.title}
                      </h3>
                      <p className="text-justify my3-4">
                        {study.excerpt}
                      </p>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc pl-5 mb-4">
                        {study.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                      <Button
                        className="group"
                        onClick={() => setSelectedCaseStudy(study)}
                      >
                        Read Full Case Study
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={event.image}
                  alt={event.name}
                  width={300}
                  height={300}
                  className="w-full h-56 object-contain p-10"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-[#ff6101] font-medium mb-2">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  {/* <Button variant="outline" className="group">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* <motion.section className="bg-[#ff6101] text-white py-16" {...fadeIn}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, case studies,
            and event updates in the world of robotics and technology.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border border-white bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <Button className="bg-white text-[#ff6101] px-6 py-2 rounded-md font-semibold hover:bg-white/90 transition-colors duration-300">
              Subscribe
            </Button>
          </form>
        </div>
      </motion.section> */}

      <Dialog
        open={selectedBlog !== null}
        onOpenChange={(open) => open || setSelectedBlog(null)}
      >
        <DialogContent className="max-w-6xl">
          <DialogHeader>
            <DialogTitle>{selectedBlog?.title || "Blog Details"}</DialogTitle>
            <DialogDescription>
              {selectedBlog?.date
                ? new Date(selectedBlog.date).toLocaleDateString()
                : "No date"}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <Image
              src={selectedBlog?.image || "/favicon.ico"}
              alt={selectedBlog?.title || "Blog Image"}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedBlog?.content}</p>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedCaseStudy}
        onOpenChange={() => setSelectedCaseStudy(null)}
      >
        <DialogContent className="max-w-6xl">
          <DialogHeader>
            <DialogTitle>{selectedCaseStudy?.title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
            <Image
              src={selectedCaseStudy?.image || "/favicon.ico"}
              alt={selectedCaseStudy?.title || "Blog Image"}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedCaseStudy?.content}</p>
            <h4 className="font-semibold mb-2">Key Results:</h4>
            <ul className="list-disc pl-5 mb-4">
              {selectedCaseStudy?.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </ScrollArea>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}
