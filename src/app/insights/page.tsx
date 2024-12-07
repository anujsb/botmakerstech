'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, FileText, BookOpen, ChevronRight } from 'lucide-react'
import Image from 'next/image'


// Define the type for blogs
type Blog = {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}

// Define the type for case studies
type CaseStudy = {
  title: string;
  excerpt: string;
  content: string;
  results: string[];
  image: string;
}

// Define the type for events
type Event = {
  name: string;
  date: string;
  image: string;
  description: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function InsightsPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  const blogs = [
    {
      title: "The Future of Robotics in Education",
      excerpt: "Exploring how robotics is revolutionizing the classroom experience and preparing students for the tech-driven future.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-12-01",
      image: "/favicon.ico?height=400&width=600",
      category: "Education"
    },
    {
      title: "5 Ways AI is Transforming the Gaming Industry",
      excerpt: "Dive into the innovative applications of artificial intelligence in modern gaming, from NPCs to procedural generation.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-11-15",
      image: "/favicon.ico?height=400&width=600",
      category: "Technology"
    },
    {
      title: "The Rise of Competitive Robotics",
      excerpt: "How robotics competitions are fostering innovation and teamwork among students worldwide.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-10-30",
      image: "/favicon.ico?height=400&width=600",
      category: "Competitions"
    }
  ]

  const caseStudies = [
    {
      title: "Implementing Robotics Curriculum in Rural Schools",
      excerpt: "How Botmakers Pvt. Ltd. partnered with the state government to bring cutting-edge technology education to underserved areas.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      results: ["Reached 500+ schools", "Trained 1000+ teachers", "Impacted 50,000+ students"],
      image: "/favicon.ico?height=400&width=600"
    },
    {
      title: "Revolutionizing STEM Education in Urban Schools",
      excerpt: "A comprehensive look at our partnership with leading urban schools to integrate advanced robotics into their STEM programs.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      results: ["Increased STEM engagement by 40%", "Improved problem-solving skills", "Prepared students for tech careers"],
      image: "/favicon.ico?height=400&width=600"
    }
  ]

  const upcomingEvents = [
    { 
      name: "Techfest, IIT Bombay", 
      date: "17 to 19 Dec 2024", 
      image: "/favicon.ico?height=300&width=500",
      description: "Join us at India's largest science and technology festival, featuring cutting-edge robotics demonstrations and competitions."
    },
    { 
      name: "Technovanza – VJTI Mumbai", 
      date: "21 to 23 Dec 2024", 
      image: "/favicon.ico?height=300&width=500",
      description: "Experience the future of technology at this premier tech symposium, showcasing the latest in robotics and AI."
    }
  ]

  return (
    <div className="bg-[#ffffff] text-[#050315]">
      <motion.header 
        className="bg-[#ff6101] text-white py-24 text-center relative overflow-hidden"
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
          <Image
            src="/favicon.ico?height=800&width=1600"
            alt="Insights header background"
            layout="fill"
            objectFit="cover"
          />
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
          Explore Our Latest Thoughts, Case Studies, and Events in the World of Robotics and Technology
        </motion.p>
      </motion.header>

      <motion.section 
        className="container mx-auto px-4 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Badge className="mb-2" variant="secondary">{blog.category}</Badge>
                  <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{new Date(blog.date).toLocaleDateString()}</p>
                    <Button variant="outline" className="group" onClick={() => setSelectedBlog(blog)}>
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
                      <h3 className="text-2xl font-semibold mb-2">{study.title}</h3>
                      <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="list-disc pl-5 mb-4">
                        {study.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                      <Button className="group" onClick={() => setSelectedCaseStudy(study)}>
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
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
                  <p className="text-[#ff6101] font-medium mb-2">{event.date}</p>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" className="group">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="bg-[#ff6101] text-white py-16"
        {...fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest insights, case studies, and event updates in the world of robotics and technology.</p>
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
      </motion.section>

      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
          <DialogTitle>{selectedBlog?.title || 'Blog Details'}</DialogTitle>
          <DialogDescription>{selectedBlog?.date ? new Date(selectedBlog.date).toLocaleDateString() : 'No date'}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
          <Image
              src={selectedBlog?.image || '/favicon.ico'}
              alt={selectedBlog?.title || 'Blog Image'}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedBlog?.content}</p>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedCaseStudy} onOpenChange={() => setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCaseStudy?.title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh]">
          <Image
              src={selectedCaseStudy?.image || '/favicon.ico'}
              alt={selectedCaseStudy?.title || 'Blog Image'}
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
    </div>
  )
}

