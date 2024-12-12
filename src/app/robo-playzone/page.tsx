"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Header2 } from "@/components/Sections/Header2";
import Footer from "@/components/Sections/Footer";
import { motion } from "framer-motion";
import { Cpu, PartyPopper, Users } from "lucide-react";

const games = [
  {
    title: "Monster Racing",
    content:
      "Experience the thrill of mountain driving with our miniature 4×4 cars. Navigate through challenging obstacles and rugged terrain, simulating the excitement of off-road adventures. This game provides a realistic driving experience that's both fun and exhilarating.",
    image: "/Monster Racing.jpg",
    video: "/Monuntain Race.mp4",
  },
  {
    title: "Rapid Racing",
    content:
      "Feel the adrenaline with our miniature racing cars, designed for high-speed excitement. Compete on a dynamic track and experience the thrill of F1 racing in a compact, controlled environment. It's an exciting way to engage in competitive racing fun.",
    image: "/Rapid Racing.jpg",
    video: "/Rapid Racing.mp4",
  },
  {
    title: "Robo Fight",
    content:
      "Step into the arena with our mini RoboWAR setup. This game replicates the excitement of robot battles in a safe, controlled manner. Participants can enjoy the thrill of robot combat without any harm, making it a unique and engaging experience.",
    image: "/Robo Fight.png",
    video: "/Robo Fight.mp4",
  },
  {
    title: "Quick Flying",
    content:
      "Learn to fly drones through an exciting obstacle course. Our drone racing game offers hands-on experience with drone technology, allowing players to navigate through various hurdles and challenges in the air.",
    image: "/Quick Flying.png",
    video: "/fly.mp4.mp4",
  },
  {
    title: "Goal Masters",
    content:
      "Engage in robotics soccer with our 2v2 or 4v4 setups. Experience the excitement of Rocket League in real life as you control robots to score goals and compete in a high-energy game of soccer.",
    image: "/Goal Masters.jpg",
    video: "/Goal Masters.mp4.mp4",
  },
];

interface EventType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const eventTypes: EventType[] = [
  {
    title: "Technical Events",
    description:
      "Enhance the appeal of your technical event with hands-on robotics experiences. Our games provide a unique opportunity for participants to interact with cutting-edge technology, sparking interest and enthusiasm in STEM fields. The engaging setups and challenges offer a dynamic way to showcase innovation and creativity.",
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    title: "Corporate Events",
    description:
      "Bring a fresh, exciting element to your corporate gatherings. The Robotics Experience Zone fosters team-building and collaboration through interactive games. It's a perfect way to break the ice and create memorable experiences for employees and clients alike.",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Celebrations and Festivals",
    description:
      "Make your celebration or festival stand out with our Robotics Experience Zone. Our games offer a fun and engaging way to entertain guests, making your event unforgettable. Whether it's a family day or a community festival, our zone provides entertainment that appeals to all age groups.",
    icon: <PartyPopper className="h-8 w-8" />,
  },
];

const page = () => {
  return (
    <div>
      <Header2 />
      <motion.header
        className="bg-[#ff6101] text-white py-10 text-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4 relative z-10  flex items-center justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Robo Playzone */}
          <Image
            src="/Robo Playzone Name Logo.png"
            alt="Robo Playzone Name Logo"
            width={600}
            height={300}
            className="rounded-lg object-cover "
          />
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
      <div className="container mx-auto px-4 py-8 text-justify">
        <Tabs
          defaultValue={games[0].title.toLowerCase().replace(/\s+/g, "-")}
          className="mb-8"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-4">
            {games.map((game) => (
              <TabsTrigger
                key={game.title}
                value={game.title.toLowerCase().replace(/\s+/g, "-")}
              >
                {game.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {games.map((game) => (
            <TabsContent
              key={game.title}
              value={game.title.toLowerCase().replace(/\s+/g, "-")}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 h-[500px]">
                    <div className="flex flex-col h-full">
                      <AspectRatio
                        ratio={15 / 9}
                        className="mb-4 flex-shrink-0"
                      >
                        <Image
                          src={game.image}
                          alt={game.title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </AspectRatio>
                      <p className="flex-grow overflow-auto">{game.content}</p>
                    </div>
                    <div className="h-full">
                      <video
                        src={game.video}
                        title={`${game.title} video`}
                        className="w-full h-full rounded-lg object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="max-w-6xl mx-auto px-4 py-8 m-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose the Robo Playzone?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((eventType, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {eventType.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {eventType.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {eventType.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl">Demonstration Robots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-flow-row  md:grid-flow-col gap-4">
              <div>
                <p>
                  In addition to our interactive games, the Robotics Experience
                  Zone features a range of demonstration robots:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-justify">
                  <li>
                    <strong>Leo Robotics Dogs:</strong> A versatile robotic dog
                    showcasing advanced mobility and agility.
                  </li>
                  <li>
                    <strong>Mickey - The Puppy:</strong> A compact, interactive
                    robot dog designed for engaging demonstrations.
                  </li>
                  <li>
                    <strong>VTOL Plane:</strong> A vertical take-off and landing
                    plane demonstrating cutting-edge drone technology.
                  </li>
                  <li>
                    <strong>Agriculture Drone:</strong> An innovative drone used
                    in modern agricultural practices, providing insights into
                    its applications.
                  </li>
                  <li>
                    <strong>Humanoid Robot:</strong> A robot designed to
                    interact with humans, offering demonstrations of advanced
                    robotics technology.
                  </li>
                </ul>
              </div>
              <div className="grid grid-flow-col col-span-2 gap-4">
                <video
                  width="310"
                  height="1000"
                  autoPlay
                  loop
                  muted
                  className="border border-accent rounded-xl shadow-lg shadow-accent "
                >
                  <source
                    src="https://botmakerstech.in/wp-content/uploads/2024/10/unitree.webm"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                {/* <div className="grid grid-flow-col col-span-2 gap-4">
                  <div>
                    <Image
                      src="/demo1.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="border rounded-2xl"
                    />
                    <p className="text-center mt-2">Xgo Mini</p>
                  </div>
                  <div>
                    <Image
                      src="/demo2.png"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="border rounded-2xl"
                    />
                    <p className="text-center mt-2">Xgo Mini</p>
                  </div>
                </div> */}
                <div className="grid grid-flow-row row-span-2 gap-4 max-w-[300px]">
                  <div>
                    <Image
                      src="/Mickey - The Puppy.WEBP"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="border rounded-2xl"
                    />
                    <p className="text-center mt-2">Mickey - The Puppy</p>
                  </div>
                  <div>
                    <Image
                      src="/Humanoid Robot.JPG"
                      width={500}
                      height={500}
                      alt="Picture of the author"
                      className="border rounded-2xl"
                    />
                    <p className="text-center mt-2">Humanoid Robot</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Button className="w-full md:w-auto">Schedule a Demo</Button> */}
          </CardContent>
        </Card>
        {/* <div className="grid md:grid-flow-col sm:grid-flow-row items-center justify-center mt-10 gap-6">
          <video
            width="300"
            height="1000"
            autoPlay
            loop
            muted
            className="border border-accent rounded-xl shadow-lg shadow-accent h-[200px]"
          >
            <source
              src="https://botmakerstech.in/wp-content/uploads/2024/10/unitree.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            width="300"
            height="1000"
            autoPlay
            loop
            muted
            className="border border-accent rounded-xl shadow-lg shadow-accent"
          >
            <source
              src="https://botmakerstech.in/wp-content/uploads/2024/10/robowar.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video
            width="300"
            height="1000"
            autoPlay
            loop
            muted
            className="border border-accent rounded-xl shadow-lg shadow-accent"
          >
            <source
              src="https://botmakerstech.in/wp-content/uploads/2024/10/mountain-rush.webm"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default page;
