import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface WorkshopProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function Workshop({ title, description, imageSrc }: WorkshopProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

