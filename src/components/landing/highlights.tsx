import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "National Champions",
    description: "Our team won the National Robotics Competition 2023",
    image: "/favicon.ico",
  },
  {
    title: "1000+ Students Trained",
    description:
      "We've empowered over a thousand students with robotics skills",
    image: "/favicon.ico",
  },
  {
    title: "International Recognition",
    description: "Featured in the Global STEM Education Summit 2023",
    image: "/favicon.ico",
  },
];

export function Highlights() {
  return (
    <div className="bg-soft-gray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal-gray mb-12 text-center">
          Our Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index}>
              <Image
                src={highlight.image}
                alt={highlight.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
