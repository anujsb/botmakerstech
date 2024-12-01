import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "../ui/background-beams"

export function Hero() {
  return (
    <div className="relative min-h-screen bg-soft-gray flex items-center justify-center z-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal-gray mb-8">
          Building India's Future with Robotics
        </h1>
        <p className="text-xl md:text-2xl text-charcoal-gray mb-12 max-w-3xl mx-auto">
          Empowering the next generation through innovative STEM education and robotics programs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-electric-blue hover:bg-vibrant-orange text-white z-50 pointer-events-auto">
            Our Programs
          </Button>
          <Button className="bg-teal-green hover:bg-vibrant-orange text-white z-50 pointer-events-auto">
            Get Involved
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

