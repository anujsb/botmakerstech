import { Header2 } from "@/components/Sections/Header2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <div>
      <Header2 />
      <div className="min-h-screen bg-background mt-10">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">
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
              <Card key={index} className="bg-primary text-primary-foreground">
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
    </div>
  );
};

export default page;
