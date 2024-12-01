import { Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6">
      <Link href="#" className="text-black/80 hover:text-black transition-colors">
        <Facebook className="w-6 h-6" />
      </Link>
      <Link href="#" className="text-black/80 hover:text-black transition-colors">
        <Twitter className="w-6 h-6" />
      </Link>
      <Link href="#" className="text-black/80 hover:text-black transition-colors">
        <Instagram className="w-6 h-6" />
      </Link>
    </div>
  )
}

