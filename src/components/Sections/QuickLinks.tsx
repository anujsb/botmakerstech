import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const QuickLinks = () => {
  return (
    <section className="w-full my-8 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center justify-center">
          <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-orange-50 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 ">
                <div className="flex flex-col items-start">
                  <div className="mb-4">
                    <Image
                      src="/Robo Playzone Name Logo.png"
                      alt="Robo Playzone logo"
                      width={300}
                      height={300}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 mb-4 text-start ">
                    Robo Playzone is designed to captivate and engage attendees
                    of all ages, from grandchildren to grandparents, with
                    offline, less screen-based entertainment. Our games are
                    developed to be interactive, educational, and entertaining,
                    embodying our tagline: Play, Learn, Innovate.
                  </p>
                  <Button asChild className="text-white ">
                    <Link href="/robo-playzone">Learn More</Link>
                  </Button>
                </div>
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/robo_logo.png"
                      alt="Robo Playzone logo"
                      width={1000}
                      height={300}
                      className=" rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0"></CardFooter>
          </Card>

          <Card className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-orange-50 rounded-2xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 ">
                <div className="flex flex-col items-start">
                  <div className="mb-4 p-2">
                    <h3 className="text-3xl font-bold text-center">InnoTech</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-start ">
                    Workshops are designed to inspire, educate, and entertain.
                    Whether you're a student in school or college, our workshops
                    provide an engaging and hands-on learning experience that
                    blends fun with practical knowledge. Our tagline, 'Play,
                    Learn, Innovate,' captures the essence of what we aim to
                    deliver.
                  </p>
                  <Button asChild className="text-white">
                    <Link href="/innotech-academy">Learn More</Link>
                  </Button>
                </div>
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="relative w-full aspect-square">
                    <Image
                      src="/Change - Inno Tech - Page 1.JPG"
                      alt="InnoTech logo"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0"></CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
