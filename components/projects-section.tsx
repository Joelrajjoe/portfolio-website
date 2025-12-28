"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Sentiment Analysis",
    description:
      "Real-time analysis of social media sentiment using advanced NLP models. Capable of processing thousands of tweets to gauge public opinion on specific topics.",
    tags: ["Python", "NLP", "Scikit-Learn", "Streamlit"],
    image: "/ai-sentiment-analysis-dashboard-with-data-visualiz.jpg",
    github: "https://github.com/Joelrajjoe/CAS13_AIML03.git",
    live: "#",
  },
  {
    title: "VIGO – AI Fitness Tracker",
    description:
      "An intelligent fitness companion that uses computer vision to track workout form and provide real-time corrections and performance analytics.",
    tags: ["MediaPipe", "Python", "OpenCV", "TensorFlow"],
    image: "/ai-fitness-tracking-application-interface-with-ske.jpg",
    github: "https://github.com/Joelrajjoe/VIGO-the-tracker.git",
    live: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 md:px-12 py-10 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase">My Work</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Featured <span className="gradient-text">Impact</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Button
            variant="outline"
            className="rounded-full neon-border group bg-white/50 hover:bg-white/80 transition-all"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="glass border-border/60 overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="rounded-full shadow-lg">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="rounded-full shadow-lg shadow-primary/20">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 flex flex-col flex-grow gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-primary/10 border-primary/30 text-xs font-mono text-primary font-bold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-2xl font-display font-bold group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

                <div className="mt-auto pt-6 flex justify-between items-center">
                  <Button variant="link" className="p-0 text-primary font-bold group-hover:gap-2 transition-all">
                    View Case Study{" "}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
